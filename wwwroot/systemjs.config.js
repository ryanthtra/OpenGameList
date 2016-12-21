(function(global)
{
  // map tells the System loader where to look for things
  var map = {
    'app': 'app', // our application files
    '@angular': 'js/@angular', // angular 2 packages
    'rxjs': 'js/rxjs' // Rxjs package
  };

  // Packages tels the System loader which filename and/or extensions to look for by default (when none are specified)
  var packages ={
    'app': { main: 'main.js', defaultExtension: 'js' },
    'rxjs': { defaultExtension: 'js' }
  };

  // COnfigure angular packages
  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'http',
    'platform-browser',
    'platform-broswer-dynamic',
    'upgrade'
  ];

  function packIndex(pkgName) {
    packages['@angular/' + pkgName] = { main: 'index.js', defaultExtension: 'js' };
  }

  function packUmd(pkgName) {
    packages['@angular/' + pkgName] = { main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
  };

  var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
  ngPackageNames.forEach(setPackageConfig);
  var config = {
    map: map,
    packages: packages
  };
  System.config(config);
})(this);