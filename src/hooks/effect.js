import { useEffect } from 'react'
import { useDevice } from './'

export const useDeviceEffect = () => {
  const [{ batteryLevel, ...device }, setDevice] = useDevice()

  useEffect(() => {
    const batteryInterval = setInterval(() => {
      const isEmpty = batteryLevel <= 0
      const isFull = batteryLevel >= 100
      const isCharging = isFull ? false : isEmpty || device.isCharging

      setDevice.isCharging(isCharging)
      setDevice.batteryLevel(isCharging
        ? isFull
          ? 100
          : batteryLevel > 95
            ? 100
            : batteryLevel + 5
        : isEmpty
          ? 0
          : batteryLevel - 1
      )
    }, 1000)
    return () => clearInterval(batteryInterval)
  })
}