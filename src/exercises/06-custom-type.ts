export interface OrderInformation {
  id: number;
  shipmentPartner: 'LAZ' | 'POS' | 'LALA';
}

type OrderDerivativeId = `${OrderInformation['id']}-${OrderInformation['shipmentPartner']}`;

const orderDerivativeId: OrderDerivativeId = '1123-LAZ';


type ipgdomain = 'kinesso' | 'matterkind' | 'ipg';
type kinessoEmail = `${string}@${ipgdomain}.com`;
const email: kinessoEmail = `abc@yahoo.com`;
