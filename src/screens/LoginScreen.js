import React, { Component } from 'react'
import { StyleSheet, View, TextInput, TouchableHighlight, Text } from 'react-native';


class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>ログインする</Text>
        <TextInput style={styles.input} value="Email" />
        <TextInput style={styles.input} value="Password" />
        <TouchableHighlight style={styles.button} onPress={() => { }}  underlayColor="#c70f76">
          <Text style={styles.buttonTitle}>ログインする</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    padding: 24,
    backgroundColor: "#fff",
  },
  input: {
    backgroundColor: "#eee",
    height: 48,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 8,
  },
  title: {
    fontSize: 28,
    alignSelf: "center",
    marginBottom: 24,
  },
  button: {
    backgroundColor: "#e31676",
    height: 48,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: "70%",
  },
  buttonTitle: {
    color: "#fff",
    fontSize: 18,
  },
})
export default LoginScreen