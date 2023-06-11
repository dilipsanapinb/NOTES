const BASE_URL = "http://localhost:5000/api";

export const fetchNotices = async () => {
  const response = await fetch(`${BASE_URL}/notices`);
  if (!response.ok) {
    throw new Error("Failed to fetch notices");
  }
  return response.json();
};

export const postNotice = async (notice) => {
  const response = await fetch(`${BASE_URL}/notices`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(notice),
  });
  if (!response.ok) {
    throw new Error("Failed to post notice");
  }
};

export const deleteNotice = async (id) => {
  const response = await fetch(`${BASE_URL}/notices/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Failed to delete notice");
  }
};
