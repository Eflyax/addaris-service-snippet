import {AddarisComponent} from '@addarisCore/core/lib/AddarisComponent';
import {optionSettingsMixin} from '@addarisCore/components/management/WebEditor/tabs/SnippetsTab/optionSettings/optionSettingsMixin';

export const CustomizeServiceSnippet = {
	name: 'CustomizeServiceSnippet',
	extends: AddarisComponent,
	mixins: [optionSettingsMixin],
	data() {
		return {
			title: this.t9n ? this.t9n('Customize ServiceSnippet', {ctx: 'snippets'}) : 'Customize ServiceSnippet',
			availableServiceTypes: [{
				label: this.t9n ? this.t9n('Primary', {ctx: 'snippets'}) : 'Primary',
				value: 'primary'
			}, {
				label: this.t9n ? this.t9n('Secondary', {ctx: 'snippets'}) : 'Secondary',
				value: 'secondary'
			}]
		};
	},
	computed: {
		serviceType: {
			get(): string {
				return this.getOption('serviceType');
			},
			set(value: string): void {
				this.setOption('serviceType', value);
			}
		}
	}
};

export default CustomizeServiceSnippet;
