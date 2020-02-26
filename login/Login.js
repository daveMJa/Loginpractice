import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {Container,Header,Content,Card,CardItem,
  Text,Body,Button, Input, Item, Icon} from 'native-base';
  import * as Font from 'expo-font';


class Login extends Component{
      constructor(props){
        super(props);
        this.state={usuario:'',pass:''};
      }
    render(){
      const navegar= this.props.navigation;
    return (
    
    <Container>
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
            onPress={() =>{navegar.navigate('Registro',
            {titulo:'Registro usuario',
            nombre:'David'})}}><Text>Registrate</Text></Button>
              
              <Button primary style={misEstilos.boton} 
              onPress={() =>navegar.navigate('Perfil',
              {pass:this.state.pass, usuario: this.state.usuario})}><Text>Iniciar Sesión</Text></Button>
              
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
  boton:{
    marginLeft:'20%'
  },
  body:{
    paddingVertical:35,
  },
  boton1:{
    marginLeft:'0%'
  }
});

export default Login;