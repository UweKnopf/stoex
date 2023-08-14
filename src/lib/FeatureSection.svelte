<script lang="ts">
 

	import { IconGauge, IconUser, IconCookie, IconChartHistogram, IconRobot, IconDeviceAnalytics } from '@tabler/icons-svelte';
	
	const Features = [
		{
			title: 'Data Insights',
			description:
				'See current and future Inventory levels at a glance. See how you can optimize your turnaround and maximize your cashflow with modern, meaningful and simple graphs',
			icon: IconDeviceAnalytics,
			link: "/dataInsights" 
		},
		{
			title: 'Inventory Automation',
			description:
				'Automate the most tedious and time consuming processes of managing stock levels and focus on what really counts',
			icon: IconRobot,
			link: "/automation"
		},
		{
			title: 'Privacy Focused',
			description:
				'With servers hosted in the EU you can be sure that your critical business data is protected',
			icon: IconUser,
			link: "/privacy"
		},
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
			Running a business is already hard, so why not let us help you with all that repetitive and tedious work.
		</p>
	</div>
	<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-16">
		{#each Features as feature}
			<a href= {feature.link} class="card p-4 space-y-2" >
				<svelte:component this={feature.icon} class="text-4xl text-primary-500" />
				<div class="font-bold after:mt-3 after:bg-primary-500 after:w-12 after:h-0.5 after:block">
					{feature.title}
				</div>
				<div class="text-xs opacity-60">
					{feature.description}
				</div>
			</a>
		{/each}
	</div>
</div>

