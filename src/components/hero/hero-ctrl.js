(function () {
    app.controller('HeroCtrl', ['$scope', function ($scope) {

        //$scope.slide = [{
        //    "copy": "hub hotels are connected to the heart of the city",
        //    "image" : "https://unsplash.imgix.net/photo-1415829994762-1344c5d2dbe9?fit=crop&fm=jpg&h=1575&q=75&w=1050"
        //    },
        //    {
        //        "copy": "Use our hub App to enhance your stay",
        //        "image" : "https://files.slack.com/files-pri/T04HVLGHX-F052RJX9T/app_homepage_weboptimized.jpg"
        //    },
        //    {
        //        "copy": "Compact, cosy rooms",
        //        "image" : "https://download.unsplash.com/photo-1422433555807-2559a27433bd"
        //    }];





        $(function () {
            $('.img-fade:gt(0)').hide();
            setInterval(function () {
                    $('.img-fade:first-child').fadeOut()
                        .next('.img-fade').fadeIn()
                        .end().appendTo('.hub-hero-img');
                },
                5000);
        });

        $(function () {
            $('.tag:gt(0)').hide();
            setInterval(function () {
                    $('.tag:first-child').fadeOut()
                        .next('.tag').fadeIn()
                        .end().appendTo('.hub-hero-txt');
                },
                5000);
        });


    }]);
}());
