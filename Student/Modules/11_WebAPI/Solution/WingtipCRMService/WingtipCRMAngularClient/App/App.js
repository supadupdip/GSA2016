﻿'use strict';

(function(){

  var crmApp = angular.module("AngularCRM", ['ngRoute']);

  crmApp.config(['$routeProvider', initializeApp]);

  function initializeApp($routeProvider) {

    // config app's route map
    $routeProvider
      .when("/",
           { templateUrl: 'views/home.html', controller: "homeController" })
      .when("/view/:id",
           { templateUrl: 'views/view.html', controller: "viewController" })
      .when("/edit/:id",
           { templateUrl: 'views/edit.html', controller: "editController" })
      .when("/new",
           { templateUrl: 'views/new.html', controller: "newController" })
      .when("/about",
           { templateUrl: 'views/about.html', controller: "aboutController" })
      .otherwise({ redirectTo: "/" });

  }

})();