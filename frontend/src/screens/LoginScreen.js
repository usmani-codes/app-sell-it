import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { object, string } from 'yup'

import Screen from '../components/Screen'
import { AppForm, AppFormField, SubmitButton } from '../components/form'

let validationSchema = object({
  email: string().required().label('Email'),
  password: string().required().min(4).label('Password'),
})

const LoginScreen = () => {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo-red.png')} />

      <AppForm
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          name='email'
          autoCapitalize='none'
          autoCorrect={false}
          icon={'email'}
          keyboardType='email-address'
          placeholder='Email'
        />
        <AppFormField
          name='password'
          autoCapitalize='none'
          autoCorrect={false}
          icon={'lock'}
          secureTextEntry
          placeholder='Password'
        />
        <SubmitButton title={'Login'} />
      </AppForm>
    </Screen>
  )
}
export default LoginScreen
const styles = StyleSheet.create({
  container: { paddingHorizontal: 10 },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
})
