/** @ngInject */
export function routerConfig($stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/home/home.html',
      controller: 'HomeController',
      controllerAs: 'controller'
    })
    .state('listar', {
      url: '/listar',
      templateUrl: 'app/listar/listar.html',
      controller: 'ListarController',
      controllerAs: 'controller'
    })
    .state('detalhar', {
      url: '/detalhar/:id',
      templateUrl: 'app/detalhar/detalhar.html',
      controller: 'DetalharController',
      controllerAs: 'controller'
    })
    .state('produto', {
      url: '/produto',
      templateUrl: 'app/produto/produto.html',
      controller: 'ProdutoController',
      controllerAs: 'controller'
    })
    .state('editar', {
      url: '/produto/editar/:id',
      templateUrl: 'app/produto/produto.html',
      controller: 'ProdutoController',
      controllerAs: 'controller'
    });

  $urlRouterProvider.otherwise('/');
}
