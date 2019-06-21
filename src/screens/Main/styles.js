import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  area: {
    width: 300,
    height: 300,
    flexDirection: 'row',
  },
  verticalArea: {
    flex: 1,
    borderLeftColor: '#000',
    borderLeftWidth: 3,
    justifyContent: 'center',
  },
  horizontalArea: {
    flex: 1,
    borderTopColor: '#000',
    borderTopWidth: 3,
    justifyContent: 'center',
  },
  infoGame: {
    flex: 1,
    paddingTop: 100,
  },
});

export default styles;
