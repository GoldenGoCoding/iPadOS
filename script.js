
var CC = document.getElementById('controlCenter').style;
var CoCe = document.getElementById('CC');
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
var app = document.getElementById('app');

// apps source code goes here!!
var findMy = `
<h1>Find My!!</h1>
`;
var files = `
<h1>Files!!</h1>
`;
var notFound = `
<h1>Sorry this app is empty</h1>
`;

var batteryPercentage = 100;
var wifiSignal = 2;



function openCC() {
    CC.top = '0';
    CoCe.style.opacity = '1';
    CoCe.style.zIndex = '0';
    CoCe.style.backdropFilter = 'blur(10px)';
    body.transform = 'scale(0.9)';
    dock.transform = 'scale(0.9)';
    app.transform = 'scale(0.9)';
    trig.padding = '20px 20px';
    trig.width = '275px';
    batteryDisplay.style.fontWeight = '900';
    batteryDisplay.style.fontSize = '15px';
    icon1.style.height = '30px';
    icon2.transform = 'scale(1.4)';
    icon2.margin = '6px';
}
CoCe.addEventListener('wheel', async function () {
    await delay(100);
    if (document.getElementById('top').getBoundingClientRect().y < 0) {
        trig.backdropFilter = 'blur(20px)';
        trig.borderBottom = '1px #fff2 solid';
        trig.borderRadius = '0px';
    }
    else {
        trig.backdropFilter = '';
        trig.borderBottom = '';
        trig.borderRadius = '4px';
    }
});
function closeCC() {
    CC.top = '-100%';
    CoCe.style.opacity = '0';
    CoCe.style.zIndex = '-1';
    body.transform = 'scale(1)';
    dock.transform = 'scale(1)';
    app.transform = 'scale(1)';
    trig.padding = '0';
    trig.margin = '0';
    trig.width = '';
    trig.backdropFilter = '';
    trig.borderBottom = '';
    trig.borderRadius = '4px';
    batteryDisplay.style.fontWeight = '500';
    batteryDisplay.style.fontSize = '11px';
    icon1.style.height = '20px';
    icon2.transform = 'scale(1)';
    icon2.margin = '2px';
}

navigator.getBattery().then(function (battery) {
    battery.addEventListener('levelchange', function () {
        batteryPercentage = Math.round(battery.level * 100);
        batteryDisplay.innerHTML = `${batteryPercentage}%`;
        batteryDisplay2.width = `${batteryPercentage}%`;
        icon1.src = `wifi ${wifiSignal}.svg`;
    })
    batteryPercentage = Math.round(battery.level * 100);
    batteryDisplay.innerHTML = `${batteryPercentage}%`;
    batteryDisplay2.width = `${batteryPercentage}%`;
    icon1.src = `wifi ${wifiSignal}.svg`;
});


document.querySelectorAll('img').forEach(function (a, key) {
    if (a == icon1) { } else {


        a.addEventListener('click', async function () {

            var rect = a.getBoundingClientRect();
            app.style.display = 'block';
            app.style.transition = '0.4s cubic-bezier(0, 0, 0, 1)';
            app.style.position = 'fixed';
            app.style.height = '48px';
            app.style.width = '48px';
            app.style.borderRadius = '12px';
            app.style.top = `${rect.y}px`;
            app.style.left = `${rect.x}px`;
            await delay();
            app.style.height = '100%';
            app.style.width = '100%';
            app.style.borderRadius = '20px';
            app.style.top = `0`;
            app.style.left = `0`;
            app.style.transition = '0';
            dock.bottom = '-100px';
            homeBar.style.bottom = '5px';


            homeBar.addEventListener('mouseover', async function () {
                await delay(500);
                dock.bottom = '15px';
                homeBar.onmouseleave = async function () {
                    await delay(1000);
                    dock.bottom = '-100px';
                };
                homeBar.onclick = async function () {
                    homeBar.onmouseleave = null;
                    app.style.transition = '0.4s cubic-bezier(0, 0, 0, 1)';
                    app.style.position = 'fixed';
                    await delay();
                    closeCC();
                    app.style.height = '48px';
                    app.style.width = '48px';
                    app.style.borderRadius = '12px';
                    app.style.top = `${rect.y}px`;
                    app.style.left = `${rect.x}px`;
                    app.style.transition = '0';
                    dock.bottom = '15px';
                    homeBar.style.bottom = '-10px';
                    await delay(360);
                    app.style.display = 'none';
                };
            });
            if (a.src === './36709/ios-icons/svg/files-2365229.svg') {
                app.innerHTML = files;
            }
            if (a.src === './36709/ios-icons/svg/find-my-1575949.svg') {
                app.innerHTML = findMy;
            }
        });
    }
});
document.querySelectorAll('.toggle-circle').forEach(function(a) {
    a.addEventListener('click', function() {
        if (a.style.backgroundColor = 'rgba(255, 255, 255, 0.533)') {
            a.style.backgroundColor = 'rgb(34, 136, 221)';
            return;
        }
        else {
            a.style.backgroundColor = 'rgba(255, 255, 255, 0.533)';
            return;
        }
    });
});
document.getElementById('slider-brightness').addEventListener('mousedown', function(e) {
    var res = 106 - e.clientY + document.getElementById('slider-brightness').getBoundingClientRect().y;
    document.getElementById('sliderBr').style.height = `${res}px`;
});
document.getElementById('slider-volume').addEventListener('mousedown', function(e) {
    var res = 106 - e.clientY + document.getElementById('slider-volume').getBoundingClientRect().y;
    document.getElementById('sliderVo').style.height = `${res}px`;
});
function delay(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}
