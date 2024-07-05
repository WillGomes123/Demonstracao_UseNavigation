import {TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
    const navigation = useNavigation();
    return (
      <View style={{flex:1, justifyContent:'center'}}>
        <Text style={{fontSize:60}}>
          HOME
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Data')}>
          <Text>
            ENTRAR
          </Text>
        </TouchableOpacity>    
        </View>
    );

}

