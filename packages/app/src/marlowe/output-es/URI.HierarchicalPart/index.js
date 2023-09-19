import * as $runtime from "../runtime.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dGeneric$dRep from "../Data.Generic.Rep/index.js";
import * as Data$dIdentity from "../Data.Identity/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dOrdering from "../Data.Ordering/index.js";
import * as Data$dShow$dGeneric from "../Data.Show.Generic/index.js";
import * as Parsing from "../Parsing/index.js";
import * as URI$dAuthority from "../URI.Authority/index.js";
import * as URI$dCommon from "../URI.Common/index.js";
import * as URI$dPath from "../URI.Path/index.js";
import * as URI$dPath$dAbsolute from "../URI.Path.Absolute/index.js";
import * as URI$dPath$dRootless from "../URI.Path.Rootless/index.js";
const $HierarchicalPart = (tag, _1, _2) => ({tag, _1, _2});
const HierarchicalPartAuthIsSymbol = {reflectSymbol: () => "HierarchicalPartAuth"};
const HierarchicalPartNoAuthIsSymbol = {reflectSymbol: () => "HierarchicalPartNoAuth"};
const HierarchicalPartAuth = value0 => value1 => $HierarchicalPart("HierarchicalPartAuth", value0, value1);
const HierarchicalPartNoAuth = value0 => $HierarchicalPart("HierarchicalPartNoAuth", value0);
const print = opts => v => {
  if (v.tag === "HierarchicalPartAuth") {
    return (() => {
      if (v._1._1.tag === "Just") { return "//" + opts.printUserInfo(v._1._1._1) + "@" + opts.printHosts(v._1._2); }
      if (v._1._1.tag === "Nothing") { return "//" + opts.printHosts(v._1._2); }
      $runtime.fail();
    })() + URI$dPath.print(opts.printPath(v._2));
  }
  if (v.tag === "HierarchicalPartNoAuth") {
    if (v._1.tag === "Nothing") { return ""; }
    if (v._1.tag === "Just") {
      const $0 = opts.printHierPath(v._1._1);
      if ($0.tag === "Left") { return URI$dPath$dAbsolute.print($0._1); }
      if ($0.tag === "Right") { return URI$dPath$dRootless.print($0._1); }
    }
  }
  $runtime.fail();
};
const parser = opts => {
  const $0 = URI$dCommon.wrapParser(Data$dIdentity.monadIdentity)(x => opts.parseHierPath(Data$dEither.$Either("Left", x)))(URI$dPath$dAbsolute.parse);
  const $1 = URI$dCommon.wrapParser(Data$dIdentity.monadIdentity)(x => opts.parseHierPath(Data$dEither.$Either("Right", x)))(URI$dPath$dRootless.parse);
  return (v2, $2, $3, $4, $5) => {
    const $6 = v2._1;
    const $7 = v2._2;
    return $2(v3 => {
      const $8 = (v4, $8) => {
        const $9 = v4._3;
        return $2(v5 => {
          if ($9) { return $4(v4, $8); }
          return $2(v1 => {
            const $10 = v2._1;
            const $11 = v2._2;
            return $2(v3$1 => $2(v1$1 => $0(
              Parsing.$ParseState($10, $11, false),
              $2,
              $3,
              (v4$1, $12) => {
                const $13 = v4$1._3;
                return $2(v5$1 => {
                  if ($13) { return $4(v4$1, $12); }
                  const $14 = v2._1;
                  const $15 = v2._2;
                  return $2(v3$2 => $2(v1$2 => $1(
                    Parsing.$ParseState($14, $15, false),
                    $2,
                    $3,
                    (v4$2, $16) => {
                      const $17 = v4$2._3;
                      return $2(v5$2 => {
                        if ($17) { return $4(v4$2, $16); }
                        return $2(v2$1 => $5(v2, $HierarchicalPart("HierarchicalPartNoAuth", Data$dMaybe.Nothing)));
                      });
                    },
                    (state2, a) => $2(v2$1 => $2(v2$2 => $5(state2, $HierarchicalPart("HierarchicalPartNoAuth", Data$dMaybe.$Maybe("Just", a)))))
                  )));
                });
              },
              (state2, a) => $2(v2$1 => $2(v2$2 => $5(state2, $HierarchicalPart("HierarchicalPartNoAuth", Data$dMaybe.$Maybe("Just", a)))))
            )));
          });
        });
      };
      return $2(v2$1 => $2(v1 => URI$dAuthority.parser(opts)(
        Parsing.$ParseState($6, $7, false),
        $2,
        $3,
        $8,
        (state2, a) => $2(v2$2 => {
          const $9 = HierarchicalPartAuth(a);
          return $2(v3$1 => URI$dCommon.wrapParser(Data$dIdentity.monadIdentity)(opts.parsePath)(URI$dPath.parser)(
            state2,
            $2,
            $3,
            $8,
            (state3, a$1) => $2(v4 => $5(state3, $9(a$1)))
          ));
        })
      )));
    });
  };
};
const genericHierarchicalPart = {
  to: x => {
    if (x.tag === "Inl") { return $HierarchicalPart("HierarchicalPartAuth", x._1._1, x._1._2); }
    if (x.tag === "Inr") { return $HierarchicalPart("HierarchicalPartNoAuth", x._1); }
    $runtime.fail();
  },
  from: x => {
    if (x.tag === "HierarchicalPartAuth") { return Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.$Product(x._1, x._2)); }
    if (x.tag === "HierarchicalPartNoAuth") { return Data$dGeneric$dRep.$Sum("Inr", x._1); }
    $runtime.fail();
  }
};
const showHierarchicalPart = dictShow => {
  const showAuthority = URI$dAuthority.showAuthority(dictShow);
  return dictShow1 => {
    const genericShowArgsProduct = Data$dShow$dGeneric.genericShowArgsProduct((() => {
      const $0 = showAuthority(dictShow1);
      return {genericShowArgs: v => [$0.show(v)]};
    })());
    return dictShow2 => {
      const $0 = Data$dShow$dGeneric.genericShowConstructor(genericShowArgsProduct({genericShowArgs: v => [dictShow2.show(v)]}))(HierarchicalPartAuthIsSymbol);
      return dictShow3 => (
        {
          show: (() => {
            const $1 = Data$dShow$dGeneric.genericShowConstructor({
              genericShowArgs: v => [
                (() => {
                  if (v.tag === "Just") { return "(Just " + dictShow3.show(v._1) + ")"; }
                  if (v.tag === "Nothing") { return "Nothing"; }
                  $runtime.fail();
                })()
              ]
            })(HierarchicalPartNoAuthIsSymbol);
            return x => {
              if (x.tag === "HierarchicalPartAuth") { return $0["genericShow'"](Data$dGeneric$dRep.$Product(x._1, x._2)); }
              if (x.tag === "HierarchicalPartNoAuth") { return $1["genericShow'"](x._1); }
              $runtime.fail();
            };
          })()
        }
      );
    };
  };
};
const eqHierarchicalPart = dictEq => dictEq1 => dictEq2 => dictEq3 => (
  {
    eq: x => y => {
      if (x.tag === "HierarchicalPartAuth") {
        return y.tag === "HierarchicalPartAuth" && (x._1._1.tag === "Nothing"
          ? y._1._1.tag === "Nothing"
          : x._1._1.tag === "Just" && y._1._1.tag === "Just" && dictEq.eq(x._1._1._1)(y._1._1._1)) && dictEq1.eq(x._1._2)(y._1._2) && dictEq2.eq(x._2)(y._2);
      }
      return x.tag === "HierarchicalPartNoAuth" && y.tag === "HierarchicalPartNoAuth" && (x._1.tag === "Nothing"
        ? y._1.tag === "Nothing"
        : x._1.tag === "Just" && y._1.tag === "Just" && dictEq3.eq(x._1._1)(y._1._1));
    }
  }
);
const ordHierarchicalPart = dictOrd => {
  const ordAuthority = URI$dAuthority.ordAuthority(dictOrd);
  const eqHierarchicalPart1 = eqHierarchicalPart(dictOrd.Eq0());
  return dictOrd1 => {
    const eqHierarchicalPart2 = eqHierarchicalPart1(dictOrd1.Eq0());
    return dictOrd2 => {
      const eqHierarchicalPart3 = eqHierarchicalPart2(dictOrd2.Eq0());
      return dictOrd3 => {
        const eqHierarchicalPart4 = eqHierarchicalPart3(dictOrd3.Eq0());
        return {
          compare: x => y => {
            if (x.tag === "HierarchicalPartAuth") {
              if (y.tag === "HierarchicalPartAuth") {
                const v = ordAuthority(dictOrd1).compare(x._1)(y._1);
                if (v === "LT") { return Data$dOrdering.LT; }
                if (v === "GT") { return Data$dOrdering.GT; }
                return dictOrd2.compare(x._2)(y._2);
              }
              return Data$dOrdering.LT;
            }
            if (y.tag === "HierarchicalPartAuth") { return Data$dOrdering.GT; }
            if (x.tag === "HierarchicalPartNoAuth" && y.tag === "HierarchicalPartNoAuth") { return Data$dMaybe.ordMaybe(dictOrd3).compare(x._1)(y._1); }
            $runtime.fail();
          },
          Eq0: () => eqHierarchicalPart4
        };
      };
    };
  };
};
const _path = dictWander => dictWander.wander(dictApplicative => f => v => {
  if (v.tag === "HierarchicalPartAuth") { return dictApplicative.Apply0().Functor0().map(HierarchicalPartAuth(v._1))(f(v._2)); }
  return dictApplicative.pure(v);
});
const _hierPath = dictWander => dictWander.wander(dictApplicative => f => v => {
  if (v.tag === "HierarchicalPartNoAuth") { return dictApplicative.Apply0().Functor0().map(HierarchicalPartNoAuth)(f(v._1)); }
  return dictApplicative.pure(v);
});
const _authority = dictWander => dictWander.wander(dictApplicative => f => v => {
  if (v.tag === "HierarchicalPartAuth") {
    const $0 = v._2;
    return dictApplicative.Apply0().Functor0().map(a => $HierarchicalPart("HierarchicalPartAuth", a, $0))(f(v._1));
  }
  return dictApplicative.pure(v);
});
export {
  $HierarchicalPart,
  HierarchicalPartAuth,
  HierarchicalPartAuthIsSymbol,
  HierarchicalPartNoAuth,
  HierarchicalPartNoAuthIsSymbol,
  _authority,
  _hierPath,
  _path,
  eqHierarchicalPart,
  genericHierarchicalPart,
  ordHierarchicalPart,
  parser,
  print,
  showHierarchicalPart
};
