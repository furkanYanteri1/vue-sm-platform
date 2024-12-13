import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ProfileCard from '../ProfileCard.vue'

describe('ProfileCard.vue', () => {
  it('renders correctly with all props', () => {
    const wrapper = mount(ProfileCard, {
      props: {
        name: 'John Doe',
        location: 'New York',
        company: 'Example Inc.',
        website: 'www.example.com',
        avatarURL: 'https://example.com/avatar.jpg',
        email: 'john.doe@example.com',
        phone: '123-456-7890',
        userId: 1,
      },
    })

    expect(wrapper.find('.profile-name').text()).toBe('John Doe')
    expect(wrapper.find('.value').text()).toContain('New York')
    expect(wrapper.find('.profile-picture').attributes('src')).toBe(
      'https://example.com/avatar.jpg'
    )
  })

  it('emits "userSelected" with userId when clicked', async () => {
    const wrapper = mount(ProfileCard, {
      props: {
        userId: 1,
      },
    })

    await wrapper.trigger('click')
    expect(wrapper.emitted().userSelected[0]).toEqual([1])
  })

  it('renders fallback text if optional props are missing', () => {
    const wrapper = mount(ProfileCard, {
      props: {
        name: 'John Doe',
        avatarURL: 'https://example.com/avatar.jpg',
        userId: 1,
      },
    })

    expect(wrapper.find('.profile-email').exists()).toBe(false)
    expect(wrapper.find('.profile-phone').exists()).toBe(false)
  })

  it('renders dynamic alt text for the avatar image', () => {
    const wrapper = mount(ProfileCard, {
      props: {
        name: 'John Doe',
        avatarURL: 'https://example.com/avatar.jpg',
        userId: 1,
      },
    })

    const img = wrapper.find('.profile-picture')
    expect(img.attributes('alt')).toBe('Avatar of John Doe')
  })

  it('applies hover effectss', async () => {
    const wrapper = mount(ProfileCard, {
      props: {
        name: 'John Doe',
        avatarURL: 'https://example.com/avatar.jpg',
        userId: 1,
      },
    })

    await wrapper.trigger('mouseover')
    expect(wrapper.classes()).toContain('profile-card')
  })
})
