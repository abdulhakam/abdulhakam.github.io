import { Switch } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../redux/theme/themeSlice";


const ThemeToggle = () => {
   // get theme from store
   const theme = useSelector((state:any) => state.theme);

   // initialize dispatch variable
   const dispatch = useDispatch();

  return (
  <div>
    <Switch
    checkedChildren={"light"}
    unCheckedChildren={"dark"}
    checked={theme.darkTheme}
    onChange={() => dispatch(toggleTheme())}
    />
  </div>
  )
}

export default ThemeToggle;