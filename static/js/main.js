$(function(){
	var $win = $(window);
	var constProp = {
		scrWidth: $win.width(),
		scrHeight: $win.height()
	};
	console.log(constProp);
	$('.page').each(function(index){
		var $this = $(this);
		$(this).height(constProp['scrHeight']);
		$this.addClass('page-'+(index+1));
		$this.attr('data-page-index',index);
		if(index < 4) {
			$this.css({'background-image':'url(./static/img/page-'+(index+1)+'-bg.jpg)'});
		} else if(index == 9){
			$this.css({'background-image':'url(./static/img/page-5-bg.jpg)'});
		}

	});

	$('.maili').attr('data--300','transform:translate(0px,-50px);opacity:0');
	$('.maili').attr('data-0','transform:translate(0px,-30px);opacity:1;background-position-y:0px;');
	$('.maili').attr('data-'+constProp['scrHeight'],'transform:translate(0px,'+constProp['scrHeight']+'px);');
	$('.maili').attr('data-'+(Number(constProp['scrHeight'])+1),'background-position-y:-230px;');
	$('.maili').attr('data-'+(Number(constProp['scrHeight'])*2),'transform:translate(0px,'+(Number(constProp['scrHeight'])*2+constProp['scrHeight']*0.2)+'px);background-position-y:-230px;');
	$('.maili').attr('data-'+(Number(constProp['scrHeight'])*2+1),'transform:translate(0px,'+(Number(constProp['scrHeight'])*2+constProp['scrHeight']*0.2)+'px);background-position-y:-460px;');



	$('.motion').each(function(){
		var $this = $(this);
		var pageIndex = $this.parents('.page').attr('data-page-index');
		var eleAttrs = this.attributes;
		var attrs = [];
		for( var i = 0; i < eleAttrs.length; i++ ) {
			attrs.push({name:eleAttrs[i].name,value:eleAttrs[i].value});
		}
		console.log(attrs);

		for( var i = 0; i< attrs.length; i++) {
			var attr = attrs[i];
			var reg = /data-\d*/;
			var numReg = /\d*/;
			if( reg.test(attr.name) ) {
				var num = Number(attr.name.slice(5).match(/-?\d*/)[0]);
				var attrVal = attr.value; 
				$this.removeAttr(attr.name);
				$this.attr('data-'+(constProp['scrHeight']*pageIndex+num),attrVal);
			}
		}
	});
	var s = skrollr.init();
	$('.arrow').attr({"href":"javascript:;"}).on('click',function(){
		var $this = $(this);
		var $sk = $('#skrollr-body');
		var pageIndex = Number($this.parents('.page').attr('data-page-index'));
		var sp = constProp['scrHeight']*(pageIndex+1);
		
		console.log(sp);
	//	$sk.css({'transform':'translate(0px,'+(-constProp['scrHeight']*(pageIndex+1))+'px)'});
		s.setScrollTop(sp);
	});
});

