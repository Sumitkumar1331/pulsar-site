"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[66571],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=u(n),d=r,m=h["".concat(s,".").concat(d)]||h[d]||p[d]||o;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},15721:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const o={author:"Matteo Merli",authorURL:"https://twitter.com/merlimat",title:"Apache Pulsar 2.3.0"},i=void 0,l={permalink:"/blog/2019/02/20/Apache-Pulsar-2-3-0",editUrl:"https://github.com/apache/pulsar-site/edit/main/site2/website-next/blog/2019-02-20-Apache-Pulsar-2-3-0.md",source:"@site/blog/2019-02-20-Apache-Pulsar-2-3-0.md",title:"Apache Pulsar 2.3.0",description:"The Apache Pulsar PMC is happy to announce the release of Pulsar 2.3.0. This",date:"2019-02-20T00:00:00.000Z",formattedDate:"February 20, 2019",tags:[],readingTime:3.36,hasTruncateMarker:!0,authors:[{name:"Matteo Merli",url:"https://twitter.com/merlimat"}],frontMatter:{author:"Matteo Merli",authorURL:"https://twitter.com/merlimat",title:"Apache Pulsar 2.3.0"},prevItem:{title:"Apache Pulsar 2.4.0",permalink:"/blog/2019/07/05/Apache-Pulsar-2-4-0"},nextItem:{title:"Apache Pulsar 2.1.0-incubating",permalink:"/blog/2018/08/06/Apache-Pulsar-2-1-0"}},s={authorsImageUrls:[void 0]},u=[{value:"Pulsar functions in Kubernetes",id:"pulsar-functions-in-kubernetes",level:3},{value:"New Pulsar IO connectors:",id:"new-pulsar-io-connectors",level:3},{value:"Token Authentication",id:"token-authentication",level:3},{value:"Schema support in Python client library",id:"schema-support-in-python-client-library",level:3},{value:"Function state API in Python",id:"function-state-api-in-python",level:3},{value:"Conclusion",id:"conclusion",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Apache Pulsar PMC is happy to announce the release of Pulsar 2.3.0. This\nis the result of huge effort from the community, with over 480 commits and\na long list of new features, general improvements and bug fixes."),(0,r.kt)("p",null,"These improvements have been across the board in all of Pulsar components,\nfrom new messaging features, to improved usability for Pulsar Functions\nand Pulsar IO."),(0,r.kt)("p",null,"Check out the official ",(0,r.kt)("b",null,(0,r.kt)("a",{parentName:"p",href:"/release-notes/#2.3.0"},"release notes"))," for a\ndetailed list of the changes, with links to the relevant pull-requests,\ndiscussions and documentation."),(0,r.kt)("p",null,"Regarding new features introduced, I just want to highlight here a tiny\nsubset of them:"),(0,r.kt)("h3",{id:"pulsar-functions-in-kubernetes"},"Pulsar functions in Kubernetes"),(0,r.kt)("p",null,"It's now possible to use Kubernetes as the scheduler for Pulsar Functions."),(0,r.kt)("p",null,"When a Pulsar cluster is configured to use Kubernetes, submitting a\nfunction, using CLI tools or REST API, will cause the function instances\nto be submitted as Kubernetes pods rather than running as processes\nor threads within the Pulsar functions worker."),(0,r.kt)("p",null,"With this runtime manager, it's possible to set quota on CPU/Mem and\nhave Kubernetes assign the required resources and enforce isolation\nbetween different instances and functions."),(0,r.kt)("h3",{id:"new-pulsar-io-connectors"},"New Pulsar IO connectors:"),(0,r.kt)("p",null,"A new batch of connectors was added, including MongoDB, Elastic Search,\nHBase and local files source and sink."),(0,r.kt)("p",null,"We introduce support for doing ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Change_data_capture"},"Change-Data-Capture"),"\nwith ",(0,r.kt)("a",{parentName:"p",href:"https://debezium.io/"},"Debezium"),". This allows to record all\nthe update from a database into a Pulsar topic and use it for replication,\nstreaming jobs, cache updating, etc.."),(0,r.kt)("p",null,"With Pulsar IO, Debezium will run as a regular Pulsar IO source,\ncompletely managed by Pulsar. Users can easily submit a Debezium\nbuiltin connector to a Pulsar cluster and start feeding data\nfrom a long list of supported databases like MySQL, MongoDB,\nPostgreSQL, Oracle and SQL Server."),(0,r.kt)("p",null,"Check out the ",(0,r.kt)("a",{parentName:"p",href:"/docs/io-cdc"},"Debezium connector")," documentation for how\nto get started in capturing database changes."),(0,r.kt)("h3",{id:"token-authentication"},"Token Authentication"),(0,r.kt)("p",null,"Token Authentication provides a very simple and secure method of authentication for Pulsar.\nThis is based on ",(0,r.kt)("a",{parentName:"p",href:"https://jwt.io/"},"JSON Web Tokens"),"."),(0,r.kt)("p",null,'With tokens authentication, a client only needs to provide a single credential, or "token", in the\nform of an opaque string provided by either the system administrator or some automated service.'),(0,r.kt)("p",null,"The Java code for a client using token authentication will look like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'\nPulsarClient client = PulsarClient.builder()\n    .serviceUrl("pulsar://broker.example.com:6650/")\n    .authentication(\n        AuthenticationFactory.token("eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJKb2UifQ.ipevRNuRP6HflG8cFKnmUPtypruRC4fb1DWtoLL62SY")\n    .build();\n\n')),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/docs/security-token-client"},"Client Authentication using tokens")," for a complete walk through\nand instructions on how to set it up and manage it."),(0,r.kt)("h3",{id:"schema-support-in-python-client-library"},"Schema support in Python client library"),(0,r.kt)("p",null,"This feature adds a Python idiomatic way to declare the schema\nof a producer or consumer and integrates directly with the Pulsar\nschema registry."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"\nimport pulsar\nfrom pulsar.schema import *\n\nclass Example(Record):\n    a = String()\n    b = Integer()\n    c = Boolean()\n\nproducer = client.create_producer(\n                    topic='my-topic',\n                    schema=AvroSchema(Example) )\n\nproducer.send(Example(a='Hello', b=1))\n\n")),(0,r.kt)("p",null,"The above example will make the producer ",(0,r.kt)("inlineCode",{parentName:"p"},"Example")," schema to be\nvalidated by broker when we try to publish on ",(0,r.kt)("inlineCode",{parentName:"p"},"my-topic"),". If the\ntopic has a schema that is incompatible, the producer creation will\nfail."),(0,r.kt)("p",null,"Currently, the Python schema support Avro and JSON, in addition to\nregular types like ",(0,r.kt)("inlineCode",{parentName:"p"},"str")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"bytes"),"."),(0,r.kt)("p",null,"The complete documentation is available at ",(0,r.kt)("a",{parentName:"p",href:"/docs/client-libraries-python/#schema"},"Python schema"),"."),(0,r.kt)("h3",{id:"function-state-api-in-python"},"Function state API in Python"),(0,r.kt)("p",null,"From 2.3.0, Python function can access the state in as similar\nway as Java functions, through the context object."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'\nimport pulsar\n\n# The classic ExclamationFunction that appends an\n# exclamation at the end of the input\nclass WordCountFunction(pulsar.Function):\n    def process(self, input, context):\n        for word in input.split():\n            context.incr_counter(word, 1)\n        return input + "!"\n\n')),(0,r.kt)("p",null,"Available methods for state management in the context object are:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'\ndef incr_counter(self, key, amount):\n  ""incr the counter of a given key in the managed state""\n\ndef get_counter(self, key):\n  """get the counter of a given key in the managed state"""\n\ndef put_state(self, key, value):\n  """update the value of a given key in the managed state"""\n\ndef get_state(self, key):\n  """get the value of a given key in the managed state"""\n\n')),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"Please ",(0,r.kt)("a",{parentName:"p",href:"/download"},"download")," Pulsar 2.3.0 and report feedback, issues or any comment into our mailing lists,\nslack channel or Github page. (",(0,r.kt)("a",{parentName:"p",href:"/contact"},"Contact page"),")"))}p.isMDXComponent=!0}}]);