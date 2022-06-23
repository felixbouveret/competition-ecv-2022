import React from "react";
import ProgressBar from "../ProgressBar";
import { useDispatch } from "react-redux";
import { setPopinDisplayed } from "../../../store/App";
import "./Header.scss";
import Icon from "../../../Components/Icon";
import { RootState } from "../../../store";
import { useSelector } from "react-redux";
import className from "classnames";

export default function HeaderContainer({
  isLight,
  isVideoDisplayed,
  isIntroduction,
}: {
  isLight: boolean;
  isVideoDisplayed: boolean;
  isIntroduction: boolean;
}) {
  const dispatch = useDispatch();
  const { isProgressBarDisplayed } = useSelector(
    (state: RootState) => state.app
  );
  const classes = className({
    headerContainer: true,
    isLight,
    isVideoDisplayed,
    isIntroduction,
  });

  return (
    <>
      <div className={classes}>
        <div className="headerContent">
          <div className="logo">
            <Icon name={isLight ? "logo-light" : "logo-purple"} />
          </div>
          <div
            className="circle"
            onClick={() => dispatch(setPopinDisplayed(false))}
          >
            <Icon name="cross" color="#7A1047" />
          </div>
        </div>
        {isProgressBarDisplayed && <ProgressBar />}
      </div>
    </>
  );
}
