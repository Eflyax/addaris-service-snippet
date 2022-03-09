<template>
	<blueprint
		class="s-theme-service-snippet"
		:component="SnippetIcon"
		icon="mdi-checkbox-blank"
		:title="t9n('ServiceSnippet', {ctx: 'snippets-serviceSnippet'})"
	>
		<template #blueprint>
			<service-snippet
				:data-title="t9n('ServiceSnippet', {ctx: 'snippets-serviceSnippet'})"
			>
				<!-- paragraph -->
				<Canvas
					component="Container"
					:data-title="t9n('Image', {ctx: 'snippets-paragraph'})"
				/>

				<!-- paragraph -->
				<paragraph
					:data-title="t9n('Title', {ctx: 'snippets-paragraph'})"
				/>

				<!-- paragraph -->
				<paragraph
					:data-title="t9n('Paragraph', {ctx: 'snippets-paragraph'})"
				/>

				<Button
					:data-title="t9n('Button', {ctx: 'snippets-paragraph'})"
				/>
			</service-snippet>
		</template>
	</blueprint>
</template>

<script src="./ServiceSnippetBlueprint.ts" />
