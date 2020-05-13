import { StyleSheet } from 'react-native';
import * as Colors from './Colors';

const style = StyleSheet.create({

  container: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  reportView: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },

  itensReportView: {
    alignItems: 'center',
  },

  textReport: {
    color: Colors.MEDIUM_COLOR,
    fontWeight: 'bold',
    fontSize: 26,
    marginTop: 15,
  },

  imageView: {
    marginTop: 50,
  },

  translateButtonWrapper: {
    backgroundColor: Colors.HARD_COLOR,
    width: 120,
    height: 40,

    borderRadius: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    alignSelf: 'center',
    height: 46,
    width: 46,
    tintColor: Colors.EASY_COLOR,
  },

  bottomView: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  textBottom: {
    color: Colors.EASY_COLOR,
    fontSize: 12,
    bottom: 15,
  },

  textTranslate: {
    color: Colors.WHITE,
    fontSize: 11,
    fontWeight: 'bold',
    textAlign: 'center',
    marginRight: 12,
    marginLeft: 12,
  },

  translationResultView: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: Colors.WHITE,
  },

  translationResultTitle: {
    color: Colors.WHITE,
    fontSize: 11,
    fontWeight: 'normal',
  },
  translationResultText: {
    color: Colors.WHITE,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export { style };
