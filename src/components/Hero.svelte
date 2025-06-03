<script lang="ts">
  import { subscribe } from '@strifeapp/strife';
  import type { Image } from '@strifeapp/types';
  import { onMount } from 'svelte';

  export let eyebrow: string | undefined;
  export let heading: string | undefined;
  export let description: string | undefined;
  export let image: Image | undefined;
  onMount(() => {
    subscribe((data:any) => {
      ({eyebrow, heading, description, image} = data);
    });
  });
</script>

<section id="home" class="pt-16 bg-gradient-to-br from-emerald-50 via-blue-50 to-white relative overflow-hidden">
  <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-100 via-transparent to-blue-100 opacity-70"></div>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
    <div class="grid lg:grid-cols-2 gap-12 items-center py-20">
      <div class="space-y-8">
        <div class="space-y-4">
          <div class="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
            {eyebrow}
          </div>
          <h1 class="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            {heading || "Förnybar energi för ett"}
            <span class="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent block">
              hållbart Kalmar
            </span>
          </h1>
          <p class="text-xl text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>

        <div class="flex flex-col sm:flex-row gap-4">
          <button class="bg-gradient-to-r from-emerald-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center">
            Kom igång idag
            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
          <button class="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-emerald-500 hover:text-emerald-600 transition-all duration-300">
            Läs mer om oss
          </button>
        </div>

        <div class="grid grid-cols-3 gap-6 pt-8">
          <div class="text-center">
            <div class="text-3xl font-bold text-emerald-600">15+</div>
            <div class="text-gray-600 text-sm">År av erfarenhet</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-blue-600">50k+</div>
            <div class="text-gray-600 text-sm">Nöjda kunder</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-emerald-600">100%</div>
            <div class="text-gray-600 text-sm">Förnybar energi</div>
          </div>
        </div>
      </div>

      <div class="relative">
        <div class="relative z-10">
          <img
            src={image?.source.url || 'data:,'}
            alt={image?.alt}
            class="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500 w-full h-auto"
            height={image?.source.height || 534}
            width={image?.source.width || 800}
          />
        </div>
        <div class="absolute -top-8 -right-8 w-72 h-72 bg-gradient-to-br from-emerald-200 to-blue-200 rounded-full opacity-30 blur-3xl"></div>
        <div class="absolute -bottom-8 -left-8 w-64 h-64 bg-gradient-to-br from-blue-200 to-emerald-200 rounded-full opacity-30 blur-3xl"></div>
      </div>
    </div>
  </div>
</section>