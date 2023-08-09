<script lang="ts">
 

	import { IconGauge, IconUser, IconCookie } from '@tabler/icons-svelte';
	
	const Features = [
		{
			title: 'Extreme performance',
			description:
				'This dust is actually a powerful poison that will even make a pro wrestler sick, Regice cloaks itself with frigid air of -328 degrees Fahrenheit',
			icon: IconGauge
		},
		{
			title: 'Privacy focused',
			description:
				'People say it can run at the same speed as lightning striking, Its icy body is so cold, it will not melt even if it is immersed in magma',
			icon: IconUser
		},
		{
			title: 'No third parties',
			description:
				'They’re popular, but they’re rare. Trainers who show them off recklessly may be targeted by thieves',
			icon: IconCookie
		}
	]
</script>

<div class="container mx-auto max-w-screen-lg">
	<div class="text-center space-y-4">
		
		<div class="text-xl md:text-3xl font-bold">
			Focus on what matters, leave the rest to us
		</div>
		<p
			class="max-w-xl opacity-60 mx-auto after:mx-auto after:mt-3 after:bg-primary-500 after:w-12 after:h-0.5 after:block"
		>
			Running a buisnes is already hard, so why not let us help you with all that repetetive and tidious work.
		</p>
	</div>
	<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-16">
		{#each Features as feature}
			<div class="card p-4 space-y-2">
				<svelte:component this={feature.icon} class="text-4xl text-primary-500" />
				<div class="font-bold after:mt-3 after:bg-primary-500 after:w-12 after:h-0.5 after:block">
					{feature.title}
				</div>
				<div class="text-xs opacity-60">
					{feature.description}
				</div>
			</div>
		{/each}
	</div>
</div>

