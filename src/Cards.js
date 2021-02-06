import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';

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
        <div className="card" onClick={this.props.cardClick}>
          <KanjiFront 
            element={this.props.currentElement}
          />
        </div>
      );
    }
    else if (this.props.set === "Kanji" && !(this.props.isFront)) {
      return (
        <div className="card" onClick={this.props.cardClick}>
          <KanjiBack 
            element={this.props.currentElement}
          />
        </div>
      );
    }
    else if (this.props.set === "Vocab" && this.props.isFront) {
      return (
        <div className="card" onClick={this.props.cardClick}>
          <VocabFront
            element={this.props.currentElement}
          />
        </div>
      );
    }
    else if (this.props.set === "Vocab" && !(this.props.isFront)) {
      return (
        <div className="card" onClick={this.props.cardClick}>
          <VocabBack 
            element={this.props.currentElement}
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
  
//Displays front of cards generated from the Kanji set
function KanjiFront(props) {
  return (
    <div>
      <h3 className="text-center">{props.element.character}</h3>
    </div>
  );
}

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

//TODO
//Displays front of cards generated from the Vocab set
function VocabFront(props) {
  return (
    <div>
      <h3 className="text-center">{/*props.element.term*/}</h3>
    </div>
  );
}

//TODO
//Use <p> or h5 for sentences? Center?
//Displays back of cards generated from the Vocab set
function VocabBack(props) {
  return (
    <div>
      <h3 className="text-center">{/*props.element.reading*/}</h3>
      <h3 className="text-center">{/*props.element.translation*/}</h3>
      <hr />
      <h4 className="cardReadings">Example sentence: {/*props.element.sentence*/}</h4>
      <h4 className="cardReadings">Translation: {/*props.element.sentenceTranslation*/}</h4>
      <hr />
      <p className="text-center"><a href={'https://jisho.org/search/' /*+ props.element.term*/} target="_blank">Jisho</a></p>
    </div>
  );
}

//export {Cards};