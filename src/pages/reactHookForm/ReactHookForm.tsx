import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import "./Form.css";
type FormValues = {
  username: string;
  email: string;
  channel: string;
};

const ReactHookForm = () => {
  const form = useForm<FormValues>();
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmiting = (data: FormValues) => {
    console.log("form submitted", data);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmiting)}
        noValidate
        className="formContainer"
      >
        <div className="form-control">
          <label htmlFor="username">username</label>
          <input
            type="text"
            id="username"
            {...register("username", {
              required: {
                value: true,
                message: "username required",
              },
            })}
          />
          <p>{errors.username?.message}</p>
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            {...register("email", {
              pattern: {
                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                message: "Invalid email format",
              },
              validate: {
                notBlacklist: (fieldvalue) => {
                  return (
                    !fieldvalue.endsWith("baddomain.com") ||
                    "This domain is nor supported"
                  );
                },
              },
            })}
          />
          <p>{errors.email?.message}</p>
        </div>
        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <input
            type="text"
            id="channel"
            {...register("channel", {
              required: {
                value: true,
                message: "channel is requried",
              },
            })}
          />
          <p>{errors.channel?.message}</p>
        </div>
        <button>Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default ReactHookForm;
