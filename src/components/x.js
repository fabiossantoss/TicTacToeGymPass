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
  line: {
    width: 10,
    height: 60,
    backgroundColor: '#000',
    position: 'absolute',
  },
});

export default class X extends Component {
  constructor(props) {
    super(props);

    this.state = {
      line1: new Animated.Value(0),
      line2: new Animated.Value(0),
    };

    Animated.timing(this.state.line1, { toValue: 45, duration: 500 }).start();
    Animated.timing(this.state.line2, { toValue: -45, duration: 500 }).start();
  }

  render() {
    const rotation1 = this.state.line1.interpolate({
      inputRange: [0, 360],
      outputRange: ['0deg', '360deg'],
    });

    const rotation2 = this.state.line2.interpolate({
      inputRange: [0, 360],
      outputRange: ['0deg', '360deg'],
    });

    return (
      <Animated.View style={styles.container}>
        <Animated.View
          style={[styles.line, { transform: [{ perspective: 1000 }, { rotate: rotation1 }] }]}
        />
        <Animated.View
          style={[styles.line, { transform: [{ perspective: 1000 }, { rotate: rotation2 }] }]}
        />
      </Animated.View>
    );
  }
}
