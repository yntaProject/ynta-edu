import { ICreativityMessage } from "../../../shared/types";

export function getUniqueCreativityDates(messages: ICreativityMessage[]): Date[] {
  const uniqueDates: Set<string> = new Set();
  const dateObjects: Date[] = [];

  messages.forEach(msg => {
    const date = new Date(msg?.createdAt);
    const dateString = date.toLocaleDateString();
    if (!uniqueDates.has(dateString)) {
      uniqueDates.add(dateString);
      dateObjects.push(date);
    }
  });

  return dateObjects;
}