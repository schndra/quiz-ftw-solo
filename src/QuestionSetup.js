import React from "react";
import { useGlobalContext } from "./context";

const QuestionSetup = () => {
  const { isError, quiz, handleChange, handleSubmit } = useGlobalContext();

  return (
    <main className="max-h-screen flex justify-center items-center">
      <section className="bg-slate-50 rounded-md  my-28 mx-auto w-vw sm:w-fixed  py-4">
        <form className="p-8">
          <h2 className="capitalize text-purple-400 text-4xl mb-10 font-bold">
            quiz
          </h2>
          <div className="mb-7">
            <label
              htmlFor="category"
              className="capitalize block mb-2 text-slate-500 font-medium"
            >
              category
            </label>

            <select
              name="category"
              id="category"
              className="w-full border-none rounded-md py-1 px-2 capitalize"
              value={quiz.category}
              onChange={handleChange}
            >
              <option value="animals">animals</option>
              <option value="sports">sports</option>
              <option value="history">history</option>
              <option value="art">art</option>
              <option value="politics">politics</option>
            </select>
          </div>
          <div className="mb-7">
            <label
              htmlFor="difficulty"
              className="capitalize block mb-2 text-slate-500 font-medium"
            >
              difficulty
            </label>

            <select
              name="difficulty"
              id="difficulty"
              className="w-full border-none rounded-md py-1 px-2 capitalize"
              value={quiz.difficulty}
              onChange={handleChange}
            >
              <option value="easy">easy</option>
              <option value="medium">medium</option>
              <option value="hard">hard</option>
            </select>
          </div>
          <div className="mb-7">
            <label
              htmlFor="amount"
              className="capitalize block mb-2 text-slate-500 font-medium"
            >
              No of questions
            </label>

            <input
              type="number"
              id="amount"
              name="amount"
              value={quiz.amount}
              onChange={handleChange}
              min={1}
              max={50}
              className="w-full border-none rounded-md py-1 px-2"
            />
          </div>
          {isError && (
            <p className="text-red-600 text-center mb-7 ">
              please select correct options
            </p>
          )}
          <button
            type="submit"
            className="w-full py-2 bg-purple-400 capitalize font-bold text-lg rounded-lg  text-slate-900r  hover:bg-purple-300 hover:text-slate-700 "
            onClick={handleSubmit}
          >
            begin
          </button>
        </form>
      </section>
    </main>
  );
};

export default QuestionSetup;
