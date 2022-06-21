import React from "react";
import ProgressBar from "../ProgressBar";
import { useDispatch } from "react-redux";
import { setPopinDisplayed } from "../../../store/App";
import "./Header.scss";
import Icon from "../../../Components/Icon";

export default function HeaderContainer({ isLight }: { isLight: boolean }) {
  const dispatch = useDispatch();

  return (
    <>
      <div
        className="headerContainer"
        style={{ backgroundColor: isLight ? "" : "#fffbfa" }}
      >
        <div className="headerContent">
          {isLight ? null : (
            <div className="circle">
              <Icon name="arrow-left" />
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
            <Icon name="cross" />
          </div>
        </div>
        {isLight ? null : <ProgressBar />}
      </div>
    </>
  );
}
