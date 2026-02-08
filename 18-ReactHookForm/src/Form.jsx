import { useForm } from "react-hook-form"
import { DevTool } from '@hookform/devtools';
import { useEffect } from "react";
function Form() {
   const { register, handleSubmit, control, 
      formState, watch, getValues, setValue, reset, trigger  } = useForm({
      defaultValues:{
         name: "",
         email: "",
         age: 18,
         social: {
            facebook:"",
            twitter: ""
         },
         phonenumber: ["",""],                       
         dob: new Date()
      },

    //    mode:"onBlur"
    //    mode:"onChange"
    // by default onsubmit work 
      // mode: "all"

   });
//    use  the api to pass data in the form 

   // const { register, handleSubmit, control, formState  } = useForm({
   //    defaultValues: async () => {
   //       const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
   //       const data = await response.json();
   //       return {
   //          name: data.name,
   //          email: data.email,
   //          age: 18
   //       }
   //    }
   // });
   const { errors, dirtyFields, 
      touchedFields, isDirty, isValid, 
      isSubmitting, isSubmitted, isSubmitSuccessful, submitCount } = formState;
   // console.log(formState)
   // console.log({dirtyFields, touchedFields, isDirty})
   console.log({isSubmitting, isSubmitted, isSubmitSuccessful, submitCount})
   const onSubmit = (data) => {
      console.log(data)
   }
   // const watchName = watch("name")
//    give the full form values watch() 
   // const watchForm = watch()   


//     to send on the server real time 
// again and again page rerender 
   // useEffect(() => {
   //    console.log(watchForm)
   // },[watchForm])


    //  used with the event 
    //  not rerender again and again 
   const getFormValue = () =>{
      const values = getValues()   // give us all the values  
    //   const values = getValues( "name")   // get specific values 

     //   const values = getValues(["name","email"])   // get  multiple values with array  
      console.log(values)
   }
   const setFormValue = () =>{
      setValue("name", "Hina", {
         shouldValidate:true,
         shouldTouch:true,
         shouldDirty:true
      })
   }
   const onError = (errors) => {
      console.log("Errors :", errors)
   }
    //  reset form when we  click  submit button                
   useEffect(() => {
      if(isSubmitSuccessful){
         reset()
      }
   },[isSubmitSuccessful])
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form 
        onSubmit={handleSubmit(onSubmit, onError)} 
        className="w-full max-w-2xl bg-white shadow-xl rounded-xl p-8 space-y-4"
      >
<h1>React Hook Form</h1>
         <label htmlFor="name" className="font-semibold">Name</label>
         <input 
            type="text" 
            id="name"
            className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            {...register("name", { required: 'Name is required.' })}
         />
         {errors.name && <p className="text-red-500 text-sm">{errors.name?.message}</p>}

         <label htmlFor="email" className="font-semibold">Email</label>
         <input 
            type="email" 
            id="email"
            className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            {...register("email" , {
               required: 'Email is required.',
               pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  message: 'Invalid email address'
               },
               validate: {
                  notAdminEmail: (value) =>
                     value !== "admin@example.com" || "Enter a different email address",
                  notBlacklistedEmail: (value) =>
                     !value.endsWith("@blacklisted.com") || "This domain is not allowed.",
                  availableEmail: async (value) => {
                     const response = await fetch(`https://jsonplaceholder.typicode.com/users?email=${value}`)
                     const data = await response.json()
                     return data.length === 0 || "Email already exists.";
                  }
               }
            })} 
         />
         {errors.email && <p className="text-red-500 text-sm">{errors.email?.message}</p>}

         <label htmlFor="age" className="font-semibold">Age</label>
         <input 
            type="number" 
            id="age"
            className="w-full border rounded-md px-3 py-2"
            {...register("age" , {
               valueAsNumber: true,
               required: 'Age is required.',
               min:{ value:18, message: 'Age must be at least 18' },
               max:{ value:25, message: 'Age must be at most 25' }
            })} 
         />
         {errors.age && <p className="text-red-500 text-sm">{errors.age?.message}</p>}

         <label className="font-semibold">Country</label>
         <select className="w-full border rounded-md px-3 py-2" {...register("country")}>
            <option value="">Select Country</option>
            <option value="pakistan">Pakistan</option>
            <option value="india">India</option>
            <option value="bangladesh">Bangladesh</option>
         </select>

{/* radio   */}

         <label className="font-semibold">Gender</label>
         <div className="flex gap-4">
            <label className="flex gap-2 items-center">
               <input type="radio" value="male" {...register("gender", {required:true})} />
               Male
            </label>
            <label className="flex gap-2 items-center">
               <input type="radio" value="female" {...register("gender")} />
               Female
            </label>
         </div>

{/* checkbox  */}

         <label className="font-semibold">Skills</label>
         <div className="flex gap-4">
            <label><input type="checkbox" value="react" {...register("skills")} /> React</label>
            <label><input type="checkbox" value="node" {...register("skills")} /> NodeJS</label>
            <label><input type="checkbox" value="mongodb" {...register("skills")} /> MongoDB</label>
         </div>

         <label className="font-semibold">DOB</label>
         <input type="date" className="w-full border rounded-md px-3 py-2"
            {...register("dob", { valueAsDate: true })} />

         <label className="font-semibold">Facebook</label>
         <input className="w-full border rounded-md px-3 py-2"
            {...register("social.facebook")} />

         <label className="font-semibold">Twitter</label>
         <input className="w-full border rounded-md px-3 py-2"
            {...register("social.twitter")} />

         <label className="font-semibold">Primary Phone Number</label>
         <input className="w-full border rounded-md px-3 py-2"
            {...register("phonenumber.0")} />

         <label className="font-semibold">Secondary Phone Number</label>
         <input className="w-full border rounded-md px-3 py-2"
            {...register("phonenumber.1")} />

         <div className="flex flex-wrap gap-3 pt-4">
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md">Submit</button>
            <button type="button" onClick={getFormValue} className="bg-gray-600 text-white px-4 py-2 rounded-md">Get Values</button>
            <button type="button" onClick={setFormValue} className="bg-green-600 text-white px-4 py-2 rounded-md">Set Value</button>
            <button type="button" onClick={() => trigger("name")} className="bg-yellow-500 text-white px-4 py-2 rounded-md">Validate</button>
            <button type="button" onClick={() => reset({ name:"esha", email:"esha@gmail.com" })} className="bg-red-600 text-white px-4 py-2 rounded-md">Reset</button>
         </div>
      </form>

      <DevTool control={control} placement="top-left" />
    </div>
  )
}
export default Form
