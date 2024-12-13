import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import TodosList from '../TodosList.vue'
import { fetchUserTodos } from '../../api/todosService.js'

// Mock the API
vi.mock('../../api/todosService.js', () => ({
  fetchUserTodos: vi.fn(),
}))

describe('TodosList', () => {
  it('renders correctly when no todos are present', () => {
    const wrapper = mount(TodosList, {
      props: { userId: 1 },
    })

    expect(wrapper.findAll('li')).toHaveLength(0)
  })

  it('renders the correct number of todos', async () => {
    // Mock response with todos
    fetchUserTodos.mockResolvedValue([
      { id: 1, title: 'Todo 1', completed: false },
      { id: 2, title: 'Todo 2', completed: true },
    ])

    const wrapper = mount(TodosList, {
      props: { userId: 1 },
    })

    // Wait for the API call to resolve and the DOM to update
    await fetchUserTodos()
    await wrapper.vm.$nextTick()

    // Assert the number of rendered todos
    expect(wrapper.findAll('li')).toHaveLength(2)
  })

  it('marks todos as completed based on data', async () => {
    // Mock response with one completed todo
    fetchUserTodos.mockResolvedValue([{ id: 1, title: 'Completed Todo', completed: true }])

    const wrapper = mount(TodosList, {
      props: { userId: 1 },
    })

    await fetchUserTodos()
    await wrapper.vm.$nextTick()

    const checkbox = wrapper.find('input[type="checkbox"]')
    expect(checkbox.element.checked).toBe(true)
  })

  it('emits goHome event when "Go Home" is clicked', async () => {
    const wrapper = mount(TodosList, {
      props: { userId: 1 },
    })

    const goHomeButton = wrapper.find('.go-home')
    await goHomeButton.trigger('click')

    expect(wrapper.emitted().goHome).toBeTruthy()
  })

  it('handles API errors', async () => {
    // Mock an error response
    fetchUserTodos.mockRejectedValue(new Error('API Error'))

    const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

    const wrapper = mount(TodosList, {
      props: { userId: 1 },
    })

    // Ensure the onMounted lifecycle is processed
    await wrapper.vm.$nextTick()

    // Assert that console.error was called with the correct message
    expect(consoleErrorSpy).toHaveBeenCalledWith('Error fetching user todos:', expect.any(Error))

    // Restore the mocked console.error to avoid side effects
    consoleErrorSpy.mockRestore()
  })
})
