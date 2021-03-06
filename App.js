import React from 'react';
import { 
  TextInput,
  Alert,
  Text, 
  View, 
  Image, 
  TouchableOpacity, 
  KeyboardAvoidingView,
} 
from 'react-native';

import { 
  Scene, Router, Actions, Reducer, ActionConst, Overlay, Tabs, Modal, Drawer, Stack, Lightbox 
} 
from 'react-native-router-flux';

import Config from './components/Config'

// actual components
import SignIn from './components/SignIn';
import Dashboard from './components/Dashboard';
import Composer from './components/Composer';


// style component
import styles from './components/Styles';





class App extends React.Component {



    // constructor

    constructor(props) {
      super(props);
      this.state = {
        first_name: '',
        last_name: '',
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
    fetch(Config.host+':'+Config.port+'/api/register', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        first_name: this.state.first_name ,
        last_name: this.state.last_name ,
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
        Alert.alert("X-CHANGE",String(data.msg))
        
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
        <Image
          source={require('./components/assets/science.png')}
        />
        <Text       style={styles.h1}>Register</Text>
        <TextInput  style={styles.input} placeholder={"First Name"} name="first_name" onChangeText={(first_name) => this.setState({first_name}) }/>
        <TextInput  style={styles.input} placeholder={"Last Name"} name="last_name" onChangeText={(last_name) => this.setState({last_name}) }/>
        <TextInput  style={styles.input} placeholder={"Email Address"} name="email_address" onChangeText={(email_address) => this.setState({email_address}) }/>
        <TextInput  style={styles.input} placeholder={"Password"} secureTextEntry={true} name="last_name" onChangeText={(password) => this.setState({password}) }/>
        {/* button */}
        <View style={styles.full_view}>
          <TouchableOpacity  style={[styles.full_height, styles.btn, styles.btnprimary]} onPress={this.post}>
            <View style={styles.inline}>
              <Text style={[styles.left, styles.font1]}>Sign Up</Text><Image source={require('./components/assets/right-arrow.png')} style={styles.right}/>
            </View>
          </TouchableOpacity>
        </View>
        {/* button */}

        {/* button */}
        <View style={styles.full_view}>
          <TouchableOpacity  style={[styles.full_height, styles.btn, styles.btndanger]} onPress={this.quit}>
            <View style={styles.inline}>
              <Text style={[styles.left, styles.font1]}>Quit</Text><Image source={require('./components/assets/quit.png')} style={styles.right}/>
            </View>
          </TouchableOpacity>
        </View>
        {/* button */}

        <Text style={styles.signin} onPress={()=>Actions.signin()}>Sign In</Text>
        

      </KeyboardAvoidingView>

  
    );
  }
}


const Routes = () =>(

  <Router>
  <Stack key="root">
    
    {/* <Scene key="dashboard" component={Dashboard} title="Dashboard"/> */}
    <Scene key="register" component={App} title="Home"/>
    <Scene key="signin" component={SignIn} title="SignIn"/>
    <Scene key="dashboard" component={Dashboard} title="Dashboard"/>
    <Scene key="composer" component={Composer} title="Composer"/>
  </Stack>
</Router>
);


export default Routes




