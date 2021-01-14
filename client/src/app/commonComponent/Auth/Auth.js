import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import * as Actions from "../../actions/actions";

// export default function withAuth(ComponentToProtect) {
//   return function() {
//     const dispatch = useDispatch();
//     useEffect(() => {
//         dispatch(
//         Actions.checkToken({
//           endPoint: "api/checkToken"
//         })
//       );
//     }, []);
//     // if (loading) {
//     //   return null;
//     // }
//     // if (redirect) {
//     //   return <Redirect to="/login" />;
//     // }
//     return <ComponentToProtect  />;
//   };
// }
