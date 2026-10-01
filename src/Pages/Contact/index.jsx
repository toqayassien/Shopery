import { SlLocationPin } from "react-icons/sl";
import { PiEnvelopeLight, PiPhoneCall } from "react-icons/pi";
import { ErrorMessage, Field, Form, Formik } from "formik";
import contactValidation from "./validation";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

export default function Contact() {
  const navigate = useNavigate();

  async function onSubmit(event, values) {
    const formData = new FormData(event.target);

    formData.append("access_key", "55a374df-880d-4791-a967-fb1fff350d95");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();

    if (data.success) {
      toast.success("Form Submitted Successfully!");
      navigate("/");
    } else {
      toast.error("Something went wrong");
    }
  }
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-6 py-5 md:px-10 lg:px-20 px-5 md:py-10 md:gap-4 lg:gap-6 h-full">
        <div className="flex flex-col col-span-2 items-start justify-center gap-4 text-gray-700 bg-white shadow-lg lg:shadow-2xl p-10">
          <div className="w-full flex flex-row md:flex-col gap-4 items-center text-left md:text-center border-b border-gray-200 pb-4">
            <div className="text-green-500 text-md md:text-2xl">
              <SlLocationPin />
            </div>
            <p className="text-xs md:text-sm">
              2715 Ash Dr. San Jose, South Dakota 83475
            </p>
          </div>
          <div className="w-full flex flex-row md:flex-col gap-4 items-center text-left md:text-center border-b border-gray-200 pb-4">
            <div className="text-green-500 text-lg md:text-3xl">
              <PiEnvelopeLight />
            </div>
            <p className="text-xs md:text-sm">
              Proxy@gmail.com <br />Help.proxy@gmail.com
            </p>
          </div>
          <div className="flex flex-row md:flex-col gap-4 items-center text-left md:text-center w-full">
            <div className="text-green-500 text-lg md:text-3xl">
              <PiPhoneCall />
            </div>
            <p className="text-xs md:text-sm">
              (219) 555-0114 <br /> (164) 333-0487{" "}
            </p>
          </div>
        </div>
        <div className="col-span-4 flex flex-col gap-3 shadow-2xl p-5 md:p-10">
          <h2 className="font-poppins text-xl font-semibold">
            Just Say Hello!
          </h2>
          <p className="text-xs md:text-sm text-gray">
            Do you fancy saying hi to me or you want to get started with your{" "}
            <br />
            project and you need my help? Feel free to contact me.
          </p>
          <Formik
            validationSchema={contactValidation}
            onSubmit={(event, values) => onSubmit(values)}
            initialValues={{ name: "", email: "" }}
          >
            <Form className="w-full">
              <div className="grid grid-cols-6 grid-rows-4 gap-3">
                <Field
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="col-span-6 lg:col-span-3 px-2 lg:px-4 py-1 lg:py-2 text-xs md:text-base border border-gray-200 rounded-lg outline-0 hover:border-green-400"
                />
                <Field
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="col-span-6 lg:col-span-3 py-1 lg:py-2 px-2 lg:px-4 border text-xs md:text-base border-gray-200 rounded-lg outline-0 hover:border-green-400"
                />
                <Field
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="col-span-6 px-2 lg:px-4 py-1 lg:py-2 text-xs md:text-base border border-gray-200 rounded-lg outline-0 hover:border-green-400"
                />
                <Field
                  type="textarea"
                  name="message"
                  placeholder="Message"
                  className="col-span-6 row-span-6 px-2 lg:px-4 border text-xs md:text-base border-gray-200 rounded-lg outline-0 hover:border-green-400"
                />
                <div>
                  <ErrorMessage
                    component="h4"
                    name="name"
                    className="w-100 text-sm text-red-500"
                  />
                  <ErrorMessage
                    component="h4"
                    name="email"
                    className="w-100 text-sm text-red-500"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="bg-green-500 mt-2 md:mt-4 px-5 md:px-10 py-2 text-xs md:text-sm font-poppins font-semibold text-white rounded-full cursor-pointer"
              >
                Send Message
              </button>
            </Form>
          </Formik>
        </div>
      </div>
      <img src="src/Assets/map.png" alt="" className="w-full h-50 object-cover"/>
    </>
  );
}
