<script async src="https://js.stripe.com/v3/pricing-table.js">
    import { loadStripe } from '@stripe/stripe-js'
    import { Elements } from 'svelte-stripe'
    import { onMount } from 'svelte'
    import { PUBLIC_STRIPE_KEY } from '$env/static/public'
  
    /**
	 * @type {import("@stripe/stripe-js").Stripe | null}
	 */
    let stripe = null
  
    onMount(async () => {
      stripe = await loadStripe(PUBLIC_STRIPE_KEY)
    })

    
  </script>
  
  
  {#if stripe}
  <Elements {stripe}>
    <stripe-pricing-table pricing-table-id="prctbl_1O1Y8nKZzI6mW8k9FRRHAvZB"
    publishable-key="pk_test_51O1UygKZzI6mW8k9QLe9eTx9yW3J14m7YGtKiI5asMNn9zuegVQPHUQeJDRuZdCIzfzHxRCqNqOlgtUxrPiDfmJ600vCBEscBO">
    </stripe-pricing-table>
    <!-- this is where your Stripe components go -->
  </Elements>
  {/if}