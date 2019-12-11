import React, {Component} from 'react';
import {
  View,
  Text,
  ImageComponent,
  TouchableOpacity,
  Animated,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import {Image} from 'react-native-elements';

export default class FloatingButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: new Animated.Value(0),
    };
  }

  toggleMenu = () => {
    const toValue = this.open ? 0 : 1;

    Animated.spring(this.state.animation, {toValue, friction: 5}).start();

    this.open = !this.open;
  };

  render() {
    let {animation} = this.state;

    const rotation = {
      transform: [
        {
          rotate: animation.interpolate({
            inputRange: [0, 1],
            outputRange: ['45deg', '0deg'],
          }),
        },
      ],
    };

    const pinStyle = {
      transform: [
        {scale: this.state.animation},
        {
          translateY: this.state.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -80],
          }),
        },
      ],
    };

    const likeStyle = {
      transform: [
        {scale: this.state.animation},
        {
          translateY: this.state.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -140],
          }),
        },
      ],
    };

    const heartStyle = {
      transform: [
        {scale: this.state.animation},
        {
          translateY: this.state.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -200],
          }),
        },
      ],
    };

    return (
      <View>
        <ImageContainer />

        <ButtonContainer
          onPress={this.toggleMenu}
          rotation={rotation}
          pinStyle={pinStyle}
          likeStyle={likeStyle}
          heartStyle={heartStyle}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    alignSelf: 'center',
    width: 60,
    height: 60,
    borderRadius: 60 / 2,

    bottom: 50,
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: '#9b59b6',
    shadowColor: '#8e44ad',
    shadowRadius: 10,
    shadowOpacity: 0.4,
    shadowOffset: {height: 10},
  },
  secondary: {
    width: 45,
    height: 45,
    borderRadius: 45 / 2,
    backgroundColor: 'white',
  },
});

const ImageContainer = () => (
  <Image
    source={{
      uri:
        'https://res.cloudinary.com/dd8plasfr/image/upload/v1576023598/RNRandDAppImage/map_xzcwmr.png',
    }}
    style={{width: '100%', height: '100%'}}
  />
);

const ButtonContainer = ({
  onPress,
  rotation,
  pinStyle,
  likeStyle,
  heartStyle,
}) => (
  <View style={{alignItems: 'center'}}>
    <TouchableWithoutFeedback>
      <Animated.View style={[styles.button, styles.secondary, heartStyle]}>
        <Image
          source={{
            uri:
              'https://res.cloudinary.com/dd8plasfr/image/upload/v1576023597/RNRandDAppImage/hearts_bqcd6g.png',
          }}
          style={{width: 20, height: 20}}
        />
      </Animated.View>
    </TouchableWithoutFeedback>

    <TouchableWithoutFeedback>
      <Animated.View style={[styles.button, styles.secondary, likeStyle]}>
        <Image
          source={{
            uri:
              'https://res.cloudinary.com/dd8plasfr/image/upload/v1576023597/RNRandDAppImage/thumbs-up-hand-symbol_sdlqer.png',
          }}
          style={{width: 20, height: 20}}
        />
      </Animated.View>
    </TouchableWithoutFeedback>

    <TouchableWithoutFeedback>
      <Animated.View style={[styles.button, styles.secondary, pinStyle]}>
        <Image
          source={{
            uri:
              'https://res.cloudinary.com/dd8plasfr/image/upload/v1576023597/RNRandDAppImage/pin_wu5spb.png',
          }}
          style={{width: 20, height: 20}}
        />
      </Animated.View>
    </TouchableWithoutFeedback>

    <TouchableWithoutFeedback onPress={onPress}>
      <Animated.View style={[styles.button, rotation]}>
        <Image
          source={{
            uri:
              'https://res.cloudinary.com/dd8plasfr/image/upload/v1576023596/RNRandDAppImage/close_jsh5hr.png',
          }}
          style={{width: 15, height: 15}}
        />
      </Animated.View>
    </TouchableWithoutFeedback>
  </View>
);
