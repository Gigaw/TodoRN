import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  smallContainer: {
    backgroundColor: '#FFD615',
    flex: 1,
  },
  bigContainer: {
    backgroundColor: '#F5F5F5',
    flex: 2,
  },
  avatar: {
    borderRadius: 100,
    marginBottom: 20,
  },
  welcomeText: {
    marginBottom: 20,
  },
  header: {
    width: '100%',
  },
  smallContainerContent: {
    paddingTop: 60,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  bigContainerContent: {
    paddingTop: 45,
    width: '86.6%',
    alignSelf: 'center',
    // alignItems: 'center'
  },
  strongText: {
    marginBottom: 30,
    marginTop: 45,
    fontSize: 18,
    lineHeight: 27,
    fontWeight: '700',
  },
  preview: {
    // flex: 1,
    // justifyContent: 'flex-end',
    // alignItems: 'center',
  },
});
