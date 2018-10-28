# Guess.js Angular demo

Data-driven bundling with Guess.js.

## Usage

Since you'll not be able to access the Google Analytics data the current project uses, explore the configuration at `extend.webpack.js`.

You will notice that the last plugin in this ejected Angular CLI application is `GuessPlugin` which has quite minimalistic setup:

```js
new GuessPlugin({

  // View ID for your Google Analytics project
  GA: 'XXXXXXXXX',

  // Optional
  period: {
    startDate: new Date('2016-1-2'),
    endDate: new Date('2018-2-24'),
  }
})
```

The project also defines a `routeFormatter` which is an optional property that you'll most likely not need.

## License

MIT
