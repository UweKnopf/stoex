<script lang='ts'>
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-modern.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
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
        <strong class="text-xl uppercase">StoeX</strong>
    </svelte:fragment>
    <svelte:fragment slot="trail">
        <section class="hidden sm:inline-flex space-x-4">
            <a class="btn-icon btn-icon-sm hover:variant-soft-primary" href="/" target="_blank" rel="external">
                <svelte:component this={IconUser} class="text-4xl text-primary-500"/>             
            </a>
            <a class="btn-icon btn-icon-sm hover:variant-soft-primary" href="https://github.com/UweKnopf/stoex" target="_blank" rel="external">
                <svelte:component this={IconBrandGithub} class="text-4xl text-primary-500" href="https://github.com/UweKnopf/stoex"/>
            </a>
        </section>
    </svelte:fragment>	
</AppBar>

