import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';
import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';

// card should be its own stateful component
//rest/overarching "site" part should be a stateful component as well
//also, sort out the "master" vs "main" shit as well

//whenever an element comes up and is completed (not skipped), tag it as seen and don't show it until a flush function is called
//(if user has a no repeats until set complete button activated)

//store or generate links to jisho for every element?

//days can just be 2^n: 1 day at 0th recall (first time seeing it), 2 days at 1st recall, 4 days at 2nd, etc.
//users should be able to roll back timer by 1 factor or reset it altogether
//"Easy" option increments timeframe further?
//cap timeframe at 128?

//most controlling logic should be raised to the highest level possible to ensure easy implementation of future app controls

//Animate card div so it does 180 degree flips as new info is loaded? (maybe vert when seeing def and horiz when changing cards?)

//Add time travel? (store ~10 last cards and allow cycling through them at user's convenience, but with flag that prevents extra time from
//being added)

//FIRST REAL COMMIT NOTES FOR NEXT DEV SESSION
//Evaluate DB options - JSON and localStorage, or MySQL on a vps?
//Start thinking about the serving algorithm
//Start thinking about placement of advanced menu
//Integrate Tab component from Bootstrap either above or below OpenJApp header?
//Maybe have Gear icon in upper left corner of flashcard?
//Or perhaps immediately below and in between Adv Buttons
//Add a footer with attribution and licensing info
//List out all Kanji/Vocab object properties that are necessary (and use classes to store everything for each?)
//Add a Tag It! feature/button that adds the current kanji/vocab object and associated stats to a list accessible in a different tab
//Advanced setting: have a radio group for which order to pool Kanji in slidebar (by grade, by N, by RTK, etc)
//GPL v3 noncommercial to allow only you to display ads on mobile?
//Are ads immoral, and say promotion of patreon/yt/blog the more appropriate option?
//Have simple grammar flash cards to instill core concepts?
//Should probably make or get a proj management/goal/flowcharting app like trello to handle all of this if you do get serious
// Bootstrap modals to pop up with advanced settings window?


//Really need to get thinking about readings! Do you want to pass through lists of readings, or just have people go to Jisho?
//Also, this class, while good for testing, may need to be nuked for final version as js or json is used instead
class Kanji {
  constructor(character, translation, on, kun, level) {
    this.character = character;
    this.translation = translation;
    this.on = on;
    this.kun = kun;
    this.level = level;
    //Could exclude last bit and change attribute name to 'jishoSearch' or just 'jisho'
    this.jishoEntry = 'https://jisho.org/search/' + character + '%23kanji';
  }
}

var testKanji = new Kanji('一', 'One', 'イチ', 'ひと', 5);

//Have a public method called serveContent for both or serveKanji and serveVocab for each individual option?

function serveKanji() {
  return testKanji;
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'Kanji',
      element: serveKanji(),
      //translation: 'Start',
      isFront: true
    };
    //this.element = serveContent();
  }

  handleCardClick() {
    this.setState({
      isFront: !this.state.isFront
    });
  }

  handleEasyClick() {
    //TODO
    return;
  }

  handleHardClick() {
    //TODO
    return;
  }

  handleSettingsClick() {
    //TODO
    return;
  }

  render() {
    /*let display = this.state.element;
    if (!this.state.isFront) {
      display = this.state.translation;
    }*/

    //May have to pass down mode if you want to let <Card> handle alternating the rendering for Kanji/Vocab/etc
    return (
      <div className="container">
        <div className="header text-center">
          <h2>OpenJApp Flashcards</h2>
        </div>
        <div className="content">
          <KanjiCard
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
            settingsClick={() => this.handleSettingsClick()}
          />
        </div>
      </div>
    );
  }
}

//Do you need to have this be a stateful, class based component if APP is handling all real logic?
class KanjiCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render () {
    if (this.props.isFront) {
      return (
        <div className="card" onClick={this.props.cardClick}>
          <KanjiFront 
            element={this.props.currentElement}
          />
        </div>
      );
    }
    else {
      return (
        <div className="card" onClick={this.props.cardClick}>
          <KanjiBack 
            element={this.props.currentElement}
          />
        </div>
      );
    }
  }
}

function KanjiFront(props) {
  return (
    <div>
      <h3 className="text-center">{props.element.character}</h3>
    </div>
  );
}

function KanjiBack(props) {
  return (
    <div>
      <h3 className="text-center">{props.element.translation}</h3>
      <hr />
      <h4 className="cardReadings">On Reading: {props.element.on}</h4>
      <h4 className="cardReadings">Kun Reading: {props.element.kun}</h4>
      <hr />
      <p className="text-center"><a href={props.element.jishoEntry} target="_blank">Jisho</a></p>
    </div>
  );
}

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

function SettingsControl(props) {
  return (
    <div className="row" align="center">
      <div className="col">
        <Button className="settingsButton" variant="outline-secondary" onClick={props.settingsClick}>⚙️</Button>
      </div>
    </div>
  );
}

//class BaseControls for going to next card, establishing review timeframes/difficulty levels?
//class ExtendedControls for fine tuning all aspects of app, accessed from a drop down menu, a bar, or a button?

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
