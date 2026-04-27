<?php get_header(); ?>

<main>
    <!-- Hero Section -->
    <section class="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div class="absolute inset-0 z-0 scale-105">
            <img src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=2000" class="w-full h-full object-cover opacity-30">
            <div class="absolute inset-0 bg-gradient-to-b from-void/20 via-void/40 to-void"></div>
        </div>
        <div class="relative z-10 text-center px-6 max-w-5xl">
            <div class="flex items-center justify-center gap-4 text-brand-light font-bold tracking-[0.3em] text-[10px] uppercase mb-8">
                <div class="h-[1px] w-12 bg-brand-blue/50"></div>
                TOP 200 MEJORES COROS DEL MUNDO
                <div class="h-[1px] w-12 bg-brand-blue/50"></div>
            </div>
            <h1 class="font-serif text-6xl md:text-8xl lg:text-[110px] font-black text-white leading-none tracking-tighter uppercase mb-6">
                ESTUDIO <br> CHORALIA
            </h1>
            <p class="font-serif text-xl md:text-2xl text-white/70 font-light max-w-2xl mx-auto leading-relaxed mb-12">
                Donde cada voz encuentra su lugar, <br>
                <span class="text-brand-blue font-bold">y el conjunto trasciende.</span>
            </p>
            <div class="flex flex-col sm:flex-row items-center justify-center gap-6">
                <button class="px-10 py-5 bg-brand-blue text-white text-[11px] font-bold tracking-[0.2em] rounded-sm hover:bg-brand-blue/80 transition-all glow-blue">
                    PRÓXIMOS CONCIERTOS
                </button>
                <button class="px-10 py-5 bg-transparent border border-white/30 text-white text-[11px] font-bold tracking-[0.2em] rounded-sm hover:bg-white/10 transition-all">
                    QUIENES SOMOS
                </button>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="nosotros" class="py-32 relative z-10 max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div class="flex flex-col gap-8">
                <div class="flex items-center gap-4">
                    <div class="h-[1px] w-8 bg-brand-blue/50"></div>
                    <span class="text-brand-blue text-[11px] font-bold tracking-[0.3em] uppercase">QUIÉNES SOMOS</span>
                </div>
                <h2 class="font-serif text-5xl md:text-6xl font-bold leading-tight">
                    Una comunidad <br>
                    <span class="text-brand-blue">unida por la música</span>
                </h2>
                <div class="flex flex-col gap-6 text-white/60 font-medium leading-relaxed">
                    <p>Estudio Choralia es un coro de voces mixtas fundado en Buenos Aires con la visión de elevar la música coral a una experiencia transformadora.</p>
                </div>
                <div class="grid grid-cols-3 gap-8 pt-12 border-t border-white/10 mt-4">
                    <div>
                        <div class="text-brand-blue font-serif text-4xl md:text-5xl font-black mb-2">30+</div>
                        <div class="text-white/40 text-[10px] font-bold tracking-widest uppercase">Voces Activas</div>
                    </div>
                    <div>
                        <div class="text-brand-blue font-serif text-4xl md:text-5xl font-black mb-2">8</div>
                        <div class="text-white/40 text-[10px] font-bold tracking-widest uppercase">Años</div>
                    </div>
                </div>
            </div>
            <div class="relative">
                <div class="aspect-square bg-brand-dark/20 rounded-sm border border-white/5 flex items-center justify-center glass-panel">
                    <span class="text-brand-blue font-serif text-5xl font-black tracking-tighter opacity-20 uppercase">Estudio Choralia</span>
                </div>
            </div>
        </div>
    </section>
</main>

<?php get_footer(); ?>
