import firebase from 'firebase/app';
import 'firebase/firestore';
import { ISale } from '../model/sale.model';
export class SaleService {
  async getSale(): Promise<ISale[]> {
    const db = firebase.firestore();
    const snapshot = await db.collection('sales').get();
    const products = snapshot.docs.map((doc) => {
      return { ...doc.data(), id: doc.id };
    }) as ISale[];
    return products;
  }

  async createSale(sale: ISale) {
    const db = firebase.firestore();
    await db.collection('sales').add(sale);
    const item = await db
      .collection('products')
      .where('name', '==', sale.productName)
      .get();
    console.log(item);
    await db
      .collection('products')
      .doc(item.docs[0].id)
      .update({ quantity: item.docs[0].data()['quantity'] - 1 });
  }

  async paidSale(id: string) {
    const db = firebase.firestore();

    await db.collection('sales').doc(id).update({ status: 'Pago' });
  }
  async cancelSale(sale: ISale) {
    const db = firebase.firestore();

    await db.collection('sales').doc(sale.id).update({ status: 'Cancelado' });
    const item = await db
      .collection('products')
      .where('name', '==', sale.productName)
      .get();
    console.log(item);
    await db
      .collection('products')
      .doc(item.docs[0].id)
      .update({ quantity: item.docs[0].data()['quantity'] + 1 });
  }
}
