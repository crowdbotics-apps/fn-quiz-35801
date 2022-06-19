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
      <View style={styles.View_1_125}>
        <View style={styles.View_1_126} />
        <View style={styles.View_1_127}>
          <Text style={styles.Text_1_127}>Get Started</Text>
        </View>
      </View>
      <View style={styles.View_1_128}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/12288eff-d929-4a37-87f4-6f7f7b854d3e"
          }}
          style={styles.ImageBackground_1_129}
        />
        <View style={styles.View_1_130}>
          <View style={styles.View_1_131}>
            <View style={styles.View_1_132}>
              <Text style={styles.Text_1_132}>UI UX Design Quiz</Text>
            </View>
            <View style={styles.View_1_133}>
              <Text style={styles.Text_1_133}>GET 100 Points</Text>
            </View>
          </View>
          <View style={styles.View_1_134}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/95c64f6a-d2e2-4626-937c-04118fc2c7ee"
              }}
              style={styles.ImageBackground_1_135}
            />
            <View style={styles.View_1_137}>
              <Text style={styles.Text_1_137}>4.8</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_1_138}>
          <View style={styles.View_1_139}>
            <View style={styles.View_1_140}>
              <View style={styles.View_1_141}>
                <Text style={styles.Text_1_141}>
                  10 point awarded for a correct answer and no marks for a
                  incorrect answer
                </Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/812d5eac-1190-4de8-9e28-9f922923ae7e"
                }}
                style={styles.ImageBackground_1_142}
              />
            </View>
            <View style={styles.View_1_143}>
              <View style={styles.View_1_144}>
                <Text style={styles.Text_1_144}>
                  Tap on options to select the correct answer
                </Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/30a17220-850d-42cd-952f-6b16fcdd72e2"
                }}
                style={styles.ImageBackground_1_145}
              />
            </View>
            <View style={styles.View_1_146}>
              <View style={styles.View_1_147}>
                <Text style={styles.Text_1_147}>
                  Tap on the bookmark icon to save interesting questions
                </Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ec761459-e29e-4964-a8d3-8007538c2bd6"
                }}
                style={styles.ImageBackground_1_148}
              />
            </View>
            <View style={styles.View_1_149}>
              <View style={styles.View_1_150}>
                <Text style={styles.Text_1_150}>
                  Click submit if you are sure you want to complete all the
                  quizzes
                </Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6b49e0c0-ece5-4802-86fb-2649c70d88af"
                }}
                style={styles.ImageBackground_1_151}
              />
            </View>
          </View>
          <View style={styles.View_1_152}>
            <Text style={styles.Text_1_152}>
              Please read the text below carefully so you can understand it
            </Text>
          </View>
        </View>
        <View style={styles.View_1_153} />
        <View style={styles.View_1_154}>
          <View style={styles.View_1_155}>
            <View style={styles.View_1_156}>
              <View style={styles.View_1_157}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/09429568-e6a3-441a-b3f3-99e6f7d94dad"
                  }}
                  style={styles.ImageBackground_1_158}
                />
                <View style={styles.View_1_159}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4f0953a8-ae35-48ff-84dc-45ea0b1147d5"
                    }}
                    style={styles.ImageBackground_1_160}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/921d0f83-dcc6-443a-8691-841fc76499f1"
                    }}
                    style={styles.ImageBackground_1_161}
                  />
                </View>
              </View>
              <View style={styles.View_1_164}>
                <View style={styles.View_1_165}>
                  <Text style={styles.Text_1_165}>10 Question</Text>
                </View>
                <View style={styles.View_1_166}>
                  <Text style={styles.Text_1_166}>
                    10 point for a correct answer
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_1_167}>
              <View style={styles.View_1_168}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9d3734e1-9b0b-4d4a-9709-7b6b16202946"
                  }}
                  style={styles.ImageBackground_1_169}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/656797e5-9059-4377-97cc-7ce56f42f534"
                  }}
                  style={styles.ImageBackground_1_170}
                />
              </View>
              <View style={styles.View_1_173}>
                <View style={styles.View_1_174}>
                  <Text style={styles.Text_1_174}>15 minutes</Text>
                </View>
                <View style={styles.View_1_175}>
                  <Text style={styles.Text_1_175}>
                    Total duration of the quiz
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_1_176}>
              <View style={styles.View_1_177}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/93b1e240-3a18-4dad-abdf-688950ed2f38"
                  }}
                  style={styles.ImageBackground_1_178}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e16e5f7b-3e4f-4e72-8052-e2b7a4826805"
                  }}
                  style={styles.ImageBackground_1_179}
                />
              </View>
              <View style={styles.View_1_181}>
                <View style={styles.View_1_182}>
                  <Text style={styles.Text_1_182}>Win 10 star</Text>
                </View>
                <View style={styles.View_1_183}>
                  <Text style={styles.Text_1_183}>
                    Answer all questions correctly
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_1_184}>
            <Text style={styles.Text_1_184}>
              Brief explanation about this quiz
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1_185}>
        <View style={styles.View_1_186}>
          <View style={styles.View_1_187}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d261a5bd-84e0-499f-981c-c84585fedc82"
              }}
              style={styles.ImageBackground_1_188}
            />
          </View>
          <View style={styles.View_1_191}>
            <Text style={styles.Text_1_191}>Detail Quiz</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6b3348c7-be27-4347-8d65-b4710547af09"
          }}
          style={styles.ImageBackground_1_192}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("111%") },
  View_1_125: {
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
  View_1_126: {
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
  View_1_127: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_1_127: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_128: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("100%"),
    minHeight: hp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16%")
  },
  ImageBackground_1_129: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("91%"),
    minHeight: hp("91%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%")
  },
  View_1_130: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%")
  },
  View_1_131: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_132: {
    width: wp("40%"),
    minWidth: wp("40%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_132: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_133: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_1_133: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_134: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    top: hp("1%")
  },
  ImageBackground_1_135: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_137: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_137: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_138: {
    width: wp("82%"),
    minWidth: wp("82%"),
    height: hp("32%"),
    minHeight: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("44%")
  },
  View_1_139: {
    width: wp("82%"),
    minWidth: wp("82%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%")
  },
  View_1_140: {
    width: wp("82%"),
    minWidth: wp("82%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_141: {
    width: wp("76%"),
    minWidth: wp("76%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_141: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_142: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_1_143: {
    width: wp("78%"),
    minWidth: wp("78%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%")
  },
  View_1_144: {
    width: wp("72%"),
    minWidth: wp("72%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_144: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_145: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_1_146: {
    width: wp("81%"),
    minWidth: wp("81%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12%")
  },
  View_1_147: {
    width: wp("75%"),
    minWidth: wp("75%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_147: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_148: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_1_149: {
    width: wp("71%"),
    minWidth: wp("71%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20%")
  },
  View_1_150: {
    width: wp("66%"),
    minWidth: wp("66%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_150: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_151: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_1_152: {
    width: wp("81%"),
    minWidth: wp("81%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_152: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_153: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("11%")
  },
  View_1_154: {
    width: wp("65%"),
    minWidth: wp("65%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("14%")
  },
  View_1_155: {
    width: wp("65%"),
    minWidth: wp("65%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%")
  },
  View_1_156: {
    width: wp("63%"),
    minWidth: wp("63%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_157: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_158: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_159: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_1_160: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_1_161: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_1_164: {
    width: wp("48%"),
    minWidth: wp("48%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("0%")
  },
  View_1_165: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_165: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_166: {
    width: wp("48%"),
    minWidth: wp("48%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_1_166: {
    color: "rgba(153, 153, 153, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_167: {
    width: wp("57%"),
    minWidth: wp("57%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%")
  },
  View_1_168: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_169: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_170: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_1_173: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("0%")
  },
  View_1_174: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_174: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_175: {
    width: wp("42%"),
    minWidth: wp("42%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_1_175: {
    color: "rgba(153, 153, 153, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_176: {
    width: wp("65%"),
    minWidth: wp("65%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15%")
  },
  View_1_177: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_178: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_179: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_1_181: {
    width: wp("50%"),
    minWidth: wp("50%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("0%")
  },
  View_1_182: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_182: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_183: {
    width: wp("50%"),
    minWidth: wp("50%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_1_183: {
    color: "rgba(153, 153, 153, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_184: {
    width: wp("64%"),
    minWidth: wp("64%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_184: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_185: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("5%")
  },
  View_1_186: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_1_187: {
    width: wp("6%"),
    minWidth: wp("6%"),
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
  ImageBackground_1_188: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_1_191: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_191: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_192: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("0%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
