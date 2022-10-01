import { useEffect } from 'react';
import dispatch from 'helper/dispatch/dispatch';

export default function useMount(type, payload) {
  useEffect(() => {
    dispatch(type, payload);
  }, []);
}
