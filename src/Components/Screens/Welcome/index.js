import { TouchableOpacity,StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Welcome() {
    const navigation = useNavigation();
    return (
      <View style={{flex:1, justifyContent:'center'}}>
        <Text style={{fontSize:60}}>
          Welcome
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text>
            ENTRAR
          </Text>
          </TouchableOpacity>    
        </View>
    );

}

