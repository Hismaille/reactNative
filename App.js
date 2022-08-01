import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

export default function App(){
  const [objetos, setarObjetos] = useState([{
    nomes: ['Futebol', 'Hotel', 'Janta'],
    valores:['10','20','30']
  }]);

  useEffect(() =>{
    //somar valores
    var valorAtual = 0;

    for(let i = 0; i < objetos[0].valores.length;i++){
      valorAtual+=objetos[0].valores[i];
    }
    setValorDevido(valorAtual);
  },[])

  const [valorDevido, setValorDevido] = useState(0);
  
  return(
    <View>
    <SafeAreaView style={styles.container}>
      <View style={{flex:1}}>
        <Text style={{fontSize:30,color:'white'}}>Bem-Vindo Hismaille</Text>
      </View>
      <View style={{flex:1}}>
        <Text style={{fontSize:20,color:'white'}}>Seu Saldo: R${valorDevido}</Text>
      </View>
      </SafeAreaView>
       <View style={styles.containerDados}>
        {
          objetos[0].nomes.map(function(e,val){
            return(
            <View style={{borderBottomColor:'black',borderBottomWidth:1}}>
              <Text>{e}:R${objetos[0].valores[val]},00</Text>
            </View>
            )
          })       
        } 
      </View>

  </View>
    
  );
}

const styles = StyleSheet.create({
  container:{
    padding:30,
    height:200,
    backgroundColor:'#01d9c5',
  },
  containerDados:{
    padding:20,
  }

})