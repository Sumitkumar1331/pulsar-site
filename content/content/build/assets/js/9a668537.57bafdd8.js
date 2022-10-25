"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[6417],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},61756:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={},i="ZooKeeper",l={unversionedId:"reference-configuration-zookeeper",id:"reference-configuration-zookeeper",title:"ZooKeeper",description:"ZooKeeper handles a broad range of essential configuration- and coordination-related tasks for Pulsar. The default configuration file for ZooKeeper is in the conf/zookeeper.conf file in your Pulsar installation. The following parameters are available:",source:"@site/docs/reference-configuration-zookeeper.md",sourceDirName:".",slug:"/reference-configuration-zookeeper",permalink:"/docs/next/reference-configuration-zookeeper",draft:!1,editUrl:"https://github.com/apache/pulsar/edit/master/site2/docs/reference-configuration-zookeeper.md",tags:[],version:"current",frontMatter:{}},s={},p=[{value:"tickTime",id:"ticktime",level:3},{value:"initLimit",id:"initlimit",level:3},{value:"syncLimit",id:"synclimit",level:3},{value:"dataDir",id:"datadir",level:3},{value:"clientPort",id:"clientport",level:3},{value:"admin.enableServer",id:"adminenableserver",level:3},{value:"admin.serverPort",id:"adminserverport",level:3},{value:"autopurge.snapRetainCount",id:"autopurgesnapretaincount",level:3},{value:"autopurge.purgeInterval",id:"autopurgepurgeinterval",level:3},{value:"forceSync",id:"forcesync",level:3},{value:"maxClientCnxns",id:"maxclientcnxns",level:3}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"zookeeper"},"ZooKeeper"),(0,o.kt)("p",null,"ZooKeeper handles a broad range of essential configuration- and coordination-related tasks for Pulsar. The default configuration file for ZooKeeper is in the ",(0,o.kt)("inlineCode",{parentName:"p"},"conf/zookeeper.conf")," file in your Pulsar installation. The following parameters are available:"),(0,o.kt)("h3",{id:"ticktime"},"tickTime"),(0,o.kt)("p",null,"The tick is the basic unit of time in ZooKeeper, measured in milliseconds and used to regulate things like heartbeats and timeouts. tickTime is the length of a single tick."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Default"),": 2000"),(0,o.kt)("h3",{id:"initlimit"},"initLimit"),(0,o.kt)("p",null,"The maximum time, in ticks, that the leader ZooKeeper server allows follower ZooKeeper servers to successfully connect and sync. The tick time is set in milliseconds using the tickTime parameter."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Default"),": 10"),(0,o.kt)("h3",{id:"synclimit"},"syncLimit"),(0,o.kt)("p",null,"The maximum time, in ticks, that a follower ZooKeeper server is allowed to sync with other ZooKeeper servers. The tick time is set in milliseconds using the tickTime parameter."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Default"),": 5"),(0,o.kt)("h3",{id:"datadir"},"dataDir"),(0,o.kt)("p",null,"The location where ZooKeeper will store in-memory database snapshots as well as the transaction log of updates to the database."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Default"),": data/zookeeper"),(0,o.kt)("h3",{id:"clientport"},"clientPort"),(0,o.kt)("p",null,"The port on which the ZooKeeper server will listen for connections."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Default"),": 2181"),(0,o.kt)("h3",{id:"adminenableserver"},"admin.enableServer"),(0,o.kt)("p",null,"The port at which the admin listens."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Default"),": true"),(0,o.kt)("h3",{id:"adminserverport"},"admin.serverPort"),(0,o.kt)("p",null,"The port at which the admin listens."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Default"),": 9990"),(0,o.kt)("h3",{id:"autopurgesnapretaincount"},"autopurge.snapRetainCount"),(0,o.kt)("p",null,"In ZooKeeper, auto purge determines how many recent snapshots of the database stored in dataDir to retain within the time interval specified by autopurge.purgeInterval (while deleting the rest)."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Default"),": 3"),(0,o.kt)("h3",{id:"autopurgepurgeinterval"},"autopurge.purgeInterval"),(0,o.kt)("p",null,"The time interval, in hours, by which the ZooKeeper database purge task is triggered. Setting to a non-zero number will enable auto purge; setting to 0 will disable. Read this guide before enabling auto purge."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Default"),": 1"),(0,o.kt)("h3",{id:"forcesync"},"forceSync"),(0,o.kt)("p",null,"Requires updates to be synced to media of the transaction log before finishing processing the update. If this option is set to 'no', ZooKeeper will not require updates to be synced to the media. WARNING: it's not recommended to run a production ZK cluster with ",(0,o.kt)("inlineCode",{parentName:"p"},"forceSync")," disabled."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Default"),": yes"),(0,o.kt)("h3",{id:"maxclientcnxns"},"maxClientCnxns"),(0,o.kt)("p",null,"The maximum number of client connections. Increase this if you need to handle more ZooKeeper clients."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Default"),": 60"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"In addition to the parameters above, configuring ZooKeeper for Pulsar involves adding a ",(0,o.kt)("inlineCode",{parentName:"p"},"server.N")," line to the ",(0,o.kt)("inlineCode",{parentName:"p"},"conf/zookeeper.conf")," file for each node in the ZooKeeper cluster, where ",(0,o.kt)("inlineCode",{parentName:"p"},"N")," is the number of the ZooKeeper node. Here's an example of a three-node ZooKeeper cluster:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-properties"},"\nserver.1=zk1.us-west.example.com:2888:3888\nserver.2=zk2.us-west.example.com:2888:3888\nserver.3=zk3.us-west.example.com:2888:3888\n\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"We strongly recommend consulting the ",(0,o.kt)("a",{parentName:"p",href:"https://zookeeper.apache.org/doc/current/zookeeperAdmin.html"},"ZooKeeper Administrator's Guide")," for a more thorough and comprehensive introduction to ZooKeeper configuration")))}c.isMDXComponent=!0}}]);