'use strict';
var ractive = new Ractive({
  el:'#app',      
  template:'#template',
  oninit: function(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var obj = JSON.parse(this.responseText);
        ractive.set('obj',obj);
        var barValue = [];
          for (var i=0; i<obj.bars.length; ++i) {
          barValue[i] = obj.bars[i];
      }
      ractive.set('barValue', barValue);
      }
    };
    xhttp.open("GET", "https://pb-api.herokuapp.com/bars", true);
    xhttp.send();
  },
  addVal:function(val){
    var barValue = ractive.get('barValue');       
    var selectedBar = ractive.get('progressBarSelect');
    if(barValue[selectedBar]<0){
      barValue[selectedBar] = 0 + val;
    }else{
      barValue[selectedBar] = barValue[selectedBar] + val;  
    }
    ractive.set('barValue',barValue);

  },
  data:{
    obj : [],
    barValue : [],
    selectedbar:null,
    allBars:null,
    newVal:null,
    progressBarSelect:0
  }
});