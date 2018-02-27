import React from 'react';
import { View, Text } from 'react-native';

const SearchScreen = props => (
    <Text>You're searching by {props.searchingBy}</Text>
);

export default SearchScreen;
