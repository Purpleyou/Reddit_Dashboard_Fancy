<template>
  <div :class="className" :id="id" :style="{height:height,width:width}"></div>
</template>

<script>
import echarts from "echarts";

export default {
  props: {
    className: {
      type: String,
      default: "chart"
    },
    id: {
      type: String,
      default: "chart"
    },
    width: {
      type: String,
      default: "200px"
    },
    height: {
      type: String,
      default: "200px"
    }
  },
  data() {
    return {
      chart: null
    };
  },
  mounted() {
    this.initChart();
    this.chart = null;
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    initChart() {
      this.chart = echarts.init(document.getElementById(this.id));
      const author = [
        "SecretApe",
        "WillMTB",
        "ricolah",
        "sunaurus",
        "ScourgeDL",
        "SsUmdsP2TwbhhKIr",
        "no-more-lurking-",
        "kinglax",
        "MrFussyVendor",
        "SpearTactics",
        "ethos_io",
        "andon_",
        "1Bitcoinco",
        "UtopianLodging",
        "lawmaster10",
        "optocomp",
        "zigzagzig",
        "resipsa21",
        "diezge",
        "bitfinexlove",
        "GrowToronto",
        "lo8",
        "sneurlax",
        "lemdaddy",
        "XMRenthusiastic",
        "msloan7",
        "Parrot32",
        "etix",
        "DuryServiceIsFun",
        "mak_3",
        "cryptonoob420",
        "XelionIO",
        "btchip",
        "time_man_x",
        "art-fart-dart-part",
        "extasytj",
        "HackerBeeDrone",
        "socialhub",
        "cslashm",
        "THE_REAL_WET_WILLY",
        "0x537",
        "brigittefruehauf",
        "EaFaer",
        "luxem555",
        "darawk",
        "dieyoung",
        "JUBQ",
        "Says_Watt",
        "CBDoctor",
        "Wingcrony_",
        "bsic719",
        "himynameisubik",
        "Beemoe4",
        "Funyug",
        "EtherWorld_co",
        "moneroissafe",
        "0xf3e",
        "anythingnoniding",
        "frozengrandmatetris",
        "Assorted_Bananas",
        "freethenation",
        "hodl_donkey",
        "POMMEJIbErvin",
        "AqabaIsOverThere",
        "Yes-Lawd",
        "bitcoinETF_",
        "oobe9",
        "tamarabyte",
        "Mrrogerfed1989",
        "DuckyChuk",
        "luizhrmello",
        "PericlesDota",
        "LongJohnBitcoin",
        "soyuz13",
        "JaimeBitcoin",
        "Arashcomeonmang",
        "_muff1nman_",
        "lozaftw",
        "-Skorpion",
        "cryptopeak",
        "The-Gaming-Alien",
        "53r0coo1",
        "sha_5_1_2",
        "novusordo",
        "Cifrado",
        "AnotherAceTeeHummR34",
        "AzurSamui",
        "SwedishSalsa",
        "KnifeOfPi2",
        "kavasociety",
        "FraggleRockRefugee",
        "Dwaas_Bjaas",
        "czechrebel3",
        "bull-whale",
        "ReverseJackpot",
        "GettingGains",
        "nullc",
        "swift212",
        "proce55or",
        "Crawsh"
      ];
      // const xData = (function() {
      //   const data = [];
      //   for (let i = 1; i < 13; i++) {
      //     data.push(i + "month");
      //   }
      //   return data;
      // })();
      const xData = author;
      this.chart.setOption({
        backgroundColor: "#344b58",
        title: {
          text: "Author KOL Rank in Monero",
          x: "20",
          top: "20",
          textStyle: {
            color: "#fff",
            fontSize: "22"
          },
          subtextStyle: {
            color: "#90979c",
            fontSize: "16"
          }
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            textStyle: {
              color: "#fff"
            }
          }
        },
        grid: {
          borderWidth: 0,
          top: 110,
          bottom: 95,
          textStyle: {
            color: "#fff"
          }
        },
        // legend: {
        //   x: "5%",
        //   top: "10%",
        //   textStyle: {
        //     color: "#90979c"
        //   },
        //   data: ["female", "male", "average"]
        // },
        calculable: true,
        xAxis: [
          {
            type: "category",
            axisLine: {
              lineStyle: {
                color: "#90979c"
              }
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            splitArea: {
              show: false
            },
            axisLabel: {
              interval: 0
            },
            data: xData
          }
        ],
        yAxis: [
          {
            type: "value",
            splitLine: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: "#90979c"
              }
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              interval: 0
            },
            splitArea: {
              show: false
            }
          }
        ],
        // dataZoom: [
        //   {
        //     show: true,
        //     height: 30,
        //     xAxisIndex: [0],
        //     bottom: 30,
        //     start: 10,
        //     end: 80,
        //     handleIcon:
        //       "path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z",
        //     handleSize: "110%",
        //     handleStyle: {
        //       color: "#d3dee5"
        //     },
        //     textStyle: {
        //       color: "#fff"
        //     },
        //     borderColor: "#90979c"
        //   },
        //   {
        //     type: "inside",
        //     show: true,
        //     height: 15,
        //     start: 1,
        //     end: 35
        //   }
        // ],
        series: [
          {
            name: "average score",
            type: "bar",
            stack: "total",
            barMaxWidth: 35,
            barGap: "10%",
            itemStyle: {
              normal: {
                color: "rgba(255,144,128,1)",
                label: {
                  show: true,
                  textStyle: {
                    color: "#fff"
                  },
                  position: "insideTop",
                  formatter(p) {
                    return p.value > 0 ? p.value : "";
                  }
                }
              }
            },
            data: [
              860.0,
              807.0,
              563.0,
              546.0,
              528.0,
              512.0,
              495.0,
              487.0,
              486.0,
              382.0,
              380.0,
              371.0,
              357.0,
              352.0,
              334.0,
              332.0,
              331.3333333333333,
              328.0,
              326.0,
              320.0,
              306.0,
              300.0,
              295.0,
              291.0,
              290.0,
              287.0,
              267.0,
              263.5,
              262.0,
              258.5,
              254.5,
              254.0,
              252.0,
              250.0,
              250.0,
              250.0,
              247.0,
              246.0,
              244.1818181818182,
              244.0,
              236.0,
              236.0,
              235.0,
              231.0,
              231.0,
              227.5,
              227.0,
              215.0,
              211.0,
              208.5,
              206.0,
              205.5,
              204.66666666666666,
              203.0,
              200.5,
              200.0,
              197.8,
              196.0,
              194.0,
              193.0,
              192.0,
              191.5,
              191.0,
              191.0,
              189.0,
              187.0,
              184.0,
              181.0,
              180.5,
              179.0,
              176.0,
              171.0,
              170.0,
              169.0,
              168.0,
              166.0,
              157.0,
              155.0,
              154.0,
              154.0,
              153.5,
              150.0,
              150.0,
              149.0,
              148.0,
              143.0,
              143.0,
              142.0,
              141.95652173913044,
              140.75,
              136.75,
              135.0,
              133.625,
              133.0,
              132.0,
              131.0,
              130.0,
              128.0,
              128.0,
              127.0
            ]
          }

          // {
          //   name: "male",
          //   type: "bar",
          //   stack: "total",
          //   itemStyle: {
          //     normal: {
          //       color: "rgba(0,191,183,1)",
          //       barBorderRadius: 0,
          //       label: {
          //         show: true,
          //         position: "top",
          //         formatter(p) {
          //           return p.value > 0 ? p.value : "";
          //         }
          //       }
          //     }
          //   },
          //   data: [
          //     327,
          //     1776,
          //     507,
          //     1200,
          //     800,
          //     482,
          //     204,
          //     1390,
          //     1001,
          //     951,
          //     381,
          //     220
          //   ]
          // }
          // {
          //   name: "average",
          //   type: "line",
          //   stack: "total",
          //   symbolSize: 10,
          //   symbol: "circle",
          //   itemStyle: {
          //     normal: {
          //       color: "rgba(252,230,48,1)",
          //       barBorderRadius: 0,
          //       label: {
          //         show: true,
          //         position: "top",
          //         formatter(p) {
          //           return p.value > 0 ? p.value : "";
          //         }
          //       }
          //     }
          //   },
          //   data: [
          //     1036,
          //     3693,
          //     2962,
          //     3810,
          //     2519,
          //     1915,
          //     1748,
          //     4675,
          //     6209,
          //     4323,
          //     2865,
          //     4298
          //   ]
          // }
        ]
      });
    }
  }
};
</script>
