var yeoman = require('yeoman-generator');
var Base = yeoman.generators.Base;
var Path = require('path');
var fs = require('fs');

function camelCase(name) {
  return name.replace(/-\w/g, function (m) {
    return m.charAt(1).toUpperCase();
  })
}

module.exports = Base.extend({
  constructor: function () {
    Base.apply(this, arguments);
    this.option('port', {type: Number, defaults: '8000'});
    this.option('rcVersion', {type: String, defaults: '1.0.0'});
    this.option('author', {type: String, defaults: ''});
    this.option('pkgName', {type: String, defaults: ''});
    this.option('tnpm', {type: Boolean, defaults: false});
    this.option('repoUrl', {type: String, defaults: ''});
  },

  welcome: function () {
    this.appname = this.appname.replace(/\s/g, '-');
    this.AppName = this.appname.charAt(0).toUpperCase() + camelCase(this.appname.slice(1));
    this.log('welcome to generator-rc: ' + this.appname);
    this.port = this.options.port;
    this.repo_url = this.options.repoUrl||('https://github.com/react-component/'+this.appname);
    this.version = this.options.rcVersion;
    this.author = this.options.author;
    this.packageName = this.options.pkgName || ('rc-'+this.appname);
    this.tnpm = this.options.tnpm;
  },

  setup: function () {
    var self = this;
    this.src.recurse('.', function (path, root, subdir, filename) {
      var oldPath = path;
      var newPath;
      // https://github.com/npm/npm/issues/1862
      if (filename === 'gitignore' || filename === 'npmignore') {
        filename = filename === 'gitignore' ? '.gitignore' : '.npmignore';
        newPath = Path.join(Path.dirname(path), filename);
        fs.renameSync(path, newPath);
        path = newPath;
      }
      self.template(path, subdir ? Path.resolve(subdir, filename) : filename);
      if (filename === '.gitignore' || filename === '.npmignore') {
        fs.renameSync(path, oldPath);
      }
    });
    var AppName = this.AppName;
    this.dest.write('src/' + AppName + '.jsx', [
      'import React from \'react\';',
      'const ' + AppName + ' = React.createClass({});',
      'export default ' + AppName + ';'
    ].join('\n'));
  },

  done: function () {
    this.log('done');
  }
});
