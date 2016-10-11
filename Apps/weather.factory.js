(function() {
    'use strict';

    angular
        .module('app')
        .factory('WeatherFactory', WeatherFactory);

    WeatherFactory.$inject = ['$http', '$q'];

    /* @ngInject */
    function WeatherFactory($http, $q){
        var service = {
            getWeather: getWeather
        };
        return service;
        ////////////////
        function getWeather(city) {

             return $http({
                    method: 'GET',
                 url: 'http://api.openweathermap.org/data/2.5/weather',
                 params:{
                 APPID:'ea454058d7eb1b66b679a02fd33c6dc6',
                 
                 q: city }

                }).then(
                function(data){
                    return data;
                },
                function(err){
                    return console.log('error');
                }
                )
                

};    
}       
})();