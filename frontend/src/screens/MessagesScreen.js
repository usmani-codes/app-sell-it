import { useState } from 'react'
import { FlatList } from 'react-native'
import Screen from '../components/Screen'

import {
  ListItem,
  ListItemSeparator,
  ListItemDeleteAction,
} from '../components/list'

const initialMessages = [
  {
    id: 1,
    tittle: 'T1 ',
    desc: 'D1',
    image: require('../assets/usman.png'),
  },
  {
    id: 2,
    tittle: 'T2 ',
    desc: 'D2',
    image: require('../assets/usman.png'),
  },
]

const MessagesScreen = () => {
  const [messages, setMessages] = useState(initialMessages)
  const [refreshing, setRefreshing] = useState(false)

  const handleDelete = (item) => {
    const filteredMessages = messages.filter((msg) => msg.id !== item.id)
    setMessages(filteredMessages)
  }

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id}
        renderItem={({ item }) => (
          <ListItem
            title={item.tittle}
            subTitle={item.desc}
            image={item.image}
            onPress={() => console.log(item.id, 'message Selected')}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={() => <ListItemSeparator />}
        refreshing={refreshing}
        onRefresh={() =>
          setMessages([
            {
              id: 2,
              tittle: 'T2 ',
              desc: 'D2',
              image: require('../assets/usman.png'),
            },
          ])
        }
      />
    </Screen>
  )
}
export default MessagesScreen
