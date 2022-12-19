import { Switch } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handledarkMode } from "../../store/actions/darkModeAction";

const ThemeToggle = () => {
  // assigning useDispatch hook of redux to a variable
  const dispatch= useDispatch();
  
  // calling our state from the reduxer using useSelector hook of redux
  const mode = useSelector((state:any) => state.darkMode);

  // destructuring isdarkMode state from mode variable called using useSelector hook of redux
  const { isdarkMode } = mode;

  // function to be fired on onChange method to switch the mode
  function switchDarkMode() {
    isdarkMode
      ? dispatch(handledarkMode(false))
      : dispatch(handledarkMode(true));
  }

  return (
  <div>
    <Switch
    checkedChildren={"light"}
    unCheckedChildren={"dark"}
    checked={isdarkMode}
    onChange={switchDarkMode}
    />
  </div>
  )
}

export default ThemeToggle;