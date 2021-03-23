import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import {Row, Col} from 'react-bootstrap';
import './main.css';
import {Kanji} from './Kanji.js';
import {Vocab} from './Vocab.js';

function serveQuizPrompt(set, currentElement) {
  if (set === "Kanji") {
    return currentElement.character;
  }
  else if (set === "Vocab") {
    return currentElement.term;
  }
}

//Serves extra options for Quiz mode
function serveQuizAnswers(currentSet, currentElement, poolFloor, poolCeiling) {
  let answers = [], unique = false, extraTerms = 3;
  let min = Math.ceil(poolFloor - 1);
  let max = Math.floor(poolCeiling - 1);
  let i, j, k, l;

  if (currentSet === "Kanji") {
    answers.push(currentElement.keyWords);

    while (!unique) {
      for (i = 0; i < extraTerms; i++) {
        answers.push(Kanji[Math.floor(Math.random() * (max - min + 1)) + min].keyWords);
      }

      unique = true;

      for (j = 0; j < answers.length - 1; j++) {
        if (!unique) {
          break;
        }

        for (k = j + 1; k < answers.length; k++) {
          if (answers[j] === answers[k]) {
            unique = false;
            break;
          }
        }
      }

      if (!unique) {
        for (l = 0; l < extraTerms; l++) {
          answers.pop();
        }
      }
    }
  }
  else if (currentSet ==="Vocab") {
    answers.push(currentElement.termTranslation);

    while (!unique) {
      for (i = 0; i < extraTerms; i++) {
        answers.push(Vocab[Math.floor(Math.random() * (max - min + 1)) + min].termTranslation);
      }

      unique = true;

      for (j = 0; j < answers.length - 1; j++) {
        if (!unique) {
          break;
        }

        for (k = j + 1; k < answers.length; k++) {
          if (answers[j] === answers[k]) {
            unique = false;
            break;
          }
        }
      }

      if (!unique) {
        for (l = 0; l < extraTerms; l++) {
          answers.pop();
        }
      }
    }
  }

  //Randomizes answer order
  let m, temp, newIndex;

  for (m = answers.length - 1; m >= 0; m--) {
    newIndex = Math.floor(Math.random() * Math.floor(answers.length));

    temp = answers[m];
    answers[m] = answers[newIndex];
    answers[newIndex] = temp;
  }

  return answers;
}

export default class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  static getDerivedStateFromProps(nextProps) {
    //this.forceUpdate();
    return {
      prompt: serveQuizPrompt(nextProps.set, nextProps.currentElement),
      answers: serveQuizAnswers(nextProps.set, nextProps.currentElement, nextProps.poolFloor, nextProps.poolCeiling)
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.poolCeiling !== this.props.poolCeiling) {
      return false;
    }

    return true;
  }

  render() {
    switch (this.props.numAnswers) {
      case 2:
        //TODO - v2.5
        break;
      case 3:
        //TODO - v2.5
        break;
      case 5:
        //TODO - v2.5
        break;
      case 6:
        //TODO - v2.5
        break;
      default:
        return (
          <div>
            <Row>
              <Prompt 
                prompt={this.state.prompt}
              />
            </Row>
            <Row>
              <Answer
                option={this.state.answers[0]}
                answerClick={this.props.answerClick}
              />
              <Answer
                option={this.state.answers[1]}
                answerClick={this.props.answerClick}
              />
            </Row>
            <Row>
              <Answer
                option={this.state.answers[2]}
                answerClick={this.props.answerClick}
              />
              <Answer
                option={this.state.answers[3]}
                answerClick={this.props.answerClick}
              />
            </Row>
          </div>
        )
    }
  }
}

function Prompt(props) {
  return (
    <div className="prompt">
      <h3 className="text-center">{props.prompt}</h3>
    </div>
  );
}

function Answer(props) {
  return (
    <Col>
      <div className="answer" onClick={props.answerClick}>
        <p className="text-center">{props.option}</p>
      </div>
    </Col>
  );
}