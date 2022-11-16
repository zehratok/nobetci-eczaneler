import {Dimensions} from 'react-native';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const SfontSize = 0.035 * width;
const MfontSize = 0.04 * width;
const LfontSize = 0.045 * width;
const XLfontSize = 0.05 * width;
const XXLfontSize = 0.055 * width;

export { height, width, SfontSize, MfontSize, LfontSize, XLfontSize, XXLfontSize };