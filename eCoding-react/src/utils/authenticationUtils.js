export const setTokenToAuthorizationHeader = () => {
  const token = localStorage.getItem("jwt");

  if (token) {
    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  }
  return null;
};
