import firebase from 'firebase/app';
import 'firebase/firestore';
import { IUser } from '../model/user.model';
export class UserService {
  async getUser(): Promise<IUser[]> {
    const db = firebase.firestore();
    const snapshot = await db.collection('users').get();
    const products = snapshot.docs.map((doc) => {
      return { ...doc.data() };
    }) as IUser[];
    return products;
  }

  async createUser(user: IUser) {
    const db = firebase.firestore();
    await db.collection('users').add(user);
  }

  async getUserByCpf(cpf: string) {
    const db = firebase.firestore();
    const snapshot = await db.collection('users').where('cpf', '==', cpf).get();
    const products = snapshot.docs.map((doc) => {
      return { ...doc.data() };
    });
    if (!products.length) {
      throw Error('Nenhum cliente encontrado!');
    }
    return products;
  }
}
