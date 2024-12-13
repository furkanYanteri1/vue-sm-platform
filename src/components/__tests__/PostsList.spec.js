import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import PostsList from '../PostsList.vue'
import PostDialog from '../PostDialog.vue'
import { fetchUserPosts } from '../../api/postsService.js'

// Mock the API
vi.mock('../../api/postsService.js', () => ({
  fetchUserPosts: vi.fn(),
}))

describe('PostsList', () => {
  const mockPosts = [
    { id: 1, title: 'Post Title 1', body: 'Post Body 1' },
    { id: 2, title: 'Post Title 2', body: 'Post Body 2' },
  ]

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders correctly with posts', async () => {
    // Mock API response
    fetchUserPosts.mockResolvedValue(mockPosts)

    const wrapper = mount(PostsList, {
      props: { userId: 1 },
    })

    // Wait for the component to fetch data and update
    await fetchUserPosts()
    await wrapper.vm.$nextTick()

    const posts = wrapper.findAll('.post')
    expect(posts).toHaveLength(mockPosts.length)
    expect(posts[0].find('.post-title').text()).toBe(mockPosts[0].title)
    expect(posts[1].find('.post-body').text()).toBe(mockPosts[1].body)
  })

  it('emits "goHome" event when "Go Home" is clicked', async () => {
    const wrapper = mount(PostsList, { props: { userId: 1 } })
    const goHomeButton = wrapper.find('.go-home')
    await goHomeButton.trigger('click')

    expect(wrapper.emitted().goHome).toBeTruthy()
  })

  it('opens PostDialog when "See More" is clicked', async () => {
    fetchUserPosts.mockResolvedValue(mockPosts)
    const wrapper = mount(PostsList, { props: { userId: 1 } })

    await fetchUserPosts()
    await wrapper.vm.$nextTick()

    const seeMoreButton = wrapper.find('.see-more')
    await seeMoreButton.trigger('click')

    const dialog = wrapper.findComponent(PostDialog)
    expect(dialog.exists()).toBe(true)
    expect(dialog.props('post')).toEqual(mockPosts[0])
  })

  it('closes PostDialog when "close" event is emitted', async () => {
    fetchUserPosts.mockResolvedValue(mockPosts)
    const wrapper = mount(PostsList, { props: { userId: 1 } })

    await fetchUserPosts()
    await wrapper.vm.$nextTick()

    const seeMoreButton = wrapper.find('.see-more')
    await seeMoreButton.trigger('click')

    const dialog = wrapper.findComponent(PostDialog)
    dialog.vm.$emit('close')
    await wrapper.vm.$nextTick()

    expect(wrapper.findComponent(PostDialog).exists()).toBe(false)
  })

  it('handles API errors', async () => {
    fetchUserPosts.mockRejectedValue(new Error('API Error'))
    const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

    mount(PostsList, { props: { userId: 1 } })

    await fetchUserPosts().catch(() => {}) // Catch the rejected promise
    expect(consoleErrorSpy).toHaveBeenCalledWith('Error fetching user posts:', expect.any(Error))

    consoleErrorSpy.mockRestore()
  })
})
