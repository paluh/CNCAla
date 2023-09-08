import * as Control$dSemigroupoid from "../Control.Semigroupoid/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
import {arrayMap} from "./foreign.js";
const map = dict => dict.map;
const mapFlipped = dictFunctor => fa => f => dictFunctor.map(f)(fa);
const $$void = dictFunctor => dictFunctor.map(v => {});
const voidLeft = dictFunctor => f => x => dictFunctor.map(v => x)(f);
const voidRight = dictFunctor => x => dictFunctor.map(v => x);
const functorProxy = {map: v => v1 => Type$dProxy.Proxy};
const functorFn = /* #__PURE__ */ (() => ({map: Control$dSemigroupoid.semigroupoidFn.compose}))();
const functorArray = {map: arrayMap};
const flap = dictFunctor => ff => x => dictFunctor.map(f => f(x))(ff);
export {flap, functorArray, functorFn, functorProxy, map, mapFlipped, $$void as void, voidLeft, voidRight};
export * from "./foreign.js";
