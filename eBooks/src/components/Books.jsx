
const Books = () => {
  return (
    <div className="bg-pink-200 h-screen " >
      
      <ul className="grid grid-flow-col justify-items-center ">

        <li className="max-w-sm bg-white shadow-lg rounded-2xl p-6 ">
          <img src='/gallery2974.jpg' alt="" className="p-3  bg-pink-100" />

          <section className="bg-red-700 rounded">
            <h1 className="text-xl bg-blue-500 text-white px-4 py-2">Title</h1>
            <h3>Descr....</h3>
            <p>r*****</p>
          </section>

          <button className="mt-4 bg-green-800 text-white px-4 py-2 rounded-full hover:bg-green-300 hover:text-xl hover:font-bold "> view </button>
    
        </li>

        <li className="max-w-sm bg-white shadow-lg rounded-2xl p-6 ">
          <img src='/gallery2974.jpg' alt="" className="p-3  bg-pink-100" />

          <section className="bg-red-700 rounded">
            <h1 className="text-xl bg-blue-500 text-white px-4 py-2">Title</h1>
            <h3>Descr....</h3>
            <p>r*****</p>
          </section>

          <button className="mt-4 bg-green-800 text-white px-4 py-2 rounded-full hover:bg-green-300 hover:text-xl hover:font-bold "> view </button>
    
        </li>


      </ul>

    </div>

  )
}

export default Books