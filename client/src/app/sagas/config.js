export const options = {
  method: 'GET', // *GET, POST, PUT, DELETE, etc.
  mode: "*cors", // no-cors, *cors, same-origin
  cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
  credentials: "omit", // include, *same-origin, omit
  headers: {
    'Allow': "*",
    "Content-Type": "application/json; charset=utf-8",
    // 'Content-Type': 'application/x-www-form-urlencoded',
    "Access-Control-Allow-Origin": "*",
    'Allow-Control-Allow-Methods': "*",
    'Access-Control-Allow-Headers': "Origin, X-Requested-With, Content-Type, Accept"
  },
  redirect: "follow", // manual, *follow, error
  referrerPolicy: "no-referrer" ,// no-referrer, *client
 
};



export const getUrl = () => {
  if (window.location.origin === "http://localhost:3000") {
    return "http://localhost:8000";
  } else {
    return window.location.origin;
  }
};


