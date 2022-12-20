import Navegation from './App/Navegation/Navegation';
import { IconComponentProvider, Icon } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import AppContext from './App/Global/Context/appContext';
import reducerApp, { initialStateApp } from './App/Global/Reducers/reducerApp';

export default function App() {
  return (

    <AppContext initialStateApp={initialStateApp} reducerApp={reducerApp} >
      <IconComponentProvider IconComponent={MaterialCommunityIcons}>
        <Navegation />
      </IconComponentProvider>
    </AppContext>
  );
}


