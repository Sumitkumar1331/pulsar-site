"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[68083],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),o=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},m=function(e){var t=o(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=o(n),d=s,k=c["".concat(l,".").concat(d)]||c[d]||u[d]||r;return n?a.createElement(k,p(p({ref:t},m),{},{components:n})):a.createElement(k,p({ref:t},m))}));function d(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,p=new Array(r);p[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,p[1]=i;for(var o=2;o<r;o++)p[o]=n[o];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},53667:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>o});var a=n(87462),s=(n(67294),n(3905));const r={id:"functions-quickstart",title:"Getting started with Pulsar Functions",sidebar_label:"Get started"},p=void 0,i={unversionedId:"functions-quickstart",id:"functions-quickstart",title:"Getting started with Pulsar Functions",description:"This hands-on tutorial provides step-by-step instructions and examples on how to create and validate functions in a standalone Pulsar, including stateful functions and window functions.",source:"@site/docs/functions-quickstart.md",sourceDirName:".",slug:"/functions-quickstart",permalink:"/docs/next/functions-quickstart",draft:!1,editUrl:"https://github.com/apache/pulsar/edit/master/site2/docs/functions-quickstart.md",tags:[],version:"current",frontMatter:{id:"functions-quickstart",title:"Getting started with Pulsar Functions",sidebar_label:"Get started"},sidebar:"docsSidebar",previous:{title:"Concepts",permalink:"/docs/next/functions-concepts"},next:{title:"Set up function workers",permalink:"/docs/next/functions-worker"}},l={},o=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Start standalone Pulsar",id:"start-standalone-pulsar",level:2},{value:"Start functions",id:"start-functions",level:2},{value:"Start stateful functions",id:"start-stateful-functions",level:2},{value:"Start window functions",id:"start-window-functions",level:2}],m={toc:o};function u(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This hands-on tutorial provides step-by-step instructions and examples on how to create and validate functions in a ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/getting-started-standalone"},"standalone Pulsar"),", including stateful functions and window functions."),(0,s.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"JDK 8+. For more details, refer to ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar#pulsar-runtime-java-version-recommendation"},"Pulsar runtime Java version recommendation"),"."),(0,s.kt)("li",{parentName:"ul"},"Windows OS is not supported.")),(0,s.kt)("h2",{id:"start-standalone-pulsar"},"Start standalone Pulsar"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Start Pulsar locally."),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar standalone\n")),(0,s.kt)("p",{parentName:"li"},"All the components (including ZooKeeper, BookKeeper, broker, and so on) of a Pulsar service start in order. You can use the ",(0,s.kt)("inlineCode",{parentName:"p"},"bin/pulsar-admin brokers healthcheck")," command to make sure the Pulsar service is up and running.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Check the Pulsar binary protocol port."),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"telnet localhost 6650\n"))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Check the Pulsar Function cluster."),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin functions-worker get-cluster\n")),(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Output")),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-json"},'[{"workerId":"c-standalone-fw-localhost-6750","workerHostname":"localhost","port":6750}]\n'))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Make sure a public tenant exists."),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin tenants list\n")),(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Output")),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-json"},'"public"\n'))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Make sure a default namespace exists."),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin namespaces list public\n")),(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Output")),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-json"},'"public/default"\n'))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Make sure the table service is enabled successfully."),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"telnet localhost 4181\n")),(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Output")),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-text"},"Trying ::1...\ntelnet: connect to address ::1: Connection refused\nTrying 127.0.0.1...\nConnected to localhost.\nEscape character is '^]'.\n")))),(0,s.kt)("h2",{id:"start-functions"},"Start functions"),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"Before starting functions, you need to ",(0,s.kt)("a",{parentName:"p",href:"#start-standalone-pulsar"},"start Pulsar"),".")),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Create a tenant and a namespace."),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin tenants create test\nbin/pulsar-admin namespaces create test/test-namespace\n"))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"In the same terminal window as step 1, verify the tenant and the namespace."),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin namespaces list test\n")),(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Output")),(0,s.kt)("p",{parentName:"li"},"This output shows that both tenant and namespace are created successfully."),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-text"},'"test/test-namespace"\n'))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"In the same terminal window as step 1, create a function named ",(0,s.kt)("inlineCode",{parentName:"p"},"examples"),"."),(0,s.kt)("admonition",{parentName:"li",type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"You can see both the ",(0,s.kt)("inlineCode",{parentName:"p"},"example-function-config.yaml")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"api-examples.jar")," files under the ",(0,s.kt)("inlineCode",{parentName:"p"},"examples")," folder of the Pulsar\u2019s directory on your local machine.")),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin functions create \\\n--function-config-file examples/example-function-config.yaml \\\n--jar examples/api-examples.jar\n")),(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Output")),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-text"},"Created Successfully\n"))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"In the same terminal window as step 1, verify the function's configurations."),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin functions get \\\n--tenant test \\\n--namespace test-namespace \\\n--name example\n")),(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Output")),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-text"},'{\n  "tenant": "test",\n  "namespace": "test-namespace",\n  "name": "example",\n  "className": "org.apache.pulsar.functions.api.examples.ExclamationFunction",\n  "userConfig": "{\\"PublishTopic\\":\\"test_result\\"}",\n  "autoAck": true,\n  "parallelism": 1,\n  "source": {\n    "topicsToSerDeClassName": {\n      "test_src": ""\n    },\n    "typeClassName": "java.lang.String"\n  },\n  "sink": {\n    "topic": "test_result",\n    "typeClassName": "java.lang.String"\n  },\n  "resources": {}\n}\n'))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"In the same terminal window as step 1, verify the function's status."),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin functions status \\\n--tenant test \\\n--namespace test-namespace \\\n--name example\n")),(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Output")),(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},'"running": true')," shows that the function is running."),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-text"},'{\n  "numInstances" : 1,\n  "numRunning" : 1,\n  "instances" : [ {\n    "instanceId" : 0,\n    "status" : {\n      "running" : true,\n      "error" : "",\n      "numRestarts" : 0,\n      "numReceived" : 0,\n      "numSuccessfullyProcessed" : 0,\n      "numUserExceptions" : 0,\n      "latestUserExceptions" : [ ],\n      "numSystemExceptions" : 0,\n      "latestSystemExceptions" : [ ],\n      "averageLatency" : 0.0,\n      "lastInvocationTime" : 0,\n      "workerId" : "c-standalone-fw-localhost-8080"\n    }\n  } ]\n}\n'))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"In the same terminal window as step 1, subscribe to the ",(0,s.kt)("strong",{parentName:"p"},"output topic")," ",(0,s.kt)("inlineCode",{parentName:"p"},"test_result"),"."),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-client consume -s test-sub -n 0 test_result\n"))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"In a new terminal window, produce messages to the ",(0,s.kt)("strong",{parentName:"p"},"input topic")," ",(0,s.kt)("inlineCode",{parentName:"p"},"test_src"),"."),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'bin/pulsar-client produce -m "test-messages-`date`" -n 10 test_src\n'))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"In the same terminal window as step 1, the messages produced by the ",(0,s.kt)("inlineCode",{parentName:"p"},"example")," function are returned. "),(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Output")),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-text"},"----- got message -----\ntest-messages-Thu Jul 19 11:59:15 PDT 2021!\n----- got message -----\ntest-messages-Thu Jul 19 11:59:15 PDT 2021!\n----- got message -----\ntest-messages-Thu Jul 19 11:59:15 PDT 2021!\n----- got message -----\ntest-messages-Thu Jul 19 11:59:15 PDT 2021!\n----- got message -----\ntest-messages-Thu Jul 19 11:59:15 PDT 2021!\n----- got message -----\ntest-messages-Thu Jul 19 11:59:15 PDT 2021!\n----- got message -----\ntest-messages-Thu Jul 19 11:59:15 PDT 2021!\n----- got message -----\ntest-messages-Thu Jul 19 11:59:15 PDT 2021!\n----- got message -----\ntest-messages-Thu Jul 19 11:59:15 PDT 2021!\n----- got message -----\ntest-messages-Thu Jul 19 11:59:15 PDT 2021!\n")))),(0,s.kt)("h2",{id:"start-stateful-functions"},"Start stateful functions"),(0,s.kt)("p",null,"The standalone mode of Pulsar enables BookKeeper table service for stateful functions. For more information, see ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/functions-develop-state"},"Configure state storage"),"."),(0,s.kt)("p",null,"The following example provides instructions to validate counter functions."),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"Before starting stateful functions, you need to ",(0,s.kt)("a",{parentName:"p",href:"#start-standalone-pulsar"},"start Pulsar"),".")),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Create a function named ",(0,s.kt)("inlineCode",{parentName:"p"},"word_count"),"."),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin functions create \\\n--function-config-file examples/example-function-config.yaml \\\n--jar examples/api-examples.jar \\\n--name word_count \\\n--className org.apache.pulsar.functions.api.examples.WordCountFunction \\\n--inputs test_wordcount_src \\\n--output test_wordcount_dest\n")),(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Output")),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-text"},"Created Successfully\n"))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"In the same terminal window as step 1, get the information of the ",(0,s.kt)("inlineCode",{parentName:"p"},"word_count")," function."),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin functions get \\\n--tenant test \\\n--namespace test-namespace \\\n--name word_count\n")),(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Output")),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-text"},'{\n  "tenant": "test",\n  "namespace": "test-namespace",\n  "name": "word_count",\n  "className": "org.apache.pulsar.functions.api.examples.WordCountFunction",\n  "inputSpecs": {\n    "test_wordcount_src": {\n      "isRegexPattern": false\n    }\n  },\n  "output": "test_wordcount_dest",\n  "processingGuarantees": "ATLEAST_ONCE",\n  "retainOrdering": false,\n  "userConfig": {\n    "PublishTopic": "test_result"\n  },\n  "runtime": "JAVA",\n  "autoAck": true,\n  "parallelism": 1,\n  "resources": {\n    "cpu": 1.0,\n    "ram": 1073741824,\n    "disk": 10737418240\n  },\n  "cleanupSubscription": true\n}\n'))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"In the same terminal window as step 1, get the status of the ",(0,s.kt)("inlineCode",{parentName:"p"},"word_count")," function."),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin functions status \\\n--tenant test \\\n--namespace test-namespace\\\n--name word_count\n")),(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Output")),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-text"},'{\n  "numInstances" : 1,\n  "numRunning" : 1,\n  "instances" : [ {\n    "instanceId" : 0,\n    "status" : {\n      "running" : true,\n       "error" : "",\n       "numRestarts" : 0,\n       "numReceived" : 0,\n       "numSuccessfullyProcessed" : 0,\n       "numUserExceptions" : 0,\n       "latestUserExceptions" : [ ],\n       "numSystemExceptions" : 0,\n       "latestSystemExceptions" : [ ],\n       "averageLatency" : 0.0,\n       "lastInvocationTime" : 0,\n       "workerId" : "c-standalone-fw-localhost-8080"\n    }\n  } ]\n}\n'))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"In the same terminal window as step 1, query the state table for the function with the key ",(0,s.kt)("inlineCode",{parentName:"p"},"hello"),". This operation watches the changes associated with ",(0,s.kt)("inlineCode",{parentName:"p"},"hello"),"."),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin functions querystate \\\n--tenant test \\\n--namespace test-namespace \\\n--name word_count -k hello -w\n")),(0,s.kt)("admonition",{parentName:"li",type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"For more information about the ",(0,s.kt)("inlineCode",{parentName:"p"},"pulsar-admin functions querystate options")," command, including flags, descriptions, default values, and shorthands, see ",(0,s.kt)("a",{href:"/tools/pulsar-admin/",target:"_blank"},"Admin API"),".")),(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Output")),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-text"},"key 'hello' doesn't exist.\nkey 'hello' doesn't exist.\nkey 'hello' doesn't exist.\n...\n"))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"In a new terminal window, produce 10 messages with ",(0,s.kt)("inlineCode",{parentName:"p"},"hello")," to the ",(0,s.kt)("strong",{parentName:"p"},"input topic")," ",(0,s.kt)("inlineCode",{parentName:"p"},"test_wordcount_src")," using one of the following methods. The value of ",(0,s.kt)("inlineCode",{parentName:"p"},"hello")," is updated to 10."),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Method 1")),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'bin/pulsar-client produce -m "hello" -n 10 test_wordcount_src\n'))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Method 2")),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin functions putstate \\\n--tenant test \\\n--namespace test-namespace \\\n--name word_count hello-word \\\n")),(0,s.kt)("admonition",{parentName:"li",type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"For more information about the ",(0,s.kt)("inlineCode",{parentName:"p"},"pulsar-admin functions putstate options")," command, including flags, descriptions, default values, and shorthands, see ",(0,s.kt)("a",{href:"/tools/pulsar-admin/",target:"_blank"},"Admin API"),"."))))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"In the same terminal window as step 1, check the result. "),(0,s.kt)("p",{parentName:"li"},"The result shows that the ",(0,s.kt)("strong",{parentName:"p"},"output topic")," ",(0,s.kt)("inlineCode",{parentName:"p"},"test_wordcount_dest")," receives the messages."),(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Output")),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "key": "hello",\n  "numberValue": 10,\n  "version": 9\n}\n'))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"In the terminal window as step 5, produce another 10 messages with ",(0,s.kt)("inlineCode",{parentName:"p"},"hello"),". The value of ",(0,s.kt)("inlineCode",{parentName:"p"},"hello")," is updated to 20."),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'bin/pulsar-client produce -m "hello" -n 10 test_wordcount_src\n'))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"In the same terminal window as step 1, check the result. "),(0,s.kt)("p",{parentName:"li"},"The result shows that the ",(0,s.kt)("strong",{parentName:"p"},"output topic")," ",(0,s.kt)("inlineCode",{parentName:"p"},"test_wordcount_dest")," receives the value of 20."),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-text"},"value = 10\nvalue = 20\n")))),(0,s.kt)("h2",{id:"start-window-functions"},"Start window functions"),(0,s.kt)("p",null,"Window functions are a special form of Pulsar Functions. For more information, see ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/functions-concepts#window-function"},"concepts"),"."),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"Before starting window functions, you need to ",(0,s.kt)("a",{parentName:"p",href:"#start-standalone-pulsar"},"start Pulsar"),".")),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Create a tenant and a namespace."),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin tenants create test\nbin/pulsar-admin namespaces create test/test-namespace\n"))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"In the same terminal window as step 1, verify the tenant and the namespace."),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin namespaces list test\n")),(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Output")),(0,s.kt)("p",{parentName:"li"},"This output shows that both tenant and namespace are created successfully."),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-text"},'"test/test-namespace"\n'))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"In the same terminal window as step 1, create a function named ",(0,s.kt)("inlineCode",{parentName:"p"},"example"),"."),(0,s.kt)("admonition",{parentName:"li",type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"You can see both ",(0,s.kt)("inlineCode",{parentName:"p"},"example-window-function-config.yaml")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"api-examples.jar")," files under the ",(0,s.kt)("inlineCode",{parentName:"p"},"examples")," folder of the Pulsar\u2019s directory on your local machine.")),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin functions create --function-config-file \\\nexamples/example-window-function-config.yaml \\\n--jar examples/api-examples.jar\n")),(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Output")),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-text"},"Created Successfully\n"))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"In the same terminal window as step 1, verify the function's configurations."),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin functions get \\\n--tenant test \\\n--namespace test-namespace \\\n--name example\n")),(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Output")),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-text"},'{\n  "tenant": "test",\n  "namespace": "test-namespace",\n  "name": "example",\n  "className": "org.apache.pulsar.functions.api.examples.ExclamationFunction",\n  "userConfig": "{\\"PublishTopic\\":\\"test_result\\"}",\n  "autoAck": true,\n  "parallelism": 1,\n  "source": {\n    "topicsToSerDeClassName": {\n      "test_src": ""\n    },\n    "typeClassName": "java.lang.String"\n  },\n  "sink": {\n    "topic": "test_result",\n    "typeClassName": "java.lang.String"\n  },\n  "resources": {}\n}\n'))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"In the same terminal window as step 1, verify the function\u2019s status."),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin functions status \\\n--tenant test \\\n--namespace test-namespace \\\n--name example\n")),(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Output")),(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},'"running": true')," shows that the function is running."),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-text"},'{\n  "numInstances" : 1,\n  "numRunning" : 1,\n  "instances" : [ {\n    "instanceId" : 0,\n    "status" : {\n      "running" : true,\n      "error" : "",\n      "numRestarts" : 0,\n      "numReceived" : 0,\n      "numSuccessfullyProcessed" : 0,\n      "numUserExceptions" : 0,\n      "latestUserExceptions" : [ ],\n      "numSystemExceptions" : 0,\n      "latestSystemExceptions" : [ ],\n      "averageLatency" : 0.0,\n      "lastInvocationTime" : 0,\n      "workerId" : "c-standalone-fw-localhost-8080"\n    }\n  } ]\n}\n'))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"In the same terminal window as step 1, subscribe to the ",(0,s.kt)("strong",{parentName:"p"},"output topic")," ",(0,s.kt)("inlineCode",{parentName:"p"},"test_result"),"."),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-client consume -s test-sub -n 0 test_result\n"))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"In a new terminal window, produce messages to the ",(0,s.kt)("strong",{parentName:"p"},"input topic")," ",(0,s.kt)("inlineCode",{parentName:"p"},"test_src"),"."),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'bin/pulsar-client produce -m "test-messages-`date`" -n 10 test_src\n'))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"In the same terminal window as step 1, the messages produced by the window function ",(0,s.kt)("inlineCode",{parentName:"p"},"example")," are returned. "),(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Output")),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-text"},"----- got message -----\ntest-messages-Thu Jul 19 11:59:15 PDT 2021!\n----- got message -----\ntest-messages-Thu Jul 19 11:59:15 PDT 2021!\n----- got message -----\ntest-messages-Thu Jul 19 11:59:15 PDT 2021!\n----- got message -----\ntest-messages-Thu Jul 19 11:59:15 PDT 2021!\n----- got message -----\ntest-messages-Thu Jul 19 11:59:15 PDT 2021!\n----- got message -----\ntest-messages-Thu Jul 19 11:59:15 PDT 2021!\n----- got message -----\ntest-messages-Thu Jul 19 11:59:15 PDT 2021!\n----- got message -----\ntest-messages-Thu Jul 19 11:59:15 PDT 2021!\n----- got message -----\ntest-messages-Thu Jul 19 11:59:15 PDT 2021!\n----- got message -----\ntest-messages-Thu Jul 19 11:59:15 PDT 2021!\n")))))}u.isMDXComponent=!0}}]);