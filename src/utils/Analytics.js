import analytics from '@react-native-firebase/analytics';
import DeviceInfo from 'react-native-device-info';
import { Constants } from './';

export const logEvent = (name, info) => {
    try {
        info = info || {};
        let deviceInfo = getDeviceInfo();
        analytics().logEvent(name, { ...info, ...deviceInfo });
    } catch (ex) {
        console.log(
            JSON.stringify({ event: name, info: info, error: ex })
        );
    }
}

getDeviceInfo = () => {
    return {
        app_version: Constants.APP_VERSION,
        device_unique_id: DeviceInfo.getUniqueId(),
        device_model: DeviceInfo.getModel(),
        device_system_version: DeviceInfo.getSystemVersion(),
    };
}
