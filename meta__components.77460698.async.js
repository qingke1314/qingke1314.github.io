"use strict";(self.webpackChunkiblive_base=self.webpackChunkiblive_base||[]).push([[838],{27734:function(c,o,e){e.r(o),e.d(o,{texts:function(){return t}});var _=e(2638);const t=[{value:"\u8FD9\u91CC\u662FCustomTable\u7684\u4E00\u884C\u4EE3\u7801\u4F7F\u7528\u4F8B\u5B50\uFF1A",paraId:0}]},35485:function(c,o,e){e.r(o),e.d(o,{demos:function(){return D}});var _=e(16581),t=e.n(_),v=e(21671),b=e.n(v),s=e(19069),P=e(2638),p=e(25869),E=e(54598),D={"src-components-custom-table-demo-0":{component:s.memo(s.lazy(b()(t()().mark(function d(){var m,i,r,u,l,n;return t()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(e.bind(e,25869));case 2:return m=a.sent,i=m.Button,a.next=6,Promise.resolve().then(e.bind(e,54598));case 6:return r=a.sent,u=r.CustomTabs,l=r.CustomTable,n=function(){var f=[{name:"\u5F20\u4E09",age:18}],C=[{param:"\u6570\u636E\u6E90",example:'[{name: "\u5F20\u4E09", age: 18}]',key:"dataSource",remark:"\u8BE6\u60C5\u89C1Antd\u7EC4\u4EF6\u6587\u6863"},{param:"\u5217\u914D\u7F6E",example:'[{dataIndex: "age", title: "\u5E74\u9F84"}]',key:"columns",remark:"\u8BE6\u60C5\u89C1Antd\u7EC4\u4EF6\u6587\u6863"}],I=[{dataIndex:"param",title:"\u53C2\u6570"},{dataIndex:"example",title:"\u793A\u4F8B"},{dataIndex:"key",title:"\u952E\u540D"},{dataIndex:"remark",title:"\u5907\u6CE8"}],g=[{dataIndex:"name",title:"\u540D\u79F0"},{dataIndex:"age",title:"\u5E74\u9F84"}];return s.createElement("div",null,s.createElement(l,{dataSource:f,columns:g}),s.createElement("br",null),s.createElement(l,{dataSource:C,columns:I}))},a.abrupt("return",{default:n});case 11:case"end":return a.stop()}},d)})))),asset:{type:"BLOCK",id:"src-components-custom-table-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { Button } from 'antd';
import { CustomTabs, CustomTable } from 'iblive-base'; // \u786E\u4FDD\u6B63\u786E\u5BFC\u5165\u7EC4\u4EF6

// \u5FC5\u987B\u4F7F\u7528\u51FD\u6570\u5F0F\u7EC4\u4EF6\u58F0\u660E
const Demo = () => {
  const dataSource = [
    {
      name: '\u5F20\u4E09',
      age: 18
    }
  ]
  const paramsData = [{ param: '\u6570\u636E\u6E90', example: '[{name: "\u5F20\u4E09", age: 18}]', key: 'dataSource', remark: '\u8BE6\u60C5\u89C1Antd\u7EC4\u4EF6\u6587\u6863' },
    { param: '\u5217\u914D\u7F6E', example: '[{dataIndex: "age", title: "\u5E74\u9F84"}]', key: 'columns', remark: '\u8BE6\u60C5\u89C1Antd\u7EC4\u4EF6\u6587\u6863' }
  ]
  const paramsColumns = [{dataIndex: 'param', title: '\u53C2\u6570'}, {dataIndex: 'example', title: '\u793A\u4F8B'}, {dataIndex: 'key', title: '\u952E\u540D'}, {dataIndex: 'remark', title: '\u5907\u6CE8'}]
  const columns = [{dataIndex: 'name', title: '\u540D\u79F0'}, {dataIndex: 'age', title: '\u5E74\u9F84'}]
  return <div>
    <CustomTable dataSource={dataSource} columns={columns} />
    <br />
    <CustomTable dataSource={paramsData} columns={paramsColumns} />
  </div>
};
export default Demo;`},antd:{type:"NPM",value:"5.24.5"},"iblive-base":{type:"NPM",value:"0.0.6-beta.51"}},entry:"index.jsx"},context:{antd:p,"iblive-base":E},renderOpts:{compile:function(){var d=b()(t()().mark(function i(){var r,u=arguments;return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(19).then(e.bind(e,4019));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,u));case 3:case"end":return n.stop()}},i)}));function m(){return d.apply(this,arguments)}return m}()}}}}}]);
