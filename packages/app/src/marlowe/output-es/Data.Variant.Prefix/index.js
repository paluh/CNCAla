import * as Type$dProxy from "../Type.Proxy/index.js";
const $PrefixCases = () => ({tag: "PrefixCases"});
const $UnprefixCases = () => ({tag: "UnprefixCases"});
const UnprefixCases = /* #__PURE__ */ $UnprefixCases();
const PrefixCases = /* #__PURE__ */ $PrefixCases();
const unprefixCases = () => dictIsSymbol => () => ({foldingWithIndex: v => v1 => v2 => a => ({type: dictIsSymbol.reflectSymbol(Type$dProxy.Proxy), value: a})});
const remove = () => dictHFoldlWithIndex => v => dictHFoldlWithIndex.hfoldlWithIndex(UnprefixCases)();
const prefixCases = () => dictIsSymbol => () => ({foldingWithIndex: v => v1 => v2 => a => ({type: dictIsSymbol.reflectSymbol(Type$dProxy.Proxy), value: a})});
const evalUnprefixStep = () => () => dictIsSymbol => ({});
const evalPerfixStep = () => () => dictIsSymbol => ({});
const add = dictIsSymbol => () => dictHFoldlWithIndex => v => dictHFoldlWithIndex.hfoldlWithIndex(PrefixCases)();
export {$PrefixCases, $UnprefixCases, PrefixCases, UnprefixCases, add, evalPerfixStep, evalUnprefixStep, prefixCases, remove, unprefixCases};