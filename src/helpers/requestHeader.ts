export const requestHeader = () => {
  let token = localStorage.getItem("Token");

  if (typeof token === "string") {
    token = JSON.parse(token);
  }
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const requestBody = (
  title: string,
  description: string,
  selectValue: string
) => {
  return {
    data: JSON.stringify({
      title: title,
      description: description,
      type: selectValue.toLowerCase(),
      status: "new",
    }),
  };
};
