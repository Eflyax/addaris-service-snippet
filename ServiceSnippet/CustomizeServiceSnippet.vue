<template>
	<addaris-form class="customize-service-snippet-options">
		<addaris-input
			:value="serviceType"
			:label="t9n('Text', {ctx: 'snippets-serviceSnippet'})"
			type="radio"
			:items="availableServiceTypes"
			@change="serviceType = $event"
		/>
	</addaris-form>
</template>

<script src="./CustomizeServiceSnippet.ts" />
<style src="./CustomizeServiceSnippet.scss" lang="scss" scoped />
