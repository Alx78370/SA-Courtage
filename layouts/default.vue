<template>
  <div class="relative">
    <header class="bg-slate-100 shadow-lg">
      <NavBar />
    </header>
    <main class="bg-slate-100 pt-20 overflow-hidden" id="mainContent">
      <slot />
      <div class="py-20">
        <AgendaHome />
      </div>
    </main>
    <footer>
      <AppFooter />
    </footer>
  </div>
</template>
