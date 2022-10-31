export {};

// Pick
interface House {
  id: number;
  address: string;
  poscode: number;
  price: number;
  type: 'bunglow' | 'condo' | 'terrace';
}

type houseType = Pick<House, 'type'>;
type stringUnion = houseType['type'];
function _getHouseType(): Pick<House, 'type'>['type'] {
  //  what will be the return type here?
  return 'condo';
}

function getHouseType(): House['type'];
function getHouseType(): Pick<House, 'type'>['type'];
function getHouseType(): 'bunglow' | 'condo' | 'terrace' {
  return 'condo';
}
