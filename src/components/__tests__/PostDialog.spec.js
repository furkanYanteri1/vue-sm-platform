import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import PostDialog from '../PostDialog.vue'
import { fetchPostComments } from '../../api/commentsService.js'

// Mock the API
vi.mock('../../api/commentsService.js', () => ({
  fetchPostComments: vi.fn(),
}))

describe('PostDialog', () => {
  const mockPost = {
    id: 1,
    title: 'Sample Post Title',
    body: 'This is the body of the post.',
  }

  it('renders the dialog with the correct post data', () => {
    const wrapper = mount(PostDialog, {
      props: {
        post: mockPost,
        isVisible: true,
      },
    })

    expect(wrapper.find('.post-title').text()).toBe(mockPost.title)
    expect(wrapper.find('.post-body p').text()).toBe(mockPost.body)
  })

  it('displays comments when provided', async () => {
    fetchPostComments.mockResolvedValue([
      {
        id: 1,
        name: 'John Doe',
        body: 'This is a comment.',
        avatarURL: 'https://via.placeholder.com/40',
      },
      {
        id: 2,
        name: 'Jane Smith',
        body: 'Another comment.',
        avatarURL: 'https://via.placeholder.com/40',
      },
    ])

    const wrapper = mount(PostDialog, {
      props: {
        post: mockPost,
        isVisible: true,
      },
    })

    await fetchPostComments()
    await wrapper.vm.$nextTick()

    const comments = wrapper.findAll('.comment')
    expect(comments).toHaveLength(2)
    expect(comments[0].find('.comment-author').text()).toBe('John Doe')
    expect(comments[1].find('.comment-author').text()).toBe('Jane Smith')
  })

  it('emits the close event when the close button is clicked', async () => {
    const wrapper = mount(PostDialog, {
      props: {
        post: mockPost,
        isVisible: true,
      },
    })

    const closeButton = wrapper.find('.close-button')
    await closeButton.trigger('click')

    expect(wrapper.emitted().close).toBeTruthy()
  })

  it('handles API errors', async () => {
    fetchPostComments.mockRejectedValue(new Error('API Error'))

    const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

    mount(PostDialog, {
      props: {
        post: mockPost,
        isVisible: true,
      },
    })

    await Promise.resolve() // Ensure the next tick is awaited

    expect(consoleErrorSpy).toHaveBeenCalledWith('Error fetching comments:', expect.any(Error))

    consoleErrorSpy.mockRestore()
  })
})
