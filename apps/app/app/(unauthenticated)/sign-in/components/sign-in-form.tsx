"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import ActionButton from "@repo/design-system/components/action-button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@repo/design-system/components/ui/field";
import { Input } from "@repo/design-system/components/ui/input";
import { handleError } from "@repo/design-system/lib/utils";
import { useTransition } from "react";
import { Controller, useForm } from "react-hook-form";
import { signInSubmit } from "../actions";
import { type SignInFormSchema, signInFormSchema } from "../schemas";

export default function SignInForm() {
  const form = useForm<SignInFormSchema>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const [isPending, startTransition] = useTransition();

  function onSubmit(data: SignInFormSchema) {
    startTransition(async () => {
      try {
        await signInSubmit(data);
      } catch (error) {
        handleError(error);
      }
    });
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <FieldSet>
        <FieldLegend>Sign In</FieldLegend>
        <FieldGroup>
          <Controller
            control={form.control}
            name="email"
            render={({ field, fieldState }) => (
              <Field className="flex-1">
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input id="email" placeholder="Email" {...field} />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <Controller
            control={form.control}
            name="password"
            render={({ field, fieldState }) => (
              <Field className="flex-1">
                <FieldLabel htmlFor="password">Password</FieldLabel>
                <Input
                  id="password"
                  placeholder="Password"
                  type="password"
                  {...field}
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </FieldGroup>
        <Field orientation="horizontal">
          <ActionButton isLoading={isPending} type="submit">
            Sign In
          </ActionButton>
        </Field>
      </FieldSet>
    </form>
  );
}
