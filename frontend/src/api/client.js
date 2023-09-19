import { create } from 'apisauce'

const apiClient = create({
  baseURL: 'https://192.168.43.232:9000/api',
})

apiClient.get('/listings').then((res) => {
  if (!res.ok) return alert('Could not get the data')
  console.log(res.data)
})
