(function() {
    'use strict';

    angular
        .module('app.deals')
        .controller('Deals', Deals);
        

    function Deals(localDeals) {
        var vm = this;
        activate();

        function activate() {
            console.log(localDeals);
            vm.localDeals = localDeals;

            var deal = vm.localDeals[0];
            console.log(deal.image_url.substr(0, deal.image_url.indexOf('images') + 7) + 'small' + deal.image_url.substr(deal.image_url.indexOf('images') + 6));
        }

    }
})();
