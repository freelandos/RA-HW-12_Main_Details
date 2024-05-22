export const fetchServices = async () => {
  const response = await fetch(`${import.meta.env.VITE_BASE_URL}/services`);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
};

export const fetchDetails = async (id) => {
  const response = await fetch(`${import.meta.env.VITE_BASE_URL}/services/${id}`);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
};
