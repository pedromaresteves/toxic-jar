(this["webpackJsonptoxic-jar"]=this["webpackJsonptoxic-jar"]||[]).push([[0],{15:function(e,t,a){e.exports=a.p+"static/media/logo.ee7cd8ed.svg"},18:function(e,t,a){e.exports=a(29)},2:function(e,t,a){var n=a(24);a(25);n.initializeApp({apiKey:"AIzaSyDM9EuZwEyYTCS7obD6QSgUhI_69C-GHpk",authDomain:"toxic-jar-api.firebaseapp.com",databaseURL:"https://toxic-jar-api.firebaseio.com",projectId:"toxic-jar-api",storageBucket:"toxic-jar-api.appspot.com",messagingSenderId:"951909825290",appId:"1:951909825290:web:72d8a1c10fab4c206a18f3",measurementId:"G-1QFET2KR4E"});var l=n.firestore();e.exports={db:l}},23:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(11),s=a.n(o),c=(a(23),a(12)),r=a(13),i=a(17),u=a(14),d=a(1),m=a(16),h=a(15),b=a.n(h);a(4);var f=function(e){function t(t){var a=t.target.value,n=document.querySelectorAll(".users div"),l=t.target.parentNode;n.forEach((function(e){e.classList.remove("user-selected")})),l.classList.add("user-selected"),e.handleUserClick(a)}return l.a.createElement("div",{className:"users"},e.users.map((function(e,a){return l.a.createElement("div",{className:"test",key:a},l.a.createElement("input",{type:"radio",id:a,name:"user",value:e.userName,onClick:t}),l.a.createElement("label",{htmlFor:a},e.userName))})))};var p=function(e){function t(t){t.preventDefault();var a=t.target.value,n=document.querySelectorAll(".money button"),l=t.target;n.forEach((function(e){e.classList.remove("amount-selected")})),l.classList.add("amount-selected"),e.handleAmountClick(a)}return l.a.createElement("div",{className:"money"},l.a.createElement("button",{onClick:t,value:"0.25"},"0.25\u20ac"),l.a.createElement("button",{onClick:t,value:"0.5"},"0.50\u20ac"),l.a.createElement("button",{onClick:t,value:"1"},"1.00\u20ac"))};var v=function(e){return e.show?l.a.createElement("div",{className:"backdrop",style:{position:"fixed",top:0,bottom:0,left:0,right:0,backgroundColor:"rgba(0,0,0,0.3)",padding:50}},l.a.createElement("div",{className:"modal",style:{backgroundColor:"#fff",borderRadius:5,margin:"0 auto",padding:30}},l.a.createElement("h2",null,"This is how much each of you pieces of shit owe:"),l.a.createElement("ul",{className:"modalUserList"},e.userData.map((function(e,t){return l.a.createElement("li",{key:t},e.userName," - ",e.debt.toFixed(2)," \u20ac")}))),l.a.createElement("div",{className:"footer"},l.a.createElement("button",{onClick:e.onClose},"Close")))):null},k=a(2);function E(e){var t=[];k.db.collection("prueba").orderBy("userName").get().then((function(e){return e.docs.forEach((function(e){t.push(e.data())})),t})).then((function(t){return e(t)}))}var g=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={users:[],selectedUser:null,selectedAmount:null,totalAmount:0,disableSubmitBtn:!0,isModalOpen:!1},a.handleUserClick=a.handleUserClick.bind(Object(d.a)(a)),a.handleAmountClick=a.handleAmountClick.bind(Object(d.a)(a)),a.handleInsertBtn=a.handleInsertBtn.bind(Object(d.a)(a)),a.enableSubmit=a.enableSubmit.bind(Object(d.a)(a)),a.toggleModal=a.toggleModal.bind(Object(d.a)(a)),a.handleClearClick=a.handleClearClick.bind(Object(d.a)(a)),a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;E((function(t){var a=0;t.forEach((function(e){return a+=e.debt})),e.setState({users:t,totalAmount:a})}))}},{key:"handleUserClick",value:function(e){var t=this;this.setState({selectedUser:e},(function(){t.enableSubmit()}))}},{key:"handleAmountClick",value:function(e){var t=this;this.setState({selectedAmount:e},(function(){t.enableSubmit()}))}},{key:"handleInsertBtn",value:function(e){e.preventDefault();var t,a,n=this.state.selectedUser,l=Number(this.state.selectedAmount),o=Number(this.state.totalAmount),s=this.state.users,c=document.querySelector('input[value="'.concat(n,'"]')),r=document.querySelector('button[value="'.concat(l,'"]'));c.parentElement.classList.remove("user-selected"),r.classList.remove("amount-selected"),c.checked=!1,s.forEach((function(e){e.userName===n&&(e.debt+=l,o+=l)})),t=n,a=l,k.db.collection("prueba").where("userName","==",t).get().then((function(e){var t=k.db.collection("prueba").doc(e.docs[0].id),n=e.docs[0].data().debt;t.update({debt:n+a})})),this.setState({users:s,totalAmount:o,selectedUser:null,selectedAmount:null,disableSubmitBtn:!0})}},{key:"enableSubmit",value:function(){var e,t,a=(e=this.state.selectedUser,t=this.state.selectedAmount,!e||!t);this.setState({disableSubmitBtn:a})}},{key:"toggleModal",value:function(e){e.preventDefault(),this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleClearClick",value:function(e){var t=this;e.preventDefault(),function(e){var t=e.map((function(e){return e.userName}));k.db.collection("prueba").get().then((function(e){e.docs.forEach((function(e){t.forEach((function(t){e.data().userName===t&&k.db.collection("prueba").doc(e.id).update({debt:0})}))}))}))}(this.state.users),E((function(e){t.setState({users:e,totalAmount:0})}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("img",{src:b.a,className:"App-logo",alt:"logo"}),l.a.createElement("h1",null,"QA TEAM"),l.a.createElement("button",{id:"moreInfo",onClick:this.toggleModal},l.a.createElement("small",null,"Click to see more info")),l.a.createElement("form",null,l.a.createElement("h1",{id:"totalAmount"},"Total debt: ",this.state.totalAmount.toFixed(2)," \u20ac"),l.a.createElement("button",{id:"clearAllDebt",onClick:this.handleClearClick},l.a.createElement("small",null,"Clear all debt")),l.a.createElement(v,{show:this.state.isModalOpen,onClose:this.toggleModal,userData:this.state.users}),l.a.createElement("p",null,"Please select the toxic user:"),l.a.createElement(f,{users:this.state.users,handleUserClick:this.handleUserClick}),l.a.createElement(p,{handleAmountClick:this.handleAmountClick}),l.a.createElement("div",null,l.a.createElement("button",{id:"sendButton",onClick:this.handleInsertBtn,disabled:this.state.disableSubmitBtn},"Submit"))))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},4:function(e,t,a){}},[[18,1,2]]]);
//# sourceMappingURL=main.987223a1.chunk.js.map