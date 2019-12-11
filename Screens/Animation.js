import React from 'react';
import {View, StyleSheet, PanResponder, Animated} from 'react-native';

export default class Animation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pan: new Animated.ValueXY(),
    };
  }

  UNSAFE_componentWillMount() {
    this._onPanResponder = PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([
        null,
        {dx: this.state.pan.x, dy: this.state.pan.y},
      ]),
      onPanResponderRelease: () => {
        Animated.spring(this.state.pan, {
          toValue: {x: 0, y: 0},
        }).start();
      },
    });
  }

  render() {
    return (
      <Container>
        <Animated.View
          style={[
            styles.animateContainer,
            {
              transform: [
                {translateX: this.state.pan.x},
                {translateY: this.state.pan.y},
              ],
            },
          ]}
          {...this._onPanResponder.panHandlers}>
          {/* <Card /> */}
        </Animated.View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  animateContainer: {
    backgroundColor: '#2980b9',
    width: '60%',
    height: '60%',
    borderRadius: 8,
  },
});

const Container = ({children}) => (
  <View style={styles.container}>{children}</View>
);

const Card = () => (
  <View
    style={{
      backgroundColor: 'red',
      width: '60%',
      height: '60%',
      borderRadius: 8,
    }}>
    <View style={{backgroundColor: 'red', width: 10, height: '100%'}}></View>
  </View>
);
