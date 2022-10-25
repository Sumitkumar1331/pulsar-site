"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[36229],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),c=r,k=d["".concat(s,".").concat(c)]||d[c]||m[c]||l;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3942:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const l={id:"io-kinesis-source",title:"Kinesis source connector",sidebar_label:"Kinesis source connector",original_id:"io-kinesis-source"},i=void 0,o={unversionedId:"io-kinesis-source",id:"version-2.10.x/io-kinesis-source",title:"Kinesis source connector",description:"The Kinesis source connector pulls data from Amazon Kinesis and persists data into Pulsar.",source:"@site/versioned_docs/version-2.10.x/io-kinesis-source.md",sourceDirName:".",slug:"/io-kinesis-source",permalink:"/docs/io-kinesis-source",draft:!1,editUrl:"https://github.com/apache/pulsar/edit/master/site2/docs/io-kinesis-source.md",tags:[],version:"2.10.x",frontMatter:{id:"io-kinesis-source",title:"Kinesis source connector",sidebar_label:"Kinesis source connector",original_id:"io-kinesis-source"}},s={},u=[{value:"Configuration",id:"configuration",level:2},{value:"Property",id:"property",level:3},{value:"Example",id:"example",level:3}],p={toc:u};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Kinesis source connector pulls data from Amazon Kinesis and persists data into Pulsar."),(0,r.kt)("p",null,"This connector uses the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/awslabs/amazon-kinesis-client"},"Kinesis Consumer Library")," (KCL) to do the actual consuming of messages. The KCL uses DynamoDB to track state for consumers."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: currently, the Kinesis source connector only supports raw messages. If you use KMS encrypted messages, the encrypted messages are sent to downstream. This connector will support decrypting messages in the future release.")),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"The configuration of the Kinesis source connector has the following properties."),(0,r.kt)("h3",{id:"property"},"Property"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"initialPositionInStream")),(0,r.kt)("td",{parentName:"tr",align:null},"InitialPositionInStream"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"LATEST"),(0,r.kt)("td",{parentName:"tr",align:null},"The position where the connector starts from.",(0,r.kt)("br",null),(0,r.kt)("br",null),"Below are the available options:",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"AT_TIMESTAMP"),": start from the record at or after the specified timestamp.",(0,r.kt)("br",null),(0,r.kt)("br",null)),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"LATEST"),": start after the most recent data record.",(0,r.kt)("br",null),(0,r.kt)("br",null)),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"TRIM_HORIZON"),": start from the oldest available data record."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"startAtTime")),(0,r.kt)("td",{parentName:"tr",align:null},"Date"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,r.kt)("td",{parentName:"tr",align:null},"If set to ",(0,r.kt)("inlineCode",{parentName:"td"},"AT_TIMESTAMP"),", it specifies the point in time to start consumption.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"applicationName")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Pulsar IO connector"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the Amazon Kinesis application. ",(0,r.kt)("br",null),(0,r.kt)("br",null),"By default, the application name is included in the user agent string used to make AWS requests. This can assist with troubleshooting, for example, distinguish requests made by separate connector instances.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"checkpointInterval")),(0,r.kt)("td",{parentName:"tr",align:null},"long"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"60000"),(0,r.kt)("td",{parentName:"tr",align:null},"The frequency of the Kinesis stream checkpoint in milliseconds.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"backoffTime")),(0,r.kt)("td",{parentName:"tr",align:null},"long"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"3000"),(0,r.kt)("td",{parentName:"tr",align:null},"The amount of time to delay between requests when the connector encounters a throttling exception from AWS Kinesis in milliseconds.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"numRetries")),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of re-attempts when the connector encounters an exception while trying to set a checkpoint.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"receiveQueueSize")),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"1000"),(0,r.kt)("td",{parentName:"tr",align:null},"The maximum number of AWS records that can be buffered inside the connector. ",(0,r.kt)("br",null),(0,r.kt)("br",null),"Once the ",(0,r.kt)("inlineCode",{parentName:"td"},"receiveQueueSize")," is reached, the connector does not consume any messages from Kinesis until some messages in the queue are successfully consumed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"dynamoEndpoint")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,r.kt)("td",{parentName:"tr",align:null},"The Dynamo end-point URL, which can be found at ",(0,r.kt)("a",{parentName:"td",href:"https://docs.aws.amazon.com/general/latest/gr/rande.html"},"here"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"cloudwatchEndpoint")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,r.kt)("td",{parentName:"tr",align:null},"The Cloudwatch end-point URL, which can be found at ",(0,r.kt)("a",{parentName:"td",href:"https://docs.aws.amazon.com/general/latest/gr/rande.html"},"here"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"useEnhancedFanOut")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"If set to true, it uses Kinesis enhanced fan-out.",(0,r.kt)("br",null),(0,r.kt)("br",null),"If set to false, it uses polling.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"awsEndpoint")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,r.kt)("td",{parentName:"tr",align:null},"The Kinesis end-point URL, which can be found at ",(0,r.kt)("a",{parentName:"td",href:"https://docs.aws.amazon.com/general/latest/gr/rande.html"},"here"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"awsRegion")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,r.kt)("td",{parentName:"tr",align:null},"The AWS region. ",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Example"),(0,r.kt)("br",null)," us-west-1, us-west-2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"awsKinesisStreamName")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,r.kt)("td",{parentName:"tr",align:null},"The Kinesis stream name.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"awsCredentialPluginName")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,r.kt)("td",{parentName:"tr",align:null},"The fully-qualified class name of implementation of ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/pulsar/tree/master//pulsar-io/aws/src/main/java/org/apache/pulsar/io/aws/AwsCredentialProviderPlugin.java"},"AwsCredentialProviderPlugin"),".",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"awsCredentialProviderPlugin")," has the following built-in plugs:",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"org.apache.pulsar.io.kinesis.AwsDefaultProviderChainPlugin"),":",(0,r.kt)("br",null)," this plugin uses the default AWS provider chain.",(0,r.kt)("br",null),"For more information, see ",(0,r.kt)("a",{parentName:"td",href:"https://docs.aws.amazon.com/sdk-for-java/v1/developer-guide/credentials.html#credentials-default"},"using the default credential provider chain"),".",(0,r.kt)("br",null),(0,r.kt)("br",null)),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"org.apache.pulsar.io.kinesis.STSAssumeRoleProviderPlugin"),": ",(0,r.kt)("br",null),"this plugin takes a configuration via the ",(0,r.kt)("inlineCode",{parentName:"td"},"awsCredentialPluginParam")," that describes a role to assume when running the KCL.",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"JSON configuration example"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},'{"roleArn": "arn...", "roleSessionName": "name"}')," ",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"awsCredentialPluginName")," is a factory class which creates an AWSCredentialsProvider that is used by Kinesis sink. ",(0,r.kt)("br",null),(0,r.kt)("br",null),"If ",(0,r.kt)("inlineCode",{parentName:"td"},"awsCredentialPluginName")," set to empty, the Kinesis sink creates a default AWSCredentialsProvider which accepts json-map of credentials in ",(0,r.kt)("inlineCode",{parentName:"td"},"awsCredentialPluginParam"),"."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"awsCredentialPluginParam")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,r.kt)("td",{parentName:"tr",align:null},"The JSON parameter to initialize ",(0,r.kt)("inlineCode",{parentName:"td"},"awsCredentialsProviderPlugin"),".")))),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,"Before using the Kinesis source connector, you need to create a configuration file through one of the following methods."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"JSON "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'\n{\n   "configs": {\n      "awsEndpoint": "https://some.endpoint.aws",\n      "awsRegion": "us-east-1",\n      "awsKinesisStreamName": "my-stream",\n      "awsCredentialPluginParam": "{\\"accessKey\\":\\"myKey\\",\\"secretKey\\":\\"my-Secret\\"}",\n      "applicationName": "My test application",\n      "checkpointInterval": "30000",\n      "backoffTime": "4000",\n      "numRetries": "3",\n      "receiveQueueSize": 2000,\n      "initialPositionInStream": "TRIM_HORIZON",\n      "startAtTime": "2019-03-05T19:28:58.000Z"\n   }\n}\n\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"YAML"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'\nconfigs:\n    awsEndpoint: "https://some.endpoint.aws"\n    awsRegion: "us-east-1"\n    awsKinesisStreamName: "my-stream"\n    awsCredentialPluginParam: "{\\"accessKey\\":\\"myKey\\",\\"secretKey\\":\\"my-Secret\\"}"\n    applicationName: "My test application"\n    checkpointInterval: 30000\n    backoffTime: 4000\n    numRetries: 3\n    receiveQueueSize: 2000\n    initialPositionInStream: "TRIM_HORIZON"\n    startAtTime: "2019-03-05T19:28:58.000Z"\n\n')))))}m.isMDXComponent=!0}}]);