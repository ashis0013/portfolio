import { useEffect, useState } from 'react'

const useLocalStorage = (key: string, initialValue: string) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.log(error)
      return initialValue
    }
  })

  const setValue = (value: string) => {
    try {
      setStoredValue(value)
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.log(error)
    }
  }
  return [storedValue, setValue]
}

const useDarkMode = () => {
  const [enabled, setEnabled] = useLocalStorage('dark-theme', 'dark')
  const isEnabled = enabled === 'dark'

  useEffect(() => {
    const bodyClass = window.document.documentElement.classList

    isEnabled ? bodyClass.add('dark') : bodyClass.remove('dark')
  }, [enabled, isEnabled])

  return [enabled, setEnabled]
}

export default useDarkMode
