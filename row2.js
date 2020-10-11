import React from 'react'
import {TouchableOpacity, StyleSheet, Text, View, Image, Dimensions} from 'react-native'

const styles = StyleSheet.create({
    info:{
        flex: 1,
        justifyContent: 'flex-start',
        marginTop: 20,
        marginLeft: 10
      },
  inner:{
    fontWeight: 'bold'
  },
})

const Row = props => {
  return (
      <View style={styles.info}>
          <Text style={{fontSize: 20, marginTop: 10}}>Source:  <Text style={styles.inner}>{props.item.source}</Text></Text>
          <Text style={{fontSize: 20, marginTop: 10, marginBottom: 20}}>Rating:  <Text style={styles.inner}>{props.item.value}</Text></Text>
      </View>
  )
  }



export default Row