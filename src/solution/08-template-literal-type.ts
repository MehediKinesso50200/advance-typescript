export interface OrderInfo {
  id: number;
  shipmentPartner: 'LAZ' | 'POS' | 'LALA';
}

type CombinedId = `${OrderInfo['id']}-${OrderInfo['shipmentPartner']}`;

const combinedId: CombinedId = 'abc-LAZ';

type ipgdomain = 'kinesso' | 'matterkind' | 'ipg';
type ipgEmail = `${string}@${ipgdomain}.com`;
const email: ipgEmail = `abc@yahoo.com`;
