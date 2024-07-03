import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
interface Product {
  id: number;
  name: string;
  description: string;
  image:string,
  quantity: number;
  price: number;
}

interface ProductCategory {
  category: string;
  products: Product[];
}

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent implements OnInit {
  productForm!: FormGroup;
  productCategories: ProductCategory[] = [];

  category:any='';
  constructor(private route:ActivatedRoute,private router:Router) {
    this.route.queryParams.subscribe((params) => {
    this.category = params;
  }
);
  }


  ngOnInit(): void {
    this.productForm = new FormGroup({
      id: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
      quantity: new FormControl('', [Validators.required]),
      price:new FormControl('', [Validators.required])
    })

    if (localStorage.getItem('product')==null) localStorage.setItem('product',JSON.stringify(this.productCategories));
    this.productCategories = JSON.parse(localStorage.getItem('product')!);
  }
  onSubmit(){
    console.log(this.category.category);
    this.productCategories = JSON.parse(localStorage.getItem('product')!);
    this.productCategories.forEach((cat)=>{
      if(cat.category==this.category.category){
        cat.products.push(this.productForm.value);
      }
    })
    localStorage.setItem('product',JSON.stringify(this.productCategories));
    this.router.navigate(["/seller/seller-dashboard"])
  }
}
