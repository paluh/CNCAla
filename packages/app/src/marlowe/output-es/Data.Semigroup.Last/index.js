const Last = x => x;
const showLast = dictShow => ({show: v => "(Last " + dictShow.show(v) + ")"});
const semigroupLast = {append: v => x => x};
const ordLast = dictOrd => dictOrd;
const functorLast = {map: f => m => f(m)};
const eqLast = dictEq => dictEq;
const eq1Last = {eq1: dictEq => dictEq.eq};
const ord1Last = {compare1: dictOrd => dictOrd.compare, Eq10: () => eq1Last};
const boundedLast = dictBounded => dictBounded;
const applyLast = {apply: v => v1 => v(v1), Functor0: () => functorLast};
const bindLast = {bind: v => f => f(v), Apply0: () => applyLast};
const applicativeLast = {pure: Last, Apply0: () => applyLast};
const monadLast = {Applicative0: () => applicativeLast, Bind1: () => bindLast};
export {Last, applicativeLast, applyLast, bindLast, boundedLast, eq1Last, eqLast, functorLast, monadLast, ord1Last, ordLast, semigroupLast, showLast};