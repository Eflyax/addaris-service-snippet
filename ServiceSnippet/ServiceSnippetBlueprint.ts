import {AddarisComponent} from '@addarisCore/core/lib/AddarisComponent';
import Blueprint from '@addarisCore/components/management/WebEditor/components/Blueprint/Blueprint.vue';
import Canvas from '@addarisCore/components/management/WebEditor/components/Canvas/Canvas.vue';
import Paragraph from '@addarisCore/components/snippets/Paragraph/Paragraph.vue';
import Button from '@addarisCore/components/snippets/Button/Button.vue';
import SnippetIcon from '@addarisCore/components/management/WebEditor/tabs/SnippetsTab/SnippetIcon/SnippetIcon.vue';
// TODO move this line up to keep imports sorted
import ServiceSnippet from './ServiceSnippet.vue';

export const ServiceSnippetBlueprint = {
	name: 'ServiceSnippetBlueprint',
	extends: AddarisComponent,
	components: {
		Blueprint,
		Button,
		Canvas,
		Paragraph,
		SnippetIcon,
		// TODO move this line up to keep imports sorted
		ServiceSnippet
	},
	data() {
		return {
			SnippetIcon
		};
	}
};

export default ServiceSnippetBlueprint;
