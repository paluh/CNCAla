import * as Unsafe$dCoerce from "../Unsafe.Coerce/index.js";
import * as Web$dInternal$dFFI from "../Web.Internal.FFI/index.js";
import {persisted} from "./foreign.js";
const toEvent = Unsafe$dCoerce.unsafeCoerce;
const fromEvent = /* #__PURE__ */ Web$dInternal$dFFI.unsafeReadProtoTagged("PageTransitionEvent");
export {fromEvent, toEvent};
export * from "./foreign.js";