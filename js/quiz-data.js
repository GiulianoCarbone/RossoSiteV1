/* ============================================================
   ACADEMIA ROSSO — Banco de 56 Módulos (1 por producto)
   Fuente: Manual de Productos Rosso Materiales 2025
   Incluye Nivel 4: Manejo de Objeciones y Casos Prácticos
   Opciones rebalanceadas para no delatar la correcta por su largo.
   ============================================================ */

const MODULOS = [
  {
    "id": "cemento",
    "producto": "Cemento Portland",
    "rubro": "Obra Gruesa",
    "icon": "fa-solid fa-cubes-stacked",
    "color": "#272e68",
    "descripcion": "Aglomerante principal de la construcción. Marca Holcim, en bolsas de 25 kg.",
    "niveles": [
      {
        "nivel": 1,
        "nombre": "Básico",
        "objetivo": "Tipos y usos del cemento",
        "aprobar": 70,
        "preguntas": [
          {
            "q": "¿Para qué tipo de obras se usa el Cemento Portland Normal (CPN)?",
            "opciones": [
              "Hormigón estructural: columnas, vigas y losas",
              "Pegado de cerámicos, porcelanatos y guardacantos",
              "Revoques finos y terminaciones de paredes",
              "Carpetas niveladoras de bajo espesor"
            ],
            "correcta": 0,
            "explica": "El CPN es el cemento para uso estructural general: hormigones de columnas, vigas, losas y cimientos.",
            "tip": "Si el cliente arranca una casa desde cero, el CPN es la recomendación base. Preguntale siempre qué etapa hace (columnas, contrapiso, revoque) para sumar cal, hierro y malla en la misma venta."
          },
          {
            "q": "¿Qué marca de cemento trabaja Rosso?",
            "opciones": [
              "Holcim",
              "Loma Negra",
              "Avellaneda",
              "Weber"
            ],
            "correcta": 0,
            "explica": "Trabajamos cemento marca Holcim, en bolsas de 25 kg."
          },
          {
            "q": "¿Qué se obtiene al mezclar cemento con arena, piedra y agua?",
            "opciones": [
              "Hormigón estructural",
              "Mortero de revoque fino",
              "Pasta niveladora",
              "Mezcla adhesiva"
            ],
            "correcta": 0,
            "explica": "Cemento + arena + piedra + agua = hormigón estructural."
          },
          {
            "q": "¿Cuál es la diferencia principal entre CPN y CPC?",
            "opciones": [
              "El CPC lleva adiciones para ambientes agresivos",
              "El CPN tiene mayor resistencia que cualquier CPC",
              "El CPC no sirve para hormigones armados",
              "El CPN solo se usa en revoques finos"
            ],
            "correcta": 0,
            "explica": "El CPC (Compuesto) tiene adiciones como puzolanas o escoria que mejoran su resistencia a humedad y sulfatos.",
            "tip": "Zona húmeda, cimientos o contacto con agua/napas → ofrecé CPC. Es el argumento de durabilidad que justifica la diferencia de precio frente al CPN."
          },
          {
            "q": "¿En qué presentación se vende el cemento Holcim?",
            "opciones": [
              "Bolsas de 25 kg",
              "Baldes de 20 litros",
              "Cajas de 10 kg",
              "Bolsas de 5 kg"
            ],
            "correcta": 0,
            "explica": "El cemento Holcim se vende en bolsas de 25 kg."
          }
        ]
      },
      {
        "nivel": 2,
        "nombre": "Intermedio",
        "objetivo": "Variantes y especificaciones técnicas",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "¿Qué característica tiene el cemento Holcim Rápido (CPF)?",
            "opciones": [
              "Fragua más rápido y se desencofra antes",
              "Solo se usa en pisos industriales pesados",
              "Tarda más en fraguar que el CPN",
              "No se puede combinar con arena"
            ],
            "correcta": 0,
            "explica": "El CPF con filler calcáreo mejora la plasticidad y algunos fraguan más rápido, permitiendo desencofrar antes."
          },
          {
            "q": "¿Cuántas bolsas de cemento de 25 kg entran cómodas en una camioneta pickup?",
            "opciones": [
              "Unas 32 bolsas (800 kg)",
              "Unas 60 bolsas (1500 kg)",
              "Unas 16 bolsas (400 kg)",
              "Unas 8 bolsas (200 kg)"
            ],
            "correcta": 0,
            "explica": "El límite es el peso: una pickup carga cómoda unos 800 kg, o sea unas 32 bolsas de 25 kg."
          },
          {
            "q": "¿Qué productos complementarios se venden con el cemento?",
            "opciones": [
              "Cal, hierros, mallas y ladrillos",
              "Cerámicos, pastinas y pegamentos",
              "Pinturas, rodillos y pinceles",
              "Grifería, inodoros y bachas"
            ],
            "correcta": 0,
            "explica": "La venta complementaria incluye cal, maestro, mallas, hierros, ladrillos y bloques."
          },
          {
            "q": "¿Para qué tipo de obras se recomienda el CPC Holcim Fuerte ECOPlanet?",
            "opciones": [
              "Ambientes agresivos: humedad, sulfatos y napas",
              "Reparaciones menores sin esfuerzo estructural",
              "Pegado de cerámicos y porcelanatos en pisos",
              "Revoques finos y terminaciones de interior"
            ],
            "correcta": 0,
            "explica": "El CPC mejora la resistencia a ambientes agresivos y reduce el calor de fraguado, ideal para obras grandes."
          },
          {
            "q": "¿Cuántas bolsas de 25 kg entran en un auto común?",
            "opciones": [
              "Unas 8 bolsas (200 kg)",
              "Unas 20 bolsas (500 kg)",
              "Unas 32 bolsas (800 kg)",
              "Unas 4 bolsas (100 kg)"
            ],
            "correcta": 0,
            "explica": "En un auto común se cargan con cuidado unos 200 kg, es decir unas 8 bolsas de 25 kg."
          }
        ]
      },
      {
        "nivel": 3,
        "nombre": "Experto",
        "objetivo": "Asesoramiento y venta consultiva",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "Un cliente construye columnas y vigas. ¿Qué cemento le recomendás?",
            "opciones": [
              "Portland Normal (CPN), para estructura",
              "Cemento Maestro, que reemplaza a la cal",
              "Cal hidratada con un poco de arena",
              "Cemento de albañilería ECOPlanet"
            ],
            "correcta": 0,
            "explica": "Para estructuras (columnas, vigas, losas) se usa CPN, el cemento para hormigón estructural."
          },
          {
            "q": "Un cliente dice que quiere pegar ladrillos y hacer revoques. ¿Qué le ofrecés?",
            "opciones": [
              "Maestro ECOPlanet (no necesita cal)",
              "Pegamento C1 para cerámicos y porcelanato",
              "CPN Portland para hormigón estructural",
              "Cal hidratada sola, sin cemento"
            ],
            "correcta": 0,
            "explica": "Para albañilería general (pegar ladrillos, revoques, carpetas) el Maestro es la solución: solo agrega arena y agua."
          },
          {
            "q": "¿Por qué el argumento 'usar el cemento correcto' es clave para la venta?",
            "opciones": [
              "Asegura un trabajo durable en cada etapa",
              "Porque cualquier cemento da el mismo resultado",
              "Porque acelera la entrega del pedido",
              "Porque conviene vender el más caro"
            ],
            "correcta": 0,
            "explica": "El Portland para estructuras y el Maestro para albañilería: usar el correcto garantiza calidad y durabilidad."
          },
          {
            "q": "¿Cuál es el tip de venta sobre rendimiento del Maestro vs mezcla tradicional?",
            "opciones": [
              "Rinde más por bolsa que la mezcla con cal",
              "Necesita más agua, arena y tiempo de fragüe",
              "Rinde igual pero cuesta el doble",
              "Solo conviene en obras muy chicas"
            ],
            "correcta": 0,
            "explica": "El Maestro rinde más por bolsa que la mezcla convencional, reduciendo costos y optimizando tiempos."
          },
          {
            "q": "¿Cuáles son los tres tipos principales de cemento Holcim?",
            "opciones": [
              "CPN (Normal), CPC (Compuesto) y CPF (Rápido)",
              "Portland, Maestro ECOPlanet y pegamento cementicio",
              "CP30, CP50 y cemento blanco decorativo",
              "Portland, Pegamento C1 y pastina"
            ],
            "correcta": 0,
            "explica": "Los tres tipos son CPN para estructuras, CPC (ECOPlanet) para durabilidad y CPF (Rápido) para fraguado veloz."
          }
        ]
      },
      {
        "nivel": 4,
        "nombre": "Manejo de Objeciones y Casos Prácticos",
        "objetivo": "Atención al cliente y rebatimiento de objeciones comerciales",
        "aprobar": 90,
        "preguntas": [
          {
            "q": "Un cliente dice: \"El albañil me pidió Cemento Portland, pero me ofrecen una marca alternativa más barata. ¿Vale la pena la diferencia?\"",
            "opciones": [
              "Sí: Portland está normado (IRAM) y evita fallas",
              "Conviene la más barata: el ahorro es lo que importa",
              "No, en obra gruesa todas las marcas rinden igual",
              "Mejor mezclá las dos marcas para gastar menos"
            ],
            "correcta": 0,
            "explica": "La calidad estructural no se negocia: usar materiales normados previene rajaduras y reclamos graves."
          },
          {
            "q": "El cliente insiste: \"No quiero gastar en complementos para Cemento Portland, ¿puedo obviarlos?\"",
            "opciones": [
              "No: los complementos aseguran durabilidad",
              "Sí, los complementos encarecen sin aportar nada real",
              "Sí, con Portland solo ya alcanza para todo",
              "Sí, el agua y la arena son suficientes"
            ],
            "correcta": 0,
            "explica": "En obra gruesa, la falta de aditivos o la mala mezcla arruina la prestación del producto principal."
          }
        ]
      }
    ]
  },
  {
    "id": "cemento-albanileria",
    "producto": "Cemento de Albañilería",
    "rubro": "Obra Gruesa",
    "icon": "fa-solid fa-trowel",
    "color": "#272e68",
    "descripcion": "Holcim Maestro ECOPlanet: la solución para albañilería sin necesidad de cal.",
    "niveles": [
      {
        "nivel": 1,
        "nombre": "Básico",
        "objetivo": "¿Qué es y para qué sirve?",
        "aprobar": 70,
        "preguntas": [
          {
            "q": "¿Qué ventaja principal tiene el Maestro ECOPlanet sobre la mezcla tradicional?",
            "opciones": [
              "Solo agrega arena y agua, sin cal",
              "Requiere cal y cemento por separado",
              "Necesita más agua que la mezcla común",
              "Se usa únicamente para hormigón"
            ],
            "correcta": 0,
            "explica": "El Maestro ECOPlanet está formulado con aditivos que eliminan la necesidad de cal, simplificando la preparación a solo arena y agua."
          },
          {
            "q": "¿Para qué tipo de trabajos está diseñado el Maestro?",
            "opciones": [
              "Albañilería: pegar ladrillos, revoques y contrapisos",
              "Hormigón armado para estructuras",
              "Colocación de cerámicos en pisos",
              "Impermeabilización de techos"
            ],
            "correcta": 0,
            "explica": "Está formulado para morteros de asiento, revoques gruesos y contrapisos no estructurales."
          },
          {
            "q": "¿En qué peso viene la bolsa de Maestro ECOPlanet?",
            "opciones": [
              "25 kg",
              "50 kg",
              "10 kg",
              "5 kg"
            ],
            "correcta": 0,
            "explica": "El Maestro suele venir en bolsas de 25 kg (o 40 kg según presentación)."
          },
          {
            "q": "¿Qué diferencia al Maestro de un cemento Portland?",
            "opciones": [
              "Es para albañilería, no para hormigón estructural",
              "Es igual al Portland, solo cambia la marca",
              "Se usa únicamente para pintar paredes",
              "Sirve para cualquier estructura pesada"
            ],
            "correcta": 0,
            "explica": "El Maestro está formulado para trabajos de albañilería, mientras que el Portland se usa en hormigón estructural."
          },
          {
            "q": "¿Qué marca fabrica el Maestro ECOPlanet?",
            "opciones": [
              "Holcim",
              "Weber",
              "Loma Negra",
              "Ferrum"
            ],
            "correcta": 0,
            "explica": "El Maestro ECOPlanet es fabricado por Holcim."
          }
        ]
      },
      {
        "nivel": 2,
        "nombre": "Intermedio",
        "objetivo": "Beneficios y rendimiento",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "¿Por qué el Maestro tiene mejor adherencia que las mezclas tradicionales?",
            "opciones": [
              "Tiene aditivos especializados",
              "Porque contiene más cal",
              "Porque su fórmula incluye arena",
              "Porque es un cemento más fino"
            ],
            "correcta": 0,
            "explica": "Los aditivos especializados del Maestro mejoran la adherencia en todas las aplicaciones."
          },
          {
            "q": "¿Cuáles son los 5 usos principales del Maestro?",
            "opciones": [
              "Morteros asiento, revoques gruesos, carpetas, contrapisos y mosaicos",
              "Pegar bloques, revoques finos, carpetas, contrapisos y pintura",
              "Asiento, revoques finos, carpetas, contrapisos y cerámicos",
              "Morteros, revoques, carpetas, contrapisos y hormigón armado"
            ],
            "correcta": 0,
            "explica": "El manual lista esos cinco usos específicos para albañilería no estructural."
          },
          {
            "q": "¿El Maestro se puede usar para hormigones estructurales?",
            "opciones": [
              "No, es para uso no estructural",
              "Sí, para columnas y vigas",
              "Sí, para losas de hormigón armado",
              "Sí, para cualquier estructura"
            ],
            "correcta": 0,
            "explica": "El Maestro está formulado para albañilería, no para hormigón estructural, que requiere cemento Portland Normal."
          },
          {
            "q": "¿Qué productos complementarios se venden con el Maestro?",
            "opciones": [
              "Ladrillos, bloques y herramientas",
              "Pinturas, esmaltes y barnices",
              "Griferías, canillas y accesorios",
              "Membranas, pinturas y selladores"
            ],
            "correcta": 0,
            "explica": "El Maestro se usa para pegar ladrillos y bloques, y requiere herramientas de albañilería para su aplicación."
          },
          {
            "q": "¿Cuál es el beneficio de rendimiento del Maestro?",
            "opciones": [
              "Rinde más por bolsa que la mezcla estándar",
              "Rinde menos que la mezcla tradicional",
              "Su rendimiento es igual al de la cal",
              "No tiene diferencia frente a otros cementos"
            ],
            "correcta": 0,
            "explica": "El Maestro rinde más por bolsa que la mezcla estándar, reduciendo costos y tiempo de trabajo."
          }
        ]
      },
      {
        "nivel": 3,
        "nombre": "Experto",
        "objetivo": "Asesoramiento al cliente",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "Un albañil te dice que siempre mezcla Portland + cal + arena. ¿Cómo le vendés el Maestro?",
            "opciones": [
              "Solo arena y agua, ahorra tiempo y adhiere mejor",
              "Necesita cal para mejorar la plasticidad",
              "Rinde menos que la mezcla tradicional",
              "Es igual que el Portland común"
            ],
            "correcta": 0,
            "explica": "Maestro reemplaza la cal y simplifica la mezcla, mejorando adherencia y rendimiento."
          },
          {
            "q": "¿Qué pasa si un cliente quiere usar Maestro para hacer columnas de hormigón?",
            "opciones": [
              "No, para estructuras portantes necesita Portland Normal CPN",
              "Sí, es ideal para columnas de hormigón",
              "Se puede usar si le agrega más agua",
              "No importa qué cemento use, todos sirven"
            ],
            "correcta": 0,
            "explica": "El Maestro no es apto para uso estructural; para columnas, vigas y losas se requiere CPN."
          },
          {
            "q": "¿Cuál es la ventaja del Maestro en la facilidad de uso?",
            "opciones": [
              "Solo arena y agua, sin cal",
              "Requiere más ingredientes que la mezcla tradicional",
              "Es difícil de preparar sin equipo especial",
              "Necesita un técnico para dosificar la cal"
            ],
            "correcta": 0,
            "explica": "La preparación es más simple: solo arena y agua, sin necesidad de agregar cal."
          },
          {
            "q": "¿Qué le dirías a un cliente que pregunta si el Maestro reemplaza a la cal?",
            "opciones": [
              "Sí, reemplaza a la cal",
              "No, necesita cal también",
              "La cal es mejor en todo",
              "No se puede comparar"
            ],
            "correcta": 0,
            "explica": "El Maestro ya incorpora aditivos que cumplen la función de la cal y más."
          },
          {
            "q": "Un cliente necesita pegar bloques y hacer contrapiso. ¿Qué le vendés?",
            "opciones": [
              "Maestro ECOPlanet + arena y agua",
              "Cal hidratada y arena para pegar",
              "Cemento Portland y malla de refuerzo",
              "Enduido y pintura para muros"
            ],
            "correcta": 0,
            "explica": "Maestro ECOPlanet es un cemento de albañilería que solo requiere arena y agua para morteros de asiento y contrapisos no estructurales."
          }
        ]
      },
      {
        "nivel": 4,
        "nombre": "Manejo de Objeciones y Casos Prácticos",
        "objetivo": "Atención al cliente y rebatimiento de objeciones comerciales",
        "aprobar": 90,
        "preguntas": [
          {
            "q": "Un cliente dice: \"El albañil me pidió Cemento de Albañilería, pero me ofrecen una marca alternativa más barata. ¿Vale la pena la diferencia?\"",
            "opciones": [
              "Sí, cumple norma IRAM y evita fisuras.",
              "No importa la marca, todos los productos de obra gruesa son iguales.",
              "Conviene comprar siempre lo más barato sin mirar la calidad.",
              "Le recomendás que no use ningún material y deje la pared como está."
            ],
            "correcta": 0,
            "explica": "La calidad estructural no se negocia: usar materiales normados previene rajaduras y reclamos graves."
          },
          {
            "q": "El cliente insiste: \"No quiero gastar en complementos para Cemento de Albañilería, ¿puedo obviarlos?\"",
            "opciones": [
              "No es recomendable, afecta el rendimiento y la durabilidad.",
              "Sí, se puede, pero solo en trabajos menores y sin lluvias.",
              "Sí, se puede, pero solo si usás arena fina y mucha agua.",
              "Sí, se puede, pero solo si el clima está seco y templado."
            ],
            "correcta": 0,
            "explica": "Los complementos aseguran la correcta dosificación y propiedades del cemento, evitando fallas en obra."
          }
        ]
      }
    ]
  },
  {
    "id": "cal-hidratada",
    "producto": "Cal Hidratada",
    "rubro": "Obra Gruesa",
    "icon": "fa-solid fa-mortar-pestle",
    "color": "#272e68",
    "descripcion": "Cal Oro Blanco: aporta plasticidad y trabajabilidad a las mezclas de albañilería.",
    "niveles": [
      {
        "nivel": 1,
        "nombre": "Básico",
        "objetivo": "Función de la cal en la obra",
        "aprobar": 70,
        "preguntas": [
          {
            "q": "¿Cuál es la función principal de la cal hidratada en la mezcla?",
            "opciones": [
              "Aportar plasticidad y adherencia al mortero",
              "Aumentar la resistencia estructural del muro",
              "Acelerar el fraguado del mortero",
              "Reemplazar por completo al cemento"
            ],
            "correcta": 0,
            "explica": "La cal aporta plasticidad, trabajabilidad y adherencia al mortero; la resistencia estructural la da el cemento, no la cal."
          },
          {
            "q": "¿Qué marca de cal trabaja Rosso?",
            "opciones": [
              "Cal Oro Blanco",
              "Cal Milagro",
              "Cal Cacique",
              "Cal del Plata"
            ],
            "correcta": 0,
            "explica": "Rosso es distribuidor exclusivo de Cal Oro Blanco."
          },
          {
            "q": "¿La cal hidratada se puede usar sola para hormigones estructurales?",
            "opciones": [
              "No, siempre se combina con cemento y arena",
              "Sí, reemplaza totalmente al cemento en el hormigón",
              "Sí, si se le agrega bastante agua",
              "Solo en estructuras de poca carga"
            ],
            "correcta": 0,
            "explica": "La cal no aporta resistencia estructural: siempre va combinada con cemento Portland y arena, nunca sola en hormigones."
          },
          {
            "q": "¿Qué ventaja le da la cal a los muros?",
            "opciones": [
              "Deja que el muro 'respire' y evita condensación",
              "Lo vuelve impermeable al agua de lluvia",
              "Aumenta la resistencia del muro a la compresión",
              "Duplica la velocidad de secado del revoque"
            ],
            "correcta": 0,
            "explica": "La cal deja que los muros 'respiren' (transpirabilidad), ayudando a prevenir la humedad por condensación."
          },
          {
            "q": "¿En qué tipo de trabajos se utiliza la cal hidratada?",
            "opciones": [
              "Morteros de asiento, revoques y reparaciones",
              "Impermeabilización de techos, terrazas y balcones",
              "Colocación de pisos y zócalos vinílicos",
              "Pintura decorativa de ambientes interiores"
            ],
            "correcta": 0,
            "explica": "Se usa en morteros para asiento de ladrillos, revoques gruesos y mezclas de reparación."
          }
        ]
      },
      {
        "nivel": 2,
        "nombre": "Intermedio",
        "objetivo": "Aplicación y alternativas",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "¿Qué producto moderno puede reemplazar a la cal en las mezclas?",
            "opciones": [
              "Cementos de albañilería como Holcim Maestro, que ya incorporan aditivos",
              "Pintura látex",
              "Pegamento C1",
              "Membrana líquida"
            ],
            "correcta": 0,
            "explica": "Muchos albañiles eligen el Maestro, que ya incorpora aditivos para una mezcla más práctica."
          },
          {
            "q": "¿Por qué la cal aumenta la durabilidad de los revoques?",
            "opciones": [
              "Evita fisuras y mejora la terminación del acabado",
              "Hace el revoque más grueso",
              "Le da más brillo",
              "Porque es más cara"
            ],
            "correcta": 0,
            "explica": "La cal contribuye a aumentar la durabilidad de los revoques, evitando fisuras y mejorando la terminación."
          },
          {
            "q": "¿Cuáles son los productos complementarios de la cal hidratada?",
            "opciones": [
              "Cemento Portland, ladrillos, bloques y herramientas de albañilería",
              "Solo pintura",
              "Griferías",
              "Pisos vinílicos"
            ],
            "correcta": 0,
            "explica": "Se complementa con cemento Portland, ladrillos, bloques y herramientas como fratachos y baldes."
          },
          {
            "q": "¿Cuándo conviene recomendar cal en lugar de Maestro?",
            "opciones": [
              "En obras tradicionales o reparaciones donde el albañil prefiere la mezcla clásica",
              "Siempre, es mejor que el Maestro",
              "Nunca, la cal no sirve",
              "Solo para hormigón armado"
            ],
            "correcta": 0,
            "explica": "La cal sigue siendo opción confiable en obras tradicionales y reparaciones donde el albañil la prefiere."
          },
          {
            "q": "¿Cómo mejora la cal la textura de la mezcla?",
            "opciones": [
              "La hace más manejable y facilita la aplicación del mortero sobre superficies",
              "La endurece inmediatamente",
              "La hace más líquida",
              "No afecta la textura"
            ],
            "correcta": 0,
            "explica": "La cal mejora notablemente la textura y manejabilidad, facilitando la aplicación sobre superficies."
          }
        ]
      },
      {
        "nivel": 3,
        "nombre": "Experto",
        "objetivo": "Venta consultiva",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "Un cliente va a hacer un revoque grueso. ¿Cal o Maestro?",
            "opciones": [
              "Ambos sirven: Maestro es más práctico (solo arena + agua) pero la cal es la opción tradicional confiable",
              "La cal es la única opción válida para cualquier tipo de revoque, ya que el Maestro no se adhiere bien a las paredes",
              "El Maestro se usa exclusivamente para revoques finos y la cal solo para asentar ladrillos, así que ninguno sirve para revoque grueso",
              "Para un revoque grueso conviene usar solo Maestro porque la cal produce eflorescencias y manchas en la superficie"
            ],
            "correcta": 0,
            "explica": "Podés ofrecer ambas opciones explicando que Maestro es más práctico y la cal es la vía tradicional."
          },
          {
            "q": "¿Por qué la cal NO se recomienda para hormigón estructural?",
            "opciones": [
              "Porque no aporta la resistencia mecánica necesaria para soportar cargas",
              "Porque es muy cara",
              "Porque huele mal",
              "Porque cambia de color"
            ],
            "correcta": 0,
            "explica": "La cal no tiene la resistencia necesaria para estructuras portantes; para eso se necesita CPN."
          },
          {
            "q": "¿Cómo argumentás la venta de cal junto con cemento Portland?",
            "opciones": [
              "La cal mejora la plasticidad de la mezcla de cemento y arena, facilitando el trabajo del albañil",
              "La cal anula al cemento",
              "No se deben mezclar nunca",
              "La cal solo sirve sola"
            ],
            "correcta": 0,
            "explica": "La combinación cemento + cal + arena produce un mortero más manejable, con mejor adherencia y durabilidad."
          },
          {
            "q": "¿Qué le decís a un cliente que pregunta si la cal es obsoleta?",
            "opciones": [
              "No, sigue siendo muy utilizada en obras tradicionales y reparaciones por su plasticidad y precio",
              "Sí, ya no se usa para nada",
              "Solo se usa para decoración",
              "Es peligrosa"
            ],
            "correcta": 0,
            "explica": "La cal sigue siendo muy valorada en obras tradicionales y reparaciones por sus propiedades únicas."
          },
          {
            "q": "¿Qué venta cruzada hacés cuando vendés cal?",
            "opciones": [
              "Cemento Portland, ladrillos, bloques, fratachos y baldes",
              "Solo pintura",
              "Solo griferías",
              "Membrana asfáltica"
            ],
            "correcta": 0,
            "explica": "Al vender cal, ofrecé cemento Portland, ladrillos, bloques y herramientas de albañilería."
          }
        ]
      },
      {
        "nivel": 4,
        "nombre": "Manejo de Objeciones y Casos Prácticos",
        "objetivo": "Atención al cliente y rebatimiento de objeciones comerciales",
        "aprobar": 90,
        "preguntas": [
          {
            "q": "Un cliente dice: \"El albañil me pidió Cal Hidratada, pero me ofrecen una marca alternativa más barata. ¿Vale la pena la diferencia?\"",
            "opciones": [
              "Sí, Cal Hidratada cuenta con certificaciones de norma IRAM y calidad garantizada que evitan fisuras o fallas estructurales a futuro.",
              "No importa la marca, todos los productos de obra gruesa son exactamente iguales.",
              "Conviene comprar siempre lo más barato sin mirar la calidad.",
              "Le recomendás que no use ningún material y deje la pared como está."
            ],
            "correcta": 0,
            "explica": "La calidad estructural no se negocia: usar materiales normados previene rajaduras y reclamos graves."
          },
          {
            "q": "El cliente insiste: \"No quiero gastar en complementos para Cal Hidratada, ¿puedo obviarlos?\"",
            "opciones": [
              "No es recomendable. Los complementos (aditivos, fijaciones o dosificación correcta) garantizan el rendimiento y la durabilidad de Cal Hidratada.",
              "Sí, los complementos son solo para decorar.",
              "Sí, podés usar agua de la canilla en cualquier proporción.",
              "Podés usar tierra del patio para reemplazar los insumos."
            ],
            "correcta": 0,
            "explica": "En obra gruesa, la falta de aditivos o la mala mezcla arruina la prestación del producto principal."
          }
        ]
      }
    ]
  },
  {
    "id": "aditivos-hidrofugos",
    "producto": "Aditivos Ceresita / Hidrófugos",
    "rubro": "Obra Gruesa",
    "icon": "fa-solid fa-droplet-slash",
    "color": "#272e68",
    "descripcion": "Solución eficaz contra la humedad: aditivo para cajón hidrófugo y azotado impermeable.",
    "niveles": [
      {
        "nivel": 1,
        "nombre": "Básico",
        "objetivo": "¿Qué es y para qué sirve?",
        "aprobar": 70,
        "preguntas": [
          {
            "q": "¿Para qué se usa el aditivo hidrófugo tipo Ceresita?",
            "opciones": [
              "Para prevenir la humedad en cimientos y paredes",
              "Para que el hormigón se endurezca más rápido en climas fríos",
              "Para mejorar la adherencia de las pinturas en superficies lisas",
              "Para impermeabilizar techos con membranas asfálticas"
            ],
            "correcta": 0,
            "explica": "La Ceresita se usa en cajón hidrófugo y azotado impermeable para bloquear la humedad ascendente y la de lluvia."
          },
          {
            "q": "¿Cuáles son las dos aplicaciones críticas de la Ceresita?",
            "opciones": [
              "Cajón hidrófugo y azotado impermeable",
              "Revoque grueso y capa aisladora horizontal",
              "Contrapiso alisado y pintura impermeabilizante",
              "Capa aisladora vertical y revoque exterior"
            ],
            "correcta": 0,
            "explica": "La Ceresita se usa en la capa aisladora horizontal (cajón hidrófugo) y en el azotado impermeable previo al revoque."
          },
          {
            "q": "¿Qué marca de hidrófugo trabaja Rosso?",
            "opciones": [
              "Ceresita",
              "Holcim",
              "Tensolite",
              "FV"
            ],
            "correcta": 0,
            "explica": "Trabajamos con Ceresita de Weber (Saint-Gobain)."
          },
          {
            "q": "¿En qué presentaciones viene la Ceresita?",
            "opciones": [
              "1 kg, 4 kg, 10 kg, 20 kg y tambor de 200 kg",
              "Solo en litros",
              "Bolsas de 50 kg",
              "Tubos de silicona"
            ],
            "correcta": 0,
            "explica": "Viene en 1, 4, 10, 20 kg y tambor de 200 kg, adaptándose a la escala de cada obra."
          },
          {
            "q": "¿Cómo se aplica la Ceresita en la mezcla?",
            "opciones": [
              "Se diluye en el agua de la mezcla, 1:10",
              "Se aplica directo sobre la pared sin preparación previa",
              "Se mezcla con cal en seco antes de agregar el agua",
              "Se usa como pintura impermeable sobre la superficie"
            ],
            "correcta": 0,
            "explica": "Se diluye en el agua de la mezcla, generalmente 1 parte de Ceresita por 10 de agua."
          }
        ]
      },
      {
        "nivel": 2,
        "nombre": "Intermedio",
        "objetivo": "Restricciones técnicas",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "¿Se puede usar Ceresita en mezclas que incluyan cal?",
            "opciones": [
              "No, no se debe usar con cal ni con cementos tipo Maestro",
              "Sí, se puede usar con cal en cualquier proporción y con todos los cementos",
              "Se puede usar con cal hidratada siempre que se respete la dosis indicada",
              "Es obligatorio agregar cal a la mezcla para que el hidrófugo actúe correctamente"
            ],
            "correcta": 0,
            "explica": "La Ceresita no debe usarse con cal ni con cementos de albañilería tipo Maestro."
          },
          {
            "q": "¿Cómo debe estar la pared antes de aplicar el azotado impermeable?",
            "opciones": [
              "Limpia, húmeda y sin sol directo",
              "Seca y expuesta al sol",
              "Totalmente mojada",
              "Con pintura vieja"
            ],
            "correcta": 0,
            "explica": "La superficie debe estar limpia y ligeramente húmeda, evitando el sol fuerte para que el mortero no se seque demasiado rápido."
          },
          {
            "q": "¿Se puede usar Ceresita en hormigones estructurales?",
            "opciones": [
              "No, no se usa en hormigones estructurales",
              "Sí, en todas las columnas",
              "Es obligatorio en vigas",
              "Solo en piletas"
            ],
            "correcta": 0,
            "explica": "La Ceresita no está formulada para hormigones estructurales, sino para morteros de revoque y aislaciones."
          },
          {
            "q": "¿Qué es el 'cajón hidrófugo'?",
            "opciones": [
              "Capa aisladora horizontal en la base de los muros",
              "Mezcla impermeable para revoques exteriores",
              "Tratamiento para techos contra filtraciones",
              "Revestimiento plástico para paredes húmedas"
            ],
            "correcta": 0,
            "explica": "Es la capa aisladora horizontal que se coloca sobre la base de los muros para evitar la humedad ascendente."
          },
          {
            "q": "¿Qué productos complementarios se venden con la Ceresita?",
            "opciones": [
              "Cemento, arena y herramientas",
              "Pinturas y barnices",
              "Griferías y sanitarios",
              "Pisos y revestimientos"
            ],
            "correcta": 0,
            "explica": "La Ceresita se usa en mezclas de cemento y arena, por lo que se complementa con esos materiales y herramientas de albañilería."
          }
        ]
      },
      {
        "nivel": 3,
        "nombre": "Experto",
        "objetivo": "Diagnóstico y venta",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "Un cliente dice que las paredes de su casa 'transpiran humedad'. ¿Qué le ofrecés?",
            "opciones": [
              "Ceresita para azotado impermeable con cemento Portland y arena",
              "Un sellador acrílico para aplicar sobre la superficie de la pared",
              "Un revoque con cal y cemento de albañilería para tapar las manchas",
              "Una membrana asfáltica que se coloca en la cara interna del muro"
            ],
            "correcta": 0,
            "explica": "El azotado impermeable con Ceresita crea una barrera que evita la humedad en muros."
          },
          {
            "q": "¿Por qué NO se puede mezclar Ceresita con cal?",
            "opciones": [
              "La cal interfiere con la barrera impermeable del mortero",
              "Porque la cal hace que la mezcla se seque más rápido",
              "Porque la cal reacciona y genera burbujas de aire",
              "Porque la cal impide que el aditivo se disuelva en el agua"
            ],
            "correcta": 0,
            "explica": "La cal interfiere con la formación de la barrera impermeable interna del mortero con Ceresita."
          },
          {
            "q": "Un constructor está haciendo los cimientos de una casa. ¿Qué le recomendás para evitar humedad?",
            "opciones": [
              "Cajón hidrófugo con Ceresita",
              "Aplicar un sellador acrílico sobre la superficie de los cimientos",
              "Colocar una capa de pintura asfáltica en la base de los muros",
              "Incorporar cal a la mezcla de cemento para mejorar la impermeabilidad"
            ],
            "correcta": 0,
            "explica": "El cajón hidrófugo con Ceresita se coloca sobre la base de los muros para frenar la humedad ascendente."
          },
          {
            "q": "¿Cuál es la proporción correcta de dilución de Ceresita en agua?",
            "opciones": [
              "1 parte de Ceresita por cada 10 de agua",
              "1 parte de Ceresita por cada 5 de agua",
              "1 parte de Ceresita por cada 20 de agua",
              "2 partes de Ceresita por cada 10 de agua"
            ],
            "correcta": 0,
            "explica": "La proporción estándar es 1:10 (Ceresita:agua)."
          },
          {
            "q": "¿Cuándo ofrecés Ceresita junto con una venta de ladrillos?",
            "opciones": [
              "Cuando construye paredes nuevas",
              "Cuando compra ladrillos para un techo",
              "Solo si pide más de mil ladrillos",
              "Nunca, no están relacionados"
            ],
            "correcta": 0,
            "explica": "En obra nueva, el cajón hidrófugo es obligatorio en la base de los muros."
          }
        ]
      },
      {
        "nivel": 4,
        "nombre": "Manejo de Objeciones y Casos Prácticos",
        "objetivo": "Atención al cliente y rebatimiento de objeciones comerciales",
        "aprobar": 90,
        "preguntas": [
          {
            "q": "Un cliente dice: \"El albañil me pidió Aditivos Ceresita / Hidrófugos, pero me ofrecen una marca alternativa más barata. ¿Vale la pena la diferencia?\"",
            "opciones": [
              "Sí, Ceresita tiene norma IRAM y evita fisuras futuras.",
              "No, cualquier hidrófugo cumple igual sin importar la marca.",
              "Sí, pero solo si el cliente pide la marca por nombre.",
              "No, es al pedo gastar de más en un aditivo."
            ],
            "correcta": 0,
            "explica": "La certificación IRAM garantiza que el producto cumple estándares de calidad que previenen fallas estructurales."
          },
          {
            "q": "El cliente insiste: \"No quiero gastar en complementos para Aditivos Ceresita / Hidrófugos, ¿puedo obviarlos?\"",
            "opciones": [
              "No es recomendable, afecta el rendimiento y la durabilidad.",
              "Sí, podés omitirlos sin afectar el resultado final.",
              "Sí, pero solo si usás agua de lluvia en la mezcla.",
              "Podés usar cal común como reemplazo directo."
            ],
            "correcta": 0,
            "explica": "Los aditivos y la dosificación correcta son esenciales para que el hidrófugo cumpla su función de barrera impermeable."
          }
        ]
      }
    ]
  },
  {
    "id": "revoque-fino",
    "producto": "Revoque Fino",
    "rubro": "Obra Gruesa",
    "icon": "fa-solid fa-paint-roller",
    "color": "#272e68",
    "descripcion": "Capa final sobre el revoque grueso que deja la superficie lisa, lista para pintar.",
    "niveles": [
      {
        "nivel": 1,
        "nombre": "Básico",
        "objetivo": "¿Qué es y para qué sirve?",
        "aprobar": 70,
        "preguntas": [
          {
            "q": "¿Cuál es la función del revoque fino?",
            "opciones": [
              "Dejar la superficie lisa y lista para pintar",
              "Proteger la pared contra la humedad y las filtraciones de agua",
              "Dar color y textura decorativa a la superficie de la pared",
              "Evitar que la pared se agriete por los movimientos del terreno"
            ],
            "correcta": 0,
            "explica": "El revoque fino es la capa final que deja la superficie lisa y lista para enduir o pintar."
          },
          {
            "q": "¿Sobre qué se aplica el revoque fino?",
            "opciones": [
              "Sobre el revoque grueso fratazado, seco y curado",
              "Directamente sobre el ladrillo sin revoque",
              "Sobre la pintura existente en la pared",
              "Sobre la membrana asfáltica impermeable"
            ],
            "correcta": 0,
            "explica": "Se aplica sobre el revoque grueso previamente fratazado, seco y curado para asegurar adherencia y buen acabado."
          },
          {
            "q": "¿Qué marca de revoque fino trabaja Rosso?",
            "opciones": [
              "Weber",
              "Holcim",
              "Ferrum",
              "Atrim"
            ],
            "correcta": 0,
            "explica": "Trabajamos mezclas de revoque fino marca Weber (Saint-Gobain)."
          },
          {
            "q": "¿Qué herramientas se usan para aplicar el revoque fino?",
            "opciones": [
              "Llana y fratacho",
              "Cepillo de alambre",
              "Espátula y nivel",
              "Paleta y regla"
            ],
            "correcta": 0,
            "explica": "Se trabaja con llana y fratacho, buscando una terminación lo más lisa posible."
          },
          {
            "q": "¿Por qué es importante humedecer la superficie antes de aplicar?",
            "opciones": [
              "Mejorar la adherencia y evitar secado prematuro",
              "Acelerar el fraguado y endurecer más rápido, logrando así una superficie más resistente a los golpes.",
              "Evitar que se agriete por el calor, ya que la humedad mantiene la mezcla fresca y flexible durante el secado.",
              "Reducir la cantidad de material necesario, porque al humedecer la pared el revoque rinde más y se necesita menos mezcla."
            ],
            "correcta": 0,
            "explica": "Humedecer levemente la superficie mejora la adherencia y evita un secado prematuro del revoque fino."
          }
        ]
      },
      {
        "nivel": 2,
        "nombre": "Intermedio",
        "objetivo": "Aplicación correcta",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "¿Qué ahorra un buen revoque fino en las etapas posteriores?",
            "opciones": [
              "Tiempo y materiales",
              "Solo tiempo de trabajo",
              "Solo materiales de pintura",
              "Nada, es un gasto extra"
            ],
            "correcta": 0,
            "explica": "Un buen revoque fino reduce la necesidad de corregir con masilla y de aplicar múltiples manos de pintura."
          },
          {
            "q": "¿Qué materiales se necesitan para preparar revoque fino de forma tradicional?",
            "opciones": [
              "Cemento Portland, cal aérea hidratada y arena fina tamizada",
              "Cemento, arena gruesa y agua",
              "Cal viva, yeso y arena fina",
              "Cemento de albañilería y agua"
            ],
            "correcta": 0,
            "explica": "La mezcla tradicional lleva cemento Portland, cal aérea hidratada y arena fina tamizada."
          },
          {
            "q": "¿Para qué ambientes sirve el revoque fino?",
            "opciones": [
              "Para interiores y exteriores",
              "Para ambientes con alta humedad relativa",
              "Para superficies que ya tienen enduido",
              "Para paredes que van a recibir cerámicos"
            ],
            "correcta": 0,
            "explica": "El revoque fino se aplica tanto en interiores como en exteriores."
          },
          {
            "q": "¿Qué productos complementarios se venden con el revoque fino?",
            "opciones": [
              "Enduido, pintura, fratachos, llanas, cal, cemento y arena fina",
              "Membrana asfáltica, pintura, llanas y arena gruesa",
              "Cal, cemento, arena fina y enduido plástico",
              "Fratachos, llanas, cal y pintura al látex"
            ],
            "correcta": 0,
            "explica": "El revoque fino se complementa con materiales para terminación y herramientas de aplicación."
          },
          {
            "q": "¿Qué diferencia hay entre la mezcla lista y la preparación tradicional?",
            "opciones": [
              "La lista va directo; la tradicional exige mezclar cemento, cal y arena",
              "La lista rinde más y es más barata que la tradicional",
              "La tradicional se usa solo en exteriores, la lista en interiores",
              "La lista necesita agregar agua y la tradicional no lleva agua"
            ],
            "correcta": 0,
            "explica": "La mezcla lista ya viene formulada para usar tal cual, mientras que la tradicional requiere calcular y combinar los componentes."
          }
        ]
      },
      {
        "nivel": 3,
        "nombre": "Experto",
        "objetivo": "Asesoramiento técnico",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "Un cliente quiere pintar una pared nueva. ¿Qué pasos le indicás después del revoque grueso?",
            "opciones": [
              "Revoque fino, secado, enduido, lijado y pintura",
              "Pintar directo sobre el ladrillo sin revocar",
              "Aplicar enduido y pintar sin revoque fino",
              "Colocar membrana asfáltica y luego pintar"
            ],
            "correcta": 0,
            "explica": "El revoque fino se aplica sobre el grueso, se seca, se enduida, se lija y se pinta."
          },
          {
            "q": "¿Qué pasa si se aplica revoque fino sobre un revoque grueso sin fraguar?",
            "opciones": [
              "Se pueden generar fisuras y desprendimientos",
              "La superficie queda más lisa y uniforme que si se espera el fraguado completo",
              "El material se adhiere perfectamente y no presenta ningún tipo de inconveniente",
              "Se logra un acabado más resistente y duradero que aplicándolo sobre una base seca"
            ],
            "correcta": 0,
            "explica": "Aplicar sobre un grueso sin fraguar causa fisuras y desprendimientos."
          },
          {
            "q": "Un albañil dice que no necesita revoque fino, que va directo con enduido. ¿Qué le decís?",
            "opciones": [
              "Sin fino, el enduido rinde menos y el acabado es peor",
              "El enduido se puede aplicar directo sobre el grueso",
              "El revoque fino es solo para exteriores",
              "El enduido es más barato que el revoque fino"
            ],
            "correcta": 0,
            "explica": "El revoque fino nivela y sella la superficie, reduciendo el consumo de enduido y mejorando el acabado final."
          },
          {
            "q": "¿Cuál es la clave para un acabado profesional con revoque fino?",
            "opciones": [
              "Grueso fratazado y llana para lisura",
              "Aplicar con cepillo y rodillo sobre el revoque grueso",
              "Usar arena gruesa sin tamizar para dar textura",
              "No mojar la superficie antes de aplicar la mezcla"
            ],
            "correcta": 0,
            "explica": "La clave es un grueso bien fratazado y trabajo con llana para lograr la máxima lisura."
          },
          {
            "q": "¿Cuándo conviene ofrecer mezcla lista vs preparación tradicional?",
            "opciones": [
              "Mezcla lista para obras chicas; tradicional para volumen grande o preferencia del albañil.",
              "La mezcla lista es ideal para proyectos grandes porque ahorra tiempo, mientras que la tradicional se reserva para retoques pequeños y urgentes.",
              "La preparación tradicional se recomienda únicamente cuando el cliente no tiene acceso a agua potable, y la lista se usa en todos los demás casos.",
              "La elección depende solo del precio: si el presupuesto es ajustado, se elige la mezcla lista; si no, se opta por la tradicional."
            ],
            "correcta": 0,
            "explica": "La mezcla lista ahorra tiempo en obras pequeñas, mientras que la tradicional es más económica para grandes volúmenes y respeta la costumbre del albañil."
          }
        ]
      },
      {
        "nivel": 4,
        "nombre": "Manejo de Objeciones y Casos Prácticos",
        "objetivo": "Atención al cliente y rebatimiento de objeciones comerciales",
        "aprobar": 90,
        "preguntas": [
          {
            "q": "Un cliente dice: \"El albañil me pidió Revoque Fino, pero me ofrecen una marca alternativa más barata. ¿Vale la pena la diferencia?\"",
            "opciones": [
              "Sí, la norma IRAM garantiza calidad y evita fisuras.",
              "No importa la marca, todos los productos de obra gruesa son iguales.",
              "Conviene comprar siempre lo más barato sin mirar la calidad.",
              "Le recomendás que no use ningún material y deje la pared como está."
            ],
            "correcta": 0,
            "explica": "La certificación IRAM asegura que el producto cumple estándares de calidad que previenen fisuras y fallas."
          },
          {
            "q": "El cliente insiste: \"No quiero gastar en complementos para Revoque Fino, ¿puedo obviarlos?\"",
            "opciones": [
              "No es recomendable, los complementos aseguran rendimiento y durabilidad.",
              "Sí, se pueden omitir sin afectar el resultado final.",
              "Sí, solo se usan para mejorar la apariencia.",
              "Sí, se pueden reemplazar por materiales caseros."
            ],
            "correcta": 0,
            "explica": "En obra gruesa, la falta de aditivos o la mala mezcla arruina la prestación del producto principal."
          }
        ]
      }
    ]
  },
  {
    "id": "ladrillos",
    "producto": "Ladrillos Huecos Cerámicos",
    "rubro": "Obra Gruesa",
    "icon": "fa-solid fa-table-cells",
    "color": "#272e68",
    "descripcion": "Ladrillos del 8, 12 y 18 cm para tabiques y muros no estructurales. Marca Cerámica Marcos Paz.",
    "niveles": [
      {
        "nivel": 1,
        "nombre": "Básico",
        "objetivo": "Tipos y usos",
        "aprobar": 70,
        "preguntas": [
          {
            "q": "¿Para qué tipo de paredes se usan los ladrillos huecos cerámicos?",
            "opciones": [
              "Paredes no estructurales",
              "Pilares y columnas de hormigón armado",
              "Techos y cielorrasos",
              "Pisos de exterior"
            ],
            "correcta": 0,
            "explica": "Los ladrillos huecos cerámicos se usan para levantar paredes que no soportan grandes cargas, como tabiques y divisiones."
          },
          {
            "q": "¿Qué medida de ladrillo es la más versátil y popular?",
            "opciones": [
              "Del 12 (12×18×33 cm)",
              "Del 8",
              "Del 18",
              "Del 25"
            ],
            "correcta": 0,
            "explica": "El ladrillo del 12 es el más versátil y popular, apto para muros interiores o exteriores no portantes."
          },
          {
            "q": "¿Qué marca de ladrillos trabaja Rosso?",
            "opciones": [
              "Cerámica Marcos Paz",
              "Cerámica San Lorenzo",
              "Cerámica del Norte",
              "Cerámica El Águila"
            ],
            "correcta": 0,
            "explica": "Es la marca que comercializamos para ladrillos huecos."
          },
          {
            "q": "¿Cuál es la medida del ladrillo hueco 'del 8'?",
            "opciones": [
              "8×18×33 cm",
              "8×8×8 cm",
              "80×18×33 cm",
              "8×20×40 cm"
            ],
            "correcta": 0,
            "explica": "El ladrillo del 8 mide 8×18×33 cm, ideal para tabiques interiores y divisiones livianas."
          },
          {
            "q": "¿Qué beneficio dan las cámaras de aire internas de los ladrillos huecos?",
            "opciones": [
              "Aíslan térmicamente: frescos en verano y cálidos en invierno",
              "Reducen el peso del ladrillo para facilitar su manipulación",
              "Aumentan la resistencia estructural para muros portantes",
              "Mejoran la adherencia del revoque en la superficie"
            ],
            "correcta": 0,
            "explica": "Las cámaras de aire internas actúan como aislantes naturales, manteniendo la temperatura interior estable."
          }
        ]
      },
      {
        "nivel": 2,
        "nombre": "Intermedio",
        "objetivo": "Rendimiento y comparación",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "¿Cuántos ladrillos de 33 cm de largo rinden por metro cuadrado?",
            "opciones": [
              "Aproximadamente 16 unidades por m²",
              "Se calculan unas 12 unidades por metro cuadrado, dependiendo del espesor de la junta y la medida del ladrillo",
              "La cantidad varía según el tipo de junta y el desperdicio, pero ronda las 20 unidades por metro cuadrado",
              "El rendimiento exacto se determina en obra, aunque se estiman unas 25 unidades por metro cuadrado"
            ],
            "correcta": 0,
            "explica": "Los ladrillos de 33 cm de largo rinden aproximadamente 16 unidades por m²."
          },
          {
            "q": "¿Por qué un ladrillo de 25 cm puede salir más caro por m² aunque sea más barato por unidad?",
            "opciones": [
              "Porque rinde menos por m²",
              "Porque pesa más y encarece el flete",
              "Porque es de peor calidad y dura menos",
              "Porque tiene más desperdicio en obra"
            ],
            "correcta": 0,
            "explica": "El ladrillo de 25 cm requiere 22 unidades por m², mientras que el de 33 cm solo 16, por lo que el costo por m² puede ser mayor."
          },
          {
            "q": "¿Para qué se usa el ladrillo del 18?",
            "opciones": [
              "Muros exteriores con mayor espesor",
              "Tabiques internos livianos y divisiones interiores",
              "Techos de losa con estructura de viguetas",
              "Pisos de cerámica con base de contrapiso"
            ],
            "correcta": 0,
            "explica": "El ladrillo del 18 es el más robusto, ideal para muros exteriores que necesitan mayor aislamiento térmico y acústico."
          },
          {
            "q": "¿Qué ventaja tienen los ladrillos huecos vs los macizos?",
            "opciones": [
              "Son más livianos, aíslan mejor y son fáciles de manipular.",
              "Son más pesados y difíciles de usar.",
              "No presentan ninguna ventaja frente a los macizos.",
              "Son solo más económicos en comparación."
            ],
            "correcta": 0,
            "explica": "Los ladrillos huecos pesan menos, ofrecen mejor aislamiento térmico y acústico, y su manipulación es más sencilla."
          },
          {
            "q": "¿Cuántos ladrillos de 30 cm de largo necesitás por m²?",
            "opciones": [
              "18 unidades por m²",
              "16 unidades por m²",
              "10 unidades por m²",
              "30 unidades por m²"
            ],
            "correcta": 0,
            "explica": "Un ladrillo de 30 cm de largo rinde 18 unidades por m², mientras que uno de 33 cm rinde 16."
          }
        ]
      },
      {
        "nivel": 3,
        "nombre": "Experto",
        "objetivo": "Asesoramiento y venta cruzada",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "Un cliente construye un dormitorio y quiere dividir el espacio interior. ¿Qué ladrillo le recomendás?",
            "opciones": [
              "Del 8, ideal para tabiques interiores livianos",
              "Del 18 para muros exteriores que requieren mayor espesor y aislamiento térmico",
              "Del 12 para paredes que soportan carga estructural y son más resistentes",
              "Bloques de hormigón para divisiones internas que necesitan alta durabilidad"
            ],
            "correcta": 0,
            "explica": "El ladrillo del 8 es el más delgado y se usa para divisiones internas livianas, optimizando el espacio."
          },
          {
            "q": "¿Qué venta cruzada hacés cuando vendés ladrillos?",
            "opciones": [
              "Cemento, cal, arena, hierros, puertas y ventanas",
              "Pintura, rodillos y enduido",
              "Griferías y sanitarios",
              "Cielorrasos y aislaciones"
            ],
            "correcta": 0,
            "explica": "Al vender ladrillos, ofrecé los materiales complementarios que el cliente va a necesitar para completar la obra."
          },
          {
            "q": "Un cliente compara precios de ladrillos y dice que los de la competencia son más baratos. ¿Cómo respondés?",
            "opciones": [
              "Compará el costo por m², no por unidad.",
              "Ofrecer un descuento inmediato para cerrar la venta.",
              "Asegurar que la calidad es la misma que la de la competencia.",
              "Decir que el precio más bajo siempre es mejor opción."
            ],
            "correcta": 0,
            "explica": "El argumento clave es comparar el costo por m²: nuestros ladrillos de 33 cm rinden más por metro cuadrado, lo que puede resultar más económico a pesar del precio unitario."
          },
          {
            "q": "¿Qué propiedades adicionales tienen los ladrillos huecos cerámicos?",
            "opciones": [
              "Resistentes al fuego, duraderos y económicos",
              "Solo aptos para tabiques interiores livianos",
              "Ofrecen baja aislación térmica y acústica",
              "Requieren refuerzo estructural obligatorio"
            ],
            "correcta": 0,
            "explica": "Los ladrillos huecos cerámicos son ignífugos, duraderos y económicos, aptos para proyectos de mediana y gran escala."
          },
          {
            "q": "Un cliente quiere hacer la pared exterior de su casa. ¿Qué ladrillo y por qué?",
            "opciones": [
              "Del 12 o del 18",
              "Del 8 siempre",
              "Del 18 únicamente",
              "Del 12 o macizo"
            ],
            "correcta": 0,
            "explica": "Para exterior, el 12 es versátil y el 18 ofrece mayor aislamiento térmico."
          }
        ]
      },
      {
        "nivel": 4,
        "nombre": "Manejo de Objeciones y Casos Prácticos",
        "objetivo": "Atención al cliente y rebatimiento de objeciones comerciales",
        "aprobar": 90,
        "preguntas": [
          {
            "q": "Un cliente dice: \"El albañil me pidió Ladrillos Huecos Cerámicos, pero me ofrecen una marca alternativa más barata. ¿Vale la pena la diferencia?\"",
            "opciones": [
              "Sí, porque cumplen la norma IRAM y evitan fisuras o fallas.",
              "No, es al pedo pagar más; cualquier marca rinde igual.",
              "Sí, pero solo si el cliente pide garantía escrita por la obra.",
              "No, mejor comprar la más barata y reforzar con hierro."
            ],
            "correcta": 0,
            "explica": "La certificación IRAM asegura calidad y evita problemas estructurales futuros."
          },
          {
            "q": "El cliente insiste: \"No quiero gastar en complementos para Ladrillos Huecos Cerámicos, ¿puedo obviarlos?\"",
            "opciones": [
              "No es recomendable, aseguran rendimiento y durabilidad.",
              "Sí, son solo decorativos y no afectan la obra.",
              "Sí, con agua de la canilla alcanza para todo.",
              "Podés usar tierra del patio como reemplazo."
            ],
            "correcta": 0,
            "explica": "Los complementos aseguran la correcta aplicación y vida útil del ladrillo."
          }
        ]
      }
    ]
  },
  {
    "id": "bloques",
    "producto": "Bloques de Hormigón",
    "rubro": "Obra Gruesa",
    "icon": "fa-solid fa-cube",
    "color": "#272e68",
    "descripcion": "Bloques premoldeados Tensolite: portantes, livianos, U y símil piedra.",
    "niveles": [
      {
        "nivel": 1,
        "nombre": "Básico",
        "objetivo": "Tipos de bloques",
        "aprobar": 70,
        "preguntas": [
          {
            "q": "¿Qué marca de bloques trabaja Rosso?",
            "opciones": [
              "Tensolite",
              "Placas Cementicias",
              "Hormigones del Norte",
              "Bloques del Valle"
            ],
            "correcta": 0,
            "explica": "Trabajamos bloques de hormigón premoldeado marca Tensolite."
          },
          {
            "q": "¿Para qué sirven los bloques portantes?",
            "opciones": [
              "Para muros estructurales y de carga",
              "Para divisiones interiores livianas",
              "Para revestir fachadas exteriores",
              "Para construir contrapisos y carpetas"
            ],
            "correcta": 0,
            "explica": "Los bloques portantes son los más resistentes, diseñados para muros estructurales y de carga."
          },
          {
            "q": "¿Qué son los bloques U?",
            "opciones": [
              "Bloques con forma de U para vigas de encadenado",
              "Bloques redondos para columnas",
              "Bloques decorativos para fachadas",
              "Bloques para pisos exteriores"
            ],
            "correcta": 0,
            "explica": "Los bloques U se rellenan con hierro y hormigón para formar vigas de encadenado."
          },
          {
            "q": "¿Para qué se usan los bloques símil piedra?",
            "opciones": [
              "Para fachadas y muros decorativos",
              "Para cimientos y bases",
              "Para pisos interiores",
              "Para techos y losas"
            ],
            "correcta": 0,
            "explica": "Los bloques símil piedra se usan en fachadas y muros decorativos por su textura que imita piedra natural."
          },
          {
            "q": "¿Cuál es la ventaja principal de construir con bloques vs ladrillos?",
            "opciones": [
              "Mayor tamaño, avance más rápido y menos costo",
              "Son más livianos y fáciles de cortar",
              "Tienen mejor aislación térmica que los ladrillos",
              "Son más económicos en materiales y mano de obra"
            ],
            "correcta": 0,
            "explica": "Su mayor tamaño permite avanzar más rápido en obra, reduciendo tiempos y costos de mano de obra."
          }
        ]
      },
      {
        "nivel": 2,
        "nombre": "Intermedio",
        "objetivo": "Usos y ventajas técnicas",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "¿Qué diferencia a los bloques livianos de los portantes?",
            "opciones": [
              "Los livianos son para interiores sin carga; los portantes, para muros estructurales.",
              "Los bloques livianos se emplean en muros exteriores, mientras que los portantes se destinan a divisiones internas sin necesidad de soportar cargas estructurales adicionales.",
              "Los bloques livianos tienen mayor peso que los portantes, lo que los hace más difíciles de manipular en la obra y menos convenientes para tabiques interiores.",
              "Los bloques portantes se utilizan exclusivamente para revestir fachadas con acabados decorativos, mientras que los livianos se reservan para estructuras que deben soportar peso."
            ],
            "correcta": 0,
            "explica": "Los bloques livianos no soportan peso estructural y se usan en divisiones internas, mientras que los portantes están diseñados para muros de carga."
          },
          {
            "q": "¿Los bloques son resistentes al fuego?",
            "opciones": [
              "Sí, son ignífugos",
              "No, son inflamables",
              "Solo los decorativos",
              "Solo los livianos"
            ],
            "correcta": 0,
            "explica": "Los bloques de hormigón son ignífugos, resistentes al tiempo y a la humedad."
          },
          {
            "q": "¿Cómo se completa un encadenado con bloques U?",
            "opciones": [
              "Se rellenan con hierro y hormigón",
              "Se rellenan solo con arena",
              "Se pegan con adhesivo de contacto",
              "Se dejan vacíos y se tapan"
            ],
            "correcta": 0,
            "explica": "Los bloques U se integran al muro y se rellenan con hierro y hormigón para formar el encadenado."
          },
          {
            "q": "¿Qué productos complementarios se venden con bloques?",
            "opciones": [
              "Cemento, arena gruesa, hierros y hormigón, puertas y ventanas",
              "Pinturas, esmaltes y barnices",
              "Cielorrasos y placas de yeso",
              "Membranas y aislaciones hidrófugas"
            ],
            "correcta": 0,
            "explica": "Son los materiales que se integran al sistema constructivo de bloques para completar la obra."
          },
          {
            "q": "¿Qué aislamiento ofrecen los bloques de hormigón?",
            "opciones": [
              "Buen aislamiento térmico y acústico",
              "Aislamiento térmico únicamente, sin propiedades acústicas relevantes",
              "Aislamiento acústico excelente, pero sin capacidad de aislar térmicamente",
              "No ofrecen aislamiento alguno, ya que son materiales porosos que transmiten temperatura y sonido"
            ],
            "correcta": 0,
            "explica": "Los bloques de hormigón ofrecen buen aislamiento térmico y acústico tanto en interiores como exteriores."
          }
        ]
      },
      {
        "nivel": 3,
        "nombre": "Experto",
        "objetivo": "Asesoramiento integral",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "Un cliente quiere hacer una pared exterior con look rústico sin colocar piedra natural. ¿Qué le ofrecés?",
            "opciones": [
              "Bloques símil piedra",
              "Bloques portantes",
              "Bloques U",
              "Bloques livianos"
            ],
            "correcta": 0,
            "explica": "Los bloques símil piedra imitan piedra natural sin los costos y el trabajo de colocar piedra verdadera."
          },
          {
            "q": "¿Por qué un cliente elegiría bloques sobre ladrillos huecos?",
            "opciones": [
              "Mayor velocidad de obra y más variedad de usos",
              "Son más económicos que los ladrillos en todos los casos",
              "Tienen mejor aislación acústica que cualquier otro material",
              "Permiten construir sin necesidad de columnas ni vigas"
            ],
            "correcta": 0,
            "explica": "Los bloques aceleran la construcción por su tamaño y ofrecen opciones portantes, livianas, U y decorativas."
          },
          {
            "q": "Un constructor necesita encadenados horizontales. ¿Qué bloque y complementos le vendés?",
            "opciones": [
              "Bloques U con hierros y hormigón",
              "Bloques portantes con refuerzo de hierro",
              "Bloques livianos con cemento de albañilería",
              "Bloques símil piedra con arena y cal"
            ],
            "correcta": 0,
            "explica": "Los bloques U se rellenan con hierro y hormigón para formar vigas de encadenado."
          },
          {
            "q": "¿Cuáles son las 4 variedades de bloques que vendemos?",
            "opciones": [
              "Portantes, livianos, U y símil piedra",
              "Portantes, livianos y U",
              "Solo portantes y símil piedra",
              "Livianos, U y símil piedra"
            ],
            "correcta": 0,
            "explica": "Las cuatro variedades son portantes, livianos, U y símil piedra, según el manual."
          },
          {
            "q": "Un cliente tiene presupuesto limitado pero necesita un muro exterior. ¿Bloques o ladrillos?",
            "opciones": [
              "Depende: los bloques avanzan más rápido, los ladrillos son versátiles. Evaluar costo total.",
              "Siempre bloques, porque son más baratos por unidad.",
              "Siempre ladrillos, porque son más resistentes.",
              "Cualquiera, el costo es igual al final."
            ],
            "correcta": 0,
            "explica": "El costo total incluye mano de obra: los bloques reducen tiempo de obra, mientras que los ladrillos ofrecen versatilidad; hay que comparar ambos factores."
          }
        ]
      },
      {
        "nivel": 4,
        "nombre": "Manejo de Objeciones y Casos Prácticos",
        "objetivo": "Atención al cliente y rebatimiento de objeciones comerciales",
        "aprobar": 90,
        "preguntas": [
          {
            "q": "Un cliente dice: \"El albañil me pidió Bloques de Hormigón, pero me ofrecen una marca alternativa más barata. ¿Vale la pena la diferencia?\"",
            "opciones": [
              "Sí, porque está certificado bajo norma IRAM.",
              "No, la marca no influye en la resistencia del bloque.",
              "Sí, pero solo si el cliente prioriza el precio sobre la calidad.",
              "No, es preferible usar ladrillos comunes porque son más económicos."
            ],
            "correcta": 0,
            "explica": "La certificación IRAM garantiza resistencia y durabilidad, evitando fisuras y fallas estructurales."
          },
          {
            "q": "El cliente insiste: \"No quiero gastar en complementos para Bloques de Hormigón, ¿puedo obviarlos?\"",
            "opciones": [
              "No es recomendable, los complementos aseguran su rendimiento y durabilidad.",
              "Sí, podés omitirlos sin afectar la resistencia final.",
              "Sí, pero solo si usás agua de lluvia en la mezcla.",
              "Podés reemplazarlos por cal común sin problemas."
            ],
            "correcta": 0,
            "explica": "En obra gruesa, la falta de aditivos o la mala mezcla arruina la prestación del producto principal."
          }
        ]
      }
    ]
  },
  {
    "id": "hierros",
    "producto": "Hierros A420",
    "rubro": "Obra Gruesa",
    "icon": "fa-solid fa-bars",
    "color": "#272e68",
    "descripcion": "Barras de acero ADN 420, perfiles ángulo, planchuelas y perfiles T. Marca Gerdau.",
    "niveles": [
      {
        "nivel": 1,
        "nombre": "Básico",
        "objetivo": "Tipos de hierros",
        "aprobar": 70,
        "preguntas": [
          {
            "q": "¿Para qué se usan las barras de acero ADN 420?",
            "opciones": [
              "Para estructuras de hormigón",
              "Para herrería artesanal",
              "Para refuerzos de mampostería",
              "Para encofrados de madera"
            ],
            "correcta": 0,
            "explica": "Las barras ADN 420 se usan en hormigón armado para columnas, vigas, losas y cimientos."
          },
          {
            "q": "¿Qué marca de hierros trabaja Rosso?",
            "opciones": [
              "Gerdau",
              "Holcim",
              "Weber",
              "Tensolite"
            ],
            "correcta": 0,
            "explica": "Trabajamos hierros marca Gerdau."
          },
          {
            "q": "¿Qué diferencia hay entre barras torsionadas y lisas?",
            "opciones": [
              "Las torsionadas tienen estrías; las lisas son para herrería.",
              "Las torsionadas son para herrería y las lisas para estructuras de hormigón, aunque ambas se usan en obra.",
              "Ambas son iguales, solo cambia el precio y la presentación en el corralón.",
              "Las lisas tienen estrías que se adhieren al hormigón; las torsionadas son totalmente lisas."
            ],
            "correcta": 0,
            "explica": "Las torsionadas (ADN 420) tienen estrías para adherirse al hormigón; las lisas son para herrería y trabajos artesanales."
          },
          {
            "q": "¿Se pueden soldar las barras ADN 420 comunes?",
            "opciones": [
              "No, salvo la variedad ADN 420 S",
              "Sí, todas se pueden soldar",
              "Solo las de diámetro menor",
              "No, ninguna variedad es soldable"
            ],
            "correcta": 0,
            "explica": "Las ADN 420 comunes no son aptas para soldar; solo la variedad ADN 420 S es soldable."
          },
          {
            "q": "¿Qué largo estándar tienen las barras de hierro?",
            "opciones": [
              "12 metros",
              "1 metro",
              "6 metros",
              "50 metros"
            ],
            "correcta": 0,
            "explica": "Las barras ADN 420 vienen en largos estándar de 12 metros."
          }
        ]
      },
      {
        "nivel": 2,
        "nombre": "Intermedio",
        "objetivo": "Perfiles y complementos",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "¿Para qué se usan los perfiles ángulo (L)?",
            "opciones": [
              "Estructuras metálicas, refuerzos, rejas y estanterías",
              "Para columnas y vigas de hormigón",
              "Para cañerías de agua y gas",
              "Para revestimientos cerámicos"
            ],
            "correcta": 0,
            "explica": "Los perfiles L son versátiles para estructuras metálicas, refuerzos, rejas y estanterías."
          },
          {
            "q": "¿Qué diámetros de barra están disponibles?",
            "opciones": [
              "De 6 a 25 mm",
              "Solo 10 mm",
              "De 1 a 3 mm",
              "De 50 a 100 mm"
            ],
            "correcta": 0,
            "explica": "Las barras ADN 420 torsionadas se fabrican en diámetros que van de 6 a 25 mm."
          },
          {
            "q": "¿Qué son las planchuelas?",
            "opciones": [
              "Barras planas para refuerzos y herrería",
              "Perfiles angulares para estructuras",
              "Cables de acero para hormigón",
              "Tubos redondos para columnas"
            ],
            "correcta": 0,
            "explica": "Las planchuelas son barras rectangulares planas, lisas o perforadas, usadas en herrería, refuerzos y marcos."
          },
          {
            "q": "¿Para qué se usan los perfiles T?",
            "opciones": [
              "Para columnas, vigas o herrería; se unen con soldadura o bulones",
              "Para refuerzos de hormigón en losas y cimientos",
              "Para cercos perimetrales y muebles metálicos",
              "Para estructuras livianas como estanterías o rejas"
            ],
            "correcta": 0,
            "explica": "Los perfiles T son estructurales y se usan en columnas, vigas o herrería, uniéndose con soldadura o bulones."
          },
          {
            "q": "¿Qué complementos se venden con los hierros?",
            "opciones": [
              "Discos de corte, electrodos, antióxido, tornillos y alambre",
              "Cemento, cal y arena para la mezcla",
              "Clavos, tornillos y fijaciones varias",
              "Pintura sintética y diluyente"
            ],
            "correcta": 0,
            "explica": "Los hierros se complementan con discos de corte, electrodos, pintura antióxido, tornillos y alambre recocido para su uso en obra."
          }
        ]
      },
      {
        "nivel": 3,
        "nombre": "Experto",
        "objetivo": "Asesoramiento técnico",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "Un cliente necesita hacer rejas para su casa. ¿Qué hierros le vendés?",
            "opciones": [
              "Barras lisas, perfiles ángulo, planchuelas y complementos",
              "Barras torsionadas, alambre recocido y cemento",
              "Perfiles T, pintura antióxido y tornillos",
              "Planchuelas perforadas, discos de corte y electrodos"
            ],
            "correcta": 0,
            "explica": "Las rejas se hacen con hierros maleables como lisas, ángulos y planchuelas, más los complementos para cortar y soldar."
          },
          {
            "q": "¿Por qué no se deben soldar las barras ADN 420 comunes?",
            "opciones": [
              "Porque el calor de la soldadura debilita su estructura interna.",
              "Porque son de acero de baja calidad.",
              "Porque se oxidan al soldarse.",
              "Porque no tienen estrías para adherirse."
            ],
            "correcta": 0,
            "explica": "La soldadura puede debilitar la estructura del acero torsionado; solo la variedad S es soldable."
          },
          {
            "q": "Un constructor pide hierros para la estructura de una losa. ¿Qué le ofrecés?",
            "opciones": [
              "Barras ADN 420 torsionadas, alambre recocido y cemento",
              "Barras lisas para herrería y alambre galvanizado",
              "Perfiles ángulo negros con discos de corte",
              "Planchuelas perforadas y pintura antióxido"
            ],
            "correcta": 0,
            "explica": "Las barras ADN 420 torsionadas son las adecuadas para estructuras de hormigón como losas, y se complementan con alambre recocido para atar y cemento para el hormigón."
          },
          {
            "q": "¿En qué largo vienen los perfiles ángulo?",
            "opciones": [
              "6 metros",
              "12 metros",
              "1 metro",
              "50 metros"
            ],
            "correcta": 0,
            "explica": "Los perfiles ángulo se comercializan en largos de 6 metros."
          },
          {
            "q": "¿Qué norma cumplen las barras ADN 420?",
            "opciones": [
              "IRAM U500-528",
              "ISO 9001",
              "Norma europea EN",
              "No tienen norma"
            ],
            "correcta": 0,
            "explica": "Las barras ADN 420 cumplen la norma IRAM U500-528."
          }
        ]
      },
      {
        "nivel": 4,
        "nombre": "Manejo de Objeciones y Casos Prácticos",
        "objetivo": "Atención al cliente y rebatimiento de objeciones comerciales",
        "aprobar": 90,
        "preguntas": [
          {
            "q": "Un cliente dice: \"El albañil me pidió Hierros A420, pero me ofrecen una marca alternativa más barata. ¿Vale la pena la diferencia?\"",
            "opciones": [
              "Sí, cumple norma IRAM y evita fallas estructurales.",
              "No importa la marca, todos los hierros son iguales.",
              "Conviene comprar el más barato, total no se nota.",
              "Cualquier hierro sirve, la diferencia es solo marketing."
            ],
            "correcta": 0,
            "explica": "La certificación IRAM garantiza resistencia y durabilidad, previniendo fisuras o colapsos."
          },
          {
            "q": "El cliente insiste: \"No quiero gastar en complementos para Hierros A420, ¿puedo obviarlos?\"",
            "opciones": [
              "No es recomendable: los complementos aseguran el rendimiento y la durabilidad.",
              "Sí, son opcionales si la mezcla se hace con más agua.",
              "Sí, se pueden reemplazar por cal común sin afectar la estructura.",
              "Sí, pero solo en climas secos y con hierro liso."
            ],
            "correcta": 0,
            "explica": "En obra gruesa, la falta de aditivos o la mala mezcla arruina la prestación del producto principal."
          }
        ]
      }
    ]
  },
  {
    "id": "mallas",
    "producto": "Mallas Electrosoldadas",
    "rubro": "Obra Gruesa",
    "icon": "fa-solid fa-grip",
    "color": "#272e68",
    "descripcion": "Esqueleto metálico que refuerza hormigón en losas, entrepisos y contrapisos. Marca Gerdau.",
    "niveles": [
      {
        "nivel": 1,
        "nombre": "Básico",
        "objetivo": "Función y tipos",
        "aprobar": 70,
        "preguntas": [
          {
            "q": "¿Para qué sirven las mallas electrosoldadas?",
            "opciones": [
              "Refuerzan el hormigón y evitan fisuras",
              "Sirven para nivelar el terreno antes de construir",
              "Se usan para unir ladrillos en muros",
              "Ayudan a impermeabilizar la superficie"
            ],
            "correcta": 0,
            "explica": "Las mallas actúan como esqueleto metálico que distribuye tensiones y previene el agrietamiento del hormigón."
          },
          {
            "q": "¿Qué marca de mallas trabaja Rosso?",
            "opciones": [
              "Gerdau",
              "Holcim",
              "Weber",
              "Tensolite"
            ],
            "correcta": 0,
            "explica": "Trabajamos mallas electrosoldadas marca Gerdau."
          },
          {
            "q": "¿Cuáles son las medidas más comunes de mallas?",
            "opciones": [
              "2,00 × 6,00 m y 2,40 × 6,00 m",
              "2,00 × 3,00 m y 2,40 × 3,00 m",
              "2,00 × 5,00 m y 2,40 × 5,00 m",
              "2,00 × 4,00 m y 2,40 × 4,00 m"
            ],
            "correcta": 0,
            "explica": "Las medidas estándar de las mallas son 2,00 × 6,00 m y 2,40 × 6,00 m, según el manual."
          },
          {
            "q": "¿Qué diámetros de varilla están disponibles?",
            "opciones": [
              "4,2 mm, 5 mm, 6 mm y 8 mm",
              "3 mm, 4 mm, 5 mm y 6 mm",
              "5 mm, 6 mm, 8 mm y 10 mm",
              "2 mm, 3 mm, 4 mm y 5 mm"
            ],
            "correcta": 0,
            "explica": "El manual especifica que los diámetros disponibles son 4,2 mm, 5 mm, 6 mm y 8 mm."
          },
          {
            "q": "¿Por qué es importante colocar malla en una losa?",
            "opciones": [
              "Evita fisuras y garantiza durabilidad",
              "Aumenta la resistencia al fuego",
              "Mejora la aislación térmica",
              "Reduce el costo del hormigón"
            ],
            "correcta": 0,
            "explica": "La malla absorbe tensiones y evita el agrietamiento por retracción."
          }
        ]
      },
      {
        "nivel": 2,
        "nombre": "Intermedio",
        "objetivo": "Elección correcta",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "¿Qué malla se recomienda para una losa de techo estándar?",
            "opciones": [
              "Mallas de 4,2 mm o 5 mm de diámetro",
              "Mallas de 8 mm para todos los techos",
              "No se usa malla en techos",
              "Malla de 1 mm"
            ],
            "correcta": 0,
            "explica": "Para losa de techo o entrepiso estándar: mallas de 4,2 mm o 5 mm."
          },
          {
            "q": "¿Cuándo se usan mallas de 6 mm u 8 mm?",
            "opciones": [
              "Para contrapisos de alto peso",
              "Para contrapisos que soportan cargas livianas",
              "Para losas de techo o entrepiso estándar",
              "Para muros divisorios interiores sin carga"
            ],
            "correcta": 0,
            "explica": "Las mallas de 6 mm u 8 mm se usan en contrapisos que soportan cargas pesadas, como entradas de vehículos o pisos industriales."
          },
          {
            "q": "¿Qué productos complementarios se venden con mallas?",
            "opciones": [
              "Viguetas, bovedillas, cemento, hierros y espaciadores",
              "Membranas, pinturas, selladores y fijaciones",
              "Cielorrasos, aislantes, tornillos y guías",
              "Carpintería, herrajes, vidrios y burletes"
            ],
            "correcta": 0,
            "explica": "Se venden junto con las mallas los elementos para completar la losa y asegurar su correcta instalación."
          },
          {
            "q": "¿Para qué sirven los espaciadores plásticos?",
            "opciones": [
              "Posicionan la malla dentro del hormigón",
              "Sujetan la malla al encofrado",
              "Separan la malla del suelo",
              "Protegen la malla de la corrosión"
            ],
            "correcta": 0,
            "explica": "Los espaciadores plásticos mantienen la malla a la altura correcta dentro del hormigón."
          },
          {
            "q": "¿Qué pasa si no se coloca malla en un contrapiso?",
            "opciones": [
              "Se agrieta y no reparte bien las cargas",
              "Queda más resistente y duradero",
              "No tiene ninguna consecuencia",
              "Es mejor para pisos livianos"
            ],
            "correcta": 0,
            "explica": "Sin malla, el hormigón se fisura por retracción natural y no distribuye el peso uniformemente."
          }
        ]
      },
      {
        "nivel": 3,
        "nombre": "Experto",
        "objetivo": "Venta consultiva",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "Un cliente va a hacer un contrapiso para estacionar su auto. ¿Qué malla y por qué?",
            "opciones": [
              "Malla de 6 mm u 8 mm por el peso del vehículo",
              "Malla de 4,2 mm por ser la más económica",
              "Malla de 5 mm por ser la más común",
              "Malla de 8 mm por ser la más barata"
            ],
            "correcta": 0,
            "explica": "Para estacionar un auto se necesita una malla robusta que soporte el peso y el tránsito, por eso se recomienda 6 mm u 8 mm."
          },
          {
            "q": "¿Cómo se calcula cuántas mallas necesita un cliente?",
            "opciones": [
              "Se divide la superficie total (m²) entre la superficie de cada malla (ej. 2×6 = 12 m²) y se agrega solapamiento",
              "Se calcula sumando el perímetro de la losa y dividiendo por el ancho de la malla, sin considerar solapes ni desperdicios",
              "Se estima multiplicando el largo por el ancho de la obra y restando un margen fijo para puertas y ventanas",
              "Se toma como referencia la cantidad de metros lineales de malla que trae cada rollo y se divide por el área total a cubrir"
            ],
            "correcta": 0,
            "explica": "Se calcula dividiendo la superficie total por la de cada malla, más el solapamiento entre paños."
          },
          {
            "q": "Un cliente construye un entrepiso sobre una habitación. ¿Qué malla le ofrecés?",
            "opciones": [
              "Malla de 4,2 mm o 5 mm",
              "Malla de 8 mm para máxima resistencia",
              "Malla de 6 mm para uso general",
              "No necesita malla, solo hierros sueltos"
            ],
            "correcta": 0,
            "explica": "Para un entrepiso estándar, las mallas de 4,2 mm o 5 mm son las recomendadas."
          },
          {
            "q": "¿Qué venta cruzada hacés al vender mallas para una losa?",
            "opciones": [
              "Viguetas, bovedillas, cemento, hierros y espaciadores",
              "Cemento, arena y cal para el revoque",
              "Hierros sueltos y alambre de atar",
              "Plásticos y mallas de refuerzo extra"
            ],
            "correcta": 0,
            "explica": "La venta cruzada incluye los elementos que completan la losa: viguetas, bovedillas, cemento, hierros y espaciadores."
          },
          {
            "q": "¿Cómo ayuda la malla al hormigón durante el secado?",
            "opciones": [
              "Absorbe tensiones y evita fisuras",
              "Acelera el tiempo de secado",
              "Mejora el color del hormigón",
              "No influye en el secado"
            ],
            "correcta": 0,
            "explica": "La malla absorbe las tensiones internas del hormigón al secarse, evitando fisuras por retracción."
          }
        ]
      },
      {
        "nivel": 4,
        "nombre": "Manejo de Objeciones y Casos Prácticos",
        "objetivo": "Atención al cliente y rebatimiento de objeciones comerciales",
        "aprobar": 90,
        "preguntas": [
          {
            "q": "Un cliente dice: \"El albañil me pidió Mallas Electrosoldadas, pero me ofrecen una marca alternativa más barata. ¿Vale la pena la diferencia?\"",
            "opciones": [
              "Sí, tiene certificación IRAM y calidad garantizada.",
              "No importa la marca, todos los productos de obra gruesa son iguales.",
              "Conviene comprar siempre lo más barato sin mirar la calidad.",
              "Le recomendás que no use ningún material y deje la pared como está."
            ],
            "correcta": 0,
            "explica": "La certificación IRAM asegura que la malla cumple con estándares de calidad que evitan fisuras y fallas estructurales."
          },
          {
            "q": "El cliente insiste: \"No quiero gastar en complementos para Mallas Electrosoldadas, ¿puedo obviarlos?\"",
            "opciones": [
              "No es recomendable, los complementos garantizan el rendimiento y durabilidad.",
              "Sí, podés obviarlos sin afectar la resistencia final.",
              "Sí, pero solo si usás más cemento en la mezcla.",
              "No importa, la malla sola ya es suficiente."
            ],
            "correcta": 0,
            "explica": "Los complementos aseguran la correcta colocación y protección de la malla, evitando fallas estructurales."
          }
        ]
      }
    ]
  },
  {
    "id": "viguetas",
    "producto": "Viguetas Pretensadas",
    "rubro": "Obra Gruesa",
    "icon": "fa-solid fa-layer-group",
    "color": "#272e68",
    "descripcion": "Elemento estructural clave para losas: costillas del techo/entrepiso. Marca Tensolite.",
    "niveles": [
      {
        "nivel": 1,
        "nombre": "Básico",
        "objetivo": "Qué es y para qué sirve",
        "aprobar": 70,
        "preguntas": [
          {
            "q": "¿Qué es una vigueta pretensada?",
            "opciones": [
              "El elemento estructural sobre el que se arma la losa",
              "El bloque de EPS que rellena los espacios entre viguetas",
              "La malla de acero que se coloca en la capa de compresión",
              "El perfil metálico que sostiene el cielorraso"
            ],
            "correcta": 0,
            "explica": "Las viguetas son el elemento estructural clave, las 'costillas' sobre las que se apoyan las bovedillas."
          },
          {
            "q": "¿Qué marca de viguetas ofrece Rosso?",
            "opciones": [
              "Tensolite",
              "Tensolite es una marca reconocida en la región",
              "Gerdau es conocida por sus aceros",
              "Barbieri es un proveedor local"
            ],
            "correcta": 0,
            "explica": "Trabajamos viguetas de concreto pretensado marca Tensolite."
          },
          {
            "q": "¿Qué se apoya sobre las viguetas para formar la losa?",
            "opciones": [
              "Las bovedillas",
              "Las chapas de techo",
              "Los ladrillos huecos",
              "Las membranas asfálticas"
            ],
            "correcta": 0,
            "explica": "Sobre las viguetas se apoyan las bovedillas, que forman el relleno de la losa alivianada."
          },
          {
            "q": "¿Por qué se llaman 'pretensadas'?",
            "opciones": [
              "Tienen acero tensado en su interior",
              "Se fabrican con un proceso de curado en frío",
              "Se les aplica una capa de pintura anticorrosiva",
              "Vienen con un sistema de encastre para bovedillas"
            ],
            "correcta": 0,
            "explica": "Llevan acero tensado internamente, dando mayor resistencia con menor peso."
          },
          {
            "q": "¿De qué material están hechas las viguetas Tensolite?",
            "opciones": [
              "Concreto pretensado",
              "Madera laminada",
              "PVC reforzado",
              "Poliestireno expandido"
            ],
            "correcta": 0,
            "explica": "Son de concreto pretensado, con acero tensado en su interior."
          }
        ]
      },
      {
        "nivel": 2,
        "nombre": "Intermedio",
        "objetivo": "Cálculo y especificaciones",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "¿A qué distancia se colocan las viguetas entre ejes?",
            "opciones": [
              "43 a 50 cm, según la bovedilla",
              "Entre 30 y 35 cm, siempre fijo",
              "A 60 cm exactos, sin excepción",
              "Depende del largo de la vigueta"
            ],
            "correcta": 0,
            "explica": "La separación estándar es de 43 a 50 cm entre ejes, ajustándose al ancho de la bovedilla."
          },
          {
            "q": "Para una losa de 5 metros de ancho, ¿cuántas viguetas se necesitan aprox.?",
            "opciones": [
              "12 a 13 viguetas",
              "Entre 5 y 6 viguetas, dependiendo del ancho de las bovedillas",
              "Alrededor de 50 viguetas, si se colocan muy juntas",
              "Unas 2 viguetas, porque son muy resistentes y cubren mucho"
            ],
            "correcta": 0,
            "explica": "500 cm dividido 43 cm da 11,6, más una vigueta extra da 12 a 13."
          },
          {
            "q": "¿Por qué las viguetas largas son más caras por metro?",
            "opciones": [
              "Requieren más acero y control técnico",
              "El costo extra se debe al transporte especial que requieren",
              "Al ser más largas, su instalación demanda más mano de obra",
              "Porque llevan un recubrimiento adicional contra la corrosión"
            ],
            "correcta": 0,
            "explica": "A mayor longitud, más acero interno y control técnico, lo que incrementa el costo por metro."
          },
          {
            "q": "¿Cuáles son las ventajas de las viguetas pretensadas vs vigas tradicionales?",
            "opciones": [
              "Fácil manipulación, menor carga, mayor resistencia y ahorro de soportes",
              "Requieren más mano de obra y son más pesadas",
              "Son más caras pero no ofrecen beneficios",
              "Necesitan más columnas de apoyo y son frágiles"
            ],
            "correcta": 0,
            "explica": "Las viguetas pretensadas tienen acero tensado que les da mayor resistencia con menos peso, facilitando la instalación y reduciendo cargas y fisuras."
          },
          {
            "q": "¿Qué productos son complementarios imprescindibles de las viguetas?",
            "opciones": [
              "Bovedillas, malla y cemento",
              "Pintura, cerámicos y grifería",
              "Chapas, clavos y aislantes",
              "Maderas, tornillos y barniz"
            ],
            "correcta": 0,
            "explica": "Las viguetas necesitan bovedillas, malla de acero y cemento para completar la losa."
          }
        ]
      },
      {
        "nivel": 3,
        "nombre": "Experto",
        "objetivo": "Asesoramiento al cliente",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "Un cliente quiere hacer un entrepiso y no sabe qué sistema usar. ¿Cómo le vendés viguetas?",
            "opciones": [
              "Son más rápidas, livianas y resistentes que las vigas tradicionales.",
              "Son más económicas pero difíciles de instalar.",
              "Son más pesadas pero muy duraderas.",
              "Son más baratas pero requieren más soporte."
            ],
            "correcta": 0,
            "explica": "Las viguetas pretensadas ofrecen ventajas en velocidad, peso y resistencia frente a las vigas tradicionales."
          },
          {
            "q": "¿Cómo calculás cuántas viguetas necesita un cliente?",
            "opciones": [
              "Ancho de losa ÷ separación entre ejes + 1",
              "Largo de la losa × ancho de la losa",
              "Peso total de la losa ÷ peso de cada vigueta",
              "Cantidad de bovedillas × 2"
            ],
            "correcta": 0,
            "explica": "La fórmula es ancho de losa en cm dividido la separación entre ejes (43 o 50 cm) más una vigueta extra."
          },
          {
            "q": "Un cliente pregunta por qué no hacer vigas de hormigón tradicional. ¿Qué argumentás?",
            "opciones": [
              "Más resistencia con menos peso y rápida instalación",
              "Las viguetas pretensadas son más económicas que las vigas tradicionales",
              "La instalación de viguetas requiere equipos de izaje especiales",
              "Las viguetas no soportan cargas pesadas y se deforman con el tiempo"
            ],
            "correcta": 0,
            "explica": "Las viguetas pretensadas ofrecen mayor resistencia con menos peso, se instalan rápido y ahorran encofrados."
          },
          {
            "q": "¿Qué venta cruzada completa hacés con viguetas?",
            "opciones": [
              "Bovedillas, mallas, cemento y transporte",
              "Únicamente viguetas y bovedillas",
              "Cemento, arena y piedra nada más",
              "Solo bovedillas y mallas de acero"
            ],
            "correcta": 0,
            "explica": "La venta cruzada incluye todos los elementos necesarios para completar la losa: bovedillas, mallas de acero, cemento para la capa de compresión y el transporte."
          },
          {
            "q": "Lo más práctico para calcular las viguetas del cliente es…",
            "opciones": [
              "Que nos dé las medidas y le damos el cálculo",
              "Que mida el ancho y multiplique por dos",
              "Que use una fórmula que viene en el manual",
              "Que consulte a un ingeniero estructural"
            ],
            "correcta": 0,
            "explica": "Con las medidas del espacio, podemos calcular la cantidad exacta de viguetas según la separación recomendada."
          }
        ]
      },
      {
        "nivel": 4,
        "nombre": "Manejo de Objeciones y Casos Prácticos",
        "objetivo": "Atención al cliente y rebatimiento de objeciones comerciales",
        "aprobar": 90,
        "preguntas": [
          {
            "q": "Un cliente dice: \"El albañil me pidió Viguetas Pretensadas, pero me ofrecen una marca alternativa más barata. ¿Vale la pena la diferencia?\"",
            "opciones": [
              "Sí, tienen certificación IRAM y calidad garantizada.",
              "No importa la marca, todos los productos de obra gruesa son iguales.",
              "Conviene comprar siempre lo más barato sin mirar la calidad.",
              "Le recomendás que no use ningún material y deje la pared como está."
            ],
            "correcta": 0,
            "explica": "La certificación IRAM asegura resistencia y durabilidad, evitando fisuras y fallas estructurales."
          },
          {
            "q": "El cliente insiste: \"No quiero gastar en complementos para Viguetas Pretensadas, ¿puedo obviarlos?\"",
            "opciones": [
              "No es recomendable, los complementos garantizan el rendimiento y durabilidad.",
              "Sí, se pueden obviar sin afectar la resistencia final.",
              "Sí, pero solo si la obra es de carácter provisorio.",
              "Podés reemplazarlos por materiales caseros de similar función."
            ],
            "correcta": 0,
            "explica": "En obra gruesa, la falta de aditivos o la mala mezcla arruina la prestación del producto principal."
          }
        ]
      }
    ]
  },
  {
    "id": "bovedillas",
    "producto": "Bovedillas EPS",
    "rubro": "Obra Gruesa",
    "icon": "fa-solid fa-shapes",
    "color": "#272e68",
    "descripcion": "Relleno liviano y aislante de poliestireno expandido para losas alivianadas. Marca Estisol.",
    "niveles": [
      {
        "nivel": 1,
        "nombre": "Básico",
        "objetivo": "¿Qué son las bovedillas?",
        "aprobar": 70,
        "preguntas": [
          {
            "q": "¿Qué son las bovedillas de EPS?",
            "opciones": [
              "Relleno de poliestireno expandido entre viguetas",
              "Elementos de madera tratada que se usan como soporte estructural",
              "Piezas de cerámica hueca que se emplean para tabiques interiores",
              "Componentes de acero galvanizado que se instalan en techos"
            ],
            "correcta": 0,
            "explica": "Las bovedillas de EPS se usan como relleno liviano entre las viguetas para alivianar la losa."
          },
          {
            "q": "¿Qué marca de bovedillas trabaja Rosso?",
            "opciones": [
              "Estisol",
              "Holcim",
              "Gerdau",
              "Ferrum"
            ],
            "correcta": 0,
            "explica": "Trabajamos bovedillas de EPS marca Estisol."
          },
          {
            "q": "¿Qué anchos estándar tienen las bovedillas?",
            "opciones": [
              "43 cm y 50 cm (coinciden con la separación de viguetas)",
              "Los anchos son fijos y no varían según el fabricante",
              "Se adaptan a cualquier separación entre viguetas",
              "Solo se fabrican en medidas especiales bajo pedido"
            ],
            "correcta": 0,
            "explica": "Anchos estándar: 43 y 50 cm, coincidiendo con las separaciones habituales de viguetas."
          },
          {
            "q": "¿Qué alturas están disponibles?",
            "opciones": [
              "12, 15 y 18 cm",
              "10, 20 y 25 cm",
              "15, 20 y 25 cm",
              "12, 18 y 20 cm"
            ],
            "correcta": 0,
            "explica": "Las alturas estándar son 12, 15 y 18 cm para adaptarse al peralte de la losa."
          },
          {
            "q": "¿Qué largo tienen las bovedillas?",
            "opciones": [
              "1 metro",
              "50 centímetros",
              "2 metros",
              "3 metros"
            ],
            "correcta": 0,
            "explica": "El largo estándar de las bovedillas es de 1 metro, lo que facilita su manipulación y transporte."
          }
        ]
      },
      {
        "nivel": 2,
        "nombre": "Intermedio",
        "objetivo": "Beneficios y técnica",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "¿Cuál es el principal beneficio de usar bovedillas de EPS vs hormigón de relleno?",
            "opciones": [
              "Reducen la carga sobre la estructura",
              "Aumentan la resistencia del hormigón",
              "Disminuyen el costo de la mano de obra",
              "Mejoran la adherencia con las viguetas"
            ],
            "correcta": 0,
            "explica": "Las bovedillas de EPS son ultralivianas, lo que reduce la carga estructural y permite usar menos hierro y hormigón."
          },
          {
            "q": "¿Qué aislamiento proporcionan las bovedillas de EPS?",
            "opciones": [
              "Aislamiento térmico y acústico",
              "Aislamiento térmico y contra incendios",
              "Aislamiento acústico y contra impactos",
              "Aislamiento contra la humedad y el vapor"
            ],
            "correcta": 0,
            "explica": "El EPS actúa como barrera contra el calor, el frío y el ruido, mejorando el confort y la eficiencia energética."
          },
          {
            "q": "¿Las bovedillas generan escombros o polvo?",
            "opciones": [
              "No generan escombros ni polvo",
              "Sí, producen bastante polvo",
              "Generan escombros pesados",
              "Son muy sucias y dejan residuos"
            ],
            "correcta": 0,
            "explica": "Las bovedillas de EPS son limpias, no desprenden polvo ni generan escombros, y los recortes se pueden reutilizar."
          },
          {
            "q": "¿Se pueden cortar las bovedillas para adaptarlas?",
            "opciones": [
              "Sí, se cortan fácilmente para adaptarse a remates o ajustes de obra",
              "No, las bovedillas no se pueden cortar porque pierden su capacidad de encastre y aislación",
              "Se cortan con amoladora y disco de corte, pero solo en obra cuando el cliente lo solicita",
              "El corte de las bovedillas requiere un permiso especial del fabricante y no se hace en obra"
            ],
            "correcta": 0,
            "explica": "Se cortan fácilmente para adaptarse a remates o ajustes de obra."
          },
          {
            "q": "¿Qué complementos se venden con las bovedillas?",
            "opciones": [
              "Viguetas, mallas y cemento",
              "Pinturas y selladores",
              "Griferías y accesorios",
              "Chapas y aislantes"
            ],
            "correcta": 0,
            "explica": "Para completar la losa se necesitan viguetas, mallas de acero y cemento para la capa de compresión."
          }
        ]
      },
      {
        "nivel": 3,
        "nombre": "Experto",
        "objetivo": "Argumento de venta",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "Un cliente dice que las bovedillas de EPS son solo 'telgopor' y desconfía. ¿Cómo respondés?",
            "opciones": [
              "Aligeran la estructura, aíslan y la inversión se recupera en ahorro",
              "Son solo telgopor, no sirven para losas",
              "No aíslan nada, solo aligeran",
              "Son más caras que el hormigón de relleno"
            ],
            "correcta": 0,
            "explica": "Las bovedillas de EPS reducen el peso de la losa, mejoran el aislamiento y el ahorro en materiales y energía compensa el costo."
          },
          {
            "q": "¿Cuál es el argumento para que un cliente elija bovedillas de EPS sobre las cerámicas?",
            "opciones": [
              "Son más livianas, aislantes y fáciles de cortar",
              "Son más resistentes a la compresión y duran más",
              "Tienen mejor comportamiento ante el fuego y el agua",
              "Son más económicas y se consiguen en todos lados"
            ],
            "correcta": 0,
            "explica": "Las bovedillas de EPS pesan menos, aíslan mejor y se trabajan con facilidad, a diferencia de las cerámicas."
          },
          {
            "q": "¿Cómo encajan las bovedillas entre las viguetas?",
            "opciones": [
              "Encastran perfectamente por sus medidas calibradas (43 o 50 cm de ancho)",
              "Se fijan con adhesivo de contacto entre las viguetas",
              "Se atornillan directamente a la vigueta de hormigón",
              "Se apoyan sin ajuste y luego se rellenan los huecos"
            ],
            "correcta": 0,
            "explica": "Sus medidas están calibradas para encastrar perfectamente entre viguetas Tensolite."
          },
          {
            "q": "¿Cómo la inversión en bovedillas de EPS se recupera económicamente?",
            "opciones": [
              "Ahorro en hormigón, mano de obra y consumo energético",
              "Se recupera solo con el ahorro en transporte",
              "Se recupera únicamente por la rapidez de colocación",
              "Se recupera al reducir el costo de pintura final"
            ],
            "correcta": 0,
            "explica": "La inversión se recupera por el ahorro en hormigón (menos peso estructural), la mano de obra (instalación veloz) y el menor consumo energético futuro de la vivienda."
          },
          {
            "q": "¿Qué venta cruzada completa ofrecés cuando un cliente pide bovedillas?",
            "opciones": [
              "Viguetas Tensolite, mallas de acero y cemento",
              "Solo bovedillas y adhesivo para fijarlas",
              "Cemento, arena y cal para el contrapiso",
              "Hierro, mallas y arena para la carpeta"
            ],
            "correcta": 0,
            "explica": "Las bovedillas requieren viguetas, mallas y cemento para completar la losa."
          }
        ]
      },
      {
        "nivel": 4,
        "nombre": "Manejo de Objeciones y Casos Prácticos",
        "objetivo": "Atención al cliente y rebatimiento de objeciones comerciales",
        "aprobar": 90,
        "preguntas": [
          {
            "q": "Un cliente dice: \"El albañil me pidió Bovedillas EPS, pero me ofrecen una marca alternativa más barata. ¿Vale la pena la diferencia?\"",
            "opciones": [
              "Sí, Bovedillas EPS tiene certificación IRAM y calidad garantizada.",
              "No, todas las bovedillas son iguales, no hay diferencia de calidad.",
              "Sí, pero solo si la marca alternativa tiene la misma densidad.",
              "No, es mejor usar bovedillas de hormigón para mayor resistencia."
            ],
            "correcta": 0,
            "explica": "La certificación IRAM asegura que el producto cumple normas de calidad, evitando fisuras y fallas estructurales."
          },
          {
            "q": "El cliente insiste: \"No quiero gastar en complementos para Bovedillas EPS, ¿puedo obviarlos?\"",
            "opciones": [
              "No es recomendable. Los complementos aseguran el rendimiento y durabilidad.",
              "Sí, se pueden obviar sin afectar la resistencia final.",
              "Sí, pero solo si la obra es de un solo piso.",
              "Sí, siempre que se use más cantidad de bovedillas."
            ],
            "correcta": 0,
            "explica": "Los complementos como aditivos o fijaciones son necesarios para que la losa cumpla con las especificaciones técnicas y no falle."
          }
        ]
      }
    ]
  },
  {
    "id": "membranas",
    "producto": "Membranas Impermeabilizantes",
    "rubro": "Obra Gruesa",
    "icon": "fa-solid fa-shield-halved",
    "color": "#272e68",
    "descripcion": "Protección contra filtraciones en techos y terrazas. Megaflex (Saint-Gobain).",
    "niveles": [
      {
        "nivel": 1,
        "nombre": "Básico",
        "objetivo": "Tipos de membranas",
        "aprobar": 70,
        "preguntas": [
          {
            "q": "¿Para qué sirven las membranas impermeabilizantes?",
            "opciones": [
              "Proteger techos y terrazas de filtraciones",
              "Pintar paredes con acabado impermeable",
              "Sellar juntas de cerámicos en pisos",
              "Aislar térmicamente cañerías de agua"
            ],
            "correcta": 0,
            "explica": "Las membranas impermeabilizantes están diseñadas para evitar que el agua se filtre en techos, terrazas y cubiertas planas."
          },
          {
            "q": "¿Qué marca de membranas trabaja Rosso?",
            "opciones": [
              "Megaflex (Saint-Gobain)",
              "Sika",
              "Weber",
              "Alba"
            ],
            "correcta": 0,
            "explica": "Rosso comercializa membranas impermeabilizantes de la marca Megaflex, perteneciente a Saint-Gobain."
          },
          {
            "q": "¿Cuáles son los 3 tipos de membranas que vendemos?",
            "opciones": [
              "Asfáltica, líquida y autoadhesiva",
              "Solo líquida y autoadhesiva",
              "Asfáltica y autoadhesiva",
              "Solo asfáltica en rollo"
            ],
            "correcta": 0,
            "explica": "El manual detalla tres tipos: asfáltica en rollo, líquida y autoadhesiva."
          },
          {
            "q": "¿Cómo se aplica la membrana asfáltica en rollo?",
            "opciones": [
              "Con soplete, fundiéndola sobre la superficie",
              "Con rodillo y pincel, como si fuera pintura asfáltica",
              "Se adhiere con adhesivo de contacto en frío, sin necesidad de calor",
              "Se fija con clavos y listones de madera sobre la losa existente"
            ],
            "correcta": 0,
            "explica": "La membrana asfáltica en rollo se aplica con soplete (calor)."
          },
          {
            "q": "¿Qué membrana es ideal para reparaciones rápidas?",
            "opciones": [
              "La autoadhesiva, se pega en frío",
              "La asfáltica, que requiere calor para su correcta colocación",
              "La líquida, que se aplica con pincel o rodillo en varias manos",
              "La geotextil, que es transitable y se puede pintar encima"
            ],
            "correcta": 0,
            "explica": "La autoadhesiva se pega en frío, ideal para reparaciones rápidas de filtraciones."
          }
        ]
      },
      {
        "nivel": 2,
        "nombre": "Intermedio",
        "objetivo": "Diferencias y aplicación",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "¿Qué diferencia hay entre membrana con aluminio y con geotextil?",
            "opciones": [
              "Con aluminio: reflectante, no transitable. Con geotextil: transitable, pintable.",
              "Con aluminio: transitable, no reflectante. Con geotextil: reflectante, no pintable.",
              "Con aluminio: no reflectante, pintable. Con geotextil: reflectante, no transitable.",
              "Con aluminio: transitable y pintable. Con geotextil: reflectante y no transitable."
            ],
            "correcta": 0,
            "explica": "La membrana con aluminio refleja el calor y no soporta tránsito, mientras que la de geotextil permite caminar sobre ella y puede pintarse."
          },
          {
            "q": "¿Qué se debe hacer antes de aplicar cualquier membrana?",
            "opciones": [
              "Secar, limpiar y reparar grietas; usar imprimación",
              "Humectar la superficie y esperar que seque",
              "Aplicar una capa de pintura al agua",
              "Sellar con silicona y dejar secar 24 horas"
            ],
            "correcta": 0,
            "explica": "La superficie debe estar seca, limpia y firme, con grietas reparadas e imprimación asfáltica para mejorar adherencia."
          },
          {
            "q": "¿Para qué sirve la imprimación asfáltica?",
            "opciones": [
              "Mejora la adherencia y el rendimiento de la membrana",
              "Sirve para sellar grietas antes de aplicar la membrana",
              "Se usa para dar color y uniformidad a la superficie",
              "Reemplaza a la membrana en superficies pequeñas"
            ],
            "correcta": 0,
            "explica": "La imprimación asfáltica mejora notablemente la adherencia y el rendimiento de cualquier tipo de membrana."
          },
          {
            "q": "¿Cuándo conviene usar membrana líquida?",
            "opciones": [
              "Para superficies irregulares y reparaciones",
              "Para losas expuestas de gran tamaño",
              "Solo para interiores y pisos",
              "No se usa en techos ni terrazas"
            ],
            "correcta": 0,
            "explica": "La membrana líquida es ideal para superficies irregulares, detalles o reparaciones, aplicándose con pincel o rodillo."
          },
          {
            "q": "¿Qué complementos se venden con las membranas?",
            "opciones": [
              "Imprimación, pintura asfáltica, rodillo, soplete, garrafa, selladores y venda elástica",
              "Pincel, rodillo, sellador y cinta de papel",
              "Soplete, garrafa, pintura y cinta aisladora",
              "Imprimación, sellador, rodillo y cinta de enmascarar"
            ],
            "correcta": 0,
            "explica": "El manual lista estos complementos como venta adicional para la correcta aplicación de membranas."
          }
        ]
      },
      {
        "nivel": 3,
        "nombre": "Experto",
        "objetivo": "Diagnóstico y venta",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "Un cliente tiene filtraciones en la terraza. ¿Qué membrana le recomendás?",
            "opciones": [
              "Membrana asfáltica con geotextil + imprimación",
              "Membrana con aluminio reflectante",
              "Solo pintura impermeabilizante",
              "Cinta asfáltica para juntas"
            ],
            "correcta": 0,
            "explica": "La membrana con geotextil es transitable y la imprimación mejora la adherencia."
          },
          {
            "q": "Un cliente necesita reparar una grieta puntual en el techo. ¿Qué le ofrecés?",
            "opciones": [
              "Membrana autoadhesiva",
              "Membrana asfáltica con soplete",
              "Membrana líquida en todo el techo",
              "Sellador de silicona común"
            ],
            "correcta": 0,
            "explica": "Para grietas puntuales, la autoadhesiva se pega en frío y es rápida de aplicar."
          },
          {
            "q": "¿Qué tipo de membrana es la más robusta para una losa expuesta?",
            "opciones": [
              "La membrana asfáltica en rollo",
              "La membrana autoadhesiva en frío",
              "La membrana líquida de aplicación con rodillo",
              "La pintura asfáltica fría para superficies irregulares"
            ],
            "correcta": 0,
            "explica": "La membrana asfáltica en rollo es la más robusta, ideal para losas expuestas."
          },
          {
            "q": "Un cliente quiere impermeabilizar una medianera. ¿Qué le ofrecés?",
            "opciones": [
              "Membrana líquida, fácil de aplicar en vertical",
              "Membrana asfáltica con soplete, ideal para verticales",
              "Pintura común para exteriores, suficiente",
              "Cinta asfáltica autoadhesiva, para toda la superficie"
            ],
            "correcta": 0,
            "explica": "La membrana líquida se aplica con pincel o rodillo, lo que facilita su uso en superficies verticales como medianeras."
          },
          {
            "q": "¿Cuál es la venta cruzada completa para impermeabilización?",
            "opciones": [
              "Membrana, imprimación, selladores, venda y herramientas",
              "Membrana y pintura asfáltica",
              "Solo membrana y soplete",
              "Imprimación y rodillo"
            ],
            "correcta": 0,
            "explica": "La venta cruzada completa incluye la membrana, imprimación asfáltica, selladores, venda elástica y herramientas de aplicación para asegurar una correcta instalación."
          }
        ]
      },
      {
        "nivel": 4,
        "nombre": "Manejo de Objeciones y Casos Prácticos",
        "objetivo": "Atención al cliente y rebatimiento de objeciones comerciales",
        "aprobar": 90,
        "preguntas": [
          {
            "q": "Un cliente dice: \"El albañil me pidió Membranas Impermeabilizantes, pero me ofrecen una marca alternativa más barata. ¿Vale la pena la diferencia?\"",
            "opciones": [
              "Sí, tiene certificación IRAM y calidad que evita fallas futuras.",
              "No, cualquier marca similar cumple la misma función.",
              "Sí, pero solo si el cliente pide la marca más cara.",
              "No, la diferencia de precio no justifica la compra."
            ],
            "correcta": 0,
            "explica": "La certificación IRAM garantiza que el producto cumple estándares de calidad que previenen fisuras y fallas estructurales."
          },
          {
            "q": "El cliente insiste: \"No quiero gastar en complementos para Membranas Impermeabilizantes, ¿puedo obviarlos?\"",
            "opciones": [
              "No es recomendable, los complementos aseguran el rendimiento y la durabilidad.",
              "Sí, podés omitirlos sin afectar la calidad del trabajo.",
              "Sí, pero solo si la superficie está completamente seca.",
              "Podés reemplazarlos con productos caseros de limpieza."
            ],
            "correcta": 0,
            "explica": "Los complementos como imprimación y aditivos mejoran la adherencia y evitan fallas prematuras en la membrana."
          }
        ]
      }
    ]
  },
  {
    "id": "aislantes",
    "producto": "Aislantes Térmicos",
    "rubro": "Obra Gruesa",
    "icon": "fa-solid fa-temperature-low",
    "color": "#272e68",
    "descripcion": "Lana de vidrio Isover y membranas aislantes con aluminio para techos y paredes.",
    "niveles": [
      {
        "nivel": 1,
        "nombre": "Básico",
        "objetivo": "Tipos de aislantes",
        "aprobar": 70,
        "preguntas": [
          {
            "q": "¿Cuáles son los dos tipos principales de aislantes que vendemos?",
            "opciones": [
              "Lana de vidrio y membrana con aluminio",
              "Lana de vidrio y membrana asfáltica",
              "Membrana de polietileno y lana mineral",
              "Poliestireno expandido y membrana con aluminio"
            ],
            "correcta": 0,
            "explica": "El manual indica que vendemos lana de vidrio y membrana aislante de espuma con aluminio."
          },
          {
            "q": "¿Dónde se coloca la lana de vidrio?",
            "opciones": [
              "Entre tabiques, cielorrasos o techos",
              "En el contrapiso, bajo las cerámicas",
              "En la junta de los caños de agua",
              "En el interior de las paredes exteriores"
            ],
            "correcta": 0,
            "explica": "La lana de vidrio se instala en espacios como tabiques, cielorrasos o techos para aislar térmica y acústicamente."
          },
          {
            "q": "¿Qué espesores de lana de vidrio están disponibles?",
            "opciones": [
              "50, 80 y 100 mm",
              "Solo 5 mm",
              "Solo 200 mm",
              "No viene en diferentes espesores"
            ],
            "correcta": 0,
            "explica": "Los espesores disponibles son 50, 80 y 100 mm, y a mayor espesor, mejor aislamiento."
          },
          {
            "q": "¿Para qué sirve la membrana aislante con aluminio?",
            "opciones": [
              "Refleja el calor y aísla bajo techos de chapa o teja.",
              "Impermeabiliza cimientos y evita humedad ascendente.",
              "Decora techos con acabado brillante y moderno.",
              "Pinta paredes para mejorar el aislamiento térmico."
            ],
            "correcta": 0,
            "explica": "La membrana se instala bajo techos de chapa o teja para reflejar el calor solar y aislar con la espuma."
          },
          {
            "q": "¿La lana de vidrio es inflamable?",
            "opciones": [
              "No, es incombustible",
              "Sí, arde con facilidad",
              "Solo si está húmeda",
              "Depende del espesor"
            ],
            "correcta": 0,
            "explica": "La lana de vidrio es un material incombustible que no propaga el fuego."
          }
        ]
      },
      {
        "nivel": 2,
        "nombre": "Intermedio",
        "objetivo": "Cuándo usar cada tipo",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "¿Cuándo conviene lana de vidrio y cuándo membrana con aluminio?",
            "opciones": [
              "Lana para paredes/cielorrasos; membrana para techos",
              "La membrana se coloca en paredes y la lana de vidrio se usa en techos, invirtiendo los usos recomendados",
              "Ambos productos son intercambiables y rinden igual en cualquier tipo de superficie, sin distinción",
              "La lana de vidrio es ideal para techos y la membrana con aluminio se reserva para paredes"
            ],
            "correcta": 0,
            "explica": "La lana de vidrio ofrece mayor aislamiento en paredes y cielorrasos, mientras que la membrana es liviana y reflectiva, ideal para techos."
          },
          {
            "q": "¿Se pueden usar combinadas?",
            "opciones": [
              "Sí, se pueden combinar",
              "No, son incompatibles",
              "Solo se usa una a la vez",
              "No conviene mezclarlas"
            ],
            "correcta": 0,
            "explica": "Combinar lana de vidrio con membrana aislante optimiza el aislamiento térmico y acústico."
          },
          {
            "q": "¿Qué espesores tiene la membrana aislante con aluminio?",
            "opciones": [
              "5 y 10 mm",
              "50 y 100 mm",
              "1 y 2 mm",
              "3 y 8 mm"
            ],
            "correcta": 0,
            "explica": "La membrana aislante con aluminio se comercializa en espesores de 5 mm y 10 mm."
          },
          {
            "q": "¿Cómo funciona el aluminio de la membrana aislante?",
            "opciones": [
              "Refleja el calor hacia afuera y adentro",
              "Atrapa el calor en la espuma y lo libera lentamente hacia el interior",
              "Impide el paso del sonido y del calor a través de la espuma",
              "Conduce el calor al exterior a través de su superficie metálica"
            ],
            "correcta": 0,
            "explica": "El aluminio refleja el calor solar hacia afuera y el calor interior hacia adentro, logrando aislación por radiación."
          },
          {
            "q": "¿Qué complementos se venden con los aislantes?",
            "opciones": [
              "Malla sostén, alambre, film y cinta de aluminio",
              "Clavos, tornillos y fijaciones plásticas",
              "Pintura asfáltica y sellador de juntas",
              "Cemento de fraguado rápido y arena"
            ],
            "correcta": 0,
            "explica": "Son los accesorios necesarios para instalar lana de vidrio en techos, según el manual."
          }
        ]
      },
      {
        "nivel": 3,
        "nombre": "Experto",
        "objetivo": "Asesoramiento integral",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "Un cliente tiene un techo de chapa y en verano es un horno. ¿Qué le ofrecés?",
            "opciones": [
              "Membrana aislante con aluminio bajo la chapa",
              "Colocar lana de vidrio sobre la chapa, que es lo más efectivo para techos",
              "Aplicar pintura reflectiva en la chapa para disminuir el calor",
              "Instalar un sistema de ventilación forzada en el techo para aliviar el calor"
            ],
            "correcta": 0,
            "explica": "La membrana con aluminio refleja el calor solar y es ideal bajo techos de chapa."
          },
          {
            "q": "Un cliente construye tabiques de drywall y quiere aislamiento acústico. ¿Qué le recomendás?",
            "opciones": [
              "Lana de vidrio entre los montantes",
              "Membrana con aluminio adentro del tabique",
              "Solo pintura acústica en las placas",
              "Nada, el yeso ya aísla solo"
            ],
            "correcta": 0,
            "explica": "La lana de vidrio es el material indicado para aislar acústicamente tabiques de drywall."
          },
          {
            "q": "¿Cuál es el argumento de venta de la lana de vidrio para el ahorro energético?",
            "opciones": [
              "Mantiene la casa fresca en verano y cálida en invierno, reduciendo el consumo de energía.",
              "Evita que el calor salga en verano y entre en invierno, pero no afecta el consumo.",
              "Solo reduce el ruido entre ambientes, sin influir en la temperatura interior.",
              "Funciona únicamente en techos, no en paredes, por lo que el ahorro es mínimo."
            ],
            "correcta": 0,
            "explica": "La lana de vidrio aísla térmicamente, manteniendo la temperatura interior estable y reduciendo la necesidad de climatización."
          },
          {
            "q": "¿Qué complementos específicos necesita la lana de vidrio para paredes de drywall?",
            "opciones": [
              "Placas de yeso, perfiles y tornillos",
              "Malla sostén, alambre y film",
              "Cemento, arena y cal",
              "Pintura, rodillo y thinner"
            ],
            "correcta": 0,
            "explica": "Para instalar lana de vidrio en drywall se necesitan placas de yeso, perfiles metálicos y tornillos para fijar el sistema."
          },
          {
            "q": "¿Qué beneficio tiene la membrana aislante frente a la humedad?",
            "opciones": [
              "Resiste la humedad",
              "No tolera el agua",
              "Absorbe la humedad",
              "Se daña con el sol"
            ],
            "correcta": 0,
            "explica": "La membrana de espuma con aluminio es resistente a la humedad, ideal para aplicación bajo techos."
          }
        ]
      },
      {
        "nivel": 4,
        "nombre": "Manejo de Objeciones y Casos Prácticos",
        "objetivo": "Atención al cliente y rebatimiento de objeciones comerciales",
        "aprobar": 90,
        "preguntas": [
          {
            "q": "Un cliente dice: \"El albañil me pidió Aislantes Térmicos, pero me ofrecen una marca alternativa más barata. ¿Vale la pena la diferencia?\"",
            "opciones": [
              "Sí, tienen norma IRAM y calidad garantizada.",
              "No importa la marca, todos los productos de obra gruesa son iguales.",
              "Conviene comprar siempre lo más barato sin mirar la calidad.",
              "Le recomendás que no use ningún material y deje la pared como está."
            ],
            "correcta": 0,
            "explica": "La norma IRAM asegura que el material cumple estándares de calidad que previenen fallas estructurales."
          },
          {
            "q": "El cliente insiste: \"No quiero gastar en complementos para Aislantes Térmicos, ¿puedo obviarlos?\"",
            "opciones": [
              "No es recomendable: los complementos aseguran rendimiento y durabilidad.",
              "Sí, se pueden obviar sin afectar el resultado final.",
              "Solo si la obra es provisoria o de bajo presupuesto.",
              "Depende: en climas cálidos no hacen falta."
            ],
            "correcta": 0,
            "explica": "Los complementos son necesarios para que el aislante cumpla su función y dure en el tiempo."
          }
        ]
      }
    ]
  },
  {
    "id": "chapas-lisas",
    "producto": "Chapas Lisas",
    "rubro": "Obra Gruesa",
    "icon": "fa-solid fa-square",
    "color": "#272e68",
    "descripcion": "Láminas de acero planas Ternium para construcción, herrería e industria.",
    "niveles": [
      {
        "nivel": 1,
        "nombre": "Básico",
        "objetivo": "Tipos y usos",
        "aprobar": 70,
        "preguntas": [
          {
            "q": "¿Qué son las chapas lisas?",
            "opciones": [
              "Láminas de acero planas",
              "Chapas onduladas para techos",
              "Bloques de hormigón para muros",
              "Placas de yeso para interiores"
            ],
            "correcta": 0,
            "explica": "Las chapas lisas son láminas de acero con superficie plana, sin ondulaciones ni nervaduras."
          },
          {
            "q": "¿Qué marca de chapas trabaja Rosso?",
            "opciones": [
              "Ternium",
              "Holcim",
              "Gerdau",
              "Tensolite"
            ],
            "correcta": 0,
            "explica": "Trabajamos chapas marca Ternium."
          },
          {
            "q": "¿Cuáles son las dos formas de laminado?",
            "opciones": [
              "Laminado en caliente y laminado en frío",
              "El laminado en caliente y el laminado en tibio",
              "El laminado en frío y el laminado en templado",
              "El laminado en caliente y el laminado en templado"
            ],
            "correcta": 0,
            "explica": "Las dos formas son: laminado en caliente (más de 900°C) y laminado en frío (temperatura ambiente)."
          },
          {
            "q": "¿Qué medidas tienen las chapas lisas?",
            "opciones": [
              "1x2 m y 1,22x2,44 m",
              "0,5x1 m y 1x2 m",
              "2x3 m y 1,5x3 m",
              "1x1 m y 2x2 m"
            ],
            "correcta": 0,
            "explica": "Las medidas estándar de las chapas lisas son 1x2 m y 1,22x2,44 m."
          },
          {
            "q": "¿Para qué sectores se usan las chapas lisas?",
            "opciones": [
              "Construcción, herrería, industria automotriz y maquinaria",
              "Techos, revestimientos y estructuras",
              "Muebles, portones y electrodomésticos",
              "Carrocerías, refuerzos y piezas industriales"
            ],
            "correcta": 0,
            "explica": "Las chapas lisas se aplican en construcción, herrería, industria automotriz y fabricación de maquinaria, según el manual."
          }
        ]
      },
      {
        "nivel": 2,
        "nombre": "Intermedio",
        "objetivo": "Diferencias entre laminados",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "¿Qué caracteriza al laminado en caliente?",
            "opciones": [
              "Alta temperatura, maleable, rugoso y económico",
              "Mayor precisión y mejor terminación",
              "Proceso en frío, muy resistente",
              "Acabado fino, mayor costo"
            ],
            "correcta": 0,
            "explica": "El laminado en caliente se realiza a más de 900°C, lo que lo hace más maleable, con acabado rugoso y más económico."
          },
          {
            "q": "¿Qué caracteriza al laminado en frío?",
            "opciones": [
              "Mayor precisión, mejor terminación, más resistente y mayor costo",
              "Acabado rugoso, más económico, ideal para estructuras",
              "Menor precisión, terminación estándar, costo intermedio",
              "Mayor maleabilidad, acabado fino, menor resistencia"
            ],
            "correcta": 0,
            "explica": "El laminado en frío se realiza a temperatura ambiente, lo que otorga mayor precisión y mejor acabado superficial, además de mayor resistencia, aunque incrementa el costo."
          },
          {
            "q": "¿Qué significa 'a mayor número de calibre, más fina es la chapa'?",
            "opciones": [
              "Un calibre 27 es más fina que un calibre 25",
              "Un calibre 27 es más gruesa que un calibre 25",
              "El calibre indica el ancho, no el espesor",
              "A mayor calibre, mayor espesor de la chapa"
            ],
            "correcta": 0,
            "explica": "En chapas, el número de calibre es inversamente proporcional al espesor: a mayor número, menor espesor."
          },
          {
            "q": "¿Cuándo conviene recomendar laminado en frío?",
            "opciones": [
              "Para acabados finos",
              "Para estructuras pesadas",
              "Para herrería común",
              "Para portones grandes"
            ],
            "correcta": 0,
            "explica": "El laminado en frío ofrece mejor terminación superficial, ideal para productos que requieren acabado fino."
          },
          {
            "q": "¿Cuándo conviene recomendar laminado en caliente?",
            "opciones": [
              "Para estructuras metálicas, construcción, vigas, portones y maquinaria pesada",
              "Para carrocerías y refuerzos automotrices",
              "Para muebles metálicos con acabado fino",
              "Para piezas de precisión en electrodomésticos"
            ],
            "correcta": 0,
            "explica": "El laminado en caliente es más maleable y económico, ideal para estructuras y maquinaria pesada."
          }
        ]
      },
      {
        "nivel": 3,
        "nombre": "Experto",
        "objetivo": "Asesoramiento profesional",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "Un herrero necesita chapa para hacer un portón. ¿Qué le recomendás?",
            "opciones": [
              "Chapa lisa laminada en caliente",
              "Chapa lisa laminada en frío, que tiene mejor terminación superficial",
              "Chapa acanalada galvanizada, que es más resistente a la corrosión",
              "Chapa de aluminio lisa, que es más liviana y no se oxida"
            ],
            "correcta": 0,
            "explica": "El laminado en caliente es más maleable y económico, ideal para herrería."
          },
          {
            "q": "Un fabricante de muebles metálicos necesita chapas. ¿Qué le vendés?",
            "opciones": [
              "Chapa lisa laminada en frío",
              "Chapa lisa laminada en caliente",
              "Chapa acanalada galvanizada",
              "Chapa trapezoidal de acero"
            ],
            "correcta": 0,
            "explica": "Para muebles metálicos se recomienda laminado en frío por su precisión y mejor terminación superficial."
          },
          {
            "q": "¿Qué complementos vendés junto con chapas lisas?",
            "opciones": [
              "Discos de corte, electrodos, pintura antióxido y tornillos",
              "Solo pintura antióxido",
              "Griferías y bovedillas",
              "Tornillos y clavos para madera"
            ],
            "correcta": 0,
            "explica": "Los complementos típicos para chapas lisas incluyen discos de corte, electrodos, pintura antióxido y tornillos."
          },
          {
            "q": "Un cliente pregunta qué calibre es más resistente: 20 o 25. ¿Qué respondés?",
            "opciones": [
              "El calibre 20 es más grueso y resistente",
              "El calibre 25 es más grueso y resistente",
              "Ambos calibres tienen el mismo espesor",
              "El calibre 20 es más fino que el 25"
            ],
            "correcta": 0,
            "explica": "A menor número de calibre, mayor espesor y resistencia."
          },
          {
            "q": "¿Para qué tipo de trabajo se usa la chapa lisa en zinguería?",
            "opciones": [
              "Canaletas, bajadas y revestimientos",
              "Techos con ondulaciones",
              "Estructuras de hormigón",
              "Pisos industriales"
            ],
            "correcta": 0,
            "explica": "En zinguería se usa para canaletas, bajadas de agua y revestimientos metálicos."
          }
        ]
      },
      {
        "nivel": 4,
        "nombre": "Manejo de Objeciones y Casos Prácticos",
        "objetivo": "Atención al cliente y rebatimiento de objeciones comerciales",
        "aprobar": 90,
        "preguntas": [
          {
            "q": "Un cliente dice: \"El albañil me pidió Chapas Lisas, pero me ofrecen una marca alternativa más barata. ¿Vale la pena la diferencia?\"",
            "opciones": [
              "Sí, la certificación IRAM garantiza calidad y evita fallas.",
              "No, todas las chapas lisas son iguales, no hay diferencia.",
              "Sí, pero solo si la alternativa es más barata, conviene.",
              "No, la marca no influye en la resistencia del material."
            ],
            "correcta": 0,
            "explica": "La certificación IRAM asegura que el material cumple normas de calidad, reduciendo riesgos de fisuras o fallas estructurales."
          },
          {
            "q": "El cliente insiste: \"No quiero gastar en complementos para Chapas Lisas, ¿puedo obviarlos?\"",
            "opciones": [
              "No es recomendable, los complementos aseguran su rendimiento y durabilidad.",
              "Sí, podés obviarlos sin afectar el resultado final.",
              "Sí, pero solo si usás agua de la canilla en la mezcla.",
              "Podés reemplazarlos por tierra del patio sin problemas."
            ],
            "correcta": 0,
            "explica": "Los complementos son esenciales para que las chapas lisas cumplan su función y duren en obra."
          }
        ]
      }
    ]
  },
  {
    "id": "chapas-techos",
    "producto": "Chapas para Techos",
    "rubro": "Obra Gruesa",
    "icon": "fa-solid fa-house-chimney",
    "color": "#272e68",
    "descripcion": "Chapas sinusoidales y trapezoidales Ternium: galvanizadas, cincalum y prepintadas.",
    "niveles": [
      {
        "nivel": 1,
        "nombre": "Básico",
        "objetivo": "Tipos y recubrimientos",
        "aprobar": 70,
        "preguntas": [
          {
            "q": "¿Qué formas de chapas para techos vendemos?",
            "opciones": [
              "Sinusoidal y trapezoidal",
              "Plana y acanalada",
              "Redonda y cuadrada",
              "Triangular y hexagonal, con bordes reforzados para mayor rigidez"
            ],
            "correcta": 0,
            "explica": "Las chapas para techos se presentan en dos formas principales: sinusoidal (ondulada) y trapezoidal (T101 y similares)."
          },
          {
            "q": "¿Cuáles son los tipos de recubrimiento disponibles?",
            "opciones": [
              "Galvanizada, cincalum, prepintada y traslúcida",
              "Galvanizada, cincalum y prepintada",
              "Galvanizada, cincalum y traslúcida",
              "Galvanizada, prepintada y traslúcida"
            ],
            "correcta": 0,
            "explica": "Son los cuatro recubrimientos que ofrecemos: galvanizada (zinc), cincalum (aluminio+zinc), prepintada (colores) y traslúcida (luz natural)."
          },
          {
            "q": "¿Qué recubrimiento ofrece la mayor durabilidad?",
            "opciones": [
              "Cincalum/aluminizada",
              "La galvanizada es la más resistente a la corrosión y dura más que cualquier otra opción del mercado.",
              "La prepintada con color estándar ofrece la misma protección que la cincalum pero con mejor estética.",
              "Las chapas sin recubrimiento son las más económicas y duran lo mismo que las tratadas."
            ],
            "correcta": 0,
            "explica": "El cincalum (aluminio + zinc) ofrece mayor durabilidad que la galvanizada básica."
          },
          {
            "q": "¿Para qué sirven las chapas traslúcidas?",
            "opciones": [
              "Permiten el paso de luz natural",
              "Aíslan del frío y del calor",
              "Impermeabilizan la cubierta",
              "Solo tienen uso decorativo"
            ],
            "correcta": 0,
            "explica": "Las chapas traslúcidas de poliéster o fibra de vidrio dejan pasar la luz natural, ideal para iluminar sin ventanas."
          },
          {
            "q": "¿Qué calibres de chapas para techos están disponibles?",
            "opciones": [
              "C25 y C27",
              "C10 y C30",
              "C50 y C75",
              "C20 y C40"
            ],
            "correcta": 0,
            "explica": "Los calibres disponibles son C25 (0,50 mm) y C27 (0,40 mm), donde menor número indica mayor espesor."
          }
        ]
      },
      {
        "nivel": 2,
        "nombre": "Intermedio",
        "objetivo": "Especificaciones técnicas",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "¿Por qué es importante retirar el film protector de las chapas prepintadas apenas se instalan?",
            "opciones": [
              "Se adhiere al sol y arruina la estética",
              "Protege la pintura de la lluvia",
              "Evita que se oxide el acero",
              "Se retira solo con el tiempo"
            ],
            "correcta": 0,
            "explica": "El film protector se adhiere con el calor del sol y daña la apariencia, por eso debe quitarse de inmediato."
          },
          {
            "q": "¿Por qué hay que barrer la chapa después de colocarla?",
            "opciones": [
              "Para quitar virutas o restos metálicos que podrían oxidarse y manchar la chapa",
              "Porque así se evita que se acumule polvo y se vea sucia",
              "Para que la pintura se seque más rápido y quede brillante",
              "Solo si el cliente lo pide, no es obligatorio"
            ],
            "correcta": 0,
            "explica": "Las virutas metálicas del corte pueden oxidarse y manchar permanentemente la chapa."
          },
          {
            "q": "¿Las chapas prepintadas pueden dejarse apiladas a la intemperie?",
            "opciones": [
              "No, la humedad daña la pintura",
              "Sí, se pueden dejar sin problema porque el recubrimiento protege el acero",
              "Solo si no llueve, porque el agua puede generar óxido superficial",
              "Depende del espesor de la chapa y del tipo de pintura utilizada"
            ],
            "correcta": 0,
            "explica": "Las chapas prepintadas no deben apilarse a la intemperie porque la humedad entre ellas daña la pintura."
          },
          {
            "q": "Si un cliente busca durabilidad y resistencia, ¿qué chapa recomendás?",
            "opciones": [
              "Cincalum o prepintada en calibre 25",
              "La galvanizada calibre 27 es la más resistente y duradera de todas",
              "La traslúcida de poliéster es ideal para climas con mucha lluvia",
              "La prepintada en calibre 27 ofrece mayor protección que la calibre 25"
            ],
            "correcta": 0,
            "explica": "Para máxima durabilidad: cincalum o prepintada en calibre C25 (0,50 mm, más grueso)."
          },
          {
            "q": "¿Qué complementos se venden con las chapas?",
            "opciones": [
              "Tornillos autoperforantes, cumbreras, canaletas y aislantes",
              "Clavos para madera, cabios y tirantes",
              "Adhesivos, pintura y selladores",
              "Caballetes, limahoyas y bajadas"
            ],
            "correcta": 0,
            "explica": "Los complementos típicos para techos de chapa incluyen tornillos autoperforantes, cumbreras, canaletas y aislantes, que aseguran una correcta instalación y durabilidad."
          }
        ]
      },
      {
        "nivel": 3,
        "nombre": "Experto",
        "objetivo": "Asesoramiento de venta",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "Un cliente quiere un techo económico y funcional. ¿Qué le recomendás?",
            "opciones": [
              "Chapa galvanizada",
              "Chapa prepintada premium",
              "Solo membrana asfáltica",
              "Tejas de barro importadas"
            ],
            "correcta": 0,
            "explica": "La galvanizada es la opción más económica y funcional para techos básicos."
          },
          {
            "q": "Un cliente quiere un techo con estética y colores. ¿Qué le vendés?",
            "opciones": [
              "Chapa prepintada",
              "Chapa galvanizada",
              "Chapa cincalum",
              "Chapa traslúcida"
            ],
            "correcta": 0,
            "explica": "La prepintada ofrece variedad de colores y protección extra sobre el recubrimiento base."
          },
          {
            "q": "Un galpón necesita luz natural sin ventanas. ¿Qué solución ofrecés?",
            "opciones": [
              "Intercalar chapas traslúcidas en el techo",
              "Aplicar chapas prepintadas en color blanco para reflejar la luz solar",
              "Usar chapas cincalum con acabado brillante que iluminen el interior",
              "Colocar chapas galvanizadas pulidas para que actúen como espejos de luz"
            ],
            "correcta": 0,
            "explica": "Las chapas traslúcidas dejan pasar la luz natural y se intercalan entre las comunes."
          },
          {
            "q": "¿Qué venta cruzada completa ofrecés con las chapas de techo?",
            "opciones": [
              "Tornillos, cumbreras, canaletas, aislante y selladores",
              "Clavos, membrana, pintura y perfiles",
              "Tornillos, membrana, canaletas y pintura",
              "Clavos, cumbreras, aislante y pintura"
            ],
            "correcta": 0,
            "explica": "La venta cruzada incluye los elementos necesarios para una instalación completa y duradera del techo."
          },
          {
            "q": "¿Qué regla de calibre aplica a las chapas?",
            "opciones": [
              "A menor número de calibre, mayor espesor y resistencia.",
              "A mayor número de calibre, mayor espesor y resistencia.",
              "El calibre no influye en el espesor ni en la resistencia.",
              "Todos los calibres tienen el mismo espesor y resistencia."
            ],
            "correcta": 0,
            "explica": "En las chapas, el calibre es inversamente proporcional al espesor: C25 (0,50 mm) es más gruesa y resistente que C27 (0,40 mm)."
          }
        ]
      },
      {
        "nivel": 4,
        "nombre": "Manejo de Objeciones y Casos Prácticos",
        "objetivo": "Atención al cliente y rebatimiento de objeciones comerciales",
        "aprobar": 90,
        "preguntas": [
          {
            "q": "Un cliente dice: \"El albañil me pidió Chapas para Techos, pero me ofrecen una marca alternativa más barata. ¿Vale la pena la diferencia?\"",
            "opciones": [
              "Sí, la calidad certificada evita fisuras y fallas estructurales.",
              "No importa la marca, todos los productos de obra gruesa son iguales.",
              "Conviene comprar siempre lo más barato sin mirar la calidad.",
              "Le recomendás que no use ningún material y deje la pared como está."
            ],
            "correcta": 0,
            "explica": "Las chapas con certificación IRAM garantizan resistencia y durabilidad, evitando problemas futuros."
          },
          {
            "q": "El cliente insiste: \"No quiero gastar en complementos para Chapas para Techos, ¿puedo obviarlos?\"",
            "opciones": [
              "No es recomendable, los complementos garantizan el rendimiento y durabilidad.",
              "Sí, son solo para decorar y no afectan el resultado.",
              "Sí, podés usar agua común en cualquier proporción.",
              "Sí, podés reemplazarlos con tierra o arena del lugar."
            ],
            "correcta": 0,
            "explica": "Los complementos aseguran la correcta instalación y protección del producto, evitando fallas prematuras."
          }
        ]
      }
    ]
  },
  {
    "id": "herramientas",
    "producto": "Herramientas y Consumibles",
    "rubro": "Ferretería",
    "icon": "fa-solid fa-screwdriver-wrench",
    "color": "#ec6434",
    "descripcion": "Discos de corte Norton y electrodos para soldadura.",
    "niveles": [
      {
        "nivel": 1,
        "nombre": "Básico",
        "objetivo": "Tipos de discos y electrodos",
        "aprobar": 70,
        "preguntas": [
          {
            "q": "¿Para qué sirven los discos diamantados?",
            "opciones": [
              "Para cortar cerámica, porcelanato, ladrillos y hormigón",
              "Para cortar hierro y acero",
              "Para cortar madera y aglomerados",
              "Para pulir metales y plásticos"
            ],
            "correcta": 0,
            "explica": "Los discos diamantados están reforzados con partículas de diamante, lo que les permite cortar materiales duros como cerámica, porcelanato, ladrillos y hormigón."
          },
          {
            "q": "¿Qué marca de discos trabaja Rosso?",
            "opciones": [
              "Norton",
              "Holcim",
              "Ferrum",
              "Tensolite"
            ],
            "correcta": 0,
            "explica": "Rosso comercializa discos de corte de la marca Norton, perteneciente a Saint-Gobain."
          },
          {
            "q": "¿Qué tipo de electrodo es el más versátil para herrería general?",
            "opciones": [
              "E6013",
              "E7018",
              "E6010",
              "E6011"
            ],
            "correcta": 0,
            "explica": "El E6013 es el más versátil y fácil de usar para herrería general."
          },
          {
            "q": "¿En qué medidas vienen los discos de corte?",
            "opciones": [
              "115 mm y 230 mm",
              "50 mm y 100 mm",
              "150 mm y 300 mm",
              "Solo 125 mm"
            ],
            "correcta": 0,
            "explica": "Las medidas estándar de los discos de corte son 115 mm para uso general y 230 mm para cortes más largos."
          },
          {
            "q": "¿Por qué evitar discos genéricos de baja calidad?",
            "opciones": [
              "Se gastan rápido, cortan mal y son peligrosos",
              "Son más baratos y rinden igual",
              "Tienen mayor duración y precisión",
              "Son más seguros y eficientes"
            ],
            "correcta": 0,
            "explica": "Los discos genéricos se gastan rápido, cortan mal y presentan mayor riesgo de roturas o desprendimientos."
          }
        ]
      },
      {
        "nivel": 2,
        "nombre": "Intermedio",
        "objetivo": "Electrodos especializados",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "¿Para qué sirve el electrodo E7018 (Básico)?",
            "opciones": [
              "Alta resistencia mecánica, conservar seco",
              "Para herrería liviana y trabajos cotidianos",
              "Para soldar caños con alta penetración",
              "Para cortar chapa con amoladora"
            ],
            "correcta": 0,
            "explica": "El E7018 es un electrodo básico con alta resistencia mecánica, ideal para estructuras críticas, y debe mantenerse seco."
          },
          {
            "q": "¿Qué electrodo tiene alta penetración para soldaduras exigentes?",
            "opciones": [
              "E6010 / E6011",
              "E6013 es el más versátil y fácil de usar para herrería general",
              "E7018 es un electrodo básico con alta resistencia mecánica",
              "E6012 es el que se usa para trabajos de mantenimiento liviano"
            ],
            "correcta": 0,
            "explica": "Los E6010/E6011 tienen alta penetración, útiles en soldaduras exigentes, caños o reparaciones."
          },
          {
            "q": "¿Qué pasa si se mojan los electrodos E7018?",
            "opciones": [
              "Pierden sus propiedades y pueden generar soldaduras defectuosas",
              "Funcionan mejor mojados porque mejoran la conductividad",
              "No pasa nada, se pueden usar igual",
              "Se secan solos y quedan como nuevos"
            ],
            "correcta": 0,
            "explica": "Los E7018 son sensibles a la humedad: mojados generan soldaduras defectuosas."
          },
          {
            "q": "¿Qué diferencia hay entre discos para metal y discos diamantados?",
            "opciones": [
              "Los de metal son abrasivos; los diamantados tienen diamante para materiales duros.",
              "Los diamantados se usan para cortar metal y los de metal para materiales blandos como madera o plástico.",
              "Los de metal son ideales para cortar cerámica y los diamantados para cortar hierro y acero.",
              "La diferencia principal es que los diamantados cortan más rápido, pero los de metal duran más tiempo en uso continuo."
            ],
            "correcta": 0,
            "explica": "Los discos de metal usan óxido de aluminio, mientras que los diamantados incorporan partículas de diamante para cortar materiales duros como cerámica u hormigón."
          },
          {
            "q": "¿Qué ventajas ofrecen las marcas reconocidas de discos?",
            "opciones": [
              "Más cortes por disco, velocidad, precisión y seguridad",
              "Son más baratas que las genéricas",
              "Tienen menos rendimiento que las genéricas",
              "Ofrecen mayor garantía pero cortan peor"
            ],
            "correcta": 0,
            "explica": "Las marcas reconocidas brindan mayor rendimiento, velocidad, precisión y seguridad en comparación con las genéricas."
          }
        ]
      },
      {
        "nivel": 3,
        "nombre": "Experto",
        "objetivo": "Asesoramiento técnico",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "Un cliente va a cortar porcelanato. ¿Qué disco le vendés?",
            "opciones": [
              "Disco diamantado",
              "Disco para metal",
              "Disco de lija",
              "Disco de corte universal"
            ],
            "correcta": 0,
            "explica": "El disco diamantado es el indicado para porcelanato, ya que sus partículas de diamante permiten cortes precisos sin dañar el material."
          },
          {
            "q": "Un herrero te pide electrodos para una reja común. ¿Cuál le recomendás?",
            "opciones": [
              "E6013 Punta Azul",
              "E7018 básico",
              "E6010 alta penetración",
              "E6011 para caños"
            ],
            "correcta": 0,
            "explica": "El E6013 es el más versátil y fácil de usar, ideal para herrería general."
          },
          {
            "q": "Un constructor necesita cortar hierros y ladrillos. ¿Qué discos le vendés?",
            "opciones": [
              "Discos abrasivos para metal y diamantados para ladrillos",
              "Un disco abrasivo para cortar los hierros y otro abrasivo para cortar los ladrillos",
              "Un disco diamantado para cortar los hierros y otro diamantado para cortar los ladrillos",
              "Un disco abrasivo para cortar los ladrillos y un disco diamantado para cortar los hierros"
            ],
            "correcta": 0,
            "explica": "El disco abrasivo corta metal y el diamantado corta ladrillos, son específicos para cada material."
          },
          {
            "q": "Un cliente va a soldar una estructura metálica crítica. ¿Qué electrodo le recomendás?",
            "opciones": [
              "E7018 (Básico)",
              "E6013 (Punta Azul)",
              "E6010 de alta penetración",
              "E6011 para caños"
            ],
            "correcta": 0,
            "explica": "El E7018 es el indicado para estructuras críticas por su alta resistencia mecánica y bajo hidrógeno."
          },
          {
            "q": "¿Cuál es la venta cruzada cuando vendés discos de corte?",
            "opciones": [
              "Amoladora, lentes, guantes y disco de repuesto",
              "Cemento, arena y cal",
              "Pintura y thinner",
              "Martillo y clavos"
            ],
            "correcta": 0,
            "explica": "La venta cruzada incluye la herramienta, protección personal y repuestos para completar el trabajo."
          }
        ]
      },
      {
        "nivel": 4,
        "nombre": "Manejo de Objeciones y Casos Prácticos",
        "objetivo": "Atención al cliente y rebatimiento de objeciones comerciales",
        "aprobar": 90,
        "preguntas": [
          {
            "q": "Un cliente pregunta: \"¿Por qué esta herramienta o insumo para Herramientas y Consumibles cuesta más que uno genérico de supermercado?\"",
            "opciones": [
              "Porque ofrece mayor durabilidad y seguridad para uso profesional.",
              "Porque la marca es reconocida y tiene más demanda.",
              "Porque incluye accesorios adicionales en el paquete.",
              "Porque tiene un diseño más moderno y atractivo."
            ],
            "correcta": 0,
            "explica": "Los materiales profesionales están hechos con componentes de alta resistencia que prolongan su vida útil y reducen riesgos de accidentes."
          },
          {
            "q": "Cliente en mostrador: \"¿Puedo usar la misma herramienta o consumible de Herramientas y Consumibles para otro material totalmente distinto?\"",
            "opciones": [
              "No se recomienda, cada insumo es para su material específico.",
              "Se puede usar en cualquier material, aunque el rendimiento sea menor.",
              "Sí, siempre que la herramienta o consumible esté en buen estado.",
              "Es posible, pero solo si el material a cortar es más blando que el original."
            ],
            "correcta": 0,
            "explica": "Usar el consumible o herramienta correcta evita daños y accidentes."
          }
        ]
      }
    ]
  },
  {
    "id": "herrajes",
    "producto": "Herrajes",
    "rubro": "Ferretería",
    "icon": "fa-solid fa-gears",
    "color": "#ec6434",
    "descripcion": "Bisagras, cerraduras, manijas, picaportes y carros corredizos. Marca Ri-Al-Pa.",
    "niveles": [
      {
        "nivel": 1,
        "nombre": "Básico",
        "objetivo": "Tipos de herrajes",
        "aprobar": 70,
        "preguntas": [
          {
            "q": "¿Qué son los herrajes?",
            "opciones": [
              "Piezas para abrir, cerrar y asegurar puertas y ventanas",
              "Elementos para fijar revestimientos en paredes",
              "Accesorios para conectar caños de agua",
              "Materiales para aislar techos y muros"
            ],
            "correcta": 0,
            "explica": "Los herrajes son piezas clave que permiten abrir, cerrar, trabar y asegurar puertas y ventanas."
          },
          {
            "q": "¿Qué marca de herrajes trabaja Rosso?",
            "opciones": [
              "Ri-Al-Pa",
              "Ferretería Tucumán",
              "Alba",
              "San Lorenzo"
            ],
            "correcta": 0,
            "explica": "La marca de herrajes que ofrece Rosso es Ri-Al-Pa."
          },
          {
            "q": "¿Qué tipos de cerraduras vendemos?",
            "opciones": [
              "Interior y exterior con cilindro",
              "De seguridad sin cilindro, para uso interior",
              "Con llave y pasador, para puertas de madera",
              "De embutir y de sobreponer, con llave plana"
            ],
            "correcta": 0,
            "explica": "Ofrecemos cerraduras simples para interior y de seguridad con cilindro para exterior."
          },
          {
            "q": "¿Para qué sirven los carros corredizos?",
            "opciones": [
              "Para puertas corredizas",
              "Para puertas que se abren hacia afuera",
              "Para puertas que se pliegan en acordeón",
              "Para asegurar puertas de ingreso principal"
            ],
            "correcta": 0,
            "explica": "Los carros corredizos se usan en puertas corredizas para un desplazamiento suave y duradero."
          },
          {
            "q": "¿Qué complementos se venden con los herrajes?",
            "opciones": [
              "Puertas, ventanas, tornillos y fijaciones",
              "Pintura, selladores y barnices",
              "Cemento, cal y arena",
              "Ladrillos, bloques y cerámicos"
            ],
            "correcta": 0,
            "explica": "Los herrajes se complementan con puertas, ventanas, tornillos y fijaciones adecuados."
          }
        ]
      },
      {
        "nivel": 2,
        "nombre": "Intermedio",
        "objetivo": "Función y calidad",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "¿Por qué una buena bisagra es importante?",
            "opciones": [
              "Asegura un abrir y cerrar sin esfuerzo y dura muchos años",
              "Solo cumple una función decorativa en la puerta",
              "Su calidad no influye en el uso diario de la puerta",
              "Todas las bisagras ofrecen el mismo rendimiento"
            ],
            "correcta": 0,
            "explica": "Una buena bisagra garantiza un movimiento suave y resistente, prolongando la vida útil de la puerta."
          },
          {
            "q": "¿Qué tipo de cerradura protege mejor el hogar?",
            "opciones": [
              "Cerradura exterior de seguridad",
              "Cerradura interior simple para uso diario",
              "Candado de combinación para exterior",
              "Picaporte de baño con pasador de seguridad"
            ],
            "correcta": 0,
            "explica": "La cerradura exterior de seguridad con cilindro ofrece mayor protección y resistencia."
          },
          {
            "q": "¿Cómo influye la manija en la puerta?",
            "opciones": [
              "Le da personalidad y estilo",
              "Solo cumple una función práctica",
              "No influye en la estética",
              "Su diseño no es relevante"
            ],
            "correcta": 0,
            "explica": "Una manija bien elegida le da personalidad a la puerta además de cumplir su función."
          },
          {
            "q": "¿Para qué tipos de puertas se usan bisagras de libro?",
            "opciones": [
              "Para puertas de interior y exterior",
              "Se usan únicamente en puertas de interior, no en exteriores",
              "Son exclusivas para puertas de seguridad con cilindro",
              "Se emplean en puertas corredizas y ventanas de aluminio"
            ],
            "correcta": 0,
            "explica": "Las bisagras de libro permiten el movimiento de apertura en puertas de interior y exterior."
          },
          {
            "q": "¿Qué argumento clave usás para vender herrajes de calidad?",
            "opciones": [
              "No se ven tanto como la puerta, pero se sienten",
              "Son un accesorio decorativo sin impacto en el uso",
              "Cualquier marca ofrece la misma durabilidad",
              "Su calidad solo afecta la estética de la puerta"
            ],
            "correcta": 0,
            "explica": "Los herrajes no se ven tanto como la puerta, pero se sienten: una buena bisagra y cerradura marcan la diferencia en el uso diario."
          }
        ]
      },
      {
        "nivel": 3,
        "nombre": "Experto",
        "objetivo": "Venta consultiva",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "Un cliente compra una puerta de exterior. ¿Qué herrajes le ofrecés?",
            "opciones": [
              "Cerradura de seguridad con cilindro, bisagras resistentes y manijón exterior",
              "Picaporte simple con bisagras comunes",
              "Bisagras de interior y cerradura simple",
              "Carro corredizo con guía y manija interior"
            ],
            "correcta": 0,
            "explica": "La puerta exterior requiere mayor seguridad y resistencia, por eso se ofrecen cerradura de seguridad, bisagras resistentes y manijón exterior."
          },
          {
            "q": "Un cliente quiere una puerta corrediza. ¿Qué herrajes necesita?",
            "opciones": [
              "Carro corredizo con guía, tirador y tope",
              "Bisagras de libro",
              "Cerradura de 3 puntos",
              "Solo un candado"
            ],
            "correcta": 0,
            "explica": "Para una puerta corrediza se necesita el sistema de carro y guía, más el tirador y el tope para el correcto funcionamiento."
          },
          {
            "q": "¿Cómo combinás la venta de herrajes con otros productos?",
            "opciones": [
              "Ofrecer bisagras, cerraduras, manijas y tornillos al vender puertas o ventanas",
              "Vender solo la puerta y que el cliente busque los herrajes aparte",
              "Sugerir únicamente la cerradura y la manija, sin bisagras ni tornillos",
              "Recomendar herrajes solo si el cliente los pide, sin ofrecerlos de forma proactiva"
            ],
            "correcta": 0,
            "explica": "La venta complementaria consiste en ofrecer todos los herrajes necesarios (bisagras, cerraduras, manijas y fijaciones) al vender puertas o ventanas, para completar la instalación."
          },
          {
            "q": "Un cliente quiere renovar la apariencia de sus puertas sin cambiarlas. ¿Qué le proponés?",
            "opciones": [
              "Cambiar manijas, picaportes y cerraduras",
              "Pintar las puertas con esmalte sintético",
              "Colocar burletes en los marcos",
              "Instalar mirillas y cadenas de seguridad"
            ],
            "correcta": 0,
            "explica": "Renovar los herrajes visibles transforma el look de la puerta sin necesidad de reemplazarla, con un costo bajo."
          },
          {
            "q": "¿Qué le decís a un cliente que quiere la cerradura más barata?",
            "opciones": [
              "La seguridad no es donde ahorrar: una buena cerradura protege y dura más.",
              "Todas las cerraduras ofrecen la misma protección, así que elige la más económica.",
              "La más barata es suficiente si la instalas bien, no hace falta gastar de más.",
              "Si buscas ahorrar, la cerradura básica cumple igual que una de seguridad."
            ],
            "correcta": 0,
            "explica": "La seguridad es prioritaria: una cerradura de calidad protege el hogar y tiene mayor durabilidad."
          }
        ]
      },
      {
        "nivel": 4,
        "nombre": "Manejo de Objeciones y Casos Prácticos",
        "objetivo": "Atención al cliente y rebatimiento de objeciones comerciales",
        "aprobar": 90,
        "preguntas": [
          {
            "q": "Un cliente pregunta: \"¿Por qué esta herramienta o insumo para Herrajes cuesta más que uno genérico de supermercado?\"",
            "opciones": [
              "Porque soporta uso intensivo y dura más.",
              "Porque la marca es reconocida y confiable.",
              "Porque tiene mejor presentación y packaging.",
              "Porque es importado y paga más impuestos."
            ],
            "correcta": 0,
            "explica": "Los herrajes profesionales usan materiales de alta resistencia y toleran un uso continuo sin desgaste prematuro."
          },
          {
            "q": "Cliente en mostrador: \"¿Puedo usar la misma herramienta o consumible de Herrajes para otro material totalmente distinto?\"",
            "opciones": [
              "No se recomienda, cada insumo está optimizado para su superficie específica.",
              "Sí, sirve para absolutamente todo tipo de material.",
              "Sí, las herramientas no tienen especificaciones técnicas.",
              "Solo si se moja antes de usarlo en otro material."
            ],
            "correcta": 0,
            "explica": "Usar el consumible o herramienta correcta evita desportilladuras, accidentes y roturas prematuras."
          }
        ]
      }
    ]
  },
  {
    "id": "fijaciones",
    "producto": "Fijaciones (Tarugos y Tornillos)",
    "rubro": "Ferretería",
    "icon": "fa-solid fa-thumbtack",
    "color": "#ec6434",
    "descripcion": "Tarugos para drywall, ladrillo hueco y tornillos multipropósito. Marca TEL.",
    "niveles": [
      {
        "nivel": 1,
        "nombre": "Básico",
        "objetivo": "Tipos de fijaciones",
        "aprobar": 70,
        "preguntas": [
          {
            "q": "¿Por qué no se deben usar tarugos comunes en placas de yeso (drywall)?",
            "opciones": [
              "Porque deben trabarse detrás de la placa",
              "Porque el yeso es muy frágil y se rompe",
              "Porque los comunes no tienen punta",
              "Porque el yeso no soporta ningún peso"
            ],
            "correcta": 0,
            "explica": "Los tarugos comunes no se expanden detrás de la placa, por eso se usan especiales que traban."
          },
          {
            "q": "¿Qué marca de fijaciones trabaja Rosso?",
            "opciones": [
              "TEL",
              "Holcim",
              "Weber",
              "Ferrum"
            ],
            "correcta": 0,
            "explica": "Trabajamos fijaciones marca TEL."
          },
          {
            "q": "¿Qué tipo de tarugos se usan en ladrillo hueco?",
            "opciones": [
              "Tarugos de nylon con aletas",
              "Tarugos comunes de plástico",
              "Clavos comunes de acero",
              "Tarugos autoperforantes de metal"
            ],
            "correcta": 0,
            "explica": "Para ladrillo hueco se usan tarugos de nylon con aletas que se expanden dentro de la pared, o químicos para cargas pesadas."
          },
          {
            "q": "¿Qué son los tornillos autoperforantes hexagonales?",
            "opciones": [
              "Tornillos con punta mecha y cabeza hexagonal para unir metales",
              "Tornillos para madera con cabeza avellanada",
              "Clavos con arandela para fijar chapas",
              "Tornillos de plástico para paredes huecas"
            ],
            "correcta": 0,
            "explica": "Los autoperforantes hexagonales perforan y fijan chapas o perfiles metálicos sin pre-agujero."
          },
          {
            "q": "¿Qué es un Tel Fix?",
            "opciones": [
              "Tornillo multipropósito para madera, yeso o metal",
              "Un adhesivo de montaje rápido que se aplica con pistola",
              "Una herramienta para colocar tarugos de expansión",
              "Un tipo de anclaje químico que se usa con resina"
            ],
            "correcta": 0,
            "explica": "El Tel Fix es un tornillo multipropósito apto para madera, yeso o metal."
          }
        ]
      },
      {
        "nivel": 2,
        "nombre": "Intermedio",
        "objetivo": "Selección correcta",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "¿Cuándo se usan tarugos químicos?",
            "opciones": [
              "Para cargas pesadas en ladrillo hueco",
              "Para fijar objetos livianos en yeso",
              "Para unir chapas y perfiles metálicos",
              "Para colgar cuadros en pared sólida"
            ],
            "correcta": 0,
            "explica": "Los tarugos químicos combinan resina y varilla roscada, ideales para soportar cargas pesadas en ladrillo hueco."
          },
          {
            "q": "¿Qué tipos de tarugos para drywall existen?",
            "opciones": [
              "Autoperforantes, basculantes y de expansión, en plástico o metal",
              "Solo autoperforantes de plástico",
              "Solo basculantes metálicos",
              "De expansión únicamente en nylon"
            ],
            "correcta": 0,
            "explica": "Para drywall se usan tarugos que traban detrás de la placa: autoperforantes, basculantes y de expansión, disponibles en plástico o metal."
          },
          {
            "q": "¿Qué complementos se venden con tarugos para ladrillo hueco?",
            "opciones": [
              "Tornillos, mechas, taladro y pistola aplicadora",
              "Tarugos, tornillos y taladro percutor",
              "Mechas, brocas y fijaciones químicas",
              "Pistola aplicadora y tornillos autorroscantes"
            ],
            "correcta": 0,
            "explica": "Los complementos para tarugos de ladrillo hueco incluyen tornillos, mechas, taladro y pistola aplicadora para los químicos."
          },
          {
            "q": "Un cliente quiere colgar un cuadro pesado en pared de yeso. ¿Qué le vendés?",
            "opciones": [
              "Tarugo basculante o de expansión metálico para drywall",
              "Tarugo de nylon con aletas para ladrillo hueco, que se expande dentro de la pared",
              "Tornillo autoperforante hexagonal para unir chapas o perfiles metálicos, con punta mecha",
              "Tarugo común de plástico para pared sólida, que no traba en placas de yeso"
            ],
            "correcta": 0,
            "explica": "Para cargas pesadas en drywall se necesita un tarugo que se trabe por detrás de la placa, como el basculante o el de expansión metálico."
          },
          {
            "q": "¿Por qué es clave elegir la fijación correcta?",
            "opciones": [
              "Para evitar roturas y desprendimientos",
              "Para que el precio sea más bajo",
              "Porque todas sirven igual",
              "Para que la pared no se manche"
            ],
            "correcta": 0,
            "explica": "Elegir la fijación correcta evita roturas, desprendimientos y posibles accidentes."
          }
        ]
      },
      {
        "nivel": 3,
        "nombre": "Experto",
        "objetivo": "Asesoramiento integral",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "Un cliente quiere colgar un TV de 50\" en pared de ladrillo hueco. ¿Qué le recomendás?",
            "opciones": [
              "Tarugos químicos con varilla roscada",
              "Clavos comunes de acero para fijar el soporte",
              "Tarugo plástico de expansión para uso liviano",
              "Cinta adhesiva de doble faz para colgar el televisor"
            ],
            "correcta": 0,
            "explica": "Para cargas pesadas en ladrillo hueco, los tarugos químicos con resina y varilla roscada brindan la fijación más segura."
          },
          {
            "q": "Un instalador necesita fijar chapas a perfiles metálicos. ¿Qué tornillo le vendés?",
            "opciones": [
              "Autoperforante hexagonal con punta mecha",
              "Tornillo TEL Fix con cabeza fresada para madera y metal",
              "Tarugo de expansión de nylon con aletas para ladrillo hueco",
              "Clavo de acero templado con cabeza plana para fijaciones livianas"
            ],
            "correcta": 0,
            "explica": "El autoperforante hexagonal con punta mecha perfora y fija en un solo paso, ideal para chapa y perfiles metálicos."
          },
          {
            "q": "¿Qué venta cruzada hacés al vender tarugos?",
            "opciones": [
              "Tornillos, mechas y taladro",
              "Solo los tarugos",
              "Pintura y lijas",
              "Griferías y accesorios"
            ],
            "correcta": 0,
            "explica": "Al vender tarugos, se complementa con tornillos compatibles, mechas del diámetro correcto y taladro para la instalación."
          },
          {
            "q": "Un cliente no sabe qué tipo de pared tiene. ¿Cómo lo ayudás?",
            "opciones": [
              "Preguntale si suena hueco al golpear y recomendá el tarugo acorde",
              "Decile que no importa el tipo de pared y que cualquier tarugo de la línea TEL funciona bien",
              "Sugerile que use clavos comunes en lugar de tarugos, ya que son más seguros para cualquier pared",
              "Indicale que use cinta adhesiva de doble cara para colgar objetos livianos sin necesidad de perforar"
            ],
            "correcta": 0,
            "explica": "Golpear la pared ayuda a identificar si es hueca o maciza para elegir el tarugo correcto."
          },
          {
            "q": "¿Cuál es la regla de oro de las fijaciones?",
            "opciones": [
              "Cada pared y carga requiere su fijación específica",
              "Un tarugo universal es suficiente para todo tipo de paredes y cargas",
              "La fijación más cara siempre garantiza la mejor sujeción en cualquier superficie",
              "Cualquier tarugo del mismo diámetro aguanta el mismo peso sin importar la pared"
            ],
            "correcta": 0,
            "explica": "La regla de oro es que no existe una fijación universal: hay que elegir según el tipo de pared y la carga a soportar."
          }
        ]
      },
      {
        "nivel": 4,
        "nombre": "Manejo de Objeciones y Casos Prácticos",
        "objetivo": "Atención al cliente y rebatimiento de objeciones comerciales",
        "aprobar": 90,
        "preguntas": [
          {
            "q": "Un cliente pregunta: \"¿Por qué esta herramienta o insumo para Fijaciones (Tarugos y Tornillos) cuesta más que uno genérico de supermercado?\"",
            "opciones": [
              "Porque es para uso profesional e intensivo, con materiales de alta resistencia y mayor durabilidad.",
              "Porque la marca es reconocida y eso encarece el producto, pero rinde igual.",
              "Porque incluye accesorios extras que no vienen en el genérico.",
              "Porque tiene un diseño más moderno, aunque su función es la misma."
            ],
            "correcta": 0,
            "explica": "Los productos profesionales están fabricados con materiales de mayor calidad y tolerancias más estrictas, lo que garantiza un mejor rendimiento y seguridad en trabajos exigentes."
          },
          {
            "q": "Cliente en mostrador: \"¿Puedo usar la misma herramienta o consumible de Fijaciones (Tarugos y Tornillos) para otro material totalmente distinto?\"",
            "opciones": [
              "No se recomienda, cada insumo es para su superficie específica.",
              "Se puede, siempre que el tarugo sea de plástico y el tornillo sea autorroscante, no hay inconveniente.",
              "Es posible usarlo en cualquier superficie si se perfora previamente con la mecha adecuada para cada material.",
              "No hay problema si se utiliza el mismo tipo de fijación en distintos materiales, ya que todas traban de forma similar."
            ],
            "correcta": 0,
            "explica": "Usar la fijación correcta evita daños al material y riesgos de seguridad."
          }
        ]
      }
    ]
  },
  {
    "id": "clavos",
    "producto": "Clavos",
    "rubro": "Ferretería",
    "icon": "fa-solid fa-hammer",
    "color": "#ec6434",
    "descripcion": "Clavos Punta París para carpintería y clavos de acero con cabeza de plomo para chapas.",
    "niveles": [
      {
        "nivel": 1,
        "nombre": "Básico",
        "objetivo": "Tipos de clavos",
        "aprobar": 70,
        "preguntas": [
          {
            "q": "¿Para qué sirven los clavos Punta París?",
            "opciones": [
              "Para carpintería fina",
              "Para fijar chapas de techo",
              "Para soldar metales",
              "Para pegar cerámicos"
            ],
            "correcta": 0,
            "explica": "Los Punta París son ideales para carpintería fina: molduras, zócalos y muebles."
          },
          {
            "q": "¿Para qué se usan los clavos de acero con cabeza de plomo?",
            "opciones": [
              "Para fijar chapas de techo sellando el orificio",
              "Para fijar chapas de techo sin sellar el orificio, dejando pasar el agua",
              "Para unir piezas de madera en trabajos de carpintería fina y molduras",
              "Para clavar en superficies de hormigón o mampostería con gran firmeza"
            ],
            "correcta": 0,
            "explica": "La cabeza de plomo sella el orificio al clavar, evitando filtraciones de agua."
          },
          {
            "q": "¿Qué marca de clavos trabaja Rosso?",
            "opciones": [
              "Gerdau",
              "Holcim",
              "Weber",
              "Ferrum"
            ],
            "correcta": 0,
            "explica": "Trabajamos clavos marca Gerdau."
          },
          {
            "q": "¿Por qué los Punta París tienen cabeza pequeña?",
            "opciones": [
              "Para que la fijación no se note",
              "Para que sean más económicos",
              "Para que no se oxiden",
              "Para que tengan mayor resistencia"
            ],
            "correcta": 0,
            "explica": "La cabeza pequeña permite una terminación prolija y discreta en carpintería."
          },
          {
            "q": "¿Cómo sella el orificio un clavo con cabeza de plomo?",
            "opciones": [
              "La cabeza de plomo se moldea al clavar y sella el agujero",
              "Se utiliza un sellador especial que se aplica sobre la cabeza del clavo antes de la fijación",
              "La punta del clavo se aplasta contra la chapa y cierra el paso del agua de forma permanente",
              "Se coloca una arandela de goma entre la cabeza del clavo y la chapa para impedir filtraciones"
            ],
            "correcta": 0,
            "explica": "La cabeza de plomo es moldeable y al clavar se deforma, cubriendo y sellando el orificio automáticamente."
          }
        ]
      },
      {
        "nivel": 2,
        "nombre": "Intermedio",
        "objetivo": "Aplicación correcta",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "¿Qué complementos se venden con los clavos de cabeza de plomo?",
            "opciones": [
              "Chapas, arandelas y martillos",
              "Cemento, cal y arena",
              "Tornillos y tarugos",
              "Pintura y thinner"
            ],
            "correcta": 0,
            "explica": "Son los complementos indicados para instalar chapas con clavos de cabeza de plomo."
          },
          {
            "q": "¿Los clavos de cabeza de plomo resisten la intemperie?",
            "opciones": [
              "Sí, tienen alta durabilidad frente a la intemperie",
              "No, porque el plomo se degrada con la humedad y el sol, perdiendo su capacidad de sellado",
              "Solo funcionan en interiores, ya que su recubrimiento se daña con el clima",
              "No resisten bien la intemperie, aunque son aptos para ambientes secos y cubiertos"
            ],
            "correcta": 0,
            "explica": "Los clavos de cabeza de plomo tienen alta durabilidad frente a la intemperie."
          },
          {
            "q": "¿Para qué tipo de trabajo son ideales los Punta París?",
            "opciones": [
              "Carpintería fina y fijaciones invisibles",
              "Fijar chapas pesadas en techos con cabeza de plomo que sella",
              "Trabajos de hormigón armado y estructuras de mampostería",
              "Unir piezas con soldadura y trabajos de herrería en general"
            ],
            "correcta": 0,
            "explica": "Los Punta París son clavos delgados con cabeza pequeña, pensados para que la fijación no quede visible, por eso se usan en carpintería fina."
          },
          {
            "q": "¿En qué variedad vienen los clavos Punta París?",
            "opciones": [
              "En distintos largos y grosores",
              "En un único calibre para uso general",
              "Disponibles exclusivamente en presentación por kilo",
              "Se fabrican en una sola medida fija para todo tipo de trabajo"
            ],
            "correcta": 0,
            "explica": "Los clavos Punta París se ofrecen en distintos largos y grosores para adaptarse a diferentes usos."
          },
          {
            "q": "Un techista necesita fijar chapas galvanizadas. ¿Qué le vendés?",
            "opciones": [
              "Clavos de acero con cabeza de plomo",
              "Clavos Punta París de acero",
              "Tornillos autorroscantes para chapa",
              "Clavos comunes con arandela de goma"
            ],
            "correcta": 0,
            "explica": "Los clavos con cabeza de plomo están diseñados para fijar chapas y sellar el orificio, evitando filtraciones."
          }
        ]
      },
      {
        "nivel": 3,
        "nombre": "Experto",
        "objetivo": "Venta consultiva",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "Un carpintero necesita fijar molduras sin que se noten los clavos. ¿Qué le ofrecés?",
            "opciones": [
              "Clavos Punta París",
              "Clavos de acero con cabeza de plomo",
              "Tornillos para madera con cabeza avellanada",
              "Clavos de acero con cabeza ancha"
            ],
            "correcta": 0,
            "explica": "Los Punta París tienen cabeza pequeña, ideales para una terminación discreta en molduras."
          },
          {
            "q": "¿Cuál es la venta cruzada al vender clavos para techos?",
            "opciones": [
              "Chapas, arandelas, aislante, cumbreras y martillos",
              "Clavos de acero, clavos punta París y martillos",
              "Pintura para interiores, cemento y arena",
              "Aislante térmico, pintura asfáltica y tornillos"
            ],
            "correcta": 0,
            "explica": "La venta cruzada incluye los complementarios que se usan junto con los clavos para techos."
          },
          {
            "q": "Un cliente pregunta si puede usar clavos comunes en chapas galvanizadas. ¿Qué le decís?",
            "opciones": [
              "No es recomendable: habrá filtraciones por los orificios",
              "Sí, son iguales, no hay problema",
              "Mejor usar tornillos comunes",
              "Cualquier clavo sirve para eso"
            ],
            "correcta": 0,
            "explica": "Los clavos comunes no sellan el orificio como los de cabeza de plomo, generando filtraciones."
          },
          {
            "q": "¿Cuándo recomendás tornillos autoperforantes en lugar de clavos de cabeza de plomo?",
            "opciones": [
              "En chapas sobre perfiles metálicos o si se necesita desmontar",
              "Cuando la chapa es muy gruesa y el clavo no entra",
              "Solo si el cliente pide un acabado más prolijo",
              "En techos con mucha pendiente para evitar filtraciones"
            ],
            "correcta": 0,
            "explica": "Los autoperforantes se usan sobre perfiles metálicos y permiten desmontar, a diferencia de los clavos de cabeza de plomo."
          },
          {
            "q": "¿Qué clave de venta usás para los clavos de cabeza de plomo?",
            "opciones": [
              "Fijan y sellan en un solo paso",
              "Son los más económicos del mercado",
              "Tienen cabeza de acero inoxidable",
              "Se usan solo para madera fina"
            ],
            "correcta": 0,
            "explica": "La clave de venta es que fijan y sellan en un solo paso, con alta durabilidad frente a la intemperie."
          }
        ]
      },
      {
        "nivel": 4,
        "nombre": "Manejo de Objeciones y Casos Prácticos",
        "objetivo": "Atención al cliente y rebatimiento de objeciones comerciales",
        "aprobar": 90,
        "preguntas": [
          {
            "q": "Un cliente pregunta: \"¿Por qué esta herramienta o insumo para Clavos cuesta más que uno genérico de supermercado?\"",
            "opciones": [
              "Porque es para uso profesional, con materiales de alta resistencia y mayor durabilidad.",
              "Porque la marca cobra más, pero rinde igual que uno común.",
              "Porque incluye accesorios extra que no se usan en la mayoría de los trabajos.",
              "Porque tiene un diseño más moderno, aunque no mejora el rendimiento."
            ],
            "correcta": 0,
            "explica": "Los clavos profesionales tienen mejor calidad de acero y cabeza de plomo que sella mejor, lo que garantiza mayor durabilidad y seguridad."
          },
          {
            "q": "Cliente en mostrador: \"¿Puedo usar la misma herramienta o consumible de Clavos para otro material totalmente distinto?\"",
            "opciones": [
              "No se recomienda, cada uno es para su superficie.",
              "Sí, se puede usar en cualquier material sin problema.",
              "Sí, son universales y no requieren cuidados.",
              "Solo si se adapta con cinta o pegamento."
            ],
            "correcta": 0,
            "explica": "Usar el insumo correcto evita daños al material y riesgos de seguridad."
          }
        ]
      }
    ]
  },
  {
    "id": "ventilacion",
    "producto": "Ventilación (Rejillas)",
    "rubro": "Ferretería",
    "icon": "fa-solid fa-fan",
    "color": "#ec6434",
    "descripcion": "Rejillas fijas y regulables para renovación de aire. Obligatorias con artefactos a gas.",
    "niveles": [
      {
        "nivel": 1,
        "nombre": "Básico",
        "objetivo": "Importancia de la ventilación",
        "aprobar": 70,
        "preguntas": [
          {
            "q": "¿Por qué son obligatorias las rejillas cuando hay artefactos a gas?",
            "opciones": [
              "Para renovar el aire y evitar acumulación de gases",
              "Para mejorar la estética del ambiente y darle un toque decorativo",
              "Para reducir el ruido exterior y mantener la privacidad del hogar",
              "Para ahorrar energía en invierno manteniendo el calor dentro de la casa"
            ],
            "correcta": 0,
            "explica": "Las rejillas son obligatorias con artefactos a gas para renovar el aire y evitar acumulación de gases peligrosos."
          },
          {
            "q": "¿Qué marca de rejillas trabaja Rosso?",
            "opciones": [
              "Novo",
              "Holcim",
              "Ferrum",
              "Gerdau"
            ],
            "correcta": 0,
            "explica": "Trabajamos rejillas marca Novo."
          },
          {
            "q": "¿En qué materiales vienen las rejillas?",
            "opciones": [
              "Aluminio o chapa esmaltada",
              "Aluminio o chapa esmaltada con recubrimiento",
              "Plástico de alta resistencia",
              "Acero galvanizado"
            ],
            "correcta": 0,
            "explica": "Las rejillas se fabrican en aluminio o chapa esmaltada, materiales resistentes y aptos para ventilación."
          },
          {
            "q": "¿Qué problemas previene una buena ventilación?",
            "opciones": [
              "Condensación, moho, olores y riesgos por gases",
              "Solo malos olores y humedad",
              "Ningún problema, es opcional",
              "Solo evita el calor excesivo"
            ],
            "correcta": 0,
            "explica": "La ventilación adecuada previene condensación, moho, olores encerrados y riesgos por acumulación de gases."
          },
          {
            "q": "¿Cuándo hay que ofrecer rejillas al cliente?",
            "opciones": [
              "Al vender estufas, termotanques o calefones",
              "Solo si el cliente las solicita",
              "Nunca, son opcionales",
              "Solo con aire acondicionado"
            ],
            "correcta": 0,
            "explica": "Las rejillas son obligatorias con artefactos a gas, por eso hay que ofrecerlas al vender esos productos."
          }
        ]
      },
      {
        "nivel": 2,
        "nombre": "Intermedio",
        "objetivo": "Tipos y medidas",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "¿Qué tipos de rejillas vendemos?",
            "opciones": [
              "Fijas y regulables",
              "Fijas y de material plástico",
              "Regulables y de material plástico",
              "Fijas, regulables y de material plástico"
            ],
            "correcta": 0,
            "explica": "Vendemos rejillas fijas y regulables en distintos tamaños."
          },
          {
            "q": "¿Cuáles son las medidas estándar de rejillas?",
            "opciones": [
              "10×20, 15×15, 20×20 cm, entre otras",
              "Solo 5×5 cm",
              "Solo 50×50 cm",
              "No tienen medida estándar"
            ],
            "correcta": 0,
            "explica": "Medidas estándar: 10×20, 15×15, 20×20 cm, entre otras."
          },
          {
            "q": "¿Dónde se colocan las rejillas?",
            "opciones": [
              "En puertas, muros o techos y muebles",
              "Solo en ventanas o claraboyas",
              "Únicamente en pisos y zócalos",
              "Exclusivamente en paredes exteriores"
            ],
            "correcta": 0,
            "explica": "Las rejillas se instalan en puertas, muros, techos y también en muebles de cocina, baños y lavaderos para asegurar la circulación de aire."
          },
          {
            "q": "¿Qué complementos se venden con las rejillas?",
            "opciones": [
              "Tornillos, selladores o adhesivos",
              "Cemento y arena fina",
              "Pintura y thinner",
              "Masilla y cinta aisladora"
            ],
            "correcta": 0,
            "explica": "Son los elementos necesarios para fijar la rejilla a la superficie."
          },
          {
            "q": "¿Para qué sirve una rejilla regulable?",
            "opciones": [
              "Permite regular el paso de aire",
              "Permite que el aire circule en un solo sentido",
              "Se utiliza únicamente en ambientes interiores",
              "Es un accesorio decorativo que no afecta el flujo de aire"
            ],
            "correcta": 0,
            "explica": "La rejilla regulable permite abrir o cerrar el paso de aire según la necesidad del momento."
          }
        ]
      },
      {
        "nivel": 3,
        "nombre": "Experto",
        "objetivo": "Venta cruzada",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "Un cliente compra un calefón. ¿Qué rejillas le ofrecés?",
            "opciones": [
              "Rejilla de ventilación reglamentaria",
              "Un extractor de aire",
              "Una rejilla decorativa",
              "Un ventilador de techo"
            ],
            "correcta": 0,
            "explica": "Es obligatoria para la instalación segura del calefón."
          },
          {
            "q": "Un baño sin ventana necesita ventilación. ¿Qué le recomendás?",
            "opciones": [
              "Rejilla en puerta o muro y, si se puede, extractor",
              "Pintura antihumedad en las paredes del baño",
              "Desodorante de ambiente para disimular olores",
              "Nada, el baño no necesita ventilación extra"
            ],
            "correcta": 0,
            "explica": "Un baño sin ventana necesita renovar el aire para evitar humedad, moho y acumulación de gases; la rejilla permite circulación y el extractor la refuerza."
          },
          {
            "q": "¿Cuál es la consecuencia de no tener ventilación con artefactos a gas?",
            "opciones": [
              "Riesgo de intoxicación por monóxido de carbono",
              "Puede generar condensación y mal olor",
              "Aumenta la humedad y el moho",
              "No tiene consecuencias graves"
            ],
            "correcta": 0,
            "explica": "Sin ventilación adecuada, los artefactos a gas pueden producir monóxido de carbono, un gas tóxico que puede causar la muerte."
          },
          {
            "q": "¿En qué otro momento ofrecés rejillas además de con artefactos a gas?",
            "opciones": [
              "Para cocinas, baños ciegos, lavaderos y depósitos",
              "Solo con estufas y calefactores",
              "Cuando el cliente pide un extractor",
              "En ambientes con aire acondicionado"
            ],
            "correcta": 0,
            "explica": "Las rejillas se usan en ambientes sin ventilación natural, como baños ciegos, cocinas, lavaderos y depósitos."
          },
          {
            "q": "¿Qué argumento clave usás para vender rejillas?",
            "opciones": [
              "Más seguridad, menos humedad y mejor aire",
              "Evitan el ruido exterior y dan privacidad",
              "Reducen el consumo de energía del hogar",
              "Impiden la entrada de polvo y de insectos"
            ],
            "correcta": 0,
            "explica": "La ventilación adecuada previene la acumulación de gases, reduce la humedad y mejora la calidad del aire interior."
          }
        ]
      },
      {
        "nivel": 4,
        "nombre": "Manejo de Objeciones y Casos Prácticos",
        "objetivo": "Atención al cliente y rebatimiento de objeciones comerciales",
        "aprobar": 90,
        "preguntas": [
          {
            "q": "Un cliente pregunta: \"¿Por qué esta herramienta o insumo para Ventilación (Rejillas) cuesta más que uno genérico de supermercado?\"",
            "opciones": [
              "Porque tiene materiales de alta resistencia y mayor durabilidad.",
              "Porque la marca es reconocida y eso encarece el precio.",
              "Porque incluye accesorios extra que no necesitás.",
              "Porque el empaque es más grande y llamativo."
            ],
            "correcta": 0,
            "explica": "Las rejillas profesionales usan materiales más resistentes que soportan mejor el uso intensivo y garantizan seguridad."
          },
          {
            "q": "Cliente en mostrador: \"¿Puedo usar la misma herramienta o consumible de Ventilación (Rejillas) para otro material totalmente distinto?\"",
            "opciones": [
              "No se recomienda, cada insumo es para su superficie específica.",
              "Sí, sirve para cualquier material sin problema.",
              "Las herramientas no tienen especificaciones técnicas.",
              "Solo si se moja antes de usarlo en otro material."
            ],
            "correcta": 0,
            "explica": "Usar el consumible o herramienta correcta evita daños y accidentes."
          }
        ]
      }
    ]
  },
  {
    "id": "pinturas",
    "producto": "Pinturas",
    "rubro": "Ferretería",
    "icon": "fa-solid fa-brush",
    "color": "#ec6434",
    "descripcion": "Látex interior/exterior, esmaltes sintéticos y antióxidos. Marcas Quimex y Weber.",
    "niveles": [
      {
        "nivel": 1,
        "nombre": "Básico",
        "objetivo": "Tipos de pinturas",
        "aprobar": 70,
        "preguntas": [
          {
            "q": "¿Qué tipos de pintura vendemos?",
            "opciones": [
              "Látex interior, exterior, esmaltes y antióxidos",
              "Únicamente látex blanco",
              "Solo esmaltes al agua",
              "Nada más que antióxido"
            ],
            "correcta": 0,
            "explica": "Ofrecemos látex para interiores y exteriores, esmaltes sintéticos y antióxidos para metales."
          },
          {
            "q": "¿Para qué superficies se usa el esmalte sintético?",
            "opciones": [
              "Metales y maderas",
              "Paredes interiores",
              "Techos y cielorrasos",
              "Pisos de cerámica"
            ],
            "correcta": 0,
            "explica": "El esmalte sintético se usa sobre metales y maderas, no en superficies de obra."
          },
          {
            "q": "¿Qué es el antióxido?",
            "opciones": [
              "Base protectora para metales ferrosos antes del esmalte",
              "Capa de acabado que se aplica sobre el esmalte para darle brillo y protección extra",
              "Disolvente que se usa para limpiar brochas y diluir pinturas al agua o al solvente",
              "Material sellador que se coloca sobre la madera antes de pintar para evitar que se manche"
            ],
            "correcta": 0,
            "explica": "El antióxido se aplica sobre hierro o acero como preparación para evitar la oxidación antes de pintar."
          },
          {
            "q": "¿Qué diferencia al látex interior del exterior?",
            "opciones": [
              "Resiste la intemperie",
              "Es más caro que el interior",
              "Solo se usa en techos",
              "Tiene más colores"
            ],
            "correcta": 0,
            "explica": "El látex exterior está formulado para resistir sol, lluvia y hongos, a diferencia del interior."
          },
          {
            "q": "¿Con qué se diluye el esmalte sintético?",
            "opciones": [
              "Aguarrás",
              "Agua",
              "Alcohol",
              "Thinner"
            ],
            "correcta": 0,
            "explica": "El esmalte sintético se diluye con aguarrás porque es una pintura a base de solvente."
          }
        ]
      },
      {
        "nivel": 2,
        "nombre": "Intermedio",
        "objetivo": "Preparación de superficies",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "¿Cuál es la clave para que la pintura dure?",
            "opciones": [
              "Preparar bien la superficie antes de pintar",
              "Aplicar varias manos de pintura sin lijar",
              "Usar siempre pintura de la marca más cara",
              "No hace falta preparar si la pintura es buena"
            ],
            "correcta": 0,
            "explica": "La preparación de la superficie es esencial para la adherencia y durabilidad de la pintura."
          },
          {
            "q": "¿Cuándo se usa fijador/sellador antes de pintar?",
            "opciones": [
              "En superficies nuevas o entizadas que se despolvoran",
              "En paredes que ya fueron pintadas con látex lavable",
              "Cuando la superficie está húmeda o recién lavada",
              "En superficies que presentan manchas de humedad o salitre"
            ],
            "correcta": 0,
            "explica": "El fijador se aplica para sellar superficies porosas o que se despolvoran, asegurando la adherencia de la pintura."
          },
          {
            "q": "¿Qué es el 'antióxido 3 en 1'?",
            "opciones": [
              "Antióxido, convertidor y esmalte en uno",
              "Solo antióxido común para metales",
              "Solo convertidor de óxido",
              "Solo esmalte sintético"
            ],
            "correcta": 0,
            "explica": "El 3 en 1 combina las tres funciones en un solo producto."
          },
          {
            "q": "¿Se puede aplicar esmalte sintético directo sobre hierro sin antióxido?",
            "opciones": [
              "No, se oxida debajo",
              "Sí, es directo",
              "Solo si está limpio",
              "Depende del clima"
            ],
            "correcta": 0,
            "explica": "Sin antióxido, el hierro se oxida bajo el esmalte y arruina la pintura."
          },
          {
            "q": "¿Qué complementos se venden con las pinturas?",
            "opciones": [
              "Pinceles, rodillos, lijas, fijador, enduido, bandejas y cintas",
              "Solo la pintura y un pincel",
              "Pinceles, rodillos y lijas",
              "Cemento, cal y arena"
            ],
            "correcta": 0,
            "explica": "Los complementos incluyen herramientas y materiales para preparar y aplicar la pintura."
          }
        ]
      },
      {
        "nivel": 3,
        "nombre": "Experto",
        "objetivo": "Asesoramiento de color y tipo",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "Un cliente quiere pintar una reja de hierro oxidada. ¿Qué pasos le indicás?",
            "opciones": [
              "Lijar, aplicar convertidor o antióxido y esmalte sintético",
              "Pintar directo con látex sin preparar la superficie",
              "Lavar con agua y pintar con esmalte al agua",
              "Aplicar membrana asfáltica y luego esmalte sintético"
            ],
            "correcta": 0,
            "explica": "El hierro oxidado requiere eliminar el óxido, proteger con convertidor o antióxido y terminar con esmalte sintético para asegurar adherencia y durabilidad."
          },
          {
            "q": "Un cliente quiere renovar el frente de su casa. ¿Qué pintura le vendés?",
            "opciones": [
              "Látex exterior + fijador si está entizada",
              "Látex interior lavable y resistente a la humedad",
              "Esmalte sintético satinado para exteriores",
              "Antióxido común aplicado sobre la superficie"
            ],
            "correcta": 0,
            "explica": "El látex exterior está formulado para resistir sol y lluvia, y el fijador mejora la adherencia en superficies entizadas."
          },
          {
            "q": "¿Cuál es el argumento clave para vender pintura de calidad?",
            "opciones": [
              "Renovar con pintura es la forma más rápida y económica de cambiar un ambiente o proteger la casa",
              "La pintura de calidad solo se justifica en obras grandes, pero en casas particulares no aporta beneficios reales",
              "Cualquier pintura del mercado ofrece el mismo nivel de protección y durabilidad en todas las superficies",
              "El factor determinante para elegir una pintura es exclusivamente el precio por litro, sin considerar otros aspectos"
            ],
            "correcta": 0,
            "explica": "La pintura es la renovación más rápida y económica, y usar la correcta asegura un buen acabado y mayor duración."
          },
          {
            "q": "¿Cuál es la venta cruzada completa de pinturas?",
            "opciones": [
              "Pintura, fijador, enduido, lijas, rodillo, pincel, bandeja y cinta",
              "Pintura, thinner, enduido, lijas, brocha y cinta",
              "Pintura, sellador, masilla, lija, rodillo y bandeja",
              "Pintura, diluyente, enduido, lijas, pincel y cinta"
            ],
            "correcta": 0,
            "explica": "La venta cruzada completa incluye todos los elementos necesarios para preparar y aplicar la pintura correctamente."
          },
          {
            "q": "Un cliente tiene una superficie con humedad. ¿Qué le recomendás antes de pintar?",
            "opciones": [
              "Solucionar la humedad y usar anti-humedad",
              "Pintar directamente sobre la humedad sin ningún tratamiento previo",
              "Aplicar látex común directamente sobre la mancha de humedad",
              "Dar más manos de pintura para cubrir la humedad de la superficie"
            ],
            "correcta": 0,
            "explica": "Primero hay que resolver la causa de la humedad y luego usar productos específicos anti-humedad para que la pintura no se desprenda."
          }
        ]
      },
      {
        "nivel": 4,
        "nombre": "Manejo de Objeciones y Casos Prácticos",
        "objetivo": "Atención al cliente y rebatimiento de objeciones comerciales",
        "aprobar": 90,
        "preguntas": [
          {
            "q": "Un cliente pregunta: \"¿Por qué esta herramienta o insumo para Pinturas cuesta más que uno genérico de supermercado?\"",
            "opciones": [
              "Porque está hecho para uso profesional con materiales más resistentes y duraderos.",
              "Porque la marca es reconocida y eso justifica el precio más alto.",
              "Porque incluye accesorios extra que el genérico no trae.",
              "Porque tiene mejor presentación y empaque que el común."
            ],
            "correcta": 0,
            "explica": "Los productos profesionales usan materiales de alta resistencia y están diseñados para soportar un uso intensivo, lo que garantiza mayor durabilidad y seguridad."
          },
          {
            "q": "Cliente en mostrador: \"¿Puedo usar la misma herramienta o consumible de Pinturas para otro material totalmente distinto?\"",
            "opciones": [
              "No se recomienda, cada insumo es específico.",
              "Sí, es universal, sirve para todo.",
              "Sí, las herramientas no tienen especificaciones.",
              "Solo si se moja antes de usarlo."
            ],
            "correcta": 0,
            "explica": "Cada insumo está optimizado para su superficie; usarlo en otra puede dañar el producto o ser peligroso."
          }
        ]
      }
    ]
  },
  {
    "id": "selladores",
    "producto": "Selladores y Cintas",
    "rubro": "Ferretería",
    "icon": "fa-solid fa-tape",
    "color": "#ec6434",
    "descripcion": "Siliconas, selladores PU y cintas para juntas y reparaciones.",
    "niveles": [
      {
        "nivel": 1,
        "nombre": "Básico",
        "objetivo": "Tipos de selladores",
        "aprobar": 70,
        "preguntas": [
          {
            "q": "¿Cuáles son los 3 tipos principales de selladores?",
            "opciones": [
              "Silicona neutra, acética y poliuretánico",
              "Silicona blanca, negra y transparente",
              "Sellador acrílico, butílico y de silicona",
              "Cinta de papel, tramada y asfáltica"
            ],
            "correcta": 0,
            "explica": "Los tres tipos principales son la silicona neutra, la acética y el sellador poliuretánico, cada uno con usos específicos."
          },
          {
            "q": "¿Qué sellador se puede pintar?",
            "opciones": [
              "El sellador poliuretánico (PU)",
              "La silicona neutra",
              "La silicona acética",
              "Ninguno de los anteriores"
            ],
            "correcta": 0,
            "explica": "El sellador PU es pintable, ideal para juntas de dilatación y grietas profundas."
          },
          {
            "q": "¿Por qué la silicona acética no se recomienda para espejos?",
            "opciones": [
              "Suelta ácido acético que daña el espejo",
              "No adhiere bien a superficies lisas y resbaladizas como las de un espejo",
              "Es muy cara para uso doméstico y no se consigue en cualquier ferretería",
              "Se vuelve amarilla con el tiempo y pierde flexibilidad al secarse"
            ],
            "correcta": 0,
            "explica": "La silicona acética libera ácido acético, que corroe el azogue del espejo."
          },
          {
            "q": "¿Qué cinta es ideal para reparar filtraciones en techos?",
            "opciones": [
              "Cinta asfáltica autoadhesiva",
              "Cinta de papel para juntas de yeso",
              "Cinta tramada para refuerzo de placas",
              "Cinta asfáltica que se aplica en caliente"
            ],
            "correcta": 0,
            "explica": "La cinta asfáltica autoadhesiva se aplica en frío y es ideal para reparar filtraciones en techos."
          },
          {
            "q": "¿Para qué se usan las cintas para juntas en drywall?",
            "opciones": [
              "Reforzar uniones de placas de yeso y evitar fisuras",
              "Evitar filtraciones en techos y canaletas mediante un sellado rápido y efectivo",
              "Impermeabilizar superficies de hormigón para protegerlas de la humedad ambiental",
              "Unir placas de yeso con adhesivo para asegurar una fijación permanente"
            ],
            "correcta": 0,
            "explica": "Las cintas para juntas refuerzan las uniones entre placas de yeso, evitando fisuras al pintar."
          }
        ]
      },
      {
        "nivel": 2,
        "nombre": "Intermedio",
        "objetivo": "Aplicación correcta",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "¿Cuándo usar silicona neutra vs acética?",
            "opciones": [
              "Neutra para baños y espejos; acética es más económica pero no para metales ni mármol",
              "La neutra se usa para juntas de dilatación y grietas profundas; la acética se usa para sellar ventanas y puertas",
              "La acética es ideal para baños y cocinas porque resiste el moho; la neutra se reserva para metales y espejos",
              "La neutra es la más económica y se puede pintar; la acética es flexible y resistente a la intemperie"
            ],
            "correcta": 0,
            "explica": "La silicona neutra no daña materiales sensibles como espejos o mármol, mientras que la acética libera ácido que los corroe."
          },
          {
            "q": "¿Cuándo usar sellador PU en lugar de silicona?",
            "opciones": [
              "Para juntas de dilatación, grietas profundas, exteriores y pintado",
              "Para sellar espejos y mármol",
              "Para juntas en baños y cocinas",
              "Para reparaciones en techos y canaletas"
            ],
            "correcta": 0,
            "explica": "El sellador PU es ideal para juntas de dilatación, grietas profundas, exteriores y cuando se necesita pintar encima, a diferencia de las siliconas."
          },
          {
            "q": "¿Qué diferencia hay entre cinta de papel y cinta tramada para juntas?",
            "opciones": [
              "Papel: mejor terminación para pintar. Tramada: autoadhesiva, más fácil de colocar.",
              "La cinta de papel requiere humedecerla antes de aplicarla, mientras que la tramada no necesita ningún preparativo previo.",
              "La cinta tramada es ideal para superficies curvas, pero la de papel solo se adapta a superficies planas y regulares.",
              "La de papel se adhiere mejor a la pintura, pero la tramada ofrece mayor resistencia a la humedad."
            ],
            "correcta": 0,
            "explica": "La cinta de papel ofrece un acabado superior al pintar, mientras que la tramada es autoadhesiva y más fácil de instalar."
          },
          {
            "q": "¿En qué colores viene la silicona?",
            "opciones": [
              "Blanca, negra y transparente",
              "Solo blanca",
              "Solo negra",
              "Solo transparente"
            ],
            "correcta": 0,
            "explica": "La silicona se comercializa en esos tres colores."
          },
          {
            "q": "¿Qué argumento clave usás para vender selladores?",
            "opciones": [
              "Previene filtraciones, moho, grietas y deterioro",
              "Asegura una terminación perfecta sin preparación",
              "Garantiza que no haya que hacer mantenimiento",
              "Evita el uso de otros productos de reparación"
            ],
            "correcta": 0,
            "explica": "Un buen sellado evita problemas comunes como filtraciones, moho y grietas, protegiendo los materiales."
          }
        ]
      },
      {
        "nivel": 3,
        "nombre": "Experto",
        "objetivo": "Diagnóstico y solución",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "Un cliente necesita sellar las juntas de una ventana de aluminio. ¿Qué le vendés?",
            "opciones": [
              "Silicona neutra transparente",
              "Silicona acética",
              "Sellador PU",
              "Cinta asfáltica"
            ],
            "correcta": 0,
            "explica": "La silicona neutra no daña el aluminio ni el vidrio y resiste la humedad, ideal para ventanas."
          },
          {
            "q": "Un cliente tiene una grieta en una junta de dilatación exterior. ¿Qué le recomendás?",
            "opciones": [
              "Sellador poliuretánico (PU)",
              "Sellador de silicona neutra, que es flexible y resistente al agua",
              "Cinta de papel para juntas, que refuerza y evita fisuras en placas",
              "Masilla plástica, que rellena grietas y se puede pintar después"
            ],
            "correcta": 0,
            "explica": "El sellador PU es el indicado para juntas de dilatación exteriores por su elasticidad, resistencia a la intemperie y posibilidad de pintarse."
          },
          {
            "q": "Un techista necesita reparar una filtración puntual en una canaleta. ¿Qué le ofrecés?",
            "opciones": [
              "Cinta asfáltica autoadhesiva",
              "Membrana asfáltica con soplete",
              "Silicona neutra para juntas",
              "Cinta de papel para yeso"
            ],
            "correcta": 0,
            "explica": "La cinta asfáltica autoadhesiva se aplica en frío y es ideal para reparaciones rápidas de filtraciones en canaletas."
          },
          {
            "q": "¿Cuál es la venta cruzada al vender selladores?",
            "opciones": [
              "Pistola aplicadora, trapo y sellador adecuado",
              "Solo el sellador y la pistola",
              "Cemento y arena fina",
              "Pintura y thinner"
            ],
            "correcta": 0,
            "explica": "La venta cruzada incluye la pistola para aplicar, un trapo para limpiar y el sellador correcto según la superficie."
          },
          {
            "q": "¿Qué le decís a un cliente que quiere sellar un espejo con silicona acética?",
            "opciones": [
              "Usá silicona neutra, la acética daña el espejo.",
              "La acética es ideal para espejos, no daña nada.",
              "Podés usar sellador PU, es lo mismo para espejos.",
              "Cualquier silicona sirve, no hay diferencia."
            ],
            "correcta": 0,
            "explica": "La silicona acética libera ácido acético que corroe el plateado del espejo, por eso se recomienda la neutra."
          }
        ]
      },
      {
        "nivel": 4,
        "nombre": "Manejo de Objeciones y Casos Prácticos",
        "objetivo": "Atención al cliente y rebatimiento de objeciones comerciales",
        "aprobar": 90,
        "preguntas": [
          {
            "q": "Un cliente pregunta: \"¿Por qué esta herramienta o insumo para Selladores y Cintas cuesta más que uno genérico de supermercado?\"",
            "opciones": [
              "Porque está diseñado para uso profesional e intensivo, con mayor durabilidad y seguridad.",
              "Porque la marca cobra más sin ofrecer beneficios reales.",
              "Porque el empaque es más atractivo y eso encarece el producto.",
              "Porque tiene más accesorios que el genérico, aunque no los necesites."
            ],
            "correcta": 0,
            "explica": "Los productos profesionales se fabrican con materiales de alta resistencia y estándares de seguridad, lo que justifica su precio."
          },
          {
            "q": "Cliente en mostrador: \"¿Puedo usar la misma herramienta o consumible de Selladores y Cintas para otro material totalmente distinto?\"",
            "opciones": [
              "No se recomienda, cada uno es para su superficie.",
              "Sí, se puede usar en cualquier superficie sin problema.",
              "Las herramientas y selladores son universales para todo.",
              "Solo si se aplica con pistola y se deja secar bien."
            ],
            "correcta": 0,
            "explica": "Usar el consumible o herramienta correcta evita daños y accidentes."
          }
        ]
      }
    ]
  },
  {
    "id": "enduidos",
    "producto": "Enduidos",
    "rubro": "Ferretería",
    "icon": "fa-solid fa-fill-drip",
    "color": "#ec6434",
    "descripcion": "Enduido interior y exterior para alisar paredes antes de pintar. Weber, Klaukol, Revear.",
    "niveles": [
      {
        "nivel": 1,
        "nombre": "Básico",
        "objetivo": "Tipos y función",
        "aprobar": 70,
        "preguntas": [
          {
            "q": "¿Para qué sirve el enduido?",
            "opciones": [
              "Para alisar paredes antes de pintar",
              "Para impermeabilizar superficies y evitar filtraciones",
              "Para fijar cerámicos y revestimientos en paredes",
              "Para corregir desniveles en pisos de hormigón"
            ],
            "correcta": 0,
            "explica": "El enduido se usa para alisar y tapar imperfecciones en paredes y cielorrasos, logrando una superficie lisa lista para pintar."
          },
          {
            "q": "¿Cuáles son los dos tipos de enduido?",
            "opciones": [
              "Interior y exterior",
              "Interior y en polvo",
              "Exterior y listo para usar",
              "Solo interior en polvo"
            ],
            "correcta": 0,
            "explica": "El enduido se divide en interior, a base de yeso, y exterior, con resinas que resisten la humedad."
          },
          {
            "q": "¿Qué marcas de enduido trabaja Rosso?",
            "opciones": [
              "Weber, Klaukol, Revear y Tersuave",
              "Solo Klaukol y Revear",
              "Solo Weber y Tersuave",
              "Solo marcas locales"
            ],
            "correcta": 0,
            "explica": "Rosso comercializa enduidos de esas cuatro marcas reconocidas."
          },
          {
            "q": "¿Cómo se aplica el enduido?",
            "opciones": [
              "Con espátula o llana en capas finas",
              "Con brocha dando pinceladas gruesas sobre la superficie",
              "Con rodillo de esponja humedecido en agua",
              "Con trapo y movimientos circulares suaves"
            ],
            "correcta": 0,
            "explica": "Se aplica con espátula o llana en capas finas, dejando secar entre manos."
          },
          {
            "q": "¿Qué se hace después de aplicar el enduido?",
            "opciones": [
              "Se lija con lija fina y se pinta",
              "Se moja con agua y se deja secar",
              "Se cubre con membrana impermeable",
              "Se deja sin pintar para que respire"
            ],
            "correcta": 0,
            "explica": "Se lija con lija fina para lograr un acabado perfecto, y luego se puede pintar."
          }
        ]
      },
      {
        "nivel": 2,
        "nombre": "Intermedio",
        "objetivo": "Aplicación profesional",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "¿Cuándo se usa fijador antes de enduir?",
            "opciones": [
              "Cuando la pared está muy absorbente o entizada",
              "Solo cuando se va a pintar con colores oscuros",
              "Cuando la pared está recién revocada y húmeda",
              "Únicamente si el enduido es exterior"
            ],
            "correcta": 0,
            "explica": "El fijador se aplica antes de enduir si la pared absorbe mucho o se despolvoriza al tacto."
          },
          {
            "q": "¿En qué presentaciones viene el enduido?",
            "opciones": [
              "En polvo o listo para usar",
              "En pasta para aplicar con espátula",
              "En granos para mezclar con agua",
              "En placas para colocar sobre la pared"
            ],
            "correcta": 0,
            "explica": "El enduido se comercializa en dos presentaciones: polvo para mezclar con agua o pasta lista para aplicar."
          },
          {
            "q": "¿Por qué el enduido exterior es diferente al interior?",
            "opciones": [
              "Tiene resinas que resisten humedad e intemperie",
              "Es igual al interior, solo cambia la marca",
              "Está hecho a base de yeso y cargas minerales",
              "El interior resiste mejor la humedad que el exterior"
            ],
            "correcta": 0,
            "explica": "El enduido exterior incorpora resinas acrílicas o cementicias que lo hacen resistente a la humedad y a la intemperie, a diferencia del interior que es a base de yeso."
          },
          {
            "q": "¿Qué complementos se venden con el enduido?",
            "opciones": [
              "Espátulas, llanas, lijas finas, fijador, bandejas y cintas",
              "Rodillos, pinceles, thinner y sellador",
              "Mezcladoras, baldes, guantes y lija gruesa",
              "Pintura, esmalte, barniz y enduido listo"
            ],
            "correcta": 0,
            "explica": "Son los accesorios que se ofrecen para aplicar y terminar el enduido."
          },
          {
            "q": "¿Cuántas capas de enduido se recomiendan?",
            "opciones": [
              "Al menos 2 capas finas",
              "Una sola capa gruesa",
              "Tres capas sin lijar",
              "No necesita capas, se aplica todo junto"
            ],
            "correcta": 0,
            "explica": "Se recomiendan al menos 2 capas finas, secando y lijando entre manos para un acabado perfecto."
          }
        ]
      },
      {
        "nivel": 3,
        "nombre": "Experto",
        "objetivo": "Asesoramiento completo",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "Un cliente quiere pintar pero las paredes tienen muchas imperfecciones. ¿Qué le vendés?",
            "opciones": [
              "Enduido, espátula, lija fina y fijador si hace falta",
              "Pintura directa con rodillo de felpa",
              "Lija gruesa y sellador al agua",
              "Fijador y enduido sin lijar"
            ],
            "correcta": 0,
            "explica": "El enduido tapa imperfecciones, la espátula lo aplica, la lija fina alisa y el fijador sella superficies absorbentes antes de pintar."
          },
          {
            "q": "¿Cuál es el 'secreto de un trabajo profesional' según el manual?",
            "opciones": [
              "El enduido, que tapa fisuras, poros e imperfecciones",
              "Aplicar varias manos de pintura directo",
              "Usar una lija gruesa antes de pintar",
              "Mezclar el enduido con agua de más"
            ],
            "correcta": 0,
            "explica": "El enduido nivela la superficie y sella imperfecciones, logrando un acabado liso y profesional."
          },
          {
            "q": "Un cliente quiere enduir la fachada exterior. ¿Qué enduido le vendés?",
            "opciones": [
              "Enduido exterior con resinas acrílicas",
              "Enduido interior a base de yeso para ambientes secos",
              "Enduido en polvo para interiores sin humedad",
              "Enduido listo para usar común para paredes interiores"
            ],
            "correcta": 0,
            "explica": "El enduido exterior está formulado con resinas acrílicas que resisten la humedad y la intemperie, ideal para fachadas."
          },
          {
            "q": "¿Cuál es la venta cruzada completa al vender enduido?",
            "opciones": [
              "Enduido, herramientas de aplicación, lijas, fijador, bandeja, cinta y pintura",
              "Solo el enduido y la pintura, sin herramientas",
              "Enduido, pintura y rodillos, pero sin lijas",
              "Enduido, espátulas y llanas, sin fijador"
            ],
            "correcta": 0,
            "explica": "La venta cruzada incluye todos los productos complementarios necesarios para una correcta aplicación y acabado."
          },
          {
            "q": "¿Qué pasa si se aplica enduido interior en una fachada exterior?",
            "opciones": [
              "Se deteriora rápido por humedad e intemperie",
              "Funciona igual que el exterior",
              "Es más resistente que el exterior",
              "Dura más que el enduido exterior"
            ],
            "correcta": 0,
            "explica": "El enduido interior, a base de yeso, no está formulado para resistir la humedad ni la intemperie, por lo que se deteriora rápidamente en exteriores."
          }
        ]
      },
      {
        "nivel": 4,
        "nombre": "Manejo de Objeciones y Casos Prácticos",
        "objetivo": "Atención al cliente y rebatimiento de objeciones comerciales",
        "aprobar": 90,
        "preguntas": [
          {
            "q": "Un cliente pregunta: \"¿Por qué esta herramienta o insumo para Enduidos cuesta más que uno genérico de supermercado?\"",
            "opciones": [
              "Porque está hecho para uso profesional e intensivo, con materiales más resistentes y durables.",
              "Porque la marca es más cara, pero rinde igual que el genérico.",
              "Porque incluye accesorios extra que no se usan normalmente.",
              "Porque tiene un diseño más moderno, aunque no cambia su función."
            ],
            "correcta": 0,
            "explica": "Las herramientas e insumos profesionales ofrecen mejor torque, menor desgaste y mayor seguridad de trabajo."
          },
          {
            "q": "Cliente en mostrador: \"¿Puedo usar la misma herramienta o consumible de Enduidos para otro material totalmente distinto?\"",
            "opciones": [
              "No se recomienda. Cada insumo está optimizado para su superficie específica.",
              "Sí, se puede usar en cualquier superficie sin problema.",
              "Sí, las herramientas son universales para todos los materiales.",
              "Solo si se limpia bien antes de usarlo en otro material."
            ],
            "correcta": 0,
            "explica": "Usar el consumible o herramienta correcta evita daños al producto y riesgos de seguridad."
          }
        ]
      }
    ]
  },
  {
    "id": "tanques",
    "producto": "Tanques Multicapa",
    "rubro": "Obra Intermedia",
    "icon": "fa-solid fa-database",
    "color": "#0ea5e9",
    "descripcion": "Tanques Rotoplas y Precons en polietileno: verticales, horizontales, bi y tricapa.",
    "niveles": [
      {
        "nivel": 1,
        "nombre": "Básico",
        "objetivo": "Tipos y capacidades",
        "aprobar": 70,
        "preguntas": [
          {
            "q": "¿Qué marcas de tanques trabaja Rosso?",
            "opciones": [
              "Rotoplas y Precons",
              "Holcim y Weber",
              "Ferrum y Roca",
              "Gerdau y Tensolite"
            ],
            "correcta": 0,
            "explica": "Trabajamos tanques Rotoplas y Precons."
          },
          {
            "q": "¿Qué ventaja tiene un tanque tricapa sobre uno bicapa?",
            "opciones": [
              "La capa interna negra bloquea la luz y evita algas",
              "El tricapa es más liviano y fácil de instalar",
              "El tricapa tiene mayor capacidad de almacenamiento",
              "El tricapa es más económico que el bicapa"
            ],
            "correcta": 0,
            "explica": "La capa interna negra del tricapa impide el paso de luz, lo que previene la formación de algas y mantiene el agua limpia."
          },
          {
            "q": "¿Para qué sirven los tanques horizontales/chupetines?",
            "opciones": [
              "Para espacios bajos, cisternas o enterrados",
              "Para techos o torres elevadas, donde el agua baja por gravedad",
              "Para almacenar agua caliente en instalaciones de calefacción",
              "Para uso exclusivo en interiores, sin posibilidad de instalación exterior"
            ],
            "correcta": 0,
            "explica": "Los tanques horizontales se diseñan para instalarse en lugares con poca altura, como cisternas o bajo nivel."
          },
          {
            "q": "¿Qué capacidad de tanque se recomienda para 4 personas?",
            "opciones": [
              "1000 litros",
              "800 litros",
              "1500 litros",
              "2000 litros"
            ],
            "correcta": 0,
            "explica": "Para 4 personas se recomiendan aproximadamente 1000 litros."
          },
          {
            "q": "¿Qué diferencia hay entre tanques color arena y gris?",
            "opciones": [
              "Arena incluye flotante; gris no.",
              "Gris incluye flotante; arena no.",
              "Ambos incluyen flotante.",
              "Ninguno incluye flotante."
            ],
            "correcta": 0,
            "explica": "El color arena viene con flotante incluido, mientras que el gris se vende sin accesorios y requiere flotante aparte."
          }
        ]
      },
      {
        "nivel": 2,
        "nombre": "Intermedio",
        "objetivo": "Dimensionamiento",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "¿Qué preguntar al cliente para recomendar el tanque correcto?",
            "opciones": [
              "Cuántas personas viven y baños hay",
              "El color que prefiere para el tanque",
              "El tamaño de la cocina y el patio",
              "La marca de griferías que usa"
            ],
            "correcta": 0,
            "explica": "Estos datos permiten calcular la capacidad necesaria según el consumo."
          },
          {
            "q": "Para 6 personas, ¿qué capacidad se recomienda?",
            "opciones": [
              "1500-2000 litros",
              "800-1000 litros",
              "1000-1200 litros",
              "2000-2500 litros"
            ],
            "correcta": 0,
            "explica": "Para 6 personas se recomienda una capacidad de 1500 a 2000 litros, sumando más si hay baños adicionales o alto consumo."
          },
          {
            "q": "¿Qué complementos se venden con un tanque?",
            "opciones": [
              "Flotante, conexiones, bridas, caños, filtro y bomba",
              "Solo el tanque y su tapa",
              "Solo el flotante y la base",
              "Solo la bomba y el caño"
            ],
            "correcta": 0,
            "explica": "Se ofrecen accesorios como flotante, conexiones, bridas, caños, filtro y bomba para completar la instalación."
          },
          {
            "q": "¿Por qué Rotoplas ofrece garantía de calidad?",
            "opciones": [
              "Por su polietileno de alta calidad, que no se corroe y protege el agua.",
              "Porque tienen el precio más bajo del mercado.",
              "Porque son los únicos con certificación oficial.",
              "Porque incluyen instalación sin cargo."
            ],
            "correcta": 0,
            "explica": "El polietileno de alta calidad evita la corrosión y protege contra bacterias y algas."
          },
          {
            "q": "¿Qué base necesita un tanque para su correcta instalación?",
            "opciones": [
              "Base firme y nivelada",
              "Cualquier superficie plana",
              "Sobre arena compactada",
              "Colgado de una estructura"
            ],
            "correcta": 0,
            "explica": "El tanque necesita una base firme y nivelada para su correcta instalación."
          }
        ]
      },
      {
        "nivel": 3,
        "nombre": "Experto",
        "objetivo": "Venta consultiva",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "Un cliente tiene baja presión de agua. ¿Qué le ofrecés además del tanque?",
            "opciones": [
              "Bomba presurizadora",
              "Un regulador de caudal para la entrada",
              "Un sistema de recirculación con termostato",
              "Un flotante de alta precisión para el nivel"
            ],
            "correcta": 0,
            "explica": "La bomba presurizadora mantiene la presión constante cuando se combina con el tanque."
          },
          {
            "q": "Un cliente vive en un departamento con poco espacio en el techo. ¿Qué tanque le recomendás?",
            "opciones": [
              "Tanque horizontal/chupetín",
              "Tanque vertical de 2500 litros",
              "Un bidón plástico",
              "No necesita tanque"
            ],
            "correcta": 0,
            "explica": "El tanque horizontal/chupetín está diseñado para espacios bajos, ideal para techos con poca altura."
          },
          {
            "q": "¿Cuándo ofrecés un tanque gris vs arena?",
            "opciones": [
              "Gris si ya tiene flotante; arena si lo quiere incluido",
              "Arena si el tanque es para exterior",
              "Gris si el tanque es para interior",
              "Arena si el agua es de pozo"
            ],
            "correcta": 0,
            "explica": "El gris se vende sin accesorios, ideal para quien ya posee flotante; el arena incluye el flotante, para quien busca una solución completa."
          },
          {
            "q": "¿Qué venta cruzada hacés al vender un tanque?",
            "opciones": [
              "Flotante, conexiones, caños, filtro y bomba si hay baja presión",
              "Solo el tanque y un flotante",
              "Únicamente el tanque y sus accesorios",
              "Nada más que el tanque, sin extras"
            ],
            "correcta": 0,
            "explica": "La venta cruzada incluye flotante, conexiones, caños, filtro y bomba para asegurar una instalación completa y funcionamiento óptimo."
          },
          {
            "q": "¿Por qué es importante que el tanque no permita el paso de luz?",
            "opciones": [
              "Evita la formación de algas",
              "Para que no se caliente el agua",
              "Por una cuestión estética",
              "Para que no se vea el interior"
            ],
            "correcta": 0,
            "explica": "La capa negra del tricapa bloquea la luz, impidiendo el crecimiento de algas y manteniendo el agua limpia."
          }
        ]
      },
      {
        "nivel": 4,
        "nombre": "Manejo de Objeciones y Casos Prácticos",
        "objetivo": "Atención al cliente y rebatimiento de objeciones comerciales",
        "aprobar": 90,
        "preguntas": [
          {
            "q": "Un cliente manifiesta la objeción: \"Instalar Tanques Multicapa requiere herramientas específicas o más tiempo de trabajo.\"",
            "opciones": [
              "Le explicás que esa instalación asegura cero filtraciones a largo plazo.",
              "Le das la razón y le sugerís atar todo con alambre.",
              "Le decís que no instale nada y use baldes.",
              "Le sugerís usar manguera de jardín común."
            ],
            "correcta": 0,
            "explica": "Una instalación profesional evita filtraciones que causarían costosas reparaciones de paredes."
          },
          {
            "q": "Caso práctico: El cliente no sabe si comprar Tanques Multicapa en la medida estándar o la superior. ¿Qué le aconsejás?",
            "opciones": [
              "Calcular la demanda según usuarios y caudal para no quedarse corto en horas pico.",
              "Elegir la medida estándar porque es la más vendida y siempre alcanza.",
              "Recomendar la superior solo si el cliente tiene más de dos baños en la casa.",
              "Sugerir la medida inferior para ahorrar y luego agregar otro tanque si falta."
            ],
            "correcta": 0,
            "explica": "Dimensionar correctamente según el consumo evita quedarse sin agua en momentos de alta demanda."
          }
        ]
      }
    ]
  },
  {
    "id": "biodigestores",
    "producto": "Biodigestores",
    "rubro": "Obra Intermedia",
    "icon": "fa-solid fa-recycle",
    "color": "#0ea5e9",
    "descripcion": "Solución ecológica Rotoplas para tratar aguas residuales sin cloacas.",
    "niveles": [
      {
        "nivel": 1,
        "nombre": "Básico",
        "objetivo": "¿Qué es un biodigestor?",
        "aprobar": 70,
        "preguntas": [
          {
            "q": "¿Para qué sirve un biodigestor?",
            "opciones": [
              "Para tratar aguas residuales sin cloacas",
              "Para eliminar los residuos sólidos de la casa",
              "Para purificar el agua de lluvia para consumo",
              "Para producir abono orgánico a partir de desechos"
            ],
            "correcta": 0,
            "explica": "El biodigestor descompone la materia orgánica de las aguas residuales domiciliarias en zonas sin red cloacal."
          },
          {
            "q": "¿Qué reemplaza al biodigestor en la construcción tradicional?",
            "opciones": [
              "Los pozos ciegos",
              "Las fosas sépticas",
              "Los tanques de reserva",
              "Las cámaras de inspección"
            ],
            "correcta": 0,
            "explica": "El biodigestor reemplaza al pozo ciego tradicional en el tratamiento de aguas residuales."
          },
          {
            "q": "¿Qué marca de biodigestores trabaja Rosso?",
            "opciones": [
              "Rotoplas",
              "Sika",
              "Aqualimpia",
              "Plastigama"
            ],
            "correcta": 0,
            "explica": "Trabajamos biodigestores Rotoplas."
          },
          {
            "q": "¿De qué material están hechos los biodigestores?",
            "opciones": [
              "Polietileno rotomoldeado",
              "Polietileno de alta densidad",
              "Hormigón prefabricado",
              "Acero inoxidable con recubrimiento"
            ],
            "correcta": 0,
            "explica": "Son de polietileno rotomoldeado, resistentes a químicos y desgaste."
          },
          {
            "q": "¿Para qué zonas son ideales los biodigestores?",
            "opciones": [
              "Zonas rurales, barrios privados o zonas nuevas sin cloaca",
              "Zonas urbanas densamente pobladas con red de desagüe pluvial",
              "Áreas céntricas con sistema de alcantarillado sanitario completo",
              "Zonas residenciales que ya cuentan con conexión a la red cloacal"
            ],
            "correcta": 0,
            "explica": "Ideales para zonas rurales, barrios privados o zonas nuevas sin red cloacal."
          }
        ]
      },
      {
        "nivel": 2,
        "nombre": "Intermedio",
        "objetivo": "Instalación y mantenimiento",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "¿Qué hay que preguntarle al cliente antes de venderle un biodigestor?",
            "opciones": [
              "Cuántas personas viven en la casa",
              "Qué tipo de suelo tiene el terreno",
              "Cuál es el presupuesto disponible",
              "Si necesita permiso municipal"
            ],
            "correcta": 0,
            "explica": "La cantidad de habitantes determina el volumen de aguas residuales y por lo tanto la capacidad del biodigestor."
          },
          {
            "q": "¿Por qué es importante la pendiente del terreno?",
            "opciones": [
              "Para asegurar el escurrimiento",
              "Para evitar malos olores",
              "Para facilitar la instalación",
              "Para mejorar la filtración"
            ],
            "correcta": 0,
            "explica": "La pendiente adecuada garantiza que los efluentes fluyan correctamente hacia el biodigestor."
          },
          {
            "q": "¿Qué sistema adicional puede requerir un biodigestor?",
            "opciones": [
              "Pozo absorbente o lecho nitrificante",
              "Un sistema de bombeo para elevar el efluente tratado hasta la zona de descarga",
              "Un filtro de carbón activado para eliminar olores y mejorar la calidad del agua",
              "Un tanque de almacenamiento de agua de lluvia para mezclar con el efluente"
            ],
            "correcta": 0,
            "explica": "El efluente tratado necesita infiltrarse en el terreno, por lo que se requiere un pozo absorbente o un lecho nitrificante."
          },
          {
            "q": "¿Qué ventajas tiene el biodigestor sobre el pozo ciego?",
            "opciones": [
              "No contamina el suelo y dura muchos años",
              "Es igual que el pozo ciego en todo sentido",
              "Contamina más que el pozo ciego tradicional",
              "Requiere mantenimiento diario y constante"
            ],
            "correcta": 0,
            "explica": "El biodigestor trata las aguas sin contaminar el suelo y tiene larga vida útil."
          },
          {
            "q": "¿Qué complementos se venden con el biodigestor?",
            "opciones": [
              "Cañerías, cámara séptica y ventilación",
              "Bomba sumergible y filtro de arena",
              "Cemento, arena y ladrillos",
              "Tubería de gas y válvula de alivio"
            ],
            "correcta": 0,
            "explica": "Según el manual, se venden cañerías de desagüe, cámara séptica previa y accesorios de ventilación."
          }
        ]
      },
      {
        "nivel": 3,
        "nombre": "Experto",
        "objetivo": "Asesoramiento integral",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "Un cliente construye en un lote sin cloaca. ¿Cómo le planteás el biodigestor?",
            "opciones": [
              "Es la alternativa sustentable al pozo ciego: no contamina, dura años y requiere poco mantenimiento",
              "Es un tanque para almacenar agua de lluvia y usarla en el inodoro",
              "Es un sistema que elimina los residuos sin necesidad de cañerías",
              "Es una fosa séptica que se instala solo si el terreno es plano"
            ],
            "correcta": 0,
            "explica": "El biodigestor es una opción ecológica que trata las aguas residuales sin contaminar el suelo y con bajo mantenimiento."
          },
          {
            "q": "¿Cómo funciona el proceso biológico del biodigestor?",
            "opciones": [
              "Descompone la materia orgánica, generando efluente clarificado y biogás.",
              "Filtra el agua mediante un tamiz mecánico.",
              "Congela los residuos para separar los sólidos.",
              "Evapora el agua por medio de calor intenso."
            ],
            "correcta": 0,
            "explica": "El biodigestor descompone la materia orgánica biológicamente, generando agua clarificada y biogás."
          },
          {
            "q": "¿Qué venta cruzada hacés al vender un biodigestor?",
            "opciones": [
              "Cañerías PVC, accesorios y cámara séptica si hace falta",
              "Solo el biodigestor y su tapa de inspección",
              "Pintura especial para exteriores del tanque",
              "Griferías de baño y accesorios de lujo"
            ],
            "correcta": 0,
            "explica": "La venta cruzada incluye cañerías y conexiones para el desagüe, y una cámara séptica previa cuando el pretratamiento lo requiere."
          },
          {
            "q": "¿Cada cuánto necesita mantenimiento un biodigestor bien instalado?",
            "opciones": [
              "Poco mantenimiento: inspección y vaciado de lodos según uso",
              "Requiere mantenimiento constante: limpieza profunda de la cámara cada semana",
              "Precisa revisión periódica de los niveles y limpieza de los filtros cada mes",
              "Necesita cambio frecuente de bacterias y reemplazo de los filtros internos"
            ],
            "correcta": 0,
            "explica": "Un biodigestor bien instalado solo requiere inspección periódica y vaciado de lodos según la cantidad de uso."
          },
          {
            "q": "¿Qué tiene de ecológico el biodigestor vs pozo ciego?",
            "opciones": [
              "No contamina el suelo ni las napas; el efluente puede reutilizarse para riego",
              "Contamina el suelo y las napas, y el efluente no se puede reutilizar para riego",
              "Requiere más mantenimiento que un pozo ciego y su instalación es más compleja",
              "Genera más residuos sólidos que un pozo ciego, por lo que no es sustentable"
            ],
            "correcta": 0,
            "explica": "El biodigestor trata biológicamente las aguas residuales, evitando la contaminación del suelo y las napas, y su efluente clarificado puede aprovecharse para riego."
          }
        ]
      },
      {
        "nivel": 4,
        "nombre": "Manejo de Objeciones y Casos Prácticos",
        "objetivo": "Atención al cliente y rebatimiento de objeciones comerciales",
        "aprobar": 90,
        "preguntas": [
          {
            "q": "Un cliente manifiesta la objeción: \"Instalar Biodigestores requiere herramientas específicas o más tiempo de trabajo.\"",
            "opciones": [
              "Una instalación profesional evita filtraciones futuras.",
              "Requiere herramientas especiales y más tiempo de obra.",
              "Es más simple que un pozo ciego tradicional.",
              "Necesita mantenimiento constante y costoso."
            ],
            "correcta": 0,
            "explica": "Una instalación profesional en obra intermedia ahorra costos enormes de reparación oculta."
          },
          {
            "q": "Caso práctico: El cliente no sabe si comprar Biodigestores en la medida estándar o la superior. ¿Qué le aconsejás?",
            "opciones": [
              "Calcular la demanda según usuarios y caudal de la obra.",
              "Elegir la medida más chica para ahorrar en la compra.",
              "Optar por la medida superior sin importar la cantidad de gente.",
              "Decidir por el tamaño que más se ve en las obras vecinas."
            ],
            "correcta": 0,
            "explica": "Dimensionar correctamente evita quedarse corto en horas pico de consumo."
          }
        ]
      }
    ]
  },
  {
    "id": "perfileria",
    "producto": "Perfilería Metálica",
    "rubro": "Obra Intermedia",
    "icon": "fa-solid fa-ruler-combined",
    "color": "#0ea5e9",
    "descripcion": "Esqueleto de construcción en seco: soleras, montantes, omega y tornillos T1/T2/T3. Barbieri.",
    "niveles": [
      {
        "nivel": 1,
        "nombre": "Básico",
        "objetivo": "Componentes del sistema",
        "aprobar": 70,
        "preguntas": [
          {
            "q": "¿Qué función cumplen las soleras (Perfil U)?",
            "opciones": [
              "Son la base donde encajan los montantes",
              "Se fijan verticalmente cada 40 o 60 cm",
              "Se usan para unir perfiles entre sí",
              "Se colocan en esquinas para reforzar"
            ],
            "correcta": 0,
            "explica": "Las soleras se instalan en piso y techo, y los montantes encajan en ellas."
          },
          {
            "q": "¿Qué función cumplen los montantes (Perfil C)?",
            "opciones": [
              "Se colocan verticalmente cada 40-60 cm y soportan las placas",
              "Se colocan en el piso y techo como base de la estructura",
              "Se usan para nivelar revestimientos sobre paredes existentes",
              "Se colocan en las esquinas para proteger contra golpes"
            ],
            "correcta": 0,
            "explica": "Los montantes se instalan verticalmente, encastrados en las soleras, y son el soporte principal de las placas."
          },
          {
            "q": "¿Qué marca de perfilería trabaja Rosso?",
            "opciones": [
              "Barbieri",
              "Holcim",
              "Gerdau",
              "Weber"
            ],
            "correcta": 0,
            "explica": "Trabajamos perfilería galvanizada marca Barbieri."
          },
          {
            "q": "¿Qué son los tornillos T2?",
            "opciones": [
              "Para fijar placas de yeso a la perfilería",
              "Para unir perfiles metálicos entre sí",
              "Para fijar placas a estructuras de madera",
              "Para atornillar perfiles a mampostería"
            ],
            "correcta": 0,
            "explica": "Los tornillos T2 tienen cabeza trompeta y punta aguja, diseñados para fijar placas de yeso a los perfiles metálicos sin dañar el cartón."
          },
          {
            "q": "¿Cuántos tornillos T2 se usan por placa estándar?",
            "opciones": [
              "Entre 30 y 40 por placa",
              "Aproximadamente 5 por placa",
              "Unos 100 por placa",
              "Solo 1 por placa"
            ],
            "correcta": 0,
            "explica": "Una placa estándar de 1,20×2,40 m requiere entre 30 y 40 tornillos T2 para fijarse correctamente."
          }
        ]
      },
      {
        "nivel": 2,
        "nombre": "Intermedio",
        "objetivo": "Tornillería especializada",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "¿Cuál es la diferencia entre tornillos T1, T2 y T3?",
            "opciones": [
              "T1: perfil-perfil. T2: placa-perfil estándar. T3: perfilería gruesa (Steel Frame).",
              "T1: para fijar placas de yeso a perfiles. T2: para unir perfiles entre sí. T3: para madera y metal.",
              "T1: punta aguja y cabeza trompeta. T2: punta mecha para madera. T3: punta broca para acero.",
              "T1: se usan en placas de yeso. T2: se usan en perfiles. T3: se usan en madera."
            ],
            "correcta": 0,
            "explica": "T1 une perfiles entre sí, T2 fija placa a perfil estándar y T3 se usa en perfiles gruesos de Steel Frame."
          },
          {
            "q": "¿Para qué sirve el perfil Omega?",
            "opciones": [
              "Para cielorrasos o revestimientos directos sobre paredes.",
              "Para unir perfiles metálicos entre sí en estructuras de mampostería.",
              "Para fijar placas de yeso sobre montantes verticales en tabiques.",
              "Para reforzar esquinas exteriores de paredes y protegerlas de golpes."
            ],
            "correcta": 0,
            "explica": "El perfil Omega se emplea en cielorrasos o revestimientos directos, permitiendo nivelar superficies."
          },
          {
            "q": "¿Para qué se usan las cantoneras/guardacantos?",
            "opciones": [
              "Refuerzan esquinas exteriores y evitan golpes",
              "Sostienen las placas en cielorrasos",
              "Unen perfiles entre sí en muros",
              "Nivelan pisos antes del revestimiento"
            ],
            "correcta": 0,
            "explica": "Las cantoneras se colocan en esquinas exteriores para protegerlas de impactos y asegurar que queden rectas."
          },
          {
            "q": "¿Por qué la perfilería es galvanizada?",
            "opciones": [
              "Para evitar la corrosión y asegurar durabilidad",
              "Para mejorar la estética del material",
              "Para aumentar el peso de los perfiles",
              "Para facilitar el corte de las placas"
            ],
            "correcta": 0,
            "explica": "El galvanizado protege el acero contra la corrosión, lo que alarga la vida útil de la perfilería."
          },
          {
            "q": "¿Qué complementos se venden con la perfilería?",
            "opciones": [
              "Placas, aislantes, fijaciones y accesorios",
              "Únicamente los perfiles metálicos",
              "Solamente clavos y tornillos",
              "Exclusivamente pintura y selladores"
            ],
            "correcta": 0,
            "explica": "Los complementos incluyen placas de yeso o cementicias, aislantes, fijaciones y accesorios para completar el sistema."
          }
        ]
      },
      {
        "nivel": 3,
        "nombre": "Experto",
        "objetivo": "Cálculo y asesoramiento",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "Un cliente quiere hacer una pared divisoria de drywall. ¿Qué le vendés?",
            "opciones": [
              "Soleras, montantes, placas, tornillos T1 y T2, cinta, masilla y lana de vidrio",
              "Soleras, montantes, placas y tornillos T3 para fijar aislantes",
              "Perfiles omega, placas, tornillos T1 y cinta para juntas",
              "Montantes, placas, tornillos T2 y masilla para terminación"
            ],
            "correcta": 0,
            "explica": "Una pared de drywall requiere la estructura completa: soleras y montantes para el armazón, placas para el revestimiento, tornillos T1 para unir perfiles, T2 para fijar placas, y cinta, masilla y lana de vidrio para terminación y aislación."
          },
          {
            "q": "¿Cada cuánto se colocan los montantes?",
            "opciones": [
              "Cada 40 o 60 cm entre ejes",
              "Cada 20 o 30 cm entre ejes",
              "Cada 80 o 100 cm entre ejes",
              "Cada 60 o 90 cm entre ejes"
            ],
            "correcta": 0,
            "explica": "Los montantes se colocan cada 40 o 60 cm entre ejes, según el proyecto."
          },
          {
            "q": "¿Cuántos tornillos T2 se usan por m² de placa?",
            "opciones": [
              "12 a 15 por m²",
              "1 por m²",
              "50 por m²",
              "100 por m²"
            ],
            "correcta": 0,
            "explica": "El consumo aproximado es de 12 a 15 tornillos T2 por m² de placa."
          },
          {
            "q": "Un cliente necesita un cielorraso. ¿Qué perfiles le ofrecés?",
            "opciones": [
              "Omega + ángulo L + tornillos T2",
              "Soleras y montantes",
              "Montantes y cantoneras",
              "Soleras y tornillos T1"
            ],
            "correcta": 0,
            "explica": "Los cielorrasos se arman con perfiles Omega, ángulo de ajuste para los bordes y tornillos T2 para fijar las placas."
          },
          {
            "q": "¿Cuál es el argumento de venta de la perfilería Barbieri?",
            "opciones": [
              "Rigidez, fácil montaje, terminaciones perfectas y sin oxidación",
              "Precio bajo, pero se oxida rápido",
              "Liviana, pero se dobla al cargarla",
              "Fácil de cortar, pero no resiste el peso"
            ],
            "correcta": 0,
            "explica": "La perfilería Barbieri ofrece rigidez estructural, facilidad de montaje y terminaciones perfectas gracias a su galvanizado que evita la oxidación."
          }
        ]
      },
      {
        "nivel": 4,
        "nombre": "Manejo de Objeciones y Casos Prácticos",
        "objetivo": "Atención al cliente y rebatimiento de objeciones comerciales",
        "aprobar": 90,
        "preguntas": [
          {
            "q": "Un cliente manifiesta la objeción: \"Instalar Perfilería Metálica requiere herramientas específicas o más tiempo de trabajo.\"",
            "opciones": [
              "Le explicás que esa instalación evita filtraciones y futuras roturas de paredes.",
              "Le das la razón y le sugerís atar todo con alambre.",
              "Le decís que no instale nada y use otro método.",
              "Le sugerís usar manguera de jardín común."
            ],
            "correcta": 0,
            "explica": "Una instalación profesional en obra intermedia ahorra costos enormes de reparación oculta."
          },
          {
            "q": "Caso práctico: El cliente no sabe si comprar Perfilería Metálica en la medida estándar o la superior. ¿Qué le aconsejás?",
            "opciones": [
              "Calcular la demanda según los usuarios y el caudal de la obra para no quedarse corto en horas pico.",
              "Elegir siempre la medida estándar porque es la más vendida y nunca falla.",
              "Comprar la medida superior solo si el presupuesto lo permite, sin importar el uso.",
              "Optar por la medida más chica para reducir costos y simplificar la instalación."
            ],
            "correcta": 0,
            "explica": "Dimensionar correctamente la instalación asegura presión, capacidad y confort constante."
          }
        ]
      }
    ]
  },
  {
    "id": "cielorrasos",
    "producto": "Cielorrasos PVC",
    "rubro": "Obra Intermedia",
    "icon": "fa-solid fa-border-top-left",
    "color": "#0ea5e9",
    "descripcion": "Cielorrasos de PVC Barbieri Perfilplas® y de yeso: modernos, limpios y estéticos.",
    "niveles": [
      {
        "nivel": 1,
        "nombre": "Básico",
        "objetivo": "Tipos de cielorrasos",
        "aprobar": 70,
        "preguntas": [
          {
            "q": "¿Cuáles son los dos tipos principales de cielorrasos en seco?",
            "opciones": [
              "De yeso y de PVC",
              "De madera y de metal",
              "De cartón y de fibrocemento",
              "De poliuretano y de aluminio"
            ],
            "correcta": 0,
            "explica": "Los cielorrasos en seco se dividen en dos tipos: de yeso (junta tomada) y de PVC Perfilplas®."
          },
          {
            "q": "¿Qué ventaja tiene el PVC sobre el yeso en ambientes húmedos?",
            "opciones": [
              "El PVC resiste la humedad; el yeso no.",
              "El yeso resiste más la humedad que el PVC.",
              "Ambos resisten igual la humedad.",
              "El PVC se deteriora con la humedad."
            ],
            "correcta": 0,
            "explica": "El PVC es resistente a la humedad, ideal para ambientes como baños y cocinas, mientras que el yeso se deteriora."
          },
          {
            "q": "¿Cómo se instala el cielorraso de PVC?",
            "opciones": [
              "Con estructura metálica y encastre machihembrado",
              "Se fija con clavos a una estructura de madera",
              "Se adhiere con pegamento directamente a la superficie",
              "Se coloca suelto sobre la losa de hormigón sin fijación"
            ],
            "correcta": 0,
            "explica": "El sistema de instalación del cielorraso de PVC requiere una estructura metálica liviana y el encastre machihembrado de las tablas."
          },
          {
            "q": "¿Qué marca de cielorrasos de PVC trabaja Rosso?",
            "opciones": [
              "Barbieri",
              "Es una línea de placas de yeso para interiores",
              "Es un sistema de paneles de fibrocemento",
              "Es un tipo de pintura antihongos para baños"
            ],
            "correcta": 0,
            "explica": "Trabajamos cielorrasos de PVC marca Barbieri (Perfilplas®)."
          },
          {
            "q": "¿En qué anchos vienen las placas de PVC?",
            "opciones": [
              "200 mm, en largos de 3 a 7 metros",
              "100 mm, en largos de 2 a 4 metros",
              "500 mm, en largos de 5 a 8 metros",
              "No tienen ancho estándar, varía según el lote"
            ],
            "correcta": 0,
            "explica": "Las placas de PVC Perfilplas® tienen un ancho fijo de 200 mm y largos que van de 3 a 7 metros según el modelo."
          }
        ]
      },
      {
        "nivel": 2,
        "nombre": "Intermedio",
        "objetivo": "Instalación y complementos",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "¿Cuáles son los pasos de instalación del cielorraso PVC?",
            "opciones": [
              "Estructura de perfiles, perfil perimetral, encastre de tablas, ajuste final",
              "Colocar perfiles, atornillar placas, masillar y pintar",
              "Fijar perimetral, pegar tablas, nivelar y cortar",
              "Instalar estructura, colocar aislante, fijar tablas y sellar"
            ],
            "correcta": 0,
            "explica": "El orden correcto es: estructura de perfiles, perfil perimetral, encastre de tablas y ajuste final, tal como indica el manual."
          },
          {
            "q": "¿Qué complementos se necesitan para cielorraso de yeso?",
            "opciones": [
              "Placas, perfiles, tornillos, cinta, masilla y fijaciones",
              "Placas, adhesivo, cinta y pintura",
              "Perfiles, tornillos y sellador",
              "Placas, masilla y cinta de papel"
            ],
            "correcta": 0,
            "explica": "El cielorraso de yeso requiere placas, estructura metálica (perfiles), tornillos para fijar, cinta para juntas, masilla para alisar y fijaciones."
          },
          {
            "q": "¿Cuáles son las ventajas generales de los cielorrasos en seco?",
            "opciones": [
              "Trabajo rápido, sin escombros ni humedad, acabado prolijo y moderno, mejora el confort",
              "Requieren mucho tiempo de instalación y generan escombros",
              "Son económicos pero de acabado rústico y poco estético",
              "No ofrecen beneficios frente a los cielorrasos tradicionales"
            ],
            "correcta": 0,
            "explica": "Los cielorrasos en seco se instalan rápido, no generan escombros ni humedad, y brindan un acabado prolijo que mejora el confort térmico y acústico."
          },
          {
            "q": "¿Qué complementos específicos necesita el cielorraso de PVC?",
            "opciones": [
              "Perfiles metálicos, placas PVC, fijaciones y perfiles perimetrales",
              "Solo las placas de PVC y pintura",
              "Cemento, arena y malla metálica",
              "Masilla, cinta y pintura al agua"
            ],
            "correcta": 0,
            "explica": "El cielorraso de PVC requiere estructura metálica, placas, fijaciones y perfiles perimetrales para su instalación."
          },
          {
            "q": "¿Dónde es ideal usar cielorraso de PVC en lugar de yeso?",
            "opciones": [
              "En baños, cocinas, lavaderos y zonas húmedas",
              "Solo en dormitorios y living",
              "En exteriores sin protección",
              "En lugares muy secos y cálidos"
            ],
            "correcta": 0,
            "explica": "El PVC resiste la humedad, mientras que el yeso se deteriora en zonas húmedas."
          }
        ]
      },
      {
        "nivel": 3,
        "nombre": "Experto",
        "objetivo": "Asesoramiento al cliente",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "Un cliente quiere renovar el techo de su baño. ¿Qué le recomendás?",
            "opciones": [
              "Cielorraso de PVC Perfilplas®",
              "Cielorraso de yeso con junta tomada",
              "Pintura antihongos sobre el techo",
              "Placas de yeso con estructura metálica"
            ],
            "correcta": 0,
            "explica": "El PVC Perfilplas® es resistente a la humedad y fácil de limpiar, ideal para baños."
          },
          {
            "q": "Un cliente quiere un cielorraso liso y pintable en su living. ¿Qué tipo le vendés?",
            "opciones": [
              "Cielorraso de yeso con junta tomada",
              "Cielorraso de PVC con terminación lisa y pintable",
              "Cielorraso de chapa galvanizada con pintura",
              "Cielorraso de madera con acabado en pintura"
            ],
            "correcta": 0,
            "explica": "El cielorraso de yeso con junta tomada ofrece una superficie lisa y lista para pintar, ideal para interiores."
          },
          {
            "q": "¿Cuál es el argumento de venta de los cielorrasos en seco?",
            "opciones": [
              "Ocultan imperfecciones, mejoran confort y ocultan instalaciones",
              "Son únicamente decorativos y no aportan beneficios",
              "Son costosos y difíciles de instalar",
              "No ofrecen ventajas frente a otros cielorrasos"
            ],
            "correcta": 0,
            "explica": "Los cielorrasos en seco ocultan imperfecciones e instalaciones, y mejoran el confort térmico y acústico."
          },
          {
            "q": "¿Cómo se puede mejorar el aislamiento del cielorraso?",
            "opciones": [
              "Colocando lana de vidrio sobre las placas",
              "Aplicando una capa extra de pintura alisadora",
              "Usando membrana asfáltica sobre la estructura",
              "Instalando un deshumidificador en el ambiente"
            ],
            "correcta": 0,
            "explica": "La lana de vidrio sobre las placas mejora el aislamiento térmico y acústico."
          },
          {
            "q": "¿Cuál es la venta cruzada al vender un cielorraso?",
            "opciones": [
              "Perfiles, placas, tornillos, aislante, cinta, masilla y pintura",
              "Solo placas y perfiles, sin fijaciones ni terminaciones",
              "Placas, tornillos y pintura, sin estructura ni aislante",
              "Perfiles y aislante, sin placas ni materiales de terminación"
            ],
            "correcta": 0,
            "explica": "La venta cruzada incluye todos los componentes necesarios para la instalación completa del cielorraso, no solo el material principal."
          }
        ]
      },
      {
        "nivel": 4,
        "nombre": "Manejo de Objeciones y Casos Prácticos",
        "objetivo": "Atención al cliente y rebatimiento de objeciones comerciales",
        "aprobar": 90,
        "preguntas": [
          {
            "q": "Un cliente manifiesta la objeción: \"Instalar Cielorrasos PVC requiere herramientas específicas o más tiempo de trabajo.\"",
            "opciones": [
              "Le explicás que esa instalación evita romper paredes a futuro.",
              "Le das la razón y le sugerís atar todo con alambre.",
              "Le decís que no instale nada y que use pintura.",
              "Le sugerís usar manguera de jardín común para fijar."
            ],
            "correcta": 0,
            "explica": "Una instalación profesional en obra intermedia ahorra costos enormes de reparación oculta."
          },
          {
            "q": "Caso práctico: El cliente no sabe si comprar Cielorrasos PVC en la medida estándar o la superior. ¿Qué le aconsejás?",
            "opciones": [
              "Calcular la demanda según usuarios y caudal de la obra.",
              "Elegir la medida estándar por ser la más vendida.",
              "Optar por la superior para evitar futuras ampliaciones.",
              "Tomar la decisión según el color que prefiera el cliente."
            ],
            "correcta": 0,
            "explica": "Dimensionar la instalación según el consumo real evita quedarse corto en horas pico."
          }
        ]
      }
    ]
  },
  {
    "id": "placas-yeso",
    "producto": "Placas de Yeso (Drywall)",
    "rubro": "Obra Intermedia",
    "icon": "fa-solid fa-clone",
    "color": "#0ea5e9",
    "descripcion": "Placas Placo ST, RH (humedad) y RF (fuego) para paredes y cielorrasos en seco.",
    "niveles": [
      {
        "nivel": 1,
        "nombre": "Básico",
        "objetivo": "Tipos de placas",
        "aprobar": 70,
        "preguntas": [
          {
            "q": "¿Cuáles son los 3 tipos principales de placas de yeso?",
            "opciones": [
              "ST, RH y RF",
              "ST, RH y acústica",
              "ST, RF y alta dureza",
              "RH, RF y estándar premium"
            ],
            "correcta": 0,
            "explica": "Los tres tipos principales son ST (estándar), RH (resistente a la humedad) y RF (resistente al fuego)."
          },
          {
            "q": "¿En qué ambientes se usa la placa RH (verde)?",
            "opciones": [
              "Cocinas, baños y lavaderos",
              "Dormitorios y salas de estar",
              "Oficinas y salas de reunión",
              "Garajes y depósitos secos"
            ],
            "correcta": 0,
            "explica": "La placa RH (verde) está tratada para soportar vapor y salpicaduras, por eso se usa en zonas húmedas como cocinas, baños y lavaderos."
          },
          {
            "q": "¿Qué marca de placas trabaja Rosso?",
            "opciones": [
              "Placo",
              "Holcim",
              "Gerdau",
              "Ferrum"
            ],
            "correcta": 0,
            "explica": "Trabajamos placas de yeso marca Placo de Saint-Gobain."
          },
          {
            "q": "¿Cuál es la medida estándar de una placa de yeso?",
            "opciones": [
              "1,20 × 2,40 m",
              "0,60 × 1,20 m",
              "1,00 × 2,00 m",
              "0,90 × 1,80 m"
            ],
            "correcta": 0,
            "explica": "La medida estándar de una placa de yeso es 1,20 × 2,40 metros."
          },
          {
            "q": "¿Para qué sirve la placa RF?",
            "opciones": [
              "Para zonas con exigencia de seguridad contra incendios.",
              "Para ambientes con alta humedad como baños y cocinas.",
              "Para uso general en ambientes secos como dormitorios.",
              "Para revestir fachadas exteriores expuestas al sol."
            ],
            "correcta": 0,
            "explica": "La placa RF está diseñada para retardar la propagación del fuego en sectores críticos."
          }
        ]
      },
      {
        "nivel": 2,
        "nombre": "Intermedio",
        "objetivo": "Complementos y sistema",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "¿Qué ventaja tiene construir con placas vs métodos tradicionales?",
            "opciones": [
              "Más rápido, limpio y sin escombros",
              "Más lento y con más escombros",
              "Más caro y requiere más mano de obra",
              "No ofrece ventajas frente al ladrillo"
            ],
            "correcta": 0,
            "explica": "Las placas de yeso permiten construir más rápido y limpio, sin escombros y con terminación profesional."
          },
          {
            "q": "¿Qué complementos se necesitan para instalar placas de yeso?",
            "opciones": [
              "Perfilería, tornillos T1/T2/T3, cinta, masilla, cantoneras y lana de vidrio",
              "Solo placas y masilla para juntas",
              "Solo tornillos y cinta para juntas",
              "Solo perfilería y cantoneras"
            ],
            "correcta": 0,
            "explica": "La instalación requiere el sistema completo de perfilería, tornillería específica, cintas, masilla, cantoneras y aislante."
          },
          {
            "q": "¿Cuál es la diferencia entre la placa ST y la RH?",
            "opciones": [
              "La RH soporta humedad y vapor; la ST es para ambientes secos.",
              "La ST soporta humedad y vapor; la RH es para ambientes secos.",
              "La RH es más resistente al fuego que la ST.",
              "La ST es más cara que la RH por su mayor durabilidad."
            ],
            "correcta": 0,
            "explica": "La placa RH tiene tratamiento especial para resistir humedad y vapor, ideal para baños y cocinas, mientras que la ST es de uso general en ambientes secos."
          },
          {
            "q": "¿Se pueden hacer paredes acústicas con placas de yeso?",
            "opciones": [
              "Sí, con placas acústicas y lana de vidrio",
              "No, el yeso no aísla sonido",
              "Solo con placas de PVC",
              "Solo con mampostería tradicional"
            ],
            "correcta": 0,
            "explica": "Existen placas acústicas especiales y se puede agregar lana de vidrio entre montantes para mejorar el aislamiento."
          },
          {
            "q": "¿Cómo se terminan las juntas entre placas?",
            "opciones": [
              "Con cinta y masilla",
              "Con cemento",
              "Con silicona",
              "Se dejan abiertas"
            ],
            "correcta": 0,
            "explica": "Las juntas se toman con cinta y masilla para lograr una superficie lisa y lista para pintar."
          }
        ]
      },
      {
        "nivel": 3,
        "nombre": "Experto",
        "objetivo": "Asesoramiento integral",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "Un cliente quiere dividir un ambiente grande en dos. ¿Qué sistema le proponés?",
            "opciones": [
              "Tabique de drywall con placas ST y perfilería",
              "Muro de ladrillos con revoque grueso",
              "Biombo de madera con paneles fijos",
              "Cortina gruesa con riel superior"
            ],
            "correcta": 0,
            "explica": "El tabique de drywall es rápido, limpio y permite aislación acústica."
          },
          {
            "q": "Un cliente va a hacer un baño nuevo con drywall. ¿Qué placa le vendés?",
            "opciones": [
              "Placa RH (verde) resistente a humedad",
              "Placa ST estándar para uso general",
              "Placa RF resistente al fuego",
              "Placa acústica para aislamiento sonoro"
            ],
            "correcta": 0,
            "explica": "En baños SIEMPRE placa RH (verde), tratada para soportar vapor y salpicaduras."
          },
          {
            "q": "¿Cuál es la venta cruzada completa de un sistema drywall?",
            "opciones": [
              "Placas, perfilería, tornillos, cinta, masilla, cantoneras, lana de vidrio y pintura",
              "Placas, tornillos y masilla",
              "Perfilería, cinta y cantoneras",
              "Placas, perfiles y lana de vidrio"
            ],
            "correcta": 0,
            "explica": "El sistema drywall completo incluye todos los componentes necesarios para la instalación y terminación."
          },
          {
            "q": "¿Qué le decís a un cliente que cree que el drywall es 'débil'?",
            "opciones": [
              "Con perfilería correcta y doble placa, es sólido y resistente.",
              "Es débil, mejor usá ladrillos.",
              "No sirve para zonas húmedas.",
              "Solo es para cielorrasos."
            ],
            "correcta": 0,
            "explica": "La perfilería adecuada y el doble placa le dan rigidez y resistencia, cumpliendo normas constructivas."
          },
          {
            "q": "¿Tenemos la placa justa para cada aplicación. ¿Cuáles son?",
            "opciones": [
              "ST, RH, RF y acústicas",
              "Solo la placa estándar",
              "Solo la placa verde",
              "Solo la placa roja"
            ],
            "correcta": 0,
            "explica": "ST para ambientes secos, RH para humedad, RF para fuego y acústicas para ruido."
          }
        ]
      },
      {
        "nivel": 4,
        "nombre": "Manejo de Objeciones y Casos Prácticos",
        "objetivo": "Atención al cliente y rebatimiento de objeciones comerciales",
        "aprobar": 90,
        "preguntas": [
          {
            "q": "Un cliente manifiesta la objeción: \"Instalar Placas de Yeso (Drywall) requiere herramientas específicas o más tiempo de trabajo.\"",
            "opciones": [
              "Una instalación profesional evita filtraciones y roturas futuras.",
              "Requiere herramientas especiales y más tiempo que la construcción tradicional.",
              "Es más cara y complicada que usar ladrillos y cemento.",
              "Necesita un instalador certificado y materiales importados."
            ],
            "correcta": 0,
            "explica": "La instalación profesional en obra intermedia ahorra costos enormes de reparación oculta."
          },
          {
            "q": "Caso práctico: El cliente no sabe si comprar Placas de Yeso (Drywall) en la medida estándar o la superior. ¿Qué le aconsejás?",
            "opciones": [
              "Calcular la demanda según usuarios y caudal de la obra.",
              "Elegir la medida estándar para ahorrar en el costo inicial.",
              "Optar por la medida superior para tener más reserva de agua.",
              "Seleccionar la medida según el color de las placas."
            ],
            "correcta": 0,
            "explica": "Dimensionar la instalación según el consumo real evita quedarse sin presión en horas pico."
          }
        ]
      }
    ]
  },
  {
    "id": "volcanboard",
    "producto": "Placas Cementicias Volcanboard",
    "rubro": "Obra Intermedia",
    "icon": "fa-solid fa-square-full",
    "color": "#0ea5e9",
    "descripcion": "Fibrocemento de alta resistencia para exteriores. Placo/Volcán.",
    "niveles": [
      {
        "nivel": 1,
        "nombre": "Básico",
        "objetivo": "¿Qué es Volcanboard?",
        "aprobar": 70,
        "preguntas": [
          {
            "q": "¿De qué están hechas las placas Volcanboard?",
            "opciones": [
              "Cemento, sílice, fibras y aditivos",
              "Yeso, cartón y celulosa",
              "Madera prensada y resinas",
              "Plástico reciclado y fibra de vidrio"
            ],
            "correcta": 0,
            "explica": "Las placas Volcanboard se componen de cemento, sílice de cuarzo, fibras celulósicas y aditivos, curados en autoclave."
          },
          {
            "q": "¿Para qué zonas son ideales las placas Volcanboard?",
            "opciones": [
              "Exteriores, zonas húmedas y ambientes exigentes",
              "Interiores secos y aislados",
              "Cielorrasos y entrepisos",
              "Pisos y contrapisos"
            ],
            "correcta": 0,
            "explica": "Por su resistencia a la humedad y durabilidad, se recomiendan para exteriores y ambientes húmedos."
          },
          {
            "q": "¿Qué espesores están disponibles?",
            "opciones": [
              "4, 6, 8 y 10 mm",
              "Solo 2 mm",
              "Solo 50 mm",
              "No hay espesores diferentes"
            ],
            "correcta": 0,
            "explica": "Los espesores disponibles son 4, 6, 8 y 10 mm."
          },
          {
            "q": "¿Qué medida estándar tienen las placas?",
            "opciones": [
              "1,20 × 2,40 m",
              "0,60 × 1,20 m",
              "1,00 × 2,00 m",
              "2,00 × 3,00 m"
            ],
            "correcta": 0,
            "explica": "Las placas VolcanBoard se fabrican en medida estándar de 1,20 × 2,40 metros."
          },
          {
            "q": "¿Volcanboard contiene asbesto?",
            "opciones": [
              "No, está libre de asbestos",
              "Sí, contiene asbesto en su composición",
              "Depende del espesor de la placa",
              "Solo las de mayor espesor lo incluyen"
            ],
            "correcta": 0,
            "explica": "Las placas Volcanboard están libres de asbestos."
          }
        ]
      },
      {
        "nivel": 2,
        "nombre": "Intermedio",
        "objetivo": "Propiedades y usos",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "¿Por qué Volcanboard es mejor que el yeso en exteriores?",
            "opciones": [
              "Resiste humedad, moho, termitas, UV y fuego; el yeso se deteriora",
              "Es más económico y fácil de instalar que el yeso",
              "Tiene mejor terminación superficial que el yeso",
              "Es más liviano y flexible que el yeso"
            ],
            "correcta": 0,
            "explica": "Volcanboard está diseñado para exteriores con resistencia a humedad, moho, termitas, UV y fuego, mientras que el yeso no soporta esas condiciones."
          },
          {
            "q": "¿Qué da la estabilidad dimensional a Volcanboard?",
            "opciones": [
              "El curado en autoclave",
              "El agregado de fibras de vidrio",
              "El sellador de juntas flexibles",
              "La exposición prolongada a los rayos UV"
            ],
            "correcta": 0,
            "explica": "El curado en autoclave proporciona estabilidad dimensional, evitando deformaciones."
          },
          {
            "q": "¿Se pueden pegar cerámicos sobre Volcanboard?",
            "opciones": [
              "Sí, se pueden pegar cerámicos.",
              "No, solo admite pintura o textura.",
              "Sí, pero solo en interiores y con adhesivo especial.",
              "No, requiere un contrapiso de cemento."
            ],
            "correcta": 0,
            "explica": "Volcanboard es compatible con revestimientos cerámicos, entre otros acabados."
          },
          {
            "q": "¿Para qué se usan los espesores de 4 mm?",
            "opciones": [
              "Cielorrasos de aleros, revestimientos livianos",
              "Muros estructurales y tabiques portantes",
              "Pisos de alto tránsito y bases de deck",
              "Fundaciones y contrapisos exteriores"
            ],
            "correcta": 0,
            "explica": "Los espesores finos (4 mm) se usan en cielorrasos de aleros y revestimientos exteriores livianos."
          },
          {
            "q": "¿Cómo se fijan las placas Volcanboard?",
            "opciones": [
              "Con tornillos especiales para fibrocemento",
              "Con clavos comunes y pegamento de contacto",
              "Con tornillos para madera y tarugos plásticos",
              "Con fijaciones para placa de yeso y cinta de papel"
            ],
            "correcta": 0,
            "explica": "Se fijan con tornillos especiales para fibrocemento sobre estructura metálica o de madera."
          }
        ]
      },
      {
        "nivel": 3,
        "nombre": "Experto",
        "objetivo": "Asesoramiento de proyecto",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "Un cliente quiere revestir la fachada de su casa con construcción en seco. ¿Qué le vendés?",
            "opciones": [
              "Volcanboard 8-10 mm con perfilería y tornillos cementicios",
              "Placas de yeso ST con cinta y masilla para juntas",
              "Ladrillos huecos del 8 con mortero y revoque",
              "Pintura exterior con sellador acrílico y fijador"
            ],
            "correcta": 0,
            "explica": "Volcanboard de 8-10 mm es apto para fachadas en seco, fijado con perfilería y tornillos cementicios."
          },
          {
            "q": "Un arquitecto necesita cerrar un balcón semicubierto. ¿Qué placa le recomendás?",
            "opciones": [
              "Volcanboard: resiste humedad, UV y es incombustible",
              "Placa de yeso común, que no tolera la intemperie",
              "Madera tratada, que requiere mantenimiento constante",
              "Cartón prensado, que se deteriora con la humedad"
            ],
            "correcta": 0,
            "explica": "Volcanboard es ideal para semicubiertos por su resistencia a la humedad, rayos UV y su carácter incombustible."
          },
          {
            "q": "¿Qué venta cruzada hacés con Volcanboard?",
            "opciones": [
              "Perfilería, tornillos, selladores, cintas y terminaciones",
              "Solo placas y cemento",
              "Solo tornillos y pintura",
              "Solo perfilería y selladores"
            ],
            "correcta": 0,
            "explica": "La venta cruzada incluye todos los complementos necesarios para instalar y terminar las placas."
          },
          {
            "q": "¿Cómo se sellan las juntas entre placas Volcanboard?",
            "opciones": [
              "Con selladores flexibles o cinta Volcán",
              "Con cemento Portland",
              "Con silicona acética",
              "No se sellan"
            ],
            "correcta": 0,
            "explica": "Las juntas se sellan con selladores flexibles o cinta para juntas Volcán."
          },
          {
            "q": "¿Cuáles son los 5 beneficios clave de Volcanboard?",
            "opciones": [
              "Resiste humedad y moho, es durable, incombustible, estable y sin asbestos",
              "Es económico, fácil de cortar, liviano y no requiere estructura",
              "Aísla térmicamente, es flexible, ignífugo y resiste impactos",
              "Es impermeable, elástico, reciclable y no necesita sellado"
            ],
            "correcta": 0,
            "explica": "Los cinco beneficios son: resistencia a humedad y moho, alta durabilidad mecánica, incombustibilidad, estabilidad dimensional y ausencia de asbestos."
          }
        ]
      },
      {
        "nivel": 4,
        "nombre": "Manejo de Objeciones y Casos Prácticos",
        "objetivo": "Atención al cliente y rebatimiento de objeciones comerciales",
        "aprobar": 90,
        "preguntas": [
          {
            "q": "Un cliente manifiesta la objeción: \"Instalar Placas Cementicias Volcanboard requiere herramientas específicas o más tiempo de trabajo.\"",
            "opciones": [
              "Esa instalación asegura cero filtraciones a largo plazo, evitando romper paredes en el futuro.",
              "Le das la razón y le sugerís atar todo con alambre.",
              "Le decís que no instale nada y que use otro material.",
              "Le sugerís usar manguera de jardín común para sellar."
            ],
            "correcta": 0,
            "explica": "Una instalación profesional en obra intermedia ahorra costos enormes de reparación oculta."
          },
          {
            "q": "Caso práctico: El cliente no sabe si comprar Placas Cementicias Volcanboard en la medida estándar o la superior. ¿Qué le aconsejás?",
            "opciones": [
              "Calcular la demanda según el consumo de la obra para no quedarse corto.",
              "Elegir la medida estándar por ser la más económica.",
              "Comprar la superior para evitar problemas de presión.",
              "Usar la medida que venga en stock sin calcular."
            ],
            "correcta": 0,
            "explica": "Dimensionar correctamente la instalación asegura presión, capacidad y confort constante."
          }
        ]
      }
    ]
  },
  {
    "id": "canerias-gruesas",
    "producto": "Cañerías Gruesas",
    "rubro": "Obra Intermedia",
    "icon": "fa-solid fa-pipe-section",
    "color": "#0ea5e9",
    "descripcion": "Polietileno para entrada de agua y PVC sanitario para desagüe cloacal. Marca Tigre.",
    "niveles": [
      {
        "nivel": 1,
        "nombre": "Básico",
        "objetivo": "Tipos de cañerías",
        "aprobar": 70,
        "preguntas": [
          {
            "q": "¿Para qué se usa el caño de polietileno negro?",
            "opciones": [
              "Para llevar agua potable desde la red hasta la casa o el tanque",
              "Para evacuar los líquidos cloacales desde los artefactos sanitarios hacia el sistema de tratamiento",
              "Para conducir el agua caliente desde el termotanque hasta los puntos de consumo en la vivienda",
              "Para llevar el agua de lluvia desde los techos hasta el desagüe pluvial de la vereda"
            ],
            "correcta": 0,
            "explica": "El polietileno negro se usa para entrada de agua potable, ya que resiste presión y puede enterrarse."
          },
          {
            "q": "¿Para qué se usa el PVC blanco sanitario?",
            "opciones": [
              "Para desagüe cloacal",
              "Para agua potable de presión",
              "Para gas natural",
              "Para ventilación"
            ],
            "correcta": 0,
            "explica": "El PVC blanco sanitario conduce los residuos líquidos de baños, cocina y lavadero."
          },
          {
            "q": "¿Qué marca de cañerías trabaja Rosso?",
            "opciones": [
              "Tigre",
              "Holcim",
              "Weber",
              "Ferrum"
            ],
            "correcta": 0,
            "explica": "Trabajamos cañerías marca Tigre."
          },
          {
            "q": "¿Qué diámetros de PVC cloacal son los más comunes?",
            "opciones": [
              "110 mm y 160 mm",
              "75 mm y 200 mm",
              "90 mm y 125 mm",
              "50 mm y 100 mm"
            ],
            "correcta": 0,
            "explica": "Los diámetros más comunes de PVC cloacal son 110 mm y 160 mm."
          },
          {
            "q": "¿Qué significan las clasificaciones K4, K6, K10 del polietileno?",
            "opciones": [
              "Indican la presión que soporta el caño",
              "Señalan el diámetro interno del caño",
              "Indican la flexibilidad del material",
              "Muestran el grosor de la pared del caño"
            ],
            "correcta": 0,
            "explica": "Las clasificaciones K4, K6, K10 se refieren a la presión nominal que el caño puede soportar, siendo mayor en K10."
          }
        ]
      },
      {
        "nivel": 2,
        "nombre": "Intermedio",
        "objetivo": "Uniones y accesorios",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "¿Cómo se unen los caños de PVC sanitario?",
            "opciones": [
              "Con adhesivo o juntas elásticas",
              "Con soldadura de estaño",
              "Con cemento y arena",
              "Se enroscan entre sí"
            ],
            "correcta": 0,
            "explica": "El PVC sanitario se une con adhesivo especial o juntas elásticas, según el tipo de caño."
          },
          {
            "q": "¿Cómo se unen los caños de polietileno?",
            "opciones": [
              "Con accesorios de compresión",
              "Con adhesivo especial para PVC",
              "Con juntas elásticas y sellador",
              "Con soldadura y cinta teflón"
            ],
            "correcta": 0,
            "explica": "Los accesorios de compresión garantizan uniones firmes y sin pérdidas en caños de polietileno."
          },
          {
            "q": "¿Qué complementos se venden con las cañerías?",
            "opciones": [
              "Codos, tees, uniones, adhesivo, lubricante, llaves y cámaras",
              "Solo los caños y pegamento",
              "Solo cinta y sellador",
              "Solo herramientas de corte"
            ],
            "correcta": 0,
            "explica": "Estos accesorios completan la instalación de cañerías gruesas."
          },
          {
            "q": "¿Qué ventaja tiene el PVC sobre otros materiales para desagüe?",
            "opciones": [
              "Es liviano, resistente y no se corroe",
              "Es pesado y se oxida con el tiempo",
              "Es frágil y se rompe fácilmente",
              "No ofrece ventajas frente a otros"
            ],
            "correcta": 0,
            "explica": "El PVC es liviano, resistente, no se corroe y permite evacuación rápida de líquidos."
          },
          {
            "q": "¿Qué argumento clave usás para vender cañerías de calidad?",
            "opciones": [
              "El caño correcto evita filtraciones y roturas.",
              "La elección de cañerías no afecta la durabilidad de la instalación sanitaria.",
              "El tipo de material no influye en el rendimiento de la instalación.",
              "Las cañerías de menor costo siempre garantizan un buen funcionamiento."
            ],
            "correcta": 0,
            "explica": "Usar el tipo correcto de caño asegura una instalación duradera, sin filtraciones ni roturas."
          }
        ]
      },
      {
        "nivel": 3,
        "nombre": "Experto",
        "objetivo": "Asesoramiento completo",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "Un cliente construye una casa nueva. ¿Qué cañerías gruesas necesita?",
            "opciones": [
              "Polietileno negro para entrada de agua y PVC blanco para desagüe",
              "Utilizar únicamente PVC blanco para la entrada de agua y el desagüe, ya que es más resistente a la presión y a la corrosión, y se adapta a cualquier tipo de terreno sin necesidad de accesorios especiales.",
              "Emplear solo polietileno negro para ambas funciones, porque es flexible y soporta altas presiones, y además se puede usar en desagües sin riesgo de obstrucciones ni filtraciones, simplificando la instalación.",
              "Instalar caños de metal galvanizado para la entrada de agua y el desagüe, ya que son más duraderos y resistentes a los golpes, y no requieren uniones especiales ni adhesivos, garantizando una conexión segura y permanente."
            ],
            "correcta": 0,
            "explica": "En una casa nueva se necesitan ambos sistemas: polietileno para la entrada de agua y PVC para el desagüe cloacal."
          },
          {
            "q": "¿Cuál es la venta cruzada al vender cañerías gruesas?",
            "opciones": [
              "Accesorios, adhesivo, lubricante, herramientas, llaves y cámaras",
              "Únicamente los caños y codos",
              "Solamente el adhesivo especial",
              "Solo las llaves de paso"
            ],
            "correcta": 0,
            "explica": "La venta cruzada incluye todos los elementos necesarios para la instalación completa del sistema."
          },
          {
            "q": "¿Cuándo usar polietileno K10 en lugar de K4?",
            "opciones": [
              "Cuando la presión de la red es alta o el tramo es largo",
              "Cuando el agua es para consumo humano",
              "Cuando el caño va a estar expuesto al sol",
              "Cuando la instalación es para desagüe cloacal"
            ],
            "correcta": 0,
            "explica": "K10 soporta mayor presión que K4, por eso se usa en redes de alta presión o tramos largos."
          },
          {
            "q": "¿Qué sellador se usa para juntas de PVC?",
            "opciones": [
              "Adhesivo para PVC o lubricante para juntas",
              "Cemento de contacto multiuso para materiales plásticos",
              "Pegamento universal instantáneo que se aplica en ambas caras",
              "Sellador de silicona transparente para uso general en baños"
            ],
            "correcta": 0,
            "explica": "El adhesivo especial para PVC o el lubricante para juntas elásticas aseguran uniones sin pérdidas según el tipo de caño."
          },
          {
            "q": "¿Qué precaución hay que tener al enterrar caños de polietileno?",
            "opciones": [
              "Verificar la clasificación K y proteger de golpes al rellenar",
              "Usar adhesivo especial para uniones",
              "Enterrarlo sin protección adicional",
              "Pintarlo con esmalte sintético"
            ],
            "correcta": 0,
            "explica": "La clasificación K indica la presión que soporta el caño, y protegerlo evita daños al rellenar la zanja."
          }
        ]
      },
      {
        "nivel": 4,
        "nombre": "Manejo de Objeciones y Casos Prácticos",
        "objetivo": "Atención al cliente y rebatimiento de objeciones comerciales",
        "aprobar": 90,
        "preguntas": [
          {
            "q": "Un cliente manifiesta la objeción: \"Instalar Cañerías Gruesas requiere herramientas específicas o más tiempo de trabajo.\"",
            "opciones": [
              "Una instalación correcta evita filtraciones y roturas futuras.",
              "El tiempo extra se compensa con el precio más bajo del material.",
              "Las herramientas se alquilan y encarecen el presupuesto final.",
              "La instalación es rápida pero requiere mantenimiento mensual."
            ],
            "correcta": 0,
            "explica": "Una instalación profesional en obra intermedia ahorra costos enormes de reparación oculta."
          },
          {
            "q": "Caso práctico: El cliente no sabe si comprar Cañerías Gruesas en la medida estándar o la superior. ¿Qué le aconsejás?",
            "opciones": [
              "Calcular la demanda según usuarios y caudal de la obra.",
              "Elegir la medida estándar por ser la más común en el mercado.",
              "Optar por la superior para evitar cualquier problema futuro.",
              "Consultar con el cliente cuál prefiere sin darle recomendación."
            ],
            "correcta": 0,
            "explica": "Dimensionar correctamente la instalación asegura presión, capacidad y confort constante."
          }
        ]
      }
    ]
  },
  {
    "id": "gas-agua",
    "producto": "Instalaciones Gas y Agua",
    "rubro": "Obra Intermedia",
    "icon": "fa-solid fa-fire-flame-simple",
    "color": "#0ea5e9",
    "descripcion": "Termofusión PPR para agua (Tigre) y Sigas para gas. Sistema circulatorio de la vivienda.",
    "niveles": [
      {
        "nivel": 1,
        "nombre": "Básico",
        "objetivo": "Sistemas de instalación",
        "aprobar": 70,
        "preguntas": [
          {
            "q": "¿Qué sistema es el estándar actual para agua interna?",
            "opciones": [
              "Termofusión (PPR)",
              "Caños de plomo roscados",
              "Fusión Gas (Sigas)",
              "Caños de cemento"
            ],
            "correcta": 0,
            "explica": "La termofusión (PPR) es el estándar actual porque suelda los caños por calor, logrando una unión molecular sin pérdidas."
          },
          {
            "q": "¿Qué es el sistema Sigas?",
            "opciones": [
              "Sistema de gas por termofusión",
              "Sistema de agua por gravedad",
              "Sistema de calefacción eléctrico",
              "Sistema de ventilación forzada"
            ],
            "correcta": 0,
            "explica": "Sigas es un sistema de caños y accesorios para gas que se unen por termofusión, ofreciendo rapidez y seguridad."
          },
          {
            "q": "¿Qué diferencia hay entre las líneas PN12 y PN20/PN25?",
            "opciones": [
              "PN12 para agua fría; PN20/PN25 para agua caliente o presiones mayores",
              "PN12 se usa para agua caliente y PN20/PN25 para agua fría o presiones menores",
              "Las líneas PN12 y PN20/PN25 son indistintas para cualquier tipo de agua",
              "PN12 es para agua fría y PN20/PN25 solo para agua caliente sin importar la presión"
            ],
            "correcta": 0,
            "explica": "La línea PN12 está diseñada para agua fría, mientras que PN20/PN25 soportan agua caliente o presiones mayores."
          },
          {
            "q": "¿Quién debe instalar la instalación de gas?",
            "opciones": [
              "Un gasista matriculado",
              "Cualquier persona con herramientas",
              "El dueño de la casa",
              "Un plomero sin matrícula"
            ],
            "correcta": 0,
            "explica": "La normativa exige que la instalación de gas la realice un gasista matriculado."
          },
          {
            "q": "¿Qué son las rejillas de ventilación en instalaciones de gas?",
            "opciones": [
              "Son obligatorias por normativa para renovar el aire",
              "Son opcionales y decorativas en ambientes",
              "Solo se instalan en baños y cocinas",
              "No se usan en instalaciones de gas"
            ],
            "correcta": 0,
            "explica": "Las rejillas de ventilación son obligatorias por normativa donde hay artefactos a gas."
          }
        ]
      },
      {
        "nivel": 2,
        "nombre": "Intermedio",
        "objetivo": "Materiales y accesorios",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "¿Qué accesorios de termofusión vendemos para agua?",
            "opciones": [
              "Codos, tees, uniones, curvas, tapones, llaves de paso, reducciones y adaptadores",
              "Solo caños de PPR y sus uniones",
              "Solo codos y llaves de paso",
              "Solo tees y reducciones metálicas"
            ],
            "correcta": 0,
            "explica": "La línea de termofusión incluye todos esos accesorios para armar la instalación de agua."
          },
          {
            "q": "¿Qué diferencia hay entre el sistema epoxi y Sigas para gas?",
            "opciones": [
              "Epoxi es roscado; Sigas es termofusión",
              "Ambos usan el mismo sistema de unión",
              "Epoxi es más moderno que Sigas",
              "Sigas se instala con rosca tradicional"
            ],
            "correcta": 0,
            "explica": "El epoxi usa unión roscada, mientras que Sigas emplea termofusión, que es más rápida y segura."
          },
          {
            "q": "¿Qué dato importante tienen los caños Sigas impreso?",
            "opciones": [
              "La fecha de vencimiento",
              "El diámetro nominal",
              "El lote de fabricación",
              "La presión máxima de trabajo"
            ],
            "correcta": 0,
            "explica": "Los caños Sigas tienen impresa la fecha de vencimiento, que debe verificarse antes de su instalación."
          },
          {
            "q": "¿Qué complementos se venden con la instalación de agua por termofusión?",
            "opciones": [
              "Termofusora, boquillas, tijeras, válvulas y flexibles",
              "Sellador, cinta teflón y llave inglesa",
              "Cemento de contacto y cinta aisladora",
              "Solo caños y accesorios de PPR"
            ],
            "correcta": 0,
            "explica": "La termofusión requiere herramientas específicas como la termofusora y boquillas, además de tijeras corta tubo, válvulas y flexibles para completar la instalación."
          },
          {
            "q": "¿Qué accesorios clave se necesitan para la instalación de gas?",
            "opciones": [
              "Nichos, reguladores, llaves de paso, rejillas y flexibles certificados",
              "Caños de PPR y accesorios de fusión",
              "Termofusora, boquillas y tijeras corta tubo",
              "Válvulas de paso y adaptadores metálicos"
            ],
            "correcta": 0,
            "explica": "La instalación de gas requiere elementos específicos para seguridad y funcionamiento, como nichos, reguladores, llaves, rejillas y flexibles certificados."
          }
        ]
      },
      {
        "nivel": 3,
        "nombre": "Experto",
        "objetivo": "Asesoramiento de seguridad",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "Un cliente va a hacer la instalación de agua de su casa nueva. ¿Qué le vendés?",
            "opciones": [
              "Caños PPR, accesorios, termofusora, flexibles y válvulas",
              "Caños de cobre y accesorios de bronce",
              "Caños de PVC y pegamento para uniones",
              "Caños de polietileno y abrazaderas metálicas"
            ],
            "correcta": 0,
            "explica": "La termofusión PPR es el estándar seguro para agua fría y caliente, y se vende con los accesorios y herramientas necesarios para la instalación."
          },
          {
            "q": "¿Cuál es el argumento clave de la termofusión?",
            "opciones": [
              "Confiable, resiste presión y temperatura, fácil de instalar",
              "Es difícil de instalar y requiere mucha experiencia",
              "Es temporal y se debe reemplazar cada pocos años",
              "Solo sirve para agua fría, no para agua caliente"
            ],
            "correcta": 0,
            "explica": "La termofusión es confiable, resiste presión y altas temperaturas, y es fácil de instalar con la herramienta adecuada, generando uniones sin pérdidas."
          },
          {
            "q": "Un cliente necesita conectar una cocina a la red de gas. ¿Qué le ofrecés?",
            "opciones": [
              "Flexibles certificados, llave aprobada y rejilla de ventilación",
              "Un flexo genérico y una llave común",
              "Manguera de goma y una rejilla",
              "Solo un flexible y la llave de paso"
            ],
            "correcta": 0,
            "explica": "La conexión de cocina exige elementos certificados y ventilación por seguridad."
          },
          {
            "q": "¿Qué le decís a un cliente que quiere hacer la instalación de gas solo?",
            "opciones": [
              "Debe hacerla un gasista matriculado",
              "Puede hacerla sin problema",
              "Con un tutorial alcanza",
              "Solo necesita comprar los caños"
            ],
            "correcta": 0,
            "explica": "La instalación de gas es obligación de un gasista matriculado por seguridad y normativa."
          },
          {
            "q": "¿Qué venta cruzada completa hacés con instalaciones de gas y agua?",
            "opciones": [
              "Caños, accesorios, herramientas, selladores, flexibles, rejillas y llaves",
              "Únicamente caños y accesorios básicos",
              "Solo selladores y cintas de teflón",
              "Herramientas de fusión y nada más"
            ],
            "correcta": 0,
            "explica": "La venta cruzada completa incluye todos los elementos necesarios para la instalación, no solo los caños o accesorios."
          }
        ]
      },
      {
        "nivel": 4,
        "nombre": "Manejo de Objeciones y Casos Prácticos",
        "objetivo": "Atención al cliente y rebatimiento de objeciones comerciales",
        "aprobar": 90,
        "preguntas": [
          {
            "q": "Un cliente manifiesta la objeción: \"Instalar Instalaciones Gas y Agua requiere herramientas específicas o más tiempo de trabajo.\"",
            "opciones": [
              "Asegura cero filtraciones a largo plazo, evitando romper paredes.",
              "El sistema de termofusión para agua y gas exige una inversión en equipos que no siempre está disponible en todas las ferreterías.",
              "La instalación por termofusión demanda más horas de trabajo que el sistema tradicional de rosca, aunque el resultado final es equivalente.",
              "El costo adicional por las herramientas especializadas no se justifica si se compara con la durabilidad de la instalación roscada."
            ],
            "correcta": 0,
            "explica": "Una instalación profesional en obra intermedia ahorra costos enormes de reparación oculta."
          },
          {
            "q": "Caso práctico: El cliente no sabe si comprar Instalaciones Gas y Agua en la medida estándar o la superior. ¿Qué le aconsejás?",
            "opciones": [
              "Calcular la demanda según usuarios y caudal de la obra.",
              "Elegir la medida estándar por ser la más común.",
              "Optar por la superior para tener más presión.",
              "Comprar la más barata para ahorrar en el momento."
            ],
            "correcta": 0,
            "explica": "Dimensionar según la demanda evita quedarse sin presión en horas pico."
          }
        ]
      }
    ]
  },
  {
    "id": "ceramicos",
    "producto": "Cerámicos y Revestimientos",
    "rubro": "Terminaciones",
    "icon": "fa-solid fa-border-all",
    "color": "#8b5cf6",
    "descripcion": "Revestimiento clásico para pisos y paredes. Marcas: Cañuelas, Cortines, Allpa, Lourdes.",
    "niveles": [
      {
        "nivel": 1,
        "nombre": "Básico",
        "objetivo": "Tipos y PEI",
        "aprobar": 70,
        "preguntas": [
          {
            "q": "¿Qué indica el índice PEI en un cerámico?",
            "opciones": [
              "La resistencia al desgaste",
              "El precio por metro cuadrado",
              "El color del esmalte",
              "El peso de cada pieza"
            ],
            "correcta": 0,
            "explica": "El índice PEI clasifica la resistencia al desgaste del esmalte, desde 1 (solo paredes) hasta 5 (tránsito comercial intenso)."
          },
          {
            "q": "¿Qué PEI mínimo se necesita para un piso de cocina?",
            "opciones": [
              "PEI 3",
              "PEI 1",
              "PEI 2",
              "PEI 4"
            ],
            "correcta": 0,
            "explica": "Para cocinas se requiere PEI 3 mínimo por el tránsito moderado."
          },
          {
            "q": "¿Qué marcas de cerámicos trabaja Rosso?",
            "opciones": [
              "Cañuelas, Cortines, Allpa y Lourdes",
              "Solo Cerámica Alberdi",
              "Solo San Lorenzo",
              "Solo FV"
            ],
            "correcta": 0,
            "explica": "Trabajamos cerámicos de Cañuelas, Cortines, Allpa y Lourdes."
          },
          {
            "q": "¿Por qué los cerámicos son higiénicos?",
            "opciones": [
              "Su superficie esmaltada es no porosa y fácil de limpiar",
              "Porque son de colores claros que disimulan la suciedad",
              "Porque son más caros que otros revestimientos",
              "Porque son pesados y no se mueven con facilidad"
            ],
            "correcta": 0,
            "explica": "La superficie esmaltada es no porosa, lo que impide la absorción de líquidos y facilita la limpieza."
          },
          {
            "q": "¿Cuánto extra se recomienda comprar para cortes y desperdicios?",
            "opciones": [
              "10-15% extra",
              "5% extra",
              "20-25% extra",
              "30% extra"
            ],
            "correcta": 0,
            "explica": "Se recomienda un 10-15% extra sobre la cantidad calculada para cubrir cortes y desperdicios."
          }
        ]
      },
      {
        "nivel": 2,
        "nombre": "Intermedio",
        "objetivo": "Colocación y juntas",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "¿Cada cuántos metros se deben dejar juntas de dilatación en superficies grandes?",
            "opciones": [
              "Cada 6-8 metros y en perímetros (en superficies de +30-40 m²)",
              "Cada 50 metros",
              "Nunca",
              "Cada 1 metro"
            ],
            "correcta": 0,
            "explica": "En superficies de más de 30-40 m²: juntas estructurales cada 6-8 m y en perímetros."
          },
          {
            "q": "¿Cerámico o porcelanato para exteriores expuestos?",
            "opciones": [
              "Porcelanato",
              "Cerámico común",
              "Son iguales",
              "Ninguno sirve"
            ],
            "correcta": 0,
            "explica": "El porcelanato es menos poroso y resiste mejor los cambios bruscos de temperatura, ideal para exteriores."
          },
          {
            "q": "¿Cómo se calculan los zócalos necesarios?",
            "opciones": [
              "Perímetro sin puertas ÷ largo de la pieza + 10-15%",
              "Área del piso ÷ área de la pieza + 5%",
              "Suma de las paredes ÷ ancho de la pieza",
              "Cantidad de metros lineales ÷ alto de la pieza"
            ],
            "correcta": 0,
            "explica": "Se calcula el perímetro descontando puertas y se divide por el largo de la pieza, sumando un 10-15% por cortes y desperdicios."
          },
          {
            "q": "¿Qué pegamento se usa para cerámicos estándar (<30×30)?",
            "opciones": [
              "Pegamento C1 normal",
              "Pegamento C3 flexible",
              "Cemento Portland",
              "Silicona"
            ],
            "correcta": 0,
            "explica": "Para cerámicos estándar menores a 30×30 en bases absorbentes, se usa pegamento C1 normal."
          },
          {
            "q": "¿Qué complementos se venden con los cerámicos?",
            "opciones": [
              "Pegamento, pastina, guardacantos, listeles y niveladores",
              "Solo cerámicos y sus cajas",
              "Únicamente pegamento y pastina",
              "Nada, se venden sueltos"
            ],
            "correcta": 0,
            "explica": "Los cerámicos se complementan con pegamento, pastina, guardacantos, listeles y sistemas de nivelación para su correcta instalación."
          }
        ]
      },
      {
        "nivel": 3,
        "nombre": "Experto",
        "objetivo": "Asesoramiento profesional",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "Un cliente quiere revestir su baño con cerámicos. ¿Qué PEI le recomendás para piso y pared?",
            "opciones": [
              "Piso PEI 2, pared PEI 1",
              "PEI 5 para todo",
              "PEI 1 para piso",
              "PEI 3 para pared"
            ],
            "correcta": 0,
            "explica": "En baños, el piso requiere PEI 2 por ser zona de tránsito bajo, mientras que la pared solo necesita PEI 1."
          },
          {
            "q": "Un cliente dice que quiere cerámica para un local comercial. ¿Qué le recomendás?",
            "opciones": [
              "PEI 4 o 5, o porcelanato por mayor resistencia",
              "PEI 1 o 2 alcanza para un local comercial, es suficiente",
              "Cerámico de pared, es más económico y rinde igual",
              "Cualquier cerámico sirve, no hay diferencia entre usos"
            ],
            "correcta": 0,
            "explica": "Para local comercial se requiere alta resistencia al desgaste, por eso PEI 4 o 5, o porcelanato si hay exposición exterior."
          },
          {
            "q": "¿Cuál es la venta cruzada completa de cerámicos?",
            "opciones": [
              "Cerámicos + pegamento + pastina + guardacantos + listeles + niveladores + disco",
              "Cerámicos + solo pegamento y pastina",
              "Cerámicos + adhesivo y sellador",
              "Cerámicos + fragüe y zócalos"
            ],
            "correcta": 0,
            "explica": "La venta cruzada incluye todos los accesorios necesarios para la instalación completa y correcta del cerámico."
          },
          {
            "q": "¿Por qué es importante dejar juntas de dilatación?",
            "opciones": [
              "Para absorber movimientos del piso y prevenir fisuras",
              "Son necesarias para facilitar la limpieza del piso y evitar que se acumule suciedad en las uniones",
              "Se utilizan únicamente para marcar la separación entre ambientes y dar un acabado visual",
              "Permiten que el piso respire y se seque más rápido después de mojarse con agua"
            ],
            "correcta": 0,
            "explica": "Las juntas absorben movimientos naturales del piso, previniendo fisuras y levantamientos."
          },
          {
            "q": "¿Cuándo ofrecer un sistema de nivelación?",
            "opciones": [
              "Con piezas grandes o porcelanatos rectificados",
              "Con piezas pequeñas y paredes",
              "Solo en exteriores",
              "Cuando el cliente lo pida"
            ],
            "correcta": 0,
            "explica": "Los niveladores evitan desniveles en piezas grandes y porcelanatos rectificados."
          }
        ]
      },
      {
        "nivel": 4,
        "nombre": "Manejo de Objeciones y Casos Prácticos",
        "objetivo": "Atención al cliente y rebatimiento de objeciones comerciales",
        "aprobar": 90,
        "preguntas": [
          {
            "q": "El cliente objeta: \"Cerámicos y Revestimientos me parece un gasto elevado para una terminación.\"",
            "opciones": [
              "Revaloriza la propiedad y exige poco mantenimiento.",
              "Es un gasto que no aporta valor a la propiedad.",
              "Solo sirve para ambientes húmedos como baños y cocinas.",
              "Se instala rápido pero se daña con el uso diario."
            ],
            "correcta": 0,
            "explica": "Las terminaciones de calidad aumentan el valor del inmueble y evitan refacciones periódicas."
          },
          {
            "q": "Cliente indeciso: \"¿Qué insumo de colocación debo llevar sí o sí para Cerámicos y Revestimientos?\"",
            "opciones": [
              "El adhesivo, sellador o perfilería específica recomendada por el fabricante.",
              "Cualquier adhesivo multiuso de ferretería sirve para cerámicos.",
              "Solo se necesita cemento y arena, sin aditivos especiales.",
              "Con agua y un poco de cemento alcanza para fijar las piezas."
            ],
            "correcta": 0,
            "explica": "Sin el producto de colocación adecuado, la terminación corre riesgo de desprenderse o mancharse."
          }
        ]
      }
    ]
  },
  {
    "id": "porcelanatos",
    "producto": "Porcelanatos",
    "rubro": "Terminaciones",
    "icon": "fa-solid fa-gem",
    "color": "#8b5cf6",
    "descripcion": "Versión premium del cerámico. Eliane, San Pietro, ILVA, Tendenza, Alberdi.",
    "niveles": [
      {
        "nivel": 1,
        "nombre": "Básico",
        "objetivo": "¿Qué es el porcelanato?",
        "aprobar": 70,
        "preguntas": [
          {
            "q": "¿Qué diferencia al porcelanato del cerámico?",
            "opciones": [
              "Es más resistente, menos poroso y apto para usos exigentes",
              "Es más económico y fácil de instalar",
              "Tiene mayor absorción de agua y es más flexible",
              "Es más liviano y se usa solo en paredes"
            ],
            "correcta": 0,
            "explica": "El porcelanato es la versión premium del cerámico, con mayor resistencia y menor porosidad, lo que lo hace apto para usos exigentes."
          },
          {
            "q": "¿Por qué el porcelanato necesita pegamento especial?",
            "opciones": [
              "Por su baja porosidad, exige C2 o C3/flexible",
              "Porque es muy pesado, necesita un adhesivo reforzado",
              "Por su superficie lisa, se usa pegamento común",
              "Por ser más caro, requiere un producto premium"
            ],
            "correcta": 0,
            "explica": "La baja porosidad del porcelanato impide la adherencia con pegamentos comunes, por eso se requiere C2 o C3/flexible."
          },
          {
            "q": "¿Qué marcas de porcelanatos trabaja Rosso?",
            "opciones": [
              "Eliane, San Pietro, ILVA, Tendenza y Alberdi",
              "Solo Ferrum, Weber y Holcim",
              "Solo Cerámica Alberdi y San Lorenzo",
              "Solo Porcelanato Loma y Vives"
            ],
            "correcta": 0,
            "explica": "Rosso comercializa porcelanatos de las marcas Eliane, San Pietro, ILVA, Tendenza y Alberdi."
          },
          {
            "q": "¿En qué formatos grandes viene el porcelanato?",
            "opciones": [
              "60×120 cm y 120×120 cm para ambientes amplios y continuos",
              "Solo 10×10 cm",
              "Solo 30×30 cm",
              "No viene en formatos grandes"
            ],
            "correcta": 0,
            "explica": "Formatos grandes: 60×120 y 120×120 cm para ambientes amplios con aspecto continuo y moderno."
          },
          {
            "q": "¿El porcelanato sirve para exteriores?",
            "opciones": [
              "Sí, por su baja absorción de agua",
              "No, solo se recomienda para interiores y zonas secas de la casa",
              "Solo para superficies interiores, nunca para áreas húmedas",
              "Únicamente para ambientes cerrados y con poca humedad"
            ],
            "correcta": 0,
            "explica": "Su bajísima absorción de agua lo hace apto para exteriores y zonas húmedas."
          }
        ]
      },
      {
        "nivel": 2,
        "nombre": "Intermedio",
        "objetivo": "Técnica de colocación",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "¿Qué es el 'doble encolado' y cuándo se aplica?",
            "opciones": [
              "Pegar en piso y reverso de la pieza; para placas de más de 45×45 cm",
              "Pegar únicamente en el reverso de la pieza, sin aplicar nada en el piso",
              "Colocar el pegamento solo sobre el contrapiso y luego asentar la placa",
              "Aplicar dos capas de adhesivo en el piso y una en la pieza para asegurar"
            ],
            "correcta": 0,
            "explica": "El doble encolado asegura adherencia total en piezas grandes, evitando desprendimientos."
          },
          {
            "q": "¿Por qué son útiles los sistemas de nivelación con porcelanatos?",
            "opciones": [
              "Evita que se noten los desniveles en piezas grandes",
              "No son necesarios para colocar porcelanatos",
              "Sirven solo para dar un acabado decorativo",
              "Se usan únicamente en cerámicos chicos"
            ],
            "correcta": 0,
            "explica": "Con piezas grandes, cualquier desnivel se nota al caminar y a contraluz. Los niveladores lo evitan."
          },
          {
            "q": "¿Qué pegamento se necesita para porcelanatos de gran formato (>60×60)?",
            "opciones": [
              "C3 flexible o C2 con doble encolado",
              "C2 estándar sin doble encolado",
              "Cemento de uso general",
              "Adhesivo de contacto"
            ],
            "correcta": 0,
            "explica": "Las piezas grandes requieren mayor adherencia y flexibilidad para evitar desprendimientos."
          },
          {
            "q": "¿Qué tipo de pastina se recomienda para juntas finas de porcelanato?",
            "opciones": [
              "Pastina epoxi",
              "Pastina de cemento grueso",
              "Cemento puro",
              "No se usa pastina"
            ],
            "correcta": 0,
            "explica": "Para juntas finas o zonas exigentes, la pastina epoxi es impermeable y anti-manchas."
          },
          {
            "q": "¿Qué herramienta se necesita para cortar porcelanato?",
            "opciones": [
              "Disco diamantado",
              "Sierra para madera",
              "Cortafrío y martillo",
              "Amoladora con disco común"
            ],
            "correcta": 0,
            "explica": "El porcelanato se corta con disco diamantado para lograr cortes precisos sin astillar la pieza."
          }
        ]
      },
      {
        "nivel": 3,
        "nombre": "Experto",
        "objetivo": "Venta consultiva",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "Un cliente quiere unificar el piso de interior y exterior con el mismo diseño. ¿Qué le proponés?",
            "opciones": [
              "Porcelanato, por su baja absorción de agua",
              "Porcelanato esmaltado de alta resistencia, apto para zonas secas",
              "Cerámico rectificado de baja porosidad, ideal para interiores",
              "Piso de madera tratada para soportar la intemperie"
            ],
            "correcta": 0,
            "explica": "El porcelanato tiene baja absorción de agua, lo que lo hace apto para interior y exterior."
          },
          {
            "q": "¿Cuál es la venta cruzada completa de porcelanatos?",
            "opciones": [
              "Porcelanato + C2/C3 + pastina epoxi + guardacantos + niveladores + disco + selladores",
              "Porcelanato + pegamento común + pastina común + zócalos + separadores + cuchara",
              "Porcelanato + adhesivo C1 + fragüe + perfiles + crucetas + cortadora",
              "Porcelanato + cemento + arena + listones + clavos + martillo"
            ],
            "correcta": 0,
            "explica": "La venta cruzada completa incluye todos los accesorios necesarios para una instalación correcta y duradera."
          },
          {
            "q": "Un cliente quiere un look moderno con juntas mínimas. ¿Qué le recomendás?",
            "opciones": [
              "Porcelanatos de gran formato (60×120 o más) con juntas de 1-2 mm + niveladores + pastina epoxi",
              "Cerámicos pequeños 10×10",
              "Ladrillos vistos",
              "Madera maciza"
            ],
            "correcta": 0,
            "explica": "Para look moderno: gran formato con juntas mínimas, niveladores para perfección y pastina epoxi."
          },
          {
            "q": "¿Por qué las juntas de dilatación son aún más importantes en porcelanato?",
            "opciones": [
              "Porque su rigidez no absorbe movimientos del piso",
              "Porque necesita más ventilación para evitar humedad",
              "Porque es más flexible y se expande con el calor",
              "Porque sin juntas no se puede limpiar bien"
            ],
            "correcta": 0,
            "explica": "El porcelanato es rígido y no absorbe movimientos: sin juntas de dilatación puede rajarse o levantarse."
          },
          {
            "q": "¿Cuánto rinde una bolsa de pegamento C3 con porcelanato grande y doble encolado?",
            "opciones": [
              "4-5 m² (menos que con piezas chicas por el doble encolado)",
              "20 m²",
              "Solo 1 m²",
              "50 m²"
            ],
            "correcta": 0,
            "explica": "Con doble encolado en piezas grandes: 4-5 m² por bolsa (vs 6-8 m² en piezas medianas)."
          }
        ]
      },
      {
        "nivel": 4,
        "nombre": "Manejo de Objeciones y Casos Prácticos",
        "objetivo": "Atención al cliente y rebatimiento de objeciones comerciales",
        "aprobar": 90,
        "preguntas": [
          {
            "q": "Un cliente dice: \"¿Por qué necesito pegamento específico para porcelanato si el pegamento común para cerámica pegó bien en mi casa?\"",
            "opciones": [
              "Porque el porcelanato tiene absorción de agua casi nula (menor a 0.5%) y requiere adhesivos con polímeros para agarre químico, no por succión mecánica.",
              "Porque la bolsa del pegamento común es más liviana.",
              "Es un mito comercial, cualquier pegamento pega igual.",
              "Porque el pegamento común disuelve el porcelanato."
            ],
            "correcta": 0,
            "explica": "El porcelanato no absorbe agua; si se usa pegamento cerámico tradicional, se despegará al poco tiempo."
          },
          {
            "q": "Cliente indeciso: \"¿Qué insumo de colocación debo llevar sí o sí para Porcelanatos?\"",
            "opciones": [
              "El adhesivo específico para porcelanato.",
              "El pegamento común de obra alcanza para la mayoría de los casos.",
              "Puede usar cualquier adhesivo cerámico que tenga en el depósito.",
              "El cemento de obra mezclado con agua es suficiente para colocarlo."
            ],
            "correcta": 0,
            "explica": "El porcelanato requiere un adhesivo clasificado C2 o superior para asegurar la adherencia."
          }
        ]
      }
    ]
  },
  {
    "id": "guardacantos",
    "producto": "Guardacantos y Listeles",
    "rubro": "Terminaciones",
    "icon": "fa-solid fa-ruler-combined",
    "color": "#8b5cf6",
    "descripcion": "Terminación y protección para revestimientos. Marca Atrim.",
    "niveles": [
      {
        "nivel": 1,
        "nombre": "Básico",
        "objetivo": "Funciones y materiales",
        "aprobar": 70,
        "preguntas": [
          {
            "q": "¿Para qué sirve un guardacanto?",
            "opciones": [
              "Proteger aristas y dar terminación prolija",
              "Para unir dos cerámicos y disimular la junta",
              "Evitar que se despegue el revestimiento de la pared",
              "Solo para decorar la pared y darle un toque de color"
            ],
            "correcta": 0,
            "explica": "Protegen las aristas de los golpes y logran una terminación más prolija que los cortes en inglete."
          },
          {
            "q": "¿Qué es un listel decorativo?",
            "opciones": [
              "Pieza angosta para decorar y dividir zonas",
              "Perfil de aluminio para proteger esquinas",
              "Moldura de yeso para techos y cornisas",
              "Cinta adhesiva para juntas de cerámica"
            ],
            "correcta": 0,
            "explica": "El listel es una pieza decorativa más angosta que el revestimiento, usada para cortar la monotonía o dividir zonas."
          },
          {
            "q": "¿En qué materiales vienen los guardacantos?",
            "opciones": [
              "Aluminio, acero inoxidable o PVC",
              "Madera, vidrio o piedra natural",
              "Plástico, goma o caucho sintético",
              "Cerámica, porcelanato o metal recubierto"
            ],
            "correcta": 0,
            "explica": "Los guardacantos se fabrican en aluminio, acero inoxidable o PVC para protección y estética."
          },
          {
            "q": "¿A qué debe corresponder la altura del guardacanto?",
            "opciones": [
              "Al espesor del revestimiento",
              "A la altura de la pared donde se instalará el revestimiento",
              "Al largo del ambiente que se está revistiendo",
              "A la junta entre los cerámicos que se van a colocar"
            ],
            "correcta": 0,
            "explica": "La altura del guardacanto (8, 10, 12 mm) debe coincidir con el espesor del revestimiento."
          },
          {
            "q": "¿Qué marca de perfilería trabajamos?",
            "opciones": [
              "Atrim",
              "Weber",
              "Ferrum",
              "Rotoplas"
            ],
            "correcta": 0,
            "explica": "La marca de perfilería que trabajamos es Atrim."
          }
        ]
      },
      {
        "nivel": 2,
        "nombre": "Intermedio",
        "objetivo": "Colocación y accesorios",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "¿Cuáles son las formas más comunes de guardacantos?",
            "opciones": [
              "Formas L o U",
              "Formas redondas",
              "Formas Z",
              "Formas planas"
            ],
            "correcta": 0,
            "explica": "Las formas más comunes son perfiles en L o en U."
          },
          {
            "q": "¿Dónde se colocan los guardacantos?",
            "opciones": [
              "En esquinas y bordes de los revestimientos",
              "En el centro de la pared",
              "En el piso, bajo los muebles",
              "En la unión entre pared y techo"
            ],
            "correcta": 0,
            "explica": "Se colocan en las esquinas y bordes expuestos para proteger las aristas."
          },
          {
            "q": "¿Dónde se colocan típicamente los listeles?",
            "opciones": [
              "A media altura o para enmarcar sectores",
              "En la unión entre pared y piso, cubriendo el zócalo",
              "En las esquinas internas de los ambientes revestidos",
              "En los bordes de las aberturas, como marcos de puertas y ventanas"
            ],
            "correcta": 0,
            "explica": "Suelen colocarse a media altura o enmarcando sectores para dar un detalle de diseño."
          },
          {
            "q": "¿Qué evita el uso del guardacanto?",
            "opciones": [
              "El descascarillado del borde y hacer cortes en inglete (a 45 grados)",
              "Evitar que el revestimiento se despegue por humedad y que las juntas se vean desparejas",
              "Reducir el tiempo de instalación al no necesitar nivelar la superficie",
              "Impedir que el agua penetre en la pared y que se formen hongos en la base"
            ],
            "correcta": 0,
            "explica": "Evita cortes en inglete (frágiles) y protege el borde de golpes."
          },
          {
            "q": "¿Qué venta complementaria acompaña a los guardacantos?",
            "opciones": [
              "Revestimientos, pegamento y pastina",
              "Pintura, sellador y enduido",
              "Cemento, cal y arena",
              "Cerámicos, fragüe y adhesivo"
            ],
            "correcta": 0,
            "explica": "La venta complementaria de los guardacantos incluye los materiales necesarios para su instalación sobre revestimientos."
          }
        ]
      },
      {
        "nivel": 3,
        "nombre": "Experto",
        "objetivo": "Asesoramiento estético",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "Un cliente reviste un baño moderno con porcelanato rectificado. ¿Qué guardacanto sugerís?",
            "opciones": [
              "Guardacanto de acero inoxidable o aluminio perfil L",
              "Guardacanto de PVC blanco perfil U, ideal para cerámicos comunes",
              "Listel decorativo de vidrio para esquinas, que reemplaza al guardacanto",
              "Guardacanto de madera con terminación mate, resistente a la humedad"
            ],
            "correcta": 0,
            "explica": "El perfil recto en aluminio o acero inoxidable combina con el estilo minimalista del porcelanato rectificado."
          },
          {
            "q": "El cliente quiere romper la monotonía de una pared lisa. ¿Qué le ofrecés?",
            "opciones": [
              "Listeles decorativos a media altura",
              "Guardacantos de aluminio en las esquinas",
              "Pastina de color contrastante en las juntas",
              "Pegamento epoxi para resaltar las uniones"
            ],
            "correcta": 0,
            "explica": "Los listeles decorativos rompen la monotonía y agregan un detalle elegante a la pared."
          },
          {
            "q": "¿Qué información clave le pedís al cliente para vender el guardacanto correcto?",
            "opciones": [
              "El espesor del cerámico/porcelanato que va a colocar",
              "El color del techo",
              "La marca del inodoro",
              "El peso del revestimiento"
            ],
            "correcta": 0,
            "explica": "Para vender el guardacanto hay que saber el espesor de la pieza (para darle 8, 10 o 12 mm)."
          },
          {
            "q": "¿El listel lleva pastina?",
            "opciones": [
              "Sí, se toma la junta con pastina",
              "No, se coloca sin pastina",
              "Solo si es de cerámica",
              "Lleva silicona en vez de pastina"
            ],
            "correcta": 0,
            "explica": "El listel se instala como parte del revestimiento y sus juntas se sellan con pastina, igual que las demás piezas."
          },
          {
            "q": "El cliente compra un listel de 5 cm de ancho. ¿Qué más se necesita calcular?",
            "opciones": [
              "Los metros lineales a cubrir",
              "El espesor del revestimiento",
              "La cantidad de pegamento",
              "El ángulo de corte"
            ],
            "correcta": 0,
            "explica": "Los listeles se calculan midiendo los metros lineales que se desean cubrir en la pared."
          }
        ]
      },
      {
        "nivel": 4,
        "nombre": "Manejo de Objeciones y Casos Prácticos",
        "objetivo": "Atención al cliente y rebatimiento de objeciones comerciales",
        "aprobar": 90,
        "preguntas": [
          {
            "q": "El cliente objeta: \"Guardacantos y Listeles me parece un gasto elevado para una terminación.\"",
            "opciones": [
              "Revaloriza la propiedad y requiere bajo mantenimiento.",
              "Es un gasto que no aporta valor a la propiedad.",
              "Solo sirve para ambientes de lujo, no para baños.",
              "Se puede reemplazar por pintura común sin problemas."
            ],
            "correcta": 0,
            "explica": "Las terminaciones de calidad aumentan el valor del inmueble y evitan refacciones periódicas."
          },
          {
            "q": "Cliente indeciso: \"¿Qué insumo de colocación debo llevar sí o sí para Guardacantos y Listeles?\"",
            "opciones": [
              "Adhesivo, sellador o perfilería recomendada por el fabricante.",
              "Puede usar cualquier adhesivo multiuso que tenga en su obra.",
              "La instalación no requiere de ningún insumo adicional.",
              "Siempre se necesita un sellador especial y una perfilería de fijación."
            ],
            "correcta": 0,
            "explica": "Sin el producto adecuado, la instalación puede fallar o deteriorarse."
          }
        ]
      }
    ]
  },
  {
    "id": "pastinas",
    "producto": "Pastinas",
    "rubro": "Terminaciones",
    "icon": "fa-solid fa-fill-drip",
    "color": "#8b5cf6",
    "descripcion": "Sella juntas entre revestimientos. Marca Weber.",
    "niveles": [
      {
        "nivel": 1,
        "nombre": "Básico",
        "objetivo": "Función y tipos",
        "aprobar": 70,
        "preguntas": [
          {
            "q": "¿Cuál es la función de la pastina?",
            "opciones": [
              "Rellenar y sellar juntas",
              "Adherir revestimientos a la pared",
              "Corregir desniveles del piso",
              "Dar brillo a la superficie"
            ],
            "correcta": 0,
            "explica": "La pastina rellena y sella las juntas, evitando el ingreso de humedad o suciedad y dando el acabado final."
          },
          {
            "q": "¿Qué tipos principales de pastina hay?",
            "opciones": [
              "Cementicias y epoxi",
              "Líquidas y en aerosol",
              "En pasta y en spray",
              "Plásticas y acrílicas"
            ],
            "correcta": 0,
            "explica": "Las pastinas se dividen en cementicias en polvo y epoxi de dos componentes, siendo estas últimas más resistentes e impermeables."
          },
          {
            "q": "¿Qué marca de pastinas trabajamos?",
            "opciones": [
              "Weber",
              "Holcim",
              "Ferrum",
              "Loma Negra"
            ],
            "correcta": 0,
            "explica": "Trabajamos pastinas de la marca Weber."
          },
          {
            "q": "¿Qué pastina es ideal para baños y cocinas?",
            "opciones": [
              "Antihongos y epoxi",
              "Pastina de albañilería",
              "Cemento gris",
              "Cal"
            ],
            "correcta": 0,
            "explica": "En baños y cocinas se recomiendan antihongos o epoxi por la humedad."
          },
          {
            "q": "¿Cómo cambia el diseño elegir una pastina del mismo color que el revestimiento?",
            "opciones": [
              "Disimula la junta y da continuidad",
              "Resalta el contraste entre piezas",
              "Reduce visualmente el ambiente",
              "No altera la percepción del espacio"
            ],
            "correcta": 0,
            "explica": "Tonos similares al revestimiento disimulan la junta logrando continuidad."
          }
        ]
      },
      {
        "nivel": 2,
        "nombre": "Intermedio",
        "objetivo": "Cálculo y aplicación",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "¿De qué depende el consumo de pastina?",
            "opciones": [
              "Del tamaño de la pieza, el ancho de la junta y el espesor",
              "Del tamaño del ambiente y la cantidad de revestimiento",
              "Del color elegido y la marca de la pastina",
              "Del tipo de pegamento y la humedad del lugar"
            ],
            "correcta": 0,
            "explica": "El consumo se calcula según el tamaño de la pieza, el ancho de la junta y su profundidad."
          },
          {
            "q": "Para un porcelanato 60x60 con junta de 3 mm, ¿cuál es el rendimiento aproximado?",
            "opciones": [
              "1 kg cada 5-6 m²",
              "1 kg por m²",
              "10 kg por m²",
              "0,5 kg cada 10 m²"
            ],
            "correcta": 0,
            "explica": "Para ese formato y junta, el consumo es de aproximadamente 1 kg cada 5-6 m²."
          },
          {
            "q": "¿Qué herramientas se usan para aplicar pastina?",
            "opciones": [
              "Espátula de goma y esponja",
              "Llana dentada de metal",
              "Pincel y rodillo",
              "Martillo y cincel"
            ],
            "correcta": 0,
            "explica": "La espátula de goma aplica la pastina sin rayar y la esponja limpia el excedente."
          },
          {
            "q": "¿Qué ventaja tiene la pastina Epoxi?",
            "opciones": [
              "Es más resistente, 100% impermeable y antimanchas",
              "Es más fácil de aplicar",
              "Seca en 1 minuto",
              "Es la más económica"
            ],
            "correcta": 0,
            "explica": "La pastina Epoxi es extremadamente resistente, impermeable y evita las manchas."
          },
          {
            "q": "¿Qué se debe hacer antes de pastinar?",
            "opciones": [
              "Limpiar bien las juntas",
              "Humedecer toda la pared",
              "Pintar el cerámico",
              "Aplicar una capa de pegamento"
            ],
            "correcta": 0,
            "explica": "Las juntas deben estar limpias y libres de pegamento para que la pastina agarre bien."
          }
        ]
      },
      {
        "nivel": 3,
        "nombre": "Experto",
        "objetivo": "Asesoramiento",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "Un cliente pone porcelanato claro pero quiere un estilo industrial marcado. ¿Qué pastina sugerís?",
            "opciones": [
              "Una pastina en tono contrastante, como gris oscuro o negra",
              "Una pastina en un tono claro que combine con el porcelanato para un acabado uniforme y limpio, sin destacar las juntas",
              "Una pastina epoxi de color neutro que no modifique visualmente el revestimiento y mantenga un estilo sobrio",
              "Una pastina antihongos en tono gris medio que resalte las juntas de forma sutil, pero sin llegar a un contraste fuerte"
            ],
            "correcta": 0,
            "explica": "Los tonos contrastantes resaltan la grilla de las juntas, logrando el estilo industrial buscado."
          },
          {
            "q": "Para un piso de ducha donde el cliente se queja del moho, ¿qué solución le das?",
            "opciones": [
              "Pastina epoxi",
              "Pastina cementicia común",
              "Silicona acética en todo el piso",
              "Cemento puro"
            ],
            "correcta": 0,
            "explica": "La pastina epoxi es impermeable y resistente a hongos, ideal para zonas húmedas."
          },
          {
            "q": "¿Qué venta cruzada básica hacés al vender pastina?",
            "opciones": [
              "Revestimientos, pegamento, espátula y esponjas",
              "Solo pegamento y esponja",
              "Clavos y pintura",
              "Pintura y sellador"
            ],
            "correcta": 0,
            "explica": "La venta cruzada incluye revestimientos, pegamento, espátula de goma y esponjas para completar la instalación."
          },
          {
            "q": "Si el cliente compra cerámicos chicos (20x20) con juntas de 5mm, ¿qué le advertís sobre la pastina?",
            "opciones": [
              "Que el consumo por m² será alto",
              "Que comprará poca pastina",
              "Que no lleva pastina",
              "Que rinde 20m² por kilo"
            ],
            "correcta": 0,
            "explica": "Las piezas chicas con juntas anchas generan más superficie de junta, lo que aumenta el consumo de pastina por metro cuadrado."
          },
          {
            "q": "¿Se puede usar pastina Weber en exteriores?",
            "opciones": [
              "Sí, hay opciones para exterior",
              "Sí, pero únicamente en zonas cubiertas",
              "La variedad epoxi es la única apta",
              "No, porque el sol la degrada siempre"
            ],
            "correcta": 0,
            "explica": "Las pastinas de calidad soportan intemperie si se elige la adecuada según la ficha técnica."
          }
        ]
      },
      {
        "nivel": 4,
        "nombre": "Manejo de Objeciones y Casos Prácticos",
        "objetivo": "Atención al cliente y rebatimiento de objeciones comerciales",
        "aprobar": 90,
        "preguntas": [
          {
            "q": "El cliente objeta: \"Pastinas me parece un gasto elevado para una terminación.\"",
            "opciones": [
              "Revaloriza la propiedad, aporta estética y requiere bajo mantenimiento.",
              "Es un gasto innecesario que no aporta valor al inmueble.",
              "Se puede reemplazar por pintura asfáltica para ahorrar.",
              "La junta se puede dejar sin sellar para un estilo rústico."
            ],
            "correcta": 0,
            "explica": "Las terminaciones de calidad aumentan el valor del inmueble y evitan refacciones periódicas."
          },
          {
            "q": "Cliente indeciso: \"¿Qué insumo de colocación debo llevar sí o sí para Pastinas?\"",
            "opciones": [
              "El adhesivo, sellador o perfilería específica del fabricante.",
              "El pegamento común para cerámicos es suficiente para fijar las pastinas en cualquier superficie.",
              "La pastina ya trae el adhesivo incorporado, por lo que no se necesita ningún otro producto para su colocación.",
              "Se puede aplicar directamente sobre la pared sin preparar la superficie ni usar ningún tipo de sellador adicional."
            ],
            "correcta": 0,
            "explica": "El producto de colocación adecuado garantiza la adhesión y evita desprendimientos o manchas."
          }
        ]
      }
    ]
  },
  {
    "id": "pegamentos",
    "producto": "Pegamentos",
    "rubro": "Terminaciones",
    "icon": "fa-solid fa-layer-group",
    "color": "#8b5cf6",
    "descripcion": "Adhesivos cementicios para revestimientos. Weber y Tector.",
    "niveles": [
      {
        "nivel": 1,
        "nombre": "Básico",
        "objetivo": "Tipos de pegamento",
        "aprobar": 70,
        "preguntas": [
          {
            "q": "¿Qué es un pegamento cementicio?",
            "opciones": [
              "Un mortero adhesivo para fijar piezas al soporte",
              "Un tipo de pintura que se aplica sobre los revestimientos",
              "Un sellador para juntas entre cerámicos",
              "Un aditivo para mejorar la mezcla de hormigón"
            ],
            "correcta": 0,
            "explica": "Es un mortero adhesivo específico para fijar cerámicas y porcelanatos al soporte."
          },
          {
            "q": "¿Para qué sirve el pegamento C1 (Normal)?",
            "opciones": [
              "Para cerámicos estándar menores a 30x30 en superficies absorbentes",
              "Para cerámicos de gran formato en superficies con poca absorción",
              "Para piscinas con inmersión permanente y alta exigencia química",
              "Para instalaciones de piso sobre piso con movimiento estructural"
            ],
            "correcta": 0,
            "explica": "C1 es un adhesivo normal apto para cerámicos de alta absorción en soportes porosos."
          },
          {
            "q": "¿Qué pegamento requiere un porcelanato?",
            "opciones": [
              "C2 o superior",
              "C1 normal",
              "R2 especial",
              "C3 flexible"
            ],
            "correcta": 0,
            "explica": "El porcelanato, por su baja porosidad, necesita un adhesivo mejorado C2 o superior."
          },
          {
            "q": "¿Qué rendimiento promedio tiene una bolsa de 30 kg en piezas medianas?",
            "opciones": [
              "6 a 8 m²",
              "4 a 5 m²",
              "10 a 12 m²",
              "2 a 3 m²"
            ],
            "correcta": 0,
            "explica": "En piezas medianas y simple encolado, una bolsa de 30 kg rinde entre 6 y 8 m²."
          },
          {
            "q": "¿Qué marcas trabajamos?",
            "opciones": [
              "Weber y Tector",
              "Ferrum y Roca",
              "Atrim y Cerámica Alberdi",
              "Ternium y Sika"
            ],
            "correcta": 0,
            "explica": "Trabajamos las marcas Weber y Tector para pegamentos."
          }
        ]
      },
      {
        "nivel": 2,
        "nombre": "Intermedio",
        "objetivo": "Usos específicos",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "¿Cuándo es indispensable usar pegamento C3 (Flexible)?",
            "opciones": [
              "Para piezas grandes, piso sobre piso o losa radiante",
              "Para cerámicos de pared en interiores y exteriores",
              "Solo para piletas con agua clorada y productos químicos",
              "En superficies perfectamente niveladas y sin vibraciones"
            ],
            "correcta": 0,
            "explica": "El C3 es un adhesivo flexible diseñado para soportar movimientos en piezas de gran formato, pisos superpuestos o sistemas de calefacción radiante."
          },
          {
            "q": "¿Qué pasa con el rendimiento en piezas grandes (doble encolado)?",
            "opciones": [
              "Baja a 4-5 m² por bolsa",
              "Rinde más de 10 m²",
              "Se mantiene en 6-8 m²",
              "No se usa en piezas grandes"
            ],
            "correcta": 0,
            "explica": "El doble encolado aumenta el consumo de pegamento, reduciendo el rendimiento a 4-5 m² por bolsa."
          },
          {
            "q": "¿Qué pegamento se usa en piscinas (inmersión constante)?",
            "opciones": [
              "R2 (adhesivo impermeable)",
              "C1 (pegamento estándar para cerámicos chicos)",
              "C2 (pegamento mejorado para porcelanatos)",
              "C3 (pegamento flexible para piezas grandes y piso sobre piso)"
            ],
            "correcta": 0,
            "explica": "El R2 es un adhesivo reactivo diseñado para soportar inmersión constante y resistencia química en piscinas."
          },
          {
            "q": "¿Qué porcentaje extra de pegamento se recomienda comprar?",
            "opciones": [
              "Un 10% extra",
              "No hace falta extra",
              "Un 50% extra",
              "Un 1% extra"
            ],
            "correcta": 0,
            "explica": "Se suma un 10% extra para cubrir desperdicios y ajustes de nivelación."
          },
          {
            "q": "¿Qué herramienta es obligatoria para aplicar el pegamento?",
            "opciones": [
              "Llana dentada",
              "Pincel",
              "Espátula de goma",
              "Martillo"
            ],
            "correcta": 0,
            "explica": "La llana dentada es la herramienta estándar para extender el pegamento de forma uniforme."
          }
        ]
      },
      {
        "nivel": 3,
        "nombre": "Experto",
        "objetivo": "Venta consultiva",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "El cliente quiere pegar un porcelanato 120x60 sobre un piso cerámico viejo. ¿Qué vendés?",
            "opciones": [
              "Pegamento C3 flexible con doble encolado",
              "Pegamento C1 normal, que es el estándar para cerámicos chicos en superficies absorbentes",
              "Pegamento C2 mejorado, pensado para porcelanatos de hasta 60x60 en bases porosas",
              "Pegamento R2 especial para piscinas, que resiste la inmersión constante y los químicos"
            ],
            "correcta": 0,
            "explica": "El porcelanato de gran formato sobre piso viejo requiere C3 flexible y doble encolado."
          },
          {
            "q": "Un albañil dice que el porcelanato se le despegó usando C1. ¿Qué le explicás?",
            "opciones": [
              "El porcelanato no absorbe humedad, por eso el C1 no agarra; necesitaba C2.",
              "Le faltó humedecer la base antes de pegar.",
              "Usó una llana de dientes muy finos.",
              "El C1 es para piscinas, no para pisos."
            ],
            "correcta": 0,
            "explica": "El C1 tiene adherencia mecánica por absorción; el porcelanato es poco poroso y requiere C2 con adherencia química."
          },
          {
            "q": "¿Cómo se calcula si lleva doble encolado?",
            "opciones": [
              "Para piezas >45x45 o zonas exigentes",
              "Cuando el cliente lo pide expresamente",
              "Solo en exteriores con lluvia",
              "Si la pieza es de color oscuro"
            ],
            "correcta": 0,
            "explica": "El doble encolado se aplica en piezas grandes o superficies con alta exigencia para asegurar adherencia total."
          },
          {
            "q": "Un cliente compra 50 m² de cerámico 30x30 y pastina. ¿Cuánto C1 le vendés?",
            "opciones": [
              "7 a 8 bolsas de 30 kg",
              "2 a 3 bolsas de 30 kg",
              "12 a 14 bolsas de 30 kg",
              "5 a 6 bolsas de 30 kg"
            ],
            "correcta": 0,
            "explica": "Con un rendimiento de 7 m² por bolsa, 50 m² requieren 7.14 bolsas, y se redondea a 8 para cubrir el 10% de desperdicio."
          },
          {
            "q": "¿Qué venta cruzada le hacés al cliente que lleva pegamento y porcelanato de 60x120?",
            "opciones": [
              "Pastina epoxi, llana de 12 mm, niveladores y disco diamantado",
              "Llana lisa, silicona y cinta de papel",
              "Solo pastina común y espátula",
              "Balde, mezclador y guantes de goma"
            ],
            "correcta": 0,
            "explica": "Para piezas de 60x120 se necesitan herramientas de gran formato y pastina epoxi para juntas."
          }
        ]
      },
      {
        "nivel": 4,
        "nombre": "Manejo de Objeciones y Casos Prácticos",
        "objetivo": "Atención al cliente y rebatimiento de objeciones comerciales",
        "aprobar": 90,
        "preguntas": [
          {
            "q": "Un cliente dice: \"¿Por qué necesito pegamento específico para porcelanato si el pegamento común para cerámica pegó bien en mi casa?\"",
            "opciones": [
              "Porque el porcelanato tiene absorción de agua casi nula (menor a 0.5%) y requiere adhesivos con polímeros para agarre químico, no por succión mecánica.",
              "Porque la bolsa del pegamento común es más liviana.",
              "Es un mito comercial, cualquier pegamento pega igual.",
              "Porque el pegamento común disuelve el porcelanato."
            ],
            "correcta": 0,
            "explica": "El porcelanato no absorbe agua; si se usa pegamento cerámico tradicional, se despegará al poco tiempo."
          },
          {
            "q": "Cliente indeciso: \"¿Qué insumo de colocación debo llevar sí o sí para Pegamentos?\"",
            "opciones": [
              "El adhesivo, sellador o perfilería recomendada por el fabricante.",
              "Un pegamento estándar que sirva para cualquier tipo de pieza sin importar el soporte.",
              "Una mezcla casera de cemento y arena que reemplace al adhesivo específico.",
              "El adhesivo, sellador o perfilería recomendada por el fabricante, aunque sea opcional."
            ],
            "correcta": 0,
            "explica": "El adhesivo, sellador o perfilería específica garantiza la adhesión y el acabado impecable, evitando desprendimientos o manchas."
          }
        ]
      }
    ]
  },
  {
    "id": "sistemas-nivelacion",
    "producto": "Sistemas de Nivelación",
    "rubro": "Terminaciones",
    "icon": "fa-solid fa-align-center",
    "color": "#8b5cf6",
    "descripcion": "Evitan desniveles en la colocación de piezas. Marca Atrim.",
    "niveles": [
      {
        "nivel": 1,
        "nombre": "Básico",
        "objetivo": "¿Qué son y para qué sirven?",
        "aprobar": 70,
        "preguntas": [
          {
            "q": "¿Qué problema evitan los sistemas de nivelación?",
            "opciones": [
              "Los desniveles entre piezas",
              "Que la junta se manche",
              "Que el pegamento se seque rápido",
              "Que la pieza se raye"
            ],
            "correcta": 0,
            "explica": "Evitan los desniveles o 'dientes' entre cerámicos y porcelanatos, asegurando una superficie plana."
          },
          {
            "q": "¿En qué tipo de placas son indispensables?",
            "opciones": [
              "En porcelanatos grandes o rectificados",
              "En cerámicos de 10x10",
              "En ladrillos comunes",
              "En techos de chapa"
            ],
            "correcta": 0,
            "explica": "Con grandes formatos y piezas rectificadas, cualquier mínima diferencia se nota al caminar."
          },
          {
            "q": "¿Qué partes conforman el sistema de nivelación por cuña?",
            "opciones": [
              "Clips descartables, cuñas reutilizables y pinza de tensión",
              "Clips y cuñas, ambas reutilizables",
              "Solo cuñas y pinza, sin clips",
              "Tornillos y tuercas reutilizables"
            ],
            "correcta": 0,
            "explica": "El sistema de cuña estándar combina clips descartables, cuñas reutilizables y una pinza para ajustar."
          },
          {
            "q": "¿Qué marca trabajamos?",
            "opciones": [
              "Atrim",
              "Ferrum",
              "Weber",
              "Roca"
            ],
            "correcta": 0,
            "explica": "Los sistemas de nivelación que vendemos son de la marca Atrim."
          },
          {
            "q": "¿El clip / base se puede volver a usar?",
            "opciones": [
              "No, es descartable. La base queda bajo el piso.",
              "Sí, es reutilizable si se retira con cuidado antes de que seque el pegamento.",
              "Se puede usar varias veces si se limpia bien después de cada colocación.",
              "Es descartable, pero la parte superior se puede recuperar para otro trabajo."
            ],
            "correcta": 0,
            "explica": "El clip es descartable: una vez fraguado el pegamento, se golpea y se rompe, dejando la base bajo el piso."
          }
        ]
      },
      {
        "nivel": 2,
        "nombre": "Intermedio",
        "objetivo": "Uso y opciones",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "¿Para qué sirve la pinza o alicate de tensión?",
            "opciones": [
              "Para ajustar las cuñas en los clips con la presión correcta.",
              "Para cortar el cerámico en línea recta sin que se astille el esmalte.",
              "Para sacar los clips una vez que el pegamento haya fraguado por completo.",
              "Para mezclar el pegamento de forma pareja y sin grumos antes de aplicarlo."
            ],
            "correcta": 0,
            "explica": "Ajusta la cuña de manera uniforme y sin esfuerzo, nivelando las piezas adyacentes."
          },
          {
            "q": "¿Qué función doble cumple el clip base?",
            "opciones": [
              "Nivela (junto con la cuña) y marca el ancho mínimo de la junta (ej. 1mm, 2mm)",
              "Nivela y pega el piso",
              "Nivela y limpia",
              "Nivela y decora"
            ],
            "correcta": 0,
            "explica": "La pestaña del clip sirve como separador, determinando el ancho mínimo de junta."
          },
          {
            "q": "¿Cómo es el sistema de nivelación a rosca?",
            "opciones": [
              "Usa tornillos descartables y tuercas reutilizables que nivelan al enroscarse",
              "Emplea tornillos de fijación permanente y tuercas de ajuste que se retiran al finalizar",
              "Utiliza un sistema de cuñas metálicas que se golpean con un mazo para nivelar",
              "Consiste en aplicar una masilla autonivelante que se extiende sobre la superficie"
            ],
            "correcta": 0,
            "explica": "El sistema de rosca emplea tornillos descartables y tuercas reutilizables que nivelan al enroscarse, sin necesidad de pinza."
          },
          {
            "q": "¿Cuándo se retiran las cuñas y se rompen los clips?",
            "opciones": [
              "Cuando el pegamento secó",
              "A los 5 minutos de colocarlas",
              "Antes de colocar la cuña",
              "Al mes de instalado el piso"
            ],
            "correcta": 0,
            "explica": "Se retiran al día siguiente, cuando el pegamento fraguó, golpeando los clips de costado con mazo de goma."
          },
          {
            "q": "¿Por qué invertir en niveladores ahorra plata al final?",
            "opciones": [
              "Ahorra tiempo y evita levantar pisos mal puestos",
              "Porque vienen con descuento por cantidad",
              "Porque reemplazan al pegamento",
              "Porque no necesitás albañil"
            ],
            "correcta": 0,
            "explica": "Aseguran la perfección a la primera, ahorrando el tiempo del albañil y reclamos del cliente."
          }
        ]
      },
      {
        "nivel": 3,
        "nombre": "Experto",
        "objetivo": "Asesoramiento de instalación",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "Un cliente compra porcelanato 60x120. ¿Cuántos niveladores le recomendás por m² aprox?",
            "opciones": [
              "4 a 6 clips por pieza",
              "Un nivelador por metro cuadrado es suficiente para la mayoría de los casos",
              "Se recomienda colocar dos niveladores por pieza, sin importar el tamaño",
              "Conviene usar diez niveladores por pieza para asegurar una nivelación perfecta"
            ],
            "correcta": 0,
            "explica": "En formatos grandes como 60x120 se usan 4 a 6 clips por pieza para nivelar bien."
          },
          {
            "q": "El albañil dice que usa cruces (separadores) comunes. ¿Qué le decís?",
            "opciones": [
              "Las cruces solo separan, no nivelan alturas. El nivelador hace ambas cosas.",
              "Las cruces nivelan si se usan con pegamento extra.",
              "Las cruces son más rápidas y fáciles de colocar.",
              "Las cruces son suficientes para piezas chicas."
            ],
            "correcta": 0,
            "explica": "El separador común no tracciona la pieza para igualar alturas; el sistema de nivelación sí."
          },
          {
            "q": "El cliente quiere comprar todo junto. ¿Cómo le vendés el kit inicial?",
            "opciones": [
              "Kit completo con pinza y cuñas, más clips según m²",
              "Solo los clips descartables para nivelar",
              "Solo la pinza de tensión para ajustar",
              "Solo las cuñas reutilizables de nivelación"
            ],
            "correcta": 0,
            "explica": "El kit incluye la herramienta reutilizable y las cuñas, y los clips se calculan por metro cuadrado."
          },
          {
            "q": "El porcelanato rectificado tiene borde a 90°. ¿Por qué el 'diente' es crítico ahí?",
            "opciones": [
              "Porque el borde a 90° hace que cualquier desnivel se note o tropiece",
              "Porque se despinta con el uso",
              "Porque no es crítico en ese tipo",
              "Porque no se puede limpiar bien"
            ],
            "correcta": 0,
            "explica": "El borde a 90° no tiene bisel, así que un mínimo desnivel se convierte en una ceja que se siente al pisar y se ve a contraluz."
          },
          {
            "q": "¿Qué le decís a un cliente que quiere poner porcelanato brillante a contraluz (frente a un ventanal)?",
            "opciones": [
              "Que los niveladores son indispensables a contraluz.",
              "Que los niveladores solo se usan en pisos exteriores y no en interiores.",
              "Que el brillo del porcelanato disimula por sí solo cualquier desnivel.",
              "Que con una buena luz natural no se notan las diferencias de altura."
            ],
            "correcta": 0,
            "explica": "El brillo y el contraluz evidencian drásticamente los desniveles; los niveladores son obligatorios ahí."
          }
        ]
      },
      {
        "nivel": 4,
        "nombre": "Manejo de Objeciones y Casos Prácticos",
        "objetivo": "Atención al cliente y rebatimiento de objeciones comerciales",
        "aprobar": 90,
        "preguntas": [
          {
            "q": "El cliente objeta: \"Sistemas de Nivelación me parece un gasto elevado para una terminación.\"",
            "opciones": [
              "Revaloriza la propiedad, aporta estética de vanguardia y requiere bajo o nulo mantenimiento.",
              "Es un gasto innecesario; mejor invertir en pintura de alta gama.",
              "Podés ahorrar usando cerámicos comunes sin nivelación.",
              "Solo conviene en obras de lujo; en casas estándar no se justifica."
            ],
            "correcta": 0,
            "explica": "Las terminaciones de calidad aumentan el valor del inmueble y evitan refacciones periódicas."
          },
          {
            "q": "Cliente indeciso: \"¿Qué insumo de colocación debo llevar sí o sí para Sistemas de Nivelación?\"",
            "opciones": [
              "El adhesivo, sellador o perfilería recomendada por el fabricante.",
              "Un adhesivo genérico para cerámicos que no sea específico para porcelanatos.",
              "Una mezcla de cemento y agua aplicada con llana, sin usar adhesivo especial.",
              "El sellador multiuso que tengas en stock, siempre que sea de la marca que prefieras."
            ],
            "correcta": 0,
            "explica": "Sin el producto de colocación adecuado, la terminación corre riesgo de desprenderse o mancharse."
          }
        ]
      }
    ]
  },
  {
    "id": "pisos-vinilicos",
    "producto": "Pisos Vinílicos SPC y Click",
    "rubro": "Terminaciones",
    "icon": "fa-solid fa-layer-group",
    "color": "#8b5cf6",
    "descripcion": "Renovación sin obra húmeda. Resistencia y estética.",
    "niveles": [
      {
        "nivel": 1,
        "nombre": "Básico",
        "objetivo": "¿Qué son los pisos vinílicos?",
        "aprobar": 70,
        "preguntas": [
          {
            "q": "¿Cuál es la principal ventaja de un piso vinílico Click o SPC?",
            "opciones": [
              "Se instala rápido y sin obra húmeda",
              "Requiere nivelar con carpeta húmeda",
              "Solo se colocan sobre contrapiso nuevo",
              "Necesitan adhesivo especial para fijar"
            ],
            "correcta": 0,
            "explica": "Su gran atractivo es que renuevan el espacio en seco, rápido y sobre pisos existentes."
          },
          {
            "q": "¿Qué significa que un piso sea SPC?",
            "opciones": [
              "Stone Plastic Composite: núcleo rígido de piedra caliza y PVC",
              "Super Piso Cerámico: material de alta resistencia",
              "Sistema de Piso Compacto: base de madera prensada",
              "Suelo Plástico Convencional: vinilo flexible común"
            ],
            "correcta": 0,
            "explica": "SPC (Stone Plastic Composite) tiene un núcleo de piedra caliza y PVC, rígido e hidrófugo."
          },
          {
            "q": "¿Cómo es el sistema de instalación Click?",
            "opciones": [
              "Es un encastre flotante, sin adhesivos.",
              "Se instala con pegamento especial y presión sobre la base.",
              "Se fija con tornillos y tarugos a la superficie existente.",
              "Se coloca con adhesivo de contacto y se sella con silicona."
            ],
            "correcta": 0,
            "explica": "El sistema Click es un encastre mecánico flotante (no va pegado al piso base)."
          },
          {
            "q": "¿El piso SPC resiste el agua?",
            "opciones": [
              "Sí, es 100% resistente al agua",
              "No, porque su núcleo absorbe la humedad y se deforma con el tiempo",
              "Solo resiste salpicaduras y no soporta el contacto prolongado con agua",
              "Resiste la humedad pero necesita un tratamiento especial para no dañarse"
            ],
            "correcta": 0,
            "explica": "El núcleo de piedra caliza y PVC del SPC lo hace totalmente impermeable, a diferencia de otros pisos."
          },
          {
            "q": "¿Qué diseños suelen imitar los pisos vinílicos?",
            "opciones": [
              "Madera, piedra o cemento",
              "Colores lisos y neutros",
              "Texturas de mármol y granito",
              "Diseños de cerámica rústica"
            ],
            "correcta": 0,
            "explica": "Imitan fielmente la textura y el color de maderas, piedras y cementos alisados."
          }
        ]
      },
      {
        "nivel": 2,
        "nombre": "Intermedio",
        "objetivo": "Preparación e instalación",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "¿Qué es fundamental tener en cuenta sobre la superficie base antes de instalar?",
            "opciones": [
              "Debe estar limpia, seca y nivelada",
              "Debe estar húmeda para que adhiera",
              "Debe tener una capa de pintura",
              "Debe estar rugosa para mayor agarre"
            ],
            "correcta": 0,
            "explica": "La superficie debe estar limpia, seca y nivelada para que el piso flotante no se deforme ni se quiebre."
          },
          {
            "q": "¿Qué se coloca entre el piso base y el vinílico?",
            "opciones": [
              "Una manta niveladora o acústica",
              "Una capa de adhesivo especial para asegurar la fijación",
              "Se coloca directamente sobre el contrapiso sin ningún agregado",
              "Un film plástico para proteger de la humedad del sustrato"
            ],
            "correcta": 0,
            "explica": "Se usa una manta acústica/niveladora, aunque algunos SPC ya la traen incorporada."
          },
          {
            "q": "¿Qué diferencia al SPC de un piso vinílico LVT (Luxury Vinyl Tile) común?",
            "opciones": [
              "El SPC tiene núcleo rígido de piedra; el LVT es flexible",
              "El LVT es más rígido que el SPC y se instala con adhesivo",
              "El SPC es más flexible y se coloca solo con pegamento",
              "El SPC se usa únicamente en exteriores y el LVT solo en interiores"
            ],
            "correcta": 0,
            "explica": "El SPC es rígido por su núcleo de piedra, lo que le da mayor estabilidad y disimula imperfecciones de la base."
          },
          {
            "q": "¿Los pisos vinílicos se pueden poner en baños?",
            "opciones": [
              "Sí, los SPC y LVT son resistentes al agua, aptos para zonas húmedas",
              "No, nunca",
              "Solo en el techo",
              "Solo si se barnizan"
            ],
            "correcta": 0,
            "explica": "Sí, a diferencia de los pisos flotantes melamínicos, estos son 100% plásticos/piedra y resisten humedad."
          },
          {
            "q": "¿Qué herramientas se necesitan para instalarlo?",
            "opciones": [
              "Trincheta, mazo de goma, separadores, cinta métrica y escuadra",
              "Llana dentada, pastina y espátula",
              "Mezcladora, pala y nivel de burbuja",
              "Taladro, tornillos y atornillador eléctrico"
            ],
            "correcta": 0,
            "explica": "La instalación es en seco: se corta con trincheta o sierra y se encastra con mazo de goma."
          }
        ]
      },
      {
        "nivel": 3,
        "nombre": "Experto",
        "objetivo": "Soluciones para el cliente",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "Un cliente alquila y quiere mejorar el piso sin perder su inversión al irse. ¿Qué le ofrecés?",
            "opciones": [
              "Piso vinílico Click flotante, desarmable y recuperable",
              "Cerámico común pegado con adhesivo",
              "Porcelanato rectificado con junta mínima",
              "Pintura epoxi para pisos de cemento"
            ],
            "correcta": 0,
            "explica": "El sistema click flotante permite desmontar el piso sin dañarlo, ideal para llevarlo al mudarse."
          },
          {
            "q": "¿Por qué es importante dejar dilatación perimetral (separadores) al instalar un piso flotante?",
            "opciones": [
              "Porque el piso se expande o contrae con los cambios de temperatura; sin espacio, se levanta",
              "Para que el piso respire y no se humedezca",
              "Para permitir la limpieza debajo del piso",
              "Para que los bordes queden más prolijos"
            ],
            "correcta": 0,
            "explica": "El plástico y la piedra dilatan; hay que dejar unos 5-8 mm en los bordes cubiertos luego por el zócalo."
          },
          {
            "q": "¿Cuál es la venta complementaria obligada del piso vinílico?",
            "opciones": [
              "Zócalos, perfiles de transición y manta niveladora",
              "Pegamento para cerámicos y fragüe",
              "Clavos de acero y tornillos",
              "Lija gruesa y sellador de juntas"
            ],
            "correcta": 0,
            "explica": "La venta complementaria incluye zócalos, perfiles de transición y manta niveladora para una instalación completa y prolija."
          },
          {
            "q": "El cliente quiere poner el piso SPC sobre una carpeta muy despareja y poceada. ¿Qué le advertís?",
            "opciones": [
              "Primero tiene que nivelar la carpeta, sino el encastre click se puede romper.",
              "Que lo puede instalar directo, el SPC se adapta a las imperfecciones.",
              "Que use una doble capa de manta para compensar los desniveles.",
              "Que lo fije con adhesivo para que no se mueva en las zonas bajas."
            ],
            "correcta": 0,
            "explica": "Si la base tiene huecos o lomos, la presión al pisar quebrará el encastre click; la superficie debe estar nivelada."
          },
          {
            "q": "¿Qué argumento usás frente al piso de madera natural?",
            "opciones": [
              "Tiene la estética de la madera, pero no requiere mantenimiento ni se raya fácil.",
              "Es más económico que la madera, pero se pudre con la humedad y requiere reemplazo frecuente.",
              "Ofrece el mismo calor visual que la madera, pero atrae termitas y necesita pulido y barnizado.",
              "Se instala rápido y es liviano, pero hay que plastificarlo cada dos años para que dure."
            ],
            "correcta": 0,
            "explica": "El SPC imita la madera sin sus desventajas: no se raya fácil, no se pudre y no exige mantenimiento."
          }
        ]
      },
      {
        "nivel": 4,
        "nombre": "Manejo de Objeciones y Casos Prácticos",
        "objetivo": "Atención al cliente y rebatimiento de objeciones comerciales",
        "aprobar": 90,
        "preguntas": [
          {
            "q": "El cliente objeta: \"Pisos Vinílicos SPC y Click me parece un gasto elevado para una terminación.\"",
            "opciones": [
              "Le mostrás que revaloriza la propiedad, aporta estética moderna y requiere bajo mantenimiento.",
              "Le das la razón y le sugerís dejar el contrapiso a la vista.",
              "Le decís que es un lujo innecesario y que no conviene.",
              "Le sugerís pintar con cal común encima del piso actual."
            ],
            "correcta": 0,
            "explica": "Las terminaciones de calidad aumentan el valor del inmueble y evitan refacciones periódicas."
          },
          {
            "q": "Cliente indeciso: \"¿Qué insumo de colocación debo llevar sí o sí para Pisos Vinílicos SPC y Click?\"",
            "opciones": [
              "Adhesivo, sellador o perfilería del fabricante.",
              "Pegamento universal apto para cualquier tipo de piso, incluyendo vinílicos.",
              "Cinta de enmascarar para asegurar las tablas durante la instalación.",
              "Sellador de silicona común para juntas, que también sirve para fijar los zócalos."
            ],
            "correcta": 0,
            "explica": "El fabricante especifica el insumo correcto para asegurar la adhesión y el acabado."
          }
        ]
      }
    ]
  },
  {
    "id": "zocalos-perfiles",
    "producto": "Zócalos y Perfiles Vinílicos",
    "rubro": "Terminaciones",
    "icon": "fa-solid fa-lines-leaning",
    "color": "#8b5cf6",
    "descripcion": "Terminaciones profesionales para pisos flotantes. Marca Atrim.",
    "niveles": [
      {
        "nivel": 1,
        "nombre": "Básico",
        "objetivo": "Funciones básicas",
        "aprobar": 70,
        "preguntas": [
          {
            "q": "¿Para qué sirve el zócalo en un piso vinílico?",
            "opciones": [
              "Cubre la junta de dilatación y protege la pared",
              "Sirve únicamente para dar un toque estético y disimular las imperfecciones del encuentro entre piso y pared",
              "Ayuda a sostener la estructura de la pared y a prevenir humedades en el muro",
              "Se usa para fijar el piso al contrapiso y evitar que se despegue con el uso diario"
            ],
            "correcta": 0,
            "explica": "Oculta el espacio de dilatación perimetral (5-8 mm) y protege la parte inferior del muro."
          },
          {
            "q": "¿Qué son los perfiles de transición?",
            "opciones": [
              "Perfiles que unen el piso vinílico con otros pisos de distintos materiales.",
              "Perfiles que se utilizan para cubrir la unión entre el piso vinílico y la pared, evitando que se vea la junta de dilatación.",
              "Perfiles que se colocan en superficies extensas para permitir que el piso se expanda y contraiga sin dañarse.",
              "Perfiles que se instalan en los bordes de escalones o desniveles para proteger y dar un acabado seguro y prolijo."
            ],
            "correcta": 0,
            "explica": "Resuelven el encuentro entre dos pisos diferentes, como cerámica y vinílico."
          },
          {
            "q": "¿De qué materiales son los zócalos más comunes para estos pisos?",
            "opciones": [
              "Zócalos vinílicos o de MDF recubierto",
              "Zócalos de madera maciza sin tratamiento superficial",
              "Zócalos de cerámica esmaltada de alta resistencia",
              "Zócalos de aluminio anodizado con acabado brillante"
            ],
            "correcta": 0,
            "explica": "Los zócalos más comunes son de PVC o MDF recubierto, ya que resisten la humedad y combinan con el piso."
          },
          {
            "q": "¿Cómo se fijan habitualmente los zócalos EPS/MDF modernos?",
            "opciones": [
              "Con adhesivo de montaje a la pared",
              "Con clavos y masilla",
              "Con cemento de fraguado rápido",
              "Se encastran sin fijación"
            ],
            "correcta": 0,
            "explica": "El adhesivo de montaje permite una instalación rápida y limpia, sin necesidad de clavos ni cemento."
          },
          {
            "q": "¿Qué marca de perfiles/zócalos trabajamos?",
            "opciones": [
              "Atrim",
              "Roca",
              "Ferrum",
              "Holcim"
            ],
            "correcta": 0,
            "explica": "Trabajamos perfilería y zócalos de la marca Atrim."
          }
        ]
      },
      {
        "nivel": 2,
        "nombre": "Intermedio",
        "objetivo": "Perfiles especiales",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "¿Para qué se usa un perfil de dilatación o expansión?",
            "opciones": [
              "Para cubrir juntas en superficies muy grandes y permitir el movimiento del piso",
              "Para unir el piso vinílico con otro tipo de revestimiento como porcelanato o cerámica",
              "Para proteger y rematar los bordes en cambios de nivel, como escalones o desniveles",
              "Para cubrir la junta entre el piso y la pared, evitando que se acumule suciedad"
            ],
            "correcta": 0,
            "explica": "Superficies extensas requieren dilatación intermedia; el perfil cubre ese hueco sin trabar el piso."
          },
          {
            "q": "¿Qué perfil se usa para rematar un escalón revestido en piso vinílico?",
            "opciones": [
              "Perfil de ángulo o nariz de escalón",
              "Zócalo de 10 cm",
              "Perfil de transición curvo",
              "Guardacanto de baño"
            ],
            "correcta": 0,
            "explica": "La nariz de escalón cubre el encuentro a 90° de la huella y contrahuella del escalón."
          },
          {
            "q": "¿Por qué se prefieren zócalos de EPS/PVC en lugar de madera maciza para baños?",
            "opciones": [
              "Son 100% resistentes a la humedad y no se pudren ni deforman",
              "Son más fáciles de pintar en obra",
              "Tienen mejor terminación que la madera",
              "Son más económicos que la madera"
            ],
            "correcta": 0,
            "explica": "El EPS o PVC no absorben agua, por lo que no se pudren ni deforman en ambientes húmedos como el baño."
          },
          {
            "q": "¿A qué elemento se fija SIEMPRE el zócalo?",
            "opciones": [
              "A la pared",
              "Al piso flotante",
              "A la mampostería",
              "A la membrana"
            ],
            "correcta": 0,
            "explica": "El zócalo se fija a la pared para no trabar el piso flotante, que necesita dilatarse."
          },
          {
            "q": "¿Los zócalos vienen en un solo formato?",
            "opciones": [
              "No, vienen lisos, con moldura (pecho paloma), y en distintas alturas (ej. 5cm, 7cm, 10cm)",
              "Sí, son todos de 5cm lisos",
              "Sí, todos redondos",
              "No existen opciones"
            ],
            "correcta": 0,
            "explica": "Hay alturas de 5 a 12 cm, y diseños rectos minimalistas o con molduras clásicas."
          }
        ]
      },
      {
        "nivel": 3,
        "nombre": "Experto",
        "objetivo": "Venta completa",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "El cliente compra piso SPC para los dormitorios. ¿Cómo calculás cuántos zócalos necesita?",
            "opciones": [
              "Sumo el perímetro de cada dormitorio, descuento puertas y agrego 10% para cortes",
              "Multiplico los metros cuadrados por 3 para obtener el total",
              "Cuento una tira por cada puerta y sumo dos de repuesto",
              "Mido el largo de la pared más larga y lo duplico por ambiente"
            ],
            "correcta": 0,
            "explica": "Los zócalos se venden por metro lineal, así que se calcula el perímetro descontando aberturas y sumando un margen de desperdicio."
          },
          {
            "q": "El cliente tiene un piso existente con zócalos de madera empotrados que no quiere sacar. ¿Qué le ofrecés?",
            "opciones": [
              "Contrazócalos o molduras de cuarto de caña que se pegan sobre el zócalo viejo.",
              "Perfiles de transición para unir con otro piso.",
              "Perfiles de dilatación para juntas grandes.",
              "Perfiles de ángulo para rematar bordes."
            ],
            "correcta": 0,
            "explica": "Los contrazócalos cubren la junta sin sacar el zócalo original."
          },
          {
            "q": "¿Qué le vendés al cliente para las puertas, donde el SPC se encuentra con la cerámica del pasillo?",
            "opciones": [
              "Perfil de transición Atrim",
              "Zócalo vinílico para cubrir la junta",
              "Perfil de dilatación en la puerta",
              "Cinta de enmascarar para disimular"
            ],
            "correcta": 0,
            "explica": "El perfil de transición une el SPC con la cerámica y cubre la dilatación; tipo T si están a nivel, reductor si hay desnivel."
          },
          {
            "q": "¿Por qué el adhesivo de montaje es clave en la venta cruzada?",
            "opciones": [
              "Fija zócalos sin clavar y sin marcar el frente",
              "Es el único producto que pega pisos SPC",
              "Sella juntas de dilatación del piso",
              "Reemplaza a la manta niveladora"
            ],
            "correcta": 0,
            "explica": "El adhesivo de montaje permite fijar zócalos de forma invisible y prolija, sin necesidad de clavos que dañen la superficie."
          },
          {
            "q": "Un cliente pregunta si puede pintar el zócalo de EPS blanco. ¿Qué respondés?",
            "opciones": [
              "Sí, se pueden pintar con pintura al agua o esmalte.",
              "No, el material no acepta pintura de ningún tipo.",
              "Solo se puede pintar con aerosol especial para plásticos.",
              "Se debe usar pintura al aceite, sino se daña."
            ],
            "correcta": 0,
            "explica": "Los zócalos EPS blancos (ej. Atrim) se pueden pintar con pinturas habituales para igualar el tono de pared."
          }
        ]
      },
      {
        "nivel": 4,
        "nombre": "Manejo de Objeciones y Casos Prácticos",
        "objetivo": "Atención al cliente y rebatimiento de objeciones comerciales",
        "aprobar": 90,
        "preguntas": [
          {
            "q": "El cliente objeta: \"Zócalos y Perfiles Vinílicos me parece un gasto elevado para una terminación.\"",
            "opciones": [
              "Revaloriza la propiedad, aporta estética y requiere bajo mantenimiento.",
              "Es un gasto innecesario, mejor dejarlo sin terminación.",
              "Puede reemplazarse por pintura común para ahorrar.",
              "No aporta valor, es solo un capricho estético."
            ],
            "correcta": 0,
            "explica": "Las terminaciones de calidad aumentan el valor del inmueble y evitan refacciones periódicas."
          },
          {
            "q": "Cliente indeciso: \"¿Qué insumo de colocación debo llevar sí o sí para Zócalos y Perfiles Vinílicos?\"",
            "opciones": [
              "El adhesivo o sellador recomendado por el fabricante.",
              "Un pegamento de contacto genérico para madera.",
              "Clavos o tornillos para fijar los zócalos.",
              "Una pistola de silicona con cartucho común."
            ],
            "correcta": 0,
            "explica": "Sin el producto de colocación adecuado, la terminación corre riesgo de desprenderse o mancharse."
          }
        ]
      }
    ]
  },
  {
    "id": "inodoros",
    "producto": "Inodoros",
    "rubro": "Terminaciones",
    "icon": "fa-solid fa-toilet",
    "color": "#8b5cf6",
    "descripcion": "Loza sanitaria. Ferrum, Roca y Capea.",
    "niveles": [
      {
        "nivel": 1,
        "nombre": "Básico",
        "objetivo": "Modelos principales",
        "aprobar": 70,
        "preguntas": [
          {
            "q": "¿Qué diferencia principal hay entre un inodoro largo y uno corto?",
            "opciones": [
              "El largo usa mochila; el corto, depósito embutido o válvula.",
              "El largo es más alto y el corto más bajo.",
              "El largo se fija a la pared y el corto al piso.",
              "El largo tiene doble descarga y el corto descarga simple."
            ],
            "correcta": 0,
            "explica": "El inodoro largo se diseña para apoyar la mochila sobre su base, mientras que el corto se combina con depósito embutido en la pared o válvula de descarga."
          },
          {
            "q": "¿Qué es un inodoro suspendido?",
            "opciones": [
              "Se fija a la pared, sin tocar el piso, y usa depósito embutido.",
              "Se apoya en el piso y tiene la mochila adosada a la loza.",
              "Se instala a media altura y se conecta a un tanque elevado.",
              "Se monta sobre una base de hierro y usa válvula de descarga."
            ],
            "correcta": 0,
            "explica": "Va anclado a la pared con soporte oculto; el piso queda libre abajo."
          },
          {
            "q": "¿Qué marcas de sanitarios trabajamos?",
            "opciones": [
              "Ferrum, Roca y Capea",
              "Rotoplas y Precons",
              "Weber y Klaukol",
              "FV y Vasser"
            ],
            "correcta": 0,
            "explica": "Nuestras marcas de sanitarios de loza son Ferrum, Roca y Capea."
          },
          {
            "q": "¿Cuáles son líneas conocidas de Ferrum?",
            "opciones": [
              "Bari, Andina, Varese",
              "Mónaco, The Gap",
              "Sigas, Tigre",
              "Módena, Herrero"
            ],
            "correcta": 0,
            "explica": "Son las líneas de inodoros que ofrece la marca Ferrum."
          },
          {
            "q": "¿Cuál es la ventaja de la línea de inodoros para discapacitados/accesibilidad?",
            "opciones": [
              "Mayor altura y diseño accesible",
              "Menor consumo de agua que los modelos estándar",
              "Tienen un diseño más compacto para espacios reducidos",
              "Cuentan con sistema de descarga doble para ahorrar agua"
            ],
            "correcta": 0,
            "explica": "Tienen mayor altura y diseño adaptado para cumplir normativas de accesibilidad."
          }
        ]
      },
      {
        "nivel": 2,
        "nombre": "Intermedio",
        "objetivo": "Mecanismos e Instalación",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "¿Qué tipo de desagüe tienen típicamente los inodoros en Argentina?",
            "opciones": [
              "Desagüe al piso",
              "Desagüe lateral",
              "Desagüe al techo",
              "Desagüe a la pared"
            ],
            "correcta": 0,
            "explica": "El estándar de descarga cloacal del inodoro largo/corto es hacia el piso, normalmente a 25 cm de la pared terminada."
          },
          {
            "q": "¿Qué elemento es necesario para instalar un inodoro suspendido de forma segura?",
            "opciones": [
              "Un bastidor metálico empotrado en la pared",
              "Una mochila de descarga externa",
              "Un juego de fijación para piso",
              "Una base de madera tratada"
            ],
            "correcta": 0,
            "explica": "El bastidor soporta el peso del inodoro y la persona, y va anclado a la estructura de la pared."
          },
          {
            "q": "¿Cómo se fija el inodoro largo al piso?",
            "opciones": [
              "Con juego de fijación y sellador en la base",
              "Con cemento Portland puro",
              "Con adhesivo vinílico",
              "Se apoya sin fijar"
            ],
            "correcta": 0,
            "explica": "Se fija con tornillos y tacos al piso, y se sella el perímetro con silicona o cemento blanco."
          },
          {
            "q": "¿Para qué inodoro se recomienda la placa de accionamiento de pared?",
            "opciones": [
              "Para inodoro corto o suspendido",
              "Para inodoro largo tradicional",
              "Para inodoro con mochila externa",
              "Para inodoro de línea discapacitados"
            ],
            "correcta": 0,
            "explica": "Al estar el depósito oculto en la pared, el botón de descarga es una placa de accionamiento mural."
          },
          {
            "q": "¿Las tapas de inodoro (asientos) vienen siempre incluidas en el precio?",
            "opciones": [
              "Por lo general se venden por separado, para elegir material y cierre.",
              "Sí, siempre vienen incluidas en el precio final.",
              "No, solo se venden con el inodoro largo.",
              "Sí, pero solo en modelos de línea discapacitados."
            ],
            "correcta": 0,
            "explica": "Los asientos se compran aparte, permitiendo elegir entre urea, plástico o cierre suave."
          }
        ]
      },
      {
        "nivel": 3,
        "nombre": "Experto",
        "objetivo": "Venta consultiva de sanitarios",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "Un cliente tiene un baño de dimensiones muy reducidas. ¿Qué opción le recomendás para ganar espacio?",
            "opciones": [
              "Un inodoro corto con depósito embutido",
              "Un inodoro largo con mochila doble",
              "Un inodoro de línea discapacitados",
              "Un inodoro suspendido con mochila externa"
            ],
            "correcta": 0,
            "explica": "El inodoro corto con depósito embutido reduce la profundidad total, liberando espacio en baños chicos."
          },
          {
            "q": "El cliente quiere un baño ultra moderno y minimalista, fácil de fregar. ¿Qué le vendés?",
            "opciones": [
              "Inodoro suspendido con depósito embutido y placa dual",
              "Inodoro largo con mochila tradicional y tapa estándar",
              "Inodoro corto con depósito externo y tapa con cierre amortiguado",
              "Inodoro de línea discapacitados con altura regulable y barras de apoyo"
            ],
            "correcta": 0,
            "explica": "Los inodoros suspendidos dejan el piso libre, facilitando la limpieza y logrando un look minimalista."
          },
          {
            "q": "¿Qué argumentás para convencer a alguien de comprar un asiento con 'caída amortiguada' (Soft Close)?",
            "opciones": [
              "Evita golpes, alarga la vida útil y protege los dedos",
              "Reduce el consumo de agua en cada descarga",
              "Es un requisito de los códigos de edificación",
              "Hace que el asiento sea más fácil de limpiar"
            ],
            "correcta": 0,
            "explica": "El Soft Close frena la caída de la tapa, evitando ruidos, daños y accidentes."
          },
          {
            "q": "¿Cuál es la venta cruzada perfecta si te compran un inodoro largo?",
            "opciones": [
              "Mochila, asiento, fijación, flexible y bidet de la misma línea",
              "Solo la mochila y el asiento, sin fijaciones",
              "El juego de fijación y el flexible, sin mochila",
              "Bidet y mochila, sin asiento ni fijaciones"
            ],
            "correcta": 0,
            "explica": "La venta cruzada completa incluye todos los accesorios necesarios para instalar y complementar el inodoro largo."
          },
          {
            "q": "¿Qué le preguntás al cliente si te pide un inodoro corto para un reemplazo de obra vieja?",
            "opciones": [
              "¿Tiene cisterna en la pared o válvula tipo tecla?",
              "¿Prefiere descarga dual o descarga simple?",
              "¿Necesita tapa con cierre amortiguado?",
              "¿Busca un modelo con salida horizontal?"
            ],
            "correcta": 0,
            "explica": "El inodoro corto requiere una fuente de agua externa; hay que confirmar si ya tiene cisterna o válvula para saber si la instalación es compatible."
          }
        ]
      },
      {
        "nivel": 4,
        "nombre": "Manejo de Objeciones y Casos Prácticos",
        "objetivo": "Atención al cliente y rebatimiento de objeciones comerciales",
        "aprobar": 90,
        "preguntas": [
          {
            "q": "El cliente objeta: \"Inodoros me parece un gasto elevado para una terminación.\"",
            "opciones": [
              "Le mostrás que revaloriza la propiedad y requiere bajo mantenimiento.",
              "Le das la razón y le sugerís dejar el contrapiso a la vista.",
              "Le decís que es un lujo innecesario y que no vale la pena.",
              "Le sugerís comprar un modelo más barato aunque sea de baja calidad."
            ],
            "correcta": 0,
            "explica": "Las terminaciones de calidad aumentan el valor del inmueble y evitan refacciones periódicas."
          },
          {
            "q": "Cliente indeciso: \"¿Qué insumo de colocación debo llevar sí o sí para Inodoros?\"",
            "opciones": [
              "Adhesivo, sellador o perfilería del fabricante.",
              "Cemento común mezclado con agua.",
              "Cinta adhesiva de doble cara.",
              "Masilla plástica para ventanas."
            ],
            "correcta": 0,
            "explica": "El fabricante especifica el insumo adecuado para garantizar la adhesión y el acabado."
          }
        ]
      }
    ]
  },
  {
    "id": "bidet",
    "producto": "Bidet",
    "rubro": "Terminaciones",
    "icon": "fa-solid fa-faucet-drip",
    "color": "#8b5cf6",
    "descripcion": "Complemento del inodoro en baño argentino.",
    "niveles": [
      {
        "nivel": 1,
        "nombre": "Básico",
        "objetivo": "Modelos y agujeros",
        "aprobar": 70,
        "preguntas": [
          {
            "q": "¿Qué es fundamental elegir para que el bidet funcione con la grifería deseada?",
            "opciones": [
              "La cantidad de agujeros del bidet",
              "El tipo de tapa que se le coloque",
              "La marca de la grifería elegida",
              "El material de los flexibles"
            ],
            "correcta": 0,
            "explica": "El bidet debe tener la perforación adecuada para la grifería: 1 agujero para monocomando o 3 para bimando."
          },
          {
            "q": "¿Por qué el bidet debe ser de la misma línea que el inodoro?",
            "opciones": [
              "Para mantener la uniformidad estética en el baño",
              "Porque la grifería no es compatible",
              "Para que el agua fluya mejor",
              "Porque es obligatorio por norma"
            ],
            "correcta": 0,
            "explica": "Se venden en juego para que el diseño y el color coincidan perfectamente."
          },
          {
            "q": "¿Qué tipos de instalación de bidet existen?",
            "opciones": [
              "De apoyar y suspendido",
              "De pie y de colgar",
              "De embutir y de sobreponer",
              "De pared y de piso"
            ],
            "correcta": 0,
            "explica": "Los bidets se clasifican según su instalación: apoyados en el piso o suspendidos en la pared."
          },
          {
            "q": "¿Qué característica tiene la lluvia de bidet tradicional en Argentina?",
            "opciones": [
              "Tiene transferencia con lluvia central o perimetral",
              "La lluvia es fija y no se puede regular, solo sale agua fría",
              "El agua sale por un caño lateral sin opción de lluvia central",
              "La lluvia es perimetral y no incluye opción de chorro central"
            ],
            "correcta": 0,
            "explica": "La grifería tradicional de bidet en Argentina transfiere el agua a una ducha central invertida o rociador perimetral."
          },
          {
            "q": "¿Las marcas de bidets son las mismas que los inodoros?",
            "opciones": [
              "Sí: Roca, Ferrum, Capea",
              "No, son de otra marca",
              "Solo se hacen en acero",
              "Solo importa la grifería"
            ],
            "correcta": 0,
            "explica": "Sí, las fábricas de loza (Ferrum, Roca) fabrican la pareja completa."
          }
        ]
      },
      {
        "nivel": 2,
        "nombre": "Intermedio",
        "objetivo": "Grifería y conexión",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "¿Qué grifería de bidet es más moderna y práctica hoy en día?",
            "opciones": [
              "La monocomando (1 agujero)",
              "La bimando tradicional (3 agujeros)",
              "La monocomando de pared",
              "La bimando con transferencia"
            ],
            "correcta": 0,
            "explica": "El monocomando es más moderno y práctico porque una sola palanca controla temperatura y caudal."
          },
          {
            "q": "¿Qué se necesita para fijar el bidet al piso?",
            "opciones": [
              "Juego de fijación y sellador",
              "Kit de grifería bimando",
              "Flexible de conexión de 30 cm",
              "Tapa de bidet con bisagra"
            ],
            "correcta": 0,
            "explica": "El bidet se fija al piso con su kit de fijación (tacos y tornillos) y sellador perimetral."
          },
          {
            "q": "¿Los bidets usan mochila/depósito?",
            "opciones": [
              "No, van conectados a la red de agua con flexibles.",
              "Sí, usan la misma mochila que el inodoro.",
              "Sí, llevan una mochila más pequeña.",
              "Sí, necesitan una cisterna especial."
            ],
            "correcta": 0,
            "explica": "El bidet no tiene depósito; se alimenta directamente de la red de agua fría y caliente mediante mangueras flexibles."
          },
          {
            "q": "¿El bidet trae tapa (asiento)?",
            "opciones": [
              "Se le puede colocar tapa, pero se vende por separado.",
              "La tapa no se incluye y su colocación requiere un adaptador especial que se adquiere aparte.",
              "No se le puede colocar tapa porque el diseño del bidet no lo permite.",
              "La tapa viene incorporada de fábrica en todos los modelos de bidet."
            ],
            "correcta": 0,
            "explica": "Existen asientos de bidet opcionales, pero se venden aparte."
          },
          {
            "q": "¿Qué diferencia funcional hay entre el monocomando de bidet 'europeo' y el bimando clásico?",
            "opciones": [
              "El europeo lava desde un pico superior orientable; el clásico, desde una lluvia en el fondo.",
              "El europeo se instala sin necesidad de conexión a la red de agua caliente, ya que calienta el agua internamente mediante un sistema eléctrico incorporado.",
              "El clásico utiliza una llave de paso que regula la presión, pero no permite ajustar la temperatura del agua de manera independiente.",
              "La diferencia principal radica en que el europeo se monta sobre la pared, mientras que el clásico se apoya en el piso."
            ],
            "correcta": 0,
            "explica": "El monocomando (estilo europeo) usa un pico superior con rótula móvil, mientras que el bimando clásico tiene lluvia en el fondo de la loza."
          }
        ]
      },
      {
        "nivel": 3,
        "nombre": "Experto",
        "objetivo": "Venta complementaria",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "Un cliente compra 'Bidet Ferrum Bari 3 agujeros'. ¿Qué grifería le ofrecés?",
            "opciones": [
              "Grifería FV bimando con transferencia",
              "Grifería FV monocomando para bidet",
              "Grifería bimando para lavatorio con desagüe",
              "Grifería monocomando para bidet con ducha teléfono"
            ],
            "correcta": 0,
            "explica": "El bidet de 3 agujeros necesita grifería bimando (dos llaves) con transferencia central para la lluvia."
          },
          {
            "q": "El cliente quiere comprar el inodoro y bidet, y llevar grifería monocomando para todo. ¿Qué cuidado tenés?",
            "opciones": [
              "Chequear en el sistema que el código del bidet sea el de '1 agujero', sino el monocomando no le sirve",
              "Verificar que el bidet tenga tres agujeros para que el monocomando se adapte sin problemas",
              "Asegurarse de que la grifería monocomando sea compatible con cualquier tipo de bidet",
              "Confirmar que el bidet elegido sea el estándar, ya que el monocomando funciona igual en todos"
            ],
            "correcta": 0,
            "explica": "Es vital despachar la loza con 1 orificio; si le das el de 3, quedan 2 huecos feos sin tapar."
          },
          {
            "q": "¿Cuál es el combo completo de venta de un bidet?",
            "opciones": [
              "Loza + grifería + flexibles + sifón + fijaciones",
              "Loza + mochila + tanque + tapa",
              "Loza + grifería + desagüe plástico",
              "Loza + adhesivo + sellador + silicona"
            ],
            "correcta": 0,
            "explica": "El combo completo incluye la loza, la grifería adecuada, los flexibles de conexión, el sifón y las fijaciones para su instalación."
          },
          {
            "q": "El cliente te dice que en su baño no entra un bidet, pero quiere higiene íntima. ¿Qué alternativa de grifería podés ofrecer (si tuviéramos stock FV)?",
            "opciones": [
              "Una ducha manual junto al inodoro",
              "Un bidet de esquina compacto",
              "Un inodoro con ducha integrada",
              "Un accesorio para el lavatorio"
            ],
            "correcta": 0,
            "explica": "El duchador higiénico se instala al lado del inodoro y cumple la misma función de higiene sin ocupar espacio extra."
          },
          {
            "q": "¿Qué problema puede tener el plomero si le vendés un bidet suspendido?",
            "opciones": [
              "Se arranca si el muro es hueco y no hay bastidor",
              "No se puede conectar la grifería bimando",
              "La loza se agrieta por el peso del agua",
              "Queda muy alto para personas bajas"
            ],
            "correcta": 0,
            "explica": "Los bidets suspendidos necesitan un bastidor de acero en la pared para soportar el peso y la palanca al sentarse."
          }
        ]
      },
      {
        "nivel": 4,
        "nombre": "Manejo de Objeciones y Casos Prácticos",
        "objetivo": "Atención al cliente y rebatimiento de objeciones comerciales",
        "aprobar": 90,
        "preguntas": [
          {
            "q": "El cliente objeta: \"Bidet me parece un gasto elevado para una terminación.\"",
            "opciones": [
              "Revaloriza la propiedad y requiere poco mantenimiento.",
              "Es un gasto que no se recupera en la reventa de la propiedad.",
              "Aporta solo estética, pero no suma valor funcional al baño.",
              "Genera costos de mantenimiento constantes y complicaciones de instalación."
            ],
            "correcta": 0,
            "explica": "Las terminaciones de calidad aumentan el valor del inmueble y evitan refacciones periódicas."
          },
          {
            "q": "Cliente indeciso: \"¿Qué insumo de colocación debo llevar sí o sí para Bidet?\"",
            "opciones": [
              "El adhesivo o sellador recomendado por el fabricante.",
              "El pegamento universal de alta resistencia que uses para otros sanitarios.",
              "No se requiere ningún tipo de fijación adicional, el peso propio lo sostiene.",
              "La mezcla de cemento y arena que se prepara en obra para asentar la loza."
            ],
            "correcta": 0,
            "explica": "Sin el producto de colocación adecuado, la terminación corre riesgo de desprenderse o mancharse."
          }
        ]
      }
    ]
  },
  {
    "id": "lavatorios",
    "producto": "Lavatorios Tradicionales",
    "rubro": "Terminaciones",
    "icon": "fa-solid fa-sink",
    "color": "#8b5cf6",
    "descripcion": "Lavamanos de loza. Ferrum, Roca, Capea.",
    "niveles": [
      {
        "nivel": 1,
        "nombre": "Básico",
        "objetivo": "Tipos de lavatorios",
        "aprobar": 70,
        "preguntas": [
          {
            "q": "¿Qué es un lavatorio con pedestal (columna)?",
            "opciones": [
              "Un lavamanos con columna que oculta las cañerías",
              "Un lavatorio de acero inoxidable",
              "Un lavatorio de vidrio",
              "Un inodoro especial"
            ],
            "correcta": 0,
            "explica": "El lavatorio tradicional de loza, donde la columna soporta peso y esconde la cañería."
          },
          {
            "q": "¿Qué es un lavatorio mural o de colgar?",
            "opciones": [
              "Se fija a la pared y deja el piso libre.",
              "Se apoya en el piso con una columna que cubre las cañerías.",
              "Es un mueble con bacha integrada que se coloca sobre el piso.",
              "Se instala empotrado en la pared, sin dejar espacio visible."
            ],
            "correcta": 0,
            "explica": "Va suspendido en la pared, ideal para espacios chicos o para poner un mueble debajo."
          },
          {
            "q": "¿Qué variable de la grifería debés considerar al vender el lavatorio?",
            "opciones": [
              "Si es monocomando (1 agujero) o bimando (3 agujeros)",
              "El largo de la canilla",
              "El material de la manija",
              "Si lleva filtro"
            ],
            "correcta": 0,
            "explica": "La loza viene perforada para 1 o 3 agujeros desde fábrica."
          },
          {
            "q": "¿De qué material están hechos los lavatorios tradicionales que vendemos?",
            "opciones": [
              "Loza sanitaria",
              "Plástico acrílico",
              "Aluminio fundido",
              "Cemento alisado"
            ],
            "correcta": 0,
            "explica": "Los lavatorios tradicionales se fabrican en loza sanitaria vitrificada, como los de Ferrum, Roca y Capea."
          },
          {
            "q": "¿Qué ventaja tiene el lavatorio de colgar frente al de columna?",
            "opciones": [
              "Ahorra espacio, facilita la limpieza y da un look más liviano",
              "Es más resistente que el de columna",
              "No requiere fijación a la pared",
              "Permite ocultar mejor las cañerías"
            ],
            "correcta": 0,
            "explica": "Al no tener pedestal, el piso queda despejado, siendo ideal para baños chicos."
          }
        ]
      },
      {
        "nivel": 2,
        "nombre": "Intermedio",
        "objetivo": "Complementos de instalación",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "¿Qué se necesita para instalar el desagüe de un lavatorio mural?",
            "opciones": [
              "Sopapa y sifón",
              "Un pedestal de apoyo",
              "Una cámara séptica",
              "Un sifón de piso"
            ],
            "correcta": 0,
            "explica": "Como no hay columna que oculte, el sifón queda a la vista, por lo que se venden sifones cromados estéticos."
          },
          {
            "q": "¿Cómo se amura un lavatorio de colgar a la pared?",
            "opciones": [
              "Con pernos de anclaje y ménsulas de soporte",
              "Con adhesivo de montaje y silicona",
              "Con tornillos comunes y tarugos plásticos",
              "Con la grifería como único sostén y sin fijaciones adicionales"
            ],
            "correcta": 0,
            "explica": "Los lavatorios de colgar se fijan con pernos de anclaje y, en modelos grandes, ménsulas metálicas para soportar el peso."
          },
          {
            "q": "¿La columna del lavatorio va pegada al piso?",
            "opciones": [
              "Se fija con sellador o tornillos",
              "Se empotra en la carpeta",
              "Queda suelta, solo apoyada",
              "Se atornilla a la pared"
            ],
            "correcta": 0,
            "explica": "La columna se sella al piso para evitar movimientos y ocultar las conexiones."
          },
          {
            "q": "¿Qué es el rebosadero en el lavatorio?",
            "opciones": [
              "Orificio que evita el desborde de agua",
              "Salida para el cable de la luz",
              "Espacio para colocar el jabón",
              "Punto de unión con la columna"
            ],
            "correcta": 0,
            "explica": "El rebosadero drena el exceso de agua hacia el desagüe antes de inundar el baño."
          },
          {
            "q": "¿Los lavatorios de columna se pueden vender sin la columna?",
            "opciones": [
              "Sí, se puede vender solo la parte superior",
              "No, la columna es estructural y no puede separarse",
              "El fabricante no permite la venta por separado",
              "La garantía se pierde si se instala sin columna"
            ],
            "correcta": 0,
            "explica": "La pileta y la columna son dos códigos/piezas separadas que se pueden vender independientes."
          }
        ]
      },
      {
        "nivel": 3,
        "nombre": "Experto",
        "objetivo": "Venta cruzada",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "Un cliente compra 'Lavatorio Roca Mónaco 1 agujero + Columna'. Armá el combo de venta complementaria completo:",
            "opciones": [
              "Grifería monocomando, flexibles, sifón, sopapa y set de fijación",
              "Grifería bimando, desagüe cromado y sifón metálico",
              "Grifería monocomando, sifón cromado y sopapa de presión",
              "Grifería bimando, flexibles y set de anclaje para pared"
            ],
            "correcta": 0,
            "explica": "El lavatorio con columna oculta el sifón, por lo que se puede usar uno económico de plástico, y requiere grifería, flexibles, sopapa y fijación."
          },
          {
            "q": "El mismo cliente decide NO llevar la columna. ¿Qué cambia en tu recomendación?",
            "opciones": [
              "Le ofrezco un sifón botella cromado",
              "Le vendo el mismo sifón plástico",
              "Le digo que no necesita sifón",
              "Le ofrezco pintura blanca para el caño"
            ],
            "correcta": 0,
            "explica": "Sin columna, el sifón queda a la vista, por lo que uno cromado mejora la estética."
          },
          {
            "q": "¿Por qué es importante confirmar la grifería antes de facturar el lavatorio?",
            "opciones": [
              "Para facturar la loza con la perforación correcta",
              "Para elegir el color de la loza",
              "Para saber el largo de los caños",
              "Para definir el tipo de sifón"
            ],
            "correcta": 0,
            "explica": "Evita reclamos y cambios si la canilla no coincide con los agujeros del lavatorio."
          },
          {
            "q": "Si el cliente quiere armar un 'baño en suite' muy lujoso, ¿le vendés un lavatorio de columna?",
            "opciones": [
              "No, le ofrecería una mesada con bachas de apoyar o bajo mesada.",
              "Sí, el lavatorio de columna es sinónimo de lujo en baños modernos.",
              "Sí, pero solo si es de porcelana importada con detalles dorados.",
              "No, le vendería un lavatorio mural con grifería de diseño."
            ],
            "correcta": 0,
            "explica": "En baños en suite de alto estándar se prefiere mesada con bachas o muebles vanitory, no el lavatorio clásico de columna."
          },
          {
            "q": "El cliente pregunta: '¿el lavatorio viene con los huecos hechos?'. ¿Qué le decís?",
            "opciones": [
              "Sí, viene de fábrica con 1 o 3 orificios ya esmaltados.",
              "No, los tenés que hacer con un taladro especial en tu casa.",
              "Solo vienen sin orificios, pero se pueden pedir a medida.",
              "Depende del modelo, algunos traen y otros no, hay que verificar."
            ],
            "correcta": 0,
            "explica": "Los lavatorios se fabrican con los orificios ya esmaltados para grifería, y no se deben perforar en obra porque la loza se puede quebrar."
          }
        ]
      },
      {
        "nivel": 4,
        "nombre": "Manejo de Objeciones y Casos Prácticos",
        "objetivo": "Atención al cliente y rebatimiento de objeciones comerciales",
        "aprobar": 90,
        "preguntas": [
          {
            "q": "El cliente objeta: \"Lavatorios Tradicionales me parece un gasto elevado para una terminación.\"",
            "opciones": [
              "Revaloriza la propiedad, aporta estética y requiere bajo mantenimiento.",
              "Le das la razón y le sugerís dejar el contrapiso a la vista.",
              "Le decís que es un lujo innecesario que no vale la pena.",
              "Le sugerís pintar con cal común encima para ahorrar."
            ],
            "correcta": 0,
            "explica": "Las terminaciones de calidad aumentan el valor del inmueble y evitan refacciones periódicas."
          },
          {
            "q": "Cliente indeciso: \"¿Qué insumo de colocación debo llevar sí o sí para Lavatorios Tradicionales?\"",
            "opciones": [
              "Adhesivo, sellador o perfilería del fabricante.",
              "Un pegamento genérico de obra sirve para asegurar el lavatorio a la pared.",
              "La colocación no requiere de ningún producto adicional para su fijación.",
              "El lavatorio se fija únicamente con la presión del peso y el paso del tiempo."
            ],
            "correcta": 0,
            "explica": "El producto específico garantiza adhesión y acabado correctos."
          }
        ]
      }
    ]
  },
  {
    "id": "depositos-inodoros",
    "producto": "Depósitos para Inodoros",
    "rubro": "Terminaciones",
    "icon": "fa-solid fa-box",
    "color": "#8b5cf6",
    "descripcion": "Almacenamiento de agua para descarga. Capea, Roca, Ferrum.",
    "niveles": [
      {
        "nivel": 1,
        "nombre": "Básico",
        "objetivo": "Tipos de depósitos",
        "aprobar": 70,
        "preguntas": [
          {
            "q": "¿Qué función cumple el depósito?",
            "opciones": [
              "Almacena el agua para la descarga del inodoro.",
              "Es el tanque que guarda el agua de limpieza.",
              "Contiene el agua para el lavado de manos.",
              "Acumula el agua para la ducha."
            ],
            "correcta": 0,
            "explica": "Almacena el agua y provee la fuerza de descarga para limpiar el inodoro."
          },
          {
            "q": "¿Qué es una mochila de apoyar?",
            "opciones": [
              "Depósito que se apoya sobre el inodoro largo",
              "Depósito que se instala en la pared y se conecta mediante un caño hasta el inodoro",
              "Cisterna que queda oculta dentro de la pared y se acciona con una placa",
              "Mochila de colgar que se usa únicamente con inodoros de modelo corto"
            ],
            "correcta": 0,
            "explica": "La mochila de apoyar se coloca directamente sobre el inodoro largo, a diferencia de otros tipos."
          },
          {
            "q": "¿Para qué inodoro se usa el depósito embutido (cisterna oculta)?",
            "opciones": [
              "Inodoro corto o suspendido",
              "Inodoro largo o de pedestal",
              "Inodoro con mochila de apoyar",
              "Inodoro de tanque bajo con mochila"
            ],
            "correcta": 0,
            "explica": "El corto y el suspendido no tienen base para apoyar mochila, por eso necesitan el depósito en la pared."
          },
          {
            "q": "¿Qué ventaja principal tiene la doble descarga?",
            "opciones": [
              "Permite elegir entre descarga parcial (líquidos) o total (sólidos), ahorrando mucha agua",
              "Hace más ruido",
              "Lava el inodoro por fuera",
              "Tiene agua caliente y fría"
            ],
            "correcta": 0,
            "explica": "La doble descarga (3 y 6 litros) permite un ahorro significativo de agua potable."
          },
          {
            "q": "¿Qué marcas de depósitos comercializamos?",
            "opciones": [
              "Capea, Roca y Ferrum",
              "Atrim, Ternium y Weber",
              "Ferrum, Atrim y Ternium",
              "Roca, Weber y Capea"
            ],
            "correcta": 0,
            "explica": "Son las marcas que manejamos para depósitos, alineadas con las de inodoros."
          }
        ]
      },
      {
        "nivel": 2,
        "nombre": "Intermedio",
        "objetivo": "Instalación y mecanismos",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "¿De qué material están fabricadas las mochilas de apoyar estándar?",
            "opciones": [
              "De loza sanitaria",
              "De plástico reforzado",
              "De acero inoxidable",
              "De cerámica esmaltada"
            ],
            "correcta": 0,
            "explica": "Las mochilas de apoyar se fabrican en loza sanitaria para combinar con el inodoro y garantizar durabilidad."
          },
          {
            "q": "¿Qué se necesita para accionar un depósito embutido?",
            "opciones": [
              "Una placa de accionamiento en la pared",
              "Un cableado eléctrico especial",
              "Un pedal de pie junto al inodoro",
              "Una llave de paso externa"
            ],
            "correcta": 0,
            "explica": "El depósito embutido queda oculto y se acciona mediante la placa instalada en la pared."
          },
          {
            "q": "¿Qué es una mochila de colgar?",
            "opciones": [
              "Depósito elevado que conecta al inodoro por caño.",
              "Accesorio decorativo para el baño.",
              "Inodoro portátil para emergencias.",
              "Sistema de ducha manual adicional."
            ],
            "correcta": 0,
            "explica": "Es la tradicional mochila elevada que baja el agua por un tubo, aunque hoy se usa menos."
          },
          {
            "q": "¿Qué se conecta a la mochila para que se llene de agua?",
            "opciones": [
              "Una conexión flexible de agua desde la llave de paso de la pared hasta la válvula de entrada del depósito",
              "Una manguera de jardín",
              "Un caño de gas",
              "Nada, se llena sola"
            ],
            "correcta": 0,
            "explica": "Se usa un flexible mallado o plástico de 1/2 pulgada conectado a la entrada lateral o inferior."
          },
          {
            "q": "¿Se puede cambiar el mecanismo interno (botón/flotante) de una mochila sin cambiar la loza?",
            "opciones": [
              "Sí, los repuestos se consiguen y se cambian sin tocar la loza.",
              "No, si se rompe hay que cambiar toda la mochila.",
              "Solo se puede si el depósito es de la misma marca.",
              "Depende, a veces hay que soldar el mecanismo."
            ],
            "correcta": 0,
            "explica": "Los mecanismos internos son repuestos estándar o de marca que se reemplazan fácilmente."
          }
        ]
      },
      {
        "nivel": 3,
        "nombre": "Experto",
        "objetivo": "Venta completa",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "El cliente quiere un baño minimalista y no quiere ver la mochila. ¿Qué le ofrecés?",
            "opciones": [
              "Inodoro corto o suspendido + depósito embutido + placa dual",
              "Inodoro largo con mochila de plástico",
              "Mochila de colgar alta tradicional",
              "Inodoro sin depósito, descarga directa"
            ],
            "correcta": 0,
            "explica": "El depósito embutido se oculta en la pared, logrando el look minimalista que busca el cliente."
          },
          {
            "q": "Al vender una mochila de apoyar de doble descarga, ¿qué argumento ecológico usás?",
            "opciones": [
              "Que recuperará la inversión rápidamente gracias al ahorro de miles de litros de agua al año",
              "Que no sirve para nada",
              "Que el plástico es reciclable",
              "Que gasta más luz"
            ],
            "correcta": 0,
            "explica": "La doble descarga puede ahorrar hasta un 50% de agua comparado con la descarga simple."
          },
          {
            "q": "¿Qué elementos complementarios lleva una mochila de apoyar nueva?",
            "opciones": [
              "Flexible de agua, llave de paso y tornillos de anclaje si faltan.",
              "Solo cemento para fijarla a la pared.",
              "Pintura epoxi y sellador para juntas.",
              "Hierros del 8 y malla de acero."
            ],
            "correcta": 0,
            "explica": "Para conectarla a la red de agua hace falta un flexible y una llave de paso cromada."
          },
          {
            "q": "Si un cliente te pide repuestos porque 'la mochila pierde agua hacia el inodoro'. ¿Qué suele estar fallando?",
            "opciones": [
              "El obturador o el flotante fallan",
              "El inodoro tiene una fisura interna",
              "La presión del agua es insuficiente",
              "La tapa del depósito está floja"
            ],
            "correcta": 0,
            "explica": "Una pérdida continua suele deberse a que el obturador no sella o el flotante no corta el llenado."
          },
          {
            "q": "Al vender un inodoro corto y depósito embutido para pared de construcción en seco (Durlock), ¿qué advertís?",
            "opciones": [
              "Que se necesita un bastidor o soporte específico.",
              "Que se debe fijar la placa con tornillos comunes.",
              "Que el depósito va pegado a la pared con adhesivo.",
              "Que se puede instalar sin estructura adicional."
            ],
            "correcta": 0,
            "explica": "En construcción en seco, el depósito embutido requiere un bastidor o soporte que soporte el peso y el empuje de la descarga."
          }
        ]
      },
      {
        "nivel": 4,
        "nombre": "Manejo de Objeciones y Casos Prácticos",
        "objetivo": "Atención al cliente y rebatimiento de objeciones comerciales",
        "aprobar": 90,
        "preguntas": [
          {
            "q": "El cliente objeta: \"Depósitos para Inodoros me parece un gasto elevado para una terminación.\"",
            "opciones": [
              "Revaloriza la propiedad, aporta estética de vanguardia y requiere bajo mantenimiento.",
              "Es un gasto innecesario, mejor invertir en otra cosa.",
              "Puede esperar, no es prioritario para el baño.",
              "Solo sirve para baños de lujo, no para el uso diario."
            ],
            "correcta": 0,
            "explica": "Las terminaciones de calidad aumentan el valor del inmueble y evitan refacciones periódicas."
          },
          {
            "q": "Cliente indeciso: \"¿Qué insumo de colocación debo llevar sí o sí para Depósitos para Inodoros?\"",
            "opciones": [
              "El adhesivo o sellador recomendado por el fabricante.",
              "El pegamento multiuso genérico que tengas en la ferretería.",
              "Cinta adhesiva de papel para fijar temporalmente el depósito.",
              "Un sellador de silicona común para baños, aunque no sea el indicado."
            ],
            "correcta": 0,
            "explica": "El fabricante especifica el producto adecuado para garantizar la adhesión y evitar desprendimientos o manchas."
          }
        ]
      }
    ]
  },
  {
    "id": "piletas-lavadero",
    "producto": "Piletas de Lavadero",
    "rubro": "Terminaciones",
    "icon": "fa-solid fa-shirt",
    "color": "#8b5cf6",
    "descripcion": "Resistencia y practicidad. Johnson, Ferrum, Duke, Dhinox.",
    "niveles": [
      {
        "nivel": 1,
        "nombre": "Básico",
        "objetivo": "Tipos y materiales",
        "aprobar": 70,
        "preguntas": [
          {
            "q": "¿Qué materiales son los más comunes en piletas de lavadero?",
            "opciones": [
              "Loza sanitaria y acero inoxidable",
              "Hormigón y cerámica",
              "Plástico y aluminio",
              "Vidrio y madera"
            ],
            "correcta": 0,
            "explica": "Son los materiales más usados por su resistencia y facilidad de limpieza."
          },
          {
            "q": "¿Qué ventajas tiene la pileta de lavadero de acero inoxidable?",
            "opciones": [
              "Ligeras, modernas y muy resistentes a golpes y químicos.",
              "Son más pesadas que las de loza y difíciles de instalar.",
              "Se rayan fácilmente con el uso diario y pierden brillo.",
              "No soportan agua caliente y se deforman con el tiempo."
            ],
            "correcta": 0,
            "explica": "El acero inoxidable, como el de Johnson, resiste impactos y químicos sin corroerse."
          },
          {
            "q": "¿Por qué muchos clientes siguen eligiendo la pileta de lavadero de loza sanitaria?",
            "opciones": [
              "Es la opción tradicional: sólida, pesada y resistente a manchas y lavandina.",
              "Es más liviana y fácil de instalar en cualquier mesada.",
              "Es flexible y se adapta a espacios reducidos sin problemas.",
              "Es transparente y permite ver el nivel de agua acumulada."
            ],
            "correcta": 0,
            "explica": "La loza sanitaria es duradera, higiénica y su superficie vitrificada resiste químicos como la lavandina."
          },
          {
            "q": "¿Qué marcas de piletas trabajamos?",
            "opciones": [
              "Johnson, Dhinox, Ferrum y Duke",
              "Atrim, Ternium y Ferrum",
              "Weber, Klaukol y Duke",
              "Rotoplas, Precons y Johnson"
            ],
            "correcta": 0,
            "explica": "Trabajamos con esas cuatro marcas: Ferrum y Duke en loza, Johnson y Dhinox en acero inoxidable."
          },
          {
            "q": "¿Cómo se puede instalar una pileta de lavadero?",
            "opciones": [
              "Colgada a la pared con ménsulas o apoyada en mesada",
              "Solo empotrada en el piso sin soporte",
              "Fijada al techo con cadenas",
              "Montada dentro de un mueble bajo mesada"
            ],
            "correcta": 0,
            "explica": "Las piletas de lavadero se instalan de dos formas: colgadas a la pared mediante ménsulas o apoyadas/empotradas sobre una mesada o mueble."
          }
        ]
      },
      {
        "nivel": 2,
        "nombre": "Intermedio",
        "objetivo": "Venta e instalación",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "¿Qué es la 'tabla de lavar' o el fregadero inclinado en la pileta?",
            "opciones": [
              "Superficie con estrías para fregar ropa a mano",
              "Tabla de madera que se coloca sobre la pileta",
              "Accesorio eléctrico para lavar automáticamente",
              "Tapa extraíble que cubre el interior de la pileta"
            ],
            "correcta": 0,
            "explica": "El fregadero inclinado tiene estrías que ayudan a fregar la ropa a mano, siendo una función tradicional del lavadero."
          },
          {
            "q": "¿Qué acero es el más recomendable por su alta resistencia a la corrosión?",
            "opciones": [
              "Acero inoxidable grado 304",
              "El acero inoxidable grado 430 es el más recomendable por su resistencia a la corrosión",
              "El acero al carbono tratado térmicamente es el más recomendable por su resistencia a la corrosión",
              "El hierro fundido esmaltado es el más recomendable por su resistencia a la corrosión"
            ],
            "correcta": 0,
            "explica": "El grado 304 ofrece mayor resistencia a la corrosión por químicos como la lavandina."
          },
          {
            "q": "¿Qué piezas extra necesita una pileta de loza mural para instalarse?",
            "opciones": [
              "Ménsulas, sopapa, sifón y grifería",
              "Solo pegamento y cinta aisladora",
              "Un soporte de hierro y una manguera",
              "Tornillos, silicona y un caño de cobre"
            ],
            "correcta": 0,
            "explica": "Las piletas de loza mural necesitan ménsulas para soportar su peso en la pared, más los accesorios de desagüe y grifería."
          },
          {
            "q": "¿De dónde suele salir la grifería en la mayoría de los lavaderos tradicionales?",
            "opciones": [
              "De la pared, sobre la pileta",
              "Desde el piso, al costado de la pileta",
              "De la mesada, en la parte de atrás",
              "No llevan grifería, se usa manguera"
            ],
            "correcta": 0,
            "explica": "La grifería de lavadero se instala típicamente en la pared, sobre la pileta."
          },
          {
            "q": "¿Qué se debe tener en cuenta si el cliente elige una pileta Johnson de acero inoxidable de gran tamaño?",
            "opciones": [
              "Que requiere un mueble o estructura que la soporte",
              "Que no soporta agua caliente",
              "Que se oxida con el tiempo",
              "Que pesa más de 200 kilos"
            ],
            "correcta": 0,
            "explica": "Las piletas de acero inoxidable de gran tamaño necesitan un soporte adecuado, como un mueble o mesada, para su instalación."
          }
        ]
      },
      {
        "nivel": 3,
        "nombre": "Experto",
        "objetivo": "Asesoramiento completo",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "Un cliente está haciendo un lavadero moderno tipo europeo, integrado a la cocina. ¿Qué le recomendás?",
            "opciones": [
              "Una pileta de acero inoxidable Johnson bajo mesada",
              "Una pileta de loza sobre ménsulas rústicas con grifería de pared",
              "Una pileta de acero inoxidable de pie con tablas de lavar",
              "Una pileta de loza con tabla de lavar y grifería de mesada"
            ],
            "correcta": 0,
            "explica": "El acero inoxidable combina con el estilo moderno y se integra bien bajo mesada."
          },
          {
            "q": "El cliente compra una pileta Duke (loza) enorme de 80 cm. ¿Qué le advertís sobre las ménsulas?",
            "opciones": [
              "Debe usar ménsulas de fundición o hierro muy robustas y amurarlas a pared de ladrillo macizo si es posible.",
              "Las ménsulas de plástico reforzado son adecuadas para sostener piletas de loza de gran tamaño, ya que evitan el contacto directo con el metal y protegen el esmalte de posibles rayones o daños.",
              "La instalación correcta se realiza fijando las ménsulas a una placa de yeso con tarugos y tornillos comunes, lo que garantiza una sujeción firme y segura para el peso de la pileta.",
              "Se pueden pegar las ménsulas directamente a la pared con un adhesivo de montaje de alta resistencia, siempre que la superficie esté limpia y seca, y se respete el tiempo de secado indicado por el fabricante."
            ],
            "correcta": 0,
            "explica": "La loza, el agua y la fuerza al fregar exigen un anclaje muy fuerte a la pared."
          },
          {
            "q": "¿Qué ventaja adicional (venta cruzada) le podés ofrecer para una grifería de lavadero de pared?",
            "opciones": [
              "Grifería con pico manguera acoplable o monocomando con duchador extraíble",
              "Un juego de llaves para instalación",
              "Un termostato para regular la temperatura",
              "Un filtro de agua adicional"
            ],
            "correcta": 0,
            "explica": "Las griferías con pico roscado para manguera o los monocomandos extensibles son sumamente prácticos en el lavadero."
          },
          {
            "q": "El cliente quiere saber por qué el acero inoxidable 304 es más caro que el 430.",
            "opciones": [
              "Porque el 304 contiene níquel, lo que lo hace mucho más resistente a la corrosión química (fundamental en lavaderos donde se usa cloro o lavandina)",
              "Porque es más brillante nomás",
              "Porque es más pesado",
              "Porque es de otra marca"
            ],
            "correcta": 0,
            "explica": "El 304 garantiza que no se picará ni oxidará con los químicos típicos de limpieza de ropa."
          },
          {
            "q": "Si el cliente compra una pileta de acero con agujero para canilla, ¿qué debe comprar obligatoriamente?",
            "opciones": [
              "Una grifería de mesada que calce en el agujero",
              "Una grifería de pared con su respectivo flex",
              "Un tapón ciego para cubrir el agujero de la canilla",
              "Una ménsula de instalación para fijar la pileta a la pared"
            ],
            "correcta": 0,
            "explica": "Si la pileta viene perforada, la grifería debe ser de mesada, no de pared."
          }
        ]
      },
      {
        "nivel": 4,
        "nombre": "Manejo de Objeciones y Casos Prácticos",
        "objetivo": "Atención al cliente y rebatimiento de objeciones comerciales",
        "aprobar": 90,
        "preguntas": [
          {
            "q": "El cliente objeta: \"Piletas de Lavadero me parece un gasto elevado para una terminación.\"",
            "opciones": [
              "Revaloriza la propiedad y requiere poco mantenimiento.",
              "Genera gastos de mantenimiento constantes a futuro y no aporta durabilidad real al ambiente.",
              "Es solo decorativa y no aporta valor a la venta, ya que no mejora la funcionalidad del espacio.",
              "Su instalación es compleja y encarece la obra, además de requerir cuidados especiales."
            ],
            "correcta": 0,
            "explica": "Las terminaciones de calidad aumentan el valor del inmueble y evitan refacciones periódicas."
          },
          {
            "q": "Cliente indeciso: \"¿Qué insumo de colocación debo llevar sí o sí para Piletas de Lavadero?\"",
            "opciones": [
              "El adhesivo o sellador recomendado por el fabricante.",
              "Cualquier pegamento multiuso que tengas en casa.",
              "No hace falta ningún insumo, la pileta se atornilla.",
              "Solo necesitás agua para humedecer la base."
            ],
            "correcta": 0,
            "explica": "El adhesivo o sellador específico asegura una fijación correcta y evita desprendimientos o manchas."
          }
        ]
      }
    ]
  },
  {
    "id": "bachas-bano",
    "producto": "Bachas de Baño",
    "rubro": "Terminaciones",
    "icon": "fa-solid fa-sink",
    "color": "#8b5cf6",
    "descripcion": "Diseño y funcionalidad. Roca, Ferrum, Daccord.",
    "niveles": [
      {
        "nivel": 1,
        "nombre": "Básico",
        "objetivo": "Tipos de instalación",
        "aprobar": 70,
        "preguntas": [
          {
            "q": "¿Qué es una bacha de apoyar?",
            "opciones": [
              "Se apoya sobre la mesada, destacando su diseño.",
              "Se coloca debajo de la mesada, oculta su borde.",
              "Se empotra en la pared, dejando la mesada libre.",
              "Se instala a nivel del piso, integrada al solado."
            ],
            "correcta": 0,
            "explica": "La bacha de apoyar se instala directamente sobre la mesada, siendo el centro visual del baño."
          },
          {
            "q": "¿Qué es una bacha bajo mesada?",
            "opciones": [
              "Se coloca debajo de la mesada, con el borde oculto.",
              "Se instala sobre la mesada, quedando totalmente visible y expuesta.",
              "Es una bacha que va empotrada en la pared, sin necesidad de mesada.",
              "Se usa sin mesada, apoyada directamente en el piso del baño."
            ],
            "correcta": 0,
            "explica": "Se fija por debajo de la superficie, dejando el borde oculto para una estética limpia."
          },
          {
            "q": "¿Qué es una bacha semi-apoyar o semi-embutir?",
            "opciones": [
              "Parte apoyada y parte embutida.",
              "Se instala totalmente oculta bajo la mesada.",
              "Queda completamente apoyada sobre el mueble.",
              "Es una bacha diseñada solo para baños de servicio."
            ],
            "correcta": 0,
            "explica": "Combina apoyo y embutido, ofreciendo versatilidad de diseño."
          },
          {
            "q": "¿De qué material están hechas principalmente las bachas de baño que vendemos?",
            "opciones": [
              "Loza sanitaria",
              "Madera",
              "Cartón plastificado",
              "Acero inoxidable"
            ],
            "correcta": 0,
            "explica": "La mayoría de nuestras bachas de baño (Ferrum, Roca, Daccord) son de loza sanitaria esmaltada."
          },
          {
            "q": "¿Qué grifería requiere una bacha de apoyar (si no tiene orificio propio)?",
            "opciones": [
              "Grifería alta (de mesada prolongada) o grifería de pared, para que el pico pase por encima del borde",
              "Grifería de mesa con pico fijo y bajo, que se instala sobre la mesada y no alcanza a superar el borde de la bacha",
              "Grifería de pared con caño de salida corto, que se coloca a baja altura y no logra proyectar el agua hacia el centro de la bacha",
              "Grifería de empotrar con caño de salida recto y corto, que queda a la altura de la mesada y no permite que el agua caiga dentro de la bacha"
            ],
            "correcta": 0,
            "explica": "Al tener bordes altos (10-15 cm), la grifería de mesada estándar queda corta; necesita una alta o mural."
          }
        ]
      },
      {
        "nivel": 2,
        "nombre": "Intermedio",
        "objetivo": "Elección y estética",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "¿Qué ventaja tiene la bacha bajo mesada?",
            "opciones": [
              "Maximiza el espacio útil de la mesada y facilita la limpieza",
              "Es la opción más económica del catálogo y requiere menos mantenimiento",
              "Se instala sin necesidad de mesada y no necesita ningún tipo de soporte",
              "Permite usar cualquier tipo de grifería sin importar su altura o diseño"
            ],
            "correcta": 0,
            "explica": "Al no tener bordes visibles, se evita la acumulación de suciedad y se simplifica la higiene diaria."
          },
          {
            "q": "¿Por qué el cliente elegiría una bacha de apoyar?",
            "opciones": [
              "Por su fuerte impacto estético y protagonismo en el diseño.",
              "Porque son la opción que más facilita la limpieza de la mesada y el orden visual del baño.",
              "Porque se instalan ocultas bajo la mesada y permiten aprovechar mejor el espacio disponible.",
              "Porque son ideales para lograr un estilo minimalista y despejado sin elementos visibles."
            ],
            "correcta": 0,
            "explica": "Son elegidas por decoración y diseño, brindando un toque moderno y personal al ambiente."
          },
          {
            "q": "¿Se puede poner una grifería corta en una bacha de apoyar que trae el agujero incorporado?",
            "opciones": [
              "Sí, si tiene repisa con agujero",
              "No, solo se puede con grifería de pared",
              "Sí, pero solo si es monocomando",
              "No, siempre requiere grifería alta"
            ],
            "correcta": 0,
            "explica": "Las bachas de apoyar con repisa perforada permiten grifería estándar, no alta."
          },
          {
            "q": "¿Qué adhesivo se recomienda para pegar una bacha bajo mesada de loza al granito/mármol?",
            "opciones": [
              "Silicona neutra y grapas",
              "Cemento de fraguado rápido",
              "Pegamento de contacto común",
              "Cinta adhesiva de doble cara"
            ],
            "correcta": 0,
            "explica": "La silicona neutra adhiere la loza y las grapas aseguran la fijación."
          },
          {
            "q": "¿Qué marcas destacan en nuestras bachas de baño?",
            "opciones": [
              "Roca, Ferrum y Daccord",
              "Johnson y Dhinox",
              "Atrim",
              "Tromen"
            ],
            "correcta": 0,
            "explica": "Son las marcas líderes en bachas de baño que ofrecemos, reconocidas por su calidad y diseño."
          }
        ]
      },
      {
        "nivel": 3,
        "nombre": "Experto",
        "objetivo": "Venta complementaria",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "Un cliente te compra una hermosa bacha de apoyar redonda. ¿Qué le preguntás inmediatamente para no arruinarle la instalación?",
            "opciones": [
              "¿Ya compraste la grifería? Necesitás una alta o de pared.",
              "¿Ya compraste la mesada? Necesitás una con borde para apoyarla.",
              "¿Ya compraste el desagüe? Necesitás uno con rebalse incluido.",
              "¿Ya compraste el espejo? Necesitás uno con luz para el baño."
            ],
            "correcta": 0,
            "explica": "La bacha de apoyar requiere grifería alta o de pared para que el agua caiga correctamente."
          },
          {
            "q": "¿Qué complemento estético le podés ofrecer al desagüe de una bacha de apoyar o vidrio?",
            "opciones": [
              "Una sopapa click-clack cromada",
              "Un sifón plástico corrugado",
              "Una rejilla de acero inoxidable",
              "Un tapón de goma con cadena"
            ],
            "correcta": 0,
            "explica": "La sopapa click-clack es el estándar moderno en diseño, limpia y sin tapones de goma sueltos."
          },
          {
            "q": "El cliente quiere un mueble vanitory pero su baño es muy angosto (profundidad 35 cm). ¿Qué bacha resuelve el problema?",
            "opciones": [
              "Una bacha semi-encastre, que sobresale del mueble angosto.",
              "Una bacha bajo mesada de 40 cm de profundidad.",
              "Una bacha de apoyar de 50 cm de diámetro.",
              "Un lavatorio de columna de 35 cm de ancho."
            ],
            "correcta": 0,
            "explica": "El semi-encastre permite usar un mueble angosto mientras el frente curvo sobresale, ganando comodidad sin ocupar más espacio."
          },
          {
            "q": "¿Es necesario que el cliente compre también un sifón cromado si lleva una bacha de apoyar?",
            "opciones": [
              "Depende: si el mueble es abierto o la mesada es suspendida, sí; si es cerrado, uno plástico oculto sirve.",
              "Siempre es obligatorio, sin excepciones.",
              "No es necesario en ningún caso.",
              "Solo si la bacha es de color blanco."
            ],
            "correcta": 0,
            "explica": "La necesidad del sifón cromado depende de si la cañería queda a la vista o no."
          },
          {
            "q": "¿Qué es el 'deck' o repisa en una bacha?",
            "opciones": [
              "Plataforma plana en la loza para asentar la grifería.",
              "El borde elevado que evita salpicaduras y mantiene el agua dentro de la bacha, mejorando la higiene del baño.",
              "El orificio por donde sale el agua, que suele estar oculto bajo la grifería para mantener la estética.",
              "La zona donde se apoya el jabón, que se encuentra en la parte posterior de la bacha y es fácil de limpiar."
            ],
            "correcta": 0,
            "explica": "El deck es la superficie plana integrada en la bacha donde se perfora para montar la grifería."
          }
        ]
      },
      {
        "nivel": 4,
        "nombre": "Manejo de Objeciones y Casos Prácticos",
        "objetivo": "Atención al cliente y rebatimiento de objeciones comerciales",
        "aprobar": 90,
        "preguntas": [
          {
            "q": "El cliente objeta: \"Bachas de Baño me parece un gasto elevado para una terminación.\"",
            "opciones": [
              "Revaloriza la propiedad y no requiere mantenimiento.",
              "Es un gasto que no se recupera al vender la casa, pero se puede ahorrar comprando una bacha genérica.",
              "Solo se justifica en baños de categoría, ya que en casas comunes no aporta valor real.",
              "Se puede reemplazar por pintura antihongos y así se evita el costo de instalación."
            ],
            "correcta": 0,
            "explica": "Las terminaciones de calidad aumentan el valor del inmueble y evitan refacciones periódicas."
          },
          {
            "q": "Cliente indeciso: \"¿Qué insumo de colocación debo llevar sí o sí para Bachas de Baño?\"",
            "opciones": [
              "El adhesivo o sellador recomendado por el fabricante.",
              "Un pegamento multiuso de ferretería que sirve para cualquier material.",
              "No hace falta ningún producto de pegado si la bacha viene con ventosas.",
              "Solo agua para humedecer la bacha y que quede fija por su propio peso."
            ],
            "correcta": 0,
            "explica": "Sin el adhesivo o sellador adecuado, la bacha puede desprenderse o dejar manchas en la mesada."
          }
        ]
      }
    ]
  },
  {
    "id": "bachas-cocina",
    "producto": "Bachas de Cocina",
    "rubro": "Terminaciones",
    "icon": "fa-solid fa-kitchen-set",
    "color": "#8b5cf6",
    "descripcion": "Resistencia e higiene. Dhinox, Johnson.",
    "niveles": [
      {
        "nivel": 1,
        "nombre": "Básico",
        "objetivo": "Formatos y materiales",
        "aprobar": 70,
        "preguntas": [
          {
            "q": "¿Qué formatos principales de bachas de cocina existen?",
            "opciones": [
              "Simple, doble y triple",
              "Redonda, cuadrada y rectangular",
              "Chica, mediana y grande",
              "De uno, dos y cuatro cuencos"
            ],
            "correcta": 0,
            "explica": "Los formatos se definen por la cantidad de cuencos: uno, dos o tres."
          },
          {
            "q": "¿Cuál es el material estándar para las bachas de cocina de calidad?",
            "opciones": [
              "Acero inoxidable 304",
              "Acero inoxidable 430, que es más económico y magnético, pero menos resistente a la corrosión",
              "Hierro fundido con esmalte vitrificado, que ofrece gran durabilidad pero es muy pesado",
              "Plástico reforzado con fibra de vidrio, que es liviano y resistente a impactos, pero se raya con facilidad"
            ],
            "correcta": 0,
            "explica": "El acero inoxidable 304 es el estándar por su alta resistencia al óxido y durabilidad."
          },
          {
            "q": "¿Para qué sirve una bacha doble?",
            "opciones": [
              "Separa lavado y enjuague en dos cuencos",
              "Permite lavar grandes cantidades de ropa",
              "Ocupa menos espacio que una bacha simple",
              "Es ideal para cocinas con poco uso"
            ],
            "correcta": 0,
            "explica": "La bacha doble permite separar tareas como lavar y enjuagar, lo que la hace práctica y funcional."
          },
          {
            "q": "¿Qué tipo de instalación es la más moderna y fácil de limpiar en cocinas?",
            "opciones": [
              "Bajo mesada",
              "De sobreponer",
              "De empotrar",
              "De apoyar en piso"
            ],
            "correcta": 0,
            "explica": "Bajo mesada no tiene bordes visibles, lo que facilita la limpieza y le da un aspecto moderno."
          },
          {
            "q": "¿Qué marcas trabajamos?",
            "opciones": [
              "Johnson y Dhinox",
              "Atrim y Weber",
              "Ternium",
              "Rotoplas"
            ],
            "correcta": 0,
            "explica": "Trabajamos las marcas líderes Johnson Acero y Dhinox."
          }
        ]
      },
      {
        "nivel": 2,
        "nombre": "Intermedio",
        "objetivo": "Diferencias técnicas",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "¿Qué diferencia práctica hay entre acero inoxidable 304 y 430?",
            "opciones": [
              "El 304 no se oxida y el 430 es más económico",
              "El 304 es magnético y el 430 no",
              "El 430 resiste mejor los golpes",
              "El 304 se raya con facilidad"
            ],
            "correcta": 0,
            "explica": "El 304 contiene níquel, lo que le da mayor resistencia a la corrosión, mientras que el 430 es más económico pero menos resistente."
          },
          {
            "q": "¿Qué significa instalación 'de empotrar / sobreponer'?",
            "opciones": [
              "El borde queda visible sobre la mesada.",
              "Se coloca por debajo de la mesada, sin borde visible.",
              "Queda al ras de la mesada, sin sobresalir.",
              "Se instala dentro del mueble, oculto a la vista."
            ],
            "correcta": 0,
            "explica": "En la instalación de empotrar o sobreponer, el borde de la bacha asienta sobre la mesada y queda visible, sellándose con silicona."
          },
          {
            "q": "¿Qué es el 'cestillo' en una bacha de acero?",
            "opciones": [
              "Filtro metálico extraíble en el desagüe que retiene restos de comida.",
              "Rejilla de plástico que se coloca en el fondo del cuenco para proteger la superficie de golpes y rayones.",
              "Accesorio de acero que se usa para colgar trapos y paños de cocina en el borde de la bacha.",
              "Soporte metálico que se instala debajo de la bacha para reforzar la unión con la mesada y evitar vibraciones."
            ],
            "correcta": 0,
            "explica": "El cestillo es la canastita que va en la sopapa y se saca para limpiar los restos de comida."
          },
          {
            "q": "Si un cliente tiene lavavajillas y poco espacio de mesada, ¿qué le recomendás?",
            "opciones": [
              "Una bacha simple y profunda",
              "Una bacha doble con escurridor",
              "Una bacha triple con cuenco central",
              "Una bacha de acero 430"
            ],
            "correcta": 0,
            "explica": "La bacha simple ocupa poco espacio y permite enjuagar ollas grandes, mientras el lavavajillas hace el resto."
          },
          {
            "q": "¿Las piletas dobles tienen siempre los dos cuencos iguales?",
            "opciones": [
              "No, pueden ser simétricas (iguales) o asimétricas (un cuenco grande para ollas y uno chico/estrecho para cubiertos o lavado de verduras)",
              "Sí, siempre son iguales",
              "Sí, lo exige la ley",
              "Son redondas siempre"
            ],
            "correcta": 0,
            "explica": "Hay bachas asimétricas (ej. 1 grande y 1 chica) que optimizan muy bien usos específicos."
          }
        ]
      },
      {
        "nivel": 3,
        "nombre": "Experto",
        "objetivo": "Accesorios y venta cruzada",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "¿Cuál es el combo completo (venta cruzada) para una cocina nueva?",
            "opciones": [
              "Bacha doble, grifería con duchador, dosificador, sifón doble y sellador",
              "Bacha simple, grifería de caño alto, rejilla y cinta de teflón",
              "Bacha triple, grifería fija, canilla de paso y masilla",
              "Bacha de acero 430, grifería monocomando, sifón simple y silicona"
            ],
            "correcta": 0,
            "explica": "El combo incluye todos los elementos necesarios para instalar y usar una bacha doble de forma completa."
          },
          {
            "q": "¿Qué accesorio muy solicitado se le puede incorporar a algunas bachas o mesadas?",
            "opciones": [
              "Un dosificador de detergente embutido",
              "Un escurridor de vajilla integrado",
              "Un triturador de residuos",
              "Un calentador de agua instantáneo"
            ],
            "correcta": 0,
            "explica": "El dosificador embutido oculta el frasco bajo la mesada y solo deja ver el pico vertedor, logrando un aspecto prolijo."
          },
          {
            "q": "El cliente compra una bacha doble y un monocomando común. ¿Qué detalle de plomería inferior de la bacha debe comprar?",
            "opciones": [
              "Un sifón doble con ramal en Y",
              "Un sifón simple con adaptador",
              "Un sifón flexible de 1 1/2 pulgada",
              "Un sifón doble con salida central"
            ],
            "correcta": 0,
            "explica": "Para conectar ambas bocas de desagüe de una bacha doble a una sola cañería, se necesita un sifón doble con ramal en Y."
          },
          {
            "q": "¿Cómo se prueba rápido si una bacha que nos traen es de acero 304 o 430?",
            "opciones": [
              "Acercando un imán: el 430 es magnético, el 304 no.",
              "Frotándola con un trapo: el 304 deja marcas, el 430 no.",
              "Golpeándola suavemente: el 304 suena distinto al 430.",
              "Sumergiéndola en agua: el 304 flota, el 430 se hunde."
            ],
            "correcta": 0,
            "explica": "El acero 304 no es magnético, mientras que el 430 sí lo es, por lo que el imán permite distinguirlos rápidamente."
          },
          {
            "q": "¿Qué le aconsejás al cliente que va a instalar la bacha bajo mesada respecto al marmolero?",
            "opciones": [
              "Entregarle la bacha al marmolero antes de cortar el granito",
              "Pedirle que ajuste el hueco sobre la mesada sin necesidad de la bacha",
              "Sugerirle que instale la bacha después de colocar el granito",
              "Recomendarle que use medidas estándar de fábrica para el corte"
            ],
            "correcta": 0,
            "explica": "El marmolero necesita la bacha física o su plantilla para hacer el hueco exacto y evitar errores."
          }
        ]
      },
      {
        "nivel": 4,
        "nombre": "Manejo de Objeciones y Casos Prácticos",
        "objetivo": "Atención al cliente y rebatimiento de objeciones comerciales",
        "aprobar": 90,
        "preguntas": [
          {
            "q": "El cliente objeta: \"Bachas de Cocina me parece un gasto elevado para una terminación.\"",
            "opciones": [
              "Revaloriza la propiedad, aporta estética y requiere bajo mantenimiento.",
              "Es un gasto que no se recupera al vender la casa.",
              "Solo sirve para cocinas de lujo, no para uso diario.",
              "Genera problemas de humedad en la mesada a largo plazo."
            ],
            "correcta": 0,
            "explica": "Las terminaciones de calidad aumentan el valor del inmueble y evitan refacciones periódicas."
          },
          {
            "q": "Cliente indeciso: \"¿Qué insumo de colocación debo llevar sí o sí para Bachas de Cocina?\"",
            "opciones": [
              "El sellador o adhesivo recomendado por el fabricante.",
              "Un pegamento multiuso de ferretería que sirva para cualquier material.",
              "Cinta de pintor para fijar la bacha mientras se seca el pegamento.",
              "No hace falta ningún insumo extra porque la bacha ya trae lo necesario."
            ],
            "correcta": 0,
            "explica": "Sin el sellador o adhesivo adecuado, la bacha puede desprenderse o filtrar agua."
          }
        ]
      }
    ]
  },
  {
    "id": "baneras",
    "producto": "Bañeras",
    "rubro": "Terminaciones",
    "icon": "fa-solid fa-bath",
    "color": "#8b5cf6",
    "descripcion": "Descanso y bienestar. Roca, Bagnara.",
    "niveles": [
      {
        "nivel": 1,
        "nombre": "Básico",
        "objetivo": "Formatos y materiales",
        "aprobar": 70,
        "preguntas": [
          {
            "q": "¿De qué materiales suelen ser las bañeras que trabajamos?",
            "opciones": [
              "Acrílico sanitario y chapa esmaltada",
              "Fibra de vidrio y porcelana sanitaria",
              "Hierro fundido esmaltado y cerámica",
              "Poliéster reforzado y granito pulido"
            ],
            "correcta": 0,
            "explica": "El manual indica que los materiales disponibles son acrílico sanitario y chapa esmaltada."
          },
          {
            "q": "¿Qué es una bañera estándar (rectangular)?",
            "opciones": [
              "Se instala encastrada entre paredes y se reviste o lleva faldón frontal",
              "Es una bañera que se coloca en el centro del baño, sin necesidad de encastrarla entre paredes",
              "Es un accesorio de plástico que se utiliza para almacenar agua y lavar ropa",
              "Es una bañera que no requiere instalación de desagüe ni grifería especial"
            ],
            "correcta": 0,
            "explica": "La bañera estándar es la rectangular tradicional que va empotrada entre muros y se termina con revestimiento o faldón."
          },
          {
            "q": "¿Qué es una bañera isla (exenta)?",
            "opciones": [
              "No va encastrada, queda libre en el ambiente.",
              "Va empotrada en el piso y se cubre con cerámica.",
              "Se instala pegada a la pared y se enmarca con azulejos.",
              "Es una bañera portátil que se guarda en el ropero."
            ],
            "correcta": 0,
            "explica": "La bañera isla es independiente (freestanding) y no requiere muretes ni azulejos en su perímetro."
          },
          {
            "q": "¿Cuál es la ventaja de la bañera de acrílico sanitario?",
            "opciones": [
              "Es liviana, cálida y conserva mejor el calor del agua",
              "Es más resistente a los golpes que la chapa esmaltada",
              "Es la opción más económica del mercado",
              "Requiere conexión eléctrica para funcionar"
            ],
            "correcta": 0,
            "explica": "El acrílico sanitario es un material liviano que retiene el calor, brindando mayor confort térmico."
          },
          {
            "q": "¿Qué marcas ofrecemos (muchas a pedido)?",
            "opciones": [
              "Roca y Bagnara",
              "Ferrum",
              "Tigre",
              "Rotoplas"
            ],
            "correcta": 0,
            "explica": "Trabajamos bañeras de marcas reconocidas como Roca y Bagnara."
          }
        ]
      },
      {
        "nivel": 2,
        "nombre": "Intermedio",
        "objetivo": "Hidromasajes e instalación",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "¿Qué diferencia a un hidromasaje de una bañera común?",
            "opciones": [
              "Tiene motor y jets de agua/aire a presión",
              "Es de mayor tamaño y capacidad",
              "No necesita desagüe ni grifería",
              "Usa agua fría para el masaje"
            ],
            "correcta": 0,
            "explica": "Incorpora sistema de bombeo (bomba + jets) para hidroterapia y relax."
          },
          {
            "q": "¿Qué precaución básica de seguridad eléctrica requiere un hidromasaje?",
            "opciones": [
              "Conexión eléctrica con disyuntor y toma de tierra",
              "Enchufarlo a una zapatilla común",
              "Usar cables pelados",
              "No lleva electricidad"
            ],
            "correcta": 0,
            "explica": "El agua y la electricidad requieren protecciones como disyuntor diferencial y toma de tierra para evitar accidentes."
          },
          {
            "q": "¿Qué es fundamental preguntar antes de encargar un hidromasaje?",
            "opciones": [
              "La posición del motor según el baño",
              "El tipo de grifería que se va a usar",
              "La marca de los jets de hidromasaje",
              "El color del acrílico de la bañera"
            ],
            "correcta": 0,
            "explica": "El motor debe ubicarse a la izquierda o derecha según el espacio disponible para su instalación y mantenimiento."
          },
          {
            "q": "¿Por qué algunos prefieren chapa esmaltada?",
            "opciones": [
              "Porque es tradicional, rígida y resiste rayaduras, aunque el esmalte puede saltar con un golpe fuerte.",
              "Porque es más liviana y fácil de instalar en cualquier baño.",
              "Porque es más económica y no requiere mantenimiento especial.",
              "Porque es más cálida al tacto y conserva mejor el calor del agua."
            ],
            "correcta": 0,
            "explica": "La chapa esmaltada es una opción tradicional y muy resistente a rayaduras, pero su esmalte puede saltar ante golpes fuertes."
          },
          {
            "q": "¿Qué complemento requiere una bañera isla para funcionar?",
            "opciones": [
              "Grifería de pie o de pared y desagüe al piso",
              "Conexión eléctrica para el motor de hidromasaje",
              "Un sistema de rebosadero con bomba de recirculación",
              "Un kit de anclaje para fijarla a la pared"
            ],
            "correcta": 0,
            "explica": "Al ser exenta, no apoya en la pared, por lo que necesita grifería de pie o de pared y un desagüe que salga del piso."
          }
        ]
      },
      {
        "nivel": 3,
        "nombre": "Experto",
        "objetivo": "Completar la instalación",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "El cliente quiere revestir el frente de la bañera estándar. ¿Qué debe dejar el albañil si es un hidromasaje?",
            "opciones": [
              "Una puerta de acceso al motor",
              "Un espacio para la grifería de la bañera",
              "Una salida de ventilación para el ambiente",
              "Un nicho para guardar los productos de limpieza"
            ],
            "correcta": 0,
            "explica": "El motor del hidromasaje necesita mantenimiento, por eso se deja una puerta de inspección."
          },
          {
            "q": "¿Cuál es la venta cruzada para una bañera estándar (no hidro)?",
            "opciones": [
              "Grifería de baño, sopapa y rebosadero, mampara o cortina, cerámicos",
              "Solo cemento y arena para el encastre",
              "Pastina epoxi y pintura para paredes",
              "Grifería de cocina y piletas de lavar"
            ],
            "correcta": 0,
            "explica": "La venta cruzada incluye los accesorios necesarios para instalar y usar la bañera, como grifería, desagüe, protección y revestimiento."
          },
          {
            "q": "¿Qué es el 'conjunto sopapa-rebosadero' de bañera?",
            "opciones": [
              "Tubo plástico que une el desagüe con el rebosadero",
              "Sistema de filtrado de agua con cartucho",
              "Válvula de cierre para el llenado",
              "Conjunto de goma para evitar ruidos"
            ],
            "correcta": 0,
            "explica": "Conecta el desagüe del fondo con el rebosadero superior para evitar desbordes."
          },
          {
            "q": "El cliente pregunta: '¿el acrílico no se quiebra si me paro adentro?'. ¿Qué respondés?",
            "opciones": [
              "No, vienen reforzadas con fibra de vidrio en la base.",
              "Sí, se quiebran si no se asientan sobre una estructura de madera.",
              "Depende, solo aguantan hasta 80 kilos de peso.",
              "No, pero se rayan con facilidad si usás objetos metálicos."
            ],
            "correcta": 0,
            "explica": "Las bañeras de acrílico tienen refuerzo de fibra de vidrio en la base y se instalan sobre una cama de asiento, lo que les da rigidez."
          },
          {
            "q": "¿Qué beneficios (argumento de venta) tiene el hidromasaje?",
            "opciones": [
              "Alivia tensiones, mejora la circulación y reduce el estrés",
              "Ahorra agua y reduce el consumo de energía",
              "Es más fácil de instalar que una bañera común",
              "Requiere menos mantenimiento que una bañera estándar"
            ],
            "correcta": 0,
            "explica": "El hidromasaje ofrece beneficios terapéuticos y de bienestar, y agrega valor a la propiedad."
          }
        ]
      },
      {
        "nivel": 4,
        "nombre": "Manejo de Objeciones y Casos Prácticos",
        "objetivo": "Atención al cliente y rebatimiento de objeciones comerciales",
        "aprobar": 90,
        "preguntas": [
          {
            "q": "El cliente objeta: \"Bañeras me parece un gasto elevado para una terminación.\"",
            "opciones": [
              "Revaloriza la propiedad, aporta estética moderna y requiere poco mantenimiento.",
              "Es un gasto innecesario que no aporta valor a la propiedad.",
              "Solo es recomendable para baños de lujo y de gran tamaño.",
              "Genera problemas de humedad y requiere mantenimiento constante."
            ],
            "correcta": 0,
            "explica": "Las terminaciones de calidad aumentan el valor del inmueble y evitan refacciones periódicas."
          },
          {
            "q": "Cliente indeciso: \"¿Qué insumo de colocación debo llevar sí o sí para Bañeras?\"",
            "opciones": [
              "El adhesivo, sellador o perfilería del fabricante.",
              "Cualquier pegamento multiuso que tengas en casa.",
              "Un sellador genérico para exteriores e interiores.",
              "La cinta adhesiva de doble cara común."
            ],
            "correcta": 0,
            "explica": "Sin el producto de colocación/juntado adecuado, la terminación corre riesgo de desprenderse o mancharse."
          }
        ]
      }
    ]
  },
  {
    "id": "griferias-cocina",
    "producto": "Griferías de Cocina",
    "rubro": "Terminaciones",
    "icon": "fa-solid fa-sink",
    "color": "#8b5cf6",
    "descripcion": "Comodidad y durabilidad en la mesada. FV, Vasser.",
    "niveles": [
      {
        "nivel": 1,
        "nombre": "Básico",
        "objetivo": "Tipos y comandos",
        "aprobar": 70,
        "preguntas": [
          {
            "q": "¿Cuál es la diferencia principal entre monocomando y bimando?",
            "opciones": [
              "Una palanca regula caudal y temperatura; el bimando tiene dos llaves separadas.",
              "El monocomando es de plástico y el bimando de metal.",
              "El monocomando es para baño y el bimando para cocina.",
              "El monocomando no tiene pico y el bimando sí lo tiene."
            ],
            "correcta": 0,
            "explica": "El monocomando se opera con una sola mano, mientras que el bimando requiere dos llaves independientes."
          },
          {
            "q": "¿Qué tipo de grifería es la más elegida y recomendada para la cocina moderna?",
            "opciones": [
              "Monocomando de mesada con pico alto",
              "Bimando de pared con cierre de cuerito",
              "Monocomando de pared con pico fijo",
              "Bimando de mesada con pico extraíble"
            ],
            "correcta": 0,
            "explica": "El monocomando de mesada con pico alto es el más práctico y demandado en cocinas modernas."
          },
          {
            "q": "¿Qué marcas líderes de grifería trabajamos?",
            "opciones": [
              "FV y Vasser",
              "Rotoplas",
              "Ternium",
              "Cerámica Marcos Paz"
            ],
            "correcta": 0,
            "explica": "FV y Vasser son nuestras marcas de cabecera en grifería."
          },
          {
            "q": "¿Cuáles son las dos ubicaciones posibles para instalar la grifería de cocina?",
            "opciones": [
              "De mesada o de pared",
              "De piso o de techo",
              "De interior o de exterior",
              "De un solo caño o de dos"
            ],
            "correcta": 0,
            "explica": "La instalación tradicional es en la pared, mientras que la moderna se hace sobre la mesada."
          },
          {
            "q": "¿Por qué es tan útil un pico alto en la cocina?",
            "opciones": [
              "Permite lavar y llenar ollas grandes cómodamente",
              "Hace que el agua salga con más presión",
              "Evita que se formen manchas de cal",
              "Permite ahorrar agua en cada uso"
            ],
            "correcta": 0,
            "explica": "El pico alto deja espacio para colocar recipientes voluminosos bajo el chorro."
          }
        ]
      },
      {
        "nivel": 2,
        "nombre": "Intermedio",
        "objetivo": "Tecnología interna y funciones",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "¿Qué ventaja tiene el cierre con 'cartucho cerámico' (típico de monocomandos y algunos bimandos)?",
            "opciones": [
              "Cierre suave, sin goteos y más duradero",
              "Es más económico pero se desgasta rápido",
              "No soporta altas temperaturas de agua",
              "Requiere lubricación periódica con aceite"
            ],
            "correcta": 0,
            "explica": "Los discos cerámicos pulidos sellan el paso de agua por deslizamiento, siendo casi eternos frente al desgaste."
          },
          {
            "q": "¿Qué es el cierre de 'compresión' (cuerito)?",
            "opciones": [
              "Cierre a rosca con junta de goma que sella por presión.",
              "Sistema que usa un imán para abrir y cerrar el paso de agua.",
              "Mecanismo que se activa con un sensor de movimiento.",
              "Cierre de disco cerámico de alta duración y suavidad."
            ],
            "correcta": 0,
            "explica": "Es el sistema tradicional y económico de las canillas bimanuales, que requiere cambiar el cuerito cuando gotea."
          },
          {
            "q": "¿Qué es un pico extraíble o duchador de cocina?",
            "opciones": [
              "Un rociador que se desprende del pico mediante una manguera extensible",
              "Un pico que se puede desenroscar y tirar",
              "Un pico que se mueve solo",
              "Un pico para baño"
            ],
            "correcta": 0,
            "explica": "Permite lavar rincones de la pileta o verduras con mayor alcance y comodidad."
          },
          {
            "q": "¿Qué materiales aseguran mayor calidad en el cuerpo de una grifería (ej. FV)?",
            "opciones": [
              "Cuerpo de latón sólido con baño de cromo",
              "Cuerpo de plástico con pintura cromada",
              "Cuerpo de hierro fundido con recubrimiento",
              "Cuerpo de aluminio anodizado sin baño"
            ],
            "correcta": 0,
            "explica": "El latón macizo garantiza durabilidad y resistencia a la corrosión interna."
          },
          {
            "q": "¿Qué es el 'aireador' en la punta del pico?",
            "opciones": [
              "Una malla que mezcla agua y aire para un chorro suave que no salpica",
              "Un dispositivo que calienta el agua para mejorar la limpieza",
              "Una pieza que regula la presión para evitar fugas en la cañería",
              "Un filtro que elimina impurezas y cambia el sabor del agua"
            ],
            "correcta": 0,
            "explica": "El aireador incorpora aire al chorro, lo que reduce el consumo y evita salpicaduras."
          }
        ]
      },
      {
        "nivel": 3,
        "nombre": "Experto",
        "objetivo": "Garantía y complementos",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "El cliente compra un FV Monocomando 'Temple'. ¿Qué le informás sobre la garantía?",
            "opciones": [
              "Garantía de por vida en cuerpo y cromo, 2 años en cartuchos.",
              "Solo 1 año de garantía en todo el producto.",
              "Garantía de 5 años únicamente en el cromado.",
              "No tiene garantía, solo cambio si falla en 30 días."
            ],
            "correcta": 0,
            "explica": "FV ofrece garantía de por vida en cuerpo y cromo, y 2 años en cartuchos internos, un diferencial clave."
          },
          {
            "q": "Un plomero arruinó el cromo de una grifería nueva al apretarla con una llave dentada (pico de loro) sin trapo. ¿Lo cubre la garantía FV?",
            "opciones": [
              "No, la garantía no cubre maltrato por herramientas.",
              "Sí, FV cubre todo daño por instalación.",
              "Sí, pero solo si el plomero es matriculado.",
              "Lo cubre el seguro de la casa, no la garantía."
            ],
            "correcta": 0,
            "explica": "La garantía excluye daños por instalación incorrecta o maltrato, como el uso de herramientas inadecuadas."
          },
          {
            "q": "El cliente dice 'en mi cocina no hay buena presión (tanque bajo)'. ¿El monocomando funcionará bien?",
            "opciones": [
              "Requiere más presión mínima que un bimando; conviene bomba presurizadora.",
              "Funciona igual que un bimando en cualquier presión, por lo que no hay problema con tanque bajo.",
              "No necesita presión mínima, solo caudal constante, así que andará bien sin bomba.",
              "Con baja presión, el agua sale más caliente de lo normal, pero eso se regula con la palanca."
            ],
            "correcta": 0,
            "explica": "El cartucho monocomando reduce el paso de agua, por lo que con baja presión el caudal puede ser insuficiente."
          },
          {
            "q": "¿Cuál es la venta complementaria al vender una grifería de mesada de cocina?",
            "opciones": [
              "Bacha de cocina, dosificador y flexibles si no vienen",
              "Pastina epoxi para sellar juntas",
              "Mochila de inodoro con descarga dual",
              "Clavos y martillo para fijar la mesada"
            ],
            "correcta": 0,
            "explica": "La venta complementaria incluye bacha, dosificador y flexibles, aunque muchos monocomandos ya traen estos últimos."
          },
          {
            "q": "Si el cliente compra grifería negra mate, ¿qué cuidado de limpieza le recomendás?",
            "opciones": [
              "Agua y jabón neutro, secar con paño suave.",
              "Limpiar con lavandina y esponja de fibra.",
              "Usar antigrasas fuerte y cepillo de cerdas duras.",
              "Aplicar limpiador con cloro y dejar secar al aire."
            ],
            "correcta": 0,
            "explica": "Los acabados mate o de color son delicados; químicos fuertes o esponjas abrasivas los rayan o decoloran."
          }
        ]
      },
      {
        "nivel": 4,
        "nombre": "Manejo de Objeciones y Casos Prácticos",
        "objetivo": "Atención al cliente y rebatimiento de objeciones comerciales",
        "aprobar": 90,
        "preguntas": [
          {
            "q": "El cliente objeta: \"Griferías de Cocina me parece un gasto elevado para una terminación.\"",
            "opciones": [
              "Revaloriza la propiedad y requiere bajo mantenimiento.",
              "Es un gasto que no se recupera al vender la propiedad.",
              "Solo conviene en casas de alta gama por su precio elevado.",
              "Genera problemas de instalación a futuro en la mesada."
            ],
            "correcta": 0,
            "explica": "Las terminaciones de calidad aumentan el valor del inmueble y evitan refacciones periódicas."
          },
          {
            "q": "Cliente indeciso: \"¿Qué insumo de colocación debo llevar sí o sí para Griferías de Cocina?\"",
            "opciones": [
              "Adhesivo o sellador recomendado por el fabricante.",
              "Cualquier pegamento común del hogar.",
              "No hace falta ningún insumo de pegado.",
              "Solo agua para humedecer la pieza."
            ],
            "correcta": 0,
            "explica": "El adhesivo o sellador específico asegura la fijación y evita desprendimientos o manchas."
          }
        ]
      }
    ]
  },
  {
    "id": "griferias-bano",
    "producto": "Griferías de Baño",
    "rubro": "Terminaciones",
    "icon": "fa-solid fa-shower",
    "color": "#8b5cf6",
    "descripcion": "Estilo y confort. FV, Vasser.",
    "niveles": [
      {
        "nivel": 1,
        "nombre": "Básico",
        "objetivo": "Tipos de juegos",
        "aprobar": 70,
        "preguntas": [
          {
            "q": "¿Qué piezas componen tradicionalmente un 'juego completo' de grifería de baño?",
            "opciones": [
              "Lavatorio, bidet y ducha",
              "Inodoro, mochila y bidet",
              "Ducha y canilla de cocina",
              "Solo un monocomando"
            ],
            "correcta": 0,
            "explica": "El juego completo incluye las tres piezas principales del baño para mantener una estética uniforme."
          },
          {
            "q": "¿Qué es una ducha 'con transferencia' o de bañera?",
            "opciones": [
              "Desvía el agua entre el pico de llenado y la flor de ducha.",
              "Es un sistema que se conecta a la cañería principal para aumentar la presión del agua.",
              "Permite regular la temperatura del agua de manera automática según la estación del año.",
              "Se utiliza exclusivamente en duchas exteriores para evitar el ingreso de agua fría."
            ],
            "correcta": 0,
            "explica": "La transferencia desvía el flujo de agua del pico inferior (llenar bañera) hacia la lluvia superior."
          },
          {
            "q": "¿Qué grifería se recomienda para un bidet de 1 agujero?",
            "opciones": [
              "Grifería monocomando para bidet",
              "Grifería bimando de pared",
              "Grifería monocomando de piso",
              "Grifería bimando con transferencia"
            ],
            "correcta": 0,
            "explica": "Un agujero en el bidet corresponde a una grifería monocomando, que controla flujo y temperatura con una sola palanca."
          },
          {
            "q": "¿De qué material es la 'flor' (rociador) de ducha actualmente en muchas líneas?",
            "opciones": [
              "ABS con picos de silicona anticalcáreos",
              "Acero inoxidable con picos de goma",
              "Latón cromado con picos de metal",
              "Plástico común sin tratamiento especial"
            ],
            "correcta": 0,
            "explica": "El ABS con picos de silicona evita que se tape con sarro y no oxida."
          },
          {
            "q": "¿Las marcas de grifería de baño son las mismas que de cocina?",
            "opciones": [
              "Sí, FV y Vasser",
              "No, son otras marcas",
              "Solo marca Tromen",
              "Solo marca Weber"
            ],
            "correcta": 0,
            "explica": "FV y Vasser ofrecen líneas completas para cocina y baño."
          }
        ]
      },
      {
        "nivel": 2,
        "nombre": "Intermedio",
        "objetivo": "Lavatorios y duchas",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "¿Qué grifería de lavatorio se debe vender si el cliente eligió bacha de apoyar sin agujero de grifería (borde alto)?",
            "opciones": [
              "Grifería alta (prolongada) o grifería de pared (mural)",
              "Grifería de lavatorio estándar baja",
              "Un monocomando de bidet",
              "Un pico curvo de cocina"
            ],
            "correcta": 0,
            "explica": "Debe pasar por encima de la altura de la bacha (aprox. 15 cm)."
          },
          {
            "q": "¿Cuál es la diferencia entre ducha exterior y ducha de embutir?",
            "opciones": [
              "Embutir: caños y llaves ocultos en la pared. Exterior: caño a la vista.",
              "Embutir: se instala en el piso. Exterior: se cuelga del techo.",
              "Embutir: solo para bidet. Exterior: solo para ducha.",
              "Embutir: requiere pileta. Exterior: requiere termotanque."
            ],
            "correcta": 0,
            "explica": "La ducha de embutir oculta la instalación en la pared, mientras que la exterior muestra el caño por fuera."
          },
          {
            "q": "¿Para qué sirve el 'cuadro de ducha'?",
            "opciones": [
              "Es la parte interna que va amurada en la pared",
              "Es el soporte donde se apoya el jabón",
              "Es la pieza que regula el caudal de agua",
              "Es el accesorio que sostiene la cortina"
            ],
            "correcta": 0,
            "explica": "El cuadro de ducha es el mecanismo interno que se instala dentro de la pared y sobre él se colocan los volantes decorativos."
          },
          {
            "q": "¿El cierre cerámico (cuarto de vuelta) requiere un trato especial?",
            "opciones": [
              "Sí, no hay que forzarlo al cerrar.",
              "Requiere apretar fuerte para sellar bien.",
              "Hay que lubricarlo con grasa cada mes.",
              "No, es irrompible y no necesita cuidados."
            ],
            "correcta": 0,
            "explica": "El cierre cerámico sella al llegar a tope; forzarlo puede partir los discos."
          },
          {
            "q": "¿Qué es el 'pico móvil' en lavatorio?",
            "opciones": [
              "El pico gira a los lados, como en cocina.",
              "Un pico que se desmonta para limpiar, aunque no es lo habitual en lavatorios.",
              "Un pico con sensor de movimiento, que activa el agua sin tocarlo.",
              "Un pico que se pliega hacia arriba, pero no es una función común en griferías de baño."
            ],
            "correcta": 0,
            "explica": "Algunos modelos traen pico móvil, cómodo para lavatorios grandes."
          }
        ]
      },
      {
        "nivel": 3,
        "nombre": "Experto",
        "objetivo": "Mantenimiento y ventas",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "El plomero debe cambiar el cuerito de una grifería muy vieja y no consigue. ¿Por qué es mejor sugerirle que ponga 'cierres cerámicos' si el modelo lo permite, o cambiar el juego?",
            "opciones": [
              "Porque el cierre cerámico evita goteos y dura más, o cambiar el juego da garantía.",
              "Porque el cuerito ya no se fabrica y es ilegal usarlo.",
              "Porque el cierre cerámico es más barato y fácil de instalar.",
              "Porque el cuerito daña las cañerías con el tiempo."
            ],
            "correcta": 0,
            "explica": "El cierre cerámico es más duradero y no gotea, y cambiar el juego asegura cobertura de garantía."
          },
          {
            "q": "¿Es fácil conseguir repuestos de FV?",
            "opciones": [
              "Sí, FV garantiza provisión de repuestos para piezas internas por 2 años, y para modelos discontinuados hasta por 5 años",
              "No, es imposible conseguir un cuerito FV",
              "Solo se consiguen en China",
              "Se compran en la verdulería"
            ],
            "correcta": 0,
            "explica": "Es la gran fortaleza de la marca: stock permanente de repuestos (cartuchos, vástagos, volantes)."
          },
          {
            "q": "Un cliente se queja de que la flor de ducha tira poca agua y salpica raro. ¿Qué suele ser?",
            "opciones": [
              "Sarro tapando los orificios.",
              "Falta de presión de agua en la casa.",
              "El termostato está mal calibrado.",
              "La ducha está mal instalada."
            ],
            "correcta": 0,
            "explica": "El sarro tapa el paso del agua, por eso sale poca y salpica raro."
          },
          {
            "q": "¿Qué venta cruzada aplica cuando te compran grifería completa para armar un baño desde cero?",
            "opciones": [
              "Sanitarios, bachas, cuadro de ducha, flexibles, sopapas, accesorios y pastina",
              "Solo pintura y cerámicos para pisos",
              "Únicamente caños de PVC y cemento de contacto",
              "Nada más que silicona y cinta teflón"
            ],
            "correcta": 0,
            "explica": "La venta cruzada incluye loza, conexiones y accesorios que completan la instalación y el estilo del baño."
          },
          {
            "q": "Un cliente compra un monocomando barato genérico para bidet, y al instalarlo el plomero se da cuenta de que la lluvia no tiene fuerza. ¿Por qué el FV es mejor?",
            "opciones": [
              "Su cartucho y cuerpo interno mantienen el caudal adecuado en la transferencia.",
              "Porque tiene un acabado cromado más brillante y resistente.",
              "Porque su diseño incluye un aireador que aumenta la presión.",
              "Porque el cuerpo es más pesado y eso mejora el flujo."
            ],
            "correcta": 0,
            "explica": "Los cartuchos de baja calidad pierden presión internamente, mientras que el FV está diseñado para mantener el caudal."
          }
        ]
      },
      {
        "nivel": 4,
        "nombre": "Manejo de Objeciones y Casos Prácticos",
        "objetivo": "Atención al cliente y rebatimiento de objeciones comerciales",
        "aprobar": 90,
        "preguntas": [
          {
            "q": "El cliente objeta: \"Griferías de Baño me parece un gasto elevado para una terminación.\"",
            "opciones": [
              "Revaloriza la propiedad, aporta estética moderna y requiere poco mantenimiento.",
              "Es un gasto que no se recupera al vender la propiedad.",
              "Solo aporta un detalle visual sin impacto en el confort.",
              "Genera costos de mantenimiento altos a corto plazo."
            ],
            "correcta": 0,
            "explica": "Las terminaciones de calidad aumentan el valor del inmueble y evitan refacciones periódicas."
          },
          {
            "q": "Cliente indeciso: \"¿Qué insumo de colocación debo llevar sí o sí para Griferías de Baño?\"",
            "opciones": [
              "El sellador recomendado por el fabricante.",
              "El pegamento de contacto de uso general es suficiente para fijar la grifería al mueble.",
              "Un sellador de silicona común garantiza la estanqueidad sin necesidad de otro producto.",
              "El adhesivo multiuso que tengas en la obra sirve para asegurar la unión de las piezas."
            ],
            "correcta": 0,
            "explica": "El sellador específico asegura la adhesión y evita filtraciones."
          }
        ]
      }
    ]
  },
  {
    "id": "mesadas",
    "producto": "Mesadas",
    "rubro": "Terminaciones",
    "icon": "fa-solid fa-utensils",
    "color": "#8b5cf6",
    "descripcion": "Área de trabajo en la cocina. Dhinox y granito.",
    "niveles": [
      {
        "nivel": 1,
        "nombre": "Básico",
        "objetivo": "Tipos de mesadas",
        "aprobar": 70,
        "preguntas": [
          {
            "q": "¿Cuáles son las dos opciones principales de mesadas que trabajamos?",
            "opciones": [
              "Acero inoxidable y granito natural",
              "Madera y vidrio templado, que son materiales alternativos para mesadas",
              "Plástico y cartón prensado, usados en mesadas económicas",
              "Solo acero inoxidable, que es el material más vendido en el rubro"
            ],
            "correcta": 0,
            "explica": "Trabajamos mesadas de acero inoxidable y de granito natural, las dos opciones principales que ofrecemos."
          },
          {
            "q": "¿Qué ventajas tiene la mesada de acero inoxidable (ej. Dhinox)?",
            "opciones": [
              "Es súper higiénica, no se oxida, resiste calor/golpes, fácil de limpiar y puede venir con la bacha ya integrada sin juntas",
              "Es muy pesada",
              "Se raya con mirar",
              "Es para exteriores solamente"
            ],
            "correcta": 0,
            "explica": "Es la elegida en cocinas profesionales por ser 100% no porosa (no junta bacterias) y muy resistente."
          },
          {
            "q": "¿Qué ventajas tiene la mesada de granito natural?",
            "opciones": [
              "Es muy duro y resistente a rayaduras, calor y uso rudo.",
              "Es poroso y se mancha con facilidad.",
              "Es frágil y se raja con el calor.",
              "Es liviano y se abolla con golpes."
            ],
            "correcta": 0,
            "explica": "El granito es una roca ígnea de gran dureza, ideal para soportar altas temperaturas y el desgaste diario."
          },
          {
            "q": "¿Qué colores / vetas de granito son muy populares y económicos?",
            "opciones": [
              "Gris Mara, Rosa de Salto o colores sólidos como Negro Brasil",
              "Blanco polar, Beige arena o tonos crema, que son los más pedidos por su luminosidad y fácil combinación con cualquier estilo de cocina",
              "Verde esmeralda, Azul noche o Rojo intenso, que aportan un toque de color vibrante y moderno a los ambientes",
              "Gris perla, Marrón oscuro o Amarillo dorado, que se destacan por su elegancia y calidez, ideales para espacios clásicos"
            ],
            "correcta": 0,
            "explica": "Los granitos claros y granosos como Gris Mara y Rosa de Salto son los más accesibles, mientras que los negros como Negro Brasil son más costosos."
          },
          {
            "q": "¿La mesada de acero inoxidable viene lisa o con bacha?",
            "opciones": [
              "Viene lisa o con bacha simple o doble.",
              "Se fabrica exclusivamente en versión lisa, sin posibilidad de incorporar bacha alguna.",
              "La versión con bacha integrada solo está disponible en el modelo doble, no en el simple.",
              "Puede venir con bacha simple o doble, pero también se ofrece la opción de bacha triple."
            ],
            "correcta": 0,
            "explica": "La mesada de acero inoxidable se ofrece en versión lisa o con bacha integrada, simple o doble, según la necesidad del cliente."
          }
        ]
      },
      {
        "nivel": 2,
        "nombre": "Intermedio",
        "objetivo": "Detalles e instalación",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "¿El granito es lo mismo que el mármol?",
            "opciones": [
              "No, el granito es más duro y resistente a los ácidos.",
              "Sí, son la misma piedra con distinto nombre.",
              "El granito es artificial y el mármol natural.",
              "El mármol es más duro y resistente a las manchas."
            ],
            "correcta": 0,
            "explica": "El granito es más duro y resistente a ácidos como limón o vinagre, mientras que el mármol es poroso y se mancha fácil, por eso se recomienda granito para cocina."
          },
          {
            "q": "¿Cómo se instala una mesada tradicional sobre muebles?",
            "opciones": [
              "Se apoya en el mueble y se fija con silicona estructural o adhesivo PU.",
              "Se fija a la pared con escuadras de acero y se sella con masilla plástica",
              "Se ancla al mueble con pernos de expansión y se cubre con burletes de goma",
              "Se atornilla a la estructura del mueble y se sella con cinta de butilo"
            ],
            "correcta": 0,
            "explica": "El granito es pesado y se asienta por gravedad, por eso solo se sella con silicona o adhesivo PU en los puntos de contacto."
          },
          {
            "q": "¿Qué es el 'zócalo' de la mesada?",
            "opciones": [
              "Una franja del mismo material (acero o granito) de unos 5 cm de alto que se pega a la pared para que no escurra agua hacia atrás del mueble",
              "Una moldura decorativa que se coloca en la unión entre la mesada y la pared, con el fin de ocultar imperfecciones y dar un acabado estético al conjunto, aunque no cumple función de protección contra el agua",
              "Un accesorio que se instala debajo de la mesada para sostener los muebles y evitar que se muevan, fabricado en el mismo material que la encimera y de tamaño variable según el espacio disponible",
              "Un perfil metálico que se coloca en el borde frontal de la mesada para evitar que los líquidos caigan al piso, y que se comercializa en distintos colores para combinar con la grifería"
            ],
            "correcta": 0,
            "explica": "El zócalo sella el encuentro mesada-pared, impidiendo filtraciones hacia atrás."
          },
          {
            "q": "¿Las mesadas de acero Dhinox llevan madera adentro?",
            "opciones": [
              "Sí, llevan una placa de MDF o aglomerado hidrófugo debajo.",
              "No, son de acero macizo en su totalidad.",
              "No, solo llevan una capa de pintura anticorrosiva.",
              "Sí, llevan un núcleo de cartón prensado."
            ],
            "correcta": 0,
            "explica": "La chapa de acero es fina y se adhiere a una placa de madera para darle rigidez y evitar ruidos."
          },
          {
            "q": "¿Qué cuidado requiere el acero inoxidable a largo plazo?",
            "opciones": [
              "Evitar limpiadores abrasivos y secarlo para prevenir manchas.",
              "Aplicar una capa de cera protectora cada mes para mantener el brillo y evitar rayaduras.",
              "Usar solo agua y jabón neutro, sin secar, para que la humedad no dañe el material.",
              "Lijar la superficie con lija al agua fina para eliminar manchas y devolver el brillo original."
            ],
            "correcta": 0,
            "explica": "La abrasión daña el pulido y el secado evita marcas de agua."
          }
        ]
      },
      {
        "nivel": 3,
        "nombre": "Experto",
        "objetivo": "Cotización y complementos",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "El cliente quiere una mesada de granito a medida para cocina. ¿Qué datos necesitás para cotizarle?",
            "opciones": [
              "Largo, ancho, zócalos, canto, color y calados para bacha o anafe",
              "El ancho de la bacha y la marca de la grifería",
              "La altura del mueble y el tipo de anafe",
              "El espesor del granito y la cantidad de colores"
            ],
            "correcta": 0,
            "explica": "Para cotizar granito a medida se necesitan las medidas exactas, opciones de terminación y cortes especiales."
          },
          {
            "q": "Si el cliente pide la mesada de granito con calado para bacha. ¿Qué debe traer obligatoriamente al marmolero?",
            "opciones": [
              "La bacha física o la plantilla exacta",
              "La grifería y los accesorios de cocina",
              "Una foto de la cocina para guiarse",
              "El mueble bajo mesada para medir"
            ],
            "correcta": 0,
            "explica": "Sin la bacha o plantilla, no se puede hacer el agujero a medida, ya que las formas varían y la bacha se ajusta a ese corte."
          },
          {
            "q": "¿Qué venta cruzada le hacés a quien encarga su mesada?",
            "opciones": [
              "Bacha, grifería, dosificador, sifón y sellador",
              "Ladrillos huecos y cemento para el contrapiso",
              "Cal hidráulica y arena para el revoque",
              "Aberturas de aluminio y vidrio para la cocina"
            ],
            "correcta": 0,
            "explica": "La mesada requiere accesorios como bacha, grifería y selladores para su instalación completa."
          },
          {
            "q": "Un cliente se queja de que su granito Gris Mara se oscureció cerca de la bacha. ¿Qué pasó y cómo evitarlo?",
            "opciones": [
              "Absorbió humedad o grasa por su porosidad. Se soluciona sellando la piedra.",
              "Se manchó por el cloro de la limpieza diaria. Se evita usando solo agua y secando bien la superficie.",
              "Reaccionó con el metal de la bacha. Se evita colocando una junta de silicona entre ambos materiales.",
              "Se oscureció por el calor de las ollas calientes. Se evita usando una base aislante de silicona."
            ],
            "correcta": 0,
            "explica": "El granito es poroso y puede absorber líquidos; el sellador lo impermeabiliza."
          },
          {
            "q": "Un cliente busca la mesada más barata para un departamento de alquiler. ¿Qué le ofrecés?",
            "opciones": [
              "Mesada de acero inoxidable línea económica",
              "Mesada de granito gris mara con terminación pulida",
              "Mesada de acero inoxidable con bacha integrada doble",
              "Mesada de granito negro Brasil con borde recto"
            ],
            "correcta": 0,
            "explica": "Las mesadas de acero inoxidable estándar son la opción más económica y rápida de instalar."
          }
        ]
      },
      {
        "nivel": 4,
        "nombre": "Manejo de Objeciones y Casos Prácticos",
        "objetivo": "Atención al cliente y rebatimiento de objeciones comerciales",
        "aprobar": 90,
        "preguntas": [
          {
            "q": "El cliente objeta: \"Mesadas me parece un gasto elevado para una terminación.\"",
            "opciones": [
              "Le mostrás que revaloriza la propiedad y requiere bajo mantenimiento.",
              "Le das la razón y le sugerís dejar el contrapiso a la vista.",
              "Le decís que es un lujo innecesario y que no conviene.",
              "Le sugerís pintar con cal común encima para ahorrar."
            ],
            "correcta": 0,
            "explica": "Las terminaciones de calidad aumentan el valor del inmueble y evitan refacciones periódicas."
          },
          {
            "q": "Cliente indeciso: \"¿Qué insumo de colocación debo llevar sí o sí para Mesadas?\"",
            "opciones": [
              "Adhesivo, sellador o perfilería del fabricante.",
              "Adhesivo de contacto y cinta de doble cara para fijar la mesada.",
              "Sellador de silicona y masilla plástica para nivelar la superficie.",
              "Perfiles metálicos y tornillos de acero inoxidable para el borde."
            ],
            "correcta": 0,
            "explica": "Sin el producto de colocación adecuado, la mesada puede desprenderse o tener mal acabado."
          }
        ]
      }
    ]
  },
  {
    "id": "puertas",
    "producto": "Puertas (Interior y Exterior)",
    "rubro": "Terminaciones",
    "icon": "fa-solid fa-door-closed",
    "color": "#8b5cf6",
    "descripcion": "Seguridad y estética. Oblak, Herfasa, El Ítalo.",
    "niveles": [
      {
        "nivel": 1,
        "nombre": "Básico",
        "objetivo": "Tipos de puertas",
        "aprobar": 70,
        "preguntas": [
          {
            "q": "¿Qué diferencia principal hay entre una puerta de interior y una de exterior?",
            "opciones": [
              "La exterior prioriza seguridad y resistencia a la intemperie; la interior es más liviana y divide ambientes.",
              "La exterior es de vidrio y la interior de acero, para mayor luminosidad.",
              "La exterior no lleva cerradura, solo manija, para facilitar el acceso.",
              "Son exactamente iguales, solo cambia el color de la pintura."
            ],
            "correcta": 0,
            "explica": "La puerta exterior debe soportar condiciones climáticas y posibles intentos de robo, mientras que la interior solo necesita brindar privacidad."
          },
          {
            "q": "¿Qué es una puerta 'placa' de interior (ej. Oblak Nativa)?",
            "opciones": [
              "Puerta liviana con tapas finas y relleno tipo nido de abeja.",
              "Panel de madera maciza con refuerzos internos de acero.",
              "Lámina de fibra de vidrio con núcleo de poliestireno expandido.",
              "Hoja compuesta por tablones de pino cepillado y machimbrado."
            ],
            "correcta": 0,
            "explica": "Es la puerta estándar de interior: liviana, económica y funcional."
          },
          {
            "q": "¿Qué significa que una puerta exterior sea de 'chapa inyectada'?",
            "opciones": [
              "Chapa de acero con espuma de poliuretano inyectada en su interior.",
              "Se le inyecta pintura especial para darle un acabado liso y brillante en toda la superficie.",
              "Tiene un relleno de cartón tipo panal de abeja, igual que las puertas de interior económicas.",
              "Es una puerta de madera maciza recubierta con una capa de chapa fina de acero inoxidable."
            ],
            "correcta": 0,
            "explica": "La espuma de poliuretano inyectada le otorga aislación térmica y acústica, además de rigidez."
          },
          {
            "q": "¿Qué marcas de puertas trabajamos?",
            "opciones": [
              "Oblak, El Ítalo y Herfasa",
              "Tromen, Rotoplas y Ferrum",
              "Weber, Atrim y Roca",
              "Ferrum, Roca y Tromen"
            ],
            "correcta": 0,
            "explica": "Trabajamos Oblak, El Ítalo y Herfasa."
          },
          {
            "q": "¿Qué significa que una puerta venga 'lista para usar' (ej. Oblak Practika Foil)?",
            "opciones": [
              "Viene terminada de fábrica, sin necesidad de pintura.",
              "Incluye marco y contramarco de regalo.",
              "Tiene un acabado de madera natural barnizado.",
              "Requiere lijado y pintura antes de instalar."
            ],
            "correcta": 0,
            "explica": "Ahorra el costo del pintor; ya viene terminada de fábrica, solo hay que amurarla."
          }
        ]
      },
      {
        "nivel": 2,
        "nombre": "Intermedio",
        "objetivo": "Materiales y opciones",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "¿Qué es el 'marco' y qué es la 'hoja' de una puerta?",
            "opciones": [
              "Marco: estructura amurada a la pared. Hoja: parte móvil que abre y cierra.",
              "Marco: manija de apertura. Hoja: vidrio decorativo.",
              "Marco: bisagra superior. Hoja: cerradura de seguridad.",
              "Marco: moldura interior. Hoja: burlete de goma."
            ],
            "correcta": 0,
            "explica": "El marco es el perímetro fijo a la pared; la hoja es la puerta que se mueve."
          },
          {
            "q": "¿De qué pueden ser los marcos de las puertas placa?",
            "opciones": [
              "Marco de chapa o de madera",
              "Marco de aluminio o de PVC",
              "Marco de hierro o de fibra de vidrio",
              "Marco de acero inoxidable o de MDF"
            ],
            "correcta": 0,
            "explica": "Las puertas placa se fabrican con marcos de chapa plegada o de madera, según el modelo y la terminación deseada."
          },
          {
            "q": "¿Qué cuidado requiere una puerta Oblak Nativa de MDF para pintar?",
            "opciones": [
              "Requiere pintura de terminación para protegerla",
              "No necesita pintura, queda lista",
              "Se sella solo con agua y jabón",
              "Se barniza con barniz marino"
            ],
            "correcta": 0,
            "explica": "Las puertas para pintar necesitan la mano final para resistir el uso y la humedad."
          },
          {
            "q": "¿Qué se debe definir al comprar una puerta exterior además de la medida?",
            "opciones": [
              "El 'mano' de apertura (derecha o izquierda, hacia adentro) y el ancho del tabique (10 o 15 cm) para el marco",
              "El color de la cerradura por dentro",
              "Si lleva cortina",
              "Nada más"
            ],
            "correcta": 0,
            "explica": "Dirección de apertura y tabique del marco (10 cm para pared de ladrillo hueco del 8, 15 cm para el del 12)."
          },
          {
            "q": "¿Qué ventaja adicional suma una puerta de exterior con 'barral' o 'aplique de acero'?",
            "opciones": [
              "Aporta estética moderna, ideal para frentes contemporáneos.",
              "Aumenta la resistencia al fuego y a impactos.",
              "Reduce el peso total de la hoja de la puerta.",
              "Permite la instalación de cerradura eléctrica."
            ],
            "correcta": 0,
            "explica": "Los apliques de acero o barrales largos (manijones) dan un toque de diseño actual a la puerta de entrada, mejorando la imagen de la vivienda."
          }
        ]
      },
      {
        "nivel": 3,
        "nombre": "Experto",
        "objetivo": "Cálculo y complementos",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "El cliente dice: 'Quiero cambiar las puertas interiores, pero no quiero que el albañil rompa la pared, el marco viejo está bien'. ¿Qué le vendés?",
            "opciones": [
              "Una puerta de recambio, que se instala sobre el marco viejo sin romper la pared.",
              "Una puerta de recambio estándar que se adapta al marco existente, pero requiere ajustes menores en la pared para asegurar un buen sellado.",
              "Una puerta placa con bisagras regulables que se fijan al marco actual, aunque es necesario retirar la pintura vieja y nivelar la superficie.",
              "Una puerta de exterior con marco de acero que se coloca sobre el marco original, pero exige reforzar la estructura con tirafondos y burletes."
            ],
            "correcta": 0,
            "explica": "Existen sistemas de recambio que cubren el marco viejo con contramarcos nuevos, instalados en seco."
          },
          {
            "q": "¿Qué elemento es vital NO olvidar cuando la puerta viene con la base (marco) sin manija de fábrica?",
            "opciones": [
              "Los herrajes: manija interior y exterior",
              "La pintura sintética obligatoria para cubrir la madera expuesta",
              "Un candado de seguridad adicional para reforzar la cerradura",
              "Aceite lubricante 40W para asegurar el movimiento de las bisagras"
            ],
            "correcta": 0,
            "explica": "Casi ninguna puerta incluye la manija; es la venta cruzada número 1 obligatoria."
          },
          {
            "q": "El cliente compró puerta inyectada negra y la instaló a pleno sol en el frente oeste. Se queja de que no cierra bien. ¿Por qué?",
            "opciones": [
              "La chapa negra absorbe calor y se deforma con el sol directo.",
              "La puerta se encoge por el calor y desajusta la cerradura.",
              "La bisagra se oxida y traba el cierre de la hoja.",
              "La cerradura es de plástico y se ablanda con el calor."
            ],
            "correcta": 0,
            "explica": "El color negro absorbe la radiación solar, dilatando el acero y el poliuretano, lo que deforma la puerta y afecta el cierre."
          },
          {
            "q": "¿Cuál es el 'combo de seguridad' ideal para una puerta exterior?",
            "opciones": [
              "Puerta chapa 18 inyectada + cerradura multipunto + barral",
              "Puerta placa con cerradura simple y picaporte",
              "Puerta de madera maciza con cerradura de sobreponer",
              "Puerta de aluminio con cerradura de gancho"
            ],
            "correcta": 0,
            "explica": "La combinación de una puerta de chapa inyectada con cerradura multipunto y barral ofrece la máxima seguridad y resistencia."
          },
          {
            "q": "El albañil va a amurar el marco de chapa de la puerta placa. ¿Qué mezcla debe usar para evitar óxido futuro a largo plazo?",
            "opciones": [
              "Cemento y arena",
              "Yeso puro",
              "Cal común",
              "Pegamento C1"
            ],
            "correcta": 0,
            "explica": "La cal y el yeso corroen la chapa; el concreto es seguro."
          }
        ]
      },
      {
        "nivel": 4,
        "nombre": "Manejo de Objeciones y Casos Prácticos",
        "objetivo": "Atención al cliente y rebatimiento de objeciones comerciales",
        "aprobar": 90,
        "preguntas": [
          {
            "q": "El cliente objeta: \"Puertas (Interior y Exterior) me parece un gasto elevado para una terminación.\"",
            "opciones": [
              "Revaloriza la propiedad y requiere bajo mantenimiento.",
              "Es un gasto que no aporta valor a la propiedad y complica la reventa.",
              "Solo se justifica en casas de alta gama con presupuesto ilimitado.",
              "Genera más problemas de mantenimiento a futuro y reduce la durabilidad."
            ],
            "correcta": 0,
            "explica": "Las terminaciones de calidad aumentan el valor del inmueble y evitan refacciones periódicas."
          },
          {
            "q": "Cliente indeciso: \"¿Qué insumo de colocación debo llevar sí o sí para Puertas (Interior y Exterior)?\"",
            "opciones": [
              "Adhesivo o sellador recomendado por el fabricante.",
              "Cualquier pegamento de uso general.",
              "No hace falta ningún insumo de pegado.",
              "Solo agua para humedecer la superficie."
            ],
            "correcta": 0,
            "explica": "El adhesivo o sellador específico asegura la fijación y el acabado correcto, evitando desprendimientos o manchas."
          }
        ]
      }
    ]
  },
  {
    "id": "ventanas",
    "producto": "Ventanas de Aluminio",
    "rubro": "Terminaciones",
    "icon": "fa-solid fa-window-maximize",
    "color": "#8b5cf6",
    "descripcion": "Luz y aislamiento (Herrero/Módena). Novo.",
    "niveles": [
      {
        "nivel": 1,
        "nombre": "Básico",
        "objetivo": "Líneas y materiales",
        "aprobar": 70,
        "preguntas": [
          {
            "q": "¿Por qué el aluminio es excelente para ventanas?",
            "opciones": [
              "Es duradero, resistente y no requiere mantenimiento",
              "Es el material más liviano y fácil de cortar",
              "No conduce el calor ni el frío en ningún caso",
              "Es el metal más económico que existe en el mercado"
            ],
            "correcta": 0,
            "explica": "A diferencia del hierro o la madera, el aluminio no se oxida ni se deforma, por lo que dura años sin mantenimiento."
          },
          {
            "q": "¿Qué es la Línea Herrero en aberturas de aluminio?",
            "opciones": [
              "La opción básica y económica",
              "La línea de máxima seguridad",
              "La que imita hierro antiguo",
              "La línea de aluminio premium"
            ],
            "correcta": 0,
            "explica": "Herrero es la línea básica y económica, pensada para obras estándar."
          },
          {
            "q": "¿Qué es la Línea Módena?",
            "opciones": [
              "Línea de media-alta gama con mejor cierre y aislamiento.",
              "Línea de entrada de gama con perfiles básicos y cierre estándar, pensada para obras económicas.",
              "Línea estándar que incluye vidrio simple y no ofrece opciones de mosquitero ni reja de seguridad.",
              "Línea de aluminio con terminación rústica, poco hermética y sin opciones de DVH ni accesorios adicionales."
            ],
            "correcta": 0,
            "explica": "La línea Módena se destaca por su perfilería robusta, cierre hermético y excelente aislamiento, a diferencia de la línea Herrero que es básica."
          },
          {
            "q": "¿Qué significa DVH?",
            "opciones": [
              "Doble Vidriado Hermético: dos vidrios con una cámara de aire sellada en el medio. Aísla ruido y temperatura de forma excelente",
              "Doble Vidriado Horizontal: dos paneles de vidrio unidos por un marco de aluminio que se deslizan de costado para abrir la ventana",
              "Doble Vidrio Hermético: un solo vidrio grueso con tratamiento térmico que reduce el paso del frío y del calor sin necesidad de cámaras de aire",
              "Doble Ventana con Herrajes: sistema de dos hojas independientes que se abren hacia adentro y hacia afuera para mejorar la ventilación del ambiente"
            ],
            "correcta": 0,
            "explica": "El DVH (ej. 4mm-9mm-4mm) reduce drásticamente el frío, el calor y el ruido de la calle."
          },
          {
            "q": "¿Qué marcas trabajamos?",
            "opciones": [
              "Herfasa, El Ítalo, Novo",
              "Ternium, Weber, Atrim",
              "Siderar, Aluar, FV",
              "Herrero, Módena, DVH"
            ],
            "correcta": 0,
            "explica": "Distribuimos aberturas de marcas como Herfasa, El Ítalo y Novo."
          }
        ]
      },
      {
        "nivel": 2,
        "nombre": "Intermedio",
        "objetivo": "Aperturas y complementos",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "¿Cuál es el tipo de apertura más vendido y por qué?",
            "opciones": [
              "Corrediza, porque no ocupa espacio al abrir",
              "Abatible, porque permite ventilar sin lluvia",
              "Oscilobatiente, porque combina dos aperturas",
              "Paño fijo, porque es el más económico"
            ],
            "correcta": 0,
            "explica": "La corrediza es la más vendida porque sus hojas se deslizan sobre guías y no invaden el interior del ambiente."
          },
          {
            "q": "¿Qué es una ventana de abrir (abatible) y qué ventaja térmica tiene?",
            "opciones": [
              "Abre como una puerta y sella con gomas perimetrales.",
              "Se desliza hacia un lado sobre rieles y guías.",
              "Es fija, no permite abrirse ni ventilar el ambiente.",
              "Se pliega en varios paneles que se apilan a un costado."
            ],
            "correcta": 0,
            "explica": "La abatible cierra presionando juntas de goma perimetrales, logrando mayor hermeticidad que la corrediza, ideal para frío extremo."
          },
          {
            "q": "¿Qué es una ventana 'rajá' y una 'banderola'?",
            "opciones": [
              "Raja: alta y angosta, se abre de costado. Banderola: apaisada, se abre hacia afuera desde abajo.",
              "Raja: ancha y baja, se abre hacia adentro. Banderola: alta y angosta, se abre de costado.",
              "Raja: con vidrio repartido, fija. Banderola: con mosquitero, corrediza.",
              "Raja: de dos hojas, abatible. Banderola: de una hoja, oscilobatiente."
            ],
            "correcta": 0,
            "explica": "Son tipologías pequeñas de ventilación para espacios como baños, cocinas o pasillos."
          },
          {
            "q": "¿Se le puede poner mosquitero a cualquier ventana?",
            "opciones": [
              "Sí, en corredizas es directo; en abatibles u oscilobatientes requiere accesorio extra.",
              "No, el mosquitero solo se puede colocar en ventanas de madera o PVC, no en las de aluminio.",
              "Sí, pero únicamente si se instala en el momento de la fabricación de la ventana.",
              "Sí, aunque en líneas económicas como Herrero el mosquitero no queda bien ajustado."
            ],
            "correcta": 0,
            "explica": "El mosquitero corredizo se integra a la guía de la ventana corrediza, mientras que en aperturas abatibles u oscilobatientes se necesita un sistema adicional."
          },
          {
            "q": "¿Se amura la ventana de aluminio directamente a la pared con material fresco?",
            "opciones": [
              "Se puede, pero lo ideal es usar un premarco y fijar la ventana con tornillos al final",
              "Sí, se amura directo con cemento fresco y se ajusta con cuñas",
              "No, se cuelga con grampas metálicas a la pared terminada",
              "Solo se atornilla a la pared sin ningún tipo de marco"
            ],
            "correcta": 0,
            "explica": "El premarco protege la abertura durante la obra y permite un ajuste limpio y nivelado de la ventana."
          }
        ]
      },
      {
        "nivel": 3,
        "nombre": "Experto",
        "objetivo": "Soluciones de aislamiento",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "Un cliente hace una casa al frente de una avenida muy ruidosa. ¿Qué ventana específica le recomendás?",
            "opciones": [
              "Línea Módena con apertura de ABRIR (batiente u oscilobatiente) y vidrio DVH (ej. 3+3 laminado - cámara - 4mm). Sella el sonido casi al 100%",
              "Corrediza Línea Herrero vidrio simple de 3mm",
              "Paño fijo de policarbonato",
              "Dejanos agujero sin ventana"
            ],
            "correcta": 0,
            "explica": "Aislamiento acústico = Perfil grueso (Módena) + Cierre a presión (Batiente) + DVH asimétrico (cortar frecuencias)."
          },
          {
            "q": "¿Cuál es la venta cruzada ideal al despachar una ventana de aluminio para obra húmeda?",
            "opciones": [
              "Premarco, mosquitero, reja y sellador",
              "Pintura asfáltica, membrana y cinta",
              "Burlete, burlete y cinta de espuma",
              "Marco de madera, barniz y masilla"
            ],
            "correcta": 0,
            "explica": "El sellador y el premarco aseguran la estanqueidad y fijación correcta en obra húmeda."
          },
          {
            "q": "¿La Línea Herrero soporta bien un vidrio DVH?",
            "opciones": [
              "No soporta el grosor y peso de un DVH.",
              "Sí, soporta cualquier tipo de DVH sin problema.",
              "Solo si se refuerza con perfiles adicionales.",
              "Sí, pero solo en medidas chicas, hasta 100x100."
            ],
            "correcta": 0,
            "explica": "Los perfiles Herrero son finos y no están preparados para el peso y grosor del DVH, por eso se recomienda Módena."
          },
          {
            "q": "¿Por qué el aluminio blanco domina el mercado residencial estándar?",
            "opciones": [
              "Es pintura horneada, no se decolora y combina con todo",
              "Porque no existe aluminio negro ni anodizado",
              "Porque es más fácil pintarlo después de instalado",
              "Porque el blanco absorbe menos calor que otros colores"
            ],
            "correcta": 0,
            "explica": "El aluminio prepintado blanco es el commodity: masivo, versátil y de bajo costo comparativo."
          },
          {
            "q": "¿Qué precaución hay que tener al vender aberturas muy grandes (ej. puerta ventana corrediza de 2x2m)?",
            "opciones": [
              "El peso del vidrio (si es 4mm o más) es alto, exigir línea Módena con rodamientos (ruedas) reforzados para que no se trabe al abrir",
              "Que no se caiga del estante del local",
              "Que el sol no la derrita",
              "Que las moscas no entren solas"
            ],
            "correcta": 0,
            "explica": "El peso estructural en 4m2 de vidrio es enorme (aprox. 40-50 kg). Herrero se deforma y rompe las ruedas."
          }
        ]
      },
      {
        "nivel": 4,
        "nombre": "Manejo de Objeciones y Casos Prácticos",
        "objetivo": "Atención al cliente y rebatimiento de objeciones comerciales",
        "aprobar": 90,
        "preguntas": [
          {
            "q": "Objeción: \"¿Realmente vale la pena poner ventanas de aluminio con DVH (Doble Vidrio Hermético)?\"",
            "opciones": [
              "Sí, reduce hasta un 50% las pérdidas de temperatura y aísla ruidos del exterior.",
              "No, el vidrio doble sólo sirve si hace -20°C.",
              "Es lo mismo que poner film transparente en la ventana.",
              "Hace que la habitación esté siempre a oscuras."
            ],
            "correcta": 0,
            "explica": "El DVH aísla térmica y acústicamente, generando confort y ahorro en facturas de servicios."
          },
          {
            "q": "Cliente indeciso: \"¿Qué insumo de colocación debo llevar sí o sí para Ventanas de Aluminio?\"",
            "opciones": [
              "Adhesivo o sellador recomendado por el fabricante.",
              "Cualquier pegamento multiuso es suficiente.",
              "No hace falta ningún insumo de pegado.",
              "Solo agua y un trapo para limpiar."
            ],
            "correcta": 0,
            "explica": "Sin el adhesivo o sellador adecuado, la ventana puede desprenderse o quedar mal terminada."
          }
        ]
      }
    ]
  },
  {
    "id": "accesorios-bano",
    "producto": "Accesorios Baño / Cocina",
    "rubro": "Terminaciones",
    "icon": "fa-solid fa-pump-soap",
    "color": "#8b5cf6",
    "descripcion": "Detalles que suman funcionalidad y estilo.",
    "niveles": [
      {
        "nivel": 1,
        "nombre": "Básico",
        "objetivo": "Accesorios comunes",
        "aprobar": 70,
        "preguntas": [
          {
            "q": "¿Qué incluye un 'kit de accesorios' para baño?",
            "opciones": [
              "Toallero aro, portarrollos, jabonera, percha y a veces barra o vaso",
              "Espejo, inodoro y lavatorio con su grifería",
              "Solo toallas y jabones perfumados de regalo",
              "Ducha y canilla de bidet para el inodoro"
            ],
            "correcta": 0,
            "explica": "El kit incluye accesorios de pared o apoyo para higiene diaria, no sanitarios ni grifería."
          },
          {
            "q": "¿Cómo se fijan los accesorios de baño modernos?",
            "opciones": [
              "Con adhesivos de alta adherencia o fijación atornillada",
              "Clavados con martillo y puntas comunes",
              "Soldados a la estructura de hierro",
              "Atados con alambre a las cañerías"
            ],
            "correcta": 0,
            "explica": "Los adhesivos 3M permiten pegar sin perforar cerámicos, y la fijación atornillada es la alternativa tradicional."
          },
          {
            "q": "¿Qué es un botiquín?",
            "opciones": [
              "Un mueble de pared con o sin espejo para guardar artículos de higiene y remedios.",
              "Un elemento de cocina que se instala bajo la mesada para guardar utensilios y vajilla, con puertas corredizas.",
              "Un artefacto de iluminación que se coloca sobre el lavatorio para resaltar el espejo y dar calidez al ambiente.",
              "Un mueble de pared con o sin espejo para guardar artículos de higiene y remedios, pero de uso exclusivo en cocinas."
            ],
            "correcta": 0,
            "explica": "El botiquín es un mueble de baño que se fija a la pared y sirve para ordenar elementos de higiene personal y medicamentos, con o sin espejo."
          },
          {
            "q": "¿Qué es un secatoallas (toallero radiador)?",
            "opciones": [
              "Accesorio de pared que calienta y seca toallas",
              "Ventilador de techo que refresca el baño",
              "Secador de manos eléctrico de pared",
              "Toallero de pie con luz integrada"
            ],
            "correcta": 0,
            "explica": "Calienta el ambiente y elimina la humedad de las toallas."
          },
          {
            "q": "¿Qué marcas destacan en accesorios cromados?",
            "opciones": [
              "FV y Vasser",
              "Atrim y Ternium",
              "Cerámica Marcos Paz",
              "Ferrum y Ona"
            ],
            "correcta": 0,
            "explica": "FV y Vasser ofrecen accesorios que combinan con sus líneas de grifería."
          }
        ]
      },
      {
        "nivel": 2,
        "nombre": "Intermedio",
        "objetivo": "Mamparas y Espejos",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "¿Qué ventaja tiene una mampara de vidrio sobre la cortina plástica?",
            "opciones": [
              "Es más higiénica, frena el agua 100%, no se pega al cuerpo, es estéticamente moderna y duradera",
              "Es más barata que la cortina",
              "Se puede doblar en la lavadora",
              "Se cambia todos los meses"
            ],
            "correcta": 0,
            "explica": "La mampara (fija o corrediza) define la elegancia del baño y elimina el moho de las cortinas."
          },
          {
            "q": "¿Qué vidrio debe usar obligatoriamente una mampara por seguridad?",
            "opciones": [
              "Vidrio templado de 8 o 10 mm",
              "Vidrio común de 3 mm",
              "Vidrio laminado de 6 mm",
              "Acrílico transparente de 4 mm"
            ],
            "correcta": 0,
            "explica": "El vidrio templado es obligatorio porque al romperse se fragmenta en trozos pequeños no cortantes, cumpliendo la norma de seguridad."
          },
          {
            "q": "¿Qué alternativas más económicas al vidrio templado se venden?",
            "opciones": [
              "Mamparas de acrílico con perfiles de aluminio",
              "Mamparas de vidrio común sin templar",
              "Mamparas de policarbonato transparente",
              "Mamparas de plástico rígido reforzado"
            ],
            "correcta": 0,
            "explica": "El acrílico es más económico que el vidrio templado y se comercializa con perfiles de aluminio."
          },
          {
            "q": "¿Cómo se instala un espejo sin marco en el revestimiento del baño?",
            "opciones": [
              "Con silicona neutra o fijaciones metálicas.",
              "Con silicona acética o clavos comunes.",
              "Con cemento de contacto y cinta doble faz.",
              "Con pegamento universal y tornillos largos."
            ],
            "correcta": 0,
            "explica": "La silicona neutra no daña el espejado trasero, a diferencia de la acética."
          },
          {
            "q": "¿Qué es un receptáculo de ducha?",
            "opciones": [
              "Una base lista para instalar, con caída hacia la sopapa.",
              "Un elemento de cerámica que se coloca en la pared para sostener la ducha manual.",
              "Un accesorio que se instala en el techo para sostener el cabezal de la ducha y regular el agua.",
              "Un componente que se adhiere al piso para evitar resbalones y mejorar la seguridad en la ducha."
            ],
            "correcta": 0,
            "explica": "Es una base prefabricada que se instala en lugar del piso tradicional, facilitando la instalación y asegurando la impermeabilidad."
          }
        ]
      },
      {
        "nivel": 3,
        "nombre": "Experto",
        "objetivo": "Venta Consultiva (Ticket adicional)",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "El cliente llevó una grifería FV Libby (cuadrada, moderna). ¿Qué accesorio le recomendás obligatoriamente para cerrar la venta?",
            "opciones": [
              "Kit de accesorios FV Libby o Vasser de líneas rectas.",
              "Un set de accesorios redondos de plástico de oferta, con jabonera y portarrollo.",
              "Una jabonera de vidrio con forma de hoja, ideal para baños rústicos.",
              "Un toallero de líneas curvas de otro estilo, que combine con la grifería."
            ],
            "correcta": 0,
            "explica": "El accesorio debe mantener la coherencia de diseño con la grifería cuadrada."
          },
          {
            "q": "Un cliente compra un espejo con luz LED trasera. ¿Qué precaución de obra hay que tener?",
            "opciones": [
              "Dejar una caja eléctrica oculta detrás del espejo",
              "No requiere ninguna instalación especial",
              "Colocar un enchufe en el techo cercano",
              "Asegurar que reciba luz solar directa"
            ],
            "correcta": 0,
            "explica": "El espejo con luz LED necesita conexión eléctrica, por eso se debe prever una caja en la pared."
          },
          {
            "q": "¿Qué accesorio para baño se está volviendo norma en remodelaciones para adultos mayores?",
            "opciones": [
              "Barras de sujeción / seguridad (barrales de acero) dentro de la ducha y al lado del inodoro",
              "Mamparas de vidrio finito resbaladizo",
              "Música por bluetooth",
              "Jacuzzi profundo"
            ],
            "correcta": 0,
            "explica": "Accesibilidad: los barrales amurados previenen el 90% de los accidentes de resbalones en el baño."
          },
          {
            "q": "¿Cuál es el 'peor error' al instalar un receptáculo acrílico de ducha?",
            "opciones": [
              "Dejar la base hueca sin asentar",
              "Pegarlo a la pared con silicona",
              "Instalar la sopapa al revés",
              "Usar un desagüe de menor diámetro"
            ],
            "correcta": 0,
            "explica": "La base debe apoyar en una cama de mortero para que el peso no flexione el acrílico."
          },
          {
            "q": "El cliente quiere comprar mampara, grifería, inodoro... todo para hoy. Pero el baño aún está en revoque grueso. ¿Por qué le decís que espere con la mampara?",
            "opciones": [
              "Las mamparas se fabrican a medida cuando los cerámicos están terminados.",
              "Las mamparas requieren un punto eléctrico cercano para su instalación.",
              "Las mamparas se instalan antes de los revoques para fijar los perfiles.",
              "Las mamparas necesitan que el piso esté nivelado con pendiente al desagüe."
            ],
            "correcta": 0,
            "explica": "La mampara se mide y fabrica al milímetro sobre la cerámica terminada; un centímetro de diferencia por el revoque o el pegamento arruina el ajuste."
          }
        ]
      },
      {
        "nivel": 4,
        "nombre": "Manejo de Objeciones y Casos Prácticos",
        "objetivo": "Atención al cliente y rebatimiento de objeciones comerciales",
        "aprobar": 90,
        "preguntas": [
          {
            "q": "El cliente objeta: \"Accesorios Baño / Cocina me parece un gasto elevado para una terminación.\"",
            "opciones": [
              "Revaloriza la propiedad, aporta estética y requiere bajo mantenimiento.",
              "Es un gasto que no se recupera en la venta.",
              "Solo sirve para ambientes de lujo.",
              "Genera problemas de humedad a futuro."
            ],
            "correcta": 0,
            "explica": "Las terminaciones de calidad aumentan el valor del inmueble y evitan refacciones periódicas."
          },
          {
            "q": "Cliente indeciso: \"¿Qué insumo de colocación debo llevar sí o sí para Accesorios Baño / Cocina?\"",
            "opciones": [
              "El adhesivo o sellador recomendado por el fabricante.",
              "Un pegamento universal de uso múltiple.",
              "La silicona común para sanitarios.",
              "La masilla plástica para ventanas."
            ],
            "correcta": 0,
            "explica": "El adhesivo o sellador específico garantiza la adhesión y el acabado, evitando desprendimientos o manchas."
          }
        ]
      }
    ]
  },
  {
    "id": "calefaccion",
    "producto": "Calefacción (Tromen)",
    "rubro": "Terminaciones",
    "icon": "fa-solid fa-fire",
    "color": "#8b5cf6",
    "descripcion": "Eficiencia y diseño con salamandras y hornos a leña.",
    "niveles": [
      {
        "nivel": 1,
        "nombre": "Básico",
        "objetivo": "Qué es Tromen",
        "aprobar": 70,
        "preguntas": [
          {
            "q": "¿Qué tecnología destaca a las estufas Tromen frente a un hogar tradicional?",
            "opciones": [
              "Sistema de doble combustión: más calor con menos leña y menos humo.",
              "Quemador de gas con encendido automático integrado y termostato regulable.",
              "Resistencia eléctrica de bajo consumo oculta en la cámara de combustión.",
              "Tecnología de pellets con ventilador forzado y control digital de temperatura."
            ],
            "correcta": 0,
            "explica": "La doble combustión quema los gases de la leña, aprovechando más energía y reduciendo emisiones."
          },
          {
            "q": "¿Qué tipo de equipos ofrece Tromen?",
            "opciones": [
              "Salamandras, hornos, parrillas y cocinas a leña",
              "Estufas eléctricas y paneles radiantes",
              "Calefactores a gas y termotanques",
              "Braseros y chimeneas de bioetanol"
            ],
            "correcta": 0,
            "explica": "Tromen se especializa en equipos de combustión a leña para calefacción y cocina."
          },
          {
            "q": "¿El cliente va a tener olor a humo en el living con una Tromen?",
            "opciones": [
              "No, son herméticos y el humo sale por la chimenea si está bien instalada.",
              "Sí, siempre deja un leve olor a humo en el ambiente.",
              "Depende del modelo, algunos tiran un poco de humo.",
              "Solo si no se usa leña seca, ahí puede haber olor."
            ],
            "correcta": 0,
            "explica": "Los equipos Tromen tienen caja de fuego cerrada hermética, por lo que el humo se expulsa por la chimenea sin filtrarse al ambiente."
          },
          {
            "q": "¿Cómo se elige el tamaño de la estufa Tromen?",
            "opciones": [
              "Por la capacidad de calefacción en metros cuadrados (o Kcal/h), según el tamaño de la casa del cliente",
              "Por el color que más le guste",
              "Por la marca",
              "No importa, todas calientan igual"
            ],
            "correcta": 0,
            "explica": "Vienen en modelos desde 5000 hasta 20000 kcal/h (cubriendo desde 60 m² hasta 150+ m²)."
          },
          {
            "q": "¿Qué materiales principales componen el interior del fogón de una Tromen?",
            "opciones": [
              "Ladrillos refractarios en base y laterales",
              "Mezcla de cemento y arena común en todas las paredes internas",
              "Revestimiento de cerámica esmaltada en base y laterales",
              "Planchas de acero inoxidable pulido en todo el interior"
            ],
            "correcta": 0,
            "explica": "La caja de fuego lleva refractarios que acumulan inercia térmica y prolongan la entrega de calor."
          }
        ]
      },
      {
        "nivel": 2,
        "nombre": "Intermedio",
        "objetivo": "Instalación y cañerías",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "¿Qué requiere OBLIGATORIAMENTE toda estufa a leña para funcionar?",
            "opciones": [
              "Un conducto de salida de humos al exterior",
              "Un enchufe de 220V para el encendido",
              "Un ventilador que impulse el aire caliente",
              "Una conexión a gas natural para el fuego"
            ],
            "correcta": 0,
            "explica": "El tiro natural requiere que el humo salga por un conducto al exterior."
          },
          {
            "q": "¿Qué es la salida a los 'cuatro vientos'?",
            "opciones": [
              "La chimenea debe superar en altura al punto más alto del techo u obstáculos cercanos (unos 60-100cm), para que el viento de cualquier lado no revoque el humo hacia adentro",
              "La salida de humos debe estar orientada hacia los cuatro puntos cardinales para que el viento circule de manera pareja y no se acumulen gases en el interior del ambiente.",
              "Se refiere a instalar cuatro rejillas de ventilación alrededor del caño de salida para que el humo se disperse en todas las direcciones y no genere molestias.",
              "Es un requisito de seguridad que indica que la chimenea debe tener al menos cuatro metros de altura para evitar que el humo se filtre por las ventanas o puertas."
            ],
            "correcta": 0,
            "explica": "Evita que las turbulencias o rebotes del viento 'tapen' la chimenea ahogando el tiraje."
          },
          {
            "q": "¿Cuál es el diámetro estándar de caño para las estufas medianas Tromen?",
            "opciones": [
              "6 pulgadas (15 cm). Los modelos más grandes saltan a 8 o 10 pulgadas",
              "3 centímetros",
              "1 pulgada como el agua",
              "1 metro de ancho"
            ],
            "correcta": 0,
            "explica": "El caño enlozado de 6' (150 mm) es el más comercializado en estufas residenciales."
          },
          {
            "q": "¿Qué es el 'encamisado' en la instalación del caño?",
            "opciones": [
              "Cuando el caño sale al exterior (frío), se lo envuelve con un caño más grande (ej. 10 pulgadas) y lana de vidrio en el medio para aislarlo",
              "Una camisa de ropa para tapar caños feos",
              "Pintar el caño de dos colores",
              "Ponerle cemento directo encima"
            ],
            "correcta": 0,
            "explica": "Aislación térmica exterior. Si el caño se enfría de golpe por el clima, pierde 'tiro' (fuerza de ascenso de gases) y junta condensación/creosota."
          },
          {
            "q": "¿Es mejor salir derecho por el techo o con dos codos por la pared?",
            "opciones": [
              "Salir recto por el techo da mejor tiraje.",
              "Salir por la pared con dos codos es más eficiente.",
              "Salir por la pared con un codo a 90 grados no afecta el tiro.",
              "Salir por el techo con un codo a 45 grados mejora el tiro."
            ],
            "correcta": 0,
            "explica": "El tiro óptimo es vertical; los codos frenan los gases y acumulan hollín."
          }
        ]
      },
      {
        "nivel": 3,
        "nombre": "Experto",
        "objetivo": "Venta complementaria y consejos",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "El cliente compra la estufa. ¿Qué le tenés que vender SÍ o SÍ para que se la pueda llevar funcionando (venta cruzada obligada)?",
            "opciones": [
              "Kit de instalación (caños, sombrerete, sellador)",
              "Leña seca para el primer encendido",
              "Pintura refractaria para el exterior",
              "Ladrillos refractarios para la base"
            ],
            "correcta": 0,
            "explica": "Sin el kit de instalación, la estufa no puede conectarse a la salida de humos y no funcionaría."
          },
          {
            "q": "El cliente instaló por techo de madera. Pregunta cómo proteger la madera del calor del caño. ¿Qué le explicás?",
            "opciones": [
              "Usar reducción y caño encamisado con aislante.",
              "Humectar la madera todas las noches.",
              "La madera tratada no se quema.",
              "Envolver el caño con papel aluminio."
            ],
            "correcta": 0,
            "explica": "En cruces con materiales inflamables, el caño debe ir encamisado con aislante para prevenir incendios."
          },
          {
            "q": "¿Qué le aconsejás sobre la limpieza anual del equipo?",
            "opciones": [
              "Que desholline los caños una vez al año para evitar fuego de chimenea y recuperar el tiraje.",
              "Que limpie los caños con agua y detergente cada seis meses para evitar la acumulación de hollín y mantener el tiro adecuado.",
              "Que revise el tiraje solo cuando note poco calor en el ambiente, ya que eso indica que la salida de humos está obstruida y necesita limpieza.",
              "Que queme leña de eucalipto para que el hollín se desprenda solo, sin necesidad de deshollinar manualmente los conductos."
            ],
            "correcta": 0,
            "explica": "La limpieza anual del conducto es esencial para prevenir incendios y mantener el tiraje óptimo."
          },
          {
            "q": "Un cliente se queja de que el vidrio de la Tromen se le ensucia negro al rato de prenderla. ¿Qué está haciendo mal?",
            "opciones": [
              "Está usando leña húmeda o verde. La leña debe estar SECA (menos de 20% humedad) para que el vidrio no se ahúme y la estufa caliente bien",
              "Es culpa del sol exterior",
              "Le echó agua al vidrio",
              "Ese es el color normal, no pasa nada"
            ],
            "correcta": 0,
            "explica": "Leña húmeda = temperatura baja = mala combustión = hollín = vidrio negro. El 'lavado por aire' del vidrio solo funciona con fuego fuerte y leña seca."
          },
          {
            "q": "Un cliente duda entre comprar Tromen o prender un caloventor eléctrico. ¿Cuál es el argumento económico de largo plazo?",
            "opciones": [
              "La leña en doble combustión es más barata que la electricidad y no se corta.",
              "El caloventor eléctrico es más eficiente y su costo de uso resulta menor que el de la leña en el tiempo.",
              "La leña requiere un mantenimiento constante que encarece su uso frente a la electricidad.",
              "La estufa a leña solo es apta para espacios reducidos y su calor no alcanza a cubrir toda la casa."
            ],
            "correcta": 0,
            "explica": "El costo de operar con leña es menor que el de la electricidad, y la doble combustión maximiza el calor, haciendo que la inversión se amortice."
          }
        ]
      },
      {
        "nivel": 4,
        "nombre": "Manejo de Objeciones y Casos Prácticos",
        "objetivo": "Atención al cliente y rebatimiento de objeciones comerciales",
        "aprobar": 90,
        "preguntas": [
          {
            "q": "Un cliente dudoso dice: \"La estufa Tromen sale más cara que un calefactor a gas o caloventor eléctrico.\"",
            "opciones": [
              "La doble combustión rinde hasta 80% más calor con menos leña, amortizando el costo en 1-2 temporadas.",
              "Es cara porque es de hierro pintado nomás.",
              "Gasta más que 10 caloventores juntos.",
              "No calienta nada, es solo adorno."
            ],
            "correcta": 0,
            "explica": "El alto rendimiento térmico y el bajo costo de la leña amortizan la inversión rápidamente."
          },
          {
            "q": "Cliente indeciso: \"¿Qué insumo de colocación debo llevar sí o sí para Calefacción (Tromen)?\"",
            "opciones": [
              "El insumo recomendado por el fabricante para la instalación.",
              "Un sellador genérico para uso múltiple que pueda servir en distintas superficies.",
              "El adhesivo de contacto común que se usa para pegar paneles y revestimientos.",
              "La cinta de teflón para roscas, que es un insumo habitual en instalaciones de gas."
            ],
            "correcta": 0,
            "explica": "El fabricante especifica el insumo adecuado para garantizar la adhesión y el acabado correcto."
          }
        ]
      }
    ]
  },
  {
    "id": "placas_uv",
    "producto": "Placas UV (Vigorita)",
    "rubro": "Terminaciones",
    "icon": "fa-solid fa-gem",
    "color": "#3b82f6",
    "descripcion": "Paneles rígidos decorativos de SPC con recubrimiento UV.",
    "niveles": [
      {
        "nivel": 1,
        "nombre": "Básico",
        "objetivo": "Características de Placas UV",
        "aprobar": 70,
        "preguntas": [
          {
            "q": "¿De qué material están fabricadas principalmente las Placas UV Vigorita?",
            "opciones": [
              "De SPC (Stone Plastic Composite), compuesto por polvo de piedra, resinas y aditivos",
              "De madera natural",
              "De cartón prensado",
              "De yeso tradicional"
            ],
            "correcta": 0,
            "explica": "Están fabricadas en SPC (Stone Plastic Composite) 100% rígido, con una capa superficial de protección UV."
          },
          {
            "q": "¿Para qué tipo de uso están diseñadas las Placas UV?",
            "opciones": [
              "Para revestir paredes interiores",
              "Para pisos exteriores de alto tránsito",
              "Para techos a la intemperie",
              "Para aislamiento acústico en cines"
            ],
            "correcta": 0,
            "explica": "Son paneles rígidos diseñados específicamente para revestimiento de paredes interiores."
          },
          {
            "q": "¿Qué beneficio principal ofrece la capa superficial UV?",
            "opciones": [
              "Protege la superficie y mantiene la estética",
              "Genera luz en la oscuridad",
              "Evita que se doble con el calor",
              "Reemplaza al pegamento"
            ],
            "correcta": 0,
            "explica": "El recubrimiento UV protege la superficie del desgaste cotidiano y preserva la apariencia del diseño."
          },
          {
            "q": "¿Cuáles son las dimensiones estándar de una Placa UV?",
            "opciones": [
              "1220 × 2440 mm, con un espesor de 3 mm",
              "500 x 500 mm, con espesor de 10 mm",
              "2000 x 3000 mm",
              "100 x 100 cm"
            ],
            "correcta": 0,
            "explica": "Las medidas estándar son 1220 × 2440 mm (aproximadamente 2,98 m² de rendimiento) y 3 mm de espesor."
          }
        ]
      },
      {
        "nivel": 2,
        "nombre": "Intermedio",
        "objetivo": "Beneficios e Instalación",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "¿Cómo es el comportamiento de las Placas UV frente a la humedad?",
            "opciones": [
              "Resisten muy bien la humedad y no la absorben",
              "Se dañan si están en contacto con agua",
              "Requieren barniz anual para protegerlas de la humedad",
              "Absorben la humedad del ambiente para secarlo"
            ],
            "correcta": 0,
            "explica": "Al ser de SPC, no absorben humedad y tienen propiedades antimoho y antipolillas."
          },
          {
            "q": "¿Cómo se realiza la instalación de las Placas UV?",
            "opciones": [
              "Con adhesivo y perfiles de terminación",
              "Clavadas a la pared con clavos de acero",
              "Con mezcla de cemento y arena",
              "Encajando a presión sin pegamento"
            ],
            "correcta": 0,
            "explica": "Se instalan rápidamente con adhesivos específicos y perfiles, sin necesidad de realizar obras húmedas."
          },
          {
            "q": "¿Cuál es el peso aproximado de una Placa UV entera?",
            "opciones": [
              "19 kg por unidad",
              "5 kg por unidad",
              "50 kg por unidad",
              "2 kg por unidad"
            ],
            "correcta": 0,
            "explica": "Las placas UV de 1220x2440mm pesan unos 19 kg, lo que las hace manejables para instalar."
          }
        ]
      },
      {
        "nivel": 4,
        "nombre": "Manejo de Objeciones y Casos Prácticos",
        "objetivo": "Atención al cliente y rebatimiento de objeciones comerciales",
        "aprobar": 90,
        "preguntas": [
          {
            "q": "El cliente objeta: \"Placas UV (Vigorita) me parece un gasto elevado para una terminación.\"",
            "opciones": [
              "Revaloriza la propiedad, aporta estética moderna y requiere poco mantenimiento.",
              "Le das la razón y le sugerís dejar el contrapiso a la vista.",
              "Le decís que es un lujo innecesario y que no conviene.",
              "Le sugerís pintar con cal común encima para abaratar."
            ],
            "correcta": 0,
            "explica": "Las terminaciones de calidad aumentan el valor del inmueble y evitan refacciones periódicas."
          },
          {
            "q": "Cliente indeciso: \"¿Qué insumo de colocación debo llevar sí o sí para Placas UV (Vigorita)?\"",
            "opciones": [
              "Adhesivo, sellador o perfilería recomendada por el fabricante.",
              "Se puede usar cualquier adhesivo multiuso que tengas en obra, sin importar la marca ni el tipo de superficie.",
              "No hace falta ningún insumo especial, con fijar las placas con clavos o tornillos alcanza para que queden bien sujetas.",
              "Al ser paneles rígidos, se colocan directamente sobre la pared con cinta de doble cara de alta resistencia y listo."
            ],
            "correcta": 0,
            "explica": "Sin el producto de colocación adecuado, la placa puede desprenderse o dañarse."
          }
        ]
      }
    ]
  },
  {
    "id": "revestimiento_wpc",
    "producto": "Revestimiento WPC Interior",
    "rubro": "Terminaciones",
    "icon": "fa-solid fa-tree",
    "color": "#d97706",
    "descripcion": "Paneles decorativos símil madera fabricados en WPC.",
    "niveles": [
      {
        "nivel": 1,
        "nombre": "Básico",
        "objetivo": "Conociendo el producto WPC",
        "aprobar": 70,
        "preguntas": [
          {
            "q": "¿Qué significa la sigla WPC?",
            "opciones": [
              "Compuesto de madera y polímeros",
              "Panel de pared de madera",
              "Cemento resistente al agua",
              "Madera pintada de color"
            ],
            "correcta": 0,
            "explica": "WPC significa Wood Plastic Composite, un material que combina fibras de madera con polímeros para mayor durabilidad."
          },
          {
            "q": "¿Qué estética brindan los revestimientos WPC Interior Vigorita?",
            "opciones": [
              "Terminación símil madera con estructura acanalada",
              "Acabado de mármol pulido brillante",
              "Superficie de espejo reflectante",
              "Textura de ladrillo visto rústico"
            ],
            "correcta": 0,
            "explica": "Los paneles WPC imitan la madera con un diseño acanalado, ofreciendo un look natural y moderno."
          },
          {
            "q": "¿Estos revestimientos necesitan ser pintados o barnizados?",
            "opciones": [
              "No, no se astillan ni requieren pintura",
              "Sí, hay que pintarlos una vez al año",
              "Sí, vienen crudos y el cliente debe barnizarlos",
              "Solo si se instalan en el baño"
            ],
            "correcta": 0,
            "explica": "Son de bajo mantenimiento. Vienen listos con su diseño y color definitivos, no requieren pintura ni tratamientos extras."
          }
        ]
      },
      {
        "nivel": 2,
        "nombre": "Intermedio",
        "objetivo": "Instalación y Beneficios",
        "aprobar": 80,
        "preguntas": [
          {
            "q": "¿El Revestimiento WPC es resistente a la humedad?",
            "opciones": [
              "Sí, es resistente a la humedad",
              "No, se hincha con el agua",
              "Solo si se le aplica un sellador",
              "Depende del clima de la zona"
            ],
            "correcta": 0,
            "explica": "Gracias a su composición polimérica, el WPC tiene excelente resistencia a la humedad y plagas."
          },
          {
            "q": "¿Cómo se recomienda realizar la limpieza cotidiana de estos revestimientos?",
            "opciones": [
              "Con un paño húmedo y productos neutros",
              "Con lavandina pura y cepillo de cerdas duras",
              "Con lija al agua y cera",
              "No se pueden limpiar con agua"
            ],
            "correcta": 0,
            "explica": "El mantenimiento es mínimo y la limpieza muy sencilla, usando apenas un paño húmedo y limpiador neutro."
          },
          {
            "q": "¿Qué ventaja principal ofrece su estructura a la hora del transporte?",
            "opciones": [
              "Son sumamente livianos, lo que facilita el transporte y la instalación.",
              "Vienen en rollos flexibles que se adaptan a cualquier superficie.",
              "Son pesados para evitar que se desplacen con el viento.",
              "Se pueden desarmar en varillas diminutas para ahorrar espacio."
            ],
            "correcta": 0,
            "explica": "Su diseño hueco los hace livianos, facilitando el manejo sin sacrificar durabilidad."
          }
        ]
      },
      {
        "nivel": 4,
        "nombre": "Manejo de Objeciones y Casos Prácticos",
        "objetivo": "Atención al cliente y rebatimiento de objeciones comerciales",
        "aprobar": 90,
        "preguntas": [
          {
            "q": "El cliente objeta: \"Revestimiento WPC Interior me parece un gasto elevado para una terminación.\"",
            "opciones": [
              "Revaloriza la propiedad, aporta estética y requiere bajo mantenimiento.",
              "Es un gasto que no se recupera al vender la propiedad.",
              "Solo sirve para ambientes húmedos como baños y cocinas.",
              "Su instalación es compleja y necesita mantenimiento mensual."
            ],
            "correcta": 0,
            "explica": "Las terminaciones de calidad aumentan el valor del inmueble y evitan refacciones periódicas."
          },
          {
            "q": "Cliente indeciso: \"¿Qué insumo de colocación debo llevar sí o sí para Revestimiento WPC Interior?\"",
            "opciones": [
              "Adhesivo, sellador o perfilería específica del fabricante.",
              "Un pegamento común para madera y un sellador de silicona genérico.",
              "Clavos y masilla plástica, sin necesidad de otros productos.",
              "Sellador de silicona genérico y clavos, sin perfilería específica."
            ],
            "correcta": 0,
            "explica": "El fabricante especifica los insumos compatibles para garantizar la adhesión y el acabado."
          }
        ]
      }
    ]
  }
];
