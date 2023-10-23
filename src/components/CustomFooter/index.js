import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const CustomFooter = () => {
  return (
    <View style={styles.footerContainer}>
      <Text style={styles.footerText}>Driving Where Food Should Go</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    //backgroundColor: '#3498db', // change the background color
    padding: 35, // increase padding
    alignItems: 'center',
    justifyContent: 'flex-end', // aligns footer at the end of the screen
    //flex: 1, // takes up the full height of its parent
  },
  footerText: {
    color: '#000000', // change text color
    fontSize: 14, // increase text size
    //fontFamily: 'Arial', // change font family
    fontWeight: 'bold', // make text bold
  },
});

export default CustomFooter;
