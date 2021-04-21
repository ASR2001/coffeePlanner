import {Component} from 'react'

import QuestionOption from '../QuestionOption'
import './index.css'

class CoffeePlannerQuestion extends Component {
  render() {
    const {questionData, updateCoffeePlan, getSelectedOption} = this.props
    const {questionTitle, optionsData, questionType} = questionData
    const selectedOption = getSelectedOption(questionType)
    return (
      <li className="coffee-planner-question-item">
        <h1 className="question">{questionTitle}</h1>
        <ul className="options-list-container">
          {optionsData.map(questionOption => (
            <QuestionOption
              selectedOption={selectedOption}
              key={questionData.id}
              optionData={questionOption}
              updateCoffeePlan={updateCoffeePlan}
              questionType={questionType}
            />
          ))}
        </ul>
      </li>
    )
  }
}
export default CoffeePlannerQuestion
