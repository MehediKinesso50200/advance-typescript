let id = 0;

export function createUser() {
  // process
  return {
    id: id++,
    name: 'Jhon',
    email: 'Jhon@kinesso.com',
    address: 'abc XYZ'
  };
}