import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import AppText from './AppText'
import colors from '../config/colors'

const Card = ({ title, subTitle, image, onPress }) => {
  const navigation = useNavigation()

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={image} style={styles.image} />
      <View style={styles.textContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </TouchableOpacity>
  )
}
export default Card
const styles = StyleSheet.create({
  card: {
    marginTop: 20,
    backgroundColor: colors.white,
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
  },
  textContainer: {
    padding: 20,
    rowGap: 5,
  },
  title: {
    fontWeight: 'bold',
  },
  subTitle: {
    color: colors.secondary,
  },
})
