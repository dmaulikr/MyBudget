import { StackNavigator } from 'react-navigation';

// screens
import Dashboard from '../Containers/Dashboard';

const Navigator = StackNavigator({
  dashboard: { screen: Dashboard }
}, {
  initialRouteName: 'dashboard'
});

export default Navigator;
