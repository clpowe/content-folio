<template>
	<div v-if="data">
		<ContentRendererMarkdown :value="data" />
	</div>
</template>

<script setup lang="ts">
	const route = useRoute()
	const slug = route.params.slug
	const { data } = await useAsyncData('project', () =>
		queryContent(`projects/${slug}`).findOne()
	)
</script>

<style scoped></style>
