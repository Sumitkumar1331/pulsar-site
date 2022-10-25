"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[84980],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>m});var l=a(67294);function p(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){p(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function n(e,t){if(null==e)return{};var a,l,p=function(e,t){if(null==e)return{};var a,l,p={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(p[a]=e[a]);return p}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(p[a]=e[a])}return p}var u=l.createContext({}),o=function(e){var t=l.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=o(e.components);return l.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},c=l.forwardRef((function(e,t){var a=e.components,p=e.mdxType,r=e.originalType,u=e.parentName,h=n(e,["components","mdxType","originalType","parentName"]),c=o(a),m=p,k=c["".concat(u,".").concat(m)]||c[m]||s[m]||r;return a?l.createElement(k,i(i({ref:t},h),{},{components:a})):l.createElement(k,i({ref:t},h))}));function m(e,t){var a=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var r=a.length,i=new Array(r);i[0]=c;var n={};for(var u in t)hasOwnProperty.call(t,u)&&(n[u]=t[u]);n.originalType=e,n.mdxType="string"==typeof e?e:p,i[1]=n;for(var o=2;o<r;o++)i[o]=a[o];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}c.displayName="MDXCreateElement"},93005:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>s,frontMatter:()=>r,metadata:()=>n,toc:()=>o});var l=a(87462),p=(a(67294),a(3905));const r={id:"pulsar-2.8.2",title:"Apache Pulsar 2.8.2",sidebar_label:"Apache Pulsar 2.8.2"},i=void 0,n={unversionedId:"versioned/pulsar-2.8.2",id:"versioned/pulsar-2.8.2",title:"Apache Pulsar 2.8.2",description:"2021-12-20",source:"@site/release-notes/versioned/pulsar-2.8.2.md",sourceDirName:"versioned",slug:"/versioned/pulsar-2.8.2",permalink:"/release-notes/versioned/pulsar-2.8.2",draft:!1,tags:[],version:"current",frontMatter:{id:"pulsar-2.8.2",title:"Apache Pulsar 2.8.2",sidebar_label:"Apache Pulsar 2.8.2"}},u={},o=[{value:"2021-12-20",id:"2021-12-20",level:4},{value:"Security",id:"security",level:3},{value:"Broker",id:"broker",level:3},{value:"Functions",id:"functions",level:3},{value:"Pulsar Admin",id:"pulsar-admin",level:3},{value:"Tiered Storage",id:"tiered-storage",level:3},{value:"Pulsar SQL",id:"pulsar-sql",level:3},{value:"CLI",id:"cli",level:3},{value:"Unit Test",id:"unit-test",level:3},{value:"BookKeeper",id:"bookkeeper",level:3},{value:"Proxy",id:"proxy",level:3}],h={toc:o};function s(e){let{components:t,...a}=e;return(0,p.kt)("wrapper",(0,l.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h4",{id:"2021-12-20"},"2021-12-20"),(0,p.kt)("h3",{id:"security"},"Security"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"Upgrade to Log4J 2.17.0 to mitigate CVE-2021-45105 ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13392"},"#13392")),(0,p.kt)("li",{parentName:"ul"},"Upgrade Netty to 4.1.72 - CVE-2021-43797 ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13328"},"#13328")),(0,p.kt)("li",{parentName:"ul"},"Bump log4j to 2.15.0 ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13226"},"#13226")),(0,p.kt)("li",{parentName:"ul"},"Revert new AuthorizationProvider method ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13133"},"#13133")),(0,p.kt)("li",{parentName:"ul"},"Support CLEAR_BACKLOG namespace op after enable auth ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12963"},"#12963")),(0,p.kt)("li",{parentName:"ul"},"Upgrade netty to 4.1.68.Final ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12218"},"#12218")),(0,p.kt)("li",{parentName:"ul"},"Support disabling non-TLS service ports ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11681"},"#11681")),(0,p.kt)("li",{parentName:"ul"},"Upgrade Jetty to 9.4.43.v20210629 ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11660"},"#11660"))),(0,p.kt)("h3",{id:"broker"},"Broker"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"Fix and improve topic ownership assignment ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13069"},"#13069")),(0,p.kt)("li",{parentName:"ul"},"Fix LeaderElectionService.getCurrentLeader and add support for empheralOwner in MockZooKeeper ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13066"},"#13066")),(0,p.kt)("li",{parentName:"ul"},"Do not reuse the Failed OpAddEntry object which leads to the bundle unloading timeout. ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12993"},"#12993")),(0,p.kt)("li",{parentName:"ul"},"Remove readerCaches and close reader when exception occurs in SystemTopicBasedTopicPoliciesService ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12873"},"#12873")),(0,p.kt)("li",{parentName:"ul"},"Fix TopicPoliciesCacheNotInitException issue. ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12773"},"#12773")),(0,p.kt)("li",{parentName:"ul"},"Support UNSUBSCRIBE namespace op after enabling auth ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12742"},"#12742")),(0,p.kt)("li",{parentName:"ul"},"Fix race condition in PersistentTopic#addReplicationCluster ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12729"},"#12729")),(0,p.kt)("li",{parentName:"ul"},"Even if always compatible is set, consumers cannot be created ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12721"},"#12721")),(0,p.kt)("li",{parentName:"ul"},"Fix the incorrect total size when BrokerEntryMetadata is enabled ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12714"},"#12714")),(0,p.kt)("li",{parentName:"ul"},"Fix lost compaction data due to compaction properties missed during reset-cursor ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12698"},"#12698")),(0,p.kt)("li",{parentName:"ul"},"Fix TestRunMain test ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12675"},"#12675")),(0,p.kt)("li",{parentName:"ul"},"Support GET_METADATA topic op after enabling auth ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12656"},"#12656")),(0,p.kt)("li",{parentName:"ul"},"Fix false positive ownership check in OwnershipCache#checkOwnership ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12650"},"#12650")),(0,p.kt)("li",{parentName:"ul"},"Optimize exception information for schemas ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12647"},"#12647")),(0,p.kt)("li",{parentName:"ul"},"Add @Test annotation to test methods ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12640"},"#12640")),(0,p.kt)("li",{parentName:"ul"},"Support retry when creating reader of Topic Policies ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12622"},"#12622")),(0,p.kt)("li",{parentName:"ul"},"Fix String should use equals but not ==. ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12619"},"#12619")),(0,p.kt)("li",{parentName:"ul"},"Fix 12614, waitingForPingResponse needs to be modified with volatile for concurrent sence  ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12615"},"#12615")),(0,p.kt)("li",{parentName:"ul"},"Cleanup ProxyPublishConsumeTest ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12607"},"#12607")),(0,p.kt)("li",{parentName:"ul"},"Avoid passing OpAddEntry across a thread boundary in asyncAddEntry ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12606"},"#12606")),(0,p.kt)("li",{parentName:"ul"},"Do not move the non-durable cursor position when trimming ledgers while topic with compaction ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12602"},"#12602")),(0,p.kt)("li",{parentName:"ul"},"Allow ",(0,p.kt)("inlineCode",{parentName:"li"},"GetTopicsOfNamespace")," op with ",(0,p.kt)("inlineCode",{parentName:"li"},"consume")," permission ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12600"},"#12600")),(0,p.kt)("li",{parentName:"ul"},"Allow configuring schema compatibility policy for system topics ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12598"},"#12598")),(0,p.kt)("li",{parentName:"ul"},"Cleanup already deleted namespace topics. ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12597"},"#12597")),(0,p.kt)("li",{parentName:"ul"},"Fix additional servlets NAR might extract to null directory ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12585"},"#12585")),(0,p.kt)("li",{parentName:"ul"},"Fix log typo in NamespaceService#checkHeartbeatNamespace  ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12582"},"#12582")),(0,p.kt)("li",{parentName:"ul"},"Add OpAddEntry to pendingAddEntries after the state check ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12570"},"#12570")),(0,p.kt)("li",{parentName:"ul"},"Cancel scheduled tasks when deleting ManagedLedgerImpl ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12565"},"#12565")),(0,p.kt)("li",{parentName:"ul"},"Add git branch information for PulsarVersion ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12541"},"#12541")),(0,p.kt)("li",{parentName:"ul"},"Websocket should pass the encryption context to consumers ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12539"},"#12539")),(0,p.kt)("li",{parentName:"ul"},"The count of topics on the bundle is less than 2\uff0cskip split ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12527"},"#12527")),(0,p.kt)("li",{parentName:"ul"},"Fix the reader skips compacted data which original ledger been removed ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12522"},"#12522")),(0,p.kt)("li",{parentName:"ul"},"Fix ",(0,p.kt)("inlineCode",{parentName:"li"},"messageDedup")," delete inactive producer name ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12493"},"#12493")),(0,p.kt)("li",{parentName:"ul"},"Optimize the code: remove extra spaces ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12470"},"#12470")),(0,p.kt)("li",{parentName:"ul"},"Future completed twice in the method of  impl.MLPendingAckStore#closeAsync ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12362"},"#12362")),(0,p.kt)("li",{parentName:"ul"},"Fix the race of delete subscription and delete topic ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12240"},"#12240")),(0,p.kt)("li",{parentName:"ul"},"Disable stats recorder for built-in PulsarClient ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12217"},"#12217")),(0,p.kt)("li",{parentName:"ul"},"Fix delete authentication policies when deleting topics. ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12215"},"#12215")),(0,p.kt)("li",{parentName:"ul"},"Optimize the memory usage of Cache Eviction ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12045"},"#12045")),(0,p.kt)("li",{parentName:"ul"},"Avoid adding duplicated BrokerEntryMetadata ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12018"},"#12018")),(0,p.kt)("li",{parentName:"ul"},"Fix update ledger list to znode version mismatch failed, ledger not delete ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12015"},"#12015")),(0,p.kt)("li",{parentName:"ul"},"Fix messages in TopicPolicies will never be cleaned up ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11928"},"#11928")),(0,p.kt)("li",{parentName:"ul"},"Fix returned wrong hash ranges for the consumer with the same consumer name ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12212"},"#12212")),(0,p.kt)("li",{parentName:"ul"},"Add Key_Shared metadata to topic stats ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11839"},"#11839")),(0,p.kt)("li",{parentName:"ul"},"Fix build from submodules (broker, transaction coordinator) ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11795"},"#11795")),(0,p.kt)("li",{parentName:"ul"},"Add method to clear up transaction buffer snapshot ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11934"},"#11934")),(0,p.kt)("li",{parentName:"ul"},"Increase the test stability of transactionTest ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11541"},"#11541")),(0,p.kt)("li",{parentName:"ul"},"Add maven.restlet.org repository ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13248"},"#13248")),(0,p.kt)("li",{parentName:"ul"},"Fix and improve topic ownership assignment (#13069) ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13117"},"#13117")),(0,p.kt)("li",{parentName:"ul"},"Evaluate the current protocol version once ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13045"},"#13045")),(0,p.kt)("li",{parentName:"ul"},'Revert "Set default root log level to debug" and make PULSAR_LOG_ROOT_LEVEL default to PULSAR_LOG_LEVEL ',(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12941"},"#12941")),(0,p.kt)("li",{parentName:"ul"},"Catch exceptions in scheduled tasks to prevent unintended cancellation ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12853"},"#12853")),(0,p.kt)("li",{parentName:"ul"},"Fix producer getting incorrectly removed from topic's ",(0,p.kt)("inlineCode",{parentName:"li"},"producers")," map ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12846"},"#12846")),(0,p.kt)("li",{parentName:"ul"},"Synchronize updates to the inactiveProducers map in MessageD\u2026 ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12820"},"#12820")),(0,p.kt)("li",{parentName:"ul"},"Close connection after receiving unexpected SendCommand ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12780"},"#12780")),(0,p.kt)("li",{parentName:"ul"},"Fix namespace policy override ignored when creating subscription ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12699"},"#12699")),(0,p.kt)("li",{parentName:"ul"},"Update lombok to 1.18.22 ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12466"},"#12466")),(0,p.kt)("li",{parentName:"ul"},"Fix skips compacted data for reader/consumer ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12464"},"#12464")),(0,p.kt)("li",{parentName:"ul"},"Remove data race in MultiTopicsConsumerImpl to ensure correct message order ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12456"},"#12456")),(0,p.kt)("li",{parentName:"ul"},"Fix the retry topic's ",(0,p.kt)("inlineCode",{parentName:"li"},"REAL_TOPIC")," & ",(0,p.kt)("inlineCode",{parentName:"li"},"ORIGIN_MESSAGE_ID")," property ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12451"},"#12451")),(0,p.kt)("li",{parentName:"ul"},"Change the producer fence error log to debug level ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12447"},"#12447")),(0,p.kt)("li",{parentName:"ul"},"Reduce the readFailureBackoff time ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12444"},"#12444")),(0,p.kt)("li",{parentName:"ul"},"Fix wrong property name in NamespaceIsolationDataImpl#secondary ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12433"},"#12433")),(0,p.kt)("li",{parentName:"ul"},"Optimize SecurityUtility code flow ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12431"},"#12431")),(0,p.kt)("li",{parentName:"ul"},"Fix compactor skips data from last compacted Ledger ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12429"},"#12429")),(0,p.kt)("li",{parentName:"ul"},"Remove redundant code ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12424"},"#12424")),(0,p.kt)("li",{parentName:"ul"},"Fix some tests not enabled in integration tests ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12417"},"#12417")),(0,p.kt)("li",{parentName:"ul"},"Use weak ref to ClientConnection for timeout task ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12409"},"#12409")),(0,p.kt)("li",{parentName:"ul"},"Fix cherry-pick issue ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12397"},"#12397")),(0,p.kt)("li",{parentName:"ul"},"Fix the null point caused by deleting the system topic policy ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12367"},"#12367")),(0,p.kt)("li",{parentName:"ul"},"Update delete inactive topic configuration documentation ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12350"},"#12350")),(0,p.kt)("li",{parentName:"ul"},"Add log to print exception stack. ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12345"},"#12345")),(0,p.kt)("li",{parentName:"ul"},"Avoid potentially blocking calls to metadata on critical threads ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12339"},"#12339")),(0,p.kt)("li",{parentName:"ul"},"Fix NPE when removing cursor ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12297"},"#12297")),(0,p.kt)("li",{parentName:"ul"},"Print log when configuration is failed to load ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12280"},"#12280")),(0,p.kt)("li",{parentName:"ul"},"Fix incorrect returned last message ID while the ",(0,p.kt)("inlineCode",{parentName:"li"},"lastConfirmedEntry")," with negative entry ID ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12277"},"#12277")),(0,p.kt)("li",{parentName:"ul"},"Fix TTL expiry does not take effect ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12266"},"#12266")),(0,p.kt)("li",{parentName:"ul"},"The loadbalancer should avoid offload the heartbeat namespace ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12252"},"#12252")),(0,p.kt)("li",{parentName:"ul"},"Fix typo of the returned last message ID when the last message ID is from compacted ledger ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12237"},"#12237")),(0,p.kt)("li",{parentName:"ul"},"Add support for splitting topics and partition labels in Prometheus ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12225"},"#12225")),(0,p.kt)("li",{parentName:"ul"},"Fix lost message issues 12221 ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12223"},"#12223")),(0,p.kt)("li",{parentName:"ul"},"Allow to config pulsar client allocator out of memory policy ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12200"},"#12200")),(0,p.kt)("li",{parentName:"ul"},"Remove redundant parameters ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12188"},"#12188")),(0,p.kt)("li",{parentName:"ul"},"Fix incorrect logger numbers in tests ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12168"},"#12168")),(0,p.kt)("li",{parentName:"ul"},"Return the last position of the compacted data while the original data has been deleted ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12161"},"#12161")),(0,p.kt)("li",{parentName:"ul"},"Improve exceptions thrown when handling the schema resource ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12155"},"#12155")),(0,p.kt)("li",{parentName:"ul"},"Fix prefix setting in JWT authn and avoid multi calls for the getProperty ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12132"},"#12132")),(0,p.kt)("li",{parentName:"ul"},"Fix used after recycle issue in OpAddEntry ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12103"},"#12103")),(0,p.kt)("li",{parentName:"ul"},"Bugfix: Fix rackaware placement policy init error ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12097"},"#12097")),(0,p.kt)("li",{parentName:"ul"},"Fix wrong key-hash selector used for new consumers after all the previous consumers disconnected ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12035"},"#12035")),(0,p.kt)("li",{parentName:"ul"},"Fix cherry-pick issue on branch-2.8 ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11982"},"#11982")),(0,p.kt)("li",{parentName:"ul"},"Remove unused variable and unnecessary box in NamespaceBundleFactory ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11975"},"#11975")),(0,p.kt)("li",{parentName:"ul"},"Print position info when can't find next valid position. ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11969"},"#11969")),(0,p.kt)("li",{parentName:"ul"},"Fix NPE ZkBookieRackAffinityMapping ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11947"},"#11947")),(0,p.kt)("li",{parentName:"ul"},"Avoid to infinitely split bundle ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11937"},"#11937")),(0,p.kt)("li",{parentName:"ul"},"Improved logic for pausing replicated subscription snapshots when no traffic ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11922"},"#11922")),(0,p.kt)("li",{parentName:"ul"},"Fix ZKSessionTest.testReacquireLocksAfterSessionLost ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11886"},"#11886")),(0,p.kt)("li",{parentName:"ul"},"Schema compatibility strategy in broker level. ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11856"},"#11856")),(0,p.kt)("li",{parentName:"ul"},"Use TestRetrySupport for BaseMetadataStoreTests to cleanup state between retries ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11771"},"#11771")),(0,p.kt)("li",{parentName:"ul"},"Remove replace_maven-wagon-http-version.sh script ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11718"},"#11718")),(0,p.kt)("li",{parentName:"ul"},"Check null or empty instead of catch NPE ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11655"},"#11655")),(0,p.kt)("li",{parentName:"ul"},"Avoid duplicate deletion of schema ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11640"},"#11640")),(0,p.kt)("li",{parentName:"ul"},"Fix subscribeRateLimiter cannot be disabled ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11614"},"#11614")),(0,p.kt)("li",{parentName:"ul"},"Fix race condition in concurrent schema deletion ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11606"},"#11606")),(0,p.kt)("li",{parentName:"ul"},"Use ",(0,p.kt)("inlineCode",{parentName:"li"},"get")," instead of ",(0,p.kt)("inlineCode",{parentName:"li"},"join")," to avoid getting stuck ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11597"},"#11597")),(0,p.kt)("li",{parentName:"ul"},"Avoid to cal getMaximumRolloverTimeMs everytime ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11513"},"#11513")),(0,p.kt)("li",{parentName:"ul"},"Fix improper class/method/field modifiers ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10837"},"#10837")),(0,p.kt)("li",{parentName:"ul"},"Support max-connection and max-connection-per-IP ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10754"},"#10754")),(0,p.kt)("li",{parentName:"ul"},"Allow Integration Tests Jar to be deployed to Maven central ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12292"},"#12292"))),(0,p.kt)("h3",{id:"functions"},"Functions"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"K8s runtime: force deletion to avoid hung function worker during connector restart ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12504"},"#12504")),(0,p.kt)("li",{parentName:"ul"},"Fix k8s pulsar functions containers not exposing metrics port for scraping ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12065"},"#12065")),(0,p.kt)("li",{parentName:"ul"},"Enable protobuf-native schema support for function ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11868"},"#11868")),(0,p.kt)("li",{parentName:"ul"},"Pass ",(0,p.kt)("inlineCode",{parentName:"li"},"SubscriptionPosition")," from ",(0,p.kt)("inlineCode",{parentName:"li"},"FunctionDetails")," to ",(0,p.kt)("inlineCode",{parentName:"li"},"FunctionConfig")," / ",(0,p.kt)("inlineCode",{parentName:"li"},"SinkConfig")," ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11831"},"#11831")),(0,p.kt)("li",{parentName:"ul"},"Reorganize the context hierarchy for functions ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10631"},"#10631")),(0,p.kt)("li",{parentName:"ul"},"Remove the deprecated API usage in HDFS ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12080"},"#12080")),(0,p.kt)("li",{parentName:"ul"},"Stop OffsetStore when stopping the connector ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12457"},"#12457")),(0,p.kt)("li",{parentName:"ul"},"Support set subscription position ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11990"},"#11990")),(0,p.kt)("li",{parentName:"ul"},"Sync to the latest function proto ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11853"},"#11853")),(0,p.kt)("li",{parentName:"ul"},"Fix classloader leaks ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12973"},"#12973")),(0,p.kt)("li",{parentName:"ul"},"Add missing dependency ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12246"},"#12246")),(0,p.kt)("li",{parentName:"ul"},"ConcurrentHashMap should be used for caching producers ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11820"},"#11820")),(0,p.kt)("li",{parentName:"ul"},"Support KEY_BASED batch builder for Java based functions and sources ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11706"},"#11706"))),(0,p.kt)("h3",{id:"pulsar-admin"},"Pulsar Admin"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"Print topic internal info as formatted JSON ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12709"},"#12709")),(0,p.kt)("li",{parentName:"ul"},"Fix last exit code storage ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12581"},"#12581")),(0,p.kt)("li",{parentName:"ul"},"Fix the issue of failing to update partitions of topics ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11683"},"#11683")),(0,p.kt)("li",{parentName:"ul"},"Perfect judgment conditions of pulsar-admin ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12315"},"#12315")),(0,p.kt)("li",{parentName:"ul"},"Fix log level config for pulsar-admin, pulsar-client and pulsar-perf ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12915"},"#12915")),(0,p.kt)("li",{parentName:"ul"},"Modify exception of set-properties for namespace ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12436"},"#12436")),(0,p.kt)("li",{parentName:"ul"},"Get schema validation enforce add applied ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12349"},"#12349"))),(0,p.kt)("h3",{id:"tiered-storage"},"Tiered Storage"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"Add retry to tolerate the offload index file read failure ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12452"},"#12452")),(0,p.kt)("li",{parentName:"ul"},"Fix the read performance issue in the offload readAsync ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12443"},"#12443")),(0,p.kt)("li",{parentName:"ul"},"Fix FileSystemManagedLedgerOffloader can not clean up outdated ledger ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12309"},"#12309")),(0,p.kt)("li",{parentName:"ul"},"Fix the potential race condition in the BlobStore readhandler ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12123"},"#12123"))),(0,p.kt)("h3",{id:"pulsar-sql"},"Pulsar SQL"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"Handle message null schema version in PulsarRecordCursor ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12809"},"#12809")),(0,p.kt)("li",{parentName:"ul"},"Pulsar SQL support query big entry data ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12448"},"#12448"))),(0,p.kt)("h3",{id:"cli"},"CLI"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"Enable CLI to publish non-batched messages ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12641"},"#12641")),(0,p.kt)("li",{parentName:"ul"},"Make it possible to disable poolMessages ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12108"},"#12108")),(0,p.kt)("li",{parentName:"ul"},"Add total messages when periodic printing throughput ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12084"},"#12084")),(0,p.kt)("li",{parentName:"ul"},"Make it possible to disable poolMessages ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12090"},"#12090"))),(0,p.kt)("h3",{id:"unit-test"},"Unit Test"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"Broker resource group test optimize fail msg ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12438"},"#12438")),(0,p.kt)("li",{parentName:"ul"},"Fix windows test path problem ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12398"},"#12398")),(0,p.kt)("li",{parentName:"ul"},"Make AuthenticationTokenTest to run on windows ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12329"},"#12329")),(0,p.kt)("li",{parentName:"ul"},"Use correct line separator instead of \\n ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12143"},"#12143"))),(0,p.kt)("h3",{id:"bookkeeper"},"BookKeeper"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"Add readWorkerThreadsThrottlingEnabled to conf/bookkeeper.conf ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12666"},"#12666")),(0,p.kt)("li",{parentName:"ul"},"UseV2WireProtocol for bookkeeper autorecovery ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12311"},"#12311"))),(0,p.kt)("h3",{id:"proxy"},"Proxy"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},'Reduce the severity of log "refreshing key manager" in KeyManagerProxy ',(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12594"},"#12594")),(0,p.kt)("li",{parentName:"ul"},"Set default HTTP proxy request timeout ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11971"},"#11971")),(0,p.kt)("li",{parentName:"ul"},"Set default httpProxyTimeout to 5 minutes ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12299"},"#12299")),(0,p.kt)("li",{parentName:"ul"},"Fix Pulsar Proxy to re-use authentication instance ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12245"},"#12245")),(0,p.kt)("li",{parentName:"ul"},"Fix NPE in ProxyConnection with no auth data ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12111"},"#12111")),(0,p.kt)("li",{parentName:"ul"},"Fix ProxyConnection to check for existence of auth_data field ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12057"},"#12057"))))}s.isMDXComponent=!0}}]);