import React from 'react';
import { 
  TextInput,
  Alert,
  Text, 
  View, 
  Image, 
  TouchableOpacity, 
  ToolbarAndroid,
  KeyboardAvoidingView,
} 
from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";

import { 
  Scene, Router, Actions, Reducer, ActionConst, Overlay, Tabs, Modal, Drawer, Stack, Lightbox 
} 
from 'react-native-router-flux';

import styles from './Styles';



export default class Composer extends React.Component {

    // static navigationOptions = {
    //     title: 'Welcome',
    //   };

    // constructor

    constructor(props) {
      super(props);
      this.state = {
        email_address: '',
        password: '',

      };

      
      //bind to function(s)
      this.post = this.post.bind(this);
    }
  
    // constructor
    

  post()
  {
    // post to api
    fetch('http://192.168.1.102:3000/api/user-signin', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email_address: this.state.email_address ,
        password: this.state.password ,
      })
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      //console.log(JSON.stringify(myJson));
      if(data.code==1)
      {
        console.log(data.msg)
        Alert.alert("X-CHANGE",String(data.msg));
        () => this.props.navigation.navigate('Dashboard');
      }else if(data.code==0)
      {
        console.log(data.msg)
        Alert.alert("X-CHANGE",String(data.msg))
      }

    });
    // post to api

    
  }
 


  render() {
    return (
   
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <View style={styles.dashHead}>
          <Text style={styles.dashTitle}>{this.props.user_name}</Text>
        </View>

        <Grid>
           <Row>
            <TextInput
                    multiline={true}
                    numberOfLines={4}
                    onChangeText={(text) => this.setState({message})}
                    value={this.state.message}
                  
                />
           </Row>
        </Grid>
        
          
      </KeyboardAvoidingView>

  
    );
  }
}









