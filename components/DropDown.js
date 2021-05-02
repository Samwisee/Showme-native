import React, { Component } from 'react';
import { Dropdown } from 'react-native-material-dropdown';

export default function HomeScreen() {

    let data = [{
      value: 'Banana',
    }, {
      value: 'Mango',
    }, {
      value: 'Pear',
    }];

    return (
      <Dropdown
        label='Favorite Fruit'
        data={data}
      />
    );
  }
