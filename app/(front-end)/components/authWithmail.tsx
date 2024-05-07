import Link from "next/link";
import { LabelledInput } from "../signin/page";

const AuthWithEmail = ({
  email,
  password,
  setEmail,
  setPassword,
  workingfunction,
}: any) => {
  return (
    <div>
      <div className=" flex flex-col items-center my-16">
        <LabelledInput
          label="Email"
          placeholder="Enter a valid email"
          type="email"
          value={email}
          setValue={setEmail}
        />
        <LabelledInput
          label="Password"
          placeholder="Create Password"
          type="password"
          value={password}
          setValue={setPassword}
        />
        <button
          className=" border rounded-lg py-2  my-5 flex items-center justify-center"
          onClick={workingfunction}
        >
          {" "}
          Submit{" "}
        </button>
      </div>
    </div>
  );
};

export default AuthWithEmail;
