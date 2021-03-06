﻿/*
 * Copyright (C) 2016 VSCT
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

angular.module('Home')

    .factory('CustomerService',
        ['$http', '$cookieStore', '$rootScope', '$timeout',
            function ($http, $cookieStore, $rootScope, $timeout) {
                var service = {};

                service.findMe = function (callback) {

                    $http.get('https://api.voyages-sncf.com/customers/me')
                        .success(function (response) {
                            response.success = true;
                            callback(response);
                        })
                        .error(function (response) {
                            response.success = false;
                            response.message = "Impossible de récupérer le client connecté";
                            callback(response);
                        });

                };

                return service;
            }]);