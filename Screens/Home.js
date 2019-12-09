import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {VerticalScroll} from '../Components/HomeScreen';
import {data} from '../Assets/screen';

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <VerticalScroll data={data} navigation={this.props.navigation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

const Header = () => (
  <View style={styles.headerContainer}>
    <Text style={styles.title}>React Native UI & UX</Text>
  </View>
);
