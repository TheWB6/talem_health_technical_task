import { mount } from '@vue/test-utils'
import { BButton, BForm, BFormGroup, BFormInput } from 'bootstrap-vue';
import App from '../src/App.vue'

// Make sure App is loading
describe('App', () => {
    it('has data', () => {
        expect(typeof App.data).toBe('function')
    })
})

// Mount App and input user name and click submit find Component and Profile button
describe('Mounted App', () => {
    const apiCall = jest.fn()
    const wrapper = mount(App, {
        stubs: {
            'b-form': BForm,
            'b-form-group': BFormGroup,
            'b-form-input': BFormInput,
            'b-button': BButton
        },
        propsData: {
            apiCall
        }
    });

    console.log(wrapper)

    it('renders b-button', () => {
        expect(wrapper.contains('button')).toBe(true)
    })

    it('fills in input and clicks Submit button', async () => {
        const input = wrapper.find('input')
        const submit = wrapper.find('button')
        input.setValue('TheWB6')
        expect(wrapper.find('input').element.value).toBe('TheWB6')
        await submit.trigger('click')
        expect(apiCall).toHaveBeenCalled()
        // await expect(wrapper.findComponent({ name: 'GithubUser'}))
        // await expect(wrapper.find('.btn-primary').text()).toBe('View Profile')
    })
})
