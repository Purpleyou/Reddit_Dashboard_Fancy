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
        "alkalinemoe",
        "1T-Chizzle",
        "Atari1337",
        "Edgele55Placebo",
        "iAmNotFunny",
        "yuge_balls",
        "bantuftw",
        "TheManicMonocle",
        "OobleCaboodle",
        "Execute-Order-66",
        "Zyrusticae",
        "Short_Term_Account",
        "Tommy-LeeJones",
        "Dooiechase97",
        "tomorrownightuk",
        "primaequa",
        "jbird221",
        "Pantsuit_Emporium",
        "scarystuffman",
        "nguye487",
        "tipofmytongue2332",
        "knifeandforr",
        "stargrunt6",
        "Xxpussy-destroyerxX",
        "elch78",
        "Breauxfosh",
        "Nublu",
        "harjas834",
        "_QWERTYninja_",
        "cloudform",
        "Wreck003",
        "kabob23",
        "HecticSC",
        "best_of_badgers",
        "mhamm21",
        "X0AN",
        "justsofun",
        "KlausEcir",
        "stefi9100",
        "nitaro",
        "EuGENE87",
        "PrettyTarable",
        "ericb303",
        "farcarcus",
        "8Xeh4FMq7vM3",
        "gsw_gooder_than_all",
        "-notausername_",
        "matthewmagellan",
        "IndustryApologist",
        "atsteak",
        "westernhaiku",
        "Drakhan106",
        "GJTITANIC",
        "RhapsodyinBluebyG",
        "grintnreddit",
        "germancommenter",
        "aelothir",
        "rollmeadoob",
        "king_king_2000",
        "Dleet3D",
        "Phons",
        "underwatr_cheestrain",
        "Scoobert_Doo_",
        "ClockworkEyes",
        "prodigies2016",
        "Maggoats",
        "GifACatBytheToe",
        "QuiteDrunk",
        "dmaxel",
        "SevenHundredFourty",
        "jamaa1995",
        "relativelyexcited",
        "ScotchButters",
        "I-am-the-noob",
        "ryanmcco",
        "ajayz",
        "Ridog101",
        "stankery",
        "KRISHNA53",
        "MouseandMotorcycle",
        "samariterstrasse",
        "jonesrr2",
        "megaleks",
        "Nhl88",
        "exzact",
        "14All-and-All41",
        "Tatanka10010413",
        "cigrainger",
        "commander-crook",
        "mavnorman",
        "Bryanmagee7",
        "EL0NMusk",
        "quantummufasa",
        "unknownfunctionfx",
        "loremipsumchecksum",
        "Jolnor",
        "boqeh",
        "oisw",
        "z1011",
        "elpinguino2002",
        "emalooie",
        "mialcsnaciremaetihs",
        "mossbergGT",
        "DukeOfGeek",
        "parkerharper",
        "Koehleer",
        "octaviusxx",
        "Chiamon",
        "elbartos29",
        "ant13",
        "Khaleeasi24",
        "Bigsam411",
        "Try_Another_NO",
        "sdragon0210",
        "modern-prometheus",
        "jaapgrolleman",
        "querius",
        "ObiJuanKenobi123",
        "maoz_d",
        "leakime",
        "goatsgreetings",
        "happyvagabond",
        "pasadenastar",
        "Biololo",
        "bneac",
        "gamesofweb",
        "Xavior_Orion",
        "Zombi_Sagan",
        "fathergoat_adventure",
        "Cubicbill1",
        "vystyk",
        "crazyhit",
        "RoomIn8",
        "FredTesla",
        "stchy_5",
        "irish91",
        "BULKGIFTER",
        "joudheus",
        "whippsx",
        "Sosolidclaws",
        "ennormal",
        "moresourdough",
        "moonsprite",
        "yatea34",
        "urgukvn",
        "brahdude",
        "mattygfunk",
        "howareyao",
        "PurpleJawa",
        "jed_PK",
        "drbatookhanxx",
        "walkingtreezy",
        "Belpharion",
        "pulgasvestidas",
        "lucidrains1",
        "iStealthshot",
        "edunuke",
        "gamesorwhatever64",
        "iTechie",
        "FlaggedBrad",
        "cosmusedelic",
        "andresemilfer",
        "berkshireee",
        "HelloImCarter",
        "helicalpen",
        "Fwada1",
        "americanmuscle1988",
        "SergeCalame",
        "thefatkittycat",
        "lovers_acid",
        "Philipp",
        "snippytugboat2",
        "nootnoot_pingu_noot",
        "followmylied",
        "BadDrvrsofSac",
        "EntireSiteFromOrbit",
        "rbachar",
        "minlite",
        "Ge0N",
        "chuloreddit",
        "n4noNuclei",
        "JayhawkGunner",
        "atheistcoffee",
        "datPEPPERdoggy",
        "YOUEFFOHH",
        "PM_Me_ur_BassetHound",
        "Mikhail-Bakunin",
        "antici________pation",
        "Nov22",
        "jcjpaul",
        "AccipiterQ",
        "BEEPBEEPSNOOZEREPEAT",
        "Moonstruck_King",
        "Dinomial",
        "Gildarts_Clive",
        "Metaweed",
        "roseygrl98",
        "Awesomo6000",
        "mumblingminutes",
        "abhinovb"
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
          text: "Author KOL Rank in Futurology",
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
              94826.0,
              37097.0,
              36396.0,
              35160.0,
              32441.0,
              31099.0,
              26147.0,
              25046.0,
              24960.0,
              24269.0,
              23088.0,
              22445.0,
              21039.0,
              20479.5,
              20239.5,
              19500.0,
              19094.5,
              18098.0,
              17082.0,
              16796.0,
              16781.5,
              16773.0,
              16457.0,
              16386.0,
              15967.0,
              15742.0,
              15440.0,
              15344.0,
              14457.666666666666,
              14308.0,
              13683.0,
              13643.0,
              13636.0,
              13598.75,
              13194.0,
              13094.0,
              13057.0,
              12387.0,
              12184.666666666666,
              12043.5,
              11736.0,
              11708.333333333334,
              11503.0,
              11358.0,
              11354.0,
              10893.666666666666,
              10887.0,
              10817.0,
              9965.0,
              9766.333333333334,
              9744.6,
              9708.0,
              9544.0,
              9440.0,
              9231.0,
              7772.666666666667,
              7687.0,
              7631.0,
              7488.0,
              7437.0,
              7143.0,
              6898.0,
              6835.0,
              6701.0,
              6585.0,
              6489.0,
              6486.0,
              6393.0,
              6299.0,
              6294.666666666667,
              6238.833333333333,
              6096.0,
              6014.0,
              5964.0,
              5713.0,
              5710.5,
              5681.0,
              5631.0,
              5629.0,
              5559.0,
              5530.0,
              5467.0,
              5410.0,
              5410.0,
              5244.0,
              5241.5,
              5236.8,
              5207.0,
              5098.0,
              5086.0,
              5060.0,
              5022.0,
              4919.0,
              4900.0,
              4858.75,
              4857.0,
              4815.0,
              4798.0,
              4792.0,
              4730.6,
              4638.0,
              4620.75,
              4612.75,
              4601.0,
              4598.0,
              4576.0,
              4545.0,
              4544.0,
              4542.0,
              4530.0,
              4489.285714285715,
              4447.0,
              4444.0,
              4433.0,
              4402.0,
              4394.25,
              4333.0,
              4267.0,
              4263.0,
              4262.0,
              4234.333333333333,
              4223.0,
              4179.0,
              4145.0,
              4129.0,
              4097.5,
              4078.0,
              4040.0,
              4026.0,
              3993.5,
              3944.0,
              3900.0,
              3898.8,
              3868.5,
              3855.2,
              3821.2,
              3821.0,
              3819.0,
              3762.0,
              3756.0,
              3740.0,
              3725.3333333333335,
              3672.0,
              3639.0,
              3637.777777777778,
              3573.0,
              3573.0,
              3569.0,
              3566.0,
              3533.0,
              3527.0,
              3523.0,
              3518.0,
              3513.0,
              3505.0,
              3502.0,
              3470.0,
              3467.0,
              3452.0,
              3446.0,
              3442.0,
              3374.0,
              3355.0,
              3348.0,
              3342.0,
              3320.75,
              3318.0,
              3270.0,
              3225.0,
              3194.0,
              3174.5,
              3168.0,
              3164.0,
              3154.0,
              3138.0,
              3104.0,
              3101.0,
              3098.0,
              3092.0,
              3083.3333333333335,
              3079.5,
              3072.0,
              3018.0,
              3003.0,
              2999.0,
              2951.0,
              2933.8888888888887,
              2932.0,
              2929.0,
              2918.0,
              2903.5,
              2901.0,
              2896.0,
              2887.0,
              2886.0,
              2885.9583333333335,
              2873.0,
              2857.0,
              2834.5,
              2820.0
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
