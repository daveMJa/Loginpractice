import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {Container,Content,Card,CardItem,
  Text,Button} from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import * as Font from 'expo-font';



  class Perfil extends Component{
      render(){
      const navegar = this.props.navigation;
       return(
           <>
           
              
                   <Card>
                       <CardItem header bordered style={misEstilos.body}>
                            <Text style={misEstilos.textCenter}>Bienvenido</Text>
                       </CardItem>
                       <CardItem footer bordered style={misEstilos.pie}>
                             <Text style={misEstilos.textCenter}> Usuario:{this.props.route.params.usuario}</Text>
                       </CardItem>
                       <CardItem footer bordered style={misEstilos.pie}>
                             <Text style={misEstilos.textCenter}> Contraseña:{this.props.route.params.pass}</Text>
                       </CardItem>
                       <CardItem>
                           <Button  style={misEstilos.centrar} onPress={() =>
                        navegar.navigate('Login')}><Text>Salir</Text></Button>
                       </CardItem>
                   </Card>
               
          
           </>
       );
      }
  };


  const misEstilos =StyleSheet.create({
      content:{
          backgroundColor:'#000000',
          flex:1,
          justifyContent:'center',
      },
      textCenter:{
        fontSize: 30,
        color:'white',
        
        width:'100%'
      },
      pie:{
          backgroundColor:'#00BF26',
          justifyContent:'center',

      },
      centrar:{
          flex:3,
          marginLeft:'10%',
          marginRight:'10%',
          justifyContent:'center'
      },
      body:{
          paddingVertical:35,
          backgroundColor:'#000000'
      },
  });

  export default Perfil;