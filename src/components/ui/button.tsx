import * as React from "react";
import { cn } from "../../lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "md", ...props }, ref) => {
    const base = "inline-flex items-center justify-center font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
    const variants: Record<string, string> = {
      default: "bg-sky-600 text-white hover:bg-sky-700",
      ghost: "bg-transparent text-sky-600 hover:bg-sky-50 border border-sky-200",
    };
    const sizes: Record<string, string> = {
      sm: "px-3 py-1.5 text-sm rounded-xl",
      md: "px-4 py-2 text-base rounded-2xl",
      lg: "px-6 py-3 text-lg rounded-2xl",
    };
    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
