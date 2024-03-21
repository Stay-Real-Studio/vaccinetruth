export default {
  name: 'timeline',
  type: 'document',
  title: '时间线',
  fields: [
    {
      name: 'datetime',
      title: 'Date',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
        calendarTodayLabel: 'Today',
      },
    },
    {
      name: 'content',
      title: 'Content',
      type: 'object',
      fields: [
        {
          name: 'zh_cn',
          title: '简体中文',
          type: 'text',
        },
        {
          name: 'en',
          title: 'English',
          type: 'text',
        },
        {
          name: 'ru',
          title: 'Russian',
          type: 'text',
        },
        {
          name: 'es',
          title: 'Spanish',
          type: 'text',
        },
        {
          name: 'ptbr',
          title: 'Portuguese',
          type: 'text',
        },
        {
          name: 'fr',
          title: 'French',
          type: 'text',
        },
      ],
    },
  ],
}
