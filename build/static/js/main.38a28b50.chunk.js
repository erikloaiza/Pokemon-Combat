(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,_,t){"use strict";var a=t(15),s=t(16),n=t(18),r=t(17),i=t(19),c=t(0),o=t.n(c),u=(t(76),t(45)),m=t.n(u),E=function(e){function _(e){var t;return Object(a.a)(this,_),(t=Object(n.a)(this,Object(r.a)(_).call(this,e))).state={maxLife:100},t}return Object(i.a)(_,e),Object(s.a)(_,[{key:"render",value:function(){var e=this.props.desc?this.props.desc.stName:"",_=this.props.desc?this.props.desc.urlImg:"",t=this.props.desc?this.props.desc.nuDf:"",a=this.props.desc?this.props.desc.nuLife:0,s=this.state.maxLife,n=this.props.isOponent,r=this.props.desc?this.props.isBeingAttacked:"";return o.a.createElement("div",{className:"character-wrapper "+(n?"enemy":"player")},o.a.createElement("div",{className:"character"},o.a.createElement("img",{className:"avatar "+(r?"avatar-tilt":""),src:_}),o.a.createElement("img",{className:"plattform",src:m.a})),o.a.createElement("div",{className:"character-details"},o.a.createElement("div",null,o.a.createElement("h2",null,e),o.a.createElement("h3",null,"Def: ",t)),o.a.createElement("div",{className:"life"},o.a.createElement("div",{style:{width:a+"%"},className:a>50?"green":a>25?"yellow":"orange"})),o.a.createElement("span",null,a,"/",s)))}}]),_}(c.Component);_.a=E},39:function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_ErikL_Documents_Universidad_Semestre_9_Web_pokemon_combat_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(23),C_Users_ErikL_Documents_Universidad_Semestre_9_Web_pokemon_combat_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(15),C_Users_ErikL_Documents_Universidad_Semestre_9_Web_pokemon_combat_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(16),C_Users_ErikL_Documents_Universidad_Semestre_9_Web_pokemon_combat_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(18),C_Users_ErikL_Documents_Universidad_Semestre_9_Web_pokemon_combat_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(17),C_Users_ErikL_Documents_Universidad_Semestre_9_Web_pokemon_combat_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(19),react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__),http__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(40),http__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_7__),_battle_css__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(75),_battle_css__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(_battle_css__WEBPACK_IMPORTED_MODULE_8__),_assets_music_mp3__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(41),_assets_music_mp3__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(_assets_music_mp3__WEBPACK_IMPORTED_MODULE_9__),_assets_menu_item_wav__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(42),_assets_menu_item_wav__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(_assets_menu_item_wav__WEBPACK_IMPORTED_MODULE_10__),_assets_hurt_effective_wav__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(43),_assets_hurt_effective_wav__WEBPACK_IMPORTED_MODULE_11___default=__webpack_require__.n(_assets_hurt_effective_wav__WEBPACK_IMPORTED_MODULE_11__),_assets_hurt_ineffective_wav__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(44),_assets_hurt_ineffective_wav__WEBPACK_IMPORTED_MODULE_12___default=__webpack_require__.n(_assets_hurt_ineffective_wav__WEBPACK_IMPORTED_MODULE_12__),_components_Character__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(21),Battle=function(_Component){function Battle(e){var _;return Object(C_Users_ErikL_Documents_Universidad_Semestre_9_Web_pokemon_combat_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.a)(this,Battle),(_=Object(C_Users_ErikL_Documents_Universidad_Semestre_9_Web_pokemon_combat_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.a)(this,Object(C_Users_ErikL_Documents_Universidad_Semestre_9_Web_pokemon_combat_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.a)(Battle).call(this,e))).state={enemy:{},player:{},isEnemyAttacked:!1,isPlayerAttacked:!1,message:"Selecciona tu pr\xf3ximo ataque",isOnGoingAction:!1,isEndGame:!1,nameWinner:""},_}return Object(C_Users_ErikL_Documents_Universidad_Semestre_9_Web_pokemon_combat_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__.a)(Battle,_Component),Object(C_Users_ErikL_Documents_Universidad_Semestre_9_Web_pokemon_combat_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.a)(Battle,[{key:"render",value:function(){var e=this,_=this.state.enemy,t=this.state.player,a=this.state.isEnemyAttacked,s=this.state.isPlayerAttacked,n=this.state.isOnGoingAction,r=this.state.isEndGame,i=this.state.nameWinner;return(_.nuLife<=0||t.nuLife<=0)&&this.endGame(),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"battle-wrapper"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{id:"preventClicks",style:n?{display:"block"}:{display:"none"}}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{id:"endGame",style:r?{display:"flex"}:{display:"none"}},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2",null,i," ha ganado la batalla")),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("audio",{src:_assets_music_mp3__WEBPACK_IMPORTED_MODULE_9___default.a,autoPlay:!0,loop:!0,volume:"0.0"}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("audio",{src:_assets_menu_item_wav__WEBPACK_IMPORTED_MODULE_10___default.a,id:"Sound-item"}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("audio",{src:_assets_hurt_effective_wav__WEBPACK_IMPORTED_MODULE_11___default.a,id:"Sound-hurt-effective"}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("audio",{src:_assets_hurt_ineffective_wav__WEBPACK_IMPORTED_MODULE_12___default.a,id:"Sound-hurt-ineffective"}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Character__WEBPACK_IMPORTED_MODULE_13__.a,{desc:_,isOponent:!0,isBeingAttacked:a}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Character__WEBPACK_IMPORTED_MODULE_13__.a,{desc:t,isBeingAttacked:s}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"attacks-gui"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1",null,this.state.message),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"attacks"},t.arAtacks?t.arAtacks.map(function(_){return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"attack",onMouseOver:e.playMenuSound,onClick:e.attackEnemy.bind(e,_)},_.stAtckName)}):"")))}},{key:"componentDidMount",value:function componentDidMount(){var _this3=this;http__WEBPACK_IMPORTED_MODULE_7___default.a.get("http://www.mocky.io/v2/5cc7aa06320000af39b952af",function(resp){var data="";resp.on("data",function(e){data+=e}),resp.on("end",function(){var dataObjectArray=eval("("+data+")");_this3.setState({enemy:dataObjectArray[0],player:dataObjectArray[1]})})}).on("error",function(e){console.log("Error: "+e.message)})}},{key:"playMenuSound",value:function(){document.getElementById("Sound-item").play()}},{key:"playEffectiveHurtSound",value:function(){document.getElementById("Sound-hurt-effective").play()}},{key:"playInEffectiveHurtSound",value:function(){document.getElementById("Sound-hurt-ineffective").play()}},{key:"attackEnemy",value:function(e){var _=this,t=e.nuAtckPower,a=e.stAtckName,s=Object(C_Users_ErikL_Documents_Universidad_Semestre_9_Web_pokemon_combat_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__.a)({},this.state).enemy,n=s.nuDf,r=t-n>0?t-n:5;this.setState({message:this.state.player.stName+" us\xf3 "+a,isOnGoingAction:!0,isEnemyAttacked:!0}),setTimeout(function(){s.nuLife-=r,setTimeout(function(){return _.setState({isEnemyAttacked:!1})},1e3),_.setState({enemy:s}),5==r?(setTimeout(function(){return _.setState({message:"No es muy efectivo"})},1e3),_.playInEffectiveHurtSound()):_.playEffectiveHurtSound(),setTimeout(_.attackPlayer.bind(_),2e3)},1e3)}},{key:"attackPlayer",value:function(){var e=this,_=this.state.enemy.arAtacks,t=_[Math.floor(Math.random()*_.length)],a=t.nuAtckPower,s=t.stAtckName,n=Object(C_Users_ErikL_Documents_Universidad_Semestre_9_Web_pokemon_combat_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__.a)({},this.state).player,r=n.nuDf,i=a-r>0?a-r:5;this.setState({message:this.state.enemy.stName+" us\xf3 "+s}),setTimeout(function(){n.nuLife-=i,e.setState({player:n,isPlayerAttacked:!0}),5==i?(e.setState({message:"No es muy efectivo"}),e.playInEffectiveHurtSound()):e.playEffectiveHurtSound(),setTimeout(function(){return e.setState({isPlayerAttacked:!1})},1e3),setTimeout(function(){e.setState({message:"Selecciona tu pr\xf3ximo ataque",isOnGoingAction:!1})},1e3)},2e3)}},{key:"endGame",value:function(){if(1!=this.state.isEndGame){var e=this.state.enemy.nuLife<=0?this.state.player.stName:this.state.enemy.stName;this.setState({nameWinner:e,isEndGame:!0}),setTimeout(window.location.reload.bind(window.location),5e3)}}}]),Battle}(react__WEBPACK_IMPORTED_MODULE_6__.Component);__webpack_exports__.a=Battle},41:function(e,_,t){e.exports=t.p+"static/media/music.f502ab8c.mp3"},42:function(e,_,t){e.exports=t.p+"static/media/menu-item.fc02613e.wav"},43:function(e,_,t){e.exports=t.p+"static/media/hurt-effective.7c1c64de.wav"},44:function(e,_,t){e.exports=t.p+"static/media/hurt-ineffective.14ae23ec.wav"},45:function(e,_,t){e.exports=t.p+"static/media/plattform.7cc65323.png"},49:function(e,_,t){e.exports=t(85)},54:function(e,_,t){},58:function(e,_){},60:function(e,_){},75:function(e,_,t){},76:function(e,_,t){},85:function(e,_,t){"use strict";t.r(_);var a=t(0),s=t.n(a),n=t(38),r=t.n(n),i=(t(54),t(46)),c=t(7),o=t(39);var u=function(){return s.a.createElement(i.a,null,s.a.createElement(c.d,null,s.a.createElement(c.b,{exact:!0,path:"/Battle",component:o.a}),s.a.createElement(c.a,{to:"/Battle"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(u,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[49,1,2]]]);
//# sourceMappingURL=main.38a28b50.chunk.js.map