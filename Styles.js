import React from 'react';
import { 
    StyleSheet, 
  } 
  from 'react-native';
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
    ,
    signin:{
      paddingTop: 20,
      fontSize: 23,
      textDecorationLine: 'underline',
    }
  });
  
 

  export default styles;