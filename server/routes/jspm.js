var express = require('express');
var router = express.Router();
var Promise = require('bluebird');
var exec = require('child_process').exec;
var cli = require('jspm');

router.get('/install', function(req, res, next) {
  var name = req.query.name;
  var version = req.query.version;
  var fullResult = [];

  var what = exec('cd ' + __dirname + '/../../client; jspm clean; jspm install ' + name, function (error, stdout, stderr) {
    console.log('hey');
  });
  what.stdout.on('data', function (data) {
    var result = checkResult(data);
    console.log(result);
    if (result === true) {
      // forks.push(data);
    } else if (result === false) {
      // console.log(`stdout NOT OK: ${data}`);
      // forks.push(data);
    } else {
      fullResult.push(result);
      // result.forEach(function (item) {
      //   forks.push({ name: item.name, versions: item.versions});
      // });
    }
  });

  what.stderr.on('data', function (data) {
    console.log(`stderr: ${data}`);
  });

  what.on('close', function (code) {
    console.log(`child process exited with code ${code}`);
  });
  return what;
});

function stripCharacters(string) {
  string = string.replace(' ', '');
  string = string.replace(/ /g,'');
  string = string.replace(/[\n\r]/g, '');
  return string;
}

function getName(string) {
  return string.slice(0, string.indexOf(' '));
}

function getVersions(string) {
  var result = string.slice(string.indexOf(' ') + 1, string.length);
  var versions = result.split(' ');
  return versions;
}

function getArray(string) {
  var array = string.split(/[\n\r]/g);
  var result = [];
  array.forEach(function (item) {
    if (item && item.trim()) {
      var line = item.trim();
      if (line.slice(0, 10) !== 'To inspect') {
        var obj = {
          name: getName(line),
          versions: getVersions(line)
        }
        result.push(obj);
      }
    }
  });
  return result;
}

function checkResult(msg) {
  var result = stripCharacters(msg);
  if (result === 'okInstalltreehasnoforks.') {
    return true;
  } else if (result === 'InstalledForks') {
    return false;
  }
  var msgs = getArray(msg);
  return msgs;
}

router.get('/inspect/forks', function(req, res, next) {
  var forks = [];
  var what = exec('cd ' + __dirname + '/../../client; jspm inspect --forks', function (error, stdout, stderr) {
    console.log('hey');
  });
  what.stdout.on('data', function (data) {
    var result = checkResult(data);
    if (result === true) {
      forks.push(data);
    } else if (result === false) {
      // console.log(`stdout NOT OK: ${data}`);
      // forks.push(data);
    } else {
      result.forEach(function (item) {
        forks.push({ name: item.name, versions: item.versions});
      });
    }
  });

  what.stderr.on('data', function (data) {
    console.log(`stderr: ${data}`);
  });

  what.on('close', function (code) {
    console.log(`child process exited with code ${code}`);
    res.json(forks);
  });
  return what;
});

module.exports = router;
