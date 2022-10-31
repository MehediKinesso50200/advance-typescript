export {}

// Omit 

const h: House = { id: 1, address: '', poscode: 1, price: 2, type: 'condo' }


interface House {
    id?: number
    address: string
    poscode: number
    price: number
    type: 'bunglow' | 'condo' | 'terrace'
}

function createNewHouse(payload: Omit<House, 'id'>) {
    // payload
    payload.id;
    return payload
}