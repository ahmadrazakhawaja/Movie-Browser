import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { Picker } from 'react-native'
import {fetchMovies,fetchTitle} from '../api'
import { SearchBar } from 'react-native-elements';


export default class Home extends React.Component {
    constructor(props){
        super(props)
        this.state= {
            name: "",
            type: ""
        }
    }

    changehandler = val => {
      this.setState(prevstate => ({name: val ,type: prevstate.type}))
    }

    setSelectedValue = val => {
        this.setState(prevstate => ({name: prevstate.name ,type: val}))
    }

    getdata = (data,km) => {
      if(km === true){
        if(data.Response==="False"){
          return(
          {
            search:[],
            title: ''}
          )}
        return (
          {
          search:
          [{
          key: 0,
          title: data.Title,
          type: data.Type,
          year: data.Year,
          poster: data.Poster,
          imdbid: data.imdbID
           } 
          ],
          title: this.state.name})
      }
      else{
        var obj = []
        var ak = data.Search
       for(var i = 0; i<ak.length; i++){
          obj.push({
            key: i,
            title: ak[i].Title,
            type: ak[i].Type,
            year: ak[i].Year,
            poster: ak[i].Poster,
            imdbid: ak[i].imdbID
          })
        };
        return ({
          search: obj,
          title: this.state.name
        }
        )
      }

      }
    

    handlesubmit = async ()  => {
        var data = await fetchMovies(this.state.name,this.state.type)
        var km = false
        if (data.Response==="False"){
            data = await fetchTitle(this.state.name)
            km = true
        }
        this.props.navigation.navigate('Results', this.getdata(data,km))

    }

    render(){
        return(
        <View style={styles.container}>
            <View style={styles.searchbox}>
                <SearchBar placeholder="Search Movies" inputStyle={{color: '#000'}} value={this.state.name} containerStyle={{backgroundColor: '#fff', alignSelf: 'stretch'}} inputContainerStyle={{width: Dimensions.get('window').width-20}}  onChangeText={(val) => (this.changehandler(val))} lightTheme={true} round={true}/>
                <View style={{alignItems:'center'}}>
                    <View style={styles.dropdown}>
                        <Picker
                            selectedValue={this.state.type}
                            style={{ height: 50, width: 150 }}
                            onValueChange={(itemValue, itemIndex) => this.setSelectedValue(itemValue)}
                            >   
                            <Picker.Item label="All" value="" />
                            <Picker.Item label="Movie" value="movies" />
                            <Picker.Item label="Series" value="series" />
                            <Picker.Item label="Episode" value="episode" />
                        </Picker>
                    </View>
                    <TouchableOpacity onPress={this.handlesubmit}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Search</Text>
                        </View>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
        )}
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: "#E8E8E8",
    borderColor: "#E8E8E8",
    borderWidth: 0,
    margin: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
    width: 400,
    paddingLeft: 10,
    fontSize: 20,
    borderRadius: 20
  },
  searchbox:{
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: 36
  },
  dropdown: {
    justifyContent: 'center',
    width: 150,
    alignItems: 'center' ,
    borderColor: "#E8E8E8",
    borderWidth: 2,
    overflow: 'hidden',
    borderRadius: 20,
    marginTop: 20,
  },
  button: {
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 70,
    backgroundColor: '#f01d71',
    marginTop: 40
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 16,
    textAlign: 'center',
  }

});
