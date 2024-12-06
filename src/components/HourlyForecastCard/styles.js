import { StyleSheet } from 'react-native';
import Colors from '../../Constant/Colors';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.primaryBackground,
    padding: 10,
    margin: 10,
    borderRadius: 8,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  headerText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  divider: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  dividerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'gray',
  },
});
