
jQuery(init); // Same as: jQuery( document ).ready( init )

// Our app logic goes here:
function init( $ ){
    console.log("Ready");
}

// Alternative, no global vars at all:
// jQuery(function init(){ ... });