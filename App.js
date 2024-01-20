import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {observer} from 'mobx-react-lite'
import {Provider} from './store'
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import HomeScreen from './src/screens/Home';
import AboutScreen from './src/screens/About';
import LoadingScreen from './src/screens/Loading';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  About: AboutScreen,
  Loading: LoadingScreen
}, {
  initialRouteName: 'Home'
});

const AppContainer = createAppContainer(AppNavigator);

function App() {
  return (
    <Provider>
      <StatusBar style="auto" />
      <AppContainer />
    </Provider>
  );
}

export default observer(App)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
