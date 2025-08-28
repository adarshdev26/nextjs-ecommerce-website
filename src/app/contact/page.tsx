export default function Contact() {
  return (
    <div className="w-full max-w-7xl mx-auto py-10 mt-10">
      <div className="grid md:grid-cols-2 w-full">
        <div className="p-10">
          <button className="rounded-2xl border p-3">Contact Us</button>
          <h1 className="text-5xl font-bold p-5">24/7 Available</h1>
          <p className="p-5 text-xl">
            You can contact us via email, phone, or by filling out the form on
            this page. We strive to respond promptly and look forward to
            connecting with you soon!
          </p>
          <div className="mt-2 w-full border rounded-2xl p-3 m-3">
            <a href="" className="">
              example@gmail.com
            </a>
          </div>
          <div className="mt-8 w-full border rounded-2xl p-3 m-3">
            <a href="" className=" ">
              +343786374374
            </a>
          </div>
        </div>

        <div className="bg-[#fafafa] py-8 px-10 border-1 border-gray-100 rounded-2xl">
          <h3 className="">Write Us</h3>
          <h5 className="text-xl">We’d love to hear from you! </h5>

          <form>
            <div className="flex justify-between p-5 gap-5">
              <div className="">
                <label className="font-medium">First Name</label>
                <input
                  className="border border-gray-300 p-2 rounded-xl w-full"
                  type="text"
                  placeholder="first name"
                />
              </div>
              <div className="">
                <label className="font-medium">Last Name</label>
                <input
                  className="border border-gray-300 p-2 rounded-xl w-full"
                  type="text"
                  placeholder="last name"
                />
              </div>
            </div>
            <div className="">
              <label className="font-medium">Email</label>
              <div className="">
                <input
                  className="border border-gray-300 p-2 rounded-xl w-full"
                  type="email"
                  placeholder="Email"
                />
              </div>
            </div>

            <div className="p-4">
              <label className="font-medium">Location</label>
              <div className="mt-2">
                <select
                  id="countries"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>Choose a country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
            </div>
            <button className="p-3 w-full bg-black text-white rounded-2xl">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
