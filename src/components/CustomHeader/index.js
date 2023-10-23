import React from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';

const CustomHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <Image
        source={require('../../../assets/logo.png')}
        style={styles.logo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
   // backgroundColor: 'lightblue',
    padding: 10,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  logo: {
    width: 350,
    height: 100,
    //padding: 25
  },
});

export default CustomHeader;
