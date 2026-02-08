import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { DevTool } from "@hookform/devtools";
import { formSchema } from "../src/schemas/formSchema";

function FormWithZod() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      age: 18,
      country: "",
      gender: "",
      skills: [],
      dob: new Date(),
      social: {
        facebook: "",
        twitter: "",
      },
      phonenumber: ["", ""],
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-2xl bg-white shadow-xl rounded-xl p-8 space-y-6"
      >
        <h1>Reack Hook Form With Zod</h1>
        {/* Name */}
        <div className="flex flex-col">
          <label className="font-semibold mb-1">Name</label>
          <input
            className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("name")}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label className="font-semibold mb-1">Email</label>
          <input
            className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Age */}
        <div className="flex flex-col">
          <label className="font-semibold mb-1">Age</label>
          <input
            type="number"
            className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("age", { valueAsNumber: true })}
          />
          {errors.age && (
            <p className="text-red-500 text-sm mt-1">{errors.age.message}</p>
          )}
        </div>
        <div className="flex flex-col">
          <label className="font-semibold mb-1">Country</label>
          <select
            className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("country")}
          >
            <option value="">Select Country</option>
            <option value="pakistan">Pakistan</option>
            <option value="india">India</option>
          </select>
          {errors.country && (
            <p className="text-red-500 text-sm mt-1">
              {errors.country.message}
            </p>
          )}
        </div>
        <div className="flex flex-col">
          <label className="font-semibold mb-1">Gender</label>
          <div className="flex gap-4 mt-1">
            <label className="flex items-center gap-2">
              <input type="radio" value="male" {...register("gender")} />
              Male
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" value="female" {...register("gender")} />
              Female
            </label>
          </div>
          {errors.gender && (
            <p className="text-red-500 text-sm mt-1">{errors.gender.message}</p>
          )}
        </div>
        <div className="flex flex-col">
          <label className="font-semibold mb-1">Primary Phone</label>
          <input
            className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("phonenumber.0")}
          />
          {errors.phonenumber?.[0] && (
            <p className="text-red-500 text-sm mt-1">
              {errors.phonenumber[0].message}
            </p>
          )}
        </div>
        <div className="flex flex-col">
          <label className="font-semibold mb-1">Secondary Phone</label>
          <input
            className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("phonenumber.1")}
          />
          {errors.phonenumber?.[1] && (
            <p className="text-red-500 text-sm mt-1">
              {errors.phonenumber[1].message}
            </p>
          )}
        </div>
        <div className="flex flex-col">
          <label className="font-semibold mb-1">Facebook</label>
          <input
            className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("social.facebook")}
          />{" "}
        </div>
        <div className="flex flex-col">
          <label className="font-semibold mb-1">Twitter</label>
          <input
            className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("social.twitter")}
          />
        </div>
        <div className="flex flex-col">
          <label className="font-semibold mb-1">DOB</label>
          <input
            type="date"
            className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("dob", { valueAsDate: true })}
          />
        </div>
        <div className="flex flex-wrap gap-4 mt-4">
          <button
            type="submit"
            className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            {" "}
            Submit
          </button>
        </div>
      </form>
      <DevTool control={control} placement="top-left" />
    </div>
  );
}
export default FormWithZod;
