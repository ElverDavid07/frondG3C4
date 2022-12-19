import {useState } from "react";
import {Button,Dialog,DialogHeader,DialogBody,DialogFooter,Typography,Input} from "@material-tailwind/react";
import {RiUser3Line,RiEyeLine,RiEyeOffLine } from 'react-icons/ri'
import {AiOutlineWarning} from 'react-icons/ai'

import {useForm} from 'react-hook-form'
import {useCustomContext} from '../context/IndexContext'




const Login=() => {
 
    const {Activate,setActivate} =useCustomContext();
  const Cerrar =()=>setActivate(!Activate)
    

    const {register,handleSubmit,watch,formState:{errors}} = useForm();
    //!funcion para enviar el formulario
    const customSubmit = data => {
      console.log(data);
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });
      console.log();
      
      Toast.fire({
        icon: 'success',
        title: 'login success'
      })}

      const [showpsw, setShowpsw] = useState(false);
      const show = () =>{
        setShowpsw(!showpsw)
      }

  return (
    <>
      {/* formulario de login */}
      <Dialog
        open={Activate}
        handler={Cerrar}
        size="sm"
        className=" to-sky-400  container box-border max-h-full"
      >
        <form onSubmit={handleSubmit(customSubmit)}>
          <DialogHeader className="flex  w-full justify-center">
            <div className="flex flex-col">
              <RiUser3Line className="bg-sky-400 mt-8 self-center rounded-full text-7xl  text-cyan-400" />
              <Typography className="text-slate-700 mt-2" variant="h2">
                Log in
              </Typography>
            </div>
          </DialogHeader>
          <DialogBody className="mt-9 flex justify-center">
            <div className="flex w-10/12 flex-col  gap-9 ">
              {/*----------- */}
              <div className="relative">
                {/* input de correo */}
                <Input
                  label="login"
                  variant="standard"
                  className="w-full text-white"
                  type="email"
                  color="teal"
                  {...register("correo", {
                    required: true,
                    pattern:
                      /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
                  })}
                />
                {errors.correo?.type === "required" && (
                  <small className="absolute top-12 text-xs text-red-700  flex gap-1 items-center">
                    <AiOutlineWarning/>el campo no puede estar vacio
                  </small>
                )}
                {errors.correo?.type === "pattern" && (
                  <small className="absolute top-12 text-xs text-red-700 flex gap-1 items-center">
                    <AiOutlineWarning/>escribe un correo valido
                  </small>
                )}
              </div>
              {/*----------- */}
              <div className="relative">
                {" "}
                {/* input de contraseña */}
                <Input
                  label="contraseña"
                  variant="standard"
                  className="w-full"
                  type={showpsw ? "text" : "password"}
                  color="teal"
                  icon={
                    showpsw ? (
                      <RiEyeLine onClick={show} className="cursor-pointer" />
                    ) : (
                      <RiEyeOffLine className="cursor-pointer" onClick={show} />
                    )
                  }
                  {...register("contraseña", { required: true, minLength: 4 })}
                />
                {errors.contraseña?.type === "required" && (
                  <small className="absolute top-12 text-xs text-red-700 flex gap-1 items-center">
                    <AiOutlineWarning/>el campo no puede estar vacio
                  </small>
                )}
                {errors.contraseña?.type === "minLength" && (
                  <small className="absolute top-12 text-xs text-red-700 flex gap-1 items-center">
                    <AiOutlineWarning/>la contraseña no puede ser menor a 4 digitos
                  </small>
                )}
              </div>
              {/* ---------- */}

              <Button className="mt-7" type="submit" >
                login
              </Button>
            </div>
          </DialogBody>
          <DialogFooter className="flex justify-center gap-7">
            <h1>xd</h1>
          </DialogFooter>
        </form>
      </Dialog>
    </>
  );
}

export default Login
