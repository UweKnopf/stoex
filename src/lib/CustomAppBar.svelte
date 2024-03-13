<script lang='ts'>
	import '../app.postcss';
	import { AppBar } from '@skeletonlabs/skeleton'; //Avatar maybe
    import { IconBrandGithub, IconUser } from '@tabler/icons-svelte';
    
	//For vercel analytics
	import { dev } from '$app/environment';
  	import { inject } from '@vercel/analytics';
  	inject({ mode: dev ? 'development' : 'production' });
</script>

<AppBar shadow="shadow-xl">
    <svelte:fragment slot="lead">
        <div class="flex items-center ml-4">
            <strong class="text-xl uppercase">
                <a class="lg:!ml-0 w-[32px] lg:w-auto overflow-hidden" href="/" title="Go to Homepage">
                    StoeX
                </a>
            </strong>
            <a class="lg:!ml-0 w-[32px] lg:w-auto overflow-hidden" href="/pricing" title="Go to Pricing">
                Pricing
            </a>
        </div>
    </svelte:fragment>
    <svelte:fragment slot="trail">
        <div class="flex items-center mr-4">
            <section class="sm:inline-flex space-x-4">
                <a class="btn-icon btn-icon-sm hover:variant-soft-primary" href="/" target="_blank" rel="external">
                    <svelte:component this={IconUser} class="text-4xl text-primary-500"/>             
                </a>
                <a class="btn-icon btn-icon-sm hover:variant-soft-primary" href="https://github.com/UweKnopf/stoex" target="_blank" rel="external">
                    <svelte:component this={IconBrandGithub} class="text-4xl text-primary-500"/>
                </a>
            </section>
        </div>
    </svelte:fragment>	
</AppBar>

