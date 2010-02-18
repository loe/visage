window.addEvent('domready', function () {
  
  function changeUrl(e) {
    document.location.href = e.target.value;
  }
  
  $('host_list').onchange = changeUrl;
  $('profile_list').onchange = changeUrl;
});