import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  list: {
    marginTop: 20,
    marginBottom: 80,
    marginHorizontal: 'auto',
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
    gap: 15
  },
  listItem: {
    width: '100%',
    display: 'flex',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
  },
  header: {
    width: '100%',
    fontSize: 22,
    fontWeight: 500,
    textAlign: 'center',
    paddingVertical: 10
  },
  info: {
    height: 40,
    fontSize: 20,
    paddingHorizontal: 10,
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  listItemButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    fontWeight: 500,
    color: '#fff',
    borderRadius: 5,
  },
  deleteButton: {
    backgroundColor: '#FF4646EF',
  },
  editButton: {
    backgroundColor: '#227211EF',
  },
  mainButtons: {
    marginTop: 20,
    width: '100%',
    height: 40,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  mainButton: {
    display: 'flex',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 4,
    backgroundColor: 'rgba(103,103,103,0.47)'
  },
})

export default styles;
