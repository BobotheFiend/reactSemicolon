const SignUp = () => {
   return (
      <main className="min-h-screen flex flex-col items-center justify-center">
         <div className="py-4 px-4 md:px-8">
            <div className="grid lg:grid-cols-2 items-center gap-6 max-w-6xl w-full">
               <div
                  className="border border-slate-300 rounded-lg p-6 max-w-md mx-auto shadow-sm md:p-8 lg:mx-0">

                  <div className="mb-8">
                     <h1 className="text-slate-900 text-3xl font-bold mb-4">Sign in</h1>
                     <p className="text-slate-600 text-base leading-relaxed">Sign in to your account to access
                        your dashboard and manage your projects.</p>
                  </div>

                  <form className="space-y-6">
                     <div>
                        <label htmlFor="email"
                           className="mb-2 text-slate-900 font-medium text-sm inline-block">Email</label>
                        <input type="email" id="email" name="email" placeholder="john@readymadeui.com" required
                           className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600" />
                     </div>
                     <div>
                        <label htmlFor="password"
                           className="mb-2 text-slate-900 font-medium text-sm inline-block">Password</label>
                        <input type="password" id="password" name="password" placeholder="••••••••" required
                           className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600" />
                     </div>

                     <div className="flex items-start flex-wrap gap-2">


                     </div>

                     <button type="submit"
                        className="w-full py-2 px-3.5 text-sm rounded-md font-semibold cursor-pointer tracking-wide text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
                        Sign in</button>
                  </form>
               </div>

               <div className="aspect-[71/50] max-lg:w-4/5 mx-auto">
                  <img src="https://readymadeui.com/images/integration-illus.webp" className="w-full object-cover"
                     alt="login img" />
               </div>
            </div>
         </div>
      </main>
   );
}


export default SignUp