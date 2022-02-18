import React, { useRef } from 'react';
import { StyleSheet, StyleProp, ViewStyle, Animated } from 'react-native';

// TODO support for dynamic color array?
const DEFAULT_BORDER_COLORS = ['#f2f2f2', 'gray'];

export default function LoadingView({
  loading,
  style,
  children,
  color1,
  color2,
  showBorderAfterLoad,
}: {
  loading: boolean;
  style?: StyleProp<ViewStyle>;
  children?: JSX.Element | JSX.Element[];
  color1: string;
  color2: string;
  showBorderAfterLoad?: boolean;
}) {
  const [borderWidth, setBorderWidth] = React.useState(2);
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
      if (!showBorderAfterLoad) {
        setBorderWidth(0);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  const borderColors =
    Boolean(color1) && Boolean(color2)
      ? [color1, color2]
      : DEFAULT_BORDER_COLORS;

  const borderColor = borderColorAnim.interpolate({
    inputRange: [0, 1],
    outputRange: borderColors,
  });

  return (
    <Animated.View
      style={[
        styles.container,
        style,
        {
          borderWidth,
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
