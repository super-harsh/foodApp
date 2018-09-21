export class Categories {
    name: string;
    products: Product[];
}


export class Order {
    date: Date;
    totalAmt: number;
    products: Product[];
}

export class Product {
    image: string;
    description: string;
    name: string;
    price: number;
    quantity: number;
}
