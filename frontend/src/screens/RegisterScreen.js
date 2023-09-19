import Screen from '../components/Screen'
import AppTextInput from '../components/AppTextInput'
import AppButton from '../components/AppButton'
const RegisterScreen = () => {
  return (
    <Screen style={{ padding: 10 }}>
      <AppTextInput icon={'account'} placeholder='Name' />
      <AppTextInput icon={'email'} placeholder='Email' />
      <AppTextInput icon={'lock'} placeholder='password' />
      <AppButton title={'REGISTER'} />
    </Screen>
  )
}
export default RegisterScreen
