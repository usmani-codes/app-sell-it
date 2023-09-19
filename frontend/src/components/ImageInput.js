import React, { useEffect } from 'react'
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import * as DocumentPicker from 'expo-document-picker'

import colors from '../config/colors'

function ImageInput({ imageUri, onChangeImage }) {
  const handlePress = () => {
    if (!imageUri) selectImage()
    else
      Alert.alert('Delete', 'Are you sure you want to delete this image?', [
        { text: 'Yes', onPress: () => onChangeImage(null) },
        { text: 'No' },
      ])
  }

  const selectImage = async () => {
    try {
      const { assets } = await DocumentPicker.getDocumentAsync({
        // multiple: true,
        type: 'image/*',
      })
      assets.map(({ uri }) => onChangeImage(uri))
    } catch (error) {
      console.log('Error Selecting Image')
    }
  }

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri && (
          <MaterialCommunityIcons
            color={colors.medium}
            name='camera'
            size={40}
          />
        )}
        {imageUri && (
          <Image
            source={{ uri: imageUri }}
            style={{ width: 100, height: 100 }}
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.light,
    borderRadius: 15,
    height: 100,
    width: 100,
    marginVertical: 10,
    overflow: 'hidden',
  },
  image: {
    height: '100%',
    width: '100%',
  },
})

export default ImageInput
