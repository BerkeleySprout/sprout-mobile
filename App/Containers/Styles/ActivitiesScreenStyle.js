import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors, Fonts } from '../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    margin: 17
  },
  row: {
    width: 150,
    height: 220,
    justifyContent: 'center',
    alignItems: 'center',
    margin: Metrics.baseMargin,
    borderRadius: Metrics.baseMargin,
  },
  imageBackground: {
    backgroundColor: Colors.clear,
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    padding: Metrics.baseMargin,
    borderRadius: Metrics.baseMargin,
  },
  sectionHeader: {
    paddingTop: Metrics.doubleBaseMargin,
    width: Metrics.screenWidth,
    alignSelf: 'center',
    margin: Metrics.baseMargin,
    backgroundColor: Colors.background,
    fontSize: Fonts.size.h4
  },
  boldLabel: {
    fontWeight: 'bold',
    alignSelf: 'center',
    color: 'white',
    textAlign: 'center',
    marginBottom: Metrics.smallMargin,
    fontSize: Fonts.size.medium
  },
  label: {
    alignSelf: 'center',
    color: Colors.text,
    textAlign: 'center',
    fontSize: Fonts.size.small
  },
  listContent: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  }
})
