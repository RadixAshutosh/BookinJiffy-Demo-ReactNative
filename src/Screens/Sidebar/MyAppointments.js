import React, {useState} from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Table, Row } from 'react-native-table-component';

 const MyAppointments =()=> {

  const [tableHead, setTableHead] = useState(['Head', 'Head2', 'Head3', 'Head4', 'Head5', 'Head6', 'Head7', 'Head8', 'Head9']);
  const [widthArr, setWidthArr] = useState([40, 60, 80, 100, 120, 140, 160, 180, 200]);
    const state = this.state;
    const data = [];
    for (let i = 0; i < 30; i += 1) {
      const dataRow = [];
      for (let j = 0; j < 9; j += 1) {
        dataRow.push(`${i}${j}`);
      }
      data.push(dataRow);
    }
    return (
      <View style={styles.container}>
        <ScrollView horizontal={true}>
          <View>
            <Table borderStyle={{ borderColor: '#C1C0B9' }}>
              <Row data={tableHead} widthArr={widthArr} style={styles.head} textStyle={styles.text} />
            </Table>
            <ScrollView style={styles.dataWrapper}>
              <Table borderStyle={{ borderColor: '#C1C0B9' }}>
                {
                  data.map((dataRow, index) => (
                    <Row
                      key={index}
                      data={dataRow}
                      widthArr={widthArr}
                      style={[styles.row, index % 2 && { backgroundColor: '#ffffff' }]}
                      textStyle={styles.text}
                    />
                  ))
                }
              </Table>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    )
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: 'pink'
  },
  head: {
    height: 50,
    backgroundColor: 'gray',
    width: '100%'
 

  },
  text: {
    textAlign: 'center',
    fontWeight: '500'
  },
  dataWrapper: {
    marginTop: -1
  },
  row: {
    height: 40,
    backgroundColor: '#F7F8FA'
  }
});

export default MyAppointments