window.Config = {

  // 显示标题
  SiteName: '站点监控',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only
  ApiKeys: [
    'm794516267-8aaa220478f355091e4128cf', // 小站
    'm794516281-6602f1060342fe3508d38dd2', // 博客
    'm794516292-a59b9d6e16b10c3e19849438', // 云盘
	'm794516507-e544fee64a0fd497546fa68b', // 站点监控
    'm794516318-f3aaa1a73d10ad2ea6851a30', // 原神群推荐
	'm794215978-a6afb30c709b1315fd6faf3b', // v2ray节点
	'm794516304-5e8364a496b461768e947f83', // Google镜像
	'm794516311-1a0aa7172e575f7230a859bd', // ChatGPT镜像
	'm794516444-9ad08359dd84fc858618f6b9', // Twikoo评论系统
	'm794516449-dc08b247fa8ebe21f4b46adb', // Waline评论系统
	'm794516523-0189b2752a4834f6f6e51c34', // Meting-API
  ],

  // 日志天数
  CountDays: 90,

  // 是否显示检测站点的链接
  ShowLink: true,

  // 导航栏菜单
  Navi: [
    {
      text: '主页',
      url: 'https://saop.cc'
    },
    {
      text: '博客',
      url: 'https://blog.saop.cc/'
    },
	{
      text: 'GitHub',
      url: 'https://github.com/AdingApkgg'
    },
	{
      text: '项目源码',
      url: 'https://github.com/yb/uptime-status'
    },
  ],
};
