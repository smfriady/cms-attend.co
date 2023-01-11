const BASE_URL = "http://localhost:4001/api/v1/web";

const authLogin = async (credential) => {
  try {
    const res = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credential),
    });

    const result = await res.json();
    if (!res.ok) throw result;
    return result;
  } catch (err) {
    throw err;
  }
};

export { authLogin };
