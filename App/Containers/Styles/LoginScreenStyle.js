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
    fontSize: Fonts.size.h4,
    margin: Metrics.doubleBaseMargin,
  },
  form: {
    backgroundColor: Colors.snow,
    margin: Metrics.baseMargin,
    borderRadius: 4
  },
  fullWidthButton: {
    backgroundColor: Colors.nephritis,
    margin: Metrics.doubleBaseMargin,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 1,
  },
  button: {
    backgroundColor: Colors.nephritis,
    margin: Metrics.bigMargin,
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
    fontFamily: Fonts.type.bold,
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
    height: 50, 
    borderColor: 'gray', 
    borderWidth: 0.5, 
    marginLeft: 60,
    marginRight: 60,
    marginTop: 5,
    marginBottom: 15,
    borderRadius: 2,
  },
  textInputReadonly: {
    height: 40,
    color: Colors.steel
  },
  loginRow: {
    paddingBottom: Metrics.doubleBaseMargin,
    paddingHorizontal: Metrics.doubleBaseMargin,
    flexDirection: 'row',
    marginTop: 10
  },
  loginButtonWrapper: {
    flex: 1
  },
  loginButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: Colors.charcoal,
    backgroundColor: Colors.panther,
    padding: 6
  },
  loginText: {
    textAlign: 'center',
    color: Colors.silver
  },
  topLogo: {
    alignSelf: 'center',
    resizeMode: 'contain'
  }
})
