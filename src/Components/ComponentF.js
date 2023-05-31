import React, { Component } from 'react';
import { UserConsumer } from './UserContext';

class ComponentF extends Component {
  render() {
    return (
      <UserConsumer>
        {user => {
          return <div>Valor do contexto do usuário: {user}</div>;
        }}
      </UserConsumer>
    );
  }
}

export default ComponentF;
