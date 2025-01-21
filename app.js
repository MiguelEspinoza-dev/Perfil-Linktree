function addUserInfo() {
            const userInfo = document.getElementById('user-info');

            const name = document.createElement('h1');
            name.className = 'name';
            name.textContent = 'Miguel Espinoza Córdova';

            const bio = document.createElement('p');
            bio.className = 'bio';
            bio.textContent = 'Desarrollador Web & Mobile 👨‍💻 | Especialista en UI/UX Amante de la tecnología y apasionado por el desarrollo, siempre buscando nuevos desafíos y aprendiendo nuevas tecnologías y construyendo cada día el futuro línea por línea.';

            userInfo.appendChild(name);
            userInfo.appendChild(bio);
        }

        document.addEventListener('DOMContentLoaded', addUserInfo);