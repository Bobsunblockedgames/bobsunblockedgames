var UnityProgress = UnityProgress || {};

(function() {
    function buildUnityProgress() {
        var unityProgress = {};
        
        unityProgress.initialize = function(container, onProgress) {
            var loadingBar = document.createElement("div");
            loadingBar.id = "unity-loading-bar";
            
            var progressBar = document.createElement("div");
            progressBar.id = "unity-progress-bar";
            
            var progressText = document.createElement("div");
            progressText.id = "unity-progress-text";
            progressText.textContent = "Loading...";
            
            loadingBar.appendChild(progressBar);
            loadingBar.appendChild(progressText);
            container.appendChild(loadingBar);
            
            return function(progress) {
                progressBar.style.width = (progress * 100) + "%";
                progressText.textContent = "Loading... " + Math.round(progress * 100) + "%";
                
                if (onProgress) {
                    onProgress(progress);
                }
                
                if (progress >= 1) {
                    setTimeout(function() {
                        loadingBar.style.opacity = "0";
                        setTimeout(function() {
                            container.removeChild(loadingBar);
                        }, 500);
                    }, 500);
                }
            };
        };
        
        return unityProgress;
    }
    
    if (typeof module !== "undefined" && module.exports) {
        module.exports = buildUnityProgress();
    } else {
        window.UnityProgress = buildUnityProgress();
    }
})(); 