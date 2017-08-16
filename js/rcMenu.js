;(function(window,document,undefined) {
	function RcMenu() {
		var menu = document.getElementById("menu");	//菜单
		this.menu = menu;
	}
	RcMenu.prototype = {
		posAdjust: function(event) { //菜单栏位置调整
			var left = event.clientX;
			var top = event.clientY;
			this.menu.style.left = left + "px";
			this.menu.style.top = top +"px";
		},
		showAdjust: function() { //菜单栏显示隐藏
			if(this.menu.style.display == "block") {
				this.menu.style.display = "none";
			}
			else {
				this.menu.style.display = "block";
			}
		},
		start: function() {
			var me = this;
			document.addEventListener("contextmenu",function(event) {
				event.preventDefault();
				if(event.button == 2) {
					me.showAdjust();
				}
				me.posAdjust(event);
				
			})
			document.addEventListener("click",function(event) {
				me.showAdjust();
			})
			this.menu.addEventListener("click",function(event) {
				if(event.target&&event.target.nodeName.toUpperCase()=="A"){/*判断目标事件是否为A*/
					if(event.toElement.getAttribute("name") == 0) {
						confirm("确定要删除吗?");
						me.showAdjust();
					}
					event.stopPropagation();
			    }
			})	
		}
	}
	window.RcMenu = RcMenu;
	
}(window,document,undefined))
var menu = new RcMenu();
menu.start();
