import 'react-native-gesture-handler';
import CardProvaider from './src/Context';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import { StatusBar } from 'react-native';


export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'#000'} barStyle={'light-content'} />
      <CardProvaider>
        <Routes />
      </CardProvaider>
    </NavigationContainer>
  );
}
