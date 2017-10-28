import { Produto } from './model/produto.model'
 
export class ProdutoService {

    private $http: ng.IHttpService;
    private API_URL: string;

    /** @ngInject  */
    constructor($http: ng.IHttpService) {
        this.$http = $http;
        this.API_URL  = 'http://localhost:9999/produto';
    }

    public list(): ng.IHttpPromise<Produto[]> {
        return this.$http.get(this.API_URL);
    }

    public get(_id: string): ng.IHttpPromise <Produto> {
        return this.$http.get(`${this.API_URL}/${_id}`);
    }

    public save(produto: Produto): ng.IHttpPromise <string> {
        return this.$http.post(this.API_URL, produto);
    } 

    public update(produto: Produto): ng.IHttpPromise <string> {
        return this.$http.put(`${this.API_URL}/${produto._id}`, produto);
    }

    public delete(_id: string): ng.IHttpPromise <string> {
        return this.$http.delete(`${this.API_URL}/${_id}`);
    }
}

