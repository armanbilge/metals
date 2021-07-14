(self.webpackChunk=self.webpackChunk||[]).push([[7631],{3905:(t,e,a)=>{"use strict";a.d(e,{Zo:()=>m,kt:()=>u});var l=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,l)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,l,r=function(t,e){if(null==t)return{};var a,l,r={},n=Object.keys(t);for(l=0;l<n.length;l++)a=n[l],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(l=0;l<n.length;l++)a=n[l],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=l.createContext({}),o=function(t){var e=l.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=o(t.components);return l.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},h=l.forwardRef((function(t,e){var a=t.components,r=t.mdxType,n=t.originalType,p=t.parentName,m=s(t,["components","mdxType","originalType","parentName"]),h=o(a),u=r,k=h["".concat(p,".").concat(u)]||h[u]||c[u]||n;return a?l.createElement(k,i(i({ref:e},m),{},{components:a})):l.createElement(k,i({ref:e},m))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var n=a.length,i=new Array(n);i[0]=h;var s={};for(var p in e)hasOwnProperty.call(e,p)&&(s[p]=e[p]);s.originalType=t,s.mdxType="string"==typeof t?t:r,i[1]=s;for(var o=2;o<n;o++)i[o]=a[o];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}h.displayName="MDXCreateElement"},8737:(t,e,a)=>{"use strict";a.r(e),a.d(e,{frontMatter:()=>s,metadata:()=>p,toc:()=>o,default:()=>c});var l=a(2122),r=a(9756),n=(a(7294),a(3905)),i=["components"],s={author:"Vadim Chelyshov",title:"Metals v0.10.5 - Tungsten",authorURL:"https://twitter.com/_dos65",authorImageURL:"https://github.com/dos65.png"},p={permalink:"/metals/blog/2021/07/14/tungsten",source:"@site/blog/2021-07-14-tungsten.md",title:"Metals v0.10.5 - Tungsten",description:"We're happy to announce the release of Metals v0.10.5, which contains a lot of fixes, adds Scala 3.0.1 support,",date:"2021-07-14T00:00:00.000Z",formattedDate:"July 14, 2021",tags:[],readingTime:5.7,truncated:!1,nextItem:{title:"Metals v0.10.4 - Tungsten",permalink:"/metals/blog/2021/05/31/tungsten"}},o=[{value:"TL;DR",id:"tldr",children:[]},{value:"Add support for <code>textDocument/selectionRange</code>",id:"add-support-for-textdocumentselectionrange",children:[]},{value:"Scala3 <code>Inferred Type</code> code action and other improvements",id:"scala3-inferred-type-code-action-and-other-improvements",children:[]},{value:"Better support of scalafmt for Scala 3 projects",id:"better-support-of-scalafmt-for-scala-3-projects",children:[]},{value:"Search symbol references from dependency source in the workspace",id:"search-symbol-references-from-dependency-source-in-the-workspace",children:[]},{value:"Miscellaneous",id:"miscellaneous",children:[]},{value:"Contributors",id:"contributors",children:[]},{value:"Merged PRs",id:"merged-prs",children:[]},{value:"v0.10.5 (2021-07-12)",id:"v0105-2021-07-12",children:[]}],m={toc:o};function c(t){var e=t.components,a=(0,r.Z)(t,i);return(0,n.kt)("wrapper",(0,l.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"We're happy to announce the release of Metals v0.10.5, which contains a lot of fixes, adds Scala 3.0.1 support,\nand brings another nice feature!"),(0,n.kt)("table",null,(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"Commits since last release"),(0,n.kt)("td",{align:"center"},"155")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"Merged PRs"),(0,n.kt)("td",{align:"center"},"73")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"Contributors"),(0,n.kt)("td",{align:"center"},"9")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"Closed issues"),(0,n.kt)("td",{align:"center"},"18")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"New features"),(0,n.kt)("td",{align:"center"},"1")))),(0,n.kt)("p",null,"For full details: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/scalameta/metals/milestone/40?closed=1"},"https://github.com/scalameta/metals/milestone/40?closed=1")),(0,n.kt)("p",null,"Metals is a language server for Scala that works with VS Code, Vim, Emacs,\nSublime Text and Eclipse. Metals is developed at the\n",(0,n.kt)("a",{parentName:"p",href:"https://scala.epfl.ch/"},"Scala Center")," and ",(0,n.kt)("a",{parentName:"p",href:"https://virtuslab.com"},"VirtusLab"),"\nwith the help from ",(0,n.kt)("a",{parentName:"p",href:"https://lunatech.com"},"Lunatech")," along with contributors from\nthe community."),(0,n.kt)("h2",{id:"tldr"},"TL;DR"),(0,n.kt)("p",null,"Check out ",(0,n.kt)("a",{parentName:"p",href:"https://scalameta.org/metals/"},"https://scalameta.org/metals/"),", and\ngive Metals a try!"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Add support for ",(0,n.kt)("inlineCode",{parentName:"li"},"textDocument/selectionRange")),(0,n.kt)("li",{parentName:"ul"},"[Scala 3]"," ",(0,n.kt)("inlineCode",{parentName:"li"},"Inferred Type")," code action and other improvements"),(0,n.kt)("li",{parentName:"ul"},"Better support of scalafmt for Scala 3 projects"),(0,n.kt)("li",{parentName:"ul"},"Search symbol references from dependency source in the workspace")),(0,n.kt)("h2",{id:"add-support-for-textdocumentselectionrange"},"Add support for ",(0,n.kt)("inlineCode",{parentName:"h2"},"textDocument/selectionRange")),(0,n.kt)("p",null,"Due to the great work by ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ckipp01"},"@ckipp01")," Metals now implements the ",(0,n.kt)("inlineCode",{parentName:"p"},"textDocument/selectionRange")," ",(0,n.kt)("a",{parentName:"p",href:"https://microsoft.github.io/language-server-protocol/specifications/specification-current/#textDocument_selectionRange"},"LSP-method"),".\nIt allows you to easily select an expression and expand/shrink it using shortcut combinations:"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13974112/125335989-7a5f8780-e34d-11eb-911f-42f851478737.gif",alt:"gif1"})),(0,n.kt)("p",null,"Default keybindings in VSCode:"),(0,n.kt)("table",null,(0,n.kt)("tbody",{style:{"font-size":"13px"}},(0,n.kt)("tr",null,(0,n.kt)("td",null),(0,n.kt)("td",null,"Win/Linux"),(0,n.kt)("td",null,"macOS")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"Expand"),(0,n.kt)("td",null,"Shift+Alt+Right"),(0,n.kt)("td",null,"\u2303\u21e7\u2318\u2192")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"Shrink"),(0,n.kt)("td",null,"Shift+Alt+Left"),(0,n.kt)("td",null,"\u2303\u21e7\u2318\u2190")))),(0,n.kt)("h2",{id:"scala3-inferred-type-code-action-and-other-improvements"},"[Scala3]"," ",(0,n.kt)("inlineCode",{parentName:"h2"},"Inferred Type")," code action and other improvements"),(0,n.kt)("p",null,"We're hard at work ensuring that the same feature-set for Scala 2 is available for Scala 3.\nThis release adds support for the ",(0,n.kt)("inlineCode",{parentName:"p"},"Insert Inferred Type")," code action."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://i.imgur.com/GJGFOOy.gif",alt:"gif2"})),(0,n.kt)("p",null,"In addition to other small fixes, it's worth mentioning that the ",(0,n.kt)("inlineCode",{parentName:"p"},"Go to Definition")," functionality was improved so that in situations where there are compilation issues, you're now able to better navigate to the definition site."),(0,n.kt)("h2",{id:"better-support-of-scalafmt-for-scala-3-projects"},"Better support of scalafmt for Scala 3 projects"),(0,n.kt)("p",null,"In order to support different Scala dialects scalafmt added a ",(0,n.kt)("a",{parentName:"p",href:"https://scalameta.org/scalafmt/docs/configuration.html#scala-3"},(0,n.kt)("inlineCode",{parentName:"a"},"runner.dialect")," setting")," to support Scala 3.\nMetals will now correctly generate and even automatically upgrade your ",(0,n.kt)("inlineCode",{parentName:"p"},".scalafmt.conf"),".\nMoreover, in projects that contain different Scala major versions Metals will set a separate dialect for each separate source directory."),(0,n.kt)("h2",{id:"search-symbol-references-from-dependency-source-in-the-workspace"},"Search symbol references from dependency source in the workspace"),(0,n.kt)("p",null,"Thanks to ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Z1kkurat"},"@Z1kkurat"),' "Find References" now also works from within your dependency sources to include references from all workspace sources.\nPreviously, it included only local occurrences in the dependency source file.'),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://i.imgur.com/myHPDjP.gif",alt:"gif3"})),(0,n.kt)("h2",{id:"miscellaneous"},"Miscellaneous"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fixed issues with Metals client still running after closing window"),(0,n.kt)("li",{parentName:"ul"},"Fixed indexing of Scala 3 libraries that include macros"),(0,n.kt)("li",{parentName:"ul"},"Fixed issues with breakpoints not stopped when using optional braces"),(0,n.kt)("li",{parentName:"ul"},"Print type decorations for synthetic apply"),(0,n.kt)("li",{parentName:"ul"},"Wrap autofilled arguments with backticks"),(0,n.kt)("li",{parentName:"ul"},"Don't offer to organize imports when there is an error in the file")),(0,n.kt)("h2",{id:"contributors"},"Contributors"),(0,n.kt)("p",null,"Big thanks to everybody who contributed to this release or reported an issue!"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"$ git shortlog -sn --no-merges v0.10.4..v0.10.5\n22  Chris Kipp\n18  Vadim Chelyshov\n17  Tomasz Godzik\n 2  Adrien Piquerez\n 2  Luigi Frunzio\n 2  Kamil Podsiad\u0142o\n 1  Z1kkurat\n")),(0,n.kt)("h2",{id:"merged-prs"},"Merged PRs"),(0,n.kt)("h2",{id:"v0105-2021-07-12"},(0,n.kt)("a",{parentName:"h2",href:"https://github.com/scalameta/metals/tree/v0.10.5"},"v0.10.5")," (2021-07-12)"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/scalameta/metals/compare/v0.10.4...v0.10.5"},"Full Changelog")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Merged pull requests:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Add support for Scala 3.0.2-RC1 and drop references to 3.0.0-RC\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2955"},"#","2955"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,n.kt)("li",{parentName:"ul"},"Add Scala 3.0.1 support\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2947"},"#","2947"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/dos65"},"dos65"),")"),(0,n.kt)("li",{parentName:"ul"},"Update vim docs now that Neovim 0.5.0 is out.\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2951"},"#","2951"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,n.kt)("li",{parentName:"ul"},"Don't set detail in completion if it's empty.\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2950"},"#","2950"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,n.kt)("li",{parentName:"ul"},"Organize imports quickfix action\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2935"},"#","2935"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/kpodsiad"},"kpodsiad"),")"),(0,n.kt)("li",{parentName:"ul"},"[Scala3]"," Fix completion pos inference for Select with nme.ERROR\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2940"},"#","2940"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/dos65"},"dos65"),")"),(0,n.kt)("li",{parentName:"ul"},"[Scala 3]"," Properly show enum on hover\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2938"},"#","2938"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,n.kt)("li",{parentName:"ul"},"Correct footer label\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2939"},"#","2939"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,n.kt)("li",{parentName:"ul"},"[Scala2]"," PcDefinition fix\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2917"},"#","2917"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/dos65"},"dos65"),")"),(0,n.kt)("li",{parentName:"ul"},"Fix dead links and add in serve command\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2937"},"#","2937"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,n.kt)("li",{parentName:"ul"},"[Scala3]"," Fix completions after newline + dot\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2930"},"#","2930"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/dos65"},"dos65"),")"),(0,n.kt)("li",{parentName:"ul"},"Update deploy command for docusaurus.\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2936"},"#","2936"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,n.kt)("li",{parentName:"ul"},"Update to Docusaurus 2.0\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2927"},"#","2927"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,n.kt)("li",{parentName:"ul"},'Revert "Merge pull request #2908 from tgodzik/reset-object"\n',(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2931"},"#","2931"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,n.kt)("li",{parentName:"ul"},"Don't offer to organize imports when there is an error in the file\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2921"},"#","2921"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,n.kt)("li",{parentName:"ul"},"Do not use $TMPDIR to store sbt-launcher.jar\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2924"},"#","2924"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/kpodsiad"},"kpodsiad"),")"),(0,n.kt)("li",{parentName:"ul"},"Wrap autofilled arguments with backticks\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2929"},"#","2929"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,n.kt)("li",{parentName:"ul"},"Print type decorations for synthetic apply\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2906"},"#","2906"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,n.kt)("li",{parentName:"ul"},"[Scala3]"," Use symbol search for PC ",(0,n.kt)("inlineCode",{parentName:"li"},"definitions"),".\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2900"},"#","2900"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/dos65"},"dos65"),")"),(0,n.kt)("li",{parentName:"ul"},"Wrap worksheets in object instead of a class\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2908"},"#","2908"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,n.kt)("li",{parentName:"ul"},"Search for symbol references in workspace\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2920"},"#","2920"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Z1kkurat"},"Z1kkurat"),")"),(0,n.kt)("li",{parentName:"ul"},"Update scalameta, semanticdb-scalac, ... to 4.4.23\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2915"},"#","2915"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,n.kt)("li",{parentName:"ul"},"Fix unclear heading in sbt docs.\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2916"},"#","2916"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,n.kt)("li",{parentName:"ul"},"Update ipcsocket to 1.4.0\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2913"},"#","2913"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,n.kt)("li",{parentName:"ul"},"Update lz4-java to 1.8.0\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2912"},"#","2912"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,n.kt)("li",{parentName:"ul"},"Update flyway-core to 7.10.0\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2911"},"#","2911"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,n.kt)("li",{parentName:"ul"},"[Scala3]"," Rework ",(0,n.kt)("inlineCode",{parentName:"li"},"NamesInScope"),(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2867"},"#","2867"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/dos65"},"dos65"),")"),(0,n.kt)("li",{parentName:"ul"},"Add support for Scala 3.0.1-RC2\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2898"},"#","2898"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,n.kt)("li",{parentName:"ul"},"Fix off by one error while setting DAP breakpoints\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2894"},"#","2894"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,n.kt)("li",{parentName:"ul"},"Exclude Jmh and Scalafix from the list of build targets in sbt\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2895"},"#","2895"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/adpi2"},"adpi2"),")"),(0,n.kt)("li",{parentName:"ul"},"[Scala3]"," Provide correct dialect to ",(0,n.kt)("inlineCode",{parentName:"li"},"Mtags.allToplevels")," calls.\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2892"},"#","2892"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/dos65"},"dos65"),")"),(0,n.kt)("li",{parentName:"ul"},"Fix CompilerJobQueue concurrent access/shutdown\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2890"},"#","2890"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/dos65"},"dos65"),")"),(0,n.kt)("li",{parentName:"ul"},"Get rid of warning about setting -Xsemanticdb twice.\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2889"},"#","2889"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,n.kt)("li",{parentName:"ul"},"[Scalafmt]"," Rewrite ",(0,n.kt)("inlineCode",{parentName:"li"},".scalafmt.conf")," if sources require non-default dialect\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2814"},"#","2814"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/dos65"},"dos65"),")"),(0,n.kt)("li",{parentName:"ul"},"Add support for ",(0,n.kt)("inlineCode",{parentName:"li"},"textDocument/selectionRange"),".\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2862"},"#","2862"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,n.kt)("li",{parentName:"ul"},"Ensure a valid URI is returned for non-html analyze stacktrace.\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2876"},"#","2876"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,n.kt)("li",{parentName:"ul"},"Update scalameta, semanticdb-scalac, ... to 4.4.21\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2886"},"#","2886"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,n.kt)("li",{parentName:"ul"},"Update ipcsocket to 1.3.1\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2884"},"#","2884"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,n.kt)("li",{parentName:"ul"},"Update scalafmt-core to 3.0.0-RC5\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2885"},"#","2885"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,n.kt)("li",{parentName:"ul"},"Update sbt, scripted-plugin to 1.5.4\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2883"},"#","2883"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,n.kt)("li",{parentName:"ul"},"Update flyway-core to 7.9.2\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2882"},"#","2882"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,n.kt)("li",{parentName:"ul"},"Update sbt-jmh to 0.4.3\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2887"},"#","2887"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,n.kt)("li",{parentName:"ul"},"Update ujson to 1.4.0\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2881"},"#","2881"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,n.kt)("li",{parentName:"ul"},"Bump sbt-debug-adapter to 1.1.2\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2872"},"#","2872"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/adpi2"},"adpi2"),")"),(0,n.kt)("li",{parentName:"ul"},"Lazily get explicit choice.\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2868"},"#","2868"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,n.kt)("li",{parentName:"ul"},"[Scala 3]"," Enable inferred type code action\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2825"},"#","2825"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,n.kt)("li",{parentName:"ul"},"Don't offer completions inside scaladoc and comments\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2822"},"#","2822"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Giggiux"},"Giggiux"),")"),(0,n.kt)("li",{parentName:"ul"},"WorkspaceSearchVisitior - make search more predictable.\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2863"},"#","2863"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/dos65"},"dos65"),")"),(0,n.kt)("li",{parentName:"ul"},"Enable organize-imports for mtags3\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2860"},"#","2860"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/dos65"},"dos65"),")"),(0,n.kt)("li",{parentName:"ul"},"Run organize imports on Scala 3 sources\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2858"},"#","2858"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,n.kt)("li",{parentName:"ul"},"Enable organize imports for Scala 3\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2857"},"#","2857"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,n.kt)("li",{parentName:"ul"},"[Scala3]"," Add test that checks that diagnostic for inline def usage works correctly\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2854"},"#","2854"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/dos65"},"dos65"),")"),(0,n.kt)("li",{parentName:"ul"},"Add support for Scala 3.0.1-RC1\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2852"},"#","2852"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,n.kt)("li",{parentName:"ul"},"Bump olafurpg/setup-scala from 10 to 12\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2848"},"#","2848"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/dependabot%5Bbot%5D"},"dependabot[bot]"),")"),(0,n.kt)("li",{parentName:"ul"},"ScalaVersions: fix scala3 version extraction from jar name.\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2833"},"#","2833"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/dos65"},"dos65"),")"),(0,n.kt)("li",{parentName:"ul"},"Update amonite to 2.3.8-124-2da846d2 and add support for 2.13.6\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2851"},"#","2851"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,n.kt)("li",{parentName:"ul"},"Revert Bloop version upgrade\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2850"},"#","2850"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,n.kt)("li",{parentName:"ul"},"Fix scalafmt config\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2849"},"#","2849"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,n.kt)("li",{parentName:"ul"},"Update scalafmt-core to 3.0.0-RC4\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2845"},"#","2845"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,n.kt)("li",{parentName:"ul"},"Update jol-core to 0.16\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2844"},"#","2844"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,n.kt)("li",{parentName:"ul"},"Update flyway-core to 7.9.1\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2843"},"#","2843"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,n.kt)("li",{parentName:"ul"},"Update undertow-core to 2.2.8.Final\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2842"},"#","2842"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,n.kt)("li",{parentName:"ul"},"Update nuprocess to 2.0.2\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2841"},"#","2841"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,n.kt)("li",{parentName:"ul"},"Update scribe, scribe-file, scribe-slf4j to 3.5.5\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2840"},"#","2840"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,n.kt)("li",{parentName:"ul"},"Update ujson to 1.3.15\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2839"},"#","2839"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,n.kt)("li",{parentName:"ul"},"Update mill-contrib-testng to 0.9.8\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2838"},"#","2838"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,n.kt)("li",{parentName:"ul"},"Bump coursier/cache-action from 5 to 6.1\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2846"},"#","2846"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/dependabot%5Bbot%5D"},"dependabot[bot]"),")"),(0,n.kt)("li",{parentName:"ul"},"Update metaconfig-core to 0.9.14\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2836"},"#","2836"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,n.kt)("li",{parentName:"ul"},"Update scalafix-interfaces to 0.9.29\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2835"},"#","2835"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,n.kt)("li",{parentName:"ul"},"Update bloop-config, bloop-launcher to 1.4.8-43-c2d941d9\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2834"},"#","2834"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,n.kt)("li",{parentName:"ul"},"Add FAQ entry about sbt Apple M1 issue\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2832"},"#","2832"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,n.kt)("li",{parentName:"ul"},"Minor fix in last release notes\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2831"},"#","2831"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/dos65"},"dos65"),")"),(0,n.kt)("li",{parentName:"ul"},"Add release notes - 0.10.4 release\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2830"},"#","2830"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/dos65"},"dos65"),")")))}c.isMDXComponent=!0}}]);