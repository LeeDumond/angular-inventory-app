import { Component, Input, HostBinding } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'product-image',
  templateUrl: './product-image.component.html',
})
export class ProductImageComponent {

  constructor() { }
  @Input() product: Product;
  @HostBinding()('attr.class') cssClass = 'ui small image';


}
