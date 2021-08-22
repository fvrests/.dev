<template>
	<ul class="list">
		<li v-for="item in items" :key="item" class="item">
			<span class="icon">{{ item.symbol }}</span
			><span style="padding: 4px">{{ item.text }}</span>
		</li>
	</ul>
</template>
<style scoped>
.list {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: center;
}
.icon {
	background-color: var(--f-low);
	margin-right: 4px;
	padding: 4px;
	border-radius: 100%;
}
.item {
	padding: 8px 6px;
	margin: 8px;
	background-color: var(--b-high);
	border-radius: 20px;
	font-weight: bold;
	font-size: 12px;
}
</style>
<script setup>
import { defineProps } from 'vue'
defineProps({
	items: { Type: Array, required: true },
})
</script>
