import * as Data$dOrd from "../Data.Ord/index.js";
import * as Data$dShow from "../Data.Show/index.js";
const Replacement = x => x;
const Pattern = x => x;
const showReplacement = {show: v => "(Replacement " + Data$dShow.showStringImpl(v) + ")"};
const showPattern = {show: v => "(Pattern " + Data$dShow.showStringImpl(v) + ")"};
const newtypeReplacement = {Coercible0: () => {}};
const newtypePattern = {Coercible0: () => {}};
const eqReplacement = {eq: x => y => x === y};
const ordReplacement = {compare: x => y => Data$dOrd.ordString.compare(x)(y), Eq0: () => eqReplacement};
const eqPattern = {eq: x => y => x === y};
const ordPattern = {compare: x => y => Data$dOrd.ordString.compare(x)(y), Eq0: () => eqPattern};
export {Pattern, Replacement, eqPattern, eqReplacement, newtypePattern, newtypeReplacement, ordPattern, ordReplacement, showPattern, showReplacement};
