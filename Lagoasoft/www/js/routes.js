angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('akuelleRechnungen', {
    url: '/page1',
    templateUrl: 'templates/akuelleRechnungen.html',
    controller: 'akuelleRechnungenCtrl'
  })

  .state('aktuelleRechnungen', {
    url: '/page4',
    templateUrl: 'templates/aktuelleRechnungen.html',
    controller: 'aktuelleRechnungenCtrl'
  })

  .state('abrechnungsliste', {
    url: '/page6',
    templateUrl: 'templates/abrechnungsliste.html',
    controller: 'abrechnungslisteCtrl'
  })

  .state('abrechnungsliste2', {
    url: '/page7',
    templateUrl: 'templates/abrechnungsliste2.html',
    controller: 'abrechnungsliste2Ctrl'
  })

$urlRouterProvider.otherwise('/page1')

  

});