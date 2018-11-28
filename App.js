import React from 'react';
import { TextInput,Alert,StyleSheet, Text, View, Button, Image, TouchableOpacity, KeyboardAvoidingView} from 'react-native';


export default class App extends React.Component {

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
    fetch('http://192.168.1.102:8000/api/register', {
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
          source={require('./assets/science.png')}
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
              <Text style={[styles.left, styles.font1]}>Sign Up</Text><Image source={require('./assets/right-arrow.png')} style={styles.right}/>
            </View>
          </TouchableOpacity>
        </View>
        {/* button */}

        {/* button */}
        <View style={styles.full_view}>
          <TouchableOpacity  style={[styles.full_height, styles.btn, styles.btndanger]} onPress={this.quit}>
            <View style={styles.inline}>
              <Text style={[styles.left, styles.font1]}>Quit</Text><Image source={require('./assets/quit.png')} style={styles.right}/>
            </View>
          </TouchableOpacity>
        </View>
        {/* button */}
      </KeyboardAvoidingView>

  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection:'column',
    justifyContent: 'center',
  },
  h1:{
    fontSize:40,
  },
  input:{
    
    width: '95%',
    height: 40,
    fontSize:20,
    marginLeft:20,
    marginRight: 20,
    textAlign:'center',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: 'black',
    marginTop: 10,
   
  },
  full_view:{

    width: '95%',
    height: 50,
    fontSize:20,
    marginLeft:20,
    marginRight: 20,
    textAlign:'center',
    marginTop: 10,

  },
  full_height:{
    height: 50,
  },
  btn:{
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    marginTop: 10,
    fontSize: 20,
    padding: 10,
  },
  inline:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    
  },
  right:{
    alignSelf: 'flex-end'
  },
  left:{
    alignSelf: 'flex-start'
  },
  font1:{
    fontSize:20,
  },
  btndanger:
  {
    backgroundColor:'#d9534f',
  },
  btnprimary:
  {
    backgroundColor:'#5bc0de',
  }
});
