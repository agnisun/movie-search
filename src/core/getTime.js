export const getTime = (runtime) => {
  const hours = Math.trunc(runtime/60);
  const minutes = runtime % 60;
  return hours + 'h' + minutes + 'm';
}