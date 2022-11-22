import { StyleSheet } from "react-native";
import { red, transparent, white } from "../../style/colors";
import { height, width, SfontSize, MfontSize, LfontSize, XLfontSize } from "../../style/dimensions";


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        height: height * 0.1,
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerDistrict: {
        position: 'absolute',
        fontSize: XLfontSize,
        fontWeight: 'bold',
        color: red,
        left: 0.01 * width,
        top: 0.08 * height,
    },
    headerTown: {
        position: 'absolute',
        fontSize: XLfontSize,
        fontWeight: 'bold',
        color: red,
        left: 0.01 * width,
        top: 0.12 * height,
    },
    selectContainer: {
        marginTop: 0.05 * height,
        height: height * 0.1,
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    selectContainer2: {
        marginBottom: 0.02 * height,
    },
    selectButton: {
        width: width * 0.8,
        height: height * 0.05,
        backgroundColor: white,
        borderRadius: 10,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    selectButtonText: {
        color: red,
        fontSize: 20,
    },
    selectIconContainer: {
        width: width * 0.1,
        height: height * 0.05,
        backgroundColor: red,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        left: - 0.02 * width,
    },
    selectIcon: {
        color: white,
        fontSize: 20,
    },
    selectDropdown: {
        width: width * 0.8,
        height: height * 0.3,
        backgroundColor: white,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: red,
    },
    selectRow: {
        width: width * 0.8,
        height: height * 0.05,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: red,
    },
    selectRowText: {
        color: red,
        fontSize: 20,
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