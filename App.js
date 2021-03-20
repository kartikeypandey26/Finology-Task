import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import PriceChart from './src/components/PriceChart';
import ChartsNav from './src/components/ChartsNav';
import EmptyComponent from './src/components/EmptyComponent';
import {price, month, durations, buttons} from './src/data';

class App extends React.PureComponent {
  state = {
    selectedDuration: 0,
    prices: [],
    dates: [],
    startingDate: new Date(),
    today: new Date(),
  };
  compareDates = (a, b) => {
    var g1 = new Date(a);
    var g2 = new Date(b);
    if (g1.getTime() < g2.getTime()) return -1;
    else if (g1.getTime() > g2.getTime()) return 1;
    else return 0;
  };

  checkDuration = () => {
    let temp = this.state.selectedDuration;
    let gap = durations[temp];
    let b = new Date();
    b.setDate(b.getDate() - gap);
    let today = new Date();
    let filteredData =
      temp > 6 && temp < 0
        ? price
        : price.filter(pr => {
            return this.compareDates(pr.Date, b) == 1;
          });
    let myPrice = filteredData.map(pr => pr.price);
    let myDate = filteredData.map(pr => pr.Date);
    this.setState({
      prices: myPrice,
      dates: myDate,
      startingDate:
        b.getFullYear() + '/' + (b.getMonth() + 1) + '/' + b.getDate(),
      today:
        today.getFullYear() +
        '/' +
        (today.getMonth() + 1) +
        '/' +
        today.getDate(),
    });
  };

  updateDuration = selectedDuration => {
    this.setState({selectedDuration}, () => {
      this.checkDuration();
    });
  };
  render() {
    const {selectedDuration, prices, dates, startingDate, today} = this.state;
    return (
      <SafeAreaProvider style={styles.main}>
        <ChartsNav
          updateDuration={this.updateDuration}
          checkDuration={this.checkDuration}
          selectedDuration={selectedDuration}
          buttons={buttons}
        />
        {this.state.prices.length ? (
          <PriceChart
            selectedDuration={selectedDuration}
            dates={dates}
            prices={prices}
            month={month}
          />
        ) : (
          <EmptyComponent />
        )}
        <View>
          <Text
            style={
              styles.durationText
            }>{`Selected Duration: ${startingDate} to ${today}`}</Text>
        </View>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    padding: 20,
    backgroundColor: '#fff',
  },
  durationText: {
    marginVertical: 20,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
export default App;
