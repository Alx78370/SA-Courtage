<template>
  <nav class="navbar bg-base-100">
    <div class="navbar-start">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
        >
          <li>
            <a>Crédit immobilier</a>
            <ul class="p-2">
              <li>
                <NuxtLink to="/credit-immobilier/pret-residence-principale">
                  Résidence principale
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/credit-immobilier/pret-residence-secondaire">
                  Résidence secondaire
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/credit-immobilier/pret-investissement-locatif">
                  Investissement locatif
                </NuxtLink>
              </li>
            </ul>
          </li>
          <li>
            <NuxtLink to="/assurance-emprunteur">
              Assurance emprunteur
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/regroupement-credits">
              Regroupement de crédit
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/rachat-credits">
              Rachat de crédits
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contact">
              Contact
            </NuxtLink>
          </li>
        </ul>
      </div>
      <NuxtLink class="btn btn-ghost">
        <img src="../assets/logo/Logo capture proche.jpg" alt="logo" class="w-12">
      </NuxtLink>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li>
          <a>Crédit immobilier</a>
          <ul class="p-2">
            <li>
              <NuxtLink to="/credit-immobilier/pret-residence-principale">
                Résidence principale
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/credit-immobilier/pret-residence-secondaire">
                Résidence secondaire
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/credit-immobilier/pret-investissement-locatif">
                Investissement locatif
              </NuxtLink>
            </li>
          </ul>
        </li>
        <li>
          <NuxtLink to="/assurance-emprunteur">
            Assurance emprunteur
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/regroupement-credits">
            Regroupement de crédit
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/rachat-credits">
            Rachat de crédits
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contact">
            Contact
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>
