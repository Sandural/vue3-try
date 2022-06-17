export default {
  "body": {
      "routeMap": [
          {
              "enable": true,
              "urls": [
                  "//scrm.weixin.oa.com/finderoa/p/crm-index/"
              ],
              "level": 0,
              "routeUrl": "/finderoa/p/crm-index/",
              "authSys": "",
              "label": "大盘核心指标",
              "authKey": "",
              "targetBlank": false,
              "key": "core",
              "menuInfo": "{icon: \"date\"}",
              "children": []
          },
          {
              "enable": true,
              "urls": [],
              "level": 0,
              "routeUrl": "",
              "authSys": 26,
              "label": "作者管理",
              "authKey": 16975,
              "targetBlank": false,
              "key": "finder",
              "menuInfo": "{icon: \"user\"}",
              "childrenExpanded": true,
              "children": [
                  {
                      "enable": true,
                      "key": "finder-account-list",
                      "level": 0,
                      "routeUrl": "/mn/finder/finder-account-list/",
                      "authSys": "",
                      "label": "帐号管理",
                      "authKey": "",
                      "targetBlank": false,
                      "urls": [
                          "//scrm.weixin.oa.com/mn/finder/finder-account-list/"
                      ],
                      "childrenExpanded": false,
                      "children": []
                  },
                  {
                      "enable": true,
                      "urls": [
                          "//scrm.weixin.oa.com/mn/finder/finder-docking-list/"
                      ],
                      "level": 0,
                      "routeUrl": "/mn/finder/finder-docking-list/",
                      "authSys": "",
                      "label": "对接人管理",
                      "authKey": "",
                      "targetBlank": false,
                      "key": "finder_docking_list",
                      "childrenExpanded": false,
                      "children": []
                  },
                  {
                      "enable": true,
                      "key": "pullnew",
                      "level": 0,
                      "routeUrl": "",
                      "authSys": "",
                      "label": "圈层拉新",
                      "authKey": "",
                      "targetBlank": false,
                      "urls": [],
                      "childrenExpanded": false,
                      "children": [
                          {
                              "enable": true,
                              "urls": [
                                  "//findercrm.weixin.oa.com/author/talent"
                              ],
                              "level": 0,
                              "routeUrl": "/iframe/author/talent",
                              "authSys": "",
                              "label": "圈层拉新作者",
                              "authKey": "",
                              "targetBlank": false,
                              "key": "author_talent",
                              "menuInfo": ""
                          },
                          {
                              "enable": true,
                              "key": "pullnew-summary",
                              "level": 0,
                              "routeUrl": "/iframe/pullnew-summary",
                              "authSys": "",
                              "label": "圈层作者监控",
                              "authKey": "",
                              "targetBlank": false,
                              "urls": [
                                  "//ossiaudit.weixin.oa.com/pullnew-summary"
                              ],
                              "menuInfo": ""
                          }
                      ]
                  },
                  {
                      "enable": true,
                      "key": "author_invite",
                      "level": 0,
                      "routeUrl": "/iframe/invite/create",
                      "authSys": "",
                      "label": "作者邀请",
                      "authKey": "",
                      "targetBlank": false,
                      "urls": [
                          "//findercrm.weixin.oa.com/invite/create"
                      ],
                      "menuInfo": ""
                  },
                  {
                      "enable": true,
                      "key": "similar_author",
                      "level": 0,
                      "routeUrl": "/iframe/similar/author",
                      "authSys": "",
                      "label": "相似作者",
                      "authKey": "",
                      "targetBlank": false,
                      "urls": [
                          "//findercrm.weixin.oa.com/similar/author"
                      ],
                      "menuInfo": ""
                  },
                  {
                      "enable": true,
                      "urls": [],
                      "level": 0,
                      "routeUrl": "",
                      "authSys": "",
                      "label": "收入管理",
                      "authKey": "",
                      "targetBlank": false,
                      "key": "author-income-menu",
                      "menuInfo": "",
                      "childrenExpanded": true,
                      "children": [
                          {
                              "enable": false,
                              "urls": [
                                  "//projminion.weixin.oa.com/mn/finder/author-income-chart/"
                              ],
                              "level": 0,
                              "routeUrl": "/mn/finder/author-income-chart/",
                              "authSys": "",
                              "label": "渠道结构",
                              "authKey": "",
                              "targetBlank": false,
                              "key": "author-income-chart",
                              "menuInfo": ""
                          },
                          {
                              "enable": true,
                              "urls": [
                                  "//projminion.weixin.oa.com/mn/finder/author-list-monitoring"
                              ],
                              "level": 0,
                              "routeUrl": "/mn/finder/author-list-monitoring",
                              "authSys": "",
                              "label": "榜单监控",
                              "authKey": "",
                              "targetBlank": false,
                              "key": "author-income-monitoring",
                              "menuInfo": ""
                          },
                          {
                              "enable": true,
                              "urls": [
                                  "/projminion.weixin.oa.com/mn/finder/auhtor-realization"
                              ],
                              "level": 0,
                              "routeUrl": "/mn/finder/auhtor-realization",
                              "authSys": "",
                              "label": "变现管理",
                              "authKey": "",
                              "targetBlank": false,
                              "key": "author-income-bianxianguanli",
                              "menuInfo": ""
                          }
                      ]
                  },
                  {
                      "enable": true,
                      "urls": [],
                      "level": 0,
                      "routeUrl": "",
                      "authSys": "",
                      "label": "MCN管理",
                      "authKey": "",
                      "targetBlank": false,
                      "key": "mcn_manage",
                      "menuInfo": "",
                      "childrenExpanded": false,
                      "children": [
                          {
                              "enable": true,
                              "urls": [
                                  "//projminion.weixin.oa.com/mn/mcnmanage/manage_mainpage"
                              ],
                              "level": 0,
                              "routeUrl": "/mn/mcnmanage/manage_mainpage",
                              "authSys": "",
                              "label": "MCN列表",
                              "authKey": "",
                              "targetBlank": false,
                              "key": "mcn_list",
                              "menuInfo": ""
                          },
                          {
                              "enable": true,
                              "urls": [
                                  "//findercrm.weixin.oa.com/ossmsg/index"
                              ],
                              "level": 0,
                              "routeUrl": "/iframe/ossmsg/index",
                              "authSys": "",
                              "label": "MCN私信下发",
                              "authKey": "",
                              "targetBlank": false,
                              "key": "ossmsg",
                              "menuInfo": ""
                          }
                      ]
                  },
                  {
                      "enable": true,
                      "urls": [],
                      "level": 0,
                      "routeUrl": "",
                      "authSys": "",
                      "label": "榜单管理",
                      "authKey": "",
                      "targetBlank": false,
                      "key": "wechatindex",
                      "menuInfo": "",
                      "childrenExpanded": false,
                      "children": [
                          {
                              "enable": true,
                              "urls": [
                                  "//projminion.weixin.oa.com/mn/sphbdglht/list-management"
                              ],
                              "level": 0,
                              "routeUrl": "/mn/sphbdglht/list-management",
                              "authSys": "",
                              "label": "名单管理",
                              "authKey": "",
                              "targetBlank": false,
                              "key": "wechatindex_keyword",
                              "menuInfo": ""
                          },
                          {
                              "enable": true,
                              "urls": [
                                  "//projminion.weixin.oa.com/mn/sphbdglht/list-editor"
                              ],
                              "level": 0,
                              "routeUrl": "/mn/sphbdglht/list-editor",
                              "authSys": "",
                              "label": "榜单编辑",
                              "authKey": "",
                              "targetBlank": false,
                              "key": "wechatindex_top_edit",
                              "menuInfo": ""
                          },
                          {
                              "enable": true,
                              "urls": [
                                  "//projminion.weixin.oa.com/mn/sphbdglht/list-editor-copy"
                              ],
                              "level": 0,
                              "routeUrl": "/mn/sphbdglht/list-editor-copy",
                              "authSys": "",
                              "label": "榜单审核",
                              "authKey": "",
                              "targetBlank": false,
                              "key": "wechatindex_top_verify",
                              "menuInfo": ""
                          }
                      ]
                  },
                  {
                      "enable": true,
                      "urls": [],
                      "level": 0,
                      "routeUrl": "",
                      "authSys": "",
                      "label": "创作者课堂",
                      "authKey": "",
                      "targetBlank": false,
                      "key": "academy",
                      "menuInfo": "",
                      "childrenExpanded": false,
                      "children": [
                          {
                              "enable": true,
                              "urls": [
                                  "//findercrm.weixin.oa.com/academy/query"
                              ],
                              "level": 0,
                              "routeUrl": "/iframe/academy/query",
                              "authSys": "",
                              "label": "课程配置",
                              "authKey": "",
                              "targetBlank": false,
                              "key": "academy_query",
                              "menuInfo": ""
                          }
                      ]
                  },
                  {
                      "enable": false,
                      "urls": [
                          "//scrm.weixin.oa.com/finderoa/p/finder-list"
                      ],
                      "level": 0,
                      "routeUrl": "/finderoa/p/finder-list",
                      "authSys": "",
                      "label": "作者列表",
                      "authKey": "",
                      "targetBlank": false,
                      "key": "finder_list"
                  },
                  {
                      "enable": true,
                      "urls": [
                          "//findercrm.weixin.oa.com/activityAuthor/home"
                      ],
                      "level": 0,
                      "routeUrl": "/iframe/activityAuthor/home",
                      "authSys": "",
                      "label": "作者任务",
                      "authKey": "",
                      "targetBlank": false,
                      "key": "finder_task",
                      "menuInfo": "{\n\"replaceType\": 1\n}"
                  }
              ]
          },
          {
              "enable": true,
              "urls": [],
              "level": 0,
              "routeUrl": "",
              "authSys": "",
              "label": "内容管理",
              "authKey": "",
              "targetBlank": false,
              "key": "contentOpt",
              "menuInfo": "{icon: \"content\"}",
              "childrenExpanded": true,
              "children": [
                  {
                      "enable": true,
                      "urls": [],
                      "level": 0,
                      "routeUrl": "",
                      "authSys": "",
                      "label": "话题配置",
                      "authKey": "",
                      "targetBlank": false,
                      "key": "topic-configure",
                      "menuInfo": "",
                      "childrenExpanded": true,
                      "children": [
                          {
                              "enable": true,
                              "urls": [
                                  "//projminion.weixin.oa.com/mn/hashtagpic/topic-cover-manage/"
                              ],
                              "level": 0,
                              "routeUrl": "/mn/hashtagpic/topic-cover-manage/",
                              "authSys": "",
                              "label": "封面图配置",
                              "authKey": "",
                              "targetBlank": false,
                              "key": "topicCoverOp",
                              "menuInfo": ""
                          },
                          {
                              "enable": true,
                              "urls": [
                                  "//projminion.weixin.oa.com/mn/hashtagpic/topicmana"
                              ],
                              "level": 0,
                              "routeUrl": "/mn/hashtagpic/topicmana",
                              "authSys": "",
                              "label": "feed配置",
                              "authKey": "",
                              "targetBlank": false,
                              "key": "topicFeedManage",
                              "menuInfo": ""
                          }
                      ]
                  },
                  {
                      "enable": true,
                      "urls": [],
                      "level": 0,
                      "routeUrl": "",
                      "authSys": "",
                      "label": "活动配置",
                      "authKey": "",
                      "targetBlank": false,
                      "key": "activity-configure",
                      "menuInfo": "",
                      "childrenExpanded": true,
                      "children": [
                          {
                              "enable": true,
                              "urls": [
                                  "//projminion.weixin.oa.com/mn/wxgshipinhaoguanfang/search"
                              ],
                              "level": 0,
                              "routeUrl": "/mn/wxgshipinhaoguanfang/search",
                              "authSys": "",
                              "label": "活动管理端",
                              "authKey": "",
                              "targetBlank": false,
                              "key": "eventManage",
                              "menuInfo": ""
                          }
                      ]
                  }
              ]
          },
          {
              "enable": true,
              "key": "flow",
              "level": 0,
              "routeUrl": "",
              "children": [
                  {
                      "enable": true,
                      "key": "panelshow",
                      "level": 0,
                      "routeUrl": "/iframe/finder_t4/Panel_Show/411",
                      "authSys": "",
                      "label": "流量结构",
                      "authKey": "",
                      "targetBlank": false,
                      "urls": [
                          "//andata.weixin.oa.com/beacon/finder_t4/Panel_Show/411?iframe=1"
                      ],
                      "menuInfo": ""
                  }
              ],
              "authSys": "",
              "label": "生态调控",
              "authKey": "",
              "targetBlank": false,
              "urls": [],
              "menuInfo": "{icon: \"statistics\"}",
              "childrenExpanded": true
          },
          {
              "enable": true,
              "urls": [],
              "level": 0,
              "routeUrl": "",
              "authSys": "",
              "label": "热点管理",
              "authKey": "",
              "targetBlank": false,
              "key": "hottopic",
              "menuInfo": "{icon: \"fire\"}",
              "childrenExpanded": true,
              "children": [
                  {
                      "enable": true,
                      "urls": [
                          "//projminion.weixin.oa.com/mn/hotspots/hot_event_manage"
                      ],
                      "level": 0,
                      "routeUrl": "/mn/hotspots/hot_event_manage",
                      "authSys": "",
                      "label": "热点事件",
                      "authKey": "",
                      "targetBlank": false,
                      "key": "redianshijianguanli",
                      "menuInfo": ""
                  },
                  {
                      "enable": true,
                      "urls": [],
                      "level": 0,
                      "routeUrl": "",
                      "authSys": "",
                      "label": "热点线索",
                      "authKey": "",
                      "targetBlank": false,
                      "key": "hottopic_clue",
                      "menuInfo": "",
                      "childrenExpanded": true,
                      "children": [
                          {
                              "enable": true,
                              "urls": [
                                  "//scrm.weixin.oa.com/finderoa/p/hotspot-topic-tag/"
                              ],
                              "level": 0,
                              "routeUrl": "/finderoa/p/hotspot-topic-tag/",
                              "authSys": "",
                              "label": "线索一审",
                              "authKey": "",
                              "targetBlank": false,
                              "key": "hottopic_tag",
                              "menuInfo": ""
                          },
                          {
                              "enable": true,
                              "urls": [
                                  "//scrm.weixin.oa.com/finderoa/p/hotspot-topic-list/"
                              ],
                              "level": 0,
                              "routeUrl": "/finderoa/p/hotspot-topic-list/",
                              "authSys": "",
                              "label": "线索列表",
                              "authKey": "",
                              "targetBlank": false,
                              "key": "hottopic_tipic_list",
                              "menuInfo": ""
                          }
                      ]
                  },
                  {
                      "enable": true,
                      "urls": [],
                      "level": 0,
                      "routeUrl": "",
                      "authSys": "",
                      "label": "热点feed",
                      "authKey": "",
                      "targetBlank": false,
                      "key": "hottopic_feed",
                      "menuInfo": "",
                      "childrenExpanded": false,
                      "children": [
                          {
                              "enable": true,
                              "urls": [
                                  "//projminion.weixin.oa.com/mn/feedcheck/feedcheck"
                              ],
                              "level": 0,
                              "routeUrl": "/mn/feedcheck/feedcheck",
                              "authSys": "",
                              "label": "热点feed审核",
                              "authKey": "",
                              "targetBlank": false,
                              "key": "hottopic_tag_verify",
                              "menuInfo": ""
                          },
                          {
                              "enable": true,
                              "urls": [
                                  "//scrm.weixin.oa.com/finderoa/p/hotspot-topic-feed-list/"
                              ],
                              "level": 0,
                              "routeUrl": "/finderoa/p/hotspot-topic-feed-list/",
                              "authSys": "",
                              "label": "热点feed列表",
                              "authKey": "",
                              "targetBlank": false,
                              "key": "hottopic_feed_list",
                              "menuInfo": ""
                          }
                      ]
                  },
                  {
                      "enable": true,
                      "urls": [
                          "//scrm.weixin.oa.com/finderoa/p/qw-hottopic-news-finder/"
                      ],
                      "level": 0,
                      "routeUrl": "/finderoa/p/qw-hottopic-news-finder/",
                      "authSys": "",
                      "label": "新闻帐号管理",
                      "authKey": "",
                      "targetBlank": false,
                      "key": "hottopic_news_finder"
                  },
                  {
                      "enable": true,
                      "urls": [
                          "//findercrm.weixin.oa.com/hotspot/reddot/order?type=101000000&step=1"
                      ],
                      "level": 0,
                      "routeUrl": "/iframe/hotspot/reddot",
                      "authSys": "",
                      "label": "红点审核",
                      "authKey": "",
                      "targetBlank": false,
                      "key": "reddot",
                      "menuInfo": "{\n\"replaceType\": 1\n}"
                  },
                  {
                      "enable": true,
                      "urls": [],
                      "level": 0,
                      "routeUrl": "/mn/hotspots/monitor",
                      "authSys": "",
                      "label": "热点监控",
                      "authKey": "",
                      "targetBlank": false,
                      "key": "hotspot-monitor",
                      "menuInfo": "",
                      "childrenExpanded": false,
                      "children": [
                          {
                              "enable": true,
                              "urls": [
                                  "//scrm.weixin.oa.com/mn/hotspots/monitor"
                              ],
                              "level": 0,
                              "routeUrl": "/mn/hotspots/monitor",
                              "authSys": "",
                              "label": "站外热点",
                              "authKey": "",
                              "targetBlank": false,
                              "key": "hotspot-monitor-out",
                              "menuInfo": ""
                          },
                          {
                              "enable": true,
                              "urls": [
                                  "//scrm.weixin.oa.com/mn/hotspots/station"
                              ],
                              "level": 0,
                              "routeUrl": "/mn/hotspots/station",
                              "authSys": "",
                              "label": "站内热点",
                              "authKey": "",
                              "targetBlank": false,
                              "key": "hotspot-monitor-in",
                              "menuInfo": ""
                          }
                      ]
                  },
                  {
                      "enable": true,
                      "urls": [],
                      "level": 0,
                      "routeUrl": "",
                      "authSys": "",
                      "label": "气泡管理",
                      "authKey": "",
                      "targetBlank": false,
                      "key": "bubbleManage",
                      "menuInfo": "",
                      "childrenExpanded": false,
                      "children": [
                          {
                              "enable": true,
                              "urls": [
                                  "//projminion.weixin.oa.com/mn/hashtagpic/hotsearch-bubble-list"
                              ],
                              "level": 0,
                              "routeUrl": "/mn/hashtagpic/hotsearch-bubble-list",
                              "authSys": "",
                              "label": "气泡列表",
                              "authKey": "",
                              "targetBlank": false,
                              "key": "bubbleList",
                              "menuInfo": ""
                          },
                          {
                              "enable": true,
                              "urls": [
                                  "//projminion.weixin.oa.com/mn/hashtagpic/hotsearch-bubble-audit"
                              ],
                              "level": 0,
                              "routeUrl": "/mn/hashtagpic/hotsearch-bubble-audit",
                              "authSys": "",
                              "label": "关联气泡审核",
                              "authKey": "",
                              "targetBlank": false,
                              "key": "feedRelateToBubble",
                              "menuInfo": ""
                          }
                      ]
                  },
                  {
                      "enable": false,
                      "urls": [],
                      "level": 0,
                      "routeUrl": "",
                      "authSys": "",
                      "label": "朋友圈热词",
                      "authKey": "",
                      "targetBlank": false,
                      "key": "frihotwords",
                      "menuInfo": "",
                      "childrenExpanded": false,
                      "children": [
                          {
                              "enable": true,
                              "urls": [
                                  "//projminion.weixin.oa.com/mn/hashtagpic/audit"
                              ],
                              "level": 0,
                              "routeUrl": "/mn/hashtagpic/audit",
                              "authSys": "",
                              "label": "朋友圈热词创建",
                              "authKey": "",
                              "targetBlank": false,
                              "key": "fricreate",
                              "menuInfo": ""
                          },
                          {
                              "enable": true,
                              "urls": [
                                  "//projminion.weixin.oa.com/mn/hashtagpic/audit-copy"
                              ],
                              "level": 0,
                              "routeUrl": "/mn/hashtagpic/audit-copy",
                              "authSys": "",
                              "label": "朋友圈热词二确",
                              "authKey": "",
                              "targetBlank": false,
                              "key": "fricheck",
                              "menuInfo": ""
                          },
                          {
                              "enable": true,
                              "urls": [
                                  "//projminion.weixin.oa.com/mn/hashtagpic/management"
                              ],
                              "level": 0,
                              "routeUrl": "/mn/hashtagpic/management",
                              "authSys": "",
                              "label": "朋友圈热词管理",
                              "authKey": "",
                              "targetBlank": false,
                              "key": "friopt",
                              "menuInfo": ""
                          }
                      ]
                  },
                  {
                      "enable": true,
                      "urls": [
                          "//scrm.weixin.oa.com/mn/topsearchestabilish/hotSearch-vocabulary"
                      ],
                      "level": 0,
                      "routeUrl": "/mn/topsearchestabilish/hotSearch-vocabulary",
                      "authSys": "",
                      "label": "热搜管理",
                      "authKey": "",
                      "targetBlank": false,
                      "key": "resouguanli",
                      "menuInfo": ""
                  },
                  {
                      "enable": true,
                      "urls": [
                          "//findercrm.weixin.oa.com/push-activity/list"
                      ],
                      "level": 0,
                      "routeUrl": "/iframe/push-activity/list",
                      "authSys": "",
                      "label": "活动push",
                      "authKey": "",
                      "targetBlank": false,
                      "key": "push-activity",
                      "menuInfo": ""
                  },
                  {
                      "enable": true,
                      "urls": [],
                      "level": 0,
                      "routeUrl": "/iframe/play-activity/clue-list",
                      "children": [
                          {
                              "enable": true,
                              "key": "activity-clue",
                              "level": 0,
                              "routeUrl": "/iframe/play-activity/clue-list",
                              "authSys": "",
                              "label": "活动线索管理",
                              "authKey": "",
                              "targetBlank": false,
                              "urls": [
                                  "//findercrm.weixin.oa.com/play-activity/clue-list"
                              ],
                              "menuInfo": ""
                          },
                          {
                              "enable": true,
                              "key": "activity-feed",
                              "level": 0,
                              "routeUrl": "/iframe/event-feeds/manage",
                              "authSys": "",
                              "label": "活动feed管理",
                              "authKey": "",
                              "targetBlank": false,
                              "urls": [
                                  "//ossiaudit.weixin.oa.com/event-feeds/manage"
                              ],
                              "menuInfo": ""
                          }
                      ],
                      "authSys": "",
                      "label": "活动玩法",
                      "authKey": "",
                      "targetBlank": false,
                      "key": "activity-types-manage",
                      "menuInfo": "",
                      "childrenExpanded": false
                  }
              ]
          },
          {
              "enable": true,
              "urls": [],
              "level": 0,
              "routeUrl": "",
              "authSys": "",
              "label": "投放管理",
              "authKey": "",
              "targetBlank": false,
              "key": "put",
              "menuInfo": "{icon: \"advertis\"}",
              "childrenExpanded": true,
              "children": [
                  {
                      "enable": true,
                      "urls": [
                          "//findercrm.weixin.oa.com/promotion/feedpackage"
                      ],
                      "level": 0,
                      "routeUrl": "/iframe/promotion/feedpackage",
                      "authSys": "",
                      "label": "feed包管理",
                      "authKey": "",
                      "targetBlank": false,
                      "key": "feedpackage",
                      "menuInfo": ""
                  },
                  {
                      "enable": true,
                      "urls": [
                          "//findercrm.weixin.oa.com/promotion/promotion"
                      ],
                      "level": 0,
                      "routeUrl": "/iframe/promotion/promotion",
                      "authSys": "",
                      "label": "投放任务管理",
                      "authKey": "",
                      "targetBlank": false,
                      "key": "promotion",
                      "menuInfo": ""
                  },
                  {
                      "enable": true,
                      "urls": [
                          "//findercrm.weixin.oa.com/wallet"
                      ],
                      "level": 0,
                      "routeUrl": "/iframe/wallet",
                      "authSys": "",
                      "label": "投放账户",
                      "authKey": "",
                      "targetBlank": false,
                      "key": "wallet",
                      "menuInfo": ""
                  },
                  {
                      "enable": true,
                      "urls": [
                          "//findercrm.weixin.oa.com/wallet/author"
                      ],
                      "level": 0,
                      "routeUrl": "/iframe/wallet/author",
                      "authSys": "",
                      "label": "流量券下发",
                      "authKey": "",
                      "targetBlank": false,
                      "key": "wallet_author",
                      "menuInfo": ""
                  },
                  {
                      "enable": true,
                      "urls": [
                          "//findercrm.weixin.oa.com/wallet/create-promotion"
                      ],
                      "level": 0,
                      "routeUrl": "/iframe/wallet/create-promotion",
                      "authSys": "",
                      "label": "单条投放",
                      "authKey": "",
                      "targetBlank": false,
                      "key": "wallet_create_promotion",
                      "menuInfo": ""
                  },
                  {
                      "enable": true,
                      "urls": [
                          "//findercrm.weixin.oa.com/wallet/order"
                      ],
                      "level": 0,
                      "routeUrl": "/iframe/wallet/order",
                      "authSys": "",
                      "label": "单投列表",
                      "authKey": "",
                      "targetBlank": false,
                      "key": "wallet_order",
                      "menuInfo": ""
                  },
                  {
                      "enable": true,
                      "urls": [
                          "//findercrm.weixin.oa.com/promotion/force"
                      ],
                      "level": 0,
                      "routeUrl": "/iframe/promotion/force",
                      "authSys": "",
                      "label": "强插管理",
                      "authKey": "",
                      "targetBlank": false,
                      "key": "promotion_force",
                      "menuInfo": ""
                  },
                  {
                      "enable": true,
                      "key": "wallet_promotion",
                      "level": 0,
                      "routeUrl": "/iframe/wallet/promotion",
                      "authSys": "",
                      "label": "批量竞价投放",
                      "authKey": "",
                      "targetBlank": false,
                      "urls": [
                          "//findercrm.weixin.oa.com/wallet/promotion"
                      ],
                      "menuInfo": ""
                  },
                  {
                      "enable": true,
                      "key": "wallet_banner",
                      "level": 0,
                      "routeUrl": "/iframe/wallet/banner",
                      "authSys": "",
                      "label": "投放banner",
                      "authKey": "",
                      "targetBlank": false,
                      "urls": [
                          "//findercrm.weixin.oa.com/wallet/banner"
                      ],
                      "menuInfo": ""
                  }
              ]
          },
          {
              "enable": true,
              "urls": [],
              "level": 0,
              "routeUrl": "",
              "authSys": "",
              "label": "TAG管理",
              "authKey": "",
              "targetBlank": false,
              "key": "tag",
              "menuInfo": "{icon: \"tag\"}",
              "childrenExpanded": true,
              "children": [
                  {
                      "enable": true,
                      "urls": [
                          "//scrm.weixin.oa.com/finderoa/p/keyword-tag-choose/"
                      ],
                      "level": 0,
                      "routeUrl": "/finderoa/p/keyword-tag-choose/",
                      "authSys": "",
                      "label": "新词筛选",
                      "authKey": "",
                      "targetBlank": false,
                      "key": "tag_keyword_cho"
                  },
                  {
                      "enable": true,
                      "urls": [
                          "//scrm.weixin.oa.com/finderoa/p/keyword-tag-manage/"
                      ],
                      "level": 0,
                      "routeUrl": "/finderoa/p/keyword-tag-manage/",
                      "authSys": "",
                      "label": "词库管理",
                      "authKey": "",
                      "targetBlank": false,
                      "key": "tag_keyword_manage"
                  }
              ]
          },
          {
              "enable": true,
              "urls": [],
              "level": 0,
              "routeUrl": "",
              "authSys": "",
              "label": "行业监控",
              "authKey": "",
              "targetBlank": false,
              "key": "industry_monitor",
              "menuInfo": "{icon: \"mcn\"}",
              "childrenExpanded": true,
              "children": [
                  {
                      "enable": true,
                      "urls": [
                          "//scrm.weixin.oa.com/local/platform/report"
                      ],
                      "level": 0,
                      "routeUrl": "/local/platform/report",
                      "authSys": "",
                      "label": "行业报告",
                      "authKey": "",
                      "targetBlank": false,
                      "key": "industry_monitor_report",
                      "menuInfo": ""
                  },
                  {
                      "enable": false,
                      "urls": [
                          "//scrm.weixin.oa.com/local/platform/industry"
                      ],
                      "level": 0,
                      "routeUrl": "/local/platform/industry",
                      "authSys": "",
                      "label": "行业规模",
                      "authKey": "",
                      "targetBlank": false,
                      "key": "industry_monitor_industry",
                      "menuInfo": ""
                  },
                  {
                      "enable": false,
                      "urls": [
                          "//scrm.weixin.oa.com/local/platform/indicators"
                      ],
                      "level": 0,
                      "routeUrl": "/local/platform/indicators",
                      "authSys": "",
                      "label": "核心指标",
                      "authKey": "",
                      "targetBlank": false,
                      "key": "industry_monitor_core",
                      "menuInfo": ""
                  },
                  {
                      "enable": false,
                      "urls": [
                          "//scrm.weixin.oa.com/local/platform/portrait"
                      ],
                      "level": 0,
                      "routeUrl": "/local/platform/portrait",
                      "authSys": "",
                      "label": "MAU画像",
                      "authKey": "",
                      "targetBlank": false,
                      "key": "industry_monitor_portrait_mau",
                      "menuInfo": ""
                  },
                  {
                      "enable": false,
                      "urls": [
                          "//scrm.weixin.oa.com/local/platform/customer"
                      ],
                      "level": 0,
                      "routeUrl": "/local/platform/customer",
                      "authSys": "",
                      "label": "DAU画像",
                      "authKey": "",
                      "targetBlank": false,
                      "key": "industry_monitor_portrait_dau",
                      "menuInfo": ""
                  },
                  {
                      "enable": false,
                      "urls": [
                          "//scrm.weixin.oa.com/local/platform/behavior"
                      ],
                      "level": 0,
                      "routeUrl": "/local/platform/behavior",
                      "authSys": "",
                      "label": "用户行为",
                      "authKey": "",
                      "targetBlank": false,
                      "key": "industry_monitor_behavior",
                      "menuInfo": ""
                  }
              ]
          },
          {
              "enable": true,
              "key": "queue",
              "level": 0,
              "routeUrl": "",
              "children": [
                  {
                      "enable": true,
                      "key": "feed_dashboard",
                      "level": 0,
                      "routeUrl": "/iframe/feed/dashboard",
                      "authSys": "",
                      "label": "内容队列",
                      "authKey": "",
                      "targetBlank": false,
                      "urls": [
                          "//ossiaudit.weixin.oa.com/feed/dashboard"
                      ],
                      "menuInfo": "{\n\"replaceType\": 1\n}"
                  },
                  {
                      "enable": true,
                      "key": "acct_dashboard",
                      "level": 0,
                      "routeUrl": "/iframe/iframe/acct/dashboard/hotspot/reddot",
                      "authSys": "",
                      "label": "帐号队列",
                      "authKey": "",
                      "targetBlank": false,
                      "urls": [
                          "//ossiaudit.weixin.oa.com/acct/dashboard"
                      ],
                      "menuInfo": ""
                  },
                  {
                      "enable": true,
                      "urls": [
                          "//ossiaudit.weixin.oa.com/showcase/dashboard"
                      ],
                      "level": 0,
                      "routeUrl": "/iframe/showcase/dashboard",
                      "authSys": "",
                      "label": "金星奖队列",
                      "authKey": "",
                      "targetBlank": false,
                      "key": "showcase_dashboard",
                      "menuInfo": ""
                  },
                  {
                      "enable": true,
                      "urls": [
                          "//ossiaudit.weixin.oa.com/localfeed/dashboard"
                      ],
                      "level": 0,
                      "routeUrl": "/iframe/localfeed/dashboard",
                      "authSys": "",
                      "label": "本地队列",
                      "authKey": "",
                      "targetBlank": false,
                      "key": "localfeed_dashboard",
                      "menuInfo": ""
                  },
                  {
                      "enable": true,
                      "urls": [
                          "//ossiaudit.weixin.oa.com/ugc/ugcfeed-dashboard"
                      ],
                      "level": 0,
                      "routeUrl": "/iframe/ugc/ugcfeed-dashboard",
                      "authSys": "",
                      "label": "UGC队列",
                      "authKey": "",
                      "targetBlank": false,
                      "key": "ugcfeedDashboard",
                      "menuInfo": ""
                  },
                  {
                      "enable": true,
                      "urls": [
                          "//ossiaudit.weixin.oa.com/preval/dashboard"
                      ],
                      "level": 0,
                      "routeUrl": "/iframe/preval/dashboard",
                      "authSys": "",
                      "label": "PR队列",
                      "authKey": "",
                      "targetBlank": false,
                      "key": "prevalDashboard",
                      "menuInfo": ""
                  },
                  {
                      "enable": true,
                      "key": "hotspot_dashboard",
                      "level": 0,
                      "routeUrl": "/iframe/hotspot/dashboard",
                      "authSys": "",
                      "label": "热点池队列",
                      "authKey": "",
                      "targetBlank": false,
                      "urls": [
                          "//ossiaudit.weixin.oa.com/hotspot/dashboard"
                      ],
                      "menuInfo": ""
                  },
                  {
                      "enable": true,
                      "key": "activity-move",
                      "level": 0,
                      "routeUrl": "/iframe/event-feeds/dashboard",
                      "authSys": "",
                      "label": "活动玩法队列",
                      "authKey": "",
                      "targetBlank": false,
                      "urls": [
                          "//ossiaudit.weixin.oa.com/event-feeds/dashboard"
                      ],
                      "menuInfo": ""
                  }
              ],
              "authSys": "",
              "label": "队列管理",
              "authKey": "",
              "targetBlank": false,
              "urls": [],
              "menuInfo": "{icon:\"queue\"}",
              "childrenExpanded": true
          },
          {
              "enable": true,
              "urls": [],
              "level": 0,
              "routeUrl": "",
              "authSys": "",
              "label": "运营工具",
              "authKey": "",
              "targetBlank": false,
              "key": "operational-tools",
              "menuInfo": "{icon: \"trade\"}",
              "childrenExpanded": true,
              "children": [
                  {
                      "enable": true,
                      "urls": [],
                      "level": 0,
                      "routeUrl": "",
                      "authSys": "",
                      "label": "推荐查询",
                      "authKey": "",
                      "targetBlank": false,
                      "key": "recommend_query",
                      "menuInfo": "",
                      "childrenExpanded": false,
                      "children": [
                          {
                              "enable": true,
                              "urls": [
                                  "//findercrm.weixin.oa.com/trace"
                              ],
                              "level": 0,
                              "routeUrl": "/iframe/trace",
                              "authSys": "",
                              "label": "消费记录",
                              "authKey": "",
                              "targetBlank": false,
                              "key": "recomment_trace",
                              "menuInfo": ""
                          }
                      ]
                  },
                  {
                      "enable": true,
                      "urls": [
                          "//projminion.weixin.oa.com/mn/sphbdglht/topfeedlist"
                      ],
                      "level": 0,
                      "routeUrl": "/mn/sphbdglht/topfeedlist",
                      "authSys": "",
                      "label": "topfeed榜单",
                      "authKey": "",
                      "targetBlank": false,
                      "key": "topfeed",
                      "menuInfo": ""
                  },
                  {
                      "enable": true,
                      "key": "feedsearch",
                      "level": 0,
                      "routeUrl": "/mn/finderfeed/feeds-search/",
                      "authSys": "",
                      "label": "feed搜索页",
                      "authKey": "",
                      "targetBlank": false,
                      "urls": [
                          "//scrm.weixin.oa.com/mn/finderfeed/feeds-search/"
                      ],
                      "menuInfo": ""
                  },
                  {
                      "enable": true,
                      "urls": [
                          "//findercrm.weixin.oa.com/privatemessage/manage?type=approval_message"
                      ],
                      "level": 0,
                      "routeUrl": "/iframe/privatemessage/manage",
                      "authSys": "",
                      "label": "私信管理",
                      "authKey": "",
                      "targetBlank": false,
                      "key": "private_msg_manage",
                      "menuInfo": "{\n\"replaceType\": 1\n}"
                  }
              ]
          }
      ],
      "rtx": "v_mningchen"
  },
  "retCode": 0,
  "errMsg": ""
}