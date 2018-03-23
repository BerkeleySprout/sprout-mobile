import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors, Fonts } from '../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    backgroundColor: Colors.background
  },
  bar: {
    backgroundColor: Colors.background,
    color: 'black',
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.7,
    shadowRadius: 3,
    fontFamily: Fonts.type.base,
  },
  barText: {
    color: Colors.text,
    fontSize: Fonts.size.h5,
    fontFamily: Fonts.type.base,
    alignSelf: 'center',
  },
  buttonGroup: {
    height: 30,
    marginTop: 10,
    width: '50%',
    alignSelf: 'center',
    fontFamily: Fonts.type.base,
    borderRadius: 20
  },
  button: {
    fontSize: Fonts.size.small,
  },
  selectedButton: {
    backgroundColor: Colors.silver,
  },
  searchBar: {
    fontFamily: Fonts.type.base,
  },
  sectionHeader: {
    color: Colors.text
  },
  row: {
    flex: 1,
    backgroundColor: Colors.fire,
    marginVertical: Metrics.smallMargin,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  boldLabel: {
    fontWeight: 'bold',
    alignSelf: 'center',
    color: Colors.snow,
    textAlign: 'center',
    marginBottom: Metrics.smallMargin,
    fontFamily: Fonts.type.base,
  },
  label: {
    textAlign: 'center',
    color: 'black',
    fontFamily: Fonts.type.base,
  },
  listContent: {
    marginTop: Metrics.baseMargin,
  }
})
