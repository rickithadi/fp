(function() {
  'use strict';

  angular
    .module('inspinia')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
  var skipIfLoggedIn = ['$q', '$auth', function($q, $auth) {
      var deferred = $q.defer();
      if ($auth.isAuthenticated()) {
        deferred.reject();
      } else {
        deferred.resolve();
      }
      return deferred.promise;
    }];

    var loginRequired = ['$q', '$location', '$auth', function($q, $location, $auth) {
      var deferred = $q.defer();
      if ($auth.isAuthenticated()) {
        deferred.resolve();
      } else {
        $location.path('/login/home');
      }
      return deferred.promise;
    }];

  
  
  
  
    $stateProvider
      .state('index', {
        abstract: true,
        url: "/index",
        templateUrl: "app/components/common/content.html"
      })
      .state('index.main', {
        url: "/main",
        templateUrl: "app/main/main.html",
        data: { pageTitle: 'Example view' }
      })
      .state('index.minor', {
        url: "/minor",
        templateUrl: "app/minor/minor.html",
        data: { pageTitle: 'Example view' }
      })
      .state('financial_planning', {
        abstract: true,
        url: "/financial_planning",
        templateUrl: "app/components/common/content.html"
      })
      .state('financial_planning.home', {
        url: "/financial_planning/home",
        templateUrl: "app/fp/home_page.html",
        data: { pageTitle: 'HomePage' }
      })
      .state('financial_planning.get2know_active_investing', {
                url: "/get2know_active_investing",
                templateUrl: "app/fp/get2know_active_investing.html",
                data: { pageTitle: 'Get To Know - Active Investing' },
                access: { requiredLogin: true }
              })
          .state('financial_planning.get2know_new_workforce', {
                url: "/get2know_new_workforce",
                templateUrl: "app/fp/get2know_new_workforce.html",
                data: { pageTitle: 'Get To Know - New Workforce' },
                access: { requiredLogin: true }
              })
          .state('financial_planning.get2know_education', {
                url: "/get2know_education",
                templateUrl: "app/fp/get2know_education.html",
                data: { pageTitle: 'Get To Know - Education' },
                access: { requiredLogin: true }
              })
          .state('financial_planning.get2know_retirement', {
                url: "/get2know_retirement",
                templateUrl: "app/fp/get2know_retirement.html",
                data: { pageTitle: 'Get To Know - Retirement' },
                access: { requiredLogin: true }
              })
        .state('debt', {
          abstract: true,
          url: "/debt",
          templateUrl: "app/components/common/content.html"
        })
        .state('debt.main', {
          url: "/debt_main",
          templateUrl: "app/debt/debt.html",
          data: { pageTitle: 'Example view' }
        })
         .state('login', {
        abstract: true,
        url: "/login",
        templateUrl: "app/components/common/content.html"
      })

      .state('login.home', {
        url: "/home",
        templateUrl: "app/login/login_two_columns.html",
        data: {
          pageTitle: 'login view'
        }
      })
      .state('login.forgot', {
        url: "/forgot",
        templateUrl: "app/login/forgot.html",
        data: {
          pageTitle: 'forgot view'
        }
           })

      .state('login.register', {
        url: "/register",
        templateUrl: "app/login/register.html",
        data: {
          pageTitle: 'forgot view'
        }
        
      })
        
        .state('pie', {
          abstract: true,
          url: "/pie",
          templateUrl: "app/components/common/content.html"
        })
        .state('pie.main', {
          url: "/pie_main",
          templateUrl: "app/pie/pie.html",
          data: { pageTitle: 'Example view' }
        })
        .state('infoQ', {
          abstract: true,
          url: "/infoQ",
          templateUrl: "app/components/common/content.html"
        })
        .state('infoQ.main', {
          url: "/infoQ_main",
          templateUrl: "app/infoQ/info.html",
          data: { pageTitle: 'Example view' }
        })
        .state('investment', {
          abstract: true,
          url: "/investment",
          templateUrl: "app/components/common/content.html"
        })
        .state('investment.main', {
          url: "/investment.main",
          templateUrl: "app/investment/moduleList.html",
          data: { pageTitle: 'list of modules' }
        })
        .state('portfolioList', {
          abstract: true,
          url: "/moduleList",
          templateUrl: "app/components/common/content.html"
        })
        .state('portfolioList.main', {
          url: "/portfolioList.main",
          templateUrl: "app/portfolioList/portfolio.html",
          data: { pageTitle: 'list of modules' }
        })
        .state('income', {
          abstract: true,
          url: "/income",
          templateUrl: "app/components/common/content.html"
        })
        .state('income.main', {
          url: "/income.main",
          templateUrl: "app/income/income.html",
          data: { pageTitle: 'income' }
        })
        .state('expenses', {
          abstract: true,
          url: "/expenses",
          templateUrl: "app/components/common/content.html"
        })
        .state('expenses.main', {
          url: "/expenses.main",
          templateUrl: "app/expenses/expenses.html",
          data: { pageTitle: 'income' }
        })
        .state('retirement', {
          abstract: true,
          url: "/retirement",
          templateUrl: "app/components/common/content.html"
        })
        .state('retirement.home', {
          url: "/retirement.home",
          templateUrl: "app/retirement/retirement1.html",
          data: { pageTitle: 'gna die soon' }
        })
        .state('retirement.retirement2', {
                  url: "/retirement2",
                  templateUrl: "app/retirement/retirement2.html",
                  data: { pageTitle: 'how much time do you have' },
                  access: { requiredLogin: true }
                })
                .state('retirement.retirement1', {
                          url: "/retirement3",
                          templateUrl: "app/retirement/retirement3.html",
                          data: { pageTitle: 'deets' },
                          access: { requiredLogin: true }
                        })
      ;

    $urlRouterProvider.otherwise('/login/home');
  }

})();
