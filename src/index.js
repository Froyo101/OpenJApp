import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';
import './main.css';
import Cards from './Cards.js';
//import Quiz from './Quiz.js';
//import Settings/Preferences from './Settings/Preferences.js'
import {Kanji} from './Kanji.js';
//import {Core} from './Vocab.js';
//import reportWebVitals from './reportWebVitals';

//GENERAL PRINCIPLE TO REMEMBER: Most controlling logic should be raised to the highest level possible to ensure easy implementation of future app controls

//Primary Goals (Rough Roadmap):
//1.0:
  //Cap serving percentages at ~2.5-5% min and ~95-100% max to avoid cards permanently dropping from available pool - DONE!
  //Store stats on client browser - DONE!
//1.x (WE ARE HERE):
  //Add a Core2k/6k (vocab) bank and mode
//2.0:
  //Add a multiple choice quiz mode
//2.x:
  //Pop up settings menu that allows user to personalize experience

//~6.5 weeks to complete this, 1+ week for docs, 1+ weeks for testing

//Misc/Possible Future Features (all x.x unless roadmap revised to include):
  //Add a starring/bookmarking feature and viewing list
  //Allow resetting stats locally?
  //No repeats until set (pool) complete mode?
  //Animate card div so it does 180 degree flips as new info is loaded? (maybe vert when seeing def and horiz when changing cards?)
  //Add time travel? (store ~10 last cards and allow cycling through them at user's convenience, but with flag that prevents extra time from
    //being added)

//Loads or establishes and initializes array of user stats for Kanji objects
var successfulLoad = false;

//Loading and parsing logic
if (localStorage.getItem("KanjiStats")) {
  try {
    var KanjiStats = JSON.parse(localStorage.getItem("KanjiStats"));
    successfulLoad = true;
    console.log("KanjiStats successfully parsed.");
  }
  catch (ex) {
    console.error(ex);
  }
}

//Initialization logic in the event a preexisting stats object can't be fetched
if (!successfulLoad) {
  var KanjiStats = [];
  for (var i = 0; i < 2300; i++) {
    KanjiStats[i] = {
      encountered: false,
      flagged: false,
      easy: 0,
      hard: 0
    };
  }
  console.log("New KanjiStats generated.");
}

//Hold current linguistic elements
var curKanji;
//var curVocab;

//Constants detailing array lengths at startup
const kanjiSetLength = 2300;
//const vocabSetLength = Core.length;

//Algorithm that handles weighted/scaling serving of linguistic elements in Cards mode
//Have a public method called serveContent for both or serveKanji and serveVocab for each individual option?
function serveKanji(poolFloor, poolCeiling) {
  console.log("Floor and ceiling: " + poolFloor + ' ' + poolCeiling);
  
  let min = Math.ceil(poolFloor - 1);
  let max = Math.floor(poolCeiling - 1);
  console.log("Min and max: " + min + ' ' + max);
  
  let testing = true;
  while (testing) {
    curKanji = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log("curKanji " + curKanji);
    console.log("ID " + Kanji[curKanji].ID);

    //Always returns selected element if it's never been seen before
    if (!KanjiStats[curKanji].encountered) {
      return Kanji[curKanji];
    }
    
    //Second pass where difficulty of selected element is considered
    let difference = KanjiStats[curKanji].easy - KanjiStats[curKanji].hard;
    let selectionBar = 0.5 * Math.pow(1.2, difference);

    //Ensures an elements appearance rate won't become either wholly impossible or a certainty with extreme difference values 
    if (difference > 0 && selectionBar > 0.95) {
      selectionBar = 0.95;
    }
    else if (difference < 0 && selectionBar < 0.05) {
      selectionBar = 0.05;
    }

    console.log("Bias: " + selectionBar);

    if (Math.random() > selectionBar) {
      return Kanji[curKanji];
    }
  }
  
  //Log code for testing
  //console.log(curKanji);
}

