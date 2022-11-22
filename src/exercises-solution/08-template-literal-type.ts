export {};
interface Order {
  id: number;
  shipmentPartner: 'LAZ' | 'POS' | 'LALA';
}

type CombinedId = `${Order['id']}${Order['shipmentPartner']}`; // number shippingPartner

const combinedId: CombinedId = '34LAZ';

type ipgDomain = 'kinesso' | 'matterkind' | 'ipg';
type ipgEmail = `${string}@${ipgDomain}.com`;
const email: ipgEmail = `abc@kinesso.com`;
