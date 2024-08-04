import React from "react";

const ContactForm = () => {
  return (
    <div className="container flex justify-between ">
      <div className="max-w-md mx-auto my-10 p-10 border rounded-lg shadow-lg bg-white">
        <form>
          <div className="flex justify-around">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="John Doe"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                E-Mail
              </label>
              <input
                type="email"
                id="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="j.doe@company.com"
              />
            </div>
          </div>

          <div className="flex justify-around">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="budget"
              >
                Budget Range in $
              </label>
              <input
                type="text"
                id="budget"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="2.00 - 10.00 $"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="services"
              >
                Services
              </label>
              <select
                id="services"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option>Design</option>
                <option>Dev</option>
                <option>Consulting</option>
              </select>
            </div>
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="description"
            >
              Project description
            </label>
            <textarea
              id="description"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Hi Brian,

I need assistance with... Here are my goals and timeline: ... Additionally, you can find my design link here: ..."
              rows="5"
            ></textarea>
          </div>
          <div className="mb-4">
            {/* <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox" />
            <span className="ml-2">
              By submitting this form, you agree to the Privacy Policy
            </span>
          </label> */}
          </div>
          <div className="mb-4 flex justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
            <div className="text-center mt-4 flex flex-col justify-center items-center">
              <p>Hate Contact forms?</p>
              <p>
                <a
                  href="mailto:brianotieno586@gmail.com"
                  className="text-sm text-blue-500 hover:underline"
                >
                  my email
                </a>
              </p>
            </div>
          </div>
        </form>
      </div>
      <div className="flex flex-col justify-center items-center">
        Are you interested in collaborating with me? I’d be thrilled to discuss
        potential projects and hear your ideas. Please feel free to reach
        out—I’m excited to connect and explore how we can work together!
      </div>
    </div>
  );
};

export default ContactForm;
