export {};
interface Order {
  total: number;
  currency: string;
}

interface Stripe {
  card: number;
}

interface PayPal {
  email: string;
}

type StripeOrder = Stripe & Order;
type PayPalOrder = PayPal & Order;

const isStripe = (order: StripeOrder | PayPalOrder): order is StripeOrder => {
  return 'card' in (order as StripeOrder);
};

function processOrder(order: StripeOrder | PayPalOrder) {
  if (isStripe(order)) {
    order.card;
    order.email;
  } else {
    order.email;
    order.card;
  }
  return order;
}








// intersection




