import React, { useRef } from "react";

export default function App6() {
  const emailRef = useRef(0)
  const passwordRef = useRef(0)
  let i;
  for (i = 0; i < 1000; i++) {}
  console.log(i)
  console.log("Compoment Rendered");

const handleSubmit = () => {
    console.log(emailRef.current.value)
    console.log(passwordRef.current.value)
}

  return (
    <div>
      <h1>Login Form</h1>
      <p>
        <input
          type="text"
          placeholder="Email"
          ref={emailRef}
        />
      </p>
      <p>
        <input
          type="password"
          placeholder="Password"
          ref={passwordRef}
        />
      </p>
      <p>
        <button onClick={handleSubmit}>Login</button>
      </p>
    </div>
  );
}





// import React, { useState } from "react";

// export default function App6() {
//   const [email, setEmail] = useState();
//   const [password, setPassword] = useState();
//   let i;
//   for (i = 0; i < 1000; i++) {}
//   console.log(i)
//   console.log("Compoment Rendered");


// const handleSubmit = () => {
//     console.log(email)
//     console.log(password)
// }

//   return (
//     <div>
//       <h1>Login Form</h1>
//       <p>
//         <input
//           type="text"
//           placeholder="Email"
//           onChange={(e) => setEmail(e.target.value)}
//         />
//       </p>
//       <p>
//         <input
//           type="password"
//           placeholder="Password"
//           onChange={(e) => setPassword(e.target.value)}
//         />
//       </p>
//       <p>
//         <button onClick={handleSubmit}>Login</button>
//       </p>
//       <p>{email}</p>
//       <p>{password}</p>
//     </div>
//   );
// }
