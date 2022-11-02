/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxe3ed4f946bf43816',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'd01f18309a25c3d8f08f3a8475f25eb2',

  PROVINCE: '苏州',
  CITY: '昆山',

  USERS: [
    {
      // 想要发送的人的名字
      name: '乖乖',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'otHap6EwzN0BZCgVg3vvSpj6tUwM',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '	exJjCA35J2vca6rRtpBNhYO10rrl5Re9pElNywI7IyQ',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '04-02',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        { 
          type: '乖乖生日', name: '阴历', year: '1999', date: '02-16',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '乖乖生日', name: '阳历', year: '1999', date: '04-02',
        },
        {
          type: '下次周年庆', name: '相识纪念日', year: '2020', date: '10-01',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2021-10-01' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2025-10-01' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '	exJjCA35J2vca6rRtpBNhYO10rrl5Re9pElNywI7IyQ',

  CALLBACK_USERS: [
    {
      name: '嗯呐',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'otHap6EwzN0BZCgVg3vvSpj6tUwM',
    }
  ],

}

module.exports = USER_CONFIG

