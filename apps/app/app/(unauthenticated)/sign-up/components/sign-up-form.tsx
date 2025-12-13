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
import { signUpSubmit } from "../actions";
import { type SignUpFormSchema, signUpFormSchema } from "../schemas";

export default function SignUpForm() {
  const form = useForm<SignUpFormSchema>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });
  const [isPending, startTransition] = useTransition();

  function onSubmit(data: SignUpFormSchema) {
    startTransition(async () => {
      try {
        await signUpSubmit(data);
      } catch (error) {
        handleError(error);
      }
    });
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <FieldSet>
        <FieldLegend>Sign Up</FieldLegend>
        <FieldGroup className="flex flex-row justify-between gap-2">
          <Controller
            control={form.control}
            name="firstName"
            render={({ field, fieldState }) => (
              <Field className="flex-1">
                <FieldLabel htmlFor="firstName">First Name</FieldLabel>
                <Input id="firstName" placeholder="First Name" {...field} />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <Controller
            control={form.control}
            name="lastName"
            render={({ field, fieldState }) => (
              <Field className="flex-1">
                <FieldLabel htmlFor="lastName">Last Name</FieldLabel>
                <Input id="lastName" placeholder="Last Name" {...field} />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </FieldGroup>
        <FieldGroup>
          <Controller
            control={form.control}
            name="email"
            render={({ field, fieldState }) => (
              <Field>
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
              <Field>
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
            Create Account
          </ActionButton>
        </Field>
      </FieldSet>
    </form>
  );
}
