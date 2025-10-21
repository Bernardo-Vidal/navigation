import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome6 } from "@react-native-vector-icons/fontawesome6";

import Favoritos from "./screens/Favoritos.js";
import Locais from "./screens/Locais.js";
import Mapa from "./screens/Mapa.js";
import Cardapio from "./screens/Cardapio.js";
import Sobre from "./screens/Sobre.js";

const tabs = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <tabs.Navigator
                screenOptions={{
                    tabBarActiveTintColor: "#03045E",
                    tabBarActiveBackgroundColor: "#CAF0F8",
                    tabBarInactiveBackgroundColor: "#03045E",
                    tabBarInactiveTintColor: "#CAF0F8",
                    headerStyle: { backgroundColor: "#03045E" },
                    headerTintColor: "#CAF0F8",
                    tabBarStyle: { backgroundColor: "#03045E" },
                }}
            >
                <tabs.Screen
                    name="Mapa"
                    component={Mapa}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <FontAwesome6
                                name="map"
                                size={20}
                                iconStyle="solid"
                                color={focused ? "#023E8A" : "#ADE8F4"}
                            />
                        ),
                    }}
                />
                <tabs.Screen
                    name="Locais"
                    component={Locais}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <FontAwesome6
                                name="map-pin"
                                size={20}
                                iconStyle="solid"
                                color={focused ? "#023E8A" : "#ADE8F4"}
                            />
                        ),
                    }}
                />
                {/*<tabs.Screen name='Cardápio' component={Cardapio} options={{tabBarIcon: ({focused}) => <FontAwesome6 name='bowl-food' size={20} iconStyle='solid' color={focused ? "#023E8A" : "#ADE8F4"} />}} />
        <tabs.Screen name='Favoritos' component={Favoritos} options={{tabBarIcon: ({focused}) => <FontAwesome6 name='star' size={20} iconStyle='solid' color={focused ? "#023E8A" : "#ADE8F4"} />}} />
        */}
                <tabs.Screen
                    name="Sobre"
                    component={Sobre}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <FontAwesome6
                                name="circle-info"
                                size={20}
                                iconStyle="solid"
                                color={focused ? "#023E8A" : "#ADE8F4"}
                            />
                        ),
                    }}
                />
            </tabs.Navigator>
        </NavigationContainer>
    );
}
