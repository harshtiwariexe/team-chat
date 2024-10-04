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
import { useState } from "react";

interface SignInCardProps {
  setState: (state: SignInFlow) => void;
}

export default function SignInCard({ setState }: SignInCardProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Card className="w-full h-full p-8">
        <CardHeader className="px-0 pt-0">
          <CardTitle>Log In to Continue</CardTitle>
          <CardDescription>Use your email or github account</CardDescription>
        </CardHeader>
        <CardContent className="space-y-5 pb-0 px-0">
          <form action="" className="space-y-2.5">
            <Input
              disabled={false}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              placeholder="Email"
              required={true}
            />
            <Input
              disabled={false}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              placeholder="Password"
              required={true}
            />
            <Button type="submit" className="w-full" size="lg" disabled={false}>
              Sign In
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
            Don't have an account?{" "}
            <span
              className="text-sky-700 hover:underline cursor-pointer"
              onClick={() => setState("signUp")}
            >
              Sign Up
            </span>
          </p>
        </CardContent>
      </Card>
    </>
  );
}
