import { Injectable } from '@nestjs/common';
import { privateDecrypt } from 'crypto';

@Injectable()
export class ProductsService {
    private readonly products = [
        {id: 1, name: 'product 10', description: 'Description 1 '},
        {id: 2, name: 'product 2', description: 'Description 2 '},
    ];

    findAll(){
        return this.products;
    }

    create(product){
        this.products.push(product);
        return this.products;
    }
}
    