import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { RiEyeCloseLine, RiEyeLine } from "react-icons/ri";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="bg-Blanco">
      <div className="flex justify-center pt-24 pb-4">
        <button
          id="dropdownDividerButton"
          data-dropdown-toggle="dropdownDivider"
          className=" text-black bg-Blanco border border-black hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
        >
          A
          <svg
            className="w-4 h-4 ml-2"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>

        <div
          id="dropdownDivider"
          className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDividerButton"
          >
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Chile
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Mexico
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center font-bold text-5xl leading-normal">
        Ingresa al Ecosistema Xepelin
      </div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="bg-Blanco">
            <div className="p-4">
              <div className="flex flex-col mt-7">
                <label htmlFor="email">Email</label>
                <Field
                  type="text"
                  name="email"
                  required
                  className="mt-1 mb-3 py-4 px-4 rounded-lg border-zinc-400 text-lg"
                  placeholder="Email"
                />
              </div>
              <div className="flex flex-col mt-4 mb-4">
                <label htmlFor="passwod">Crear Contraseña</label>
                <div className="relative">
                  <Field
                    type={showPassword ? "text" : "password"}
                    name="password"
                    required
                    className="w-full mt-1 py-4 px-4 rounded-lg border border-zinc-400 text-lg"
                    placeholder="Ingresa contraseña"
                  />
                  <button
                    type="button"
                    className="absolute right-2 top-7"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <RiEyeCloseLine /> : <RiEyeLine />}
                  </button>
                </div>
                <ErrorMessage name="password" component="div" />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-7 mb-6 w-full py-4 rounded-lg text-Blanco bg-Primary-100 text-2xl font-semibold"
              >
                Ingresar
              </button>
              <div className="text-center text-lg mb-4 ">
                ¿Todavia no tienes cuenta?{" "}
                <span className="underline text-Primary-100">Registrate</span>
              </div>
              <div className="text-Primary-100 text-center  text-lg underline mb-6 mt-4">
                Recuperar acceso a mi cuenta
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default Login;
