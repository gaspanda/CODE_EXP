import { View, Text, Button } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function EventsScreen({navigation}) {
    function navigateToSecondScreen() {
        navigation.navigate("Events details");
    }

    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Events Go Here!</Text>
        <Button onPress={navigateToSecondScreen} title='see details' />
      </View>
    );
  }

function EventsSecondScreen(){
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text>Events EventsSecondScreen </Text>
        </View>
      );
}

  const Stack = createNativeStackNavigator();

  export default function EventsStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Events" component={EventsScreen} />
        <Stack.Screen name="Events details" component={EventsSecondScreen} />
      </Stack.Navigator>
    );
  }