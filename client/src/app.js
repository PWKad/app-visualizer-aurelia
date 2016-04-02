export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'forks'], name: 'forks',      moduleId: 'forks',      nav: true, title: 'Forks' }
    ]);

    this.router = router;
  }
}
