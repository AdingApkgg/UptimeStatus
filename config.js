window.Config = {

  // 显示标题
  SiteName: '站点监控',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only
  ApiKeys: [
    'm794516267-b55a494a66ce8946f6f70b8e', // 小站
    'm794516281-a8d97dc5043cf8cd79dc7d29', // 博客
    'm794516292-ef8bdb015fe7717539d82b42', // 云盘
	'm794516507-e544fee64a0fd497546fa68b', // 站点监控
    'm794516318-f3aaa1a73d10ad2ea6851a30', // 原神群推荐
	'm794215978-b5f458af98dd779d013edf92', // v2ray节点
	'm794516304-983c3d13496d77bc85b0f962', // Google镜像
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
