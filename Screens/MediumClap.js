import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Animated} from 'react-native';
import {Image} from 'react-native-elements';

class MediumClap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      claps: [],
    };
  }

  _onClapPressed = () => {
    let {count, claps} = this.state;
    if (count <= 50) {
      count++;
    }

    claps.push(count);
    this.setState({count: count});
  };

  _onClapComplete = clapNum => {
    let {claps} = this.state;
    claps.splice(claps.indexOf(clapNum), 1);

    this.setState({claps: claps});
  };

  _onKeepClapping = () => {
    this.clapTimer = setInterval(() => this._onClapPressed(), 200);
  };

  _onStopClapping = () => {
    if (this.clapTimer) {
      clearInterval(this.clapTimer);
    }
  };

  render() {
    let {claps} = this.state;

    return (
      <View style={styles.container}>
        {claps.map(clapNum => (
          <ClapBubble
            count={clapNum}
            key={clapNum}
            clapComplete={this._onClapComplete}
          />
        ))}

        <TouchableOpacity
          activeOpacity={0.8}
          style={[styles.clapButton]}
          onPressIn={this._onKeepClapping}
          onPressOut={this._onStopClapping}
          onPress={this._onClapPressed}>
          <Image
            source={{
              uri:
                this.state.count > 0
                  ? 'https://res.cloudinary.com/dd8plasfr/image/upload/v1576232189/RNRandDAppImage/clap-hands_1_gnasiz.png'
                  : 'https://res.cloudinary.com/dd8plasfr/image/upload/v1576232189/RNRandDAppImage/clap_1_frd29l.png',
            }}
            style={{width: 25, height: 25}}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

export default MediumClap;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#95a5a6',
  },
  clapButton: {
    width: 50,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 50 / 2,
    position: 'absolute',
    bottom: 20,
    right: 20,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  animatedClap: {
    backgroundColor: '#27ae60',
    elevation: 0,
  },
});

class ClapBubble extends React.Component {
  state = {
    yPosition: new Animated.Value(0),
    opacity: new Animated.Value(0),
  };

  componentDidMount() {
    Animated.parallel([
      Animated.timing(this.state.yPosition, {
        toValue: -100,
        duration: 500,
      }),
      Animated.timing(this.state.opacity, {
        toValue: 1,
        duration: 500,
      }),
    ]).start(() => {
      setTimeout(() => {
        this.props.clapComplete(this.props.count);
      }, 1000);
    });
  }

  render() {
    let {yPosition, opacity} = this.state;

    let animatedStyle = {
      transform: [
        {
          translateY: yPosition,
        },
      ],
      opacity: opacity,
    };

    return (
      <Animated.View
        style={[styles.clapButton, styles.animatedClap, animatedStyle]}>
        <Text>+{this.props.count}</Text>
      </Animated.View>
    );
  }
}
