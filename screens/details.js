import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, Image ,Dimensions , ScrollView, SafeAreaView } from 'react-native';
import Row from '../row2';



export default class Details extends React.Component {
  constructor(props){
    super(props)
    const { navigation } = this.props;
    this.data=this.props.route.params
}


getdata = () => {
  var arr = []
  var ask = this.data.Ratings
  for(let i=0;i<ask.length;i++){
    arr.push(
      {
        key: i,
        source: ask[i].Source,
        value: ask[i].Value
      }
    )
  }

  return arr

}

getseason = () => {
  if(this.data.Type==='series'){
    return (
      <Text style={{fontSize: 20, marginTop: 20}}>Total Seasons:  <Text style={styles.inner}>{this.data.totalSeasons}</Text></Text>
    )
  }
}
getimage = () => {
  if(this.data.Poster!=='N/A'){
    return(
      <View style={styles.image}>
      <Image source={{uri: this.data.Poster}}
      style={{'width': Dimensions.get('window').width-100, 
      'height': Dimensions.get('window').height-400}}
        resizeMode='contain' />
         </View>
    )
  }
}



render(){
    return(    
        <View style={styles.container}>
        <FlatList
        ListHeaderComponent = {
          <View style={styles.container}>           
              {this.getimage()}
            <View style={styles.title}>
          <Text style={{fontSize: 40, marginLeft: 10, marginRight: 10}}>{this.data.Title}</Text>
            </View>
            <View style={styles.info}>
            <Text style={{fontSize: 20}}>{this.data.Plot}</Text>
            <Text style={{fontSize: 25, marginTop: 30}}>Info:</Text>
          <Text style={{fontSize: 20, marginTop: 20}}>Release date:  <Text style={styles.inner}>{this.data.Released}</Text></Text>
          <Text style={{fontSize: 20, marginTop: 20}}>Runtime:  <Text style={styles.inner}>{this.data.Runtime}</Text></Text>
          <Text style={{fontSize: 20, marginTop: 20}}>Type:  <Text style={styles.inner}>{this.data.Type}</Text></Text>
          <Text style={{fontSize: 20, marginTop: 20}}>Imdb Rating:  <Text style={styles.inner}>{this.data.imdbRating}</Text></Text>
          <Text style={{fontSize: 20, marginTop: 20}}>Imdb Votes:  <Text style={styles.inner}>{this.data.imdbVotes}</Text></Text>
          <Text style={{fontSize: 20, marginTop: 20}}>Writer:  <Text style={styles.inner}>{this.data.Writer}</Text></Text>
          <Text style={{fontSize: 20, marginTop: 20}}>Director:  <Text style={styles.inner}>{this.data.Director}</Text></Text>
          <Text style={{fontSize: 20, marginTop: 20}}>Genre:  <Text style={styles.inner}>{this.data.Genre}</Text></Text>
          <Text style={{fontSize: 20, marginTop: 20}}>Language:  <Text style={styles.inner}>{this.data.Language}</Text></Text>
          <Text style={{fontSize: 20, marginTop: 20}}>Actors:  <Text style={styles.inner}>{this.data.Actors}</Text></Text>
          <Text style={{fontSize: 20, marginTop: 20}}>Awards:  <Text style={styles.inner}>{this.data.Awards}</Text></Text>
          <Text style={{fontSize: 20, marginTop: 20}}>BoxOffice:  <Text style={styles.inner}>{this.data.BoxOffice}</Text></Text>
          <Text style={{fontSize: 20, marginTop: 20}}>Country:  <Text style={styles.inner}>{this.data.Country}</Text></Text>
          <Text style={{fontSize: 20, marginTop: 20}}>Metascore:  <Text style={styles.inner}>{this.data.Metascore}</Text></Text>
          <Text style={{fontSize: 20, marginTop: 20}}>Production:  <Text style={styles.inner}>{this.data.Production}</Text></Text>
          <Text style={{fontSize: 20, marginTop: 20}}>Rated:  <Text style={styles.inner}>{this.data.Rated}</Text></Text>
          <Text style={{fontSize: 20, marginTop: 20}}>Year:  <Text style={styles.inner}>{this.data.Year}</Text></Text>
          {this.getseason()}
          <Text style={{fontSize: 25, marginTop: 30}}>Ratings:</Text>
          </View>
          </View>
        }
                data={this.getdata()}
                renderItem={({item}) => <Row style={styles.item} item={item}/>}
                keyExtractor={(item, index) => `${item.key}`}
            />
            </View>
      
   
    )}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  image:{
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 36
  },
  title:{
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 20
  },
  info:{
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10 
  },
  inner:{
    fontWeight: 'bold'
  },
  item:{
    backgroundColor: '#fff'
  }
  
  
});