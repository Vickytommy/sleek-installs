// type ColorScheme = 'light' | 'dark';


// interface Colors {
//   light: ColorScheme;
//   dark: ColorScheme;
//   // Add other color schemes here
// }

const white = "#fff";
const black = "#000";
const primaryLight = "#1C97D8";

export default {
  light: {
    text: black,
    background: white,
    // tint: tintColorLight,
    tabIconDefault: '#ccc',
    // tabIconSelected: tintColorLight,
    
    white: white,
    gray: '#444',
    gray900: '#ddd',
    black: black,
    primary: primaryLight,

    btnPrimaryBg: "#1C97D8",
    btnSecondaryBg: "#016678",
    btnLinkBg: white,

    btnPrimaryText: "#EBF8FF",
    btnLinkText: "#016678"
  },
  dark: {
    text: white,
    gray: '#aaa',
    gray900: '#333',
    background: black,
    primary: primaryLight,
    // tint: tintColorDark,
    tabIconDefault: '#ccc',
    // tabIconSelected: tintColorDark,
  },
};