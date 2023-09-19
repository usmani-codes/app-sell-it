import { StyleSheet, Text, View } from 'react-native'
import AppTextInput from '../AppTextInput'
import ErrorMessage from './ErrorMessage'
import { useFormikContext } from 'formik'

const AppFormField = ({ name, ...otherParams }) => {
  const { handleChange, setFieldTouched, touched, errors } = useFormikContext()
  return (
    <>
      <AppTextInput
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        {...otherParams}
        // autoCapitalize='none'
        // autoCorrect={false}
        // icon={'email'}
        // keyboardType='email-address'
        // placeholder='Email'
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  )
}
export default AppFormField
const styles = StyleSheet.create({})
