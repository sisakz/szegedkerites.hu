import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import { setEmail } from "./resetPasswordSlice";
const ResetPassword = () => {
  const dispatch = useDispatch();
  const email = useSelector((state: RootState) => state.resetPassword.email);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setEmail(e.target.value));
  };

  return (
    <>
      <h1>Reset Password</h1>
      <input
        type="email"
        value={email}
        onChange={handleChange}
        placeholder="Enter your email"
      />
    </>
  );
};

export default ResetPassword;
