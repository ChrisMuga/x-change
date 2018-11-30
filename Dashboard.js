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



export default class Dashboard extends React.Component {

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
    fetch('http://192.168.1.102:8000/api/user-signin', {
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
  quit()
  {
    Alert.alert('Quit!')
  }


  render() {
    return (
   
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        
        <Text style={styles.h1}>{this.props.msg}</Text>

        <Grid>
            <Col size={50}>
              <Image
                  source={require('./assets/compose.png')}
                  style={styles.center}
              />
              <Text style={styles.dashItem}>Compose</Text>
            </Col>
            <Col size={50}>
              <Image
                  source={require('./assets/compose.png')}
                  style={styles.center}
              />
              <Text style={styles.dashItem}>Friends</Text>
            </Col>
        </Grid>
        <Grid>
        <Col size={50}>
          <Image
              source={require('./assets/compose.png')}
              style={styles.center}
          />
          <Text style={styles.dashItem}>People</Text>
        </Col>
        <Col size={50}>
          <Image
              source={require('./assets/compose.png')}
              style={styles.center}
          />
          <Text style={styles.dashItem}>Posts</Text>
        </Col>
        </Grid>
        <Grid>
            <Row>
              <Image
                    source={require('./assets/compose.png')}
                    style={styles.center}
                />
                <Text style={styles.dashItem}>Notifications</Text>
            </Row>
            <Row>
              <Image
                  source={require('./assets/compose.png')}
                  style={styles.center}
              />
              <Text style={styles.dashItem}>Log Out</Text>
            </Row>
        </Grid>
        
          
      </KeyboardAvoidingView>

  
    );
  }
}









