import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../../firebase";

type UseFetchDataReturn<T> = [T[], boolean];

export function useFetchData<T extends {
  createdAt: any
}>(path: string, addCreatedAt?: boolean): UseFetchDataReturn<T> {
  const [data, setData] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, path),
      (querySnapshot) => {
        const newData: T[] = [];
        querySnapshot.forEach((doc) => {
          const docData = doc.data();
          if (addCreatedAt) {
            const timestamp = doc._document.createTime.timestamp;
            const milliseconds = (timestamp.seconds * 1000) + (timestamp.nanoseconds / 1000000);
            newData.push({ ...docData, id: doc.id, createdAt: new Date(milliseconds) } as unknown as T);
          } else {
            newData.push({ ...docData, id: doc.id } as unknown as T);
          }
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
