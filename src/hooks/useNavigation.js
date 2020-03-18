import createPersistedState from 'use-persisted-state'
const useNavigationState = createPersistedState('navigationIsOpen')

export const useNavigation = (initialState = false) => {
  const [isOpen, setIsOpen] = useNavigationState(initialState)

  return {
    isOpen,
    toggleIsOpen: () => setIsOpen(!isOpen),
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
  }
}
