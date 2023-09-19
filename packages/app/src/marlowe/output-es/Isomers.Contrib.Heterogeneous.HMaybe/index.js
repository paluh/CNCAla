const $HJust = _1 => ({tag: "HJust", _1});
const $HNothing = () => ({tag: "HNothing"});
const HNothing = /* #__PURE__ */ $HNothing();
const HJust = value0 => $HJust(value0);
const hmapHNil = {hmap: v => x => x};
const hmapHJust = dictMapping => ({hmap: f => v => $HJust(dictMapping.mapping(f)(v._1))});
const hfoldlHMaybe = {hfoldl: v => acc => v1 => acc};
const hfoldlHJust = dictFolding => ({hfoldl: f => acc => v => dictFolding.folding(f)(acc)(v._1)});
const fromMaybeNothing = {fromHMaybe: a => v => a};
const fromHMaybeJust = {fromHMaybe: v => v1 => v1._1};
const fromHMaybe = dict => dict.fromHMaybe;
export {$HJust, $HNothing, HJust, HNothing, fromHMaybe, fromHMaybeJust, fromMaybeNothing, hfoldlHJust, hfoldlHMaybe, hmapHJust, hmapHNil};