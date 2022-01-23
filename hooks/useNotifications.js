import { useEffect } from "react";

import * as Notifications from "expo-notifications";
import expoPushToken from "../api/expoPushToken";

const useNotifications = (notificationListener) => {
  useEffect(() => {
    registerPushNotifications();
    if (notificationListener)
      Notifications.addNotificationsDroppedListener(notificationListener);
  }, []);

  const registerPushNotifications = async () => {
    try {
      const permission = await Notifications.getPermissionsAsync();

      if (!permission.granted) return;

      const token = await (await Notifications.getExpoPushTokenAsync()).data;

      expoPushToken.register(token);
    } catch (error) {
      console.log("Error getting push token", error);
    }
  };
};

export default useNotifications;
