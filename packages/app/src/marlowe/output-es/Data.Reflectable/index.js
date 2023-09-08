import * as Type$dProxy from "../Type.Proxy/index.js";
import {unsafeCoerce} from "./foreign.js";
const reifiableString = {};
const reifiableOrdering = {};
const reifiableInt = {};
const reifiableBoolean = {};
const reifyType = () => s => f => unsafeCoerce(dictReflectable => f(dictReflectable))({reflectType: v => s})(Type$dProxy.Proxy);
const reflectType = dict => dict.reflectType;
export {reflectType, reifiableBoolean, reifiableInt, reifiableOrdering, reifiableString, reifyType};
export * from "./foreign.js";
