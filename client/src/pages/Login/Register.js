import React from 'react';
import { Button, Input, Checkbox, Form } from 'antd';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class Register extends React.Component {
  state = {
    username: '',
    email: '',
    password: '',
    isAdmin: false,
  }

  onChange = (e) => {
    if (e.target.name === 'isAdmin') {
      this.setState({
        [e.target.name]: e.target.checked,
      });
    } else {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  }

  onSubmit = async () => {
    const response = await this.props.mutate({
      variables: this.state,
    });
    console.log(response);
  }

  render() {
    return (
      <Form>
//////////original code//////////
        <Input
          name='username'
          placeholder='Username'
          onChange={e => this.onChange(e)}
          value={this.state.username} />
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
        <Checkbox
          name='isAdmin'
          checked={this.state.isAdmin}
          onChange={e => this.onChange(e)}
        >
          Admin?
        </Checkbox>
        <br />
        <Button onClick={() => this.onSubmit()} type="primary">Register</Button>
      </Form>
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