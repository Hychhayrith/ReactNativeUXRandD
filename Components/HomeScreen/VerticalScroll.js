import React from 'react';
import {FlatList, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {Image} from 'react-native-elements';

const VerticalScroll = ({data, navigation}) => (
  <View style={styles.scrollController}>
    <FlatList
      data={data}
      horizontal={false}
      showsVerticalScrollIndicator={true}
      style={{width: '100%', height: '100%'}}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item, index}) => (
        <Element data={item} navigation={navigation} />
      )}
    />
  </View>
);

export default VerticalScroll;

const styles = StyleSheet.create({
  scrollController: {width: '100%', height: '87%'},
  elementController: {
    flexDirection: 'row',
    width: '100%',
    height: 60,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftElement: {flexDirection: 'row', alignItems: 'center'},
  iconLeft: {width: 30, height: 30, marginLeft: 16},
  iconRight: {width: 30, height: 30, marginRight: 16},
  elementText: {fontSize: 16, fontWeight: 'bold', marginLeft: 8, width: '75%'},
});

const Element = ({data, navigation}) => (
  <TouchableOpacity
    onPress={() => navigation.navigate(data.screen)}
    style={styles.elementController}>
    <View style={styles.leftElement}>
      <Image
        source={{
          uri: data.image,
        }}
        style={styles.iconLeft}
        marginLeft={16}
        resizeMode="contain"
      />

      <Text style={styles.elementText}>{data.label}</Text>
    </View>

    <Image
      source={{
        uri:
          'https://res.cloudinary.com/dd8plasfr/image/upload/v1575784180/RNRandDAppImage/next_elwlig.png',
      }}
      style={styles.iconRight}
      marginRight={16}
      resizeMode="contain"
    />
  </TouchableOpacity>
);
