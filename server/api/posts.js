const Parser = require('rss-parser')
const cache = require('./cache')

const postsApi = async (req, res) => {
  const posts = await fetchPosts()
  return res.json(posts)
}

const getFeed = async () => {
  if (!cache.posts || cache.posts.time <= new Date().getTime() - 60 * 60 * 1000) {
    // eslint-disable-next-line
    console.log('fetching new');

    const start = new Date().getTime()

    const parser = new Parser()
    cache.posts = {
      value: await parser.parseURL('https://www.errietta.me/blog/feed'),
      time: new Date().getTime()
    }

    // eslint-disable-next-line
    console.log(`took ${new Date().getTime() - start} ms.`)
  }

  return cache.posts.value
}

const fetchPosts = async () => {
  try {
    const feed = await getFeed()

    return feed.items.map((item, idx) => ({
      id: idx,
      title: item.title,
      content: item.content,
      link: item.link
    }))
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e)
    return []
  }
}

module.exports = postsApi
