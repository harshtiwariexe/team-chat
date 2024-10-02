import { FcGoogle } from "react-icons/fc";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { FaGithub } from "react-icons/fa";
import { SignInFlow } from "../types";

interface SignUpCardProps {
  setState: (state: SignInFlow) => void;
}

export default function SignUpCard({ setState }: SignUpCardProps) {
  return (
    <>
      <Card className="w-full h-full p-8">
        <CardHeader className="px-0 pt-0">
          <CardTitle>Sign Up to Continue</CardTitle>
          <CardDescription>Use your email or github account</CardDescription>
        </CardHeader>
        <CardContent className="space-y-5 pb-0 px-0">
          <form action="" className="space-y-2.5">
            <Input
              disabled={false}
              value=""
              onChange={() => {}}
              type="email"
              placeholder="Email"
              required={true}
            />
            <Input
              disabled={false}
              value=""
              onChange={() => {}}
              type="password"
              placeholder="Password"
              required={true}
            />
            <Button type="submit" className="w-full" size="lg" disabled={false}>
              Sign Up
            </Button>
          </form>
          <Separator />
          <div className="flex flex-col gap-y-2.5">
            <Button
              disabled={false}
              size="lg"
              className="w-full relative"
              variant="outline"
              onClick={() => {}}
            >
              <FcGoogle className="size-5 absolute top-3 left-2.5" />
              Continue with Google
            </Button>
            <Button
              disabled={false}
              size="lg"
              className="w-full relative"
              variant="outline"
              onClick={() => {}}
            >
              <FaGithub className="size-5 absolute top-3 left-2.5" />
              Continue with Github
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">
            Already have an account?{" "}
            <span
              className="text-sky-700 hover:underline cursor-pointer"
              onClick={() => setState("signIn")}
            >
              Sign In
            </span>
          </p>
        </CardContent>
      </Card>
    </>
  );
}
