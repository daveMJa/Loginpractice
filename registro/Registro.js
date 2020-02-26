import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import * as Font from 'expo-font';

import {Container,Header,Content,Card,CardItem,Text,Body,Button, Input, Item, Icon} from 'native-base';

class Registro extends Component{
  render(){
    const navegar= this.props.navigation;
  return (
    <Container>
        <Header/>
        <Content padder contentContainerStyle = {misEstilos.content}>
          <Card>
            <CardItem header bordered>
              <Text style={misEstilos.textCenter}>Registro</Text>
            </CardItem>
            <CardItem bordered>
              <Body style={misEstilos.body}>
              <Item inlineLabel>
                <Button style={misEstilos.boton2} primary ><Icon type='Entypo' name='facebook' style={misEstilos.imgCenter}></Icon></Button>
                <Button style={misEstilos.boton2} danger><Icon type='AntDesign' name='googleplus'style={misEstilos.imgCenter}></Icon></Button>
              </Item>
                <Item inlineLabel>
                  <Icon type='FontAwesome' name='user'></Icon>
                  <Input placeholder='Usuario'></Input>
                  <Icon type='FontAwesome' name='user'></Icon>
                  <Input placeholder='Nombre'></Input>
                </Item>
                <Item inlineLabel>
                <Icon type='Entypo' name='mail'></Icon>
                    <Input placeholder='Correo'></Input>
                </Item>
                <Item inlineLabel last>
                <Icon type='FontAwesome' name='lock'></Icon>
                <Input placeholder='Contraseña'></Input>
                </Item>
                <Item inlineLabel>
                  <Icon type='FontAwesome' name='lock'></Icon>
                <Input placeholder='Confirma Contraseña'></Input>
                </Item>
                <Item inlineLabel>
                  <Icon type='AntDesign' name='phone'></Icon>
                <Input placeholder='Telefono'></Input>
                </Item>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Button primary style={misEstilos.boton} ><Text>Registrate</Text></Button>
            </CardItem>
          </Card>
         
        
        </Content>
      </Container>
  );
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
  imgCenter:{
    textAlign:'center',
    width:'80%',

  },
  boton:{
    marginLeft:'60%'
  },
  body:{
    paddingVertical:35,
  },
  boton2:{
    flex:2
  }
});

export default Registro;