import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../../firebase";

type UseFetchDataReturn<T> = [T[], boolean];

export function useFetchData<T extends { createdAt: Date }>(path: string): UseFetchDataReturn<T> {
  const [data, setData] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Fetch data from Firestore
  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, path),
      (querySnapshot) => {
        const newData: T[] = [];
        querySnapshot.forEach((doc) => {
          const docData = doc.data();
          newData.push({ ...docData, id: doc.id } as unknown as T);
        });
        // @ts-ignore
        const sortedData = newData.sort((a: T, b: T) => a.createdAt - b.createdAt);
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
