export {}
interface User {
  id: number;
  name: string;
}

interface Book {
  id: number;
  title: string;
  author: string;
}

interface StringConstraint {
  length: number;
}
interface ApiResponse<T extends StringConstraint> {
  status: string;
  message: string;
  data: T;
}
type UserData = ApiResponse<User[]>;

interface NumberConstraint {
  toString(input?: number): string;
  toFixed(input?: number): string;
}

interface NumberResponse<T extends NumberConstraint> {
  status: string;
  message: string;
  data: T;
}

type NumberData = NumberResponse<number>;