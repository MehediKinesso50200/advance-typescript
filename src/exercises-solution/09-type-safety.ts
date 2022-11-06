export {};
interface Order {
  total: number;
  currency: string;
}

type Stripe = {
  card: number;
};

type PayPal = {
  email: string;
};

type StripeOrder = Order & Stripe; // { total: number; currency: string; card: number; }
type PayPalOrder = Order & PayPal; // { total: number; currency: string; email: string; }

const isStripe = (order: StripeOrder | PayPalOrder): order is StripeOrder => {
  return 'card' in (order as StripeOrder);
};

export function processOrder(order: StripeOrder | PayPalOrder) {
  if (isStripe(order)) {
    order.card;
    order.email;
  } else {
    order.email;
    order.card;
  }

  return order;
}
