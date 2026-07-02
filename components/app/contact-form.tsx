"use client";
import { Button } from "@heroui/button";
import { Input, Textarea } from "@heroui/input";
import { Select, SelectItem } from "@heroui/select";
import { Checkbox, CheckboxGroup } from "@heroui/checkbox";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { FiSend } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { useTranslations } from "next-intl";

import contactSchema from "@/schema/contactSchema";
import { contactMe } from "@/actions/contact-me";
import { setLoadingFalse, setLoadingTrue } from "@/redux/loadingReducer";
import {
  DEV_TECH_OPTIONS,
  FRAMEWORK_OPTIONS,
  OBJECT_OPTIONS,
} from "@/constants";

export default function ContactForm() {
  const dispatch = useDispatch();
  const t = useTranslations("contact");
  const tError = useTranslations("errors");
  const loading = useSelector((state: any) => state.loading.loading);
  const {
    register,
    reset,
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contactSchema(tError)),
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      message: "",
      object: "",
      frameworks: [],
      devTech: [],
    },
  });

  const selectedObject = watch("object");

  const notify = () =>
    toast.success("Your message has been sent successfully !");

  const onSubmit = (data: any) => {
    const objectLabel =
      OBJECT_OPTION.find((opt) => opt.key === data.object)?.label ??
      data.object;

    let finalObject = objectLabel;

    if (data.object === "formation" && data.frameworks?.length > 0) {
      const frameworksLabels = data.frameworks.map(
        (key: string) =>
          FRAMEWORK_OPTIONS.find((opt) => opt.key === key)?.label ?? key,
      );

      finalObject = `${objectLabel} : ${frameworksLabels.join(", ")}`;
    }

    if (data.object === "dev" && data.devTech?.length > 0) {
      const devTechLabels = data.devTech.map(
        (key: string) =>
          DEV_TECH_OPTIONS.find((opt) => opt.key === key)?.label ?? key,
      );

      finalObject = `${objectLabel} : ${devTechLabels.join(", ")}`;
    }

    const payload = {
      lastName: data.lastName,
      firstName: data.firstName,
      email: data.email,
      object: finalObject,
      message: data.message,
    };

    try {
      dispatch(setLoadingTrue());
      contactMe(payload);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    } finally {
      dispatch(setLoadingFalse());
      reset();
      notify();
    }
  };
  const OBJECT_OPTION = OBJECT_OPTIONS(t);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-row">
        <Input
          {...register("firstName")}
          classNames={{ errorMessage: "text-left" }}
          errorMessage={errors?.firstName?.message}
          isInvalid={!!errors?.firstName}
          label={t("firstName")}
          labelPlacement="outside"
          name="firstName"
          placeholder={t("firstName")}
          type="text"
        />
        <div className="mx-2" />
        <Input
          {...register("lastName")}
          classNames={{ errorMessage: "text-left" }}
          errorMessage={errors?.lastName?.message}
          isInvalid={!!errors?.lastName}
          label={t("lastName")}
          labelPlacement="outside"
          name="lastName"
          placeholder={t("lastName")}
          type="text"
        />
      </div>
      <div className="my-10" />
      <Input
        {...register("email")}
        classNames={{ errorMessage: "text-left" }}
        errorMessage={errors?.email?.message}
        isInvalid={!!errors?.email}
        label={"Email"}
        labelPlacement="outside"
        name="email"
        placeholder="Email"
        type="email"
      />
      <div className="my-10" />

      {/* Liste déroulante pour l'objet */}
      <Controller
        control={control}
        name="object"
        render={({ field }) => (
          <Select
            classNames={{ errorMessage: "text-left" }}
            errorMessage={errors?.object?.message as string}
            isInvalid={!!errors?.object}
            label={t("object")}
            labelPlacement="outside"
            placeholder={t("object")}
            selectedKeys={field.value ? [field.value] : []}
            onSelectionChange={(keys) => {
              const value = Array.from(keys)[0] as string;

              field.onChange(value);
              // Reset des deux champs à chaque changement d'objet
              setValue("frameworks", []);
              setValue("devTech", []);
            }}
          >
            {OBJECT_OPTION.map((option) => (
              <SelectItem key={option.key}>{option.label}</SelectItem>
            ))}
          </Select>
        )}
      />
      <div className="my-6" />

      {/* Cases à cocher si "Formation" est sélectionné */}
      {selectedObject === "formation" && (
        <>
          <Controller
            control={control}
            name="frameworks"
            render={({ field }) => (
              <CheckboxGroup
                label={t("choix-formations")}
                orientation="horizontal"
                value={field.value}
                onValueChange={field.onChange}
              >
                {FRAMEWORK_OPTIONS.map((option) => (
                  <Checkbox key={option.key} value={option.key}>
                    {option.label}
                  </Checkbox>
                ))}
              </CheckboxGroup>
            )}
          />
          <div className="my-6" />
        </>
      )}

      {/* Cases à cocher si "Développement d'une application web/mobile" est sélectionné */}
      {selectedObject === "dev" && (
        <>
          <Controller
            control={control}
            name="devTech"
            render={({ field }) => (
              <CheckboxGroup
                label={t("choix-dev")}
                orientation="horizontal"
                value={field.value}
                onValueChange={field.onChange}
              >
                {DEV_TECH_OPTIONS.map((option) => (
                  <Checkbox key={option.key} value={option.key}>
                    {option.label}
                  </Checkbox>
                ))}
              </CheckboxGroup>
            )}
          />
          <div className="my-6" />
        </>
      )}

      <Textarea
        {...register("message")}
        classNames={{
          base: "items-start",
          label: "text-left mb-2",
          errorMessage: "text-left",
        }}
        errorMessage={errors?.message?.message}
        isInvalid={!!errors?.message}
        label={t("message")}
        labelPlacement="outside"
        name="message"
        placeholder={t("message")}
      />
      <div className="my-10" />
      <Button
        color="default"
        disabled={loading}
        endContent={<FiSend />}
        type="submit"
      >
        {t("send")}
      </Button>
      <ToastContainer closeButton />
    </form>
  );
}
