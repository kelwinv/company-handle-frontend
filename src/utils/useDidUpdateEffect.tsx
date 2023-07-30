import { DependencyList, useEffect, useRef } from "react";

export const useDidUpdateEffect = (
  effect: React.EffectCallback,
  dependencies: DependencyList = [],
) => {
  const didMountRef = useRef(true);

  useEffect(() => {
    if (didMountRef.current) {
      didMountRef.current = false;
    } else {
      return effect();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
};
