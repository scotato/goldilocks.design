import createPersistedState from 'use-persisted-state'
const useSettingsState = createPersistedState('settings')
const useDeviceState = createPersistedState('device')

export const useDevice = () => {
  const [device, setDevice] = useDeviceState({
    isOff: false,
    isCharging: false,
    batteryLevel: 100
  })

  return [
    device,
    {
      isOff: isOff => setDevice({...device, isOff}),
      isCharging: isCharging => setDevice({...device, isCharging}),
      batteryLevel: batteryLevel => setDevice({...device, batteryLevel})
    }
  ]
}

export const useSettings = () => {
  const [settings, setSettings] = useSettingsState({
    isDarkMode: false
  })

  return [
    settings,
    {
      isDarkMode: isDarkMode => setSettings({...settings, isDarkMode})
    }
  ]
}
