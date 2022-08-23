
var CC = document.getElementById('controlCenter').style;
var CoCe = document.getElementById('CC').style;
var trig = document.getElementById('control-center-trig').style;
var icon1 = document.getElementById('icon1');
var icon2 = document.getElementById('icon2').style;
var body = document.getElementById('table').style;
var dock = document.getElementById('dock').style;
var homeBar = document.getElementById('home-bar');
var batteryDisplay = document.getElementById('bD');
var batteryDisplay2 = document.getElementById('battery').style;
var appGrid = document.getElementById('table').style;
var height = window.innerHeight;

var batteryPercentage = 100;
var wifiSignal = 2;



function openCC() {
    CC.top = '0';
    CoCe.opacity = '1';
    CoCe.zIndex = '0';
    CoCe.backdropFilter = 'blur(10px)';
    body.transform = 'scale(0.9)';
    dock.transform = 'scale(0.8)';
    trig.margin = '15px 20px';
    batteryDisplay.style.fontWeight = '900';
    batteryDisplay.style.fontSize = '15px';
    icon1.style.height = '30px';
    icon2.transform = 'scale(1.4)';
    icon2.margin = '6px';
}
function closeCC() {
    CC.top = '-100%';
    CoCe.opacity = '0';
    CoCe.zIndex = '-1';
    body.transform = 'scale(1)';
    dock.transform = 'scale(1)';
    trig.margin = '0';
    batteryDisplay.style.fontWeight = '500';
    batteryDisplay.style.fontSize = '11px';
    icon1.style.height = '20px';
    icon2.transform = 'scale(1)';
    icon2.margin = '2px';
}

navigator.getBattery().then(function(battery) {
    battery.addEventListener('levelchange', function() {    
      // Do stuff when the level changes, you can get it

      batteryPercentage = Math.round(battery.level*100);
      batteryDisplay.innerHTML = `${batteryPercentage}%`;      // from battery.level
      batteryDisplay2.width = `${batteryPercentage}%`;
      icon1.src = `wifi ${wifiSignal}.svg`;
    })
    batteryPercentage = Math.round(battery.level*100);
    batteryDisplay.innerHTML = `${batteryPercentage}%`;
    batteryDisplay2.width = `${batteryPercentage}%`;
    icon1.src = `wifi ${wifiSignal}.svg`;
});

var app = document.getElementById('app').style;

appGrid.height = `${height - parseFloat(dock.height)}px`;

document.querySelectorAll('img').forEach(function(a, key) {
    a.addEventListener('click', async function() {
        var rect = a.getBoundingClientRect();
        app.display = 'block';
        app.transition = '0.4s cubic-bezier(0, 0, 0, 1)';
        app.position = 'fixed';
        app.height = '48px';
        app.width = '48px';
        app.borderRadius = '12px';
        app.top = `${rect.y}px`;
        app.left = `${rect.x}px`;
        await delay();
        app.height = '100%';
        app.width = '100%';
        app.borderRadius = '20px';
        app.top = `0`;
        app.left = `0`;
        app.transition = '0';
        dock.bottom = '-100px';
        homeBar.style.bottom = '10px';
        homeBar.addEventListener('click', async function() {
            app.transition = '0.4s cubic-bezier(0, 0, 0, 1)';
            app.position = 'fixed';
            await delay();
            app.height = '48px';
            app.width = '48px';
            app.borderRadius = '12px';
            app.top = `${rect.y}px`;
            app.left = `${rect.x}px`;
            app.transition = '0';
            dock.bottom = '15px';
            homeBar.style.bottom = '-10px';
            await delay(500);
            app.display = 'none';
        });
    });
});
function delay(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}