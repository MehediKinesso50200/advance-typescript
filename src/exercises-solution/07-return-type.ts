export {};

let id = 0;

function createUser() {
  // process
  return {
    id: id++,
    name: 'Jhon',
    email: 'Jhon@kinesso.com',
    address: 'abc XYZ'
  };
}

type User = ReturnType<typeof createUser>
