import {HttpClient} from 'aurelia-http-client';

export class Forks {
  forks = [];
  static inject = [HttpClient];
  constructor(http) {
    this.http = http;
  }
  activate() {
    this.http.get('http://localhost:3219/jspm/inspect/forks').then(results => {
      this.forks = results.content;
    });
  }
  choose(name, version) {
    this.http.get('http://localhost:3219/jspm/install?name=' + name + '&version=' + version).then(results => {
      this.forks = results.content;
    });
  }
}
