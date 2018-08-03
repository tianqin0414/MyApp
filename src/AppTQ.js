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
} from 'react-native';

import Item from './components/TQItem';

const styles = StyleSheet.create({
	root: {
		flexDirection: 'row',
	}
});

export default  class MyApp extends  Component {
	render() {
		return (
			<View style={styles.root}>
				<Item/>
				<Item/>
				<Item/>
			</View>
		);
	}

}