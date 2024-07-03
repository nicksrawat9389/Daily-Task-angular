import { Component, Input, NgModule, OnInit } from '@angular/core';
interface Product {
  id: number;
  name: string;
  description: string;
  image:string,
  price: number;
  quantity: number;
}

interface ProductCategory {
  category: string;
  products: Product[];
}
@Component({
  selector: 'app-seller-add-product-modal',
  templateUrl: './seller-add-product-modal.component.html',
  styleUrls: ['./seller-add-product-modal.component.css']
})
export class SellerAddProductModalComponent implements OnInit {
  @Input() title: string = '';
  @Input() bodyContent: string = '';
  @Input() closeLabel: string = 'Close';
  @Input() saveLabel: string = 'Save changes';
  @Input() product:any;
  @Input() category:string = '';
  productCategories: ProductCategory[] = [];


  ngOnInit(){

    if (localStorage.getItem('product')==null) localStorage.setItem('product',JSON.stringify(this.productCategories));
      this.productCategories = JSON.parse(localStorage.getItem('product')!);

  }
  productSubmitHandler(){
    // console.log(event);
    console.log(this.category);
    console.log(this.product);
    if(localStorage.getItem('product')!==null){
      this.productCategories = JSON.parse(localStorage.getItem('product')!);
      this.productCategories.forEach(category=>{
        if(category.category===this.category){
           category.products.push(this.product);


          localStorage.setItem('product',JSON.stringify(this.productCategories));
        }
      })
    }
  }

}
