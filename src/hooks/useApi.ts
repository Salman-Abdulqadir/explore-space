import { useState, useCallback } from "react";

const useApi = (method: any) => {
  const [result, setResult] = useState({
    data: {},
    isLoading: true,
    isError: false,
  });

  const callMethod = useCallback(
    async (...args: any) => {
      try {
        setResult((_result) => ({ ..._result, isLoading: true }));
        const results = await method(args);
        setResult((_result) => ({ ..._result, data: results }));
      } catch (e) {
        setResult((_result) => ({ ..._result, isError: true }));
      } finally {
        setResult((_result) => ({ ..._result, isLoading: false }));
      }
    },
    [method]
  );

  return [result as any, callMethod];
};

export default useApi;
