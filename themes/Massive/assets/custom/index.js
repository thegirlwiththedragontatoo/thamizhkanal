(function($) {

    var $window = $(window),
        $body = $('body');

        $window.on('load', function() {
            console.log("test")
            window.setTimeout(function() {
                $body.removeClass('is-preload');
            }, 100);
        });
    //----Toggle caret
    var toggler = document.getElementsByClassName("caret");
    var i;

    for (i = 0; i < toggler.length; i++) {
      toggler[i].addEventListener("click", function() {
        this.parentElement.querySelector(".nested").classList.toggle("active");
        this.classList.toggle("caret-down");
      });
    }

    //----Pagination
    var pageTotal = document.getElementById('page-total').innerHTML;
    //Grab the current page value
    var pageCurrent = document.getElementById('page-current').innerHTML;
    //Grab the pagination span element
    var nav = document.getElementById('pagination-list');

    let page_base_url =  window.location.href.includes("page")? window.location.href.split("page")[0] : window.location.href;

    //For each number, from 1 to the total number of pages, add in the page number and a link to the page
    for (i = 1; i <= pageTotal; i++) {
        // If you are on the current page, bold the nubmer and do not link
        if (i == pageCurrent) {
                nav.innerHTML = nav.innerHTML + "<strong>" + i + "</strong>" + "&nbsp";
        } else {
            // Otherwise, add a link to the page
            // This is where all the customization can go, space between each link, commas, etc. &nbsp
                nav.innerHTML = nav.innerHTML + "<a href="+ page_base_url +"/page/" + i + ">" + i + "</a>" + "&nbsp;";
        }
        nav.innerHTML = nav.innerHTML + '&nbsp';
    }


})(jQuery);
