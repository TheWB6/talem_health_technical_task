import { mount } from '@vue/test-utils'
import { BButton, BForm, BFormGroup, BFormInput } from 'bootstrap-vue';
import App from '../src/App.vue'

// Make sure App is loading
describe('App', () => {
    it('has data', () => {
        expect(typeof App.data).toBe('function')
    })
})

// Mount App and input user name and click submit
describe('Mounted App', () => {
    const wrapper = mount(App, {
        stubs: {
            'b-form': BForm,
            'b-form-group': BFormGroup,
            'b-form-input': BFormInput,
            'b-button': BButton
        }
    });

    // make sure submit button is rendered
    it('renders button', () => {
        expect(wrapper.find('button').text()).toBe('Submit')
    })

    // fill in text box, click submit
    it('fills in input and clicks Submit button', async () => {
        const input = wrapper.find('input')
        const submit = wrapper.find('button')
        input.setValue('TheWB6')
        expect(wrapper.find('input').element.value).toBe('TheWB6')
        await submit.trigger('click')
    })
})
