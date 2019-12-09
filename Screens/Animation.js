import React from 'react';
import {View, StyleSheet} from 'react-native';

export default class Animation extends React.Component {
  render() {
    return <Container />;
  }
}

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

const Container = ({children}) => (
  <View style={styles.container}>{children}</View>
);
