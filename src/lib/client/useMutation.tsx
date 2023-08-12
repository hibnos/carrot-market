import { useState } from "react";

interface UseMutationState {
  loading: boolean;
  data?: Object;
  error?: Object;
}

type UseMutationResult = [(data: any) => void, UseMutationState];
export default function useMutation(url: string): UseMutationResult {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<undefined | any>(undefined);
  const [error, setError] = useState<undefined | any>(undefined);
  function mutation(data: any) {}
  return [mutation, { loading, data, error }];
}
