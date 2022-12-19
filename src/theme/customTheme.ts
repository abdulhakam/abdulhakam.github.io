import {theme} from "antd"

const dark = {
  token:{
    colorPrimary:'#dd4444',
    borderRadius:10,
    motionUnit:0.05,
  },
  algorithm: theme.darkAlgorithm,                                  // defaultAlgorithm || darkAlgorithm || compactAlgorithm
}

const light = {
  token:{
    colorPrimary:'#dd4444',
    borderRadius:10,
    motionUnit:0.05,
  },
  algorithm: theme.defaultAlgorithm,                                  // defaultAlgorithm || darkAlgorithm || compactAlgorithm
}

export function lightTheme(themeName:String = "light"){ return light }
export function darkTheme(themeName:String = "dark"){ return dark }