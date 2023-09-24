import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import navigationTheme from './src/navigation/navigationTheme'
import AppNavigator from './src/navigation/AppNavigator'
import ActivityIndicator from './src/components/ActivityIndicator'

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  )
}
