#Flottakezelő feladat

## Rendszer
- Laravel 8+
- VueJs 2 (vue-router, vuex)
- Bootstrap 5
- MySQL

## Telepítési útmuató
- Projekt GIT clone
- composer install
- npm install
- .env beállítsa a .env.example fájl alapján
- php artisan key:generate
- Adatbázis és lokális szerver beállítások
- .env.testing fájl ellenőrzése
- php artisan migrate --seed
- php artisan passport:install

## Seedelt felhasználók
- Admin: teszt@admin.hu Jelszó: W6sPUyyVrp
- Munkatárs: teszt@munkatars.hu Jelszó: keTe9N3S6Y

## Rövid leírás
A feladatban a Backend feladatok ellátását egy Laravel 8+ végzi. A frontenden
pedig egy VueJs 2 javascript rendszer van, amely API-n keresztül kommunikál a backenddel.
Készültek automatizált tesztek a backend REST API tesztelésére, ezek a php artisan test paranccsal futtathatóak.
Továbbfejlesztési lehetőség mindenképpen a Jest tesztek megírása, valamint a Design egyedivé tétele. Jelenleg Bootstrap 5 látja el ezt a feladatot, CDN-ről beállítva.