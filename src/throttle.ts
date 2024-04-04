
/* IMPORT */

import debounce from './debounce';
import type {FN, ThrottleOptions, Throttled} from './types';

/* MAIN */

const throttle = <Args extends unknown[]> ( fn: FN<Args, unknown>, wait: number = 1, options?: ThrottleOptions ): Throttled<Args> => {

  return debounce ( fn, wait, {
    maxWait: wait,
    leading: options?.leading ?? true,
    trailing: options?.trailing ?? true
  });

};

/* EXPORT */

export default throttle;
