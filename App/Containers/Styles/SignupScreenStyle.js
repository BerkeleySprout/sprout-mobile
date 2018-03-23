import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../Themes'

export default StyleSheet.create({
  container: {
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
    width: '21%',
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
  form: {
    backgroundColor: Colors.snow,
    margin: Metrics.baseMargin,
    borderRadius: 4
  },
  button: {
    backgroundColor: Colors.greyBlue,
    margin: Metrics.smallMargin,
    marginLeft: 45,
    marginRight: 45,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.7,
    shadowRadius: 1,
  },
  buttonFB: {
    backgroundColor: Colors.facebook,
    margin: Metrics.bigMargin,
    marginLeft: 45,
    marginRight: 45,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.7,
    shadowRadius: 1,
  },
  buttonText: {
    fontFamily: Fonts.type.base,
  },
  row: {
    paddingVertical: Metrics.doubleBaseMargin,
    paddingHorizontal: Metrics.doubleBaseMargin,
    flexDirection: 'row',
    flex: 1
  },
  rowLabel: {
    marginLeft: 60,
    fontFamily: Fonts.type.base,
  },
  textInput: {
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 0.5, 
    marginLeft: 60,
    marginRight: 60,
    marginTop: 5,
    marginBottom: 15,
    borderRadius: 2,
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
