import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/home";
import Cart from "../pages/cart";

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{
                headerShown: false
            }} />

            <Stack.Screen name="Cart" component={Cart} options={{
                headerTitle: 'Itens do carrinho',
            }} />
        </Stack.Navigator>
    )
}