import * as React from 'react'
import { SearchBar } from 'react-native-elements';
import { FlatList,StyleSheet, Text, View, TouchableOpacity, Alert, ScrollView } from 'react-native';
import db from '../config'
import firebase from 'firebase'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      search: '',
      allStories: [],
      dataSource: []
    };


  }

  retriveStories = async () => {
    const allStories = await db.collection("stories").get()
    allStories.map(d=>{
      this.setState({
        allStories:d.data()
      })
    })
  }
  searchFilter = async () => {
    const dataSource = await db.collection("stories").where("author","==",this.state.search)
    dataSource.map(d=>{
      this.setState({
        dataSource:d.data()
      })
    })
  }
  componentDidMount = async()=>{
    this.retriveStories();
  }
  render() {
    this.searchFilter()
   if(this.state.search==''){
    return (
      <ScrollView>
        <SearchBar
          placeholder="Type the name of the author"
          onChangeText={(d) => this.setState({
            search: d
          })}
          value={this.state.search}
        />

<FlatList data = {this.state.allStories} 
        renderItem={({item})=>{
          <View style={{borderBottomWidth:3}}>
            <Text>{"Title"+item.title}</Text>
            <Text>{"Author"+item.author}</Text>
            <Text>{"Story"+item.story}</Text>
            </View>
        }} 
        keyExtractor={(item,index)=>index.toString()}
        />

      </ScrollView>

    );
   } 
   else{
    return (
      <ScrollView>
        <SearchBar
          placeholder="Type the name of the author"
          onChangeText={(d) => this.setState({
            search: d
          })}
          value={this.state.search}
        />

<FlatList data = {this.state.dataSource} 
        renderItem={({item})=>{
          <View style={{borderBottomWidth:3}}>
            <Text>{"Title"+item.title}</Text>
            <Text>{"Author"+item.author}</Text>
            <Text>{"Story"+item.story}</Text>
            </View>
        }} 
        keyExtractor={(item,index)=>index.toString()}
        />

      </ScrollView>

    );
   }


  }
}