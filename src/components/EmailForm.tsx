"use client";

import { useActionState } from "react";

import { subscribeEmail, type SubscribeState } from "@/app/actions";

const initialState: SubscribeState = { status: "idle" };

interface EmailFormProps {
  hint?: string;
  className?: string;
}

export function EmailForm({ hint, className }: EmailFormProps) {
  const [state, action, isPending] = useActionState(subscribeEmail, initialState);

  if (state.status === "success") {
    return (
      <div className={`flex flex-col gap-2.5 w-full max-w-[438px] ${className ?? ""}`}>
        <p className="font-dm-mono text-[16px] text-brand">
          → You&apos;re on the list. We&apos;ll be in touch!
        </p>
      </div>
    );
  }

  return (
    <form action={action} className={`flex flex-col gap-2.5 w-full max-w-[438px] ${className ?? ""}`}>
      <div className="flex h-12 w-full">
        <input
          type="email"
          name="email"
          placeholder="mybest@email.com"
          required
          disabled={isPending}
          className="flex-1 min-w-0 bg-muted-bg border-l border-t border-b border-muted-border rounded-l-md px-4 text-[14px] text-white font-inter focus:outline-none focus:border-brand-border placeholder:text-fg-muted transition-colors disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={isPending}
          className="flex items-center gap-2 bg-brand px-6 sm:px-8 rounded-r-md font-inter font-medium text-[14px] text-over-primary hover:bg-brand-dim transition-colors shrink-0 disabled:opacity-60"
        >
          {isPending ? "..." : "SIGN UP"}
        </button>
      </div>
      {state.status === "error" && (
        <p className="font-dm-mono text-[12.5px] text-red-400">{state.message}</p>
      )}
      {hint && state.status !== "error" && (
        <p className="font-dm-mono text-[12.5px] text-fg-muted">{hint}</p>
      )}
    </form>
  );
}
