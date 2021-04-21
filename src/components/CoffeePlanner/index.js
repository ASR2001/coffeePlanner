import {Component} from 'react'
import CoffeePlannerQuestion from '../CoffeePlannerQuestion'

import './index.css'

class CoffeePlanner extends Component {
  state = {
    selectedCoffeePlan: ['', '', '', '', ''],
    showSummary: false,
  }

  renderHeaderSection = () => (
    <div className="header-section">
      <div className="coffee-planner-details-container">
        <h1 className="heading">Create a Plan</h1>
        <p className="description">
          We offer an assortment of the best artesian coffees from the globe
          delivered fresh to the door create your plan with this
        </p>
      </div>
    </div>
  )

  setShowSummary = value => {
    this.setState({showSummary: value})
  }

  isAllOptionsSelected = () => {
    const {selectedCoffeePlan} = this.state
    return selectedCoffeePlan.every(coffeePlan => coffeePlan !== '')
  }

  renderSummarySection = () => {
    const {selectedCoffeePlan, showSummary} = this.state
    if (showSummary) {
      return (
        <div className="summary-container">
          {this.isAllOptionsSelected() ? (
            <p className="summary">
              “I Drink my coffee as
              <span className="selected-value"> {selectedCoffeePlan[0]}</span>,
              with a
              <span className="selected-value"> {selectedCoffeePlan[1]} </span>
              type of bean.
              <span className="selected-value"> {selectedCoffeePlan[2]} </span>
              ground ala
              <span className="selected-value"> {selectedCoffeePlan[3]}</span>,
              sent to me
              <span className="selected-value"> {selectedCoffeePlan[4]}</span>.”
            </p>
          ) : (
            <p className="summary">
              Kindly select options for all the questions.
            </p>
          )}
        </div>
      )
    }
    return null
  }

  onClickSummary = () => this.setShowSummary(true)

  updateCoffeePlan = (questionType, selectedOption) => {
    const {coffeePlannerData} = this.props
    const {selectedCoffeePlan} = this.state
    const index = coffeePlannerData.findIndex(
      coffeePlan => questionType === coffeePlan.questionType,
    )
    const newSelectedCoffeePlan = [...selectedCoffeePlan]
    newSelectedCoffeePlan[index] = selectedOption
    this.setState({selectedCoffeePlan: [...newSelectedCoffeePlan]})
    this.setShowSummary(false)
  }

  getSelectedOption = questionType => {
    const {coffeePlannerData} = this.props
    const {selectedCoffeePlan} = this.state
    const index = coffeePlannerData.findIndex(
      coffeePlan => questionType === coffeePlan.questionType,
    )
    return selectedCoffeePlan[index]
  }

  renderCoffeePlannerQuestions = () => {
    const {coffeePlannerData} = this.props
    const {selectedCoffeePlan, showSummary} = this.state
    console.log(selectedCoffeePlan, showSummary)
    return (
      <ul className="coffee-planner-questions-list">
        {coffeePlannerData.map(coffeeQuestion => (
          <CoffeePlannerQuestion
            getSelectedOption={this.getSelectedOption}
            key={coffeeQuestion.id}
            questionData={coffeeQuestion}
            updateCoffeePlan={this.updateCoffeePlan}
          />
        ))}
      </ul>
    )
  }

  renderBodySection = () => (
    <div className="coffee-planner-body">
      {this.renderCoffeePlannerQuestions()}
      <div className="button-container">
        <button
          type="button"
          className="create-my-plan-button"
          onClick={this.onClickSummary}
        >
          Create my plan!
        </button>
      </div>
      {this.renderSummarySection()}
    </div>
  )

  render() {
    return (
      <div className="app-container">
        {this.renderHeaderSection()}
        {this.renderBodySection()}
      </div>
    )
  }
}

export default CoffeePlanner
