const galleryCanvas = document.getElementById('unity-canvas');

createUnityInstance(document.querySelector("#unity-canvas"), {
    dataUrl: "../wormtomb/assets/Build/WormTombGallery.data",
    frameworkUrl: "../wormtomb/assets/Build/WormTombGallery.framework.js",
    codeUrl: "../wormtomb/assets/Build/WormTombGallery.wasm",
    streamingAssetsUrl: "StreamingAssets",
    companyName: "BramblyMead",
    productName: "WormTombGallery",
    productVersion: "1.0",
    // matchWebGLToCanvasSize: false, // Uncomment this to separately control WebGL canvas render size and DOM element size.
    // devicePixelRatio: 1, // Uncomment this to override low DPI rendering on high DPI displays.
});

function OnScroll() {
    galleryCanvas.style['pointer-events'] = 'none';
}

function OnMouse() {
    galleryCanvas.style['pointer-events'] = 'auto';
}
