window.addEvent('domready', function () {
  
  function changeUrl(e) {
    document.location.href = e.target.value;
  }
  
  $('host_list').addEvent('change', changeUrl);
  $('profile_list').addEvent('change', changeUrl);
});