import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "./schema";
function Form() {
  const {
    register,
    handleSubmit,
     reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });
  const onSubmit = (data) => {
    console.log(data);
     reset();
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md bg-white p-6 rounded-lg shadow-md space-y-4" >
        <h2 className="text-2xl font-semibold text-center text-gray-700">
          Register</h2>
        <div>
          <input
            type="text"
            {...register("name")}
            placeholder="Name"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          <p className="text-red-500 text-sm mt-1">
            {errors.name?.message}
          </p>
        </div>
        {/* Age */}
        <div>
          <input
            type="number"
            {...register("age")}
            placeholder="Age"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          <p className="text-red-500 text-sm mt-1">
            {errors.age?.message}
          </p>
        </div>
        <div>
          <input
            type="email"
            {...register("email")}
            placeholder="Email"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          <p className="text-red-500 text-sm mt-1">
            {errors.email?.message}
          </p>
        </div>
        {/* Password */}
        <div>
          <input
            type="password"
            {...register("password")}
            placeholder="Password"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          <p className="text-red-500 text-sm mt-1">
            {errors.password?.message}
          </p>
        </div>
        {/* Confirm Password */}
        <div>
          <input
            type="password"
            {...register("confirmPassword")}
            placeholder="Confirm Password"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <p className="text-red-500 text-sm mt-1">
            {errors.confirmPassword?.message}
          </p>
        </div>

        {/* Skills */}
        <div>
          <label className="block font-medium text-gray-600 mb-1">
            Skills
          </label>

          <div className="flex gap-4 text-sm">
            <label className="flex items-center gap-1">
              <input
                type="checkbox"
                value="React"
                {...register("skills")}
                className="accent-blue-500"
              />
              React
            </label>

            <label className="flex items-center gap-1">
              <input
                type="checkbox"
                value="nodejs"
                {...register("skills")}
                className="accent-blue-500"
              />
              NodeJS
            </label>
            <label className="flex items-center gap-1">
              <input
                type="checkbox"
                value="javascript"
                {...register("skills")}
                className="accent-blue-500" /> JavaScript</label>
          </div>
          <p className="text-red-500 text-sm mt-1">
            {errors.skills?.message}
          </p>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default Form;
