import React,{PureComponent} from 'react'
import {TouchableOpacity, StyleSheet, Text, View, Image, Dimensions} from 'react-native'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  row: {padding: 20,
    borderColor: '#000000',
    borderWidth: 1,
    alignSelf: 'stretch',
    backgroundColor: '#E8E8E8'
  },
  cont: {
    borderTopColor: '#000000',
    borderWidth: 2,
  }
})

class Row extends PureComponent{
  
  render(){
  if(this.props.item.poster==='N/A'){
    return(
    <TouchableOpacity style={styles.row} onPress={() => this.props.onSelectContact(this.props.item.imdbid)}>
      <Text style={{fontSize: 30,fontWeight:'bold'}}>{this.props.item.title}</Text>
      <Text style={{fontSize: 20}}>Type: {this.props.item.type}</Text>
      <Text style={{fontSize: 20}}>Year: {this.props.item.year}</Text>
    </TouchableOpacity>
    )}
  else{
    return(
      <TouchableOpacity style={styles.row} onPress={() => this.props.onSelectContact(this.props.item.imdbid)}>
        <View style={{flexDirection:'row'}}>
        <Image source={{uri: this.props.item.poster}}
        style={{'width': Dimensions.get('window').width-300, 
        'height': Dimensions.get('window').height-600}}
          resizeMode='contain' />
          <View style={{flexDirection:'column', marginLeft: 10, marginRight: 100 }}>
        <Text style={{fontSize: 30,fontWeight:'bold'}}>{this.props.item.title}</Text>
        <Text style={{fontSize: 20}}>Type: {this.props.item.type}</Text>
        <Text style={{fontSize: 20}}>Year: {this.props.item.year}</Text>
        </View>
        </View>
    </TouchableOpacity>
    )
  }
}
}




export default Row