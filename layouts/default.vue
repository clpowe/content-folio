<template>
	<div class="parent font-sans">
		<AppHeader />
		<main>
			<slot />
		</main>
		<AppFooter />
	</div>
</template>

<script setup>
	import '@unocss/reset/tailwind.css'
</script>

<style>
	.parent {
		display: grid;
		grid-template-rows: auto 1fr auto;

		height: 100dvh;
	}
</style>
