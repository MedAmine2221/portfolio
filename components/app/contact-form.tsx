"use client";
import { Button } from "@heroui/button";
import { Input, Textarea } from "@heroui/input";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { FiSend } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { useTranslations } from "next-intl";

import contactSchema from "@/schema/contactSchema";
import { contactMe } from "@/actions/contact-me";
import { setLoadingFalse, setLoadingTrue } from "@/redux/loadingReducer";

export default function ContactForm() {
  const dispatch = useDispatch();
  const t = useTranslations("contact");
  const tError = useTranslations("errors");
  const loading = useSelector((state: any) => state.loading.loading);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contactSchema(tError)),
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      message: "",
      object: "",
    },
  });
  const notify = () =>
    toast.success("Your message has been sent successfully !");
  const onSubmit = (data: any) => {
    try {
      dispatch(setLoadingTrue());
      contactMe(data);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    } finally {
      dispatch(setLoadingFalse());
      reset();
      notify();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-row">
        <Input
          {...register("firstName")}
          classNames={{
            errorMessage: "text-left",
          }}
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
          classNames={{
            errorMessage: "text-left",
          }}
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
        classNames={{
          errorMessage: "text-left",
        }}
        errorMessage={errors?.email?.message}
        isInvalid={!!errors?.email}
        label={"Email"}
        labelPlacement="outside"
        name="email"
        placeholder="Email"
        type="email"
      />
      <div className="my-10" />
      <Input
        {...register("object")}
        classNames={{
          errorMessage: "text-left",
        }}
        errorMessage={errors?.object?.message}
        isInvalid={!!errors?.object}
        label={t("object")}
        labelPlacement="outside"
        name="object"
        placeholder={t("object")}
        type="text"
      />
      <div className="my-4" />
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
