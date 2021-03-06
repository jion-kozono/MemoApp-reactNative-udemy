import React, { Component } from 'react'
import { StyleSheet, View, TextInput } from 'react-native';
import CircleButton from '../elements/CircleButton';


class MemoEditScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.memoEditInput} multiline value="hi"/>
        <CircleButton>+</CircleButton>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  memoEditInput: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 32,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
    fontSize: 16,
  },
})
export default MemoEditScreen