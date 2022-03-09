<template>
	<addaris-form class="customize-service-snippet-options">
		<addaris-input
			v-model="text"
			:label="t9n('Text', {ctx: 'snippets-serviceSnippet'})"
			fixed-label
			type="text"
		/>
	</addaris-form>
</template>

<script src="./CustomizeServiceSnippet.ts" />
<style src="./CustomizeServiceSnippet.scss" lang="scss" scoped />
