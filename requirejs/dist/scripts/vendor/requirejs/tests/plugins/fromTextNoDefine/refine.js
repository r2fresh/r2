(function(){function i(){var e,t,n;if(typeof XMLHttpRequest!="undefined")return new XMLHttpRequest;for(t=0;t<3;t++){n=r[t];try{e=new ActiveXObject(n)}catch(i){}if(e){r=[n];break}}if(!e)throw new Error("require.getXhr(): XMLHttpRequest not available");return e}var e={},t,n,r=["Msxml2.XMLHTTP","Microsoft.XMLHTTP","Msxml2.XMLHTTP.4.0"];typeof window!="undefined"&&window.navigator&&window.document?t=function(e,t){var n=i();n.open("GET",e,!0),n.onreadystatechange=function(e){n.readyState===4&&t(n.responseText)},n.send(null)}:typeof process!="undefined"&&process.versions&&!!process.versions.node?(n=require.nodeRequire("fs"),t=function(e,t){t(n.readFileSync(e,"utf8"))}):typeof Packages!="undefined"&&(t=function(e,t){var n="utf-8",r=new java.io.File(e),i=java.lang.System.getProperty("line.separator"),s=new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(r),n)),o,u,a="";try{o=new java.lang.StringBuffer,u=s.readLine(),u&&u.length()&&u.charAt(0)===65279&&(u=u.substring(1)),o.append(u);while((u=s.readLine())!==null)o.append(i),o.append(u);a=String(o.toString())}finally{s.close()}t(a)}),define([],function(){return{load:function(n,r,i,s){var o=r.toUrl(n+".refine");t(o,function(t){t=t.replace(/refine/g,"define"),s.isBuild&&(e[n]=t),t+="\r\n//@ sourceURL="+o,i.fromText(n,t),r([n],function(e){i(e)})})},write:function(t,n,r){if(n in e){var i=e[n];r.asModule(t+"!"+n,i)}}}})})();