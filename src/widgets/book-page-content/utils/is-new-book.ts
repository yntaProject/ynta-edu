export const isBookNew = (createdAt: Date) => {
  const twoDaysAgo = new Date(Date.now() - 1 * 24 * 60 * 60 * 1000);
  return createdAt > twoDaysAgo;
};