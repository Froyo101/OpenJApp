import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import './main.css';
import Cards from './Cards.js';
import Quiz from './Quiz.js';
//import Settings/Preferences from './Settings/Preferences.js'
import {Kanji} from './Kanji.js';
import {Vocab} from './Vocab.js';
//import reportWebVitals from './reportWebVitals';

//GENERAL PRINCIPLE TO REMEMBER: Most controlling logic should be raised to the highest level possible to ensure easy implementation of future app controls

//Primary Goals (Rough Roadmap):
//1.0:
  //Cap serving percentages at ~2.5-5% min and ~95-100% max to avoid cards permanently dropping from available pool - DONE!
  //Store stats on client browser - DONE!
//1.x:
  //Add a Core2k/6k (vocab) bank and mode - DONE!
//2.0:
  //Add a multiple choice quiz mode - DONE!
  //Change HTML page name! - DONE!
//2.x (WE ARE HERE):
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
var successfulKanjiLoad = false;

//Kanji set loading and parsing logic
if (localStorage.getItem("KanjiStats")) {
  try {
    var KanjiStats = JSON.parse(localStorage.getItem("KanjiStats"));
    successfulKanjiLoad = true;
    console.log("KanjiStats successfully parsed.");
  }
  catch (ex) {
    console.error(ex);
  }
}

