const { test, describe } = require('node:test')
const assert = require('node:assert')
const listHelper = require('../utils/list_helper')

// ex 4.4
test('dummy returns one', () => {
  const blogs = ["aa", "bb"]

  const result = listHelper.dummy(blogs)
  assert.strictEqual(result, 1)
})

// ex 4.5
describe('total likes', () => {
  test('of empty list is zero', () => {
    const blogs = []
    const result = listHelper.totalLikes(blogs)
    assert.strictEqual(result, 0)
  })

  test('when list has only one blog equals the likes of that', () => {
    const blogs = [{
        title: 'Test blog',
        author: 'Me',
        likes: 5
      }]
    const result = listHelper.totalLikes(blogs)
    assert.strictEqual(result, 5)
  })

  test('of a bigger list is calculated right', () => {
    const blogs = [
      { title: 'a', author: 'a', likes: 1 },
      { title: 'b', author: 'b', likes: 2 },
      { title: 'c', author: 'c', likes: 3 }]
    const result = listHelper.totalLikes(blogs)
    assert.strictEqual(result, 6)
  })
})

// ex 4.6
describe('most blogs', () => {
  test('author with most blogs is returned', () => {
    const blogs = [
      { author: 'A' },
      { author: 'B' },
      { author: 'A' }
    ]

    const result = listHelper.mostBlogs(blogs)

    assert.deepStrictEqual(result, {
      author: 'A',
      blogs: 2
    })
  })
})

// ex 4.7
describe('most likes', () => {
  test('author with most likes is returned', () => {
    const blogs = [
      { author: 'A', likes: 5 },
      { author: 'B', likes: 10 },
      { author: 'A', likes: 7 }
    ]

    const result = listHelper.mostLikes(blogs)
    assert.deepStrictEqual(result, {
      author: 'A',
      likes: 12
    })
  })
})