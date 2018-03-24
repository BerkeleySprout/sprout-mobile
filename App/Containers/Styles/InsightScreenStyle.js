import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors, Fonts } from '../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  timelineContainer: {
    flex: 1,
    margin: Metrics.doubleBaseMargin
  },
  timeline: {
    padding: Metrics.smallMargin,
  },
  bar: {
    backgroundColor: Colors.nephritis,
    color: 'black',
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.7,
    shadowRadius: 3,
    fontFamily: Fonts.type.base,
  },
  barText: {
    color: Colors.textLight,
    fontSize: Fonts.size.h5,
    fontFamily: Fonts.type.base,
    alignSelf: 'center',
  },
  buttonGroup: {
    height: 30,
    marginTop: 15,
    marginBottom: 13,
    width: '50%',
    alignSelf: 'center',
  },
  button: {
    fontSize: Fonts.size.small,
  },
  selectedButton: {
    backgroundColor: Colors.silver,
  },
  searchBar: {
    backgroundColor: Colors.background,
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
    marginBottom: Metrics.smallMargin
  },
  label: {
    textAlign: 'center',
    color: 'black'
  },
  listContent: {
    marginTop: Metrics.baseMargin
  }
})
