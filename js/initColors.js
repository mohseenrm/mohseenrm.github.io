
let be = document.getElementsByTagName("BODY")[0];

initColors();

function initColors(){
    if (localStorage.getItem("isLight") === null) {
        localStorage.setItem("isLight", 'true');
    }

    if (localStorage.getItem("isLight") === 'false'){
        makeDark();
    }
    else{
        makeLight();
    }
}


function makeDark(){
    be.style.setProperty('--primary', "#fff");
    be.style.setProperty('--secondary', "#fff");
    be.style.setProperty('--grey', "#73737D");
    be.style.setProperty('--background-color', "#111216");
    // be.style.setProperty('--accent', "#E9DAAC");
    be.style.setProperty('--accent', "#39e0cf");
    be.style.setProperty('--hover', "rgba(255, 255, 255, 0.07)");
    be.style.setProperty('--gradient', "linear-gradient(180deg, #111216 0%, rgba(66, 81, 98, 0.36) 100%)");
    be.style.setProperty('--articleText', "#fff");
    be.style.setProperty('--track', "rgba(255, 255, 255, 0.3)");
    be.style.setProperty('--progress', "#fff");
    be.style.setProperty('--card', "#1D2128");
    be.style.setProperty('--error', "#EE565B");
    be.style.setProperty('--success', "#46B17B");
    be.style.setProperty('--errorBackground', "rgba(238, 86, 91, 0.1)");
    be.style.setProperty('--horizontalRule', "rgba(255, 255, 255, 0.15)");
    be.style.setProperty('--inputBackground', "rgba(255, 255, 255, 0.07)");
    be.style.setProperty('--tooltip', "#000");
    be.style.setProperty('--card-background', "#222831");
    be.style.setProperty('--card-header', "#fff");
    be.style.setProperty('--card-subtitle', "#eeeeee");
    be.style.setProperty('--card-text', "#D0DFE6");
    be.style.setProperty('--highlight-block', "#0db0a0");
}

function makeLight(){
    be.style.setProperty('--primary', "");
    be.style.setProperty('--secondary', "");
    be.style.setProperty('--grey', "");
    be.style.setProperty('--background-color', "");
    be.style.setProperty('--accent', "");
    be.style.setProperty('--hover', "");
    be.style.setProperty('--gradient', "");
    be.style.setProperty('--articleText', "");
    be.style.setProperty('--track', "");
    be.style.setProperty('--progress', "");
    be.style.setProperty('--card', "");
    be.style.setProperty('--error', "");
    be.style.setProperty('--success', "");
    be.style.setProperty('--errorBackground', "");
    be.style.setProperty('--horizontalRule', "");
    be.style.setProperty('--inputBackground', "");
    be.style.setProperty('--tooltip', "lightgrey");
    be.style.setProperty('--card-background', "");
    be.style.setProperty('--card-header', "");
    be.style.setProperty('--card-subtitle', "");
    be.style.setProperty('--card-text', "");
    be.style.setProperty('--highlight-block', "");
}
