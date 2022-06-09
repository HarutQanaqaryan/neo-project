export const requestHeader = () => {
  let token  = localStorage.getItem("Token")

  if(typeof token === "string") {
     token = JSON.parse(token)
  }
  return {
    headers: {
        'Authorization': `Bearer ${token}` 
      }
  }
}