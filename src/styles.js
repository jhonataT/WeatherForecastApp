import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  },
  input: {
    flex: 1,
    height: 40,
    width: 200,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 8,
  },
  content: {
    marginTop: 64,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textContainer: {
    marginTop: 24,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 24
  },
  subtitle: {
    fontSize: 32,
    fontWeight: 'bold'
  }
})