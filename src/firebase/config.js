import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAYmk_xlbg8d3ba0mPBhZKf4CId9Bs0xok',
  authDomain: 'blog-a9ee6.firebaseapp.com',
  projectId: 'blog-a9ee6',
  storageBucket: 'blog-a9ee6.appspot.com',
  messagingSenderId: '15905274525',
  appId: '1:15905274525:web:57f7cd4f214f90440ef274',
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
