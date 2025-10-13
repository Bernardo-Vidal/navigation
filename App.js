import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'

import Favoritos from './screens/Favoritos.js'
import Locais from './screens/Locais.js'
import Mapa from './screens/Mapa.js'
import Mercadorias from './screens/Mercadorias.js'
import Sobre from './screens/Sobre.js'

const drawer = createDrawerNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <drawer.Navigator>
        <drawer.Screen name='Mapa' component={Mapa} />
        <drawer.Screen name='Locais' component={Locais} />
        <drawer.Screen name='Mercadorias' component={Mercadorias} />
        <drawer.Screen name='Favoritos' component={Favoritos} />
        <drawer.Screen name='Sobre' component={Sobre} />
      </drawer.Navigator>
    </NavigationContainer>
  );
}