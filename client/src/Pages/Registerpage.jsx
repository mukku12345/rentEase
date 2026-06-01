import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

export const RegisterPage = () => {
  const validateSchema = yup.object({
    firstName: yup.string().required("First name is required"),

    lastName: yup.string().required("Last name is required"),

    email: yup
      .string()
      .email("Invalid email")
      .required("Email is required"),

    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),

    ConfirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords must match")
      .required("Confirm Password is required"),
  });

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-gray-800 p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-center text-white mb-6">
          Register
        </h1>

        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            ConfirmPassword: "",
          }}
          validationSchema={validateSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          <Form className="space-y-4">
            <div>
              <Field
                type="text"
                name="firstName"
                placeholder="Enter First Name"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage
                name="firstName"
                component="p"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div>
              <Field
                type="text"
                name="lastName"
                placeholder="Enter Last Name"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage
                name="lastName"
                component="p"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div>
              <Field
                type="email"
                name="email"
                placeholder="Enter Email"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage
                name="email"
                component="p"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div>
              <Field
                type="password"
                name="password"
                placeholder="Enter Password"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage
                name="password"
                component="p"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div>
              <Field
                type="password"
                name="ConfirmPassword"
                placeholder="Confirm Password"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage
                name="ConfirmPassword"
                component="p"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition"
            >
              Register
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};