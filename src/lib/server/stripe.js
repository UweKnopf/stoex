import Stripe from 'stripe'
import { env } from '$env/dynamic/private'

// export the stripe instance
// @ts-ignore
export const stripe = new Stripe(env.SECRET_STRIPE_KEY, {
    // pin the api version
    apiVersion: '2023-10-16'
})