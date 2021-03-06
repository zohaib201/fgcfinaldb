import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private productService: ProductService) { }

  localProductData: any = '';

  ngOnInit() {
    this.productService.getall().subscribe((allProduct: any) => {
      this.localProductData = allProduct;
    });
  }

}
