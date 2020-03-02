import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet,ActivityIndicator,Switch } from 'react-native';
import {Container,Header,Content,Card,CardItem,
  Text,Body,Button, Input, Item, Icon, View} from 'native-base';
  import * as Font from 'expo-font';


class Login extends Component{

      state={switchValue:false}
      toggleSwitch = (value) =>{
        this.setState({switchValue:value})
      }

      constructor(props){
        super(props);
        this.state={usuario:'',pass:''};
      }
      state={showIndicator:false}
      onButtonPress= () =>{
        this.setState({showIndicator:true
        }),this.props.navigation.navigate('Perfil',{pass: this.state.pass, usuario:this.state.usuario})
      };

    render(){
      
      if(this.state.showIndicator){
        return(
          <View style={misEstilos.content}>
            <ActivityIndicator size="large" color="#36FF0E"/>
          </View>
      
        );
        }else{
    return (
    <>
    <Container>
    <Text>{this.state.switchValue?'Switch is ON':'Switch is OFF'}</Text>
      <Switch onValueChange={this.toggleSwitch}
      value={this.state.switchValue}/>
        <Header/>
        <Content padder contentContainerStyle = {misEstilos.content}>
          <Card>
            <CardItem header bordered>
              <Text style={misEstilos.textCenter}>Inicio de Sesión</Text>
            </CardItem>
            <CardItem bordered>
              <Body style={misEstilos.body}>
                <Item inlineLabel>
                  <Icon type='FontAwesome' name='user'></Icon>
                <Input placeholder='Nombre de Usuario' type="text" value={this.state.usuario}
                onChangeText={(usuario)=>this.setState({usuario})}></Input>
                </Item>
                <Item inlineLabel last>
                <Icon type='FontAwesome' name='lock'></Icon>
                <Input placeholder='Contraseña' type="text" value={this.state.pass}
                onChangeText={(pass)=>this.setState({pass})}></Input>
                </Item>
              </Body>
            </CardItem>
            <CardItem footer bordered>
            <Button primary style={misEstilos.boton1} 
            onPress={() =>{this.onButtonPress, navegar.navigate('Registro',
            {titulo:'Registro usuario',
            nombre:'David'})}}><Text>Registrate</Text></Button>
              
              <Button primary style={misEstilos.boton} 
              onPress={this.onButtonPress}><Text>Iniciar Sesión</Text></Button>
              
            </CardItem>
          </Card>
         
        
        </Content>
      </Container>
    </>
  );
    }
    }
}

const misEstilos = StyleSheet.create({
  content:{
    flex:1,
    justifyContent:'center',

  },
  contents:{
    flex:3,
    justifyContent:'center',

  },
  textCenter:{
    textAlign:'center',
    width:'100%',

  },
  boton:{
    marginLeft:'20%'
  },
  body:{
    paddingVertical:35,
  },
  boton1:{
    marginLeft:'0%'

  },
  switch:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
});

export default Login;