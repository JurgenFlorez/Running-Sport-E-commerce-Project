<template>
  <div class="sm:mx-5 md:mx-10 lg:mx-20">
    <div
      class="sm:mx-5 bg-gray-50 text-black mx-auto max-w-screen p-2 flex items-center justify-between rounded shadow-md"
    >
      <!-- Sección izquierda: Logo -->
      <div class="flex items-center">
        <img
          src="/public/Logo RS[7].png"
          alt="logo"
          class="w-11 lg:w-13 mr-4 cursor-pointer"
        />
      </div>
      <div class="flex justify-between">
        <h2 class="cursor-pointer text-xl font-bold mr-2">Descuentos</h2>

        <h2 class="cursor-pointer text-xl font-bold ml-6 mr-6 relative">
          Filtrar
          <span class="absolute rigth top-0 w-1 h-1 mt-1 ml-3">&#9660;</span>
        </h2>
      </div>

      <!-- Sección derecha: Logo del carrito y botones -->
      <div class="flex items-center |">
        <img
          src="/public/carrito.png"
          alt="logo de carrito"
          class="w-8 lg: w-12 mx-4 cursor-pointer"
        />
        <button
          class="transition rounded-sm p-2 w-full bg-gradient-to-r from-slate-100 to-fuchsia-100 hover:to-fuchsia-400 hover:from-purple-200 text-black rounded-lg font-bold py-2 px-4 mr-2 shadow-md"
        >
          Registrar
        </button>
        <button
          class="transition rounded-sm p-2 w-full bg-gradient-to-r from-slate-950 to-fuchsia-700 hover:to-fuchsia-400 hover:from-purple-800 text-white rounded-lg font-bold py-2 px-4 mr-2 shadow-md"
        >
          Ingresar
        </button>
      </div>
    </div>

    <div class="relative sm:mx-5 md:mx-10 lg:mx-40 mt-4 flex justify-center">
      <img
        src="/public/principal.png"
        alt=""
        class="max-w-2xl sm:max-5 lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl w-full h-auto"
      />
    </div>
  </div>
</template>
