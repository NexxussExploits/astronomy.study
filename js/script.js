(function(_0x21485c,_0x4cdc88){const _0xb53502=_0x3591,_0x8c7894=_0x21485c();while(!![]){try{const _0xe6f348=parseInt(_0xb53502(0x1dc))/0x1+parseInt(_0xb53502(0x1d7))/0x2+parseInt(_0xb53502(0x1d4))/0x3+parseInt(_0xb53502(0x1d5))/0x4*(parseInt(_0xb53502(0x1d6))/0x5)+-parseInt(_0xb53502(0x1d9))/0x6+parseInt(_0xb53502(0x1da))/0x7+-parseInt(_0xb53502(0x1d8))/0x8*(parseInt(_0xb53502(0x1db))/0x9);if(_0xe6f348===_0x4cdc88)break;else _0x8c7894['push'](_0x8c7894['shift']());}catch(_0x32d648){_0x8c7894['push'](_0x8c7894['shift']());}}}(_0x2a40,0x5ea4b));function _0x3591(_0x52108b,_0x3eb9c9){const _0x2a40d7=_0x2a40();return _0x3591=function(_0x35910a,_0x3b56e9){_0x35910a=_0x35910a-0x1d4;let _0x413cfd=_0x2a40d7[_0x35910a];return _0x413cfd;},_0x3591(_0x52108b,_0x3eb9c9);}function checkPassword(){const _0x4192d8=prompt('Enter\x20the\x20password\x20to\x20access\x20the\x20system:');_0x4192d8==='Ma'?alert('Password\x20correct.\x20Access\x20granted.'):(alert('Incorrect\x20password.\x20Please\x20try\x20again.'),checkPassword());}checkPassword();function _0x2a40(){const _0x53bff5=['107346HyAQOy','148572iQemol','1117228DBCnMO','10wrdipq','10206TMZdHv','136FOeQdx','825438UULkdM','4867639ikUxpk','471564zJnjoU'];_0x2a40=function(){return _0x53bff5;};return _0x2a40();}

// This next area of Code is the FPS Counter:

let fpsCounter = 0;
let lastCalledTime = performance.now();
let fpsElement = document.getElementById('fps');

function updateFPS() {
    fpsCounter++;
    let delta = (performance.now() - lastCalledTime) / 1000;

    if (delta >= 1) {
        let fps = fpsCounter / delta;
        let randomOffset = Math.random() * 2 - 1; 
        fps += randomOffset; 
        fpsElement.innerText = `FPS: ${Math.round(fps)}`;
        fpsCounter = 0;
        lastCalledTime = performance.now();
    }

    requestAnimationFrame(updateFPS);
}

updateFPS();

// No Dev Tools!

  const isDevToolsOpen = () => {
      const widthThreshold = 160;
      const heightThreshold = 160;
      
      return window.outerWidth - window.innerWidth > widthThreshold || window.outerHeight - window.innerHeight > heightThreshold;
    };
    
    const checkAndCloseIfDevToolsOpen = () => {
      if (isDevToolsOpen()) {
        window.location.href = 'about:blank';
      }
    };
    
    setInterval(checkAndCloseIfDevToolsOpen, 1000);
