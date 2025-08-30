const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function apiFetch(endpoint, options = {}) {
  const url = `${API_URL}${endpoint}`;
  
  const defaultHeaders = {
    'Content-Type': 'application/json',
    // Add auth token if needed:
    // 'Authorization': `Bearer ${token}`
  };
  
  const config = {
    headers: { ...defaultHeaders, ...options.headers },
    ...options,
  };

  const res = await fetch(url, config);

  // Handle non-2xx responses gracefully
  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    const error = new Error(errorData.message || 'API Error');
    error.status = res.status;
    throw error;
  }

  return res.json();
}
