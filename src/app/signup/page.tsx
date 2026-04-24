import { AuthMockView } from "@/components/auth/AuthMockView";

export const metadata = {
  title: "Signup — BRIK64",
  description:
    "Mock signup shell for future BRIK64 platform authentication.",
};

export default function SignupPage() {
  return <AuthMockView mode="signup" />;
}
