import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import './main.css';
import Cards from './Cards.js';
import Quiz from './Quiz.js';
//import Settings/Preferences from './Settings/Preferences.js'
import {Kanji} from './Kanji.js'; //(Req. 3.3.1)
import {Vocab} from './Vocab.js'; //(Req. 3.3.2)
//import reportWebVitals from './reportWebVitals';

//GENERAL REACT PRINCIPLE TO REMEMBER: Most controlling logic should be raised to the highest level possible to ensure easy implementation of future app controls

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
  //Pop up settings menu - DONE!

//Misc/Possible Future Features (all x.x unless roadmap revised to include):
  //Add a starring/bookmarking feature and viewing list
  //Allow resetting stats locally?
  //No repeats until set (pool) complete mode?
  //Animate card div so it does 180 degree flips as new info is loaded? (maybe vert when seeing def and horiz when changing cards?)
  //Add time travel? (store ~10 last cards and allow cycling through them at user's convenience, but with flag that prevents extra time from
    //being added)

//(Req. 3.3.3)
//Loads or establishes and initializes array of user stats for Kanji objects
var successfulKanjiLoad = false;

//Kanji set stats loading and parsing logic
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

//(Req. 3.3.4)
//Loads or establishes and initializes array of user stats for Vocab objects
var successfulVocabLoad = false;

//Vocab set stats loading and parsing logic
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

