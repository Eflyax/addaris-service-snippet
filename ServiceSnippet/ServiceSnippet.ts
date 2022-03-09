import {AddarisComponent} from '@addarisCore/core/lib/AddarisComponent';
import {snippetMixin} from '@addarisCore/components/management/WebEditor/tabs/SnippetsTab/snippetMixin';
import Background from '@addarisCore/components/management/WebEditor/tabs/SnippetsTab/styleSettings/Background/Background.vue';
import CustomizeServiceSnippet from './CustomizeServiceSnippet.vue';
import Margin from '@addarisCore/components/management/WebEditor/tabs/SnippetsTab/styleSettings/Margin/Margin.vue';
import NodeRenderer from '@addarisCore/components/core/NodeRenderer/NodeRenderer.vue';
import Padding from '@addarisCore/components/management/WebEditor/tabs/SnippetsTab/styleSettings/Padding/Padding.vue';
import Paragraph from '@addarisCore/components/snippets/Paragraph/Paragraph.vue';

export const ServiceSnippet = {
	name: 'ServiceSnippet',
	extends: AddarisComponent,
	mixins: [snippetMixin],
	components: {
		Paragraph,
		NodeRenderer
	},
	props: {
		content: String
	},
	data() {
		const
			nodes = {},
			nodeNames = [
				'nodeParagraph',
			];

		nodeNames.forEach((name, index) => {
			nodes[name] = this.$slots.default[index];
		});

		return {
			...nodes
		};
	},
	craft: {
		defaultProps: {
			elementOptions: {
				text: ''
			},
			elementStyle: {}
		},
		settings: {
			CustomizeServiceSnippet,
			Margin,
			Padding,
			Background
		}
	}
};

export default ServiceSnippet;
