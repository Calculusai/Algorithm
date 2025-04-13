import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

const qceitseries = defineNoteConfig({
      dir: 'qceitseries',
      link: '/qceitseries/',
      sidebar: [
            {
                  text: '考级系列',
                  icon: 'ri:angularjs-fill',
                  link: "/qceitseries/",
                  items: [
                        //Scratch 开始
                        {
                              text: 'Scratch',
                              icon: 'simple-icons:scratch',
                              collapsed: false,
                              link: '/qceitseries/Scratch/',
                              prefix: '/qceitseries/Scratch',
                              items: [
                                    {
                                          text: 'Scratch一级',
                                          icon: 'simple-icons:scratch',
                                          collapsed: true,
                                          prefix: '/qceitseries/Scratch/Scratch1',
                                          items: [
                                                'Scratch11',
                                                'Scratch12'
                                          ],
                                    },
                                    {
                                          text: 'Scratch三级',
                                          icon: 'simple-icons:scratch',
                                          collapsed: true,
                                          prefix: '/qceitseries/Scratch/Scratch3',
                                          items: [
                                                'scratch31',
                                                'scratch32'
                                          ],
                                    },

                              ]
                        },
                        //Scratch 结束
                        //Python开始
                        {
                              text: 'Python',
                              icon: 'akar-icons:python-fill',
                              collapsed: false,
                              prefix: '/qceitseries/Python',
                              items: [
                                    {
                                          text: 'Python一级',
                                          icon: 'akar-icons:python-fill',
                                          collapsed: true,
                                          prefix: '/qceitseries/Python/python1',
                                          items: [
                                                'python11',
                                                'python12'
                                          ],
                                    },
                                    {
                                          text: 'Python二级',
                                          icon: 'akar-icons:python-fill',
                                          collapsed: true,
                                          prefix: '/qceitseries/Python/python2',
                                          items: [
                                                'python21',
                                                'python22'
                                          ],
                                    },
                                    {
                                          text: 'Python三级',
                                          icon: 'akar-icons:python-fill',
                                          collapsed: true,
                                          prefix: '/qceitseries/Python/python3',
                                          items: [
                                                'python31',
                                                'python32'
                                          ],
                                    },
                                    {
                                          text: 'Python四级',
                                          icon: 'akar-icons:python-fill',
                                          collapsed: true,
                                          prefix: '/qceitseries/Python/python4',
                                          items: [
                                                'python41',
                                                'python42'
                                          ],
                                    },
                                    {
                                          text: 'Python五级',
                                          icon: 'akar-icons:python-fill',
                                          collapsed: true,
                                          prefix: '/qceitseries/Python/python5',
                                          items: [
                                                'python51',
                                                'python52'
                                          ],
                                    },
                                    {
                                          text: 'Python六级',
                                          icon: 'akar-icons:python-fill',
                                          collapsed: true,
                                          prefix: '/qceitseries/Python/python6',
                                          items: [
                                                'python61',
                                                'python62'
                                          ],
                                    },
                              ]
                        },
                        //Python结束
                        //CPP开始   
                        {
                              text: 'CPP',
                              icon: 'mdi:language-cpp',
                              collapsed: false,
                              prefix: '/qceitseries/CPP',
                              items: [
                                    {
                                          text: 'CPP三级',
                                          icon: 'mdi:language-cpp',
                                          collapsed: true,
                                          prefix: '/qceitseries/CPP/CPP3',
                                          items: [
                                                'CPP31',
                                                'CPP32'
                                          ],
                                    },
                              ]
                        },
                        //CPP结束
                  ],
            },
      ]
})

// ... other code

export default qceitseries;