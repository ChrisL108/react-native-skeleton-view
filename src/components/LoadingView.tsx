import React, { useRef } from 'react';
import { StyleSheet, StyleProp, ViewStyle, Animated } from 'react-native';

// TODO support for dynamic color array
const DEFAULT_BORDER_COLORS = ['#f2f2f2', 'gray'];

export default function LoadingView({
  loading,
  style,
  children,
  borderColors,
}: {
  loading: boolean;
  style?: StyleProp<ViewStyle>;
  children?: JSX.Element | JSX.Element[];
  borderColors?: string[];
}) {
  const borderColorAnim = useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    if (loading) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(borderColorAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
          }),
          Animated.timing(borderColorAnim, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true,
          }),
        ])
      ).start();
    } else {
      Animated.timing(borderColorAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  const borderColor = borderColorAnim.interpolate({
    inputRange: [0, 1],
    outputRange: borderColors || DEFAULT_BORDER_COLORS,
  });

  return (
    <Animated.View
      style={[
        styles.container,
        style,
        {
          borderColor: borderColor,
        },
      ]}
    >
      {!loading && children}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4,
  },
});
