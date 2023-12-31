import { StyleSheet, Text, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
const Icon = ({
  name,
  size = 40,
  backgroundColor = '#000',
  iconColor = '#fff',
}) => {
  return (
    <View
      style={[
        styles.icon,
        { width: size, height: size, borderRadius: size / 2, backgroundColor },
      ]}
    >
      <MaterialCommunityIcons name={name} color={iconColor} size={size * 0.5} />
    </View>
  )
}
export default Icon
const styles = StyleSheet.create({
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})
