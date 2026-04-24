import { AuthMockView } from "@/components/auth/AuthMockView";

export const metadata = {
  title: "Login — BRIK64",
  description:
    "Mock login shell for future BRIK64 platform authentication.",
};

export default function LoginPage() {
  return <AuthMockView mode="login" />;
}
