(function() {

    //  'use strict';

    angular
        .module('app')
        .controller('WeatherCtrl', WeatherCtrl);

    WeatherCtrl.$inject = ['WeatherFactory'];

    /* @ngInject */
    function WeatherCtrl(WeatherFactory) {
    
        var vm = this;
        vm.myName = 'varun';   
        vm.title = 'WeatherCtrl';
        vm.searchHistory = [];
        vm.getWeather = getWeather;

         function getWeather(cityName) {
            WeatherFactory.getWeather(cityName).then(
                
                function(data) {
                    vm.weatherInformation = data;

                    vm.searchHistory.push({
                        name: data.data.name,
                        timestamp:new Date()
                    })
                    

                },
                function(error) {
                    console.log('failed to get weatherAPI')               
                     });


    }

}
})();