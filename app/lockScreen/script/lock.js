import bg1 from 'globalPath/img/bg/1.jpg'
import bg2 from 'globalPath/img/bg/2.jpg'
import bg3 from 'globalPath/img/bg/3.jpg'
import bg4 from 'globalPath/img/bg/4.jpg'
var Lock = function () {

    return {
        //main function to initiate the module
        init: function () {

            $.backstretch([
                bg1, bg2, bg3, bg4
            ], {
                fade: 1000,
                duration: 8000
            });
        }

    };

}();

jQuery(document).ready(function () {
    Lock.init();
});