const scenes = [
  {
    name: "Narrador",
    text: "Nevarro no siempre fue un pueblo cubierto de nieve. Y esa noche, mientras el fuego ardía, Doña Aura decidió contarlo.",
    background: "assets/backgrounds/casa_chimenea.png",
    character: "",
    options: [{ text: "Continuar", next: 1 }],
  },
  {
    name: "Doña Aura",
    text: "¿Ven estas cartas, niños? No son simples papelitos... Son recuerdos que la magia aún guarda.",
    background: "assets/backgrounds/casa_chimenea.png",
    character: "assets/characters/dona_aura_letter1.png",
    options: [{ text: "Continuar", next: 2 }],
  },
  {
    name: "Lia",
    text: "¿Nos vas a contar otra historia del pueblo?",
    background: "assets/backgrounds/casa_chimenea.png",
    character: "assets/characters/lia_happy.png",
    options: [{ text: "Continuar", next: 3 }],
  },
  {
    name: "Doña Aura",
    text: "No, esta vez no será un cuento. Es la verdad.",
    background: "assets/backgrounds/casa_chimenea.png",
    character: "assets/characters/dona_aura_angry.png",
    options: [{ text: "Continuar", next: 4 }],
  },
  {
    name: "Doña Aura",
    text: "Ustedes no recuerdan a sus padres... pero fueron magos valientes. Murieron creyendo que Nevarro podía ser salvado.",
    background: "assets/backgrounds/casa_chimenea.png",
    character: "assets/characters/dona_aura_angry.png",
    options: [{ text: "Continuar", next: 5 }],
  },
  {
    name: "Narrador",
    text: "Nilo aprieta el puño. Su respiración deja una bruma fría.",
    background: "assets/backgrounds/casa_chimenea.png",
    character: "",
    options: [{ text: "Continuar", next: 6 }],
  },
  {
    name: "Nilo",
    text: "¿Por eso la nieve nunca se va?",
    background: "assets/backgrounds/casa_chimenea.png",
    character: "assets/characters/nilo_angry.png",
    options: [{ text: "Continuar", next: 7 }],
  },
  {
    name: "Doña Aura",
    text: "Porque la Piedra del Invierno fue rota. Y con ella, el equilibrio que protegía este lugar.",
    background: "assets/backgrounds/casa_chimenea.png",
    character: "assets/characters/dona_aura_angry.png",
    options: [{ text: "Continuar", next: 8 }],
  },
  {
    name: "Narrador",
    text: "Lia mira por la ventana. El viento parece moverse al ritmo de su respiración.",
    background: "assets/backgrounds/casa_chimenea.png",
    character: "",
    options: [{ text: "Continuar", next: 9 }],
  },
  {
    name: "Lia",
    text: "¿Y nosotros qué podemos hacer?",
    background: "assets/backgrounds/casa_chimenea.png",
    character: "assets/characters/lia_angry.png",
    options: [{ text: "Continuar", next: 10 }],
  },
  {
    name: "Doña Aura",
    text: "Tú, Lia, hablas con el viento. Y tú, Nilo... ves más de lo que crees.",
    background: "assets/backgrounds/casa_chimenea.png",
    character: "assets/characters/dona_aura_happy.png",
    options: [{ text: "Continuar", next: 11 }],
  },
  {
    name: "Doña Aura",
    text: "El pueblo duerme bajo la nieve. Pero no está muerto.",
    background: "assets/backgrounds/casa_chimenea.png",
    character: "assets/characters/dona_aura_happy.png",
    options: [{ text: "Continuar", next: 12 }],
  },
  {
    name: "Narrador",
    text: "Nilo y Lia se miran. Una carta flota desde las manos de Aura y se posa sobre la mesa, brillando.",
    background: "assets/backgrounds/casa_chimenea.png",
    character: "assets/characters/dona_aura_letter2.png",
    options: [{ text: "Continuar", next: 13 }],
  },
  {
    name: "Doña Aura",
    text: "Tal vez... ha estado esperando por ustedes.",
    background: "assets/backgrounds/casa_chimenea.png",
    character: "assets/characters/dona_aura_angry.png",
    options: [{ text: "Continuar", next: 14 }],
  },
  {
    name: "Narrador",
    text: "Hace siglos, un grupo de magos sabios huyó de una guerra arcana. Buscaron refugio entre las montañas del norte.",
    background: "assets/backgrounds/montanas_magicas.png",
    character: "",
    options: [{ text: "Continuar", next: 15 }],
  },
  {
    name: "Narrador",
    text: "Allí fundaron Nevarro, un lugar en armonía con la magia elemental del hielo y el viento.",
    background: "assets/backgrounds/nevarro_antiguo.png",
    character: "",
    options: [{ text: "Continuar", next: 16 }],
  },
  {
    name: "Narrador",
    text: "Los fundadores erigieron la Piedra del Invierno, una reliquia mágica que regulaba el clima y protegía el valle.",
    background: "assets/backgrounds/piedra_invierno.png",
    character: "",
    options: [{ text: "Continuar", next: 17 }],
  },
  {
    name: "Narrador",
    text: "Durante siglos, Nevarro fue un lugar de paz, estudio y perfección mágica.",
    background: "assets/backgrounds/nevarro_antiguo.png",
    character: "",
    options: [{ text: "Continuar", next: 18 }],
  },
  {
    name: "Narrador",
    text: "Los sabios formaron órdenes mágicas: Custodios del Invierno, Tejedores del Viento y Guardianes del Eco.",
    background: "assets/backgrounds/ordenes_magicas.png",
    character: "",
    options: [{ text: "Continuar", next: 19 }],
  },
  {
    name: "Narrador",
    text: "Pero el mundo cambió. Una guerra por el control de la energía elemental envolvió a todos.",
    background: "assets/backgrounds/guerra_magica.png",
    character: "",
    options: [{ text: "Continuar", next: 20 }],
  },
  {
    name: "Narrador",
    text: "Nevarro, a pesar de ser neutral, fue codiciado por clanes corruptos que querían la Piedra del Invierno.",
    background: "assets/backgrounds/invasores.png",
    character: "",
    options: [{ text: "Continuar", next: 21 }],
  },
  {
    name: "Narrador",
    text: "En una última batalla, la Piedra fue fracturada. Aunque los invasores fueron repelidos, el equilibrio se rompió.",
    background: "assets/backgrounds/piedra_rota.png",
    character: "",
    options: [{ text: "Continuar", next: 22 }],
  },
  {
    name: "Narrador",
    text: "El invierno se volvió eterno. Las torres colapsaron, los campos se congelaron. El pueblo quedó enterrado bajo la nieve.",
    background: "assets/backgrounds/nevarro_actual.png",
    character: "",
    options: [{ text: "Continuar", next: 23 }],
  },
  {
    name: "Narrador",
    text: "La mayoría huyó. Solo los más fieles se quedaron, resistiendo en silencio. El conocimiento sobrevivió en sus voces.",
    background: "assets/backgrounds/casas_deterioradas.png",
    character: "",
    options: [{ text: "Continuar", next: 24 }],
  },
  {
    name: "Narrador",
    text: "Hoy, Nevarro es un pueblo casi fantasma. Pero la magia... aún duerme bajo el hielo.",
    background: "assets/backgrounds/nevarro_actual.png",
    character: "",
    options: [{ text: "Continuar", next: 25 }],
  },
  {
    name: "Narrador",
    text: "En algunas casas, como la de la Doña Elsa, persisten secretos antiguos, reliquias encantadas y espíritus congelados.",
    background: "assets/backgrounds/casa_dona_elsa.png",
    character: "",
    options: [{ text: "Continuar", next: 26 }],
  },
  {
    name: "Narrador",
    text: "Hay ruinas que susurran hechizos viejos, un archivo perdido bajo la nieve y un mapa tallado en hielo.",
    background: "assets/backgrounds/ruinas_piedra.png",
    character: "",
    options: [{ text: "Continuar", next: 27 }],
  },
  {
    name: "Narrador",
    text: "El hielo... guarda fragmentos de recuerdos mágicos. Y Nevarro... aún espera despertar.",
    background: "assets/backgrounds/restos_piedra.png",
    character: "",
    options: [{ text: "Continuar", next: 28}],
  },
];

        let current = 0;
        let isTransitioning = false;

        // Crear efecto de nieve
        function createSnowflakes() {
            const snowflakeSymbols = ['❄', '❅', '❆'];
            for (let i = 0; i < 20; i++) {
                setTimeout(() => {
                    const snowflake = document.createElement('div');
                    snowflake.className = 'snowflake';
                    snowflake.innerHTML = snowflakeSymbols[Math.floor(Math.random() * snowflakeSymbols.length)];
                    snowflake.style.left = Math.random() * 100 + '%';
                    snowflake.style.fontSize = (Math.random() * 0.8 + 0.5) + 'rem';
                    snowflake.style.animationDuration = (Math.random() * 3 + 5) + 's';
                    snowflake.style.animationDelay = Math.random() * 2 + 's';
                    document.getElementById('game').appendChild(snowflake);
                    
                    setTimeout(() => {
                        if (snowflake.parentNode) {
                            snowflake.parentNode.removeChild(snowflake);
                        }
                    }, 8000);
                }, i * 300);
            }
        }

        function typeText(element, text, speed = 30) {
            return new Promise((resolve) => {
                element.innerHTML = '';
                let i = 0;
                const timer = setInterval(() => {
                    if (i < text.length) {
                        element.innerHTML += text.charAt(i);
                        i++;
                    } else {
                        clearInterval(timer);
                        resolve();
                    }
                }, speed);
            });
        }

        // Función para detectar el tipo de imagen y aplicar la clase apropiada
        function detectImageType(img, callback) {
            const tempImg = new Image();
            tempImg.onload = function() {
                const width = this.naturalWidth;
                const height = this.naturalHeight;
                const ratio = width / height;
                
                let className = '';
                
                // Para backgrounds
                if (ratio > 2.5) {
                    className = 'wide-bg';
                } else if (ratio < 1.2) {
                    className = 'small-bg';
                }
                
                callback(className);
            };
            tempImg.src = img;
        }

        function detectCharacterType(img, callback) {
            const tempImg = new Image();
            tempImg.onload = function() {
                const width = this.naturalWidth;
                const height = this.naturalHeight;
                const ratio = width / height;
                
                let className = '';
                
                // Para personajes
                if (ratio < 0.4) {
                    className = 'tall-char';
                } else if (ratio > 0.9) {
                    className = 'wide-char';
                } else if (width < 300 || height < 400) {
                    className = 'small-char';
                }
                
                callback(className);
            };
            tempImg.src = img;
        }

        async function loadScene(index) {
            if (isTransitioning || index >= scenes.length) return;
            
            isTransitioning = true;
            const scene = scenes[index];
            
            // Update background with smart sizing
            const background = document.getElementById("background");
            background.className = ''; // Reset classes
            
            if (scene.background) {
                detectImageType(scene.background, (bgClass) => {
                    background.className = bgClass;
                    background.style.backgroundImage = `url(${scene.background})`;
                });
            }
            
            // Update character with smart sizing
            const character = document.getElementById("character");
            character.className = ''; // Reset classes
            
            if (scene.character) {
                character.style.opacity = '0';
                detectCharacterType(scene.character, (charClass) => {
                    setTimeout(() => {
                        character.className = charClass;
                        character.style.backgroundImage = `url(${scene.character})`;
                        character.style.opacity = '1';
                    }, 200);
                });
            } else {
                character.style.backgroundImage = '';
                character.style.opacity = '0';
            }
            
            // Update name and text immediately
            document.getElementById("name").innerHTML = scene.name;
            document.getElementById("text").innerHTML = scene.text;
            
            // Update options
            const optionsBox = document.getElementById("options");
            optionsBox.innerHTML = "";
            scene.options.forEach(option => {
                const btn = document.createElement("button");
                btn.innerHTML = option.text;
                btn.onclick = () => loadScene(option.next);
                optionsBox.appendChild(btn);
            });
            
            isTransitioning = false;
            current = index;
        }

        // Initialize game
        window.onload = () => {
            // Hide loading screen
            setTimeout(() => {
                const loading = document.getElementById('loading');
                loading.style.opacity = '0';
                setTimeout(() => {
                    loading.style.display = 'none';
                    loadScene(0);
                    createSnowflakes();
                    
                    // Continue creating snowflakes periodically
                    setInterval(createSnowflakes, 8000);
                }, 800);
            }, 1500);
        };

        // Add keyboard support
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                const buttons = document.querySelectorAll('#options button');
                if (buttons.length > 0 && !isTransitioning) {
                    buttons[0].click();
                }
            }
        });