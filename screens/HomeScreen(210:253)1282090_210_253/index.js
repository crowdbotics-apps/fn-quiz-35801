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
      <View style={styles.View_210_254}>
        <View style={styles.View_210_255}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/864acbdf-5945-4443-8222-4ab4fa94a81b"
            }}
            style={styles.ImageBackground_210_256}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9d61cbfd-d67e-4368-abce-3cdd740a6674"
          }}
          style={styles.ImageBackground_210_260}
        />
      </View>
      <View style={styles.View_210_261}>
        <View style={styles.View_210_262}>
          <Text style={styles.Text_210_262}>Hello, Bisola</Text>
        </View>
        <View style={styles.View_210_263}>
          <Text style={styles.Text_210_263}>
            Welcome! Let’s get to know you
          </Text>
        </View>
        <View style={styles.View_210_264}>
          <View style={styles.View_210_265} />
          <View style={styles.View_210_266}>
            <View style={styles.View_210_267}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3368f305-ad76-4f26-8293-bfe26639ff9a"
                }}
                style={styles.ImageBackground_210_268}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7e242f69-2d80-4ea6-a848-9d62c571de42"
              }}
              style={styles.ImageBackground_210_271}
            />
            <View style={styles.View_210_276}>
              <Text style={styles.Text_210_276}>Search</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_210_277} />
        <View style={styles.View_212_32}>
          <Text style={styles.Text_212_32}>
            Wants to earn more? Upgrade to Premium
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/24371290-8543-4c3b-900c-63b852814899"
          }}
          style={styles.ImageBackground_210_278}
        />
        <View style={styles.View_210_370} />
        <View style={styles.View_210_371} />
        <View style={styles.View_210_372} />
        <View style={styles.View_210_373} />
        <View style={styles.View_210_374} />
        <View style={styles.View_210_375} />
        <View style={styles.View_210_376} />
        <View style={styles.View_210_377} />
        <View style={styles.View_210_379}>
          <Text style={styles.Text_210_379}>Amateur Questions</Text>
        </View>
        <View style={styles.View_210_380}>
          <Text text="" style={styles.Text_210_380} />
        </View>
        <View style={styles.View_212_2}>
          <View style={styles.View_212_3}>
            <View style={styles.View_212_4}>
              <Text style={styles.Text_212_4}>400 Question</Text>
            </View>
            <View style={styles.View_212_5}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d035b3ae-c3e3-47cc-a790-133d2f43e2d2"
                }}
                style={styles.ImageBackground_212_6}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c6e9e2bc-4737-4719-85cc-46a7f50d0c19"
                }}
                style={styles.ImageBackground_212_7}
              />
            </View>
          </View>
          <View style={styles.View_212_10}>
            <View style={styles.View_212_11}>
              <Text style={styles.Text_212_11}>1 hour 15 min</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/565667ab-6b1a-40e0-a8fb-9437950786f5"
              }}
              style={styles.ImageBackground_212_12}
            />
          </View>
        </View>
        <View style={styles.View_212_15}>
          <Text style={styles.Text_212_15}>LEVEL 1</Text>
        </View>
        <View style={styles.View_212_17}>
          <Text style={styles.Text_212_17}>LEVEL 2</Text>
        </View>
        <View style={styles.View_212_18}>
          <Text style={styles.Text_212_18}>Intermediate Questions</Text>
        </View>
        <View style={styles.View_212_19}>
          <View style={styles.View_212_20}>
            <View style={styles.View_212_21}>
              <Text style={styles.Text_212_21}>400 Question</Text>
            </View>
            <View style={styles.View_212_22}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c82fdeeb-a3ec-4fe0-9377-dc4aba60f2c8"
                }}
                style={styles.ImageBackground_212_23}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/eacf853e-7ca0-4fbf-8ce1-24bd80776b12"
                }}
                style={styles.ImageBackground_212_24}
              />
            </View>
          </View>
          <View style={styles.View_212_27}>
            <View style={styles.View_212_28}>
              <Text style={styles.Text_212_28}>1 hour 15 min</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9686a278-e307-43d5-8f56-f7355cf600e4"
              }}
              style={styles.ImageBackground_212_29}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2a65eb76-c323-4f98-8b12-4938d920e78d"
          }}
          style={styles.ImageBackground_212_33}
        />
        <View style={styles.View_212_34}>
          <Text style={styles.Text_212_34}>LEVEL 3</Text>
        </View>
        <View style={styles.View_212_35}>
          <View style={styles.View_212_36}>
            <View style={styles.View_212_37}>
              <Text style={styles.Text_212_37}>400 Question</Text>
            </View>
            <View style={styles.View_212_38}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ad470b87-5d89-4797-8b97-3ddd6c01ae18"
                }}
                style={styles.ImageBackground_212_39}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e46c2285-040a-4551-b711-12c1078774fd"
                }}
                style={styles.ImageBackground_212_40}
              />
            </View>
          </View>
          <View style={styles.View_212_43}>
            <View style={styles.View_212_44}>
              <Text style={styles.Text_212_44}>1 hour 15 min</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a3fb5fd0-d114-4037-b94b-a0cc714ba6d3"
              }}
              style={styles.ImageBackground_212_45}
            />
          </View>
        </View>
        <View style={styles.View_212_49}>
          <Text style={styles.Text_212_49}>LEVEL 4</Text>
        </View>
        <View style={styles.View_212_50}>
          <View style={styles.View_212_51}>
            <View style={styles.View_212_52}>
              <Text style={styles.Text_212_52}>400 Question</Text>
            </View>
            <View style={styles.View_212_53}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0e2e342b-ea63-4d12-b855-1bccf0d2a500"
                }}
                style={styles.ImageBackground_212_54}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/26a60b70-ebe9-4d9b-8221-4ed2861fa8fa"
                }}
                style={styles.ImageBackground_212_55}
              />
            </View>
          </View>
          <View style={styles.View_212_58}>
            <View style={styles.View_212_59}>
              <Text style={styles.Text_212_59}>1 hour 15 min</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/72ea9624-9630-40a2-8972-b6c48cbdc0e4"
              }}
              style={styles.ImageBackground_212_60}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_210_366}>
        <View style={styles.View_210_367} />
        <View style={styles.View_210_368}>
          <Text style={styles.Text_210_368}>Start Quiz</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("111%") },
  View_210_254: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("5%")
  },
  View_210_255: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_210_256: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_210_260: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("0%")
  },
  View_210_261: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("103%"),
    minHeight: hp("103%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12%")
  },
  View_210_262: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_210_262: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_210_263: {
    width: wp("80%"),
    minWidth: wp("80%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_210_263: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_210_264: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("9%")
  },
  View_210_265: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_210_266: {
    width: wp("82%"),
    minWidth: wp("82%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%")
  },
  View_210_267: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_210_268: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_210_271: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%")
  },
  View_210_276: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_210_276: {
    color: "rgba(212, 212, 212, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_210_277: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("86%"),
    minHeight: hp("86%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_212_32: {
    width: wp("73%"),
    minWidth: wp("73%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("53%"),
    justifyContent: "flex-start"
  },
  Text_212_32: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_210_278: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("19%")
  },
  View_210_370: {
    width: wp("94%"),
    minWidth: wp("94%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("25%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(153, 112, 172, 1)",
    borderWidth: 2
  },
  View_210_371: {
    width: wp("94%"),
    minWidth: wp("94%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("38%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(153, 112, 172, 1)",
    borderWidth: 2
  },
  View_210_372: {
    width: wp("94%"),
    minWidth: wp("94%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("57%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(153, 112, 172, 1)",
    borderWidth: 2
  },
  View_210_373: {
    width: wp("94%"),
    minWidth: wp("94%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("71%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(153, 112, 172, 1)",
    borderWidth: 2
  },
  View_210_374: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("26%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_210_375: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("39%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_210_376: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("58%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_210_377: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("72%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_210_379: {
    width: wp("46%"),
    minWidth: wp("46%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("28%"),
    justifyContent: "flex-start"
  },
  Text_210_379: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_210_380: {
    width: wp("0%"),
    minWidth: wp("0%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("34%"),
    justifyContent: "flex-start"
  },
  Text_210_380: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_212_2: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("31%")
  },
  View_212_3: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_212_4: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_212_4: {
    color: "rgba(153, 153, 153, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_212_5: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_212_6: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_212_7: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_212_10: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%")
  },
  View_212_11: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_212_11: {
    color: "rgba(153, 153, 153, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_212_12: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_212_15: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("26%"),
    justifyContent: "flex-start"
  },
  Text_212_15: {
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_212_17: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("39%"),
    justifyContent: "flex-start"
  },
  Text_212_17: {
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_212_18: {
    width: wp("56%"),
    minWidth: wp("56%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("41%"),
    justifyContent: "flex-start"
  },
  Text_212_18: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_212_19: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("44%")
  },
  View_212_20: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_212_21: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_212_21: {
    color: "rgba(153, 153, 153, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_212_22: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_212_23: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_212_24: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_212_27: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%")
  },
  View_212_28: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_212_28: {
    color: "rgba(153, 153, 153, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_212_29: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_212_33: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("53%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%")
  },
  View_212_34: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("58%"),
    justifyContent: "flex-start"
  },
  Text_212_34: {
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_212_35: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("63%")
  },
  View_212_36: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_212_37: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_212_37: {
    color: "rgba(153, 153, 153, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_212_38: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_212_39: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_212_40: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_212_43: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%")
  },
  View_212_44: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_212_44: {
    color: "rgba(153, 153, 153, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_212_45: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_212_49: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("72%"),
    justifyContent: "flex-start"
  },
  Text_212_49: {
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_212_50: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("77%")
  },
  View_212_51: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_212_52: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_212_52: {
    color: "rgba(153, 153, 153, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_212_53: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_212_54: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_212_55: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_212_58: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%")
  },
  View_212_59: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_212_59: {
    color: "rgba(153, 153, 153, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_212_60: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_210_366: {
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
  View_210_367: {
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
  View_210_368: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_210_368: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
