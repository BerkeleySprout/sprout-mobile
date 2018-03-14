import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors, Fonts } from '../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    margin: 0
  },
  bar: {
    backgroundColor: Colors.nephritis,
    color: 'black',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.7,
    shadowRadius: 3,
    fontFamily: Fonts.type.base,
  },
  headerView: {
    backgroundColor: Colors.emerald,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 10,
    borderBottomColor: '#ddd',
  },
  header: {
    color: Colors.background,
    fontFamily: Fonts.type.base,
    fontSize: Fonts.size.h3,
    padding: 50
  },
  row: {
    width: 150,
    height: 220,
    justifyContent: 'center',
    alignItems: 'center',
    margin: Metrics.baseMargin,
    borderRadius: Metrics.baseMargin,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
  },
  imageBackground: {
    backgroundColor: Colors.clear,
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    padding: Metrics.baseMargin,
    paddingBottom: Metrics.bigMargin,
    borderRadius: Metrics.baseMargin,
    overflow: 'hidden'
  },
  sectionHeaderView: {
    paddingTop: Metrics.doubleBaseMargin,
    width: Metrics.screenWidth,
    alignSelf: 'center',
    margin: Metrics.baseMargin,
    backgroundColor: Colors.background,
  },
  sectionHeader: {
    fontWeight: 'bold',
    alignSelf: 'center',
    color: Colors.text,
    textAlign: 'center',
    marginBottom: Metrics.smallMargin,
    fontSize: Fonts.size.h6,
    fontFamily: Fonts.type.bold,
    textDecorationLine: 'underline'
  },
  boldLabel: {
    fontWeight: 'bold',
    alignSelf: 'center',
    color: 'white',
    textAlign: 'center',
    marginBottom: Metrics.baseMargin,
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.type.base,
    zIndex: 3
  },
  label: {
    alignSelf: 'center',
    color: Colors.textSecondary,
    textAlign: 'center',
    fontSize: Fonts.size.small,
    fontFamily: Fonts.type.base,
    zIndex: 3
  },
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'black',
    opacity: 0.3
  },
  listContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  }
})
