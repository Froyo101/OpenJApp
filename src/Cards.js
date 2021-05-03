import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import Button from 'react-bootstrap/Button';
import './main.css';

//(Req. 3.1)
//Stateful component handling all Card mode logic
export default class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  render () {
    if (this.props.set === "Kanji" && this.props.isFront) {
      return (
        <div>
          <div className="card" onClick={this.props.cardClick}>
            <KanjiFront 
              element={this.props.currentElement}
            />
          </div>
          <AdvancementControls 
            easyClick={this.props.easyClick}
            hardClick={this.props.hardClick}
          />
        </div>
      );
    }
    else if (this.props.set === "Kanji" && !(this.props.isFront)) {
      return (
        <div>
          <div className="card" onClick={this.props.cardClick}>
            <KanjiBack 
              element={this.props.currentElement}
            />
          </div>
          <AdvancementControls 
            easyClick={this.props.easyClick}
            hardClick={this.props.hardClick}
          />
        </div>
      );
    }
    else if (this.props.set === "Vocab" && this.props.isFront) {
      return (
        <div>
          <div className="card" onClick={this.props.cardClick}>
            <VocabFront 
              element={this.props.currentElement}
            />
          </div>
          <AdvancementControls 
            easyClick={this.props.easyClick}
            hardClick={this.props.hardClick}
          />
        </div>
      );
    }
    else if (this.props.set === "Vocab" && !(this.props.isFront)) {
      return (
        <div>
          <div className="card" onClick={this.props.cardClick}>
            <VocabBack 
              element={this.props.currentElement}
            />
          </div>
          <AdvancementControls 
            easyClick={this.props.easyClick}
            hardClick={this.props.hardClick}
          />
        </div>
      );
    }
    else {
      return (
        <div className="card" onClick={this.props.cardClick}>
          <div>
            <h3>Error: Invalid card selection</h3>
          </div>
        </div>
      );
    }
  }
}

//(Req. 3.1.1, 3.1.4)
//Displays front of cards generated from the Kanji set
function KanjiFront(props) {
  return (
    <div>
      <h3 className="text-center">{props.element.character}</h3>
    </div>
  );
}

//(Req. 3.1.2, 3.1.4)
//Displays back of cards generated from the Kanji set
function KanjiBack(props) {
  return (
    <div>
      <h3 className="text-center">{props.element.keyWords}</h3>
      <hr />
      <h4 className="cardReadings">On Reading: {props.element.on}</h4>
      <h4 className="cardReadings">Kun Reading: {props.element.kun}</h4>
      <hr />
      <p className="text-center"><a href={'https://jisho.org/search/' + props.element.character + '%23kanji'} target="_blank">Jisho</a></p>
    </div>
  );
}

//(Req. 3.1.1, 3.1.5)
//Displays front of cards generated from the Vocab set
function VocabFront(props) {
  return (
    <div>
      <h3 className="text-center">{props.element.term}</h3>
    </div>
  );
}

//(Req. 3.1.2, 3.1.5)
//Displays back of cards generated from the Vocab set
//Also uses logic for preventing readings fields identical to the full element fields from being displayed
function VocabBack(props) {
  return (
    <div>
      <h3 className="text-center">{props.element.term}</h3>
      <h4 className="text-center">({(props.element.term === props.element.termReading) ? "N/A" : props.element.termReading})</h4>
      <h3 className="text-center">{props.element.termTranslation}</h3>
      <hr />
      <h4 className="text-center">Example sentence: {props.element.ex}</h4>
      <h5 className="text-center">Reading: ({(props.element.ex === props.element.exReading) ? "N/A" : props.element.exReading})</h5>
      <h4 className="text-center">Translation: {props.element.exTranslation}</h4>
      <hr />
      <p className="text-center"><a href={'https://jisho.org/search/' + props.element.term} target="_blank">Jisho</a></p>
    </div>
  );
}

//(Req. 3.1.6)
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