//Core App, the highest level/most abstracted stateful component that manages all others
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "Cards",
      set: "Kanji",
      element: serveKanji(1, 10),
      //translation: 'Start',
      isFront: true,
      poolSize: kanjiSetLength,
      poolFloor: 1,
      poolCeiling: 25,
    };
  }

  //Adjusts poolCeiling state according to slider value
  handleSliderChange(e) {
    this.setState({
      poolCeiling: e.target.value
    });
  }

  //Flips Cards component for user
  handleCardClick() {
    this.setState({
      isFront: !this.state.isFront
    });
  }

  //Registers element shown as having been Easy according to user and updates stats accordingly
  handleEasyClick() {
    if (!KanjiStats[curKanji].encountered) {
      KanjiStats[curKanji].encountered = true;
    }

    KanjiStats[curKanji].easy++;
    console.log("Easy encounters: " + KanjiStats[curKanji].easy);

    this.setState({
      isFront: true,
      element: serveKanji(this.state.poolFloor, this.state.poolCeiling)
    });
  }

  //Registers element shown as having been Hard according to user and updates stats accordingly
  handleHardClick() {
    if (!KanjiStats[curKanji].encountered) {
      KanjiStats[curKanji].encountered = true;
    }

    KanjiStats[curKanji].hard++;
    console.log("Hard encounters: " + KanjiStats[curKanji].hard);

    this.setState({
      isFront: true,
      element: serveKanji(this.state.poolFloor, this.state.poolCeiling)
    });
  }

  //Saves stats objects using localStorage API
  handleSaveClick() {
    localStorage.setItem("KanjiStats", JSON.stringify(KanjiStats));
  }

  //Resets stats objects to a clean slate
  handleResetClick() {
    for (var i = 0; i < 2300; i++) {
      KanjiStats[i] = {
        encountered: false,
        flagged: false,
        easy: 0,
        hard: 0
      };
    }
  }

  //TODO
  //Displays settings menu at user's request
  handleSettingsClick() {
    //TODO
    return;
  }

  //The meat and potatoes of the application/UI, this renders the study mode selected as well as all misc. controls and settings
  render() {
    //May have to pass down mode if you want to let <Card> handle alternating the rendering for Kanji/Vocab/etc
    if (this.state.mode === "Cards") {
      return (
        <div className="container">
          <div className="header text-center">
            <h2>OpenJApp Flashcards</h2>
          </div>
          <div >
            <p>{this.state.set} in rotation: {this.state.poolCeiling}</p>
            <input id="slider" type="range" min="1" max={this.state.poolSize} value={this.state.poolCeiling} onChange={e => this.handleSliderChange(e)} />
          </div>
          <div className="content">
            <Cards
              set={this.state.set}
              currentElement={this.state.element}
              isFront={this.state.isFront}
              cardClick={() => this.handleCardClick()} 
            />
          </div>
          <div className="container-fluid">
            <AdvancementControls
              easyClick={() => this.handleEasyClick()}
              hardClick={() => this.handleHardClick()}
            />
            <SettingsControl
              saveClick={() => this.handleSaveClick()}
              resetClick={() => this.handleResetClick()}
              settingsClick={() => this.handleSettingsClick()}
            />
          </div>
        </div>
      );
    }
    else if (this.state.mode === "Quiz") {
      return (
        <div className="container">
          <div className="header text-center">
            <h2>OpenJApp Flashcards</h2>
          </div>
          <div >
            <p>{this.state.set} in rotation: {this.state.poolCeiling}</p>
            <input id="slider" type="range" min="1" max={this.state.poolSize} value={this.state.poolCeiling} onChange={e => this.handleSliderChange(e)} />
          </div>
          <div className="content">
            <div>
              <h3>Error: Coming soon!</h3>
            </div>
          </div>
          <div className="container-fluid">
            <SettingsControl
              saveClick={() => this.handleSaveClick()}
              resetClick={() => this.handleResetClick()}
              settingsClick={() => this.handleSettingsClick()}
            />
          </div>
        </div>
      );
    }
    else {
      return (
        <div className="container">
          <div className="header text-center">
            <h1>Error: Unsupported mode selected</h1>
          </div>
        </div>
      );
    }
  }
}

//ALERT: This is currently a prime candidate for refactoring by means of moving to and integrating with Cards
//Provides "Easy" and "Hard" buttons for users to click in Cards mode and establishes their event triggers
function AdvancementControls(props) {
  return (
    <div className="row" align="center">
      <div className="col">
        <Button className="advButton" onClick={props.easyClick}>Easy</Button>
        <Button className="advButton" onClick={props.hardClick}>Hard</Button>
      </div>
    </div>
  );
}

//Provides Settings button for users to click in any mode and establishes its event trigger
function SettingsControl(props) {
  return (
    <div className="row" align="center">
      <div className="col">
        <Button className="settingsButton" onClick={props.saveClick}>Save Stats</Button>
        <Button className="settingsButton" onClick={props.resetClick}>Reset Stats</Button>
        <Button className="settingsButton" variant="outline-secondary" onClick={props.settingsClick}>⚙️</Button>
      </div>
    </div>
  );
}

//Renders application as a whole
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();