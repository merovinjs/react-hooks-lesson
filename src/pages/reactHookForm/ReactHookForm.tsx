import { useForm, useFieldArray, FieldErrors } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import "./Form.css";
import { useEffect } from "react";
let renderedCount = 0;
type FormValues = {
  username: string;
  email: string;
  channel: string;
  social: {
    twitter: string;
    facebook: string;
  };
  phoneNumbers: string[];
  phNumber: {
    number: string;
  }[];
  age: number;
  dot: Date;
};

function ReactHookForm() {
  const form = useForm<FormValues>({
    defaultValues: async () => {
      const req = await fetch("https://jsonplaceholder.typicode.com/users/1");
      const res = await req.json();

      return {
        username: "batman",
        email: res.email,
        channel: "",
        social: {
          twitter: "",
          facebook: "",
        },
        phoneNumbers: ["", ""],
        phNumber: [{ number: "" }],
        age: 0,
        dot: new Date(),
      };
    },
    mode: "all",
  });
  const {
    register,
    control,
    handleSubmit,
    formState,
    watch,
    getValues,
    setValue,
    reset,
  } = form;
  const {
    errors,
    isDirty,
    isValid,
    touchedFields,
    dirtyFields,
    isSubmitSuccessful,
    isSubmitting,
    isSubmitted,
  } = formState;
  // console.log({ isSubmitted, isSubmitting });
  const { fields, append, remove } = useFieldArray({
    name: "phNumber",
    control,
  });
  //is Submitingi
  //isSubmiting,isSubmited formu submit tuşuna bastığın anda submiting true oluyor buda formun başarılı bir şekilde gönderilirken true olması anlamına geliyor eğer false a düşerse from gönderildi demek oluyor ,issubmited da form gönderilene kadar false göserildikten sonra true oluyor
  //watch form ile verilen değerler ekranda izlenir.eğer "username gibi değer girilmez ise komple form değerleri izlenir"
  //useEffect hook içine alınrak her değer girildiğin re-render olması engellenir
  // isSubmit ile isSubmitSuccesfuly arasında fark vardır.
  // isSubmitform hatalı bile olsa tıklandığında true döner ama isSubmitSuccesfully form doğru bir şekilde database yüklendiğinde döner
  let watchusername = watch("username");

  useEffect(() => {
    const subscription = watch(() => {});
    return () => {
      subscription.unsubscribe();
    };
  }, [watch]);
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const onSubmiting = (data: FormValues) => {
    console.log("form submitted", data);
  };
  const onErrors = (errors: FieldErrors<FormValues>) => {
    console.log("Form error", errors);
  };
  const handleGetValues = () => {
    console.log("handlegetvalues", getValues());
  };
  const handleSetValues = () => {
    console.log(
      "handlesetvalues",
      setValue("username", "", {
        shouldValidate: true,
        shouldDirty: true,
        shouldTouch: true,
      })
    );
  };

  renderedCount++;
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmiting, onErrors)}
        noValidate
        className="formContainer"
      >
        <h1>{`kaç defa render edlidi ${renderedCount}`}</h1>
        <h2>{`useEfect içinde re-render engeller ${watch("username")}`}</h2>
        <h2>{`useEffet içinde yazılmadığı için re-render olmadı ${watchusername}`}</h2>
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
                //kullanıcı databasede varsa döner
                emailAvalible: async (fieldvalue) => {
                  const response = await fetch(
                    `https://jsonplaceholder.typicode.com/users?email=${fieldvalue}`
                  );
                  const data = await response.json();
                  return data.length === 0 || "This email is not avalible";
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
        <div className="form-control">
          <label htmlFor="twitter">Twitter</label>
          <input
            type="text"
            id="twitter"
            disabled={watch("channel") === ""}
            {...register("social.twitter")}
          />
        </div>
        <div className="form-control">
          <label htmlFor="facebook">Facebook</label>
          <input type="text" id="facebook" {...register("social.facebook")} />
        </div>
        <div className="form-control">
          <label htmlFor="phoneNumbers">primary phone number</label>
          <input
            type="text"
            id="phonenumbers"
            {...register("phoneNumbers.0")}
          />
        </div>
        <div className="form-control">
          <label htmlFor="phoneNumbers">secondary phone number</label>
          <input
            type="text"
            id="phoneNumbers"
            {...register("phoneNumbers.1")}
          />
        </div>
        <div className="form-control">
          <label>List of phone numbers</label>
          {fields.map((field, index) => {
            return (
              <div className="form-control" key={field.id}>
                <input type="text" {...register(`phNumber.${index}.number`)} />
                {index > 0 && (
                  <button type="button" onClick={() => remove(index)}>
                    remove
                  </button>
                )}
              </div>
            );
          })}
          <button type="button" onClick={() => append({ number: "" })}>
            Addnumber
          </button>
        </div>
        <div className="form-control">
          <label htmlFor="age">age</label>
          <input
            type="number"
            id="age"
            {...register("age", {
              valueAsNumber: true,
              required: {
                value: true,
                message: "age required",
              },
            })}
          />
          <p>{errors.username?.message}</p>
        </div>
        <div className="form-control">
          <label htmlFor="dot">age</label>
          <input
            type="date"
            id="dot"
            {...register("dot", {
              valueAsDate: true,
              required: {
                value: true,
                message: "dot required",
              },
            })}
          />
          <p>{errors.dot?.message}</p>
        </div>
        <button>Submit</button>
        <button type="button" onClick={handleGetValues}>
          Getvalues
        </button>
        <button type="button" onClick={handleSetValues}>
          Setvalues
        </button>
      </form>
      <DevTool control={control} />
    </div>
  );
}

export default ReactHookForm;
