let wasm_bindgen = (function(exports) {
    let script_src;
    if (typeof document !== 'undefined' && document.currentScript !== null) {
        script_src = new URL(document.currentScript.src, location.href).toString();
    }

    class WorkerPool {
        static __wrap(ptr) {
            ptr = ptr >>> 0;
            const obj = Object.create(WorkerPool.prototype);
            obj.__wbg_ptr = ptr;
            WorkerPoolFinalization.register(obj, obj.__wbg_ptr, obj);
            return obj;
        }
        __destroy_into_raw() {
            const ptr = this.__wbg_ptr;
            this.__wbg_ptr = 0;
            WorkerPoolFinalization.unregister(this);
            return ptr;
        }
        free() {
            const ptr = this.__destroy_into_raw();
            wasm.__wbg_workerpool_free(ptr, 0);
        }
        /**
         * @param {number | null} [initial]
         * @param {string | null} [script_src]
         * @param {string | null} [worker_js_preamble]
         * @returns {WorkerPool}
         */
        static new(initial, script_src, worker_js_preamble) {
            var ptr0 = isLikeNone(script_src) ? 0 : passStringToWasm0(script_src, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len0 = WASM_VECTOR_LEN;
            var ptr1 = isLikeNone(worker_js_preamble) ? 0 : passStringToWasm0(worker_js_preamble, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len1 = WASM_VECTOR_LEN;
            const ret = wasm.workerpool_new(isLikeNone(initial) ? 0x100000001 : (initial) >>> 0, ptr0, len0, ptr1, len1);
            if (ret[2]) {
                throw takeFromExternrefTable0(ret[1]);
            }
            return WorkerPool.__wrap(ret[0]);
        }
        /**
         * Creates a new `WorkerPool` which immediately creates `initial` workers.
         *
         * The pool created here can be used over a long period of time, and it
         * will be initially primed with `initial` workers. Currently workers are
         * never released or gc'd until the whole pool is destroyed.
         *
         * # Errors
         *
         * Returns any error that may happen while a JS web worker is created and a
         * message is sent to it.
         * @param {number} initial
         * @param {string} script_src
         * @param {string} worker_js_preamble
         */
        constructor(initial, script_src, worker_js_preamble) {
            const ptr0 = passStringToWasm0(script_src, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len0 = WASM_VECTOR_LEN;
            const ptr1 = passStringToWasm0(worker_js_preamble, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            const ret = wasm.workerpool_new_raw(initial, ptr0, len0, ptr1, len1);
            if (ret[2]) {
                throw takeFromExternrefTable0(ret[1]);
            }
            this.__wbg_ptr = ret[0] >>> 0;
            WorkerPoolFinalization.register(this, this.__wbg_ptr, this);
            return this;
        }
    }
    if (Symbol.dispose) WorkerPool.prototype[Symbol.dispose] = WorkerPool.prototype.free;
    exports.WorkerPool = WorkerPool;

    /**
     * @param {number} call_id
     * @param {any} ptr_
     * @param {number} rust_vec_len_
     * @param {number} data_len_
     */
    function frb_dart_fn_deliver_output(call_id, ptr_, rust_vec_len_, data_len_) {
        wasm.frb_dart_fn_deliver_output(call_id, ptr_, rust_vec_len_, data_len_);
    }
    exports.frb_dart_fn_deliver_output = frb_dart_fn_deliver_output;

    /**
     * # Safety
     *
     * This should never be called manually.
     * @param {any} handle
     * @param {any} dart_handler_port
     * @returns {number}
     */
    function frb_dart_opaque_dart2rust_encode(handle, dart_handler_port) {
        const ret = wasm.frb_dart_opaque_dart2rust_encode(handle, dart_handler_port);
        return ret >>> 0;
    }
    exports.frb_dart_opaque_dart2rust_encode = frb_dart_opaque_dart2rust_encode;

    /**
     * @param {number} ptr
     */
    function frb_dart_opaque_drop_thread_box_persistent_handle(ptr) {
        wasm.frb_dart_opaque_drop_thread_box_persistent_handle(ptr);
    }
    exports.frb_dart_opaque_drop_thread_box_persistent_handle = frb_dart_opaque_drop_thread_box_persistent_handle;

    /**
     * @param {number} ptr
     * @returns {any}
     */
    function frb_dart_opaque_rust2dart_decode(ptr) {
        const ret = wasm.frb_dart_opaque_rust2dart_decode(ptr);
        return ret;
    }
    exports.frb_dart_opaque_rust2dart_decode = frb_dart_opaque_rust2dart_decode;

    /**
     * @returns {number}
     */
    function frb_get_rust_content_hash() {
        const ret = wasm.frb_get_rust_content_hash();
        return ret;
    }
    exports.frb_get_rust_content_hash = frb_get_rust_content_hash;

    /**
     * @param {number} func_id
     * @param {any} port_
     * @param {any} ptr_
     * @param {number} rust_vec_len_
     * @param {number} data_len_
     */
    function frb_pde_ffi_dispatcher_primary(func_id, port_, ptr_, rust_vec_len_, data_len_) {
        wasm.frb_pde_ffi_dispatcher_primary(func_id, port_, ptr_, rust_vec_len_, data_len_);
    }
    exports.frb_pde_ffi_dispatcher_primary = frb_pde_ffi_dispatcher_primary;

    /**
     * @param {number} func_id
     * @param {any} ptr_
     * @param {number} rust_vec_len_
     * @param {number} data_len_
     * @returns {any}
     */
    function frb_pde_ffi_dispatcher_sync(func_id, ptr_, rust_vec_len_, data_len_) {
        const ret = wasm.frb_pde_ffi_dispatcher_sync(func_id, ptr_, rust_vec_len_, data_len_);
        return ret;
    }
    exports.frb_pde_ffi_dispatcher_sync = frb_pde_ffi_dispatcher_sync;

    /**
     * ## Safety
     * This function reclaims a raw pointer created by [`TransferClosure`], and therefore
     * should **only** be used in conjunction with it.
     * Furthermore, the WASM module in the worker must have been initialized with the shared
     * memory from the host JS scope.
     * @param {number} payload
     * @param {any[]} transfer
     */
    function receive_transfer_closure(payload, transfer) {
        const ptr0 = passArrayJsValueToWasm0(transfer, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.receive_transfer_closure(payload, ptr0, len0);
        if (ret[1]) {
            throw takeFromExternrefTable0(ret[0]);
        }
    }
    exports.receive_transfer_closure = receive_transfer_closure;

    /**
     * @param {number} ptr
     */
    function rust_arc_decrement_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerExportBlock(ptr) {
        wasm.rust_arc_decrement_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerExportBlock(ptr);
    }
    exports.rust_arc_decrement_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerExportBlock = rust_arc_decrement_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerExportBlock;

    /**
     * @param {number} ptr
     */
    function rust_arc_decrement_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerFsrsAlgorithm(ptr) {
        wasm.rust_arc_decrement_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerFsrsAlgorithm(ptr);
    }
    exports.rust_arc_decrement_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerFsrsAlgorithm = rust_arc_decrement_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerFsrsAlgorithm;

    /**
     * @param {number} ptr
     */
    function rust_arc_decrement_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerPdfDocumentHandle(ptr) {
        wasm.rust_arc_decrement_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerPdfDocumentHandle(ptr);
    }
    exports.rust_arc_decrement_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerPdfDocumentHandle = rust_arc_decrement_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerPdfDocumentHandle;

    /**
     * @param {number} ptr
     */
    function rust_arc_decrement_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerTfidfEmbedder(ptr) {
        wasm.rust_arc_decrement_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerTfidfEmbedder(ptr);
    }
    exports.rust_arc_decrement_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerTfidfEmbedder = rust_arc_decrement_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerTfidfEmbedder;

    /**
     * @param {number} ptr
     */
    function rust_arc_decrement_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerTypstEngine(ptr) {
        wasm.rust_arc_decrement_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerTypstEngine(ptr);
    }
    exports.rust_arc_decrement_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerTypstEngine = rust_arc_decrement_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerTypstEngine;

    /**
     * @param {number} ptr
     */
    function rust_arc_decrement_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerVectorStorage(ptr) {
        wasm.rust_arc_decrement_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerVectorStorage(ptr);
    }
    exports.rust_arc_decrement_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerVectorStorage = rust_arc_decrement_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerVectorStorage;

    /**
     * @param {number} ptr
     */
    function rust_arc_increment_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerExportBlock(ptr) {
        wasm.rust_arc_increment_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerExportBlock(ptr);
    }
    exports.rust_arc_increment_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerExportBlock = rust_arc_increment_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerExportBlock;

    /**
     * @param {number} ptr
     */
    function rust_arc_increment_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerFsrsAlgorithm(ptr) {
        wasm.rust_arc_increment_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerFsrsAlgorithm(ptr);
    }
    exports.rust_arc_increment_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerFsrsAlgorithm = rust_arc_increment_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerFsrsAlgorithm;

    /**
     * @param {number} ptr
     */
    function rust_arc_increment_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerPdfDocumentHandle(ptr) {
        wasm.rust_arc_increment_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerPdfDocumentHandle(ptr);
    }
    exports.rust_arc_increment_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerPdfDocumentHandle = rust_arc_increment_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerPdfDocumentHandle;

    /**
     * @param {number} ptr
     */
    function rust_arc_increment_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerTfidfEmbedder(ptr) {
        wasm.rust_arc_increment_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerTfidfEmbedder(ptr);
    }
    exports.rust_arc_increment_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerTfidfEmbedder = rust_arc_increment_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerTfidfEmbedder;

    /**
     * @param {number} ptr
     */
    function rust_arc_increment_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerTypstEngine(ptr) {
        wasm.rust_arc_increment_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerTypstEngine(ptr);
    }
    exports.rust_arc_increment_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerTypstEngine = rust_arc_increment_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerTypstEngine;

    /**
     * @param {number} ptr
     */
    function rust_arc_increment_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerVectorStorage(ptr) {
        wasm.rust_arc_increment_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerVectorStorage(ptr);
    }
    exports.rust_arc_increment_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerVectorStorage = rust_arc_increment_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerVectorStorage;

    function wasm_start_callback() {
        wasm.wasm_start_callback();
    }
    exports.wasm_start_callback = wasm_start_callback;

    /**
     * @param {string} expression
     * @param {string} variable
     * @returns {any}
     */
    function wire__crate__api__cas__cas_contains_variable(expression, variable) {
        const ptr0 = passStringToWasm0(expression, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(variable, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        const ret = wasm.wire__crate__api__cas__cas_contains_variable(ptr0, len0, ptr1, len1);
        return ret;
    }
    exports.wire__crate__api__cas__cas_contains_variable = wire__crate__api__cas__cas_contains_variable;

    /**
     * @param {string} expression
     * @param {string} variable
     * @returns {any}
     */
    function wire__crate__api__cas__cas_differentiate(expression, variable) {
        const ptr0 = passStringToWasm0(expression, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(variable, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        const ret = wasm.wire__crate__api__cas__cas_differentiate(ptr0, len0, ptr1, len1);
        return ret;
    }
    exports.wire__crate__api__cas__cas_differentiate = wire__crate__api__cas__cas_differentiate;

    /**
     * @param {string} expression
     * @param {string} vars_json
     * @returns {any}
     */
    function wire__crate__api__cas__cas_evaluate(expression, vars_json) {
        const ptr0 = passStringToWasm0(expression, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(vars_json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        const ret = wasm.wire__crate__api__cas__cas_evaluate(ptr0, len0, ptr1, len1);
        return ret;
    }
    exports.wire__crate__api__cas__cas_evaluate = wire__crate__api__cas__cas_evaluate;

    /**
     * @param {string} expression
     * @returns {any}
     */
    function wire__crate__api__cas__cas_get_variables(expression) {
        const ptr0 = passStringToWasm0(expression, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.wire__crate__api__cas__cas_get_variables(ptr0, len0);
        return ret;
    }
    exports.wire__crate__api__cas__cas_get_variables = wire__crate__api__cas__cas_get_variables;

    /**
     * @param {string} expression
     * @param {string} variable
     * @returns {any}
     */
    function wire__crate__api__cas__cas_integrate(expression, variable) {
        const ptr0 = passStringToWasm0(expression, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(variable, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        const ret = wasm.wire__crate__api__cas__cas_integrate(ptr0, len0, ptr1, len1);
        return ret;
    }
    exports.wire__crate__api__cas__cas_integrate = wire__crate__api__cas__cas_integrate;

    /**
     * @param {string} matrix_str
     * @returns {any}
     */
    function wire__crate__api__cas__cas_matrix_determinant(matrix_str) {
        const ptr0 = passStringToWasm0(matrix_str, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.wire__crate__api__cas__cas_matrix_determinant(ptr0, len0);
        return ret;
    }
    exports.wire__crate__api__cas__cas_matrix_determinant = wire__crate__api__cas__cas_matrix_determinant;

    /**
     * @param {string} matrix_str
     * @returns {any}
     */
    function wire__crate__api__cas__cas_matrix_eigenvalues(matrix_str) {
        const ptr0 = passStringToWasm0(matrix_str, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.wire__crate__api__cas__cas_matrix_eigenvalues(ptr0, len0);
        return ret;
    }
    exports.wire__crate__api__cas__cas_matrix_eigenvalues = wire__crate__api__cas__cas_matrix_eigenvalues;

    /**
     * @param {string} matrix_str
     * @returns {any}
     */
    function wire__crate__api__cas__cas_matrix_inverse(matrix_str) {
        const ptr0 = passStringToWasm0(matrix_str, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.wire__crate__api__cas__cas_matrix_inverse(ptr0, len0);
        return ret;
    }
    exports.wire__crate__api__cas__cas_matrix_inverse = wire__crate__api__cas__cas_matrix_inverse;

    /**
     * @param {string} matrix_a
     * @param {string} matrix_b
     * @returns {any}
     */
    function wire__crate__api__cas__cas_matrix_multiply(matrix_a, matrix_b) {
        const ptr0 = passStringToWasm0(matrix_a, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(matrix_b, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        const ret = wasm.wire__crate__api__cas__cas_matrix_multiply(ptr0, len0, ptr1, len1);
        return ret;
    }
    exports.wire__crate__api__cas__cas_matrix_multiply = wire__crate__api__cas__cas_matrix_multiply;

    /**
     * @param {string} matrix_str
     * @returns {any}
     */
    function wire__crate__api__cas__cas_matrix_rank(matrix_str) {
        const ptr0 = passStringToWasm0(matrix_str, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.wire__crate__api__cas__cas_matrix_rank(ptr0, len0);
        return ret;
    }
    exports.wire__crate__api__cas__cas_matrix_rank = wire__crate__api__cas__cas_matrix_rank;

    /**
     * @param {string} matrix_str
     * @returns {any}
     */
    function wire__crate__api__cas__cas_matrix_rref(matrix_str) {
        const ptr0 = passStringToWasm0(matrix_str, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.wire__crate__api__cas__cas_matrix_rref(ptr0, len0);
        return ret;
    }
    exports.wire__crate__api__cas__cas_matrix_rref = wire__crate__api__cas__cas_matrix_rref;

    /**
     * @param {string} matrix_str
     * @returns {any}
     */
    function wire__crate__api__cas__cas_matrix_trace(matrix_str) {
        const ptr0 = passStringToWasm0(matrix_str, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.wire__crate__api__cas__cas_matrix_trace(ptr0, len0);
        return ret;
    }
    exports.wire__crate__api__cas__cas_matrix_trace = wire__crate__api__cas__cas_matrix_trace;

    /**
     * @param {string} matrix_str
     * @returns {any}
     */
    function wire__crate__api__cas__cas_matrix_transpose(matrix_str) {
        const ptr0 = passStringToWasm0(matrix_str, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.wire__crate__api__cas__cas_matrix_transpose(ptr0, len0);
        return ret;
    }
    exports.wire__crate__api__cas__cas_matrix_transpose = wire__crate__api__cas__cas_matrix_transpose;

    /**
     * @param {string} input
     * @returns {any}
     */
    function wire__crate__api__cas__cas_parse(input) {
        const ptr0 = passStringToWasm0(input, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.wire__crate__api__cas__cas_parse(ptr0, len0);
        return ret;
    }
    exports.wire__crate__api__cas__cas_parse = wire__crate__api__cas__cas_parse;

    /**
     * @param {string} input
     * @returns {any}
     */
    function wire__crate__api__cas__cas_simplify(input) {
        const ptr0 = passStringToWasm0(input, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.wire__crate__api__cas__cas_simplify(ptr0, len0);
        return ret;
    }
    exports.wire__crate__api__cas__cas_simplify = wire__crate__api__cas__cas_simplify;

    /**
     * @param {string} equation
     * @param {string} variable
     * @returns {any}
     */
    function wire__crate__api__cas__cas_solve(equation, variable) {
        const ptr0 = passStringToWasm0(equation, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(variable, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        const ret = wasm.wire__crate__api__cas__cas_solve(ptr0, len0, ptr1, len1);
        return ret;
    }
    exports.wire__crate__api__cas__cas_solve = wire__crate__api__cas__cas_solve;

    /**
     * @param {string} expression
     * @returns {any}
     */
    function wire__crate__api__cas__cas_to_latex(expression) {
        const ptr0 = passStringToWasm0(expression, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.wire__crate__api__cas__cas_to_latex(ptr0, len0);
        return ret;
    }
    exports.wire__crate__api__cas__cas_to_latex = wire__crate__api__cas__cas_to_latex;

    /**
     * @param {any} port_
     * @param {string} db_path
     * @param {string} user_id
     * @param {string} deck_id
     * @param {string} source_type
     * @param {string} source_id
     * @param {string | null | undefined} source_title
     * @param {string} extract_text
     * @param {string} highlight_color
     * @param {any} start_offset
     * @param {any} end_offset
     */
    function wire__crate__api__content__create_extract(port_, db_path, user_id, deck_id, source_type, source_id, source_title, extract_text, highlight_color, start_offset, end_offset) {
        const ptr0 = passStringToWasm0(db_path, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(user_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        const ptr2 = passStringToWasm0(deck_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len2 = WASM_VECTOR_LEN;
        const ptr3 = passStringToWasm0(source_type, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len3 = WASM_VECTOR_LEN;
        const ptr4 = passStringToWasm0(source_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len4 = WASM_VECTOR_LEN;
        var ptr5 = isLikeNone(source_title) ? 0 : passStringToWasm0(source_title, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len5 = WASM_VECTOR_LEN;
        const ptr6 = passStringToWasm0(extract_text, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len6 = WASM_VECTOR_LEN;
        const ptr7 = passStringToWasm0(highlight_color, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len7 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__content__create_extract(port_, ptr0, len0, ptr1, len1, ptr2, len2, ptr3, len3, ptr4, len4, ptr5, len5, ptr6, len6, ptr7, len7, start_offset, end_offset);
    }
    exports.wire__crate__api__content__create_extract = wire__crate__api__content__create_extract;

    /**
     * @param {any} port_
     * @param {string} db_path
     * @param {string} source_id
     */
    function wire__crate__api__content__get_extracts_by_source(port_, db_path, source_id) {
        const ptr0 = passStringToWasm0(db_path, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(source_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__content__get_extracts_by_source(port_, ptr0, len0, ptr1, len1);
    }
    exports.wire__crate__api__content__get_extracts_by_source = wire__crate__api__content__get_extracts_by_source;

    /**
     * @param {any} port_
     * @param {string} db_path
     * @param {string} uuid
     * @param {string} blocks_json
     */
    function wire__crate__api__content__update_document_content(port_, db_path, uuid, blocks_json) {
        const ptr0 = passStringToWasm0(db_path, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(uuid, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        const ptr2 = passStringToWasm0(blocks_json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len2 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__content__update_document_content(port_, ptr0, len0, ptr1, len1, ptr2, len2);
    }
    exports.wire__crate__api__content__update_document_content = wire__crate__api__content__update_document_content;

    /**
     * @param {any} port_
     * @param {string} json
     */
    function wire__crate__api__content__validate_block_json(port_, json) {
        const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__content__validate_block_json(port_, ptr0, len0);
    }
    exports.wire__crate__api__content__validate_block_json = wire__crate__api__content__validate_block_json;

    /**
     * @param {any} port_
     * @param {any} blocks
     */
    function wire__crate__api__converters__blocks_to_markdown(port_, blocks) {
        wasm.wire__crate__api__converters__blocks_to_markdown(port_, blocks);
    }
    exports.wire__crate__api__converters__blocks_to_markdown = wire__crate__api__converters__blocks_to_markdown;

    /**
     * @param {any} port_
     * @param {string} db_path
     * @param {string} user_id
     * @param {string} source_id
     * @param {string} title
     * @param {string} markdown
     */
    function wire__crate__api__converters__import_book_chapter_from_markdown(port_, db_path, user_id, source_id, title, markdown) {
        const ptr0 = passStringToWasm0(db_path, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(user_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        const ptr2 = passStringToWasm0(source_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len2 = WASM_VECTOR_LEN;
        const ptr3 = passStringToWasm0(title, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len3 = WASM_VECTOR_LEN;
        const ptr4 = passStringToWasm0(markdown, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len4 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__converters__import_book_chapter_from_markdown(port_, ptr0, len0, ptr1, len1, ptr2, len2, ptr3, len3, ptr4, len4);
    }
    exports.wire__crate__api__converters__import_book_chapter_from_markdown = wire__crate__api__converters__import_book_chapter_from_markdown;

    /**
     * @param {any} port_
     * @param {string} markdown
     */
    function wire__crate__api__converters__markdown_to_blocks(port_, markdown) {
        const ptr0 = passStringToWasm0(markdown, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__converters__markdown_to_blocks(port_, ptr0, len0);
    }
    exports.wire__crate__api__converters__markdown_to_blocks = wire__crate__api__converters__markdown_to_blocks;

    /**
     * @param {any} port_
     * @param {string} text
     */
    function wire__crate__api__count_words(port_, text) {
        const ptr0 = passStringToWasm0(text, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__count_words(port_, ptr0, len0);
    }
    exports.wire__crate__api__count_words = wire__crate__api__count_words;

    /**
     * @param {any} port_
     * @param {any} dim
     */
    function wire__crate__api__embeddings__embeddings_init(port_, dim) {
        wasm.wire__crate__api__embeddings__embeddings_init(port_, dim);
    }
    exports.wire__crate__api__embeddings__embeddings_init = wire__crate__api__embeddings__embeddings_init;

    /**
     * @param {any} port_
     */
    function wire__crate__api__embeddings__embeddings_is_initialized(port_) {
        wasm.wire__crate__api__embeddings__embeddings_is_initialized(port_);
    }
    exports.wire__crate__api__embeddings__embeddings_is_initialized = wire__crate__api__embeddings__embeddings_is_initialized;

    /**
     * @param {any} port_
     */
    function wire__crate__api__embeddings__embeddings_shutdown(port_) {
        wasm.wire__crate__api__embeddings__embeddings_shutdown(port_);
    }
    exports.wire__crate__api__embeddings__embeddings_shutdown = wire__crate__api__embeddings__embeddings_shutdown;

    /**
     * @param {any} port_
     * @param {string} text
     */
    function wire__crate__api__embeddings__generate_embedding(port_, text) {
        const ptr0 = passStringToWasm0(text, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__embeddings__generate_embedding(port_, ptr0, len0);
    }
    exports.wire__crate__api__embeddings__generate_embedding = wire__crate__api__embeddings__generate_embedding;

    /**
     * @param {any} port_
     * @param {any} texts
     */
    function wire__crate__api__embeddings__generate_embeddings_batch(port_, texts) {
        wasm.wire__crate__api__embeddings__generate_embeddings_batch(port_, texts);
    }
    exports.wire__crate__api__embeddings__generate_embeddings_batch = wire__crate__api__embeddings__generate_embeddings_batch;

    /**
     * @param {any} port_
     */
    function wire__crate__api__embeddings__get_embedding_dimension(port_) {
        wasm.wire__crate__api__embeddings__get_embedding_dimension(port_);
    }
    exports.wire__crate__api__embeddings__get_embedding_dimension = wire__crate__api__embeddings__get_embedding_dimension;

    /**
     * @param {any} port_
     * @param {any} that
     * @param {string} text
     */
    function wire__crate__api__embeddings__tfidf__TfidfEmbedder_add_document(port_, that, text) {
        const ptr0 = passStringToWasm0(text, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__embeddings__tfidf__TfidfEmbedder_add_document(port_, that, ptr0, len0);
    }
    exports.wire__crate__api__embeddings__tfidf__TfidfEmbedder_add_document = wire__crate__api__embeddings__tfidf__TfidfEmbedder_add_document;

    /**
     * @param {any} port_
     * @param {any} that
     */
    function wire__crate__api__embeddings__tfidf__TfidfEmbedder_dimension(port_, that) {
        wasm.wire__crate__api__embeddings__tfidf__TfidfEmbedder_dimension(port_, that);
    }
    exports.wire__crate__api__embeddings__tfidf__TfidfEmbedder_dimension = wire__crate__api__embeddings__tfidf__TfidfEmbedder_dimension;

    /**
     * @param {any} port_
     * @param {any} that
     * @param {string} text
     */
    function wire__crate__api__embeddings__tfidf__TfidfEmbedder_embed(port_, that, text) {
        const ptr0 = passStringToWasm0(text, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__embeddings__tfidf__TfidfEmbedder_embed(port_, that, ptr0, len0);
    }
    exports.wire__crate__api__embeddings__tfidf__TfidfEmbedder_embed = wire__crate__api__embeddings__tfidf__TfidfEmbedder_embed;

    /**
     * @param {any} port_
     * @param {any} dim
     */
    function wire__crate__api__embeddings__tfidf__TfidfEmbedder_new(port_, dim) {
        wasm.wire__crate__api__embeddings__tfidf__TfidfEmbedder_new(port_, dim);
    }
    exports.wire__crate__api__embeddings__tfidf__TfidfEmbedder_new = wire__crate__api__embeddings__tfidf__TfidfEmbedder_new;

    /**
     * @param {any} port_
     */
    function wire__crate__api__embeddings__tokenizer__simple_tokenizer_default(port_) {
        wasm.wire__crate__api__embeddings__tokenizer__simple_tokenizer_default(port_);
    }
    exports.wire__crate__api__embeddings__tokenizer__simple_tokenizer_default = wire__crate__api__embeddings__tokenizer__simple_tokenizer_default;

    /**
     * @param {any} port_
     */
    function wire__crate__api__embeddings__tokenizer__simple_tokenizer_new(port_) {
        wasm.wire__crate__api__embeddings__tokenizer__simple_tokenizer_new(port_);
    }
    exports.wire__crate__api__embeddings__tokenizer__simple_tokenizer_new = wire__crate__api__embeddings__tokenizer__simple_tokenizer_new;

    /**
     * @param {any} port_
     * @param {any} that
     * @param {string} text
     */
    function wire__crate__api__embeddings__tokenizer__simple_tokenizer_tokenize(port_, that, text) {
        const ptr0 = passStringToWasm0(text, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__embeddings__tokenizer__simple_tokenizer_tokenize(port_, that, ptr0, len0);
    }
    exports.wire__crate__api__embeddings__tokenizer__simple_tokenizer_tokenize = wire__crate__api__embeddings__tokenizer__simple_tokenizer_tokenize;

    /**
     * @param {any} port_
     * @param {any} texts
     */
    function wire__crate__api__embeddings__update_vocabulary(port_, texts) {
        wasm.wire__crate__api__embeddings__update_vocabulary(port_, texts);
    }
    exports.wire__crate__api__embeddings__update_vocabulary = wire__crate__api__embeddings__update_vocabulary;

    /**
     * @param {any} port_
     * @param {string} document_json
     */
    function wire__crate__api__export__converter__parse_document(port_, document_json) {
        const ptr0 = passStringToWasm0(document_json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__export__converter__parse_document(port_, ptr0, len0);
    }
    exports.wire__crate__api__export__converter__parse_document = wire__crate__api__export__converter__parse_document;

    /**
     * @param {any} port_
     * @param {string} document_json
     * @param {any} metadata
     * @param {any} config
     */
    function wire__crate__api__export__export_document(port_, document_json, metadata, config) {
        const ptr0 = passStringToWasm0(document_json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__export__export_document(port_, ptr0, len0, metadata, config);
    }
    exports.wire__crate__api__export__export_document = wire__crate__api__export__export_document;

    /**
     * @param {any} port_
     * @param {string} document_json
     * @param {any} metadata
     * @param {number} template
     * @param {any} engine
     */
    function wire__crate__api__export__export_to_latex(port_, document_json, metadata, template, engine) {
        const ptr0 = passStringToWasm0(document_json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__export__export_to_latex(port_, ptr0, len0, metadata, template, engine);
    }
    exports.wire__crate__api__export__export_to_latex = wire__crate__api__export__export_to_latex;

    /**
     * @param {any} port_
     * @param {string} document_json
     * @param {any} metadata
     * @param {boolean} include_metadata
     * @param {boolean} include_title
     */
    function wire__crate__api__export__export_to_markdown(port_, document_json, metadata, include_metadata, include_title) {
        const ptr0 = passStringToWasm0(document_json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__export__export_to_markdown(port_, ptr0, len0, metadata, include_metadata, include_title);
    }
    exports.wire__crate__api__export__export_to_markdown = wire__crate__api__export__export_to_markdown;

    /**
     * @param {any} port_
     */
    function wire__crate__api__export__get_latex_templates(port_) {
        wasm.wire__crate__api__export__get_latex_templates(port_);
    }
    exports.wire__crate__api__export__get_latex_templates = wire__crate__api__export__get_latex_templates;

    /**
     * @param {any} port_
     * @param {string} text
     */
    function wire__crate__api__export__latex__blocks__escape_latex(port_, text) {
        const ptr0 = passStringToWasm0(text, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__export__latex__blocks__escape_latex(port_, ptr0, len0);
    }
    exports.wire__crate__api__export__latex__blocks__escape_latex = wire__crate__api__export__latex__blocks__escape_latex;

    /**
     * @param {any} port_
     * @param {any} block
     * @param {any} config
     */
    function wire__crate__api__export__latex__blocks__process_block(port_, block, config) {
        wasm.wire__crate__api__export__latex__blocks__process_block(port_, block, config);
    }
    exports.wire__crate__api__export__latex__blocks__process_block = wire__crate__api__export__latex__blocks__process_block;

    /**
     * @param {any} port_
     * @param {any} blocks
     * @param {any} metadata
     * @param {any} config
     */
    function wire__crate__api__export__latex__generate_latex(port_, blocks, metadata, config) {
        wasm.wire__crate__api__export__latex__generate_latex(port_, blocks, metadata, config);
    }
    exports.wire__crate__api__export__latex__generate_latex = wire__crate__api__export__latex__generate_latex;

    /**
     * @param {any} port_
     * @param {number} template
     * @param {number} font_size
     * @param {string} paper_size
     */
    function wire__crate__api__export__latex__templates__get_document_class(port_, template, font_size, paper_size) {
        const ptr0 = passStringToWasm0(paper_size, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__export__latex__templates__get_document_class(port_, template, font_size, ptr0, len0);
    }
    exports.wire__crate__api__export__latex__templates__get_document_class = wire__crate__api__export__latex__templates__get_document_class;

    /**
     * @param {any} port_
     * @param {number} template
     * @param {number} engine
     */
    function wire__crate__api__export__latex__templates__get_preamble(port_, template, engine) {
        wasm.wire__crate__api__export__latex__templates__get_preamble(port_, template, engine);
    }
    exports.wire__crate__api__export__latex__templates__get_preamble = wire__crate__api__export__latex__templates__get_preamble;

    /**
     * @param {any} port_
     * @param {any} blocks
     * @param {any} metadata
     * @param {any} config
     */
    function wire__crate__api__export__markdown__generate_markdown(port_, blocks, metadata, config) {
        wasm.wire__crate__api__export__markdown__generate_markdown(port_, blocks, metadata, config);
    }
    exports.wire__crate__api__export__markdown__generate_markdown = wire__crate__api__export__markdown__generate_markdown;

    /**
     * @param {any} port_
     */
    function wire__crate__api__export__types__callout_export_style_default(port_) {
        wasm.wire__crate__api__export__types__callout_export_style_default(port_);
    }
    exports.wire__crate__api__export__types__callout_export_style_default = wire__crate__api__export__types__callout_export_style_default;

    /**
     * @param {any} port_
     */
    function wire__crate__api__export__types__document_metadata_default(port_) {
        wasm.wire__crate__api__export__types__document_metadata_default(port_);
    }
    exports.wire__crate__api__export__types__document_metadata_default = wire__crate__api__export__types__document_metadata_default;

    /**
     * @param {any} port_
     */
    function wire__crate__api__export__types__export_config_default(port_) {
        wasm.wire__crate__api__export__types__export_config_default(port_);
    }
    exports.wire__crate__api__export__types__export_config_default = wire__crate__api__export__types__export_config_default;

    /**
     * @param {any} port_
     */
    function wire__crate__api__export__types__export_format_default(port_) {
        wasm.wire__crate__api__export__types__export_format_default(port_);
    }
    exports.wire__crate__api__export__types__export_format_default = wire__crate__api__export__types__export_format_default;

    /**
     * @param {any} port_
     * @param {string} content
     */
    function wire__crate__api__export__types__export_result_latex(port_, content) {
        const ptr0 = passStringToWasm0(content, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__export__types__export_result_latex(port_, ptr0, len0);
    }
    exports.wire__crate__api__export__types__export_result_latex = wire__crate__api__export__types__export_result_latex;

    /**
     * @param {any} port_
     * @param {string} content
     */
    function wire__crate__api__export__types__export_result_markdown(port_, content) {
        const ptr0 = passStringToWasm0(content, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__export__types__export_result_markdown(port_, ptr0, len0);
    }
    exports.wire__crate__api__export__types__export_result_markdown = wire__crate__api__export__types__export_result_markdown;

    /**
     * @param {any} port_
     */
    function wire__crate__api__export__types__flashcard_export_style_default(port_) {
        wasm.wire__crate__api__export__types__flashcard_export_style_default(port_);
    }
    exports.wire__crate__api__export__types__flashcard_export_style_default = wire__crate__api__export__types__flashcard_export_style_default;

    /**
     * @param {any} port_
     * @param {number} that
     */
    function wire__crate__api__export__types__latex_engine_command(port_, that) {
        wasm.wire__crate__api__export__types__latex_engine_command(port_, that);
    }
    exports.wire__crate__api__export__types__latex_engine_command = wire__crate__api__export__types__latex_engine_command;

    /**
     * @param {any} port_
     */
    function wire__crate__api__export__types__latex_engine_default(port_) {
        wasm.wire__crate__api__export__types__latex_engine_default(port_);
    }
    exports.wire__crate__api__export__types__latex_engine_default = wire__crate__api__export__types__latex_engine_default;

    /**
     * @param {any} port_
     */
    function wire__crate__api__export__types__latex_template_all(port_) {
        wasm.wire__crate__api__export__types__latex_template_all(port_);
    }
    exports.wire__crate__api__export__types__latex_template_all = wire__crate__api__export__types__latex_template_all;

    /**
     * @param {any} port_
     */
    function wire__crate__api__export__types__latex_template_default(port_) {
        wasm.wire__crate__api__export__types__latex_template_default(port_);
    }
    exports.wire__crate__api__export__types__latex_template_default = wire__crate__api__export__types__latex_template_default;

    /**
     * @param {any} port_
     * @param {number} that
     */
    function wire__crate__api__export__types__latex_template_description(port_, that) {
        wasm.wire__crate__api__export__types__latex_template_description(port_, that);
    }
    exports.wire__crate__api__export__types__latex_template_description = wire__crate__api__export__types__latex_template_description;

    /**
     * @param {any} port_
     * @param {number} that
     */
    function wire__crate__api__export__types__latex_template_id(port_, that) {
        wasm.wire__crate__api__export__types__latex_template_id(port_, that);
    }
    exports.wire__crate__api__export__types__latex_template_id = wire__crate__api__export__types__latex_template_id;

    /**
     * @param {any} port_
     * @param {number} that
     */
    function wire__crate__api__export__types__latex_template_name(port_, that) {
        wasm.wire__crate__api__export__types__latex_template_name(port_, that);
    }
    exports.wire__crate__api__export__types__latex_template_name = wire__crate__api__export__types__latex_template_name;

    /**
     * @param {any} port_
     * @param {number} that
     */
    function wire__crate__api__export__types__latex_template_recommended_engine(port_, that) {
        wasm.wire__crate__api__export__types__latex_template_recommended_engine(port_, that);
    }
    exports.wire__crate__api__export__types__latex_template_recommended_engine = wire__crate__api__export__types__latex_template_recommended_engine;

    /**
     * @param {any} port_
     */
    function wire__crate__api__export__types__math_export_style_default(port_) {
        wasm.wire__crate__api__export__types__math_export_style_default(port_);
    }
    exports.wire__crate__api__export__types__math_export_style_default = wire__crate__api__export__types__math_export_style_default;

    /**
     * @param {any} port_
     * @param {number} n
     */
    function wire__crate__api__fibonacci(port_, n) {
        wasm.wire__crate__api__fibonacci(port_, n);
    }
    exports.wire__crate__api__fibonacci = wire__crate__api__fibonacci;

    /**
     * @param {any} port_
     */
    function wire__crate__api__floating__clipboard__clear_clipboard(port_) {
        wasm.wire__crate__api__floating__clipboard__clear_clipboard(port_);
    }
    exports.wire__crate__api__floating__clipboard__clear_clipboard = wire__crate__api__floating__clipboard__clear_clipboard;

    /**
     * @param {any} port_
     */
    function wire__crate__api__floating__clipboard__get_clipboard_content(port_) {
        wasm.wire__crate__api__floating__clipboard__get_clipboard_content(port_);
    }
    exports.wire__crate__api__floating__clipboard__get_clipboard_content = wire__crate__api__floating__clipboard__get_clipboard_content;

    /**
     * @param {any} port_
     */
    function wire__crate__api__floating__clipboard__is_clipboard_monitoring(port_) {
        wasm.wire__crate__api__floating__clipboard__is_clipboard_monitoring(port_);
    }
    exports.wire__crate__api__floating__clipboard__is_clipboard_monitoring = wire__crate__api__floating__clipboard__is_clipboard_monitoring;

    /**
     * @param {any} port_
     * @param {string} text
     */
    function wire__crate__api__floating__clipboard__set_clipboard_text(port_, text) {
        const ptr0 = passStringToWasm0(text, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__floating__clipboard__set_clipboard_text(port_, ptr0, len0);
    }
    exports.wire__crate__api__floating__clipboard__set_clipboard_text = wire__crate__api__floating__clipboard__set_clipboard_text;

    /**
     * @param {any} port_
     */
    function wire__crate__api__floating__clipboard__start_clipboard_monitoring(port_) {
        wasm.wire__crate__api__floating__clipboard__start_clipboard_monitoring(port_);
    }
    exports.wire__crate__api__floating__clipboard__start_clipboard_monitoring = wire__crate__api__floating__clipboard__start_clipboard_monitoring;

    /**
     * @param {any} port_
     */
    function wire__crate__api__floating__clipboard__stop_clipboard_monitoring(port_) {
        wasm.wire__crate__api__floating__clipboard__stop_clipboard_monitoring(port_);
    }
    exports.wire__crate__api__floating__clipboard__stop_clipboard_monitoring = wire__crate__api__floating__clipboard__stop_clipboard_monitoring;

    /**
     * @param {any} port_
     */
    function wire__crate__api__floating__hotkey__is_hotkey_active(port_) {
        wasm.wire__crate__api__floating__hotkey__is_hotkey_active(port_);
    }
    exports.wire__crate__api__floating__hotkey__is_hotkey_active = wire__crate__api__floating__hotkey__is_hotkey_active;

    /**
     * @param {any} port_
     * @param {string} name
     */
    function wire__crate__api__floating__hotkey__key_name_to_code(port_, name) {
        const ptr0 = passStringToWasm0(name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__floating__hotkey__key_name_to_code(port_, ptr0, len0);
    }
    exports.wire__crate__api__floating__hotkey__key_name_to_code = wire__crate__api__floating__hotkey__key_name_to_code;

    /**
     * @param {any} port_
     * @param {string} hotkey
     * @param {number} action
     */
    function wire__crate__api__floating__hotkey__parse_hotkey_string(port_, hotkey, action) {
        const ptr0 = passStringToWasm0(hotkey, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__floating__hotkey__parse_hotkey_string(port_, ptr0, len0, action);
    }
    exports.wire__crate__api__floating__hotkey__parse_hotkey_string = wire__crate__api__floating__hotkey__parse_hotkey_string;

    /**
     * @param {any} port_
     * @param {any} config
     */
    function wire__crate__api__floating__hotkey__register_hotkey(port_, config) {
        wasm.wire__crate__api__floating__hotkey__register_hotkey(port_, config);
    }
    exports.wire__crate__api__floating__hotkey__register_hotkey = wire__crate__api__floating__hotkey__register_hotkey;

    /**
     * @param {any} port_
     */
    function wire__crate__api__floating__hotkey__unregister_all_hotkeys(port_) {
        wasm.wire__crate__api__floating__hotkey__unregister_all_hotkeys(port_);
    }
    exports.wire__crate__api__floating__hotkey__unregister_all_hotkeys = wire__crate__api__floating__hotkey__unregister_all_hotkeys;

    /**
     * @param {any} port_
     * @param {number} hotkey_id
     */
    function wire__crate__api__floating__hotkey__unregister_hotkey(port_, hotkey_id) {
        wasm.wire__crate__api__floating__hotkey__unregister_hotkey(port_, hotkey_id);
    }
    exports.wire__crate__api__floating__hotkey__unregister_hotkey = wire__crate__api__floating__hotkey__unregister_hotkey;

    /**
     * @param {any} port_
     */
    function wire__crate__api__floating__tray__create_default_tray_menu(port_) {
        wasm.wire__crate__api__floating__tray__create_default_tray_menu(port_);
    }
    exports.wire__crate__api__floating__tray__create_default_tray_menu = wire__crate__api__floating__tray__create_default_tray_menu;

    /**
     * @param {any} port_
     * @param {string} _tooltip
     */
    function wire__crate__api__floating__tray__init_tray_icon(port_, _tooltip) {
        const ptr0 = passStringToWasm0(_tooltip, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__floating__tray__init_tray_icon(port_, ptr0, len0);
    }
    exports.wire__crate__api__floating__tray__init_tray_icon = wire__crate__api__floating__tray__init_tray_icon;

    /**
     * @param {any} port_
     */
    function wire__crate__api__floating__tray__is_tray_active(port_) {
        wasm.wire__crate__api__floating__tray__is_tray_active(port_);
    }
    exports.wire__crate__api__floating__tray__is_tray_active = wire__crate__api__floating__tray__is_tray_active;

    /**
     * @param {any} port_
     */
    function wire__crate__api__floating__tray__remove_tray_icon(port_) {
        wasm.wire__crate__api__floating__tray__remove_tray_icon(port_);
    }
    exports.wire__crate__api__floating__tray__remove_tray_icon = wire__crate__api__floating__tray__remove_tray_icon;

    /**
     * @param {any} port_
     * @param {any} _items
     */
    function wire__crate__api__floating__tray__set_tray_menu(port_, _items) {
        wasm.wire__crate__api__floating__tray__set_tray_menu(port_, _items);
    }
    exports.wire__crate__api__floating__tray__set_tray_menu = wire__crate__api__floating__tray__set_tray_menu;

    /**
     * @param {any} port_
     * @param {string} _title
     * @param {string} _message
     * @param {number} _icon_type
     */
    function wire__crate__api__floating__tray__show_tray_notification(port_, _title, _message, _icon_type) {
        const ptr0 = passStringToWasm0(_title, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(_message, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__floating__tray__show_tray_notification(port_, ptr0, len0, ptr1, len1, _icon_type);
    }
    exports.wire__crate__api__floating__tray__show_tray_notification = wire__crate__api__floating__tray__show_tray_notification;

    /**
     * @param {any} port_
     * @param {string} _tooltip
     */
    function wire__crate__api__floating__tray__update_tray_tooltip(port_, _tooltip) {
        const ptr0 = passStringToWasm0(_tooltip, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__floating__tray__update_tray_tooltip(port_, ptr0, len0);
    }
    exports.wire__crate__api__floating__tray__update_tray_tooltip = wire__crate__api__floating__tray__update_tray_tooltip;

    /**
     * @param {any} port_
     */
    function wire__crate__api__floating__types__floating_window_config_default(port_) {
        wasm.wire__crate__api__floating__types__floating_window_config_default(port_);
    }
    exports.wire__crate__api__floating__types__floating_window_config_default = wire__crate__api__floating__types__floating_window_config_default;

    /**
     * @param {any} port_
     * @param {any} region
     */
    function wire__crate__api__floating__window__capture_screenshot(port_, region) {
        wasm.wire__crate__api__floating__window__capture_screenshot(port_, region);
    }
    exports.wire__crate__api__floating__window__capture_screenshot = wire__crate__api__floating__window__capture_screenshot;

    /**
     * @param {any} port_
     */
    function wire__crate__api__floating__window__destroy_floating_window(port_) {
        wasm.wire__crate__api__floating__window__destroy_floating_window(port_);
    }
    exports.wire__crate__api__floating__window__destroy_floating_window = wire__crate__api__floating__window__destroy_floating_window;

    /**
     * @param {any} port_
     * @param {number} _edge
     */
    function wire__crate__api__floating__window__dock_to_edge(port_, _edge) {
        wasm.wire__crate__api__floating__window__dock_to_edge(port_, _edge);
    }
    exports.wire__crate__api__floating__window__dock_to_edge = wire__crate__api__floating__window__dock_to_edge;

    /**
     * @param {any} port_
     */
    function wire__crate__api__floating__window__get_floating_window_state(port_) {
        wasm.wire__crate__api__floating__window__get_floating_window_state(port_);
    }
    exports.wire__crate__api__floating__window__get_floating_window_state = wire__crate__api__floating__window__get_floating_window_state;

    /**
     * @param {any} port_
     */
    function wire__crate__api__floating__window__get_monitors(port_) {
        wasm.wire__crate__api__floating__window__get_monitors(port_);
    }
    exports.wire__crate__api__floating__window__get_monitors = wire__crate__api__floating__window__get_monitors;

    /**
     * @param {any} port_
     */
    function wire__crate__api__floating__window__hide_floating_window(port_) {
        wasm.wire__crate__api__floating__window__hide_floating_window(port_);
    }
    exports.wire__crate__api__floating__window__hide_floating_window = wire__crate__api__floating__window__hide_floating_window;

    /**
     * @param {any} port_
     * @param {any} _config
     */
    function wire__crate__api__floating__window__init_floating_window(port_, _config) {
        wasm.wire__crate__api__floating__window__init_floating_window(port_, _config);
    }
    exports.wire__crate__api__floating__window__init_floating_window = wire__crate__api__floating__window__init_floating_window;

    /**
     * @param {any} port_
     */
    function wire__crate__api__floating__window__is_floating_window_active(port_) {
        wasm.wire__crate__api__floating__window__is_floating_window_active(port_);
    }
    exports.wire__crate__api__floating__window__is_floating_window_active = wire__crate__api__floating__window__is_floating_window_active;

    /**
     * @param {any} port_
     * @param {number} opacity
     */
    function wire__crate__api__floating__window__set_floating_window_opacity(port_, opacity) {
        wasm.wire__crate__api__floating__window__set_floating_window_opacity(port_, opacity);
    }
    exports.wire__crate__api__floating__window__set_floating_window_opacity = wire__crate__api__floating__window__set_floating_window_opacity;

    /**
     * @param {any} port_
     * @param {number} _x
     * @param {number} _y
     */
    function wire__crate__api__floating__window__set_floating_window_position(port_, _x, _y) {
        wasm.wire__crate__api__floating__window__set_floating_window_position(port_, _x, _y);
    }
    exports.wire__crate__api__floating__window__set_floating_window_position = wire__crate__api__floating__window__set_floating_window_position;

    /**
     * @param {any} port_
     */
    function wire__crate__api__floating__window__show_floating_window(port_) {
        wasm.wire__crate__api__floating__window__show_floating_window(port_);
    }
    exports.wire__crate__api__floating__window__show_floating_window = wire__crate__api__floating__window__show_floating_window;

    /**
     * @param {any} port_
     */
    function wire__crate__api__floating__window__start_region_selection(port_) {
        wasm.wire__crate__api__floating__window__start_region_selection(port_);
    }
    exports.wire__crate__api__floating__window__start_region_selection = wire__crate__api__floating__window__start_region_selection;

    /**
     * @param {any} port_
     */
    function wire__crate__api__floating__window__toggle_floating_window(port_) {
        wasm.wire__crate__api__floating__window__toggle_floating_window(port_);
    }
    exports.wire__crate__api__floating__window__toggle_floating_window = wire__crate__api__floating__window__toggle_floating_window;

    /**
     * @param {any} port_
     * @param {any} length
     */
    function wire__crate__api__generate_id(port_, length) {
        wasm.wire__crate__api__generate_id(port_, length);
    }
    exports.wire__crate__api__generate_id = wire__crate__api__generate_id;

    /**
     * @param {any} port_
     * @param {string} center_id
     */
    function wire__crate__api__graph__graph_compute_depths(port_, center_id) {
        const ptr0 = passStringToWasm0(center_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__graph__graph_compute_depths(port_, ptr0, len0);
    }
    exports.wire__crate__api__graph__graph_compute_depths = wire__crate__api__graph__graph_compute_depths;

    /**
     * @param {any} port_
     * @param {any} nodes
     * @param {any} edges
     */
    function wire__crate__api__graph__graph_create(port_, nodes, edges) {
        wasm.wire__crate__api__graph__graph_create(port_, nodes, edges);
    }
    exports.wire__crate__api__graph__graph_create = wire__crate__api__graph__graph_create;

    /**
     * @param {any} port_
     */
    function wire__crate__api__graph__graph_destroy(port_) {
        wasm.wire__crate__api__graph__graph_destroy(port_);
    }
    exports.wire__crate__api__graph__graph_destroy = wire__crate__api__graph__graph_destroy;

    /**
     * @param {any} port_
     */
    function wire__crate__api__graph__graph_get_edges(port_) {
        wasm.wire__crate__api__graph__graph_get_edges(port_);
    }
    exports.wire__crate__api__graph__graph_get_edges = wire__crate__api__graph__graph_get_edges;

    /**
     * @param {any} port_
     */
    function wire__crate__api__graph__graph_get_nodes(port_) {
        wasm.wire__crate__api__graph__graph_get_nodes(port_);
    }
    exports.wire__crate__api__graph__graph_get_nodes = wire__crate__api__graph__graph_get_nodes;

    /**
     * @param {any} port_
     * @param {string} id
     * @param {boolean} fixed
     * @param {any} x
     * @param {any} y
     */
    function wire__crate__api__graph__graph_set_node_fixed(port_, id, fixed, x, y) {
        const ptr0 = passStringToWasm0(id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__graph__graph_set_node_fixed(port_, ptr0, len0, fixed, x, y);
    }
    exports.wire__crate__api__graph__graph_set_node_fixed = wire__crate__api__graph__graph_set_node_fixed;

    /**
     * @param {any} port_
     * @param {any} iterations
     */
    function wire__crate__api__graph__graph_simulate(port_, iterations) {
        wasm.wire__crate__api__graph__graph_simulate(port_, iterations);
    }
    exports.wire__crate__api__graph__graph_simulate = wire__crate__api__graph__graph_simulate;

    /**
     * @param {any} port_
     */
    function wire__crate__api__graph__graph_tick(port_) {
        wasm.wire__crate__api__graph__graph_tick(port_);
    }
    exports.wire__crate__api__graph__graph_tick = wire__crate__api__graph__graph_tick;

    /**
     * @param {any} port_
     * @param {string} name
     */
    function wire__crate__api__greet(port_, name) {
        const ptr0 = passStringToWasm0(name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__greet(port_, ptr0, len0);
    }
    exports.wire__crate__api__greet = wire__crate__api__greet;

    /**
     * @param {any} port_
     * @param {any} n
     */
    function wire__crate__api__is_prime(port_, n) {
        wasm.wire__crate__api__is_prime(port_, n);
    }
    exports.wire__crate__api__is_prime = wire__crate__api__is_prime;

    /**
     * @param {any} port_
     * @param {string} input
     */
    function wire__crate__api__markdown__get_markdown_chunk_count(port_, input) {
        const ptr0 = passStringToWasm0(input, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__markdown__get_markdown_chunk_count(port_, ptr0, len0);
    }
    exports.wire__crate__api__markdown__get_markdown_chunk_count = wire__crate__api__markdown__get_markdown_chunk_count;

    /**
     * @param {any} port_
     * @param {string} input
     */
    function wire__crate__api__markdown__get_markdown_word_count(port_, input) {
        const ptr0 = passStringToWasm0(input, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__markdown__get_markdown_word_count(port_, ptr0, len0);
    }
    exports.wire__crate__api__markdown__get_markdown_word_count = wire__crate__api__markdown__get_markdown_word_count;

    /**
     * @param {any} port_
     * @param {string} input
     * @param {number} chunk_index
     */
    function wire__crate__api__markdown__parse_markdown_chunk(port_, input, chunk_index) {
        const ptr0 = passStringToWasm0(input, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__markdown__parse_markdown_chunk(port_, ptr0, len0, chunk_index);
    }
    exports.wire__crate__api__markdown__parse_markdown_chunk = wire__crate__api__markdown__parse_markdown_chunk;

    /**
     * @param {any} port_
     * @param {string} input
     */
    function wire__crate__api__markdown__parse_markdown_full(port_, input) {
        const ptr0 = passStringToWasm0(input, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__markdown__parse_markdown_full(port_, ptr0, len0);
    }
    exports.wire__crate__api__markdown__parse_markdown_full = wire__crate__api__markdown__parse_markdown_full;

    /**
     * @param {any} port_
     * @param {string} input
     */
    function wire__crate__api__markdown__parse_markdown_headings(port_, input) {
        const ptr0 = passStringToWasm0(input, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__markdown__parse_markdown_headings(port_, ptr0, len0);
    }
    exports.wire__crate__api__markdown__parse_markdown_headings = wire__crate__api__markdown__parse_markdown_headings;

    /**
     * @param {any} port_
     * @param {string} input
     * @param {string} config_json
     */
    function wire__crate__api__markdown__parse_markdown_with_config(port_, input, config_json) {
        const ptr0 = passStringToWasm0(input, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(config_json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__markdown__parse_markdown_with_config(port_, ptr0, len0, ptr1, len1);
    }
    exports.wire__crate__api__markdown__parse_markdown_with_config = wire__crate__api__markdown__parse_markdown_with_config;

    /**
     * @param {any} port_
     * @param {string} input
     */
    function wire__crate__api__markdown__validate_markdown(port_, input) {
        const ptr0 = passStringToWasm0(input, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__markdown__validate_markdown(port_, ptr0, len0);
    }
    exports.wire__crate__api__markdown__validate_markdown = wire__crate__api__markdown__validate_markdown;

    /**
     * @param {any} port_
     * @param {string} db_path
     * @param {string} item_id
     * @param {number} rating
     */
    function wire__crate__api__memory__execute_review(port_, db_path, item_id, rating) {
        const ptr0 = passStringToWasm0(db_path, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(item_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__memory__execute_review(port_, ptr0, len0, ptr1, len1, rating);
    }
    exports.wire__crate__api__memory__execute_review = wire__crate__api__memory__execute_review;

    /**
     * @param {any} port_
     * @param {string} db_path
     */
    function wire__crate__api__memory__get_due_count(port_, db_path) {
        const ptr0 = passStringToWasm0(db_path, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__memory__get_due_count(port_, ptr0, len0);
    }
    exports.wire__crate__api__memory__get_due_count = wire__crate__api__memory__get_due_count;

    /**
     * @param {any} port_
     * @param {string} db_path
     * @param {number} limit
     */
    function wire__crate__api__memory__get_due_items(port_, db_path, limit) {
        const ptr0 = passStringToWasm0(db_path, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__memory__get_due_items(port_, ptr0, len0, limit);
    }
    exports.wire__crate__api__memory__get_due_items = wire__crate__api__memory__get_due_items;

    /**
     * @param {any} notes
     * @returns {any}
     */
    function wire__crate__api__memory_import__convert_anki_to_memory_cards(notes) {
        const ret = wasm.wire__crate__api__memory_import__convert_anki_to_memory_cards(notes);
        return ret;
    }
    exports.wire__crate__api__memory_import__convert_anki_to_memory_cards = wire__crate__api__memory_import__convert_anki_to_memory_cards;

    /**
     * @param {any} cards
     * @param {string | null} [preferred_note_type]
     * @returns {any}
     */
    function wire__crate__api__memory_import__convert_memory_to_anki_notes(cards, preferred_note_type) {
        var ptr0 = isLikeNone(preferred_note_type) ? 0 : passStringToWasm0(preferred_note_type, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        const ret = wasm.wire__crate__api__memory_import__convert_memory_to_anki_notes(cards, ptr0, len0);
        return ret;
    }
    exports.wire__crate__api__memory_import__convert_memory_to_anki_notes = wire__crate__api__memory_import__convert_memory_to_anki_notes;

    /**
     * @param {Uint8Array} bytes
     * @param {string} file_name
     * @returns {any}
     */
    function wire__crate__api__memory_import__parse_memory_anki(bytes, file_name) {
        const ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(file_name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        const ret = wasm.wire__crate__api__memory_import__parse_memory_anki(ptr0, len0, ptr1, len1);
        return ret;
    }
    exports.wire__crate__api__memory_import__parse_memory_anki = wire__crate__api__memory_import__parse_memory_anki;

    /**
     * @param {string} input
     * @param {string | null} [fallback_deck_name]
     * @returns {any}
     */
    function wire__crate__api__memory_import__parse_memory_json(input, fallback_deck_name) {
        const ptr0 = passStringToWasm0(input, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        var ptr1 = isLikeNone(fallback_deck_name) ? 0 : passStringToWasm0(fallback_deck_name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len1 = WASM_VECTOR_LEN;
        const ret = wasm.wire__crate__api__memory_import__parse_memory_json(ptr0, len0, ptr1, len1);
        return ret;
    }
    exports.wire__crate__api__memory_import__parse_memory_json = wire__crate__api__memory_import__parse_memory_json;

    /**
     * @param {string} input
     * @param {string | null} [fallback_deck_name]
     * @returns {any}
     */
    function wire__crate__api__memory_import__parse_memory_text(input, fallback_deck_name) {
        const ptr0 = passStringToWasm0(input, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        var ptr1 = isLikeNone(fallback_deck_name) ? 0 : passStringToWasm0(fallback_deck_name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len1 = WASM_VECTOR_LEN;
        const ret = wasm.wire__crate__api__memory_import__parse_memory_text(ptr0, len0, ptr1, len1);
        return ret;
    }
    exports.wire__crate__api__memory_import__parse_memory_text = wire__crate__api__memory_import__parse_memory_text;

    /**
     * @param {any} port_
     * @param {string} card_type
     * @param {string} front
     * @param {string} back
     */
    function wire__crate__api__notes__card_metadata_new(port_, card_type, front, back) {
        const ptr0 = passStringToWasm0(card_type, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(front, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        const ptr2 = passStringToWasm0(back, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len2 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__notes__card_metadata_new(port_, ptr0, len0, ptr1, len1, ptr2, len2);
    }
    exports.wire__crate__api__notes__card_metadata_new = wire__crate__api__notes__card_metadata_new;

    /**
     * @param {any} port_
     */
    function wire__crate__api__notes__card_state_default(port_) {
        wasm.wire__crate__api__notes__card_state_default(port_);
    }
    exports.wire__crate__api__notes__card_state_default = wire__crate__api__notes__card_state_default;

    /**
     * @param {any} port_
     * @param {string} db_path
     * @param {string} user_id
     * @param {string | null | undefined} parent_id
     * @param {string} title
     */
    function wire__crate__api__notes__create_note(port_, db_path, user_id, parent_id, title) {
        const ptr0 = passStringToWasm0(db_path, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(user_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        var ptr2 = isLikeNone(parent_id) ? 0 : passStringToWasm0(parent_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len2 = WASM_VECTOR_LEN;
        const ptr3 = passStringToWasm0(title, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len3 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__notes__create_note(port_, ptr0, len0, ptr1, len1, ptr2, len2, ptr3, len3);
    }
    exports.wire__crate__api__notes__create_note = wire__crate__api__notes__create_note;

    /**
     * @param {any} port_
     * @param {string} db_path
     * @param {string} source_id
     * @param {string} target_id
     * @param {string | null} [link_text]
     */
    function wire__crate__api__notes__create_note_link(port_, db_path, source_id, target_id, link_text) {
        const ptr0 = passStringToWasm0(db_path, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(source_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        const ptr2 = passStringToWasm0(target_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len2 = WASM_VECTOR_LEN;
        var ptr3 = isLikeNone(link_text) ? 0 : passStringToWasm0(link_text, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len3 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__notes__create_note_link(port_, ptr0, len0, ptr1, len1, ptr2, len2, ptr3, len3);
    }
    exports.wire__crate__api__notes__create_note_link = wire__crate__api__notes__create_note_link;

    /**
     * @param {any} port_
     * @param {string} db_path
     * @param {string} note_id
     */
    function wire__crate__api__notes__delete_note(port_, db_path, note_id) {
        const ptr0 = passStringToWasm0(db_path, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(note_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__notes__delete_note(port_, ptr0, len0, ptr1, len1);
    }
    exports.wire__crate__api__notes__delete_note = wire__crate__api__notes__delete_note;

    /**
     * @param {any} port_
     * @param {string} db_path
     * @param {string} source_id
     * @param {string} target_id
     */
    function wire__crate__api__notes__delete_note_link(port_, db_path, source_id, target_id) {
        const ptr0 = passStringToWasm0(db_path, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(source_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        const ptr2 = passStringToWasm0(target_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len2 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__notes__delete_note_link(port_, ptr0, len0, ptr1, len1, ptr2, len2);
    }
    exports.wire__crate__api__notes__delete_note_link = wire__crate__api__notes__delete_note_link;

    /**
     * @param {any} port_
     * @param {string} db_path
     * @param {string} note_id
     */
    function wire__crate__api__notes__get_backlinks(port_, db_path, note_id) {
        const ptr0 = passStringToWasm0(db_path, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(note_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__notes__get_backlinks(port_, ptr0, len0, ptr1, len1);
    }
    exports.wire__crate__api__notes__get_backlinks = wire__crate__api__notes__get_backlinks;

    /**
     * @param {any} port_
     * @param {string} db_path
     * @param {string} user_id
     */
    function wire__crate__api__notes__get_daily_notes(port_, db_path, user_id) {
        const ptr0 = passStringToWasm0(db_path, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(user_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__notes__get_daily_notes(port_, ptr0, len0, ptr1, len1);
    }
    exports.wire__crate__api__notes__get_daily_notes = wire__crate__api__notes__get_daily_notes;

    /**
     * @param {any} port_
     * @param {string} db_path
     * @param {string} note_id
     */
    function wire__crate__api__notes__get_note(port_, db_path, note_id) {
        const ptr0 = passStringToWasm0(db_path, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(note_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__notes__get_note(port_, ptr0, len0, ptr1, len1);
    }
    exports.wire__crate__api__notes__get_note = wire__crate__api__notes__get_note;

    /**
     * @param {any} port_
     * @param {string} db_path
     * @param {string} user_id
     */
    function wire__crate__api__notes__get_note_tree(port_, db_path, user_id) {
        const ptr0 = passStringToWasm0(db_path, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(user_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__notes__get_note_tree(port_, ptr0, len0, ptr1, len1);
    }
    exports.wire__crate__api__notes__get_note_tree = wire__crate__api__notes__get_note_tree;

    /**
     * @param {any} port_
     * @param {string} db_path
     * @param {string} user_id
     */
    function wire__crate__api__notes__get_notes_flat(port_, db_path, user_id) {
        const ptr0 = passStringToWasm0(db_path, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(user_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__notes__get_notes_flat(port_, ptr0, len0, ptr1, len1);
    }
    exports.wire__crate__api__notes__get_notes_flat = wire__crate__api__notes__get_notes_flat;

    /**
     * @param {any} port_
     * @param {string} db_path
     * @param {string} user_id
     * @param {string} date
     */
    function wire__crate__api__notes__get_or_create_daily_note(port_, db_path, user_id, date) {
        const ptr0 = passStringToWasm0(db_path, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(user_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        const ptr2 = passStringToWasm0(date, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len2 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__notes__get_or_create_daily_note(port_, ptr0, len0, ptr1, len1, ptr2, len2);
    }
    exports.wire__crate__api__notes__get_or_create_daily_note = wire__crate__api__notes__get_or_create_daily_note;

    /**
     * @param {any} port_
     * @param {string} db_path
     * @param {string} note_id
     */
    function wire__crate__api__notes__get_outgoing_links(port_, db_path, note_id) {
        const ptr0 = passStringToWasm0(db_path, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(note_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__notes__get_outgoing_links(port_, ptr0, len0, ptr1, len1);
    }
    exports.wire__crate__api__notes__get_outgoing_links = wire__crate__api__notes__get_outgoing_links;

    /**
     * @param {any} port_
     * @param {string} db_path
     * @param {string} note_id
     * @param {string | null | undefined} new_parent_id
     * @param {number} new_order_index
     */
    function wire__crate__api__notes__move_note(port_, db_path, note_id, new_parent_id, new_order_index) {
        const ptr0 = passStringToWasm0(db_path, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(note_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        var ptr2 = isLikeNone(new_parent_id) ? 0 : passStringToWasm0(new_parent_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len2 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__notes__move_note(port_, ptr0, len0, ptr1, len1, ptr2, len2, new_order_index);
    }
    exports.wire__crate__api__notes__move_note = wire__crate__api__notes__move_note;

    /**
     * @param {any} port_
     * @param {string} db_path
     * @param {string} user_id
     * @param {string} keyword
     * @param {number} limit
     */
    function wire__crate__api__notes__search_notes(port_, db_path, user_id, keyword, limit) {
        const ptr0 = passStringToWasm0(db_path, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(user_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        const ptr2 = passStringToWasm0(keyword, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len2 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__notes__search_notes(port_, ptr0, len0, ptr1, len1, ptr2, len2, limit);
    }
    exports.wire__crate__api__notes__search_notes = wire__crate__api__notes__search_notes;

    /**
     * @param {any} port_
     * @param {string} db_path
     * @param {string} note_id
     * @param {string} content_json
     */
    function wire__crate__api__notes__update_note_content(port_, db_path, note_id, content_json) {
        const ptr0 = passStringToWasm0(db_path, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(note_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        const ptr2 = passStringToWasm0(content_json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len2 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__notes__update_note_content(port_, ptr0, len0, ptr1, len1, ptr2, len2);
    }
    exports.wire__crate__api__notes__update_note_content = wire__crate__api__notes__update_note_content;

    /**
     * @param {any} port_
     * @param {string} db_path
     * @param {string} note_id
     * @param {string} title
     */
    function wire__crate__api__notes__update_note_title(port_, db_path, note_id, title) {
        const ptr0 = passStringToWasm0(db_path, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(note_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        const ptr2 = passStringToWasm0(title, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len2 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__notes__update_note_title(port_, ptr0, len0, ptr1, len1, ptr2, len2);
    }
    exports.wire__crate__api__notes__update_note_title = wire__crate__api__notes__update_note_title;

    /**
     * @param {any} port_
     * @param {string} path
     * @param {string} kind
     */
    function wire__crate__api__path_safety__validate_path(port_, path, kind) {
        const ptr0 = passStringToWasm0(path, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(kind, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__path_safety__validate_path(port_, ptr0, len0, ptr1, len1);
    }
    exports.wire__crate__api__path_safety__validate_path = wire__crate__api__path_safety__validate_path;

    /**
     * @param {any} port_
     * @param {string} path
     * @param {number} page_index
     */
    function wire__crate__api__pdf__coordinates__extract_text_coordinates(port_, path, page_index) {
        const ptr0 = passStringToWasm0(path, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__pdf__coordinates__extract_text_coordinates(port_, ptr0, len0, page_index);
    }
    exports.wire__crate__api__pdf__coordinates__extract_text_coordinates = wire__crate__api__pdf__coordinates__extract_text_coordinates;

    /**
     * @param {any} port_
     * @param {any} that
     */
    function wire__crate__api__pdf__document_handle__PdfDocumentHandle_as_bytes(port_, that) {
        wasm.wire__crate__api__pdf__document_handle__PdfDocumentHandle_as_bytes(port_, that);
    }
    exports.wire__crate__api__pdf__document_handle__PdfDocumentHandle_as_bytes = wire__crate__api__pdf__document_handle__PdfDocumentHandle_as_bytes;

    /**
     * @param {any} port_
     * @param {any} that
     * @param {number} page_index
     * @param {number} scale
     * @param {any} image
     */
    function wire__crate__api__pdf__document_handle__PdfDocumentHandle_cache_page(port_, that, page_index, scale, image) {
        wasm.wire__crate__api__pdf__document_handle__PdfDocumentHandle_cache_page(port_, that, page_index, scale, image);
    }
    exports.wire__crate__api__pdf__document_handle__PdfDocumentHandle_cache_page = wire__crate__api__pdf__document_handle__PdfDocumentHandle_cache_page;

    /**
     * @param {any} port_
     * @param {any} that
     */
    function wire__crate__api__pdf__document_handle__PdfDocumentHandle_cache_stats(port_, that) {
        wasm.wire__crate__api__pdf__document_handle__PdfDocumentHandle_cache_stats(port_, that);
    }
    exports.wire__crate__api__pdf__document_handle__PdfDocumentHandle_cache_stats = wire__crate__api__pdf__document_handle__PdfDocumentHandle_cache_stats;

    /**
     * @param {any} port_
     * @param {any} that
     */
    function wire__crate__api__pdf__document_handle__PdfDocumentHandle_clear_cache(port_, that) {
        wasm.wire__crate__api__pdf__document_handle__PdfDocumentHandle_clear_cache(port_, that);
    }
    exports.wire__crate__api__pdf__document_handle__PdfDocumentHandle_clear_cache = wire__crate__api__pdf__document_handle__PdfDocumentHandle_clear_cache;

    /**
     * @param {any} port_
     * @param {any} that
     */
    function wire__crate__api__pdf__document_handle__PdfDocumentHandle_file_size(port_, that) {
        wasm.wire__crate__api__pdf__document_handle__PdfDocumentHandle_file_size(port_, that);
    }
    exports.wire__crate__api__pdf__document_handle__PdfDocumentHandle_file_size = wire__crate__api__pdf__document_handle__PdfDocumentHandle_file_size;

    /**
     * @param {any} port_
     * @param {any} that
     * @param {number} page_index
     * @param {number} scale
     */
    function wire__crate__api__pdf__document_handle__PdfDocumentHandle_get_cached_page(port_, that, page_index, scale) {
        wasm.wire__crate__api__pdf__document_handle__PdfDocumentHandle_get_cached_page(port_, that, page_index, scale);
    }
    exports.wire__crate__api__pdf__document_handle__PdfDocumentHandle_get_cached_page = wire__crate__api__pdf__document_handle__PdfDocumentHandle_get_cached_page;

    /**
     * @param {any} port_
     * @param {any} that
     */
    function wire__crate__api__pdf__document_handle__PdfDocumentHandle_get_page_count(port_, that) {
        wasm.wire__crate__api__pdf__document_handle__PdfDocumentHandle_get_page_count(port_, that);
    }
    exports.wire__crate__api__pdf__document_handle__PdfDocumentHandle_get_page_count = wire__crate__api__pdf__document_handle__PdfDocumentHandle_get_page_count;

    /**
     * @param {any} port_
     * @param {any} that
     */
    function wire__crate__api__pdf__document_handle__PdfDocumentHandle_is_memory_mapped(port_, that) {
        wasm.wire__crate__api__pdf__document_handle__PdfDocumentHandle_is_memory_mapped(port_, that);
    }
    exports.wire__crate__api__pdf__document_handle__PdfDocumentHandle_is_memory_mapped = wire__crate__api__pdf__document_handle__PdfDocumentHandle_is_memory_mapped;

    /**
     * @param {any} port_
     * @param {any} that
     */
    function wire__crate__api__pdf__document_handle__PdfDocumentHandle_path(port_, that) {
        wasm.wire__crate__api__pdf__document_handle__PdfDocumentHandle_path(port_, that);
    }
    exports.wire__crate__api__pdf__document_handle__PdfDocumentHandle_path = wire__crate__api__pdf__document_handle__PdfDocumentHandle_path;

    /**
     * @param {any} port_
     */
    function wire__crate__api__pdf__document_handle__registry__close_all(port_) {
        wasm.wire__crate__api__pdf__document_handle__registry__close_all(port_);
    }
    exports.wire__crate__api__pdf__document_handle__registry__close_all = wire__crate__api__pdf__document_handle__registry__close_all;

    /**
     * @param {any} port_
     */
    function wire__crate__api__pdf__document_handle__registry__open_count(port_) {
        wasm.wire__crate__api__pdf__document_handle__registry__open_count(port_);
    }
    exports.wire__crate__api__pdf__document_handle__registry__open_count = wire__crate__api__pdf__document_handle__registry__open_count;

    /**
     * @param {any} port_
     * @param {string} pdf_path
     */
    function wire__crate__api__pdf__extractor__analyze_pdf(port_, pdf_path) {
        const ptr0 = passStringToWasm0(pdf_path, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__pdf__extractor__analyze_pdf(port_, ptr0, len0);
    }
    exports.wire__crate__api__pdf__extractor__analyze_pdf = wire__crate__api__pdf__extractor__analyze_pdf;

    /**
     * @param {any} port_
     * @param {string} pdf_path
     */
    function wire__crate__api__pdf__extractor__analyze_pdf_pages(port_, pdf_path) {
        const ptr0 = passStringToWasm0(pdf_path, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__pdf__extractor__analyze_pdf_pages(port_, ptr0, len0);
    }
    exports.wire__crate__api__pdf__extractor__analyze_pdf_pages = wire__crate__api__pdf__extractor__analyze_pdf_pages;

    /**
     * @param {any} port_
     * @param {string} pdf_path
     * @param {number} start_page
     * @param {number} end_page
     * @param {string} title
     */
    function wire__crate__api__pdf__extractor__extract_chapter(port_, pdf_path, start_page, end_page, title) {
        const ptr0 = passStringToWasm0(pdf_path, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(title, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__pdf__extractor__extract_chapter(port_, ptr0, len0, start_page, end_page, ptr1, len1);
    }
    exports.wire__crate__api__pdf__extractor__extract_chapter = wire__crate__api__pdf__extractor__extract_chapter;

    /**
     * @param {any} port_
     * @param {string} pdf_path
     */
    function wire__crate__api__pdf__extractor__extract_document_spans(port_, pdf_path) {
        const ptr0 = passStringToWasm0(pdf_path, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__pdf__extractor__extract_document_spans(port_, ptr0, len0);
    }
    exports.wire__crate__api__pdf__extractor__extract_document_spans = wire__crate__api__pdf__extractor__extract_document_spans;

    /**
     * @param {any} port_
     * @param {string} pdf_path
     */
    function wire__crate__api__pdf__extractor__get_pdf_page_count(port_, pdf_path) {
        const ptr0 = passStringToWasm0(pdf_path, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__pdf__extractor__get_pdf_page_count(port_, ptr0, len0);
    }
    exports.wire__crate__api__pdf__extractor__get_pdf_page_count = wire__crate__api__pdf__extractor__get_pdf_page_count;

    /**
     * @param {any} port_
     * @param {string} pdf_path
     */
    function wire__crate__api__pdf__extractor__get_pdf_toc(port_, pdf_path) {
        const ptr0 = passStringToWasm0(pdf_path, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__pdf__extractor__get_pdf_toc(port_, ptr0, len0);
    }
    exports.wire__crate__api__pdf__extractor__get_pdf_toc = wire__crate__api__pdf__extractor__get_pdf_toc;

    /**
     * @param {any} port_
     * @param {string} pdf_path
     */
    function wire__crate__api__pdf__extractor__is_scanned_pdf(port_, pdf_path) {
        const ptr0 = passStringToWasm0(pdf_path, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__pdf__extractor__is_scanned_pdf(port_, ptr0, len0);
    }
    exports.wire__crate__api__pdf__extractor__is_scanned_pdf = wire__crate__api__pdf__extractor__is_scanned_pdf;

    /**
     * @param {any} port_
     * @param {string} pdf_path
     */
    function wire__crate__api__pdf__outline__extract_outline(port_, pdf_path) {
        const ptr0 = passStringToWasm0(pdf_path, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__pdf__outline__extract_outline(port_, ptr0, len0);
    }
    exports.wire__crate__api__pdf__outline__extract_outline = wire__crate__api__pdf__outline__extract_outline;

    /**
     * @param {any} port_
     * @param {string} path
     */
    function wire__crate__api__pdf__renderer__evict_pdf_page_cache(port_, path) {
        const ptr0 = passStringToWasm0(path, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__pdf__renderer__evict_pdf_page_cache(port_, ptr0, len0);
    }
    exports.wire__crate__api__pdf__renderer__evict_pdf_page_cache = wire__crate__api__pdf__renderer__evict_pdf_page_cache;

    /**
     * @param {any} port_
     * @param {string} path
     * @param {number} center_page
     * @param {number} radius
     * @param {number} scale
     */
    function wire__crate__api__pdf__renderer__prefetch_pdf_pages(port_, path, center_page, radius, scale) {
        const ptr0 = passStringToWasm0(path, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__pdf__renderer__prefetch_pdf_pages(port_, ptr0, len0, center_page, radius, scale);
    }
    exports.wire__crate__api__pdf__renderer__prefetch_pdf_pages = wire__crate__api__pdf__renderer__prefetch_pdf_pages;

    /**
     * @param {any} port_
     * @param {string} path
     * @param {number} page_index
     * @param {number} scale
     */
    function wire__crate__api__pdf__renderer__render_pdf_page(port_, path, page_index, scale) {
        const ptr0 = passStringToWasm0(path, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__pdf__renderer__render_pdf_page(port_, ptr0, len0, page_index, scale);
    }
    exports.wire__crate__api__pdf__renderer__render_pdf_page = wire__crate__api__pdf__renderer__render_pdf_page;

    /**
     * @param {any} port_
     * @param {any} that
     */
    function wire__crate__api__pdf__types__normalized_rect_clamp01(port_, that) {
        wasm.wire__crate__api__pdf__types__normalized_rect_clamp01(port_, that);
    }
    exports.wire__crate__api__pdf__types__normalized_rect_clamp01 = wire__crate__api__pdf__types__normalized_rect_clamp01;

    /**
     * @param {any} port_
     */
    function wire__crate__api__pdf__types__pdf_extraction_options_default(port_) {
        wasm.wire__crate__api__pdf__types__pdf_extraction_options_default(port_);
    }
    exports.wire__crate__api__pdf__types__pdf_extraction_options_default = wire__crate__api__pdf__types__pdf_extraction_options_default;

    /**
     * @param {any} port_
     */
    function wire__crate__api__pdf__types__pdf_metadata_default(port_) {
        wasm.wire__crate__api__pdf__types__pdf_metadata_default(port_);
    }
    exports.wire__crate__api__pdf__types__pdf_metadata_default = wire__crate__api__pdf__types__pdf_metadata_default;

    /**
     * @param {any} port_
     * @param {string} event_kind
     * @param {string | null | undefined} target_plugin_id
     * @param {string} payload_json
     */
    function wire__crate__api__plugins__plugins_dispatch_event(port_, event_kind, target_plugin_id, payload_json) {
        const ptr0 = passStringToWasm0(event_kind, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        var ptr1 = isLikeNone(target_plugin_id) ? 0 : passStringToWasm0(target_plugin_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len1 = WASM_VECTOR_LEN;
        const ptr2 = passStringToWasm0(payload_json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len2 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__plugins__plugins_dispatch_event(port_, ptr0, len0, ptr1, len1, ptr2, len2);
    }
    exports.wire__crate__api__plugins__plugins_dispatch_event = wire__crate__api__plugins__plugins_dispatch_event;

    /**
     * @param {any} port_
     * @param {string} command_id
     * @param {string} args_json
     */
    function wire__crate__api__plugins__plugins_execute_command(port_, command_id, args_json) {
        const ptr0 = passStringToWasm0(command_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(args_json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__plugins__plugins_execute_command(port_, ptr0, len0, ptr1, len1);
    }
    exports.wire__crate__api__plugins__plugins_execute_command = wire__crate__api__plugins__plugins_execute_command;

    /**
     * @param {any} port_
     * @param {string} plugin_ids_json
     */
    function wire__crate__api__plugins__plugins_export_configs(port_, plugin_ids_json) {
        const ptr0 = passStringToWasm0(plugin_ids_json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__plugins__plugins_export_configs(port_, ptr0, len0);
    }
    exports.wire__crate__api__plugins__plugins_export_configs = wire__crate__api__plugins__plugins_export_configs;

    /**
     * @param {any} port_
     * @param {string} plugin_id
     */
    function wire__crate__api__plugins__plugins_get_config(port_, plugin_id) {
        const ptr0 = passStringToWasm0(plugin_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__plugins__plugins_get_config(port_, ptr0, len0);
    }
    exports.wire__crate__api__plugins__plugins_get_config = wire__crate__api__plugins__plugins_get_config;

    /**
     * @param {any} port_
     * @param {string} configs_json
     * @param {string} merge_mode
     */
    function wire__crate__api__plugins__plugins_import_configs(port_, configs_json, merge_mode) {
        const ptr0 = passStringToWasm0(configs_json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(merge_mode, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__plugins__plugins_import_configs(port_, ptr0, len0, ptr1, len1);
    }
    exports.wire__crate__api__plugins__plugins_import_configs = wire__crate__api__plugins__plugins_import_configs;

    /**
     * @param {any} port_
     * @param {string} platform
     * @param {string} app_version
     * @param {string | null} [vault_path]
     */
    function wire__crate__api__plugins__plugins_init(port_, platform, app_version, vault_path) {
        const ptr0 = passStringToWasm0(platform, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(app_version, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        var ptr2 = isLikeNone(vault_path) ? 0 : passStringToWasm0(vault_path, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len2 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__plugins__plugins_init(port_, ptr0, len0, ptr1, len1, ptr2, len2);
    }
    exports.wire__crate__api__plugins__plugins_init = wire__crate__api__plugins__plugins_init;

    /**
     * @param {any} port_
     */
    function wire__crate__api__plugins__plugins_list(port_) {
        wasm.wire__crate__api__plugins__plugins_list(port_);
    }
    exports.wire__crate__api__plugins__plugins_list = wire__crate__api__plugins__plugins_list;

    /**
     * @param {any} port_
     */
    function wire__crate__api__plugins__plugins_list_config_descriptors(port_) {
        wasm.wire__crate__api__plugins__plugins_list_config_descriptors(port_);
    }
    exports.wire__crate__api__plugins__plugins_list_config_descriptors = wire__crate__api__plugins__plugins_list_config_descriptors;

    /**
     * @param {any} port_
     */
    function wire__crate__api__plugins__plugins_load_configs_from_vault(port_) {
        wasm.wire__crate__api__plugins__plugins_load_configs_from_vault(port_);
    }
    exports.wire__crate__api__plugins__plugins_load_configs_from_vault = wire__crate__api__plugins__plugins_load_configs_from_vault;

    /**
     * @param {any} port_
     * @param {string} plugin_id
     * @param {string} args_json
     */
    function wire__crate__api__plugins__plugins_query_panel_data(port_, plugin_id, args_json) {
        const ptr0 = passStringToWasm0(plugin_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(args_json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__plugins__plugins_query_panel_data(port_, ptr0, len0, ptr1, len1);
    }
    exports.wire__crate__api__plugins__plugins_query_panel_data = wire__crate__api__plugins__plugins_query_panel_data;

    /**
     * @param {any} port_
     * @param {string} scope
     */
    function wire__crate__api__plugins__plugins_reindex(port_, scope) {
        const ptr0 = passStringToWasm0(scope, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__plugins__plugins_reindex(port_, ptr0, len0);
    }
    exports.wire__crate__api__plugins__plugins_reindex = wire__crate__api__plugins__plugins_reindex;

    /**
     * @param {any} port_
     * @param {string} plugin_id
     * @param {string} config_json
     */
    function wire__crate__api__plugins__plugins_set_config(port_, plugin_id, config_json) {
        const ptr0 = passStringToWasm0(plugin_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(config_json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__plugins__plugins_set_config(port_, ptr0, len0, ptr1, len1);
    }
    exports.wire__crate__api__plugins__plugins_set_config = wire__crate__api__plugins__plugins_set_config;

    /**
     * @param {any} port_
     * @param {string} plugin_id
     * @param {boolean} enabled
     */
    function wire__crate__api__plugins__plugins_set_enabled(port_, plugin_id, enabled) {
        const ptr0 = passStringToWasm0(plugin_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__plugins__plugins_set_enabled(port_, ptr0, len0, enabled);
    }
    exports.wire__crate__api__plugins__plugins_set_enabled = wire__crate__api__plugins__plugins_set_enabled;

    /**
     * @param {any} port_
     */
    function wire__crate__api__plugins__plugins_shutdown(port_) {
        wasm.wire__crate__api__plugins__plugins_shutdown(port_);
    }
    exports.wire__crate__api__plugins__plugins_shutdown = wire__crate__api__plugins__plugins_shutdown;

    /**
     * @param {any} port_
     */
    function wire__crate__api__plugins__plugins_sync_configs_to_vault(port_) {
        wasm.wire__crate__api__plugins__plugins_sync_configs_to_vault(port_);
    }
    exports.wire__crate__api__plugins__plugins_sync_configs_to_vault = wire__crate__api__plugins__plugins_sync_configs_to_vault;

    /**
     * @param {any} port_
     * @param {string} yaml_content
     * @param {any} completed_node_ids
     */
    function wire__crate__api__roadmap__process_roadmap_data(port_, yaml_content, completed_node_ids) {
        const ptr0 = passStringToWasm0(yaml_content, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__roadmap__process_roadmap_data(port_, ptr0, len0, completed_node_ids);
    }
    exports.wire__crate__api__roadmap__process_roadmap_data = wire__crate__api__roadmap__process_roadmap_data;

    /**
     * @param {any} port_
     * @param {number} importance
     * @param {number} interest
     * @param {number} interval
     */
    function wire__crate__api__scheduler_api__calculate_reading_priority(port_, importance, interest, interval) {
        wasm.wire__crate__api__scheduler_api__calculate_reading_priority(port_, importance, interest, interval);
    }
    exports.wire__crate__api__scheduler_api__calculate_reading_priority = wire__crate__api__scheduler_api__calculate_reading_priority;

    /**
     * @param {any} port_
     * @param {number} algo_type
     */
    function wire__crate__api__scheduler_api__get_default_params(port_, algo_type) {
        wasm.wire__crate__api__scheduler_api__get_default_params(port_, algo_type);
    }
    exports.wire__crate__api__scheduler_api__get_default_params = wire__crate__api__scheduler_api__get_default_params;

    /**
     * @param {any} port_
     * @param {any} items
     * @param {number} max_consecutive
     */
    function wire__crate__api__scheduler_api__get_interleaved_queue(port_, items, max_consecutive) {
        wasm.wire__crate__api__scheduler_api__get_interleaved_queue(port_, items, max_consecutive);
    }
    exports.wire__crate__api__scheduler_api__get_interleaved_queue = wire__crate__api__scheduler_api__get_interleaved_queue;

    /**
     * @param {any} port_
     * @param {number} algo_type
     * @param {string} algo_params
     */
    function wire__crate__api__scheduler_api__init_new_card(port_, algo_type, algo_params) {
        const ptr0 = passStringToWasm0(algo_params, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__scheduler_api__init_new_card(port_, algo_type, ptr0, len0);
    }
    exports.wire__crate__api__scheduler_api__init_new_card = wire__crate__api__scheduler_api__init_new_card;

    /**
     * @param {any} port_
     * @param {number} algo_type
     * @param {string} algo_params
     * @param {string | null | undefined} current_state
     * @param {number} rating
     */
    function wire__crate__api__scheduler_api__review_card(port_, algo_type, algo_params, current_state, rating) {
        const ptr0 = passStringToWasm0(algo_params, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        var ptr1 = isLikeNone(current_state) ? 0 : passStringToWasm0(current_state, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len1 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__scheduler_api__review_card(port_, algo_type, ptr0, len0, ptr1, len1, rating);
    }
    exports.wire__crate__api__scheduler_api__review_card = wire__crate__api__scheduler_api__review_card;

    /**
     * @param {any} port_
     * @param {number} current_interval
     * @param {number} time_spent_seconds
     * @param {number} feedback_rating
     * @param {number} importance
     * @param {number} interest
     */
    function wire__crate__api__scheduler_api__schedule_reading_item(port_, current_interval, time_spent_seconds, feedback_rating, importance, interest) {
        wasm.wire__crate__api__scheduler_api__schedule_reading_item(port_, current_interval, time_spent_seconds, feedback_rating, importance, interest);
    }
    exports.wire__crate__api__scheduler_api__schedule_reading_item = wire__crate__api__scheduler_api__schedule_reading_item;

    /**
     * @param {any} port_
     * @param {number} algo_type
     * @param {string} algo_params
     */
    function wire__crate__api__scheduler_api__validate_params(port_, algo_type, algo_params) {
        const ptr0 = passStringToWasm0(algo_params, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__scheduler_api__validate_params(port_, algo_type, ptr0, len0);
    }
    exports.wire__crate__api__scheduler_api__validate_params = wire__crate__api__scheduler_api__validate_params;

    /**
     * @param {any} port_
     * @param {any} that
     * @param {string | null | undefined} current_state_json
     * @param {number} rating
     */
    function wire__crate__api__scheduling__fsrs_algo__FsrsAlgorithm_calculate(port_, that, current_state_json, rating) {
        var ptr0 = isLikeNone(current_state_json) ? 0 : passStringToWasm0(current_state_json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__scheduling__fsrs_algo__FsrsAlgorithm_calculate(port_, that, ptr0, len0, rating);
    }
    exports.wire__crate__api__scheduling__fsrs_algo__FsrsAlgorithm_calculate = wire__crate__api__scheduling__fsrs_algo__FsrsAlgorithm_calculate;

    /**
     * @param {any} port_
     * @param {string} params_json
     */
    function wire__crate__api__scheduling__fsrs_algo__FsrsAlgorithm_from_params_json(port_, params_json) {
        const ptr0 = passStringToWasm0(params_json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__scheduling__fsrs_algo__FsrsAlgorithm_from_params_json(port_, ptr0, len0);
    }
    exports.wire__crate__api__scheduling__fsrs_algo__FsrsAlgorithm_from_params_json = wire__crate__api__scheduling__fsrs_algo__FsrsAlgorithm_from_params_json;

    /**
     * @param {any} port_
     * @param {any} that
     */
    function wire__crate__api__scheduling__fsrs_algo__FsrsAlgorithm_init_new(port_, that) {
        wasm.wire__crate__api__scheduling__fsrs_algo__FsrsAlgorithm_init_new(port_, that);
    }
    exports.wire__crate__api__scheduling__fsrs_algo__FsrsAlgorithm_init_new = wire__crate__api__scheduling__fsrs_algo__FsrsAlgorithm_init_new;

    /**
     * @param {any} port_
     * @param {number} desired_retention
     */
    function wire__crate__api__scheduling__fsrs_algo__FsrsAlgorithm_new(port_, desired_retention) {
        wasm.wire__crate__api__scheduling__fsrs_algo__FsrsAlgorithm_new(port_, desired_retention);
    }
    exports.wire__crate__api__scheduling__fsrs_algo__FsrsAlgorithm_new = wire__crate__api__scheduling__fsrs_algo__FsrsAlgorithm_new;

    /**
     * @param {any} port_
     * @param {any} that
     * @param {string | null} [current_state_json]
     * @param {string | null} [params_json]
     */
    function wire__crate__api__scheduling__fsrs_algo__FsrsAlgorithm_schedule_all(port_, that, current_state_json, params_json) {
        var ptr0 = isLikeNone(current_state_json) ? 0 : passStringToWasm0(current_state_json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        var ptr1 = isLikeNone(params_json) ? 0 : passStringToWasm0(params_json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len1 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__scheduling__fsrs_algo__FsrsAlgorithm_schedule_all(port_, that, ptr0, len0, ptr1, len1);
    }
    exports.wire__crate__api__scheduling__fsrs_algo__FsrsAlgorithm_schedule_all = wire__crate__api__scheduling__fsrs_algo__FsrsAlgorithm_schedule_all;

    /**
     * @param {any} port_
     */
    function wire__crate__api__scheduling__fsrs_algo__FsrsAlgorithm_with_defaults(port_) {
        wasm.wire__crate__api__scheduling__fsrs_algo__FsrsAlgorithm_with_defaults(port_);
    }
    exports.wire__crate__api__scheduling__fsrs_algo__FsrsAlgorithm_with_defaults = wire__crate__api__scheduling__fsrs_algo__FsrsAlgorithm_with_defaults;

    /**
     * @param {any} port_
     */
    function wire__crate__api__scheduling__fsrs_algo__card_status_default(port_) {
        wasm.wire__crate__api__scheduling__fsrs_algo__card_status_default(port_);
    }
    exports.wire__crate__api__scheduling__fsrs_algo__card_status_default = wire__crate__api__scheduling__fsrs_algo__card_status_default;

    /**
     * @param {any} port_
     */
    function wire__crate__api__scheduling__fsrs_algo__fsrs_card_state_default(port_) {
        wasm.wire__crate__api__scheduling__fsrs_algo__fsrs_card_state_default(port_);
    }
    exports.wire__crate__api__scheduling__fsrs_algo__fsrs_card_state_default = wire__crate__api__scheduling__fsrs_algo__fsrs_card_state_default;

    /**
     * @param {any} port_
     * @param {any} that
     */
    function wire__crate__api__scheduling__fsrs_algo__fsrs_card_state_is_new(port_, that) {
        wasm.wire__crate__api__scheduling__fsrs_algo__fsrs_card_state_is_new(port_, that);
    }
    exports.wire__crate__api__scheduling__fsrs_algo__fsrs_card_state_is_new = wire__crate__api__scheduling__fsrs_algo__fsrs_card_state_is_new;

    /**
     * @param {any} port_
     * @param {number} stability
     * @param {number} difficulty
     * @param {any} last_review_at
     * @param {number} elapsed_days
     * @param {number} reps
     * @param {number} lapses
     * @param {number} state
     */
    function wire__crate__api__scheduling__fsrs_algo__fsrs_card_state_new(port_, stability, difficulty, last_review_at, elapsed_days, reps, lapses, state) {
        wasm.wire__crate__api__scheduling__fsrs_algo__fsrs_card_state_new(port_, stability, difficulty, last_review_at, elapsed_days, reps, lapses, state);
    }
    exports.wire__crate__api__scheduling__fsrs_algo__fsrs_card_state_new = wire__crate__api__scheduling__fsrs_algo__fsrs_card_state_new;

    /**
     * @param {any} port_
     * @param {number} stability
     * @param {number} difficulty
     * @param {any} last_review_at
     * @param {number} elapsed_days
     */
    function wire__crate__api__scheduling__fsrs_algo__fsrs_card_state_new_simple(port_, stability, difficulty, last_review_at, elapsed_days) {
        wasm.wire__crate__api__scheduling__fsrs_algo__fsrs_card_state_new_simple(port_, stability, difficulty, last_review_at, elapsed_days);
    }
    exports.wire__crate__api__scheduling__fsrs_algo__fsrs_card_state_new_simple = wire__crate__api__scheduling__fsrs_algo__fsrs_card_state_new_simple;

    /**
     * @param {any} port_
     */
    function wire__crate__api__scheduling__fsrs_algo__fsrs_params_default(port_) {
        wasm.wire__crate__api__scheduling__fsrs_algo__fsrs_params_default(port_);
    }
    exports.wire__crate__api__scheduling__fsrs_algo__fsrs_params_default = wire__crate__api__scheduling__fsrs_algo__fsrs_params_default;

    /**
     * @param {any} port_
     * @param {any} next_due_at
     * @param {string} custom_data
     */
    function wire__crate__api__scheduling__scheduling_result_new(port_, next_due_at, custom_data) {
        const ptr0 = passStringToWasm0(custom_data, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__scheduling__scheduling_result_new(port_, next_due_at, ptr0, len0);
    }
    exports.wire__crate__api__scheduling__scheduling_result_new = wire__crate__api__scheduling__scheduling_result_new;

    /**
     * @param {any} port_
     * @param {any} that
     * @param {string | null | undefined} current_state_json
     * @param {number} rating
     */
    function wire__crate__api__scheduling__sm2_algo__sm_2_algorithm_calculate(port_, that, current_state_json, rating) {
        var ptr0 = isLikeNone(current_state_json) ? 0 : passStringToWasm0(current_state_json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__scheduling__sm2_algo__sm_2_algorithm_calculate(port_, that, ptr0, len0, rating);
    }
    exports.wire__crate__api__scheduling__sm2_algo__sm_2_algorithm_calculate = wire__crate__api__scheduling__sm2_algo__sm_2_algorithm_calculate;

    /**
     * @param {any} port_
     */
    function wire__crate__api__scheduling__sm2_algo__sm_2_algorithm_default(port_) {
        wasm.wire__crate__api__scheduling__sm2_algo__sm_2_algorithm_default(port_);
    }
    exports.wire__crate__api__scheduling__sm2_algo__sm_2_algorithm_default = wire__crate__api__scheduling__sm2_algo__sm_2_algorithm_default;

    /**
     * @param {any} port_
     * @param {any} that
     */
    function wire__crate__api__scheduling__sm2_algo__sm_2_algorithm_init_new(port_, that) {
        wasm.wire__crate__api__scheduling__sm2_algo__sm_2_algorithm_init_new(port_, that);
    }
    exports.wire__crate__api__scheduling__sm2_algo__sm_2_algorithm_init_new = wire__crate__api__scheduling__sm2_algo__sm_2_algorithm_init_new;

    /**
     * @param {any} port_
     */
    function wire__crate__api__scheduling__sm2_algo__sm_2_algorithm_new(port_) {
        wasm.wire__crate__api__scheduling__sm2_algo__sm_2_algorithm_new(port_);
    }
    exports.wire__crate__api__scheduling__sm2_algo__sm_2_algorithm_new = wire__crate__api__scheduling__sm2_algo__sm_2_algorithm_new;

    /**
     * @param {any} port_
     * @param {any} last_review_at
     */
    function wire__crate__api__scheduling__sm2_algo__sm_2_card_state_new(port_, last_review_at) {
        wasm.wire__crate__api__scheduling__sm2_algo__sm_2_card_state_new(port_, last_review_at);
    }
    exports.wire__crate__api__scheduling__sm2_algo__sm_2_card_state_new = wire__crate__api__scheduling__sm2_algo__sm_2_card_state_new;

    /**
     * @param {any} port_
     * @param {Uint8Array} key
     * @param {Uint8Array} data
     */
    function wire__crate__api__security__decrypt(port_, key, data) {
        const ptr0 = passArray8ToWasm0(key, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passArray8ToWasm0(data, wasm.__wbindgen_malloc);
        const len1 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__security__decrypt(port_, ptr0, len0, ptr1, len1);
    }
    exports.wire__crate__api__security__decrypt = wire__crate__api__security__decrypt;

    /**
     * @param {any} port_
     * @param {Uint8Array} key
     * @param {Uint8Array} data
     */
    function wire__crate__api__security__decrypt_bytes(port_, key, data) {
        const ptr0 = passArray8ToWasm0(key, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passArray8ToWasm0(data, wasm.__wbindgen_malloc);
        const len1 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__security__decrypt_bytes(port_, ptr0, len0, ptr1, len1);
    }
    exports.wire__crate__api__security__decrypt_bytes = wire__crate__api__security__decrypt_bytes;

    /**
     * @param {any} port_
     * @param {string} password
     * @param {string} salt
     */
    function wire__crate__api__security__derive_key(port_, password, salt) {
        const ptr0 = passStringToWasm0(password, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(salt, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__security__derive_key(port_, ptr0, len0, ptr1, len1);
    }
    exports.wire__crate__api__security__derive_key = wire__crate__api__security__derive_key;

    /**
     * @param {any} port_
     * @param {Uint8Array} key
     * @param {string} plaintext
     */
    function wire__crate__api__security__encrypt(port_, key, plaintext) {
        const ptr0 = passArray8ToWasm0(key, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(plaintext, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__security__encrypt(port_, ptr0, len0, ptr1, len1);
    }
    exports.wire__crate__api__security__encrypt = wire__crate__api__security__encrypt;

    /**
     * @param {any} port_
     * @param {Uint8Array} key
     * @param {Uint8Array} data
     */
    function wire__crate__api__security__encrypt_bytes(port_, key, data) {
        const ptr0 = passArray8ToWasm0(key, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passArray8ToWasm0(data, wasm.__wbindgen_malloc);
        const len1 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__security__encrypt_bytes(port_, ptr0, len0, ptr1, len1);
    }
    exports.wire__crate__api__security__encrypt_bytes = wire__crate__api__security__encrypt_bytes;

    /**
     * @param {any} port_
     */
    function wire__crate__api__security__generate_salt(port_) {
        wasm.wire__crate__api__security__generate_salt(port_);
    }
    exports.wire__crate__api__security__generate_salt = wire__crate__api__security__generate_salt;

    /**
     * @param {any} port_
     * @param {string} password
     * @param {string} salt
     * @param {Uint8Array} expected_key
     */
    function wire__crate__api__security__verify_password(port_, password, salt, expected_key) {
        const ptr0 = passStringToWasm0(password, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(salt, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        const ptr2 = passArray8ToWasm0(expected_key, wasm.__wbindgen_malloc);
        const len2 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__security__verify_password(port_, ptr0, len0, ptr1, len1, ptr2, len2);
    }
    exports.wire__crate__api__security__verify_password = wire__crate__api__security__verify_password;

    /**
     * @param {any} port_
     * @param {Int32Array} numbers
     */
    function wire__crate__api__sum_array(port_, numbers) {
        const ptr0 = passArray32ToWasm0(numbers, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__sum_array(port_, ptr0, len0);
    }
    exports.wire__crate__api__sum_array = wire__crate__api__sum_array;

    /**
     * @param {any} port_
     * @param {any} engine
     * @param {any} req
     */
    function wire__crate__api__typst__typst_compile_pdf(port_, engine, req) {
        wasm.wire__crate__api__typst__typst_compile_pdf(port_, engine, req);
    }
    exports.wire__crate__api__typst__typst_compile_pdf = wire__crate__api__typst__typst_compile_pdf;

    /**
     * @param {any} port_
     * @param {any} engine
     * @param {any} req
     */
    function wire__crate__api__typst__typst_compile_svg_pages(port_, engine, req) {
        wasm.wire__crate__api__typst__typst_compile_svg_pages(port_, engine, req);
    }
    exports.wire__crate__api__typst__typst_compile_svg_pages = wire__crate__api__typst__typst_compile_svg_pages;

    /**
     * @param {any} port_
     * @param {any} config
     */
    function wire__crate__api__typst__typst_engine_create(port_, config) {
        wasm.wire__crate__api__typst__typst_engine_create(port_, config);
    }
    exports.wire__crate__api__typst__typst_engine_create = wire__crate__api__typst__typst_engine_create;

    /**
     * @param {any} port_
     * @param {any} _engine
     */
    function wire__crate__api__typst__typst_engine_dispose(port_, _engine) {
        wasm.wire__crate__api__typst__typst_engine_dispose(port_, _engine);
    }
    exports.wire__crate__api__typst__typst_engine_dispose = wire__crate__api__typst__typst_engine_dispose;

    /**
     * @param {any} port_
     * @param {string} source
     */
    function wire__crate__api__typst__typst_highlight_tokens(port_, source) {
        const ptr0 = passStringToWasm0(source, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__typst__typst_highlight_tokens(port_, ptr0, len0);
    }
    exports.wire__crate__api__typst__typst_highlight_tokens = wire__crate__api__typst__typst_highlight_tokens;

    /**
     * @param {any} port_
     * @param {string} db_path
     * @param {string} user_id
     * @param {string} source_type
     * @param {string} source_id
     * @param {string} title
     * @param {any} blocks
     * @param {string | null} [original_format]
     * @param {string | null} [raw_content]
     */
    function wire__crate__api__unified_content__create_unified_content(port_, db_path, user_id, source_type, source_id, title, blocks, original_format, raw_content) {
        const ptr0 = passStringToWasm0(db_path, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(user_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        const ptr2 = passStringToWasm0(source_type, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len2 = WASM_VECTOR_LEN;
        const ptr3 = passStringToWasm0(source_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len3 = WASM_VECTOR_LEN;
        const ptr4 = passStringToWasm0(title, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len4 = WASM_VECTOR_LEN;
        var ptr5 = isLikeNone(original_format) ? 0 : passStringToWasm0(original_format, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len5 = WASM_VECTOR_LEN;
        var ptr6 = isLikeNone(raw_content) ? 0 : passStringToWasm0(raw_content, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len6 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__unified_content__create_unified_content(port_, ptr0, len0, ptr1, len1, ptr2, len2, ptr3, len3, ptr4, len4, blocks, ptr5, len5, ptr6, len6);
    }
    exports.wire__crate__api__unified_content__create_unified_content = wire__crate__api__unified_content__create_unified_content;

    /**
     * @param {any} port_
     * @param {string} db_path
     * @param {string} id
     */
    function wire__crate__api__unified_content__delete_unified_content(port_, db_path, id) {
        const ptr0 = passStringToWasm0(db_path, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__unified_content__delete_unified_content(port_, ptr0, len0, ptr1, len1);
    }
    exports.wire__crate__api__unified_content__delete_unified_content = wire__crate__api__unified_content__delete_unified_content;

    /**
     * @param {any} port_
     * @param {string} db_path
     * @param {string} id
     */
    function wire__crate__api__unified_content__get_unified_content(port_, db_path, id) {
        const ptr0 = passStringToWasm0(db_path, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__unified_content__get_unified_content(port_, ptr0, len0, ptr1, len1);
    }
    exports.wire__crate__api__unified_content__get_unified_content = wire__crate__api__unified_content__get_unified_content;

    /**
     * @param {any} port_
     * @param {string} db_path
     * @param {string} id
     * @param {any} blocks
     */
    function wire__crate__api__unified_content__update_content_blocks(port_, db_path, id, blocks) {
        const ptr0 = passStringToWasm0(db_path, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__unified_content__update_content_blocks(port_, ptr0, len0, ptr1, len1, blocks);
    }
    exports.wire__crate__api__unified_content__update_content_blocks = wire__crate__api__unified_content__update_content_blocks;

    /**
     * @param {any} port_
     * @param {string} platform
     * @param {any} current_build_number
     */
    function wire__crate__api__updater__desktop_updater_cleanup_pending(port_, platform, current_build_number) {
        const ptr0 = passStringToWasm0(platform, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__updater__desktop_updater_cleanup_pending(port_, ptr0, len0, current_build_number);
    }
    exports.wire__crate__api__updater__desktop_updater_cleanup_pending = wire__crate__api__updater__desktop_updater_cleanup_pending;

    /**
     * @param {any} port_
     * @param {string} file_path
     * @param {string} platform
     * @param {any} target_build_number
     */
    function wire__crate__api__updater__desktop_updater_launch_installer(port_, file_path, platform, target_build_number) {
        const ptr0 = passStringToWasm0(file_path, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(platform, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__updater__desktop_updater_launch_installer(port_, ptr0, len0, ptr1, len1, target_build_number);
    }
    exports.wire__crate__api__updater__desktop_updater_launch_installer = wire__crate__api__updater__desktop_updater_launch_installer;

    /**
     * @param {any} port_
     * @param {any} results
     * @param {any} embeddings
     * @param {number} lambda
     * @param {any} k
     */
    function wire__crate__api__vector_store__search__diversify_results(port_, results, embeddings, lambda, k) {
        wasm.wire__crate__api__vector_store__search__diversify_results(port_, results, embeddings, lambda, k);
    }
    exports.wire__crate__api__vector_store__search__diversify_results = wire__crate__api__vector_store__search__diversify_results;

    /**
     * @param {any} port_
     * @param {any} results
     * @param {any} filters
     */
    function wire__crate__api__vector_store__search__filter_by_metadata(port_, results, filters) {
        wasm.wire__crate__api__vector_store__search__filter_by_metadata(port_, results, filters);
    }
    exports.wire__crate__api__vector_store__search__filter_by_metadata = wire__crate__api__vector_store__search__filter_by_metadata;

    /**
     * @param {any} port_
     * @param {any} results
     * @param {number} recency_weight
     * @param {any} current_time
     */
    function wire__crate__api__vector_store__search__rerank_results(port_, results, recency_weight, current_time) {
        wasm.wire__crate__api__vector_store__search__rerank_results(port_, results, recency_weight, current_time);
    }
    exports.wire__crate__api__vector_store__search__rerank_results = wire__crate__api__vector_store__search__rerank_results;

    /**
     * @param {any} port_
     * @param {any} that
     */
    function wire__crate__api__vector_store__storage__VectorStorage_clear(port_, that) {
        wasm.wire__crate__api__vector_store__storage__VectorStorage_clear(port_, that);
    }
    exports.wire__crate__api__vector_store__storage__VectorStorage_clear = wire__crate__api__vector_store__storage__VectorStorage_clear;

    /**
     * @param {any} port_
     * @param {any} that
     */
    function wire__crate__api__vector_store__storage__VectorStorage_count(port_, that) {
        wasm.wire__crate__api__vector_store__storage__VectorStorage_count(port_, that);
    }
    exports.wire__crate__api__vector_store__storage__VectorStorage_count = wire__crate__api__vector_store__storage__VectorStorage_count;

    /**
     * @param {any} port_
     * @param {any} that
     * @param {string} id
     */
    function wire__crate__api__vector_store__storage__VectorStorage_delete(port_, that, id) {
        const ptr0 = passStringToWasm0(id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__vector_store__storage__VectorStorage_delete(port_, that, ptr0, len0);
    }
    exports.wire__crate__api__vector_store__storage__VectorStorage_delete = wire__crate__api__vector_store__storage__VectorStorage_delete;

    /**
     * @param {any} port_
     * @param {any} that
     * @param {string} id
     */
    function wire__crate__api__vector_store__storage__VectorStorage_get(port_, that, id) {
        const ptr0 = passStringToWasm0(id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__vector_store__storage__VectorStorage_get(port_, that, ptr0, len0);
    }
    exports.wire__crate__api__vector_store__storage__VectorStorage_get = wire__crate__api__vector_store__storage__VectorStorage_get;

    /**
     * @param {any} port_
     * @param {any} config
     */
    function wire__crate__api__vector_store__storage__VectorStorage_new(port_, config) {
        wasm.wire__crate__api__vector_store__storage__VectorStorage_new(port_, config);
    }
    exports.wire__crate__api__vector_store__storage__VectorStorage_new = wire__crate__api__vector_store__storage__VectorStorage_new;

    /**
     * @param {any} port_
     * @param {any} that
     * @param {Float32Array} query
     * @param {any} k
     */
    function wire__crate__api__vector_store__storage__VectorStorage_search(port_, that, query, k) {
        const ptr0 = passArrayF32ToWasm0(query, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__vector_store__storage__VectorStorage_search(port_, that, ptr0, len0, k);
    }
    exports.wire__crate__api__vector_store__storage__VectorStorage_search = wire__crate__api__vector_store__storage__VectorStorage_search;

    /**
     * @param {any} port_
     * @param {any} that
     * @param {any} doc
     */
    function wire__crate__api__vector_store__storage__VectorStorage_upsert(port_, that, doc) {
        wasm.wire__crate__api__vector_store__storage__VectorStorage_upsert(port_, that, doc);
    }
    exports.wire__crate__api__vector_store__storage__VectorStorage_upsert = wire__crate__api__vector_store__storage__VectorStorage_upsert;

    /**
     * @param {any} port_
     * @param {any} that
     * @param {any} docs
     */
    function wire__crate__api__vector_store__storage__VectorStorage_upsert_batch(port_, that, docs) {
        wasm.wire__crate__api__vector_store__storage__VectorStorage_upsert_batch(port_, that, docs);
    }
    exports.wire__crate__api__vector_store__storage__VectorStorage_upsert_batch = wire__crate__api__vector_store__storage__VectorStorage_upsert_batch;

    /**
     * @param {any} port_
     * @param {string} id
     * @param {string} content
     * @param {Float32Array} embedding
     * @param {any} metadata
     */
    function wire__crate__api__vector_store__types__vector_document_new(port_, id, content, embedding, metadata) {
        const ptr0 = passStringToWasm0(id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(content, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        const ptr2 = passArrayF32ToWasm0(embedding, wasm.__wbindgen_malloc);
        const len2 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__vector_store__types__vector_document_new(port_, ptr0, len0, ptr1, len1, ptr2, len2, metadata);
    }
    exports.wire__crate__api__vector_store__types__vector_document_new = wire__crate__api__vector_store__types__vector_document_new;

    /**
     * @param {any} port_
     * @param {any} that
     * @param {any} expected_dim
     */
    function wire__crate__api__vector_store__types__vector_document_validate_embedding(port_, that, expected_dim) {
        wasm.wire__crate__api__vector_store__types__vector_document_validate_embedding(port_, that, expected_dim);
    }
    exports.wire__crate__api__vector_store__types__vector_document_validate_embedding = wire__crate__api__vector_store__types__vector_document_validate_embedding;

    /**
     * @param {any} port_
     * @param {any} doc
     * @param {number} score
     */
    function wire__crate__api__vector_store__types__vector_search_result_from_document(port_, doc, score) {
        wasm.wire__crate__api__vector_store__types__vector_search_result_from_document(port_, doc, score);
    }
    exports.wire__crate__api__vector_store__types__vector_search_result_from_document = wire__crate__api__vector_store__types__vector_search_result_from_document;

    /**
     * @param {any} port_
     */
    function wire__crate__api__vector_store__types__vector_store_config_default(port_) {
        wasm.wire__crate__api__vector_store__types__vector_store_config_default(port_);
    }
    exports.wire__crate__api__vector_store__types__vector_store_config_default = wire__crate__api__vector_store__types__vector_store_config_default;

    /**
     * @param {any} port_
     */
    function wire__crate__api__vector_store__vector_store_clear(port_) {
        wasm.wire__crate__api__vector_store__vector_store_clear(port_);
    }
    exports.wire__crate__api__vector_store__vector_store_clear = wire__crate__api__vector_store__vector_store_clear;

    /**
     * @param {any} port_
     */
    function wire__crate__api__vector_store__vector_store_count(port_) {
        wasm.wire__crate__api__vector_store__vector_store_count(port_);
    }
    exports.wire__crate__api__vector_store__vector_store_count = wire__crate__api__vector_store__vector_store_count;

    /**
     * @param {any} port_
     * @param {string} doc_id
     */
    function wire__crate__api__vector_store__vector_store_delete(port_, doc_id) {
        const ptr0 = passStringToWasm0(doc_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__vector_store__vector_store_delete(port_, ptr0, len0);
    }
    exports.wire__crate__api__vector_store__vector_store_delete = wire__crate__api__vector_store__vector_store_delete;

    /**
     * @param {any} port_
     * @param {string} db_path
     * @param {any} embedding_dim
     */
    function wire__crate__api__vector_store__vector_store_init(port_, db_path, embedding_dim) {
        const ptr0 = passStringToWasm0(db_path, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__vector_store__vector_store_init(port_, ptr0, len0, embedding_dim);
    }
    exports.wire__crate__api__vector_store__vector_store_init = wire__crate__api__vector_store__vector_store_init;

    /**
     * @param {any} port_
     */
    function wire__crate__api__vector_store__vector_store_is_initialized(port_) {
        wasm.wire__crate__api__vector_store__vector_store_is_initialized(port_);
    }
    exports.wire__crate__api__vector_store__vector_store_is_initialized = wire__crate__api__vector_store__vector_store_is_initialized;

    /**
     * @param {any} port_
     * @param {Float32Array} query_embedding
     * @param {any} n_results
     */
    function wire__crate__api__vector_store__vector_store_search(port_, query_embedding, n_results) {
        const ptr0 = passArrayF32ToWasm0(query_embedding, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__vector_store__vector_store_search(port_, ptr0, len0, n_results);
    }
    exports.wire__crate__api__vector_store__vector_store_search = wire__crate__api__vector_store__vector_store_search;

    /**
     * @param {any} port_
     */
    function wire__crate__api__vector_store__vector_store_shutdown(port_) {
        wasm.wire__crate__api__vector_store__vector_store_shutdown(port_);
    }
    exports.wire__crate__api__vector_store__vector_store_shutdown = wire__crate__api__vector_store__vector_store_shutdown;

    /**
     * @param {any} port_
     * @param {any} doc
     */
    function wire__crate__api__vector_store__vector_store_upsert(port_, doc) {
        wasm.wire__crate__api__vector_store__vector_store_upsert(port_, doc);
    }
    exports.wire__crate__api__vector_store__vector_store_upsert = wire__crate__api__vector_store__vector_store_upsert;

    /**
     * @param {any} port_
     * @param {any} docs
     */
    function wire__crate__api__vector_store__vector_store_upsert_batch(port_, docs) {
        wasm.wire__crate__api__vector_store__vector_store_upsert_batch(port_, docs);
    }
    exports.wire__crate__api__vector_store__vector_store_upsert_batch = wire__crate__api__vector_store__vector_store_upsert_batch;

    /**
     * @param {any} port_
     * @param {string} yar_path
     * @param {string} asset_type
     * @param {string} asset_name
     * @param {Uint8Array} data
     */
    function wire__crate__api__yar__packager__add_yar_asset(port_, yar_path, asset_type, asset_name, data) {
        const ptr0 = passStringToWasm0(yar_path, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(asset_type, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        const ptr2 = passStringToWasm0(asset_name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len2 = WASM_VECTOR_LEN;
        const ptr3 = passArray8ToWasm0(data, wasm.__wbindgen_malloc);
        const len3 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__yar__packager__add_yar_asset(port_, ptr0, len0, ptr1, len1, ptr2, len2, ptr3, len3);
    }
    exports.wire__crate__api__yar__packager__add_yar_asset = wire__crate__api__yar__packager__add_yar_asset;

    /**
     * @param {any} port_
     * @param {string} pdf_path
     * @param {string} output_path
     * @param {string} options_json
     */
    function wire__crate__api__yar__packager__create_yar_package(port_, pdf_path, output_path, options_json) {
        const ptr0 = passStringToWasm0(pdf_path, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(output_path, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        const ptr2 = passStringToWasm0(options_json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len2 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__yar__packager__create_yar_package(port_, ptr0, len0, ptr1, len1, ptr2, len2);
    }
    exports.wire__crate__api__yar__packager__create_yar_package = wire__crate__api__yar__packager__create_yar_package;

    /**
     * @param {any} port_
     * @param {string} yar_path
     * @param {string} file_path
     */
    function wire__crate__api__yar__packager__extract_yar_file(port_, yar_path, file_path) {
        const ptr0 = passStringToWasm0(yar_path, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(file_path, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__yar__packager__extract_yar_file(port_, ptr0, len0, ptr1, len1);
    }
    exports.wire__crate__api__yar__packager__extract_yar_file = wire__crate__api__yar__packager__extract_yar_file;

    /**
     * @param {any} port_
     * @param {string} yar_path
     */
    function wire__crate__api__yar__packager__list_yar_contents(port_, yar_path) {
        const ptr0 = passStringToWasm0(yar_path, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__yar__packager__list_yar_contents(port_, ptr0, len0);
    }
    exports.wire__crate__api__yar__packager__list_yar_contents = wire__crate__api__yar__packager__list_yar_contents;

    /**
     * @param {any} port_
     * @param {string} yar_path
     */
    function wire__crate__api__yar__packager__read_yar_manifest(port_, yar_path) {
        const ptr0 = passStringToWasm0(yar_path, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__yar__packager__read_yar_manifest(port_, ptr0, len0);
    }
    exports.wire__crate__api__yar__packager__read_yar_manifest = wire__crate__api__yar__packager__read_yar_manifest;

    /**
     * @param {any} port_
     * @param {number} that
     */
    function wire__crate__api__yar__types__yar_asset_type_dir_path(port_, that) {
        wasm.wire__crate__api__yar__types__yar_asset_type_dir_path(port_, that);
    }
    exports.wire__crate__api__yar__types__yar_asset_type_dir_path = wire__crate__api__yar__types__yar_asset_type_dir_path;

    /**
     * @param {any} port_
     * @param {number} that
     */
    function wire__crate__api__yar__types__yar_asset_type_extension(port_, that) {
        wasm.wire__crate__api__yar__types__yar_asset_type_extension(port_, that);
    }
    exports.wire__crate__api__yar__types__yar_asset_type_extension = wire__crate__api__yar__types__yar_asset_type_extension;

    /**
     * @param {any} port_
     */
    function wire__crate__api__yar__types__yar_create_options_default(port_) {
        wasm.wire__crate__api__yar__types__yar_create_options_default(port_);
    }
    exports.wire__crate__api__yar__types__yar_create_options_default = wire__crate__api__yar__types__yar_create_options_default;

    /**
     * @param {any} port_
     */
    function wire__crate__api__yar__types__yar_generated_default(port_) {
        wasm.wire__crate__api__yar__types__yar_generated_default(port_);
    }
    exports.wire__crate__api__yar__types__yar_generated_default = wire__crate__api__yar__types__yar_generated_default;

    /**
     * @param {any} port_
     * @param {string} json
     */
    function wire__crate__api__yfm__appflowy_to_yfm(port_, json) {
        const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__yfm__appflowy_to_yfm(port_, ptr0, len0);
    }
    exports.wire__crate__api__yfm__appflowy_to_yfm = wire__crate__api__yfm__appflowy_to_yfm;

    /**
     * @param {any} port_
     * @param {string} input
     */
    function wire__crate__api__yfm__extract_cards_from_yfm(port_, input) {
        const ptr0 = passStringToWasm0(input, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__yfm__extract_cards_from_yfm(port_, ptr0, len0);
    }
    exports.wire__crate__api__yfm__extract_cards_from_yfm = wire__crate__api__yfm__extract_cards_from_yfm;

    /**
     * @param {any} port_
     * @param {string} json
     */
    function wire__crate__api__yfm__migrate_json(port_, json) {
        const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__yfm__migrate_json(port_, ptr0, len0);
    }
    exports.wire__crate__api__yfm__migrate_json = wire__crate__api__yfm__migrate_json;

    /**
     * @param {any} port_
     * @param {string} input
     */
    function wire__crate__api__yfm__parse_yfm(port_, input) {
        const ptr0 = passStringToWasm0(input, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__yfm__parse_yfm(port_, ptr0, len0);
    }
    exports.wire__crate__api__yfm__parse_yfm = wire__crate__api__yfm__parse_yfm;

    /**
     * @param {any} port_
     * @param {string} blocks_json
     */
    function wire__crate__api__yfm__serialize_yfm(port_, blocks_json) {
        const ptr0 = passStringToWasm0(blocks_json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__yfm__serialize_yfm(port_, ptr0, len0);
    }
    exports.wire__crate__api__yfm__serialize_yfm = wire__crate__api__yfm__serialize_yfm;

    /**
     * @param {any} port_
     * @param {string} block_id
     * @param {string} fsrs_json
     */
    function wire__crate__api__yfm__update_block_fsrs_data(port_, block_id, fsrs_json) {
        const ptr0 = passStringToWasm0(block_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(fsrs_json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__yfm__update_block_fsrs_data(port_, ptr0, len0, ptr1, len1);
    }
    exports.wire__crate__api__yfm__update_block_fsrs_data = wire__crate__api__yfm__update_block_fsrs_data;

    /**
     * @param {any} port_
     * @param {string} yfm
     */
    function wire__crate__api__yfm__yfm_to_appflowy(port_, yfm) {
        const ptr0 = passStringToWasm0(yfm, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__yfm__yfm_to_appflowy(port_, ptr0, len0);
    }
    exports.wire__crate__api__yfm__yfm_to_appflowy = wire__crate__api__yfm__yfm_to_appflowy;

    /**
     * @param {any} port_
     * @param {string} name
     */
    function wire__crate__api__yns__parser__yns_canonical_name(port_, name) {
        const ptr0 = passStringToWasm0(name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__yns__parser__yns_canonical_name(port_, ptr0, len0);
    }
    exports.wire__crate__api__yns__parser__yns_canonical_name = wire__crate__api__yns__parser__yns_canonical_name;

    /**
     * @param {any} port_
     * @param {string} source
     */
    function wire__crate__api__yns__parser__yns_extract_commands(port_, source) {
        const ptr0 = passStringToWasm0(source, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__yns__parser__yns_extract_commands(port_, ptr0, len0);
    }
    exports.wire__crate__api__yns__parser__yns_extract_commands = wire__crate__api__yns__parser__yns_extract_commands;

    /**
     * @param {any} port_
     * @param {string} source
     */
    function wire__crate__api__yns__parser__yns_get_actions(port_, source) {
        const ptr0 = passStringToWasm0(source, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__yns__parser__yns_get_actions(port_, ptr0, len0);
    }
    exports.wire__crate__api__yns__parser__yns_get_actions = wire__crate__api__yns__parser__yns_get_actions;

    /**
     * @param {any} port_
     * @param {string} name
     */
    function wire__crate__api__yns__parser__yns_get_command_color(port_, name) {
        const ptr0 = passStringToWasm0(name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__yns__parser__yns_get_command_color(port_, ptr0, len0);
    }
    exports.wire__crate__api__yns__parser__yns_get_command_color = wire__crate__api__yns__parser__yns_get_command_color;

    /**
     * @param {any} port_
     * @param {string} source
     */
    function wire__crate__api__yns__parser__yns_get_graph_data(port_, source) {
        const ptr0 = passStringToWasm0(source, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__yns__parser__yns_get_graph_data(port_, ptr0, len0);
    }
    exports.wire__crate__api__yns__parser__yns_get_graph_data = wire__crate__api__yns__parser__yns_get_graph_data;

    /**
     * @param {any} port_
     * @param {string} source
     */
    function wire__crate__api__yns__parser__yns_get_outline(port_, source) {
        const ptr0 = passStringToWasm0(source, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__yns__parser__yns_get_outline(port_, ptr0, len0);
    }
    exports.wire__crate__api__yns__parser__yns_get_outline = wire__crate__api__yns__parser__yns_get_outline;

    /**
     * @param {any} port_
     * @param {string} source
     */
    function wire__crate__api__yns__parser__yns_get_render_spans(port_, source) {
        const ptr0 = passStringToWasm0(source, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__yns__parser__yns_get_render_spans(port_, ptr0, len0);
    }
    exports.wire__crate__api__yns__parser__yns_get_render_spans = wire__crate__api__yns__parser__yns_get_render_spans;

    /**
     * @param {any} port_
     * @param {string} source
     */
    function wire__crate__api__yns__parser__yns_has_syntax(port_, source) {
        const ptr0 = passStringToWasm0(source, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__yns__parser__yns_has_syntax(port_, ptr0, len0);
    }
    exports.wire__crate__api__yns__parser__yns_has_syntax = wire__crate__api__yns__parser__yns_has_syntax;

    /**
     * @param {any} port_
     * @param {string} name
     */
    function wire__crate__api__yns__parser__yns_is_valid_command(port_, name) {
        const ptr0 = passStringToWasm0(name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__yns__parser__yns_is_valid_command(port_, ptr0, len0);
    }
    exports.wire__crate__api__yns__parser__yns_is_valid_command = wire__crate__api__yns__parser__yns_is_valid_command;

    /**
     * @param {any} port_
     * @param {string} source
     */
    function wire__crate__api__yns__parser__yns_parse(port_, source) {
        const ptr0 = passStringToWasm0(source, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__yns__parser__yns_parse(port_, ptr0, len0);
    }
    exports.wire__crate__api__yns__parser__yns_parse = wire__crate__api__yns__parser__yns_parse;

    /**
     * @param {any} port_
     * @param {string} source
     * @param {any} edit_start
     * @param {any} edit_end
     * @param {string} new_text
     * @param {any} _previous_hash
     */
    function wire__crate__api__yns__parser__yns_parse_incremental(port_, source, edit_start, edit_end, new_text, _previous_hash) {
        const ptr0 = passStringToWasm0(source, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(new_text, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__yns__parser__yns_parse_incremental(port_, ptr0, len0, edit_start, edit_end, ptr1, len1, _previous_hash);
    }
    exports.wire__crate__api__yns__parser__yns_parse_incremental = wire__crate__api__yns__parser__yns_parse_incremental;

    /**
     * @param {any} port_
     * @param {string} source
     */
    function wire__crate__api__yns__parser__yns_parse_json(port_, source) {
        const ptr0 = passStringToWasm0(source, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.wire__crate__api__yns__parser__yns_parse_json(port_, ptr0, len0);
    }
    exports.wire__crate__api__yns__parser__yns_parse_json = wire__crate__api__yns__parser__yns_parse_json;

    /**
     * @param {any} port_
     */
    function wire__crate__api__yns__types__yns_graph_data_default(port_) {
        wasm.wire__crate__api__yns__types__yns_graph_data_default(port_);
    }
    exports.wire__crate__api__yns__types__yns_graph_data_default = wire__crate__api__yns__types__yns_graph_data_default;
    const import1 = require("env");

    function __wbg_get_imports() {
        const import0 = {
            __proto__: null,
            __wbg_Number_a5a435bd7bbec835: function(arg0) {
                const ret = Number(arg0);
                return ret;
            },
            __wbg___wbindgen_bigint_get_as_i64_447a76b5c6ef7bda: function(arg0, arg1) {
                const v = arg1;
                const ret = typeof(v) === 'bigint' ? v : undefined;
                getDataViewMemory0().setBigInt64(arg0 + 8 * 1, isLikeNone(ret) ? BigInt(0) : ret, true);
                getDataViewMemory0().setInt32(arg0 + 4 * 0, !isLikeNone(ret), true);
            },
            __wbg___wbindgen_debug_string_5398f5bb970e0daa: function(arg0, arg1) {
                const ret = debugString(arg1);
                const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
                const len1 = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
                getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
            },
            __wbg___wbindgen_is_falsy_30906e697739fcc2: function(arg0) {
                const ret = !arg0;
                return ret;
            },
            __wbg___wbindgen_is_function_3c846841762788c1: function(arg0) {
                const ret = typeof(arg0) === 'function';
                return ret;
            },
            __wbg___wbindgen_is_null_0b605fc6b167c56f: function(arg0) {
                const ret = arg0 === null;
                return ret;
            },
            __wbg___wbindgen_is_object_781bc9f159099513: function(arg0) {
                const val = arg0;
                const ret = typeof(val) === 'object' && val !== null;
                return ret;
            },
            __wbg___wbindgen_is_string_7ef6b97b02428fae: function(arg0) {
                const ret = typeof(arg0) === 'string';
                return ret;
            },
            __wbg___wbindgen_is_undefined_52709e72fb9f179c: function(arg0) {
                const ret = arg0 === undefined;
                return ret;
            },
            __wbg___wbindgen_jsval_eq_ee31bfad3e536463: function(arg0, arg1) {
                const ret = arg0 === arg1;
                return ret;
            },
            __wbg___wbindgen_memory_edb3f01e3930bbf6: function() {
                const ret = wasm.memory;
                return ret;
            },
            __wbg___wbindgen_module_bf945c07123bafe2: function() {
                const ret = wasmModule;
                return ret;
            },
            __wbg___wbindgen_number_get_34bb9d9dcfa21373: function(arg0, arg1) {
                const obj = arg1;
                const ret = typeof(obj) === 'number' ? obj : undefined;
                getDataViewMemory0().setFloat64(arg0 + 8 * 1, isLikeNone(ret) ? 0 : ret, true);
                getDataViewMemory0().setInt32(arg0 + 4 * 0, !isLikeNone(ret), true);
            },
            __wbg___wbindgen_string_get_395e606bd0ee4427: function(arg0, arg1) {
                const obj = arg1;
                const ret = typeof(obj) === 'string' ? obj : undefined;
                var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
                var len1 = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
                getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
            },
            __wbg___wbindgen_throw_6ddd609b62940d55: function(arg0, arg1) {
                var v0 = getCachedStringFromWasm0(arg0, arg1);
                throw new Error(v0);
            },
            __wbg__wbg_cb_unref_6b5b6b8576d35cb1: function(arg0) {
                arg0._wbg_cb_unref();
            },
            __wbg_call_2d781c1f4d5c0ef8: function() { return handleError(function (arg0, arg1, arg2) {
                const ret = arg0.call(arg1, arg2);
                return ret;
            }, arguments); },
            __wbg_createObjectURL_f141426bcc1f70aa: function() { return handleError(function (arg0, arg1) {
                const ret = URL.createObjectURL(arg1);
                const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
                const len1 = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
                getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
            }, arguments); },
            __wbg_crypto_38df2bab126b63dc: function(arg0) {
                const ret = arg0.crypto;
                return ret;
            },
            __wbg_data_a3d9ff9cdd801002: function(arg0) {
                const ret = arg0.data;
                return ret;
            },
            __wbg_error_0a6d9d8786011745: function(arg0, arg1) {
                var v0 = getCachedStringFromWasm0(arg0, arg1);
                console.error(v0);
            },
            __wbg_error_a6fa202b58aa1cd3: function(arg0, arg1) {
                var v0 = getCachedStringFromWasm0(arg0, arg1);
                if (arg0 !== 0) { wasm.__wbindgen_free(arg0, arg1, 1); }
                console.error(v0);
            },
            __wbg_eval_c311194bb27c7836: function() { return handleError(function (arg0, arg1) {
                var v0 = getCachedStringFromWasm0(arg0, arg1);
                const ret = eval(v0);
                return ret;
            }, arguments); },
            __wbg_getRandomValues_5fa7f49f99c8f91b: function() { return handleError(function (arg0) {
                globalThis.crypto.getRandomValues(arg0);
            }, arguments); },
            __wbg_getRandomValues_c44a50d8cfdaebeb: function() { return handleError(function (arg0, arg1) {
                arg0.getRandomValues(arg1);
            }, arguments); },
            __wbg_getTime_1dad7b5386ddd2d9: function(arg0) {
                const ret = arg0.getTime();
                return ret;
            },
            __wbg_get_3ef1eba1850ade27: function() { return handleError(function (arg0, arg1) {
                const ret = Reflect.get(arg0, arg1);
                return ret;
            }, arguments); },
            __wbg_get_a8ee5c45dabc1b3b: function(arg0, arg1) {
                const ret = arg0[arg1 >>> 0];
                return ret;
            },
            __wbg_get_unchecked_329cfe50afab7352: function(arg0, arg1) {
                const ret = arg0[arg1 >>> 0];
                return ret;
            },
            __wbg_instanceof_BroadcastChannel_df501e90253d6f05: function(arg0) {
                let result;
                try {
                    result = arg0 instanceof BroadcastChannel;
                } catch (_) {
                    result = false;
                }
                const ret = result;
                return ret;
            },
            __wbg_instanceof_ErrorEvent_6a96a6c66f3a1319: function(arg0) {
                let result;
                try {
                    result = arg0 instanceof ErrorEvent;
                } catch (_) {
                    result = false;
                }
                const ret = result;
                return ret;
            },
            __wbg_instanceof_MessageEvent_07f1fe3e48c4c6d6: function(arg0) {
                let result;
                try {
                    result = arg0 instanceof MessageEvent;
                } catch (_) {
                    result = false;
                }
                const ret = result;
                return ret;
            },
            __wbg_instanceof_MessagePort_0103f83d2ba09ecb: function(arg0) {
                let result;
                try {
                    result = arg0 instanceof MessagePort;
                } catch (_) {
                    result = false;
                }
                const ret = result;
                return ret;
            },
            __wbg_isArray_33b91feb269ff46e: function(arg0) {
                const ret = Array.isArray(arg0);
                return ret;
            },
            __wbg_length_259ee9d041e381ad: function(arg0) {
                const ret = arg0.length;
                return ret;
            },
            __wbg_length_b3416cf66a5452c8: function(arg0) {
                const ret = arg0.length;
                return ret;
            },
            __wbg_length_ea16607d7b61445b: function(arg0) {
                const ret = arg0.length;
                return ret;
            },
            __wbg_message_67f6368dc2a526af: function(arg0, arg1) {
                const ret = arg1.message;
                const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
                const len1 = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
                getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
            },
            __wbg_msCrypto_bd5a034af96bcba6: function(arg0) {
                const ret = arg0.msCrypto;
                return ret;
            },
            __wbg_name_8a7d865eef27bac1: function(arg0, arg1) {
                const ret = arg1.name;
                const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
                const len1 = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
                getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
            },
            __wbg_new_0_1dcafdf5e786e876: function() {
                const ret = new Date();
                return ret;
            },
            __wbg_new_227d7c05414eb861: function() {
                const ret = new Error();
                return ret;
            },
            __wbg_new_3acd383af1655b5f: function() { return handleError(function (arg0, arg1) {
                var v0 = getCachedStringFromWasm0(arg0, arg1);
                const ret = new Worker(v0);
                return ret;
            }, arguments); },
            __wbg_new_5f486cdf45a04d78: function(arg0) {
                const ret = new Uint8Array(arg0);
                return ret;
            },
            __wbg_new_7beff0cea022eabb: function() { return handleError(function (arg0, arg1) {
                var v0 = getCachedStringFromWasm0(arg0, arg1);
                const ret = new BroadcastChannel(v0);
                return ret;
            }, arguments); },
            __wbg_new_ab79df5bd7c26067: function() {
                const ret = new Object();
                return ret;
            },
            __wbg_new_from_slice_22da9388ac046e50: function(arg0, arg1) {
                const ret = new Uint8Array(getArrayU8FromWasm0(arg0, arg1));
                return ret;
            },
            __wbg_new_from_slice_898ac63cbd46f332: function(arg0, arg1) {
                const ret = new Uint32Array(getArrayU32FromWasm0(arg0, arg1));
                return ret;
            },
            __wbg_new_from_slice_ff2c15e8e05ffdfc: function(arg0, arg1) {
                const ret = new Float32Array(getArrayF32FromWasm0(arg0, arg1));
                return ret;
            },
            __wbg_new_typed_bccac67128ed885a: function() {
                const ret = new Array();
                return ret;
            },
            __wbg_new_with_blob_sequence_and_options_20141264e40902c3: function() { return handleError(function (arg0, arg1) {
                const ret = new Blob(arg0, arg1);
                return ret;
            }, arguments); },
            __wbg_new_with_length_825018a1616e9e55: function(arg0) {
                const ret = new Uint8Array(arg0 >>> 0);
                return ret;
            },
            __wbg_node_84ea875411254db1: function(arg0) {
                const ret = arg0.node;
                return ret;
            },
            __wbg_postMessage_209d8a3980994d8a: function() { return handleError(function (arg0, arg1) {
                arg0.postMessage(arg1);
            }, arguments); },
            __wbg_postMessage_564f0071531c08c3: function() { return handleError(function (arg0, arg1) {
                arg0.postMessage(arg1);
            }, arguments); },
            __wbg_postMessage_5ed5275983f7dad2: function() { return handleError(function (arg0, arg1, arg2) {
                arg0.postMessage(arg1, arg2);
            }, arguments); },
            __wbg_postMessage_edb4c90a528e5a8c: function() { return handleError(function (arg0, arg1) {
                arg0.postMessage(arg1);
            }, arguments); },
            __wbg_process_44c7a14e11e9f69e: function(arg0) {
                const ret = arg0.process;
                return ret;
            },
            __wbg_prototypesetcall_247ac4333d4d3cb4: function(arg0, arg1, arg2) {
                Float32Array.prototype.set.call(getArrayF32FromWasm0(arg0, arg1), arg2);
            },
            __wbg_prototypesetcall_d62e5099504357e6: function(arg0, arg1, arg2) {
                Uint8Array.prototype.set.call(getArrayU8FromWasm0(arg0, arg1), arg2);
            },
            __wbg_push_e87b0e732085a946: function(arg0, arg1) {
                const ret = arg0.push(arg1);
                return ret;
            },
            __wbg_randomFillSync_6c25eac9869eb53c: function() { return handleError(function (arg0, arg1) {
                arg0.randomFillSync(arg1);
            }, arguments); },
            __wbg_require_b4edbdcf3e2a1ef0: function() { return handleError(function () {
                const ret = module.require;
                return ret;
            }, arguments); },
            __wbg_set_7eaa4f96924fd6b3: function() { return handleError(function (arg0, arg1, arg2) {
                const ret = Reflect.set(arg0, arg1, arg2);
                return ret;
            }, arguments); },
            __wbg_set_onerror_492780fd0d8591f5: function(arg0, arg1) {
                arg0.onerror = arg1;
            },
            __wbg_set_onmessage_d5dc11c291025af6: function(arg0, arg1) {
                arg0.onmessage = arg1;
            },
            __wbg_set_type_33e79f1b45a78c37: function(arg0, arg1, arg2) {
                var v0 = getCachedStringFromWasm0(arg1, arg2);
                arg0.type = v0;
            },
            __wbg_stack_3b0d974bbf31e44f: function(arg0, arg1) {
                const ret = arg1.stack;
                const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
                const len1 = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
                getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
            },
            __wbg_static_accessor_GLOBAL_8adb955bd33fac2f: function() {
                const ret = typeof global === 'undefined' ? null : global;
                return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
            },
            __wbg_static_accessor_GLOBAL_THIS_ad356e0db91c7913: function() {
                const ret = typeof globalThis === 'undefined' ? null : globalThis;
                return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
            },
            __wbg_static_accessor_SELF_f207c857566db248: function() {
                const ret = typeof self === 'undefined' ? null : self;
                return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
            },
            __wbg_static_accessor_WINDOW_bb9f1ba69d61b386: function() {
                const ret = typeof window === 'undefined' ? null : window;
                return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
            },
            __wbg_subarray_a068d24e39478a8a: function(arg0, arg1, arg2) {
                const ret = arg0.subarray(arg1 >>> 0, arg2 >>> 0);
                return ret;
            },
            __wbg_unshift_9972f44504f24b73: function(arg0, arg1) {
                const ret = arg0.unshift(arg1);
                return ret;
            },
            __wbg_versions_276b2795b1c6a219: function(arg0) {
                const ret = arg0.versions;
                return ret;
            },
            __wbindgen_cast_0000000000000001: function(arg0, arg1) {
                // Cast intrinsic for `Closure(Closure { dtor_idx: 1829, function: Function { arguments: [NamedExternref("MessageEvent")], shim_idx: 1830, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
                const ret = makeMutClosure(arg0, arg1, wasm.wasm_bindgen_ef739d0bf25542d6___closure__destroy___dyn_core_50ec60b8eae9a0c6___ops__function__FnMut__web_sys_3c3a46784e7aa9d2___features__gen_MessageEvent__MessageEvent____Output_______, wasm_bindgen_ef739d0bf25542d6___convert__closures_____invoke___web_sys_3c3a46784e7aa9d2___features__gen_MessageEvent__MessageEvent______true_);
                return ret;
            },
            __wbindgen_cast_0000000000000002: function(arg0, arg1) {
                // Cast intrinsic for `Closure(Closure { dtor_idx: 974, function: Function { arguments: [NamedExternref("Event")], shim_idx: 999, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
                const ret = makeMutClosure(arg0, arg1, wasm.wasm_bindgen_ef739d0bf25542d6___closure__destroy___dyn_core_50ec60b8eae9a0c6___ops__function__FnMut__web_sys_3c3a46784e7aa9d2___features__gen_Event__Event____Output_______, wasm_bindgen_ef739d0bf25542d6___convert__closures_____invoke___web_sys_3c3a46784e7aa9d2___features__gen_Event__Event______true_);
                return ret;
            },
            __wbindgen_cast_0000000000000003: function(arg0) {
                // Cast intrinsic for `F64 -> Externref`.
                const ret = arg0;
                return ret;
            },
            __wbindgen_cast_0000000000000004: function(arg0) {
                // Cast intrinsic for `I64 -> Externref`.
                const ret = arg0;
                return ret;
            },
            __wbindgen_cast_0000000000000005: function(arg0, arg1) {
                var v0 = getCachedStringFromWasm0(arg0, arg1);
                // Cast intrinsic for `Ref(CachedString) -> Externref`.
                const ret = v0;
                return ret;
            },
            __wbindgen_cast_0000000000000006: function(arg0, arg1) {
                // Cast intrinsic for `Ref(Slice(U8)) -> NamedExternref("Uint8Array")`.
                const ret = getArrayU8FromWasm0(arg0, arg1);
                return ret;
            },
            __wbindgen_cast_0000000000000007: function(arg0) {
                // Cast intrinsic for `U64 -> Externref`.
                const ret = BigInt.asUintN(64, arg0);
                return ret;
            },
            __wbindgen_init_externref_table: function() {
                const table = wasm.__wbindgen_externrefs;
                const offset = table.grow(4);
                table.set(0, undefined);
                table.set(offset + 0, undefined);
                table.set(offset + 1, null);
                table.set(offset + 2, true);
                table.set(offset + 3, false);
            },
        };
        return {
            __proto__: null,
            "./asaka_bridge_bg.js": import0,
            "env": import1,
        };
    }

    function wasm_bindgen_ef739d0bf25542d6___convert__closures_____invoke___web_sys_3c3a46784e7aa9d2___features__gen_MessageEvent__MessageEvent______true_(arg0, arg1, arg2) {
        wasm.wasm_bindgen_ef739d0bf25542d6___convert__closures_____invoke___web_sys_3c3a46784e7aa9d2___features__gen_MessageEvent__MessageEvent______true_(arg0, arg1, arg2);
    }

    function wasm_bindgen_ef739d0bf25542d6___convert__closures_____invoke___web_sys_3c3a46784e7aa9d2___features__gen_Event__Event______true_(arg0, arg1, arg2) {
        wasm.wasm_bindgen_ef739d0bf25542d6___convert__closures_____invoke___web_sys_3c3a46784e7aa9d2___features__gen_Event__Event______true_(arg0, arg1, arg2);
    }

    const WorkerPoolFinalization = (typeof FinalizationRegistry === 'undefined')
        ? { register: () => {}, unregister: () => {} }
        : new FinalizationRegistry(ptr => wasm.__wbg_workerpool_free(ptr >>> 0, 1));

    function addToExternrefTable0(obj) {
        const idx = wasm.__externref_table_alloc();
        wasm.__wbindgen_externrefs.set(idx, obj);
        return idx;
    }

    const CLOSURE_DTORS = (typeof FinalizationRegistry === 'undefined')
        ? { register: () => {}, unregister: () => {} }
        : new FinalizationRegistry(state => state.dtor(state.a, state.b));

    function debugString(val) {
        // primitive types
        const type = typeof val;
        if (type == 'number' || type == 'boolean' || val == null) {
            return  `${val}`;
        }
        if (type == 'string') {
            return `"${val}"`;
        }
        if (type == 'symbol') {
            const description = val.description;
            if (description == null) {
                return 'Symbol';
            } else {
                return `Symbol(${description})`;
            }
        }
        if (type == 'function') {
            const name = val.name;
            if (typeof name == 'string' && name.length > 0) {
                return `Function(${name})`;
            } else {
                return 'Function';
            }
        }
        // objects
        if (Array.isArray(val)) {
            const length = val.length;
            let debug = '[';
            if (length > 0) {
                debug += debugString(val[0]);
            }
            for(let i = 1; i < length; i++) {
                debug += ', ' + debugString(val[i]);
            }
            debug += ']';
            return debug;
        }
        // Test for built-in
        const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
        let className;
        if (builtInMatches && builtInMatches.length > 1) {
            className = builtInMatches[1];
        } else {
            // Failed to match the standard '[object ClassName]'
            return toString.call(val);
        }
        if (className == 'Object') {
            // we're a user defined class or Object
            // JSON.stringify avoids problems with cycles, and is generally much
            // easier than looping through ownProperties of `val`.
            try {
                return 'Object(' + JSON.stringify(val) + ')';
            } catch (_) {
                return 'Object';
            }
        }
        // errors
        if (val instanceof Error) {
            return `${val.name}: ${val.message}\n${val.stack}`;
        }
        // TODO we could test for more things here, like `Set`s and `Map`s.
        return className;
    }

    function getArrayF32FromWasm0(ptr, len) {
        ptr = ptr >>> 0;
        return getFloat32ArrayMemory0().subarray(ptr / 4, ptr / 4 + len);
    }

    function getArrayU32FromWasm0(ptr, len) {
        ptr = ptr >>> 0;
        return getUint32ArrayMemory0().subarray(ptr / 4, ptr / 4 + len);
    }

    function getArrayU8FromWasm0(ptr, len) {
        ptr = ptr >>> 0;
        return getUint8ArrayMemory0().subarray(ptr / 1, ptr / 1 + len);
    }

    function getCachedStringFromWasm0(ptr, len) {
        if (ptr === 0) {
            return getFromExternrefTable0(len);
        } else {
            return getStringFromWasm0(ptr, len);
        }
    }

    let cachedDataViewMemory0 = null;
    function getDataViewMemory0() {
        if (cachedDataViewMemory0 === null || cachedDataViewMemory0.buffer.detached === true || (cachedDataViewMemory0.buffer.detached === undefined && cachedDataViewMemory0.buffer !== wasm.memory.buffer)) {
            cachedDataViewMemory0 = new DataView(wasm.memory.buffer);
        }
        return cachedDataViewMemory0;
    }

    let cachedFloat32ArrayMemory0 = null;
    function getFloat32ArrayMemory0() {
        if (cachedFloat32ArrayMemory0 === null || cachedFloat32ArrayMemory0.byteLength === 0) {
            cachedFloat32ArrayMemory0 = new Float32Array(wasm.memory.buffer);
        }
        return cachedFloat32ArrayMemory0;
    }

    function getFromExternrefTable0(idx) { return wasm.__wbindgen_externrefs.get(idx); }

    function getStringFromWasm0(ptr, len) {
        ptr = ptr >>> 0;
        return decodeText(ptr, len);
    }

    let cachedUint32ArrayMemory0 = null;
    function getUint32ArrayMemory0() {
        if (cachedUint32ArrayMemory0 === null || cachedUint32ArrayMemory0.byteLength === 0) {
            cachedUint32ArrayMemory0 = new Uint32Array(wasm.memory.buffer);
        }
        return cachedUint32ArrayMemory0;
    }

    let cachedUint8ArrayMemory0 = null;
    function getUint8ArrayMemory0() {
        if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
            cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
        }
        return cachedUint8ArrayMemory0;
    }

    function handleError(f, args) {
        try {
            return f.apply(this, args);
        } catch (e) {
            const idx = addToExternrefTable0(e);
            wasm.__wbindgen_exn_store(idx);
        }
    }

    function isLikeNone(x) {
        return x === undefined || x === null;
    }

    function makeMutClosure(arg0, arg1, dtor, f) {
        const state = { a: arg0, b: arg1, cnt: 1, dtor };
        const real = (...args) => {

            // First up with a closure we increment the internal reference
            // count. This ensures that the Rust closure environment won't
            // be deallocated while we're invoking it.
            state.cnt++;
            const a = state.a;
            state.a = 0;
            try {
                return f(a, state.b, ...args);
            } finally {
                state.a = a;
                real._wbg_cb_unref();
            }
        };
        real._wbg_cb_unref = () => {
            if (--state.cnt === 0) {
                state.dtor(state.a, state.b);
                state.a = 0;
                CLOSURE_DTORS.unregister(state);
            }
        };
        CLOSURE_DTORS.register(real, state, state);
        return real;
    }

    function passArray32ToWasm0(arg, malloc) {
        const ptr = malloc(arg.length * 4, 4) >>> 0;
        getUint32ArrayMemory0().set(arg, ptr / 4);
        WASM_VECTOR_LEN = arg.length;
        return ptr;
    }

    function passArray8ToWasm0(arg, malloc) {
        const ptr = malloc(arg.length * 1, 1) >>> 0;
        getUint8ArrayMemory0().set(arg, ptr / 1);
        WASM_VECTOR_LEN = arg.length;
        return ptr;
    }

    function passArrayF32ToWasm0(arg, malloc) {
        const ptr = malloc(arg.length * 4, 4) >>> 0;
        getFloat32ArrayMemory0().set(arg, ptr / 4);
        WASM_VECTOR_LEN = arg.length;
        return ptr;
    }

    function passArrayJsValueToWasm0(array, malloc) {
        const ptr = malloc(array.length * 4, 4) >>> 0;
        for (let i = 0; i < array.length; i++) {
            const add = addToExternrefTable0(array[i]);
            getDataViewMemory0().setUint32(ptr + 4 * i, add, true);
        }
        WASM_VECTOR_LEN = array.length;
        return ptr;
    }

    function passStringToWasm0(arg, malloc, realloc) {
        if (realloc === undefined) {
            const buf = cachedTextEncoder.encode(arg);
            const ptr = malloc(buf.length, 1) >>> 0;
            getUint8ArrayMemory0().subarray(ptr, ptr + buf.length).set(buf);
            WASM_VECTOR_LEN = buf.length;
            return ptr;
        }

        let len = arg.length;
        let ptr = malloc(len, 1) >>> 0;

        const mem = getUint8ArrayMemory0();

        let offset = 0;

        for (; offset < len; offset++) {
            const code = arg.charCodeAt(offset);
            if (code > 0x7F) break;
            mem[ptr + offset] = code;
        }
        if (offset !== len) {
            if (offset !== 0) {
                arg = arg.slice(offset);
            }
            ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
            const view = getUint8ArrayMemory0().subarray(ptr + offset, ptr + len);
            const ret = cachedTextEncoder.encodeInto(arg, view);

            offset += ret.written;
            ptr = realloc(ptr, len, offset, 1) >>> 0;
        }

        WASM_VECTOR_LEN = offset;
        return ptr;
    }

    function takeFromExternrefTable0(idx) {
        const value = wasm.__wbindgen_externrefs.get(idx);
        wasm.__externref_table_dealloc(idx);
        return value;
    }

    let cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });
    cachedTextDecoder.decode();
    function decodeText(ptr, len) {
        return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));
    }

    const cachedTextEncoder = new TextEncoder();

    if (!('encodeInto' in cachedTextEncoder)) {
        cachedTextEncoder.encodeInto = function (arg, view) {
            const buf = cachedTextEncoder.encode(arg);
            view.set(buf);
            return {
                read: arg.length,
                written: buf.length
            };
        };
    }

    let WASM_VECTOR_LEN = 0;

    let wasmModule, wasm;
    function __wbg_finalize_init(instance, module) {
        wasm = instance.exports;
        wasmModule = module;
        cachedDataViewMemory0 = null;
        cachedFloat32ArrayMemory0 = null;
        cachedUint32ArrayMemory0 = null;
        cachedUint8ArrayMemory0 = null;
        wasm.__wbindgen_start();
        return wasm;
    }

    async function __wbg_load(module, imports) {
        if (typeof Response === 'function' && module instanceof Response) {
            if (typeof WebAssembly.instantiateStreaming === 'function') {
                try {
                    return await WebAssembly.instantiateStreaming(module, imports);
                } catch (e) {
                    const validResponse = module.ok && expectedResponseType(module.type);

                    if (validResponse && module.headers.get('Content-Type') !== 'application/wasm') {
                        console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);

                    } else { throw e; }
                }
            }

            const bytes = await module.arrayBuffer();
            return await WebAssembly.instantiate(bytes, imports);
        } else {
            const instance = await WebAssembly.instantiate(module, imports);

            if (instance instanceof WebAssembly.Instance) {
                return { instance, module };
            } else {
                return instance;
            }
        }

        function expectedResponseType(type) {
            switch (type) {
                case 'basic': case 'cors': case 'default': return true;
            }
            return false;
        }
    }

    function initSync(module) {
        if (wasm !== undefined) return wasm;


        if (module !== undefined) {
            if (Object.getPrototypeOf(module) === Object.prototype) {
                ({module} = module)
            } else {
                console.warn('using deprecated parameters for `initSync()`; pass a single object instead')
            }
        }

        const imports = __wbg_get_imports();
        if (!(module instanceof WebAssembly.Module)) {
            module = new WebAssembly.Module(module);
        }
        const instance = new WebAssembly.Instance(module, imports);
        return __wbg_finalize_init(instance, module);
    }

    async function __wbg_init(module_or_path) {
        if (wasm !== undefined) return wasm;


        if (module_or_path !== undefined) {
            if (Object.getPrototypeOf(module_or_path) === Object.prototype) {
                ({module_or_path} = module_or_path)
            } else {
                console.warn('using deprecated parameters for the initialization function; pass a single object instead')
            }
        }

        if (module_or_path === undefined && script_src !== undefined) {
            module_or_path = script_src.replace(/\.js$/, "_bg.wasm");
        }
        const imports = __wbg_get_imports();

        if (typeof module_or_path === 'string' || (typeof Request === 'function' && module_or_path instanceof Request) || (typeof URL === 'function' && module_or_path instanceof URL)) {
            module_or_path = fetch(module_or_path);
        }

        const { instance, module } = await __wbg_load(await module_or_path, imports);

        return __wbg_finalize_init(instance, module);
    }

    return Object.assign(__wbg_init, { initSync }, exports);
})({ __proto__: null });
