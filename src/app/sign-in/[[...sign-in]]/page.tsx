import { SignIn } from "@clerk/nextjs";

const Signin = () => {
  return <div className="flex justify-center items-center mt-40">
    <SignIn />
  </div>;
};

export default Signin;
