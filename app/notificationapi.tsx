'use client'

import 'notificationapi-js-client-sdk/dist/styles.css'
import React, { memo, useEffect } from 'react'

const NotificationApiWidget = memo(({ userId }:{userId: string}) => {
  useEffect(() => {
    if (!userId) return

    const loadNotificationAPI = async () => {
      const NotificationAPI = (await import('notificationapi-js-client-sdk'))
        .default
      const notificationapi = new NotificationAPI({
        clientId: '9uisjmi87ud1vb2ms3gtg93sa',
        userId,
        language: 'en-US'
      })
      notificationapi.showInApp({
        root: 'CONTAINER_DIV_ID'
      })
    }

    loadNotificationAPI()
    // const notificationapi = new NotificationAPI({
    //   clientId: process.env.NEXT_PUBLIC_NOTIFICATIONAPI_CLIENT_ID,
    //   userId
    // })

    // const NotificationAPI = (await import("notificationapi-js-client-sdk")).default;
    // notificationapi.showInApp({
    //   root: 'container'
    // })
  }, [userId])

  return <div id="CONTAINER_DIV_ID"></div>
})

NotificationApiWidget.displayName = 'NotificationApiWidget'

export default NotificationApiWidget
