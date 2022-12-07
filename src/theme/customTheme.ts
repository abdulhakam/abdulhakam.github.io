import {theme} from "antd"

const testTheme = {
  token:{
    colorPrimary:'#dd4444',
    borderRadius:10,
    motionUnit:0.05,
  },
  algorithm: theme.darkAlgorithm,                                  // defaultAlgorithm || darkAlgorithm || compactAlgorithm
}

export default function customTheme(themeName:String = "testTheme"){
  return testTheme
}