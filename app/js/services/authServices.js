'use strict';

app.factory('authService',
  function ($http, baseServiceUrl) {
      return {
          login: function(userData, success, error) {
              var request = {
                  method: 'POST',
                  url: baseServiceUrl + '/api/user/login',
                  data: userData
              };
              $http(request).success(function(data) {
                  sessionStorage['currentUser'] = JSON.stringify(data);
                  success(data);
              }).error(error);
          },

          register: function(userData, success, error) {
              var request = {
                  method: 'POST',
                  url: baseServiceUrl + '/api/user/register',
                  data: userData
              };
              $http(request).success(function(data) {
                  sessionStorage['currentUser'] = JSON.stringify(data);
                  success(data);
              }).error(error);
          },

          // TODO: implement “register” function (just like the login)

          logout: function() {
              delete sessionStorage['currentUser'];
          },

          getCurrentUser : function() {
              var userObject = sessionStorage['currentUser'];
              if (userObject) {
                  return JSON.parse(sessionStorage['currentUser']);
              }
          },

          isAnonymous : function() {
              return sessionStorage['currentUser'] == undefined;
          },

          isLoggedIn : function() {
              return sessionStorage['currentUser'] != undefined;
              // TODO: implement this (similar to isAnonymous())
          },

          isNormalUser : function() {
              var currentUser = this.getCurrentUser();
              return (currentUser != undefined) && (!currentUser.isAdmin);
          },

          isAdmin : function() {
              var currentUser = this.getCurrentUser();
              return (currentUser != undefined) && (currentUser.isAdmin);
              // TODO: implement this (similar to isNormalUser())
          },

          getAuthHeaders : function() {
              var headers = {};
              var currentUser = this.getCurrentUser();
              if (currentUser) {
                  headers['Authorization'] = 'Bearer ' + currentUser.access_token;
              }
              return headers;
          }
      }
  }
);
