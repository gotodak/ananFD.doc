function ArticleDocTabs(id) {
  this.id      = id;
  this.tabs    = null;
  this.content = null;
  this.links   = null;
  
  this.initialize = function() {
    if (this.content) return true;
    var children = document.getElementById(this.id).getElementsByTagName('div');
    for (var i = 0; i < children.length; i++) {
      if (children[i].className == 'tabs') {
        this.tabs = children[i];
      } else if (children[i].className == 'content') {
        this.content = children[i];
      } else if (children[i].className == 'actionMenu') {
        this.links = children[i];
      }
    }
  }
  
  this.show = function(name) {
    this.initialize();
    
    // select tab
		if( this.tabs!=null ){
	    var tabs = this.tabs.getElementsByTagName('a');
	    for (var i = 0; i < tabs.length; i++) {
	      if (tabs[i].className.match(new RegExp('(^| )' + name + '( |$)'))) {
	        if (!tabs[i].className.match(/current/)) {
	          tabs[i].className = name + ' current';
	        }
	      } else {
	        tabs[i].className = tabs[i].className.replace(' current', '');
	      }
	    }
		}
    
    // select list
		//if( this.content!=null ){
	  //  var list = this.content.getElementsByTagName('ul');
	  //  for (var i = 0; i < list.length; i++) {
	  //    if (list[i].className == name) {
	  //      list[i].style.display = 'block';
	  //    } else {
	  //      list[i].style.display = 'none';
	  //    }
	  //  }
		//}
    
    // select list
		if( this.content!=null ){
    //var body = this.links.getElementsByTagName('div');
	    var body = this.content.getElementsByTagName('div');
	    for (var i = 0; i < body.length; i++) {
	      if (body[i].className == name) {
	        body[i].style.display = 'block';
	      } else if (body[i].className != 'feed' && body[i].className != 'more') {
	        body[i].style.display = 'none';
	      }
	    }
		}
	
    // select links
		if( this.content!=null ){
    var body = this.links.getElementsByTagName('div');
	    for (var i = 0; i < body.length; i++) {
	      if (body[i].className == name) {
	        body[i].style.display = 'block';
	      } else if (body[i].className != 'feed' && body[i].className != 'more') {
	        body[i].style.display = 'none';
	      }
	    }
		}

    
    return false;
  }
  
  this.getTab = function(name) {
  }
}
