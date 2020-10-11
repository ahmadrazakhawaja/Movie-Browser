import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import {fetchpages, fetchid} from '../api'
import Row from '../row';




export default class Results extends React.PureComponent {
    constructor(props){
        super(props)
        const { navigation } = this.props;
        data=this.props.route.params
        this.state= {
            data: data.search,
            page: 2,
            title: data.title,
            extra: []
        }
    }

    
    fetchresults = async() => {
      var data2 = await fetchpages(this.state.title,this.state.page)
      var data3 = data2.Search
      var datax = null
      if( data2.Response==="True"){
        datax = this.state.data
        var len = this.state.data.length
        for(var i = 0; i < data3.length; i++){
          datax.push({
            key: i+len+1,
            title: data3[i].Title,
            type: data3[i].Type,
            year: data3[i].Year,
            poster: data3[i].Poster,
            imdbid: data3[i].imdbID
          })
        };
        this.setState(prevstate => ({data: datax, page: prevstate.page+1,title: prevstate.title }))
      }

    }

    onSelectContact = async(data) => {
      var data2 = await fetchid(data)
      this.props.navigation.navigate('Details', data2)
    }

    

    render(){
      if(this.state.data.length===0){
        return(
          <View style={{flex: 1, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 40}}>No Results Found!</Text>
        </View>
        )
      }
      else{
        return(
        <View style={styles.container}>
           <FlatList
                data={this.state.data}
                renderItem={({item}) => <Row style={styles.item} item={item} onSelectContact={this.onSelectContact}/>}
                keyExtractor={(item, index) =>  `${item.key}`}
                onEndReachedThreshold = {1}
                onEndReached={() => {this.fetchresults()}}
            />
        </View>
        )}}
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },

});