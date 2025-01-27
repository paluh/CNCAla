import * as Effect$dUncurried from "../Effect.Uncurried/index.js";
import * as Web$dPromise$dInternal from "../Web.Promise.Internal/index.js";
const then_ = () => k => p => () => Web$dPromise$dInternal.then_($0 => k($0)(), p);
const thenOrCatch = () => k => c => p => () => Web$dPromise$dInternal.thenOrCatch($0 => k($0)(), $0 => c($0)(), p);
const resolve = () => Web$dPromise$dInternal.resolve;
const race = /* #__PURE__ */ Effect$dUncurried.runEffectFn1(Web$dPromise$dInternal.race);
const $$new = () => k => () => Web$dPromise$dInternal.new((onResolve, onReject) => k(Effect$dUncurried.runEffectFn1(onResolve))(Effect$dUncurried.runEffectFn1(onReject))());
const flattenPromise = () => ({});
const flattenDone = {};
const $$finally = /* #__PURE__ */ Effect$dUncurried.runEffectFn2(Web$dPromise$dInternal.finally);
const $$catch = k => p => () => Web$dPromise$dInternal.catch($0 => k($0)(), p);
const all = /* #__PURE__ */ Effect$dUncurried.runEffectFn1(Web$dPromise$dInternal.all);
export {all, $$catch as catch, $$finally as finally, flattenDone, flattenPromise, $$new as new, race, resolve, thenOrCatch, then_};
