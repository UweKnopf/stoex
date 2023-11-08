import Stripe from 'stripe'
import { SECRET_STRIPE_KEY } from '$env/static/private'
import { json } from '@sveltejs/kit';

console.log(SECRET_STRIPE_KEY)

// initialize Stripe
const stripe = new Stripe(SECRET_STRIPE_KEY, {
  // pin the api version
  apiVersion: "2023-08-16"
})
//const stripe = require("stripe")(env("SECRET_STRIPE_KEY"));
// handle POST /create-payment-intent
export async function POST() {
  // create the payment intent
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 2000,
    // note, for some EU-only payment methods it must be EUR
    currency: 'eur',
    // specify what payment methods are allowed
    // can be card, sepa_debit, ideal, etc...
    automatic_payment_methods: {
        enabled: true,
      },
  })

  // return the clientSecret to the client
  return json({
    clientSecret: paymentIntent.client_secret
  })
}