<template>
	<section
		class="s-theme-service-snippet"
		:class="snippetCls"
		:style="elementCSS"
		:data-title="dataTitle"
		@dragstart="onDragStart"
		@dragend="onDragEnd"
	>
		<async-loader
			:styles="styleDependencies"
			:scripts="scriptDependencies"
		/>

		<p><strong>{{ t9n('Snippet', {ctx: 'snippets'}) }}</strong>: ServiceSnippet</p>
		<p><strong>{{ t9n('Editable text', {ctx: 'snippets'}) }}: </strong> {{ elementOptions.text }}</p>

		<node-renderer :nodes="nodeParagraph" />
	</section>
</template>

<script src="./ServiceSnippet.ts" />
<style src="./ServiceSnippet.scss" lang="scss" scoped />
