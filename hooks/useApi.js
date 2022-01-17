const { useState } = require("react");

export default function useApi(apiFun) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async () => {
    setLoading(true);
    const result = await apiFun();
    setLoading(false);

    if (!result.ok) return setError(true);

    setError(false);
    setData(result.data);
  };
  return { data, request, error, loading };
}
