import { Formik, Form, Field, ErrorMessage } from "formik";
import { RiEyeCloseLine, RiEyeLine } from "react-icons/ri";
import { useState } from "react";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const [showPassword1, setShowPassword1] = useState(false);

  const handleShowPassword1 = () => {
    setShowPassword1(!showPassword1);
  };
  return (
    <Formik className="h-screen" style={{ height: '100vh' }}
      initialValues={{
        email: "",
        passwords: "",
        password: "",
        confirmPassword: "",
      }}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="h-full">
          <div className="text-blue-800 text-center pt-8 pb-8 font-medium">
            Paso 3 de 3
          </div>
          <div className="text-center text-2xl pt-3 pb-3 font-semibold">
            Crear Cuenta
          </div>
          <div className="p-4">
            <div className="flex flex-col mt-3">
              <label htmlFor="email">Correo Electronico</label>
              <Field
                type="text"
                name="email"
                required
                className="mt-2 py-2 px-4 rounded-lg border border-zinc-400"
                placeholder="Ingresa correo de empresa"
              />
              <ErrorMessage name="email" component="div" />
            </div>
            <div className="flex flex-col mt-4">
              <label htmlFor="passwod">Crear Contraseña</label>
              <div className="relative">
                <Field
                  type={showPassword ? "text" : "password"}
                  name="password"
                  required
                  className="w-full mt-2 py-2 px-4 rounded-lg border border-zinc-400"
                  placeholder="Ingresa contraseña"
                />
                <button
                  type="button"
                  className="absolute right-2 top-5"
                  onClick={handleShowPassword}
                >
                  {showPassword ? <RiEyeCloseLine /> : <RiEyeLine />}
                </button>
              </div>
              <ErrorMessage name="password" component="div" />
            </div>
            <div className="flex flex-col mt-4">
              <label htmlFor="confirmPassword">
                Vuelva a escrbir tu contraseña
              </label>
              <div className="relative">
              <Field
                type={showPassword1 ? "text" : "password"}
                name="confirmPassword"
                required
                className="w-full mt-2 py-2 px-4 rounded-lg border border-zinc-400"
                placeholder="Ingresa contraseña"
              />
              <button
                  type="button"
                  className="absolute right-2 top-5"
                  onClick={handleShowPassword1}
                >
                  {showPassword1 ? <RiEyeCloseLine /> : <RiEyeLine />}
                </button>
              </div>
           
              <ErrorMessage name="confirmPassword" component="div" />
            </div>
            <div>
              <button className="text-indigo-600 font-medium text-center w-full mt-2 mb-2">
                ¿Tienes una Invitacion?
              </button>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-3 py-4  w-full bg-indigo-600 rounded-lg text-xl text-white font-semibold"
            >
              Register
            </button>
            <button className="mt-3 py-4 w-full text-indigo-600 text-lg font-bold bg-indigo-100 rounded-lg mb-10">
              Atras
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
