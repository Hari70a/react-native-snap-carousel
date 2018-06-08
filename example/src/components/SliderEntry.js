import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import PropTypes from "prop-types";
import { ParallaxImage } from "react-native-snap-carousel";
import styles from "example/src/styles/SliderEntry.style";

export default class SliderEntry extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }
  static propTypes = {
    data: PropTypes.object.isRequired,
    even: PropTypes.bool,
    parallax: PropTypes.bool,
    parallaxProps: PropTypes.object
  };

  render() {
    return (
      <View style={styles.slideInnerContainer}>
        <View style={styles.shadow} />
        <View style={[styles.imageContainer]}>
          <TextInput
            value={this.state.text}
            placeholder ={'Enter title'}
            style={{ height: 50, paddingLeft: 20 }}
            onChangeText={text => this.setState({ text: text })}
          />
        </View>
        <View style={[styles.imageContainer]}>
          <TextInput
            value={this.state.option1}
            placeholder ={'Enter option1'}
            style={{ height: 50, paddingLeft: 20 }}
            onChangeText={option1 => this.setState({ option1: option1 })}
          />
        </View>
        <View style={[styles.imageContainer]}>
          <TextInput
            value={this.state.option2}
            placeholder ={'Enter option2'}
            style={{ height: 50, paddingLeft: 20 }}
            onChangeText={option2 => this.setState({ option2: option2 })}
          />
        </View>
        <View style={[styles.imageContainer]}>
          <TextInput
            value={this.state.option3}
            placeholder ={'Enter option3'}
            style={{ height: 50, paddingLeft: 20 }}
            onChangeText={option3 => this.setState({ option3: option3 })}
          />
        </View>
        <View style={[styles.imageContainer]}>
          <TextInput
            value={this.state.option4}
            placeholder ={'Enter option4'}
            style={{ height: 50, paddingLeft: 20 }}
            onChangeText={option4 => this.setState({ option4: option4 })}
          />
        </View>
        
      </View>
    );
  }
}
