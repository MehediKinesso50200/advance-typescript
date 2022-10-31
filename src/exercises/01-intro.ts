export {}

interface ApiResponse<T> {
  status: string;
  message: string;
  data: T;
}
interface User {
  id: number;
  name: string;
}

interface Book {
  id: number;
  title: string;
  author: string;
}

type UserResponse = ApiResponse<User[]>;
type BookResponse = ApiResponse<Book[]>;

function display<T extends User>(per: T): void {
  console.log(`${per.id} ${per.name}`);
}

display({ji: 'd', id: 1, name: 'name'});
