<?php
/**
 * Choralia functions and definitions
 */

function choralia_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', array('search-form', 'comment-form', 'comment-list', 'gallery', 'caption'));
}
add_action('after_setup_theme', 'choralia_setup');

function choralia_scripts() {
    // Theme stylesheet
    wp_enqueue_style('choralia-style', get_stylesheet_uri());
    
    // Tailwind CSS via Play CDN (for development/ease of use)
    wp_enqueue_script('tailwind-cdn', 'https://cdn.tailwindcss.com?plugins=forms,container-queries', array(), null, false);
    
    // Google Fonts
    wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400&family=Inter:wght@300;400;500;600;700&display=swap', array(), null);
    
    // Lucide Icons
    wp_enqueue_script('lucide-icons', 'https://unpkg.com/lucide@latest', array(), null, true);
    
    // Custom Interactivity Script
    wp_enqueue_script('choralia-main', get_template_directory_uri() . '/js/main.js', array(), '1.0.0', true);
}
add_action('wp_enqueue_scripts', 'choralia_scripts');

// Tailwind Configuration via script tag in head
function choralia_tailwind_config() {
    ?>
    <script>
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        'brand-blue': '#4169E1',
                        'brand-dark': '#002366',
                        'brand-light': '#70D6FF',
                        'void': '#030814'
                    },
                    fontFamily: {
                        'sans': ['Inter', 'sans-serif'],
                        'serif': ['Montserrat', 'serif'],
                    }
                }
            }
        }
    </script>
    <style type="text/tailwindcss">
        @layer base {
            body {
                @apply bg-void text-white antialiased;
                background-image: 
                    radial-gradient(circle at 15% 50%, rgba(65, 105, 225, 0.08) 0%, transparent 50%),
                    radial-gradient(circle at 85% 30%, rgba(0, 35, 102, 0.1) 0%, transparent 50%),
                    radial-gradient(circle at 50% 100%, rgba(112, 214, 255, 0.05) 0%, transparent 60%);
                background-attachment: fixed;
            }
        }
        .glass-panel {
            background: rgba(3, 8, 20, 0.4);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .glow-blue {
            box-shadow: 0 0 20px rgba(65, 105, 225, 0.4);
        }
        .stars {
            background-image: 
                radial-gradient(1px 1px at 20px 30px, #eee, rgba(0,0,0,0)),
                radial-gradient(1px 1px at 40px 70px, #fff, rgba(0,0,0,0)),
                radial-gradient(1px 1px at 150px 160px, #ddd, rgba(0,0,0,0));
            background-repeat: repeat;
            background-size: 300px 300px;
            opacity: 0.2;
        }
    </style>
    <?php
}
add_action('wp_head', 'choralia_tailwind_config');
