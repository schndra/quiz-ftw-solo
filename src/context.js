import { data } from "autoprefixer";
import axios from "axios";
import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

const catListNo = {
  politics: 24,
  art: 25,
  animals: 27,
  history: 23,
  sports: 21,
};

const API_URL = "https://opentdb.com/api.php?";
const url = `https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple`;

const AppProvider = ({ children }) => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [index, setIndex] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [correct, setCorrect] = useState(0);
  const [quiz, setQuiz] = useState({
    amount: 10,
    category: "animals",
    difficulty: "easy",
  });

  const fetchQues = async (url) => {
    setIsLoading(true);
    setIsFetching(false);
    try {
      const response = await axios.get(url);
      if (response) {
        const data = response.data.results;
        // console.log(data.results);
        if (data.length > 0) {
          setQuestions(data);
          setIsFetching(false);
          setIsLoading(false);
          setIsError(false);
        } else {
          setIsFetching(true);
          setIsError(true);
        }
      } else {
        setIsFetching(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const nextQuestion = () => {
    setIndex((prev) => {
      const index = prev + 1;
      if (index > questions.length - 1) {
        openModal();
        return 0;
      } else {
        return index;
      }
    });
  };
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIndex(0);
    setIsFetching(true);
    setIsModalOpen(false);
  };

  const checkAnswer = (val) => {
    if (val) {
      setCorrect((prev) => prev + 1);
    }
    nextQuestion();
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setQuiz({ ...quiz, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { amount, category, difficulty } = quiz;
    const newUrl = `${API_URL}amount=${amount}&category=${catListNo[category]}&difficulty=${difficulty}&type=multiple`;

    fetchQues(newUrl);
  };

  return (
    <AppContext.Provider
      value={{
        isError,
        quiz,
        handleChange,
        handleSubmit,
        isFetching,
        isLoading,
        questions,
        correct,
        isModalOpen,
        index,
        nextQuestion,
        checkAnswer,
        closeModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
