window.skins={};
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","nameScene":"resource/Scene/nameScene.exml","game1Scene":"resource/Scene/game1Scene.exml","game2Scene":"resource/Scene/game2Scene.exml","game3Scene":"resource/Scene/game3Scene.exml","resultScene":"resource/Scene/resultScene.exml"};generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/Scene/game1Scene.exml'] = window.game1SceneSkin = (function (_super) {
	__extends(game1SceneSkin, _super);
	function game1SceneSkin() {
		_super.call(this);
		this.skinParts = ["button_right","button_wrong","image_playBG"];
		
		this.height = 1134;
		this.width = 720;
		this.elementsContent = [this._Image1_i(),this._Label1_i(),this.button_right_i(),this.button_wrong_i(),this.image_playBG_i()];
	}
	var _proto = game1SceneSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 1134;
		t.source = "2image_jpeg";
		t.width = 720;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 50;
		t.text = "狮子通常住在哪里？";
		t.textColor = 0x210d0d;
		t.verticalCenter = -305;
		t.x = 135;
		return t;
	};
	_proto.button_right_i = function () {
		var t = new eui.Button();
		this.button_right = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 36;
		t.label = "地面上";
		t.width = 242;
		t.x = 239;
		t.y = 310;
		return t;
	};
	_proto.button_wrong_i = function () {
		var t = new eui.Button();
		this.button_wrong = t;
		t.height = 36;
		t.label = "大海里";
		t.width = 242;
		t.x = 239;
		t.y = 363;
		return t;
	};
	_proto.image_playBG_i = function () {
		var t = new eui.Image();
		this.image_playBG = t;
		t.height = 62;
		t.source = "playbg_jpg";
		t.width = 68;
		t.x = 102;
		t.y = 37;
		return t;
	};
	return game1SceneSkin;
})(eui.Skin);generateEUI.paths['resource/Scene/game2Scene.exml'] = window.game2SceneSkin = (function (_super) {
	__extends(game2SceneSkin, _super);
	function game2SceneSkin() {
		_super.call(this);
		this.skinParts = ["button_wrong1","button_right","button_wrong2","image_playBG"];
		
		this.height = 1134;
		this.width = 720;
		this.elementsContent = [this._Image1_i(),this._Label1_i(),this.button_wrong1_i(),this.button_right_i(),this.button_wrong2_i(),this.image_playBG_i()];
	}
	var _proto = game2SceneSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 1134;
		t.source = "3image_jpg";
		t.width = 720;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.size = 50;
		t.text = "小猪佩奇有几个兄弟姐妹？";
		t.textColor = 0x350c0c;
		t.width = 608;
		t.x = 56;
		t.y = 402;
		return t;
	};
	_proto.button_wrong1_i = function () {
		var t = new eui.Button();
		this.button_wrong1 = t;
		t.anchorOffsetX = 0;
		t.height = 36;
		t.label = "0个";
		t.width = 242;
		t.x = 239;
		t.y = 496;
		return t;
	};
	_proto.button_right_i = function () {
		var t = new eui.Button();
		this.button_right = t;
		t.height = 36;
		t.label = "1个";
		t.width = 242;
		t.x = 239;
		t.y = 556;
		return t;
	};
	_proto.button_wrong2_i = function () {
		var t = new eui.Button();
		this.button_wrong2 = t;
		t.height = 36;
		t.label = "2个";
		t.width = 242;
		t.x = 239;
		t.y = 616;
		return t;
	};
	_proto.image_playBG_i = function () {
		var t = new eui.Image();
		this.image_playBG = t;
		t.height = 62;
		t.source = "playbg_jpg";
		t.width = 68;
		t.x = 102;
		t.y = 37;
		return t;
	};
	return game2SceneSkin;
})(eui.Skin);generateEUI.paths['resource/Scene/game3Scene.exml'] = window.game3SceneSkin = (function (_super) {
	__extends(game3SceneSkin, _super);
	function game3SceneSkin() {
		_super.call(this);
		this.skinParts = ["button_right","button_wrong","image_playBG"];
		
		this.height = 1134;
		this.width = 720;
		this.elementsContent = [this._Image1_i(),this._Label1_i(),this.button_right_i(),this.button_wrong_i(),this.image_playBG_i()];
	}
	var _proto = game3SceneSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 1134;
		t.source = "4image_jpg";
		t.width = 720;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 50;
		t.size = 50;
		t.text = "青蛙是怎样叫的？";
		t.textAlign = "center";
		t.textColor = 0x381313;
		t.width = 418;
		t.x = 151;
		t.y = 411;
		return t;
	};
	_proto.button_right_i = function () {
		var t = new eui.Button();
		this.button_right = t;
		t.height = 36;
		t.label = "呱呱呱";
		t.width = 242;
		t.x = 239;
		t.y = 498;
		return t;
	};
	_proto.button_wrong_i = function () {
		var t = new eui.Button();
		this.button_wrong = t;
		t.height = 36;
		t.label = "哞哞哞";
		t.width = 242;
		t.x = 239;
		t.y = 549;
		return t;
	};
	_proto.image_playBG_i = function () {
		var t = new eui.Image();
		this.image_playBG = t;
		t.height = 62;
		t.source = "playbg_jpg";
		t.width = 68;
		t.x = 102;
		t.y = 37;
		return t;
	};
	return game3SceneSkin;
})(eui.Skin);generateEUI.paths['resource/Scene/nameScene.exml'] = window.nameSceneSkin = (function (_super) {
	__extends(nameSceneSkin, _super);
	var nameSceneSkin$Skin1 = 	(function (_super) {
		__extends(nameSceneSkin$Skin1, _super);
		function nameSceneSkin$Skin1() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = nameSceneSkin$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "startPlayButton_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return nameSceneSkin$Skin1;
	})(eui.Skin);

	function nameSceneSkin() {
		_super.call(this);
		this.skinParts = ["star1","star2","text_name","start_button","image_playBG"];
		
		this.height = 1134;
		this.width = 720;
		this.elementsContent = [this._Image1_i(),this.star1_i(),this.star2_i(),this._Label1_i(),this.text_name_i(),this.start_button_i(),this._Label2_i(),this.image_playBG_i()];
	}
	var _proto = nameSceneSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 1134;
		t.source = "chunhei_jpg";
		t.width = 720;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.star1_i = function () {
		var t = new eui.Image();
		this.star1 = t;
		t.height = 1134;
		t.source = "star1_png";
		t.width = 720;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.star2_i = function () {
		var t = new eui.Image();
		this.star2 = t;
		t.height = 1134;
		t.source = "star2_png";
		t.width = 721;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.text = "请输入昵称";
		t.textAlign = "center";
		t.width = 187;
		t.x = 258;
		t.y = 174;
		return t;
	};
	_proto.text_name_i = function () {
		var t = new eui.TextInput();
		this.text_name = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.enabled = true;
		t.height = 34;
		t.width = 268;
		t.x = 217.5;
		t.y = 223;
		return t;
	};
	_proto.start_button_i = function () {
		var t = new eui.Button();
		this.start_button = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 58.63;
		t.label = "";
		t.width = 60.08;
		t.x = 321.46;
		t.y = 274;
		t.skinName = nameSceneSkin$Skin1;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "←输入后点击";
		t.textAlign = "center";
		t.textColor = 0x5e5ed1;
		t.x = 404;
		t.y = 293.32;
		return t;
	};
	_proto.image_playBG_i = function () {
		var t = new eui.Image();
		this.image_playBG = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.source = "playbg_jpg";
		t.width = 68;
		t.x = 102;
		t.y = 37;
		return t;
	};
	return nameSceneSkin;
})(eui.Skin);generateEUI.paths['resource/Scene/resultScene.exml'] = window.resultSceneSkin = (function (_super) {
	__extends(resultSceneSkin, _super);
	function resultSceneSkin() {
		_super.call(this);
		this.skinParts = ["image_smoke","label_text","button_fenxiang","button_web","image_playBG","button_yes","group_box"];
		
		this.height = 1134;
		this.width = 720;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.image_smoke_i(),this.label_text_i(),this.button_fenxiang_i(),this.button_web_i(),this.image_playBG_i(),this.group_box_i()];
	}
	var _proto = resultSceneSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 1134;
		t.source = "5image_jpeg";
		t.width = 720;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 129.11;
		t.source = "beizi_png";
		t.width = 139.75;
		t.x = 479;
		t.y = 936;
		return t;
	};
	_proto.image_smoke_i = function () {
		var t = new eui.Image();
		this.image_smoke = t;
		t.anchorOffsetX = 142;
		t.anchorOffsetY = 163;
		t.height = 163;
		t.scale9Grid = new egret.Rectangle(10,18,116,336);
		t.source = "smoke01_png";
		t.width = 142;
		t.x = 603;
		t.y = 986;
		return t;
	};
	_proto.label_text_i = function () {
		var t = new eui.Label();
		this.label_text = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft JhengHei";
		t.left = 0;
		t.right = 0;
		t.size = 50;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0x331111;
		t.y = 403;
		return t;
	};
	_proto.button_fenxiang_i = function () {
		var t = new eui.Button();
		this.button_fenxiang = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 36;
		t.label = "分享给朋友";
		t.width = 242;
		t.x = 83;
		t.y = 500;
		return t;
	};
	_proto.button_web_i = function () {
		var t = new eui.Button();
		this.button_web = t;
		t.height = 36;
		t.label = "查看你的专属神器";
		t.width = 242;
		t.x = 395;
		t.y = 500;
		return t;
	};
	_proto.image_playBG_i = function () {
		var t = new eui.Image();
		this.image_playBG = t;
		t.height = 62;
		t.source = "playbg_jpg";
		t.width = 68;
		t.x = 102;
		t.y = 37;
		return t;
	};
	_proto.group_box_i = function () {
		var t = new eui.Group();
		this.group_box = t;
		t.anchorOffsetX = 0;
		t.height = 200;
		t.width = 299;
		t.x = 217;
		t.y = 382;
		t.elementsContent = [this._Image3_i(),this._Label1_i(),this.button_yes_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 200;
		t.source = "grey_jpg";
		t.width = 298;
		t.x = 1;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetY = 0;
		t.fontFamily = "MingLiU";
		t.height = 25;
		t.size = 25;
		t.text = "长按图片以分享";
		t.textAlign = "center";
		t.textColor = 0x3a1111;
		t.x = 62.5;
		t.y = 63;
		return t;
	};
	_proto.button_yes_i = function () {
		var t = new eui.Button();
		this.button_yes = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 34;
		t.label = "确定";
		t.width = 141;
		t.x = 72.5;
		t.y = 118;
		return t;
	};
	return resultSceneSkin;
})(eui.Skin);