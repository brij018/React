const BASE_URL = import.meta.env.VITE_BASE_URL;

export async function getStudent() {
  const res = await fetch(`${BASE_URL}/users?limit=10`);

  if (!res.ok) {
    throw new Error("failed to fetch student data");
  }

  const data = await res.json();
  return data.users;
}

export async function addStudent(studentData) {
  const res = await fetch(`${BASE_URL}/users/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(studentData),
  });

  if (!res.ok) {
    throw new Error("failed to add student data");
  }

  return res.json();
}
