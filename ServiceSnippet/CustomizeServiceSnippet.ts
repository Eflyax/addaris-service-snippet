import {AddarisComponent} from '@addarisCore/core/lib/AddarisComponent';
import {optionSettingsMixin} from '@addarisCore/components/management/WebEditor/tabs/SnippetsTab/optionSettings/optionSettingsMixin';

export const CustomizeServiceSnippet = {
	name: 'CustomizeServiceSnippet',
	extends: AddarisComponent,
	mixins: [optionSettingsMixin],
	data() {
		return {
			title: this.t9n ? this.t9n('Customize ServiceSnippet', {ctx: 'snippets'}) : 'Customize ServiceSnippet'
		};
	},
	computed: {
		text: {
			get(): string {
				return this.getOption('text');
			},
			set(value: string): void {
				this.setOption('text', value);
			}
		}
	}
};

export default CustomizeServiceSnippet;
