module.exports = {
    // Specify entry files
    entry: 'src/index.html',
  
    // Configure output directory (optional)
    // By default, Parcel will create a 'dist' directory
    // output: 'dist',
  
    // Enable hot module replacement
    // Enable HMR if you want to use it
    // This allows changes to be reflected in the browser without a full refresh
    // hmr: true,
  
    // Enable HTTPS (optional)
    // This is useful for development if you are working with features that require secure contexts
    // https: true,
  
    // Configure URL resolution (optional)
    // This allows you to configure how URLs are handled in your project
    // url: {
    //   publicPath: './'
    // },
  
    // Configure browsers list (optional)
    // This allows you to specify which browsers your application supports
    // browserslist: [
    //   '> 1%',
    //   'last 2 versions'
    // ],
  
    // Configure PostCSS options
    postcss: {
      plugins: [
        require('autoprefixer') // Add autoprefixer plugin
        // You can add more PostCSS plugins here if needed
      ]
    }
  };
  