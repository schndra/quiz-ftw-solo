import React from "react";
import { useGlobalContext } from "./context";

const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext();
  return (
    <div
      className={`${
        isModalOpen
          ? "fixed bg-black w-full h-full bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
          : "hidden"
      } `}
    >
      <div className="bg-white w-vw max-w-5xl p-12 text-center rounded-md">
        <h2 className="text-2xl">Wooow!!! you completed</h2>
        <button
          className="mx-auto block mt-9 w-2/4 py-1 capitalize bg-lime-400 text-slate-900 rounded-lg font-medium hover:bg-lime-300 hover:text-slate-700 tracking-wider sm:w-1/5 "
          onClick={closeModal}
        >
          close
        </button>
      </div>
    </div>
  );
};

export default Modal;