//(Req. 3.3.5)
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

    //Ensures an element's appearance rate won't become either wholly impossible or a certainty with extreme difference values 
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
      quizCount: 0,
      displaySettings: false,
      displayCount: true
    };
  }

  //(Req. 3.4.2)
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

  //(Req. 3.4.2)
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

  //(Req. 3.4.1)
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

  //(Req. 3.4.1)
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

  //(Req. 3.4.3)
  //Adjusts poolCeiling state according to slider value
  handleSliderChange(e) {
    this.setState({
      poolCeiling: e.target.value
    });
  }

  //(Req. 3.1.3)
  //Flips Cards component for user
  handleCardClick() {
    this.setState({
      isFront: !this.state.isFront
    });
  }

  //(Req. 3.1.6)
  //Registers element shown as having been Easy according to user and updates stats accordingly
  handleEasyClick() {
    if (this.state.set === "Kanji") {
      if (!KanjiStats[curElement].encountered) {
        KanjiStats[curElement].encountered = true;
      }
  
      KanjiStats[curElement].easy++;
      console.log("Easy encounters: " + KanjiStats[curElement].easy);
      
      //(Req. 3.1.7)
      //Advances Kanji set, updates card interaction amount
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
      
      //(Req. 3.1.7)
      //Advances Vocab set, updates card interaction amount
      this.setState((prevState) => ({
        isFront: true,
        element: serveContent(Vocab, VocabStats, curElement, this.state.poolFloor, this.state.poolCeiling),
        cardsCount: prevState.cardsCount + 1
      }));
    }
  }

  //(Req. 3.1.6)
  //Registers element shown as having been Hard according to user and updates stats accordingly
  handleHardClick() {
    if (this.state.set === "Kanji") {
      if (!KanjiStats[curElement].encountered) {
        KanjiStats[curElement].encountered = true;
      }
  
      KanjiStats[curElement].hard++;
      console.log("Hard encounters: " + KanjiStats[curElement].hard);
      
      //(Req. 3.1.7)
      //Advances Kanji set, updates card interaction amount
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
      
      //(Req. 3.1.7)
      //Advances Vocab set, updates card interaction amount
      this.setState((prevState) => ({
        isFront: true,
        element: serveContent(Vocab, VocabStats, curElement, this.state.poolFloor, this.state.poolCeiling),
        cardsCount: prevState.cardsCount + 1
      }));
    }
  }

  //(Req. 3.2.5, 3.2.6)
  //Handles determining whether an answer is right or wrong in Quiz mode and updates app accordingly
  handleAnswerClick(e) {
    console.log("Answer: " + e.target.textContent);
    console.log("Node Name: " + e.target.nodeName);
    console.log("Current Element: " + this.state.element.character);
    
    if (this.state.set === "Kanji") {
      //Checks answer in Kanji set context, changes answer option styling to green or red
      if (this.state.element.keyWords === e.target.textContent) {
        this.resetQuizStyle();

        if (e.target.nodeName === "P") {
          e.target.parentElement.setAttribute("style", "background-color: green;");
          quizAlteredOptions.push(e.target.parentElement);
        }
        else {
          e.target.setAttribute("style", "background-color: green;");
          quizAlteredOptions.push(e.target);
        }

        setTimeout(this.resetQuizStyle, 500);
      }
      else {
        if (e.target.nodeName === "P") {
          e.target.parentElement.setAttribute("style", "background-color: red;");
          quizAlteredOptions.push(e.target.parentElement);
        }
        else {
          e.target.setAttribute("style", "background-color: red;");
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

      //(Req. 3.2.7)
      //Advances Kanji set, updates quiz question count
      this.setState((prevState) => ({
        quizWrong: false,
        element: serveContent(Kanji, KanjiStats, curElement, this.state.poolFloor, this.state.poolCeiling),
        quizCount: prevState.quizCount + 1
      }));
    }
    else if (this.state.set === "Vocab") {
      //Checks answer in Vocab set context, changes answer option styling to green or red
      if (this.state.element.termTranslation === e.target.textContent) {
        this.resetQuizStyle();

        if (e.target.nodeName === "P") {
          e.target.parentElement.setAttribute("style", "background-color: green;");
          quizAlteredOptions.push(e.target.parentElement);
        }
        else {
          e.target.setAttribute("style", "background-color: green;");
          quizAlteredOptions.push(e.target);
        }

        setTimeout(this.resetQuizStyle, 500);
      }
      else {
        if (e.target.nodeName === "P") {
          e.target.parentElement.setAttribute("style", "background-color: red;");
          quizAlteredOptions.push(e.target.parentElement);
        }
        else {
          e.target.setAttribute("style", "background-color: red;");
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

      //(Req. 3.2.7)
      //Advances Vocab set, updates quiz question count
      this.setState((prevState) => ({
        quizWrong: false,
        element: serveContent(Vocab, VocabStats, curElement, this.state.poolFloor, this.state.poolCeiling),
        quizCount: prevState.quizCount + 1
      }));
    }
  }

  //Resets all quiz option styles to their defaults
  resetQuizStyle() {
    let i;

    for (i = 0; i < quizAlteredOptions.length; i++) {
      quizAlteredOptions[i].setAttribute("style", "background-color: #454545;")
    }

    quizAlteredOptions = [];
  }

  //(Req. 3.4.4)
  //Displays or hides settings menu at user's request
  handleSettingsClick() {
    this.setState((prevState) => ({
      displaySettings: !prevState.displaySettings
    }));
  }

  //(Req. 3.4.5)
  //Saves stats objects using localStorage API
  handleSaveClick() {
    localStorage.setItem("KanjiStats", JSON.stringify(KanjiStats));
    localStorage.setItem("VocabStats", JSON.stringify(VocabStats));
    alert("Stats saved successfully!");
  }

  //(Req. 3.4.6)
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

  //(Req 3.4.7)
  //Takes user to Help/FAQ document
  handleHelpClick() {
    window.open("https://github.com/Froyo101/OpenJApp/blob/main/UserManual.pdf", "_blank");
  }

  //(Req. 3.4.8)
  //Takes user to Github page
  handleContributeClick() {
    window.open("https://github.com/Froyo101/OpenJApp", "_blank");
  }

  //Prevents re-rendering upon selecting an inaccurate answer option in quiz mode
  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.quizWrong === true) {
      return false;
    }

    return true;
  }

  //The meat and potatoes of the application/UI, this renders the study mode selected as well as all misc. controls and settings
  //Within the JSX code, the UI aspects of (Req. 3.4.3), (Req. 3.1.7), and (Req. 3.2.7) are implemented 
  render() {
    if (this.state.mode === "Cards") {
      return (
        <div className="container">
          <TitleBar
            mode={this.state.mode}
            cardsModeClick={() => this.swapCardsMode()}
            quizModeClick={() => this.swapQuizMode()}
          />
          <br></br>
          <div className="container-fluid">
          <SetControl
            set={this.state.set}
            kanjiSetClick={() => this.swapKanjiSet()}
            vocabSetClick={() => this.swapVocabSet()}
          />
          </div>
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
            <Settings
              displaySettings={this.state.displaySettings}
              settingsClick={() => this.handleSettingsClick()}
              saveClick={() => this.handleSaveClick()}
              resetClick={() => this.handleResetClick()}
              helpClick={() => this.handleHelpClick()}
              contributeClick={() => this.handleContributeClick()}
            />
            <p className="text-center">Cards reviewed this session: {this.state.cardsCount}</p>
          </div>
        </div>
      );
    }
    else if (this.state.mode === "Quiz") {
      return (
        <div className="container">
          <TitleBar
            mode={this.state.mode}
            cardsModeClick={() => this.swapCardsMode()}
            quizModeClick={() => this.swapQuizMode()}
          />
          <br></br>
          <div className="container-fluid">
          <SetControl
            set={this.state.set}
            kanjiSetClick={() => this.swapKanjiSet()}
            vocabSetClick={() => this.swapVocabSet()}
          />
          </div>
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
            <Settings
              displaySettings={this.state.displaySettings}
              settingsClick={() => this.handleSettingsClick()}
              saveClick={() => this.handleSaveClick()}
              resetClick={() => this.handleResetClick()}
              helpClick={() => this.handleHelpClick()}
              contributeClick={() => this.handleContributeClick()}
            />
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

//(Req. 3.4.1)
//Displays title bar for app, including the mode selection button group within
function TitleBar(props) {
  return (
    <Navbar bg="titleBar" variant="dark">
      <h3 className="text-center">OpenJApp</h3>
      <div className="btn-group rtl">
        <Button variant={(props.mode === "Cards") ? "primary" : "outline-secondary"} onClick={props.cardsModeClick}>Cards</Button>
        <Button variant={(props.mode === "Quiz") ? "primary" : "outline-secondary"} onClick={props.quizModeClick}>Quiz</Button>
      </div>
    </Navbar>
  );
}

//(Req. 3.4.2)
//Displays set selection button group
function SetControl(props) {
  return (
    <div className="btn-group auto" align="center">
      <Button variant={(props.set === "Kanji") ? "primary" : "outline-secondary"} onClick={props.kanjiSetClick}>Kanji</Button>
      <Button variant={(props.set === "Vocab") ? "primary" : "outline-secondary"} onClick={props.vocabSetClick}>Vocab</Button>
    </div>
  );
}

//(Req. 3.4.4, 3.4.5-8)
//Provides Settings button for users to click and, when pressed, renders the settings menu itself
function Settings(props) {
  if (props.displaySettings) {
    return (
      <div>
        <div className="row" align="center">
          <div className="col">
            <Button variant={(props.displaySettings) ? "primary" : "outline-secondary"} className="settingsButton" onClick={props.settingsClick}>⚙️</Button>
          </div>
        </div>
        <br></br>
        <div className="content settings">
        <div className="row" align="center">
          <div className="col">
            <Button className="settingsButton" onClick={props.saveClick}>Save Stats</Button>
            <Button className="settingsButton" onClick={props.resetClick}>Reset Stats</Button>
          </div>
        </div>
        <div className="row" align="center">
          <div className="col">
            <Button className="settingsButton" onClick={props.helpClick}>Help/FAQ</Button>
          </div>
        </div>
        <div className="row" align="center">
          <div className="col">
            <Button className="settingsButton" onClick={props.contributeClick}>Contribute on GitHub</Button>
          </div>
        </div>
        </div>
        <br></br>
      </div>
    );
  }
  else {
    return (
      <div className="row" align="center">
        <div className="col">
          <Button variant={(props.displaySettings) ? "primary" : "outline-secondary"} className="settingsButton" onClick={props.settingsClick}>⚙️</Button>
        </div>
      </div>
    );
  }
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