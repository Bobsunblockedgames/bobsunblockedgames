var buildUrl = "BitLife";
var loaderUrl = buildUrl + "/UnityLoader.js";
var config = {
    dataUrl: buildUrl + "/BitLife.data.unityweb",
    frameworkUrl: buildUrl + "/BitLife.framework.js.unityweb",
    codeUrl: buildUrl + "/BitLife.wasm.code.unityweb",
    streamingAssetsUrl: "StreamingAssets",
    companyName: "DefaultCompany",
    productName: "BitLife",
    productVersion: "0.1",
    showBanner: unityShowBanner,
};

var container = document.querySelector("#unity-container");
var canvas = document.querySelector("#unity-canvas");
var script = document.createElement("script");
script.src = loaderUrl;
script.onload = () => {
    createUnityInstance(canvas, config, (progress) => {
        // Loading progress
    }).then((unityInstance) => {
        // Unity is ready
        window.unityInstance = unityInstance;
    }).catch((message) => {
        alert(message);
    });
};
document.body.appendChild(script);

function unityShowBanner(msg, type) {
    function showBanner() {
        var parent = document.querySelector("#unity-container");
        var banner = document.createElement("div");
        banner.style.position = "absolute";
        banner.style.left = "0";
        banner.style.top = "0";
        banner.style.width = "100%";
        banner.style.height = "100%";
        banner.style.display = "flex";
        banner.style.justifyContent = "center";
        banner.style.alignItems = "center";
        banner.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
        banner.style.color = "white";
        banner.style.fontFamily = "Arial, sans-serif";
        banner.style.fontSize = "24px";
        banner.style.textAlign = "center";
        banner.style.padding = "20px";
        banner.style.boxSizing = "border-box";
        banner.innerHTML = msg;
        parent.appendChild(banner);
    }
    showBanner();
} 