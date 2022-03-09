<template>
	<section
		class="s-theme-service-snippet"
		:class="[
			snippetCls,
			'service-' + elementOptions.serviceType
		]"
		:style="elementCSS"
		:data-title="dataTitle"
		@dragstart="onDragStart"
		@dragend="onDragEnd"
	>
		<async-loader
			:styles="styleDependencies"
			:scripts="scriptDependencies"
		/>

		<node-renderer
			:nodes="nodeImage"
		/>

		<h3>
			<node-renderer
				:nodes="nodeTitle"
			/>
		</h3>

		<node-renderer
			:nodes="nodeParagraph"
		/>

		<div class="service-button">
			<node-renderer
				:nodes="button"
			/>
		</div>
	</section>
</template>

<script src="./ServiceSnippet.ts" />
<style src="./ServiceSnippet.scss" lang="scss" scoped />
