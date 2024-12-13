import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import ProfilesGrid from '../ProfilesGrid.vue'
import ProfileCard from '../ProfileCard.vue'
import { createTestingPinia } from '@pinia/testing'
import { useProfilesStore } from '../../stores/profilesStore'

describe('ProfilesGrid', () => {
  it('renders correctly when there is no data', () => {
    const wrapper = mount(ProfilesGrid, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
          }),
        ],
      },
    })

    expect(wrapper.findAllComponents(ProfileCard)).toHaveLength(0)
  })

  it('renders the correct number of ProfileCards with mock user data', async () => {
    const wrapper = mount(ProfilesGrid, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
          }),
        ],
      },
    })

    const profilesStore = useProfilesStore()
    profilesStore.users = [
      {
        id: 1,
        name: 'John Doe',
        address: { city: 'New York' },
        company: { name: 'Acme Corp' },
        website: 'www.johndoe.com',
        avatarURL: 'https://example.com/avatar.jpg',
        email: 'john.doe@example.com',
        phone: '123-456-7890',
      },
      {
        id: 2,
        name: 'Jane Smith',
        address: { city: 'Los Angeles' },
        company: { name: 'Tech Ltd' },
        website: 'www.janesmith.com',
        avatarURL: 'https://example.com/avatar2.jpg',
        email: 'jane.smith@example.com',
        phone: '987-654-3210',
      },
    ]

    await wrapper.vm.$nextTick() // Wait for reactivity to update the DOM

    expect(wrapper.findAllComponents(ProfileCard)).toHaveLength(2)
  })

  it('emits "userSelected" event when a ProfileCard is clicked', async () => {
    const wrapper = mount(ProfilesGrid, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
          }),
        ],
      },
    })

    const profilesStore = useProfilesStore()
    profilesStore.users = [
      {
        id: 1,
        name: 'John Doe',
        address: { city: 'New York' },
        company: { name: 'Acme Corp' },
        website: 'www.johndoe.com',
        avatarURL: 'https://example.com/avatar.jpg',
        email: 'john.doe@example.com',
        phone: '123-456-7890',
      },
    ]

    await wrapper.vm.$nextTick()

    const profileCard = wrapper.findComponent(ProfileCard)
    profileCard.vm.$emit('userSelected', 1)

    expect(wrapper.emitted().userSelected).toBeTruthy()
    expect(wrapper.emitted().userSelected[0]).toEqual([1])
  })

  it('calls fetchProfiles on mount', () => {
    const wrapper = mount(ProfilesGrid, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
          }),
        ],
      },
    })

    const profilesStore = useProfilesStore()
    expect(profilesStore.fetchProfiles).toHaveBeenCalled()
  })
})
