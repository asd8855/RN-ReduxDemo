/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux"; // 引入connect函数
import * as counterAction from "./actions/counterAction";

class Root extends Component {
  render() {
    const { count, incrementFn, decrementFn } = this.props;

    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={decrementFn}>
          <Text style={styles.label}>减</Text>
        </TouchableOpacity>
        <Text style={styles.label}>{count}</Text>
        <TouchableOpacity style={styles.button} onPress={incrementFn}>
          <Text style={styles.label}>加</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    flex: 1,
    backgroundColor: "#F5FFFF"
  },
  label: {
    width: 40,
    textAlign: "center"
  },
  button: {
    width: 60,
    height: 20,
    borderWidth: 1,
    borderColor: "lightgray",
    margin: 5,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default connect(
  state => ({
    count: state.counter.count
  }),
  dispatch => ({
    incrementFn: () => dispatch(counterAction.increment()),
    decrementFn: () => dispatch(counterAction.decrement())
  })
)(Root);
