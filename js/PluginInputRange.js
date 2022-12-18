function PluginInputRange(){
  this.log = false;
  this.init = function(id){
    var e = document.getElementById(id);
    /**
     * 
     */
    if(e.value.length){
      e.type='range';
    }else{
      e.type='hidden';
    }
    if(!document.getElementById(id+'_empty')){
      /**
       * 
       */
      e.addEventListener("change", function(){PluginInputRange.change(id);});
      /**
       * 
       */
      var btn_empty = document.createElement('a');
      btn_empty.innerHTML = 'Clear'
      btn_empty.id = id+'_empty';
      btn_empty.href = '#!';
      btn_empty.style.fontSize = 'smaller';
      btn_empty.addEventListener("click", function(){PluginInputRange.empty(id);});
      /**
       * 
       */
      var btn_range = document.createElement('a');
      btn_range.innerHTML = '- - Set range - -'
      btn_range.id = id+'_range';
      btn_range.href = '#!';
      btn_range.style.fontSize = 'smaller';
      btn_range.className = 'form-control';
      btn_range.addEventListener("click", function(){PluginInputRange.range(id);});
      /**
       * 
       */
      e.parentNode.insertBefore(btn_empty, e);
      e.parentNode.appendChild(btn_range);
    }
    PluginInputRange.handle_buttons(id);
  }
  this.empty = function(id){
    var e = document.getElementById(id);
    e.type = 'hidden';
    e.value = '';
    PluginInputRange.handle_buttons(id);
  }
  this.range = function(id){
    var e = document.getElementById(id);
    e.type = 'range';
    PluginInputRange.handle_buttons(id);
  }
  this.handle_buttons = function(id){
    var e = document.getElementById(id);
    document.getElementById(id+'_empty').style.display='none';
    document.getElementById(id+'_range').style.display='none';
    if(e.type=='range'){
      document.getElementById(id+'_empty').style.display='';
      PluginInputRange.set_empty_innerhtml(id);
    }else{
      document.getElementById(id+'_range').style.display='';
    }
    /**
     * 
     */
    if(this.log){
      console.log('PluginInputRange.handle_buttons.', e, e.value);
    }
  }
  this.set_empty_innerhtml = function(id){
    var e = document.getElementById(id);
    document.getElementById(id+'_empty').innerHTML = 'Clear ('+e.value+' of '+e.getAttribute('max')+')';
  }
  this.change = function(id){
    PluginInputRange.set_empty_innerhtml(id);
  }
  this.reset = function(id){
    document.getElementById(id).type='hidden';
  }
}
var PluginInputRange = new PluginInputRange();
