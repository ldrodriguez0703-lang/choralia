<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
    <div class="fixed inset-0 stars z-0 pointer-events-none"></div>
    
    <nav class="fixed top-0 w-full z-50 transition-all duration-500 border-b border-transparent py-6" id="navbar">
        <div class="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
            <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-full bg-[#4169E1] flex items-center justify-center glow-blue">
                    <i data-lucide="music" class="w-5 h-5 text-white"></i>
                </div>
                <span class="font-serif text-lg font-bold tracking-tight text-white"><?php bloginfo('name'); ?></span>
            </div>
            
            <div class="hidden lg:flex items-center gap-8">
                <?php
                // Typically you'd use wp_nav_menu here, but for this conversion:
                $nav_items = ['NOSOTROS', 'CONCIERTOS', 'REPERTORIO', 'AUDICIONES', 'GALERÍA', 'NEGOCIOS', 'CONTACTO'];
                foreach($nav_items as $item) {
                    echo '<a href="#' . strtolower(str_replace(' ', '-', $item)) . '" class="text-[10px] font-bold tracking-[0.2em] text-white/70 hover:text-white transition-colors">' . $item . '</a>';
                }
                ?>
            </div>

            <button class="hidden md:block px-6 py-2.5 bg-[#4169E1] text-white text-[10px] font-bold tracking-[0.2em] rounded-sm hover:bg-[#4169E1]/80 transition-all glow-blue">
                ÚNETE AL CORO
            </button>
        </div>
    </nav>
