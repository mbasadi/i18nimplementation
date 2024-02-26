'use client';

import "notificationapi-js-client-sdk/dist/styles.css";
import { memo, useEffect } from "react";
const NotificationAPIComponent = memo((props) => {
  useEffect(() => {
    const loadNotificationAPI = async () => {
      const NotificationAPI = (await import("notificationapi-js-client-sdk")).default;
      const notificationapi = new NotificationAPI({
        clientId: '9uisjmi87ud1vb2ms3gtg93sa',
        userId: 'mohammad+testNext@notificationapi.com',
        language:'es-ES'
      });
      notificationapi.showInApp({
        root: "CONTAINER_DIV_ID",
      });
    };

    // Call the async function
    loadNotificationAPI();
  }, []);

  return <div id="CONTAINER_DIV_ID"></div>;
});

NotificationAPIComponent.displayName = 'NotificationAPIComponent';

export default NotificationAPIComponent;