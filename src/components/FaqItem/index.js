// Write your code here.
import './index.css'

const FaqItem = props => {
  const {eachObj, displayOrUndisplayAnswer} = props
  const {id, questionText, answerText, isAnswerDisplayed} = eachObj
  const onClickingBtn = () => {
    displayOrUndisplayAnswer(id)
  }
  return (
    <li className="list-item">
      <div className="question-cont">
        <h1 className="question">{questionText}</h1>
        <button className="buttons" type="button" onClick={onClickingBtn}>
          <img
            src={
              isAnswerDisplayed
                ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png '
                : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
            }
            alt={isAnswerDisplayed ? 'minus' : 'plus'}
            className="images"
          />
        </button>
      </div>
      {isAnswerDisplayed && (
        <div className="answer-cont">
          <p className="answer">{answerText}</p>
        </div>
      )}
    </li>
  )
}

export default FaqItem
