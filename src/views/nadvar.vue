<template>
  <Disclosure
    as="nav"
    class="bg-gray-100 shadow-md sticky top-0"
    v-slot="{ open }"
  >
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton
            class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >-
            <span class="absolute -inset-0.5" />
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>

        <div
          class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div class="flex flex-shrink-0 items-center">
            <img
              class="h-8 w-auto"
              src="/public/Logo RS[7].png"
              alt="Running Sport"
            />
          </div>

          <div class="flex-grow ocultar">
            <input
              type="text"
              class="w-full px-4 py-1 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-500 mx-1"
              placeholder="Buscar..."
            />
          </div>
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <a
                v-for="item in navigation"
                :key="item.name"
                :href="item.href"
                :class="[
                  item.current
                    ? 'bg-black-900 text-white'
                    : 'text-gray-500 hover:bg-gray-200 hover:bg-opacity-50 hover:text-black',
                  'rounded-md px-3 py-2 text-sm font-medium',
                ]"
                :aria-current="item.current ? 'page' : undefined"
                >{{ item.name }}</a
              >
            </div>
          </div>
        </div>
        <div
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
          <!--logo carrito de compras -->
          <button
            type="button"
            class="relative rounded-full bg-fuchsia-100 p-1 text-fuchsia-400 hover:text-black focus:outline-none focus:ring-2 focus:ring-fuchsia-300 focus:ring-offset-2 focus:ring-offset-fuchsia-300"
          >
            <span class="absolute -inset-1.5" />
            <span class="sr-only">carrito de compras</span>
            <BellIcon class="h-6 w-6" aria-hidden="true" />
          </button>

          <!-- Profile dropdown -->
          <Menu as="div" class="relative ml-3">
            <div>
              <MenuButton
                class="relative flex rounded-full bg-fuchsia-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-fushia-800"
              >
                <span class="absolute -inset-1.5" />
                <span class="sr-only">Open user menu</span>
                <img
                  class="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </MenuButton>
            </div>
            <transition
              enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75"
              leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95"
            >
              <MenuItems
                class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[
                      active ? 'bg-fuchsia-100' : '',
                      'block px-4 py-2 text-sm text-fuchsia-700',
                    ]"
                    >Your Profile</a
                  >
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[
                      active ? 'bg-fuchsia-100' : '',
                      'block px-4 py-2 text-sm text-fuchsia-700',
                    ]"
                    >Settings</a
                  >
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[
                      active ? 'bg-fuchsia-100' : '',
                      'block px-4 py-2 text-sm text-fuchsia-700',
                    ]"
                    >Sign out</a
                  >
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[
                      active ? 'bg-fuchsia-100' : '',
                      'block px-4 py-2 text-sm text-fuchsia-700',
                    ]"
                    >Sign out</a
                  >
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <DisclosureButton
          v-for="item in navigation"
          :key="item.name"
          as="a"
          :href="item.href"
          :class="[
            item.current
              ? 'bg-gray-200 text-white'
              : 'text-black hover:bg-fuchsia-00 hover:text-white',
            'block rounded-md px-3 py-2 text-base font-medium',
          ]"
          :aria-current="item.current ? 'page' : undefined"
          >{{ item.name }}</DisclosureButton
        >
        <div class="max-w-2xl mx-auto">
          <div id="default-carousel" class="relative" data-carousel="static">
            <div
              class="overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96"
            >
              <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <span
                  class="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl"
                  >Primer Slide</span
                >
                <img
                  src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                  class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                  alt="..."
                />
              </div>

              <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img
                  src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                  class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                  alt="..."
                />
              </div>

              <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img
                  src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
                  class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                  alt="..."
                />
              </div>
            </div>

            <div
              class="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2"
            >
              <button
                type="button"
                class="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 1"
                data-carousel-slide-to="0"
              ></button>
              <button
                type="button"
                class="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 2"
                data-carousel-slide-to="1"
              ></button>
              <button
                type="button"
                class="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 3"
                data-carousel-slide-to="2"
              ></button>
            </div>

            <button
              type="button"
              class="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
              data-carousel-prev
            >
              <span
                class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 group-focus:ring-4 group-focus:ring-white group-focus:outline-none"
              >
                <svg
                  class="w-5 h-5 text-white sm:w-6 sm:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 19l-7-7 7-7"
                  ></path>
                </svg>
                <span class="hidden">Anterior</span>
              </span>
            </button>
            <button
              type="button"
              class="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
              data-carousel-next
            >
              <span
                class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 0 group-focus:ring-4 group-focus:ring-white group-focus:outline-none"
              >
                <svg
                  class="w-5 h-5 text-white sm:w-6 sm:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
                <span class="hidden">Siguiente</span>
              </span>
            </button>
          </div>

          <p class="mt-5">Este slide carousel se ha hecho con Tailwindcss</p>
        </div>
      </div>
    </DisclosurePanel>
  </Disclosure>

  <div class="m-4 ocultar-2 flex justify-center items-center">
    <img
      src="/public/principal.png"
      alt=""
      class="max-w-full h-auto rounded-md shadow-md"
    />
  </div>

  <!--contenedor de imagenes tenis-->
  -
  <div
    class="flex items-center justify-center min-h-screen bg-gray-50 shadown-lg"
  >
    <div class="container mx-auto">
      <div
        class="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1"
      ></div>
      <div class="" aria-hidden="true"></div>

      <div class="bg-white">
        <div
          class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
        >
          <h2 class="sr-only">Products</h2>

          <div class="flex justify-center">
            <div
              class="container mx-auto grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
            >
              <a
                v-for="product in products"
                :key="product.id"
                :href="product.href"
                class="group"
              >
                <div
                  class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7"
                >
                  <img
                    :src="product.imageSrc"
                    :alt="product.imageAlt"
                    class="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 class="mt-4 text-sm text-gray-700">{{ product.name }}</h3>
                <p class="mt-1 text-lg font-medium text-gray-900">
                  {{ product.price }}
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <footer
        class="bg-gradient-to-r from-slate-950 to-fuchsia-500 rounded-lg shadow m-4"
      >
        <div
          class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between"
        >
          <span class="text-sm text-white sm:text-center dark:text-white"
            >© 2023
            <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a
            >. All Rights Reserved.</span
          >
          <ul
            class="flex flex-wrap items-center mt-3 text-sm font-medium text-white- dark:text-white sm:mt-0"
          >
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">About</a>
            </li>
            <li>
              <a href="#" class="hover:underline me-4 md:me-6"
                >Privacy Policy</a
              >
            </li>
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
            </li>
            <li>
              <a href="#" class="hover:underline">Contact</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup>
