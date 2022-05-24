import React, { useState, useRef } from 'react';
import { View, TouchableWithoutFeedback, Text, StyleSheet, Image, Animated } from 'react-native';
import { AntDesign, Entypo } from "@expo/vector-icons";
import colors from '../assets/colors/colors';


const AddMoodButton = (props) => {
    const [username, setUsername] = useState("")
    const [moodValue, setMoodValue] = useState(""); 
    const [date, setDate] = useState(new Date());
    const [error, setError] = useState("");
    // componentDidMount() {
    //     this.setState({
    //         users: ['test user'],
    //         username:'test user'
    //     })
    // }
    const animation = useRef(new Animated.Value(0)).current;

    const toggleMenu = () => {
        const toValue = AddMoodButton.open ? 0 : 1;

        Animated.spring(animation, {
            toValue,
            friction: 7,
            useNativeDriver: false
        }).start();

        AddMoodButton.open = !AddMoodButton.open;
    }

    // KNOWN BUG: mood will not change immediately - will lag behind by 1 input

    const greatStyle = {
        transform: [
            { scale: animation },
            {
                translateY: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -80]
                })
            }
        ]
    };
    
    const goodStyle = {
        transform: [
            { scale: animation },
            {
                translateY: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -160]
                })
            }
        ]
    };

    const normalStyle = {
        transform: [
            { scale: animation },
            {
                translateY: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -240]
                })
            }
        ]
    };

    const anxiousStyle = {
        transform: [
            { scale: animation },
            {
                translateY: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -320]
                })
            }
        ]
    };

    const sadStyle = {
        transform: [
            { scale: animation },
            {
                translateY: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -400]
                })
            }
        ]
    };


    const rotation = {
        transform: [
            {
                rotate: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: ["0deg", "45deg"]
                })
            }
        ]
    };

    return (
        <View style={[styles.container, props.style]}>
            
            <TouchableWithoutFeedback 
                onPress={() => {
                }}>
                <Animated.Image style={[styles.button, styles.secondary, sadStyle]}
                source={require("../assets/images/add_bsr.png")}>
                </Animated.Image>
            </TouchableWithoutFeedback>
            
            <TouchableWithoutFeedback 
                onPress={() => {
                }}>
                <Animated.Image style={[styles.button, styles.secondary, anxiousStyle]}
                source={require("../assets/images/add_mood.png")}>
                </Animated.Image>
            </TouchableWithoutFeedback>
            
            <TouchableWithoutFeedback 
                onPress={() => {
                }}>
                <Animated.Image style={[styles.button, styles.secondary, normalStyle]}
                source={require("../assets/images/add_activity.png")}>
                </Animated.Image>
            </TouchableWithoutFeedback>
            
            <TouchableWithoutFeedback 
                onPress={() => {
                }}>
                <Animated.Image style={[styles.button, styles.secondary, goodStyle]}
                source={require("../assets/images/add_weight.png")}>
                </Animated.Image>
            </TouchableWithoutFeedback>
            
            <TouchableWithoutFeedback 
                onPress={() => {
                }}>
                <Animated.Image style={[styles.button, styles.secondary, greatStyle]}
                source={require("../assets/images/add_food.png")}>
                </Animated.Image>
            </TouchableWithoutFeedback>
            
            <TouchableWithoutFeedback onPress={toggleMenu}>
                <Animated.View style={[styles.button, styles.menu, rotation]}>
                    <AntDesign name="plus" size={24} color="#FFF" />
                </Animated.View>
            </TouchableWithoutFeedback>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        position: "absolute"
    },
    button: {
        position: "absolute",
        width: 60,
        height: 60,
        borderRadius: 60/2,
        alignItems:"center",
        justifyContent:"center",
        shadowRadius: 10,
        shadowColor: "#F02A4B",
        shadowOpacity: 0.3,
        shadowOffset: {height:10}
    },
    menu: {
        backgroundColor: "#F02A4B"
    },
    secondary: {
        width: 370,
        height: 70,
        borderColor:colors.NA_text_blue,
        borderWidth:1
        // backgroundColor: "#FFF"
    }
});

export default AddMoodButton;