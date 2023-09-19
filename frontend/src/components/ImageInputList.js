import React, { useRef } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import ImageInput from './ImageInput'

const ImageInputList = ({ imageUris, onRemoveImage, onAddImage }) => {
  const scrollViewRef = useRef()

  return (
    <View>
      <ScrollView
        horizontal
        ref={scrollViewRef}
        onContentSizeChange={() => {
          console.log(scrollViewRef.current, 'scrollToEnd')
          return scrollViewRef.current.scrollToEnd()
        }}
      >
        <View style={styles.container}>
          {imageUris.map((uri) => (
            <ImageInput
              key={uri}
              imageUri={uri}
              onChangeImage={() => onRemoveImage(uri)}
            />
          ))}

          {/* always render on to start picking images */}
          {<ImageInput onChangeImage={(uri) => onAddImage(uri)} />}
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 20,
    paddingHorizontal: 10,
  },
})

export default ImageInputList
