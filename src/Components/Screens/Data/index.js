import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity,StyleSheet, Text, View } from 'react-native';
////////
import { useState, useEffect } from 'react';
import {ref, onValue } from 'firebase/database'
import { db } from '../../../Conf';
////////

export default function Data() {
  const navigation = useNavigation();

  const [todoData, setTodoData] = useState([])

    useEffect(() => {

        const starCountRef = ref(db, 'sensores/')

        onValue(starCountRef, (snapshot) => {

            const data = snapshot.val(); 
            const Sensores = Object.keys(data).map(key =>({
                id:key,
                ...data[key]
            }))

            console.log(Sensores)
            setTodoData(Sensores)
        }) 
    }, [])

  return (
    <View style={{flex:1, justifyContent:'center'}}>
      <Text style={{fontSize:60}}>
      {
             todoData.map((item,index)=>{
             <Text key={index}>
              Velocidade:{item.Velocidade}
             </Text>
             }
             )
      }
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text>
        VOLTAR
        </Text>
        </TouchableOpacity>    
      </View>
  );
}

