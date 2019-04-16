
jQuery(init); // Same as: jQuery( document ).ready( init )

// My app logic goes here:
function init( $ ){

    let options = {
        url: "../data.json",
        success: jsonHandler
    }

    function removeDups(names) {
        let unique = {};
        names.forEach(function(i) {
          if(!unique[i]) { unique[i] = true; }
        });
        return Object.keys(unique);
    }

    function createOptions( listOfCities ){

        let datalist = document.querySelector( "#cities-list" );
        listOfCities.map( addOption );

        function addOption( city ){
            datalist.innerHTML += `<option value="${ city }"></option>`;
        }

    }

    function jsonHandler( data ){

        function getCity( hotel ){ 
            return hotel.city;
        }

        let entries = data[1].entries;
        let cities = entries.map( getCity ); 
        let uniqueCities = removeDups( cities ); 
        uniqueCities.sort();
        createOptions( uniqueCities );

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

// $(function () {
//     $('#datetimepicker6').datetimepicker();
//     $('#datetimepicker7').datetimepicker({
//         useCurrent: false //Important! See issue #1075
//     });
//     $("#datetimepicker6").on("dp.change", function (e) {
//         $('#datetimepicker7').data("DateTimePicker").minDate(e.date);
//     });
//     $("#datetimepicker7").on("dp.change", function (e) {
//         $('#datetimepicker6').data("DateTimePicker").maxDate(e.date);
//     });
// });
