var whoDadded=(()=>{var o=Object.create,c=Object.defineProperty,s=Object.getOwnPropertyDescriptor,d=Object.getOwnPropertyNames,u=Object.getPrototypeOf,f=Object.prototype.hasOwnProperty,e=(e,t)=>function(){return t||(0,e[d(e)[0]])((t={exports:{}}).exports,t),t.exports},t=(e,t,a)=>{a=null!=e?o(u(e)):{};var i=!t&&e&&e.__esModule?a:c(a,"default",{value:e,enumerable:!0}),r=e,l=void 0,n=void 0;if(r&&"object"==typeof r||"function"==typeof r)for(let e of d(r))f.call(i,e)||e===l||c(i,e,{get:()=>r[e],enumerable:!(n=s(r,e))||n.enumerable});return i},a=e({"external-global-plugin:react"(e,t){t.exports=Spicetify.React}}),e=e({"external-global-plugin:react-dom"(e,t){t.exports=Spicetify.ReactDOM}}),i=t(a()),r=t(e()),l=t(a());async function n(e){var t,a,i,r={userInfo:{culprit:"",culpritProfileSrc:"",avatarSrc:""},playlistData:{playlistTitle:"",playlistSrc:""}};return null!=e&&null!=(t=e.context_uri)&&(i=await async function(e){e=Spicetify.URI.isPlaylistV2(e)?Spicetify.URI.fromString(e):void 0;if(null!=e)try{return await Spicetify.Platform.PlaylistAPI.getMetadata(e.toURI())}catch(e){}}(t),a=await async function(e){e=Spicetify.URI.isPlaylistV2(e)?Spicetify.URI.fromString(e):void 0;if(null!=e)try{return await Spicetify.Platform.PlaylistAPI.getContents(e.toURI())}catch(e){}}(t),null!=i)&&(i=i.name,t=p(t),r.playlistData.playlistTitle=i,r.playlistData.playlistSrc=t,null!=e.track)&&null!=a&&null!=(i=await async function(e,t){const a=Spicetify.URI.isTrack(e)?Spicetify.URI.fromString(e):Spicetify.URI.trackURI(e,"00:00","",!1),i=t.find(e=>e.uri===a.toURI());if(i)return i.addedBy.uri}(e.track.uri,a.items))&&null!=(t=await async function(e){e=Spicetify.URI.isProfile(e)?Spicetify.URI.fromString(e):Spicetify.URI.profileURI(e,[]);if(e.username)try{return await Spicetify.CosmosAsync.get("https://api.spotify.com/v1/users/"+e.username)}catch(e){}}(i))&&(e=t.display_name,a=p(t.uri),r.userInfo.culprit=e,r.userInfo.culpritProfileSrc=a,0<t.images.length)&&(i=t.images[0].url,r.userInfo.avatarSrc=i),r}function p(e){var t=e.split(":");if(t.length<2)return e;var a=t.slice(1);let i="/";for(let e=0;e<a.length;e++){var r=a[e];i+=r+"/"}return i}function y({playerState:e}){const[a,i]=(0,l.useState)(void 0),r=((0,l.useEffect)(()=>{let t=!0;return n(e).then(e=>{t&&i(e)}),()=>{t=!1}},[e]),e=>{Spicetify.Platform.History.push(e)});return l.default.createElement("div",{className:"WhoAddedWidgetContainer"},!a||!a.playlistData||!a.playlistData.playlistTitle||a.playlistData.playlistTitle.length<1?null:l.default.createElement("div",{className:"WhoAddedPlaylistContainer"},l.default.createElement("h5",{className:"DullText"},"From"),l.default.createElement("h5",null,a.playlistData.playlistSrc.length<1?l.default.createElement("a",{className:"EmphasisText"},a.playlistData.playlistTitle):l.default.createElement("a",{className:"EmphasisText Pointer",onClick:()=>r(a.playlistData.playlistSrc)},a.playlistData.playlistTitle))),(()=>{if(!a||!a.userInfo||!a.userInfo.culprit||a.userInfo.culprit.length<1)return null;return l.default.createElement("div",{className:"WhoAddedCulpritContainer"},l.default.createElement("h5",{className:"DullText"},"Added by"),(()=>{const t=0<a.userInfo.culpritProfileSrc.length;return l.default.createElement("h5",{className:"WhoAddedCulpritAnchorContainer "+(t?"Pointer":""),onClick:e=>{t&&r(a.userInfo.culpritProfileSrc)}},a.userInfo.avatarSrc.length<1?null:l.default.createElement("img",{className:"Avatar",src:a.userInfo.avatarSrc,width:24,height:24}),l.default.createElement("a",{className:"EmphasisText"},a.userInfo.culprit))})())})())}var m="who-added";function h(){const[e,t]=(0,i.useState)(Spicetify.Player.data);return(0,i.useEffect)(()=>(Spicetify.Player.addEventListener("songchange",async e=>{t(null==e?void 0:e.data)}),()=>{Spicetify.Player.removeEventListener("songchange",()=>{})})),i.default.createElement(i.default.Fragment,null,i.default.createElement(y,{playerState:e}))}var g=async function(){let e=0;for(;!(null!=Spicetify&&Spicetify.showNotification&&Spicetify.CosmosAsync&&Spicetify.Player&&Spicetify.Platform&&Spicetify.URI);){if(10<=e)return console.error(`[${m}] One (or more) of Spicetify's libraries did not load in a reasonable amount of time. Aborting...`),-1;await new Promise(e=>setTimeout(e,1e3)),e++}e=0;let t=document.querySelector(".main-nowPlayingBar-left");for(;!t;){if(10<=e)return console.error(`[${m}] Could not find the target element to inject into in a reasonable amount of time. Aborting...`),-1;await new Promise(e=>setTimeout(e,1e3)),t=document.querySelector(".main-nowPlayingBar-left"),e++}console.log(`[${m}] Extension loaded!`);var a=document.createElement("div");a.className+="WhoAddedWidgetRootContainer",t.appendChild(a),r.default.render(i.default.createElement(h,null),a)};(async()=>{await g()})()})();(async()=>{var e;document.getElementById("whoDadded")||((e=document.createElement("style")).id="whoDadded",e.textContent=String.raw`
  .main-nowPlayingBar-left{display:flex!important;flex-direction:row!important;align-items:center!important}.main-nowPlayingWidget-nowPlaying{flex-shrink:0}.WhoAddedWidgetRootContainer{width:100%;order:1;margin:auto 0 auto .5rem;overflow:hidden}.WhoAddedWidgetRootContainer::-webkit-scrollbar{height:.2rem}.WhoAddedWidgetRootContainer::-webkit-scrollbar-thumb{border-radius:10px}.WhoAddedWidgetContainer{display:flex;flex-direction:column}.WhoAddedCulpritContainer,.WhoAddedPlaylistContainer{display:flex;flex-direction:row;align-items:center;gap:.25rem}.WhoAddedCulpritAnchorContainer{display:flex;flex-direction:row;align-items:center;gap:.25rem}.Avatar{border-radius:100%}.DullText{white-space:nowrap;color:var(--spice-subtext)}.EmphasisText{white-space:nowrap;color:var(--spice-text)}.Pointer{cursor:pointer}
      `.trim(),document.head.appendChild(e))})();