const products = [
  {
    id: 1,
    name: "Adidas 1",
    href: "#",
    price: "$48",
    imageSrc:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ad2f4fc4c9e64c7cad0aae3000cb8676_9366/Tenis_adidas_Grand_Court_TD_Lifestyle_Court_Casual_Blanco_GW9261_01_standard.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Nomad Tumbler",
    href: "#",
    price: "$35",
    imageSrc:
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/a3b3c26ba11f450a9f91ae9b00f43cb9_9366/Tenis_Galaxy_6_Negro_GW3847_01_standard.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Focus Paper Refill",
    href: "#",
    price: "$89",
    imageSrc:
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/4e0564c27f754915b743afa200c7db08_9366/Tenis_Samba_adidas_Originals_Blanco_ID2047_01_standard.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
    imageSrc:
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/a9e2a25ce8004d7193115518409f6269_9366/Tenis_Park_Street_Negro_IG9846_01_standard.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 4,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
    imageSrc:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f58c0d55ad854cf5aa9dad1f01259213_9366/Tenis_EQ19_Run_Blanco_H02036_01_standard.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 4,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
    imageSrc:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5d84e280774d4c898db375f3e22b28f5_9366/Tenis_Response_Runner_Blanco_IG0741_01_standard.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 4,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
    imageSrc:
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/01db45febe5a4ef89d77f05851174f48_9366/Tenis_adidas_Court_Plataforma_Blanco_ID1969_01_standard.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 4,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
    imageSrc:
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/9c822e4943964c51baad102818fef8ab_9366/Tenis_Response_Azul_IG0341_01_standard.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 4,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
    imageSrc:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2fcb12007907475aa33cf7aa313d8b4e_9366/Tenis_Response_Super_3.0_Blanco_IG0338_01_standard.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  // More products...
];
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";
import {
  Bars3Icon,
  BellIcon,
  XMarkIcon,
  UserIcon,
  ShoppingBagIcon,
} from "@heroicons/vue/24/outline";

const navigation = [
  { name: "Mujeres", href: "#", current: false },
  { name: "Hombres", href: "#", current: false },
  { name: "Niños", href: "#", current: false },
];
</script>

<style lang="scss" scoped>
@media screen and (max-width: 750px) {
  .ocultar {
    display: none;
  }
  .ocultar-2 {
    display: none;
  }
}
</style>
