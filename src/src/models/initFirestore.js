import { initializeApp, applicationDefault } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

export let db = null;

export function initFirestore() {
  if (db) return db;                 // 既に初期化済みなら再利用
  initializeApp({
    credential: applicationDefault(), // Cloud Run なら Workload Identity でOK
    projectId: process.env.GCP_PROJECT_ID
  });
  db = getFirestore();
  return db;
}
