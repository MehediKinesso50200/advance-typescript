export {};
// Return type and some generics

interface House {
  id: number;
  address: string;
  price: number;
  type: 'bunglow' | 'condo' | 'terrace';
}

function indentity<T>(input: T): T {
  return input;
}

// type a = <T>(input: T) => T
type a = typeof indentity;
type _number = typeof indentity<number>;

type toString = ReturnType<typeof indentity<string>>;
type toNumber = ReturnType<typeof indentity<number>>;
type toHouse = ReturnType<typeof indentity<House>>;

//////////////////////////////////

function returnMeWithId<T>(fn: () => T & {id: string}): ReturnType<typeof fn> {
  return fn();
}

returnMeWithId(() => '123');
returnMeWithId<{lat: number; lng: number}>(() => ({lat: 123, lng: 123}));

type year = number;
type month = 'Jan' | 'Feb';
type day = 1 | 2 | 3 | 30;
type str = `${year}/${month}/${day}`;
const date: str = `123123-Feb-30`;

type ipgdomain = 'kinesso' | 'matterkind' | 'ipg';
type kinessoEmail = `${string}@${ipgdomain}.com`;
const email: kinessoEmail = `abc@yahoo.com`;
