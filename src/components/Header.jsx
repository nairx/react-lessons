import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
export default function Header() {
  return (
    <div className="App-Header-Row">
      <h1 style={{ backgroundColor: "yellow", color: "blue" }}>
        React Lessons
      </h1>
      <Link to="/">App1</Link>-<Link to="/app2">App2</Link>-
      <Link to="/app3">App3</Link>-
      <Link to="/app4">App4</Link>-
      <Link to="/app5">App5</Link>-
      <Link to="/app6">App6</Link>-
      <Link to="/app7">App7</Link>-
      <Link to="/app8">App8</Link>-
      <Link to="/app9">App9</Link>-
      <Link to="/app10">App10</Link>-
      <Link to="/app11">App11</Link>-
      <Link to="/app12">App12</Link>-
       <Link to="/app13">App13</Link>-
        <Link to="/app14">App14</Link>-
         <Link to="/app15">App15</Link>-
         <Link to="/app16">App16</Link>-
         <Link to="/app17">App17</Link>-
          <Link to="/app18">App18</Link>-
           <Link to="/app19">App19</Link>
    </div>
  );
}
