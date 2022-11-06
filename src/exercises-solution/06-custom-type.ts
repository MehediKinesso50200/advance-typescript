interface OrderInformation {
  id: number;
  shipmentPartner: 'LAZ' | 'POS' | 'LALA';
}

const orderInfo: OrderInformation = {id: 2233, shipmentPartner: 'LAZ'};
type OrderDerivativeId = `${OrderInformation['id']}-${OrderInformation['shipmentPartner']}`;

createOrderCombinedId(orderInfo);

function createOrderCombinedId(orderInfo: OrderInformation): OrderDerivativeId {
  return (orderInfo.id + '-' + orderInfo.shipmentPartner) as OrderDerivativeId;
}

const orderDerivativeId: OrderDerivativeId = '2-LAZ';

getOrderOrderInfo(orderDerivativeId);

function getOrderOrderInfo(combinedId: OrderDerivativeId): OrderInformation {
  const getArrayCombinedArray = combinedId.split('-');

  const data = {
    id: Number(getArrayCombinedArray[0]),
    shipmentPartner: getArrayCombinedArray[1] as OrderInformation['shipmentPartner']
  };

  return data;
}

type ipgdomain = 'kinesso' | 'matterkind' | 'ipg';
type kinessoEmail = `${string}@${ipgdomain}.com`;
const email: kinessoEmail = `abc@yahoo.com`;

// type year = number;
// type month = 'Jan' | 'Mar' | 'Apr';
// type day = 1 | 3 | 5 | 7 | 9 | 11 | 13 | 15 | 17 | 19 | 21 | 23 | 25 | 27 | 29;
// type str = `${year}/${month}/${day}`;
// const date: str = `2020-Jan-30`;
