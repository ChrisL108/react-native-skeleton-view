import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import LoadingView from "./components/test";
import LoadingView from '@qwertydevs/react-native-skeleton-view';

export default function App() {
  const [loading1, setLoading1] = React.useState(true);
  const [loading2, setLoading2] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading1(false);
    }, 3000);
    setTimeout(() => {
      setLoading2(false);
    }, 5400);
  }, []);

  return (
    <View style={styles.container}>
      <LoadingView
        loading={loading1}
        style={styles.loadingView1}
        borderColors={['purple', 'orange']}
      >
        <Text style={styles.text}>I loaded faster</Text>
      </LoadingView>
      <LoadingView loading={loading2} style={styles.loadingView2}>
        <Text style={styles.text}>I took a little longer to load</Text>
      </LoadingView>
    </View>
  );
}

const styles = StyleSheet.create({
  text: { fontSize: 22, color: '#2e2e2e' },
  loadingView1: {
    width: 300,
    height: 500,
    margin: 20,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    shadowOffset: {
      width: 5,
      height: -1,
    },
    shadowOpacity: 0.8,
    shadowRadius: 10,
  },
  loadingView2: {
    height: 300,
    width: 400,
    margin: 20,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    padding: 0,
    margin: 0,
    backgroundColor: '#eeeeee',
  },
});
