import { StyleSheet } from "react-native";
import { red, transparent, white } from "../../style/colors";
import { height, width, SfontSize, MfontSize, LfontSize, XLfontSize, XXLfontSize } from "../../style/dimensions";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: white,
    },
    map: {
        flex: 1,
        backgroundColor: red,
        height: height * 0.5,
        width: width,
        overflow: 'hidden',
        elevation: 5,
        position: 'relative',
        marginTop: height * 0.03,
    },
    marker: {
        width: width * 0.1,
        height: height * 0.08,
        resizeMode: 'contain',
    },
    locationButton: {
        position: 'absolute',
        top: height * 0.34,
        left: width * 0.02,
        backgroundColor: red,
        width: width * 0.25,
        height: height * 0.06,
        resizeMode: 'contain',
        borderRadius: 10,
        padding: 0.005 * width,
    },
    locationButtonText: {
        color: white,
        fontSize: SfontSize,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    pharmaciesButton: {
        backgroundColor: white,
        width: width * 0.75,
        height: height * 0.06,
        borderColor: red,
        borderWidth: 1,
        borderRadius: 10,
        padding: 0.005 * width,
        alignSelf: 'center',
        marginTop: height * 0.03,
        justifyContent: 'center',
        alignItems: 'center',
    },
    pharmaciesButtonText: {
        color: red,
        fontSize: LfontSize,
        fontWeight: 'bold',
    },
    pharmaciesContainer: {
        flex: 1,
        marginTop: height * 0.01,
    },
    pharmacyCard: {
        width: width * 0.85,
        minHeight: height * 0.2,
        maxHeight: height * 0.3,
        backgroundColor: white,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: red,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 0.01 * height,
        alignSelf: 'center',
        padding: 0.01 * height,
    },
    pharmacyName: {
        textAlign: 'center',
        fontSize: XLfontSize,
        fontWeight: 'bold',
        color: red,
    },
    pharmacyAddress: {
        textAlign: 'center',
        fontSize: LfontSize,
        color: red,
    },
    pharmacyCounty: {
        textAlign: 'center',
        fontSize: LfontSize,
        color: red,
    },
    pharmacyPhone: {
        textAlign: 'center',
        fontSize: LfontSize,
        color: red,
    },
    pharmacyAddress2: {
        textAlign: 'center',
        fontSize: MfontSize,
        color: red,
    },


});
export default styles;