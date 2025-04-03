var UnityLoader = UnityLoader || {};

(function() {
    function buildUnityLoader() {
        var unityLoader = {};
        
        unityLoader.SystemInfo = {
            mobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
            browser: navigator.userAgent,
            browserVersion: navigator.userAgent.match(/(?:Firefox|Opera|Chrome|Safari)\/([0-9.]+)/)[1],
            webGL: !!window.WebGLRenderingContext,
            webGLVersion: (function() {
                if (!window.WebGLRenderingContext) return "";
                var canvas = document.createElement("canvas");
                var gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
                if (!gl) return "";
                return gl.getParameter(gl.VERSION);
            })(),
            fullscreen: !!document.fullscreenElement,
            cookiesEnabled: navigator.cookieEnabled,
            platform: navigator.platform,
            language: navigator.language,
            userAgent: navigator.userAgent,
            standalone: window.navigator.standalone || false,
            vendor: navigator.vendor,
            maxTouchPoints: navigator.maxTouchPoints || 0,
            hardwareConcurrency: navigator.hardwareConcurrency || 0,
            deviceMemory: navigator.deviceMemory || 0,
            connection: navigator.connection ? {
                effectiveType: navigator.connection.effectiveType,
                downlink: navigator.connection.downlink,
                rtt: navigator.connection.rtt
            } : null
        };
        
        unityLoader.instantiate = function(container, config, onProgress) {
            return new Promise(function(resolve, reject) {
                var script = document.createElement("script");
                script.src = config.loaderUrl;
                script.onload = function() {
                    var unityInstance = createUnityInstance(container, config, onProgress);
                    resolve(unityInstance);
                };
                script.onerror = function(error) {
                    reject(error);
                };
                document.body.appendChild(script);
            });
        };
        
        return unityLoader;
    }
    
    if (typeof module !== "undefined" && module.exports) {
        module.exports = buildUnityLoader();
    } else {
        window.UnityLoader = buildUnityLoader();
    }
})(); 