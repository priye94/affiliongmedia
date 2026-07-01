import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  variant?: "primary" | "outline";
  href?: string;
};

export default function CTAButton({ children, variant = "primary" }: Props) {
  const base =
    "inline-flex items-center gap-2 px-7 py-4 font-semibold rounded-full transition";

  const styles = {
    primary:
      "bg-cyan-500 text-black hover:bg-cyan-400",
    outline:
      "border border-cyan-400/40 text-cyan-300 hover:bg-cyan-400/10",
  };

  return <button className={`${base} ${styles[variant]}`}>{children}</button>;
}