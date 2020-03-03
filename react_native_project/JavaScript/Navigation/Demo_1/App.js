import React, { Component, useState } from 'react';
import { View, StyleSheet, Text, Button, TextInput, Image } from 'react-native';

import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();

class App extends Component{
    render(){
        return  (
            <NavigationContainer>
                <Stack.Navigator
                    // screenOptions = { {title: "Màn hình từ navigator"} }
                >
                    <Stack.Screen 
                        name = "HomeScreen" 
                        component = { HomeScreen }
                        options = { {title: "Màn hình chính"} }
                    />
                    <Stack.Screen 
                        name = "DetailScreen" 
                        component = { DetailScreen }
                        options = { ({route})=>({title: route.params.title}) }
                        initialParams = { { _default: "default "}}
                    />
                    <Stack.Screen
                        name = "CustomHeaderScreen"
                        component = { CustomHeaderScreen }
                        options = { {
                            headerTitle: props => <LogoTitle {...props} />,
                            headerRight: () => (
                                <Button
                                  onPress={() => alert('This is a button!')}
                                  title="Info"
                                //   color="#fff"
                                />
                              )
                        } }
                        
                    />
                </Stack.Navigator>
            </NavigationContainer>
        )
        
    }
};


function HomeScreen({ route, navigation }){
    var post = route.params?.post;
    return (
        <View
            style = { styles.fullScreen }
        >
            <Text>
                Home Screen
            </Text>
            <Button
                title = "Go to Detail"
                onPress = { ()=> navigation.navigate("DetailScreen", { 
                    id: "1",
                    name: "Banana",
                    title: "Detail screen, from Home"
                }) }
            />
            <Text>
                Result from Detail [{post}]
            </Text>
            <Button
                title = "Set Option for Screen"
                onPress = { ()=> navigation.setOptions({ 
                    title: "Updated!",
                    headerStyle: {
                        backgroundColor: '#f4511e',
                      },
                      headerTintColor: '#fff',
                      headerTitleStyle: {
                        fontWeight: 'bold',
                      }
                }) }
            />
            <Button
                title = "Navigate To Custom Header"
                onPress = { ()=> navigation.navigate("CustomHeaderScreen") }
            />

        </View>
    )
};

function DetailScreen({ route, navigation }){
    var { name, id, _default } = route.params;

    const [post, setPost] = useState('');
    return (
        <View
            style = { styles.fullScreen }
        >
            <Text>
                Detail Screen
            </Text>
            <Text>
                passes param: {name} + & + {id} + default param: + {_default}
            </Text>
            <Button
                title = "Back to Home"
                onPress = { ()=> navigation.navigate("HomeScreen") }
            />
            <Button 
                title = "Go to Detail again"
                onPress = { ()=> navigation.push("DetailScreen") }
            />
            <Button
                title = "Go back"
                onPress = { ()=> navigation.goBack() }
            />
            <Button
                title = "Go to first screen"
                onPress = { ()=> navigation.popToTop() }
            />
            <TextInput
                placeholder = "type and be back to Home"
                value = {post}
                onChangeText = {setPost}
            />
            <Button
                title = "Result to Home"
                onPress = { ()=>navigation.navigate("HomeScreen", { post: post })}
            >

            </Button>
        </View>
    )
}


function LogoTitle(){
    return (
        <Image
            style = { {width: 60, height: 50} }
            source = { require("../../../res/image/react.png") }
        />
    )
};
function CustomHeaderScreen({ route, navigation }){
    return (
        <View>
            <Button
                title = " Back to Home"
                onPress = { ()=> navigation.navigate("HomeScreen")}
            />


        </View>
    )
};

const styles = StyleSheet.create({
    fullScreen: {
        flex: 1,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center'
    },
    redScreen: {
        backgroundColor: 'red'
    },
    blueScreen: {
        backgroundColor: 'blue'
    }
});

export default App;