<template>
 <section class="flex items-center justify-center h-full">
  <div class=" flex flex-col p-4 bg-card w-96 rounded-xl gap-6 transition ease-linear delay-75 hover:shadow-cardsh hover:shadow-primary">
    <div class="bg-[url('/img/ia.jpg')] bg-cover rounded-xl w-full h-52 bg-no-repeat bg-center"></div>
    <div class="flex flex-col gap-10">
       <span class=" text-text text-2xl font-semibold">Image 1</span>
     <div class="flex items-center justify-between">
       <button class=" border-solid border-2 rounded-full p-1 px-8 text-primary text-xl font-semibold border-primary transition delay-75 hover:text-text hover:bg-primary hover:shadow-md hover:shadow-primary">
        Save
       </button>
       <div class="flex items-center gap-6">
        <div class="relative text-text group flex justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-maximize-2 transition delay-75 cursor-pointer group-hover:text-primary"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" x2="14" y1="3" y2="10"/><line x1="3" x2="10" y1="21" y2="14"/></svg>
          <span class="text-text absolute bg-card p-0.5  px-3 border-solid border-primary border-2 rounded-md pointer-events-none opacity-0 transition delay-75 top-10 group-hover:opacity-100">Resize</span>
        </div>
        <div class="relative text-text group flex justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-repeat-2 transition delay-75 cursor-pointer group-hover:text-primary"><path d="m2 9 3-3 3 3"/><path d="M13 18H7a2 2 0 0 1-2-2V6"/><path d="m22 15-3 3-3-3"/><path d="M11 6h6a2 2 0 0 1 2 2v10"/></svg>
          <span  class="text-text absolute bg-card p-0.5  px-3 border-solid border-primary border-2 rounded-md pointer-events-none opacity-0 transition delay-75 top-10 group-hover:opacity-100">Share</span>
        </div>
        <div class="relative text-text group flex justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-flag transition delay-75 cursor-pointer group-hover:text-primary"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" x2="4" y1="22" y2="15"/></svg>
          <span  class="text-text absolute bg-card p-0.5  px-3 border-solid border-primary border-2 rounded-md pointer-events-none opacity-0 transition delay-75 top-10 group-hover:opacity-100">Report</span>
        </div>
       </div>
     </div>
   </div>
  </div>
 </section>
</template>
