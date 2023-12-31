import React from 'react'
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native'
import AppText from '../AppText'
import Swipeable from 'react-native-gesture-handler/Swipeable'

import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../../config/colors'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

function ListItem({
  title,
  subTitle,
  image,
  IconComponent,
  onPress,
  renderRightActions,
}) {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
          <View style={styles.container}>
            {IconComponent}
            {image && <Image style={styles.image} source={image} />}
            <View style={styles.detailsContainer}>
              <AppText style={styles.title} numberOfLines={1}>
                {title}
              </AppText>
              {subTitle && (
                <AppText numberOfLines={1} style={styles.subTitle}>
                  {subTitle}
                </AppText>
              )}
            </View>
            <MaterialCommunityIcons name='chevron-right' size={25} />
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  subTitle: {
    color: colors.medium,
  },
  title: {
    fontWeight: '500',
  },
})

export default ListItem
