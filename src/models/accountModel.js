import { db } from './initFirestore.js';

const collection = db.collection('accounts');

export async function create(data) {
  const doc = collection.doc();
  data.createdAt = new Date();
  await doc.set(data);
  return { id: doc.id, ...data };
}

export async function findAll() {
  const snapshot = await collection.orderBy('createdAt', 'desc').get();
  return snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
}

export async function findById(id) {
  const doc = await collection.doc(id).get();
  return doc.exists ? { id: doc.id, ...doc.data() } : null;
}

export async function update(id, data) {
  data.updatedAt = new Date();
  await collection.doc(id).update(data);
  return findById(id);
}

export async function remove(id) {
  await collection.doc(id).delete();
  return { id };
}
