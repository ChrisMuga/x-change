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
      this.composer = this.composer.bind(this);

    }
  
    // constructor

    composer()
    {
      Actions.composer();
    }



  
      
    



  render() {
    return (
   
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <View style={styles.dashHead}>
          <Text style={styles.dashTitle}>{this.props.user_name}</Text>
        </View>

        <Grid>
            <Col size={50}>
              <Image
                  source={require('./assets/compose.png')}
                  style={styles.center}
                  onPress={()=>this.composer}
              />
              <Text style={styles.dashItem}>Compose</Text>
            </Col>
            <Col size={50}>
              <Image
                  source={require('./assets/friends.png')}
                  style={styles.center}
              />
              <Text style={styles.dashItem}>Friends</Text>
            </Col>
        </Grid>
        <Grid>
        <Col size={50}>
          <Image
              source={require('./assets/people.png')}
              style={styles.center}
          />
          <Text style={styles.dashItem}>People</Text>
        </Col>
        <Col size={50}>
          <Image
              source={require('./assets/posts.png')}
              style={styles.center}
          />
          <Text style={styles.dashItem}>Posts</Text>
        </Col>
        </Grid>
        <Grid>
            <Col>
              <Image
                    source={require('./assets/bell.png')}
                    style={styles.center}
                    
                />
                <Text style={styles.dashItem}>Notifications</Text>
            </Col>
            <Col>
              <Image
                  source={require('./assets/logout.png')}
                  style={styles.center}
              />
              <Text style={styles.dashItem}>Log Out</Text>
            </Col>
        </Grid>
        
          
      </KeyboardAvoidingView>

  
    );
  }
}









