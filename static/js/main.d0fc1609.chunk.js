(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{19:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(5),r=a.n(s),o=a(6),i=a(7),d=a(8),b=a(11),l=a(10),u=a(3),j=a.n(u),h=a(9),v=a.n(h),f=a(0),k=function(e){var t=e.options,a=e.onLeaveFeedback;return t.map((function(e){return function(e){var t=e.feedback,a=e.onLeaveFeedback;return Object(f.jsx)("button",{className:v.a.FeedbackButton,type:"button","data-feedback":t,onClick:a,children:t})}({feedback:e,onLeaveFeedback:a})}))};k.propTypes={options:j.a.arrayOf(j.a.string),onLeaveFeedback:j.a.func.isRequired};var O=k,g=a(2),p=a.n(g),m=function(e){var t=e.message;return Object(f.jsx)("p",{children:t})};m.prototype={message:j.a.string.isRequired};var x=m,F=function(e){var t=e.good,a=e.neutral,n=e.bad,c=e.total,s=e.positivePercentage;return Object(f.jsxs)(f.Fragment,{children:[c>0&&Object(f.jsxs)("ul",{className:p.a.StatList,children:[Object(f.jsxs)("li",{className:p.a.StatItem,children:["Good: ",t]}),Object(f.jsxs)("li",{className:p.a.StatItem,children:["Neutral: ",a]}),Object(f.jsxs)("li",{className:p.a.StatItem,children:["Bad: ",n]}),Object(f.jsxs)("li",{className:p.a.StatItem,children:["Total: ",c]}),Object(f.jsxs)("li",{className:p.a.StatItem,children:["Positive Percentage: ",s]})]}),0===c&&Object(f.jsx)(x,{message:"No feedback gives"})]})},S=function(e){var t=e.title,a=e.children;return Object(f.jsxs)("section",{children:[Object(f.jsx)("h2",{children:t}),a]})},y=["good","neutral","bad"],I=function(e){Object(b.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.handleFeedback=function(t){var a=t.target.dataset.feedback;e.setState((function(e){return Object(o.a)({},a,e[a]+1)}))},e.countTotalFeedbacks=function(){var t=e.state;return t.good+t.neutral+t.bad},e.countPostivePercentage=function(){var t=e.state.good,a=e.countTotalFeedbacks();return a?Math.round(t/a*100):0},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this.state,t=e.good,a=e.neutral,n=e.bad,c=this.countTotalFeedbacks(),s=this.countPostivePercentage();return Object(f.jsxs)("div",{children:[Object(f.jsx)(S,{title:"Plese leave your feedback",children:Object(f.jsx)(O,{options:y,onLeaveFeedback:this.handleFeedback})}),Object(f.jsx)(S,{title:"Statistics",children:Object(f.jsx)(F,{good:t,neutral:a,bad:n,total:c,positivePercentage:s})})]})}}]),a}(c.a.Component);r.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(I,{})}),document.getElementById("root"))},2:function(e,t,a){e.exports={StatList:"Statistics_StatList__3oEMc",StatItem:"Statistics_StatItem__1fQ3I"}},9:function(e,t,a){e.exports={FeedbackButton:"Feedback_FeedbackButton__TO8Uo"}}},[[19,1,2]]]);
//# sourceMappingURL=main.d0fc1609.chunk.js.map