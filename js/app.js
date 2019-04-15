
jQuery(init); // Same as: jQuery( document ).ready( init )

// My app logic goes here:
function init($) {

    let options = {
        url: "../data.json",
        success: jsonHandler
    }

    function jsonHandler(data) {

        let entries = data[1].entries;
        // console.log( entries ); 
        let cities = entries.map(getCity); // Array[ { HOTEL } x 4 ]

        function getCity(hotel) { // 4 times: 1 { ... }, 2 { ... }, 3 { ... }, 4 { ... }
            return hotel.city;
        }

        function removeDups(names) {
            let unique = {
                Paris: true,
                Marseille: true,
                Toulouse: true,
            };
            names.forEach(function (i) {
                if (!unique[i]) { unique[i] = true; }
            });
            return Object.keys(unique);
        }

        let uniqueCities = removeDups(cities);

        console.log(uniqueCities);

    }
    // document.createElement( TAG )
    // ELEMENT.innerHTML
    // ELEMENT.appendChild
    // 'TEXT and dynamic ${values} from JS ${5+5}'
$.ajax(options);
}

// Alternative, no global vars at all:
// jQuery(function init(){ ... });

// dates js

$(function () {
    $('#datetimepicker6').datetimepicker();
    $('#datetimepicker7').datetimepicker({
        useCurrent: false //Important! See issue #1075
    });
    $("#datetimepicker6").on("dp.change", function (e) {
        $('#datetimepicker7').data("DateTimePicker").minDate(e.date);
    });
    $("#datetimepicker7").on("dp.change", function (e) {
        $('#datetimepicker6').data("DateTimePicker").maxDate(e.date);
    });
});
