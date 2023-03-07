// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"4PWRH":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "11eefaaee5ac7667";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"aitAD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _masonryLayout = require("masonry-layout");
var _masonryLayoutDefault = parcelHelpers.interopDefault(_masonryLayout);
var _scrollreveal = require("scrollreveal");
var _scrollrevealDefault = parcelHelpers.interopDefault(_scrollreveal);
window.onload = ()=>{
    const masonry = new (0, _masonryLayoutDefault.default)(".grid", {
        itemSelector: ".card",
        gutter: 50
    });
    console.log(masonry);
};
(0, _scrollrevealDefault.default)().reveal(".card", {
    delay: 0
});
(0, _scrollrevealDefault.default)().reveal(".nav", {
    delay: 200
});

},{"masonry-layout":"cYDx4","scrollreveal":"2exAg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cYDx4":[function(require,module,exports) {
/*!
 * Masonry v4.2.2
 * Cascading grid layout library
 * https://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */ (function(window1, factory) {
    // universal module definition
    /* jshint strict: false */ /*globals define, module, require */ if (typeof define == "function" && define.amd) // AMD
    define([
        "outlayer/outlayer",
        "get-size/get-size"
    ], factory);
    else if (0, module.exports) // CommonJS
    module.exports = factory(require("d33a4f20e7a7c510"), require("a6effc9d5f75668e"));
    else // browser global
    window1.Masonry = factory(window1.Outlayer, window1.getSize);
})(window, function factory(Outlayer, getSize) {
    "use strict";
    // -------------------------- masonryDefinition -------------------------- //
    // create an Outlayer layout class
    var Masonry = Outlayer.create("masonry");
    // isFitWidth -> fitWidth
    Masonry.compatOptions.fitWidth = "isFitWidth";
    var proto = Masonry.prototype;
    proto._resetLayout = function() {
        this.getSize();
        this._getMeasurement("columnWidth", "outerWidth");
        this._getMeasurement("gutter", "outerWidth");
        this.measureColumns();
        // reset column Y
        this.colYs = [];
        for(var i = 0; i < this.cols; i++)this.colYs.push(0);
        this.maxY = 0;
        this.horizontalColIndex = 0;
    };
    proto.measureColumns = function() {
        this.getContainerWidth();
        // if columnWidth is 0, default to outerWidth of first item
        if (!this.columnWidth) {
            var firstItem = this.items[0];
            var firstItemElem = firstItem && firstItem.element;
            // columnWidth fall back to item of first element
            this.columnWidth = firstItemElem && getSize(firstItemElem).outerWidth || // if first elem has no width, default to size of container
            this.containerWidth;
        }
        var columnWidth = this.columnWidth += this.gutter;
        // calculate columns
        var containerWidth = this.containerWidth + this.gutter;
        var cols = containerWidth / columnWidth;
        // fix rounding errors, typically with gutters
        var excess = columnWidth - containerWidth % columnWidth;
        // if overshoot is less than a pixel, round up, otherwise floor it
        var mathMethod = excess && excess < 1 ? "round" : "floor";
        cols = Math[mathMethod](cols);
        this.cols = Math.max(cols, 1);
    };
    proto.getContainerWidth = function() {
        // container is parent if fit width
        var isFitWidth = this._getOption("fitWidth");
        var container = isFitWidth ? this.element.parentNode : this.element;
        // check that this.size and size are there
        // IE8 triggers resize on body size change, so they might not be
        var size = getSize(container);
        this.containerWidth = size && size.innerWidth;
    };
    proto._getItemLayoutPosition = function(item) {
        item.getSize();
        // how many columns does this brick span
        var remainder = item.size.outerWidth % this.columnWidth;
        var mathMethod = remainder && remainder < 1 ? "round" : "ceil";
        // round if off by 1 pixel, otherwise use ceil
        var colSpan = Math[mathMethod](item.size.outerWidth / this.columnWidth);
        colSpan = Math.min(colSpan, this.cols);
        // use horizontal or top column position
        var colPosMethod = this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition";
        var colPosition = this[colPosMethod](colSpan, item);
        // position the brick
        var position = {
            x: this.columnWidth * colPosition.col,
            y: colPosition.y
        };
        // apply setHeight to necessary columns
        var setHeight = colPosition.y + item.size.outerHeight;
        var setMax = colSpan + colPosition.col;
        for(var i = colPosition.col; i < setMax; i++)this.colYs[i] = setHeight;
        return position;
    };
    proto._getTopColPosition = function(colSpan) {
        var colGroup = this._getTopColGroup(colSpan);
        // get the minimum Y value from the columns
        var minimumY = Math.min.apply(Math, colGroup);
        return {
            col: colGroup.indexOf(minimumY),
            y: minimumY
        };
    };
    /**
   * @param {Number} colSpan - number of columns the element spans
   * @returns {Array} colGroup
   */ proto._getTopColGroup = function(colSpan) {
        if (colSpan < 2) // if brick spans only one column, use all the column Ys
        return this.colYs;
        var colGroup = [];
        // how many different places could this brick fit horizontally
        var groupCount = this.cols + 1 - colSpan;
        // for each group potential horizontal position
        for(var i = 0; i < groupCount; i++)colGroup[i] = this._getColGroupY(i, colSpan);
        return colGroup;
    };
    proto._getColGroupY = function(col, colSpan) {
        if (colSpan < 2) return this.colYs[col];
        // make an array of colY values for that one group
        var groupColYs = this.colYs.slice(col, col + colSpan);
        // and get the max value of the array
        return Math.max.apply(Math, groupColYs);
    };
    // get column position based on horizontal index. #873
    proto._getHorizontalColPosition = function(colSpan, item) {
        var col = this.horizontalColIndex % this.cols;
        var isOver = colSpan > 1 && col + colSpan > this.cols;
        // shift to next row if item can't fit on current row
        col = isOver ? 0 : col;
        // don't let zero-size items take up space
        var hasSize = item.size.outerWidth && item.size.outerHeight;
        this.horizontalColIndex = hasSize ? col + colSpan : this.horizontalColIndex;
        return {
            col: col,
            y: this._getColGroupY(col, colSpan)
        };
    };
    proto._manageStamp = function(stamp) {
        var stampSize = getSize(stamp);
        var offset = this._getElementOffset(stamp);
        // get the columns that this stamp affects
        var isOriginLeft = this._getOption("originLeft");
        var firstX = isOriginLeft ? offset.left : offset.right;
        var lastX = firstX + stampSize.outerWidth;
        var firstCol = Math.floor(firstX / this.columnWidth);
        firstCol = Math.max(0, firstCol);
        var lastCol = Math.floor(lastX / this.columnWidth);
        // lastCol should not go over if multiple of columnWidth #425
        lastCol -= lastX % this.columnWidth ? 0 : 1;
        lastCol = Math.min(this.cols - 1, lastCol);
        // set colYs to bottom of the stamp
        var isOriginTop = this._getOption("originTop");
        var stampMaxY = (isOriginTop ? offset.top : offset.bottom) + stampSize.outerHeight;
        for(var i = firstCol; i <= lastCol; i++)this.colYs[i] = Math.max(stampMaxY, this.colYs[i]);
    };
    proto._getContainerSize = function() {
        this.maxY = Math.max.apply(Math, this.colYs);
        var size = {
            height: this.maxY
        };
        if (this._getOption("fitWidth")) size.width = this._getContainerFitWidth();
        return size;
    };
    proto._getContainerFitWidth = function() {
        var unusedCols = 0;
        // count unused columns
        var i = this.cols;
        while(--i){
            if (this.colYs[i] !== 0) break;
            unusedCols++;
        }
        // fit container to columns that have been used
        return (this.cols - unusedCols) * this.columnWidth - this.gutter;
    };
    proto.needsResizeLayout = function() {
        var previousWidth = this.containerWidth;
        this.getContainerWidth();
        return previousWidth != this.containerWidth;
    };
    return Masonry;
});

},{"d33a4f20e7a7c510":"2vxXV","a6effc9d5f75668e":"166by"}],"2vxXV":[function(require,module,exports) {
/*!
 * Outlayer v2.1.1
 * the brains and guts of a layout library
 * MIT license
 */ (function(window1, factory) {
    "use strict";
    // universal module definition
    /* jshint strict: false */ /* globals define, module, require */ if (typeof define == "function" && define.amd) // AMD - RequireJS
    define([
        "ev-emitter/ev-emitter",
        "get-size/get-size",
        "fizzy-ui-utils/utils",
        "./item"
    ], function(EvEmitter, getSize, utils, Item) {
        return factory(window1, EvEmitter, getSize, utils, Item);
    });
    else if (0, module.exports) // CommonJS - Browserify, Webpack
    module.exports = factory(window1, require("a312b31e73c5a7e7"), require("237ead10e8ae2269"), require("4e2002c2f2106d1f"), require("144efb08ff1cb263"));
    else // browser global
    window1.Outlayer = factory(window1, window1.EvEmitter, window1.getSize, window1.fizzyUIUtils, window1.Outlayer.Item);
})(window, function factory(window1, EvEmitter, getSize, utils, Item) {
    "use strict";
    // ----- vars ----- //
    var console = window1.console;
    var jQuery = window1.jQuery;
    var noop = function() {};
    // -------------------------- Outlayer -------------------------- //
    // globally unique identifiers
    var GUID = 0;
    // internal store of all Outlayer intances
    var instances = {};
    /**
 * @param {Element, String} element
 * @param {Object} options
 * @constructor
 */ function Outlayer(element, options) {
        var queryElement = utils.getQueryElement(element);
        if (!queryElement) {
            if (console) console.error("Bad element for " + this.constructor.namespace + ": " + (queryElement || element));
            return;
        }
        this.element = queryElement;
        // add jQuery
        if (jQuery) this.$element = jQuery(this.element);
        // options
        this.options = utils.extend({}, this.constructor.defaults);
        this.option(options);
        // add id for Outlayer.getFromElement
        var id = ++GUID;
        this.element.outlayerGUID = id; // expando
        instances[id] = this; // associate via id
        // kick it off
        this._create();
        var isInitLayout = this._getOption("initLayout");
        if (isInitLayout) this.layout();
    }
    // settings are for internal use only
    Outlayer.namespace = "outlayer";
    Outlayer.Item = Item;
    // default options
    Outlayer.defaults = {
        containerStyle: {
            position: "relative"
        },
        initLayout: true,
        originLeft: true,
        originTop: true,
        resize: true,
        resizeContainer: true,
        // item options
        transitionDuration: "0.4s",
        hiddenStyle: {
            opacity: 0,
            transform: "scale(0.001)"
        },
        visibleStyle: {
            opacity: 1,
            transform: "scale(1)"
        }
    };
    var proto = Outlayer.prototype;
    // inherit EvEmitter
    utils.extend(proto, EvEmitter.prototype);
    /**
 * set options
 * @param {Object} opts
 */ proto.option = function(opts) {
        utils.extend(this.options, opts);
    };
    /**
 * get backwards compatible option value, check old name
 */ proto._getOption = function(option) {
        var oldOption = this.constructor.compatOptions[option];
        return oldOption && this.options[oldOption] !== undefined ? this.options[oldOption] : this.options[option];
    };
    Outlayer.compatOptions = {
        // currentName: oldName
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer"
    };
    proto._create = function() {
        // get items from children
        this.reloadItems();
        // elements that affect layout, but are not laid out
        this.stamps = [];
        this.stamp(this.options.stamp);
        // set container style
        utils.extend(this.element.style, this.options.containerStyle);
        // bind resize method
        var canBindResize = this._getOption("resize");
        if (canBindResize) this.bindResize();
    };
    // goes through all children again and gets bricks in proper order
    proto.reloadItems = function() {
        // collection of item elements
        this.items = this._itemize(this.element.children);
    };
    /**
 * turn elements into Outlayer.Items to be used in layout
 * @param {Array or NodeList or HTMLElement} elems
 * @returns {Array} items - collection of new Outlayer Items
 */ proto._itemize = function(elems) {
        var itemElems = this._filterFindItemElements(elems);
        var Item = this.constructor.Item;
        // create new Outlayer Items for collection
        var items = [];
        for(var i = 0; i < itemElems.length; i++){
            var elem = itemElems[i];
            var item = new Item(elem, this);
            items.push(item);
        }
        return items;
    };
    /**
 * get item elements to be used in layout
 * @param {Array or NodeList or HTMLElement} elems
 * @returns {Array} items - item elements
 */ proto._filterFindItemElements = function(elems) {
        return utils.filterFindElements(elems, this.options.itemSelector);
    };
    /**
 * getter method for getting item elements
 * @returns {Array} elems - collection of item elements
 */ proto.getItemElements = function() {
        return this.items.map(function(item) {
            return item.element;
        });
    };
    // ----- init & layout ----- //
    /**
 * lays out all items
 */ proto.layout = function() {
        this._resetLayout();
        this._manageStamps();
        // don't animate first layout
        var layoutInstant = this._getOption("layoutInstant");
        var isInstant = layoutInstant !== undefined ? layoutInstant : !this._isLayoutInited;
        this.layoutItems(this.items, isInstant);
        // flag for initalized
        this._isLayoutInited = true;
    };
    // _init is alias for layout
    proto._init = proto.layout;
    /**
 * logic before any new layout
 */ proto._resetLayout = function() {
        this.getSize();
    };
    proto.getSize = function() {
        this.size = getSize(this.element);
    };
    /**
 * get measurement from option, for columnWidth, rowHeight, gutter
 * if option is String -> get element from selector string, & get size of element
 * if option is Element -> get size of element
 * else use option as a number
 *
 * @param {String} measurement
 * @param {String} size - width or height
 * @private
 */ proto._getMeasurement = function(measurement, size) {
        var option = this.options[measurement];
        var elem;
        if (!option) // default to 0
        this[measurement] = 0;
        else {
            // use option as an element
            if (typeof option == "string") elem = this.element.querySelector(option);
            else if (option instanceof HTMLElement) elem = option;
            // use size of element, if element
            this[measurement] = elem ? getSize(elem)[size] : option;
        }
    };
    /**
 * layout a collection of item elements
 * @api public
 */ proto.layoutItems = function(items, isInstant) {
        items = this._getItemsForLayout(items);
        this._layoutItems(items, isInstant);
        this._postLayout();
    };
    /**
 * get the items to be laid out
 * you may want to skip over some items
 * @param {Array} items
 * @returns {Array} items
 */ proto._getItemsForLayout = function(items) {
        return items.filter(function(item) {
            return !item.isIgnored;
        });
    };
    /**
 * layout items
 * @param {Array} items
 * @param {Boolean} isInstant
 */ proto._layoutItems = function(items, isInstant) {
        this._emitCompleteOnItems("layout", items);
        if (!items || !items.length) // no items, emit event with empty array
        return;
        var queue = [];
        items.forEach(function(item) {
            // get x/y object from method
            var position = this._getItemLayoutPosition(item);
            // enqueue
            position.item = item;
            position.isInstant = isInstant || item.isLayoutInstant;
            queue.push(position);
        }, this);
        this._processLayoutQueue(queue);
    };
    /**
 * get item layout position
 * @param {Outlayer.Item} item
 * @returns {Object} x and y position
 */ proto._getItemLayoutPosition = function() {
        return {
            x: 0,
            y: 0
        };
    };
    /**
 * iterate over array and position each item
 * Reason being - separating this logic prevents 'layout invalidation'
 * thx @paul_irish
 * @param {Array} queue
 */ proto._processLayoutQueue = function(queue) {
        this.updateStagger();
        queue.forEach(function(obj, i) {
            this._positionItem(obj.item, obj.x, obj.y, obj.isInstant, i);
        }, this);
    };
    // set stagger from option in milliseconds number
    proto.updateStagger = function() {
        var stagger = this.options.stagger;
        if (stagger === null || stagger === undefined) {
            this.stagger = 0;
            return;
        }
        this.stagger = getMilliseconds(stagger);
        return this.stagger;
    };
    /**
 * Sets position of item in DOM
 * @param {Outlayer.Item} item
 * @param {Number} x - horizontal position
 * @param {Number} y - vertical position
 * @param {Boolean} isInstant - disables transitions
 */ proto._positionItem = function(item, x, y, isInstant, i) {
        if (isInstant) // if not transition, just set CSS
        item.goTo(x, y);
        else {
            item.stagger(i * this.stagger);
            item.moveTo(x, y);
        }
    };
    /**
 * Any logic you want to do after each layout,
 * i.e. size the container
 */ proto._postLayout = function() {
        this.resizeContainer();
    };
    proto.resizeContainer = function() {
        var isResizingContainer = this._getOption("resizeContainer");
        if (!isResizingContainer) return;
        var size = this._getContainerSize();
        if (size) {
            this._setContainerMeasure(size.width, true);
            this._setContainerMeasure(size.height, false);
        }
    };
    /**
 * Sets width or height of container if returned
 * @returns {Object} size
 *   @param {Number} width
 *   @param {Number} height
 */ proto._getContainerSize = noop;
    /**
 * @param {Number} measure - size of width or height
 * @param {Boolean} isWidth
 */ proto._setContainerMeasure = function(measure, isWidth) {
        if (measure === undefined) return;
        var elemSize = this.size;
        // add padding and border width if border box
        if (elemSize.isBorderBox) measure += isWidth ? elemSize.paddingLeft + elemSize.paddingRight + elemSize.borderLeftWidth + elemSize.borderRightWidth : elemSize.paddingBottom + elemSize.paddingTop + elemSize.borderTopWidth + elemSize.borderBottomWidth;
        measure = Math.max(measure, 0);
        this.element.style[isWidth ? "width" : "height"] = measure + "px";
    };
    /**
 * emit eventComplete on a collection of items events
 * @param {String} eventName
 * @param {Array} items - Outlayer.Items
 */ proto._emitCompleteOnItems = function(eventName, items) {
        var _this = this;
        function onComplete() {
            _this.dispatchEvent(eventName + "Complete", null, [
                items
            ]);
        }
        var count = items.length;
        if (!items || !count) {
            onComplete();
            return;
        }
        var doneCount = 0;
        function tick() {
            doneCount++;
            if (doneCount == count) onComplete();
        }
        // bind callback
        items.forEach(function(item) {
            item.once(eventName, tick);
        });
    };
    /**
 * emits events via EvEmitter and jQuery events
 * @param {String} type - name of event
 * @param {Event} event - original event
 * @param {Array} args - extra arguments
 */ proto.dispatchEvent = function(type, event, args) {
        // add original event to arguments
        var emitArgs = event ? [
            event
        ].concat(args) : args;
        this.emitEvent(type, emitArgs);
        if (jQuery) {
            // set this.$element
            this.$element = this.$element || jQuery(this.element);
            if (event) {
                // create jQuery event
                var $event = jQuery.Event(event);
                $event.type = type;
                this.$element.trigger($event, args);
            } else // just trigger with type if no event available
            this.$element.trigger(type, args);
        }
    };
    // -------------------------- ignore & stamps -------------------------- //
    /**
 * keep item in collection, but do not lay it out
 * ignored items do not get skipped in layout
 * @param {Element} elem
 */ proto.ignore = function(elem) {
        var item = this.getItem(elem);
        if (item) item.isIgnored = true;
    };
    /**
 * return item to layout collection
 * @param {Element} elem
 */ proto.unignore = function(elem) {
        var item = this.getItem(elem);
        if (item) delete item.isIgnored;
    };
    /**
 * adds elements to stamps
 * @param {NodeList, Array, Element, or String} elems
 */ proto.stamp = function(elems) {
        elems = this._find(elems);
        if (!elems) return;
        this.stamps = this.stamps.concat(elems);
        // ignore
        elems.forEach(this.ignore, this);
    };
    /**
 * removes elements to stamps
 * @param {NodeList, Array, or Element} elems
 */ proto.unstamp = function(elems) {
        elems = this._find(elems);
        if (!elems) return;
        elems.forEach(function(elem) {
            // filter out removed stamp elements
            utils.removeFrom(this.stamps, elem);
            this.unignore(elem);
        }, this);
    };
    /**
 * finds child elements
 * @param {NodeList, Array, Element, or String} elems
 * @returns {Array} elems
 */ proto._find = function(elems) {
        if (!elems) return;
        // if string, use argument as selector string
        if (typeof elems == "string") elems = this.element.querySelectorAll(elems);
        elems = utils.makeArray(elems);
        return elems;
    };
    proto._manageStamps = function() {
        if (!this.stamps || !this.stamps.length) return;
        this._getBoundingRect();
        this.stamps.forEach(this._manageStamp, this);
    };
    // update boundingLeft / Top
    proto._getBoundingRect = function() {
        // get bounding rect for container element
        var boundingRect = this.element.getBoundingClientRect();
        var size = this.size;
        this._boundingRect = {
            left: boundingRect.left + size.paddingLeft + size.borderLeftWidth,
            top: boundingRect.top + size.paddingTop + size.borderTopWidth,
            right: boundingRect.right - (size.paddingRight + size.borderRightWidth),
            bottom: boundingRect.bottom - (size.paddingBottom + size.borderBottomWidth)
        };
    };
    /**
 * @param {Element} stamp
**/ proto._manageStamp = noop;
    /**
 * get x/y position of element relative to container element
 * @param {Element} elem
 * @returns {Object} offset - has left, top, right, bottom
 */ proto._getElementOffset = function(elem) {
        var boundingRect = elem.getBoundingClientRect();
        var thisRect = this._boundingRect;
        var size = getSize(elem);
        var offset = {
            left: boundingRect.left - thisRect.left - size.marginLeft,
            top: boundingRect.top - thisRect.top - size.marginTop,
            right: thisRect.right - boundingRect.right - size.marginRight,
            bottom: thisRect.bottom - boundingRect.bottom - size.marginBottom
        };
        return offset;
    };
    // -------------------------- resize -------------------------- //
    // enable event handlers for listeners
    // i.e. resize -> onresize
    proto.handleEvent = utils.handleEvent;
    /**
 * Bind layout to window resizing
 */ proto.bindResize = function() {
        window1.addEventListener("resize", this);
        this.isResizeBound = true;
    };
    /**
 * Unbind layout to window resizing
 */ proto.unbindResize = function() {
        window1.removeEventListener("resize", this);
        this.isResizeBound = false;
    };
    proto.onresize = function() {
        this.resize();
    };
    utils.debounceMethod(Outlayer, "onresize", 100);
    proto.resize = function() {
        // don't trigger if size did not change
        // or if resize was unbound. See #9
        if (!this.isResizeBound || !this.needsResizeLayout()) return;
        this.layout();
    };
    /**
 * check if layout is needed post layout
 * @returns Boolean
 */ proto.needsResizeLayout = function() {
        var size = getSize(this.element);
        // check that this.size and size are there
        // IE8 triggers resize on body size change, so they might not be
        var hasSizes = this.size && size;
        return hasSizes && size.innerWidth !== this.size.innerWidth;
    };
    // -------------------------- methods -------------------------- //
    /**
 * add items to Outlayer instance
 * @param {Array or NodeList or Element} elems
 * @returns {Array} items - Outlayer.Items
**/ proto.addItems = function(elems) {
        var items = this._itemize(elems);
        // add items to collection
        if (items.length) this.items = this.items.concat(items);
        return items;
    };
    /**
 * Layout newly-appended item elements
 * @param {Array or NodeList or Element} elems
 */ proto.appended = function(elems) {
        var items = this.addItems(elems);
        if (!items.length) return;
        // layout and reveal just the new items
        this.layoutItems(items, true);
        this.reveal(items);
    };
    /**
 * Layout prepended elements
 * @param {Array or NodeList or Element} elems
 */ proto.prepended = function(elems) {
        var items = this._itemize(elems);
        if (!items.length) return;
        // add items to beginning of collection
        var previousItems = this.items.slice(0);
        this.items = items.concat(previousItems);
        // start new layout
        this._resetLayout();
        this._manageStamps();
        // layout new stuff without transition
        this.layoutItems(items, true);
        this.reveal(items);
        // layout previous items
        this.layoutItems(previousItems);
    };
    /**
 * reveal a collection of items
 * @param {Array of Outlayer.Items} items
 */ proto.reveal = function(items) {
        this._emitCompleteOnItems("reveal", items);
        if (!items || !items.length) return;
        var stagger = this.updateStagger();
        items.forEach(function(item, i) {
            item.stagger(i * stagger);
            item.reveal();
        });
    };
    /**
 * hide a collection of items
 * @param {Array of Outlayer.Items} items
 */ proto.hide = function(items) {
        this._emitCompleteOnItems("hide", items);
        if (!items || !items.length) return;
        var stagger = this.updateStagger();
        items.forEach(function(item, i) {
            item.stagger(i * stagger);
            item.hide();
        });
    };
    /**
 * reveal item elements
 * @param {Array}, {Element}, {NodeList} items
 */ proto.revealItemElements = function(elems) {
        var items = this.getItems(elems);
        this.reveal(items);
    };
    /**
 * hide item elements
 * @param {Array}, {Element}, {NodeList} items
 */ proto.hideItemElements = function(elems) {
        var items = this.getItems(elems);
        this.hide(items);
    };
    /**
 * get Outlayer.Item, given an Element
 * @param {Element} elem
 * @param {Function} callback
 * @returns {Outlayer.Item} item
 */ proto.getItem = function(elem) {
        // loop through items to get the one that matches
        for(var i = 0; i < this.items.length; i++){
            var item = this.items[i];
            if (item.element == elem) // return item
            return item;
        }
    };
    /**
 * get collection of Outlayer.Items, given Elements
 * @param {Array} elems
 * @returns {Array} items - Outlayer.Items
 */ proto.getItems = function(elems) {
        elems = utils.makeArray(elems);
        var items = [];
        elems.forEach(function(elem) {
            var item = this.getItem(elem);
            if (item) items.push(item);
        }, this);
        return items;
    };
    /**
 * remove element(s) from instance and DOM
 * @param {Array or NodeList or Element} elems
 */ proto.remove = function(elems) {
        var removeItems = this.getItems(elems);
        this._emitCompleteOnItems("remove", removeItems);
        // bail if no items to remove
        if (!removeItems || !removeItems.length) return;
        removeItems.forEach(function(item) {
            item.remove();
            // remove item from collection
            utils.removeFrom(this.items, item);
        }, this);
    };
    // ----- destroy ----- //
    // remove and disable Outlayer instance
    proto.destroy = function() {
        // clean up dynamic styles
        var style = this.element.style;
        style.height = "";
        style.position = "";
        style.width = "";
        // destroy items
        this.items.forEach(function(item) {
            item.destroy();
        });
        this.unbindResize();
        var id = this.element.outlayerGUID;
        delete instances[id]; // remove reference to instance by id
        delete this.element.outlayerGUID;
        // remove data for jQuery
        if (jQuery) jQuery.removeData(this.element, this.constructor.namespace);
    };
    // -------------------------- data -------------------------- //
    /**
 * get Outlayer instance from element
 * @param {Element} elem
 * @returns {Outlayer}
 */ Outlayer.data = function(elem) {
        elem = utils.getQueryElement(elem);
        var id = elem && elem.outlayerGUID;
        return id && instances[id];
    };
    // -------------------------- create Outlayer class -------------------------- //
    /**
 * create a layout class
 * @param {String} namespace
 */ Outlayer.create = function(namespace, options) {
        // sub-class Outlayer
        var Layout = subclass(Outlayer);
        // apply new options and compatOptions
        Layout.defaults = utils.extend({}, Outlayer.defaults);
        utils.extend(Layout.defaults, options);
        Layout.compatOptions = utils.extend({}, Outlayer.compatOptions);
        Layout.namespace = namespace;
        Layout.data = Outlayer.data;
        // sub-class Item
        Layout.Item = subclass(Item);
        // -------------------------- declarative -------------------------- //
        utils.htmlInit(Layout, namespace);
        // -------------------------- jQuery bridge -------------------------- //
        // make into jQuery plugin
        if (jQuery && jQuery.bridget) jQuery.bridget(namespace, Layout);
        return Layout;
    };
    function subclass(Parent) {
        function SubClass() {
            Parent.apply(this, arguments);
        }
        SubClass.prototype = Object.create(Parent.prototype);
        SubClass.prototype.constructor = SubClass;
        return SubClass;
    }
    // ----- helpers ----- //
    // how many milliseconds are in each unit
    var msUnits = {
        ms: 1,
        s: 1000
    };
    // munge time-like parameter into millisecond number
    // '0.4s' -> 40
    function getMilliseconds(time) {
        if (typeof time == "number") return time;
        var matches = time.match(/(^\d*\.?\d*)(\w*)/);
        var num = matches && matches[1];
        var unit = matches && matches[2];
        if (!num.length) return 0;
        num = parseFloat(num);
        var mult = msUnits[unit] || 1;
        return num * mult;
    }
    // ----- fin ----- //
    // back in global
    Outlayer.Item = Item;
    return Outlayer;
});

},{"a312b31e73c5a7e7":"7rCHo","237ead10e8ae2269":"166by","4e2002c2f2106d1f":"5rzsv","144efb08ff1cb263":"fv3Ha"}],"7rCHo":[function(require,module,exports) {
/**
 * EvEmitter v1.1.0
 * Lil' event emitter
 * MIT License
 */ /* jshint unused: true, undef: true, strict: true */ (function(global, factory) {
    // universal module definition
    /* jshint strict: false */ /* globals define, module, window */ if (typeof define == "function" && define.amd) // AMD - RequireJS
    define(factory);
    else if (0, module.exports) // CommonJS - Browserify, Webpack
    module.exports = factory();
    else // Browser globals
    global.EvEmitter = factory();
})(typeof window != "undefined" ? window : this, function() {
    "use strict";
    function EvEmitter() {}
    var proto = EvEmitter.prototype;
    proto.on = function(eventName, listener) {
        if (!eventName || !listener) return;
        // set events hash
        var events = this._events = this._events || {};
        // set listeners array
        var listeners = events[eventName] = events[eventName] || [];
        // only add once
        if (listeners.indexOf(listener) == -1) listeners.push(listener);
        return this;
    };
    proto.once = function(eventName, listener) {
        if (!eventName || !listener) return;
        // add event
        this.on(eventName, listener);
        // set once flag
        // set onceEvents hash
        var onceEvents = this._onceEvents = this._onceEvents || {};
        // set onceListeners object
        var onceListeners = onceEvents[eventName] = onceEvents[eventName] || {};
        // set flag
        onceListeners[listener] = true;
        return this;
    };
    proto.off = function(eventName, listener) {
        var listeners = this._events && this._events[eventName];
        if (!listeners || !listeners.length) return;
        var index = listeners.indexOf(listener);
        if (index != -1) listeners.splice(index, 1);
        return this;
    };
    proto.emitEvent = function(eventName, args) {
        var listeners = this._events && this._events[eventName];
        if (!listeners || !listeners.length) return;
        // copy over to avoid interference if .off() in listener
        listeners = listeners.slice(0);
        args = args || [];
        // once stuff
        var onceListeners = this._onceEvents && this._onceEvents[eventName];
        for(var i = 0; i < listeners.length; i++){
            var listener = listeners[i];
            var isOnce = onceListeners && onceListeners[listener];
            if (isOnce) {
                // remove listener
                // remove before trigger to prevent recursion
                this.off(eventName, listener);
                // unset once flag
                delete onceListeners[listener];
            }
            // trigger listener
            listener.apply(this, args);
        }
        return this;
    };
    proto.allOff = function() {
        delete this._events;
        delete this._onceEvents;
    };
    return EvEmitter;
});

},{}],"166by":[function(require,module,exports) {
/*!
 * getSize v2.0.3
 * measure size of elements
 * MIT license
 */ /* jshint browser: true, strict: true, undef: true, unused: true */ /* globals console: false */ (function(window1, factory) {
    /* jshint strict: false */ /* globals define, module */ if (typeof define == "function" && define.amd) // AMD
    define(factory);
    else if (0, module.exports) // CommonJS
    module.exports = factory();
    else // browser global
    window1.getSize = factory();
})(window, function factory() {
    "use strict";
    // -------------------------- helpers -------------------------- //
    // get a number from a string, not a percentage
    function getStyleSize(value) {
        var num = parseFloat(value);
        // not a percent like '100%', and a number
        var isValid = value.indexOf("%") == -1 && !isNaN(num);
        return isValid && num;
    }
    function noop() {}
    var logError = typeof console == "undefined" ? noop : function(message) {
        console.error(message);
    };
    // -------------------------- measurements -------------------------- //
    var measurements = [
        "paddingLeft",
        "paddingRight",
        "paddingTop",
        "paddingBottom",
        "marginLeft",
        "marginRight",
        "marginTop",
        "marginBottom",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth",
        "borderBottomWidth"
    ];
    var measurementsLength = measurements.length;
    function getZeroSize() {
        var size = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0
        };
        for(var i = 0; i < measurementsLength; i++){
            var measurement = measurements[i];
            size[measurement] = 0;
        }
        return size;
    }
    // -------------------------- getStyle -------------------------- //
    /**
 * getStyle, get style of element, check for Firefox bug
 * https://bugzilla.mozilla.org/show_bug.cgi?id=548397
 */ function getStyle(elem) {
        var style = getComputedStyle(elem);
        if (!style) logError("Style returned " + style + ". Are you running this code in a hidden iframe on Firefox? " + "See https://bit.ly/getsizebug1");
        return style;
    }
    // -------------------------- setup -------------------------- //
    var isSetup = false;
    var isBoxSizeOuter;
    /**
 * setup
 * check isBoxSizerOuter
 * do on first getSize() rather than on page load for Firefox bug
 */ function setup() {
        // setup once
        if (isSetup) return;
        isSetup = true;
        // -------------------------- box sizing -------------------------- //
        /**
   * Chrome & Safari measure the outer-width on style.width on border-box elems
   * IE11 & Firefox<29 measures the inner-width
   */ var div = document.createElement("div");
        div.style.width = "200px";
        div.style.padding = "1px 2px 3px 4px";
        div.style.borderStyle = "solid";
        div.style.borderWidth = "1px 2px 3px 4px";
        div.style.boxSizing = "border-box";
        var body = document.body || document.documentElement;
        body.appendChild(div);
        var style = getStyle(div);
        // round value for browser zoom. desandro/masonry#928
        isBoxSizeOuter = Math.round(getStyleSize(style.width)) == 200;
        getSize.isBoxSizeOuter = isBoxSizeOuter;
        body.removeChild(div);
    }
    // -------------------------- getSize -------------------------- //
    function getSize(elem) {
        setup();
        // use querySeletor if elem is string
        if (typeof elem == "string") elem = document.querySelector(elem);
        // do not proceed on non-objects
        if (!elem || typeof elem != "object" || !elem.nodeType) return;
        var style = getStyle(elem);
        // if hidden, everything is 0
        if (style.display == "none") return getZeroSize();
        var size = {};
        size.width = elem.offsetWidth;
        size.height = elem.offsetHeight;
        var isBorderBox = size.isBorderBox = style.boxSizing == "border-box";
        // get all measurements
        for(var i = 0; i < measurementsLength; i++){
            var measurement = measurements[i];
            var value = style[measurement];
            var num = parseFloat(value);
            // any 'auto', 'medium' value will be 0
            size[measurement] = !isNaN(num) ? num : 0;
        }
        var paddingWidth = size.paddingLeft + size.paddingRight;
        var paddingHeight = size.paddingTop + size.paddingBottom;
        var marginWidth = size.marginLeft + size.marginRight;
        var marginHeight = size.marginTop + size.marginBottom;
        var borderWidth = size.borderLeftWidth + size.borderRightWidth;
        var borderHeight = size.borderTopWidth + size.borderBottomWidth;
        var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;
        // overwrite width and height if we can get it from style
        var styleWidth = getStyleSize(style.width);
        if (styleWidth !== false) size.width = styleWidth + // add padding and border unless it's already including it
        (isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth);
        var styleHeight = getStyleSize(style.height);
        if (styleHeight !== false) size.height = styleHeight + // add padding and border unless it's already including it
        (isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight);
        size.innerWidth = size.width - (paddingWidth + borderWidth);
        size.innerHeight = size.height - (paddingHeight + borderHeight);
        size.outerWidth = size.width + marginWidth;
        size.outerHeight = size.height + marginHeight;
        return size;
    }
    return getSize;
});

},{}],"5rzsv":[function(require,module,exports) {
/**
 * Fizzy UI utils v2.0.7
 * MIT license
 */ /*jshint browser: true, undef: true, unused: true, strict: true */ (function(window1, factory) {
    // universal module definition
    /*jshint strict: false */ /*globals define, module, require */ if (typeof define == "function" && define.amd) // AMD
    define([
        "desandro-matches-selector/matches-selector"
    ], function(matchesSelector) {
        return factory(window1, matchesSelector);
    });
    else if (0, module.exports) // CommonJS
    module.exports = factory(window1, require("75b157ab11e0ee9e"));
    else // browser global
    window1.fizzyUIUtils = factory(window1, window1.matchesSelector);
})(window, function factory(window1, matchesSelector) {
    "use strict";
    var utils = {};
    // ----- extend ----- //
    // extends objects
    utils.extend = function(a, b) {
        for(var prop in b)a[prop] = b[prop];
        return a;
    };
    // ----- modulo ----- //
    utils.modulo = function(num, div) {
        return (num % div + div) % div;
    };
    // ----- makeArray ----- //
    var arraySlice = Array.prototype.slice;
    // turn element or nodeList into an array
    utils.makeArray = function(obj) {
        if (Array.isArray(obj)) // use object if already an array
        return obj;
        // return empty array if undefined or null. #6
        if (obj === null || obj === undefined) return [];
        var isArrayLike = typeof obj == "object" && typeof obj.length == "number";
        if (isArrayLike) // convert nodeList to array
        return arraySlice.call(obj);
        // array of single index
        return [
            obj
        ];
    };
    // ----- removeFrom ----- //
    utils.removeFrom = function(ary, obj) {
        var index = ary.indexOf(obj);
        if (index != -1) ary.splice(index, 1);
    };
    // ----- getParent ----- //
    utils.getParent = function(elem, selector) {
        while(elem.parentNode && elem != document.body){
            elem = elem.parentNode;
            if (matchesSelector(elem, selector)) return elem;
        }
    };
    // ----- getQueryElement ----- //
    // use element as selector string
    utils.getQueryElement = function(elem) {
        if (typeof elem == "string") return document.querySelector(elem);
        return elem;
    };
    // ----- handleEvent ----- //
    // enable .ontype to trigger from .addEventListener( elem, 'type' )
    utils.handleEvent = function(event) {
        var method = "on" + event.type;
        if (this[method]) this[method](event);
    };
    // ----- filterFindElements ----- //
    utils.filterFindElements = function(elems, selector) {
        // make array of elems
        elems = utils.makeArray(elems);
        var ffElems = [];
        elems.forEach(function(elem) {
            // check that elem is an actual element
            if (!(elem instanceof HTMLElement)) return;
            // add elem if no selector
            if (!selector) {
                ffElems.push(elem);
                return;
            }
            // filter & find items if we have a selector
            // filter
            if (matchesSelector(elem, selector)) ffElems.push(elem);
            // find children
            var childElems = elem.querySelectorAll(selector);
            // concat childElems to filterFound array
            for(var i = 0; i < childElems.length; i++)ffElems.push(childElems[i]);
        });
        return ffElems;
    };
    // ----- debounceMethod ----- //
    utils.debounceMethod = function(_class, methodName, threshold) {
        threshold = threshold || 100;
        // original method
        var method = _class.prototype[methodName];
        var timeoutName = methodName + "Timeout";
        _class.prototype[methodName] = function() {
            var timeout = this[timeoutName];
            clearTimeout(timeout);
            var args = arguments;
            var _this = this;
            this[timeoutName] = setTimeout(function() {
                method.apply(_this, args);
                delete _this[timeoutName];
            }, threshold);
        };
    };
    // ----- docReady ----- //
    utils.docReady = function(callback) {
        var readyState = document.readyState;
        if (readyState == "complete" || readyState == "interactive") // do async to allow for other scripts to run. metafizzy/flickity#441
        setTimeout(callback);
        else document.addEventListener("DOMContentLoaded", callback);
    };
    // ----- htmlInit ----- //
    // http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/
    utils.toDashed = function(str) {
        return str.replace(/(.)([A-Z])/g, function(match, $1, $2) {
            return $1 + "-" + $2;
        }).toLowerCase();
    };
    var console = window1.console;
    /**
 * allow user to initialize classes via [data-namespace] or .js-namespace class
 * htmlInit( Widget, 'widgetName' )
 * options are parsed from data-namespace-options
 */ utils.htmlInit = function(WidgetClass, namespace) {
        utils.docReady(function() {
            var dashedNamespace = utils.toDashed(namespace);
            var dataAttr = "data-" + dashedNamespace;
            var dataAttrElems = document.querySelectorAll("[" + dataAttr + "]");
            var jsDashElems = document.querySelectorAll(".js-" + dashedNamespace);
            var elems = utils.makeArray(dataAttrElems).concat(utils.makeArray(jsDashElems));
            var dataOptionsAttr = dataAttr + "-options";
            var jQuery = window1.jQuery;
            elems.forEach(function(elem) {
                var attr = elem.getAttribute(dataAttr) || elem.getAttribute(dataOptionsAttr);
                var options;
                try {
                    options = attr && JSON.parse(attr);
                } catch (error) {
                    // log error, do not initialize
                    if (console) console.error("Error parsing " + dataAttr + " on " + elem.className + ": " + error);
                    return;
                }
                // initialize
                var instance = new WidgetClass(elem, options);
                // make available via $().data('namespace')
                if (jQuery) jQuery.data(elem, namespace, instance);
            });
        });
    };
    // -----  ----- //
    return utils;
});

},{"75b157ab11e0ee9e":"gza0L"}],"gza0L":[function(require,module,exports) {
/**
 * matchesSelector v2.0.2
 * matchesSelector( element, '.selector' )
 * MIT license
 */ /*jshint browser: true, strict: true, undef: true, unused: true */ (function(window1, factory) {
    /*global define: false, module: false */ "use strict";
    // universal module definition
    if (typeof define == "function" && define.amd) // AMD
    define(factory);
    else if (0, module.exports) // CommonJS
    module.exports = factory();
    else // browser global
    window1.matchesSelector = factory();
})(window, function factory() {
    "use strict";
    var matchesMethod = function() {
        var ElemProto = window.Element.prototype;
        // check for the standard method name first
        if (ElemProto.matches) return "matches";
        // check un-prefixed
        if (ElemProto.matchesSelector) return "matchesSelector";
        // check vendor prefixes
        var prefixes = [
            "webkit",
            "moz",
            "ms",
            "o"
        ];
        for(var i = 0; i < prefixes.length; i++){
            var prefix = prefixes[i];
            var method = prefix + "MatchesSelector";
            if (ElemProto[method]) return method;
        }
    }();
    return function matchesSelector(elem, selector) {
        return elem[matchesMethod](selector);
    };
});

},{}],"fv3Ha":[function(require,module,exports) {
/**
 * Outlayer Item
 */ (function(window1, factory) {
    // universal module definition
    /* jshint strict: false */ /* globals define, module, require */ if (typeof define == "function" && define.amd) // AMD - RequireJS
    define([
        "ev-emitter/ev-emitter",
        "get-size/get-size"
    ], factory);
    else if (0, module.exports) // CommonJS - Browserify, Webpack
    module.exports = factory(require("a1eda3d310dbf2a4"), require("daf99c80e4d65902"));
    else {
        // browser global
        window1.Outlayer = {};
        window1.Outlayer.Item = factory(window1.EvEmitter, window1.getSize);
    }
})(window, function factory(EvEmitter, getSize) {
    "use strict";
    // ----- helpers ----- //
    function isEmptyObj(obj) {
        for(var prop in obj)return false;
        prop = null;
        return true;
    }
    // -------------------------- CSS3 support -------------------------- //
    var docElemStyle = document.documentElement.style;
    var transitionProperty = typeof docElemStyle.transition == "string" ? "transition" : "WebkitTransition";
    var transformProperty = typeof docElemStyle.transform == "string" ? "transform" : "WebkitTransform";
    var transitionEndEvent = {
        WebkitTransition: "webkitTransitionEnd",
        transition: "transitionend"
    }[transitionProperty];
    // cache all vendor properties that could have vendor prefix
    var vendorProperties = {
        transform: transformProperty,
        transition: transitionProperty,
        transitionDuration: transitionProperty + "Duration",
        transitionProperty: transitionProperty + "Property",
        transitionDelay: transitionProperty + "Delay"
    };
    // -------------------------- Item -------------------------- //
    function Item(element, layout) {
        if (!element) return;
        this.element = element;
        // parent layout class, i.e. Masonry, Isotope, or Packery
        this.layout = layout;
        this.position = {
            x: 0,
            y: 0
        };
        this._create();
    }
    // inherit EvEmitter
    var proto = Item.prototype = Object.create(EvEmitter.prototype);
    proto.constructor = Item;
    proto._create = function() {
        // transition objects
        this._transn = {
            ingProperties: {},
            clean: {},
            onEnd: {}
        };
        this.css({
            position: "absolute"
        });
    };
    // trigger specified handler for event type
    proto.handleEvent = function(event) {
        var method = "on" + event.type;
        if (this[method]) this[method](event);
    };
    proto.getSize = function() {
        this.size = getSize(this.element);
    };
    /**
 * apply CSS styles to element
 * @param {Object} style
 */ proto.css = function(style) {
        var elemStyle = this.element.style;
        for(var prop in style){
            // use vendor property if available
            var supportedProp = vendorProperties[prop] || prop;
            elemStyle[supportedProp] = style[prop];
        }
    };
    // measure position, and sets it
    proto.getPosition = function() {
        var style = getComputedStyle(this.element);
        var isOriginLeft = this.layout._getOption("originLeft");
        var isOriginTop = this.layout._getOption("originTop");
        var xValue = style[isOriginLeft ? "left" : "right"];
        var yValue = style[isOriginTop ? "top" : "bottom"];
        var x = parseFloat(xValue);
        var y = parseFloat(yValue);
        // convert percent to pixels
        var layoutSize = this.layout.size;
        if (xValue.indexOf("%") != -1) x = x / 100 * layoutSize.width;
        if (yValue.indexOf("%") != -1) y = y / 100 * layoutSize.height;
        // clean up 'auto' or other non-integer values
        x = isNaN(x) ? 0 : x;
        y = isNaN(y) ? 0 : y;
        // remove padding from measurement
        x -= isOriginLeft ? layoutSize.paddingLeft : layoutSize.paddingRight;
        y -= isOriginTop ? layoutSize.paddingTop : layoutSize.paddingBottom;
        this.position.x = x;
        this.position.y = y;
    };
    // set settled position, apply padding
    proto.layoutPosition = function() {
        var layoutSize = this.layout.size;
        var style = {};
        var isOriginLeft = this.layout._getOption("originLeft");
        var isOriginTop = this.layout._getOption("originTop");
        // x
        var xPadding = isOriginLeft ? "paddingLeft" : "paddingRight";
        var xProperty = isOriginLeft ? "left" : "right";
        var xResetProperty = isOriginLeft ? "right" : "left";
        var x = this.position.x + layoutSize[xPadding];
        // set in percentage or pixels
        style[xProperty] = this.getXValue(x);
        // reset other property
        style[xResetProperty] = "";
        // y
        var yPadding = isOriginTop ? "paddingTop" : "paddingBottom";
        var yProperty = isOriginTop ? "top" : "bottom";
        var yResetProperty = isOriginTop ? "bottom" : "top";
        var y = this.position.y + layoutSize[yPadding];
        // set in percentage or pixels
        style[yProperty] = this.getYValue(y);
        // reset other property
        style[yResetProperty] = "";
        this.css(style);
        this.emitEvent("layout", [
            this
        ]);
    };
    proto.getXValue = function(x) {
        var isHorizontal = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !isHorizontal ? x / this.layout.size.width * 100 + "%" : x + "px";
    };
    proto.getYValue = function(y) {
        var isHorizontal = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && isHorizontal ? y / this.layout.size.height * 100 + "%" : y + "px";
    };
    proto._transitionTo = function(x, y) {
        this.getPosition();
        // get current x & y from top/left
        var curX = this.position.x;
        var curY = this.position.y;
        var didNotMove = x == this.position.x && y == this.position.y;
        // save end position
        this.setPosition(x, y);
        // if did not move and not transitioning, just go to layout
        if (didNotMove && !this.isTransitioning) {
            this.layoutPosition();
            return;
        }
        var transX = x - curX;
        var transY = y - curY;
        var transitionStyle = {};
        transitionStyle.transform = this.getTranslate(transX, transY);
        this.transition({
            to: transitionStyle,
            onTransitionEnd: {
                transform: this.layoutPosition
            },
            isCleaning: true
        });
    };
    proto.getTranslate = function(x, y) {
        // flip cooridinates if origin on right or bottom
        var isOriginLeft = this.layout._getOption("originLeft");
        var isOriginTop = this.layout._getOption("originTop");
        x = isOriginLeft ? x : -x;
        y = isOriginTop ? y : -y;
        return "translate3d(" + x + "px, " + y + "px, 0)";
    };
    // non transition + transform support
    proto.goTo = function(x, y) {
        this.setPosition(x, y);
        this.layoutPosition();
    };
    proto.moveTo = proto._transitionTo;
    proto.setPosition = function(x, y) {
        this.position.x = parseFloat(x);
        this.position.y = parseFloat(y);
    };
    // ----- transition ----- //
    /**
 * @param {Object} style - CSS
 * @param {Function} onTransitionEnd
 */ // non transition, just trigger callback
    proto._nonTransition = function(args) {
        this.css(args.to);
        if (args.isCleaning) this._removeStyles(args.to);
        for(var prop in args.onTransitionEnd)args.onTransitionEnd[prop].call(this);
    };
    /**
 * proper transition
 * @param {Object} args - arguments
 *   @param {Object} to - style to transition to
 *   @param {Object} from - style to start transition from
 *   @param {Boolean} isCleaning - removes transition styles after transition
 *   @param {Function} onTransitionEnd - callback
 */ proto.transition = function(args) {
        // redirect to nonTransition if no transition duration
        if (!parseFloat(this.layout.options.transitionDuration)) {
            this._nonTransition(args);
            return;
        }
        var _transition = this._transn;
        // keep track of onTransitionEnd callback by css property
        for(var prop in args.onTransitionEnd)_transition.onEnd[prop] = args.onTransitionEnd[prop];
        // keep track of properties that are transitioning
        for(prop in args.to){
            _transition.ingProperties[prop] = true;
            // keep track of properties to clean up when transition is done
            if (args.isCleaning) _transition.clean[prop] = true;
        }
        // set from styles
        if (args.from) {
            this.css(args.from);
            // force redraw. http://blog.alexmaccaw.com/css-transitions
            var h = this.element.offsetHeight;
            // hack for JSHint to hush about unused var
            h = null;
        }
        // enable transition
        this.enableTransition(args.to);
        // set styles that are transitioning
        this.css(args.to);
        this.isTransitioning = true;
    };
    // dash before all cap letters, including first for
    // WebkitTransform => -webkit-transform
    function toDashedAll(str) {
        return str.replace(/([A-Z])/g, function($1) {
            return "-" + $1.toLowerCase();
        });
    }
    var transitionProps = "opacity," + toDashedAll(transformProperty);
    proto.enableTransition = function() {
        // HACK changing transitionProperty during a transition
        // will cause transition to jump
        if (this.isTransitioning) return;
        // make `transition: foo, bar, baz` from style object
        // HACK un-comment this when enableTransition can work
        // while a transition is happening
        // var transitionValues = [];
        // for ( var prop in style ) {
        //   // dash-ify camelCased properties like WebkitTransition
        //   prop = vendorProperties[ prop ] || prop;
        //   transitionValues.push( toDashedAll( prop ) );
        // }
        // munge number to millisecond, to match stagger
        var duration = this.layout.options.transitionDuration;
        duration = typeof duration == "number" ? duration + "ms" : duration;
        // enable transition styles
        this.css({
            transitionProperty: transitionProps,
            transitionDuration: duration,
            transitionDelay: this.staggerDelay || 0
        });
        // listen for transition end event
        this.element.addEventListener(transitionEndEvent, this, false);
    };
    // ----- events ----- //
    proto.onwebkitTransitionEnd = function(event) {
        this.ontransitionend(event);
    };
    proto.onotransitionend = function(event) {
        this.ontransitionend(event);
    };
    // properties that I munge to make my life easier
    var dashedVendorProperties = {
        "-webkit-transform": "transform"
    };
    proto.ontransitionend = function(event) {
        // disregard bubbled events from children
        if (event.target !== this.element) return;
        var _transition = this._transn;
        // get property name of transitioned property, convert to prefix-free
        var propertyName = dashedVendorProperties[event.propertyName] || event.propertyName;
        // remove property that has completed transitioning
        delete _transition.ingProperties[propertyName];
        // check if any properties are still transitioning
        if (isEmptyObj(_transition.ingProperties)) // all properties have completed transitioning
        this.disableTransition();
        // clean style
        if (propertyName in _transition.clean) {
            // clean up style
            this.element.style[event.propertyName] = "";
            delete _transition.clean[propertyName];
        }
        // trigger onTransitionEnd callback
        if (propertyName in _transition.onEnd) {
            var onTransitionEnd = _transition.onEnd[propertyName];
            onTransitionEnd.call(this);
            delete _transition.onEnd[propertyName];
        }
        this.emitEvent("transitionEnd", [
            this
        ]);
    };
    proto.disableTransition = function() {
        this.removeTransitionStyles();
        this.element.removeEventListener(transitionEndEvent, this, false);
        this.isTransitioning = false;
    };
    /**
 * removes style property from element
 * @param {Object} style
**/ proto._removeStyles = function(style) {
        // clean up transition styles
        var cleanStyle = {};
        for(var prop in style)cleanStyle[prop] = "";
        this.css(cleanStyle);
    };
    var cleanTransitionStyle = {
        transitionProperty: "",
        transitionDuration: "",
        transitionDelay: ""
    };
    proto.removeTransitionStyles = function() {
        // remove transition
        this.css(cleanTransitionStyle);
    };
    // ----- stagger ----- //
    proto.stagger = function(delay) {
        delay = isNaN(delay) ? 0 : delay;
        this.staggerDelay = delay + "ms";
    };
    // ----- show/hide/remove ----- //
    // remove element from DOM
    proto.removeElem = function() {
        this.element.parentNode.removeChild(this.element);
        // remove display: none
        this.css({
            display: ""
        });
        this.emitEvent("remove", [
            this
        ]);
    };
    proto.remove = function() {
        // just remove element if no transition support or no transition
        if (!transitionProperty || !parseFloat(this.layout.options.transitionDuration)) {
            this.removeElem();
            return;
        }
        // start transition
        this.once("transitionEnd", function() {
            this.removeElem();
        });
        this.hide();
    };
    proto.reveal = function() {
        delete this.isHidden;
        // remove display: none
        this.css({
            display: ""
        });
        var options = this.layout.options;
        var onTransitionEnd = {};
        var transitionEndProperty = this.getHideRevealTransitionEndProperty("visibleStyle");
        onTransitionEnd[transitionEndProperty] = this.onRevealTransitionEnd;
        this.transition({
            from: options.hiddenStyle,
            to: options.visibleStyle,
            isCleaning: true,
            onTransitionEnd: onTransitionEnd
        });
    };
    proto.onRevealTransitionEnd = function() {
        // check if still visible
        // during transition, item may have been hidden
        if (!this.isHidden) this.emitEvent("reveal");
    };
    /**
 * get style property use for hide/reveal transition end
 * @param {String} styleProperty - hiddenStyle/visibleStyle
 * @returns {String}
 */ proto.getHideRevealTransitionEndProperty = function(styleProperty) {
        var optionStyle = this.layout.options[styleProperty];
        // use opacity
        if (optionStyle.opacity) return "opacity";
        // get first property
        for(var prop in optionStyle)return prop;
    };
    proto.hide = function() {
        // set flag
        this.isHidden = true;
        // remove display: none
        this.css({
            display: ""
        });
        var options = this.layout.options;
        var onTransitionEnd = {};
        var transitionEndProperty = this.getHideRevealTransitionEndProperty("hiddenStyle");
        onTransitionEnd[transitionEndProperty] = this.onHideTransitionEnd;
        this.transition({
            from: options.visibleStyle,
            to: options.hiddenStyle,
            // keep hidden stuff hidden
            isCleaning: true,
            onTransitionEnd: onTransitionEnd
        });
    };
    proto.onHideTransitionEnd = function() {
        // check if still hidden
        // during transition, item may have been un-hidden
        if (this.isHidden) {
            this.css({
                display: "none"
            });
            this.emitEvent("hide");
        }
    };
    proto.destroy = function() {
        this.css({
            position: "",
            left: "",
            right: "",
            top: "",
            bottom: "",
            transition: "",
            transform: ""
        });
    };
    return Item;
});

},{"a1eda3d310dbf2a4":"7rCHo","daf99c80e4d65902":"166by"}],"2exAg":[function(require,module,exports) {
/*! @license ScrollReveal v4.0.9

	Copyright 2021 Fisssion LLC.

	Licensed under the GNU General Public License 3.0 for
	compatible open source projects and non-commercial use.

	For commercial sites, themes, projects, and applications,
	keep your source code private/proprietary by purchasing
	a commercial license from https://scrollrevealjs.org/
*/ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _tealight = require("tealight");
var _tealightDefault = parcelHelpers.interopDefault(_tealight);
var _rematrix = require("rematrix");
var _miniraf = require("miniraf");
var _minirafDefault = parcelHelpers.interopDefault(_miniraf);
var defaults = {
    delay: 0,
    distance: "0",
    duration: 600,
    easing: "cubic-bezier(0.5, 0, 0, 1)",
    interval: 0,
    opacity: 0,
    origin: "bottom",
    rotate: {
        x: 0,
        y: 0,
        z: 0
    },
    scale: 1,
    cleanup: false,
    container: document.documentElement,
    desktop: true,
    mobile: true,
    reset: false,
    useDelay: "always",
    viewFactor: 0.0,
    viewOffset: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    },
    afterReset: function afterReset() {},
    afterReveal: function afterReveal() {},
    beforeReset: function beforeReset() {},
    beforeReveal: function beforeReveal() {}
};
function failure() {
    document.documentElement.classList.remove("sr");
    return {
        clean: function clean() {},
        destroy: function destroy() {},
        reveal: function reveal() {},
        sync: function sync() {},
        get noop () {
            return true;
        }
    };
}
function success() {
    document.documentElement.classList.add("sr");
    if (document.body) document.body.style.height = "100%";
    else document.addEventListener("DOMContentLoaded", function() {
        document.body.style.height = "100%";
    });
}
var mount = {
    success: success,
    failure: failure
};
function isObject(x) {
    return x !== null && x instanceof Object && (x.constructor === Object || Object.prototype.toString.call(x) === "[object Object]");
}
function each(collection, callback) {
    if (isObject(collection)) {
        var keys = Object.keys(collection);
        return keys.forEach(function(key) {
            return callback(collection[key], key, collection);
        });
    }
    if (collection instanceof Array) return collection.forEach(function(item, i) {
        return callback(item, i, collection);
    });
    throw new TypeError("Expected either an array or object literal.");
}
function logger(message) {
    var details = [], len = arguments.length - 1;
    while(len-- > 0)details[len] = arguments[len + 1];
    if (this.constructor.debug && console) {
        var report = "%cScrollReveal: " + message;
        details.forEach(function(detail) {
            return report += "\n — " + detail;
        });
        console.log(report, "color: #ea654b;"); // eslint-disable-line no-console
    }
}
function rinse() {
    var this$1 = this;
    var struct = function() {
        return {
            active: [],
            stale: []
        };
    };
    var elementIds = struct();
    var sequenceIds = struct();
    var containerIds = struct();
    /**
	 * Take stock of active element IDs.
	 */ try {
        each((0, _tealightDefault.default)("[data-sr-id]"), function(node) {
            var id = parseInt(node.getAttribute("data-sr-id"));
            elementIds.active.push(id);
        });
    } catch (e) {
        throw e;
    }
    /**
	 * Destroy stale elements.
	 */ each(this.store.elements, function(element) {
        if (elementIds.active.indexOf(element.id) === -1) elementIds.stale.push(element.id);
    });
    each(elementIds.stale, function(staleId) {
        return delete this$1.store.elements[staleId];
    });
    /**
	 * Take stock of active container and sequence IDs.
	 */ each(this.store.elements, function(element) {
        if (containerIds.active.indexOf(element.containerId) === -1) containerIds.active.push(element.containerId);
        if (element.hasOwnProperty("sequence")) {
            if (sequenceIds.active.indexOf(element.sequence.id) === -1) sequenceIds.active.push(element.sequence.id);
        }
    });
    /**
	 * Destroy stale containers.
	 */ each(this.store.containers, function(container) {
        if (containerIds.active.indexOf(container.id) === -1) containerIds.stale.push(container.id);
    });
    each(containerIds.stale, function(staleId) {
        var stale = this$1.store.containers[staleId].node;
        stale.removeEventListener("scroll", this$1.delegate);
        stale.removeEventListener("resize", this$1.delegate);
        delete this$1.store.containers[staleId];
    });
    /**
	 * Destroy stale sequences.
	 */ each(this.store.sequences, function(sequence) {
        if (sequenceIds.active.indexOf(sequence.id) === -1) sequenceIds.stale.push(sequence.id);
    });
    each(sequenceIds.stale, function(staleId) {
        return delete this$1.store.sequences[staleId];
    });
}
var getPrefixedCssProp = function() {
    var properties = {};
    var style = document.documentElement.style;
    function getPrefixedCssProperty(name, source) {
        if (source === void 0) source = style;
        if (name && typeof name === "string") {
            if (properties[name]) return properties[name];
            if (typeof source[name] === "string") return properties[name] = name;
            if (typeof source["-webkit-" + name] === "string") return properties[name] = "-webkit-" + name;
            throw new RangeError('Unable to find "' + name + '" style property.');
        }
        throw new TypeError("Expected a string.");
    }
    getPrefixedCssProperty.clearCache = function() {
        return properties = {};
    };
    return getPrefixedCssProperty;
}();
function style(element) {
    var computed = window.getComputedStyle(element.node);
    var position = computed.position;
    var config = element.config;
    /**
	 * Generate inline styles
	 */ var inline = {};
    var inlineStyle = element.node.getAttribute("style") || "";
    var inlineMatch = inlineStyle.match(/[\w-]+\s*:\s*[^;]+\s*/gi) || [];
    inline.computed = inlineMatch ? inlineMatch.map(function(m) {
        return m.trim();
    }).join("; ") + ";" : "";
    inline.generated = inlineMatch.some(function(m) {
        return m.match(/visibility\s?:\s?visible/i);
    }) ? inline.computed : inlineMatch.concat([
        "visibility: visible"
    ]).map(function(m) {
        return m.trim();
    }).join("; ") + ";";
    /**
	 * Generate opacity styles
	 */ var computedOpacity = parseFloat(computed.opacity);
    var configOpacity = !isNaN(parseFloat(config.opacity)) ? parseFloat(config.opacity) : parseFloat(computed.opacity);
    var opacity = {
        computed: computedOpacity !== configOpacity ? "opacity: " + computedOpacity + ";" : "",
        generated: computedOpacity !== configOpacity ? "opacity: " + configOpacity + ";" : ""
    };
    /**
	 * Generate transformation styles
	 */ var transformations = [];
    if (parseFloat(config.distance)) {
        var axis = config.origin === "top" || config.origin === "bottom" ? "Y" : "X";
        /**
		 * Let’s make sure our our pixel distances are negative for top and left.
		 * e.g. { origin: 'top', distance: '25px' } starts at `top: -25px` in CSS.
		 */ var distance = config.distance;
        if (config.origin === "top" || config.origin === "left") distance = /^-/.test(distance) ? distance.substr(1) : "-" + distance;
        var ref = distance.match(/(^-?\d+\.?\d?)|(em$|px$|%$)/g);
        var value = ref[0];
        var unit = ref[1];
        switch(unit){
            case "em":
                distance = parseInt(computed.fontSize) * value;
                break;
            case "px":
                distance = value;
                break;
            case "%":
                /**
				 * Here we use `getBoundingClientRect` instead of
				 * the existing data attached to `element.geometry`
				 * because only the former includes any transformations
				 * current applied to the element.
				 *
				 * If that behavior ends up being unintuitive, this
				 * logic could instead utilize `element.geometry.height`
				 * and `element.geoemetry.width` for the distance calculation
				 */ distance = axis === "Y" ? element.node.getBoundingClientRect().height * value / 100 : element.node.getBoundingClientRect().width * value / 100;
                break;
            default:
                throw new RangeError("Unrecognized or missing distance unit.");
        }
        if (axis === "Y") transformations.push((0, _rematrix.translateY)(distance));
        else transformations.push((0, _rematrix.translateX)(distance));
    }
    if (config.rotate.x) transformations.push((0, _rematrix.rotateX)(config.rotate.x));
    if (config.rotate.y) transformations.push((0, _rematrix.rotateY)(config.rotate.y));
    if (config.rotate.z) transformations.push((0, _rematrix.rotateZ)(config.rotate.z));
    if (config.scale !== 1) {
        if (config.scale === 0) /**
			 * The CSS Transforms matrix interpolation specification
			 * basically disallows transitions of non-invertible
			 * matrixes, which means browsers won't transition
			 * elements with zero scale.
			 *
			 * That’s inconvenient for the API and developer
			 * experience, so we simply nudge their value
			 * slightly above zero; this allows browsers
			 * to transition our element as expected.
			 *
			 * `0.0002` was the smallest number
			 * that performed across browsers.
			 */ transformations.push((0, _rematrix.scale)(0.0002));
        else transformations.push((0, _rematrix.scale)(config.scale));
    }
    var transform = {};
    if (transformations.length) {
        transform.property = getPrefixedCssProp("transform");
        /**
		 * The default computed transform value should be one of:
		 * undefined || 'none' || 'matrix()' || 'matrix3d()'
		 */ transform.computed = {
            raw: computed[transform.property],
            matrix: (0, _rematrix.parse)(computed[transform.property])
        };
        transformations.unshift(transform.computed.matrix);
        var product = transformations.reduce((0, _rematrix.multiply));
        transform.generated = {
            initial: transform.property + ": matrix3d(" + product.join(", ") + ");",
            final: transform.property + ": matrix3d(" + transform.computed.matrix.join(", ") + ");"
        };
    } else transform.generated = {
        initial: "",
        final: ""
    };
    /**
	 * Generate transition styles
	 */ var transition = {};
    if (opacity.generated || transform.generated.initial) {
        transition.property = getPrefixedCssProp("transition");
        transition.computed = computed[transition.property];
        transition.fragments = [];
        var delay = config.delay;
        var duration = config.duration;
        var easing = config.easing;
        if (opacity.generated) transition.fragments.push({
            delayed: "opacity " + duration / 1000 + "s " + easing + " " + delay / 1000 + "s",
            instant: "opacity " + duration / 1000 + "s " + easing + " 0s"
        });
        if (transform.generated.initial) transition.fragments.push({
            delayed: transform.property + " " + duration / 1000 + "s " + easing + " " + delay / 1000 + "s",
            instant: transform.property + " " + duration / 1000 + "s " + easing + " 0s"
        });
        /**
		 * The default computed transition property should be undefined, or one of:
		 * '' || 'none 0s ease 0s' || 'all 0s ease 0s' || 'all 0s 0s cubic-bezier()'
		 */ var hasCustomTransition = transition.computed && !transition.computed.match(/all 0s|none 0s/);
        if (hasCustomTransition) transition.fragments.unshift({
            delayed: transition.computed,
            instant: transition.computed
        });
        var composed = transition.fragments.reduce(function(composition, fragment, i) {
            composition.delayed += i === 0 ? fragment.delayed : ", " + fragment.delayed;
            composition.instant += i === 0 ? fragment.instant : ", " + fragment.instant;
            return composition;
        }, {
            delayed: "",
            instant: ""
        });
        transition.generated = {
            delayed: transition.property + ": " + composed.delayed + ";",
            instant: transition.property + ": " + composed.instant + ";"
        };
    } else transition.generated = {
        delayed: "",
        instant: ""
    };
    return {
        inline: inline,
        opacity: opacity,
        position: position,
        transform: transform,
        transition: transition
    };
}
/**
 * apply a CSS string to an element using the CSSOM (element.style) rather
 * than setAttribute, which may violate the content security policy.
 *
 * @param {Node}   [el]  Element to receive styles.
 * @param {string} [declaration] Styles to apply.
 */ function applyStyle(el, declaration) {
    declaration.split(";").forEach(function(pair) {
        var ref = pair.split(":");
        var property = ref[0];
        var value = ref.slice(1);
        if (property && value) el.style[property.trim()] = value.join(":");
    });
}
function clean(target) {
    var this$1 = this;
    var dirty;
    try {
        each((0, _tealightDefault.default)(target), function(node) {
            var id = node.getAttribute("data-sr-id");
            if (id !== null) {
                dirty = true;
                var element = this$1.store.elements[id];
                if (element.callbackTimer) window.clearTimeout(element.callbackTimer.clock);
                applyStyle(element.node, element.styles.inline.generated);
                node.removeAttribute("data-sr-id");
                delete this$1.store.elements[id];
            }
        });
    } catch (e) {
        return logger.call(this, "Clean failed.", e.message);
    }
    if (dirty) try {
        rinse.call(this);
    } catch (e) {
        return logger.call(this, "Clean failed.", e.message);
    }
}
function destroy() {
    var this$1 = this;
    /**
	 * Remove all generated styles and element ids
	 */ each(this.store.elements, function(element) {
        applyStyle(element.node, element.styles.inline.generated);
        element.node.removeAttribute("data-sr-id");
    });
    /**
	 * Remove all event listeners.
	 */ each(this.store.containers, function(container) {
        var target = container.node === document.documentElement ? window : container.node;
        target.removeEventListener("scroll", this$1.delegate);
        target.removeEventListener("resize", this$1.delegate);
    });
    /**
	 * Clear all data from the store
	 */ this.store = {
        containers: {},
        elements: {},
        history: [],
        sequences: {}
    };
}
function deepAssign(target) {
    var sources = [], len = arguments.length - 1;
    while(len-- > 0)sources[len] = arguments[len + 1];
    if (isObject(target)) {
        each(sources, function(source) {
            each(source, function(data, key) {
                if (isObject(data)) {
                    if (!target[key] || !isObject(target[key])) target[key] = {};
                    deepAssign(target[key], data);
                } else target[key] = data;
            });
        });
        return target;
    } else throw new TypeError("Target must be an object literal.");
}
function isMobile(agent) {
    if (agent === void 0) agent = navigator.userAgent;
    return /Android|iPhone|iPad|iPod/i.test(agent);
}
var nextUniqueId = function() {
    var uid = 0;
    return function() {
        return uid++;
    };
}();
function initialize() {
    var this$1 = this;
    rinse.call(this);
    each(this.store.elements, function(element) {
        var styles = [
            element.styles.inline.generated
        ];
        if (element.visible) {
            styles.push(element.styles.opacity.computed);
            styles.push(element.styles.transform.generated.final);
            element.revealed = true;
        } else {
            styles.push(element.styles.opacity.generated);
            styles.push(element.styles.transform.generated.initial);
            element.revealed = false;
        }
        applyStyle(element.node, styles.filter(function(s) {
            return s !== "";
        }).join(" "));
    });
    each(this.store.containers, function(container) {
        var target = container.node === document.documentElement ? window : container.node;
        target.addEventListener("scroll", this$1.delegate);
        target.addEventListener("resize", this$1.delegate);
    });
    /**
	 * Manually invoke delegate once to capture
	 * element and container dimensions, container
	 * scroll position, and trigger any valid reveals
	 */ this.delegate();
    /**
	 * Wipe any existing `setTimeout` now
	 * that initialization has completed.
	 */ this.initTimeout = null;
}
function animate(element, force) {
    if (force === void 0) force = {};
    var pristine = force.pristine || this.pristine;
    var delayed = element.config.useDelay === "always" || element.config.useDelay === "onload" && pristine || element.config.useDelay === "once" && !element.seen;
    var shouldReveal = element.visible && !element.revealed;
    var shouldReset = !element.visible && element.revealed && element.config.reset;
    if (force.reveal || shouldReveal) return triggerReveal.call(this, element, delayed);
    if (force.reset || shouldReset) return triggerReset.call(this, element);
}
function triggerReveal(element, delayed) {
    var styles = [
        element.styles.inline.generated,
        element.styles.opacity.computed,
        element.styles.transform.generated.final
    ];
    if (delayed) styles.push(element.styles.transition.generated.delayed);
    else styles.push(element.styles.transition.generated.instant);
    element.revealed = element.seen = true;
    applyStyle(element.node, styles.filter(function(s) {
        return s !== "";
    }).join(" "));
    registerCallbacks.call(this, element, delayed);
}
function triggerReset(element) {
    var styles = [
        element.styles.inline.generated,
        element.styles.opacity.generated,
        element.styles.transform.generated.initial,
        element.styles.transition.generated.instant
    ];
    element.revealed = false;
    applyStyle(element.node, styles.filter(function(s) {
        return s !== "";
    }).join(" "));
    registerCallbacks.call(this, element);
}
function registerCallbacks(element, isDelayed) {
    var this$1 = this;
    var duration = isDelayed ? element.config.duration + element.config.delay : element.config.duration;
    var beforeCallback = element.revealed ? element.config.beforeReveal : element.config.beforeReset;
    var afterCallback = element.revealed ? element.config.afterReveal : element.config.afterReset;
    var elapsed = 0;
    if (element.callbackTimer) {
        elapsed = Date.now() - element.callbackTimer.start;
        window.clearTimeout(element.callbackTimer.clock);
    }
    beforeCallback(element.node);
    element.callbackTimer = {
        start: Date.now(),
        clock: window.setTimeout(function() {
            afterCallback(element.node);
            element.callbackTimer = null;
            if (element.revealed && !element.config.reset && element.config.cleanup) clean.call(this$1, element.node);
        }, duration - elapsed)
    };
}
function sequence(element, pristine) {
    if (pristine === void 0) pristine = this.pristine;
    /**
	 * We first check if the element should reset.
	 */ if (!element.visible && element.revealed && element.config.reset) return animate.call(this, element, {
        reset: true
    });
    var seq = this.store.sequences[element.sequence.id];
    var i = element.sequence.index;
    if (seq) {
        var visible = new SequenceModel(seq, "visible", this.store);
        var revealed = new SequenceModel(seq, "revealed", this.store);
        seq.models = {
            visible: visible,
            revealed: revealed
        };
        /**
		 * If the sequence has no revealed members,
		 * then we reveal the first visible element
		 * within that sequence.
		 *
		 * The sequence then cues a recursive call
		 * in both directions.
		 */ if (!revealed.body.length) {
            var nextId = seq.members[visible.body[0]];
            var nextElement = this.store.elements[nextId];
            if (nextElement) {
                cue.call(this, seq, visible.body[0], -1, pristine);
                cue.call(this, seq, visible.body[0], 1, pristine);
                return animate.call(this, nextElement, {
                    reveal: true,
                    pristine: pristine
                });
            }
        }
        /**
		 * If our element isn’t resetting, we check the
		 * element sequence index against the head, and
		 * then the foot of the sequence.
		 */ if (!seq.blocked.head && i === [].concat(revealed.head).pop() && i >= [].concat(visible.body).shift()) {
            cue.call(this, seq, i, -1, pristine);
            return animate.call(this, element, {
                reveal: true,
                pristine: pristine
            });
        }
        if (!seq.blocked.foot && i === [].concat(revealed.foot).shift() && i <= [].concat(visible.body).pop()) {
            cue.call(this, seq, i, 1, pristine);
            return animate.call(this, element, {
                reveal: true,
                pristine: pristine
            });
        }
    }
}
function Sequence(interval) {
    var i = Math.abs(interval);
    if (!isNaN(i)) {
        this.id = nextUniqueId();
        this.interval = Math.max(i, 16);
        this.members = [];
        this.models = {};
        this.blocked = {
            head: false,
            foot: false
        };
    } else throw new RangeError("Invalid sequence interval.");
}
function SequenceModel(seq, prop, store) {
    var this$1 = this;
    this.head = [];
    this.body = [];
    this.foot = [];
    each(seq.members, function(id, index) {
        var element = store.elements[id];
        if (element && element[prop]) this$1.body.push(index);
    });
    if (this.body.length) each(seq.members, function(id, index) {
        var element = store.elements[id];
        if (element && !element[prop]) {
            if (index < this$1.body[0]) this$1.head.push(index);
            else this$1.foot.push(index);
        }
    });
}
function cue(seq, i, direction, pristine) {
    var this$1 = this;
    var blocked = [
        "head",
        null,
        "foot"
    ][1 + direction];
    var nextId = seq.members[i + direction];
    var nextElement = this.store.elements[nextId];
    seq.blocked[blocked] = true;
    setTimeout(function() {
        seq.blocked[blocked] = false;
        if (nextElement) sequence.call(this$1, nextElement, pristine);
    }, seq.interval);
}
function reveal(target, options, syncing) {
    var this$1 = this;
    if (options === void 0) options = {};
    if (syncing === void 0) syncing = false;
    var containerBuffer = [];
    var sequence$$1;
    var interval = options.interval || defaults.interval;
    try {
        if (interval) sequence$$1 = new Sequence(interval);
        var nodes = (0, _tealightDefault.default)(target);
        if (!nodes.length) throw new Error("Invalid reveal target.");
        var elements = nodes.reduce(function(elementBuffer, elementNode) {
            var element = {};
            var existingId = elementNode.getAttribute("data-sr-id");
            if (existingId) {
                deepAssign(element, this$1.store.elements[existingId]);
                /**
				 * In order to prevent previously generated styles
				 * from throwing off the new styles, the style tag
				 * has to be reverted to its pre-reveal state.
				 */ applyStyle(element.node, element.styles.inline.computed);
            } else {
                element.id = nextUniqueId();
                element.node = elementNode;
                element.seen = false;
                element.revealed = false;
                element.visible = false;
            }
            var config = deepAssign({}, element.config || this$1.defaults, options);
            if (!config.mobile && isMobile() || !config.desktop && !isMobile()) {
                if (existingId) clean.call(this$1, element);
                return elementBuffer // skip elements that are disabled
                ;
            }
            var containerNode = (0, _tealightDefault.default)(config.container)[0];
            if (!containerNode) throw new Error("Invalid container.");
            if (!containerNode.contains(elementNode)) return elementBuffer // skip elements found outside the container
            ;
            var containerId;
            containerId = getContainerId(containerNode, containerBuffer, this$1.store.containers);
            if (containerId === null) {
                containerId = nextUniqueId();
                containerBuffer.push({
                    id: containerId,
                    node: containerNode
                });
            }
            element.config = config;
            element.containerId = containerId;
            element.styles = style(element);
            if (sequence$$1) {
                element.sequence = {
                    id: sequence$$1.id,
                    index: sequence$$1.members.length
                };
                sequence$$1.members.push(element.id);
            }
            elementBuffer.push(element);
            return elementBuffer;
        }, []);
        /**
		 * Modifying the DOM via setAttribute needs to be handled
		 * separately from reading computed styles in the map above
		 * for the browser to batch DOM changes (limiting reflows)
		 */ each(elements, function(element) {
            this$1.store.elements[element.id] = element;
            element.node.setAttribute("data-sr-id", element.id);
        });
    } catch (e) {
        return logger.call(this, "Reveal failed.", e.message);
    }
    /**
	 * Now that element set-up is complete...
	 * Let’s commit any container and sequence data we have to the store.
	 */ each(containerBuffer, function(container) {
        this$1.store.containers[container.id] = {
            id: container.id,
            node: container.node
        };
    });
    if (sequence$$1) this.store.sequences[sequence$$1.id] = sequence$$1;
    /**
	 * If reveal wasn't invoked by sync, we want to
	 * make sure to add this call to the history.
	 */ if (syncing !== true) {
        this.store.history.push({
            target: target,
            options: options
        });
        /**
		 * Push initialization to the event queue, giving
		 * multiple reveal calls time to be interpreted.
		 */ if (this.initTimeout) window.clearTimeout(this.initTimeout);
        this.initTimeout = window.setTimeout(initialize.bind(this), 0);
    }
}
function getContainerId(node) {
    var collections = [], len = arguments.length - 1;
    while(len-- > 0)collections[len] = arguments[len + 1];
    var id = null;
    each(collections, function(collection) {
        each(collection, function(container) {
            if (id === null && container.node === node) id = container.id;
        });
    });
    return id;
}
/**
 * Re-runs the reveal method for each record stored in history,
 * for capturing new content asynchronously loaded into the DOM.
 */ function sync() {
    var this$1 = this;
    each(this.store.history, function(record) {
        reveal.call(this$1, record.target, record.options, true);
    });
    initialize.call(this);
}
var polyfill = function(x) {
    return (x > 0) - (x < 0) || +x;
};
var mathSign = Math.sign || polyfill;
function getGeometry(target, isContainer) {
    /**
	 * We want to ignore padding and scrollbars for container elements.
	 * More information here: https://goo.gl/vOZpbz
	 */ var height = isContainer ? target.node.clientHeight : target.node.offsetHeight;
    var width = isContainer ? target.node.clientWidth : target.node.offsetWidth;
    var offsetTop = 0;
    var offsetLeft = 0;
    var node = target.node;
    do {
        if (!isNaN(node.offsetTop)) offsetTop += node.offsetTop;
        if (!isNaN(node.offsetLeft)) offsetLeft += node.offsetLeft;
        node = node.offsetParent;
    }while (node);
    return {
        bounds: {
            top: offsetTop,
            right: offsetLeft + width,
            bottom: offsetTop + height,
            left: offsetLeft
        },
        height: height,
        width: width
    };
}
function getScrolled(container) {
    var top, left;
    if (container.node === document.documentElement) {
        top = window.pageYOffset;
        left = window.pageXOffset;
    } else {
        top = container.node.scrollTop;
        left = container.node.scrollLeft;
    }
    return {
        top: top,
        left: left
    };
}
function isElementVisible(element) {
    if (element === void 0) element = {};
    var container = this.store.containers[element.containerId];
    if (!container) return;
    var viewFactor = Math.max(0, Math.min(1, element.config.viewFactor));
    var viewOffset = element.config.viewOffset;
    var elementBounds = {
        top: element.geometry.bounds.top + element.geometry.height * viewFactor,
        right: element.geometry.bounds.right - element.geometry.width * viewFactor,
        bottom: element.geometry.bounds.bottom - element.geometry.height * viewFactor,
        left: element.geometry.bounds.left + element.geometry.width * viewFactor
    };
    var containerBounds = {
        top: container.geometry.bounds.top + container.scroll.top + viewOffset.top,
        right: container.geometry.bounds.right + container.scroll.left - viewOffset.right,
        bottom: container.geometry.bounds.bottom + container.scroll.top - viewOffset.bottom,
        left: container.geometry.bounds.left + container.scroll.left + viewOffset.left
    };
    return elementBounds.top < containerBounds.bottom && elementBounds.right > containerBounds.left && elementBounds.bottom > containerBounds.top && elementBounds.left < containerBounds.right || element.styles.position === "fixed";
}
function delegate(event, elements) {
    var this$1 = this;
    if (event === void 0) event = {
        type: "init"
    };
    if (elements === void 0) elements = this.store.elements;
    (0, _minirafDefault.default)(function() {
        var stale = event.type === "init" || event.type === "resize";
        each(this$1.store.containers, function(container) {
            if (stale) container.geometry = getGeometry.call(this$1, container, true);
            var scroll = getScrolled.call(this$1, container);
            if (container.scroll) container.direction = {
                x: mathSign(scroll.left - container.scroll.left),
                y: mathSign(scroll.top - container.scroll.top)
            };
            container.scroll = scroll;
        });
        /**
		 * Due to how the sequencer is implemented, it’s
		 * important that we update the state of all
		 * elements, before any animation logic is
		 * evaluated (in the second loop below).
		 */ each(elements, function(element) {
            if (stale || element.geometry === undefined) element.geometry = getGeometry.call(this$1, element);
            element.visible = isElementVisible.call(this$1, element);
        });
        each(elements, function(element) {
            if (element.sequence) sequence.call(this$1, element);
            else animate.call(this$1, element);
        });
        this$1.pristine = false;
    });
}
function isTransformSupported() {
    var style = document.documentElement.style;
    return "transform" in style || "WebkitTransform" in style;
}
function isTransitionSupported() {
    var style = document.documentElement.style;
    return "transition" in style || "WebkitTransition" in style;
}
var version = "4.0.9";
var boundDelegate;
var boundDestroy;
var boundReveal;
var boundClean;
var boundSync;
var config;
var debug;
var instance;
function ScrollReveal(options) {
    if (options === void 0) options = {};
    var invokedWithoutNew = typeof this === "undefined" || Object.getPrototypeOf(this) !== ScrollReveal.prototype;
    if (invokedWithoutNew) return new ScrollReveal(options);
    if (!ScrollReveal.isSupported()) {
        logger.call(this, "Instantiation failed.", "This browser is not supported.");
        return mount.failure();
    }
    var buffer;
    try {
        buffer = config ? deepAssign({}, config, options) : deepAssign({}, defaults, options);
    } catch (e) {
        logger.call(this, "Invalid configuration.", e.message);
        return mount.failure();
    }
    try {
        var container = (0, _tealightDefault.default)(buffer.container)[0];
        if (!container) throw new Error("Invalid container.");
    } catch (e) {
        logger.call(this, e.message);
        return mount.failure();
    }
    config = buffer;
    if (!config.mobile && isMobile() || !config.desktop && !isMobile()) {
        logger.call(this, "This device is disabled.", "desktop: " + config.desktop, "mobile: " + config.mobile);
        return mount.failure();
    }
    mount.success();
    this.store = {
        containers: {},
        elements: {},
        history: [],
        sequences: {}
    };
    this.pristine = true;
    boundDelegate = boundDelegate || delegate.bind(this);
    boundDestroy = boundDestroy || destroy.bind(this);
    boundReveal = boundReveal || reveal.bind(this);
    boundClean = boundClean || clean.bind(this);
    boundSync = boundSync || sync.bind(this);
    Object.defineProperty(this, "delegate", {
        get: function() {
            return boundDelegate;
        }
    });
    Object.defineProperty(this, "destroy", {
        get: function() {
            return boundDestroy;
        }
    });
    Object.defineProperty(this, "reveal", {
        get: function() {
            return boundReveal;
        }
    });
    Object.defineProperty(this, "clean", {
        get: function() {
            return boundClean;
        }
    });
    Object.defineProperty(this, "sync", {
        get: function() {
            return boundSync;
        }
    });
    Object.defineProperty(this, "defaults", {
        get: function() {
            return config;
        }
    });
    Object.defineProperty(this, "version", {
        get: function() {
            return version;
        }
    });
    Object.defineProperty(this, "noop", {
        get: function() {
            return false;
        }
    });
    return instance ? instance : instance = this;
}
ScrollReveal.isSupported = function() {
    return isTransformSupported() && isTransitionSupported();
};
Object.defineProperty(ScrollReveal, "debug", {
    get: function() {
        return debug || false;
    },
    set: function(value) {
        return debug = typeof value === "boolean" ? value : debug;
    }
});
ScrollReveal();
exports.default = ScrollReveal;

},{"tealight":"9LJi6","rematrix":"iiA0g","miniraf":"cmczW","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9LJi6":[function(require,module,exports) {
/*! @license Tealight v0.3.6

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _isDomNode = require("is-dom-node");
var _isDomNodeDefault = parcelHelpers.interopDefault(_isDomNode);
var _isDomNodeList = require("is-dom-node-list");
var _isDomNodeListDefault = parcelHelpers.interopDefault(_isDomNodeList);
function tealight(target, context) {
    if (context === void 0) context = document;
    if (target instanceof Array) return target.filter((0, _isDomNodeDefault.default));
    if ((0, _isDomNodeDefault.default)(target)) return [
        target
    ];
    if ((0, _isDomNodeListDefault.default)(target)) return Array.prototype.slice.call(target);
    if (typeof target === "string") try {
        var query = context.querySelectorAll(target);
        return Array.prototype.slice.call(query);
    } catch (err) {
        return [];
    }
    return [];
}
exports.default = tealight;

},{"is-dom-node":"ef65w","is-dom-node-list":"hDni0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ef65w":[function(require,module,exports) {
/*! @license is-dom-node v1.0.4

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function isDomNode(x) {
    return typeof window.Node === "object" ? x instanceof window.Node : x !== null && typeof x === "object" && typeof x.nodeType === "number" && typeof x.nodeName === "string";
}
exports.default = isDomNode;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"hDni0":[function(require,module,exports) {
/*! @license is-dom-node-list v1.2.1

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _isDomNode = require("is-dom-node");
var _isDomNodeDefault = parcelHelpers.interopDefault(_isDomNode);
function isDomNodeList(x) {
    var prototypeToString = Object.prototype.toString.call(x);
    var regex = /^\[object (HTMLCollection|NodeList|Object)\]$/;
    return typeof window.NodeList === "object" ? x instanceof window.NodeList : x !== null && typeof x === "object" && typeof x.length === "number" && regex.test(prototypeToString) && (x.length === 0 || (0, _isDomNodeDefault.default)(x[0]));
}
exports.default = isDomNodeList;

},{"is-dom-node":"ef65w","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iiA0g":[function(require,module,exports) {
/*! @license Rematrix v0.3.0

	Copyright 2018 Julian Lloyd.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.
*/ /**
 * @module Rematrix
 */ /**
 * Transformation matrices in the browser come in two flavors:
 *
 *  - `matrix` using 6 values (short)
 *  - `matrix3d` using 16 values (long)
 *
 * This utility follows this [conversion guide](https://goo.gl/EJlUQ1)
 * to expand short form matrices to their equivalent long form.
 *
 * @param  {array} source - Accepts both short and long form matrices.
 * @return {array}
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "format", ()=>format);
parcelHelpers.export(exports, "identity", ()=>identity);
parcelHelpers.export(exports, "inverse", ()=>inverse);
parcelHelpers.export(exports, "multiply", ()=>multiply);
parcelHelpers.export(exports, "parse", ()=>parse);
parcelHelpers.export(exports, "rotate", ()=>rotate);
parcelHelpers.export(exports, "rotateX", ()=>rotateX);
parcelHelpers.export(exports, "rotateY", ()=>rotateY);
parcelHelpers.export(exports, "rotateZ", ()=>rotateZ);
parcelHelpers.export(exports, "scale", ()=>scale);
parcelHelpers.export(exports, "scaleX", ()=>scaleX);
parcelHelpers.export(exports, "scaleY", ()=>scaleY);
parcelHelpers.export(exports, "scaleZ", ()=>scaleZ);
parcelHelpers.export(exports, "skew", ()=>skew);
parcelHelpers.export(exports, "skewX", ()=>skewX);
parcelHelpers.export(exports, "skewY", ()=>skewY);
parcelHelpers.export(exports, "toString", ()=>toString);
parcelHelpers.export(exports, "translate", ()=>translate);
parcelHelpers.export(exports, "translateX", ()=>translateX);
parcelHelpers.export(exports, "translateY", ()=>translateY);
parcelHelpers.export(exports, "translateZ", ()=>translateZ);
function format(source) {
    if (source.constructor !== Array) throw new TypeError("Expected array.");
    if (source.length === 16) return source;
    if (source.length === 6) {
        var matrix = identity();
        matrix[0] = source[0];
        matrix[1] = source[1];
        matrix[4] = source[2];
        matrix[5] = source[3];
        matrix[12] = source[4];
        matrix[13] = source[5];
        return matrix;
    }
    throw new RangeError("Expected array with either 6 or 16 values.");
}
/**
 * Returns a matrix representing no transformation. The product of any matrix
 * multiplied by the identity matrix will be the original matrix.
 *
 * > **Tip:** Similar to how `5 * 1 === 5`, where `1` is the identity.
 *
 * @return {array}
 */ function identity() {
    var matrix = [];
    for(var i = 0; i < 16; i++)i % 5 == 0 ? matrix.push(1) : matrix.push(0);
    return matrix;
}
/**
 * Returns a matrix describing the inverse transformation of the source
 * matrix. The product of any matrix multiplied by its inverse will be the
 * identity matrix.
 *
 * > **Tip:** Similar to how `5 * (1/5) === 1`, where `1/5` is the inverse.
 *
 * @param  {array} source - Accepts both short and long form matrices.
 * @return {array}
 */ function inverse(source) {
    var m = format(source);
    var s0 = m[0] * m[5] - m[4] * m[1];
    var s1 = m[0] * m[6] - m[4] * m[2];
    var s2 = m[0] * m[7] - m[4] * m[3];
    var s3 = m[1] * m[6] - m[5] * m[2];
    var s4 = m[1] * m[7] - m[5] * m[3];
    var s5 = m[2] * m[7] - m[6] * m[3];
    var c5 = m[10] * m[15] - m[14] * m[11];
    var c4 = m[9] * m[15] - m[13] * m[11];
    var c3 = m[9] * m[14] - m[13] * m[10];
    var c2 = m[8] * m[15] - m[12] * m[11];
    var c1 = m[8] * m[14] - m[12] * m[10];
    var c0 = m[8] * m[13] - m[12] * m[9];
    var determinant = 1 / (s0 * c5 - s1 * c4 + s2 * c3 + s3 * c2 - s4 * c1 + s5 * c0);
    if (isNaN(determinant) || determinant === Infinity) throw new Error("Inverse determinant attempted to divide by zero.");
    return [
        (m[5] * c5 - m[6] * c4 + m[7] * c3) * determinant,
        (-m[1] * c5 + m[2] * c4 - m[3] * c3) * determinant,
        (m[13] * s5 - m[14] * s4 + m[15] * s3) * determinant,
        (-m[9] * s5 + m[10] * s4 - m[11] * s3) * determinant,
        (-m[4] * c5 + m[6] * c2 - m[7] * c1) * determinant,
        (m[0] * c5 - m[2] * c2 + m[3] * c1) * determinant,
        (-m[12] * s5 + m[14] * s2 - m[15] * s1) * determinant,
        (m[8] * s5 - m[10] * s2 + m[11] * s1) * determinant,
        (m[4] * c4 - m[5] * c2 + m[7] * c0) * determinant,
        (-m[0] * c4 + m[1] * c2 - m[3] * c0) * determinant,
        (m[12] * s4 - m[13] * s2 + m[15] * s0) * determinant,
        (-m[8] * s4 + m[9] * s2 - m[11] * s0) * determinant,
        (-m[4] * c3 + m[5] * c1 - m[6] * c0) * determinant,
        (m[0] * c3 - m[1] * c1 + m[2] * c0) * determinant,
        (-m[12] * s3 + m[13] * s1 - m[14] * s0) * determinant,
        (m[8] * s3 - m[9] * s1 + m[10] * s0) * determinant
    ];
}
/**
 * Returns a 4x4 matrix describing the combined transformations
 * of both arguments.
 *
 * > **Note:** Order is very important. For example, rotating 45°
 * along the Z-axis, followed by translating 500 pixels along the
 * Y-axis... is not the same as translating 500 pixels along the
 * Y-axis, followed by rotating 45° along on the Z-axis.
 *
 * @param  {array} m - Accepts both short and long form matrices.
 * @param  {array} x - Accepts both short and long form matrices.
 * @return {array}
 */ function multiply(m, x) {
    var fm = format(m);
    var fx = format(x);
    var product = [];
    for(var i = 0; i < 4; i++){
        var row = [
            fm[i],
            fm[i + 4],
            fm[i + 8],
            fm[i + 12]
        ];
        for(var j = 0; j < 4; j++){
            var k = j * 4;
            var col = [
                fx[k],
                fx[k + 1],
                fx[k + 2],
                fx[k + 3]
            ];
            var result = row[0] * col[0] + row[1] * col[1] + row[2] * col[2] + row[3] * col[3];
            product[i + k] = result;
        }
    }
    return product;
}
/**
 * Attempts to return a 4x4 matrix describing the CSS transform
 * matrix passed in, but will return the identity matrix as a
 * fallback.
 *
 * > **Tip:** This method is used to convert a CSS matrix (retrieved as a
 * `string` from computed styles) to its equivalent array format.
 *
 * @param  {string} source - `matrix` or `matrix3d` CSS Transform value.
 * @return {array}
 */ function parse(source) {
    if (typeof source === "string") {
        var match = source.match(/matrix(3d)?\(([^)]+)\)/);
        if (match) {
            var raw = match[2].split(", ").map(parseFloat);
            return format(raw);
        }
    }
    return identity();
}
/**
 * Returns a 4x4 matrix describing Z-axis rotation.
 *
 * > **Tip:** This is just an alias for `Rematrix.rotateZ` for parity with CSS
 *
 * @param  {number} angle - Measured in degrees.
 * @return {array}
 */ function rotate(angle) {
    return rotateZ(angle);
}
/**
 * Returns a 4x4 matrix describing X-axis rotation.
 *
 * @param  {number} angle - Measured in degrees.
 * @return {array}
 */ function rotateX(angle) {
    var theta = Math.PI / 180 * angle;
    var matrix = identity();
    matrix[5] = matrix[10] = Math.cos(theta);
    matrix[6] = matrix[9] = Math.sin(theta);
    matrix[9] *= -1;
    return matrix;
}
/**
 * Returns a 4x4 matrix describing Y-axis rotation.
 *
 * @param  {number} angle - Measured in degrees.
 * @return {array}
 */ function rotateY(angle) {
    var theta = Math.PI / 180 * angle;
    var matrix = identity();
    matrix[0] = matrix[10] = Math.cos(theta);
    matrix[2] = matrix[8] = Math.sin(theta);
    matrix[2] *= -1;
    return matrix;
}
/**
 * Returns a 4x4 matrix describing Z-axis rotation.
 *
 * @param  {number} angle - Measured in degrees.
 * @return {array}
 */ function rotateZ(angle) {
    var theta = Math.PI / 180 * angle;
    var matrix = identity();
    matrix[0] = matrix[5] = Math.cos(theta);
    matrix[1] = matrix[4] = Math.sin(theta);
    matrix[4] *= -1;
    return matrix;
}
/**
 * Returns a 4x4 matrix describing 2D scaling. The first argument
 * is used for both X and Y-axis scaling, unless an optional
 * second argument is provided to explicitly define Y-axis scaling.
 *
 * @param  {number} scalar    - Decimal multiplier.
 * @param  {number} [scalarY] - Decimal multiplier.
 * @return {array}
 */ function scale(scalar, scalarY) {
    var matrix = identity();
    matrix[0] = scalar;
    matrix[5] = typeof scalarY === "number" ? scalarY : scalar;
    return matrix;
}
/**
 * Returns a 4x4 matrix describing X-axis scaling.
 *
 * @param  {number} scalar - Decimal multiplier.
 * @return {array}
 */ function scaleX(scalar) {
    var matrix = identity();
    matrix[0] = scalar;
    return matrix;
}
/**
 * Returns a 4x4 matrix describing Y-axis scaling.
 *
 * @param  {number} scalar - Decimal multiplier.
 * @return {array}
 */ function scaleY(scalar) {
    var matrix = identity();
    matrix[5] = scalar;
    return matrix;
}
/**
 * Returns a 4x4 matrix describing Z-axis scaling.
 *
 * @param  {number} scalar - Decimal multiplier.
 * @return {array}
 */ function scaleZ(scalar) {
    var matrix = identity();
    matrix[10] = scalar;
    return matrix;
}
/**
 * Returns a 4x4 matrix describing shear. The first argument
 * defines X-axis shearing, and an optional second argument
 * defines Y-axis shearing.
 *
 * @param  {number} angleX   - Measured in degrees.
 * @param  {number} [angleY] - Measured in degrees.
 * @return {array}
 */ function skew(angleX, angleY) {
    var thetaX = Math.PI / 180 * angleX;
    var matrix = identity();
    matrix[4] = Math.tan(thetaX);
    if (angleY) {
        var thetaY = Math.PI / 180 * angleY;
        matrix[1] = Math.tan(thetaY);
    }
    return matrix;
}
/**
 * Returns a 4x4 matrix describing X-axis shear.
 *
 * @param  {number} angle - Measured in degrees.
 * @return {array}
 */ function skewX(angle) {
    var theta = Math.PI / 180 * angle;
    var matrix = identity();
    matrix[4] = Math.tan(theta);
    return matrix;
}
/**
 * Returns a 4x4 matrix describing Y-axis shear.
 *
 * @param  {number} angle - Measured in degrees
 * @return {array}
 */ function skewY(angle) {
    var theta = Math.PI / 180 * angle;
    var matrix = identity();
    matrix[1] = Math.tan(theta);
    return matrix;
}
/**
 * Returns a CSS Transform property value equivalent to the source matrix.
 *
 * @param  {array} source - Accepts both short and long form matrices.
 * @return {string}
 */ function toString(source) {
    return "matrix3d(" + format(source).join(", ") + ")";
}
/**
 * Returns a 4x4 matrix describing 2D translation. The first
 * argument defines X-axis translation, and an optional second
 * argument defines Y-axis translation.
 *
 * @param  {number} distanceX   - Measured in pixels.
 * @param  {number} [distanceY] - Measured in pixels.
 * @return {array}
 */ function translate(distanceX, distanceY) {
    var matrix = identity();
    matrix[12] = distanceX;
    if (distanceY) matrix[13] = distanceY;
    return matrix;
}
/**
 * Returns a 4x4 matrix describing X-axis translation.
 *
 * @param  {number} distance - Measured in pixels.
 * @return {array}
 */ function translateX(distance) {
    var matrix = identity();
    matrix[12] = distance;
    return matrix;
}
/**
 * Returns a 4x4 matrix describing Y-axis translation.
 *
 * @param  {number} distance - Measured in pixels.
 * @return {array}
 */ function translateY(distance) {
    var matrix = identity();
    matrix[13] = distance;
    return matrix;
}
/**
 * Returns a 4x4 matrix describing Z-axis translation.
 *
 * @param  {number} distance - Measured in pixels.
 * @return {array}
 */ function translateZ(distance) {
    var matrix = identity();
    matrix[14] = distance;
    return matrix;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cmczW":[function(require,module,exports) {
/*! @license miniraf v1.0.0

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var polyfill = function() {
    var clock = Date.now();
    return function(callback) {
        var currentTime = Date.now();
        if (currentTime - clock > 16) {
            clock = currentTime;
            callback(currentTime);
        } else setTimeout(function() {
            return polyfill(callback);
        }, 0);
    };
}();
var index = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || polyfill;
exports.default = index;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["4PWRH","aitAD"], "aitAD", "parcelRequireea04")

//# sourceMappingURL=index.e5ac7667.js.map
