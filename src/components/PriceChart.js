import React from 'react';
import {Grid, XAxis, YAxis, AreaChart} from 'react-native-svg-charts';
import {View, StyleSheet} from 'react-native';
import * as shape from 'd3-shape';
import {Path} from 'react-native-svg';

class PriceChart extends React.Component {
  render() {
    const Line = ({line}) => (
      <Path key={'line'} d={line} stroke={'rgb(237, 47, 63)'} fill={'none'} />
    );
    const axesSvg = {fontSize: 12, fill: '#353535'};
    const verticalContentInset = {top: 10, bottom: 10};
    const xAxisHeight = 30;
    const {month, prices, dates} = this.props;
    return (
      <View style={styles.chartContainer}>
        <YAxis
          numberOfTicks={5}
          data={prices}
          style={{marginBottom: xAxisHeight}}
          contentInset={verticalContentInset}
          svg={axesSvg}
        />
        <View style={{flex: 1, marginLeft: 5}}>
          <AreaChart
            numberOfTicks={5}
            style={{flex: 1, zIndex: 99}}
            data={prices}
            curve={shape.curveNatural}
            contentInset={verticalContentInset}
            svg={{fill: 'rgb(251, 212, 215)'}}>
            <Grid />
            <Line />
          </AreaChart>
          <XAxis
            numberOfTicks={5}
            data={dates}
            formatLabel={(value, index) => {
              let date = new Date(dates[value]);
              let day = month[date.getMonth()] + ' ' + date.getDate();
              return day;
            }}
            contentInset={{left: 20, right: 20}}
            svg={axesSvg}
            style={{
              marginHorizontal: -15,
              height: xAxisHeight,
              paddingVertical: '2%',
            }}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  chartContainer: {height: 250, flexDirection: 'row'},
});

export default PriceChart;
