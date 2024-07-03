import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
  selector: 'app-seller-dashboard',
  templateUrl: './seller-dashboard.component.html',
  styleUrls: ['./seller-dashboard.component.css']
})
export class SellerDashboardComponent implements OnInit {
  productCategories: ProductCategory[] = [];
  formHidden:boolean = false;
  categoryForm!:FormGroup;
  product: Product = {id:0,name:'',description:'',image:'',price:0,quantity:0};
  productForm!: FormGroup;
  /**
   *
   */
  constructor(private router:Router) {
    
  }
  
  ngOnInit(){
    this.categoryForm = new FormGroup({
      category: new FormControl('',[Validators.required])
    });

    this.productForm = new FormGroup({
      id: new FormControl('',[Validators.required]),
      name: new FormControl('',[Validators.required]),
      description: new FormControl('',[Validators.required]),
      image: new FormControl('',[Validators.required]),
      price: new FormControl('',[Validators.required]),
      quantity: new FormControl('',[Validators.required])
    });

    if (localStorage.getItem('product')==null) localStorage.setItem('product',JSON.stringify(this.productCategories));
      this.productCategories = JSON.parse(localStorage.getItem('product')!);
    
  }
  addCategory(){
    this.formHidden = true;
  }
  addedCategory(){
    this.productCategories = JSON.parse(localStorage.getItem('product')!);
    this.productCategories.push({category:this.categoryForm.get('category')?.value,products:[]});
    console.log(this.categoryForm.get('category')?.value);
    localStorage.setItem('product',JSON.stringify(this.productCategories));
    this.categoryForm.reset();
    this.formHidden = false;
  }
  filteredProducts:Product[] = [];
  category:string = '';
  showProducts(value:string){
    this.category = value;
    this.productCategories = JSON.parse(localStorage.getItem('product')!);
    this.productCategories.forEach(category=>{
      if(category.category===value){
        this.filteredProducts = category.products;
      }
    });
  }

  

  addProduct(){
    this.router.navigate(["/seller/seller-add-product"],{ queryParams:{category : this.category}});

  }
  needNav = false;
  togglenavbar(){
    this.needNav = !this.needNav;
  }


}
