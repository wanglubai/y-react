
import * as Echart from "echarts"
Echart.registerTheme('theme-dark', {
    "color": [
        "#5470c6",
        "#91cc75",
        "#fac858",
        "#ee6666",
        "#73c0de",
        "#3ba272",
        "#fc8452",
        "#9a60b4",
        "#ea7ccc"
    ],
    "backgroundColor": "#2f2b38",
    "textStyle": {},
    "title": {
        "textStyle": {
            "color": "#464646"
        },
        "subtextStyle": {
            "color": "#6e7079"
        }
    },
    "line": {
        "itemStyle": {
            "borderWidth": "1"
        },
        "lineStyle": {
            "color": "#FFCC66",
            "width": "1"
        },
        "symbolSize": 3,
        "symbol": "emptyCircle",
        "smooth": true,
        "color": [
            "rgba(250,250,250,1)",
            "rgba(210,219,238,0.2)"
        ],
        "areaStyle": {
            color: new Echart.graphic.LinearGradient(0, 0, 0, 1, [
                {
                    offset: 0,
                    color: 'rgba(255, 204, 102,0.3)'
                },
                {
                    offset: 1,
                    color: 'rgba(200, 200, 200,.1)'
                }
            ])
        }
    },
    "radar": {
        "itemStyle": {
            "borderWidth": "1"
        },
        "lineStyle": {
            "width": "1"
        },
        "symbolSize": 4,
        "symbol": "emptyCircle",
        "smooth": true
    },
    "bar": {
        "itemStyle": {
            "barBorderWidth": 0,
            "barBorderColor": "#ccc"
        }
    },
    "pie": {
        "itemStyle": {
            "borderWidth": 0,
            "borderColor": "#ccc"
        }
    },
    "scatter": {
        "itemStyle": {
            "borderWidth": 0,
            "borderColor": "#ccc"
        }
    },
    "boxplot": {
        "itemStyle": {
            "borderWidth": 0,
            "borderColor": "#ccc"
        }
    },
    "parallel": {
        "itemStyle": {
            "borderWidth": 0,
            "borderColor": "#ccc"
        }
    },
    "sankey": {
        "itemStyle": {
            "borderWidth": 0,
            "borderColor": "#ccc"
        }
    },
    "funnel": {
        "itemStyle": {
            "borderWidth": 0,
            "borderColor": "#ccc"
        }
    },
    "gauge": {
        "itemStyle": {
            "borderWidth": 0,
            "borderColor": "#ccc"
        }
    },
    "candlestick": {
        "itemStyle": {
            "color": "#eb5454",
            "color0": "#47b262",
            "borderColor": "#eb5454",
            "borderColor0": "#47b262",
            "borderWidth": 1
        }
    },
    "graph": {
        "itemStyle": {
            "borderWidth": 0,
            "borderColor": "#ccc"
        },
        "lineStyle": {
            "width": 1,
            "color": "#aaa"
        },
        "symbolSize": 4,
        "symbol": "emptyCircle",
        "smooth": true,
        "color": [
            "#5470c6",
            "#91cc75",
            "#fac858",
            "#ee6666",
            "#73c0de",
            "#3ba272",
            "#fc8452",
            "#9a60b4",
            "#ea7ccc"
        ],
        "label": {
            "color": "#eee"
        }
    },
    "map": {
        "itemStyle": {
            "areaColor": "#eee",
            "borderColor": "#444",
            "borderWidth": 0.5
        },
        "label": {
            "color": "#000"
        },
        "emphasis": {
            "itemStyle": {
                "areaColor": "rgba(255,215,0,0.8)",
                "borderColor": "#444",
                "borderWidth": 1
            },
            "label": {
                "color": "rgb(100,0,0)"
            }
        }
    },
    "geo": {
        "itemStyle": {
            "areaColor": "#eee",
            "borderColor": "#444",
            "borderWidth": 0.5
        },
        "label": {
            "color": "#000"
        },
        "emphasis": {
            "itemStyle": {
                "areaColor": "rgba(255,215,0,0.8)",
                "borderColor": "#444",
                "borderWidth": 1
            },
            "label": {
                "color": "rgb(100,0,0)"
            }
        }
    },
    "categoryAxis": {
        "boundaryGap": false,
        "axisLine": {
            "show": true,
            "lineStyle": {
                "color": "#6E7079",
                'type': 'dashed'
            }
        },
        "axisTick": {
            "show": true,
            "lineStyle": {
                "color": "#6E7079"
            }
        },
        "axisLabel": {
            "show": true,
            "color": "#6E7079"
        },
        "splitLine": {
            "show": true,
            "lineStyle": {
                "type": 'dashed',
                "width": 1,
                "color": [
                    "#444444"
                ]
            }
        },
        "splitArea": {
            "show": false,
            "areaStyle": {
                "color": [
                    "rgba(250,250,250,0.2)",
                    "rgba(210,219,238,0.2)"
                ]
            }
        }
    },
    "valueAxis": {
        "axisLine": {
            "show": false,
            "lineStyle": {
                "color": "#6E7079"
            }
        },
        "axisTick": {
            "show": false,
            "lineStyle": {
                "color": "#6E7079"
            }
        },
        "axisLabel": {
            "show": true,
            "color": "#6E7079"
        },
        "splitLine": {
            "show": true,
            "lineStyle": {
                "widht": 1,
                "type": "dashed",
                "color": [
                    "#444444"
                ]
            }
        },
        "splitArea": {
            "show": false,
            "areaStyle": {
                "color": [
                    "rgba(250,250,250,0.2)",
                    "rgba(210,219,238,0.2)"
                ]
            }
        }
    },
    "logAxis": {
        "axisLine": {
            "show": false,
            "lineStyle": {
                "color": "#6E7079"
            }
        },
        "axisTick": {
            "show": false,
            "lineStyle": {
                "color": "#6E7079"
            }
        },
        "axisLabel": {
            "show": true,
            "color": "#6E7079"
        },
        "splitLine": {
            "show": true,
            "lineStyle": {
                "color": [
                    "#E0E6F1"
                ]
            }
        },
        "splitArea": {
            "show": false,
            "areaStyle": {
                "color": [
                    "rgba(250,250,250,0.2)",
                    "rgba(210,219,238,0.2)"
                ]
            }
        }
    },
    "timeAxis": {
        "axisLine": {
            "show": true,
            "lineStyle": {
                "color": "#6E7079"
            }
        },
        "axisTick": {
            "show": true,
            "lineStyle": {
                "color": "#6E7079"
            }
        },
        "axisLabel": {
            "show": true,
            "color": "#6E7079"
        },
        "splitLine": {
            "show": false,
            "lineStyle": {
                "color": [
                    "#E0E6F1"
                ]
            }
        },
        "splitArea": {
            "show": false,
            "areaStyle": {
                "color": [
                    "rgba(250,250,250,0.2)",
                    "rgba(210,219,238,0.2)"
                ]
            }
        }
    },
    "toolbox": {
        "iconStyle": {
            "borderColor": "#999999"
        },
        "emphasis": {
            "iconStyle": {
                "borderColor": "#666666"
            }
        }
    },
    "legend": {
        "textStyle": {
            "color": "#333333"
        }
    },
    "tooltip": {
        'trigger': 'axis',
        "backgroundColor": '#131218',
        "borderColor": "#131218",
        'padding': 24,
        'textStyle':
        {
            'fontSize': '17'
        },
        "axisPointer": {
            "lineStyle": {
                "color": "#ffffff",
                "type": 'sold',
                "width": 0.5
            }
        }
    },
    "timeline": {
        "lineStyle": {
            "color": "#dae1f5",
            "width": 2
        },
        "itemStyle": {
            "color": "#a4b1d7",
            "borderWidth": 1
        },
        "controlStyle": {
            "color": "#a4b1d7",
            "borderColor": "#a4b1d7",
            "borderWidth": 1
        },
        "checkpointStyle": {
            "color": "#316bf3",
            "borderColor": "#ffffff"
        },
        "label": {
            "color": "#a4b1d7"
        },
        "emphasis": {
            "itemStyle": {
                "color": "#ffffff"
            },
            "controlStyle": {
                "color": "#a4b1d7",
                "borderColor": "#a4b1d7",
                "borderWidth": 1
            },
            "label": {
                "color": "#a4b1d7"
            }
        }
    },
    "visualMap": {
        "color": [
            "#bf444c",
            "#d88273",
            "#f6efa6"
        ]
    },
    "dataZoom": {
        "handleSize": "undefined%",
        "textStyle": {}
    },
    "markPoint": {
        "label": {
            "color": "#eee"
        },
        "emphasis": {
            "label": {
                "color": "#eee"
            }
        }
    }
});
