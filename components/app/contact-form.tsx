"use client";;
import { Button } from "@heroui/button";
import { Input, Textarea } from "@heroui/input";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { FiSend } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import contactSchema from "@/schema/contactSchema";
import { contactMe } from "@/actions/contact-me";
import { setLoadingFalse, setLoadingTrue } from "@/redux/loadingReducer";
import { toast, ToastContainer } from "react-toastify";

export default function ContactForm() {
  const dispatch = useDispatch();
  const loading = useSelector((state: any) => state.loading.loading);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contactSchema()),
    defaultValues:{
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
          label={"First Name"}
          labelPlacement="outside"
          name="firstName"
          placeholder="First Name"
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
          label={"Last Name"}
          labelPlacement="outside"
          name="lastName"
          placeholder="Last Name"
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
        label={"Object"}
        labelPlacement="outside"
        name="object"
        placeholder="Object"
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
        label="Message"
        labelPlacement="outside"
        name="message"
        placeholder="Enter your Message"
      />
      <div className="my-10" />
      <Button
        color="default"
        disabled={loading}
        endContent={<FiSend />}
        type="submit"
      >
        Send
      </Button>
      <ToastContainer  theme="dark" closeButton />
    </form>
  );
}
