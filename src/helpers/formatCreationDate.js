export const formatCreationDate = (date) => {
  const rawDate = new Date(date).toJSON().slice(0, 10);

  return `${rawDate.slice(0, 4)}.${rawDate.slice(5, 7)}.${rawDate.slice(8, 10)}`;
}
