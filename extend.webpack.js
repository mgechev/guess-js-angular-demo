const { GuessPlugin } = require('guess-webpack');
const { parseRoutes } = require('guess-parser');

module.exports = {
  plugins: [
    new GuessPlugin({
      GA: '128035004',
      period: {
        startDate: new Date('2016-1-2'),
        endDate: new Date('2018-2-24')
      },
      runtime: {
        delegate: false
      },
      routeProvider() {
        return parseRoutes('.');
      },
      routeFormatter(path) {
        return path.replace(/^\/app/, '');
      }
    })
  ]
};

