

var app = new Vue({
    el:"#app",
    data:{

        datadata: {
            labels : ["January","February","March","April","May","June","July"],
            datasets : [

                {
                    label:'2016',
                    backgroundColor:'rgb(136,196,76)',
                    data : [28,48,40,19,96,27,100]
                },
            ],
            borderColor:"rgb(132,194,226)"
        },

        datadatadata: {
            labels: [
                "February","March","April","July"
            ],
            datasets: [{
                label:"",
                data: [10, 20, 30, 40],
                backgroundColor:["#2a436b","#0e483a","#ea043e","#7c69c4","#3a02d4","#b7e7ec","#193743",
                    "#8c850d","#696c65","#65a4c3","#c6d65e","#a55e99","#0e5c7a","#ac306b","#69ddab","#6ccad9",
                    "#a1d074","#69cd84","#2d9756","#26e41b","#9cbe7d","#bd1454","#e7544c","#923162","#150501",
                    "#19dc49","#ba2785","#66d117","#93c029","#5641ad","#2869b6","#b57d18","#b56e13","#032bc7",
                    "#8633dc","#63e967","#7d202d","#8e3a89","#696ede","#8be2e7","#7e2db6","#edc915","#0a250a",
                    "#8a2e20","#09845b","#38c562","#14a083","#2abc04","#6b219e","#bcba7e","#287a86","#ee3d17",
                    "#0e8bd4","#cd250a","#cd2bab","#02a225","#7a5565","#4ac265","#d3e0e6","#0c59d5","#96943b",
                    "#a5d2c8","#a3566a","#539d2d","#069d30","#0782b8","#191b74","#c86361","#373452","#ec0d82",
                    "#644879","#ba7963","#de7563","#ed165a","#cb9a97","#e3321c","#996709","#597675","#566166",
                    "#bb00b6","#ecbb20","#06c067","#4bdae2","#463c9c","#ed7c45","#4a0541","#779660","#7188a8",
                    "#51018a","#67ab08","#450013","#b417a7","#bb972a","#22de51","#e174e2","#e21d46","#8799a0",
                    "#1b0268","#447e7e","#7b5167","#0719b3","#441eec","#a39dcb","#34e3b6","#674813","#b0eccb",
                    "#927e02","#b21cde","#0eba4d","#73ad99","#a70198","#187a06","#39c616","#c20e26","#ccd1e9",
                    "#57a698","#d36cce","#29a75b","#baaad2","#3a349b","#0938c1","#745e85","#d56cb3","#929c15",
                    "#4838a3","#537426","#20e214","#6047a5","#717483","#8b3a40","#149ed8","#2aa996","#730377",
                    "#b11e64","#4c6c54","#253547","#b4505a","#c66988","#1ed374","#72a494","#7a8814","#60d166",
                    "#166dd6","#176667","#6dc188","#30dcd8","#5a8dc6","#144ed5","#385489","#971de3","#4da298",
                    "#537897","#81cc5b","#0d13a1","#320ba5","#e0da97","#d22d73","#363836","#a5b473","#12806a",
                    "#a4128a","#9bad9a","#dc789e","#9d37e5","#8978ca","#b92226","#1cc730","#dd681d","#c840b0",
                    "#27e540","#c78e6b","#9e6e49","#3206c1","#2b0eb9","#972693","#1704db","#632846","#7075d5",
                    "#ad1b95","#c2646d","#79eeec","#1d2646","#9d0d04","#be0160","#3cb024","#9902ca","#d07de6",
                    "#a0ad72","#90b99d","#48c4d0","#8b52a2","#d8a576","#6a37dc","#632c73","#c50481","#3b6083",
                    "#a48323","#972683","#cb524e","#46d7c1","#3d4859","#bd8982","#345d6e","#4316d6","#a108c1",
                    "#e623e1","#b1ebab","#512706","#9d8c86","#b019dc","#a707dc","#ae4284","#6b807e","#781506",
                    "#baa1b8","#61a8ea","#57a89a","#84d4d8","#c3983e","#238e72","#617358","#e57379","#c8089b",
                    "#0493de","#8ca121","#443744","#1ddca1","#3b71ea","#20a1cb","#e111a9","#de4c11","#9d1b20",
                    "#a4190b","#9ecc8c","#b0d6a9","#9db303","#38dbdb","#0722ce","#c4c67e","#a511b3","#e889e2",
                    "#1da790","#b72251","#2cd619","#5749c8","#daad8d","#9845d9","#9e9015","#59cc60","#3739a2"
                ]
            }],

        },

        type:"",
        filePath:"",
        display:"table",
        message:"heima",
        arrInfo:[],
        columnName:"countryName",
        inputValue:"",
        totalNum:"",
        state:"up",
        options:["countryName",
        "cumulativeConfirmed",
        "dieNum",
        "cureNum",
        "existConfirmed",
        "diePercentage",
        "recoverPercentage",
        ],
        locations:["美国","印度","巴西","英国","俄罗斯","土耳其","法国","德国",
            "伊朗","阿根廷","西班牙","意大利","哥伦比亚","印度尼西亚","墨西哥",
            "波兰","乌克兰","南非","荷兰","菲律宾","马来西亚","捷克","秘鲁","泰国",
            "伊拉克","比利时","加拿大","罗马尼亚","智利","日本","孟加拉国","越南",
            "以色列","巴基斯坦","塞尔维亚","瑞典","奥地利","葡萄牙","匈牙利","瑞士",
            "约旦","希腊","哈萨克斯坦","古巴","摩洛哥","格鲁吉亚","尼泊尔","斯洛伐克",
            "阿联酋","突尼斯","保加利亚","黎巴嫩","白俄罗斯","克罗地亚","危地马拉",
            "爱尔兰","阿塞拜疆","斯里兰卡","哥斯达黎加","沙特阿拉伯","玻利维亚",
            "丹麦","厄瓜多尔","缅甸","韩国","立陶宛","巴拿马","巴拉圭","斯洛文尼亚",
            "委内瑞拉","巴勒斯坦领土","科威特","多米尼加共和国","乌拉圭","蒙古",
            "洪都拉斯","利比亚","埃塞俄比亚","摩尔多瓦","埃及","亚美尼亚","挪威",
            "阿曼","波斯尼亚和黑塞哥维那","巴林","新加坡","拉脱维亚","肯尼亚",
            "卡塔尔","爱沙尼亚","澳大利亚","北马其顿","尼日利亚","阿尔及利亚",
            "赞比亚","阿尔巴尼亚","芬兰","博茨瓦纳","乌兹别克斯坦","吉尔吉斯斯坦",
            "黑山","阿富汗","津巴布韦","莫桑比克","塞浦路斯","加纳","纳米比亚",
            "乌干达","柬埔寨","萨尔瓦多","喀麦隆","卢旺达","中国 (大陆)","卢森堡",
            "马尔代夫","牙买加","老挝","特立尼达和多巴哥","塞内加尔","安哥拉",
            "马拉维","科特迪瓦","刚果（金）","瓜德罗普","斐济","苏里南","斯威士兰",
            "叙利亚","马提尼克","马达加斯加","苏丹","马耳他","毛里塔尼亚","圭亚那",
            "加蓬","巴布亚新几内亚","伯利兹","几内亚","巴巴多斯","多哥","坦桑尼亚",
            "海地","贝宁","塞舌尔","索马里","巴哈马","毛里求斯","莱索托","马约特",
            "布隆迪","东帝汶","安道尔","冰岛","刚果（布）","马里","尼加拉瓜",
            "塔吉克斯坦","台湾","阿鲁巴","布基纳法索","文莱","赤道几内亚",
            "吉布提","圣卢西亚","新西兰","香港","新喀里多尼亚","马恩岛",
            "中非共和国","也门","冈比亚","开曼群岛","厄立特里亚","直布罗陀","尼日尔",
            "科索沃","塞拉利昂","圣马力诺","多米尼克","利比里亚","格林纳达","百慕大",
            "乍得","圣文森特和格林纳丁斯","列支敦士登","科摩罗","安提瓜和巴布达",
            "摩纳哥","圣多美和普林西比","特克斯和凯科斯群岛","圣基茨和尼维斯","不丹",
            "佛得角","格陵兰","安圭拉","钻石公主号 (🚢)","泽西岛","根西岛","关岛",
            "澳门","蒙特塞拉特","梵蒂冈","西撒哈拉","荷属圣马丁","库拉索",
        ],

    },
    methods:{



        chooseTableOrChart:function (){
            if (this.display === "table"){
                this.display = "chart";
            }
            else {
                this.display = "table";
            }


        },
        getAll:function() {
            var that = this;
            axios.get("http://localhost:8088/getAllOutBreakData")
                .then(function (response){
                        console.log(response);
                        that.arrInfo = response.data;
                    },
                )
                .catch(function (err){})
        },

        getTotalNum:function () {
            var that = this;
            axios.get("http://localhost:8088/getTotalNumOutBreakData")
                .then(function (response){
                        console.log(response);
                        that.totalNum = response.data;
                    },
                )
                .catch(function (err){})
        },


        clear:function (){
            this.arrInfo = [];
            this.inputValue = "";
        },


        searchFileData:function () {
            var that = this;
            axios.get("http://localhost:8088/searchOutBreakData?columnName="+that.columnName+"&value="+that.inputValue)
                .then(function (response){
                        console.log(response);
                        that.arrInfo = response.data;
                    },
                )
                .catch(function (err){})
        },

        showLastOne:function () {
            var that = this;
            axios.get("http://localhost:8088/showLastOneOutBreakData")
                .then(function (response){
                        console.log(response);
                        that.arrInfo = response.data;
                    },
                )
                .catch(function (err){})
            alert("success")
        },

        changeState:function () {
            if (this.state === "up"){
                this.state = "down";
            }
            else {
                this.state = "up";
            }
        },

        sort:function (column) {
            this.changeState();
            var that = this;
            axios.get("http://localhost:8088/sortOutBreakData?columnName="+column+"&upOrDown="+that.state)
                .then(function (response){
                        console.log(response);
                        that.arrInfo = response.data;
                    },
                )
                .catch(function (err){})
        },

        createLineChart:function (columnName, inputValue) {
            this.type = "line";
            var that = this;

            that.datadata.labels = that.arrInfo.map(e => e.countryName);
            that.datadata.datasets[0].data = that.arrInfo.map(e => e.cumulativeConfirmed);
            that.datadata.datasets[0].label = this.inputValue;

            var ctx = document.getElementById("mylineChart").getContext('2d');
            var myLineChart = new Chart(ctx, {
                type: 'line',
                data: this.datadata,
                options: {
                    animations: {
                        tension: {
                            duration: 1000,
                            easing: 'linear',
                            from: 1,
                            to: 0,
                            loop: true
                        }
                    },
                    scales: {
                        xAxes: [{
                            tension: 1,
                        }]
                    }
                }
            });
        },

        createBarChart:function (columnName, inputValue) {
            this.type = "bar";
            var that = this;

            that.datadata.labels = that.arrInfo.map(e => e.countryName);
            that.datadata.datasets[0].data = that.arrInfo.map(e => e.cumulativeConfirmed);
            that.datadata.datasets[0].label = this.columnName;

            var ctx = document.getElementById("mybarChart").getContext('2d');
            var myLineChart = new Chart(ctx, {
                type: 'bar',
                data: this.datadata,
                options: {
                    indexAxis: 'y',
                    scales: {
                        x: {
                            grid: {
                                offset: true
                            }
                        }
                    },

                }
            });
        },

        createPieChart:function (columnName, inputValue) {
            this.type = "pie";

            var that = this;

            that.datadatadata.labels = that.arrInfo.map(e => e.countryName);
            that.datadatadata.datasets[0].data = that.arrInfo.map(e => e.dieNum);
            that.datadata.datasets[0].label = "dieNum";

            var ctx = document.getElementById("mypieChart").getContext('2d');
            var myLineChart = new Chart(ctx, {
                type: 'pie',
                data: this.datadatadata,
            });
        },

        saveText:function () {

            var that = this;
            axios.get("http://localhost:8088/saveTextOutBreakData")
                .then(function (response){
                        console.log(response);
                    },
                )
                .catch(function (err){})
            alert("success")
        },
    },

})

window.addEventListener('load',function () {


})

