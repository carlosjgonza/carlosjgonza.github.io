(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{134:function(e,t,a){"use strict";a.r(t);a(146);var n=a(6),r=a.n(n),o=a(46),i=a.n(o),l=a(0),s=a.n(l),c=a(216),m=a.n(c),p=a(224),u=a(222),d=a.n(u),h=a(165),g=a(155),f=a(150),b=a(140),x=a(154),v=a(138),y=a(136),w=a.n(y),E=a(135),C=a(137);function z(){var e=w()(["\n      width: 600px;\n    "]);return z=function(){return e},e}function A(){var e=w()(["\n      width: 100%;\n    "]);return A=function(){return e},e}function j(){var e=w()(["\n      font-size: 1.5rem;\n    "]);return j=function(){return e},e}function Q(){var e=w()(["\n      font-size: 1.2rem;\n    "]);return Q=function(){return e},e}var N=E.d.section.withConfig({displayName:"styledComponents__SectionContainer",componentId:"sc-1izg9qs-0"})(["padding:2em;width:100%;display:flex;flex-direction:column;align-items:center;h3{"," ","}form{display:flex;flex-direction:column;margin-top:1em;input,textarea{margin:5px 0px;border-radius:3px;border:1px solid #e2e2e2;padding:8px;padding-left:10px;font-size:0.85rem;&:focus{border:1px solid #f48600;outline:0;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 8px rgba(124,197,118,0.3);-moz-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 8px rgba(124,197,118,0.3);box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 8px rgba(124,197,118,0.3);}}textarea{min-height:150px;resize:none;}.input-btn{width:120px;height:35px;background:#f48600;border-radius:4px;color:#ffffff;font-size:0.85rem;line-height:0.8rem;text-transform:capitalize;transition:all 0.3s ease-in-out;-moz-transition:all 0.3s ease-in-out;-webkit-transition:all 0.3s ease-in-out;cursor:pointer;&:hover{background:#111;color:#fff;}}label.error{font-weight:normal;color:#d61400;font-size:14px;font-style:italic;position:relative;top:-4px;}"," ","}"],Object(C.a)("mobile")(Q()),Object(C.a)("tablet")(j()),Object(C.a)("mobile")(A()),Object(C.a)("tablet")(z()));a.d(t,"query",function(){return _});var S=s.a.createRef(),k=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={name:"",replyto:"",phone:"",message:"",send:!1,showAlert:!1,typeAlert:"success",alertMessage:"",titleAlert:"Message"},t.handleChange=function(e){var a,n=e.target,r=n.name,o=n.value;t.setState(((a={})[r]=o,a))},t.closeAlert=function(){t.setState({showAlert:!1})},t.validateForm=function(){var e=t.state,a=e.name,n=e.replyto,r=e.message;return""!==a&&(!(""===n||!t.validateEmail(n))&&""!==r)},t.handleSubmit=function(e){t.setState({send:!0}),e.preventDefault(),t.validateForm()&&S.current.execute()},t.onChange=function(e){var a=i()(i()(t)),n=t.props.t,r=t.state,o=r.name,l=r.replyto,s=r.phone,c=r.message;if(e){var p={subject:"Tell us about your project",name:o,replyto:l,phone:s,message:c};m.a.post("https://submit-form.com/76a8d3ca-a33b-4442-ac33-158e38a34d82",p,{headers:{Accept:"application/json"}}).then(function(e){S.current.props.grecaptcha.reset(),a.setState({send:!1,name:"",replyto:"",phone:"",message:"",titleAlert:n("getQuote.form.sentMessage"),typeAlert:"success",alertMessage:"",showAlert:!0})}).catch(function(e){S.current.props.grecaptcha.reset(),a.setState({titleAlert:n("getQuote.form.descriptionError"),typeAlert:"info",alertMessage:n("getQuote.form.descriptionError"),showAlert:!0})})}},t}r()(t,e);var a=t.prototype;return a.validateEmail=function(e){return/[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(String(e).toLowerCase())},a.render=function(){var e=this,t=this.props,a=t.data,n=t.t,r=this.state,o=r.name,i=r.send,l=r.replyto,c=r.message,m=r.phone,u=r.showAlert,y=r.titleAlert,w=r.typeAlert,E=r.alertMessage,C=""===o&&i,z=""===c&&i,A=""!==l&&!this.validateEmail(l)||""===l&&i,j=n(A&&""!==l?"getQuote.form.validEmail":"getQuote.form.errorEmail");return s.a.createElement(b.a,{i18n:x.a},s.a.createElement(g.a,null,s.a.createElement(f.a,{title:"Sancrisoft | Get a Quote",keywords:["sancrisoft","digital-solutions","get-quote"]}),s.a.createElement("section",null,s.a.createElement(h.a,{image:a.getQuote.childImageSharp.sizes,title:n("getQuote.bigImage.title"),description:n("getQuote.bigImage.description")})),s.a.createElement(v.i,null,s.a.createElement(N,null,s.a.createElement(v.e,null,n("getQuote.form.title")),s.a.createElement("form",{ref:function(t){return e.form=t},className:"form contact_form",method:"POST",action:"http://formspree.io/info@sancrisoft.com",onSubmit:this.handleSubmit},s.a.createElement("input",{className:"input-text",type:"text",name:"name",id:"name",placeholder:n("getQuote.form.name"),value:o,onChange:this.handleChange}),C&&s.a.createElement("label",{className:"error",htmlFor:"name"},n("getQuote.form.errorName")),s.a.createElement("input",{className:"input-text",type:"text",name:"replyto",id:"replyto",placeholder:n("getQuote.form.email"),value:l,onChange:this.handleChange}),A&&s.a.createElement("label",{className:"error",htmlFor:"replyto"},j),s.a.createElement("input",{className:"input-text",type:"text",name:"phone",id:"phone",placeholder:n("getQuote.form.phone"),value:m,onChange:this.handleChange}),s.a.createElement("textarea",{className:"input-text text-area",name:"message",id:"message",cols:"0",rows:"0",placeholder:n("getQuote.form.message"),value:c,onChange:this.handleChange}),z&&s.a.createElement("label",{className:"error",htmlFor:"message"},n("getQuote.form.errorMessage")),s.a.createElement("input",{type:"hidden",name:"subject",value:"Tell us about your project | SancriSoft"}),s.a.createElement(p.a,{ref:S,size:"invisible",sitekey:"6LdeBokUAAAAAM01lWglTU0siI1fmMRoGjCE_94b",onChange:this.onChange}),s.a.createElement("div",{className:"wrapper_button"},s.a.createElement("button",{className:"input-btn",type:"button",onClick:this.handleSubmit},n("getQuote.form.send")," "))),s.a.createElement(d.a,{show:u,title:y,text:E,onConfirm:this.closeAlert,type:w})))))},t}(l.Component),_="2788027974";t.default=Object(b.c)("translations")(k)},165:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(4),i=a.n(o),l=a(139),s=a.n(l),c=a(135),m=c.d.div.withConfig({displayName:"styledComponents__MainContainer",componentId:"sc-1j7jjn0-0"})(["width:100%;height:50vh;position:relative;div.detail{display:flex;flex-direction:column;justify-content:center;align-items:center;position:absolute;top:0;z-index:3;width:100%;height:100%;h2,p{color:white;text-align:center;padding:0 1em;}}.image-container{width:100%;height:100%;img{flex:1;object-fit:cover;position:absolute;z-index:1;}}"]),p=c.d.div.withConfig({displayName:"styledComponents__GreyFilter",componentId:"sc-1j7jjn0-1"})(["position:absolute;top:0;width:100%;height:100%;background-color:rgba(0,0,0,0.55);z-index:2;"]),u=a(138),d=function(e){var t=e.title,a=e.description,n=e.image;return r.a.createElement(m,null,r.a.createElement(p,null),r.a.createElement(s.a,{className:"image-container",sizes:n}),r.a.createElement("div",{className:"detail"},r.a.createElement(u.d,null,t),r.a.createElement("p",null,a)))};d.propTypes={image:i.a.object.isRequired,title:i.a.string.isRequired,description:i.a.string.isRequired};t.a=d}}]);
//# sourceMappingURL=component---src-pages-contact-index-js-8af3d13ba6cafa6fe015.js.map