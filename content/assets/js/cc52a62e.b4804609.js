"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[22426],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>g});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),d=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):s(s({},e),t)),a},m=function(t){var e=d(t.components);return n.createElement(o.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),u=d(a),g=r,k=u["".concat(o,".").concat(g)]||u[g]||p[g]||l;return a?n.createElement(k,s(s({ref:e},m),{},{components:a})):n.createElement(k,s({ref:e},m))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,s=new Array(l);s[0]=u;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i.mdxType="string"==typeof t?t:r,s[1]=i;for(var d=2;d<l;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},737:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const l={id:"administration-stats",title:"Pulsar stats",sidebar_label:"Pulsar statistics"},s=void 0,i={unversionedId:"administration-stats",id:"administration-stats",title:"Pulsar stats",description:"Topic stats",source:"@site/docs/administration-stats.md",sourceDirName:".",slug:"/administration-stats",permalink:"/docs/next/administration-stats",draft:!1,editUrl:"https://github.com/apache/pulsar/edit/master/site2/docs/administration-stats.md",tags:[],version:"current",frontMatter:{id:"administration-stats",title:"Pulsar stats",sidebar_label:"Pulsar statistics"},sidebar:"docsSidebar",previous:{title:"Pulsar Shell",permalink:"/docs/next/administration-pulsar-shell"},next:{title:"Load balance",permalink:"/docs/next/administration-load-balance"}},o={},d=[{value:"Topic stats",id:"topic-stats",level:2},{value:"Producer stats",id:"producer-stats",level:3},{value:"Subscription stats",id:"subscription-stats",level:3},{value:"Consumer stats",id:"consumer-stats",level:3},{value:"Replication stats",id:"replication-stats",level:3},{value:"Topic internal stats",id:"topic-internal-stats",level:2}],m={toc:d};function p(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"topic-stats"},"Topic stats"),(0,r.kt)("p",null,"The following table outlines the stats of a topic. For more details about how to get these stats, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/admin-api-topics#get-stats"},"Get stats"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Stat"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"msgRateIn"),(0,r.kt)("td",{parentName:"tr",align:null},"The sum of all local and replication publishers' publish rates (message per second).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"msgThroughputIn"),(0,r.kt)("td",{parentName:"tr",align:null},"The sum of all local and replication publishers' publish rates (byte per second).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"msgRateOut"),(0,r.kt)("td",{parentName:"tr",align:null},"The sum of all local and replication consumers' dispatch rates (message per second).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"msgThroughputOut"),(0,r.kt)("td",{parentName:"tr",align:null},"The sum of all local and replication consumers' dispatch rates (byte per second).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"averageMsgSize"),(0,r.kt)("td",{parentName:"tr",align:null},"The average size (bytes) of messages published within the last interval.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"storageSize"),(0,r.kt)("td",{parentName:"tr",align:null},"The sum of the ledgers' storage size for this topic. The space used to store the messages for the topic.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"earliestMsgPublishTimeInBacklogs"),(0,r.kt)("td",{parentName:"tr",align:null},"The publish time of the earliest message in the backlog (in milliseconds).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bytesInCounter"),(0,r.kt)("td",{parentName:"tr",align:null},"The total bytes published to the topic.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"msgInCounter"),(0,r.kt)("td",{parentName:"tr",align:null},"The total messages published to the topic.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bytesOutCounter"),(0,r.kt)("td",{parentName:"tr",align:null},"The total bytes delivered to consumers.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"msgOutCounter"),(0,r.kt)("td",{parentName:"tr",align:null},"The total messages delivered to consumers.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"msgChunkPublished"),(0,r.kt)("td",{parentName:"tr",align:null},"The topics that have chunked messages published on it.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"backlogSize"),(0,r.kt)("td",{parentName:"tr",align:null},"The estimated total unconsumed or backlog size (in bytes).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"offloadedStorageSize"),(0,r.kt)("td",{parentName:"tr",align:null},"Space that is used to store the offloaded messages for the topic (in bytes).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"waitingPublishers"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of publishers waiting in a queue in exclusive access mode.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"deduplicationStatus"),(0,r.kt)("td",{parentName:"tr",align:null},"The status of message deduplication for the topic.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"topicEpoch"),(0,r.kt)("td",{parentName:"tr",align:null},"The topic epoch or empty if not set.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"filteredEntriesCount"),(0,r.kt)("td",{parentName:"tr",align:null},"The count of skipped entries for the topic.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nonContiguousDeletedMessagesRanges"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of non-contiguous deleted messages ranges.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nonContiguousDeletedMessagesRangesSerializedSize"),(0,r.kt)("td",{parentName:"tr",align:null},"The serialized size of non-contiguous deleted messages ranges.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ownerBroker"),(0,r.kt)("td",{parentName:"tr",align:null},"The broker that owns this topic.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#producer-stats"},"publishers")),(0,r.kt)("td",{parentName:"tr",align:null},"The list of all local publishers on the topic, ranging from zero to thousands.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#subscription-stats"},"subscriptions")),(0,r.kt)("td",{parentName:"tr",align:null},"The list of all local subscriptions to the topic.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#replication-stats"},"replication")),(0,r.kt)("td",{parentName:"tr",align:null},"This section gives the stats for cross-colo replication of this topic.")))),(0,r.kt)("h3",{id:"producer-stats"},"Producer stats"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Stat"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"producerId"),(0,r.kt)("td",{parentName:"tr",align:null},"The internal identifier for this producer on this topic.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"producerName"),(0,r.kt)("td",{parentName:"tr",align:null},"The internal identifier for this producer, generated by the client library.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"address"),(0,r.kt)("td",{parentName:"tr",align:null},"IP address and source port for the connection of this producer.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"connectedSince"),(0,r.kt)("td",{parentName:"tr",align:null},"The timestamp when this producer is created or reconnected last time.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"accessMode"),(0,r.kt)("td",{parentName:"tr",align:null},"The type of access to the topic that the producer requires.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"msgRateIn"),(0,r.kt)("td",{parentName:"tr",align:null},"The total rate of messages (message per second) published by this publisher.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"msgThroughputIn"),(0,r.kt)("td",{parentName:"tr",align:null},"The total throughput (byte per second) of the messages published by this publisher.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"averageMsgSize"),(0,r.kt)("td",{parentName:"tr",align:null},"The average message size in bytes from this publisher within the last interval.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"chunkedMessageRate"),(0,r.kt)("td",{parentName:"tr",align:null},"The total rate of chunked messages published by this publisher.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"clientVersion"),(0,r.kt)("td",{parentName:"tr",align:null},"The client library version of this producer.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"metadata"),(0,r.kt)("td",{parentName:"tr",align:null},"The metadata (key/value strings) associated with this publisher.")))),(0,r.kt)("h3",{id:"subscription-stats"},"Subscription stats"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Stat"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"my-subscription"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of this subscription. It is defined by the client.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"msgRateOut"),(0,r.kt)("td",{parentName:"tr",align:null},"The total rate of messages (message per second) delivered on this subscription.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"msgThroughputOut"),(0,r.kt)("td",{parentName:"tr",align:null},"The total throughput (byte per second) delivered on this subscription.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"msgBacklog"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of messages in the subscription backlog.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"type"),(0,r.kt)("td",{parentName:"tr",align:null},"This subscription type.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"msgRateExpired"),(0,r.kt)("td",{parentName:"tr",align:null},"The rate at which messages are discarded instead of dispatched from this subscription due to TTL.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lastExpireTimestamp"),(0,r.kt)("td",{parentName:"tr",align:null},"The timestamp of the last message expiration.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lastConsumedFlowTimestamp"),(0,r.kt)("td",{parentName:"tr",align:null},"The timestamp of the last flow command received.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lastConsumedTimestamp"),(0,r.kt)("td",{parentName:"tr",align:null},"The latest timestamp of all the consumed timestamps of the consumers.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lastAckedTimestamp"),(0,r.kt)("td",{parentName:"tr",align:null},"The latest timestamp of all the acknowledged timestamps of the consumers.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"msgRateRedeliver"),(0,r.kt)("td",{parentName:"tr",align:null},"The total rate of messages redelivered on this subscription (message per second).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"chunkedMessageRate"),(0,r.kt)("td",{parentName:"tr",align:null},"The chunked message dispatch rate.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"earliestMsgPublishTimeInBacklog"),(0,r.kt)("td",{parentName:"tr",align:null},"The publish time of the earliest message in the backlog for the subscription (in milliseconds).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"msgBacklogNoDelayed"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of messages in the subscription backlog that do not contain the delay messages.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"blockedSubscriptionOnUnackedMsgs"),(0,r.kt)("td",{parentName:"tr",align:null},"The flag to verify if a subscription is blocked due to reaching the threshold of unacked messages.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"msgDelayed"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of delayed messages that are currently tracked.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"unackedMessages"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of unacknowledged messages for the subscription, where an unacknowledged message is one that has been sent to a consumer but not yet acknowledged. This field is only meaningful when using a subscription that tracks individual message acknowledgment.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"activeConsumerName"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the consumer that is active for single active consumer subscriptions (such as failover or exclusive).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"totalMsgExpired"),(0,r.kt)("td",{parentName:"tr",align:null},"The total messages expired on this subscription.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lastMarkDeleteAdvancedTimestamp"),(0,r.kt)("td",{parentName:"tr",align:null},"The last ",(0,r.kt)("inlineCode",{parentName:"td"},"MarkDelete")," position advanced timestamp.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"durable"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether the subscription is durable or ephemeral (for example, from a reader).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"replicated"),(0,r.kt)("td",{parentName:"tr",align:null},"Mark that the subscription state is kept in sync across different regions.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"allowOutOfOrderDelivery"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether out-of-order delivery is allowed on the Key_Shared subscription.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"keySharedMode"),(0,r.kt)("td",{parentName:"tr",align:null},"The options of the Key_Shared subscription mode include ",(0,r.kt)("inlineCode",{parentName:"td"},"AUTO_SPLIT")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"STICKY"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"consumersAfterMarkDeletePosition"),(0,r.kt)("td",{parentName:"tr",align:null},"Get ",(0,r.kt)("inlineCode",{parentName:"td"},"recentJoinedConsumers")," for the Key_Shared subscription.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"filterProcessedMsgCount"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of messages processed by ",(0,r.kt)("inlineCode",{parentName:"td"},"EntryFilter"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"filterAcceptedMsgCount"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of messages accepted by ",(0,r.kt)("inlineCode",{parentName:"td"},"EntryFilter"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"filterRejectedMsgCount"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of messages rejected by ",(0,r.kt)("inlineCode",{parentName:"td"},"EntryFilter"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"filterRescheduledMsgCount"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of messages rescheduled by ",(0,r.kt)("inlineCode",{parentName:"td"},"EntryFilter"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bytesOutCounter"),(0,r.kt)("td",{parentName:"tr",align:null},"The total bytes delivered to a consumer.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"msgOutCounter"),(0,r.kt)("td",{parentName:"tr",align:null},"The total messages delivered to a consumer.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"backlogSize"),(0,r.kt)("td",{parentName:"tr",align:null},"The size of backlog for this subscription (in bytes).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nonContiguousDeletedMessagesRanges"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of non-contiguous deleted messages ranges.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nonContiguousDeletedMessagesRangesSerializedSize"),(0,r.kt)("td",{parentName:"tr",align:null},"The serialized size of non-contiguous deleted messages ranges.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#consumer-stats"},"consumers")),(0,r.kt)("td",{parentName:"tr",align:null},"The list of connected consumers for this subscription.")))),(0,r.kt)("h3",{id:"consumer-stats"},"Consumer stats"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Stat"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"consumerName"),(0,r.kt)("td",{parentName:"tr",align:null},"Internal identifier for this consumer, generated by the client library.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"msgRateOut"),(0,r.kt)("td",{parentName:"tr",align:null},"The total rate of messages (message per second) delivered to the consumer.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"msgThroughputOut"),(0,r.kt)("td",{parentName:"tr",align:null},"The total throughput (byte per second) delivered to the consumer.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"availablePermits"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of messages that the consumer has space for in the client library's listening queue. ",(0,r.kt)("inlineCode",{parentName:"td"},"0")," means the client library's queue is full and ",(0,r.kt)("inlineCode",{parentName:"td"},"receive()")," isn't called. A non-zero value means this consumer is ready for dispatched messages.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"unackedMessages"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of unacknowledged messages for the consumer, where an unacknowledged message has been sent to the consumer but not yet acknowledged. This field is only meaningful when using a subscription that tracks individual message acknowledgment.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"blockedConsumerOnUnackedMsgs"),(0,r.kt)("td",{parentName:"tr",align:null},"The flag used to verify if the consumer is blocked due to reaching the threshold of the unacknowledged messages.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lastConsumedTimestamp"),(0,r.kt)("td",{parentName:"tr",align:null},"The timestamp when the consumer reads a message the last time.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lastAckedTimestamp"),(0,r.kt)("td",{parentName:"tr",align:null},"The timestamp when the consumer acknowledges a message the last time.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"address"),(0,r.kt)("td",{parentName:"tr",align:null},"The IP address and source port for the connection of this consumer.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"connectedSince"),(0,r.kt)("td",{parentName:"tr",align:null},"The timestamp when this consumer is created or reconnected last time.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"clientVersion"),(0,r.kt)("td",{parentName:"tr",align:null},"The client library version of this consumer.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bytesOutCounter"),(0,r.kt)("td",{parentName:"tr",align:null},"The total bytes delivered to a consumer.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"msgOutCounter"),(0,r.kt)("td",{parentName:"tr",align:null},"The total messages delivered to a consumer.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"msgRateRedeliver"),(0,r.kt)("td",{parentName:"tr",align:null},"The total rate of messages redelivered by this consumer (message per second).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"chunkedMessageRate"),(0,r.kt)("td",{parentName:"tr",align:null},"The total rate of chunked messages delivered to this consumer.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"avgMessagesPerEntry"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of average messages per entry for the consumer consumed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"readPositionWhenJoining"),(0,r.kt)("td",{parentName:"tr",align:null},"The read position of the cursor when the consumer joins.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"keyHashRanges"),(0,r.kt)("td",{parentName:"tr",align:null},"The hash ranges assigned to this consumer if it uses Key_Shared sub mode.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"metadata"),(0,r.kt)("td",{parentName:"tr",align:null},"The metadata (key/value strings) associated with this consumer.")))),(0,r.kt)("h3",{id:"replication-stats"},"Replication stats"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Stat"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"msgRateIn"),(0,r.kt)("td",{parentName:"tr",align:null},"The total rate (message per second) of messages received from the remote cluster.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"msgThroughputIn"),(0,r.kt)("td",{parentName:"tr",align:null},"The total throughput (byte per second) received from the remote cluster.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"msgRateOut"),(0,r.kt)("td",{parentName:"tr",align:null},"The total rate of messages (message per second) delivered to the replication-subscriber.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"msgThroughputOut"),(0,r.kt)("td",{parentName:"tr",align:null},"The total throughput (byte per second) delivered to the replication-subscriber.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"msgRateExpired"),(0,r.kt)("td",{parentName:"tr",align:null},"The total rate of messages (message per second) expired.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"replicationBacklog"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of messages pending to be replicated to remote cluster.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"connected"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether the outbound replicator is connected.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"replicationDelayInSeconds"),(0,r.kt)("td",{parentName:"tr",align:null},"How long the oldest message has been waiting to be sent through the connection when connected.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"inboundConnection"),(0,r.kt)("td",{parentName:"tr",align:null},"The IP and port of the broker in the remote cluster's publisher connection to this broker.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"inboundConnectedSince"),(0,r.kt)("td",{parentName:"tr",align:null},"The TCP connection used to publish messages to the remote cluster. If no local publishers are connected, this connection is automatically closed after a minute.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"outboundConnection"),(0,r.kt)("td",{parentName:"tr",align:null},"The address of the outbound replication connection.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"outboundConnectedSince"),(0,r.kt)("td",{parentName:"tr",align:null},"The timestamp of establishing an outbound connection.")))),(0,r.kt)("h2",{id:"topic-internal-stats"},"Topic internal stats"),(0,r.kt)("p",null,"The following table outlines the internal stats inside a topic. For more details about how to get these stats, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/admin-api-topics#get-internal-stats"},"Get stats"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Stat"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"entriesAddedCounter"),(0,r.kt)("td",{parentName:"tr",align:null},"Messages published since this broker loads this topic.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"numberOfEntries"),(0,r.kt)("td",{parentName:"tr",align:null},"The total number of messages tracked.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"totalSize"),(0,r.kt)("td",{parentName:"tr",align:null},"The total storage size in bytes of all messages.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"currentLedgerEntries"),(0,r.kt)("td",{parentName:"tr",align:null},"The count of messages written to the ledger that is currently open for writing.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"currentLedgerSize"),(0,r.kt)("td",{parentName:"tr",align:null},"The size in bytes of messages written to the ledger that is currently open for writing.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lastLedgerCreatedTimestamp"),(0,r.kt)("td",{parentName:"tr",align:null},"The time when the last ledger is created.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lastLedgerCreationFailureTimestamp"),(0,r.kt)("td",{parentName:"tr",align:null},"The time when the last ledger is failed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"waitingCursorsCount"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of cursors that are caught up and waiting for a new message to be published.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pendingAddEntriesCount"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of messages that have write requests (asynchronous) waiting on completion.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lastConfirmedEntry"),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("inlineCode",{parentName:"td"},"ledgerid:entryid")," of the last message that is written successfully. If the ",(0,r.kt)("inlineCode",{parentName:"td"},"entryid")," is ",(0,r.kt)("inlineCode",{parentName:"td"},"-1"),", then the ledger is opened or is currently opened but has no entries written yet.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"state"),(0,r.kt)("td",{parentName:"tr",align:null},"The state of the cursor ledger. The state ",(0,r.kt)("inlineCode",{parentName:"td"},"LedgerOpened")," means that a ledger is open for saving published messages.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ledgers"),(0,r.kt)("td",{parentName:"tr",align:null},"The ordered list of all ledgers for this topic that holds its messages.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cursors"),(0,r.kt)("td",{parentName:"tr",align:null},"The list of all cursors on this topic. Each subscription in the topic stats has a cursor.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"markDeletePosition"),(0,r.kt)("td",{parentName:"tr",align:null},"The ack position: the last message that the subscriber acknowledges. All messages before this position are acknowledged by the subscriber.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"readPosition"),(0,r.kt)("td",{parentName:"tr",align:null},"The latest position of the subscriber for reading messages.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"waitingReadOp"),(0,r.kt)("td",{parentName:"tr",align:null},"This is true when the subscription reads the latest message that is published to the topic and waits for new messages to be published.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pendingReadOps"),(0,r.kt)("td",{parentName:"tr",align:null},"The count of outstanding read requests to the BookKeepers in progress.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"messagesConsumedCounter"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of messages this cursor has acknowledged since this broker loads this topic.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cursorLedger"),(0,r.kt)("td",{parentName:"tr",align:null},"The ledger used to persistently store the current ",(0,r.kt)("inlineCode",{parentName:"td"},"markDeletePosition"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cursorLedgerLastEntry"),(0,r.kt)("td",{parentName:"tr",align:null},"The last ",(0,r.kt)("inlineCode",{parentName:"td"},"entryid")," used to persistently store the current ",(0,r.kt)("inlineCode",{parentName:"td"},"markDeletePosition"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"individuallyDeletedMessages"),(0,r.kt)("td",{parentName:"tr",align:null},"The range of messages acknowledged between ",(0,r.kt)("inlineCode",{parentName:"td"},"markDeletePosition")," and the ",(0,r.kt)("inlineCode",{parentName:"td"},"readPosition")," when acknowledges are done out of order.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lastLedgerSwitchTimestamp"),(0,r.kt)("td",{parentName:"tr",align:null},"The last time when the cursor ledger is rolled over.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ledgers"),(0,r.kt)("td",{parentName:"tr",align:null},"The ordered list of all ledgers for this topic that holds messages.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"schemaLedgers"),(0,r.kt)("td",{parentName:"tr",align:null},"The ordered list of all ledgers for this topic schema.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"compactedLedger"),(0,r.kt)("td",{parentName:"tr",align:null},"The ledgers holding un-acked messages after topic compaction.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ledgerId"),(0,r.kt)("td",{parentName:"tr",align:null},"The ID of this ledger.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"entries"),(0,r.kt)("td",{parentName:"tr",align:null},"The total number of entries that belong to this ledger.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"size"),(0,r.kt)("td",{parentName:"tr",align:null},"The size of messages written to this ledger (in bytes).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"offloaded"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether this ledger is offloaded. The value is ",(0,r.kt)("inlineCode",{parentName:"td"},"false")," for the compacted topic ledger.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"metadata"),(0,r.kt)("td",{parentName:"tr",align:null},"The ledger metadata.")))))}p.isMDXComponent=!0}}]);