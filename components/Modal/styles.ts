import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: height,
    backgroundColor: '#000000CC'
  },
  modal: {
    position: 'absolute',
    top: '45%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 350,
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#fff'
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    padding: 5,
    fontWeight: 500,
  },
  inputs: {
    display: 'flex',
    gap: 10,
    padding: 10,
  },
  input: {
    paddingHorizontal: 10,
    borderRadius: 8,
    borderWidth: 0.5,
    fontSize: 16,
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 5,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 8,
    borderWidth: 0.5,
  }
})

export default styles;
