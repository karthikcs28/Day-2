import Quiz from "./Quiz"
import "./index.css"

function App() {
  const questions = [
    {
      question: "What is React?",
      options: [
        "A JavaScript library",
        "A database",
        "An operating system",
        "A programming language"
      ],
      answer: 0
    },
    {
      question: "Which hook is used for state?",
      options: [
        "useEffect",
        "useProps",
        "useState",
        "useRef"
      ],
      answer: 2
    }
  ]

  return (
    <div className="quiz-page">
      <Quiz questions={questions} />
    </div>
  )
}

export default App
