export {};
interface Order {
  total: number;
  currency: string;
  paymentType: 'stripe' | 'paypal';
  card: number;
  email: string;
}

function processOrder(order: Order) {
  if (order.paymentType == 'paypal') {
    order.card;
    order.email;
  } else {
    order.email;
    order.card;
  }
  return order;
}


// interface Stripe {
//   card: number;
// }

// interface PayPal {
//   email: string;
// }

// type StripeOrder = Stripe & Order;
// type PayPalOrder = PayPal & Order;

// intersection
// const isStripe = (order: StripeOrder | PayPalOrder): order is StripeOrder => {
//   return 'card' in (order as StripeOrder);
// };



