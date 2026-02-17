// Compiles a dart2wasm-generated main module from `source` which can then
// instantiatable via the `instantiate` method.
//
// `source` needs to be a `Response` object (or promise thereof) e.g. created
// via the `fetch()` JS API.
export async function compileStreaming(source) {
  const builtins = {builtins: ['js-string']};
  return new CompiledApp(
      await WebAssembly.compileStreaming(source, builtins), builtins);
}

// Compiles a dart2wasm-generated wasm modules from `bytes` which is then
// instantiatable via the `instantiate` method.
export async function compile(bytes) {
  const builtins = {builtins: ['js-string']};
  return new CompiledApp(await WebAssembly.compile(bytes, builtins), builtins);
}

// DEPRECATED: Please use `compile` or `compileStreaming` to get a compiled app,
// use `instantiate` method to get an instantiated app and then call
// `invokeMain` to invoke the main function.
export async function instantiate(modulePromise, importObjectPromise) {
  var moduleOrCompiledApp = await modulePromise;
  if (!(moduleOrCompiledApp instanceof CompiledApp)) {
    moduleOrCompiledApp = new CompiledApp(moduleOrCompiledApp);
  }
  const instantiatedApp = await moduleOrCompiledApp.instantiate(await importObjectPromise);
  return instantiatedApp.instantiatedModule;
}

// DEPRECATED: Please use `compile` or `compileStreaming` to get a compiled app,
// use `instantiate` method to get an instantiated app and then call
// `invokeMain` to invoke the main function.
export const invoke = (moduleInstance, ...args) => {
  moduleInstance.exports.$invokeMain(args);
}

class CompiledApp {
  constructor(module, builtins) {
    this.module = module;
    this.builtins = builtins;
  }

