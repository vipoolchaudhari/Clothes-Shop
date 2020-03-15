/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  function openFilter(){
      document.querySelector('.filter-wrapper').style.display ="block";
  }

  function closeFilter(){
    document.querySelector('.filter-wrapper').style.display ="none";
}