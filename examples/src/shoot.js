const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();
for(const [n,w,h] of [['fintech',960,540],['cafeteria',960,540],['meditacao',960,540],['todas',1400,800]]){const p=await b.newPage({viewport:{width:w,height:h}});await p.goto('file://'+process.cwd()+'/'+n+'.html');await p.screenshot({path:'../'+n+'.png',fullPage:n==='todas'});console.log('ok',n)}
await b.close()})();
