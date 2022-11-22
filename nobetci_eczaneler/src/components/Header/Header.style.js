import { StyleSheet } from "react-native";
import { red, white } from "../../style/colors";
import { height, width, SfontSize, MfontSize, LfontSize, XLfontSize, XXLfontSize } from "../../style/dimensions";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: -10,
        left: 0,
        right: 0,
        bottom: 0,
    },
    wave: {
        top : 0,
        position: 'absolute',
    },
    title: {
        position: 'absolute',
        top: height * 0.03,
        right: width * 0.03,
        fontSize: XXLfontSize,
        color: white,
        fontWeight: 'bold',
    },

});

export default styles;