import React from "react";
import ProgressBar from "../ProgressBar";
import { useDispatch } from "react-redux";
import { setPopinDisplayed } from "../../../store/App";
import "./Header.scss";
import Icon from "../../../Components/Icon";
import { RootState } from "../../../store";
import { useSelector } from "react-redux";

export default function HeaderContainer({ isLight }: { isLight: boolean }) {
  const dispatch = useDispatch();
  const { isProgressBarDisplayed } = useSelector(
    (state: RootState) => state.app
  );

  return (
    <>
      <div
        className="headerContainer"
        style={{ backgroundColor: isLight ? "" : "#fffbfa" }}
      >
        <div className="headerContent">
          <div className="logo">
            <Icon name={isLight ? "logo-light" : "logo-purple"} />
          </div>
          <div
            className="circle"
            onClick={() => dispatch(setPopinDisplayed(false))}
          >
            <Icon name="cross" />
          </div>
        </div>
        {isProgressBarDisplayed && <ProgressBar />}
      </div>
    </>
  );
}
