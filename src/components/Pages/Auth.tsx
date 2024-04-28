function Auth() {
  return (
    <div
      className="min-h-screen bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1486520299386-6d106b22014b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')",
      }}
    >
      <div className="flex">
        <div className="bg-white min-h-screen w-1/2 flex justify-center items-center">
          <div className="w-96">
            <form>
              <div>
                <span className="text-md text-gray-900">Bienvenido de nuevo 👋</span>
                <h1 className="text-2xl font-bold">Acceda a su cuenta</h1>
              </div>
              <div className="my-3">
                <label className="block text-md mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none"
                  type="email"
                  name="email"
                  placeholder="email"
                />
              </div>
              <div className="mt-5">
                <label className="block text-md mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none"
                  type="password"
                  name="password"
                  placeholder="password"
                />
              </div>
              <div>
                <button className="mt-4 mb-3 w-full bg-blue-600 hover:bg-blue-400 text-white py-2 rounded-md transition duration-100">
                  Entrar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
