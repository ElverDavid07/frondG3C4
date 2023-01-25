import Datatable, { createTheme } from "react-data-table-component";
import {toast,ToastContainer,Zoom} from 'react-toastify'
import Swal from "sweetalert2";
import {
  Button,
  IconButton,
  Tooltip,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
} from "@material-tailwind/react";
import React from "react";
import {
  AiOutlineEdit,
  AiOutlineDelete,
  AiOutlineWarning,
  AiOutlineLoading3Quarters,
  AiOutlineClose
} from "react-icons/ai";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";


const usuarios = () => {
  const UrlBase = "http://localhost:3001/api/users/";
  //!--------peticion get-------------
  const api = async () => {
    try {
      const response = await axios(UrlBase);
      const date = await response.data
      setDatos(date);
      setloader(false)
    } catch (error) {
      console.log(error);
    }
  };
  
  //!----------//----------


  //!-------editar---------------
  const editar = (id)=>{
    console.log(id)
    axios.put(UrlBase+id)
    mostrarModal()
  }
  //!------------eliminar------------
 
  const delate = async(id)=>{
  Swal.fire({
    title: 'Estas seguro?',
    text: `de eliminar este libro`,
    icon: 'warning',
    showCancelButton: true,
    cancelButtonText:'cancelar',
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'si,estoy seguro!'
  }).then(async(result) => {
    if (result.isConfirmed) {
      try {
    axios.delete(UrlBase+id)
        
      } catch (error) {
        console.log(error)
      }
      setDatos(datos.filter(dato =>dato._id !== id))
      toastify()
    }
  })
  
}
const toastify =()=>{
  toast.success("eliminado correctamente")
}
//!useEfect
  const [datos, setDatos] = useState([]);
  useEffect(() => {
    api()
  }, []);
  //useStates
   const [loader, setloader] = useState(true);
  const [activate, setActivate] = useState(false);
  //abrir modal

  const mostrarModal = () => setActivate(!activate);//true

  //usemodal
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //!----peticion post-------

  const customSubmit = (data) => {
    axios.post(UrlBase,data)
    setDatos(datos.concat(data))
    reset();
   
  };
  

  //columnas de la tabla
  const columns = [
    {
      name: "nombre",
      selector: (row) => row.nombre,
      sortable: true,
      grow:"2"
      
    },

    {
      name: "correo",
      selector: (row) => row.correo,
      sortable: true,
      grow:"2"
    },
    { name: "contraseña", selector: (row) => row.contraseña,
     sortable: true,grow:"3"},
     
     
    //botones en la table
    {
      name: "acciones",
      grow:"1",
      selector: (row) => (
        <div className="flex items-center gap-3 text-center">
          <Tooltip
            content="editar"
            placement="left"
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0, y: 25 },
            }}
          >
            <IconButton variant="text" onClick={()=> editar(row._id)}>
              <AiOutlineEdit className="h-5 w-5" />
            </IconButton>
          </Tooltip>
          <Tooltip
            content="eliminar"
            placement="right"
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0, y: 25 },
            }}
          >
            <IconButton variant="text" color="red" onClick={()=> delate(row._id)}>
              <AiOutlineDelete className="h-5 w-5" />
            </IconButton>
          </Tooltip>
        </div>
      ),
    },
  ];
  //tema personalizado
  createTheme("custom", {
    divider: {
      default: "transparent",
    },
  });

  //paginacion en español
  const paginationOpciones = {
    rowsPerPageText: "Filas por pagina",
    rangeSeparatorText: "de",
    selectAllRowsItem: true,
    noRowsPerPage: false,
    selectAllRowsItemText: "todos",
  };


//?--------------------------
  return (
    <>
    
      <div className="container flex-1 items-center bg-white">
        <div className="ml-8 my-3">
          <Button variant="outlined" onClick={mostrarModal} className="mt-3 ml-3">
            Crear
          </Button>
        </div>
        {/* <span className="flex gap-2 items-center justify-end mb-5 mr-20 bg-gradient-to-br from-indigo-900 to-cyan-500 bg-clip-text text-transparent  font-book text-2xl capitalize">total de libros {datos.length}</span> */}
        <Dialog
          size="sm"
          open={activate}
          handler={mostrarModal}
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0.9, y: -100 },
          }}
        >
          <form onSubmit={handleSubmit(customSubmit)} className="bg-white/10">
            <DialogHeader>
              
              
             
              <h3 className=" mx-auto py-3  font-book text-2xl font-extrabold bg-gradient-to-bl from-blue-900 via-cyan-400 to-deep-purple-700 bg-clip-text text-transparent tracking-tight">
                Crear un usuario
              </h3>
            </DialogHeader>
            <DialogBody  className="mx-3 flex flex-col gap-y-10">
              <div className="relative mt-6">
                <Input
                  type="text"
                  label="nombre"
                  {...register("nombre", {
                    required: true,
                  })}
                  variant="outlined"
                  autoComplete="off"
                  
                />
                {errors.nombre?.type === "required" && (
                  <small className="absolute top-12 flex items-center gap-1 pt-0 text-xs text-red-700 transition-all">
                    <AiOutlineWarning />
                    el campo no puede estar vacio
                  </small>
                )}
              </div>

              <div className="relative">
                <Input
                  type="email"
                  label="correo"
                  {...register("correo", { required: true,
                    pattern:
                    /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
                  })}
                  variant="outlined"
                  autoComplete="off"


                />
                {errors.correo?.type === "required" && (
                  <small className="absolute top-12 z-50 flex items-center gap-1 text-xs text-red-700 transition-all">
                    <AiOutlineWarning />
                    el campo no puede estar vacio
                  </small>
                )}
                {errors.correo?.type === "pattern" && (
                  <small className="absolute top-12 text-xs text-red-700 flex gap-1 items-center">
                    <AiOutlineWarning/>escribe un correo valido
                  </small>
                )}
                
              </div>
              <div className="relative mb-6">
                <Input
                  type="password"
                  label="contraseña"
                  {...register("contraseña", { required: true, minLength: 4 })}
                  variant="outlined"
                  autoComplete="off"

                />
                {errors.contraseña?.type === "required" && (
                  <small className="absolute top-12 flex items-center gap-1 text-xs text-red-700 transition-all">
                    <AiOutlineWarning />
                    el campo no puede estar vacio
                  </small>
                )}
                 {errors.contraseña?.type === "minLength" && (
                  <small className="absolute top-12 text-xs text-red-700 flex gap-1 items-center">
                    <AiOutlineWarning/>la contraseña no puede ser menor a 4 digitos
                  </small>
                )}
              
              </div>
            </DialogBody>
            <DialogFooter>
              <Button variant="gradient" type="submit" onClick={mostrarModal}>agregar</Button>
            </DialogFooter>
          </form>
        </Dialog>

       {loader ? ( <div>
          <AiOutlineLoading3Quarters className="animate-spin text-5xl mt-16 mx-auto text-blue-500" />
        </div>):(
           <div className="mx-auto lg:w-[90%] w-full">
          
           <Datatable
             data={datos}
             columns={columns}
             fixedHeader
             responsive
             fixedHeaderScrollHeight="400px"
             striped
             title={`total de usuarios ${datos.length}`}
             
            //  expandableRows
             pagination
             theme="custom"
             highlightOnHover
             paginationComponentOptions={paginationOpciones}
           />
         </div>
        )}
      </div>
      <ToastContainer autoClose={1000} hideProgressBar={true} transition={Zoom}/>
    </>
  );
};

export default usuarios;
