
jQuery(init); // Same as: jQuery( document ).ready( init )

// My app logic goes here:
function init( $ ){

    let options = {
        url: "../data.json",
        success: jsonHandler
    }
    let entries;

    function removeDups( names ) {
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

        entries = data[1].entries;
        let cities = entries.map( getCity ); 
        let uniqueCities = removeDups( cities ); 
        uniqueCities.sort();
        createOptions( uniqueCities );

    }

    function getHotelsFromSelected( selectedCity ){

        function filterHotels( hotel ){
            return hotel.city.toLowerCase() === selectedCity.toLowerCase().trim();
        }

        let availableHotels = entries.filter( filterHotels );

        return availableHotels;

    }

    function handleCityInput( e ){
        if ( e.keyCode === 13 ){
            let selectedCity = this.value;
            let foundHotels = getHotelsFromSelected( selectedCity );
            displaySelectedHotels( foundHotels );
        }
    }

    function displaySelectedHotels( foundHotels ){

        console.log( foundHotels ); // [ { HOTEL }, { HOTEL }, ... ]
        // 1) Loop over found hotels' list
        let hotelsSection = document.querySelector( ".hotels" );
        hotelsSection.innerHTML = "";

        foundHotels.map( displayHotel );

        function displayHotel( hotel, idx ){

            // 1.1) For very HOTEL object -> get Template -> clone -> update content -> append to .hotels
            let template = document.querySelector( "#template" );
            // console.log( template ); // HTMLElement Object
            let clone = template.cloneNode( true );
            let img = clone.querySelector( ".hotel-photo" );
            img.setAttribute( "src", hotel.thumbnail );

            clone.classList.remove( "hidden" );
            hotelsSection.appendChild( clone );

        }

    }

    // HANDLE CITY INPUT 
    let citiesInput = document.querySelector( "#cities" );
    
    citiesInput.addEventListener( "keydown", handleCityInput );


    // document.createElement( TAG )
    // ELEMENT.innerHTML
    // ELEMENT.appendChild
    // 'TEXT and dynamic ${values} from JS ${5+5}'
$.ajax(options);
}

// Alternative, no global vars at all:
// jQuery(function init(){ ... });
