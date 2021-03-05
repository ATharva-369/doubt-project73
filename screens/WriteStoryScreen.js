// import libraries
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Alert, ToastAndroid } from 'react-native';
import { Header } from 'react-native-elements';
import db from '../config';
import * as firebase from 'firebase';
// make default class
export default class WriteScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            title: '',
            author: '',
            story: '',
            name: ""
        }
    }
    sumbitButton = async () => {
        db.collection("stories").doc(this.state.name).set({
            title: this.state.title,
            author: this.state.author,
            story: this.state.story,
        })
        ToastAndroid.show("Your story has been submitted", ToastAndroid.SHORT);
    }

    render() {
        return (
            <KeyboardAvoidingView>
                <ScrollView >
                    {/* <Text style={{textAlign:'center',marginTop:'26%',fontSize:30,color:'lightblue'}}>Hi this is write screen</Text> */}
                    <Header
                        backgroundColor={'yellow'}
                        centerComponent={{
                            text: "Story Hub",
                            style: { color: 'blue', fontSize: 20 },
                        }}
                    />
                    <TextInput
                        placeholder="Enter your full name please"
                        style={style.input}
                        onChangeText={(text) => this.setState({
                            name: text
                        })}
                    />
                    <TextInput
                        placeholder="Enter title of story"
                        style={style.input}
                        onChangeText={(text) => this.setState({
                            title: text
                        })}
                    />
                    <TextInput
                        placeholder="Enter author of story"
                        style={style.input}
                        onChangeText={(text) => this.setState({
                            author: text
                        })}

                    />
                    <TextInput
                        multiline={true}
                        placeholder="Write story"
                        style={{
                            marginTop: '6%',
                            width: '80%',
                            alignSelf: 'center',
                            textAlign: 'center',
                            borderWidth: 4,
                            height: 500,
                        }}
                        onChangeText={(text) => this.setState({
                            story: text
                        })} />
                    <TouchableOpacity style={{ backgroundColor: 'yellow', marginLeft:'25%', height: 50, width: '50%' }} onPress={this.sumbitButton}>
                        <Text style={{ color: 'blue', textAlign: 'center', fontSize: 15,textAlignVertical:'center'}}>Submit</Text>
                    </TouchableOpacity>


                </ScrollView>
            </KeyboardAvoidingView>
        );
    }
}
const style = StyleSheet.create({
    input: {
        marginTop: '6%',
        width: '80%',
        alignSelf: 'center',
        textAlign: 'center',
        borderWidth: 4,
        height: 50,
    },
})