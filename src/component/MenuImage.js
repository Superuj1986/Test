import React from "react";
import { Image, TouchableOpacity, StyleSheet } from "react-native";
import PropTypes from "prop-types";

export default function MenuImage(props){
    return(
        <TouchableOpacity>
            <Image style={styles.headerButtonImage} source={require("../../assets/icons/menu.png")}/>
        </TouchableOpacity>
    )
}
MenuImage.propTypes ={
    onPress: PropTypes.func,
};
const styles = StyleSheet.create({
    headerButtonContainer: {
      padding: 10
    },
    headerButtonImage: {
      justifyContent: 'center',
      width: 25,
      height: 25,
      margin: 6
    }
  });
  