import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {ButtonGroup} from 'react-native-elements';

class ChartsNav extends React.PureComponent {
  componentDidMount() {
    this.props.checkDuration();
  }

  render() {
    const {selectedDuration, updateDuration, buttons} = this.props;

    return (
      <>
        <Text style={styles.headerText}>Price Chart</Text>
        <ButtonGroup
          onPress={updateDuration}
          selectedIndex={selectedDuration}
          buttons={buttons}
          selectedTextStyle={styles.selectedTextStyle}
          selectedButtonStyle={styles.selectedButtonStyle}
          textStyle={styles.textStyle}
          buttonContainerStyle={styles.buttonContainerStyle}
          containerStyle={styles.containerStyle}
        />
      </>
    );
  }
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  selectedTextStyle: {
    color: '#2d65ff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  selectedButtonStyle: {
    backgroundColor: '#fff',
    borderBottomColor: '#2d65ff',
    borderBottomWidth: 3,
  },
  containerStyle: {
    height: 50,
    backgroundColor: '#fff',
    borderColor: '#fff',
  },
  textStyle: {fontSize: 15},
  buttonContainerStyle: {borderColor: '#fff'},
});
export default ChartsNav;
