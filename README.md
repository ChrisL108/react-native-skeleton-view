# react-native-skeleton-view

Animated skeleton view that extends the normal View component

## Installation

with `npm`:

```sh
npm install @qwertydevs/react-native-skeleton-view
```

with `yarn`:

```sh
yarn add @qwertydevs/react-native-skeleton-view
```

## Usage

```js
import LoadingView from '@qwertydevs/react-native-skeleton-view';
```

```js
const [loading, setLoading] = React.useState(true);
// ... Get data
() => setLoading(false);
```

```js
<LoadingView
  loading={loading}
  style={{ width: 100, height: 100 }}
  color1="purple"
  color2="orange"
  showBorderAfterLoad={true}
>
  <Text>Inner content that takes time to load</Text>
</LoadingView>
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
