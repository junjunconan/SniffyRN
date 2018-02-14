// @flow

import { StackNavigator } from 'react-navigation';
import Root from './Root';
import Detail from './Detail';

const App = StackNavigator(
  {
    Root: {
      screen: Root,
    },
    Detail: {
      screen: Detail,
    }
  },
  {
    initialRouteName: 'Root',
    headerMode: '',
  }
);

export default App;
