<template>
	<header
		class="relative border-b-3 border-solid border-black px-4 items-center"
	>
		<div
			class="max-w-7xl mx-auto px-4 flex justify-between items-center z-20 relative bg-white h-full md:h-auto"
		>
			<h1 class="uppercase font-700 fluid font-roboto leading-none">
				Chris Powe
			</h1>
			<button
				class="i-mdi-menu text-2xl block md:hidden"
				@click="() => (menu = !menu)"
			/>
		</div>

		<nav
			class="reletive w-full max-w-7xl mx-auto inline justify-center md:justify-end z-10"
		>
			<ul
				ref="navigation"
				class="flex max uppercase font-roboto gap-4 font-900 items-center flex-col md:flex-row absolute md:relative bg-white w-full md:justify-end z-10 text-2xl"
			>
				<li>
					<NuxtLink to="/">home</NuxtLink>
				</li>
				<li>
					<NuxtLink to="/about">About</NuxtLink>
				</li>
				<li>
					<NuxtLink to="/projects">Projects</NuxtLink>
				</li>
				<li>
					<NuxtLink to="/contact">Contact</NuxtLink>
				</li>
			</ul>
		</nav>
	</header>
</template>

<script setup>
	import { animate } from 'motion'
	import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
	import { whenever } from '@vueuse/core'

	const breakpoints = useBreakpoints(breakpointsTailwind)
	const desktop = breakpoints.greaterOrEqual('md')
	const mobile = breakpoints.smaller('md')

	const menu = ref(false)
	const navigation = ref(null)

	if (breakpoints) {
		whenever(desktop, () => {
			menu.value = true

			animate(navigation.value, { transform: 'translateY(0)' })
		})

		whenever(mobile, () => {
			menu.value = false

			animate(navigation.value, { transform: 'translateY(-110%)' })
		})
	}

	watch(menu, () => {
		if (menu.value) {
			animate(navigation.value, { transform: 'translateY(0)' })
		} else {
			animate(navigation.value, { transform: 'translateY(-110%)' })
		}
	})
</script>

<style scoped>
	.fluid {
		font-size: clamp(1rem, 10vw + 1px, 10rem);
	}

	nav {
		display: inline-flex;
	}
</style>
