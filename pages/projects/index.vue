<template>
	<div>Projects Page</div>
	<article v-for="projet of data" key="project.id">
		<NuxtLink :to="projet._path">{{ projet.title }}</NuxtLink>
	</article>
</template>

<script setup lang="ts">
	const { data } = await useAsyncData('home', () => queryContent('/').find())
</script>

<style scoped></style>
