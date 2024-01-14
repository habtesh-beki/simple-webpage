
 document.addEventListener('scroll', function() {
  
    var scrollPosition = window.scrollY;

    
    document.getElementById('circle1').style.backgroundColor = scrollPosition < 500 ? 'red' : 'transparent';
    document.getElementById('circle2').style.backgroundColor = scrollPosition >= 500 && scrollPosition < 800 ? 'red' : 'transparent';
    document.getElementById('circle3').style.backgroundColor = scrollPosition >= 800 ? 'red' : 'transparent';
  });