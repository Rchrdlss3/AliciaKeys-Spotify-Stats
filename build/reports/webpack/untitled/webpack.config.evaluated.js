{
  mode: 'development',
  resolve: {
    modules: [
      '/Users/richardulysse/LellowHubApp/build/js/packages/untitled/kotlin-dce-dev',
      'node_modules'
    ]
  },
  plugins: [
    TeamCityErrorPlugin {}
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'source-map-loader'
        ],
        enforce: 'pre'
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {}
          },
          {
            loader: 'css-loader',
            options: {}
          }
        ]
      }
    ]
  },
  entry: {
    main: [
      '/Users/richardulysse/LellowHubApp/build/js/packages/untitled/kotlin-dce-dev/untitled.js'
    ]
  },
  output: {
    path: '/Users/richardulysse/LellowHubApp/build/distributions',
    filename: [Function: filename],
    library: 'untitled',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  devtool: 'eval-source-map',
  ignoreWarnings: [
    /Failed to parse source map/
  ],
  devServer: {
    open: true,
    static: [
      '/Users/richardulysse/LellowHubApp/build/processedResources/js/main'
    ]
  },
  stats: {
    warnings: false,
    errors: false
  }
}