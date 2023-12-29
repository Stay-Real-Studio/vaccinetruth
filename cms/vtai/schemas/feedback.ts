export default {
    name: 'feedback',
    type: 'document',
      title: '用户反馈',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title 标题'
      },
      {
        name: 'content',
        type: 'string',
        title: 'Content 正文'
      }
    ]
  }