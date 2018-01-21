import React from 'react';
import { Button, Input} from 'antd';
import { graphql } from 'react-apollo';
import Register from './Register.js';
import gql from 'graphql-tag';

class Login extends React.Component {
  state = {
    email: '',
    password: ''
  }

  onChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  

  onSubmit = async () => {
    const response = await this.props.mutate({
      variables: this.state,
    });
    console.log(response);
  }

  render() {
    return (
      <div>
        <Input
          name='email'
          placeholder='Email'
          onChange={e => this.onChange(e)}
          value={this.state.email} />
        <Input
          name='password'
          placeholder='Password'
          type='password'
          onChange={e => this.onChange(e)}
          value={this.state.password} />
        <br />
        <Button onClick={() => this.onSubmit()} type="primary">Login</Button>
      </div>
    );
  }
}

const mutation = gql`
mutation($username: String!, $email: String!, $password: String!, $isAdmin: Boolean) {
  register(username: $username, email: $email, password: $password, isAdmin: $isAdmin) {
    id
  } 
}
`;

export default graphql(mutation)(Register);