(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{65:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return p}));var r=a(3),l=a(7),n=(a(0),a(99)),i={id:"vultr-ansible",title:"Vultr Ansible Guide",sidebar_label:"Ansible Guide"},o={unversionedId:"deploy-guides/vultr/vultr-ansible",id:"deploy-guides/vultr/vultr-ansible",isDocsHomePage:!1,title:"Vultr Ansible Guide",description:"Ansible playbooks breakdown",source:"@site/docs/deploy-guides/vultr/vultr-ansible.md",slug:"/deploy-guides/vultr/vultr-ansible",permalink:"/deploy-guides/vultr/vultr-ansible",editUrl:"https://github.com/derrickmehaffy/strapi-guru-docs/edit/main/docs/deploy-guides/vultr/vultr-ansible.md",version:"current",sidebar_label:"Ansible Guide",sidebar:"docSidebar",previous:{title:"Vultr Terraform Guide",permalink:"/deploy-guides/vultr/vultr-terraform"}},s=[{value:"Ansible playbooks breakdown",id:"ansible-playbooks-breakdown",children:[{value:"main.yml",id:"mainyml",children:[]},{value:"playbooks/strapi_database.yml",id:"playbooksstrapi_databaseyml",children:[]},{value:"playbooks/strapi_server.yml",id:"playbooksstrapi_serveryml",children:[]},{value:"playbooks/strapi_dply.yml",id:"playbooksstrapi_dplyyml",children:[]},{value:"playbooks/strapi_rollback.yml",id:"playbooksstrapi_rollbackyml",children:[]}]},{value:"Ansible Requirements",id:"ansible-requirements",children:[]}],b={toc:s};function p(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"ansible-playbooks-breakdown"},"Ansible playbooks breakdown"),Object(n.b)("p",null,"For modules used from Ansible-Galaxy / GitHub see the ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/derrickmehaffy/strapi-vultr-deploy/blob/main/ansible/requirements.yml"}),"requirements file"),"."),Object(n.b)("p",null,"Ansible within this template does the following:"),Object(n.b)("h3",{id:"mainyml"},"main.yml"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Loads encrypted Variables from ",Object(n.b)("inlineCode",{parentName:"li"},"crypt_vars/all.yml")),Object(n.b)("li",{parentName:"ol"},"Loads tf_vars from Terraform via ",Object(n.b)("inlineCode",{parentName:"li"},"tf_vars/tf_vars.yml")),Object(n.b)("li",{parentName:"ol"},"Runs the Apt role to install a handful of required/useful packages"),Object(n.b)("li",{parentName:"ol"},"Sets up 3 users: root, devops, and deploy"),Object(n.b)("li",{parentName:"ol"},"Triggers the ",Object(n.b)("inlineCode",{parentName:"li"},"strapi_database.yml")," playbook")),Object(n.b)("p",null,"User definitions are as such (They all have no password set, aka disabled password):"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Root user => initial connection for main.yml, using defined SSH key in Terraform"),Object(n.b)("li",{parentName:"ul"},'Devops user => "Admin" sudo user you should regularly use to connect or allow team members to connect to (adjust to fit your needs) and also used for the database/strapi server setup (stop using root people)'),Object(n.b)("li",{parentName:"ul"},"Deploy user => Strapi's service user, what Strapi runs as")),Object(n.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(n.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(n.b)("h5",{parentName:"div"},Object(n.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(n.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(n.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(n.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(n.b)("p",{parentName:"div"},"Deploy user does not have sudo perms, this is intended!"))),Object(n.b)("p",null,"Apt packages that are installed on both systems are:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"software-properties-common"),Object(n.b)("li",{parentName:"ul"},"build-essential"),Object(n.b)("li",{parentName:"ul"},"net-tools"),Object(n.b)("li",{parentName:"ul"},"zip"),Object(n.b)("li",{parentName:"ul"},"unzip")),Object(n.b)("p",null,"It will also automatically apply software updates using the ",Object(n.b)("inlineCode",{parentName:"p"},"dist")," upgrade and automatically remove packages that are no longer needed."),Object(n.b)("h3",{id:"playbooksstrapi_databaseyml"},"playbooks/strapi_database.yml"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Loads encrypted Variables from ",Object(n.b)("inlineCode",{parentName:"li"},"crypt_vars/database.yml")),Object(n.b)("li",{parentName:"ol"},"Loads tf_vars from Terraform via ",Object(n.b)("inlineCode",{parentName:"li"},"tf_vars/tf_vars.yml")),Object(n.b)("li",{parentName:"ol"},"Installs MariaDB v10.3"),Object(n.b)("li",{parentName:"ol"},"Creates a database for Strapi"),Object(n.b)("li",{parentName:"ol"},"Creates a user for Strapi"),Object(n.b)("li",{parentName:"ol"},"Sets user permissions on the database"),Object(n.b)("li",{parentName:"ol"},"Triggers the ",Object(n.b)("inlineCode",{parentName:"li"},"strapi_server.yml")," playbook")),Object(n.b)("p",null,"Database name and user are based on the labels you set for the Vultr instances in Terraform, thus the defaults are:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"DB Name: my-strapi-db"),Object(n.b)("li",{parentName:"ul"},"DB User: my-strapi-admin")),Object(n.b)("p",null,"The password is stored in the ",Object(n.b)("inlineCode",{parentName:"p"},"crypt_vars/database.yml")," and this file should be encrypted (see instructions below on dealing with Ansible-Vault)"),Object(n.b)("h3",{id:"playbooksstrapi_serveryml"},"playbooks/strapi_server.yml"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Loads encrypted Variables from ",Object(n.b)("inlineCode",{parentName:"li"},"crypt_vars/strapi.yml")),Object(n.b)("li",{parentName:"ol"},"Loads encrypted Variables from ",Object(n.b)("inlineCode",{parentName:"li"},"crypt_vars/database.yml")),Object(n.b)("li",{parentName:"ol"},"Loads tf_vars from Terraform via ",Object(n.b)("inlineCode",{parentName:"li"},"tf_vars/tf_vars.yml")),Object(n.b)("li",{parentName:"ol"},"Installs Node via the version defined in ",Object(n.b)("inlineCode",{parentName:"li"},"group_vars/strapi.yml")," (default is v14)"),Object(n.b)("li",{parentName:"ol"},"Installs yarn"),Object(n.b)("li",{parentName:"ol"},"Installs the ",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/acmesh-official/acme.sh"}),"Acme.sh client")," (way better than certbot)"),Object(n.b)("li",{parentName:"ol"},"Requests Let's Encrypt SSL Cert using Cloudflare DNS-01 Verification"),Object(n.b)("li",{parentName:"ol"},"Installs Nginx, configures upstream, deploys configs for HTTP => HTTPs"),Object(n.b)("li",{parentName:"ol"},"Creates the deploy directory and various child directories ",Object(n.b)("inlineCode",{parentName:"li"},"/srv/deploy/*")),Object(n.b)("li",{parentName:"ol"},"Installs ",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://pm2.io/"}),"PM2")," globally"),Object(n.b)("li",{parentName:"ol"},"Sets up PM2 to be loaded on reboot and start previous services"),Object(n.b)("li",{parentName:"ol"},"Triggers the ",Object(n.b)("inlineCode",{parentName:"li"},"strapi_dply.yml")," playbook")),Object(n.b)("h3",{id:"playbooksstrapi_dplyyml"},"playbooks/strapi_dply.yml"),Object(n.b)("p",null,"First off don't ask why it's named this way, the Ansible linter I use throws errors if I use ",Object(n.b)("inlineCode",{parentName:"p"},"deploy")," and I'm lazy and don't feel like fixing it. ",Object(n.b)("inlineCode",{parentName:"p"},"\xaf\\_(\u30c4)_/\xaf")),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Loads encrypted Variables from ",Object(n.b)("inlineCode",{parentName:"li"},"crypt_vars/strapi.yml")),Object(n.b)("li",{parentName:"ol"},"Loads encrypted Variables from ",Object(n.b)("inlineCode",{parentName:"li"},"crypt_vars/database.yml")),Object(n.b)("li",{parentName:"ol"},"Loads tf_vars from Terraform via ",Object(n.b)("inlineCode",{parentName:"li"},"tf_vars/tf_vars.yml")),Object(n.b)("li",{parentName:"ol"},"Uses the ",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/ansistrano/deploy"}),"ansistrano")," deployment system to version deployments and make it easier to rollback if failures happen."),Object(n.b)("li",{parentName:"ol"},"Pulls project from Git source"),Object(n.b)("li",{parentName:"ol"},"Pushes templated ",Object(n.b)("inlineCode",{parentName:"li"},".env")," and ",Object(n.b)("inlineCode",{parentName:"li"},"ecosystem.config.js")," for Strapi and PM2"),Object(n.b)("li",{parentName:"ol"},"Installs node_modules (using yarn, fuck npm)"),Object(n.b)("li",{parentName:"ol"},"Builds the Strapi Admin ",Object(n.b)("strong",{parentName:"li"},"in production mode")," (Stop deploying dev servers)"),Object(n.b)("li",{parentName:"ol"},"Starts/Reloads Strapi application")),Object(n.b)("p",null,"Eventually I want to add checking to ensure the Strapi project started correctly and do an automated DB backup. Should failures occur then it would run the rollback playbook and restore the DB from the backup."),Object(n.b)("h3",{id:"playbooksstrapi_rollbackyml"},"playbooks/strapi_rollback.yml"),Object(n.b)("div",{className:"admonition admonition-info alert alert--info"},Object(n.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(n.b)("h5",{parentName:"div"},Object(n.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(n.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(n.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(n.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(n.b)("p",{parentName:"div"},"This feature is not developed yet"))),Object(n.b)("h2",{id:"ansible-requirements"},"Ansible Requirements"),Object(n.b)("p",null,"First off, if you are not familiar with Ansible-Vault what are you doing with your life? Go do some research. There is a default Ansible config that sets some sane defaults located ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/derrickmehaffy/strapi-vultr-deploy/blob/main/ansible/ansible.cfg"}),"here"),". I suggest you read through it to understand how it's setup."),Object(n.b)("p",null,"This template uses various roles from Ansible-Galaxy and misc GitHub repos, I suggest you look at the requirements file and review their documentation if you plan to make changes. There is also a ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/derrickmehaffy/strapi-vultr-deploy/blob/main/ansible/install_requirements.sh"}),"script")," to automatically install them."),Object(n.b)("p",null,"Next you need to make a ",Object(n.b)("inlineCode",{parentName:"p"},"vault_password")," file at the ansible folder root to encrypt/decrypt the ",Object(n.b)("inlineCode",{parentName:"p"},"crypt_vars/*")," files. See the ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/derrickmehaffy/strapi-vultr-deploy/tree/main/ansible/crypt_vars/example"}),"example folder")," and it's ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/derrickmehaffy/strapi-vultr-deploy/blob/main/ansible/crypt_vars/example/README.md"}),"README.md")," for some templates and a sample encrypted file. There is a password generation script located ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/derrickmehaffy/strapi-vultr-deploy/blob/main/ansible/scripts/gen_pwd.sh"}),"here")," for my fellow lazy folks. ",Object(n.b)("strong",{parentName:"p"},"Keep that password safe and handy, if you lose it, back to square one on configuring shit")))}p.isMDXComponent=!0},99:function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return u}));var r=a(0),l=a.n(r);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var b=l.a.createContext({}),p=function(e){var t=l.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return l.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},m=l.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,i=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),c=p(a),m=r,u=c["".concat(i,".").concat(m)]||c[m]||d[m]||n;return a?l.a.createElement(u,o(o({ref:t},b),{},{components:a})):l.a.createElement(u,o({ref:t},b))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var b=2;b<n;b++)i[b]=a[b];return l.a.createElement.apply(null,i)}return l.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);