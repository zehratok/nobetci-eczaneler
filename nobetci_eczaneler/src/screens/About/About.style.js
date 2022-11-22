import { StyleSheet } from "react-native";
import { red, transparent, white } from "../../style/colors";
import { height, width, SfontSize, MfontSize, LfontSize, XLfontSize } from "../../style/dimensions";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    aboutCard: {
        width: width * 0.9,
        height: height * 0.6,
        backgroundColor: white,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        padding: width * 0.05,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 10,
    },
    image: {
        width: width * 0.3,
        height: height * 0.2,
        marginBottom: height * 0.05,
    },
    textHeader: {
        fontSize: XLfontSize,
        fontWeight: 'bold',
        color: red,
        marginBottom: 0.02 * height,
    },
    text: {
        fontSize: MfontSize,
        color: red,
    },
    textBold: {
        fontSize: MfontSize,
        color: red,
        fontWeight: 'bold',
    },
    footer: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        width: width * 0.8,
        marginTop: 0.05 * height,
    },
    textFooter: {
        textAlign: 'center',
        fontSize: MfontSize,
        color: red,
        fontStyle: 'italic',
    },

});
export default styles;