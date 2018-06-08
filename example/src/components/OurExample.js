import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image
} from "react-native";
import { Colors, Images } from "../Assets";
const options = [
  {
    text: ""
  },
  {
    text: ""
  },
  {
    text: ""
  },
  {
    text: ""
  }
];
export default class OurExample extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }
  render() {
    console.log(this.props, "Propas Sildfer entry @@@@");
    return (
      <View style={styles.container}>
        <View style={styles.questionContainer}>
          {this.renderQuestionTitle()}
          <View style={styles.separator} />
          {this.renderToastMsg()}
        </View>
      </View>
    );
  }
  renderToastMsg() {
    return (
      <View style={styles.toastMsgContainer}>
        <Text style={styles.toastMsgTxt}>
          ANSWERS WILL BE SHOWN IN A RANDOM ORDER
        </Text>
      </View>
    );
  }
  renderLabels() {
    return (
      <View style={{ flex: 0.1, flexDirection: "row" }}>
        <View style={{ flex: 0.65 }}>
          <Text style={styles.questionTitleLabel}>
            QUESTION #{this.props.data.position}
          </Text>
        </View>
      </View>
    );
  }

  renderQuestionTitle() {
    return (
      <View style={styles.questionRowContainer}>
        {this.renderLabels()}
        <View style={{ marginTop: 15 }}>
          <TextInput
            value={this.state.text}
            style={styles.input}
            maxLength={110}
            onSubmitEditing={() => this.refs["option_0"].focus()}
            underlineColorAndroid={"transparent"}
            onChangeText={text => this.setState({ text: text })}
          />
        </View>
      </View>
    );
  }
  getOptionLabel(index) {
    if (index == 0) return "RIGHT ANSWER";
    else if (index > 1) return "WRONG ANSWER (OPTIONAL)";
    else return "WRONG ANSWER";
  }
  renderOptionLabels(index) {
    var optionLabel = this.getOptionLabel(index);
    var imageLabel = index == 0 ? "rightAnswer16" : "wrongAnswer16";
    return (
      <View style={styles.optionLabelContainer}>
        <View style={{ marginTop: 4, flexDirection: "row" }}>
          <Image source={Images[imageLabel]} />
          <View style={{ marginLeft: 5, marginTop: 2 }}>
            <Text
              style={[
                styles.questionTitleLabel,
                { color: Colors.pinkishGreyTwo }
              ]}
            >
              {optionLabel}
            </Text>
          </View>
        </View>
      </View>
    );
  }
  focusNextField(id) {
    // if (id <= 3) {
    //   this.refs[`option_${id}`].focus();
    // }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  separator: {
    height: 1,
    opacity: 0.96,
    backgroundColor: Colors.white
  },
  questionContainer: {
    marginVertical: 20,
    flex: 1,
    borderRadius: 10,
    backgroundColor: Colors.whiteTwo,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 20
    },
    shadowRadius: 20,
    shadowOpacity: 1,
    elevation: 5
  },
  questionRowContainer: {
    flex: 0.2,
    marginHorizontal: 15,
    marginTop: 15
  },
  questionTitleLabel: {
    fontSize: 10,
    lineHeight: 12,
    letterSpacing: 0,
    textAlign: "left",
    color: Colors.charcoal
  },
  toastMsgTxt: {
    fontSize: 10,
    lineHeight: 12,
    letterSpacing: 0,
    textAlign: "left",
    color: Colors.pinkishGreyTwo
  },
  maxCharTxt: {
    fontSize: 10,
    lineHeight: 12,
    letterSpacing: 0,
    textAlign: "right",
    color: Colors.pinkishGreyTwo
  },
  input: {
    fontSize: 16,
    textAlign: "left",
    color: Colors.charcoal,
    height: Platform.OS == "android" ? 45 : 50
  },
  optionLabelContainer: {
    flex: 0.2,
    flexDirection: "row",
    marginHorizontal: 15
  },
  toastMsgContainer: {
    height: 35,
    alignItems: "center",
    justifyContent: "center"
  }
});
