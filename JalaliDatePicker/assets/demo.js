setTimeout(function(){
  document.getElementsByTagName("input")[0].focus();
  jalaliDatepicker.hide();
  jalaliDatepicker.show(document.getElementsByTagName("input")[0]);
}, 1000);
