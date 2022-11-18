export {};
interface Order {
  id: number;
  shipmentPartner: 'LAZ' | 'POS' | 'LALA';
}

type CombinedId = `${Order['id']}${Order['shipmentPartner']}`; // number typeOf shippingPartner

const combinedId: CombinedId = 'xyzLAZ';

type ipgDomain = 'kinesso' | 'matterkind' | 'ipg';
type ipgEmail = `${string}@${ipgDomain}.com`;
const email: ipgEmail = `abc@yahoo.com`;
