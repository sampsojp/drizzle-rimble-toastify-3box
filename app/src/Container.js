import React, { Component, } from "react";

import {
  Flex,
  Box,
  ThemeProvider,
  theme
} from "rimble-ui";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.minimal.css";

import Header from "./components/Header";
import ThreeBox from "./components/ThreeBox";
import ActiveAccount from "./components/ActiveAccount";
import JCoin from "./components/JCoin";

const dappTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    primary: 'salmon',
  },
};

export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={dappTheme}>
        <Flex
          px={30}
          flexBasis="auto"
          flexDirection="column"
        >
          <Box>
            <Header />
          </Box>
          <Box>
            <ThreeBox />
          </Box>
          <Box>
            <ActiveAccount />
          </Box>
            <ToastContainer />
          <Box>
            <JCoin />
          </Box>
        </Flex>
      </ThemeProvider>
    )
  }
}
