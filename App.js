/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Root from "./src/Root";
import { Provider } from "react-redux";
import ConfigureStore from "./src/store/ConfigureStore";
import configureStore from "./src/store/ConfigureStore";

const store = configureStore();

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
}
