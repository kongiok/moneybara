import { useSearchParams } from "@remix-run/react";
import { LoginPanel } from "./login";
import { RegisterPanel } from "./register";
import FullScreen from "~/components/atoms/full-screen";

const AuthPage = () => {
  const [searchParams] = useSearchParams();
  const mode = searchParams.get("mode") || "login";
  return (
    <FullScreen>
      <PanelSwitcher mode={mode} />
    </FullScreen>
  );
};

const PanelSwitcher = ({ mode }: { mode: string }) => {
  switch (mode) {
    case "login":
      return <LoginPanel />;
    case "register":
      return <RegisterPanel />;
    default:
      return <LoginPanel />;
  }
};

export default AuthPage;
