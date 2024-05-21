/* section home Start */
document.addEventListener( 'load', closeNav() );

function openNav ()
{
  document.getElementById( "mySidenav" ).style.width = "250px";
  document.getElementById( "home_open" ).style.marginLeft = "250px";
}

function closeNav ()
{
  document.getElementById( "mySidenav" ).style.width = "0";
  document.getElementById( "home_open" ).style.marginLeft = "0";
}


$( "a" ).click( function ()
{

  var section = $( this ).attr( "href" );
  $( "body" ).animate( { screenTop: section }, 2000 );

} );

/* section home End */

/* section accordion start */
$( '.accordion .accordion-header' ).click( function ()
{
  console.log( $( this ) );
  $( this ).next().slideToggle( 500 );
  $( ".accordion .accordion-body" ).not( $( this ).next() ).slideUp( 500 );
} );
/* section accordion end */

/* section counter start */
var countDown = setInterval( function()
{
  var eventDate = new Date( 2030, 2, 19 ).getTime();// date for event any time date
  console.log( 'eventDate ' + eventDate );

  var currentTime = new Date().getTime(); // Get today's date and time
  console.log( 'currentTiime ' + currentTime );

  var distance = eventDate - currentTime;

  console.log( 'distance ' + distance );

  var days = Math.floor( distance / ( 1000 * 60 * 60 * 24 ) );

  var hours = Math.floor(
    ( distance % ( 1000 * 60 * 60 * 24 ) )
    / ( 1000 * 60 * 60 )
  );

  var minutes = Math.floor( ( distance % ( 1000 * 60 * 60 ) ) / ( 1000 * 60 ) );

  var seconds = Math.floor( ( distance % ( 1000 * 60 ) ) / 1000 );

  document.getElementById( "days" ).innerHTML =` <h3> ${days} D</h3>`;
  document.getElementById( "hours" ).innerHTML = ` <h3> ${ hours } H</h3>`;
  document.getElementById( "minutes" ).innerHTML = ` <h3> ${ minutes } M</h3>`;
  document.getElementById( "seconds" ).innerHTML = ` <h3> ${ seconds } S</h3>`;
  //If the count down is finished, write some text
  if ( distance < 0 )
  {
    document.getElementById( "end" ).innerHTML = `<section class="col-12 text-center h1">EXPIRED</section>`;
  }
}, 1000 );

//function countdown ();
// {
//     var eventDate = new Date( 2030, 2, 19 ).getTime();// date for event any time date
//     console.log( 'eventDate ' + eventDate );

//     var currentTime = new Date().getTime(); // Get today's date and time
//     console.log( 'currentTiime ' + currentTime );

//     var distance = eventDate - currentTime;
//     console.log( 'distance ' + distance );

//     var days = Math.floor( distance / ( 1000 * 60 * 60 * 24 ) );

//     var hours = Math.floor(
//       ( distance % ( 1000 * 60 * 60 * 24 ) )
//       / ( 1000 * 60 * 60 )
//     );

//     var minutes = Math.floor( ( distance % ( 1000 * 60 * 60 ) ) / ( 1000 * 60 ) );

//     var seconds = Math.floor( ( distance % ( 1000 * 60 ) ) / 1000 );

//     document.getElementById( "days" ).innerHTML =` <h3> ${days} D</h3>`;

//     document.getElementById( "hours" ).innerHTML = ` <h3> ${ hours } H</h3>`;
//     document.getElementById( "minutes" ).innerHTML = ` <h3> ${ minutes } M</h3>`;
//     document.getElementById( "seconds" ).innerHTML = ` <h3> ${ seconds } S</h3>`;
//     // If the count down is finished, write some text
//     if ( distance < 0 )
//     {
//       document.getElementById( "end" ).innerHTML = `<section class="col-12 text-center h1">EXPIRED</section>`;
//     }

//   setTimeout( countdown, 1000 );
// }
// countdown();

/* section counter start */

/* section contact us start */
$( "textarea" ).keyup( function ()
{
  var length = $( this ).val().length;
  console.log( length );
  var character = 100 - length;
  console.log( character );
  if ( character <= 0 )
  {
    $( "#char" ).text( "your available character finished" );
    return true;
  }
  else
  {

    $( "#char" ).text( character );
  }
} );
/* section contact us end */

// 