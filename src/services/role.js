const BASE_URL = "http://localhost:4001/api/v1/web";

const getRoles = async () => {
  try {
    const res = await fetch(`${BASE_URL}/roles`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await res.json();
    if (!res.ok) throw result;
    return result;
  } catch (err) {
    throw err;
  }
};

export { getRoles };
