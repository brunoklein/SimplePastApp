import { NativeModules } from 'react-native';

export default function getUserLocale() {
  // TODO IOS requires another function
  const str = NativeModules.I18nManager.localeIdentifier;

  if (typeof str === 'string') {
    return str.replace('_', '-');
  }
}
