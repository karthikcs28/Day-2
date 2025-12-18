import { useState } from "react"

function Quiz({ questions }) {
  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState(null)
  const [showAnswer, setShowAnswer] = useState(false)

  const current = questions[index]

  const nextQuestion = () => {
    setSelected(null)
    setShowAnswer(false)
    setIndex(index + 1)
  }

  return (
    <div className="quiz-card">
      <h2 className="quiz-question">{current.question}</h2>

      <ul className="quiz-options">
        {current.options.map((opt, i) => {
          let className = ""

          if (showAnswer) {
            if (i === current.answer) className = "correct"
            else if (i === selected) className = "wrong"
          }

          return (
            <li
              key={i}
              className={className}
              onClick={() => {
                if (!showAnswer) {
                  setSelected(i)
                  setShowAnswer(true)
                }
              }}
            >
              {opt}
            </li>
          )
        })}
      </ul>

      {showAnswer && index < questions.length - 1 && (
        <button className="next-btn" onClick={nextQuestion}>
          Next Question
        </button>
      )}

      {showAnswer && index === questions.length - 1 && (
        <p className="quiz-end">Quiz Completed 🎉</p>
      )}
    </div>
  )
}

export default Quiz
