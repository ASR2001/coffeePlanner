import {Component} from 'react'

import './index.css'

const BLUE_CUP_IMAGE =
  'https://assets.ccbp.in/frontend/react-js/coffee-planner-blue-cup-img.png'
const WHITE_CUP_IMAGE =
  'https://assets.ccbp.in/frontend/react-js/coffee-planner-white-cup-img.png'
class QuestionOption extends Component {
  onClickOption = () => {
    const {optionData, questionType, updateCoffeePlan} = this.props
    const {optionTitle} = optionData
    updateCoffeePlan(questionType, optionTitle)
  }

  render() {
    const {optionData, selectedOption} = this.props
    const {optionTitle, description} = optionData
    const isOptionSelected = selectedOption === optionTitle
    const optionClassName = isOptionSelected
      ? 'option-item selected-option-item'
      : 'option-item'
    const cardTitleClassName = isOptionSelected
      ? 'card-title selected-card-title'
      : 'card-title'
    const coffeeCupUrl = isOptionSelected ? WHITE_CUP_IMAGE : BLUE_CUP_IMAGE
    const cardDescriptionClassName = isOptionSelected
      ? 'card-description selected-card-description'
      : 'card-description'
    return (
      <li className={optionClassName} onClick={this.onClickOption}>
        <div className="card-container">
          <div className="coffee-card-header">
            <h1 className={cardTitleClassName}>{optionTitle}</h1>
            <img className="coffee-cup" alt="cup" src={coffeeCupUrl} />
          </div>
          <p className={cardDescriptionClassName}>{description}</p>
        </div>
      </li>
    )
  }
}

export default QuestionOption
