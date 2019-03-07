import createPersistedState from 'use-persisted-state'
const useSettingsState = createPersistedState('settings')
const usePageState = createPersistedState('page')
const useDeviceState = createPersistedState('device')

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

export const usePage = () => {
  const [page, setPage] = usePageState({
    id: 'home',
    icon: 'goldilocks',
    title: 'goldilocks',
    color: 'black',
    colorWeight: 500
  })

  return [
    page,
    {
      id: id => setPage({...page, id}),
      icon: icon => setPage({...page, icon}),
      title: title => setPage({...page, title}),
      color: color => setPage({...page, color}),
      colorWeight: colorWeight => setPage({...page, colorWeight}),
      page: props => setPage({...page, ...props})
    }
  ]
}

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
