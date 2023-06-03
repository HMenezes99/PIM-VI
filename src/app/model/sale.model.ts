import { firestore } from 'firebase-admin';

export interface ISale {
  status: string;
  created_at: firestore.Timestamp | Date | string;
  paymentType: string;
  value: string;
  productName: string;
  id: string;
}
