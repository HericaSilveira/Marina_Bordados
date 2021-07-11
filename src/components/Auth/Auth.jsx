import { ButtonComponent } from "../Buttons/Button";

export const Auth = () => {
  return (
    <>
      <ButtonComponent text="Sign in"  variant="dark" />{" "}
      <ButtonComponent text="Sign out" className="d-none" variant="outline-light" />
    </>
  );
};
