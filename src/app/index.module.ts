/// <reference path="../../typings/main/index.d.ts" />

import { HomeController } from './home/home.controller';
import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { acmeNavbar } from './components/navbar/navbar.directive';
import { ProdutoController } from './produto/produto.controller';
import { ProdutoService } from './produto/produto.service';
import { ListarController } from './listar/listar.controller';
import { DetalharController } from './detalhar/detalhar.controller';

module projetoFinalCurso {
  'use strict';

  angular.module('projetoFinalCurso', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ui.router', 'ui.bootstrap', 'toastr'])
    .config(config)
    .config(routerConfig)
    .run(runBlock)
    .controller('HomeController', HomeController)
    .controller('ProdutoController', ProdutoController)
    .controller('ListarController', ListarController)
    .controller('DetalharController', DetalharController)
    .service ('produtoService', ProdutoService)
    .directive('acmeNavbar', acmeNavbar);
}
