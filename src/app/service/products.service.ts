import firebase from 'firebase/app';
import 'firebase/firestore';
import { IProduct } from '../model/product.model';
export class ProductService {
  async getProducts(): Promise<IProduct[]> {
    const db = firebase.firestore();
    const snapshot = await db.collection('products').get();
    const products = snapshot.docs.map((doc) => {
      return { ...doc.data() };
    }) as IProduct[];
    return products;
  }

  async createProduct(product: IProduct) {
    const db = firebase.firestore();
    await db.collection('products').add(product);
  }
}
