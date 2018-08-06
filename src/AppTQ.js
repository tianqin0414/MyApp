/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	FlatList,
} from 'react-native';

import Item from './components/TQItem';

import Movies from '../movies';

const styles = StyleSheet.create({
	row: {
		paddingHorizontal: 15,
	}
});

export default  class MyApp extends  Component {
	render() {
		return (
			<View>
				<FlatList
					numColumns={3}
					columnWrapperStyle={styles.row}
					keyExtractor={item => item.id}
					data = {Movies.subjects}
					renderItem={({item}) => <Item title={item.title} image={item.images.medium} stars={item.rating.stars}/>}
				/>
			</View>
		);
	}

}