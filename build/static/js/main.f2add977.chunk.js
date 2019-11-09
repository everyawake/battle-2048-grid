(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{48:function(e,n,t){e.exports=t(99)},99:function(e,n,t){"use strict";t.r(n);var r=t(6),a=t(0),o=t.n(a),i=t(34),c=t.n(i),l=t(5),u=t(3),s=t(2);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var d=t(8),h=t(9),f=t(14),b=t(13),g=t(15),v=t(37),m={primaryColor:"#a5d6a7",primaryLightColor:"#d7ffd9",primaryDarkColor:"#75a478",primaryTextColor:"#000000",backgroundGreyColor:"#e8e8e8",backgroundWhiteColor:"#fff"};function p(){var e=Object(r.a)(["\n  width: 32rem;\n  padding: 1.2rem;\n  background-color: ",";\n  border: 1px solid ",";\n  border-radius: 0.8rem;\n  text-align: center;\n  text-decoration: none;\n  color: ",";\n\n  &:focus {\n    outline: none;\n  }\n\n  &:hover {\n    background-color: ",";\n    box-shadow: 0.1rem 0.1rem 0.3rem 0 rgba(0, 0, 0, 0.75);\n  }\n"]);return p=function(){return e},e}function y(){var e=Object(r.a)(["\n  width: 100%;\n  height: 100%;\n  font-size: 1rem;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  background-color: ",";\n"]);return y=function(){return e},e}var w=l.c.div(y(),m.backgroundGreyColor),O=Object(l.c)(v.a).attrs({type:"button"})(p(),m.backgroundWhiteColor,m.backgroundGreyColor,m.primaryTextColor,m.primaryLightColor),k=function(e){function n(){return Object(d.a)(this,n),Object(f.a)(this,Object(b.a)(n).apply(this,arguments))}return Object(g.a)(n,e),Object(h.a)(n,[{key:"render",value:function(){return a.createElement(w,null,a.createElement(O,{to:"/single"},a.createElement("span",null,"Single Play")))}}]),n}(a.PureComponent);function C(){var e=Object(r.a)(["\n  padding: 0.4rem;\n  font-size: 1.2rem;\n  border-radius: 2rem;\n  margin-left: 1rem;\n"]);return C=function(){return e},e}function j(){var e=Object(r.a)(["\n  margin-bottom: 2rem;\n"]);return j=function(){return e},e}function B(){var e=Object(r.a)(["\n  width: 100%;\n  height: 100%;\n  font-size: 1rem;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  background-color: ",";\n"]);return B=function(){return e},e}var E=l.c.div(B(),m.backgroundGreyColor),z=l.c.header(j()),x=l.c.button(C()),S=t(40),P=t(41),R=t.n(P),G=t(42),A=t.n(G);function M(){var e=Object(r.a)(["\n  width: ",";\n  height: ",";\n  background-color: ",";\n"]);return M=function(){return e},e}var D=l.c.canvas(M(),(function(e){return"".concat((e.width/10).toFixed(1),"rem")}),(function(e){return"".concat((e.height/10).toFixed(1),"rem")}),m.backgroundWhiteColor),W=t(43);function K(e,n){return Math.floor(Math.random()*(+n-+e))+ +e}var I=t(24),F=t(44),H=t.n(F),T=t(45),L=t.n(T),N=function(e,n){var t=e.length,r=e.filter((function(e){return Boolean(e.value)})),a=H()(Array(t-r.length),{value:0});return"left"===n?r.concat(a):a.concat(r)},J=function(e){var n=N(e,"left");return X(n)},V=function(e){var n=N(e,"right");return X(n.reverse()).reverse()},X=function(e){for(var n=Object(I.a)(e),t=0;t<n.length;t++){var r=n[t],a=n[t+1];r&&a&&r.value===a.value&&0!==r.value&&(r.value+=a.value,a.value=0,t+=1)}return N(n,"left")},Y=function(e){return L.a.apply(void 0,Object(I.a)(e)).map((function(e){return e.map((function(e){return Boolean(e)?e:{value:0}}))}))},$=function(){function e(){var n=this;Object(d.a)(this,e),this.currentBoardSize=0,this.generateBlockCountPerMove=1,this.board=[],this.isInitialized=!1,this.startValue=2,this.maxBoardSearchCount=4,this.onBoardChange=function(){},this.onGameEnd=function(){},this.getBoard=function(){return n.board},this.newBlockAtRandomPosition=function(){if(!n.isInitialized)throw new Error("[\u274c] error: Must be initialize before use!");for(var e=0;e<n.generateBlockCountPerMove;e++)n.getEmptyRandomPosition().then((function(e){var t=e.x,r=e.y;n.board[t][r]={value:n.startValue},n.onBoardChange(n.board)})).catch((function(){n.onGameEnd()}))},this.getEmptyRandomPosition=function(){return new Promise((function(e,t){var r,a,o=1;console.time("getEmptyRandomPosition");do{if(o===n.maxBoardSearchCount){r=null,a=null;break}r=K(0,n.currentBoardSize),a=K(0,n.currentBoardSize),o++}while(!n.isEmpty(r,a));console.timeEnd("getEmptyRandomPosition"),null!==r&&null!==a?e({x:r,y:a}):t()}))},this.isEmpty=function(e,t){return 0===n.board[e][t].value}}return Object(h.a)(e,[{key:"initializeBoard",value:function(e){var n=e.boardSize,t=e.onBoardChange,r=e.onGameEnd;this.currentBoardSize=n,this.generateBlockCountPerMove=Math.round(n/2),this.maxBoardSearchCount=Math.pow(n,n),this.onBoardChange=t,this.onGameEnd=r,this.board=new Array(n);for(var a=0;a<n;a++)this.board[a]=Object(W.fill)(new Array(n),{value:0});this.isInitialized=!0,this.newBlockAtRandomPosition()}},{key:"move",value:function(e){this.board=function(e,n){for(var t="up"===n||"down"===n,r=t?Y(e):e,a=Array(e.length),o=0;o<r.length;o++)switch(n){case"up":case"left":a[o]=J(r[o]);break;case"down":case"right":a[o]=V(r[o])}return t?Y(a):a}(this.board,e),this.onBoardChange(this.board),this.newBlockAtRandomPosition()}}]),e}(),q=function(){return{r:K(0,255),g:K(0,255),b:K(0,255)}},Q={2:{r:0,g:0,b:0},4:{r:0,g:0,b:0},8:{r:0,g:0,b:0},16:{r:0,g:0,b:0},32:{r:0,g:0,b:0},64:{r:0,g:0,b:0},128:{r:0,g:0,b:0},256:{r:0,g:0,b:0},512:{r:0,g:0,b:0},1024:{r:0,g:0,b:0},2048:{r:0,g:0,b:0}};!function(){for(var e=0,n=Object.keys(Q);e<n.length;e++){var t=n[e];Q[t]=q()}}();var U=Q;function Z(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}var _=function(e){function n(){var e,t;Object(d.a)(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(t=Object(f.a)(this,(e=Object(b.a)(n)).call.apply(e,[this].concat(o)))).state={canvasWidth:0,canvasHeight:0},t.engine=new $,t.refCanvasBoard=a.createRef(),t.canvasContext=null,t.restart=function(){t.initializeGameEngine()},t.getRelativeBlockSize=A()((function(e){var n=e.canvasWidth,t=e.canvasHeight,r=e.boardSize;return{width:n/r,height:t/r}})),t.drawRect=function(e){var n=t.canvasContext,r=t.getRelativeBlockSize(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?Z(t,!0).forEach((function(n){Object(S.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Z(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},t.state,{boardSize:t.props.boardSize})),a=r.width,o=r.height;if(n){var i=e.posX,c=e.posY,l=e.block,u=U[l.value],s=u.r,d=u.g,h=u.b,f=i*a,b=c*o;n.fillStyle="rgba(".concat(s,", ").concat(d,", ").concat(h,", 0.8)"),n.fillRect(b,f,a,o),n.fillStyle="".concat(m.primaryTextColor),n.font="2.0rem Noto Sans KR",n.textAlign="center",n.fillText("".concat(l.value),b+a/2,f+o/2)}},t.clearBoard=function(){var e=t.canvasContext,n=t.state,r=n.canvasWidth,a=n.canvasHeight;e&&e.clearRect(0,0,r,a)},t.renderBoard=function(e){var n=t.props.boardSize;t.clearBoard();for(var r=0;r<n;r++)for(var a=0;a<n;a++){var o=e[r][a];o.value&&t.drawRect({posX:r,posY:a,block:o})}},t.initializeGameEngine=function(){var e=t.props.boardSize;t.engine.initializeBoard({boardSize:e,onBoardChange:t.handleBoardChange,onGameEnd:t.handleGameEnd}),console.info("[\u2714\ufe0f] Success to initialize Game engine")},t.initializeCanvas=function(){var e=t.refCanvasBoard.current;e?(t.canvasContext=e.getContext("2d"),t.canvasContext&&(console.info("[\u2714\ufe0f] Success to initialize canvas"),t.setState({canvasWidth:e.width,canvasHeight:e.height}),t.renderBoard(t.engine.getBoard()),t.registerKeyboardInput())):console.error("[\u274c] Failed to initialize canvas")},t.registerKeyboardInput=function(){window?(window.addEventListener("keydown",t.debounceKeyDown),console.info("[\u2714\ufe0f] Success to register keyboard input")):console.error("[\u274c] Failed to register keyboard input")},t.handleBoardChange=function(e){t.renderBoard(e)},t.handleGameEnd=function(){alert(" - GAME END - ")},t.handleArrowKey=function(e){var n=null;switch(e.keyCode){case 37:n="left";break;case 38:n="up";break;case 39:n="right";break;case 40:n="down"}n&&t.engine.move(n)},t.debounceKeyDown=R()(t.handleArrowKey,150),t}return Object(g.a)(n,e),Object(h.a)(n,[{key:"componentDidMount",value:function(){this.initializeGameEngine(),this.initializeCanvas()}},{key:"render",value:function(){var e=this.props,n=e.width,t=e.height;return a.createElement(D,{width:n,height:t,ref:this.refCanvasBoard})}}]),n}(a.PureComponent),ee=function(e){function n(){var e,t;Object(d.a)(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(t=Object(f.a)(this,(e=Object(b.a)(n)).call.apply(e,[this].concat(o)))).refBoard=a.createRef(),t.handleRestart=function(){var e=t.refBoard.current;e&&e.restart()},t}return Object(g.a)(n,e),Object(h.a)(n,[{key:"render",value:function(){return a.createElement(E,null,a.createElement(z,null,a.createElement("h1",null,"Single play mode",a.createElement(x,{onClick:this.handleRestart},"Restart"))),a.createElement("div",null,a.createElement(_,{ref:this.refBoard,width:500,height:500,boardSize:4})))}}]),n}(a.PureComponent);function ne(){var e=Object(r.a)(["\n  html,\n  body {\n    margin: 0;\n    padding: 0;\n    font-size: 10px;\n  }\n\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: 'Noto Sans KR', sans-serif;\n  }\n\n  #root,\n  body {\n    width: 100vw;\n    height: 100vh;\n  }\n"]);return ne=function(){return e},e}var te=Object(l.b)(ne()),re=Object(s.a)();c.a.render(o.a.createElement(l.a,{theme:{}},o.a.createElement(o.a.Fragment,null,o.a.createElement(te,null),o.a.createElement(u.b,{history:re},o.a.createElement(u.c,null,o.a.createElement(u.a,{path:"/single",exact:!0,component:ee}),o.a.createElement(u.a,{path:"/",component:k}))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[48,1,2]]]);
//# sourceMappingURL=main.f2add977.chunk.js.map