(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{92:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return o}));var n=a(3),r=a(7),b=(a(0),a(99)),l={id:"vultr-variables",title:"Vultr Variables",sidebar_label:"Variables"},c={unversionedId:"deploy-guides/vultr/vultr-variables",id:"deploy-guides/vultr/vultr-variables",isDocsHomePage:!1,title:"Vultr Variables",description:"Variables Guide",source:"@site/docs/deploy-guides/vultr/vultr-variables.md",slug:"/deploy-guides/vultr/vultr-variables",permalink:"/deploy-guides/vultr/vultr-variables",editUrl:"https://github.com/derrickmehaffy/strapi-guru-docs/edit/main/docs/deploy-guides/vultr/vultr-variables.md",version:"current",sidebar_label:"Variables",sidebar:"docSidebar",previous:{title:"Vultr Introduction",permalink:"/deploy-guides/vultr/vultr-intro"},next:{title:"Vultr Terraform Guide",permalink:"/deploy-guides/vultr/vultr-terraform"}},i=[{value:"Variables Guide",id:"variables-guide",children:[{value:"Terraform Variables",id:"terraform-variables",children:[]}]}],p={toc:i};function o(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",{id:"variables-guide"},"Variables Guide"),Object(b.b)("p",null,"It is recommended that you review both the ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.terraform.io/docs/language/values/variables.html"}),"Terraform Documentation")," and the ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.ansible.com/ansible/latest/user_guide/playbooks_variables.html"}),"Ansible Documentation")," regarding variables and how best to secure them. Terraform has multiple methods to pull and store variables such as Vault and Consul, while ansible has it's own local Vault system to encrypt variables and files. The Strapi Guru documentation does not cover these topics (except for the local Ansible Vault)."),Object(b.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(b.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(b.b)("h5",{parentName:"div"},Object(b.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(b.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(b.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(b.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(b.b)("p",{parentName:"div"},"It is up to you, the user, to secure your variables!"))),Object(b.b)("h3",{id:"terraform-variables"},"Terraform Variables"),Object(b.b)("p",null,"Variables are set in the ",Object(b.b)("inlineCode",{parentName:"p"},"./terraform/terraform.tfvars"),", there is an ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/derrickmehaffy/strapi-vultr-deploy/blob/main/terraform/example.tfvars"}),"example file")," that you can copy and modify."),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash",metastring:'title="From template root"',title:'"From',template:!0,'root"':!0}),"cp terraform/examples.tfvars terraform/terraform.tfvars\n")),Object(b.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(b.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(b.b)("h5",{parentName:"div"},Object(b.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(b.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(b.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(b.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(b.b)("p",{parentName:"div"},"Do not go below ",Object(b.b)("inlineCode",{parentName:"p"},"vc2-1c-2gb")," for the Strapi instance or the Admin panel will not build!"))),Object(b.b)("div",{className:"admonition admonition-info alert alert--info"},Object(b.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(b.b)("h5",{parentName:"div"},Object(b.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(b.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(b.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(b.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(b.b)("p",{parentName:"div"},"The Database instance can be dropped to ",Object(b.b)("inlineCode",{parentName:"p"},"vc2-1c-2gb")," to decrease cost, but it's not recommended."))),Object(b.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(b.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(b.b)("h5",{parentName:"div"},Object(b.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(b.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(b.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(b.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(b.b)("p",{parentName:"div"},"Backups cost an extra 20% of the hourly cost (can basically be calculated as 20% of monthly). Thus if you use the ",Object(b.b)("inlineCode",{parentName:"p"},"vc2-1c-2gb")," plan at $10, backups cost $2, making the total Strapi server cost $12 per month."))),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Var Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"vultr_api_key"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"null"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Y"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Vultr API Key")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ssh_key"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"null"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Y"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Your Public SSH Key")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"region"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"sea"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Y"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Vultr Region ID")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"cloudflare_enabled"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Y"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Enable Cloudflare (required)")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"cloudflare_email"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"null"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Y"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Email used with Cloudflare")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"cloudflare_api_key"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"null"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Y"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Global API Key")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"cloudflare_zone_id"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"null"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Y"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Your Domain Zone ID")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"strapi_srv_domain"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"null"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Y"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Subdomain prefix")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"instance_os"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"387"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Y"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Operating System ID from Vultr API")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"instance_tag"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"strapi"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"N"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional tag to apply to instances")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"strapi_plan"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"vc2-1c-2gb"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Y"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Vultr Plan for the Strapi Server")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"strapi_label"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"my-strapi-srv"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Y"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Label for the Strapi Server")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"strapi_hostname"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"my-strapi-srv"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Y"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Hostname for the Strapi Server")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"strapi_ipv6"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"N"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Enable IPv6 for the Strapi Server")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"strapi_server_backups"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"N"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Enable Strapi Server Backups")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"database_plan"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"vc2-2c-4gb"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Y"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Vultr Plan for the Database Server")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"database_label"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"my-strapi-db"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Y"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Label for the Database Server")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"database_hostname"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"my-strapi-db"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Y"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Hostname for the Database Server")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"database_server_Backups"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"N"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Enable Database Backups")))),Object(b.b)("p",null,"There are certain variables that are pulled from Vultr Public APIs:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"region")," => ",Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"https://api.vultr.com/v2/regions"}),"https://api.vultr.com/v2/regions")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"instance_os")," => ",Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"https://api.vultr.com/v2/os"}),"https://api.vultr.com/v2/os")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"strapi_plan")," / ",Object(b.b)("inlineCode",{parentName:"li"},"database_plan")," => ",Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"https://api.vultr.com/v2/plans"}),"https://api.vultr.com/v2/plans"))))}o.isMDXComponent=!0},99:function(e,t,a){"use strict";a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),o=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},O=function(e){var t=o(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),O=o(a),m=n,d=O["".concat(l,".").concat(m)]||O[m]||j[m]||b;return a?r.a.createElement(d,c(c({ref:t},p),{},{components:a})):r.a.createElement(d,c({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,l=new Array(b);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var p=2;p<b;p++)l[p]=a[p];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);