const BASE_URL = "http://localhost:4001/api/v1/web";

const getEmployees = async ({ page = 1, limit = 5, filter = "all", firstName = "" }) => {
  let params = `?page=${page}&limit=${limit}`;

  if (filter !== "all") {
    params += `&filter=${filter}`;
  }

  if (firstName) {
    params += `&firstName=${firstName}`;
  }

  try {
    const res = await fetch(`${BASE_URL}/employees${params}`, {
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

const createEmployee = async (payload) => {
  try {
    let form = new FormData();

    form.append("firstName", payload.firstName);
    form.append("lastName", payload.lastName);
    form.append("nik", payload.nik);
    form.append("education", payload.education);
    form.append("departmenId", payload.departmenId);
    form.append("birthDate", payload.birthDate);
    form.append("email", payload.email);
    form.append("password", payload.password);
    form.append("baseSalary", payload.baseSalary);
    form.append("imgProfile", payload.imgProfile[0]);

    const res = await fetch(`${BASE_URL}/employees`, {
      method: "POST",
      body: form,
    });

    const result = await res.json();
    if (!res.ok) throw result;
    return result;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const editEmployee = async (payload) => {
  try {
    console.log(typeof payload.imgProfile === "object");

    let form = new FormData();

    form.append("firstName", payload.firstName);
    form.append("lastName", payload.lastName);
    form.append("nik", payload.nik);
    form.append("education", payload.education);
    form.append("departmenId", payload.departmenId);
    form.append("birthDate", payload.birthDate);
    form.append("email", payload.email);
    form.append("password", payload.password);
    form.append("baseSalary", payload.baseSalary);
    if (typeof payload.imgProfile === "object") {
      form.append("imgProfile", payload.imgProfile[0]);
    } else if (typeof payload.imgProfile === "string") {
      form.append("imgProfile", payload.imgProfile);
    }

    const res = await fetch(`${BASE_URL}/employees/${payload.id}`, {
      method: "PUT",
      body: form,
    });

    const result = await res.json();
    if (!res.ok) throw result;
    return result;
  } catch (err) {
    throw err;
  }
};
export { getEmployees, createEmployee, editEmployee };
