
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

        displayChart:true,
        type:"",
        filePath:"",
        display:"table",
        message:"heima",
        arrInfo:[],
        columnName:"",
        inputValue:"",
        totalNum:"",
        state:"up",
        options:["iso_code","continent","location","date","total_cases","new_cases",
            "new_cases_smoothed","total_deaths","new_deaths","new_deaths_smoothed",
            "total_cases_per_million","new_cases_per_million","new_cases_smoothed_per_million",
            "total_deaths_per_million","new_deaths_per_million",
            "new_deaths_smoothed_per_million","reproduction_rate","icu_patients",
            "icu_patients_per_million","hosp_patients","hosp_patients_per_million",
            "weekly_icu_admissions","weekly_icu_admissions_per_million",
            "weekly_hosp_admissions","weekly_hosp_admissions_per_million","new_tests",
            "total_tests","total_tests_per_thousand","new_tests_per_thousand",
            "new_tests_smoothed","new_tests_smoothed_per_thousand","positive_rate",
            "tests_per_case","tests_units","total_vaccinations","people_vaccinated",
            "people_fully_vaccinated","total_boosters","new_vaccinations",
            "new_vaccinations_smoothed","total_vaccinations_per_hundred",
            "people_vaccinated_per_hundred","people_fully_vaccinated_per_hundred",
            "total_boosters_per_hundred","new_vaccinations_smoothed_per_million",
            "stringency_index","population","population_density","median_age",
            "aged_65_older","aged_70_older","gdp_per_capita","extreme_poverty",
            "cardiovasc_death_rate","diabetes_prevalence","female_smokers",
            "male_smokers","handwashing_facilities","hospital_beds_per_thousand",
            "life_expectancy","human_development_index","excess_mortality_cumulative_absolute",
            "excess_mortality_cumulative","excess_mortality",
            "excess_mortality_cumulative_per_million",
        ],

        iso_codeFileData:"0",
        continentFileData:"0",
        locationFileData:"0",
        dateFileData:"0",
        total_casesFileData:"0",
        new_casesFileData:"0",
        new_cases_smoothedFileData:"0",
        total_deathsFileData:"0",
        new_deathsFileData:"0",
        new_deaths_smoothedFileData:"0",
        total_cases_per_millionFileData:"0",
        new_cases_per_millionFileData:"0",
        new_cases_smoothed_per_millionFileData:"0",
        total_deaths_per_millionFileData:"0",
        new_deaths_per_millionFileData:"0",
        new_deaths_smoothed_per_millionFileData:"0",
        reproduction_rateFileData:"0",
        icu_patientsFileData:"0",
        icu_patients_per_millionFileData:"0",
        hosp_patientsFileData:"0",
        hosp_patients_per_millionFileData:"0",
        weekly_icu_admissionsFileData:"0",
        weekly_icu_admissions_per_millionFileData:"0",
        weekly_hosp_admissionsFileData:"0",
        weekly_hosp_admissions_per_millionFileData:"0",
        new_testsFileData:"0",
        total_testsFileData:"0",
        total_tests_per_thousandFileData:"0",
        new_tests_per_thousandFileData:"0",
        new_tests_smoothedFileData:"0",
        new_tests_smoothed_per_thousandFileData:"0",
        positive_rateFileData:"0",
        tests_per_caseFileData:"0",
        tests_unitsFileData:"0",
        total_vaccinationsFileData:"0",
        people_vaccinatedFileData:"0",
        people_fully_vaccinatedFileData:"0",
        total_boostersFileData:"0",
        new_vaccinationsFileData:"0",
        new_vaccinations_smoothedFileData:"0",
        total_vaccinations_per_hundredFileData:"0",
        people_vaccinated_per_hundredFileData:"0",
        people_fully_vaccinated_per_hundredFileData:"0",
        total_boosters_per_hundredFileData:"0",
        new_vaccinations_smoothed_per_millionFileData:"0",
        stringency_indexFileData:"0",
        populationFileData:"0",
        population_densityFileData:"0",
        median_ageFileData:"0",
        aged_65_olderFileData:"0",
        aged_70_olderFileData:"0",
        gdp_per_capitaFileData:"0",
        extreme_povertyFileData:"0",
        cardiovasc_death_rateFileData:"0",
        diabetes_prevalenceFileData:"0",
        female_smokersFileData:"0",
        male_smokersFileData:"0",
        handwashing_facilitiesFileData:"0",
        hospital_beds_per_thousandFileData:"0",
        life_expectancyFileData:"0",
        human_development_indexFileData:"0",
        excess_mortality_cumulative_absoluteFileData:"0",
        excess_mortality_cumulativeFileData:"0",
        excess_mortalityFileData:"0",
        excess_mortality_cumulative_per_millionFileData:"0",


        locations:["Honduras","Italy","Nauru","Haiti","Burundi","Afghanistan","Singapore",
            "Russia","Netherlands","China","Kyrgyzstan","International","Bhutan","Romania",
            "Togo","Philippines","Cote d'Ivoire","Uzbekistan","Pitcairn","Asia",
            "Democratic Republic of Congo","British Virgin Islands","Zimbabwe",
            "Montenegro","Indonesia","Dominica","Benin","Angola","Sudan","Portugal",
            "New Caledonia","Grenada","Greece","Cayman Islands","Mongolia","Latvia",
            "Morocco","Iran","Guyana","Guatemala","Iraq","Chile","Nepal","Isle of Man",
            "Ukraine","Tanzania","Ghana","Anguilla","India","Canada","Maldives","Turkey",
            "Belgium","Taiwan","South Africa","Trinidad and Tobago","Bermuda",
            "Central African Republic","Jamaica","Turkmenistan","Peru","Germany","Tokelau",
            "Fiji","Hong Kong","United States","Guinea","Somalia","Chad","Sao Tome and Principe",
            "Thailand","Kiribati","Equatorial Guinea","Costa Rica","Vietnam","Nigeria","Kuwait",
            "Croatia","Uruguay","Sri Lanka","Cook Islands","Faeroe Islands","United Kingdom",
            "Switzerland","Samoa","Palestine","Spain","Liberia","Venezuela","Burkina Faso",
            "Palau","Estonia","World","Wallis and Futuna","Niue","South Korea","Austria",
            "Mozambique","El Salvador","Monaco","Lesotho","Tonga","South Sudan","Hungary",
            "Japan","Europe","Belarus","Curacao","Mauritius","Albania","New Zealand",
            "Sint Maarten (Dutch part)","Senegal","Ethiopia","Czechia","Egypt",
            "Sierra Leone","Bolivia","Oceania","Malta","Saudi Arabia","Cape Verde",
            "Pakistan","Kosovo","Gambia","Qatar","Ireland","Slovakia","Serbia",
            "France","Lithuania","Bosnia and Herzegovina","Niger","Rwanda",
            "Bangladesh","Nicaragua","Barbados","Norway",
            "Saint Vincent and the Grenadines","Botswana","Macao","Dominican Republic",
            "Denmark","Uganda","Mexico","Suriname","Saint Helena","Greenland"
        ],
        continents:["South America",
            "Asia",
            "Europe",
            'Africa',
            'North America',
            '/',
            'Oceania'],
    },
    methods:{

        disappeartotal_cases_per_millionFileData:function(){
            this.total_cases_per_millionFileData = "1";},

        disappearnew_cases_per_millionFileData:function(){
            this.new_cases_per_millionFileData="1";},

        disappearnew_cases_smoothed_per_millionFileData:function(){
            this.new_cases_smoothed_per_millionFileData="1";},

        disappeartotal_deaths_per_millionFileData:function(){
            this.total_deaths_per_millionFileData="1";},

        disappearnew_deaths_per_millionFileData:function(){
            this.new_deaths_per_millionFileData="1";},

        disappearnew_deaths_smoothed_per_millionFileData:function(){
            this.new_deaths_smoothed_per_millionFileData="1";},

        disappearreproduction_rateFileData:function(){
            this.reproduction_rateFileData="1";},

        disappearicu_patientsFileData:function(){
            this.icu_patientsFileData="1";},

        disappearicu_patients_per_millionFileData:function(){
            this.icu_patients_per_millionFileData="1";},

        disappearhosp_patientsFileData:function(){
            this.hosp_patientsFileData="1";},

        disappearhosp_patients_per_millionFileData:function(){
            this.hosp_patients_per_millionFileData="1";},

        disappearweekly_icu_admissionsFileData:function(){
            this.weekly_icu_admissionsFileData="1";},

        disappearweekly_icu_admissions_per_millionFileData:function(){
            this.weekly_icu_admissions_per_millionFileData="1";},

        disappearweekly_hosp_admissionsFileData:function(){
            this.weekly_hosp_admissionsFileData="1";},

        disappearweekly_hosp_admissions_per_millionFileData:function(){
            this.weekly_hosp_admissions_per_millionFileData="1";},

        disappearnew_testsFileData:function(){
            this.new_testsFileData="1";},

        disappeartotal_testsFileData:function(){
            this.total_testsFileData="1";},

        disappeartotal_tests_per_thousandFileData:function(){
            this.total_tests_per_thousandFileData="1";},

        disappearnew_tests_per_thousandFileData:function(){
            this.new_tests_per_thousandFileData="1";},

        disappearnew_tests_smoothedFileData:function(){
            this.new_tests_smoothedFileData="1";},

        disappearnew_tests_smoothed_per_thousandFileData:function(){
            this.new_tests_smoothed_per_thousandFileData="1";},

        disappearpositive_rateFileData:function(){
            this.positive_rateFileData="1";},

        disappeartests_per_caseFileData:function(){
            this.tests_per_caseFileData="1";},

        disappeartests_unitsFileData:function(){
            this.tests_unitsFileData="1";},

        disappeartotal_vaccinationsFileData:function(){
            this.total_vaccinationsFileData="1";},

        disappearpeople_vaccinatedFileData:function(){
            this.people_vaccinatedFileData="1";},

        disappearpeople_fully_vaccinatedFileData:function(){
            this.people_fully_vaccinatedFileData="1";},

        disappeartotal_boostersFileData:function(){
            this.total_boostersFileData="1";},

        disappearnew_vaccinationsFileData:function(){
            this.new_vaccinationsFileData="1";},

        disappearnew_vaccinations_smoothedFileData:function(){
            this.new_vaccinations_smoothedFileData="1";},

        disappeartotal_vaccinations_per_hundredFileData:function(){
            this.total_vaccinations_per_hundredFileData="1";},

        disappearpeople_vaccinated_per_hundredFileData:function(){
            this.people_vaccinated_per_hundredFileData="1";},

        disappearpeople_fully_vaccinated_per_hundredFileData:function(){
            this.people_fully_vaccinated_per_hundredFileData="1";},

        disappeartotal_boosters_per_hundredFileData:function(){
            this.total_boosters_per_hundredFileData="1";},

        disappearnew_vaccinations_smoothed_per_millionFileData:function(){
            this.new_vaccinations_smoothed_per_millionFileData="1";},

        disappearstringency_indexFileData:function(){
            this.stringency_indexFileData="1";},

        disappearpopulationFileData:function(){
            this.populationFileData="1";},

        disappearpopulation_densityFileData:function(){
            this.population_densityFileData="1";},

        disappearmedian_ageFileData:function(){
            this.median_ageFileData="1";},

        disappearaged_65_olderFileData:function(){
            this.aged_65_olderFileData="1";},

        disappearaged_70_olderFileData:function(){
            this.aged_70_olderFileData="1";},

        disappeargdp_per_capitaFileData:function(){
            this.gdp_per_capitaFileData="1";},

        disappearextreme_povertyFileData:function(){
            this.extreme_povertyFileData="1";},

        disappearcardiovasc_death_rateFileData:function(){
            this.cardiovasc_death_rateFileData="1";},

        disappeardiabetes_prevalenceFileData:function(){
            this.diabetes_prevalenceFileData="1";},

        disappearfemale_smokersFileData:function(){
            this.female_smokersFileData="1";},

        disappearmale_smokersFileData:function(){
            this.male_smokersFileData="1";},

        disappearhandwashing_facilitiesFileData:function(){
            this.handwashing_facilitiesFileData="1";},

        disappearhospital_beds_per_thousandFileData:function(){
            this.hospital_beds_per_thousandFileData="1";},

        disappearlife_expectancyFileData:function(){
            this.life_expectancyFileData="1";},

        disappearhuman_development_indexFileData:function(){
            this.human_development_indexFileData="1";},

        disappearexcess_mortality_cumulative_absoluteFileData:function(){
            this.excess_mortality_cumulative_absoluteFileData="1";},

        disappearexcess_mortality_cumulativeFileData:function(){
            this.excess_mortality_cumulativeFileData="1";},

        disappearexcess_mortalityFileData:function(){
            this.excess_mortalityFileData="1";},

        disappearexcess_mortality_cumulative_per_millionFileData:function(){
            this.excess_mortality_cumulative_per_millionFileData="1";},




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
            axios.get("http://localhost:8088/getAllFileData")
                .then(function (response){
                        console.log(response);
                        that.arrInfo = response.data;
                        console.log(that.arrInfo.map(e => e.location))
                    },
                )
                .catch(function (err){})
        },

        getTotalNum:function () {
            var that = this;
            axios.get("http://localhost:8088/getTotalNum")
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
            axios.get("http://localhost:8088/searchFileData?columnName="+that.columnName+"&value="+that.inputValue)
                .then(function (response){
                        console.log(response);
                        that.arrInfo = response.data;
                    },
                )
                .catch(function (err){})
        },

        showLastOne:function () {
            this.columnName = "date";
            var that = this;
            axios.get("http://localhost:8088/showLastOne")
                .then(function (response){
                        console.log(response);
                        that.arrInfo = response.data;
                    },
                )
                .catch(function (err){})
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
            axios.get("http://localhost:8088/sort?columnName="+column+"&upOrDown="+that.state)
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

            that.datadata.labels = that.arrInfo.map(e => e.date);
            that.datadata.datasets[0].data = that.arrInfo.map(e => e.total_cases);
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
            this.columnName = "date";
            var that = this;

            that.datadata.labels = that.arrInfo.map(e => e.location);
            that.datadata.datasets[0].data = that.arrInfo.map(e => e.total_cases);
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

            this.columnName = "date";
            var that = this;

            that.datadatadata.labels = that.arrInfo.map(e => e.location);
            that.datadatadata.datasets[0].data = that.arrInfo.map(e => e.total_deaths);


            var ctx = document.getElementById("mypieChart").getContext('2d');
            var myLineChart = new Chart(ctx, {
                type: 'pie',
                data: this.datadatadata,
            });
        },

        saveText:function () {

            var that = this;
            axios.get("http://localhost:8088/saveText?filePath")
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

