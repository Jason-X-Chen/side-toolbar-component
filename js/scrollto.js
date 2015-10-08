define(['jquery'],function($){
	function ScrollTo(cfg){
		this.cfg = $.extend({}, ScrollTo.cfg, cfg);	
		//大多数浏览器，滚动条属性位于html,chrome位于body上
		this.$elm = $('html,body');	
	}
	ScrollTo.cfg = {
		dest:0,
		speed:800
	};
	ScrollTo.prototype={
		move:function(){
			//避免反复执行动画
			if($(window).scrollTop()!==this.cfg.dest && !this.$elm.is(':animated')){
				this.$elm.animate({scrollTop:this.cfg.dest},
					this.cfg.speed);	
			}
		},
		go:function(){
			if($(window).scrollTop()!==this.cfg.dest){
				this.$elm.scrollTop(this.cfg.dest);
			}
		}
	}
	return{ScrollTo:ScrollTo}
})