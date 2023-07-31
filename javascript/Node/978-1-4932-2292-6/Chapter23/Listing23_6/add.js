export default function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Please use only numbers');
  }
  return a + b;
}
