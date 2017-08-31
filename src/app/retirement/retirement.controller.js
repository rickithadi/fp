angular.module('inspinia').controller('retireController', function(retireService, $scope) {

  $scope.duration = retireService.getDuration();
  $scope.age = retireService.getAge();
  $scope.percentage = retireService.getPercentage();
  $scope.income = retireService.getIncome();
  $scope.retAge = retireService.getRetAge();
  $scope.retIncome = retireService.getRetIncome();
  $scope.goal = retireService.getGoal();
  $scope.initialAmt=retireService.getinitialAmt();
  $scope.monthlyAmt=retireService.getmonthlyAmt();

  function getRetGraph(v_retAge, v_duration, v_goal, v_age) {


    var dieAge = v_retAge + v_duration;

    var data = [
      [
        v_retAge, v_goal
      ],
      [dieAge, 0]
    ];
    console.log("data retGraph:", data);
    return data;
      data = [];
  }

  function getProjectedGraph(v_retAge,v_initialAmt, v_goal, v_age) {


    var data = [
      [
        v_age, v_initialAmt
      ],
      [v_retAge, v_goal]
    ];
    console.log("data projGraph:", data);
    return data;
      data = [];
  }

  //$scope.graphData=[[$scope.retAge,$scope.goal],[$scope.dieAge,0]];
  $scope.setinitialAmt = function(v_initialAmt) {
    console.log("setinitialAmt")
    retireService.setinitialAmt(v_initialAmt);
  }

  $scope.setmonthlyAmt = function(v_monthlyAmt) {
    console.log("setmonthlyAmt")
    retireService.setinitialAmt(v_monthlyAmt);
  }

  $scope.setRetIncome = function(v_percentage, v_income) {
    var v_retIncome = v_percentage / 100 * v_income;
    console.log("v_retIncome", v_retIncome);
    retireService.setRetIncome(v_retIncome);
    $scope.retIncome = retireService.getRetIncome();
    console.log($scope.retIncome);
  }
  $scope.setGoal = function(v_retIncome, v_duration) {
    var v_goal = (v_retIncome * 12) * v_duration;
    console.log("v_goal", v_goal);
    retireService.setGoal(v_goal);
    $scope.goal = retireService.getGoal();
  }

  $scope.setName = function(name) {
    console.log("setName")
    retireService.setName(name);
    $scope.name = retireService.getName();
  }

  $scope.setIncome = function(income) {
    console.log("setIncome")
    retireService.setIncome(income);
  }

  $scope.setDuration = function(duration) {
    console.log("setDuration")
    retireService.setDuration(duration);
  }

  $scope.setAge = function(age) {
    console.log("setAge")
    retireService.setAge(age);
  }

  $scope.setRetAge = function(retAge) {
    console.log("setRetAge")
    retireService.setRetAge(retAge);
  }
  $scope.slider_init_options = {
    min: 0,
    max: 150,
    from: 70,
    step: 5,
    type: 'single',
    postfix: "% ",
    prettify: true,
    grid: true,
    hasGrid: true,
    onChange: function(data) {
      if (data.input.attr('id') == 'slider_init') {

        console.log('slider_init:', data.from);

        $scope.percentage = data.from;

        console.log("percentage", $scope.percentage);
        $scope.setRetIncome($scope.percentage, $scope.income);
        $scope.setGoal($scope.retIncome, $scope.duration);

        $scope.infoChart_options.series[0].data = getRetGraph($scope.retAge, $scope.duration, retireService.getGoal(), $scope.age);

        console.log("retGraph data", $scope.infoChart_options.series[0].data);

        $scope.infoChart_options.series[1].data = getProjectedGraph($scope.retAge,retireService.getinitialAmt(), retireService.getGoal(), $scope.age);
        console.log("initial amount:", $scope.initialAmt);

        console.log("ProjectedGraph data", $scope.infoChart_options.series[1].data);
        $scope.$apply();

      };
    }
  }


  $scope.slider_init_options_initial = {
    min: 0,
    max: 500000,
    from: retireService.getinitialAmt(),
    step: 5,
    type: 'single',
    prefix: "$ ",
    prettify: true,
    grid: true,
    hasGrid: true,
    onChange: function(data) {
      if (data.input.attr('id') == 'slider_init_initial') {

        console.log('slider_init_initial:', data.from);

        $scope.initialAmt = data.from
        $scope.setinitialAmt($scope.initialAmt);

        $scope.infoChart_options.series[1].data = getProjectedGraph($scope.retAge,retireService.getinitialAmt(), retireService.getGoal(), $scope.age);
        console.log("initial amount:", $scope.initialAmt);

        console.log("ProjectedGraph data", $scope.infoChart_options.series[1].data);
            $scope.$apply();


      };
    }
  }

  $scope.slider_init_options_monthly = {
    min: 0,
    max: retireService.getIncome(),
    from: 100,
    step: 5,
    type: 'single',
    prefix: "$ ",
    prettify: true,
    grid: false,
    hasGrid: false,
    onFinish: function(data) {
      if (data.input.attr('id') == 'slider_init_initial') {

        console.log('slider_init_initial:', data.from);

        $scope.monthlyAmt = data.from
        $scope.setmonthlyAmt($scope.monthlyAmt);




      };
    }
  }
  $scope.infoChart_options = {

    options: {
      //This is the Main Highcharts chart config. Any Highchart options are valid here.
      //will be overriden by values specified below.
      chart: {
        spacingBottom: 15,
       spacingTop: 10,
       spacingLeft: 10,
       spacingRight: 10,

        //  type: 'areaspline',
        zoomType: 'xy'

      },

      tooltip: {
        style: {
          padding: 10,
          fontWeight: 'bold'
        }
      }
    },
    credits: {
      enabled: false
    },

    series: [
      {
        type: "line",
        name: "retirement",
        data: [],
        color: '#FF0000',
        dashStyle: 'solid',
        zoneAxis: 'x',
        zones: [
          {
            value: 50
          }, {
            dashStyle: 'Dot'
          }
        ]
      }, {
        type: "areaspline",
        name: "goal",
        data: [],
        color: '#125655'
      }

    ],

    title: {
      text: ''
    },
    //Boolean to control showing loading status on chart (optional)
    //Could be a string if you want to show specific loading text.
    loading: false,
    //Configuration for the xAxis (optional). Currently only one x axis can be dynamically controlled.

    //Whether to use Highstocks instead of Highcharts (optional). Defaults to false.
    useHighStocks: false,
    //size (optional) if left out the chart will default to size of the div or something sensible.
    size: {
      width: 600,
      height: 400
    }

  }
  $scope.init = function() {
    console.log("init");
    $scope.setRetIncome($scope.percentage, $scope.income);
    $scope.setGoal($scope.retIncome, $scope.duration);
    $scope.infoChart_options.series[0].data = getRetGraph($scope.retAge, $scope.duration, retireService.getGoal(), $scope.age);
    $scope.infoChart_options.series[1].data = getProjectedGraph($scope.retAge, retireService.getinitialAmt(),retireService.getGoal(), $scope.age);

  }

  $scope.init();

  $scope.getFinalValue = function(rate, term, initialAmt) {
    var cash = initialAmt;
   updateDataG=[];
      for (var i = 0; i < term; i++) {
      //console.log("cash1:",cash);
      cash = cash * rate / 100 + cash;
      console.log("cash2:", cash);
      updateDataG.push(cash);

    }
    console.log("array to update:", updateDataG);

    $scope.infoChart_options.series[0].data = updateDataG;
  }


})
