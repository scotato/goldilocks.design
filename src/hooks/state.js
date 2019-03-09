import createPersistedState from 'use-persisted-state'
import getTheme from '../styles/theme'

const useSettingsIsDarkModeState = createPersistedState('settings.isDarkMode')

export const useSettings = () => {
  const [isDarkMode, setIsDarkMode] = useSettingsIsDarkModeState(false)

  return [{
      isDarkMode
    }, {
      isDarkMode: val => setIsDarkMode(val)
    }
  ]
}

const usePageIdState = createPersistedState('page.id')
const usePageIconState = createPersistedState('page.icon')
const usePageTitleState = createPersistedState('page.title')
const usePageColorState = createPersistedState('page.color')
const usePageColorWeightState = createPersistedState('page.colorWeight')

export const usePage = () => {
  const [id, setId] = usePageIdState('home')
  const [icon, setIcon] = usePageIconState('goldilocks')
  const [title, setTitle] = usePageTitleState('goldilocks')
  const [color, setColor] = usePageColorState('black')
  const [colorWeight, setColorWeight] = usePageColorWeightState(500)

  return [{
    id,
    icon,
    title,
    color,
    colorWeight
  }, {
      id: val => setId(val),
      icon: val => setId(val),
      title: val => setId(val),
      color: val => setId(val),
      colorWeight: val => setId(val),
      page: page => {
        setId(page.id || id)
        setIcon(page.icon || icon)
        setTitle(page.title || title)
        setColor(page.color || color)
        setColorWeight(page.colorWeight || colorWeight)
      }
    }
  ]
}

const useDeviceIsOffState = createPersistedState('device.isOff')
const useDeviceIsChargingState = createPersistedState('device.isCharging')
const useDeviceBatteryLevelState = createPersistedState('device.batteryLevel')

export const useDevice = () => {
  const [isOff, setIsOff] = useDeviceIsOffState(false)
  const [isCharging, setIsCharging] = useDeviceIsChargingState(false)
  const [batteryLevel, setBatteryLevel] = useDeviceBatteryLevelState(100)

  return [{
      isOff,
      isCharging,
      batteryLevel
    }, {
      isOff: val => setIsOff(val),
      isCharging: val => setIsCharging(val),
      batteryLevel: val => setBatteryLevel(val),
      device: device => {
        setIsOff(device.isOff || isOff)
        setIsCharging(device.isCharging || isCharging)
        setBatteryLevel(device.batteryLevel || batteryLevel)
      }
    }
  ]
}

const useViewWidthState = createPersistedState('view.width')
const useViewHeightState = createPersistedState('view.height')

export const useView = () => {
  const [width, setWidth] = useViewWidthState(1280)
  const [height, setHeight] = useViewHeightState(720)

  return [{
    width,
    height,
  }, {
    width: val => setWidth(val),
    height: val => setHeight(val),
  }]
}

export const useTheme = () => {
  const [view] = useView()
  return [
    getTheme(view)
  ]
}
