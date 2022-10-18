import React from "react";
import { useGlobalContext } from "./context";
import Loading from "./Loading";
import Modal from "./Modal";
import QuestionSetup from "./QuestionSetup";
import { FaAngleDoubleRight } from "react-icons/fa";
import { FaCommentAlt } from "react-icons/fa";

function App() {
  const {
    isFetching,
    isLoading,
    questions,
    index,
    correct,
    nextQuestion,
    checkAnswer,
    isModalOpen,
  } = useGlobalContext();
  if (isFetching) {
    return <QuestionSetup />;
  }

  if (isLoading) {
    return <Loading />;
  }
  const { question, correct_answer, incorrect_answers } = questions[index];
  // const answers = [...incorrect_answers, correct_answer];
  let answers = [...incorrect_answers];
  const tempIndex = Math.floor(Math.random() * 4);
  if (tempIndex === 3) {
    answers.push(correct_answer);
  } else {
    answers.push(answers[tempIndex]);
    answers[tempIndex] = correct_answer;
  }

  return (
    <main className="min-h-screen flex justify-center items-center">
      <Modal />
      <section className="w-vw  bg-slate-100 p-11 rounded-md text-right">
        <div className={isModalOpen ? "hidden" : "relative w-full h-8 mb-8"}>
          <FaCommentAlt className="inline  text-lime-300" size="2rem" />
          <p className="  absolute top-0 right-0 mr-1 text-slate-500">
            {correct}/{index}
          </p>
        </div>
        <article>
          <h2
            dangerouslySetInnerHTML={{ __html: question }}
            className="text-center font-bold text-3xl mb-8"
          />
          <div>
            {answers.map((answer, index) => {
              return (
                <button
                  key={index}
                  className="block mb-3 w-full py-2 mx-auto bg-purple-400 text-slate-900 rounded-lg font-normal hover:bg-purple-300 hover:text-slate-700 tracking-wider sm:w-2/4 md:w-2/5 lg:w-3/12"
                  dangerouslySetInnerHTML={{ __html: answer }}
                  onClick={() => checkAnswer(answer === correct_answer)}
                />
              );
            })}
          </div>
        </article>
        <button
          className=" block ml-auto mt-6 w-40 p-1 bg-lime-400 text-slate-900 rounded-lg font-medium hover:bg-lime-300 hover:text-slate-700 tracking-wider   "
          onClick={nextQuestion}
        >
          <FaAngleDoubleRight className="inline mr-4" />
          next question
        </button>
      </section>
    </main>
  );
}

export default App;
