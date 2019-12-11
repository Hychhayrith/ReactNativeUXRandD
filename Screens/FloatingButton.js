import React, {Component} from 'react';
import {
  View,
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

    const translateY = value => ({
      transform: [
        {scale: this.state.animation},
        {
          translateY: this.state.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, value],
          }),
        },
      ],
    });

    return (
      <View>
        <ImageContainer />

        <ButtonContainer
          onPress={this.toggleMenu}
          rotation={rotation}
          translateY={translateY}
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

const ButtonContainer = ({onPress, rotation, translateY}) => (
  <View style={{alignItems: 'center'}}>
    <Button
      imgUri="https://res.cloudinary.com/dd8plasfr/image/upload/v1576023597/RNRandDAppImage/hearts_bqcd6g.png"
      translateY={translateY(-200)}
    />

    <Button
      imgUri="https://res.cloudinary.com/dd8plasfr/image/upload/v1576023597/RNRandDAppImage/thumbs-up-hand-symbol_sdlqer.png"
      translateY={translateY(-140)}
    />

    <Button
      imgUri="https://res.cloudinary.com/dd8plasfr/image/upload/v1576023597/RNRandDAppImage/pin_wu5spb.png"
      translateY={translateY(-80)}
    />

    <Button
      main
      imgUri="https://res.cloudinary.com/dd8plasfr/image/upload/v1576023596/RNRandDAppImage/close_jsh5hr.png"
      rotation={rotation}
      onPress={onPress}
    />
  </View>
);

const Button = ({main, imgUri, rotation, translateY, onPress}) => {
  const buttonStyles = main
    ? [styles.button, rotation]
    : [styles.button, styles.secondary, translateY];

  const iconStyle = main ? {width: 15, height: 15} : {width: 20, height: 20};

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Animated.View style={buttonStyles}>
        <Image
          source={{
            uri: imgUri,
          }}
          style={iconStyle}
        />
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};
