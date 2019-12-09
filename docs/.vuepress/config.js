module.exports = {
    title: 'Rabbit',
    description: '一个自动化测试平台',
    // head: [ // 注入到当前页面的 HTML <head> 中的标签
    //   ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
    // ],
    base: '/rabbitNote/', // 这是部署到github相关的配置
    // port: 8888, // 运行端口
    markdown: {
      lineNumbers: false // 代码块显示行号
    },
    plugins: {
      '@vuepress/medium-zoom': {
          selector: 'img.zoom'
      }
    },
    themeConfig: {
      nav:[ // 导航栏配置
        { text: 'UI自动化', link: '/web/introduction' },
        // { text: '博文',
        //   items: [
        //     { text: 'Android', link: '/android/' },
        //     { text: 'ios', link: '/ios/' },
        //     { text: 'Web', link: '/web/' }
        //   ] 
        // },
        // { text: '关于', link: '/about/' },
        { text: 'Github', link: 'https://gitee.com/tuzikuaipao/rabbit_test_platform_server' }      
      ],
      sidebar: {
        '/app/': [
         
           ],
        "/jiekou/":[
        
          ],
        "/web/":[
          {
            title: 'Rabbit',
            collapsable: false,
            children: [
                'introduction'
            ]
         },
         {
             title: '部署',
             collapsable: false,
             children: [
                 'deploy-server',
                 'deploy-agent'
             ]
         },
         {
             title: 'UI自动化',
             collapsable: false,
             children: [
                 'page-element',
                 'test-business',
                 'test-case',
                 'test-suite',
                 'test-plan',
                 'test-result'
             ]
         }
         ]
      }, // 侧边栏配置
      sidebarDepth: 2, // 侧边栏显示2级，嵌套的标题链接深度，默认的深度为1
      lastUpdated: 'Last Updated', 
    }
  }