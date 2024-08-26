import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    height: 60,
    backgroundColor: '#3498db',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  loader: {
    marginTop: 50,
  },
  propertyList: {
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  tile: {
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 10,
    flexDirection: 'row',
    elevation: 2,
  },
  propertyImage: {
    width: 100,
    height: 100,
  },
  propertyInfo: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  propertyName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  propertyDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
});