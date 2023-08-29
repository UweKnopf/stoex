<script>
	import { IconBrandGoogle } from '@tabler/icons-svelte';

    import { superForm } from 'sveltekit-superforms/client';
    import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';

    export let data;

  // Client API:
  const { form, errors, constraints } = superForm(data.form);
</script>
<SuperDebug data={$form} />
<div class="container justify-center mx-auto p-24 text-center max-w-xl">
    <div class="card p-6 space-y-6 shadow-xl">
        <p class="font-semibold">Welcome, register with</p>
        <div class="flex flex-wrap space-y-4 space-x-0 md:flex-nowrap md:space-x-4 md:space-y-0">
            <button class="btn variant-ringed-surface w-full gap-2"><IconBrandGoogle />Google</button>
            
        </div>
        <div class="text-center">
            <hr class="-mb-4" />
            <span class="bg-surface-100-800-token p-2 text-sm">Or continue with email</span>
        </div>

        <form class="space-y-4" method="POST">
            <label for="email" class="label">
                <input required type="email" name="email" placeholder="Enter Email" class="input p-2" 
                aria-invalid={$errors.email ? 'true' : undefined}
                bind:value={$form.email}
                {...$constraints.email}/>
            </label>
            {#if $errors.email}<span class="invalid">{$errors.email}</span>{/if}
            <label class="label">
                
                <input required type="password" name="password" id="password" placeholder="Enter Password" class="input p-2" 
                aria-invalid={$errors.password ? 'true' : undefined}
                bind:value={$form.password}
                {...$constraints.password}/>

            </label>
            {#if $errors.password}<span class="invalid">{$errors.password}</span>{/if}
            <label class="label">
                
                <input required type="password" name="confirmPassword" placeholder="Repeat Password" class="input p-2" 
                aria-invalid={$errors.confirmPassword ? 'true' : undefined}
                bind:value={$form.confirmPassword}
                {...$constraints.confirmPassword}/>
            </label>
            <div>
                {#if $errors.confirmPassword}<span class="invalid">{$errors.confirmPassword}</span>{/if}
                {#if $errors._errors}<span class="invalid">{$errors._errors}</span>{/if}
            </div>

            <div class="flex justify-between flex-col">
                <p class="text-sm py-2 text-slate-500">
                    Already have an account? <a href="/login">Login</a>
                </p>
                <button class="btn variant-filled-primary">Register</button>
            </div>
        </form>
    </div>
</div>
