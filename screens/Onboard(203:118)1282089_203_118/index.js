import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_203_126}>
        <View style={styles.View_203_128}>
          <Text style={styles.Text_203_128}>F-N Quiz</Text>
        </View>
        <View style={styles.View_203_142} />
        <View style={styles.View_207_240}>
          <Text style={styles.Text_207_240}>Email or Phone Number</Text>
        </View>
        <View style={styles.View_203_236}>
          <Text style={styles.Text_203_236}>pay to play!</Text>
        </View>
        <View style={styles.View_203_237}>
          <Text style={styles.Text_203_237}>play to earn!</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/aeeba7d1-689f-4f38-8e5a-98b99a849ad0"
          }}
          style={styles.ImageBackground_207_239}
        />
        <View style={styles.View_207_243}>
          <Text style={styles.Text_207_243}>Password</Text>
        </View>
        <View style={styles.View_208_244}>
          <Text style={styles.Text_208_244}>
            You don’t have an Account? Sign Up!{" "}
          </Text>
        </View>
        <View style={styles.View_208_245}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/58b78254-b771-4406-88c6-1efb9debe538"
            }}
            style={styles.ImageBackground_208_246}
          />
        </View>
      </View>
      <View style={styles.View_203_231}>
        <View style={styles.View_203_232} />
        <View style={styles.View_203_233}>
          <Text style={styles.Text_203_233}>Login</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0d2b4ed4-aa8e-4d3f-8351-66049d83278d"
        }}
        style={styles.ImageBackground_203_235}
      />
      <View style={styles.View_207_238} />
      <View source={{ uri: "null" }} style={styles.View_208_250} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1c9317da-aeed-4d75-92a7-8dc7e3a45bb2"
        }}
        style={styles.ImageBackground_208_251}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("111%") },
  View_203_126: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("118%"),
    minHeight: hp("118%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-4%")
  },
  View_203_128: {
    width: wp("38%"),
    minWidth: wp("38%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_203_128: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_142: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("99%"),
    minHeight: hp("99%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_207_240: {
    width: wp("45%"),
    minWidth: wp("45%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("59%"),
    justifyContent: "flex-start"
  },
  Text_207_240: {
    color: "rgba(53, 80, 220, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_236: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("22%"),
    justifyContent: "flex-start"
  },
  Text_203_236: {
    color: "rgba(53, 80, 220, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_203_237: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    top: hp("48%"),
    justifyContent: "flex-start"
  },
  Text_203_237: {
    color: "rgba(53, 80, 220, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_207_239: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("73%")
  },
  View_207_243: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("69%"),
    justifyContent: "flex-start"
  },
  Text_207_243: {
    color: "rgba(53, 80, 220, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_208_244: {
    width: wp("67%"),
    minWidth: wp("67%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("83%"),
    justifyContent: "flex-start"
  },
  Text_208_244: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_208_245: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("10%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_208_246: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_203_231: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("99%")
  },
  View_203_232: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_203_233: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_203_233: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_203_235: {
    width: wp("105%"),
    minWidth: wp("105%"),
    height: hp("36%"),
    minHeight: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-5%"),
    top: hp("14%")
  },
  View_207_238: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("58%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(153, 112, 172, 1)",
    borderWidth: 2
  },
  View_208_250: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("15%")
  },
  ImageBackground_208_251: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("17%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