//Initialization logic in the event a preexisting stats object can't be fetched
if (!successfulKanjiLoad) {
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

//Loads or establishes and initializes array of user stats for Vocab objects
var successfulVocabLoad = false;

//Kanji set loading and parsing logic
if (localStorage.getItem("VocabStats")) {
  try {
    var VocabStats = JSON.parse(localStorage.getItem("VocabStats"));
    successfulVocabLoad = true;
    console.log("VocabStats successfully parsed.");
  }
  catch (ex) {
    console.error(ex);
  }
}

//Initialization logic in the event a preexisting stats object can't be fetched
if (!successfulVocabLoad) {
  var VocabStats = [];
  for (var i = 0; i < 5999; i++) {
    VocabStats[i] = {
      encountered: false,
      flagged: false,
      easy: 0,
      hard: 0
    };
  }
  console.log("New VocabStats generated.");
}

//Hold current linguistic element's index
var curElement = 0;

//Constants detailing array lengths at startup
const kanjiSetLength = Kanji.length;
const vocabSetLength = Vocab.length;

//Keeps track of quiz options with altered style
var quizAlteredOptions = [];

//Algorithm that handles weighted/scaling serving of linguistic elements in Cards mode
function serveContent(set, stats, ogElement, poolFloor, poolCeiling) {
  console.log("Floor and ceiling: " + poolFloor + ' ' + poolCeiling);
  
  let min = Math.ceil(poolFloor - 1);
  let max = Math.floor(poolCeiling - 1);
  console.log("Min and max: " + min + ' ' + max);
  
  let testing = true;
  let newElement;
  while (testing) {
    newElement = Math.floor(Math.random() * (max - min + 1)) + min;

    if (newElement != ogElement) {
      console.log("New element picked, " + newElement + " vs. " + ogElement);
      curElement = newElement;
    }
    else {
      console.log("Continue reached");
      continue;
    }

    console.log("curElement " + curElement);
    console.log("Item " + set[curElement]);

    //Always returns selected element if it's never been seen before
    if (!stats[curElement].encountered) {
      testing = false;
      return set[curElement];
    }
    
    //Second pass where difficulty of selected element is considered
    let difference = stats[curElement].easy - stats[curElement].hard;
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
      testing = false;
      return set[curElement];
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
      element: serveContent(Kanji, KanjiStats, curElement, 1, 10),
      isFront: true,
      quizWrong: false,
      poolSize: kanjiSetLength,
      poolFloor: 1,
      poolCeiling: 25,
      cardsCount: 0,
      quizCount: 0
    };
  }

  //Swaps study set to Kanji
  swapKanjiSet() {
    this.setState({
      set: "Kanji",
      element: serveContent(Kanji, KanjiStats, curElement, 1, 10),
      isFront: true,
      quizWrong: false,
      poolSize: kanjiSetLength,
      poolFloor: 1,
      poolCeiling: 25
    });
  }

  //Swaps study set to Vocab
  swapVocabSet() {
    this.setState({
      set: "Vocab",
      element: serveContent(Vocab, VocabStats, curElement, 1, 10),
      isFront: true,
      quizWrong: false,
      poolSize: vocabSetLength,
      poolFloor: 1,
      poolCeiling: 25
    });
  }

  //Swaps study mode to Cards
  swapCardsMode() {
    if (this.state.set === "Kanji") {
      this.setState({
        mode: "Cards",
        element: serveContent(Kanji, KanjiStats, curElement, 1, 10),
        isFront: true,
        quizWrong: false,
        poolSize: kanjiSetLength,
        poolFloor: 1,
        poolCeiling: 25
      });
    }
    else if (this.state.set === "Vocab") {
      this.setState({
        mode: "Cards",
        element: serveContent(Vocab, VocabStats, curElement, 1, 10),
        isFront: true,
        quizWrong: false,
        poolSize: vocabSetLength,
        poolFloor: 1,
        poolCeiling: 25
      });
    }
  }

  //Swaps study mode to Quiz
  swapQuizMode() {
    if (this.state.set === "Kanji") {
      this.setState({
        mode: "Quiz",
        element: serveContent(Kanji, KanjiStats, curElement, 1, 10),
        isFront: true,
        quizWrong: false,
        poolSize: kanjiSetLength,
        poolFloor: 1,
        poolCeiling: 25
      });
    }
    else if (this.state.set === "Vocab") {
      this.setState({
        mode: "Quiz",
        element: serveContent(Vocab, VocabStats, curElement, 1, 10),
        isFront: true,
        quizWrong: false,
        poolSize: vocabSetLength,
        poolFloor: 1,
        poolCeiling: 25
      });
    }
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
    if (this.state.set === "Kanji") {
      if (!KanjiStats[curElement].encountered) {
        KanjiStats[curElement].encountered = true;
      }
  
      KanjiStats[curElement].easy++;
      console.log("Easy encounters: " + KanjiStats[curElement].easy);
  
      this.setState((prevState) => ({
        isFront: true,
        element: serveContent(Kanji, KanjiStats, curElement, this.state.poolFloor, this.state.poolCeiling),
        cardsCount: prevState.cardsCount + 1
      }));
    }
    else if (this.state.set === "Vocab") {
      if (!VocabStats[curElement].encountered) {
        VocabStats[curElement].encountered = true;
      }
  
      VocabStats[curElement].easy++;
      console.log("Easy encounters: " + VocabStats[curElement].easy);
  
      this.setState((prevState) => ({
        isFront: true,
        element: serveContent(Vocab, VocabStats, curElement, this.state.poolFloor, this.state.poolCeiling),
        cardsCount: prevState.cardsCount + 1
      }));
    }
  }

  //Registers element shown as having been Hard according to user and updates stats accordingly
  handleHardClick() {
    if (this.state.set === "Kanji") {
      if (!KanjiStats[curElement].encountered) {
        KanjiStats[curElement].encountered = true;
      }
  
      KanjiStats[curElement].hard++;
      console.log("Hard encounters: " + KanjiStats[curElement].hard);
  
      this.setState((prevState) => ({
        isFront: true,
        element: serveContent(Kanji, KanjiStats, curElement, this.state.poolFloor, this.state.poolCeiling),
        cardsCount: prevState.cardsCount + 1
      }));
    }
    else if (this.state.set === "Vocab") {
      if (!VocabStats[curElement].encountered) {
        VocabStats[curElement].encountered = true;
      }
  
      VocabStats[curElement].hard++;
      console.log("Hard encounters: " + VocabStats[curElement].hard);
  
      this.setState((prevState) => ({
        isFront: true,
        element: serveContent(Vocab, VocabStats, curElement, this.state.poolFloor, this.state.poolCeiling),
        cardsCount: prevState.cardsCount + 1
      }));
    }
  }

  handleAnswerClick(e) {
    console.log("Answer: " + e.target.textContent);
    console.log("Node Name: " + e.target.nodeName);
    console.log("Current Element: " + this.state.element.character);
    
    if (this.state.set === "Kanji") {
      if (this.state.element.keyWords === e.target.textContent) {
        this.resetQuizStyle();

        if (e.target.nodeName === "P") {
          e.target.parentElement.setAttribute("style", "background-color: green;");
          //e.target.parentElement.setAttribute("style", "animation-name: ; animation-duration: ; animation-fill-mode: ");
          quizAlteredOptions.push(e.target.parentElement);
        }
        else {
          e.target.setAttribute("style", "background-color: green;");
          //e.target.setAttribute("style", "animation-name: ; animation-duration: ; animation-fill-mode: ");
          quizAlteredOptions.push(e.target);
        }

        setTimeout(this.resetQuizStyle, 500);
      }
      else {
        if (e.target.nodeName === "P") {
          e.target.parentElement.setAttribute("style", "background-color: red;");
          //e.target.parentElement.setAttribute("style", "animation-name: ; animation-duration: ; animation-fill-mode: ");
          quizAlteredOptions.push(e.target.parentElement);
        }
        else {
          e.target.setAttribute("style", "background-color: red;");
          //e.target.setAttribute("style", "animation-name: ; animation-duration: ; animation-fill-mode: ");
          quizAlteredOptions.push(e.target);
        }

        this.setState({
          quizWrong: true
        });

        return;
      }
      
      if (!KanjiStats[curElement].encountered) {
        KanjiStats[curElement].encountered = true;
      }

      if (this.state.quizWrong) {
        KanjiStats[curElement].hard++;
        console.log("Hard encounters: " + KanjiStats[curElement].hard);
      }
      else {
        KanjiStats[curElement].easy++;
        console.log("Easy encounters: " + KanjiStats[curElement].easy);
      }

      this.setState((prevState) => ({
        quizWrong: false,
        element: serveContent(Kanji, KanjiStats, curElement, this.state.poolFloor, this.state.poolCeiling),
        quizCount: prevState.quizCount + 1
      }));
    }
    else if (this.state.set === "Vocab") {
      if (this.state.element.termTranslation === e.target.textContent) {
        this.resetQuizStyle();

        if (e.target.nodeName === "P") {
          e.target.parentElement.setAttribute("style", "background-color: green;");
          //e.target.parentElement.setAttribute("style", "animation-name: ; animation-duration: ; animation-fill-mode: ");
          quizAlteredOptions.push(e.target.parentElement);
        }
        else {
          e.target.setAttribute("style", "background-color: green;");
          //e.target.setAttribute("style", "animation-name: ; animation-duration: ; animation-fill-mode: ");
          quizAlteredOptions.push(e.target);
        }

        setTimeout(this.resetQuizStyle, 500);
      }
      else {
        if (e.target.nodeName === "P") {
          e.target.parentElement.setAttribute("style", "background-color: red;");
          //e.target.parentElement.setAttribute("style", "animation-name: ; animation-duration: ; animation-fill-mode: ");
          quizAlteredOptions.push(e.target.parentElement);
        }
        else {
          e.target.setAttribute("style", "background-color: red;");
          //e.target.setAttribute("style", "animation-name: ; animation-duration: ; animation-fill-mode: ");
          quizAlteredOptions.push(e.target);
        }

        this.setState({
          quizWrong: true
        });

        return;
      }
      
      if (!VocabStats[curElement].encountered) {
        VocabStats[curElement].encountered = true;
      }

      if (this.state.quizWrong) {
        VocabStats[curElement].hard++;
        console.log("Hard encounters: " + VocabStats[curElement].hard);
      }
      else {
        VocabStats[curElement].easy++;
        console.log("Easy encounters: " + VocabStats[curElement].easy);
      }

      this.setState((prevState) => ({
        quizWrong: false,
        element: serveContent(Vocab, VocabStats, curElement, this.state.poolFloor, this.state.poolCeiling),
        quizCount: prevState.quizCount + 1
      }));
    }
  }

  resetQuizStyle() {
    let i;

    for (i = 0; i < quizAlteredOptions.length; i++) {
      quizAlteredOptions[i].setAttribute("style", "background-color: #454545;")
    }

    quizAlteredOptions = [];
  }

  //Saves stats objects using localStorage API
  handleSaveClick() {
    localStorage.setItem("KanjiStats", JSON.stringify(KanjiStats));
    localStorage.setItem("VocabStats", JSON.stringify(VocabStats));
    alert("Stats saved successfully!");
  }

  //Resets stats objects to a clean slate
  handleResetClick() {
    for (var i = 0; i < kanjiSetLength; i++) {
      KanjiStats[i] = {
        encountered: false,
        flagged: false,
        easy: 0,
        hard: 0
      };
    }
    for (var i = 0; i < vocabSetLength; i++) {
      VocabStats[i] = {
        encountered: false,
        flagged: false,
        easy: 0,
        hard: 0
      };
    }
    alert("Stats successfully reset.")
  }

  //TODO
  //Displays settings menu at user's request
  handleSettingsClick() {
    //TODO
    alert("This feature is presently not available.");
    return;
  }

  //Alt TitleBar/Mode Menu
  /*
  <h2>OpenJApp Flashcards</h2>
    <div class="btn-group rtl">
      <Button variant="outline-secondary">Kanji</Button>
      <Button>Vocab</Button>
    </div>
  */

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.quizWrong === true) {
      return false;
    }

    return true;
  }

  //The meat and potatoes of the application/UI, this renders the study mode selected as well as all misc. controls and settings
  render() {
    //May have to pass down mode if you want to let <Card> handle alternating the rendering for Kanji/Vocab/etc
    if (this.state.mode === "Cards") {
      return (
        <div className="container">
          <TitleBar
            set={this.state.set}
            mode={this.state.mode}
            kanjiSetClick={() => this.swapKanjiSet()}
            vocabSetClick={() => this.swapVocabSet()}
            cardsModeClick={() => this.swapCardsMode()}
            quizModeClick={() => this.swapQuizMode()}
          />
          <br></br>
          <div>
            <p style={{padding: "10px 0px 3px 10px"}}>{this.state.set} in rotation: {this.state.poolCeiling}</p>
            <input id="slider" type="range" min="10" max={this.state.poolSize} step="5" value={this.state.poolCeiling} onChange={e => this.handleSliderChange(e)} />
          </div>
          <div className="content">
            <Cards
              set={this.state.set}
              currentElement={this.state.element}
              isFront={this.state.isFront}
              cardClick={() => this.handleCardClick()}
              easyClick={() => this.handleEasyClick()}
              hardClick={() => this.handleHardClick()}
            />
          </div>
          <div className="container-fluid">
            <SettingsControl
              saveClick={() => this.handleSaveClick()}
              resetClick={() => this.handleResetClick()}
              settingsClick={() => this.handleSettingsClick()}
            />
            <br></br>
            <p className="text-center">Cards reviewed this session: {this.state.cardsCount}</p>
          </div>
        </div>
      );
    }
    else if (this.state.mode === "Quiz") {
      return (
        <div className="container">
          <TitleBar
            set={this.state.set}
            mode={this.state.mode}
            kanjiSetClick={() => this.swapKanjiSet()}
            vocabSetClick={() => this.swapVocabSet()}
            cardsModeClick={() => this.swapCardsMode()}
            quizModeClick={() => this.swapQuizMode()}
          />
          <br></br>
          <div >
            <p>{this.state.set} in rotation: {this.state.poolCeiling}</p>
            <input id="slider" type="range" min="10" max={this.state.poolSize} step="5" value={this.state.poolCeiling} onChange={e => this.handleSliderChange(e)} />
          </div>
          <div className="content">
            <Quiz
              set={this.state.set} 
              currentElement={this.state.element}
              poolFloor={this.state.poolFloor}
              poolCeiling={this.state.poolCeiling}
              answerClick={e => this.handleAnswerClick(e)}
            />
          </div>
          <div className="container-fluid">
            <SettingsControl
              saveClick={() => this.handleSaveClick()}
              resetClick={() => this.handleResetClick()}
              settingsClick={() => this.handleSettingsClick()}
            />
            <br></br>
            <p className="text-center">Questions reviewed this session: {this.state.quizCount}</p>
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

function TitleBar(props) {
  return (
    <Navbar bg="titleBar" variant="dark">
      <h3 className="text-center">OpenJApp v2.0</h3>
      <div className="btn-group rtl">
        <Button variant={(props.set === "Kanji") ? "primary" : "outline-secondary"} onClick={props.kanjiSetClick}>Kanji</Button>
        <Button variant={(props.set === "Vocab") ? "primary" : "outline-secondary"} onClick={props.vocabSetClick}>Vocab</Button>
      </div>
      <div className="btn-group btnGroupMargin">
        <Button variant={(props.mode === "Cards") ? "primary" : "outline-secondary"} onClick={props.cardsModeClick}>Cards</Button>
        <Button variant={(props.mode === "Quiz") ? "primary" : "outline-secondary"} onClick={props.quizModeClick}>Quiz</Button>
      </div>
    </Navbar>
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