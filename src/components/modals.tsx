/* eslint-disable react/prop-types, react/jsx-no-bind */
import React from "react";
import CwazyButtons from "./CwazyButton";
import imageDispatcher from "../utils/imagedispatcher";

export const LostModal = ({ isShown, closeModal }: any) => {
  if (!isShown) {
    return null;
  }

  return (
    <div className="overlay" onClick={() => closeModal()}>
      <div className="above-all" onClick={(e) => e.stopPropagation()}>
        <p className="modal-text">
          Sorry You Lost Game{" "}
          <span role="img" aria-label="sad-emoji">
            ☹️
          </span>{" "}
          Please Try Again
        </p>
        <CwazyButtons onClick={() => closeModal()} text="Restart ▸" />
      </div>
    </div>
  );
};

export const PrizeModal = ({ isShown, closeModal, prize }: any) => {
  if (!isShown) {
    return null;
  }

  return (
    <div className="overlay" onClick={() => closeModal()}>
      <div className="above-all" onClick={(e) => e.stopPropagation()}>
        <p className="modal-text">
          <span role="img" aria-label="confetti-emoji">
            🎉
          </span>{" "}
          Congratulations you won
        </p>
        <img src={(imageDispatcher as any)[prize]} height="90px" alt="prize" />
        <p>{prize}</p>
        <CwazyButtons onClick={() => closeModal()} text="Continue ▸" />
      </div>
    </div>
  );
};

export const WinAllModal = ({ isShown, closeModal }: any) => {
  if (!isShown) {
    return null;
  }

  return (
    <div className="overlay" onClick={() => closeModal()}>
      <div className="above-all" onClick={(e) => e.stopPropagation()}>
        <p className="modal-text">
          <span role="img" aria-label="confetti-emoji">
            🎉
          </span>{" "}
          Congratulations you won The Game because We ran out of Prizes
        </p>
        <CwazyButtons onClick={() => closeModal()} text="Restart ▸" />
      </div>
    </div>
  );
};
