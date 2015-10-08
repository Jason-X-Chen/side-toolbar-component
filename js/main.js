require.config({
	paths:{
		jquery:'jquery-2.1.1.min',
	}
});

require(['jquery','toolbar'],function($,toolbar){
	new toolbar.Toolbar({pos:300,dest:100,speed:1000});
})