import * as React from 'react';
import {
    View,
    Text,
    Switch,
    TextInput,
    Button,
} from 'react-native';
import UserContext, { UserConsumer } from './UserContext'

class HomePage extends React.Component {
  static contextType = UserContext

  updateUser = () => {
    const { user, setUser } = this.context;
    setUser({name: 'raj_rao44'})
    console.log(user);
  }

  render() {
    return (
      <>
        <UserConsumer>
          {({ user }) =>
          <>
            <Button title='Update User' onPress={this.updateUser}/>
            <Text>Current User: {user.name}</Text>
          </>
          }
        </UserConsumer>
      </>
    )
  }
}

export default HomePage;