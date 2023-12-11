import { useEffect, useState } from "react";

const useApi = (method: any, args?: any) => {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      const callMethod = async () => {
        setIsLoading(true);
        const { data } = await method(args);
        setData(data);
        setIsLoading(false);
      };

      callMethod();
    } catch (e: any) {
      setError(e.message || "Something went wrong");
    }
  }, [method]);

  return { data, isLoading, error };
};

export default useApi;
