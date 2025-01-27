import * as Data$dList$dTypes from "../Data.List.Types/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
const toHomogeneousRow$pNilRow = {};
const toHomogeneousRow$pCons = () => () => ({});
const toHomogeneousRow = () => () => ({});
const listToHomogeneousNilRow = {};
const listToHomogeneousCons = () => () => ({});
const keysNil = {keysImpl: v => Data$dList$dTypes.Nil};
const homogeneousRowLabels = () => () => () => ({});
const keysImpl = dict => dict.keysImpl;
const keysCons = dictIsSymbol => dictKeys => ({keysImpl: v => Data$dList$dTypes.$List("Cons", dictIsSymbol.reflectSymbol(Type$dProxy.Proxy), dictKeys.keysImpl(Type$dProxy.Proxy))});
export {homogeneousRowLabels, keysCons, keysImpl, keysNil, listToHomogeneousCons, listToHomogeneousNilRow, toHomogeneousRow, toHomogeneousRow$pCons, toHomogeneousRow$pNilRow};
