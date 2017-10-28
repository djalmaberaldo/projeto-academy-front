import { Produto } from "../produto/model/produto.model";
import { ProdutoService} from "../produto/produto.service";


interface IListarScope extends ng.IScope {
    produtos: Produto[];
}

export class ListarController {

    /** @ngInject */
    constructor(
        private $scope: IListarScope,
        private produtoService: ProdutoService,
        private toastr: angular.toastr.IToastrService,
        private $state: angular.ui.IStateService
    ){
        this.init();
    }

    private editar(id: string): void {
        this.$state.go('editar',{id: id});
    }


    private deletar(id: string): void {
        this.produtoService.delete(id)
        .then((response: ng.IHttpPromiseCallbackArg <string>)=>{
            this.toastr.success("Produto deletado com sucesso");
            this.listar();
        })
        .catch((error: ng.IHttpPromiseCallbackArg <string>)=>{
            this.toastr.error("Não foi possível deletar produto");
        })
    }


    private listar(): void {
        this.produtoService.list()
        .then((response: ng.IHttpPromiseCallbackArg <Produto []>)=>{
            this.$scope.produtos = response.data;
        })
        .catch((error: ng.IHttpPromiseCallbackArg <string>)=>{
            this.$scope.produtos = new Array <Produto>();
            this.toastr.error("Lista de produtos não disponível");
        })
    }

    private init(): void {
        this.$scope.produtos = new Array <Produto>();
        this.listar();
    }

}
