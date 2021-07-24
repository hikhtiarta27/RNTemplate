import { Dimensions, Platform, StatusBar } from 'react-native';
const { width, height } = Dimensions.get('window');
export const dimensions = {
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  width,
  height,
};

export function iphoneStatusBarSize() {
  const dim = Dimensions.get('window');
  const statusBarDefaultHeight = 20;
  let statusBarHeight = statusBarDefaultHeight;

  if (Platform.OS === 'ios') {
    if (isIPhoneXSize(dim) || isIPhoneXrSize(dim)) {
      statusBarHeight = 44;
    } else if (isIPhone12Size(dim) || isIPhone12ProSize(dim)) {
      statusBarHeight = 47;
    }
  }
  return statusBarHeight;
}

export function isIPhoneXSize(dim) {
  return dim.height === 812 || dim.width === 812;
}
export function isIPhoneXrSize(dim) {
  return dim.height === 896 || dim.width === 896;
}
export function isIPhone12Size(dim) {
  return dim.height === 844 || dim.width === 844;
}
export function isIPhone12ProSize(dim) {
  return dim.height === 926 || dim.width === 926;
}

export const statusBarHeight = Platform.select({
  ios: iphoneStatusBarSize(),
  android: StatusBar.currentHeight,
});

export const appBarHeight = Platform.select({
  ios: 44,
  android: 56,
});
