import { openSidebar, closeSidebar, toggleSidebar } from './sidebar'

describe('Sidebar functions', () => {
  beforeEach(() => {
    document.body.style.overflow = ''
    document.documentElement.style.setProperty('--SideNavigation-slideIn', '')
  })

  describe('openSidebar', () => {
    test('should set body overflow to hidden', () => {
      openSidebar()
      expect(document.body.style.overflow).toBe('hidden')
    })

    test('should set --SideNavigation-slideIn property to 1', () => {
      openSidebar()
      expect(document.documentElement.style.getPropertyValue('--SideNavigation-slideIn')).toBe('1')
    })
  })

  describe('closeSidebar', () => {
    test('should remove --SideNavigation-slideIn property', () => {
      document.documentElement.style.setProperty('--SideNavigation-slideIn', '1')
      closeSidebar()
      expect(document.documentElement.style.getPropertyValue('--SideNavigation-slideIn')).toBe('')
    })

    test('should remove body overflow property', () => {
      document.body.style.overflow = 'hidden'
      closeSidebar()
      expect(document.body.style.overflow).toBe('')
    })
  })

  describe('toggleSidebar', () => {
    test('should open sidebar when it is closed', () => {
      toggleSidebar()
      expect(document.body.style.overflow).toBe('hidden')
      expect(document.documentElement.style.getPropertyValue('--SideNavigation-slideIn')).toBe('1')
    })

    test('should close sidebar when it is open', () => {
      document.documentElement.style.setProperty('--SideNavigation-slideIn', '1')
      document.body.style.overflow = 'hidden'
      toggleSidebar()
      expect(document.body.style.overflow).toBe('')
      expect(document.documentElement.style.getPropertyValue('--SideNavigation-slideIn')).toBe('')
    })
  })
})
