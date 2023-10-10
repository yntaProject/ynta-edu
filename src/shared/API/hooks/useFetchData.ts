import { useEffect, useState } from "react";
import { collection, onSnapshot, getDoc } from "firebase/firestore";
import { db } from "../../../firebase";

type UseFetchDataReturn<T> = [T[], boolean];

export function useFetchData<T extends {
  createdAt: Date
}>(path: string, addCreatedAt?: boolean): UseFetchDataReturn<T> {
  const [data, setData] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, path),
      async (querySnapshot) => {
        const newDataPromises: Promise<T>[] = querySnapshot.docs.map(async (doc) => {
          const docData = doc.data();
          if (addCreatedAt) {
            const fullDoc = await getDoc(doc.ref);
            // @ts-ignore
            const timestamp = fullDoc.metadata.createTime;
            const milliseconds = (timestamp?.seconds * 1000) + (timestamp?.nanoseconds / 1000000);
            return { ...docData, id: doc.id, createdAt: new Date(milliseconds!) } as unknown as T;
          } else {
            return { ...docData, id: doc.id } as unknown as T;
          }
        });
        const newData = await Promise.all(newDataPromises);
        const sortedData = newData.sort((a: T, b: T) => a.createdAt.getTime() - b.createdAt.getTime());
        setData(sortedData);
        setIsLoading(false);
      }
    );

    return () => {
      unsubscribe();
    };
  }, [path]);

  return [data, isLoading];
}
