export {}
/// Partial Required Readonly

interface House {
    address: string
    price: number
    type: 'bunglow' | 'condo' | 'terrace'
}

// type PartialHouses = {
//     address?: string | undefined;
//     price?: number | undefined;
//     type?: "bunglow" | "condo" | "terrace" | undefined;
// }
type partial_houses = Partial<House>


// type ReadOnlyHouses = {
//     readonly address: string;
//     readonly price: number;
//     readonly type: 'bunglow' | 'condo' | 'terrace';
// }
type readonly_Houses = Readonly<House>
const abc: readonly_Houses = { address: '2', price: 123, type: 'condo'}
abc.address = '123123123'

// type readOnly_and_partial_houeses = {
//     readonly address?: string | undefined;
//     readonly price?: number | undefined;
//     readonly type?: "bunglow" | "condo" | "terrace" | undefined;
// }
type readonly_and_partial_houeses = Readonly<partial_houses>


// type requiredHouse = {
//     address: string;
//     price: number;
//     type: 'bunglow' | 'condo' | 'terrace';
// }
type requiredHouse = Required<partial_houses>