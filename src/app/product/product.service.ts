
import { HttpClient} from '@angular/common/http';
import { Injectable} from '@angular/core';

@Injectable()
export class ProductService {
  
  //Dependency Injection
  constructor(private httpClient:HttpClient) {
  }  
  
  getProducts() {	  
	return this.httpClient.get('http://localhost:8080/products');
  }
  
  createProduct(pName) {
	return this.httpClient.post('http://localhost:8080/products', {
		name : pName
	});  
  }
}
