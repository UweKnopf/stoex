<script async src="https://js.stripe.com/v3/pricing-table.js">
    import { loadStripe } from '@stripe/stripe-js'
    import { Address, Elements, LinkAuthenticationElement, PaymentElement } from 'svelte-stripe'
    import { onMount } from 'svelte'
    import { PUBLIC_STRIPE_KEY } from '$env/static/public'
	import { goto } from '$app/navigation';
  
    /**
	 * @type {import("@stripe/stripe-js").Stripe | null}
	 */
    let stripe = null
    /**
	 * @type {null}
	 */
    let clientSecret = null
    /**
	 * @type {import("@stripe/stripe-js").StripeError | null}
	 */
    let error = null
    /**
	 * @type {any}
	 */
    let elements
    let processing = false

    onMount(async () => {
      stripe = await loadStripe(PUBLIC_STRIPE_KEY)

      clientSecret = await createPaymentIntent()
    })

    async function createPaymentIntent() {
    const response = await fetch('/examples/payment-element/payment-intent', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({})
    })
    const { clientSecret } = await response.json()

    return clientSecret
  }

  async function submit() {
    // avoid processing duplicates
    if (processing) return

    processing = true

    // confirm payment with stripe
    // @ts-ignore
    const result = await stripe.confirmPayment({
      elements,
      redirect: 'if_required'
    })

    // log results, for debugging
    console.log({ result })

    if (result.error) {
      // payment failed, notify user
      error = result.error
      processing = false
    } else {
      // payment succeeded, redirect to "thank you" page
      goto('/success')
    }
  }

    
  </script>

<h1>Payment Element Example</h1>

<nav>
  <a href="https://github.com/joshnuss/svelte-stripe/tree/main/src/routes/examples/payment-element"
    >View code</a
  >
</nav>

{#if error}
  <p class="error">{error.message} Please try again.</p>
{/if}

{#if stripe && clientSecret}
  <Elements
    {stripe}
    {clientSecret}
    theme="flat"
    labels="floating"
    variables={{ colorPrimary: '#7c4dff' }}
    rules={{ '.Input': { border: 'solid 1px #0002' } }}
    bind:elements
  >
    <form on:submit|preventDefault={submit}>
      <LinkAuthenticationElement />
      <PaymentElement />
      <Address mode="billing" />

      <button disabled={processing}>
        {#if processing}
          Processing...
        {:else}
          Pay
        {/if}
      </button>
    </form>
  </Elements>
{:else}
  Loading...
{/if}

<style>
  .error {
    color: tomato;
    margin: 2rem 0 0;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 2rem 0;
  }

  button {
    padding: 1rem;
    border-radius: 5px;
    border: solid 1px #ccc;
    color: white;
    background: var(--link-color);
    font-size: 1.2rem;
    margin: 1rem 0;
  }
</style>
  
  {#if stripe}
  <Elements {stripe}>
    <!-- this is where your Stripe components go -->
  </Elements>
  {/if}