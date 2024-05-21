<template>
  <div
    class="p-4 lg:p-10 bg-gray-100 min-h-screen flex items-center justify-center"
  >
    <div
      class="bg-white shadow-lg overflow-hidden rounded-xl w-full lg:w-3/4 lg:flex h-auto z-50"
    >
      <!-- Contenedor del contenido -->
      <div class="w-full lg:w-1/2 px-4 lg:px-8 py-6 lg:py-10 mb-6 lg:mb-0">
        <div class="text-center mb-4">
          <!-- Logo -->
          <img
            class="mx-auto w-20 md:w-24 h-auto cursor-pointer"
            src="/Logo RS[7].png"
            alt="Logo Running Sport"
          />

          <b class="text-lg lg:text-xl text-gray-800">Running Sport</b>
          <b class="block text-base lg:text-lg text-gray-800 mb-1"
            >Ingresa a tu Cuenta</b
          >
          <p class="text-sm lg:text-base text-gray-600">
            Suministra los datos requeridos para iniciar sesión.
          </p>
        </div>

        <!-- Formulario de inicio de sesión -->
        <div class="flex flex-col mb-4">
          <label for="email" class="font-bold text-sm lg:text-base">
            <i class="fa fa-user-circle-o"></i> Email
          </label>
          <input
            type="email"
            v-model="username"
            id="email"
            name="email"
            placeholder="example@gmail.com"
            class="p-3 rounded-lg border border-gray-300"
          />
        </div>

        <div class="flex flex-col mb-6">
          <label for="password" class="font-bold mb-1 text-sm lg:text-base">
            <i class="fa fa-user-keyboard"></i> Password
          </label>
          <input
            type="password"
            v-model="password"
            id="password"
            name="password"
            placeholder="Escribe tu contraseña"
            class="p-3 rounded-lg border border-gray-300"
          />
        </div>

        <!-- Remember Me -->
        <div class="flex items-center mb-6">
          <input
            type="checkbox"
            id="remember-me"
            class="form-checkbox rounded text-purple-600 cursor-pointer"
          />
          <label for="remember-me" class="ml-2.5 text-gray-700 px-1">
            Recuérdame
          </label>

          <!-- Forgot Password -->
          <a
            href="#"
            class="flex justify-end ml-auto text-fuchsia-700 hover:text-fuchsia-400 pl-8 lg:pl-14"
          >
            <b>¿Olvidaste la Contraseña?</b>
          </a>
        </div>

        <!-- Botones -->
        <button
          class="transition rounded-sm p-2 w-full bg-gradient-to-r from-slate-950 to-fuchsia-700 hover:to-fuchsia-400 hover:from-purple-800 text-white rounded-lg mb-2"
        >
          Ingresar
        </button>
        <button
          class="transition rounded-sm p-2 w-full bg-gradient-to-r from-slate-950 to-fuchsia-700 hover:to-fuchsia-400 hover:from-purple-800 text-white rounded-lg"
        >
          Registrarse
        </button>
      </div>

      <!-- Contenedor de la imagen a la derecha -->
      <div class="h-auto image-container lg:w-1/2 lg:block hidden">
        <!-- Imagen de fondo -->
      </div>
    </div>
  </div>
</template>

<style scoped>
.image-container {
  background-image: url(/run-nike-running-shoes-646cdd1a19c41.jpg);
  background-position: right;
  background-size: cover;
}
</style>
