import { Component } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  private title = 'Products';
  private products;
  private name = '';
  private msg = '';
  
  constructor(private service:ProductService){
	
  }
   
   getProducts(){
	   
	this.msg = '';
	
	this.service.getProducts().subscribe(
		(data:any[]) => { 
		  this.products = data; 
		}
	);
   }
   
   createProduct(){
	this.service.createProduct(this.name).subscribe(
	  (data:any) => {
		this.msg = "Product created successfully with the ID: " + data.id;
	  }
	);   
   }
   

}
