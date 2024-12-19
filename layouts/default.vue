<template>
  <div>
    <header class="bg-slate-100 shadow-lg">
      <NavBar />
    </header>
    <main class="bg-slate-100 pt-20">
      <slot />
    </main>
    <footer>
      <AppFooter />
    </footer>
  </div>
</template>
