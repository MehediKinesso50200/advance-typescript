//--- Awaited
function getUsers(): Promise<{firstName: string; lastName: string; id: number; dob: string}> {
  return Promise.resolve({firstName: '', lastName: '', id: 2, dob: '123'});
}

type promiseUser = ReturnType<typeof getUsers>;
type user = Awaited<ReturnType<typeof getUsers>>;

type firstNameType = Awaited<ReturnType<typeof getUsers>>['firstName']; // same as user['firstName]


//---- Parameters
function toDate(
  year: number,
  month: 'Jan' | 'Feb' | 'Mar' | 'December',
  day: number,
  options?: {hour: number; min: number; second: number}
): string {
  return 'some date';
}

toDate(2022, 'Jan', 30);
toDate(2022, 'Jan', 30, {hour: 2, min: 30, second: 0});

type month = Parameters<typeof toDate>[1];
// function getCurrentMonth(): Parameters<typeof toDate>[1] {
//     return 'Jan'
// }

//
type toDateParam = Parameters<typeof toDate>;
type monthType = toDateParam[1];