  // The second argument is an options object containing:
  // `loadDeferredWasm` is a JS function that takes a module name matching a
  //   wasm file produced by the dart2wasm compiler and returns the bytes to
  //   load the module. These bytes can be in either a format supported by
  //   `WebAssembly.compile` or `WebAssembly.compileStreaming`.
  // `loadDynamicModule` is a JS function that takes two string names matching,
  //   in order, a wasm file produced by the dart2wasm compiler during dynamic
  //   module compilation and a corresponding js file produced by the same
  //   compilation. It should return a JS Array containing 2 elements. The first
  //   should be the bytes for the wasm module in a format supported by
  //   `WebAssembly.compile` or `WebAssembly.compileStreaming`. The second
  //   should be the result of using the JS 'import' API on the js file path.
  async instantiate(additionalImports, {loadDeferredWasm, loadDynamicModule} = {}) {
    let dartInstance;

    // Prints to the console
    function printToConsole(value) {
      if (typeof dartPrint == "function") {
        dartPrint(value);
        return;
      }
      if (typeof console == "object" && typeof console.log != "undefined") {
        console.log(value);
        return;
      }
      if (typeof print == "function") {
        print(value);
        return;
      }

      throw "Unable to print message: " + value;
    }

    // A special symbol attached to functions that wrap Dart functions.
    const jsWrappedDartFunctionSymbol = Symbol("JSWrappedDartFunction");

    function finalizeWrapper(dartFunction, wrapped) {
      wrapped.dartFunction = dartFunction;
      wrapped[jsWrappedDartFunctionSymbol] = true;
      return wrapped;
    }

    // Imports
    const dart2wasm = {
            _3: (o, t) => typeof o === t,
      _4: (o, c) => o instanceof c,
      _5: o => Object.keys(o),
      _8: (o, a) => o + a,
      _18: (o, a) => o == a,
      _35: () => new Array(),
      _36: x0 => new Array(x0),
      _38: x0 => x0.length,
      _40: (x0,x1) => x0[x1],
      _41: (x0,x1,x2) => { x0[x1] = x2 },
      _43: x0 => new Promise(x0),
      _45: (x0,x1,x2) => new DataView(x0,x1,x2),
      _47: x0 => new Int8Array(x0),
      _48: (x0,x1,x2) => new Uint8Array(x0,x1,x2),
      _49: x0 => new Uint8Array(x0),
      _51: x0 => new Uint8ClampedArray(x0),
      _53: x0 => new Int16Array(x0),
      _55: x0 => new Uint16Array(x0),
      _57: x0 => new Int32Array(x0),
      _59: x0 => new Uint32Array(x0),
      _61: x0 => new Float32Array(x0),
      _63: x0 => new Float64Array(x0),
      _65: (x0,x1,x2) => x0.call(x1,x2),
      _67: (x0,x1) => x0.call(x1),
      _70: (decoder, codeUnits) => decoder.decode(codeUnits),
      _71: () => new TextDecoder("utf-8", {fatal: true}),
      _72: () => new TextDecoder("utf-8", {fatal: false}),
      _73: (s) => +s,
      _74: x0 => new Uint8Array(x0),
      _75: (x0,x1,x2) => x0.set(x1,x2),
      _76: (x0,x1) => x0.transferFromImageBitmap(x1),
      _77: x0 => x0.arrayBuffer(),
      _78: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._78(f,arguments.length,x0) }),
      _79: x0 => new window.FinalizationRegistry(x0),
      _80: (x0,x1,x2,x3) => x0.register(x1,x2,x3),
      _81: (x0,x1) => x0.unregister(x1),
      _82: (x0,x1,x2) => x0.slice(x1,x2),
      _83: (x0,x1) => x0.decode(x1),
      _84: (x0,x1) => x0.segment(x1),
      _85: () => new TextDecoder(),
      _86: (x0,x1) => x0.get(x1),
      _87: x0 => x0.buffer,
      _88: x0 => x0.wasmMemory,
      _89: () => globalThis.window._flutter_skwasmInstance,
      _90: x0 => x0.rasterStartMilliseconds,
      _91: x0 => x0.rasterEndMilliseconds,
      _92: x0 => x0.imageBitmaps,
      _196: x0 => x0.stopPropagation(),
      _197: x0 => x0.preventDefault(),
      _199: x0 => x0.remove(),
      _200: (x0,x1) => x0.append(x1),
      _201: (x0,x1,x2,x3) => x0.addEventListener(x1,x2,x3),
      _246: x0 => x0.unlock(),
      _247: x0 => x0.getReader(),
      _248: (x0,x1,x2) => x0.addEventListener(x1,x2),
      _249: (x0,x1,x2) => x0.removeEventListener(x1,x2),
      _250: (x0,x1) => x0.item(x1),
      _251: x0 => x0.next(),
      _252: x0 => x0.now(),
      _253: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._253(f,arguments.length,x0) }),
      _254: (x0,x1) => x0.addListener(x1),
      _255: (x0,x1) => x0.removeListener(x1),
      _256: (x0,x1) => x0.matchMedia(x1),
      _257: (x0,x1) => x0.revokeObjectURL(x1),
      _258: x0 => x0.close(),
      _259: (x0,x1,x2,x3,x4) => ({type: x0,data: x1,premultiplyAlpha: x2,colorSpaceConversion: x3,preferAnimation: x4}),
      _260: x0 => new window.ImageDecoder(x0),
      _261: x0 => ({frameIndex: x0}),
      _262: (x0,x1) => x0.decode(x1),
      _263: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._263(f,arguments.length,x0) }),
      _264: (x0,x1) => x0.getModifierState(x1),
      _265: (x0,x1) => x0.removeProperty(x1),
      _266: (x0,x1) => x0.prepend(x1),
      _267: x0 => new Intl.Locale(x0),
      _268: x0 => x0.disconnect(),
      _269: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._269(f,arguments.length,x0) }),
      _270: (x0,x1) => x0.getAttribute(x1),
      _271: (x0,x1) => x0.contains(x1),
      _272: (x0,x1) => x0.querySelector(x1),
      _273: x0 => x0.blur(),
      _274: x0 => x0.hasFocus(),
      _275: (x0,x1,x2) => x0.insertBefore(x1,x2),
      _276: (x0,x1) => x0.hasAttribute(x1),
      _277: (x0,x1) => x0.getModifierState(x1),
      _278: (x0,x1) => x0.createTextNode(x1),
      _279: (x0,x1) => x0.appendChild(x1),
      _280: (x0,x1) => x0.removeAttribute(x1),
      _281: x0 => x0.getBoundingClientRect(),
      _282: (x0,x1) => x0.observe(x1),
      _283: x0 => x0.disconnect(),
      _284: (x0,x1) => x0.closest(x1),
      _707: () => globalThis.window.flutterConfiguration,
      _709: x0 => x0.assetBase,
      _714: x0 => x0.canvasKitMaximumSurfaces,
      _715: x0 => x0.debugShowSemanticsNodes,
      _716: x0 => x0.hostElement,
      _717: x0 => x0.multiViewEnabled,
      _718: x0 => x0.nonce,
      _720: x0 => x0.fontFallbackBaseUrl,
      _730: x0 => x0.console,
      _731: x0 => x0.devicePixelRatio,
      _732: x0 => x0.document,
      _733: x0 => x0.history,
      _734: x0 => x0.innerHeight,
      _735: x0 => x0.innerWidth,
      _736: x0 => x0.location,
      _737: x0 => x0.navigator,
      _738: x0 => x0.visualViewport,
      _739: x0 => x0.performance,
      _741: x0 => x0.URL,
      _743: (x0,x1) => x0.getComputedStyle(x1),
      _744: x0 => x0.screen,
      _745: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._745(f,arguments.length,x0) }),
      _746: (x0,x1) => x0.requestAnimationFrame(x1),
      _751: (x0,x1) => x0.warn(x1),
      _753: (x0,x1) => x0.debug(x1),
      _754: x0 => globalThis.parseFloat(x0),
      _755: () => globalThis.window,
      _756: () => globalThis.Intl,
      _757: () => globalThis.Symbol,
      _758: (x0,x1,x2,x3,x4) => globalThis.createImageBitmap(x0,x1,x2,x3,x4),
      _760: x0 => x0.clipboard,
      _761: x0 => x0.maxTouchPoints,
      _762: x0 => x0.vendor,
      _763: x0 => x0.language,
      _764: x0 => x0.platform,
      _765: x0 => x0.userAgent,
      _766: (x0,x1) => x0.vibrate(x1),
      _767: x0 => x0.languages,
      _768: x0 => x0.documentElement,
      _769: (x0,x1) => x0.querySelector(x1),
      _772: (x0,x1) => x0.createElement(x1),
      _775: (x0,x1) => x0.createEvent(x1),
      _776: x0 => x0.activeElement,
      _779: x0 => x0.head,
      _780: x0 => x0.body,
      _782: (x0,x1) => { x0.title = x1 },
      _785: x0 => x0.visibilityState,
      _786: () => globalThis.document,
      _787: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._787(f,arguments.length,x0) }),
      _788: (x0,x1) => x0.dispatchEvent(x1),
      _796: x0 => x0.target,
      _798: x0 => x0.timeStamp,
      _799: x0 => x0.type,
      _801: (x0,x1,x2,x3) => x0.initEvent(x1,x2,x3),
      _807: x0 => x0.baseURI,
      _808: x0 => x0.firstChild,
      _809: (x0,x1) => { x0.innerText = x1 },
      _812: x0 => x0.parentElement,
      _814: (x0,x1) => { x0.textContent = x1 },
      _815: x0 => x0.parentNode,
      _816: x0 => x0.nextSibling,
      _817: (x0,x1) => x0.removeChild(x1),
      _818: x0 => x0.isConnected,
      _826: x0 => x0.clientHeight,
      _827: x0 => x0.clientWidth,
      _828: x0 => x0.offsetHeight,
      _829: x0 => x0.offsetWidth,
      _830: x0 => x0.id,
      _831: (x0,x1) => { x0.id = x1 },
      _834: (x0,x1) => { x0.spellcheck = x1 },
      _835: x0 => x0.tagName,
      _836: x0 => x0.style,
      _838: (x0,x1) => x0.querySelectorAll(x1),
      _839: (x0,x1,x2) => x0.setAttribute(x1,x2),
      _840: (x0,x1) => { x0.tabIndex = x1 },
      _841: x0 => x0.tabIndex,
      _842: (x0,x1) => x0.focus(x1),
      _843: x0 => x0.scrollTop,
      _844: (x0,x1) => { x0.scrollTop = x1 },
      _845: x0 => x0.scrollLeft,
      _846: (x0,x1) => { x0.scrollLeft = x1 },
      _847: x0 => x0.classList,
      _849: (x0,x1) => { x0.className = x1 },
      _851: (x0,x1) => x0.getElementsByClassName(x1),
      _852: x0 => x0.click(),
      _853: (x0,x1) => x0.attachShadow(x1),
      _856: x0 => x0.computedStyleMap(),
      _857: (x0,x1) => x0.get(x1),
      _861: (x0,x1,x2) => x0.supports(x1,x2),
      _862: () => globalThis.CSS,
      _863: (x0,x1) => x0.getPropertyValue(x1),
      _864: (x0,x1,x2,x3) => x0.setProperty(x1,x2,x3),
      _865: x0 => x0.offsetLeft,
      _866: x0 => x0.offsetTop,
      _867: x0 => x0.offsetParent,
      _869: (x0,x1) => { x0.name = x1 },
      _870: x0 => x0.content,
      _871: (x0,x1) => { x0.content = x1 },
      _875: (x0,x1) => { x0.src = x1 },
      _876: x0 => x0.naturalWidth,
      _877: x0 => x0.naturalHeight,
      _881: (x0,x1) => { x0.crossOrigin = x1 },
      _883: (x0,x1) => { x0.decoding = x1 },
      _884: x0 => x0.decode(),
      _889: (x0,x1) => { x0.nonce = x1 },
      _894: (x0,x1) => { x0.width = x1 },
      _896: (x0,x1) => { x0.height = x1 },
      _899: (x0,x1) => x0.getContext(x1),
      _960: x0 => x0.width,
      _961: x0 => x0.height,
      _963: (x0,x1) => x0.fetch(x1),
      _964: x0 => x0.status,
      _965: x0 => x0.headers,
      _966: x0 => x0.body,
      _967: x0 => x0.arrayBuffer(),
      _970: x0 => x0.read(),
      _971: x0 => x0.value,
      _972: x0 => x0.done,
      _979: x0 => x0.name,
      _980: x0 => x0.x,
      _981: x0 => x0.y,
      _984: x0 => x0.top,
      _985: x0 => x0.right,
      _986: x0 => x0.bottom,
      _987: x0 => x0.left,
      _997: x0 => x0.height,
      _998: x0 => x0.width,
      _999: x0 => x0.scale,
      _1000: (x0,x1) => { x0.value = x1 },
      _1003: (x0,x1) => { x0.placeholder = x1 },
      _1005: (x0,x1) => { x0.name = x1 },
      _1006: x0 => x0.selectionDirection,
      _1007: x0 => x0.selectionStart,
      _1008: x0 => x0.selectionEnd,
      _1011: x0 => x0.value,
      _1013: (x0,x1,x2) => x0.setSelectionRange(x1,x2),
      _1014: x0 => x0.readText(),
      _1015: (x0,x1) => x0.writeText(x1),
      _1017: x0 => x0.altKey,
      _1018: x0 => x0.code,
      _1019: x0 => x0.ctrlKey,
      _1020: x0 => x0.key,
      _1021: x0 => x0.keyCode,
      _1022: x0 => x0.location,
      _1023: x0 => x0.metaKey,
      _1024: x0 => x0.repeat,
      _1025: x0 => x0.shiftKey,
      _1026: x0 => x0.isComposing,
      _1028: x0 => x0.state,
      _1029: (x0,x1) => x0.go(x1),
      _1031: (x0,x1,x2,x3) => x0.pushState(x1,x2,x3),
      _1032: (x0,x1,x2,x3) => x0.replaceState(x1,x2,x3),
      _1033: x0 => x0.pathname,
      _1034: x0 => x0.search,
      _1035: x0 => x0.hash,
      _1039: x0 => x0.state,
      _1042: (x0,x1) => x0.createObjectURL(x1),
      _1044: x0 => new Blob(x0),
      _1046: x0 => new MutationObserver(x0),
      _1047: (x0,x1,x2) => x0.observe(x1,x2),
      _1048: f => finalizeWrapper(f, function(x0,x1) { return dartInstance.exports._1048(f,arguments.length,x0,x1) }),
      _1051: x0 => x0.attributeName,
      _1052: x0 => x0.type,
      _1053: x0 => x0.matches,
      _1054: x0 => x0.matches,
      _1058: x0 => x0.relatedTarget,
      _1060: x0 => x0.clientX,
      _1061: x0 => x0.clientY,
      _1062: x0 => x0.offsetX,
      _1063: x0 => x0.offsetY,
      _1066: x0 => x0.button,
      _1067: x0 => x0.buttons,
      _1068: x0 => x0.ctrlKey,
      _1072: x0 => x0.pointerId,
      _1073: x0 => x0.pointerType,
      _1074: x0 => x0.pressure,
      _1075: x0 => x0.tiltX,
      _1076: x0 => x0.tiltY,
      _1077: x0 => x0.getCoalescedEvents(),
      _1080: x0 => x0.deltaX,
      _1081: x0 => x0.deltaY,
      _1082: x0 => x0.wheelDeltaX,
      _1083: x0 => x0.wheelDeltaY,
      _1084: x0 => x0.deltaMode,
      _1091: x0 => x0.changedTouches,
      _1094: x0 => x0.clientX,
      _1095: x0 => x0.clientY,
      _1098: x0 => x0.data,
      _1101: (x0,x1) => { x0.disabled = x1 },
      _1103: (x0,x1) => { x0.type = x1 },
      _1104: (x0,x1) => { x0.max = x1 },
      _1105: (x0,x1) => { x0.min = x1 },
      _1106: x0 => x0.value,
      _1107: (x0,x1) => { x0.value = x1 },
      _1108: x0 => x0.disabled,
      _1109: (x0,x1) => { x0.disabled = x1 },
      _1111: (x0,x1) => { x0.placeholder = x1 },
      _1112: (x0,x1) => { x0.name = x1 },
      _1115: (x0,x1) => { x0.autocomplete = x1 },
      _1116: x0 => x0.selectionDirection,
      _1117: x0 => x0.selectionStart,
      _1119: x0 => x0.selectionEnd,
      _1122: (x0,x1,x2) => x0.setSelectionRange(x1,x2),
      _1123: (x0,x1) => x0.add(x1),
      _1126: (x0,x1) => { x0.noValidate = x1 },
      _1127: (x0,x1) => { x0.method = x1 },
      _1128: (x0,x1) => { x0.action = x1 },
      _1129: (x0,x1) => new OffscreenCanvas(x0,x1),
      _1135: (x0,x1) => x0.getContext(x1),
      _1137: x0 => x0.convertToBlob(),
      _1154: x0 => x0.orientation,
      _1155: x0 => x0.width,
      _1156: x0 => x0.height,
      _1157: (x0,x1) => x0.lock(x1),
      _1176: x0 => new ResizeObserver(x0),
      _1179: f => finalizeWrapper(f, function(x0,x1) { return dartInstance.exports._1179(f,arguments.length,x0,x1) }),
      _1187: x0 => x0.length,
      _1188: x0 => x0.iterator,
      _1189: x0 => x0.Segmenter,
      _1190: x0 => x0.v8BreakIterator,
      _1191: (x0,x1) => new Intl.Segmenter(x0,x1),
      _1194: x0 => x0.language,
      _1195: x0 => x0.script,
      _1196: x0 => x0.region,
      _1214: x0 => x0.done,
      _1215: x0 => x0.value,
      _1216: x0 => x0.index,
      _1220: (x0,x1) => new Intl.v8BreakIterator(x0,x1),
      _1221: (x0,x1) => x0.adoptText(x1),
      _1222: x0 => x0.first(),
      _1223: x0 => x0.next(),
      _1224: x0 => x0.current(),
      _1238: x0 => x0.hostElement,
      _1239: x0 => x0.viewConstraints,
      _1242: x0 => x0.maxHeight,
      _1243: x0 => x0.maxWidth,
      _1244: x0 => x0.minHeight,
      _1245: x0 => x0.minWidth,
      _1246: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1246(f,arguments.length,x0) }),
      _1247: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1247(f,arguments.length,x0) }),
      _1248: (x0,x1) => ({addView: x0,removeView: x1}),
      _1251: x0 => x0.loader,
      _1252: () => globalThis._flutter,
      _1253: (x0,x1) => x0.didCreateEngineInitializer(x1),
      _1254: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1254(f,arguments.length,x0) }),
      _1255: f => finalizeWrapper(f, function() { return dartInstance.exports._1255(f,arguments.length) }),
      _1256: (x0,x1) => ({initializeEngine: x0,autoStart: x1}),
      _1259: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1259(f,arguments.length,x0) }),
      _1260: x0 => ({runApp: x0}),
      _1262: f => finalizeWrapper(f, function(x0,x1) { return dartInstance.exports._1262(f,arguments.length,x0,x1) }),
      _1263: x0 => x0.length,
      _1264: () => globalThis.window.ImageDecoder,
      _1265: x0 => x0.tracks,
      _1267: x0 => x0.completed,
      _1269: x0 => x0.image,
      _1275: x0 => x0.displayWidth,
      _1276: x0 => x0.displayHeight,
      _1277: x0 => x0.duration,
      _1280: x0 => x0.ready,
      _1281: x0 => x0.selectedTrack,
      _1282: x0 => x0.repetitionCount,
      _1283: x0 => x0.frameCount,
      _1328: (x0,x1) => x0.createElement(x1),
      _1329: (x0,x1) => x0.querySelector(x1),
      _1330: (x0,x1) => x0.appendChild(x1),
      _1331: x0 => ({type: x0}),
      _1332: (x0,x1) => new Blob(x0,x1),
      _1333: x0 => globalThis.URL.createObjectURL(x0),
      _1335: (x0,x1,x2,x3) => x0.sendCommand(x1,x2,x3),
      _1336: () => globalThis.PdfiumWasmCommunicator,
      _1338: x0 => { globalThis.pdfiumWasmWorkerUrl = x0 },
      _1339: (x0,x1) => x0.writeText(x1),
      _1340: x0 => x0.preventDefault(),
      _1341: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1341(f,arguments.length,x0) }),
      _1342: (x0,x1,x2) => x0.addEventListener(x1,x2),
      _1343: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1343(f,arguments.length,x0) }),
      _1344: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1344(f,arguments.length,x0) }),
      _1345: (x0,x1) => x0.getElementById(x1),
      _1346: (x0,x1,x2,x3,x4,x5) => ({sitekey: x0,theme: x1,size: x2,callback: x3,errorCallback: x4,expiredCallback: x5}),
      _1347: (x0,x1,x2) => x0.render(x1,x2),
      _1348: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1348(f,arguments.length,x0) }),
      _1349: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1349(f,arguments.length,x0) }),
      _1350: f => finalizeWrapper(f, function() { return dartInstance.exports._1350(f,arguments.length) }),
      _1351: (x0,x1) => x0.remove(x1),
      _1352: () => globalThis.globalThis,
      _1353: x0 => x0.hcaptcha,
      _1355: (x0,x1,x2) => x0.setProperty(x1,x2),
      _1356: (x0,x1) => x0.deleteProperty(x1),
      _1358: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1358(f,arguments.length,x0) }),
      _1359: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1359(f,arguments.length,x0) }),
      _1360: (x0,x1,x2,x3,x4,x5) => ({sitekey: x0,theme: x1,size: x2,callback: x3,errorCallback: x4,expiredCallback: x5}),
      _1361: (x0,x1,x2) => x0.render(x1,x2),
      _1362: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1362(f,arguments.length,x0) }),
      _1363: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1363(f,arguments.length,x0) }),
      _1364: f => finalizeWrapper(f, function() { return dartInstance.exports._1364(f,arguments.length) }),
      _1365: (x0,x1) => x0.remove(x1),
      _1366: () => globalThis.globalThis,
      _1367: x0 => x0.turnstile,
      _1369: (x0,x1,x2) => x0.setProperty(x1,x2),
      _1370: (x0,x1) => x0.deleteProperty(x1),
      _1372: x0 => x0.createRange(),
      _1373: (x0,x1) => x0.selectNode(x1),
      _1374: x0 => x0.getSelection(),
      _1375: x0 => x0.removeAllRanges(),
      _1376: (x0,x1) => x0.addRange(x1),
      _1377: (x0,x1) => x0.createElement(x1),
      _1378: (x0,x1) => x0.append(x1),
      _1379: (x0,x1,x2) => x0.insertRule(x1,x2),
      _1380: (x0,x1) => x0.add(x1),
      _1381: x0 => x0.preventDefault(),
      _1382: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1382(f,arguments.length,x0) }),
      _1383: (x0,x1,x2) => x0.addEventListener(x1,x2),
      _1384: () => globalThis.window.navigator.userAgent,
      _1385: x0 => globalThis.URL.revokeObjectURL(x0),
      _1386: x0 => x0.remove(),
      _1388: (x0,x1,x2,x3,x4,x5) => x0.drawImage(x1,x2,x3,x4,x5),
      _1391: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1391(f,arguments.length,x0) }),
      _1392: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1392(f,arguments.length,x0) }),
      _1393: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1393(f,arguments.length,x0) }),
      _1394: (x0,x1) => x0.append(x1),
      _1395: (x0,x1,x2) => x0.setAttribute(x1,x2),
      _1396: (x0,x1) => x0.replaceChildren(x1),
      _1397: x0 => x0.click(),
      _1398: (x0,x1,x2,x3,x4,x5,x6,x7,x8,x9,x10,x11,x12,x13,x14,x15,x16,x17,x18,x19,x20,x21,x22,x23,x24) => ({aspectRatio: x0,background: x1,center: x2,checkCrossOrigin: x3,checkOrientation: x4,cropBoxMovable: x5,cropBoxResizable: x6,dragMode: x7,guides: x8,highlight: x9,initialAspectRatio: x10,minContainerHeight: x11,minContainerWidth: x12,minCropBoxHeight: x13,minCropBoxWidth: x14,modal: x15,movable: x16,rotatable: x17,scalable: x18,toggleDragModeOnDblclick: x19,viewMode: x20,wheelZoomRatio: x21,zoomOnTouch: x22,zoomOnWheel: x23,zoomable: x24}),
      _1399: (x0,x1) => new Cropper(x0,x1),
      _1400: () => ({}),
      _1401: (x0,x1) => x0.getCroppedCanvas(x1),
      _1402: x0 => x0.getCroppedCanvas(),
      _1403: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1403(f,arguments.length,x0) }),
      _1404: (x0,x1,x2) => x0.toBlob(x1,x2),
      _1405: (x0,x1) => x0.rotate(x1),
      _1406: (x0,x1) => x0.scale(x1),
      _1407: (x0,x1,x2,x3) => x0.addEventListener(x1,x2,x3),
      _1408: (x0,x1,x2,x3) => x0.removeEventListener(x1,x2,x3),
      _1410: (x0,x1) => x0.getAttribute(x1),
      _1414: (x0,x1,x2,x3) => x0.open(x1,x2,x3),
      _1416: (x0,x1) => x0.canShare(x1),
      _1417: (x0,x1) => x0.share(x1),
      _1418: (x0,x1) => ({title: x0,text: x1}),
      _1419: x0 => ({text: x0}),
      _1435: (x0,x1) => x0.item(x1),
      _1436: x0 => x0.decode(),
      _1437: (x0,x1,x2,x3) => x0.open(x1,x2,x3),
      _1438: (x0,x1,x2) => x0.setRequestHeader(x1,x2),
      _1439: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1439(f,arguments.length,x0) }),
      _1440: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1440(f,arguments.length,x0) }),
      _1441: x0 => x0.send(),
      _1442: () => new XMLHttpRequest(),
      _1452: (x0,x1) => x0.item(x1),
      _1453: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1453(f,arguments.length,x0) }),
      _1454: (x0,x1) => x0.getItem(x1),
      _1455: (x0,x1) => x0.removeItem(x1),
      _1456: (x0,x1,x2) => x0.setItem(x1,x2),
      _1471: (x0,x1) => x0.getContext(x1),
      _1472: (x0,x1,x2,x3,x4) => x0.clearRect(x1,x2,x3,x4),
      _1473: x0 => x0.close(),
      _1474: () => new FileReader(),
      _1476: (x0,x1) => x0.readAsArrayBuffer(x1),
      _1477: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1477(f,arguments.length,x0) }),
      _1478: (x0,x1,x2) => x0.removeEventListener(x1,x2),
      _1479: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1479(f,arguments.length,x0) }),
      _1480: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1480(f,arguments.length,x0) }),
      _1481: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1481(f,arguments.length,x0) }),
      _1482: (x0,x1) => x0.removeChild(x1),
      _1483: x0 => new Blob(x0),
      _1485: x0 => x0.deviceMemory,
      _1486: () => new SpeechSynthesisUtterance(),
      _1487: x0 => x0.pause(),
      _1488: x0 => x0.resume(),
      _1489: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1489(f,arguments.length,x0) }),
      _1490: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1490(f,arguments.length,x0) }),
      _1491: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1491(f,arguments.length,x0) }),
      _1492: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1492(f,arguments.length,x0) }),
      _1493: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1493(f,arguments.length,x0) }),
      _1494: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1494(f,arguments.length,x0) }),
      _1495: (x0,x1) => x0.speak(x1),
      _1496: x0 => x0.cancel(),
      _1497: x0 => x0.getVoices(),
      _1498: () => globalThis.Intl.DateTimeFormat(),
      _1499: x0 => x0.resolvedOptions(),
      _1500: () => globalThis.Intl.supportedValuesOf,
      _1502: x0 => x0.timeZone,
      _1503: (x0,x1) => x0.key(x1),
      _1504: (x0,x1,x2,x3,x4,x5,x6,x7) => x0.unwrapKey(x1,x2,x3,x4,x5,x6,x7),
      _1505: (x0,x1,x2,x3,x4,x5) => x0.importKey(x1,x2,x3,x4,x5),
      _1506: (x0,x1,x2,x3) => x0.generateKey(x1,x2,x3),
      _1507: (x0,x1,x2,x3,x4) => x0.wrapKey(x1,x2,x3,x4),
      _1508: (x0,x1,x2) => x0.exportKey(x1,x2),
      _1509: (x0,x1) => x0.getRandomValues(x1),
      _1510: (x0,x1,x2,x3) => x0.encrypt(x1,x2,x3),
      _1511: (x0,x1,x2,x3) => x0.decrypt(x1,x2,x3),
      _1518: Date.now,
      _1520: s => new Date(s * 1000).getTimezoneOffset() * 60,
      _1521: s => {
        if (!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(s)) {
          return NaN;
        }
        return parseFloat(s);
      },
      _1522: () => {
        let stackString = new Error().stack.toString();
        let frames = stackString.split('\n');
        let drop = 2;
        if (frames[0] === 'Error') {
            drop += 1;
        }
        return frames.slice(drop).join('\n');
      },
      _1523: () => typeof dartUseDateNowForTicks !== "undefined",
      _1524: () => 1000 * performance.now(),
      _1525: () => Date.now(),
      _1526: () => {
        // On browsers return `globalThis.location.href`
        if (globalThis.location != null) {
          return globalThis.location.href;
        }
        return null;
      },
      _1527: () => {
        return typeof process != "undefined" &&
               Object.prototype.toString.call(process) == "[object process]" &&
               process.platform == "win32"
      },
      _1528: () => new WeakMap(),
      _1529: (map, o) => map.get(o),
      _1530: (map, o, v) => map.set(o, v),
      _1531: x0 => new WeakRef(x0),
      _1532: x0 => x0.deref(),
      _1533: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1533(f,arguments.length,x0) }),
      _1534: x0 => new FinalizationRegistry(x0),
      _1535: (x0,x1,x2,x3) => x0.register(x1,x2,x3),
      _1537: (x0,x1) => x0.unregister(x1),
      _1539: () => globalThis.WeakRef,
      _1540: () => globalThis.FinalizationRegistry,
      _1542: x0 => x0.call(),
      _1543: s => JSON.stringify(s),
      _1544: s => printToConsole(s),
      _1545: (o, p, r) => o.replaceAll(p, () => r),
      _1546: (o, p, r) => o.replace(p, () => r),
      _1547: Function.prototype.call.bind(String.prototype.toLowerCase),
      _1548: s => s.toUpperCase(),
      _1549: s => s.trim(),
      _1550: s => s.trimLeft(),
      _1551: s => s.trimRight(),
      _1552: (string, times) => string.repeat(times),
      _1553: Function.prototype.call.bind(String.prototype.indexOf),
      _1554: (s, p, i) => s.lastIndexOf(p, i),
      _1555: (string, token) => string.split(token),
      _1556: Object.is,
      _1557: o => o instanceof Array,
      _1558: (a, i) => a.push(i),
      _1559: (a, i) => a.splice(i, 1)[0],
      _1561: (a, l) => a.length = l,
      _1562: a => a.pop(),
      _1563: (a, i) => a.splice(i, 1),
      _1564: (a, s) => a.join(s),
      _1565: (a, s, e) => a.slice(s, e),
      _1566: (a, s, e) => a.splice(s, e),
      _1567: (a, b) => a == b ? 0 : (a > b ? 1 : -1),
      _1568: a => a.length,
      _1569: (a, l) => a.length = l,
      _1570: (a, i) => a[i],
      _1571: (a, i, v) => a[i] = v,
      _1573: o => {
        if (o instanceof ArrayBuffer) return 0;
        if (globalThis.SharedArrayBuffer !== undefined &&
            o instanceof SharedArrayBuffer) {
          return 1;
        }
        return 2;
      },
      _1574: (o, offsetInBytes, lengthInBytes) => {
        var dst = new ArrayBuffer(lengthInBytes);
        new Uint8Array(dst).set(new Uint8Array(o, offsetInBytes, lengthInBytes));
        return new DataView(dst);
      },
      _1575: o => o instanceof DataView,
      _1576: o => o instanceof Uint8Array,
      _1577: (o, start, length) => new Uint8Array(o.buffer, o.byteOffset + start, length),
      _1578: o => o instanceof Int8Array,
      _1579: (o, start, length) => new Int8Array(o.buffer, o.byteOffset + start, length),
      _1580: o => o instanceof Uint8ClampedArray,
      _1581: (o, start, length) => new Uint8ClampedArray(o.buffer, o.byteOffset + start, length),
      _1582: o => o instanceof Uint16Array,
      _1583: (o, start, length) => new Uint16Array(o.buffer, o.byteOffset + start, length),
      _1584: o => o instanceof Int16Array,
      _1585: (o, start, length) => new Int16Array(o.buffer, o.byteOffset + start, length),
      _1586: o => o instanceof Uint32Array,
      _1587: (o, start, length) => new Uint32Array(o.buffer, o.byteOffset + start, length),
      _1588: o => o instanceof Int32Array,
      _1589: (o, start, length) => new Int32Array(o.buffer, o.byteOffset + start, length),
      _1591: (o, start, length) => new BigInt64Array(o.buffer, o.byteOffset + start, length),
      _1592: o => o instanceof Float32Array,
      _1593: (o, start, length) => new Float32Array(o.buffer, o.byteOffset + start, length),
      _1594: o => o instanceof Float64Array,
      _1595: (o, start, length) => new Float64Array(o.buffer, o.byteOffset + start, length),
      _1596: (t, s) => t.set(s),
      _1597: l => new DataView(new ArrayBuffer(l)),
      _1598: (o) => new DataView(o.buffer, o.byteOffset, o.byteLength),
      _1599: o => o.byteLength,
      _1600: o => o.buffer,
      _1601: o => o.byteOffset,
      _1602: Function.prototype.call.bind(Object.getOwnPropertyDescriptor(DataView.prototype, 'byteLength').get),
      _1603: (b, o) => new DataView(b, o),
      _1604: (b, o, l) => new DataView(b, o, l),
      _1605: Function.prototype.call.bind(DataView.prototype.getUint8),
      _1606: Function.prototype.call.bind(DataView.prototype.setUint8),
      _1607: Function.prototype.call.bind(DataView.prototype.getInt8),
      _1608: Function.prototype.call.bind(DataView.prototype.setInt8),
      _1609: Function.prototype.call.bind(DataView.prototype.getUint16),
      _1610: Function.prototype.call.bind(DataView.prototype.setUint16),
      _1611: Function.prototype.call.bind(DataView.prototype.getInt16),
      _1612: Function.prototype.call.bind(DataView.prototype.setInt16),
      _1613: Function.prototype.call.bind(DataView.prototype.getUint32),
      _1614: Function.prototype.call.bind(DataView.prototype.setUint32),
      _1615: Function.prototype.call.bind(DataView.prototype.getInt32),
      _1616: Function.prototype.call.bind(DataView.prototype.setInt32),
      _1619: Function.prototype.call.bind(DataView.prototype.getBigInt64),
      _1620: Function.prototype.call.bind(DataView.prototype.setBigInt64),
      _1621: Function.prototype.call.bind(DataView.prototype.getFloat32),
      _1622: Function.prototype.call.bind(DataView.prototype.setFloat32),
      _1623: Function.prototype.call.bind(DataView.prototype.getFloat64),
      _1624: Function.prototype.call.bind(DataView.prototype.setFloat64),
      _1637: (ms, c) =>
      setTimeout(() => dartInstance.exports.$invokeCallback(c),ms),
      _1638: (handle) => clearTimeout(handle),
      _1639: (ms, c) =>
      setInterval(() => dartInstance.exports.$invokeCallback(c), ms),
      _1640: (handle) => clearInterval(handle),
      _1641: (c) =>
      queueMicrotask(() => dartInstance.exports.$invokeCallback(c)),
      _1642: () => Date.now(),
      _1643: (s, m) => {
        try {
          return new RegExp(s, m);
        } catch (e) {
          return String(e);
        }
      },
      _1644: (x0,x1) => x0.exec(x1),
      _1645: (x0,x1) => x0.test(x1),
      _1646: x0 => x0.pop(),
      _1648: o => o === undefined,
      _1650: o => typeof o === 'function' && o[jsWrappedDartFunctionSymbol] === true,
      _1652: o => {
        const proto = Object.getPrototypeOf(o);
        return proto === Object.prototype || proto === null;
      },
      _1653: o => o instanceof RegExp,
      _1654: (l, r) => l === r,
      _1655: o => o,
      _1656: o => o,
      _1657: o => o,
      _1658: b => !!b,
      _1659: o => o.length,
      _1661: (o, i) => o[i],
      _1662: f => f.dartFunction,
      _1663: () => ({}),
      _1664: () => [],
      _1666: () => globalThis,
      _1667: (constructor, args) => {
        const factoryFunction = constructor.bind.apply(
            constructor, [null, ...args]);
        return new factoryFunction();
      },
      _1668: (o, p) => p in o,
      _1669: (o, p) => o[p],
      _1670: (o, p, v) => o[p] = v,
      _1671: (o, m, a) => o[m].apply(o, a),
      _1673: o => String(o),
      _1674: (p, s, f) => p.then(s, (e) => f(e, e === undefined)),
      _1675: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1675(f,arguments.length,x0) }),
      _1676: f => finalizeWrapper(f, function(x0,x1) { return dartInstance.exports._1676(f,arguments.length,x0,x1) }),
      _1677: o => {
        if (o === undefined) return 1;
        var type = typeof o;
        if (type === 'boolean') return 2;
        if (type === 'number') return 3;
        if (type === 'string') return 4;
        if (o instanceof Array) return 5;
        if (ArrayBuffer.isView(o)) {
          if (o instanceof Int8Array) return 6;
          if (o instanceof Uint8Array) return 7;
          if (o instanceof Uint8ClampedArray) return 8;
          if (o instanceof Int16Array) return 9;
          if (o instanceof Uint16Array) return 10;
          if (o instanceof Int32Array) return 11;
          if (o instanceof Uint32Array) return 12;
          if (o instanceof Float32Array) return 13;
          if (o instanceof Float64Array) return 14;
          if (o instanceof DataView) return 15;
        }
        if (o instanceof ArrayBuffer) return 16;
        // Feature check for `SharedArrayBuffer` before doing a type-check.
        if (globalThis.SharedArrayBuffer !== undefined &&
            o instanceof SharedArrayBuffer) {
            return 17;
        }
        if (o instanceof Promise) return 18;
        return 19;
      },
      _1678: o => [o],
      _1679: (o0, o1) => [o0, o1],
      _1680: (o0, o1, o2) => [o0, o1, o2],
      _1681: (o0, o1, o2, o3) => [o0, o1, o2, o3],
      _1682: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const getValue = dartInstance.exports.$wasmI8ArrayGet;
        for (let i = 0; i < length; i++) {
          jsArray[jsArrayOffset + i] = getValue(wasmArray, wasmArrayOffset + i);
        }
      },
      _1683: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const setValue = dartInstance.exports.$wasmI8ArraySet;
        for (let i = 0; i < length; i++) {
          setValue(wasmArray, wasmArrayOffset + i, jsArray[jsArrayOffset + i]);
        }
      },
      _1684: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const getValue = dartInstance.exports.$wasmI16ArrayGet;
        for (let i = 0; i < length; i++) {
          jsArray[jsArrayOffset + i] = getValue(wasmArray, wasmArrayOffset + i);
        }
      },
      _1685: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const setValue = dartInstance.exports.$wasmI16ArraySet;
        for (let i = 0; i < length; i++) {
          setValue(wasmArray, wasmArrayOffset + i, jsArray[jsArrayOffset + i]);
        }
      },
      _1686: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const getValue = dartInstance.exports.$wasmI32ArrayGet;
        for (let i = 0; i < length; i++) {
          jsArray[jsArrayOffset + i] = getValue(wasmArray, wasmArrayOffset + i);
        }
      },
      _1687: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const setValue = dartInstance.exports.$wasmI32ArraySet;
        for (let i = 0; i < length; i++) {
          setValue(wasmArray, wasmArrayOffset + i, jsArray[jsArrayOffset + i]);
        }
      },
      _1688: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const getValue = dartInstance.exports.$wasmF32ArrayGet;
        for (let i = 0; i < length; i++) {
          jsArray[jsArrayOffset + i] = getValue(wasmArray, wasmArrayOffset + i);
        }
      },
      _1689: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const setValue = dartInstance.exports.$wasmF32ArraySet;
        for (let i = 0; i < length; i++) {
          setValue(wasmArray, wasmArrayOffset + i, jsArray[jsArrayOffset + i]);
        }
      },
      _1690: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const getValue = dartInstance.exports.$wasmF64ArrayGet;
        for (let i = 0; i < length; i++) {
          jsArray[jsArrayOffset + i] = getValue(wasmArray, wasmArrayOffset + i);
        }
      },
      _1691: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const setValue = dartInstance.exports.$wasmF64ArraySet;
        for (let i = 0; i < length; i++) {
          setValue(wasmArray, wasmArrayOffset + i, jsArray[jsArrayOffset + i]);
        }
      },
      _1692: x0 => new ArrayBuffer(x0),
      _1693: s => {
        if (/[[\]{}()*+?.\\^$|]/.test(s)) {
            s = s.replace(/[[\]{}()*+?.\\^$|]/g, '\\$&');
        }
        return s;
      },
      _1694: x0 => x0.input,
      _1695: x0 => x0.index,
      _1696: x0 => x0.groups,
      _1697: x0 => x0.flags,
      _1698: x0 => x0.multiline,
      _1699: x0 => x0.ignoreCase,
      _1700: x0 => x0.unicode,
      _1701: x0 => x0.dotAll,
      _1702: (x0,x1) => { x0.lastIndex = x1 },
      _1703: (o, p) => p in o,
      _1704: (o, p) => o[p],
      _1705: (o, p, v) => o[p] = v,
      _1707: x0 => x0.exports,
      _1708: (x0,x1) => globalThis.WebAssembly.instantiateStreaming(x0,x1),
      _1709: x0 => x0.instance,
      _1711: x0 => new WebAssembly.Memory(x0),
      _1712: x0 => x0.buffer,
      _1715: x0 => x0.arrayBuffer(),
      _1717: x0 => x0.sqlite3_initialize,
      _1719: (x0,x1,x2,x3,x4) => x0.sqlite3_open_v2(x1,x2,x3,x4),
      _1720: (x0,x1) => x0.sqlite3_close_v2(x1),
      _1721: (x0,x1,x2) => x0.sqlite3_extended_result_codes(x1,x2),
      _1722: (x0,x1) => x0.sqlite3_extended_errcode(x1),
      _1723: (x0,x1) => x0.sqlite3_errmsg(x1),
      _1724: (x0,x1) => x0.sqlite3_errstr(x1),
      _1725: x0 => x0.sqlite3_error_offset,
      _1729: (x0,x1) => x0.sqlite3_last_insert_rowid(x1),
      _1730: (x0,x1) => x0.sqlite3_changes(x1),
      _1731: (x0,x1,x2,x3,x4,x5) => x0.sqlite3_exec(x1,x2,x3,x4,x5),
      _1734: (x0,x1,x2,x3,x4,x5,x6) => x0.sqlite3_prepare_v3(x1,x2,x3,x4,x5,x6),
      _1735: (x0,x1) => x0.sqlite3_finalize(x1),
      _1736: (x0,x1) => x0.sqlite3_step(x1),
      _1737: (x0,x1) => x0.sqlite3_reset(x1),
      _1738: (x0,x1) => x0.sqlite3_stmt_isexplain(x1),
      _1740: (x0,x1) => x0.sqlite3_column_count(x1),
      _1741: (x0,x1) => x0.sqlite3_bind_parameter_count(x1),
      _1743: (x0,x1,x2) => x0.sqlite3_column_name(x1,x2),
      _1744: (x0,x1,x2,x3,x4,x5) => x0.sqlite3_bind_blob64(x1,x2,x3,x4,x5),
      _1745: (x0,x1,x2,x3) => x0.sqlite3_bind_double(x1,x2,x3),
      _1746: (x0,x1,x2,x3) => x0.sqlite3_bind_int64(x1,x2,x3),
      _1747: (x0,x1,x2) => x0.sqlite3_bind_null(x1,x2),
      _1748: (x0,x1,x2,x3,x4,x5) => x0.sqlite3_bind_text(x1,x2,x3,x4,x5),
      _1749: (x0,x1,x2) => x0.sqlite3_column_blob(x1,x2),
      _1750: (x0,x1,x2) => x0.sqlite3_column_double(x1,x2),
      _1751: (x0,x1,x2) => x0.sqlite3_column_int64(x1,x2),
      _1752: (x0,x1,x2) => x0.sqlite3_column_text(x1,x2),
      _1753: (x0,x1,x2) => x0.sqlite3_column_bytes(x1,x2),
      _1754: (x0,x1,x2) => x0.sqlite3_column_type(x1,x2),
      _1755: (x0,x1) => x0.sqlite3_value_blob(x1),
      _1756: (x0,x1) => x0.sqlite3_value_double(x1),
      _1757: (x0,x1) => x0.sqlite3_value_type(x1),
      _1758: (x0,x1) => x0.sqlite3_value_int64(x1),
      _1759: (x0,x1) => x0.sqlite3_value_text(x1),
      _1760: (x0,x1) => x0.sqlite3_value_bytes(x1),
      _1763: (x0,x1) => x0.sqlite3_user_data(x1),
      _1764: (x0,x1,x2,x3,x4) => x0.sqlite3_result_blob64(x1,x2,x3,x4),
      _1765: (x0,x1,x2) => x0.sqlite3_result_double(x1,x2),
      _1766: (x0,x1,x2,x3) => x0.sqlite3_result_error(x1,x2,x3),
      _1767: (x0,x1,x2) => x0.sqlite3_result_int64(x1,x2),
      _1768: (x0,x1) => x0.sqlite3_result_null(x1),
      _1769: (x0,x1,x2,x3,x4) => x0.sqlite3_result_text(x1,x2,x3,x4),
      _1770: x0 => x0.sqlite3_result_subtype,
      _1789: (x0,x1) => x0.dart_sqlite3_malloc(x1),
      _1790: (x0,x1) => x0.dart_sqlite3_free(x1),
      _1791: (x0,x1,x2,x3) => x0.dart_sqlite3_register_vfs(x1,x2,x3),
      _1792: (x0,x1,x2,x3,x4,x5) => x0.dart_sqlite3_create_scalar_function(x1,x2,x3,x4,x5),
      _1795: x0 => x0.dart_sqlite3_updates,
      _1796: x0 => x0.dart_sqlite3_commits,
      _1797: x0 => x0.dart_sqlite3_rollbacks,
      _1801: x0 => ({initial: x0}),
      _1802: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1802(f,arguments.length,x0) }),
      _1803: f => finalizeWrapper(f, function(x0,x1,x2,x3,x4) { return dartInstance.exports._1803(f,arguments.length,x0,x1,x2,x3,x4) }),
      _1804: f => finalizeWrapper(f, function(x0,x1,x2) { return dartInstance.exports._1804(f,arguments.length,x0,x1,x2) }),
      _1805: f => finalizeWrapper(f, function(x0,x1,x2,x3) { return dartInstance.exports._1805(f,arguments.length,x0,x1,x2,x3) }),
      _1806: f => finalizeWrapper(f, function(x0,x1,x2,x3) { return dartInstance.exports._1806(f,arguments.length,x0,x1,x2,x3) }),
      _1807: f => finalizeWrapper(f, function(x0,x1,x2) { return dartInstance.exports._1807(f,arguments.length,x0,x1,x2) }),
      _1808: f => finalizeWrapper(f, function(x0,x1) { return dartInstance.exports._1808(f,arguments.length,x0,x1) }),
      _1809: f => finalizeWrapper(f, function(x0,x1) { return dartInstance.exports._1809(f,arguments.length,x0,x1) }),
      _1810: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1810(f,arguments.length,x0) }),
      _1811: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1811(f,arguments.length,x0) }),
      _1812: f => finalizeWrapper(f, function(x0,x1,x2,x3) { return dartInstance.exports._1812(f,arguments.length,x0,x1,x2,x3) }),
      _1813: f => finalizeWrapper(f, function(x0,x1,x2,x3) { return dartInstance.exports._1813(f,arguments.length,x0,x1,x2,x3) }),
      _1814: f => finalizeWrapper(f, function(x0,x1) { return dartInstance.exports._1814(f,arguments.length,x0,x1) }),
      _1815: f => finalizeWrapper(f, function(x0,x1) { return dartInstance.exports._1815(f,arguments.length,x0,x1) }),
      _1816: f => finalizeWrapper(f, function(x0,x1) { return dartInstance.exports._1816(f,arguments.length,x0,x1) }),
      _1817: f => finalizeWrapper(f, function(x0,x1) { return dartInstance.exports._1817(f,arguments.length,x0,x1) }),
      _1818: f => finalizeWrapper(f, function(x0,x1) { return dartInstance.exports._1818(f,arguments.length,x0,x1) }),
      _1819: f => finalizeWrapper(f, function(x0,x1) { return dartInstance.exports._1819(f,arguments.length,x0,x1) }),
      _1820: f => finalizeWrapper(f, function(x0,x1,x2) { return dartInstance.exports._1820(f,arguments.length,x0,x1,x2) }),
      _1821: f => finalizeWrapper(f, function(x0,x1,x2) { return dartInstance.exports._1821(f,arguments.length,x0,x1,x2) }),
      _1822: f => finalizeWrapper(f, function(x0,x1,x2) { return dartInstance.exports._1822(f,arguments.length,x0,x1,x2) }),
      _1823: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1823(f,arguments.length,x0) }),
      _1824: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1824(f,arguments.length,x0) }),
      _1825: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1825(f,arguments.length,x0) }),
      _1826: f => finalizeWrapper(f, function(x0,x1,x2,x3,x4) { return dartInstance.exports._1826(f,arguments.length,x0,x1,x2,x3,x4) }),
      _1827: f => finalizeWrapper(f, function(x0,x1,x2,x3,x4) { return dartInstance.exports._1827(f,arguments.length,x0,x1,x2,x3,x4) }),
      _1828: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1828(f,arguments.length,x0) }),
      _1829: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1829(f,arguments.length,x0) }),
      _1830: f => finalizeWrapper(f, function(x0,x1) { return dartInstance.exports._1830(f,arguments.length,x0,x1) }),
      _1831: f => finalizeWrapper(f, function(x0,x1) { return dartInstance.exports._1831(f,arguments.length,x0,x1) }),
      _1832: f => finalizeWrapper(f, function(x0,x1,x2) { return dartInstance.exports._1832(f,arguments.length,x0,x1,x2) }),
      _1834: (x0,x1,x2,x3) => x0.call(x1,x2,x3),
      _1839: x0 => new URL(x0),
      _1840: (x0,x1) => new URL(x0,x1),
      _1841: (x0,x1) => globalThis.fetch(x0,x1),
      _1842: (x0,x1,x2) => x0.postMessage(x1,x2),
      _1843: (x0,x1,x2) => x0.postMessage(x1,x2),
      _1845: (x0,x1) => ({i: x0,p: x1}),
      _1846: (x0,x1) => ({c: x0,r: x1}),
      _1847: x0 => x0.i,
      _1848: x0 => x0.p,
      _1849: x0 => x0.c,
      _1850: x0 => x0.r,
      _1851: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1851(f,arguments.length,x0) }),
      _1852: (x0,x1) => x0.postMessage(x1),
      _1853: x0 => x0.close(),
      _1855: x0 => new Worker(x0),
      _1857: x0 => x0.getDirectory(),
      _1858: x0 => ({create: x0}),
      _1859: (x0,x1,x2) => x0.getFileHandle(x1,x2),
      _1860: x0 => x0.createSyncAccessHandle(),
      _1861: x0 => x0.close(),
      _1864: x0 => x0.close(),
      _1867: (x0,x1,x2) => x0.open(x1,x2),
      _1873: x0 => x0.start(),
      _1874: x0 => x0.terminate(),
      _1875: (x0,x1) => new SharedWorker(x0,x1),
      _1876: () => new MessageChannel(),
      _1881: x0 => new SharedArrayBuffer(x0),
      _1882: x0 => ({at: x0}),
      _1883: x0 => x0.getSize(),
      _1884: (x0,x1) => x0.truncate(x1),
      _1885: x0 => x0.flush(),
      _1888: x0 => x0.synchronizationBuffer,
      _1889: x0 => x0.communicationBuffer,
      _1890: (x0,x1,x2,x3) => ({clientVersion: x0,root: x1,synchronizationBuffer: x2,communicationBuffer: x3}),
      _1891: (x0,x1) => globalThis.IDBKeyRange.bound(x0,x1),
      _1892: x0 => ({autoIncrement: x0}),
      _1893: (x0,x1,x2) => x0.createObjectStore(x1,x2),
      _1894: x0 => ({unique: x0}),
      _1895: (x0,x1,x2,x3) => x0.createIndex(x1,x2,x3),
      _1896: (x0,x1) => x0.createObjectStore(x1),
      _1897: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1897(f,arguments.length,x0) }),
      _1898: (x0,x1,x2) => x0.transaction(x1,x2),
      _1899: (x0,x1) => x0.objectStore(x1),
      _1901: (x0,x1) => x0.index(x1),
      _1902: x0 => x0.openKeyCursor(),
      _1903: (x0,x1) => x0.getKey(x1),
      _1904: (x0,x1) => ({name: x0,length: x1}),
      _1905: (x0,x1) => x0.put(x1),
      _1906: (x0,x1) => x0.get(x1),
      _1907: (x0,x1) => x0.openCursor(x1),
      _1908: x0 => globalThis.IDBKeyRange.only(x0),
      _1909: (x0,x1,x2) => x0.put(x1,x2),
      _1910: (x0,x1) => x0.update(x1),
      _1911: (x0,x1) => x0.delete(x1),
      _1912: x0 => x0.name,
      _1913: x0 => x0.length,
      _1916: x0 => x0.continue(),
      _1917: () => globalThis.indexedDB,
      _1918: () => globalThis.navigator,
      _1919: (x0,x1) => x0.read(x1),
      _1920: (x0,x1,x2) => x0.read(x1,x2),
      _1921: (x0,x1) => x0.write(x1),
      _1922: (x0,x1,x2) => x0.write(x1,x2),
      _1923: x0 => ({create: x0}),
      _1924: (x0,x1,x2) => x0.getDirectoryHandle(x1,x2),
      _1926: (x0,x1,x2) => globalThis.Atomics.wait(x0,x1,x2),
      _1928: (x0,x1,x2) => globalThis.Atomics.notify(x0,x1,x2),
      _1929: (x0,x1,x2) => globalThis.Atomics.store(x0,x1,x2),
      _1930: (x0,x1) => globalThis.Atomics.load(x0,x1),
      _1931: () => globalThis.Int32Array,
      _1933: () => globalThis.Uint8Array,
      _1935: () => globalThis.DataView,
      _1937: x0 => x0.byteLength,
      _1939: x0 => globalThis.BigInt(x0),
      _1940: x0 => globalThis.Number(x0),
      _1947: x0 => new BroadcastChannel(x0),
      _1948: x0 => globalThis.Array.isArray(x0),
      _1949: (x0,x1) => x0.postMessage(x1),
      _1951: (x0,x1) => ({kind: x0,table: x1}),
      _1952: x0 => x0.kind,
      _1953: x0 => x0.table,
      _1954: () => new XMLHttpRequest(),
      _1955: (x0,x1,x2,x3) => x0.open(x1,x2,x3),
      _1957: (x0,x1,x2) => x0.setRequestHeader(x1,x2),
      _1958: (x0,x1) => x0.send(x1),
      _1959: x0 => x0.send(),
      _1961: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1961(f,arguments.length,x0) }),
      _1962: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1962(f,arguments.length,x0) }),
      _2223: (x0,x1,x2) => x0.open(x1,x2),
      _2224: x0 => x0.abort(),
      _2225: x0 => x0.getAllResponseHeaders(),
      _2226: (x0,x1) => x0.item(x1),
      _2230: () => new AbortController(),
      _2231: x0 => x0.abort(),
      _2232: (x0,x1,x2,x3,x4,x5) => ({method: x0,headers: x1,body: x2,credentials: x3,redirect: x4,signal: x5}),
      _2233: (x0,x1) => globalThis.fetch(x0,x1),
      _2234: (x0,x1) => x0.get(x1),
      _2235: f => finalizeWrapper(f, function(x0,x1,x2) { return dartInstance.exports._2235(f,arguments.length,x0,x1,x2) }),
      _2236: (x0,x1) => x0.forEach(x1),
      _2237: x0 => x0.getReader(),
      _2238: x0 => x0.cancel(),
      _2239: x0 => x0.read(),
      _2240: x0 => x0.trustedTypes,
      _2241: (x0,x1) => { x0.src = x1 },
      _2242: (x0,x1) => x0.createScriptURL(x1),
      _2243: x0 => x0.nonce,
      _2244: (x0,x1) => x0.debug(x1),
      _2245: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._2245(f,arguments.length,x0) }),
      _2246: x0 => ({createScriptURL: x0}),
      _2247: (x0,x1,x2) => x0.createPolicy(x1,x2),
      _2248: (x0,x1) => x0.querySelectorAll(x1),
      _2249: (x0,x1) => x0.createImageBitmap(x1),
      _2431: (x0,x1) => { x0.fillColor = x1 },
      _2470: x0 => x0.random(),
      _2471: (x0,x1) => x0.getRandomValues(x1),
      _2472: () => globalThis.crypto,
      _2473: () => globalThis.Math,
      _2477: (x0,x1,x2) => x0.toDataURL(x1,x2),
      _2480: Function.prototype.call.bind(Number.prototype.toString),
      _2481: Function.prototype.call.bind(BigInt.prototype.toString),
      _2482: Function.prototype.call.bind(Number.prototype.toString),
      _2483: (d, digits) => d.toFixed(digits),
      _2492: () => globalThis.document,
      _2493: () => globalThis.window,
      _2498: (x0,x1) => { x0.height = x1 },
      _2500: (x0,x1) => { x0.width = x1 },
      _2503: x0 => x0.head,
      _2504: x0 => x0.classList,
      _2508: (x0,x1) => { x0.innerText = x1 },
      _2509: x0 => x0.style,
      _2511: x0 => x0.sheet,
      _2512: x0 => x0.src,
      _2513: (x0,x1) => { x0.src = x1 },
      _2514: x0 => x0.naturalWidth,
      _2515: x0 => x0.naturalHeight,
      _2522: x0 => x0.offsetX,
      _2523: x0 => x0.offsetY,
      _2524: x0 => x0.button,
      _2531: x0 => x0.status,
      _2532: (x0,x1) => { x0.responseType = x1 },
      _2534: x0 => x0.response,
      _2611: x0 => { globalThis.onGoogleLibraryLoad = x0 },
      _2612: f => finalizeWrapper(f, function() { return dartInstance.exports._2612(f,arguments.length) }),
      _2650: x0 => x0.readyState,
      _2652: (x0,x1) => { x0.timeout = x1 },
      _2654: (x0,x1) => { x0.withCredentials = x1 },
      _2655: x0 => x0.upload,
      _2656: x0 => x0.responseURL,
      _2657: x0 => x0.status,
      _2658: x0 => x0.statusText,
      _2660: (x0,x1) => { x0.responseType = x1 },
      _2661: x0 => x0.response,
      _2673: x0 => x0.loaded,
      _2674: x0 => x0.total,
      _2721: (x0,x1) => { x0.draggable = x1 },
      _2737: x0 => x0.style,
      _2750: (x0,x1) => { x0.oncancel = x1 },
      _2756: (x0,x1) => { x0.onchange = x1 },
      _2796: (x0,x1) => { x0.onerror = x1 },
      _2812: (x0,x1) => { x0.onload = x1 },
      _2936: (x0,x1) => { x0.nonce = x1 },
      _2990: x0 => x0.content,
      _3096: (x0,x1) => { x0.download = x1 },
      _3121: (x0,x1) => { x0.href = x1 },
      _3169: (x0,x1) => { x0.src = x1 },
      _3663: (x0,x1) => { x0.accept = x1 },
      _3677: x0 => x0.files,
      _3703: (x0,x1) => { x0.multiple = x1 },
      _3721: (x0,x1) => { x0.type = x1 },
      _3970: x0 => x0.src,
      _3971: (x0,x1) => { x0.src = x1 },
      _3973: (x0,x1) => { x0.type = x1 },
      _3977: (x0,x1) => { x0.async = x1 },
      _3979: (x0,x1) => { x0.defer = x1 },
      _3991: (x0,x1) => { x0.charset = x1 },
      _4016: (x0,x1) => { x0.width = x1 },
      _4018: (x0,x1) => { x0.height = x1 },
      _4438: () => globalThis.window,
      _4478: x0 => x0.document,
      _4481: x0 => x0.location,
      _4500: x0 => x0.navigator,
      _4755: x0 => x0.isSecureContext,
      _4758: x0 => x0.crypto,
      _4762: x0 => x0.trustedTypes,
      _4763: x0 => x0.sessionStorage,
      _4764: x0 => x0.localStorage,
      _4772: x0 => x0.href,
      _4823: x0 => x0.message,
      _4866: x0 => x0.clipboard,
      _4868: x0 => x0.geolocation,
      _4871: x0 => x0.mediaDevices,
      _4873: x0 => x0.permissions,
      _4874: x0 => x0.maxTouchPoints,
      _4881: x0 => x0.appCodeName,
      _4882: x0 => x0.appName,
      _4883: x0 => x0.appVersion,
      _4884: x0 => x0.platform,
      _4885: x0 => x0.product,
      _4886: x0 => x0.productSub,
      _4887: x0 => x0.userAgent,
      _4888: x0 => x0.vendor,
      _4889: x0 => x0.vendorSub,
      _4891: x0 => x0.language,
      _4892: x0 => x0.languages,
      _4893: x0 => x0.onLine,
      _4898: x0 => x0.hardwareConcurrency,
      _4900: x0 => x0.storage,
      _4920: x0 => x0.width,
      _4921: x0 => x0.height,
      _4937: x0 => x0.data,
      _4967: x0 => x0.port1,
      _4968: x0 => x0.port2,
      _4970: (x0,x1) => { x0.onmessage = x1 },
      _5048: x0 => x0.port,
      _5083: x0 => x0.length,
      _6985: x0 => x0.type,
      _6986: x0 => x0.target,
      _7026: x0 => x0.signal,
      _7035: x0 => x0.length,
      _7037: x0 => x0.length,
      _7077: x0 => x0.baseURI,
      _7083: x0 => x0.firstChild,
      _7094: () => globalThis.document,
      _7174: x0 => x0.body,
      _7176: x0 => x0.head,
      _7505: (x0,x1) => { x0.id = x1 },
      _7532: x0 => x0.children,
      _8851: x0 => x0.value,
      _8853: x0 => x0.done,
      _9016: x0 => x0.size,
      _9017: x0 => x0.type,
      _9023: x0 => x0.name,
      _9024: x0 => x0.lastModified,
      _9029: x0 => x0.length,
      _9034: x0 => x0.result,
      _9530: x0 => x0.url,
      _9532: x0 => x0.status,
      _9534: x0 => x0.statusText,
      _9535: x0 => x0.headers,
      _9536: x0 => x0.body,
      _10984: x0 => x0.result,
      _10985: x0 => x0.error,
      _10996: (x0,x1) => { x0.onupgradeneeded = x1 },
      _10998: x0 => x0.oldVersion,
      _11077: x0 => x0.key,
      _11078: x0 => x0.primaryKey,
      _11080: x0 => x0.value,
      _11538: (x0,x1) => { x0.alignItems = x1 },
      _11918: (x0,x1) => { x0.display = x1 },
      _12082: (x0,x1) => { x0.height = x1 },
      _12132: (x0,x1) => { x0.justifyContent = x1 },
      _12254: (x0,x1) => { x0.maxWidth = x1 },
      _12772: (x0,x1) => { x0.width = x1 },
      _13140: x0 => x0.name,
      _13141: x0 => x0.message,
      _13144: x0 => x0.subtle,
      _13848: () => globalThis.console,
      _13874: () => globalThis.speechSynthesis,
      _13875: (x0,x1) => { x0.lang = x1 },
      _13877: (x0,x1) => { x0.pitch = x1 },
      _13880: (x0,x1) => { x0.rate = x1 },
      _13882: (x0,x1) => { x0.text = x1 },
      _13883: (x0,x1) => { x0.voice = x1 },
      _13884: x0 => x0.voice,
      _13886: (x0,x1) => { x0.volume = x1 },
      _13887: (x0,x1) => { x0.onstart = x1 },
      _13888: (x0,x1) => { x0.onend = x1 },
      _13889: (x0,x1) => { x0.onpause = x1 },
      _13890: (x0,x1) => { x0.onresume = x1 },
      _13891: (x0,x1) => { x0.onerror = x1 },
      _13892: (x0,x1) => { x0.onboundary = x1 },
      _13894: x0 => x0.lang,
      _13895: x0 => x0.localService,
      _13896: x0 => x0.name,

    };

    const baseImports = {
      dart2wasm: dart2wasm,
      Math: Math,
      Date: Date,
      Object: Object,
      Array: Array,
      Reflect: Reflect,
      s: [
        "([ \r\n\t]+)|([!-\\[\\]-‧‪-퟿豈-￿][̀-ͯ]*|[\ud800-\udbff][\udc00-\udfff][̀-ͯ]*|\\\\verb\\*([^]).*?\\3|\\\\verb([^*a-zA-Z]).*?\\4|\\\\operatorname\\*|\\\\[a-zA-Z@]+[ \r\n\t]*|\\\\[^\ud800-\udfff])",
      ],
      S: new Proxy({}, { get(_, prop) { return prop; } }),

    };

    const jsStringPolyfill = {
      "charCodeAt": (s, i) => s.charCodeAt(i),
      "compare": (s1, s2) => {
        if (s1 < s2) return -1;
        if (s1 > s2) return 1;
        return 0;
      },
      "concat": (s1, s2) => s1 + s2,
      "equals": (s1, s2) => s1 === s2,
      "fromCharCode": (i) => String.fromCharCode(i),
      "length": (s) => s.length,
      "substring": (s, a, b) => s.substring(a, b),
      "fromCharCodeArray": (a, start, end) => {
        if (end <= start) return '';

        const read = dartInstance.exports.$wasmI16ArrayGet;
        let result = '';
        let index = start;
        const chunkLength = Math.min(end - index, 500);
        let array = new Array(chunkLength);
        while (index < end) {
          const newChunkLength = Math.min(end - index, 500);
          for (let i = 0; i < newChunkLength; i++) {
            array[i] = read(a, index++);
          }
          if (newChunkLength < chunkLength) {
            array = array.slice(0, newChunkLength);
          }
          result += String.fromCharCode(...array);
        }
        return result;
      },
      "intoCharCodeArray": (s, a, start) => {
        if (s === '') return 0;

        const write = dartInstance.exports.$wasmI16ArraySet;
        for (var i = 0; i < s.length; ++i) {
          write(a, start++, s.charCodeAt(i));
        }
        return s.length;
      },
      "test": (s) => typeof s == "string",
    };


    

    dartInstance = await WebAssembly.instantiate(this.module, {
      ...baseImports,
      ...additionalImports,
      
      "wasm:js-string": jsStringPolyfill,
    });

    return new InstantiatedApp(this, dartInstance);
  }
}

class InstantiatedApp {
  constructor(compiledApp, instantiatedModule) {
    this.compiledApp = compiledApp;
    this.instantiatedModule = instantiatedModule;
  }

  // Call the main function with the given arguments.
  invokeMain(...args) {
    this.instantiatedModule.exports.$invokeMain(args);
  }
}
