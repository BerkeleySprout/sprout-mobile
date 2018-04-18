import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../Themes'

export default StyleSheet.create({
  container: {
    paddingHorizontal: 45,
    paddingTop: 70,
    backgroundColor: Colors.background,
    flex: 1,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  logo: {
    width: '28%',
    height: '10%',
    alignSelf: 'center',
    marginBottom: Metrics.doubleBaseMargin,
  },
  title: {
    alignSelf: 'center',
    fontFamily: Fonts.type.base,
    fontSize: Fonts.size.h5,
    margin: Metrics.doubleBaseMargin,
  },
  button: {
    backgroundColor: Colors.greyBlue,
    marginTop: Metrics.doubleBaseMargin,
    marginBottom: Metrics.baseMargin,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.7,
    shadowRadius: 1,
  },
  buttonFB: {
    backgroundColor: Colors.facebook,
    marginTop: Metrics.baseMargin,
    marginBottom: Metrics.baseMargin,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.7,
    shadowRadius: 1,
  },
  text: {
    fontFamily: Fonts.type.base,
  },
  rowLabel: {
    marginLeft: 60,
    fontFamily: Fonts.type.base,
  },
  textInput: {
    marginLeft: 16,
    marginRight: 16,
  },
  forgot: {
    fontFamily: Fonts.type.base,
    fontSize: Fonts.size.small,
    margin: Metrics.smallMargin,
    alignSelf: 'center',
    textDecorationLine: 'underline',
  },
  signUpAction: {
    fontFamily: Fonts.type.base,
    margin: Metrics.doubleBaseMargin,
    alignSelf: 'center',
  },
})
