$(document).ready(function () {
    const makeNavLinksSmooth = ( ) => {
    const navLinks = document.querySelectorAll( '.navbar-item' );
  
    for ( let n in navLinks ) {
      if ( navLinks.hasOwnProperty( n ) ) {
        navLinks[ n ].addEventListener( 'click', e => {
          e.preventDefault( );
          document.querySelector( navLinks[ n ].hash )
            .scrollIntoView( {
              behavior: "smooth"
            } );
        } );
      }
    }
  }
  
  const spyScrolling = ( ) => {
    const sections = document.querySelectorAll( '.section' );
  
    window.onscroll = ( ) => {
      const scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
  
      for ( let s in sections )
        if ( sections.hasOwnProperty( s ) && sections[ s ].offsetTop <= scrollPos ) {
          const id = sections[ s ].id;
          document.querySelector( '.current-page-item' ).classList.remove( 'current-page-item' );
          document.querySelector( `a[href*=${ id }]` ).parentNode.classList.add( 'current-page-item' );
        }
    } 
  }


  makeNavLinksSmooth( );
  spyScrolling( );
});
