(function($) {

    var $window = $(window),
        $body = $('body');

        $window.on('load', function() {
            console.log("test")
            window.setTimeout(function() {
                $body.removeClass('is-preload');
            }, 100);
        });

    var toggler = document.getElementsByClassName("caret");
    var i;

    for (i = 0; i < toggler.length; i++) {
      toggler[i].addEventListener("click", function() {
        this.parentElement.querySelector(".nested").classList.toggle("active");
        this.classList.toggle("caret-down");
      });
    }


})(jQuery);
