import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api/axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userSchema } from "../validations/userSchema";

export default function AddEditUser() {
  const navigate = useNavigate();
  const { id } = useParams();

  
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema),
  });

  const onSubmit = async (data) => {
    try {
      const formattedData = {
        ...data,
        age: Number(data.age),
      };

      if (id) {
        await api.put(`/users/${id}`, formattedData);
      } else {
        await api.post("/users", formattedData);
      }

      navigate("/");
    } catch (error) {
      console.log("Save error:", error);
    }
  };

  useEffect(() => {
    if (id) {
      api.get(`/users/${id}`).then((res) => {
        setValue("name", res.data.name);
        setValue("username", res.data.username);
        setValue("email", res.data.email);
        setValue("age", res.data.age);
      });
    }
  }, [id, setValue]);

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6">
        {id ? "Edit User" : "Add User"}
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input {...register("name")} className="w-full border p-2 rounded" />
          <p className="text-red-500 text-sm">{errors.name?.message}</p>
        </div>

        <div>
          <label className="block mb-1 font-medium">Username</label>
          <input {...register("username")} className="w-full border p-2 rounded" />
          <p className="text-red-500 text-sm">{errors.username?.message}</p>
        </div>

        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input {...register("email")} className="w-full border p-2 rounded" />
          <p className="text-red-500 text-sm">{errors.email?.message}</p>
        </div>

        <div>
          <label className="block mb-1 font-medium">Age</label>
          <input type="number" {...register("age")} className="w-full border p-2 rounded" />
          <p className="text-red-500 text-sm">{errors.age?.message}</p>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Save
        </button>
      </form>
    </div>
  );
}
