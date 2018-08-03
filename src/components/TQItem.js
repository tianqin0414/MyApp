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
	Dimensions,
} from 'react-native';

const {width, height} = Dimensions.get('window');

const thirdWidth = width / 3;

const imageWidth = thirdWidth - 10 * 2;

const styles = StyleSheet.create({
	root: {
		marginTop: 20,
		width: width / 3,
		// alignItems: 'center',
	},
	image: {
		width: imageWidth,
		height: width / 3 / 0.697,

	},
	title: {
		marginTop: 5,
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'center',
	}
});

export default  class Item extends  Component {
	render() {
		return (
			<View style={styles.root}>

				<Image
					source = {require('../img/poster.jpg')}
					style={styles.image}
				/>
				<Text style={styles.title} numberOfLines={1}>金刚狼3:殊死一战</Text>
			</View>
		);
	}

}