System.register(['aurelia-http-client'], function (_export) {
  'use strict';

  var HttpClient, Forks;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaHttpClient) {
      HttpClient = _aureliaHttpClient.HttpClient;
    }],
    execute: function () {
      Forks = (function () {
        _createClass(Forks, null, [{
          key: 'inject',
          value: [HttpClient],
          enumerable: true
        }]);

        function Forks(http) {
          _classCallCheck(this, Forks);

          this.forks = [];

          this.http = http;
        }

        _createClass(Forks, [{
          key: 'activate',
          value: function activate() {
            var _this = this;

            this.http.get('http://localhost:3219/jspm/inspect/forks').then(function (results) {
              _this.forks = results.content;
            });
          }
        }, {
          key: 'choose',
          value: function choose(name, version) {
            var _this2 = this;

            this.http.get('http://localhost:3219/jspm/install?name=' + name + '&version=' + version).then(function (results) {
              _this2.forks = results.content;
            });
          }
        }]);

        return Forks;
      })();

      _export('Forks', Forks);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmtzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztrQkFFYSxLQUFLOzs7Ozs7OztzQ0FGVixVQUFVOzs7QUFFTCxXQUFLO3FCQUFMLEtBQUs7O2lCQUVBLENBQUMsVUFBVSxDQUFDOzs7O0FBQ2pCLGlCQUhBLEtBQUssQ0FHSixJQUFJLEVBQUU7Z0NBSFAsS0FBSzs7ZUFDaEIsS0FBSyxHQUFHLEVBQUU7O0FBR1IsY0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7U0FDbEI7O3FCQUxVLEtBQUs7O2lCQU1SLG9CQUFHOzs7QUFDVCxnQkFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsMENBQTBDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxPQUFPLEVBQUk7QUFDeEUsb0JBQUssS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUM7YUFDOUIsQ0FBQyxDQUFDO1dBQ0o7OztpQkFDSyxnQkFBQyxJQUFJLEVBQUUsT0FBTyxFQUFFOzs7QUFDcEIsZ0JBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLDBDQUEwQyxHQUFHLElBQUksR0FBRyxXQUFXLEdBQUcsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsT0FBTyxFQUFJO0FBQ3ZHLHFCQUFLLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDO2FBQzlCLENBQUMsQ0FBQztXQUNKOzs7ZUFmVSxLQUFLIiwiZmlsZSI6ImZvcmtzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tICdhdXJlbGlhLWh0dHAtY2xpZW50JztcblxuZXhwb3J0IGNsYXNzIEZvcmtzIHtcbiAgZm9ya3MgPSBbXTtcbiAgc3RhdGljIGluamVjdCA9IFtIdHRwQ2xpZW50XTtcbiAgY29uc3RydWN0b3IoaHR0cCkge1xuICAgIHRoaXMuaHR0cCA9IGh0dHA7XG4gIH1cbiAgYWN0aXZhdGUoKSB7XG4gICAgdGhpcy5odHRwLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMjE5L2pzcG0vaW5zcGVjdC9mb3JrcycpLnRoZW4ocmVzdWx0cyA9PiB7XG4gICAgICB0aGlzLmZvcmtzID0gcmVzdWx0cy5jb250ZW50O1xuICAgIH0pO1xuICB9XG4gIGNob29zZShuYW1lLCB2ZXJzaW9uKSB7XG4gICAgdGhpcy5odHRwLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMjE5L2pzcG0vaW5zdGFsbD9uYW1lPScgKyBuYW1lICsgJyZ2ZXJzaW9uPScgKyB2ZXJzaW9uKS50aGVuKHJlc3VsdHMgPT4ge1xuICAgICAgdGhpcy5mb3JrcyA9IHJlc3VsdHMuY29udGVudDtcbiAgICB9KTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
