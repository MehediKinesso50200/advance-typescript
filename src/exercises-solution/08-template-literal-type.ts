export {};
interface OrderInfo {
  id: number;
  shipmentPartner: 'LAZ' | 'POS' | 'LALA';
}

type CombinedId = `${OrderInfo['id']}-${OrderInfo['shipmentPartner']}`;

const combinedId: CombinedId = 'abc-LAZ';

type ipgDomain = 'kinesso' | 'matterkind' | 'ipg';
type ipgEmail = `${string}@${ipgDomain}.com`;
const email: ipgEmail = `abc@yahoo.com`;
