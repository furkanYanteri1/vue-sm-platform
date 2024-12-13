import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import AlbumsList from '../AlbumsList.vue'
import { fetchUserAlbums } from '../../api/albumsService.js'

// Mock the API
vi.mock('../../api/albumsService.js', () => ({
  fetchUserAlbums: vi.fn(),
}))

describe('AlbumsList', () => {
  it('renders correctly when no albums are present', () => {
    const wrapper = mount(AlbumsList, {
      props: { userId: 1 },
    })

    expect(wrapper.findAll('.album')).toHaveLength(0)
  })

  it('renders the correct number of albums', async () => {
    fetchUserAlbums.mockResolvedValue([
      { id: 1, title: 'Album 1', thumbnailUrl: 'https://via.placeholder.com/150' },
      { id: 2, title: 'Album 2', thumbnailUrl: 'https://via.placeholder.com/150' },
    ])

    const wrapper = mount(AlbumsList, {
      props: { userId: 1 },
    })

    await fetchUserAlbums()
    await wrapper.vm.$nextTick()

    expect(wrapper.findAll('.album')).toHaveLength(2)
  })

  it('emits goHome event when "Go Home" is clicked', async () => {
    const wrapper = mount(AlbumsList, {
      props: { userId: 1 },
    })

    const goHomeButton = wrapper.find('.go-home')
    await goHomeButton.trigger('click')

    expect(wrapper.emitted().goHome).toBeTruthy()
  })

  it('handles API errors', async () => {
    fetchUserAlbums.mockRejectedValue(new Error('API Error'))

    const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

    const wrapper = mount(AlbumsList, {
      props: { userId: 1 },
    })

    await wrapper.vm.$nextTick()

    expect(consoleErrorSpy).toHaveBeenCalledWith('Error fetching albums:', expect.any(Error))

    consoleErrorSpy.mockRestore()
  })
})
