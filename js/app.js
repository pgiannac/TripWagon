
jQuery(init); // Same as: jQuery( document ).ready( init )

// My app logic goes here:
function init() {
    let options = {
        url: "data.json",
        success: jsonHandler
    }

    function jsonHandler(data) {
        // console.log(data);
        let entries = data[1].entries;
        console.log(data); //Array [{hotel} x 4]

        let cities = entries.map( getCity );
        console.log(cities);

        function getCity( hotel ){
            return hotel.city;
        }

        function removeDups(names){
            let uniqueNames = {};
            names.forEach(function(i))({
                if(!uniqueNames[i]) { uniqueNames[i] = true; }
            });
            return Object.keys(uniqueNames);
        }
        // document.createElement( TAG )
        // ELEMENT.innerHTML
        // ELEMENT.appendChild
        // 'TEXT and dynamic ${values} from JS ${5+5}'
    }
    $.ajax(options);
}

// Alternative, no global vars at all:
// jQuery(function init(){ ... });
