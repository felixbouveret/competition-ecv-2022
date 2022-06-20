import React from "react";
import ProgressBar from "../ProgressBar";
import { useDispatch } from "react-redux";
import { setPopinDisplayed } from "../store/App";
import "./Header.scss";

export default function HeaderContainer({ isLight }: { isLight: boolean }) {
  const dispatch = useDispatch();

  return (
    <>
      <div
        className="headerContainer"
        style={{ backgroundColor: isLight ? "" : "#fffbfa" }}
      >
        {isLight ? null : (
          <div className="circle">
            <img src="/forward.svg" alt="" />
          </div>
        )}
        {isLight ? (
          <img src="/light-logo.svg" alt="" />
        ) : (
          <img src="/purple-logo.svg" alt="" />
        )}
        <div
          className="circle"
          onClick={() => dispatch(setPopinDisplayed(false))}
        >
          <img src="/delete.svg" alt="" />
        </div>
      </div>
      {isLight ? null : <ProgressBar />}
    </>
  );
}
