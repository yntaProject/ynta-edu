import { IMessage } from "../../../shared/types";

export function getUniqueDates(messages: IMessage[]): Date[] {
  const uniqueDates: Set<string> = new Set();
  const dateObjects: Date[] = [];

  messages.forEach(msg => {
    const date = msg?.createdAt.toDate();
    const dateString = date.toLocaleDateString();
    if (!uniqueDates.has(dateString)) {
      uniqueDates.add(dateString);
      dateObjects.push(date);
    }
  });

  return dateObjects;
}