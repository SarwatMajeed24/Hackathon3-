// export interface simplifiedProduct {
//     _id: string;
//     imageUrl: string;
//     price: number;
//     slug: string;
//     categoryName: string;
//     name: string;
//   }
  
//   export interface fullProduct {
//     _id: string;
//     images: any;
//     price: number;
//     slug: string;
//     categoryName: string;
//     name: string;
//     description: string;
//     price_id: string;
//   }

  
export interface simplifiedProduct {
    _id: string, // Include the product ID for dynamic routing
    name: string,
    description: string,
    price: number,
    discountPercentage: number,
    category: string,
    isNew: string,
    colors: string,
    sizes: string,
    imageUrl: any,
  }
  
  export interface fullProduct {
    _id: string, // Include the product ID for dynamic routing
    name: string,
    description: string,
    price: number,
    discountPercentage: number,
    category: string,
    isNew: string,
    colors: string,
    sizes: string,
    imageUrl: any,
  }







 