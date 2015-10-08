define(['jquery','scrollto'],function($,scrollto){
	function Toolbar(cfg){
		this.cfg = $.extend({},Toolbar.cfg,cfg);
		this.renderUI(this.cfg);
		this.backtop = $('#backTop');
		//实例化ScrollTo类
		this.scrollto = new scrollto.ScrollTo({dest:this.cfg.dest});
		//初始时检查backtop的显隐
		this._checkPosition();
		if(this.cfg.mod === 'move'){
			//$.proxy将this指向由事件监听元素改为Toolbar实例
			this.backtop.on('click', $.proxy(this._move,this));
		}else{
			this.backtop.on('click', $.proxy(this._go,this));
		}
		//滚动时检查backtop显隐
		$(window).on('scroll',$.proxy(this._checkPosition,this));
	}
	Toolbar.cfg = {
		mod:'move',
		pos:$(window).height(),
		speed:500,
		right:0,
		bottom:5,
		container:''
	};
	Toolbar.prototype={
		renderUI:function(cfg){
			var siderbarDOM = '';
			this.siderbar = $('<div class="toolbar">');
			siderbarDOM = '<a href="javascript:" class="toolbar-item">'+
						'<span class="toolbar-btn">'+
							'<i class="toolbar-icon icon-cart"></i>'+
							'<span class="toolbar-text wrap">我的收藏</span>'+
						'</span>'+
						'<span class="toolbar-layer toolbar-layer-cart"></span>'+
					'</a>'+
					'<a href="javascript:" class="toolbar-item">'+
						'<span class="toolbar-btn">'+
							'<i class="toolbar-icon icon-coin-yen"></i>'+
							'<span class="toolbar-text">我的资产</span>'+
						'</span>'+
					'</a>'+
					'<a href="javascript:" class="toolbar-item">'+
						'<span class="toolbar-btn">'+
							'<i class="toolbar-icon icon-mobile2"></i>'+
							'<span class="toolbar-text">APP下载</span>'+
						'</span>'+
						'<span class="toolbar-layer toolbar-layer-app"></span>'+
					'</a>'+
					'<a href="javascript:" class="toolbar-item">'+
						'<span class="toolbar-btn">'+
							'<i class="toolbar-icon icon-user"></i>'+
							'<span class="toolbar-text">联系客服</span>'+
						'</span>'+
						'<span class="toolbar-layer toolbar-layer-app"></span>'+
					'</a>'+
					'<a href="javascript:" class="toolbar-item">'+
						'<span class="toolbar-btn" id="backTop">'+
							'<i class="toolbar-icon icon-eject"></i>'+
							'<span class="toolbar-text">返回顶部</span>'+
						'</span>'+
					'</a>'
			this.siderbar.html(siderbarDOM);
			this.siderbar.css({width:cfg.width,height:cfg.height,right:cfg.right,bottom:cfg.bottom});
			$(cfg.container||document.body).append(this.siderbar);	
		},
		_move:function(){
			this.scrollto.move();
		},
		_go:function(){
			this.scrollto.go();
		},
		_checkPosition:function(){
			if($(window).scrollTop() > this.cfg.pos){
				this.backtop.parent().fadeIn();
			}else{
				this.backtop.parent().fadeOut();
			}
		}
	}
	return{Toolbar:Toolbar}
})