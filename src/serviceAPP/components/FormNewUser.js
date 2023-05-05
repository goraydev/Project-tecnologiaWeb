import { useEffect, useState } from "react";
import { BasicTemplate } from "./BasicTemplate"
import { useAuthStore, useForm } from "../../hooks";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const FormNewUser = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { createNewUser, errorMessage, msg } = useAuthStore();
    const navigate = useNavigate();
    const { formState, formState: {
        name,
        last_name,
        email,
        username,
        password,
    }, onInputChange, onResetForm } = useForm({
        name: "",
        last_name: "",
        email: "",
        username: "",
        password: ""
    });

    const handleSubmitRegister = (e) => {
        e.preventDefault();
        createNewUser(formState);
        onResetForm();
    }

    useEffect(() => {
        if (msg !== undefined) {
            Swal.fire({
                icon: 'success',
                title: 'Usuario creado exitosamente',
            })
            navigate("/");
        }
    }, [msg])

    useEffect(() => {
        if (errorMessage !== undefined) {

            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: errorMessage,
            })
        }
    }, [errorMessage])
    return (
        <>
            <BasicTemplate />
            <main className="container mx-auto mt-5 mb-10">
                <form action="" className="my-6 flex flex-col gap-10" onSubmit={handleSubmitRegister}>
                    <div className="relative">
                        <input
                            id="id-b14"
                            type="text"
                            placeholder="Nombre"
                            className="peer relative h-10 w-full border-b border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-sky-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                            name="name"
                            value={name}
                            onChange={onInputChange}
                        />
                        <label
                            htmlFor="id-b14"
                            className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\u*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-sky-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                        >
                            Nombre
                        </label>
                    </div>
                    <div className="relative">
                        <input
                            id="id-b15"
                            type="text"
                            placeholder="Apellido"
                            className="peer relative h-10 w-full border-b border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-sky-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                            name="last_name"
                            value={last_name}
                            onChange={onInputChange}
                        />
                        <label
                            htmlFor="id-b15"
                            className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\u*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-sky-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                        >
                            Apellido
                        </label>
                    </div>
                    <div className="relative">
                        <input
                            id="id-b16"
                            type="email"
                            placeholder="Correo"
                            className="peer relative h-10 w-full border-b border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-sky-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                            name="email"
                            value={email}
                            onChange={onInputChange}

                        />
                        <label
                            htmlFor="id-b16"
                            className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\u*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-sky-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                        >
                            Correo
                        </label>
                    </div>
                    <div className="relative">
                        <input
                            id="id-b17"
                            type="text"
                            placeholder="Crea nombre de usuario"
                            className="peer relative h-10 w-full border-b border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-sky-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                            name="username"
                            value={username}
                            onChange={onInputChange}

                        />
                        <label
                            htmlFor="id-b17"
                            className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\u*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-sky-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                        >
                            Crea nombre de usuario
                        </label>
                    </div>
                    <div className="">
                        <div className="relative">
                            <input
                                id="id-b18"
                                type={showPassword ? "text" : "password"}
                                placeholder="Crea password"
                                className="peer relative h-10 w-full border-b border-slate-200 px-4 pr-12 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-sky-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                                name="password"
                                value={password}
                                onChange={onInputChange}

                            />
                            <label
                                htmlFor="id-b18"
                                className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\u*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-sky-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                            >
                                Crea password
                            </label>
                            {showPassword ? (
                                <svg
                                    onClick={() => setShowPassword(!showPassword)}
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute top-2.5 right-4 h-5 w-5 cursor-pointer stroke-slate-400 peer-disabled:cursor-not-allowed"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    aria-labelledby="title-2 description-2"
                                    role="graphics-symbol"
                                >
                                    <title id="title-2">Check mark icon</title>
                                    <desc id="description-2">Icon description here</desc>
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    onClick={() => setShowPassword(!showPassword)}
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute top-2.5 right-4 h-5 w-5 cursor-pointer stroke-slate-400 peer-disabled:cursor-not-allowed"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    aria-labelledby="title-2d description-2d"
                                    role="graphics-symbol"
                                >
                                    <title id="title-2d">Check mark icon</title>
                                    <desc id="description-2d">Icon description here</desc>
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                                    />
                                </svg>
                            )}
                        </div>
                    </div>
                    <button type="submit" className="btn self-center hover:bg-blue-500 hover:text-white">
                        <p>Crear nuevo usuario</p>
                    </button>
                </form>
            </main>
        </>
    )
}