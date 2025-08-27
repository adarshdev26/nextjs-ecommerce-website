export default function Contact() {
    return (
        <div className="w-full max-w-7xl mx-auto py-10">
            <div className="grid md:grid-cols-2 w-full">
                <div className="p-10">
                <button className="rounded-2xl border p-3">Contact Us</button>
                <h1 className="text-5xl font-bold p-5">24/7 Available</h1>
                <p className="p-5 text-xl">You can contact us via email, phone, or by filling out the form on this page. We strive to respond promptly and look forward to connecting with you soon!</p>
              <div className="mt-2 w-full border rounded-2xl p-3 m-3">
              <a href="" className="">example@gmail.com</a>
              </div>
            <div className="mt-8 w-full border rounded-2xl p-3 m-3">
            <a href="" className=" ">+343786374374</a>
            </div>
                </div>

                <div className="bg-gray-50 py-8 px-10 border rounded-2xl">
                <h3 className="">Write Us</h3>
                <h5 className="text-xl font-bold p-2">We’d love to hear from you! </h5>
                <p className="p-2 text-xl">You can contact us via email, phone, or by filling out the form on this page. We strive to respond promptly and look forward to connecting with you soon!</p>
                <form>
                    <div className="flex justify-between p-5">
                        <div className="">
                        <label className="font-bold">First Name</label>
                        <input 
                        className="border p-2 rounded-xl"
                        type="text"
                         placeholder="first name" />
                        </div>
                      <div className="">
                      <label className="font-bold">Last Name</label>
                      <input 
                         className="border p-2 rounded-xl"
                      type="text" 
                      placeholder="last name" />
                      </div>
                      
                    </div>
                    <div className="">
                    <label className="font-bold">Email</label>
                      <input 
                         className="border p-2 rounded-xl"
                      type="email" 
                      placeholder="Email" />
                    </div>
                </form>
                </div>
            </div>
           
        </div>
    )
}