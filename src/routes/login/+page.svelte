<script>
	import { IconBrandGoogle } from '@tabler/icons-svelte';

    //import type { PageData } from './$types';
    import { superForm } from 'sveltekit-superforms/client';
    import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';

    export let data;

  // Client API:
  const { form, errors, constraints } = superForm(data.form);
</script>

<SuperDebug data={$form} />

<div class="container justify-center mx-auto p-24 text-center max-w-xl">
    <div class="card p-6 space-y-6 shadow-xl">
        <p class="font-semibold">Welcome, login with</p>
        <div class="flex flex-wrap space-y-4 space-x-0 md:flex-nowrap md:space-x-4 md:space-y-0">
            <button class="btn variant-ringed-surface w-full gap-2"><IconBrandGoogle />Google</button>
            
        </div>
        <div class="text-center">
            <hr class="-mb-4" />
            <span class="bg-surface-100-800-token p-2 text-sm">Or continue with email</span>
        </div>
        
        <form class="space-y-4" method="POST">
            <label for="email" class="label">
                <input required type="email" name="email" placeholder="Enter Email" class="input p-2" id="email"
                aria-invalid={$errors.email ? 'true' : undefined}
                bind:value={$form.email}
                {...$constraints.email}/>
                
            </label>
            {#if $errors.email}<span class="invalid">{$errors.email}</span>{/if}
            <label class="label">
                
                <input required type="password" name="password" placeholder="Enter Password" class="input p-2" id="password"
                aria-invalid={$errors.password ? 'true' : undefined}
                bind:value={$form.password}
                {...$constraints.password}/>

            </label>
            {#if $errors.password}<span class="invalid">{$errors.password}</span>{/if}
            <div class="flex justify-between flex-col">
                <p class="text-sm py-2 text-slate-500">
                    Don't have an account? <a href="/register">Register</a>
                </p>
                <button class="btn variant-filled-primary">Login</button>
            </div>
        </form>
    </div>
</div>
