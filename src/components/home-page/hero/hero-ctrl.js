(function () {
    app.controller('HeroCtrl', ['$scope', function ($scope) {

        $( document ).ready(function() {
            $('.tag').velocity("stop").velocity("transition.slideUpBigIn", {duration: 1000});
            $('.about').velocity("stop").velocity("transition.slideUpBigIn", {duration: 1500});
            $('.jump').velocity("stop").velocity("transition.slideUpBigIn", {duration: 2000});

        });


        // Exit intent
        function addEvent(obj, evt, fn) {
            if (obj.addEventListener) {
                obj.addEventListener(evt, fn, false);
            }
            else if (obj.attachEvent) {
                obj.attachEvent("on" + evt, fn);
            }
        }

// Exit intent trigger
        addEvent(document, 'mouseout', function(evt) {

            if (evt.toElement == null && evt.relatedTarget == null ) {
                $('.lightbox').slideDown();
            };

        });

// Closing the Popup Box
        $('a.close').click(function(){
            $('.lightbox').slideUp();
        });

    }]);
}());
