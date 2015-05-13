(function() {
    'use strict';

    angular
        .module('app.deals')
        .run(appRun)

    function appRun(routehelper) {
        routehelper.setStates([
            {
                state: 'deals',
                config: {
                    resolve: {
                        localDeals: function(dataservice) {
                            return dataservice.getLocalDeals();
                        }
                    },
                    url: '/deals',
                    templateUrl: 'app/deals/deals.html',
                    controller: 'Deals',
                    controllerAs: 'vm',
                    title: 'Deals',
                    data: {
                    }              
                }
            }
        ]); 
    }

})();
