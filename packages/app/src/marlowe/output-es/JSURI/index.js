import * as Data$dMaybe from "../Data.Maybe/index.js";
import {_decodeFormURLComponent, _decodeURI, _decodeURIComponent, _encodeFormURLComponent, _encodeURI, _encodeURIComponent} from "./foreign.js";
const encodeURIComponent = $0 => _encodeURIComponent(v => Data$dMaybe.Nothing, Data$dMaybe.Just, $0);
const encodeURI = $0 => _encodeURI(v => Data$dMaybe.Nothing, Data$dMaybe.Just, $0);
const encodeFormURLComponent = $0 => _encodeFormURLComponent(v => Data$dMaybe.Nothing, Data$dMaybe.Just, $0);
const decodeURIComponent = $0 => _decodeURIComponent(v => Data$dMaybe.Nothing, Data$dMaybe.Just, $0);
const decodeURI = $0 => _decodeURI(v => Data$dMaybe.Nothing, Data$dMaybe.Just, $0);
const decodeFormURLComponent = $0 => _decodeFormURLComponent(v => Data$dMaybe.Nothing, Data$dMaybe.Just, $0);
export {decodeFormURLComponent, decodeURI, decodeURIComponent, encodeFormURLComponent, encodeURI, encodeURIComponent};
export * from "./foreign.js";