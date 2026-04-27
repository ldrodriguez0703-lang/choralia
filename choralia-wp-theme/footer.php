    <footer id="contacto" class="relative z-10 pt-32 pb-16 border-t border-white/10 bg-[#030814]/80 backdrop-blur-sm">
        <div class="max-w-7xl mx-auto px-6">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
                <div class="lg:col-span-4 flex flex-col gap-8">
                    <h3 class="font-serif text-3xl font-bold">SÉ PARTE</h3>
                    <p class="text-white/50 leading-relaxed font-light">
                        Únete a la resonancia. Buscamos voces que entiendan la profunda dimensión de la precisión absoluta y la pasión compartida.
                    </p>
                    <a href="#" class="flex items-center gap-3 text-[#70D6FF] text-[11px] font-bold tracking-widest uppercase group">
                        AUDITION DETAILS
                        <i data-lucide="arrow-up-right" class="w-4 h-4"></i>
                    </a>
                </div>

                <div class="lg:col-span-4 flex flex-col gap-8">
                    <h3 class="font-serif text-3xl font-bold uppercase">Categorías</h3>
                    <ul class="flex flex-col gap-5">
                        <li class="flex items-center gap-4 text-white/50"><i data-lucide="building-2" class="w-5 h-5 text-[#4169E1]"></i><span>Eventos Corporativos</span></li>
                        <li class="flex items-center gap-4 text-white/50"><i data-lucide="mic-2" class="w-5 h-5 text-[#4169E1]"></i><span>Grabación de Soundtracks</span></li>
                        <li class="flex items-center gap-4 text-white/50"><i data-lucide="graduation-cap" class="w-5 h-5 text-[#4169E1]"></i><span>Masterclasses</span></li>
                    </ul>
                </div>

                <div class="lg:col-span-4 flex flex-col gap-8">
                    <h3 class="font-serif text-3xl font-bold">CONTACTO</h3>
                    <form class="flex flex-col gap-6">
                        <input type="text" placeholder="Nombre" class="bg-transparent border-0 border-b border-white/20 pb-2 focus:ring-0 focus:border-[#4169E1] transition-all outline-none placeholder:text-white/20 text-sm">
                        <input type="email" placeholder="Email" class="bg-transparent border-0 border-b border-white/20 pb-2 focus:ring-0 focus:border-[#4169E1] transition-all outline-none placeholder:text-white/20 text-sm">
                        <button type="button" class="w-full py-4 bg-white/5 border border-white/10 rounded-sm hover:bg-[#4169E1] transition-all flex items-center justify-center gap-3">
                            <span class="text-[11px] font-bold tracking-[0.2em] uppercase">ENVIAR MENSAJE</span>
                            <i data-lucide="send" class="w-4 h-4"></i>
                        </button>
                    </form>
                </div>
            </div>

            <div class="flex flex-col items-center gap-10">
                <div class="flex items-center gap-4">
                    <div class="w-10 h-10 rounded-full bg-[#4169E1] flex items-center justify-center glow-blue">
                        <i data-lucide="music" class="w-6 h-6 text-white"></i>
                    </div>
                    <span class="font-serif text-2xl font-black tracking-tighter uppercase"><?php bloginfo('name'); ?></span>
                </div>
                <div class="text-center text-[#4169E1]/60 text-[10px] font-bold tracking-[0.3em] uppercase">
                    © <?php echo date('Y'); ?> <?php bloginfo('name'); ?>. TODOS LOS DERECHOS RESERVADOS.
                </div>
            </div>
        </div>
    </footer>
    <?php wp_footer(); ?>
    <script>
        lucide.createIcons();
        window.addEventListener('scroll', function() {
            var navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('bg-[#030814]/80', 'backdrop-blur-md', 'border-white/10');
                navbar.classList.remove('border-transparent', 'py-6');
                navbar.classList.add('py-4');
            } else {
                navbar.classList.remove('bg-[#030814]/80', 'backdrop-blur-md', 'border-white/10', 'py-4');
                navbar.classList.add('border-transparent', 'py-6');
            }
        });
    </script>
</body>
</html>
