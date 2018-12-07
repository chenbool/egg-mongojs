# egg-mongojs

Database ` mongojs ` plug-in for ` egg ` provide ` mongojs ` database access functions

[![Build Status](https://travis-ci.org/mafintosh/mongojs.svg?branch=master)](https://travis-ci.org/mafintosh/mongojs)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

#  Install

```
$ npm i egg-mongojs --save
```

# Configuration

Change `${app_root}/config/plugin.js` to enable MongoDB plugin:


```
exports.mongojs = {
    enable: true,
    package: 'egg-mongojs',
};
```

Configure database information in `${app_root}/config/config.default.js`:


Simple database instance

```
//  app/config/config.default.js
config.mongojs = {
databaseUrl: '127.0.0.1:27017/alone',
}
```

```
// app/controller/home.js
class HomeController extends Controller {

  async index() {
    const user = this.app.mongojs.collection('user');
    // await user.insert({name: 'bool1993'});
    const collection = await user.find(function (err, doc) {
        console.log(doc);
    });
  }

}
```

具体操作:

https://www.npmjs.com/package/mongojs

https://github.com/mafintosh/mongojs
