import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import X from './x';
import Ball from './ball';

// import { Container } from './styles';

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    flexDirection: 'row',
  },
  running: {
    height: 70,
    width: 70,
    backgroundColor: '#EEE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  winner: {
    flex: 1,
    backgroundColor: '#0CC',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function components({ PlayerWinner, PlayerRunning }) {
  return (
    <View style={styles.container}>
      <View style={styles.running}>
        <Text>Vez de</Text>
        {PlayerRunning === 'x' && <X />}
        {PlayerRunning === 'ball' && <Ball />}
      </View>
      <View style={styles.winner}>{PlayerWinner && <Text>Ganhador : {PlayerWinner}</Text>}</View>
    </View>
  );
}
