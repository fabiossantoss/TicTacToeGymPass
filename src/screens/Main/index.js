import React, { Component } from 'react';

import {
  View, SafeAreaView, TouchableHighlight, Button,
} from 'react-native';

import InfoGame from '~/components/infoGame';
import X from '~/components/x';
import Ball from '~/components/ball';

import styles from './styles';

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      PlayerRunning: 'x',
      a1: '',
      a2: '',
      a3: '',
      b1: '',
      b2: '',
      b3: '',
      c1: '',
      c2: '',
      c3: '',
    };
  }

  click(param) {
    const { state } = this;

    if (eval(`state.${param}`) === '') {
      eval(`state.${param} = state.PlayerRunning`);
      if (state.PlayerRunning === 'x') {
        state.PlayerRunning = 'ball';
      } else {
        state.PlayerRunning = 'x';
      }

      this.setState(state);
    }
  }

  reset() {
    const { state } = this;

    state.PlayerRunning = 'x';
    state.a1 = '';
    state.a2 = '';
    state.a3 = '';
    state.b1 = '';
    state.b2 = '';
    state.b3 = '';
    state.c1 = '';
    state.c2 = '';
    state.c3 = '';

    this.setState(state);
  }

  render() {
    const {
      a1, a2, a3, b1, b2, b3, c1, c2, c3,
    } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.area}>
          <View style={[styles.verticalArea, { borderLeftWidth: 0 }]}>
            <TouchableHighlight
              onPress={() => this.click('a1')}
              style={[styles.horizontalArea, { borderTopWidth: 0 }]}
            >
              <View>
                {a1 === 'x' && <X />}
                {a1 === 'ball' && <Ball />}
              </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => this.click('a2')} style={styles.horizontalArea}>
              <View>
                {a2 === 'x' && <X />}
                {a2 === 'ball' && <Ball />}
              </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => this.click('a3')} style={styles.horizontalArea}>
              <View>
                {a3 === 'x' && <X />}
                {a3 === 'ball' && <Ball />}
              </View>
            </TouchableHighlight>
          </View>
          <View style={styles.verticalArea}>
            <TouchableHighlight
              onPress={() => this.click('b1')}
              style={[styles.horizontalArea, { borderTopWidth: 0 }]}
            >
              <View>
                {b1 === 'x' && <X />}
                {b1 === 'ball' && <Ball />}
              </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => this.click('b2')} style={styles.horizontalArea}>
              <View>
                {b2 === 'x' && <X />}
                {b2 === 'ball' && <Ball />}
              </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => this.click('b3')} style={styles.horizontalArea}>
              <View>
                {b3 === 'x' && <X />}
                {b3 === 'ball' && <Ball />}
              </View>
            </TouchableHighlight>
          </View>
          <View style={styles.verticalArea}>
            <TouchableHighlight
              onPress={() => this.click('c1')}
              style={[styles.horizontalArea, { borderTopWidth: 0 }]}
            >
              <View>
                {c1 === 'x' && <X />}
                {c1 === 'ball' && <Ball />}
              </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => this.click('c2')} style={styles.horizontalArea}>
              <View>
                {c2 === 'x' && <X />}
                {c2 === 'ball' && <Ball />}
              </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => this.click('c3')} style={styles.horizontalArea}>
              <View>
                {c3 === 'x' && <X />}
                {c3 === 'ball' && <Ball />}
              </View>
            </TouchableHighlight>
          </View>
        </View>
        <InfoGame PlayerRunning={this.state.PlayerRunning} />
        <Button title="reet" onPress={() => this.reset()} />
      </SafeAreaView>
    );
  }
}
