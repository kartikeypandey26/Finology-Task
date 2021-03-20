import React from 'react';
import {Text, StyleSheet} from 'react-native';

const EmptyComponent = () => {
  return (
    <Text style={styles.errorMsg}>
      *No data available for selected duration! Please try other durations.
    </Text>
  );
};
const styles = StyleSheet.create({
  errorMsg: {
    color: '#ff0000',
    fontSize: 14,
    marginVertical: 20,
  },
});
export default EmptyComponent;
