// Write your code here.
import {Component} from 'react'
import './index.css'
import FaqItem from '../FaqItem'

const faqsList = [
  {
    id: 0,
    questionText: 'What is IRC?',
    answerText:
      'IRC is an Industry Ready Certification that represents your readiness for a job with the necessary skills.',
    isAnswerDisplayed: false,
  },
  {
    id: 1,
    questionText: 'What is the medium of instruction?',
    answerText:
      'The courses would be delivered in English and Telugu. The program will be available in more vernacular languages soon.',
    isAnswerDisplayed: false,
  },
  {
    id: 2,
    questionText:
      'Is there an EMI option to pay the fee for CCBP Tech 4.0 Intensive?',
    answerText:
      'Yes, EMI support is available for credit cards. Please select EMI option while making payment for more information.',
    isAnswerDisplayed: false,
  },
  {
    id: 3,
    questionText: 'How will my doubts be cleared? What is the mechanism?',
    answerText:
      'You can ask your doubts in the discussions section and course mentor will answer them. You can also see the doubts asked by other students.',
    isAnswerDisplayed: false,
  },
]

class Faqs extends Component {
  state = {
    updatedFaqsList: faqsList,
  }

  displayOrUndisplayAnswer = id => {
    const {updatedFaqsList} = this.state
    const newFaqList = updatedFaqsList.map(eachObj => {
      if (eachObj.id === id) {
        return {...eachObj, isAnswerDisplayed: !eachObj.isAnswerDisplayed}
      }
      return eachObj
    })
    this.setState({
      updatedFaqsList: newFaqList,
    })
  }

  render() {
    const {updatedFaqsList} = this.state
    return (
      <div className="bg-cont">
        <div className="main-cont">
          <h1 className="heading">FAQs</h1>
          <ul className="list-cont">
            {updatedFaqsList.map(eachObj => (
              <FaqItem
                eachObj={eachObj}
                key={eachObj.id}
                displayOrUndisplayAnswer={this.displayOrUndisplayAnswer}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
