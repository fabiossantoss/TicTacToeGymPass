import React, { Component } from 'react';
import { Animated, StyleSheet } from 'react-native';

// import { Container } from './styles';

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ball: {
    width: 50,
    backgroundColor: '#000',
    borderRadius: 25,
  },
});

export default class Ball extends Component {
  constructor(props) {
    super(props);

    this.state = {
      height: new Animated.Value(0),
    };

    Animated.timing(this.state.height, { toValue: 50, duration: 500 }).start();
  }

  render() {
    return (
      <Animated.View style={styles.container}>
        <Animated.View style={[styles.ball, { height: this.state.height }]} />
      </Animated.View>
    );
  }
}
