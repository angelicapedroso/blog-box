import { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import db from '../firebase/config';

const useFetchDocument = (docCollection, id) => {
  const [document, setDocument] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const [cancelled, setCancelled] = useState(false);

  useEffect(() => {
    async function loadDocument() {
      if (cancelled) return null;

      setLoading(true);

      try {
        const docRef = await doc(db, docCollection, id);
        const docSnap = await getDoc(docRef);

        setDocument(docSnap.data());

        setLoading(false);
      } catch (err) {
        setError(err);

        setLoading(true);
      }

      return setLoading(false);
    }
    loadDocument();
  }, [docCollection, id, cancelled]);

  useEffect(() => setCancelled(true), []);

  return { document, error, loading };
};

export default useFetchDocument;
