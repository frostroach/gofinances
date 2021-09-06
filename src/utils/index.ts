import { Dimensions, PixelRatio, Platform } from 'react-native';

const { height, width } = Dimensions.get('window');
const BASE_WIDTH = 320;

const scale = width / BASE_WIDTH;

const fontScale = (value: number): number => {
  const newSize = value * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  }
  return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
};

const heightPercentageToDP = (value: string): number =>
  PixelRatio.roundToNearestPixel((height * parseFloat(value)) / 100);

const widthPercentageToDP = (value: string): number =>
  PixelRatio.roundToNearestPixel((width * parseFloat(value)) / 100);

// const emptyToNull = (obj: Record<string, unknown>): Record<string, unknown> => {
//   Object.keys(obj).forEach((key) => {
//     if (obj[key] === '' || obj[key] === undefined) {
//       obj[key] = null;
//     }
//   });

//   return nullObject;
// };

export {
  // emptyToNull,
  fontScale,
  heightPercentageToDP,
  widthPercentageToDP,
};
