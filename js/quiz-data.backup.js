/* ============================================================
   ACADEMIA ROSSO — Banco de 56 Módulos (1 por producto)
   Fuente: Manual de Productos Rosso Materiales 2025
   Incluye Nivel 4: Manejo de Objeciones y Casos Prácticos
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
              "No requiere cal adicional: solo agrega arena y agua",
              "Es más difícil de usar",
              "Solo sirve para hormigón",
              "Necesita más ingredientes que la mezcla común"
            ],
            "correcta": 0,
            "explica": "El Maestro simplifica la preparación: solo agrega arena y agua, sin necesidad de cal."
          },
          {
            "q": "¿Para qué tipo de trabajos está diseñado el Maestro?",
            "opciones": [
              "Albañilería: pegar ladrillos, revoques, carpetas y contrapisos no estructurales",
              "Solo para hormigón armado de columnas",
              "Para pintar paredes",
              "Para impermeabilizar techos"
            ],
            "correcta": 0,
            "explica": "Está diseñado para morteros de asiento, revoques gruesos, carpetas y contrapisos no estructurales."
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
              "Es específico para albañilería, no para hormigón estructural",
              "Es exactamente igual al Portland",
              "Solo se usa para pintar",
              "Sirve para todo tipo de estructuras pesadas"
            ],
            "correcta": 0,
            "explica": "El Maestro es para albañilería (pegar ladrillos, revoques); el Portland es para hormigón estructural."
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
              "Tiene aditivos especializados que aseguran adherencia superior",
              "Solo por el color del empaque",
              "Porque tiene más arena",
              "Porque es más caro"
            ],
            "correcta": 0,
            "explica": "Gracias a sus aditivos especializados, asegura una mejor adherencia en todas las aplicaciones."
          },
          {
            "q": "¿Cuáles son los 5 usos principales del Maestro?",
            "opciones": [
              "Morteros asiento, revoques gruesos, carpetas, contrapisos y colocación de mosaicos",
              "Solo pegar ladrillos",
              "Solo revoques finos",
              "Solo contrapisos estructurales"
            ],
            "correcta": 0,
            "explica": "Los 5 usos son: morteros asiento, revoques gruesos, carpetas, contrapisos no estructurales y colocación de mosaicos."
          },
          {
            "q": "¿El Maestro se puede usar para hormigones estructurales?",
            "opciones": [
              "No, es para uso no estructural (albañilería)",
              "Sí, para columnas y vigas",
              "Sí, para losas de hormigón armado",
              "Sí, para cualquier estructura"
            ],
            "correcta": 0,
            "explica": "El Maestro NO se usa para hormigones estructurales; para eso se necesita Portland Normal (CPN)."
          },
          {
            "q": "¿Qué productos complementarios se venden con el Maestro?",
            "opciones": [
              "Ladrillos, bloques y herramientas de albañilería",
              "Solo pinturas",
              "Griferías",
              "Membranas asfálticas"
            ],
            "correcta": 0,
            "explica": "Se complementa con ladrillos, bloques y herramientas de albañilería (fratacho, baldes, etc.)."
          },
          {
            "q": "¿Cuál es el beneficio de rendimiento del Maestro?",
            "opciones": [
              "Rinde más por bolsa que la mezcla estándar, reduciendo costos",
              "Rinde menos que la mezcla tradicional",
              "Es igual en rendimiento",
              "No tiene diferencia de rendimiento"
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
              "Le explicás que con Maestro solo necesita arena y agua, ahorrando tiempo y logrando mejor adherencia",
              "Le decís que es lo mismo",
              "Le recomendás comprar más cal",
              "Le vendés pintura"
            ],
            "correcta": 0,
            "explica": "El argumento clave: Maestro simplifica la mezcla, mejora la adherencia y rinde más que la fórmula tradicional."
          },
          {
            "q": "¿Qué pasa si un cliente quiere usar Maestro para hacer columnas de hormigón?",
            "opciones": [
              "No se lo recomendás: para estructuras portantes necesita Portland Normal CPN",
              "Es perfecto para columnas",
              "Se puede usar si le agrega más agua",
              "No importa qué cemento use"
            ],
            "correcta": 0,
            "explica": "El Maestro NO es para uso estructural. Para columnas, vigas y losas hay que usar CPN."
          },
          {
            "q": "¿Cuál es la ventaja del Maestro en la facilidad de uso?",
            "opciones": [
              "Solo agrega arena y agua; no necesita calcular proporciones de cal",
              "Requiere más ingredientes que la mezcla tradicional",
              "Es difícil de preparar",
              "Necesita un técnico especializado"
            ],
            "correcta": 0,
            "explica": "La preparación es más simple: solo arena y agua. No requiere calcular ni agregar cal."
          },
          {
            "q": "¿Qué le dirías a un cliente que pregunta si el Maestro reemplaza a la cal?",
            "opciones": [
              "Sí, el Maestro ya incorpora aditivos que cumplen la función de la cal y más",
              "No, necesita cal también",
              "La cal es mejor en todo",
              "No se puede comparar"
            ],
            "correcta": 0,
            "explica": "El Maestro ya incorpora aditivos que reemplazan la función de la cal con ventajas adicionales."
          },
          {
            "q": "Un cliente necesita pegar bloques y hacer contrapiso. ¿Qué le vendés?",
            "opciones": [
              "Maestro ECOPlanet + arena + bloques + herramientas de albañilería",
              "Solo cal hidratada",
              "Portland para estructuras + mallas",
              "Pintura y enduido"
            ],
            "correcta": 0,
            "explica": "Para pegar bloques y contrapisos no estructurales: Maestro + arena, con la herramienta de albañilería."
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
              "Sí, Cemento de Albañilería cuenta con certificaciones de norma IRAM y calidad garantizada que evitan fisuras o fallas estructurales a futuro.",
              "No importa la marca, todos los productos de obra gruesa son exactamente iguales.",
              "Conviene comprar siempre lo más barato sin mirar la calidad.",
              "Le recomendás que no use ningún material y deje la pared como está."
            ],
            "correcta": 0,
            "explica": "La calidad estructural no se negocia: usar materiales normados previene rajaduras y reclamos graves."
          },
          {
            "q": "El cliente insiste: \"No quiero gastar en complementos para Cemento de Albañilería, ¿puedo obviarlos?\"",
            "opciones": [
              "No es recomendable. Los complementos (aditivos, fijaciones o dosificación correcta) garantizan el rendimiento y la durabilidad de Cemento de Albañilería.",
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
              "Solo cal, siempre",
              "Solo Maestro, la cal no sirve",
              "Ninguno, usar pintura directa"
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
              "Para prevenir el ingreso de humedad desde cimientos o paredes",
              "Para pintar paredes de colores",
              "Para pegar cerámicos",
              "Para soldar caños"
            ],
            "correcta": 0,
            "explica": "La Ceresita previene el ingreso de humedad en cimientos (cajón hidrófugo) y paredes (azotado impermeable)."
          },
          {
            "q": "¿Cuáles son las dos aplicaciones críticas de la Ceresita?",
            "opciones": [
              "Capa aisladora horizontal (cajón hidrófugo) y azotado impermeable",
              "Solo para pintar techos",
              "Para pegar ladrillos y hacer columnas",
              "Para instalar griferías"
            ],
            "correcta": 0,
            "explica": "Las dos aplicaciones clave son: cajón hidrófugo (base de muros) y azotado impermeable (antes del revoque)."
          },
          {
            "q": "¿Qué marca de hidrófugo trabaja Rosso?",
            "opciones": [
              "Ceresita (Weber / Saint-Gobain)",
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
              "Se diluye en el agua que se va a usar: 1 parte Ceresita por 10 de agua",
              "Se aplica directamente sobre la pared seca",
              "Se mezcla con cal",
              "Se usa como pintura"
            ],
            "correcta": 0,
            "explica": "Se diluye en el agua de la mezcla, generalmente 1:10 (Ceresita:agua)."
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
              "Sí, siempre con cal",
              "Solo con cal",
              "Es obligatorio agregar cal"
            ],
            "correcta": 0,
            "explica": "La Ceresita NO debe usarse con cal ni con cementos de albañilería tipo Maestro."
          },
          {
            "q": "¿Cómo debe estar la pared antes de aplicar el azotado impermeable?",
            "opciones": [
              "Limpia, ligeramente húmeda y protegida del sol fuerte",
              "Seca y al sol directo",
              "Mojada por completo",
              "Con pintura vieja encima"
            ],
            "correcta": 0,
            "explica": "La pared debe estar limpia, ligeramente húmeda y protegida del sol para evitar que se 'queme'."
          },
          {
            "q": "¿Se puede usar Ceresita en hormigones estructurales?",
            "opciones": [
              "No, no se utiliza en hormigones estructurales",
              "Sí, en todas las columnas",
              "Es obligatorio en vigas",
              "Solo en piletas"
            ],
            "correcta": 0,
            "explica": "La Ceresita NO se utiliza en hormigones estructurales."
          },
          {
            "q": "¿Qué es el 'cajón hidrófugo'?",
            "opciones": [
              "Una capa aisladora horizontal sobre la base de los muros contra humedad ascendente",
              "Un mueble para guardar herramientas",
              "Una caja de madera impermeable",
              "Un tipo de tanque de agua"
            ],
            "correcta": 0,
            "explica": "Es la capa aisladora horizontal que se coloca sobre la base de los muros para evitar la humedad ascendente."
          },
          {
            "q": "¿Qué productos complementarios se venden con la Ceresita?",
            "opciones": [
              "Cemento Portland, arena, baldes, fratachos y herramientas de albañilería",
              "Solo pintura",
              "Griferías y sanitarios",
              "Pisos vinílicos"
            ],
            "correcta": 0,
            "explica": "Se complementa con cemento Portland, arena, baldes, fratachos y herramientas de albañilería."
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
              "Ceresita para hacer un azotado impermeable antes del revoque, usando cemento Portland + arena + agua con Ceresita",
              "Pintura látex común",
              "Cal hidratada sola",
              "Cinta asfáltica en la pared"
            ],
            "correcta": 0,
            "explica": "Para humedad en paredes: azotado impermeable con Ceresita diluida en agua + cemento Portland + arena."
          },
          {
            "q": "¿Por qué NO se puede mezclar Ceresita con cal?",
            "opciones": [
              "Porque la cal interfiere con la barrera impermeable que forma la Ceresita en el mortero",
              "Porque cambia de color",
              "Porque huele mal",
              "No hay ninguna razón técnica"
            ],
            "correcta": 0,
            "explica": "La cal interfiere con la formación de la barrera impermeable interna del mortero con Ceresita."
          },
          {
            "q": "Un constructor está haciendo los cimientos de una casa. ¿Qué le recomendás para evitar humedad?",
            "opciones": [
              "Cajón hidrófugo con Ceresita sobre la base de los muros",
              "Pintar el cimiento con látex",
              "Poner membrana asfáltica en el piso del living",
              "No hacer nada, la humedad no sube"
            ],
            "correcta": 0,
            "explica": "El cajón hidrófugo con Ceresita es esencial sobre la base de los muros para frenar la humedad ascendente."
          },
          {
            "q": "¿Cuál es la proporción correcta de dilución de Ceresita en agua?",
            "opciones": [
              "1 parte de Ceresita por cada 10 partes de agua",
              "1:1 (mitad y mitad)",
              "Solo Ceresita sin agua",
              "10 partes de Ceresita por 1 de agua"
            ],
            "correcta": 0,
            "explica": "La proporción estándar es 1:10 (Ceresita:agua)."
          },
          {
            "q": "¿Cuándo ofrecés Ceresita junto con una venta de ladrillos?",
            "opciones": [
              "Cuando el cliente va a construir paredes nuevas: necesitará cajón hidrófugo en la base",
              "Nunca, no tienen relación",
              "Solo si compra más de 1000 ladrillos",
              "Solo si es para un techo"
            ],
            "correcta": 0,
            "explica": "Al construir paredes nuevas, el cajón hidrófugo es obligatorio. Es la oportunidad de vender Ceresita."
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
              "Sí, Aditivos Ceresita / Hidrófugos cuenta con certificaciones de norma IRAM y calidad garantizada que evitan fisuras o fallas estructurales a futuro.",
              "No importa la marca, todos los productos de obra gruesa son exactamente iguales.",
              "Conviene comprar siempre lo más barato sin mirar la calidad.",
              "Le recomendás que no use ningún material y deje la pared como está."
            ],
            "correcta": 0,
            "explica": "La calidad estructural no se negocia: usar materiales normados previene rajaduras y reclamos graves."
          },
          {
            "q": "El cliente insiste: \"No quiero gastar en complementos para Aditivos Ceresita / Hidrófugos, ¿puedo obviarlos?\"",
            "opciones": [
              "No es recomendable. Los complementos (aditivos, fijaciones o dosificación correcta) garantizan el rendimiento y la durabilidad de Aditivos Ceresita / Hidrófugos.",
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
              "Dejar la superficie lisa, uniforme y lista para enduir o pintar",
              "Aislar térmicamente la pared",
              "Impermeabilizar el muro",
              "Sostener la estructura de la casa"
            ],
            "correcta": 0,
            "explica": "El revoque fino es la capa final que deja la superficie lisa y lista para enduir o pintar."
          },
          {
            "q": "¿Sobre qué se aplica el revoque fino?",
            "opciones": [
              "Sobre el revoque grueso previamente fratazado, seco y curado",
              "Directamente sobre el ladrillo sin revoque",
              "Sobre la pintura existente",
              "Sobre la membrana asfáltica"
            ],
            "correcta": 0,
            "explica": "Se aplica sobre un revoque grueso previamente fratazado, seco y curado."
          },
          {
            "q": "¿Qué marca de revoque fino trabaja Rosso?",
            "opciones": [
              "Weber (Saint-Gobain)",
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
              "Rodillo de pintura",
              "Amoladora",
              "Termofusora"
            ],
            "correcta": 0,
            "explica": "Se trabaja con llana y fratacho, buscando una terminación lo más lisa posible."
          },
          {
            "q": "¿Por qué es importante humedecer la superficie antes de aplicar?",
            "opciones": [
              "Para mejorar la adherencia y evitar un secado prematuro",
              "Para que cambie de color",
              "Para que se seque más rápido",
              "No es necesario humedecer"
            ],
            "correcta": 0,
            "explica": "Humedecer levemente mejora la adherencia y evita un secado prematuro del revoque fino."
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
              "Tiempo y materiales: menos correcciones con masilla y menos manos de pintura",
              "No ahorra nada",
              "Solo ahorra pintura de color",
              "Solo tiempo, no materiales"
            ],
            "correcta": 0,
            "explica": "Un buen revoque fino reduce la necesidad de corregir con masilla y de aplicar múltiples manos de pintura."
          },
          {
            "q": "¿Qué materiales se necesitan para preparar revoque fino de forma tradicional?",
            "opciones": [
              "Cemento Portland, cal aérea hidratada y arena fina tamizada",
              "Solo cemento y agua",
              "Pegamento C1 y pastina",
              "Enduido exterior y lija"
            ],
            "correcta": 0,
            "explica": "De forma tradicional: cemento Portland + cal aérea hidratada + arena fina tamizada."
          },
          {
            "q": "¿Para qué ambientes sirve el revoque fino?",
            "opciones": [
              "Tanto para interiores como para exteriores",
              "Solo para baños",
              "Solo para exteriores",
              "Solo para cocinas"
            ],
            "correcta": 0,
            "explica": "El revoque fino se usa tanto en interiores como en exteriores."
          },
          {
            "q": "¿Qué productos complementarios se venden con el revoque fino?",
            "opciones": [
              "Enduido, pintura, fratachos, llanas, cal, cemento y arena fina",
              "Solo clavos",
              "Griferías",
              "Chapas para techo"
            ],
            "correcta": 0,
            "explica": "Se complementa con enduido, pintura, herramientas (fratachos, llanas), cal, cemento y arena fina."
          },
          {
            "q": "¿Qué diferencia hay entre la mezcla lista y la preparación tradicional?",
            "opciones": [
              "La mezcla lista viene formulada para usar directamente; la tradicional requiere calcular proporciones de cemento, cal y arena",
              "No hay diferencia",
              "La tradicional es mejor siempre",
              "La mezcla lista no existe"
            ],
            "correcta": 0,
            "explica": "Las mezclas listas simplifican el proceso; la tradicional requiere combinar cemento, cal y arena fina."
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
              "Revoque fino → secar → enduido → lija → pintura",
              "Pintar directo sobre el ladrillo",
              "Solo enduido sin revoque fino",
              "Membrana asfáltica → pintura"
            ],
            "correcta": 0,
            "explica": "El proceso correcto: revoque fino, dejarlo secar, enduir, lijar y luego pintar."
          },
          {
            "q": "¿Qué pasa si se aplica revoque fino sobre un revoque grueso sin fraguar?",
            "opciones": [
              "Se pueden generar fisuras y desprendimientos por movimiento del grueso",
              "Queda mejor que esperando",
              "No pasa nada",
              "Se seca más rápido"
            ],
            "correcta": 0,
            "explica": "Aplicar sobre un grueso sin fraguar causa fisuras y desprendimientos."
          },
          {
            "q": "Un albañil dice que no necesita revoque fino, que va directo con enduido. ¿Qué le decís?",
            "opciones": [
              "Sin fino, el enduido consume mucho más material y la terminación es peor; vale la pena hacerlo",
              "Tiene razón, no hace falta",
              "El enduido reemplaza todo",
              "No importa el acabado final"
            ],
            "correcta": 0,
            "explica": "Sin revoque fino se gasta más enduido y pintura, y la terminación es menos profesional."
          },
          {
            "q": "¿Cuál es la clave para un acabado profesional con revoque fino?",
            "opciones": [
              "Superficie del grueso bien fratazada + aplicación con llana buscando terminación lisa",
              "Aplicar con las manos",
              "Usar cualquier arena sin tamizar",
              "No importa la técnica"
            ],
            "correcta": 0,
            "explica": "La clave es un grueso bien fratazado y trabajo con llana para lograr la máxima lisura."
          },
          {
            "q": "¿Cuándo conviene ofrecer mezcla lista vs preparación tradicional?",
            "opciones": [
              "Mezcla lista para obras pequeñas/rápidas; tradicional cuando hay volumen grande y el albañil la prefiere",
              "Siempre lista, nunca tradicional",
              "Siempre tradicional",
              "No importa cuál"
            ],
            "correcta": 0,
            "explica": "La mezcla lista conviene para obras pequeñas/rápidas; la tradicional para volúmenes grandes o preferencia del albañil."
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
              "Sí, Revoque Fino cuenta con certificaciones de norma IRAM y calidad garantizada que evitan fisuras o fallas estructurales a futuro.",
              "No importa la marca, todos los productos de obra gruesa son exactamente iguales.",
              "Conviene comprar siempre lo más barato sin mirar la calidad.",
              "Le recomendás que no use ningún material y deje la pared como está."
            ],
            "correcta": 0,
            "explica": "La calidad estructural no se negocia: usar materiales normados previene rajaduras y reclamos graves."
          },
          {
            "q": "El cliente insiste: \"No quiero gastar en complementos para Revoque Fino, ¿puedo obviarlos?\"",
            "opciones": [
              "No es recomendable. Los complementos (aditivos, fijaciones o dosificación correcta) garantizan el rendimiento y la durabilidad de Revoque Fino.",
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
              "Paredes no estructurales (no soportan grandes cargas)",
              "Pilares y columnas de hormigón armado",
              "Techos y cielorrasos",
              "Pisos de exterior"
            ],
            "correcta": 0,
            "explica": "Los ladrillos huecos son para paredes no estructurales (tabiques, divisiones)."
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
              "Holcim",
              "Tensolite",
              "Ferrum"
            ],
            "correcta": 0,
            "explica": "Trabajamos ladrillos huecos cerámicos de Cerámica Marcos Paz."
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
              "Actúan como aislantes naturales: frescos en verano y cálidos en invierno",
              "Solo decoración",
              "Hacen el ladrillo más pesado",
              "No tienen ningún beneficio"
            ],
            "correcta": 0,
            "explica": "Las cámaras de aire actúan como aislantes naturales térmicos y acústicos."
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
              "100 unidades por m²",
              "5 unidades por m²",
              "50 unidades por m²"
            ],
            "correcta": 0,
            "explica": "Los ladrillos de 33 cm rinden aproximadamente 16 unidades por m²."
          },
          {
            "q": "¿Por qué un ladrillo de 25 cm puede salir más caro por m² aunque sea más barato por unidad?",
            "opciones": [
              "Porque necesitás 22 unidades por m² en lugar de 16, aumentando el costo total",
              "Porque pesa más",
              "Porque es de peor calidad",
              "No es cierto, siempre sale más barato"
            ],
            "correcta": 0,
            "explica": "Un ladrillo de 25 cm necesita 22/m² vs 16/m² de uno de 33 cm. El costo por m² puede ser mayor."
          },
          {
            "q": "¿Para qué se usa el ladrillo del 18?",
            "opciones": [
              "Muros exteriores que requieren mayor espesor para aislamiento térmico y acústico",
              "Solo para tabiques internos delgados",
              "Para techos",
              "Para pisos"
            ],
            "correcta": 0,
            "explica": "El del 18 es el más robusto, para muros exteriores con mayor aislamiento térmico y acústico."
          },
          {
            "q": "¿Qué ventaja tienen los ladrillos huecos vs los macizos?",
            "opciones": [
              "Son más livianos, aíslan mejor y facilitan el transporte y la manipulación",
              "Son más pesados y difíciles de usar",
              "No tienen ninguna ventaja",
              "Solo son más baratos"
            ],
            "correcta": 0,
            "explica": "Los huecos son más livianos, aíslan mejor (térmica y acústicamente) y son más fáciles de manipular."
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
            "explica": "Un ladrillo de 30 cm necesita 18 unidades/m² vs 16/m² de uno de 33 cm."
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
              "Del 8: ideal para tabiques interiores livianos donde se busca ganar espacio",
              "Del 18 para máxima robustez",
              "Del 12 de exterior",
              "Bloques de hormigón portantes"
            ],
            "correcta": 0,
            "explica": "Para tabiques interiores livianos: ladrillo del 8, que gana espacio sin perder funcionalidad."
          },
          {
            "q": "¿Qué venta cruzada hacés cuando vendés ladrillos?",
            "opciones": [
              "Cemento, cal o plastificante, arena, hierros para encadenados, puertas y ventanas",
              "Solo clavos",
              "Pintura y rodillo",
              "Griferías"
            ],
            "correcta": 0,
            "explica": "Al vender ladrillos, ofrecé cemento, cal, arena, hierros para encadenados/dinteles, puertas y ventanas."
          },
          {
            "q": "Un cliente compara precios de ladrillos y dice que los de la competencia son más baratos. ¿Cómo respondés?",
            "opciones": [
              "Comparar el costo por m², no por unidad: nuestros ladrillos de 33 cm rinden más por m²",
              "Bajar el precio sin argumentar",
              "Decirle que todos son iguales",
              "No decir nada"
            ],
            "correcta": 0,
            "explica": "El argumento clave: comparar costo por m². Los de 33 cm rinden más (16/m²) que los más cortos."
          },
          {
            "q": "¿Qué propiedades adicionales tienen los ladrillos huecos cerámicos?",
            "opciones": [
              "Son resistentes al fuego, duraderos y económicos para proyectos de mediana y gran escala",
              "Solo sirven para casas pequeñas",
              "Son inflamables",
              "Se rompen con facilidad"
            ],
            "correcta": 0,
            "explica": "Son ignífugos, duraderos y económicos para proyectos de mediana y gran escala."
          },
          {
            "q": "Un cliente quiere hacer la pared exterior de su casa. ¿Qué ladrillo y por qué?",
            "opciones": [
              "Del 12 o del 18: el 12 es el más versátil, el 18 da mayor aislamiento térmico",
              "Del 8 siempre",
              "Bloques de vidrio",
              "Ladrillos macizos solamente"
            ],
            "correcta": 0,
            "explica": "Para exterior: del 12 (versátil) o del 18 (mayor aislamiento). Depende del presupuesto y necesidad."
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
              "Sí, Ladrillos Huecos Cerámicos cuenta con certificaciones de norma IRAM y calidad garantizada que evitan fisuras o fallas estructurales a futuro.",
              "No importa la marca, todos los productos de obra gruesa son exactamente iguales.",
              "Conviene comprar siempre lo más barato sin mirar la calidad.",
              "Le recomendás que no use ningún material y deje la pared como está."
            ],
            "correcta": 0,
            "explica": "La calidad estructural no se negocia: usar materiales normados previene rajaduras y reclamos graves."
          },
          {
            "q": "El cliente insiste: \"No quiero gastar en complementos para Ladrillos Huecos Cerámicos, ¿puedo obviarlos?\"",
            "opciones": [
              "No es recomendable. Los complementos (aditivos, fijaciones o dosificación correcta) garantizan el rendimiento y la durabilidad de Ladrillos Huecos Cerámicos.",
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
              "Holcim",
              "Weber",
              "Ferrum"
            ],
            "correcta": 0,
            "explica": "Trabajamos bloques de hormigón premoldeado marca Tensolite."
          },
          {
            "q": "¿Para qué sirven los bloques portantes?",
            "opciones": [
              "Para construir muros estructurales y de carga, incluso en viviendas de varios pisos",
              "Solo para decoración",
              "Para pisos de exterior",
              "Para cielorrasos"
            ],
            "correcta": 0,
            "explica": "Los bloques portantes son los más resistentes, diseñados para muros estructurales y de carga."
          },
          {
            "q": "¿Qué son los bloques U?",
            "opciones": [
              "Bloques con forma de U que permiten integrar vigas de encadenado dentro del muro",
              "Bloques redondos",
              "Bloques decorativos solamente",
              "Bloques para pisos"
            ],
            "correcta": 0,
            "explica": "Los bloques U permiten integrar vigas de encadenado rellenándose con hierro y hormigón."
          },
          {
            "q": "¿Para qué se usan los bloques símil piedra?",
            "opciones": [
              "Para fachadas y muros decorativos con acabado tipo piedra natural",
              "Solo para cimientos",
              "Para pisos interiores",
              "Para techos"
            ],
            "correcta": 0,
            "explica": "Los bloques símil piedra son para fachadas y muros decorativos con textura de piedra natural."
          },
          {
            "q": "¿Cuál es la ventaja principal de construir con bloques vs ladrillos?",
            "opciones": [
              "Mayor tamaño = avance más rápido, menos tiempo y costo de mano de obra",
              "Son más pequeños y lentos",
              "No hay diferencia",
              "Los ladrillos son siempre mejores"
            ],
            "correcta": 0,
            "explica": "Su mayor tamaño permite avanzar más rápido, reduciendo tiempos y costos de mano de obra."
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
              "Los livianos son para divisiones interiores sin carga; los portantes para muros estructurales",
              "Son iguales",
              "Los livianos son más pesados",
              "Los portantes son decorativos"
            ],
            "correcta": 0,
            "explica": "Los livianos son para divisiones interiores; los portantes para muros que soportan cargas estructurales."
          },
          {
            "q": "¿Los bloques son resistentes al fuego?",
            "opciones": [
              "Sí, son ignífugos y resistentes a la humedad",
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
              "Se colocan como parte del muro y se rellenan con hierro y hormigón",
              "Se pegan con silicona",
              "Se dejan vacíos",
              "No se usa hierro con bloques U"
            ],
            "correcta": 0,
            "explica": "Los bloques U se colocan como parte del muro y se rellenan con hierro y hormigón para el encadenado."
          },
          {
            "q": "¿Qué productos complementarios se venden con bloques?",
            "opciones": [
              "Cemento, arena gruesa, hierros y hormigón, puertas y ventanas",
              "Solo pintura",
              "Griferías",
              "Membrana líquida"
            ],
            "correcta": 0,
            "explica": "Se complementan con cemento, arena gruesa, hierros, hormigón, puertas y ventanas."
          },
          {
            "q": "¿Qué aislamiento ofrecen los bloques de hormigón?",
            "opciones": [
              "Buen aislamiento térmico y sonoro, tanto en interiores como exteriores",
              "Ningún aislamiento",
              "Solo térmico, no acústico",
              "Solo acústico, no térmico"
            ],
            "correcta": 0,
            "explica": "Brindan buen aislamiento térmico y sonoro en interiores y exteriores."
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
              "Bloques símil piedra: acabado atractivo sin los costos de piedra verdadera",
              "Ladrillos del 8",
              "Placas de yeso",
              "Pintura texturada"
            ],
            "correcta": 0,
            "explica": "Los bloques símil piedra imitan piedra natural sin los costos y el trabajo de colocar piedra verdadera."
          },
          {
            "q": "¿Por qué un cliente elegiría bloques sobre ladrillos huecos?",
            "opciones": [
              "Velocidad de construcción por su mayor tamaño, más variedad de usos (portantes, U, decorativos)",
              "Solo por precio",
              "Los ladrillos no existen",
              "Los bloques son más baratos siempre"
            ],
            "correcta": 0,
            "explica": "Bloques: velocidad por tamaño + variedad (portantes, livianos, U, símil piedra)."
          },
          {
            "q": "Un constructor necesita encadenados horizontales. ¿Qué bloque y complementos le vendés?",
            "opciones": [
              "Bloques U + hierros + cemento + arena gruesa para rellenar con hormigón",
              "Bloques portantes sin hierro",
              "Solo cemento",
              "Ladrillos del 8"
            ],
            "correcta": 0,
            "explica": "Bloques U + hierros + cemento + arena gruesa para rellenar con hormigón y formar el encadenado."
          },
          {
            "q": "¿Cuáles son las 4 variedades de bloques que vendemos?",
            "opciones": [
              "Portantes, livianos, U y símil piedra",
              "Solo uno: el portante",
              "Portantes y livianos solamente",
              "Solo decorativos"
            ],
            "correcta": 0,
            "explica": "Las 4 variedades: portantes, livianos (no portantes), U (encadenados) y símil piedra (decorativos)."
          },
          {
            "q": "Un cliente tiene presupuesto limitado pero necesita un muro exterior. ¿Bloques o ladrillos?",
            "opciones": [
              "Depende: los bloques avanzan más rápido (menos mano de obra), los ladrillos del 12 son versátiles. Evaluar costo total",
              "Siempre ladrillos",
              "Siempre bloques",
              "No importa cuál"
            ],
            "correcta": 0,
            "explica": "Hay que evaluar el costo total: bloques ahorran mano de obra por rapidez; ladrillos son más versátiles."
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
              "Sí, Bloques de Hormigón cuenta con certificaciones de norma IRAM y calidad garantizada que evitan fisuras o fallas estructurales a futuro.",
              "No importa la marca, todos los productos de obra gruesa son exactamente iguales.",
              "Conviene comprar siempre lo más barato sin mirar la calidad.",
              "Le recomendás que no use ningún material y deje la pared como está."
            ],
            "correcta": 0,
            "explica": "La calidad estructural no se negocia: usar materiales normados previene rajaduras y reclamos graves."
          },
          {
            "q": "El cliente insiste: \"No quiero gastar en complementos para Bloques de Hormigón, ¿puedo obviarlos?\"",
            "opciones": [
              "No es recomendable. Los complementos (aditivos, fijaciones o dosificación correcta) garantizan el rendimiento y la durabilidad de Bloques de Hormigón.",
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
              "Para estructuras de hormigón: columnas, vigas, losas y cimientos",
              "Para decorar paredes",
              "Para pintar techos",
              "Para hacer muebles de madera"
            ],
            "correcta": 0,
            "explica": "Las barras ADN 420 son esenciales para las estructuras de hormigón armado."
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
              "Las torsionadas tienen estrías para adherirse al hormigón; las lisas son para herrería",
              "Son iguales",
              "Las lisas son para hormigón y las torsionadas para herrería",
              "Ambas son para decoración"
            ],
            "correcta": 0,
            "explica": "Las torsionadas (ADN 420) tienen estrías para adherirse al hormigón; las lisas son para herrería y trabajos artesanales."
          },
          {
            "q": "¿Se pueden soldar las barras ADN 420 comunes?",
            "opciones": [
              "No son aptas para soldar, salvo la variedad ADN 420 S",
              "Sí, todas se pueden soldar",
              "Solo con pegamento",
              "No existe la variedad soldable"
            ],
            "correcta": 0,
            "explica": "Las ADN 420 comunes no son aptas para soldar. Solo la variedad ADN 420 S es soldable."
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
              "Solo para decoración",
              "Para hormigón armado",
              "Para cañerías"
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
            "explica": "Las barras vienen en diámetros de 6 a 25 mm."
          },
          {
            "q": "¿Qué son las planchuelas?",
            "opciones": [
              "Barras rectangulares planas para herrería, refuerzos y marcos",
              "Cables eléctricos",
              "Tubos redondos",
              "Ladrillos de acero"
            ],
            "correcta": 0,
            "explica": "Las planchuelas son barras planas lisas o perforadas para herrería, refuerzos, marcos y piezas industriales."
          },
          {
            "q": "¿Para qué se usan los perfiles T?",
            "opciones": [
              "Para columnas, vigas o herrería específica; se unen con soldadura o bulones",
              "Para pintar paredes",
              "Para hacer morteros",
              "Para instalar cañerías"
            ],
            "correcta": 0,
            "explica": "Los perfiles T son estructurales para columnas, vigas o herrería, uniéndose con soldadura o bulones."
          },
          {
            "q": "¿Qué complementos se venden con los hierros?",
            "opciones": [
              "Discos de corte, electrodos, pintura antióxido, tornillos y alambre",
              "Solo cemento",
              "Solo pintura",
              "Griferías"
            ],
            "correcta": 0,
            "explica": "Se complementan con discos de corte, electrodos, pintura antióxido, tornillos y alambre recocido."
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
              "Barras lisas + perfiles ángulo + planchuelas + discos de corte + electrodos + antióxido",
              "Solo barras torsionadas",
              "Solo cemento",
              "Ladrillos del 8"
            ],
            "correcta": 0,
            "explica": "Para rejas: barras lisas, perfiles L y planchuelas + complementos (discos, electrodos, antióxido)."
          },
          {
            "q": "¿Por qué no se deben soldar las barras ADN 420 comunes?",
            "opciones": [
              "Porque el calor de la soldadura puede debilitar su estructura interna y comprometer la seguridad",
              "Porque son de plástico",
              "Porque son muy finas",
              "No hay razón técnica"
            ],
            "correcta": 0,
            "explica": "La soldadura puede debilitar la estructura del acero torsionado. Solo la variedad S es soldable."
          },
          {
            "q": "Un constructor pide hierros para la estructura de una losa. ¿Qué le ofrecés?",
            "opciones": [
              "Barras ADN 420 torsionadas en el diámetro adecuado + alambre recocido + cemento",
              "Barras lisas para herrería",
              "Solo perfiles ángulo",
              "Planchuelas"
            ],
            "correcta": 0,
            "explica": "Para losas: barras ADN 420 torsionadas + alambre recocido para atar + cemento para el hormigón."
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
            "explica": "Los perfiles ángulo vienen en largos de 6 metros."
          },
          {
            "q": "¿Qué norma cumplen las barras ADN 420?",
            "opciones": [
              "IRAM U500-528",
              "ISO 9001",
              "No tienen norma",
              "Norma europea EN"
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
              "Sí, Hierros A420 cuenta con certificaciones de norma IRAM y calidad garantizada que evitan fisuras o fallas estructurales a futuro.",
              "No importa la marca, todos los productos de obra gruesa son exactamente iguales.",
              "Conviene comprar siempre lo más barato sin mirar la calidad.",
              "Le recomendás que no use ningún material y deje la pared como está."
            ],
            "correcta": 0,
            "explica": "La calidad estructural no se negocia: usar materiales normados previene rajaduras y reclamos graves."
          },
          {
            "q": "El cliente insiste: \"No quiero gastar en complementos para Hierros A420, ¿puedo obviarlos?\"",
            "opciones": [
              "No es recomendable. Los complementos (aditivos, fijaciones o dosificación correcta) garantizan el rendimiento y la durabilidad de Hierros A420.",
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
              "Refuerzan el hormigón y evitan que se agriete, distribuyendo el peso de forma pareja",
              "Para decorar pisos",
              "Para pintar techos",
              "Para hacer rejas"
            ],
            "correcta": 0,
            "explica": "Las mallas son el esqueleto metálico que refuerza el hormigón y evita fisuras."
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
              "1 × 1 m",
              "5 × 5 m",
              "10 × 10 m"
            ],
            "correcta": 0,
            "explica": "Las medidas más comunes son 2,00 × 6,00 m y 2,40 × 6,00 m."
          },
          {
            "q": "¿Qué diámetros de varilla están disponibles?",
            "opciones": [
              "4,2 mm, 5 mm, 6 mm y 8 mm",
              "Solo 1 mm",
              "De 20 a 30 mm",
              "No tienen varillas"
            ],
            "correcta": 0,
            "explica": "Diámetros disponibles: 4,2 mm, 5 mm, 6 mm y 8 mm."
          },
          {
            "q": "¿Por qué es importante colocar malla en una losa?",
            "opciones": [
              "Garantiza durabilidad y evita fisuras por retracción del hormigón",
              "Es solo decorativa",
              "Hace más pesada la losa",
              "No tiene función real"
            ],
            "correcta": 0,
            "explica": "La malla garantiza durabilidad al absorber tensiones y evitar el agrietamiento por retracción."
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
              "Para contrapisos de alto peso: entradas de vehículos, pisos industriales, alto tránsito",
              "Solo para paredes",
              "Para techos livianos",
              "Nunca, son demasiado gruesas"
            ],
            "correcta": 0,
            "explica": "Las de 6 mm u 8 mm son para contrapisos de alto peso: vehículos, industrial, alto tránsito."
          },
          {
            "q": "¿Qué productos complementarios se venden con mallas?",
            "opciones": [
              "Viguetas, bovedillas, cemento, hierros sueltos y espaciadores plásticos",
              "Solo pintura",
              "Griferías",
              "Puertas de madera"
            ],
            "correcta": 0,
            "explica": "Complementos: viguetas, bovedillas, cemento, hierros sueltos para refuerzos y espaciadores plásticos."
          },
          {
            "q": "¿Para qué sirven los espaciadores plásticos?",
            "opciones": [
              "Aseguran que la malla quede bien posicionada dentro del hormigón",
              "Para decorar la malla",
              "Para pintar la malla",
              "Para cortar la malla"
            ],
            "correcta": 0,
            "explica": "Los espaciadores aseguran que la malla quede a la altura correcta dentro del hormigón."
          },
          {
            "q": "¿Qué pasa si no se coloca malla en un contrapiso?",
            "opciones": [
              "El hormigón se puede agrietar por retracción y no distribuye bien las cargas",
              "No pasa nada",
              "El piso queda más fuerte",
              "Es mejor sin malla"
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
              "Malla de 6 mm u 8 mm, por el peso del vehículo y el tránsito",
              "Malla de 4,2 mm, la más fina",
              "No necesita malla",
              "Solo hierros sueltos"
            ],
            "correcta": 0,
            "explica": "Para entradas de vehículos: malla de 6 mm u 8 mm, que soporta alto peso y tránsito."
          },
          {
            "q": "¿Cómo se calcula cuántas mallas necesita un cliente?",
            "opciones": [
              "Se divide la superficie total (m²) entre la superficie de cada malla (ej. 2×6 = 12 m²) y se agrega solapamiento",
              "Se compra una sola malla para todo",
              "Se mide a ojo",
              "No se puede calcular"
            ],
            "correcta": 0,
            "explica": "Se calcula dividiendo la superficie total por la de cada malla, más el solapamiento entre paños."
          },
          {
            "q": "Un cliente construye un entrepiso sobre una habitación. ¿Qué malla le ofrecés?",
            "opciones": [
              "Malla de 4,2 mm o 5 mm para losa de techo/entrepiso estándar",
              "Malla de 8 mm porque es entrepiso",
              "No necesita malla el entrepiso",
              "Solo hierros sueltos de 25 mm"
            ],
            "correcta": 0,
            "explica": "Para entrepiso estándar: malla de 4,2 mm o 5 mm es suficiente."
          },
          {
            "q": "¿Qué venta cruzada hacés al vender mallas para una losa?",
            "opciones": [
              "Viguetas, bovedillas, cemento para la capa de compresión, hierros y espaciadores",
              "Solo la malla, nada más",
              "Pintura y rodillo",
              "Griferías de baño"
            ],
            "correcta": 0,
            "explica": "Al vender malla para losa: ofrecé viguetas, bovedillas, cemento, hierros y espaciadores."
          },
          {
            "q": "¿Cómo ayuda la malla al hormigón durante el secado?",
            "opciones": [
              "Absorbe tensiones internas y distribuye el peso, evitando el agrietamiento por retracción",
              "Hace que seque más rápido",
              "Le da color al hormigón",
              "No ayuda durante el secado"
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
              "Sí, Mallas Electrosoldadas cuenta con certificaciones de norma IRAM y calidad garantizada que evitan fisuras o fallas estructurales a futuro.",
              "No importa la marca, todos los productos de obra gruesa son exactamente iguales.",
              "Conviene comprar siempre lo más barato sin mirar la calidad.",
              "Le recomendás que no use ningún material y deje la pared como está."
            ],
            "correcta": 0,
            "explica": "La calidad estructural no se negocia: usar materiales normados previene rajaduras y reclamos graves."
          },
          {
            "q": "El cliente insiste: \"No quiero gastar en complementos para Mallas Electrosoldadas, ¿puedo obviarlos?\"",
            "opciones": [
              "No es recomendable. Los complementos (aditivos, fijaciones o dosificación correcta) garantizan el rendimiento y la durabilidad de Mallas Electrosoldadas.",
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
              "El elemento estructural sobre el que se arma la losa (las 'costillas' del techo)",
              "El bloque de EPS que rellena los espacios",
              "La malla de acero de la capa de compresión",
              "El perfil metálico del cielorraso"
            ],
            "correcta": 0,
            "explica": "Las viguetas son el elemento estructural clave, las 'costillas' sobre las que se apoyan las bovedillas."
          },
          {
            "q": "¿Qué marca de viguetas ofrece Rosso?",
            "opciones": [
              "Tensolite",
              "Holcim",
              "Gerdau",
              "Barbieri"
            ],
            "correcta": 0,
            "explica": "Trabajamos viguetas de concreto pretensado marca Tensolite."
          },
          {
            "q": "¿Qué se apoya sobre las viguetas para formar la losa?",
            "opciones": [
              "Las bovedillas (bloques de EPS o cerámica)",
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
              "Tienen acero tensado en su interior, lo que les da más resistencia con menos peso",
              "Se fabrican en frío",
              "Se pintan antes de colocarlas",
              "Vienen pre-cortadas a medida"
            ],
            "correcta": 0,
            "explica": "Llevan acero tensado internamente, dando mayor resistencia con menor peso."
          },
          {
            "q": "¿De qué material están hechas las viguetas Tensolite?",
            "opciones": [
              "Concreto (hormigón) pretensado",
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
              "43 a 50 cm, según el ancho de la bovedilla",
              "10 cm entre ejes",
              "1 metro entre ejes",
              "No hay distancia estándar"
            ],
            "correcta": 0,
            "explica": "Se colocan cada 43 a 50 cm entre ejes, según el ancho de la bovedilla."
          },
          {
            "q": "Para una losa de 5 metros de ancho, ¿cuántas viguetas se necesitan aprox.?",
            "opciones": [
              "12 a 13 viguetas (500÷43 + 1)",
              "5 viguetas",
              "50 viguetas",
              "2 viguetas"
            ],
            "correcta": 0,
            "explica": "500 cm ÷ 43 cm = 11,6 + 1 = 12 a 13 viguetas."
          },
          {
            "q": "¿Por qué las viguetas largas son más caras por metro?",
            "opciones": [
              "Requieren más acero interno y mayor control técnico en fabricación",
              "Solo por el transporte",
              "Porque pesan menos",
              "No es cierto, todas cuestan lo mismo"
            ],
            "correcta": 0,
            "explica": "A mayor longitud, más acero interno y control técnico, incrementando el costo por metro."
          },
          {
            "q": "¿Cuáles son las ventajas de las viguetas pretensadas vs vigas tradicionales?",
            "opciones": [
              "Fácil manipulación, menor carga, mayor resistencia a deformación y ahorro de materiales de soporte",
              "Son más pesadas",
              "Son más difíciles de instalar",
              "No tienen ventajas"
            ],
            "correcta": 0,
            "explica": "Fácil manipulación, menor carga, mayor resistencia a deformación y fisuras, ahorro de soportes."
          },
          {
            "q": "¿Qué productos son complementarios imprescindibles de las viguetas?",
            "opciones": [
              "Bovedillas, mallas de acero y cemento para la capa de compresión",
              "Solo pintura",
              "Griferías",
              "Chapas de techo"
            ],
            "correcta": 0,
            "explica": "Los complementos imprescindibles son: bovedillas, mallas de acero y cemento para la capa de compresión."
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
              "Explicás que las viguetas pretensadas son más rápidas, livianas y resistentes que las vigas tradicionales",
              "Le decís que use solo ladrillos",
              "Le recomendás madera",
              "No le das opciones"
            ],
            "correcta": 0,
            "explica": "Argumento: más rápido, más liviano, más resistente y con ahorro en materiales de soporte vs vigas tradicionales."
          },
          {
            "q": "¿Cómo calculás cuántas viguetas necesita un cliente?",
            "opciones": [
              "Ancho de la losa (cm) ÷ separación entre ejes (43 o 50 cm) + 1",
              "Largo × ancho × 10",
              "Se adivinan",
              "No se pueden calcular"
            ],
            "correcta": 0,
            "explica": "Fórmula: ancho de losa en cm ÷ separación entre ejes + 1. Ejemplo: 500÷43+1 = 13 viguetas."
          },
          {
            "q": "Un cliente pregunta por qué no hacer vigas de hormigón tradicional. ¿Qué argumentás?",
            "opciones": [
              "Las viguetas tienen más resistencia con menos peso, se instalan más rápido y ahorran materiales de encofrado",
              "Las vigas tradicionales son mejores siempre",
              "No hay diferencia",
              "Las viguetas son más caras sin ventajas"
            ],
            "correcta": 0,
            "explica": "Las viguetas: más resistencia/peso, instalación rápida, ahorro de encofrado y materiales de soporte."
          },
          {
            "q": "¿Qué venta cruzada completa hacés con viguetas?",
            "opciones": [
              "Bovedillas + mallas de acero + cemento para capa de compresión + transporte",
              "Solo las viguetas",
              "Solo cemento",
              "Solo bovedillas"
            ],
            "correcta": 0,
            "explica": "Venta completa: viguetas + bovedillas + mallas + cemento. Y ofrecé el servicio de cálculo y transporte."
          },
          {
            "q": "Lo más práctico para calcular las viguetas del cliente es…",
            "opciones": [
              "Que nos indique las medidas del espacio y nosotros le damos el cálculo exacto",
              "Que lo calcule solo con una regla",
              "Que adivine cuántas necesita",
              "No se puede calcular sin un ingeniero"
            ],
            "correcta": 0,
            "explica": "Lo más práctico: que el cliente nos dé las medidas y le calculamos exactamente."
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
              "Sí, Viguetas Pretensadas cuenta con certificaciones de norma IRAM y calidad garantizada que evitan fisuras o fallas estructurales a futuro.",
              "No importa la marca, todos los productos de obra gruesa son exactamente iguales.",
              "Conviene comprar siempre lo más barato sin mirar la calidad.",
              "Le recomendás que no use ningún material y deje la pared como está."
            ],
            "correcta": 0,
            "explica": "La calidad estructural no se negocia: usar materiales normados previene rajaduras y reclamos graves."
          },
          {
            "q": "El cliente insiste: \"No quiero gastar en complementos para Viguetas Pretensadas, ¿puedo obviarlos?\"",
            "opciones": [
              "No es recomendable. Los complementos (aditivos, fijaciones o dosificación correcta) garantizan el rendimiento y la durabilidad de Viguetas Pretensadas.",
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
              "Bloques de poliestireno expandido que se colocan entre las viguetas como relleno de la losa",
              "Vigas de hormigón armado",
              "Chapas metálicas para techos",
              "Bloques de ladrillo macizo"
            ],
            "correcta": 0,
            "explica": "Las bovedillas de EPS son el relleno liviano que se coloca entre las viguetas para formar la losa."
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
              "10 cm y 20 cm",
              "1 metro",
              "No tienen medida estándar"
            ],
            "correcta": 0,
            "explica": "Anchos estándar: 43 y 50 cm, coincidiendo con las separaciones habituales de viguetas."
          },
          {
            "q": "¿Qué alturas están disponibles?",
            "opciones": [
              "12, 15 y 18 cm",
              "Solo 5 cm",
              "Solo 30 cm",
              "No vienen en diferentes alturas"
            ],
            "correcta": 0,
            "explica": "Alturas disponibles: 12, 15 y 18 cm, adaptándose al peralte de la losa."
          },
          {
            "q": "¿Qué largo tienen las bovedillas?",
            "opciones": [
              "1 metro (fáciles de manipular y subir a planta alta)",
              "6 metros",
              "12 metros",
              "50 cm"
            ],
            "correcta": 0,
            "explica": "Miden 1 metro de largo, facilitando su manipulación y transporte a planta alta."
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
              "Son ultralivianas: reducen la carga sobre la estructura, necesitando menos hierro y hormigón",
              "Son más pesadas y fuertes",
              "No tienen diferencia",
              "Son solo decorativas"
            ],
            "correcta": 0,
            "explica": "Son ultralivianas, reduciendo la carga y permitiendo usar menos hierro y hormigón."
          },
          {
            "q": "¿Qué aislamiento proporcionan las bovedillas de EPS?",
            "opciones": [
              "Excelente aislamiento térmico y acústico (barrera contra calor, frío y ruido)",
              "Ningún aislamiento",
              "Solo acústico",
              "Solo contra la lluvia"
            ],
            "correcta": 0,
            "explica": "El EPS es excelente aislante térmico y acústico, mejorando el confort y la eficiencia energética."
          },
          {
            "q": "¿Las bovedillas generan escombros o polvo?",
            "opciones": [
              "No, no producen escombros ni polvo, y los recortes pueden reutilizarse",
              "Sí, mucho polvo",
              "Generan escombro pesado",
              "Son muy sucias"
            ],
            "correcta": 0,
            "explica": "No producen escombros ni polvo, y los recortes se reutilizan o desechan fácilmente."
          },
          {
            "q": "¿Se pueden cortar las bovedillas para adaptarlas?",
            "opciones": [
              "Sí, se cortan fácilmente para adaptarse a remates o ajustes de obra",
              "No, solo vienen en una medida fija",
              "Necesitan sierra eléctrica especial",
              "Solo un técnico puede cortarlas"
            ],
            "correcta": 0,
            "explica": "Se cortan fácilmente para adaptarse a remates o ajustes de obra."
          },
          {
            "q": "¿Qué complementos se venden con las bovedillas?",
            "opciones": [
              "Viguetas, mallas de acero y cemento para la capa de compresión",
              "Solo pintura",
              "Griferías",
              "Chapas de techo"
            ],
            "correcta": 0,
            "explica": "Complementarios imprescindibles: viguetas, mallas y cemento para la capa de compresión."
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
              "Explicás que aligeran la estructura, aíslan térmicamente y se recupera la inversión en ahorro de hormigón y energía",
              "Le das la razón y le vendés otra cosa",
              "Le decís que no importa el material",
              "No respondés"
            ],
            "correcta": 0,
            "explica": "Las bovedillas de EPS aligeran, aíslan y la inversión se recupera en ahorro de hormigón, mano de obra y energía."
          },
          {
            "q": "¿Cuál es el argumento para que un cliente elija bovedillas de EPS sobre las cerámicas?",
            "opciones": [
              "Son más livianas, mejor aislantes térmicos, no generan escombros y se cortan fácilmente",
              "Las cerámicas siempre son mejores",
              "No hay diferencia",
              "Las de EPS son más pesadas"
            ],
            "correcta": 0,
            "explica": "EPS: más livianas, mejor aislamiento térmico, sin escombros y fáciles de cortar."
          },
          {
            "q": "¿Cómo encajan las bovedillas entre las viguetas?",
            "opciones": [
              "Encastran perfectamente por sus medidas calibradas (43 o 50 cm de ancho)",
              "Se pegan con silicona",
              "Se clavan a la vigueta",
              "No encajan, se apoyan sueltas"
            ],
            "correcta": 0,
            "explica": "Sus medidas están calibradas para encastrar perfectamente entre viguetas Tensolite."
          },
          {
            "q": "¿Cómo la inversión en bovedillas de EPS se recupera económicamente?",
            "opciones": [
              "Ahorro en hormigón (menos peso = menos hormigón), mano de obra (instalación rápida) y consumo energético futuro",
              "No se recupera nunca",
              "Solo ahorra en transporte",
              "Solo ahorra en pintura"
            ],
            "correcta": 0,
            "explica": "Se recupera en ahorro de hormigón, mano de obra (rapidez de instalación) y consumo energético posterior."
          },
          {
            "q": "¿Qué venta cruzada completa ofrecés cuando un cliente pide bovedillas?",
            "opciones": [
              "Viguetas Tensolite + mallas de acero + cemento para capa de compresión",
              "Solo las bovedillas",
              "Solo cemento",
              "Pintura y rodillo"
            ],
            "correcta": 0,
            "explica": "Venta cruzada: viguetas + mallas + cemento. Las bovedillas no funcionan solas."
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
              "Sí, Bovedillas EPS cuenta con certificaciones de norma IRAM y calidad garantizada que evitan fisuras o fallas estructurales a futuro.",
              "No importa la marca, todos los productos de obra gruesa son exactamente iguales.",
              "Conviene comprar siempre lo más barato sin mirar la calidad.",
              "Le recomendás que no use ningún material y deje la pared como está."
            ],
            "correcta": 0,
            "explica": "La calidad estructural no se negocia: usar materiales normados previene rajaduras y reclamos graves."
          },
          {
            "q": "El cliente insiste: \"No quiero gastar en complementos para Bovedillas EPS, ¿puedo obviarlos?\"",
            "opciones": [
              "No es recomendable. Los complementos (aditivos, fijaciones o dosificación correcta) garantizan el rendimiento y la durabilidad de Bovedillas EPS.",
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
              "Proteger techos, terrazas y cubiertas contra filtraciones y humedad",
              "Para pintar paredes de colores",
              "Para pegar cerámicos al piso",
              "Para aislar cables eléctricos"
            ],
            "correcta": 0,
            "explica": "Las membranas son la mejor defensa contra filtraciones y humedad en techos y terrazas."
          },
          {
            "q": "¿Qué marca de membranas trabaja Rosso?",
            "opciones": [
              "Megaflex (Saint-Gobain)",
              "Holcim",
              "Gerdau",
              "Tensolite"
            ],
            "correcta": 0,
            "explica": "Trabajamos membranas marca Megaflex de Saint-Gobain."
          },
          {
            "q": "¿Cuáles son los 3 tipos de membranas que vendemos?",
            "opciones": [
              "Asfáltica en rollo, líquida y autoadhesiva",
              "Solo líquida",
              "Solo en rollo",
              "Solo autoadhesiva"
            ],
            "correcta": 0,
            "explica": "Los 3 tipos: asfáltica en rollo (con aluminio o geotextil), líquida y autoadhesiva."
          },
          {
            "q": "¿Cómo se aplica la membrana asfáltica en rollo?",
            "opciones": [
              "Con soplete, fundiéndola sobre la superficie",
              "Con pincel como pintura",
              "Con rodillo de lana",
              "Se pega con silicona"
            ],
            "correcta": 0,
            "explica": "La membrana asfáltica en rollo se aplica con soplete (calor)."
          },
          {
            "q": "¿Qué membrana es ideal para reparaciones rápidas?",
            "opciones": [
              "La autoadhesiva: se pega en frío sin herramientas especiales",
              "La asfáltica con soplete",
              "La líquida en 3 capas",
              "Ninguna sirve para reparaciones"
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
              "Con aluminio: reflectante, no transitable. Con geotextil: transitable, se puede pintar",
              "Son iguales",
              "Ambas son transitables",
              "Ambas son reflectantes"
            ],
            "correcta": 0,
            "explica": "Con aluminio: reflectante, no transitable. Con geotextil: transitable y pintable."
          },
          {
            "q": "¿Qué se debe hacer antes de aplicar cualquier membrana?",
            "opciones": [
              "La superficie debe estar seca, limpia y firme. Reparar grietas y usar imprimación",
              "Mojar toda la superficie",
              "No hacer nada previo",
              "Pintar con látex primero"
            ],
            "correcta": 0,
            "explica": "Superficie seca, limpia, firme, grietas reparadas y con imprimación asfáltica previa."
          },
          {
            "q": "¿Para qué sirve la imprimación asfáltica?",
            "opciones": [
              "Mejora notablemente la adherencia y el rendimiento de la membrana",
              "Solo le da color negro",
              "Para decorar el techo",
              "No tiene función real"
            ],
            "correcta": 0,
            "explica": "La imprimación mejora notablemente la adherencia y rendimiento de cualquier tipo de membrana."
          },
          {
            "q": "¿Cuándo conviene usar membrana líquida?",
            "opciones": [
              "Para superficies irregulares, detalles o reparaciones; se aplica con pincel o rodillo",
              "Para grandes superficies planas",
              "Nunca, no es efectiva",
              "Solo para pisos interiores"
            ],
            "correcta": 0,
            "explica": "La membrana líquida es ideal para superficies irregulares, detalles o reparaciones con pincel/rodillo."
          },
          {
            "q": "¿Qué complementos se venden con las membranas?",
            "opciones": [
              "Imprimación, pintura asfáltica, rodillo, soplete, garrafa, selladores, venda elástica",
              "Solo clavos",
              "Griferías",
              "Ladrillos"
            ],
            "correcta": 0,
            "explica": "Complementos: imprimación, pintura asfáltica, rodillo, soplete, garrafa, selladores y venda elástica."
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
              "Membrana asfáltica con geotextil (transitable para terraza) + imprimación previa",
              "Membrana con aluminio (no transitable)",
              "Solo pintura látex",
              "Cinta asfáltica en toda la terraza"
            ],
            "correcta": 0,
            "explica": "Para terraza transitable: membrana con geotextil + imprimación previa + pintarla encima."
          },
          {
            "q": "Un cliente necesita reparar una grieta puntual en el techo. ¿Qué le ofrecés?",
            "opciones": [
              "Membrana autoadhesiva: rápida, se pega en frío, sin herramientas especiales",
              "Membrana asfáltica en rollo con soplete",
              "Membrana líquida en todo el techo",
              "Solo sellador de silicona"
            ],
            "correcta": 0,
            "explica": "Para grietas puntuales: membrana autoadhesiva, se pega en frío y es rápida."
          },
          {
            "q": "¿Qué tipo de membrana es la más robusta para una losa expuesta?",
            "opciones": [
              "La membrana asfáltica en rollo, aplicada con soplete",
              "La autoadhesiva",
              "La líquida",
              "La pintura látex exterior"
            ],
            "correcta": 0,
            "explica": "La membrana asfáltica en rollo es la más robusta, ideal para losas expuestas."
          },
          {
            "q": "Un cliente quiere impermeabilizar una medianera. ¿Qué le ofrecés?",
            "opciones": [
              "Membrana líquida: fácil de aplicar con pincel/rodillo en superficies verticales",
              "Membrana en rollo con soplete en posición vertical",
              "Solo pintura común",
              "Cinta asfáltica"
            ],
            "correcta": 0,
            "explica": "Para medianeras (vertical): membrana líquida con pincel/rodillo."
          },
          {
            "q": "¿Cuál es la venta cruzada completa para impermeabilización?",
            "opciones": [
              "Membrana + imprimación asfáltica + selladores + venda elástica + herramientas de aplicación",
              "Solo la membrana",
              "Solo el soplete",
              "Cemento y arena"
            ],
            "correcta": 0,
            "explica": "Venta completa: membrana + imprimación + selladores + venda + herramientas (soplete/rodillo)."
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
              "Sí, Membranas Impermeabilizantes cuenta con certificaciones de norma IRAM y calidad garantizada que evitan fisuras o fallas estructurales a futuro.",
              "No importa la marca, todos los productos de obra gruesa son exactamente iguales.",
              "Conviene comprar siempre lo más barato sin mirar la calidad.",
              "Le recomendás que no use ningún material y deje la pared como está."
            ],
            "correcta": 0,
            "explica": "La calidad estructural no se negocia: usar materiales normados previene rajaduras y reclamos graves."
          },
          {
            "q": "El cliente insiste: \"No quiero gastar en complementos para Membranas Impermeabilizantes, ¿puedo obviarlos?\"",
            "opciones": [
              "No es recomendable. Los complementos (aditivos, fijaciones o dosificación correcta) garantizan el rendimiento y la durabilidad de Membranas Impermeabilizantes.",
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
              "Lana de vidrio (Isover) y membrana aislante con aluminio (espuma)",
              "Solo lana de vidrio",
              "Solo membrana asfáltica",
              "Solo pintura térmica"
            ],
            "correcta": 0,
            "explica": "Los dos tipos: lana de vidrio (Isover/Saint-Gobain) y membrana aislante de espuma con aluminio."
          },
          {
            "q": "¿Dónde se coloca la lana de vidrio?",
            "opciones": [
              "Entre tabiques, cielorrasos o techos",
              "Solo en el piso",
              "Solo en la puerta de entrada",
              "En las cañerías de gas"
            ],
            "correcta": 0,
            "explica": "La lana de vidrio se coloca entre tabiques, cielorrasos o techos."
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
            "explica": "Espesores disponibles: 50, 80 y 100 mm. A mayor espesor, mejor aislamiento."
          },
          {
            "q": "¿Para qué sirve la membrana aislante con aluminio?",
            "opciones": [
              "Para colocar bajo techos de chapa o teja, reflejando el calor y aislando",
              "Solo para decorar techos",
              "Para impermeabilizar cimientos",
              "Para pintar paredes"
            ],
            "correcta": 0,
            "explica": "Se coloca bajo chapas o tejas, reflejando el calor solar y aislando con la espuma."
          },
          {
            "q": "¿La lana de vidrio es inflamable?",
            "opciones": [
              "No, es incombustible y no propaga el fuego",
              "Sí, es muy inflamable",
              "Solo si se moja",
              "Depende del espesor"
            ],
            "correcta": 0,
            "explica": "La lana de vidrio es material incombustible que no propaga el fuego."
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
              "Lana para paredes/cielorrasos (mejor aislación); membrana para techos (liviana y reflectiva)",
              "Son iguales siempre",
              "Lana solo para techos",
              "Membrana solo para paredes"
            ],
            "correcta": 0,
            "explica": "Lana de vidrio: mejor aislación en paredes/cielorrasos. Membrana: efectiva en techos, liviana y reflectiva."
          },
          {
            "q": "¿Se pueden usar combinadas?",
            "opciones": [
              "Sí, muchas veces se combinan para mejores resultados",
              "Nunca, son incompatibles",
              "Solo la lana se usa sola",
              "No tiene sentido combinarlas"
            ],
            "correcta": 0,
            "explica": "Muchas veces se usan combinadas para obtener mejores resultados de aislamiento."
          },
          {
            "q": "¿Qué espesores tiene la membrana aislante con aluminio?",
            "opciones": [
              "5 mm y 10 mm",
              "50 mm y 100 mm",
              "Solo 1 mm",
              "No tiene espesores diferentes"
            ],
            "correcta": 0,
            "explica": "La membrana aislante viene en espesores de 5 mm y 10 mm."
          },
          {
            "q": "¿Cómo funciona el aluminio de la membrana aislante?",
            "opciones": [
              "Refleja el calor solar hacia afuera y el calor interior hacia adentro",
              "Solo es decorativo",
              "Absorbe toda la humedad",
              "No tiene función"
            ],
            "correcta": 0,
            "explica": "El aluminio refleja el calor del sol hacia afuera y el calor interior hacia adentro (aislación por radiación)."
          },
          {
            "q": "¿Qué complementos se venden con los aislantes?",
            "opciones": [
              "Malla sostén, alambre galvanizado, film barrera de vapor, cinta de aluminio, fijaciones",
              "Solo clavos",
              "Pintura",
              "Cemento"
            ],
            "correcta": 0,
            "explica": "Complementos: malla sostén, alambre galvanizado, film barrera de vapor, cinta de aluminio y fijaciones."
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
              "Membrana aislante con aluminio bajo la chapa + opcionalmente lana de vidrio para refuerzo",
              "Solo pintura blanca en la chapa",
              "Más chapas encima",
              "Nada, es normal"
            ],
            "correcta": 0,
            "explica": "Membrana con aluminio bajo la chapa refleja el calor solar. Combinada con lana de vidrio, aún mejor."
          },
          {
            "q": "Un cliente construye tabiques de drywall y quiere aislamiento acústico. ¿Qué le recomendás?",
            "opciones": [
              "Lana de vidrio entre los montantes: reduce el ruido entre ambientes",
              "Membrana con aluminio adentro del tabique",
              "Solo pintura acústica",
              "Nada, el yeso ya aísla solo"
            ],
            "correcta": 0,
            "explica": "Lana de vidrio entre los montantes del tabique es lo ideal para aislamiento acústico."
          },
          {
            "q": "¿Cuál es el argumento de venta de la lana de vidrio para el ahorro energético?",
            "opciones": [
              "Mantiene la casa fresca en verano y cálida en invierno, reduciendo el consumo de aire acondicionado y calefacción",
              "No ahorra energía",
              "Solo sirve en invierno",
              "Solo funciona en casas nuevas"
            ],
            "correcta": 0,
            "explica": "La lana reduce el consumo energético: menos aire acondicionado en verano, menos calefacción en invierno."
          },
          {
            "q": "¿Qué complementos específicos necesita la lana de vidrio para paredes de drywall?",
            "opciones": [
              "Placas de yeso, perfiles metálicos, tornillos",
              "Solo la lana sola",
              "Cemento y arena",
              "Pintura y rodillo"
            ],
            "correcta": 0,
            "explica": "Para drywall: placas de yeso, perfiles (soleras/montantes), tornillos T2 y la lana de vidrio."
          },
          {
            "q": "¿Qué beneficio tiene la membrana aislante frente a la humedad?",
            "opciones": [
              "Es resistente a la humedad, a diferencia de otros aislantes que se degradan al mojarse",
              "No resiste la humedad",
              "Absorbe toda el agua",
              "Se destruye con el sol"
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
              "Sí, Aislantes Térmicos cuenta con certificaciones de norma IRAM y calidad garantizada que evitan fisuras o fallas estructurales a futuro.",
              "No importa la marca, todos los productos de obra gruesa son exactamente iguales.",
              "Conviene comprar siempre lo más barato sin mirar la calidad.",
              "Le recomendás que no use ningún material y deje la pared como está."
            ],
            "correcta": 0,
            "explica": "La calidad estructural no se negocia: usar materiales normados previene rajaduras y reclamos graves."
          },
          {
            "q": "El cliente insiste: \"No quiero gastar en complementos para Aislantes Térmicos, ¿puedo obviarlos?\"",
            "opciones": [
              "No es recomendable. Los complementos (aditivos, fijaciones o dosificación correcta) garantizan el rendimiento y la durabilidad de Aislantes Térmicos.",
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
              "Láminas de acero con superficie plana, sin ondulaciones ni nervaduras",
              "Chapas onduladas para techos",
              "Bloques de hormigón planos",
              "Placas de yeso para cielorrasos"
            ],
            "correcta": 0,
            "explica": "Las chapas lisas son láminas de acero con superficie completamente plana."
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
              "Solo en caliente",
              "Solo en frío",
              "No existen tipos de laminado"
            ],
            "correcta": 0,
            "explica": "Las dos formas son: laminado en caliente (más de 900°C) y laminado en frío (temperatura ambiente)."
          },
          {
            "q": "¿Qué medidas tienen las chapas lisas?",
            "opciones": [
              "1×2 m y 1,22×2,44 m",
              "Solo 50×50 cm",
              "3×6 m",
              "10×10 m"
            ],
            "correcta": 0,
            "explica": "Medidas estándar: 1×2 m y 1,22×2,44 m."
          },
          {
            "q": "¿Para qué sectores se usan las chapas lisas?",
            "opciones": [
              "Construcción, herrería, industria automotriz y fabricación de maquinaria",
              "Solo para techos de casas",
              "Solo para hacer puertas",
              "Solo para decoración"
            ],
            "correcta": 0,
            "explica": "Se usan en construcción, herrería, industria automotriz y fabricación de maquinaria."
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
              "Se fabrica a más de 900°C, más maleable, acabado rugoso, más económico",
              "Proceso frío, muy preciso",
              "Es más caro que el frío",
              "Tiene mejor terminación superficial"
            ],
            "correcta": 0,
            "explica": "El laminado en caliente: alta temperatura (+900°C), más maleable, acabado rugoso y más económico."
          },
          {
            "q": "¿Qué caracteriza al laminado en frío?",
            "opciones": [
              "Mayor precisión, mejor terminación superficial, más resistente, mayor costo",
              "Acabado rugoso y barato",
              "Solo para estructuras pesadas",
              "Es igual al caliente"
            ],
            "correcta": 0,
            "explica": "El laminado en frío: mayor precisión, mejor acabado superficial, más resistente pero de mayor costo."
          },
          {
            "q": "¿Qué significa 'a mayor número de calibre, más fina es la chapa'?",
            "opciones": [
              "Un calibre 27 es más fina que un calibre 25",
              "Un calibre 27 es más gruesa",
              "El calibre no tiene relación con el espesor",
              "Todos los calibres son iguales"
            ],
            "correcta": 0,
            "explica": "En chapas, a mayor número de calibre, menor espesor (más fina)."
          },
          {
            "q": "¿Cuándo conviene recomendar laminado en frío?",
            "opciones": [
              "Para productos que requieren acabado fino: electrodomésticos, muebles metálicos, automotriz",
              "Para estructuras pesadas",
              "Para herrería común",
              "Para portones grandes"
            ],
            "correcta": 0,
            "explica": "El laminado en frío conviene para acabados finos: electrodomésticos, muebles metálicos, automotriz."
          },
          {
            "q": "¿Cuándo conviene recomendar laminado en caliente?",
            "opciones": [
              "Para estructuras metálicas, construcción, vigas, portones y maquinaria pesada",
              "Para electrodomésticos",
              "Para muebles finos",
              "Para automotriz de precisión"
            ],
            "correcta": 0,
            "explica": "El caliente para: estructuras metálicas, construcción, vigas, portones y maquinaria pesada."
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
              "Chapa lisa laminada en caliente: más maleable, económica e ideal para herrería",
              "Laminada en frío de mayor costo",
              "Chapa de aluminio para techos",
              "Placa de yeso"
            ],
            "correcta": 0,
            "explica": "Para herrería (portones): laminado en caliente, más maleable y económico."
          },
          {
            "q": "Un fabricante de muebles metálicos necesita chapas. ¿Qué le vendés?",
            "opciones": [
              "Chapa lisa laminada en frío: mayor precisión y mejor terminación superficial",
              "Laminada en caliente rugosa",
              "Chapa ondulada",
              "Bloque de hormigón"
            ],
            "correcta": 0,
            "explica": "Para muebles metálicos: laminado en frío por su precisión y excelente terminación superficial."
          },
          {
            "q": "¿Qué complementos vendés junto con chapas lisas?",
            "opciones": [
              "Discos de corte, electrodos, pintura antióxido, tornillos",
              "Solo pintura",
              "Griferías",
              "Bovedillas"
            ],
            "correcta": 0,
            "explica": "Complementos: discos de corte, electrodos, pintura antióxido y tornillos."
          },
          {
            "q": "Un cliente pregunta qué calibre es más resistente: 20 o 25. ¿Qué respondés?",
            "opciones": [
              "El calibre 20 es más grueso y resistente (menor número = mayor espesor)",
              "El 25 es más grueso",
              "Son iguales",
              "El número no importa"
            ],
            "correcta": 0,
            "explica": "A menor número de calibre, mayor espesor y resistencia. El 20 es más grueso que el 25."
          },
          {
            "q": "¿Para qué tipo de trabajo se usa la chapa lisa en zinguería?",
            "opciones": [
              "Canaletas, bajadas de agua y revestimientos metálicos",
              "Solo para techos ondulados",
              "Para hacer ladrillos",
              "Para pisos"
            ],
            "correcta": 0,
            "explica": "En zinguería: canaletas, bajadas de agua y revestimientos metálicos."
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
              "Sí, Chapas Lisas cuenta con certificaciones de norma IRAM y calidad garantizada que evitan fisuras o fallas estructurales a futuro.",
              "No importa la marca, todos los productos de obra gruesa son exactamente iguales.",
              "Conviene comprar siempre lo más barato sin mirar la calidad.",
              "Le recomendás que no use ningún material y deje la pared como está."
            ],
            "correcta": 0,
            "explica": "La calidad estructural no se negocia: usar materiales normados previene rajaduras y reclamos graves."
          },
          {
            "q": "El cliente insiste: \"No quiero gastar en complementos para Chapas Lisas, ¿puedo obviarlos?\"",
            "opciones": [
              "No es recomendable. Los complementos (aditivos, fijaciones o dosificación correcta) garantizan el rendimiento y la durabilidad de Chapas Lisas.",
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
              "Sinusoidal (ondulada) y trapezoidal (T101)",
              "Solo planas",
              "Solo redondas",
              "Solo triangulares"
            ],
            "correcta": 0,
            "explica": "Las dos formas principales: sinusoidal (ondulada) y trapezoidal (T101 y similares)."
          },
          {
            "q": "¿Cuáles son los tipos de recubrimiento disponibles?",
            "opciones": [
              "Galvanizada, cincalum/aluminizada, prepintada y traslúcida",
              "Solo galvanizada",
              "Solo pintada",
              "Solo transparente"
            ],
            "correcta": 0,
            "explica": "4 tipos: galvanizada (zinc), cincalum (aluminio+zinc), prepintada (colores) y traslúcida (luz natural)."
          },
          {
            "q": "¿Qué recubrimiento ofrece la mayor durabilidad?",
            "opciones": [
              "Cincalum/aluminizada: mezcla de aluminio y zinc",
              "Galvanizada básica",
              "Prepintada común",
              "Sin recubrimiento"
            ],
            "correcta": 0,
            "explica": "El cincalum (aluminio + zinc) ofrece mayor durabilidad que la galvanizada básica."
          },
          {
            "q": "¿Para qué sirven las chapas traslúcidas?",
            "opciones": [
              "Permiten el paso de luz natural sin abrir ventanas",
              "Para aislar del frío",
              "Para impermeabilizar cimientos",
              "Son decorativas solamente"
            ],
            "correcta": 0,
            "explica": "Las traslúcidas (poliéster o fibra de vidrio) permiten iluminación natural sin ventanas."
          },
          {
            "q": "¿Qué calibres de chapas para techos están disponibles?",
            "opciones": [
              "C25 (0,50 mm) y C27 (0,40 mm)",
              "Solo C10",
              "Solo C50",
              "No hay calibres diferentes"
            ],
            "correcta": 0,
            "explica": "Los calibres disponibles: C25 (0,50 mm) y C27 (0,40 mm). Menor número = mayor espesor."
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
              "Si se deja al sol, se adhiere permanentemente y arruina la estética",
              "No tiene film protector",
              "Se puede dejar siempre",
              "Solo se retira después de un año"
            ],
            "correcta": 0,
            "explica": "El film protector se adhiere al sol y arruina la estética. Debe retirarse inmediatamente tras la instalación."
          },
          {
            "q": "¿Por qué hay que barrer la chapa después de colocarla?",
            "opciones": [
              "Para quitar virutas o restos metálicos que podrían oxidarse y manchar la chapa",
              "Por estética solamente",
              "No es necesario barrer",
              "Solo si llueve"
            ],
            "correcta": 0,
            "explica": "Las virutas metálicas del corte pueden oxidarse y manchar permanentemente la chapa."
          },
          {
            "q": "¿Las chapas prepintadas pueden dejarse apiladas a la intemperie?",
            "opciones": [
              "No, la humedad entre las chapas puede dañar la pintura",
              "Sí, sin problema",
              "Solo durante un año",
              "La intemperie las mejora"
            ],
            "correcta": 0,
            "explica": "Las prepintadas NO deben apilarse a la intemperie: la humedad atrapada daña la pintura."
          },
          {
            "q": "Si un cliente busca durabilidad y resistencia, ¿qué chapa recomendás?",
            "opciones": [
              "Cincalum o prepintada en calibre 25",
              "Galvanizada C27 básica",
              "Traslúcida",
              "Cualquiera, son todas iguales"
            ],
            "correcta": 0,
            "explica": "Para máxima durabilidad: cincalum o prepintada en calibre C25 (0,50 mm, más grueso)."
          },
          {
            "q": "¿Qué complementos se venden con las chapas?",
            "opciones": [
              "Tornillos autoperforantes con arandela de neopreno, cumbreras, canaletas y aislantes",
              "Solo clavos comunes",
              "Solo cemento",
              "Griferías"
            ],
            "correcta": 0,
            "explica": "Complementos: tornillos autoperforantes, cumbreras, canaletas, aislantes, selladores y perfiles C."
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
              "Chapa galvanizada: la opción más económica e ideal para funcionalidad básica",
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
              "Chapa prepintada: variedad de colores + protección extra por la pintura",
              "Galvanizada sin pintar",
              "Solo traslúcida",
              "Chapa lisa sin forma"
            ],
            "correcta": 0,
            "explica": "La prepintada ofrece variedad de colores y protección extra sobre el recubrimiento base."
          },
          {
            "q": "Un galpón necesita luz natural sin ventanas. ¿Qué solución ofrecés?",
            "opciones": [
              "Intercalar chapas traslúcidas entre las chapas normales del techo",
              "Hacer agujeros en el techo",
              "Poner solo chapas galvanizadas",
              "Instalar luces eléctricas únicamente"
            ],
            "correcta": 0,
            "explica": "Las chapas traslúcidas intercaladas permiten iluminación natural sin abrir ventanas."
          },
          {
            "q": "¿Qué venta cruzada completa ofrecés con las chapas de techo?",
            "opciones": [
              "Tornillos autoperforantes + cumbreras + canaletas + aislante (lana de vidrio o espuma aluminizada) + selladores",
              "Solo las chapas",
              "Solo clavos",
              "Solo pintura"
            ],
            "correcta": 0,
            "explica": "Venta cruzada: tornillos, cumbreras, canaletas, aislante, selladores y perfiles C."
          },
          {
            "q": "¿Qué regla de calibre aplica a las chapas?",
            "opciones": [
              "A menor número de calibre, mayor espesor y resistencia (C25 > C27)",
              "A mayor número, más gruesa",
              "Son todos iguales",
              "El calibre no importa"
            ],
            "correcta": 0,
            "explica": "Menor número de calibre = mayor espesor y resistencia. C25 (0,50 mm) es más gruesa que C27 (0,40 mm)."
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
              "Sí, Chapas para Techos cuenta con certificaciones de norma IRAM y calidad garantizada que evitan fisuras o fallas estructurales a futuro.",
              "No importa la marca, todos los productos de obra gruesa son exactamente iguales.",
              "Conviene comprar siempre lo más barato sin mirar la calidad.",
              "Le recomendás que no use ningún material y deje la pared como está."
            ],
            "correcta": 0,
            "explica": "La calidad estructural no se negocia: usar materiales normados previene rajaduras y reclamos graves."
          },
          {
            "q": "El cliente insiste: \"No quiero gastar en complementos para Chapas para Techos, ¿puedo obviarlos?\"",
            "opciones": [
              "No es recomendable. Los complementos (aditivos, fijaciones o dosificación correcta) garantizan el rendimiento y la durabilidad de Chapas para Techos.",
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
              "Para cortar madera",
              "Para cortar tela",
              "Para pulir vidrio"
            ],
            "correcta": 0,
            "explica": "Los discos diamantados cortan materiales duros: cerámica, porcelanato, ladrillos y hormigón."
          },
          {
            "q": "¿Qué marca de discos trabaja Rosso?",
            "opciones": [
              "Norton (Saint-Gobain)",
              "Holcim",
              "Ferrum",
              "Tensolite"
            ],
            "correcta": 0,
            "explica": "Trabajamos discos Norton de Saint-Gobain."
          },
          {
            "q": "¿Qué tipo de electrodo es el más versátil para herrería general?",
            "opciones": [
              "E6013 (Punta Azul)",
              "E7018",
              "E6010",
              "Ninguno"
            ],
            "correcta": 0,
            "explica": "El E6013 (Punta Azul) es el más versátil y fácil de usar para herrería general."
          },
          {
            "q": "¿En qué medidas vienen los discos de corte?",
            "opciones": [
              "115 mm (uso general) y 230 mm (cortes más largos)",
              "Solo 50 mm",
              "Solo 500 mm",
              "No tienen medida estándar"
            ],
            "correcta": 0,
            "explica": "Medidas comunes: 115 mm (uso general) y 230 mm (cortes más largos)."
          },
          {
            "q": "¿Por qué evitar discos genéricos de baja calidad?",
            "opciones": [
              "Se gastan rápido, cortan mal y son más peligrosos (roturas)",
              "Son mejores y más baratos",
              "No hay diferencia",
              "Los genéricos duran más"
            ],
            "correcta": 0,
            "explica": "Los genéricos se gastan rápido, cortan mal y son más peligrosos por roturas o desprendimientos."
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
              "Alta resistencia mecánica para estructuras críticas; debe conservarse seco",
              "Para herrería liviana",
              "Para soldar plástico",
              "Para cortar chapa"
            ],
            "correcta": 0,
            "explica": "El E7018 es para estructuras críticas con alta resistencia mecánica. Hay que conservarlo seco."
          },
          {
            "q": "¿Qué electrodo tiene alta penetración para soldaduras exigentes?",
            "opciones": [
              "E6010 / E6011",
              "E6013",
              "E7018",
              "Ninguno"
            ],
            "correcta": 0,
            "explica": "Los E6010/E6011 tienen alta penetración, útiles en soldaduras exigentes, caños o reparaciones."
          },
          {
            "q": "¿Qué pasa si se mojan los electrodos E7018?",
            "opciones": [
              "Pierden sus propiedades y pueden generar soldaduras defectuosas",
              "Funcionan mejor mojados",
              "No pasa nada",
              "Se secan solos"
            ],
            "correcta": 0,
            "explica": "Los E7018 son sensibles a la humedad: mojados generan soldaduras defectuosas."
          },
          {
            "q": "¿Qué diferencia hay entre discos para metal y discos diamantados?",
            "opciones": [
              "Los de metal son abrasivos (óxido de aluminio); los diamantados tienen partículas de diamante para materiales duros",
              "Son iguales",
              "Los diamantados son para metal",
              "Los de metal son para cerámica"
            ],
            "correcta": 0,
            "explica": "Los de metal son abrasivos; los diamantados tienen partículas de diamante para materiales duros."
          },
          {
            "q": "¿Qué ventajas ofrecen las marcas reconocidas de discos?",
            "opciones": [
              "Más cortes por disco, más velocidad, precisión y seguridad",
              "Son iguales a las genéricas",
              "Solo son más caras sin beneficio",
              "Duran menos"
            ],
            "correcta": 0,
            "explica": "Marcas reconocidas: más cortes/disco, más velocidad, precisión y mayor seguridad."
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
              "Disco diamantado: el único que corta porcelanato sin romperlo",
              "Disco para metal abrasivo",
              "Disco de lija",
              "No se puede cortar porcelanato"
            ],
            "correcta": 0,
            "explica": "Para porcelanato: disco diamantado, reforzado con partículas de diamante para cortes precisos."
          },
          {
            "q": "Un herrero te pide electrodos para una reja común. ¿Cuál le recomendás?",
            "opciones": [
              "E6013 (Punta Azul): versátil y fácil de usar para herrería general",
              "E7018 para estructura crítica",
              "E6010 de alta penetración",
              "No le vendés electrodos"
            ],
            "correcta": 0,
            "explica": "Para herrería general (rejas): E6013 Punta Azul, el más versátil y fácil de usar."
          },
          {
            "q": "Un constructor necesita cortar hierros y ladrillos. ¿Qué discos le vendés?",
            "opciones": [
              "Discos abrasivos para metal + discos diamantados para ladrillos: dos tipos diferentes",
              "Solo disco diamantado para todo",
              "Solo disco de metal para todo",
              "No se pueden cortar ambos"
            ],
            "correcta": 0,
            "explica": "Para hierros: disco abrasivo. Para ladrillos: disco diamantado. Son dos tipos distintos."
          },
          {
            "q": "Un cliente va a soldar una estructura metálica crítica. ¿Qué electrodo le recomendás?",
            "opciones": [
              "E7018 (Básico): alta resistencia mecánica y bajo hidrógeno",
              "E6013 común",
              "E6010 de penetración",
              "Cualquiera sirve igual"
            ],
            "correcta": 0,
            "explica": "Para estructuras críticas: E7018 por su alta resistencia mecánica y bajo contenido de hidrógeno."
          },
          {
            "q": "¿Cuál es la venta cruzada cuando vendés discos de corte?",
            "opciones": [
              "Amoladora, lentes de seguridad, guantes y disco de repuesto",
              "Solo el disco",
              "Cemento",
              "Pintura"
            ],
            "correcta": 0,
            "explica": "Al vender discos: amoladora, protección personal (lentes, guantes) y discos de repuesto."
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
              "Porque está diseñado para uso profesional/intensivo con materiales de alta resistencia, mayor durabilidad y seguridad para el usuario.",
              "Por la marca nomás, rinde exactamente igual.",
              "Porque viene en una caja más bonita.",
              "No hay ninguna diferencia técnica."
            ],
            "correcta": 0,
            "explica": "Las herramientas e insumos profesionales ofrecen mejor torque, menor desgaste y mayor seguridad de trabajo."
          },
          {
            "q": "Cliente en mostrador: \"¿Puedo usar la misma herramienta o consumible de Herramientas y Consumibles para otro material totalmente distinto?\"",
            "opciones": [
              "No se recomienda. Cada insumo está optimizado para su superficie específica; usarlo en otra puede arruinar el producto y ser peligroso.",
              "Sí, sirve para absolutamente todo.",
              "Sí, las herramientas no tienen especificaciones técnicas.",
              "Solo si se moja antes."
            ],
            "correcta": 0,
            "explica": "Usar el consumible o herramienta correcta evita desportilladuras, accidentes y roturas prematuras."
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
              "Piezas que permiten abrir, cerrar, trabar y asegurar puertas y ventanas",
              "Ladrillos especiales para muros",
              "Cables eléctricos para instalaciones",
              "Pinturas decorativas"
            ],
            "correcta": 0,
            "explica": "Los herrajes son piezas clave para abrir, cerrar, trabar y asegurar puertas y ventanas."
          },
          {
            "q": "¿Qué marca de herrajes trabaja Rosso?",
            "opciones": [
              "Ri-Al-Pa",
              "Holcim",
              "Weber",
              "Gerdau"
            ],
            "correcta": 0,
            "explica": "Trabajamos herrajes marca Ri-Al-Pa."
          },
          {
            "q": "¿Qué tipos de cerraduras vendemos?",
            "opciones": [
              "Interior (simples) y exterior (de seguridad con cilindro)",
              "Solo interior",
              "Solo candados",
              "No vendemos cerraduras"
            ],
            "correcta": 0,
            "explica": "Cerraduras de interior (simples) y exterior (de seguridad con cilindro)."
          },
          {
            "q": "¿Para qué sirven los carros corredizos?",
            "opciones": [
              "Para puertas corredizas: permiten un desplazamiento suave y duradero",
              "Para ventanas fijas",
              "Para decoración de paredes",
              "Para instalar cañerías"
            ],
            "correcta": 0,
            "explica": "Los carros corredizos son para puertas corredizas, asegurando un movimiento suave y duradero."
          },
          {
            "q": "¿Qué complementos se venden con los herrajes?",
            "opciones": [
              "Puertas, ventanas, tornillos y fijaciones",
              "Solo cemento",
              "Solo pintura",
              "Solo ladrillos"
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
              "Solo es decorativa",
              "No importa la calidad",
              "Todas son iguales"
            ],
            "correcta": 0,
            "explica": "Una buena bisagra asegura un abrir y cerrar sin esfuerzo, con durabilidad."
          },
          {
            "q": "¿Qué tipo de cerradura protege mejor el hogar?",
            "opciones": [
              "Cerradura exterior de seguridad con cilindro",
              "Cerradura interior simple",
              "Candado común",
              "Picaporte sin llave"
            ],
            "correcta": 0,
            "explica": "La cerradura exterior de seguridad con cilindro ofrece mayor protección y resistencia."
          },
          {
            "q": "¿Cómo influye la manija en la puerta?",
            "opciones": [
              "Le da personalidad y estilo, además de funcionalidad",
              "Solo sirve para abrir",
              "No importa cuál se elija",
              "Todas son iguales"
            ],
            "correcta": 0,
            "explica": "Una manija bien elegida le da personalidad a la puerta además de cumplir su función."
          },
          {
            "q": "¿Para qué tipos de puertas se usan bisagras de libro?",
            "opciones": [
              "Para puertas de interior y exterior que abren sobre un eje",
              "Solo para puertas corredizas",
              "Para ventanas",
              "Para cajones"
            ],
            "correcta": 0,
            "explica": "Las bisagras de libro permiten movimiento suave en puertas de interior y exterior."
          },
          {
            "q": "¿Qué argumento clave usás para vender herrajes de calidad?",
            "opciones": [
              "'No se ven tanto como la puerta, ¡pero se sienten!' Una buena bisagra y cerradura hacen la diferencia",
              "Son solo un gasto extra",
              "Todos son iguales sin importar la marca",
              "No importa la calidad"
            ],
            "correcta": 0,
            "explica": "Los herrajes no se ven pero se sienten: la calidad marca la diferencia en el uso diario."
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
              "Cerradura de seguridad con cilindro + bisagras resistentes + manijón exterior",
              "Solo un picaporte simple",
              "Bisagras de interior",
              "Carro corredizo"
            ],
            "correcta": 0,
            "explica": "Para puerta exterior: cerradura de seguridad + bisagras resistentes + manijón."
          },
          {
            "q": "Un cliente quiere una puerta corrediza. ¿Qué herrajes necesita?",
            "opciones": [
              "Carro corredizo con guía + tirador + tope",
              "Bisagras de libro",
              "Cerradura de 3 puntos",
              "Solo un candado"
            ],
            "correcta": 0,
            "explica": "Para corrediza: carro corredizo con guía, tirador y tope."
          },
          {
            "q": "¿Cómo combinás la venta de herrajes con otros productos?",
            "opciones": [
              "Al vender puertas/ventanas: siempre ofrecer bisagras, cerraduras, manijas y tornillos de fijación",
              "No se combinan con nada",
              "Solo con cemento",
              "Solo con pintura"
            ],
            "correcta": 0,
            "explica": "Siempre que vendas puertas/ventanas: ofrecé bisagras, cerraduras, manijas y fijaciones."
          },
          {
            "q": "Un cliente quiere renovar la apariencia de sus puertas sin cambiarlas. ¿Qué le proponés?",
            "opciones": [
              "Cambiar las manijas, picaportes y cerraduras: renueva el look con baja inversión",
              "Demoler y hacer puertas nuevas",
              "Solo pintar las manijas viejas",
              "No se puede renovar"
            ],
            "correcta": 0,
            "explica": "Cambiar herrajes (manijas, picaportes, cerraduras) renueva la apariencia con baja inversión."
          },
          {
            "q": "¿Qué le decís a un cliente que quiere la cerradura más barata?",
            "opciones": [
              "Que la seguridad no es donde ahorrar: una buena cerradura protege el hogar y dura más",
              "Que todas son iguales",
              "Que compre la más barata sin dudar",
              "Que no necesita cerradura"
            ],
            "correcta": 0,
            "explica": "La seguridad no es donde ahorrar: una buena cerradura protege el hogar y tiene mayor durabilidad."
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
              "Porque está diseñado para uso profesional/intensivo con materiales de alta resistencia, mayor durabilidad y seguridad para el usuario.",
              "Por la marca nomás, rinde exactamente igual.",
              "Porque viene en una caja más bonita.",
              "No hay ninguna diferencia técnica."
            ],
            "correcta": 0,
            "explica": "Las herramientas e insumos profesionales ofrecen mejor torque, menor desgaste y mayor seguridad de trabajo."
          },
          {
            "q": "Cliente en mostrador: \"¿Puedo usar la misma herramienta o consumible de Herrajes para otro material totalmente distinto?\"",
            "opciones": [
              "No se recomienda. Cada insumo está optimizado para su superficie específica; usarlo en otra puede arruinar el producto y ser peligroso.",
              "Sí, sirve para absolutamente todo.",
              "Sí, las herramientas no tienen especificaciones técnicas.",
              "Solo si se moja antes."
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
              "Porque se necesitan tarugos especiales que se traben detrás de la placa hueca",
              "Porque los comunes son mejores",
              "Todos los tarugos son iguales",
              "El yeso no acepta tarugos"
            ],
            "correcta": 0,
            "explica": "En drywall se necesitan tarugos especiales (autoperforantes, basculantes) que se traban detrás de la placa."
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
              "Tarugos de nylon con aletas que se expanden dentro de las paredes del ladrillo",
              "Tarugos comunes de plástico",
              "Clavos comunes",
              "No se pueden fijar cosas en ladrillo hueco"
            ],
            "correcta": 0,
            "explica": "Para ladrillo hueco: tarugos de nylon con aletas o tarugos químicos (resina + varilla)."
          },
          {
            "q": "¿Qué son los tornillos autoperforantes hexagonales?",
            "opciones": [
              "Tornillos con punta mecha y cabeza hexagonal para unir chapas o perfiles metálicos",
              "Tornillos para madera",
              "Clavos especiales",
              "Tornillos de plástico"
            ],
            "correcta": 0,
            "explica": "Los autoperforantes hexagonales perforan y fijan chapas o perfiles metálicos sin pre-agujero."
          },
          {
            "q": "¿Qué es un Tel Fix?",
            "opciones": [
              "Tornillo multipropósito para madera, yeso o metal",
              "Un tipo de pegamento",
              "Una herramienta eléctrica",
              "Una llave de paso"
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
              "Para cargas pesadas en ladrillo hueco: resina + varilla roscada",
              "Solo para cargas livianas",
              "Para decoración",
              "Para madera"
            ],
            "correcta": 0,
            "explica": "Los tarugos químicos (resina + varilla) son para cargas pesadas en ladrillo hueco."
          },
          {
            "q": "¿Qué tipos de tarugos para drywall existen?",
            "opciones": [
              "Autoperforantes (caracol), basculantes (alas) y de expansión, en plástico o metal",
              "Solo de plástico",
              "Solo de metal",
              "No existen tarugos para drywall"
            ],
            "correcta": 0,
            "explica": "Para drywall: autoperforantes, basculantes y de expansión, en plástico o metálicos."
          },
          {
            "q": "¿Qué complementos se venden con tarugos para ladrillo hueco?",
            "opciones": [
              "Tornillos, mechas, taladro y pistola aplicadora (para químicos)",
              "Solo cemento",
              "Solo pintura",
              "Griferías"
            ],
            "correcta": 0,
            "explica": "Complementos: tornillos, mechas, taladro y pistola aplicadora (para tarugos químicos)."
          },
          {
            "q": "Un cliente quiere colgar un cuadro pesado en pared de yeso. ¿Qué le vendés?",
            "opciones": [
              "Tarugo basculante o de expansión metálico para drywall",
              "Clavo común",
              "Tarugo de plástico simple",
              "Cemento de contacto"
            ],
            "correcta": 0,
            "explica": "Para cargas pesadas en drywall: tarugo basculante o de expansión metálico."
          },
          {
            "q": "¿Por qué es clave elegir la fijación correcta?",
            "opciones": [
              "Para evitar roturas, desprendimientos y accidentes",
              "No es importante",
              "Todas las fijaciones son iguales",
              "Solo importa el precio"
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
              "Tarugos químicos (resina + varilla roscada) por la carga pesada en hueco",
              "Clavos comunes",
              "Tarugo plástico simple",
              "Cinta doble faz"
            ],
            "correcta": 0,
            "explica": "Para cargas pesadas en ladrillo hueco: tarugos químicos con resina + varilla roscada."
          },
          {
            "q": "Un instalador necesita fijar chapas a perfiles metálicos. ¿Qué tornillo le vendés?",
            "opciones": [
              "Autoperforante hexagonal con punta mecha",
              "Tornillo para madera",
              "Clavo punta París",
              "Tarugo de nylon"
            ],
            "correcta": 0,
            "explica": "Para chapa-perfil: tornillo autoperforante hexagonal con punta mecha."
          },
          {
            "q": "¿Qué venta cruzada hacés al vender tarugos?",
            "opciones": [
              "Tornillos compatibles, mechas del diámetro correcto, taladro si no tiene",
              "Solo los tarugos",
              "Pintura",
              "Griferías"
            ],
            "correcta": 0,
            "explica": "Al vender tarugos: tornillos compatibles, mechas del diámetro correcto y taladro."
          },
          {
            "q": "Un cliente no sabe qué tipo de pared tiene. ¿Cómo lo ayudás?",
            "opciones": [
              "Le preguntás si suena hueco al golpear (drywall/hueco) o sólido (macizo), y recomendás el tarugo acorde",
              "Le vendés cualquier tarugo",
              "Le decís que no importa",
              "Le vendés cemento"
            ],
            "correcta": 0,
            "explica": "Golpear la pared ayuda a identificar si es hueca o maciza para elegir el tarugo correcto."
          },
          {
            "q": "¿Cuál es la regla de oro de las fijaciones?",
            "opciones": [
              "No todos los tarugos sirven para todo: cada tipo de pared y carga requiere su fijación específica",
              "Un solo tarugo sirve para todo",
              "El más barato siempre funciona",
              "No importa cuál se use"
            ],
            "correcta": 0,
            "explica": "La regla: cada tipo de pared y carga requiere su fijación específica."
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
              "Porque está diseñado para uso profesional/intensivo con materiales de alta resistencia, mayor durabilidad y seguridad para el usuario.",
              "Por la marca nomás, rinde exactamente igual.",
              "Porque viene en una caja más bonita.",
              "No hay ninguna diferencia técnica."
            ],
            "correcta": 0,
            "explica": "Las herramientas e insumos profesionales ofrecen mejor torque, menor desgaste y mayor seguridad de trabajo."
          },
          {
            "q": "Cliente en mostrador: \"¿Puedo usar la misma herramienta o consumible de Fijaciones (Tarugos y Tornillos) para otro material totalmente distinto?\"",
            "opciones": [
              "No se recomienda. Cada insumo está optimizado para su superficie específica; usarlo en otra puede arruinar el producto y ser peligroso.",
              "Sí, sirve para absolutamente todo.",
              "Sí, las herramientas no tienen especificaciones técnicas.",
              "Solo si se moja antes."
            ],
            "correcta": 0,
            "explica": "Usar el consumible o herramienta correcta evita desportilladuras, accidentes y roturas prematuras."
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
              "Para carpintería: fijaciones que no se notan (molduras, zócalos, muebles)",
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
              "Para fijar chapas de techo: la cabeza de plomo sella el orificio evitando filtraciones",
              "Para carpintería fina",
              "Para pegar ladrillos",
              "Para decoración"
            ],
            "correcta": 0,
            "explica": "Los clavos de acero con cabeza de plomo son para chapas: fijan y sellan en un solo paso."
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
              "Para que la fijación no se note, logrando una terminación prolija y discreta",
              "Para que sean más baratos",
              "No tienen cabeza",
              "Para ser más pesados"
            ],
            "correcta": 0,
            "explica": "La cabeza pequeña permite una terminación prolija y discreta en carpintería."
          },
          {
            "q": "¿Cómo sella el orificio un clavo con cabeza de plomo?",
            "opciones": [
              "La cabeza de plomo se moldea al clavar, sellando automáticamente el agujero",
              "Se agrega silicona aparte",
              "No sella, solo fija",
              "Se pega con cemento"
            ],
            "correcta": 0,
            "explica": "La cabeza de plomo moldeable sella automáticamente el orificio al clavar."
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
              "Chapas para techos, arandelas plásticas y martillos adecuados",
              "Solo cemento",
              "Griferías",
              "Pintura"
            ],
            "correcta": 0,
            "explica": "Complementos: chapas para techos, arandelas plásticas y martillos adecuados."
          },
          {
            "q": "¿Los clavos de cabeza de plomo resisten la intemperie?",
            "opciones": [
              "Sí, tienen alta durabilidad frente a la intemperie",
              "No, se oxidan rápido",
              "Solo duran un mes",
              "No están diseñados para exterior"
            ],
            "correcta": 0,
            "explica": "Los clavos de cabeza de plomo tienen alta durabilidad frente a la intemperie."
          },
          {
            "q": "¿Para qué tipo de trabajo son ideales los Punta París?",
            "opciones": [
              "Trabajos donde la fijación no debe ser visible: carpintería fina",
              "Para fijar chapas pesadas",
              "Para hormigón armado",
              "Para soldadura"
            ],
            "correcta": 0,
            "explica": "Son ideales para fijaciones discretas en carpintería fina."
          },
          {
            "q": "¿En qué variedad vienen los clavos Punta París?",
            "opciones": [
              "En distintos largos y grosores para diferentes aplicaciones",
              "Solo un tamaño",
              "Solo en cobre",
              "No vienen en variedad"
            ],
            "correcta": 0,
            "explica": "Vienen en variedad de largos y grosores para adaptarse a diferentes aplicaciones."
          },
          {
            "q": "Un techista necesita fijar chapas galvanizadas. ¿Qué le vendés?",
            "opciones": [
              "Clavos de acero con cabeza de plomo para fijar y sellar en un paso",
              "Clavos Punta París",
              "Tornillos para madera",
              "Pegamento de contacto"
            ],
            "correcta": 0,
            "explica": "Para chapas de techo: clavos de acero con cabeza de plomo que fijan y sellan."
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
              "Clavos Punta París: cabeza pequeña para terminación discreta",
              "Clavos de cabeza de plomo",
              "Tornillos hexagonales",
              "Tarugos químicos"
            ],
            "correcta": 0,
            "explica": "Punta París: cabeza pequeña, perfectos para fijaciones invisibles en molduras y zócalos."
          },
          {
            "q": "¿Cuál es la venta cruzada al vender clavos para techos?",
            "opciones": [
              "Chapas, arandelas, aislante, cumbreras y martillos",
              "Solo los clavos",
              "Cemento",
              "Pintura interior"
            ],
            "correcta": 0,
            "explica": "Venta cruzada: chapas, arandelas, aislante, cumbreras y martillos adecuados."
          },
          {
            "q": "Un cliente pregunta si puede usar clavos comunes en chapas galvanizadas. ¿Qué le decís?",
            "opciones": [
              "No es recomendable: sin la cabeza de plomo habrá filtraciones por los orificios",
              "Sí, son iguales",
              "Mejor usar pegamento",
              "Cualquier clavo sirve"
            ],
            "correcta": 0,
            "explica": "Los clavos comunes no sellan el orificio como los de cabeza de plomo, generando filtraciones."
          },
          {
            "q": "¿Cuándo recomendás tornillos autoperforantes en lugar de clavos de cabeza de plomo?",
            "opciones": [
              "En chapas sobre perfiles metálicos o cuando se necesita poder desmontar",
              "Nunca, los clavos siempre son mejores",
              "Solo por estética",
              "Los autoperforantes no sirven para chapas"
            ],
            "correcta": 0,
            "explica": "Los autoperforantes son mejores sobre perfiles metálicos y cuando se necesita poder desmontar."
          },
          {
            "q": "¿Qué clave de venta usás para los clavos de cabeza de plomo?",
            "opciones": [
              "'Fijan y sellan en un solo paso': alta durabilidad frente a la intemperie",
              "Son los más baratos",
              "Son decorativos",
              "Solo sirven para madera"
            ],
            "correcta": 0,
            "explica": "El argumento clave: fijan y sellan en un solo paso, con alta durabilidad a la intemperie."
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
              "Porque está diseñado para uso profesional/intensivo con materiales de alta resistencia, mayor durabilidad y seguridad para el usuario.",
              "Por la marca nomás, rinde exactamente igual.",
              "Porque viene en una caja más bonita.",
              "No hay ninguna diferencia técnica."
            ],
            "correcta": 0,
            "explica": "Las herramientas e insumos profesionales ofrecen mejor torque, menor desgaste y mayor seguridad de trabajo."
          },
          {
            "q": "Cliente en mostrador: \"¿Puedo usar la misma herramienta o consumible de Clavos para otro material totalmente distinto?\"",
            "opciones": [
              "No se recomienda. Cada insumo está optimizado para su superficie específica; usarlo en otra puede arruinar el producto y ser peligroso.",
              "Sí, sirve para absolutamente todo.",
              "Sí, las herramientas no tienen especificaciones técnicas.",
              "Solo si se moja antes."
            ],
            "correcta": 0,
            "explica": "Usar el consumible o herramienta correcta evita desportilladuras, accidentes y roturas prematuras."
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
              "Para renovar el aire y evitar acumulación de gases peligrosos",
              "Solo por estética",
              "Para decorar la pared",
              "No son obligatorias"
            ],
            "correcta": 0,
            "explica": "Las rejillas son obligatorias con artefactos a gas para renovar el aire y evitar acumulación de gases."
          },
          {
            "q": "¿Qué marca de rejillas trabaja Rosso?",
            "opciones": [
              "Novo (Aberturas de Aluminio)",
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
              "Solo madera",
              "Solo plástico",
              "Solo vidrio"
            ],
            "correcta": 0,
            "explica": "Las rejillas vienen en aluminio o chapa esmaltada."
          },
          {
            "q": "¿Qué problemas previene una buena ventilación?",
            "opciones": [
              "Condensación, moho, olores encerrados y riesgos por gases",
              "Solo malos olores",
              "Solo humedad",
              "No previene nada"
            ],
            "correcta": 0,
            "explica": "Buena ventilación previene condensación, moho, olores y riesgos por acumulación de gases."
          },
          {
            "q": "¿Cuándo hay que ofrecer rejillas al cliente?",
            "opciones": [
              "Al vender estufas, termotanques o calefones",
              "Solo si lo pide",
              "Nunca",
              "Solo con aire acondicionado"
            ],
            "correcta": 0,
            "explica": "Siempre ofrecé rejillas al vender estufas, termotanques o calefones."
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
              "Fijas y regulables, en distintos tamaños",
              "Solo fijas",
              "Solo regulables",
              "Solo redondas"
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
              "En puertas, muros o techos; también en muebles de cocina, baños y lavaderos",
              "Solo en ventanas",
              "Solo en pisos",
              "Solo en techos"
            ],
            "correcta": 0,
            "explica": "Se colocan en puertas, muros, techos, muebles de cocina, baños, lavaderos y depósitos."
          },
          {
            "q": "¿Qué complementos se venden con las rejillas?",
            "opciones": [
              "Tornillos, selladores o adhesivos de fijación",
              "Solo cemento",
              "Griferías",
              "Chapas de techo"
            ],
            "correcta": 0,
            "explica": "Complementos: tornillos, selladores o adhesivos de fijación."
          },
          {
            "q": "¿Para qué sirve una rejilla regulable?",
            "opciones": [
              "Permite controlar el flujo de aire según la necesidad",
              "No tiene diferencia con la fija",
              "Solo es más cara",
              "Solo para exterior"
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
              "Rejilla de ventilación reglamentaria: es obligatoria para la instalación segura del calefón",
              "No necesita rejilla",
              "Solo un extractor",
              "Una ventana"
            ],
            "correcta": 0,
            "explica": "Al vender calefón: la rejilla de ventilación es OBLIGATORIA por normativa de gas."
          },
          {
            "q": "Un baño sin ventana necesita ventilación. ¿Qué le recomendás?",
            "opciones": [
              "Rejilla en la puerta o muro + extractor eléctrico si es posible",
              "Nada, los baños no necesitan ventilación",
              "Solo pintura anti-humedad",
              "Solo desodorante de ambiente"
            ],
            "correcta": 0,
            "explica": "Baño sin ventana: rejilla + extractor para evitar humedad, moho y malos olores."
          },
          {
            "q": "¿Cuál es la consecuencia de no tener ventilación con artefactos a gas?",
            "opciones": [
              "Riesgo de intoxicación por monóxido de carbono, que puede ser mortal",
              "Solo mal olor",
              "Solo condensación",
              "No hay consecuencia"
            ],
            "correcta": 0,
            "explica": "Sin ventilación con gas: riesgo de intoxicación por monóxido de carbono, potencialmente mortal."
          },
          {
            "q": "¿En qué otro momento ofrecés rejillas además de con artefactos a gas?",
            "opciones": [
              "Para cocinas, baños ciegos, lavaderos, depósitos y muebles de cocina",
              "Solo con estufas",
              "Nunca más",
              "Solo con aires acondicionados"
            ],
            "correcta": 0,
            "explica": "Ofrecé rejillas para cocinas, baños ciegos, lavaderos, depósitos y muebles de cocina."
          },
          {
            "q": "¿Qué argumento clave usás para vender rejillas?",
            "opciones": [
              "'Buena ventilación = más seguridad, menos humedad y mejor calidad de aire'",
              "Son solo decorativas",
              "No tienen argumento especial",
              "Solo las obligatorias se venden"
            ],
            "correcta": 0,
            "explica": "Argumento: buena ventilación = más seguridad, menos humedad y mejor calidad de aire."
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
              "Porque está diseñado para uso profesional/intensivo con materiales de alta resistencia, mayor durabilidad y seguridad para el usuario.",
              "Por la marca nomás, rinde exactamente igual.",
              "Porque viene en una caja más bonita.",
              "No hay ninguna diferencia técnica."
            ],
            "correcta": 0,
            "explica": "Las herramientas e insumos profesionales ofrecen mejor torque, menor desgaste y mayor seguridad de trabajo."
          },
          {
            "q": "Cliente en mostrador: \"¿Puedo usar la misma herramienta o consumible de Ventilación (Rejillas) para otro material totalmente distinto?\"",
            "opciones": [
              "No se recomienda. Cada insumo está optimizado para su superficie específica; usarlo en otra puede arruinar el producto y ser peligroso.",
              "Sí, sirve para absolutamente todo.",
              "Sí, las herramientas no tienen especificaciones técnicas.",
              "Solo si se moja antes."
            ],
            "correcta": 0,
            "explica": "Usar el consumible o herramienta correcta evita desportilladuras, accidentes y roturas prematuras."
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
              "Látex interior, látex exterior, esmaltes sintéticos y antióxidos",
              "Solo látex blanco",
              "Solo esmalte",
              "Solo antióxido"
            ],
            "correcta": 0,
            "explica": "Vendemos látex interior, látex exterior, esmaltes sintéticos y antióxidos."
          },
          {
            "q": "¿Para qué superficies se usa el esmalte sintético?",
            "opciones": [
              "Metales (puertas, rejas) y maderas (puertas, ventanas, muebles)",
              "Solo para paredes interiores",
              "Solo para techos",
              "Para pisos de cerámica"
            ],
            "correcta": 0,
            "explica": "El esmalte sintético es para metales (puertas, rejas) y maderas (puertas, ventanas, muebles)."
          },
          {
            "q": "¿Qué es el antióxido?",
            "opciones": [
              "Base protectora que se aplica sobre metales ferrosos antes del esmalte para evitar oxidación",
              "Un tipo de pintura final de color",
              "Un solvente para limpiar",
              "Un adhesivo para metales"
            ],
            "correcta": 0,
            "explica": "El antióxido es la base protectora sobre metales ferrosos (hierro, acero) antes del esmalte."
          },
          {
            "q": "¿Qué diferencia al látex interior del exterior?",
            "opciones": [
              "El exterior está formulado para resistir la intemperie (sol, lluvia, hongos)",
              "Son iguales",
              "El interior es para exteriores",
              "El exterior solo viene en blanco"
            ],
            "correcta": 0,
            "explica": "El látex exterior resiste la intemperie: sol, lluvia y hongos. El interior no está formulado para eso."
          },
          {
            "q": "¿Con qué se diluye el esmalte sintético?",
            "opciones": [
              "Aguarrás (base de solvente)",
              "Agua",
              "Vinagre",
              "Alcohol"
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
              "Buena preparación de la superficie: limpiar, lijar, aplicar fijador y enduir imperfecciones",
              "Aplicar muchas manos sin preparar",
              "No importa la preparación",
              "Solo usar pintura cara"
            ],
            "correcta": 0,
            "explica": "La clave es preparar bien la superficie: limpiar, lijar, fijador en superficies nuevas y enduido para imperfecciones."
          },
          {
            "q": "¿Cuándo se usa fijador/sellador antes de pintar?",
            "opciones": [
              "En superficies nuevas o entizadas (que se despolvoran al tocar)",
              "Nunca",
              "Solo en exteriores",
              "Solo con esmalte"
            ],
            "correcta": 0,
            "explica": "Se usa fijador en superficies nuevas o entizadas que se despolvoran al tocar."
          },
          {
            "q": "¿Qué es el 'antióxido 3 en 1'?",
            "opciones": [
              "Antióxido + convertidor de óxido + esmalte en un solo producto",
              "Solo antióxido común",
              "Solo convertidor",
              "Solo esmalte"
            ],
            "correcta": 0,
            "explica": "El 3 en 1 combina antióxido + convertidor de óxido + esmalte en un solo producto."
          },
          {
            "q": "¿Se puede aplicar esmalte sintético directo sobre hierro sin antióxido?",
            "opciones": [
              "No es recomendable: sin antióxido, el hierro se oxidará debajo del esmalte",
              "Sí, no hay problema",
              "El esmalte ya tiene antióxido",
              "Solo si el hierro es nuevo"
            ],
            "correcta": 0,
            "explica": "Sin antióxido previo, el hierro se oxidará debajo del esmalte, dañando la pintura."
          },
          {
            "q": "¿Qué complementos se venden con las pinturas?",
            "opciones": [
              "Pinceles, rodillos, lijas, fijador/sellador, enduido, bandejas y cintas de enmascarar",
              "Solo la pintura",
              "Solo un pincel",
              "Cemento"
            ],
            "correcta": 0,
            "explica": "Complementos: pinceles, rodillos, lijas, fijador, enduido, bandejas y cintas de enmascarar."
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
              "Lijar el óxido → aplicar convertidor de óxido o antióxido → esmalte sintético como terminación",
              "Pintar directo con látex",
              "Solo lavar con agua",
              "Aplicar membrana asfáltica"
            ],
            "correcta": 0,
            "explica": "Reja oxidada: lijar → convertidor o antióxido → esmalte sintético como terminación."
          },
          {
            "q": "Un cliente quiere renovar el frente de su casa. ¿Qué pintura le vendés?",
            "opciones": [
              "Látex exterior resistente a la intemperie + fijador si la superficie está entizada",
              "Látex interior",
              "Esmalte sintético",
              "Antióxido"
            ],
            "correcta": 0,
            "explica": "Para frentes: látex exterior (resiste intemperie) + fijador si la pared está entizada."
          },
          {
            "q": "¿Cuál es el argumento clave para vender pintura de calidad?",
            "opciones": [
              "Renovar con pintura es la forma más rápida y económica de cambiar un ambiente o proteger la casa",
              "La pintura no importa",
              "Todas las marcas son iguales",
              "Solo importa el color"
            ],
            "correcta": 0,
            "explica": "La pintura es la renovación más rápida y económica. Usar la correcta asegura acabado y duración."
          },
          {
            "q": "¿Cuál es la venta cruzada completa de pinturas?",
            "opciones": [
              "Pintura + fijador + enduido + lijas + rodillo/pincel + bandeja + cinta de enmascarar",
              "Solo la pintura sola",
              "Solo un rodillo",
              "Cemento y arena"
            ],
            "correcta": 0,
            "explica": "Venta cruzada: pintura + fijador + enduido + lijas + rodillo + pincel + bandeja + cinta."
          },
          {
            "q": "Un cliente tiene una superficie con humedad. ¿Qué le recomendás antes de pintar?",
            "opciones": [
              "Solucionar la causa de la humedad primero, luego preparar y pintar con productos anti-humedad",
              "Pintar encima directamente",
              "Solo aplicar látex común",
              "Poner más capas de pintura"
            ],
            "correcta": 0,
            "explica": "Primero resolver la causa de la humedad (aislación, rejillas). Luego preparar y pintar con anti-humedad."
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
              "Porque está diseñado para uso profesional/intensivo con materiales de alta resistencia, mayor durabilidad y seguridad para el usuario.",
              "Por la marca nomás, rinde exactamente igual.",
              "Porque viene en una caja más bonita.",
              "No hay ninguna diferencia técnica."
            ],
            "correcta": 0,
            "explica": "Las herramientas e insumos profesionales ofrecen mejor torque, menor desgaste y mayor seguridad de trabajo."
          },
          {
            "q": "Cliente en mostrador: \"¿Puedo usar la misma herramienta o consumible de Pinturas para otro material totalmente distinto?\"",
            "opciones": [
              "No se recomienda. Cada insumo está optimizado para su superficie específica; usarlo en otra puede arruinar el producto y ser peligroso.",
              "Sí, sirve para absolutamente todo.",
              "Sí, las herramientas no tienen especificaciones técnicas.",
              "Solo si se moja antes."
            ],
            "correcta": 0,
            "explica": "Usar el consumible o herramienta correcta evita desportilladuras, accidentes y roturas prematuras."
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
              "Silicona neutra, silicona acética y sellador poliuretánico (PU)",
              "Solo silicona",
              "Solo pegamento",
              "Solo cinta"
            ],
            "correcta": 0,
            "explica": "Los 3 tipos: silicona neutra (versátil), silicona acética (económica) y PU (elástico, pintable)."
          },
          {
            "q": "¿Qué sellador se puede pintar?",
            "opciones": [
              "El sellador poliuretánico (PU)",
              "La silicona neutra",
              "La silicona acética",
              "Ninguno"
            ],
            "correcta": 0,
            "explica": "El sellador PU es pintable, ideal para juntas de dilatación y grietas profundas."
          },
          {
            "q": "¿Por qué la silicona acética no se recomienda para espejos?",
            "opciones": [
              "Porque suelta ácido acético que puede dañar el espejo",
              "Porque no pega",
              "Porque es muy cara",
              "Porque no existe"
            ],
            "correcta": 0,
            "explica": "La silicona acética suelta ácido acético que puede dañar metales sensibles, mármol y espejos."
          },
          {
            "q": "¿Qué cinta es ideal para reparar filtraciones en techos?",
            "opciones": [
              "Cinta asfáltica autoadhesiva (aluminio + asfalto), se pega en frío",
              "Cinta de papel",
              "Cinta scotch",
              "Cinta de enmascarar"
            ],
            "correcta": 0,
            "explica": "La cinta asfáltica autoadhesiva se pega en frío para reparaciones rápidas de filtraciones."
          },
          {
            "q": "¿Para qué se usan las cintas para juntas en drywall?",
            "opciones": [
              "Para reforzar uniones entre placas de yeso y evitar fisuras",
              "Para decorar la pared",
              "Para impermeabilizar",
              "Para pegar ladrillos"
            ],
            "correcta": 0,
            "explica": "Las cintas refuerzan las uniones entre placas de yeso, evitando fisuras al pintar."
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
              "Neutra: baños, cocinas, espejos (no daña). Acética: económica pero no para metales ni mármol",
              "Son iguales",
              "Acética siempre",
              "Neutra nunca"
            ],
            "correcta": 0,
            "explica": "Neutra: versátil, no daña materiales sensibles. Acética: más económica pero limitada en materiales."
          },
          {
            "q": "¿Cuándo usar sellador PU en lugar de silicona?",
            "opciones": [
              "Para juntas de dilatación, grietas profundas, exteriores y cuando se necesita pintar encima",
              "Nunca",
              "Solo en baños",
              "Solo en pisos"
            ],
            "correcta": 0,
            "explica": "PU: juntas de dilatación, grietas profundas, exteriores e instalaciones que se pintarán."
          },
          {
            "q": "¿Qué diferencia hay entre cinta de papel y cinta tramada para juntas?",
            "opciones": [
              "Papel: mejor terminación para pintado. Tramada: autoadhesiva, más fácil de colocar",
              "Son iguales",
              "La tramada no existe",
              "El papel es para techos"
            ],
            "correcta": 0,
            "explica": "Cinta de papel: mejor acabado pintado. Cinta tramada: autoadhesiva, fácil y rápida."
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
            "explica": "La silicona viene en blanca, negra y transparente."
          },
          {
            "q": "¿Qué argumento clave usás para vender selladores?",
            "opciones": [
              "Un buen sellado previene filtraciones, moho, grietas y deterioro de materiales",
              "Son solo un gasto extra",
              "No son necesarios",
              "Solo los profesionales los usan"
            ],
            "correcta": 0,
            "explica": "Argumento: un buen sellado previene filtraciones, moho, grietas y deterioro de materiales."
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
              "Silicona neutra transparente: no daña el aluminio ni el vidrio, resistente al agua",
              "Silicona acética",
              "Sellador PU",
              "Cinta asfáltica"
            ],
            "correcta": 0,
            "explica": "Para ventanas de aluminio: silicona neutra transparente, no daña materiales y resiste la humedad."
          },
          {
            "q": "Un cliente tiene una grieta en una junta de dilatación exterior. ¿Qué le recomendás?",
            "opciones": [
              "Sellador poliuretánico (PU): súper elástico, resiste intemperie y se puede pintar",
              "Silicona acética",
              "Cinta de papel",
              "Cemento"
            ],
            "correcta": 0,
            "explica": "Para juntas de dilatación exteriores: PU, elástico, resiste intemperie y pintable."
          },
          {
            "q": "Un techista necesita reparar una filtración puntual en una canaleta. ¿Qué le ofrecés?",
            "opciones": [
              "Cinta asfáltica autoadhesiva: reparación rápida en frío, sin herramientas",
              "Membrana asfáltica con soplete",
              "Silicona para baños",
              "Pintura látex"
            ],
            "correcta": 0,
            "explica": "Cinta asfáltica autoadhesiva: reparación rápida y en frío para filtraciones puntuales."
          },
          {
            "q": "¿Cuál es la venta cruzada al vender selladores?",
            "opciones": [
              "Pistola aplicadora, trapo para limpieza, y el sellador adecuado al tipo de superficie",
              "Solo el sellador",
              "Cemento",
              "Pintura"
            ],
            "correcta": 0,
            "explica": "Venta cruzada: pistola aplicadora, trapo de limpieza y el sellador adecuado."
          },
          {
            "q": "¿Qué le decís a un cliente que quiere sellar un espejo con silicona acética?",
            "opciones": [
              "Le recomendás silicona neutra: la acética suelta ácido que puede dañar el espejo por detrás",
              "La acética está bien para espejos",
              "Que use pegamento común",
              "Que no use silicona"
            ],
            "correcta": 0,
            "explica": "NUNCA acética para espejos: el ácido daña el plateado. Usar siempre silicona neutra."
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
              "Porque está diseñado para uso profesional/intensivo con materiales de alta resistencia, mayor durabilidad y seguridad para el usuario.",
              "Por la marca nomás, rinde exactamente igual.",
              "Porque viene en una caja más bonita.",
              "No hay ninguna diferencia técnica."
            ],
            "correcta": 0,
            "explica": "Las herramientas e insumos profesionales ofrecen mejor torque, menor desgaste y mayor seguridad de trabajo."
          },
          {
            "q": "Cliente en mostrador: \"¿Puedo usar la misma herramienta o consumible de Selladores y Cintas para otro material totalmente distinto?\"",
            "opciones": [
              "No se recomienda. Cada insumo está optimizado para su superficie específica; usarlo en otra puede arruinar el producto y ser peligroso.",
              "Sí, sirve para absolutamente todo.",
              "Sí, las herramientas no tienen especificaciones técnicas.",
              "Solo si se moja antes."
            ],
            "correcta": 0,
            "explica": "Usar el consumible o herramienta correcta evita desportilladuras, accidentes y roturas prematuras."
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
              "Para alisar paredes y cielorrasos, tapando poros e imperfecciones antes de pintar",
              "Para impermeabilizar techos",
              "Para pegar cerámicos",
              "Para hacer estructuras"
            ],
            "correcta": 0,
            "explica": "El enduido alisa paredes y cielorrasos, tapando poros e imperfecciones para un acabado perfecto."
          },
          {
            "q": "¿Cuáles son los dos tipos de enduido?",
            "opciones": [
              "Interior (base de yeso) y exterior (resinas acrílicas/cementicias)",
              "Solo interior",
              "Solo exterior",
              "Solo en polvo"
            ],
            "correcta": 0,
            "explica": "Interior: base de yeso, para ambientes secos. Exterior: resinas acrílicas, resiste humedad e intemperie."
          },
          {
            "q": "¿Qué marcas de enduido trabaja Rosso?",
            "opciones": [
              "Weber, Klaukol, Revear y Tersuave",
              "Solo Holcim",
              "Solo Gerdau",
              "Solo Ferrum"
            ],
            "correcta": 0,
            "explica": "Trabajamos enduidos de Weber, Klaukol, Revear y Tersuave."
          },
          {
            "q": "¿Cómo se aplica el enduido?",
            "opciones": [
              "Con espátula o llana en capas finas, dejando secar entre manos",
              "Con rodillo de pintura",
              "Con soplete",
              "Con martillo"
            ],
            "correcta": 0,
            "explica": "Se aplica con espátula o llana en capas finas, dejando secar bien entre manos."
          },
          {
            "q": "¿Qué se hace después de aplicar el enduido?",
            "opciones": [
              "Se lija con lija fina para un acabado perfecto, y luego se pinta",
              "Se moja con agua",
              "Se cubre con membrana",
              "Se deja sin pintar"
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
              "Cuando la pared está muy absorbente o entizada (se despolvoriza al tocar)",
              "Nunca",
              "Siempre, sin excepción",
              "Solo en exteriores"
            ],
            "correcta": 0,
            "explica": "Se usa fijador cuando la pared es muy absorbente o está entizada (se despolvoriza al tocar)."
          },
          {
            "q": "¿En qué presentaciones viene el enduido?",
            "opciones": [
              "En polvo (para mezclar) o listo para usar (pasta)",
              "Solo en polvo",
              "Solo líquido",
              "Solo en aerosol"
            ],
            "correcta": 0,
            "explica": "Viene en polvo (para mezclar con agua) o listo para usar (pasta directa)."
          },
          {
            "q": "¿Por qué el enduido exterior es diferente al interior?",
            "opciones": [
              "Tiene resinas acrílicas/cementicias que resisten humedad e intemperie",
              "Son iguales",
              "El exterior es de yeso",
              "El interior resiste más la humedad"
            ],
            "correcta": 0,
            "explica": "El exterior tiene resinas que resisten humedad e intemperie; el interior de yeso no tolera esas condiciones."
          },
          {
            "q": "¿Qué complementos se venden con el enduido?",
            "opciones": [
              "Espátulas, llanas, lijas finas, fijador sellador, bandejas y cintas de enmascarar",
              "Solo la espátula",
              "Solo cemento",
              "Solo pintura"
            ],
            "correcta": 0,
            "explica": "Complementos: espátulas, llanas, lijas finas, fijador sellador, bandejas y cintas de enmascarar."
          },
          {
            "q": "¿Cuántas capas de enduido se recomiendan?",
            "opciones": [
              "Al menos 2 capas finas, dejando secar y lijando entre manos",
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
              "Enduido + espátula + lija fina + fijador (si la pared es absorbente) + pintura",
              "Solo pintura en varias manos",
              "Solo lija",
              "Solo fijador"
            ],
            "correcta": 0,
            "explica": "Para imperfecciones: enduido + espátula + lija + fijador (si necesita) y después la pintura."
          },
          {
            "q": "¿Cuál es el 'secreto de un trabajo profesional' según el manual?",
            "opciones": [
              "El enduido: tapa fisuras, poros e imperfecciones, dejando la base perfecta para pintar",
              "Usar mucha pintura",
              "No preparar la superficie",
              "Pintar sin enduir"
            ],
            "correcta": 0,
            "explica": "El enduido es el secreto: tapa todo y deja una base perfecta para que la pintura luzca profesional."
          },
          {
            "q": "Un cliente quiere enduir la fachada exterior. ¿Qué enduido le vendés?",
            "opciones": [
              "Enduido exterior (resinas acrílicas): resiste humedad e intemperie",
              "Enduido interior de yeso",
              "Enduido en polvo común",
              "No se puede enduir el exterior"
            ],
            "correcta": 0,
            "explica": "Para fachada: enduido exterior con resinas acrílicas, que resiste humedad e intemperie."
          },
          {
            "q": "¿Cuál es la venta cruzada completa al vender enduido?",
            "opciones": [
              "Enduido + espátulas + llanas + lijas finas + fijador + bandeja + cinta de enmascarar + pintura",
              "Solo el enduido",
              "Solo lija",
              "Solo pintura"
            ],
            "correcta": 0,
            "explica": "Venta cruzada: enduido + espátulas + llanas + lijas + fijador + bandeja + cinta + pintura final."
          },
          {
            "q": "¿Qué pasa si se aplica enduido interior en una fachada exterior?",
            "opciones": [
              "Se deteriora rápido: el yeso no resiste la humedad ni la intemperie",
              "Funciona perfectamente",
              "Es mejor que el exterior",
              "Dura más que el exterior"
            ],
            "correcta": 0,
            "explica": "El enduido interior de yeso se deteriora rápido en exterior: no resiste humedad ni intemperie."
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
              "Porque está diseñado para uso profesional/intensivo con materiales de alta resistencia, mayor durabilidad y seguridad para el usuario.",
              "Por la marca nomás, rinde exactamente igual.",
              "Porque viene en una caja más bonita.",
              "No hay ninguna diferencia técnica."
            ],
            "correcta": 0,
            "explica": "Las herramientas e insumos profesionales ofrecen mejor torque, menor desgaste y mayor seguridad de trabajo."
          },
          {
            "q": "Cliente en mostrador: \"¿Puedo usar la misma herramienta o consumible de Enduidos para otro material totalmente distinto?\"",
            "opciones": [
              "No se recomienda. Cada insumo está optimizado para su superficie específica; usarlo en otra puede arruinar el producto y ser peligroso.",
              "Sí, sirve para absolutamente todo.",
              "Sí, las herramientas no tienen especificaciones técnicas.",
              "Solo si se moja antes."
            ],
            "correcta": 0,
            "explica": "Usar el consumible o herramienta correcta evita desportilladuras, accidentes y roturas prematuras."
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
              "La capa interna negra bloquea la luz solar, evitando la formación de algas",
              "Son iguales",
              "El bicapa es mejor",
              "El tricapa es más pequeño"
            ],
            "correcta": 0,
            "explica": "El tricapa tiene una capa negra interna que bloquea la luz, evitando algas y manteniendo el agua limpia."
          },
          {
            "q": "¿Para qué sirven los tanques horizontales/chupetines?",
            "opciones": [
              "Para espacios bajos, cisternas o enterrados",
              "Solo para techos altos",
              "Para decoración",
              "Para calentar agua"
            ],
            "correcta": 0,
            "explica": "Los tanques horizontales son para espacios bajos, cisternas o instalaciones enterradas."
          },
          {
            "q": "¿Qué capacidad de tanque se recomienda para 4 personas?",
            "opciones": [
              "1000 litros",
              "200 litros",
              "5000 litros",
              "50 litros"
            ],
            "correcta": 0,
            "explica": "Para 4 personas se recomiendan aproximadamente 1000 litros."
          },
          {
            "q": "¿Qué diferencia hay entre tanques color arena y gris?",
            "opciones": [
              "Arena: incluye flotante. Gris: sin accesorios (requiere flotante aparte)",
              "Son iguales",
              "Gris incluye flotante",
              "Arena no tiene tapa"
            ],
            "correcta": 0,
            "explica": "Color arena: incluye flotante. Color gris: sin accesorios, requiere comprar flotante aparte."
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
              "Cuántas personas viven y cuántos baños hay",
              "Solo el color que prefiere",
              "El tamaño de la cocina",
              "La marca de griferías"
            ],
            "correcta": 0,
            "explica": "Preguntar cuántas personas viven y cuántos baños hay para dimensionar correctamente."
          },
          {
            "q": "Para 6 personas, ¿qué capacidad se recomienda?",
            "opciones": [
              "1500-2000 litros",
              "500 litros",
              "200 litros",
              "100 litros"
            ],
            "correcta": 0,
            "explica": "Para 6 personas: 1500-2000 litros, sumando capacidad si hay más baños."
          },
          {
            "q": "¿Qué complementos se venden con un tanque?",
            "opciones": [
              "Flotante automático, conexiones, bridas, caños, filtro de sedimentos y bomba presurizadora",
              "Solo el tanque",
              "Solo un caño",
              "Solo una bomba"
            ],
            "correcta": 0,
            "explica": "Complementos: flotante, conexiones, bridas, caños, filtro de sedimentos y bomba presurizadora."
          },
          {
            "q": "¿Por qué Rotoplas ofrece garantía de calidad?",
            "opciones": [
              "Fabricados en polietileno de alta calidad: no se corroen, son livianos y protegen contra bacterias y algas",
              "Porque son los más baratos",
              "Solo por la marca",
              "No ofrecen garantía"
            ],
            "correcta": 0,
            "explica": "Polietileno de alta calidad: no se corroe, liviano, protege contra bacterias y algas."
          },
          {
            "q": "¿Qué base necesita un tanque para su correcta instalación?",
            "opciones": [
              "Base firme y nivelada",
              "Cualquier superficie",
              "Sobre arena suelta",
              "Colgado del techo sin base"
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
              "Bomba presurizadora para mantener la presión constante",
              "Solo un tanque más grande",
              "Nada, es normal",
              "Un filtro de aire"
            ],
            "correcta": 0,
            "explica": "Una bomba presurizadora ayuda a mantener presión constante cuando se combina con el tanque."
          },
          {
            "q": "Un cliente vive en un departamento con poco espacio en el techo. ¿Qué tanque le recomendás?",
            "opciones": [
              "Tanque horizontal/chupetín: diseñado para espacios bajos",
              "Tanque vertical de 2500 litros",
              "Un bidón plástico",
              "No necesita tanque"
            ],
            "correcta": 0,
            "explica": "Para espacios reducidos: tanque horizontal/chupetín, diseñado para alturas bajas."
          },
          {
            "q": "¿Cuándo ofrecés un tanque gris vs arena?",
            "opciones": [
              "Gris cuando el cliente ya tiene flotante; arena cuando quiere todo incluido",
              "Siempre arena",
              "Siempre gris",
              "No hay diferencia"
            ],
            "correcta": 0,
            "explica": "Gris si ya tiene flotante (más económico). Arena si quiere todo incluido."
          },
          {
            "q": "¿Qué venta cruzada hacés al vender un tanque?",
            "opciones": [
              "Flotante + conexiones + caños + filtro + bomba presurizadora si hay baja presión",
              "Solo el tanque",
              "Solo un caño",
              "Solo un flotante"
            ],
            "correcta": 0,
            "explica": "Venta cruzada: flotante, conexiones, caños, filtro de sedimentos y bomba si hay baja presión."
          },
          {
            "q": "¿Por qué es importante que el tanque no permita el paso de luz?",
            "opciones": [
              "La luz genera algas dentro del tanque, contaminando el agua",
              "Por estética",
              "Para que no se caliente",
              "No importa la luz"
            ],
            "correcta": 0,
            "explica": "La luz genera algas y microorganismos. El tricapa con capa negra bloquea la luz."
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
              "Le explicás que esa instalación asegura cero filtraciones/fugas a largo plazo, evitando romper paredes en el futuro.",
              "Le das la razón y le sugerís atar todo con alambre.",
              "Le decís que no instale nada.",
              "Le sugerís usar manguera de jardín común."
            ],
            "correcta": 0,
            "explica": "Una instalación profesional en obra intermedia ahorra costos enormes de reparación oculta."
          },
          {
            "q": "Caso práctico: El cliente no sabe si comprar Tanques Multicapa en la medida estándar o la superior. ¿Qué le aconsejás?",
            "opciones": [
              "Calcular la demanda requerida según los usuarios/caudal de la obra para no quedarse corto en horas pico de consumo.",
              "Llevar siempre lo más chico para ahorrar.",
              "Llevar la medida al azar.",
              "No calcular nada y comprar por color."
            ],
            "correcta": 0,
            "explica": "Dimensionar correctamente la instalación asegura presión, capacidad y confort constante."
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
              "Para tratar aguas residuales domiciliarias en lugares sin cloacas",
              "Para calentar agua",
              "Para almacenar agua potable",
              "Para generar electricidad"
            ],
            "correcta": 0,
            "explica": "El biodigestor trata aguas residuales (baño, cocina, lavadero) en zonas sin red cloacal."
          },
          {
            "q": "¿Qué reemplaza al biodigestor en la construcción tradicional?",
            "opciones": [
              "Los pozos ciegos tradicionales",
              "Los tanques de agua",
              "Las bombas de presión",
              "Los calefones"
            ],
            "correcta": 0,
            "explica": "El biodigestor es alternativa sustentable a los pozos ciegos tradicionales."
          },
          {
            "q": "¿Qué marca de biodigestores trabaja Rosso?",
            "opciones": [
              "Rotoplas",
              "Holcim",
              "Ferrum",
              "Gerdau"
            ],
            "correcta": 0,
            "explica": "Trabajamos biodigestores Rotoplas."
          },
          {
            "q": "¿De qué material están hechos los biodigestores?",
            "opciones": [
              "Polietileno rotomoldeado, resistente a químicos y desgaste",
              "Hormigón armado",
              "Ladrillos",
              "Metal galvanizado"
            ],
            "correcta": 0,
            "explica": "Son de polietileno rotomoldeado, resistentes a químicos y desgaste."
          },
          {
            "q": "¿Para qué zonas son ideales los biodigestores?",
            "opciones": [
              "Zonas rurales, barrios privados o zonas nuevas sin cloaca",
              "Solo para edificios céntricos",
              "Solo para industrias",
              "Para departamentos en altura"
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
              "Cuántas personas viven en la casa para elegir la capacidad adecuada",
              "Solo el color que quiere",
              "El tamaño de la cocina",
              "La marca de su auto"
            ],
            "correcta": 0,
            "explica": "Consultar cuántas personas viven para ofrecer la capacidad adecuada."
          },
          {
            "q": "¿Por qué es importante la pendiente del terreno?",
            "opciones": [
              "Para asegurar el correcto escurrimiento de los efluentes",
              "Solo por estética",
              "No importa la pendiente",
              "Para que llueva mejor"
            ],
            "correcta": 0,
            "explica": "La buena pendiente asegura el correcto escurrimiento de las aguas residuales."
          },
          {
            "q": "¿Qué sistema adicional puede requerir un biodigestor?",
            "opciones": [
              "Pozo absorbente o lecho nitrificante para infiltración",
              "Solo una bomba de agua",
              "Un calefón solar",
              "Un generador eléctrico"
            ],
            "correcta": 0,
            "explica": "Puede necesitar pozo absorbente o lecho nitrificante para la infiltración del efluente."
          },
          {
            "q": "¿Qué ventajas tiene el biodigestor sobre el pozo ciego?",
            "opciones": [
              "No contamina el suelo, requiere poco mantenimiento y dura muchos años",
              "Es igual al pozo ciego",
              "Contamina más",
              "Requiere mantenimiento diario"
            ],
            "correcta": 0,
            "explica": "No contamina el suelo, poco mantenimiento, larga duración."
          },
          {
            "q": "¿Qué complementos se venden con el biodigestor?",
            "opciones": [
              "Cañerías de desagüe, cámara séptica previa y accesorios de ventilación",
              "Solo el biodigestor",
              "Solo una bomba",
              "Solo cemento"
            ],
            "correcta": 0,
            "explica": "Complementos: cañerías de desagüe, cámara séptica previa y accesorios de ventilación."
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
              "Le decís que no construya",
              "Le vendés solo un pozo ciego",
              "Le recomendás un tanque de agua"
            ],
            "correcta": 0,
            "explica": "Argumento: sustentable, no contamina el suelo, dura años y tiene muy bajo mantenimiento."
          },
          {
            "q": "¿Cómo funciona el proceso biológico del biodigestor?",
            "opciones": [
              "Descompone la materia orgánica, generando un efluente clarificado y biogás como subproducto",
              "Filtra el agua con un tamiz",
              "Congela las aguas residuales",
              "Evapora el agua con calor"
            ],
            "correcta": 0,
            "explica": "El biodigestor descompone la materia orgánica biológicamente, generando agua clarificada y biogás."
          },
          {
            "q": "¿Qué venta cruzada hacés al vender un biodigestor?",
            "opciones": [
              "Cañerías PVC de desagüe + accesorios de conexión + cámara séptica previa si es necesario",
              "Solo el biodigestor",
              "Pintura para el biodigestor",
              "Griferías de baño"
            ],
            "correcta": 0,
            "explica": "Al vender biodigestor: cañerías PVC, accesorios de conexión y eventualmente cámara séptica."
          },
          {
            "q": "¿Cada cuánto necesita mantenimiento un biodigestor bien instalado?",
            "opciones": [
              "Poco mantenimiento: inspección periódica y vaciado de lodos según uso",
              "Diariamente",
              "Semanalmente",
              "Nunca necesita mantenimiento"
            ],
            "correcta": 0,
            "explica": "Requiere poco mantenimiento: inspección periódica y vaciado de lodos según la frecuencia de uso."
          },
          {
            "q": "¿Qué tiene de ecológico el biodigestor vs pozo ciego?",
            "opciones": [
              "No contamina el suelo ni las napas de agua; el efluente puede reutilizarse para riego",
              "Contamina igual que el pozo",
              "No tiene beneficios ecológicos",
              "Es peor para el medio ambiente"
            ],
            "correcta": 0,
            "explica": "No contamina suelo ni napas; el efluente clarificado puede usarse para riego en algunos casos."
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
              "Le explicás que esa instalación asegura cero filtraciones/fugas a largo plazo, evitando romper paredes en el futuro.",
              "Le das la razón y le sugerís atar todo con alambre.",
              "Le decís que no instale nada.",
              "Le sugerís usar manguera de jardín común."
            ],
            "correcta": 0,
            "explica": "Una instalación profesional en obra intermedia ahorra costos enormes de reparación oculta."
          },
          {
            "q": "Caso práctico: El cliente no sabe si comprar Biodigestores en la medida estándar o la superior. ¿Qué le aconsejás?",
            "opciones": [
              "Calcular la demanda requerida según los usuarios/caudal de la obra para no quedarse corto en horas pico de consumo.",
              "Llevar siempre lo más chico para ahorrar.",
              "Llevar la medida al azar.",
              "No calcular nada y comprar por color."
            ],
            "correcta": 0,
            "explica": "Dimensionar correctamente la instalación asegura presión, capacidad y confort constante."
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
              "Se colocan en piso y techo como base donde encajan los montantes",
              "Se colocan verticalmente",
              "Son decorativas",
              "Son para techos de chapa"
            ],
            "correcta": 0,
            "explica": "Las soleras se colocan en piso y techo (o perímetro de cielorraso), son la base de los montantes."
          },
          {
            "q": "¿Qué función cumplen los montantes (Perfil C)?",
            "opciones": [
              "Se colocan verticalmente cada 40-60 cm como soporte principal de las placas",
              "Se colocan horizontalmente en el piso",
              "Son para decoración",
              "Son para cañerías"
            ],
            "correcta": 0,
            "explica": "Los montantes se colocan verticalmente, encastrados en las soleras, como soporte de las placas."
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
              "Para fijar placas de yeso a la perfilería metálica (cabeza trompeta, punta aguja)",
              "Para unir perfiles entre sí",
              "Para fijar estructuras gruesas",
              "Para madera"
            ],
            "correcta": 0,
            "explica": "Los T2 fijan las placas de yeso a los perfiles, con cabeza trompeta que no rompe el cartón."
          },
          {
            "q": "¿Cuántos tornillos T2 se usan por placa estándar?",
            "opciones": [
              "Entre 30 y 40 tornillos por placa (1,20×2,40 m)",
              "5 tornillos",
              "100 tornillos",
              "1 tornillo"
            ],
            "correcta": 0,
            "explica": "Se usan entre 30 y 40 tornillos T2 por placa estándar de 1,20×2,40 m."
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
              "T1: perfil-perfil. T2: placa-perfil estándar. T3: para perfilería gruesa (Steel Frame)",
              "Son todos iguales",
              "T1 es para madera",
              "T3 es para plástico"
            ],
            "correcta": 0,
            "explica": "T1: une perfiles entre sí. T2: fija placa a perfil estándar. T3: punta mecha para perfiles gruesos."
          },
          {
            "q": "¿Para qué sirve el perfil Omega?",
            "opciones": [
              "Para cielorrasos o revestimientos directos sobre paredes, facilitando la nivelación",
              "Para pisos",
              "Para cañerías",
              "Para ventanas"
            ],
            "correcta": 0,
            "explica": "El Omega se usa en cielorrasos o revestimientos directos, facilitando la nivelación."
          },
          {
            "q": "¿Para qué se usan las cantoneras/guardacantos?",
            "opciones": [
              "Para reforzar esquinas exteriores contra golpes y lograr aristas rectas",
              "Para pisos",
              "Para cañerías",
              "Para techos de chapa"
            ],
            "correcta": 0,
            "explica": "Las cantoneras refuerzan esquinas exteriores, protegiéndolas de golpes y ayudando a que queden rectas."
          },
          {
            "q": "¿Por qué la perfilería es galvanizada?",
            "opciones": [
              "Para evitar la corrosión, garantizando durabilidad y resistencia en el tiempo",
              "Solo por estética",
              "Para que sea más pesada",
              "No es galvanizada"
            ],
            "correcta": 0,
            "explica": "El galvanizado evita la corrosión, garantizando durabilidad y resistencia a largo plazo."
          },
          {
            "q": "¿Qué complementos se venden con la perfilería?",
            "opciones": [
              "Placas de yeso o cementicias, aislantes, fijaciones y accesorios",
              "Solo los perfiles",
              "Solo clavos",
              "Solo pintura"
            ],
            "correcta": 0,
            "explica": "Complementos: placas de yeso/cementicias, aislantes, fijaciones y accesorios."
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
              "Soleras + montantes + placas de yeso + tornillos T1 y T2 + cinta + masilla + lana de vidrio",
              "Solo placas de yeso",
              "Solo perfiles",
              "Solo tornillos"
            ],
            "correcta": 0,
            "explica": "Pared drywall: soleras + montantes + placas + T1 (perfil-perfil) + T2 (placa-perfil) + cinta + masilla + aislante."
          },
          {
            "q": "¿Cada cuánto se colocan los montantes?",
            "opciones": [
              "Cada 40 o 60 cm entre ejes",
              "Cada 200 cm",
              "Cada 10 cm",
              "Sin distancia fija"
            ],
            "correcta": 0,
            "explica": "Los montantes se colocan cada 40 o 60 cm entre ejes, según el proyecto."
          },
          {
            "q": "¿Cuántos tornillos T2 se usan por m² de placa?",
            "opciones": [
              "Entre 12 y 15 tornillos por m²",
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
              "Perfiles Omega + ángulo de ajuste (L) para los bordes + tornillos T2",
              "Solo soleras",
              "Solo montantes",
              "Solo cantoneras"
            ],
            "correcta": 0,
            "explica": "Para cielorraso: perfiles Omega + ángulo de ajuste en bordes + tornillos T2 para fijar las placas."
          },
          {
            "q": "¿Cuál es el argumento de venta de la perfilería Barbieri?",
            "opciones": [
              "Rigidez estructural, facilidad de montaje y terminaciones perfectas sin oxidación",
              "Solo son baratos",
              "Son difíciles de usar",
              "No tienen ventajas"
            ],
            "correcta": 0,
            "explica": "Perfilería Barbieri: rigidez, fácil montaje, terminaciones perfectas y sin corrosión."
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
              "Le explicás que esa instalación asegura cero filtraciones/fugas a largo plazo, evitando romper paredes en el futuro.",
              "Le das la razón y le sugerís atar todo con alambre.",
              "Le decís que no instale nada.",
              "Le sugerís usar manguera de jardín común."
            ],
            "correcta": 0,
            "explica": "Una instalación profesional en obra intermedia ahorra costos enormes de reparación oculta."
          },
          {
            "q": "Caso práctico: El cliente no sabe si comprar Perfilería Metálica en la medida estándar o la superior. ¿Qué le aconsejás?",
            "opciones": [
              "Calcular la demanda requerida según los usuarios/caudal de la obra para no quedarse corto en horas pico de consumo.",
              "Llevar siempre lo más chico para ahorrar.",
              "Llevar la medida al azar.",
              "No calcular nada y comprar por color."
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
              "De yeso (junta tomada) y de PVC Barbieri (Perfilplas®)",
              "Solo de yeso",
              "Solo de PVC",
              "Solo de madera"
            ],
            "correcta": 0,
            "explica": "Los dos tipos: de yeso (placas atornilladas con junta tomada) y de PVC Perfilplas® (encastre)."
          },
          {
            "q": "¿Qué ventaja tiene el PVC sobre el yeso en ambientes húmedos?",
            "opciones": [
              "El PVC resiste la humedad; el yeso se deteriora con ella",
              "Son iguales",
              "El yeso resiste más la humedad",
              "El PVC se deteriora con agua"
            ],
            "correcta": 0,
            "explica": "El PVC es resistente a la humedad, ideal donde el yeso no resiste (baños, cocinas, lavaderos)."
          },
          {
            "q": "¿Cómo se instala el cielorraso de PVC?",
            "opciones": [
              "Con estructura metálica liviana y encastre tipo machihembrado",
              "Se pega con cemento",
              "Se clava directo al techo",
              "Se apoya suelto"
            ],
            "correcta": 0,
            "explica": "Se instala con estructura metálica liviana y sistema de encastre tipo machihembrado."
          },
          {
            "q": "¿Qué marca de cielorrasos de PVC trabaja Rosso?",
            "opciones": [
              "Barbieri (Perfilplas®)",
              "Holcim",
              "Ferrum",
              "Weber"
            ],
            "correcta": 0,
            "explica": "Trabajamos cielorrasos de PVC marca Barbieri (Perfilplas®)."
          },
          {
            "q": "¿En qué anchos vienen las placas de PVC?",
            "opciones": [
              "200 mm de ancho, en largos de 3 a 7 metros",
              "Solo 100 mm",
              "Solo 500 mm",
              "No tienen ancho estándar"
            ],
            "correcta": 0,
            "explica": "Las placas de PVC vienen en 200 mm de ancho con largos de 3 a 7 metros según modelo."
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
              "Estructura de perfiles → perfil perimetral → encastre de tablas → ajuste final",
              "Solo pegar las placas",
              "Solo clavar al techo",
              "Solo pintar el techo"
            ],
            "correcta": 0,
            "explica": "Pasos: 1) Estructura de perfiles, 2) Perfil perimetral, 3) Encastre de tablas, 4) Ajuste final."
          },
          {
            "q": "¿Qué complementos se necesitan para cielorraso de yeso?",
            "opciones": [
              "Placas, perfiles omega/solera/montante/ángulo, tornillos T1/T2, cinta, masilla y fijaciones",
              "Solo placas",
              "Solo masilla",
              "Solo tornillos"
            ],
            "correcta": 0,
            "explica": "Cielorraso de yeso: placas + perfiles (omega, solera, montante, ángulo) + T1/T2 + cinta + masilla."
          },
          {
            "q": "¿Cuáles son las ventajas generales de los cielorrasos en seco?",
            "opciones": [
              "Trabajo rápido, sin escombros ni humedad, acabado prolijo y moderno, mejora el confort",
              "Son lentos y sucios",
              "Solo son baratos",
              "No tienen ventajas"
            ],
            "correcta": 0,
            "explica": "Rápidos, sin escombros, acabado prolijo y moderno, mejoran confort térmico y acústico."
          },
          {
            "q": "¿Qué complementos específicos necesita el cielorraso de PVC?",
            "opciones": [
              "Perfiles metálicos para estructura, placas PVC en distintos largos, fijaciones y perfiles perimetrales",
              "Solo las placas PVC",
              "Solo cemento",
              "Solo pintura"
            ],
            "correcta": 0,
            "explica": "Para PVC: perfiles metálicos de estructura, placas PVC, fijaciones y perfiles perimetrales."
          },
          {
            "q": "¿Dónde es ideal usar cielorraso de PVC en lugar de yeso?",
            "opciones": [
              "En baños, cocinas, lavaderos y zonas húmedas donde el yeso no resiste",
              "Solo en dormitorios secos",
              "Solo en oficinas",
              "En ningún lugar, el yeso es mejor siempre"
            ],
            "correcta": 0,
            "explica": "El PVC es ideal en baños, cocinas, lavaderos y cualquier zona húmeda donde el yeso se deteriora."
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
              "Cielorraso de PVC Perfilplas®: resiste humedad, fácil de limpiar y mantener",
              "Cielorraso de yeso estándar",
              "Solo pintura en el techo",
              "Chapas de techo"
            ],
            "correcta": 0,
            "explica": "Para baño: PVC Perfilplas®, que resiste humedad, es fácil de limpiar y mantener."
          },
          {
            "q": "Un cliente quiere un cielorraso liso y pintable en su living. ¿Qué tipo le vendés?",
            "opciones": [
              "Cielorraso de yeso con junta tomada: superficie lisa y lista para pintar",
              "PVC con textura",
              "Chapas lisas",
              "Solo pintura directo al techo"
            ],
            "correcta": 0,
            "explica": "Para living: cielorraso de yeso con junta tomada, terminación lisa y pintable."
          },
          {
            "q": "¿Cuál es el argumento de venta de los cielorrasos en seco?",
            "opciones": [
              "Ocultan imperfecciones, mejoran el confort térmico y acústico, y permiten ocultar instalaciones",
              "Son solo decorativos",
              "Son caros y complicados",
              "No tienen argumento"
            ],
            "correcta": 0,
            "explica": "Ocultan imperfecciones e instalaciones, mejoran confort térmico/acústico, acabado moderno y prolijo."
          },
          {
            "q": "¿Cómo se puede mejorar el aislamiento del cielorraso?",
            "opciones": [
              "Colocando lana de vidrio sobre las placas, antes de cerrar el cielorraso",
              "Con más pintura",
              "Con membrana asfáltica encima",
              "No se puede mejorar"
            ],
            "correcta": 0,
            "explica": "Se puede agregar lana de vidrio sobre las placas para mejorar el aislamiento térmico y acústico."
          },
          {
            "q": "¿Cuál es la venta cruzada al vender un cielorraso?",
            "opciones": [
              "Perfiles + placas (yeso o PVC) + tornillos + aislante + cinta + masilla + pintura",
              "Solo las placas",
              "Solo los perfiles",
              "Solo pintura"
            ],
            "correcta": 0,
            "explica": "Venta cruzada: perfiles + placas + tornillos + aislante + cinta + masilla + pintura (si es yeso)."
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
              "Le explicás que esa instalación asegura cero filtraciones/fugas a largo plazo, evitando romper paredes en el futuro.",
              "Le das la razón y le sugerís atar todo con alambre.",
              "Le decís que no instale nada.",
              "Le sugerís usar manguera de jardín común."
            ],
            "correcta": 0,
            "explica": "Una instalación profesional en obra intermedia ahorra costos enormes de reparación oculta."
          },
          {
            "q": "Caso práctico: El cliente no sabe si comprar Cielorrasos PVC en la medida estándar o la superior. ¿Qué le aconsejás?",
            "opciones": [
              "Calcular la demanda requerida según los usuarios/caudal de la obra para no quedarse corto en horas pico de consumo.",
              "Llevar siempre lo más chico para ahorrar.",
              "Llevar la medida al azar.",
              "No calcular nada y comprar por color."
            ],
            "correcta": 0,
            "explica": "Dimensionar correctamente la instalación asegura presión, capacidad y confort constante."
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
              "Estándar (ST), Resistente a Humedad (RH/verde) y Resistente al Fuego (RF)",
              "Solo estándar",
              "Solo verde",
              "Solo roja"
            ],
            "correcta": 0,
            "explica": "Los 3 tipos: ST (uso general), RH/verde (resiste humedad) y RF (resistente al fuego)."
          },
          {
            "q": "¿En qué ambientes se usa la placa RH (verde)?",
            "opciones": [
              "Cocinas, baños y lavaderos (zonas con vapor y salpicaduras)",
              "Solo dormitorios",
              "Solo oficinas",
              "Solo garajes"
            ],
            "correcta": 0,
            "explica": "La placa RH (verde) está tratada para soportar vapor y salpicaduras: cocinas, baños y lavaderos."
          },
          {
            "q": "¿Qué marca de placas trabaja Rosso?",
            "opciones": [
              "Placo (Saint-Gobain)",
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
              "1,20 × 2,40 metros",
              "0,50 × 1,00 metros",
              "2,00 × 4,00 metros",
              "0,30 × 0,60 metros"
            ],
            "correcta": 0,
            "explica": "La medida estándar de una placa de yeso es 1,20 × 2,40 metros."
          },
          {
            "q": "¿Para qué sirve la placa RF?",
            "opciones": [
              "Para zonas donde se exige seguridad contra el fuego (salidas de emergencia, tabiques entre sectores)",
              "Solo para decoración",
              "Para pisos",
              "Para exteriores"
            ],
            "correcta": 0,
            "explica": "La placa RF se usa en zonas que requieren seguridad contra incendios."
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
              "Más rápido, más limpio, sin escombros y con excelente terminación",
              "Más lento y sucio",
              "Más caro siempre",
              "No tiene ventajas"
            ],
            "correcta": 0,
            "explica": "Las placas permiten construir más rápido, limpio, sin escombros y con terminación profesional."
          },
          {
            "q": "¿Qué complementos se necesitan para instalar placas de yeso?",
            "opciones": [
              "Perfilería (omega, solera, montante), tornillos T1/T2/T3, cinta para juntas, masilla, cantoneras y lana de vidrio",
              "Solo las placas",
              "Solo masilla",
              "Solo tornillos"
            ],
            "correcta": 0,
            "explica": "Sistema completo: perfilería, tornillos T1/T2/T3, cinta, masilla, cantoneras y aislante."
          },
          {
            "q": "¿Cuál es la diferencia entre la placa ST y la RH?",
            "opciones": [
              "La RH está tratada para soportar humedad y vapor; la ST es para ambientes secos",
              "Son iguales",
              "La ST resiste más humedad",
              "La RH es más barata"
            ],
            "correcta": 0,
            "explica": "ST: ambientes secos. RH: tratada para soportar humedad y vapor en baños y cocinas."
          },
          {
            "q": "¿Se pueden hacer paredes acústicas con placas de yeso?",
            "opciones": [
              "Sí, existen placas acústicas especiales y se puede agregar lana de vidrio entre montantes",
              "No, el yeso no aísla sonido",
              "Solo con PVC",
              "Solo con ladrillos"
            ],
            "correcta": 0,
            "explica": "Sí, con placas acústicas especiales y/o agregando lana de vidrio entre los montantes."
          },
          {
            "q": "¿Cómo se terminan las juntas entre placas?",
            "opciones": [
              "Con cinta para juntas + masilla, quedando una superficie lisa y lista para pintar",
              "Con cemento",
              "Con silicona",
              "Se dejan abiertas"
            ],
            "correcta": 0,
            "explica": "Las juntas se toman con cinta + masilla, logrando una superficie completamente lisa para pintar."
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
              "Tabique de drywall: placas ST + perfilería + aislante acústico + tornillos + cinta/masilla",
              "Levantar un muro de ladrillos",
              "Poner un biombo",
              "Solo una cortina"
            ],
            "correcta": 0,
            "explica": "Tabique drywall: rápido, limpio y con posibilidad de agregar aislamiento acústico."
          },
          {
            "q": "Un cliente va a hacer un baño nuevo con drywall. ¿Qué placa le vendés?",
            "opciones": [
              "Placa RH (verde) resistente a humedad, obligatoria en zonas húmedas",
              "Placa ST estándar",
              "Placa de madera",
              "Placa de vidrio"
            ],
            "correcta": 0,
            "explica": "En baños SIEMPRE placa RH (verde), tratada para soportar vapor y salpicaduras."
          },
          {
            "q": "¿Cuál es la venta cruzada completa de un sistema drywall?",
            "opciones": [
              "Placas + perfilería + tornillos T1/T2 + cinta + masilla + cantoneras + lana de vidrio + pintura",
              "Solo placas y tornillos",
              "Solo perfilería",
              "Solo masilla"
            ],
            "correcta": 0,
            "explica": "Sistema completo: placas + perfiles + tornillos + cinta + masilla + cantoneras + aislante + pintura."
          },
          {
            "q": "¿Qué le decís a un cliente que cree que el drywall es 'débil'?",
            "opciones": [
              "Le explicás que con la perfilería correcta y doble placa se logra un muro sólido y resistente",
              "Le das la razón",
              "Le vendés ladrillos",
              "No respondés"
            ],
            "correcta": 0,
            "explica": "Con perfilería correcta y doble placa, el drywall es sólido, resistente y cumple normas constructivas."
          },
          {
            "q": "¿Tenemos la placa justa para cada aplicación. ¿Cuáles son?",
            "opciones": [
              "ST para ambientes secos, RH para humedad, RF para fuego, acústicas para ruido",
              "Solo una placa universal",
              "Solo ST",
              "Solo RH"
            ],
            "correcta": 0,
            "explica": "ST (seco), RH (humedad), RF (fuego) y acústicas (sonido): una placa para cada necesidad."
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
              "Le explicás que esa instalación asegura cero filtraciones/fugas a largo plazo, evitando romper paredes en el futuro.",
              "Le das la razón y le sugerís atar todo con alambre.",
              "Le decís que no instale nada.",
              "Le sugerís usar manguera de jardín común."
            ],
            "correcta": 0,
            "explica": "Una instalación profesional en obra intermedia ahorra costos enormes de reparación oculta."
          },
          {
            "q": "Caso práctico: El cliente no sabe si comprar Placas de Yeso (Drywall) en la medida estándar o la superior. ¿Qué le aconsejás?",
            "opciones": [
              "Calcular la demanda requerida según los usuarios/caudal de la obra para no quedarse corto en horas pico de consumo.",
              "Llevar siempre lo más chico para ahorrar.",
              "Llevar la medida al azar.",
              "No calcular nada y comprar por color."
            ],
            "correcta": 0,
            "explica": "Dimensionar correctamente la instalación asegura presión, capacidad y confort constante."
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
              "Cemento, sílice de cuarzo, fibras celulósicas y aditivos (curadas en autoclave)",
              "Yeso y cartón",
              "Madera prensada",
              "Plástico reciclado"
            ],
            "correcta": 0,
            "explica": "Fabricadas con cemento, sílice de cuarzo, fibras celulósicas y aditivos, curadas en autoclave."
          },
          {
            "q": "¿Para qué zonas son ideales las placas Volcanboard?",
            "opciones": [
              "Exteriores, zonas húmedas y ambientes exigentes (fachadas, balcones, aleros)",
              "Solo interiores secos",
              "Solo cielorrasos",
              "Solo pisos"
            ],
            "correcta": 0,
            "explica": "Son ideales para exteriores, zonas húmedas y ambientes exigentes."
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
            "explica": "Espesores disponibles: 4, 6, 8 y 10 mm."
          },
          {
            "q": "¿Qué medida estándar tienen las placas?",
            "opciones": [
              "1,20 × 2,40 metros",
              "0,50 × 1,00 metros",
              "3,00 × 6,00 metros",
              "0,30 × 0,30 metros"
            ],
            "correcta": 0,
            "explica": "Medida estándar: 1,20 × 2,40 metros."
          },
          {
            "q": "¿Volcanboard contiene asbesto?",
            "opciones": [
              "No, está libre de asbestos",
              "Sí, contiene asbesto",
              "Depende del espesor",
              "Solo las gruesas"
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
              "Resiste humedad, moho, termitas, UV y es incombustible; el yeso se deteriora",
              "Son iguales",
              "El yeso resiste más en exterior",
              "No se puede usar en exterior"
            ],
            "correcta": 0,
            "explica": "Volcanboard resiste humedad, moho, termitas, UV y fuego. El yeso no tolera estas condiciones."
          },
          {
            "q": "¿Qué da la estabilidad dimensional a Volcanboard?",
            "opciones": [
              "El curado en autoclave, que evita deformaciones con el tiempo",
              "La pintura exterior",
              "El pegamento",
              "Los tornillos"
            ],
            "correcta": 0,
            "explica": "El curado en autoclave proporciona estabilidad dimensional, evitando deformaciones."
          },
          {
            "q": "¿Se pueden pegar cerámicos sobre Volcanboard?",
            "opciones": [
              "Sí, es compatible con pinturas, cerámicos, texturas y materiales decorativos",
              "No, no acepta nada encima",
              "Solo pintura",
              "Solo papel tapiz"
            ],
            "correcta": 0,
            "explica": "Volcanboard es compatible con pinturas, revestimientos cerámicos, texturas y materiales decorativos."
          },
          {
            "q": "¿Para qué se usan los espesores de 4 mm?",
            "opciones": [
              "Cielorrasos de aleros, revestimientos livianos",
              "Para muros estructurales",
              "Para pisos de alto tránsito",
              "Para fundaciones"
            ],
            "correcta": 0,
            "explica": "Los espesores finos (4 mm) se usan en cielorrasos de aleros y revestimientos exteriores livianos."
          },
          {
            "q": "¿Cómo se fijan las placas Volcanboard?",
            "opciones": [
              "Con tornillos especiales para fibrocemento sobre estructura metálica o de madera",
              "Con pegamento común",
              "Con clavos comunes",
              "Se apoyan sueltas"
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
              "Volcanboard (8-10 mm) + perfilería + tornillos cementicios + selladores + terminación",
              "Placas de yeso ST",
              "Ladrillos huecos del 8",
              "Solo pintura exterior"
            ],
            "correcta": 0,
            "explica": "Para fachadas: Volcanboard (8-10 mm) + estructura + tornillos cementicios + sellado + terminación."
          },
          {
            "q": "Un arquitecto necesita cerrar un balcón semicubierto. ¿Qué placa le recomendás?",
            "opciones": [
              "Volcanboard: resiste humedad, UV y es incombustible (ideal para semicubiertos)",
              "Placa de yeso estándar",
              "Madera sin tratar",
              "Cartón prensado"
            ],
            "correcta": 0,
            "explica": "Para semicubiertos: Volcanboard, que resiste humedad, rayos UV y es incombustible."
          },
          {
            "q": "¿Qué venta cruzada hacés con Volcanboard?",
            "opciones": [
              "Perfilería + tornillos cementicios + selladores flexibles + cintas para juntas + pintura/revestimientos",
              "Solo las placas",
              "Solo cemento",
              "Solo pintura"
            ],
            "correcta": 0,
            "explica": "Venta cruzada: perfilería, tornillos cementicios, selladores, cintas para juntas y terminaciones."
          },
          {
            "q": "¿Cómo se sellan las juntas entre placas Volcanboard?",
            "opciones": [
              "Con selladores flexibles o cinta para juntas Volcán",
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
              "Resiste humedad/moho, alta durabilidad mecánica, incombustible, estable dimensionalmente, libre de asbestos",
              "Solo es barato",
              "Solo resiste la humedad",
              "No tiene beneficios especiales"
            ],
            "correcta": 0,
            "explica": "5 beneficios: anti-humedad/moho, durabilidad, incombustible, estabilidad dimensional, libre de asbestos."
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
              "Le explicás que esa instalación asegura cero filtraciones/fugas a largo plazo, evitando romper paredes en el futuro.",
              "Le das la razón y le sugerís atar todo con alambre.",
              "Le decís que no instale nada.",
              "Le sugerís usar manguera de jardín común."
            ],
            "correcta": 0,
            "explica": "Una instalación profesional en obra intermedia ahorra costos enormes de reparación oculta."
          },
          {
            "q": "Caso práctico: El cliente no sabe si comprar Placas Cementicias Volcanboard en la medida estándar o la superior. ¿Qué le aconsejás?",
            "opciones": [
              "Calcular la demanda requerida según los usuarios/caudal de la obra para no quedarse corto en horas pico de consumo.",
              "Llevar siempre lo más chico para ahorrar.",
              "Llevar la medida al azar.",
              "No calcular nada y comprar por color."
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
              "Para llevar agua potable desde la red hasta la casa o el tanque (enterrado)",
              "Para desagüe cloacal",
              "Para gas",
              "Para cables eléctricos"
            ],
            "correcta": 0,
            "explica": "El polietileno negro lleva agua potable desde la red hasta la casa, resiste presión y enterramiento."
          },
          {
            "q": "¿Para qué se usa el PVC blanco sanitario?",
            "opciones": [
              "Para desagüe cloacal: conduce residuos líquidos al sistema cloacal o biodigestor",
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
              "10 mm y 20 mm",
              "300 mm y 500 mm",
              "Solo 50 mm"
            ],
            "correcta": 0,
            "explica": "Los diámetros más comunes de PVC cloacal son 110 mm y 160 mm."
          },
          {
            "q": "¿Qué significan las clasificaciones K4, K6, K10 del polietileno?",
            "opciones": [
              "Indican la presión que soporta el caño (a mayor K, más presión)",
              "El color del caño",
              "El largo",
              "El peso"
            ],
            "correcta": 0,
            "explica": "Las clasificaciones K4, K6, K10 indican la presión que soporta cada tipo de caño."
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
              "Con adhesivo especial o juntas elásticas (según el tipo)",
              "Con soldadura",
              "Con cemento Portland",
              "Se enroscan"
            ],
            "correcta": 0,
            "explica": "Los caños PVC se unen con adhesivo especial o juntas elásticas según el tipo."
          },
          {
            "q": "¿Cómo se unen los caños de polietileno?",
            "opciones": [
              "Con accesorios de compresión que aseguran uniones firmes y sin pérdidas",
              "Con pegamento común",
              "Con cinta adhesiva",
              "Se sueldan con soplete"
            ],
            "correcta": 0,
            "explica": "Los caños de polietileno se unen con accesorios de compresión, firmes y sin pérdidas."
          },
          {
            "q": "¿Qué complementos se venden con las cañerías?",
            "opciones": [
              "Codos, tees, uniones, adhesivo PVC, lubricante, llaves de paso y cámaras de inspección",
              "Solo los caños",
              "Solo pegamento",
              "Solo cinta"
            ],
            "correcta": 0,
            "explica": "Complementos: codos, tees, uniones, adhesivo PVC, lubricante, llaves de paso y cámaras de inspección."
          },
          {
            "q": "¿Qué ventaja tiene el PVC sobre otros materiales para desagüe?",
            "opciones": [
              "Es liviano, resistente, no se corroe y permite evacuación rápida",
              "Es pesado y se oxida",
              "Es frágil",
              "No tiene ventajas"
            ],
            "correcta": 0,
            "explica": "El PVC es liviano, resistente, no se corroe y permite evacuación rápida de líquidos."
          },
          {
            "q": "¿Qué argumento clave usás para vender cañerías de calidad?",
            "opciones": [
              "Usar el caño correcto asegura una instalación sin filtraciones ni roturas a largo plazo",
              "Todos son iguales",
              "Solo importa el precio",
              "No hay diferencia de calidad"
            ],
            "correcta": 0,
            "explica": "Usar el tipo correcto de caño asegura instalación duradera, sin filtraciones ni roturas."
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
              "Polietileno negro para entrada de agua + PVC blanco para desagüe cloacal + accesorios",
              "Solo PVC para todo",
              "Solo polietileno para todo",
              "Solo caños de metal"
            ],
            "correcta": 0,
            "explica": "Casa nueva: polietileno negro (entrada agua) + PVC blanco (desagüe) + accesorios completos."
          },
          {
            "q": "¿Cuál es la venta cruzada al vender cañerías gruesas?",
            "opciones": [
              "Accesorios (codos, tees), adhesivo PVC, lubricante, herramientas de corte, llaves de paso, cámaras",
              "Solo los caños",
              "Solo adhesivo",
              "Solo llaves"
            ],
            "correcta": 0,
            "explica": "Venta cruzada: accesorios, adhesivo PVC, lubricante, herramientas de corte, llaves y cámaras."
          },
          {
            "q": "¿Cuándo usar polietileno K10 en lugar de K4?",
            "opciones": [
              "Cuando la presión de la red es alta o el tramo es largo",
              "Siempre se usa K4",
              "K10 no existe",
              "Solo para riego"
            ],
            "correcta": 0,
            "explica": "K10 para redes de alta presión o tramos largos; K4 para presiones normales."
          },
          {
            "q": "¿Qué sellador se usa para juntas de PVC?",
            "opciones": [
              "Adhesivo especial para PVC o lubricante para juntas elásticas",
              "Silicona de baño",
              "Cemento Portland",
              "Pegamento escolar"
            ],
            "correcta": 0,
            "explica": "Se usa adhesivo especial para PVC o lubricante para juntas elásticas según el tipo."
          },
          {
            "q": "¿Qué precaución hay que tener al enterrar caños de polietileno?",
            "opciones": [
              "Asegurar que la clasificación K sea adecuada para la presión y proteger de golpes al rellenar",
              "No hay precauciones",
              "Solo pintar el caño",
              "Envolverlo en tela"
            ],
            "correcta": 0,
            "explica": "Verificar la clasificación K para la presión requerida y proteger el caño al rellenar la zanja."
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
              "Le explicás que esa instalación asegura cero filtraciones/fugas a largo plazo, evitando romper paredes en el futuro.",
              "Le das la razón y le sugerís atar todo con alambre.",
              "Le decís que no instale nada.",
              "Le sugerís usar manguera de jardín común."
            ],
            "correcta": 0,
            "explica": "Una instalación profesional en obra intermedia ahorra costos enormes de reparación oculta."
          },
          {
            "q": "Caso práctico: El cliente no sabe si comprar Cañerías Gruesas en la medida estándar o la superior. ¿Qué le aconsejás?",
            "opciones": [
              "Calcular la demanda requerida según los usuarios/caudal de la obra para no quedarse corto en horas pico de consumo.",
              "Llevar siempre lo más chico para ahorrar.",
              "Llevar la medida al azar.",
              "No calcular nada y comprar por color."
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
              "Termofusión (PPR): suelda caños y accesorios por calor, sin pérdidas",
              "Caños de plomo roscados",
              "Manguera de riego",
              "Caños de cemento"
            ],
            "correcta": 0,
            "explica": "La termofusión (PPR) es el estándar actual: suelda por calor, unión molecular sin pérdidas."
          },
          {
            "q": "¿Qué es el sistema Sigas?",
            "opciones": [
              "Sistema moderno de caños para gas por termofusión, rápido y seguro",
              "Un tipo de pintura",
              "Un tanque de agua",
              "Una herramienta eléctrica"
            ],
            "correcta": 0,
            "explica": "Sigas es el sistema moderno de caños y accesorios de gas por termofusión, rápido y seguro."
          },
          {
            "q": "¿Qué diferencia hay entre las líneas PN12 y PN20/PN25?",
            "opciones": [
              "PN12: agua fría. PN20/PN25: agua caliente o presiones mayores",
              "Son iguales",
              "PN12 para caliente",
              "PN25 para agua fría"
            ],
            "correcta": 0,
            "explica": "PN12 para agua fría; PN20/PN25 para agua caliente o presiones mayores."
          },
          {
            "q": "¿Quién debe instalar la instalación de gas?",
            "opciones": [
              "Un gasista matriculado, obligatorio por normativa",
              "Cualquier persona",
              "El dueño de la casa",
              "Un pintor"
            ],
            "correcta": 0,
            "explica": "La instalación de gas debe ser realizada por un gasista matriculado, es obligatorio."
          },
          {
            "q": "¿Qué son las rejillas de ventilación en instalaciones de gas?",
            "opciones": [
              "Son obligatorias por normativa para asegurar renovación de aire donde hay artefactos a gas",
              "Son opcionales y decorativas",
              "Solo para baños",
              "No se usan con gas"
            ],
            "correcta": 0,
            "explica": "Las rejillas de ventilación son OBLIGATORIAS por normativa donde hay artefactos a gas."
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
              "Codos, tees, uniones, curvas, tapones, llaves de paso de fusión, reducciones y adaptadores",
              "Solo caños",
              "Solo codos",
              "Solo llaves"
            ],
            "correcta": 0,
            "explica": "Accesorios: codos, tees, uniones, curvas, tapones, llaves de paso, reducciones y adaptadores metálicos."
          },
          {
            "q": "¿Qué diferencia hay entre el sistema epoxi y Sigas para gas?",
            "opciones": [
              "Epoxi: roscado tradicional. Sigas: termofusión moderna, más rápido y seguro",
              "Son iguales",
              "Epoxi es más moderno",
              "Sigas es roscado"
            ],
            "correcta": 0,
            "explica": "Epoxi: caños amarillos roscados. Sigas: termofusión moderna, más rápida y segura."
          },
          {
            "q": "¿Qué dato importante tienen los caños Sigas impreso?",
            "opciones": [
              "La fecha de vencimiento",
              "El color de pintura",
              "La marca del fabricante",
              "Nada impreso"
            ],
            "correcta": 0,
            "explica": "Los caños Sigas llevan impresa la fecha de vencimiento que hay que verificar."
          },
          {
            "q": "¿Qué complementos se venden con la instalación de agua por termofusión?",
            "opciones": [
              "Termofusora, boquillas, tijeras corta tubo, válvulas y flexibles",
              "Solo los caños",
              "Solo una llave inglesa",
              "Solo cemento"
            ],
            "correcta": 0,
            "explica": "Complementos: termofusora, boquillas, tijeras corta tubo, válvulas y flexibles."
          },
          {
            "q": "¿Qué accesorios clave se necesitan para la instalación de gas?",
            "opciones": [
              "Nichos para medidores, reguladores de presión, llaves de paso, rejillas de ventilación y flexibles certificados",
              "Solo caños",
              "Solo una llave de paso",
              "Solo un medidor"
            ],
            "correcta": 0,
            "explica": "Accesorios gas: nichos, reguladores, llaves de paso, rejillas de ventilación y flexibles certificados."
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
              "Caños PPR de termofusión + accesorios (codos, tees, llaves) + termofusora + flexibles + válvulas",
              "Solo caños de cobre",
              "Solo mangueras",
              "Solo una bomba"
            ],
            "correcta": 0,
            "explica": "Para casa nueva: caños PPR + accesorios completos + termofusora + flexibles + válvulas."
          },
          {
            "q": "¿Cuál es el argumento clave de la termofusión?",
            "opciones": [
              "Confiable, resiste presión y temperatura, fácil de instalar y cero pérdidas",
              "Es difícil de instalar",
              "Es temporal",
              "Solo dura un año"
            ],
            "correcta": 0,
            "explica": "Termofusión: confiable, resiste presión/temperatura, fácil de instalar y CERO pérdidas."
          },
          {
            "q": "Un cliente necesita conectar una cocina a la red de gas. ¿Qué le ofrecés?",
            "opciones": [
              "Flexibles certificados para gas + llave de paso aprobada + rejilla de ventilación obligatoria",
              "Solo un flexo cualquiera",
              "Una manguera de goma",
              "Solo una rejilla"
            ],
            "correcta": 0,
            "explica": "Para cocina a gas: flexibles CERTIFICADOS + llave aprobada + rejilla de ventilación obligatoria."
          },
          {
            "q": "¿Qué le decís a un cliente que quiere hacer la instalación de gas solo?",
            "opciones": [
              "Que es obligatorio que la realice un gasista matriculado, por seguridad y normativa",
              "Que puede hacerla sin problema",
              "Que vea un tutorial",
              "Que compre solo los caños"
            ],
            "correcta": 0,
            "explica": "OBLIGATORIO: la instalación de gas la realiza un gasista matriculado, por seguridad y normativa."
          },
          {
            "q": "¿Qué venta cruzada completa hacés con instalaciones de gas y agua?",
            "opciones": [
              "Caños + accesorios + herramientas de fusión + selladores aprobados + flexibles + rejillas + llaves",
              "Solo los caños",
              "Solo selladores",
              "Solo herramientas"
            ],
            "correcta": 0,
            "explica": "Venta cruzada: caños, accesorios, herramientas, selladores aprobados, flexibles, rejillas y llaves."
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
              "Le explicás que esa instalación asegura cero filtraciones/fugas a largo plazo, evitando romper paredes en el futuro.",
              "Le das la razón y le sugerís atar todo con alambre.",
              "Le decís que no instale nada.",
              "Le sugerís usar manguera de jardín común."
            ],
            "correcta": 0,
            "explica": "Una instalación profesional en obra intermedia ahorra costos enormes de reparación oculta."
          },
          {
            "q": "Caso práctico: El cliente no sabe si comprar Instalaciones Gas y Agua en la medida estándar o la superior. ¿Qué le aconsejás?",
            "opciones": [
              "Calcular la demanda requerida según los usuarios/caudal de la obra para no quedarse corto en horas pico de consumo.",
              "Llevar siempre lo más chico para ahorrar.",
              "Llevar la medida al azar.",
              "No calcular nada y comprar por color."
            ],
            "correcta": 0,
            "explica": "Dimensionar correctamente la instalación asegura presión, capacidad y confort constante."
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
              "La resistencia al desgaste: de PEI 1 (solo paredes) a PEI 5 (alto tránsito comercial)",
              "El precio del cerámico",
              "El color del esmalte",
              "El peso de la pieza"
            ],
            "correcta": 0,
            "explica": "El PEI indica resistencia al desgaste: 1 (paredes), 2 (bajo tránsito), 3 (moderado), 4 (alto), 5 (comercial)."
          },
          {
            "q": "¿Qué PEI mínimo se necesita para un piso de cocina?",
            "opciones": [
              "PEI 3 (tránsito moderado)",
              "PEI 1 (solo paredes)",
              "PEI 0",
              "No importa el PEI"
            ],
            "correcta": 0,
            "explica": "Para cocinas: PEI 3 mínimo por el tránsito moderado."
          },
          {
            "q": "¿Qué marcas de cerámicos trabaja Rosso?",
            "opciones": [
              "Cañuelas, Cortines, Allpa y Lourdes",
              "Solo Ferrum",
              "Solo Holcim",
              "Solo Weber"
            ],
            "correcta": 0,
            "explica": "Trabajamos cerámicos de Cañuelas, Cortines, Allpa y Lourdes."
          },
          {
            "q": "¿Por qué los cerámicos son higiénicos?",
            "opciones": [
              "Su superficie esmaltada es no porosa, fácil de limpiar y resistente a químicos",
              "Porque son de colores claros",
              "Porque son caros",
              "Porque son pesados"
            ],
            "correcta": 0,
            "explica": "La superficie esmaltada es no porosa, higiénica y resistente a productos de limpieza."
          },
          {
            "q": "¿Cuánto extra se recomienda comprar para cortes y desperdicios?",
            "opciones": [
              "10-15% extra",
              "Exactamente la cantidad justa",
              "50% extra",
              "1% extra"
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
              "Porcelanato: menos poroso y resiste cambios bruscos de temperatura",
              "Cerámico común",
              "Son iguales",
              "Ninguno sirve para exterior"
            ],
            "correcta": 0,
            "explica": "Para exterior: porcelanato, menos poroso y más resistente a cambios de temperatura."
          },
          {
            "q": "¿Cómo se calculan los zócalos necesarios?",
            "opciones": [
              "Perímetro del ambiente (descontando puertas) ÷ largo de la pieza + 10-15% extra",
              "Solo a ojo",
              "Se compra 1 por pared",
              "No se calculan"
            ],
            "correcta": 0,
            "explica": "Perímetro (sin puertas) ÷ largo de la pieza + 10-15% para cortes y desperdicios."
          },
          {
            "q": "¿Qué pegamento se usa para cerámicos estándar (<30×30)?",
            "opciones": [
              "Pegamento C1 (normal) en superficies absorbentes",
              "Pegamento C3 flexible",
              "Cemento Portland",
              "Silicona"
            ],
            "correcta": 0,
            "explica": "Para cerámicos estándar menores a 30×30 en bases absorbentes: pegamento C1 (normal)."
          },
          {
            "q": "¿Qué complementos se venden con los cerámicos?",
            "opciones": [
              "Pegamento C1/C2, pastina, guardacantos, listeles y sistemas de nivelación",
              "Solo los cerámicos",
              "Solo pegamento",
              "Solo pastina"
            ],
            "correcta": 0,
            "explica": "Complementos: pegamento (C1 o C2), pastina, guardacantos, listeles y sistemas de nivelación."
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
              "Piso: PEI 2 mínimo (bajo tránsito). Pared: PEI 1 sirve (solo pared)",
              "PEI 5 para todo",
              "PEI 1 para el piso",
              "No importa el PEI"
            ],
            "correcta": 0,
            "explica": "Baño: PEI 1 para paredes, PEI 2 mínimo para piso (bajo tránsito)."
          },
          {
            "q": "Un cliente dice que quiere cerámica para un local comercial. ¿Qué le recomendás?",
            "opciones": [
              "PEI 4 o 5 por el alto tránsito, o directamente porcelanato por mayor resistencia",
              "PEI 1 básico",
              "Cerámico de pared",
              "No se puede usar cerámica en locales"
            ],
            "correcta": 0,
            "explica": "Para local comercial: PEI 4-5 mínimo o porcelanato por su resistencia superior."
          },
          {
            "q": "¿Cuál es la venta cruzada completa de cerámicos?",
            "opciones": [
              "Cerámicos + pegamento adecuado + pastina + guardacantos + listeles + niveladores + disco diamantado",
              "Solo cerámicos",
              "Solo pegamento",
              "Solo pastina"
            ],
            "correcta": 0,
            "explica": "Venta cruzada: cerámicos + pegamento + pastina + guardacantos + listeles + niveladores + disco."
          },
          {
            "q": "¿Por qué es importante dejar juntas de dilatación?",
            "opciones": [
              "Para absorber movimientos del piso y prevenir fisuras o levantamientos",
              "Solo por estética",
              "No son importantes",
              "Para que el piso se vea rayado"
            ],
            "correcta": 0,
            "explica": "Las juntas absorben movimientos naturales del piso, previniendo fisuras y levantamientos."
          },
          {
            "q": "¿Cuándo ofrecer un sistema de nivelación?",
            "opciones": [
              "En colocaciones con piezas grandes o porcelanatos rectificados para evitar desniveles",
              "Solo con piezas muy pequeñas",
              "Nunca",
              "Solo en paredes"
            ],
            "correcta": 0,
            "explica": "Los niveladores son clave con piezas grandes y porcelanatos rectificados para un piso sin desniveles."
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
              "Le mostrás que Cerámicos y Revestimientos revaloriza la propiedad, aporta estética de vanguardia y requiere bajo o nulo mantenimiento con los años.",
              "Le das la razón y le sugerís dejar el contrapiso a la vista.",
              "Le decís que es un lujo innecesario.",
              "Le sugerís pintar con cal común encima."
            ],
            "correcta": 0,
            "explica": "Las terminaciones de calidad aumentan el valor del inmueble y evitan refacciones periódicas."
          },
          {
            "q": "Cliente indeciso: \"¿Qué insumo de colocación debo llevar sí o sí para Cerámicos y Revestimientos?\"",
            "opciones": [
              "El adhesivo, sellador o perfilería específica recomendada por el fabricante para garantizar la adhesión y el acabado impecable.",
              "Cualquier pegamento escolar sirve.",
              "No se necesita ningún insumo de pegado.",
              "Solamente agua."
            ],
            "correcta": 0,
            "explica": "Sin el producto de colocación/juntado adecuado, la terminación corre riesgo de desprenderse o mancharse."
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
              "Es más resistente, menos poroso y apto para usos más exigentes (interior/exterior)",
              "Son iguales",
              "El cerámico es mejor",
              "El porcelanato es de plástico"
            ],
            "correcta": 0,
            "explica": "El porcelanato es la versión premium: más resistente, menos poroso, apto para usos exigentes."
          },
          {
            "q": "¿Por qué el porcelanato necesita pegamento especial?",
            "opciones": [
              "Por ser menos poroso, requiere C2 o C3/flexible para correcta adherencia",
              "Cualquier pegamento sirve",
              "No necesita pegamento",
              "Se pega con silicona"
            ],
            "correcta": 0,
            "explica": "Su baja porosidad requiere pegamento específico (C2 o C3/flexible) para adherirse correctamente."
          },
          {
            "q": "¿Qué marcas de porcelanatos trabaja Rosso?",
            "opciones": [
              "Eliane, San Pietro, ILVA, Tendenza y Alberdi",
              "Solo Ferrum",
              "Solo Weber",
              "Solo Holcim"
            ],
            "correcta": 0,
            "explica": "Trabajamos con Eliane, San Pietro, ILVA, Tendenza y Alberdi."
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
              "Sí, su baja absorción de agua lo hace perfecto para exteriores y zonas húmedas",
              "No, solo para interiores",
              "Solo para paredes",
              "Solo para techos"
            ],
            "correcta": 0,
            "explica": "Sí, su bajísima absorción de agua lo hace perfecto para exteriores, piletas y zonas húmedas."
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
              "Poner pegamento en el piso Y en el reverso de la pieza; para placas de más de 45×45 cm",
              "Solo pegar el piso",
              "Solo pegar la pieza",
              "Pegar dos pisos a la vez"
            ],
            "correcta": 0,
            "explica": "Doble encolado: pegamento en piso y reverso de la pieza. Obligatorio para placas mayores a 45×45 cm."
          },
          {
            "q": "¿Por qué son útiles los sistemas de nivelación con porcelanatos?",
            "opciones": [
              "Cualquier desnivel se nota y se siente, especialmente en piezas grandes y a contraluz",
              "No son necesarios",
              "Solo son decorativos",
              "Solo para cerámicos pequeños"
            ],
            "correcta": 0,
            "explica": "Con piezas grandes, cualquier desnivel se nota al caminar y a contraluz. Los niveladores lo evitan."
          },
          {
            "q": "¿Qué pegamento se necesita para porcelanatos de gran formato (>60×60)?",
            "opciones": [
              "C3 (flexible/superformato) o mínimo C2 con doble encolado",
              "C1 normal",
              "Cemento Portland",
              "Silicona"
            ],
            "correcta": 0,
            "explica": "Para piezas grandes (>60×60): C3 flexible o mínimo C2 con doble encolado."
          },
          {
            "q": "¿Qué tipo de pastina se recomienda para juntas finas de porcelanato?",
            "opciones": [
              "Pastina epoxi, especialmente en zonas exigentes",
              "Pastina de cemento grueso",
              "Cemento puro",
              "No se usa pastina"
            ],
            "correcta": 0,
            "explica": "Para juntas finas o zonas exigentes: pastina epoxi, impermeable y anti-manchas."
          },
          {
            "q": "¿Qué herramienta se necesita para cortar porcelanato?",
            "opciones": [
              "Disco diamantado para cortes precisos",
              "Sierra para madera",
              "Serrucho manual",
              "No se puede cortar"
            ],
            "correcta": 0,
            "explica": "El porcelanato se corta con disco diamantado para obtener cortes precisos sin romper la pieza."
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
              "Porcelanato: apto para interior y exterior por su baja absorción de agua",
              "Cerámico PEI 1",
              "Piso vinílico",
              "Alfombra"
            ],
            "correcta": 0,
            "explica": "El porcelanato es ideal para unificar interior y exterior con el mismo diseño por su baja absorción."
          },
          {
            "q": "¿Cuál es la venta cruzada completa de porcelanatos?",
            "opciones": [
              "Porcelanato + C2/C3 + pastina epoxi + guardacantos metálicos + niveladores + disco diamantado + selladores",
              "Solo el porcelanato",
              "Solo pegamento",
              "Solo disco"
            ],
            "correcta": 0,
            "explica": "Venta cruzada: porcelanato + pegamento C2/C3 + pastina + guardacantos + niveladores + disco + selladores."
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
              "Porque su rigidez no absorbe movimientos del piso; sin juntas se puede rajar o levantar",
              "No son importantes",
              "Solo por estética",
              "El porcelanato es flexible"
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
              "El adhesivo, sellador o perfilería específica recomendada por el fabricante para garantizar la adhesión y el acabado impecable.",
              "Cualquier pegamento escolar sirve.",
              "No se necesita ningún insumo de pegado.",
              "Solamente agua."
            ],
            "correcta": 0,
            "explica": "Sin el producto de colocación/juntado adecuado, la terminación corre riesgo de desprenderse o mancharse."
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
              "Proteger las aristas de golpes y lograr una terminación más prolija en bordes",
              "Para pegar el cerámico",
              "Solo como decoración",
              "Para nivelar el piso"
            ],
            "correcta": 0,
            "explica": "Protegen las aristas de los golpes y logran una terminación más prolija que cortes en inglete."
          },
          {
            "q": "¿Qué es un listel decorativo?",
            "opciones": [
              "Pieza angosta para cortar la monotonía, dividir zonas o agregar detalles de diseño",
              "Un tipo de pegamento",
              "Una herramienta de corte",
              "Un tipo de pastina"
            ],
            "correcta": 0,
            "explica": "Listel: pieza decorativa usada para cortar la monotonía y dividir zonas en paredes/pisos."
          },
          {
            "q": "¿En qué materiales vienen los guardacantos?",
            "opciones": [
              "Aluminio, acero inoxidable o PVC",
              "Solo madera",
              "Solo plástico barato",
              "Solo cerámica"
            ],
            "correcta": 0,
            "explica": "Vienen en aluminio, acero inoxidable o PVC en distintas terminaciones y colores."
          },
          {
            "q": "¿A qué debe corresponder la altura del guardacanto?",
            "opciones": [
              "Al espesor del revestimiento (ej. 8, 10 o 12 mm)",
              "A la altura de la pared",
              "Al largo del ambiente",
              "A la junta"
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
            "explica": "Trabajamos perfilería de la marca Atrim."
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
              "No tienen forma definida"
            ],
            "correcta": 0,
            "explica": "Las formas más comunes son perfiles en L o en U."
          },
          {
            "q": "¿Dónde se colocan los guardacantos?",
            "opciones": [
              "En esquinas y bordes de los revestimientos",
              "En el centro de la habitación",
              "En el techo",
              "Debajo de las puertas"
            ],
            "correcta": 0,
            "explica": "Se colocan en esquinas y bordes expuestos de los revestimientos para proteger."
          },
          {
            "q": "¿Dónde se colocan típicamente los listeles?",
            "opciones": [
              "A media altura o para enmarcar sectores específicos",
              "En el piso exclusivamente",
              "Solo en exteriores",
              "En el techo"
            ],
            "correcta": 0,
            "explica": "Suelen colocarse a media altura o enmarcando sectores para dar un detalle de diseño."
          },
          {
            "q": "¿Qué evita el uso del guardacanto?",
            "opciones": [
              "El descascarillado del borde y hacer cortes en inglete (a 45 grados)",
              "Usar pegamento",
              "Pintar la pared",
              "Comprar cerámicos"
            ],
            "correcta": 0,
            "explica": "Evita cortes en inglete (frágiles) y protege el borde de golpes."
          },
          {
            "q": "¿Qué venta complementaria acompaña a los guardacantos?",
            "opciones": [
              "Revestimientos, pegamento y pastina",
              "Solo clavos",
              "Pintura sintética",
              "Madera"
            ],
            "correcta": 0,
            "explica": "Se venden junto con revestimientos, pegamento y pastina."
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
              "Guardacanto de acero inoxidable o aluminio de perfil recto (L) para un acabado minimalista",
              "De PVC blanco redondo",
              "Listel de madera",
              "No poner nada"
            ],
            "correcta": 0,
            "explica": "Para porcelanato rectificado moderno, el perfil recto de aluminio o acero inoxidable es ideal."
          },
          {
            "q": "El cliente quiere romper la monotonía de una pared lisa. ¿Qué le ofrecés?",
            "opciones": [
              "Listeles decorativos de vidrio, metal o piedra a media altura",
              "Pintar la pared",
              "Poner un mueble grande",
              "Nada"
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
              "Sí, como el resto del revestimiento se toma la junta con pastina",
              "No, nunca",
              "Solo si es de plástico",
              "Lleva silicona"
            ],
            "correcta": 0,
            "explica": "Sí, el listel se coloca con pegamento y lleva pastina como el resto del revestimiento."
          },
          {
            "q": "El cliente compra un listel de 5 cm de ancho. ¿Qué más se necesita calcular?",
            "opciones": [
              "La cantidad de metros lineales a cubrir para calcular cuántas piezas comprar",
              "Solo el peso",
              "El color de la pintura",
              "Nada más"
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
              "Le mostrás que Guardacantos y Listeles revaloriza la propiedad, aporta estética de vanguardia y requiere bajo o nulo mantenimiento con los años.",
              "Le das la razón y le sugerís dejar el contrapiso a la vista.",
              "Le decís que es un lujo innecesario.",
              "Le sugerís pintar con cal común encima."
            ],
            "correcta": 0,
            "explica": "Las terminaciones de calidad aumentan el valor del inmueble y evitan refacciones periódicas."
          },
          {
            "q": "Cliente indeciso: \"¿Qué insumo de colocación debo llevar sí o sí para Guardacantos y Listeles?\"",
            "opciones": [
              "El adhesivo, sellador o perfilería específica recomendada por el fabricante para garantizar la adhesión y el acabado impecable.",
              "Cualquier pegamento escolar sirve.",
              "No se necesita ningún insumo de pegado.",
              "Solamente agua."
            ],
            "correcta": 0,
            "explica": "Sin el producto de colocación/juntado adecuado, la terminación corre riesgo de desprenderse o mancharse."
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
              "Rellenar y sellar las juntas, brindando terminación y evitando el ingreso de humedad o suciedad",
              "Pegar el cerámico a la pared",
              "Nivelar el piso",
              "Solo decorar"
            ],
            "correcta": 0,
            "explica": "Sella y rellena las juntas, evita ingreso de humedad/suciedad y da terminación estética."
          },
          {
            "q": "¿Qué tipos principales de pastina hay?",
            "opciones": [
              "Cementicias (en polvo) y Epoxi (dos componentes)",
              "Solo líquidas",
              "Solo en pasta lista",
              "Plásticas"
            ],
            "correcta": 0,
            "explica": "Hay cementicias (en polvo con resinas) y epoxi (de dos componentes, más impermeables)."
          },
          {
            "q": "¿Qué marca de pastinas trabajamos?",
            "opciones": [
              "Weber (Saint-Gobain)",
              "Holcim",
              "Ferrum",
              "Loma Negra"
            ],
            "correcta": 0,
            "explica": "Trabajamos pastinas Weber."
          },
          {
            "q": "¿Qué pastina es ideal para baños y cocinas?",
            "opciones": [
              "Opciones antihongos y epoxi",
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
              "Disimula la junta dando un efecto continuo",
              "Destaca cada pieza",
              "Hace que el piso se vea más chico",
              "No cambia nada"
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
              "Solo del tamaño del ambiente",
              "Del color",
              "Del tipo de pegamento"
            ],
            "correcta": 0,
            "explica": "El consumo depende del tamaño de la pieza, ancho de la junta y su profundidad (espesor)."
          },
          {
            "q": "Para un porcelanato 60x60 con junta de 3 mm, ¿cuál es el rendimiento aproximado?",
            "opciones": [
              "1 kg cada 5-6 m²",
              "1 kg por m²",
              "10 kg por m²",
              "No lleva pastina"
            ],
            "correcta": 0,
            "explica": "Para 60x60 junta de 3mm, consume aprox. 1 kg cada 5-6 m²."
          },
          {
            "q": "¿Qué herramientas se usan para aplicar pastina?",
            "opciones": [
              "Espátula de goma para aplicar y esponjas para limpieza",
              "Llana dentada de metal",
              "Pincel y rodillo",
              "Martillo"
            ],
            "correcta": 0,
            "explica": "Se usa espátula (o llana) de goma para no rayar, y esponja para limpiar excedente."
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
              "Limpiar bien las juntas retirando restos de pegamento y polvo",
              "Humedecer toda la pared",
              "Pintar el cerámico",
              "Nada"
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
              "Una pastina en tono contrastante (ej. gris oscuro o negra) para destacar la junta",
              "Una pastina blanca para disimular",
              "Pastina transparente",
              "No usar pastina"
            ],
            "correcta": 0,
            "explica": "Tonos contrastantes destacan la grilla de las juntas, ideal para estilos más industriales."
          },
          {
            "q": "Para un piso de ducha donde el cliente se queja del moho, ¿qué solución le das?",
            "opciones": [
              "Pastina epoxi: es impermeable, antimanchas y evita la formación de hongos",
              "Pastina cementicia común",
              "Silicona acética en todo el piso",
              "Cemento puro"
            ],
            "correcta": 0,
            "explica": "La pastina Epoxi es la solución definitiva para zonas húmedas exigentes y evita manchas/moho."
          },
          {
            "q": "¿Qué venta cruzada básica hacés al vender pastina?",
            "opciones": [
              "Revestimientos, pegamento, espátula de goma y esponjas",
              "Solo pegamento",
              "Solo clavos",
              "Pintura interior"
            ],
            "correcta": 0,
            "explica": "Venta cruzada: revestimientos, pegamento, espátula de goma y esponja de limpieza."
          },
          {
            "q": "Si el cliente compra cerámicos chicos (20x20) con juntas de 5mm, ¿qué le advertís sobre la pastina?",
            "opciones": [
              "Que el consumo de pastina por m² será alto por la cantidad y grosor de juntas",
              "Que comprará poca pastina",
              "Que no lleva pastina",
              "Que rinde 20m² por kilo"
            ],
            "correcta": 0,
            "explica": "Piezas chicas con juntas anchas consumen mucha más pastina por metro cuadrado."
          },
          {
            "q": "¿Se puede usar pastina Weber en exteriores?",
            "opciones": [
              "Sí, hay opciones específicas para exterior que soportan cambios climáticos",
              "No, solo interior",
              "Solo la epoxi",
              "Nunca en exterior"
            ],
            "correcta": 0,
            "explica": "Sí, las pastinas de calidad soportan intemperie, usando la adecuada según la ficha técnica."
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
              "Le mostrás que Pastinas revaloriza la propiedad, aporta estética de vanguardia y requiere bajo o nulo mantenimiento con los años.",
              "Le das la razón y le sugerís dejar el contrapiso a la vista.",
              "Le decís que es un lujo innecesario.",
              "Le sugerís pintar con cal común encima."
            ],
            "correcta": 0,
            "explica": "Las terminaciones de calidad aumentan el valor del inmueble y evitan refacciones periódicas."
          },
          {
            "q": "Cliente indeciso: \"¿Qué insumo de colocación debo llevar sí o sí para Pastinas?\"",
            "opciones": [
              "El adhesivo, sellador o perfilería específica recomendada por el fabricante para garantizar la adhesión y el acabado impecable.",
              "Cualquier pegamento escolar sirve.",
              "No se necesita ningún insumo de pegado.",
              "Solamente agua."
            ],
            "correcta": 0,
            "explica": "Sin el producto de colocación/juntado adecuado, la terminación corre riesgo de desprenderse o mancharse."
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
              "Un mortero adhesivo que fija las piezas cerámicas/porcelanatos al soporte",
              "Pintura para pisos",
              "Un tipo de pastina",
              "Cemento para hormigón armado"
            ],
            "correcta": 0,
            "explica": "Es un mortero adhesivo específico para fijar cerámicas y porcelanatos al soporte."
          },
          {
            "q": "¿Para qué sirve el pegamento C1 (Normal)?",
            "opciones": [
              "Para cerámicos estándar menores a 30x30 en superficies absorbentes",
              "Para porcelanatos grandes",
              "Para piletas",
              "Para piso sobre piso"
            ],
            "correcta": 0,
            "explica": "C1 (Normal) es para piezas estándar (cerámicas de alta absorción) en bases porosas."
          },
          {
            "q": "¿Qué pegamento requiere un porcelanato?",
            "opciones": [
              "C2 (Mejorado) o superior (C3), debido a su baja porosidad",
              "C1 normal",
              "No lleva pegamento",
              "Silicona"
            ],
            "correcta": 0,
            "explica": "El porcelanato, por su baja absorción, requiere adhesivos mejorados C2 o C3."
          },
          {
            "q": "¿Qué rendimiento promedio tiene una bolsa de 30 kg en piezas medianas?",
            "opciones": [
              "Entre 6 y 8 m²",
              "1 m²",
              "20 m²",
              "15 m²"
            ],
            "correcta": 0,
            "explica": "Rinde entre 6 y 8 m² con llana y piezas medianas, en simple encolado."
          },
          {
            "q": "¿Qué marcas trabajamos?",
            "opciones": [
              "Weber y Tector Adhesivos (Holcim)",
              "Ferrum y Roca",
              "Atrim",
              "Ternium"
            ],
            "correcta": 0,
            "explica": "Trabajamos Weber (Saint-Gobain) y Tector (Holcim)."
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
              "Para piezas grandes (>60x60), piso sobre piso o superficies con vibración/losa radiante",
              "Para cerámicos chicos de pared",
              "Nunca",
              "Para piletas de lona"
            ],
            "correcta": 0,
            "explica": "C3 (Flexible o Superformato) es para grandes formatos, piso sobre piso o losa radiante."
          },
          {
            "q": "¿Qué pasa con el rendimiento en piezas grandes (doble encolado)?",
            "opciones": [
              "Baja a 4-5 m² por bolsa porque se aplica pegamento al piso y a la pieza",
              "Rinde más de 10 m²",
              "Es igual",
              "No se usa en piezas grandes"
            ],
            "correcta": 0,
            "explica": "Con doble encolado el consumo aumenta, rindiendo 4-5 m² por bolsa."
          },
          {
            "q": "¿Qué pegamento se usa en piscinas (inmersión constante)?",
            "opciones": [
              "R2 (reactivo epoxi/poliuretánico) o específicos para piscinas impermeables",
              "C1 Normal",
              "Cemento común",
              "Cualquiera sirve"
            ],
            "correcta": 0,
            "explica": "Para piscinas se usa adhesivo específico R2 o de altas prestaciones para inmersión constante."
          },
          {
            "q": "¿Qué porcentaje extra de pegamento se recomienda comprar?",
            "opciones": [
              "Un 10 % extra para desperdicios y nivelaciones de carpeta",
              "No se compra extra",
              "Un 50% extra",
              "Un 1% extra"
            ],
            "correcta": 0,
            "explica": "Se suma un 10% extra por desperdicios o consumo adicional al nivelar la carpeta."
          },
          {
            "q": "¿Qué herramienta es obligatoria para aplicar el pegamento?",
            "opciones": [
              "Llana dentada, de tamaño adecuado a la pieza",
              "Pincel",
              "Espátula de goma",
              "Martillo"
            ],
            "correcta": 0,
            "explica": "Se aplica con llana dentada; el tamaño del diente depende del tamaño de la pieza."
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
              "Pegamento C3 flexible (piso sobre piso / grandes formatos) y doble encolado",
              "C1 normal",
              "Silicona",
              "Cemento de albañilería"
            ],
            "correcta": 0,
            "explica": "Gran formato + piso sobre piso exige C3 flexible obligatoriamente."
          },
          {
            "q": "Un albañil dice que el porcelanato se le despegó usando C1. ¿Qué le explicás?",
            "opciones": [
              "Que el porcelanato no absorbe humedad, por lo que el C1 (mecánico) no agarra. Necesitaba C2 (químico)",
              "Que le puso poca agua",
              "Que el C1 es para piletas",
              "Que fue culpa del cerámico"
            ],
            "correcta": 0,
            "explica": "El C1 es de adherencia mecánica (poros); el porcelanato necesita C2 (adherencia química)."
          },
          {
            "q": "¿Cómo se calcula si lleva doble encolado?",
            "opciones": [
              "Es obligatorio para placas mayores a 45x45 cm o en zonas de alto tránsito / exterior",
              "Solo si el cliente quiere",
              "Nunca se usa",
              "Solo en paredes"
            ],
            "correcta": 0,
            "explica": "Piezas >45x45 cm o exigencias altas requieren pegar en el soporte y en la pieza."
          },
          {
            "q": "Un cliente compra 50 m² de cerámico 30x30 y pastina. ¿Cuánto C1 le vendés?",
            "opciones": [
              "Unas 7-8 bolsas de 30 kg (50 m² / 7 m² aprox + desperdicio)",
              "1 bolsa",
              "20 bolsas",
              "No necesita"
            ],
            "correcta": 0,
            "explica": "50 / 7 = 7.14 bolsas. Se venden 8 para cubrir el 10% de desperdicio."
          },
          {
            "q": "¿Qué venta cruzada le hacés al cliente que lleva pegamento y porcelanato de 60x120?",
            "opciones": [
              "Pastina epoxi, llana dentada de 12 mm o más, sistemas de nivelación y disco diamantado",
              "Llana lisa y silicona",
              "Nada más",
              "Pintura y rodillo"
            ],
            "correcta": 0,
            "explica": "Para 60x120: llana grande (12mm+), niveladores, disco diamantado y pastina adecuada."
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
              "El adhesivo, sellador o perfilería específica recomendada por el fabricante para garantizar la adhesión y el acabado impecable.",
              "Cualquier pegamento escolar sirve.",
              "No se necesita ningún insumo de pegado.",
              "Solamente agua."
            ],
            "correcta": 0,
            "explica": "Sin el producto de colocación/juntado adecuado, la terminación corre riesgo de desprenderse o mancharse."
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
              "Los desniveles o 'dientes' entre cerámicos/porcelanatos al colocarlos",
              "Que la junta se manche",
              "Que el pegamento se seque rápido",
              "Que la pieza se raye"
            ],
            "correcta": 0,
            "explica": "Evitan los desniveles ('dientes' o cejas) asegurando una superficie perfectamente plana."
          },
          {
            "q": "¿En qué tipo de placas son indispensables?",
            "opciones": [
              "En porcelanatos grandes o rectificados, donde los desniveles son muy notorios",
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
              "Clips (arcos/bases) descartables, cuñas reutilizables y pinza de tensión",
              "Solo una cuña de madera",
              "Solo clips descartables",
              "Tornillos de metal"
            ],
            "correcta": 0,
            "explica": "El sistema estándar incluye clip (base descartable), cuña reutilizable y pinza de ajuste."
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
            "explica": "Los sistemas de nivelación son de marca Atrim."
          },
          {
            "q": "¿El clip / base se puede volver a usar?",
            "opciones": [
              "No, es descartable. Se rompe y la base queda debajo del piso",
              "Sí, es infinito",
              "Solo 3 veces",
              "Se derrite con el tiempo"
            ],
            "correcta": 0,
            "explica": "El clip es descartable: una vez fraguado el pegamento, se golpea y se rompe (la base queda abajo)."
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
              "Para ajustar las cuñas en los clips con la presión correcta de forma rápida y pareja",
              "Para cortar el cerámico",
              "Para sacar clavos",
              "Para mezclar pegamento"
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
              "Usa tornillos descartables con tuercas reutilizables que nivelan al enroscarse (no usa pinza)",
              "Usa clavos de acero",
              "Usa alambre galvanizado",
              "Es un pegamento líquido"
            ],
            "correcta": 0,
            "explica": "El sistema de campana o rosca usa un espárrago descartable y una campana/tuerca reutilizable."
          },
          {
            "q": "¿Cuándo se retiran las cuñas y se rompen los clips?",
            "opciones": [
              "Una vez que el pegamento haya fraguado/secado completamente (generalmente al día siguiente)",
              "A los 5 minutos",
              "Antes de poner la cuña",
              "Al mes"
            ],
            "correcta": 0,
            "explica": "Se retiran al día siguiente (cuando el pegamento secó) con un golpe de mazo de goma lateral."
          },
          {
            "q": "¿Por qué invertir en niveladores ahorra plata al final?",
            "opciones": [
              "Ahorra tiempo de colocación y asegura un resultado profesional, evitando levantar pisos mal colocados",
              "Porque los regalan",
              "Porque reemplazan al pegamento",
              "No ahorran plata"
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
              "Depende del tamaño, pero en formatos grandes suelen ir 4 a 6 clips por pieza",
              "1 por ambiente",
              "100 por pieza",
              "No se puede saber"
            ],
            "correcta": 0,
            "explica": "Para 60x120 se ponen al menos 2 en el lado corto y 3 o 4 en el largo."
          },
          {
            "q": "El albañil dice que usa cruces (separadores) comunes. ¿Qué le decís?",
            "opciones": [
              "Las cruces solo separan (dan la junta), pero no nivelan las alturas. El nivelador hace ambas cosas",
              "Que las cruces son mejores",
              "Que es lo mismo",
              "Que use escarbadientes"
            ],
            "correcta": 0,
            "explica": "El separador común no tracciona la pieza para igualar alturas; el sistema de nivelación sí."
          },
          {
            "q": "El cliente quiere comprar todo junto. ¿Cómo le vendés el kit inicial?",
            "opciones": [
              "Le ofrezco el kit completo (pinza + cuñas reutilizables) y la cantidad de clips descartables según los m²",
              "Solo los clips descartables",
              "Solo la pinza",
              "Solo las cuñas"
            ],
            "correcta": 0,
            "explica": "Se vende el kit (herramienta + cuñas que le quedan para siempre) y bolsas de clips según sus m²."
          },
          {
            "q": "El porcelanato rectificado tiene borde a 90°. ¿Por qué el 'diente' es crítico ahí?",
            "opciones": [
              "Porque al no tener borde biselado, cualquier milímetro de desnivel se nota, corta o tropieza",
              "Porque se despinta",
              "No es crítico",
              "Porque no se puede limpiar"
            ],
            "correcta": 0,
            "explica": "El borde a 90° hace que un mínimo desnivel ('ceja') lastime el pie o ensucie visualmente el piso."
          },
          {
            "q": "¿Qué le decís a un cliente que quiere poner porcelanato brillante a contraluz (frente a un ventanal)?",
            "opciones": [
              "Que los niveladores son indispensables, porque a contraluz el brillo acentúa cualquier defecto visual de nivel",
              "Que compre cerámico opaco",
              "Que pinte la ventana",
              "Que no use niveladores"
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
              "Le mostrás que Sistemas de Nivelación revaloriza la propiedad, aporta estética de vanguardia y requiere bajo o nulo mantenimiento con los años.",
              "Le das la razón y le sugerís dejar el contrapiso a la vista.",
              "Le decís que es un lujo innecesario.",
              "Le sugerís pintar con cal común encima."
            ],
            "correcta": 0,
            "explica": "Las terminaciones de calidad aumentan el valor del inmueble y evitan refacciones periódicas."
          },
          {
            "q": "Cliente indeciso: \"¿Qué insumo de colocación debo llevar sí o sí para Sistemas de Nivelación?\"",
            "opciones": [
              "El adhesivo, sellador o perfilería específica recomendada por el fabricante para garantizar la adhesión y el acabado impecable.",
              "Cualquier pegamento escolar sirve.",
              "No se necesita ningún insumo de pegado.",
              "Solamente agua."
            ],
            "correcta": 0,
            "explica": "Sin el producto de colocación/juntado adecuado, la terminación corre riesgo de desprenderse o mancharse."
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
              "Se instala de forma rápida y limpia sobre el piso existente sin obra húmeda",
              "Son más baratos que la tierra",
              "Solo sirven para paredes",
              "Son de madera natural"
            ],
            "correcta": 0,
            "explica": "Su gran atractivo es que renuevan el espacio en seco, rápido y sobre pisos existentes."
          },
          {
            "q": "¿Qué significa que un piso sea SPC?",
            "opciones": [
              "Stone Plastic Composite: núcleo rígido de piedra caliza y PVC, muy resistente al agua y golpes",
              "Super Piso Cerámico",
              "Sin Pegamento Cualquiera",
              "Solo Plástico Común"
            ],
            "correcta": 0,
            "explica": "SPC (Stone Plastic Composite) tiene un núcleo de piedra caliza y PVC, rígido e hidrófugo."
          },
          {
            "q": "¿Cómo es el sistema de instalación Click?",
            "opciones": [
              "Es un encastre flotante, las piezas hacen 'click' entre sí sin necesidad de adhesivos",
              "Se pegan con cemento Portland",
              "Se clavan al piso",
              "Se sueldan con calor"
            ],
            "correcta": 0,
            "explica": "El sistema Click es un encastre mecánico flotante (no va pegado al piso base)."
          },
          {
            "q": "¿El piso SPC resiste el agua?",
            "opciones": [
              "Sí, ofrece máxima resistencia al agua, ideal para cocinas o lavaderos",
              "No, se pudre como la madera",
              "Solo un poco",
              "Se desarma"
            ],
            "correcta": 0,
            "explica": "A diferencia del piso flotante de MDF, el SPC es 100% resistente al agua."
          },
          {
            "q": "¿Qué diseños suelen imitar los pisos vinílicos?",
            "opciones": [
              "Madera, piedra o cemento",
              "Solo colores lisos",
              "Solo dibujos de animales",
              "Solo ladrillo visto"
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
              "Debe estar limpia, seca y perfectamente nivelada",
              "No importa cómo esté",
              "Debe estar mojada",
              "Debe tener alfombra vieja"
            ],
            "correcta": 0,
            "explica": "El piso flotante copia o se quiebra si hay desniveles grandes; la base debe estar firme y nivelada."
          },
          {
            "q": "¿Qué se coloca entre el piso base y el vinílico?",
            "opciones": [
              "Una manta niveladora o acústica de espuma (si el piso no la trae incorporada)",
              "Pegamento C3",
              "Nada",
              "Cartón corrugado"
            ],
            "correcta": 0,
            "explica": "Se usa una manta acústica/niveladora (algunos SPC ya la traen pegada en la base EVA)."
          },
          {
            "q": "¿Qué diferencia al SPC de un piso vinílico LVT (Luxury Vinyl Tile) común?",
            "opciones": [
              "El SPC tiene núcleo rígido de piedra (no copia imperfecciones); el LVT es flexible",
              "Son exactamente iguales",
              "El SPC es más blando",
              "El SPC es de papel"
            ],
            "correcta": 0,
            "explica": "El SPC es rígido por su núcleo de piedra, por lo que disimula mejor pequeñas imperfecciones de la base."
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
              "Trincheta o sierra para cortar, mazo de goma, separadores perimetrales, cinta métrica y escuadra",
              "Llana dentada y pastina",
              "Hormigonera",
              "Soldadora eléctrica"
            ],
            "correcta": 0,
            "explica": "Es instalación en seco: se corta con trincheta/sierra y se encastra."
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
              "Piso vinílico Click: puede instalarlo rápido y, al ser flotante, desarmarlo y llevárselo el día de mañana",
              "Cerámico común pegado con C1",
              "Porcelanato rectificado",
              "Pintura para pisos"
            ],
            "correcta": 0,
            "explica": "El piso flotante sistema click se puede desarmar y recuperar, ideal para alquileres."
          },
          {
            "q": "¿Por qué es importante dejar dilatación perimetral (separadores) al instalar un piso flotante?",
            "opciones": [
              "Porque el piso se expande o contrae con los cambios de temperatura; sin espacio, se levanta",
              "Por decoración",
              "Para que pase el agua",
              "No es necesario"
            ],
            "correcta": 0,
            "explica": "El plástico y la piedra dilatan; hay que dejar unos 5-8 mm en los bordes cubiertos luego por el zócalo."
          },
          {
            "q": "¿Cuál es la venta complementaria obligada del piso vinílico?",
            "opciones": [
              "Zócalos (vinílicos o MDF), perfiles de transición, manta niveladora y adhesivo para los zócalos",
              "Pastina y cemento",
              "Clavos de techo",
              "Lija fina"
            ],
            "correcta": 0,
            "explica": "Venta cruzada: Zócalos, perfiles de puerta/transición y la manta niveladora."
          },
          {
            "q": "El cliente quiere poner el piso SPC sobre una carpeta muy despareja y poceada. ¿Qué le advertís?",
            "opciones": [
              "Que primero debe arreglar y nivelar la carpeta (ej. con masa niveladora), sino el encastre click se puede romper al pisarlo",
              "Que lo ponga igual, el SPC arregla todo",
              "Que ponga doble manta",
              "Que lo pegue con silicona"
            ],
            "correcta": 0,
            "explica": "Si la base tiene huecos o lomos, la presión al pisar quebrará el encastre ('click'). La base debe ser plana."
          },
          {
            "q": "¿Qué argumento usás frente al piso de madera natural?",
            "opciones": [
              "El SPC tiene la misma estética cálida, pero no requiere mantenimiento, no se raya tan fácil, no se pudre y es más económico",
              "Que la madera es más barata",
              "Que el SPC atrae termitas",
              "Que hay que lustrarlo"
            ],
            "correcta": 0,
            "explica": "El SPC da look madera sin el dolor de cabeza de pulir, plastificar, cuidar del agua o termitas."
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
              "Le mostrás que Pisos Vinílicos SPC y Click revaloriza la propiedad, aporta estética de vanguardia y requiere bajo o nulo mantenimiento con los años.",
              "Le das la razón y le sugerís dejar el contrapiso a la vista.",
              "Le decís que es un lujo innecesario.",
              "Le sugerís pintar con cal común encima."
            ],
            "correcta": 0,
            "explica": "Las terminaciones de calidad aumentan el valor del inmueble y evitan refacciones periódicas."
          },
          {
            "q": "Cliente indeciso: \"¿Qué insumo de colocación debo llevar sí o sí para Pisos Vinílicos SPC y Click?\"",
            "opciones": [
              "El adhesivo, sellador o perfilería específica recomendada por el fabricante para garantizar la adhesión y el acabado impecable.",
              "Cualquier pegamento escolar sirve.",
              "No se necesita ningún insumo de pegado.",
              "Solamente agua."
            ],
            "correcta": 0,
            "explica": "Sin el producto de colocación/juntado adecuado, la terminación corre riesgo de desprenderse o mancharse."
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
              "Cubre la junta de dilatación obligatoria entre el piso y la pared, y protege la pared de golpes",
              "Solo por estética",
              "Para sostener la pared",
              "Para pegar el piso"
            ],
            "correcta": 0,
            "explica": "Oculta el espacio de dilatación perimetral (5-8 mm) y protege la parte inferior del muro."
          },
          {
            "q": "¿Qué son los perfiles de transición?",
            "opciones": [
              "Perfiles que unen el piso vinílico con otros pisos de distintos materiales (ej. cerámica de la cocina)",
              "Un tipo de zócalo alto",
              "Un marco de ventana",
              "Una herramienta de corte"
            ],
            "correcta": 0,
            "explica": "Resuelven el encuentro entre dos pisos diferentes (alfombra a vinílico, cerámica a vinílico)."
          },
          {
            "q": "¿De qué materiales son los zócalos más comunes para estos pisos?",
            "opciones": [
              "Zócalos vinílicos (PVC) o de MDF recubierto resistentes a la humedad",
              "Madera de pino en crudo",
              "Ladrillo",
              "Acero estructural"
            ],
            "correcta": 0,
            "explica": "Suelen ser de poliestireno (EPS), PVC o MDF laminado o foliado a tono con el piso."
          },
          {
            "q": "¿Cómo se fijan habitualmente los zócalos EPS/MDF modernos?",
            "opciones": [
              "Con adhesivo de montaje (doble contacto o siliconas neutras/PU) directamente a la pared",
              "Con clavos oxidados",
              "Con cemento Portland",
              "No se fijan, se apoyan"
            ],
            "correcta": 0,
            "explica": "Se instalan rápido y limpio usando adhesivo de montaje de curado rápido."
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
              "Para cubrir juntas en superficies muy grandes (ej. más de 8x8 metros) permitiendo el movimiento del piso",
              "Para los baños",
              "Para decorar la pared",
              "Para los escalones"
            ],
            "correcta": 0,
            "explica": "Superficies extensas requieren dilatación intermedia; el perfil cubre ese hueco sin trabar el piso."
          },
          {
            "q": "¿Qué perfil se usa para rematar un escalón revestido en piso vinílico?",
            "opciones": [
              "Perfil de ángulo o nariz de escalón, para proteger el borde y evitar tropiezos",
              "Zócalo de 10 cm",
              "Perfil de transición curvo",
              "Guardacanto de baño"
            ],
            "correcta": 0,
            "explica": "La 'nariz de escalón' cubre el encuentro a 90° de la huella y contrahuella del escalón."
          },
          {
            "q": "¿Por qué se prefieren zócalos de EPS/PVC en lugar de madera maciza para baños?",
            "opciones": [
              "Porque son 100% resistentes a la humedad y no se pudren ni deforman",
              "Porque son más pesados",
              "Porque no existen de madera",
              "Porque huelen bien"
            ],
            "correcta": 0,
            "explica": "El EPS (Poliestireno expandido / Telgopor de alta densidad) o PVC no absorben agua, ideal si se lava el piso."
          },
          {
            "q": "¿A qué elemento se fija SIEMPRE el zócalo?",
            "opciones": [
              "A la pared, NUNCA al piso, para permitir que el piso flotante dilate por debajo",
              "Al piso flotante",
              "Al mueble de la cocina",
              "A la puerta"
            ],
            "correcta": 0,
            "explica": "Regla de oro: se pega/clava a la pared. Si lo pegás al piso flotante, lo trabás y se levanta."
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
              "Sumo los metros perimetrales de cada dormitorio, descuento el ancho de las puertas y sumo un 10% para cortes",
              "Calculo por m² del cuarto",
              "Le doy 1 por puerta",
              "Mido el techo"
            ],
            "correcta": 0,
            "explica": "Los zócalos se calculan por metro lineal perimetral, descontando aberturas y sumando desperdicio."
          },
          {
            "q": "El cliente tiene un piso existente con zócalos de madera empotrados que no quiere sacar. ¿Qué le ofrecés?",
            "opciones": [
              "Contrazócalos o molduras de cuarto de caña (varillas) que se pegan sobre el zócalo viejo para tapar la nueva junta",
              "Que rompa la pared sí o sí",
              "Que deje el hueco libre",
              "Que ponga cemento en la junta"
            ],
            "correcta": 0,
            "explica": "Existen perfiles 'cuarto caña' o contrazócalos diseñados para cubrir la dilatación sin quitar el zócalo original."
          },
          {
            "q": "¿Qué le vendés al cliente para las puertas, donde el SPC se encuentra con la cerámica del pasillo?",
            "opciones": [
              "Perfil de transición Atrim (reductor si hay desnivel, o tipo T si están al mismo nivel)",
              "Cinta aisladora",
              "Pastina",
              "Nada, que quede el corte vivo"
            ],
            "correcta": 0,
            "explica": "La transición tapa la dilatación en la puerta. Tipo T para niveles iguales, reductor para desnivel."
          },
          {
            "q": "¿Por qué el adhesivo de montaje es clave en la venta cruzada?",
            "opciones": [
              "Porque es la mejor forma de fijar zócalos EPS/MDF sin clavar, evitando marcar el frente del zócalo",
              "Porque es barato",
              "Porque sella caños de gas",
              "Para pegar las placas SPC entre sí"
            ],
            "correcta": 0,
            "explica": "El adhesivo garantiza una fijación fuerte y estética (sin agujeros de clavos) contra la pared."
          },
          {
            "q": "Un cliente pregunta si puede pintar el zócalo de EPS blanco. ¿Qué respondés?",
            "opciones": [
              "Sí, muchos zócalos EPS vienen prepintados y aceptan cualquier pintura al agua o esmalte para combinar con la pared",
              "No, el plástico no se pinta",
              "Se derrite con la pintura",
              "Solo con aerosol automotor"
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
              "Le mostrás que Zócalos y Perfiles Vinílicos revaloriza la propiedad, aporta estética de vanguardia y requiere bajo o nulo mantenimiento con los años.",
              "Le das la razón y le sugerís dejar el contrapiso a la vista.",
              "Le decís que es un lujo innecesario.",
              "Le sugerís pintar con cal común encima."
            ],
            "correcta": 0,
            "explica": "Las terminaciones de calidad aumentan el valor del inmueble y evitan refacciones periódicas."
          },
          {
            "q": "Cliente indeciso: \"¿Qué insumo de colocación debo llevar sí o sí para Zócalos y Perfiles Vinílicos?\"",
            "opciones": [
              "El adhesivo, sellador o perfilería específica recomendada por el fabricante para garantizar la adhesión y el acabado impecable.",
              "Cualquier pegamento escolar sirve.",
              "No se necesita ningún insumo de pegado.",
              "Solamente agua."
            ],
            "correcta": 0,
            "explica": "Sin el producto de colocación/juntado adecuado, la terminación corre riesgo de desprenderse o mancharse."
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
              "El largo usa mochila de apoyar; el corto usa depósito embutido en pared o válvula",
              "El largo es para gente alta",
              "El corto no tiene agua",
              "El largo va pegado al techo"
            ],
            "correcta": 0,
            "explica": "El largo tiene la base extendida para apoyar la mochila (depósito). El corto requiere depósito en pared."
          },
          {
            "q": "¿Qué es un inodoro suspendido?",
            "opciones": [
              "Se fija a la pared sin tocar el piso, facilitando limpieza y dando un look moderno. Usa depósito embutido",
              "Un inodoro de colgar ropa",
              "Uno que cuelga del techo",
              "No existe"
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
            "explica": "Líneas de Ferrum: Bari (moderna redonda), Andina (clásica), Varese (cuadrada premium)."
          },
          {
            "q": "¿Cuál es la ventaja de la línea de inodoros para discapacitados/accesibilidad?",
            "opciones": [
              "Tienen mayor altura y diseño adaptado cumpliendo normativas vigentes",
              "Son más baratos",
              "Tienen luces LED",
              "Son más pequeños"
            ],
            "correcta": 0,
            "explica": "Facilitan la transferencia desde sillas de ruedas por tener mayor altura (normativa)."
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
              "Desagüe al piso (la mayoría a 25 cm de la pared terminada)",
              "Desagüe lateral",
              "Desagüe al techo",
              "No tienen desagüe, evaporan"
            ],
            "correcta": 0,
            "explica": "El estándar de descarga cloacal del inodoro largo/corto es hacia el piso (normalmente a 25cm)."
          },
          {
            "q": "¿Qué elemento es necesario para instalar un inodoro suspendido de forma segura?",
            "opciones": [
              "Una estructura de soporte metálica (bastidor) dentro de la pared donde se anclan los pernos",
              "Cinta doble faz",
              "Solo pegamento de contacto",
              "Clavos comunes"
            ],
            "correcta": 0,
            "explica": "Requieren un bastidor metálico (o muro macizo preparado) para soportar el peso de la loza y la persona."
          },
          {
            "q": "¿Cómo se fija el inodoro largo al piso?",
            "opciones": [
              "Con un juego de fijación (tornillos y tacos de bronce/plástico especiales) a la carpeta, más sellador en la base",
              "Con cemento Portland puro",
              "Con adhesivo vinílico",
              "Se apoya sin fijar"
            ],
            "correcta": 0,
            "explica": "Se usan tornillos fijadores al piso y masilla/silicona/cemento blanco en el perímetro."
          },
          {
            "q": "¿Para qué inodoro se recomienda la placa de accionamiento de pared?",
            "opciones": [
              "Para inodoro corto o suspendido (con depósito embutido)",
              "Para el inodoro largo",
              "Para el bidet",
              "Para la ducha"
            ],
            "correcta": 0,
            "explica": "Al estar el depósito oculto en la pared, el botón de descarga es una 'placa de accionamiento' mural."
          },
          {
            "q": "¿Las tapas de inodoro (asientos) vienen siempre incluidas en el precio?",
            "opciones": [
              "Por lo general se venden por separado, para que el cliente elija el material (urea, plástico, cierre suave)",
              "Sí, vienen soldadas a la loza",
              "No usamos tapas en Argentina",
              "Siempre son de madera gratis"
            ],
            "correcta": 0,
            "explica": "Los asientos casi siempre se compran por separado; hay de distintos materiales y mecanismos."
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
              "Un inodoro corto con depósito embutido (o válvula), que roba menos cm al ambiente",
              "Un inodoro largo con doble mochila",
              "Un inodoro de accesibilidad",
              "Un inodoro con bidet incorporado de gran tamaño"
            ],
            "correcta": 0,
            "explica": "El inodoro corto elimina el volumen de la mochila, ganando valiosos centímetros de profundidad."
          },
          {
            "q": "El cliente quiere un baño ultra moderno y minimalista, fácil de fregar. ¿Qué le vendés?",
            "opciones": [
              "Inodoro suspendido + depósito embutido + placa dual + bidet suspendido (dejando el piso libre)",
              "Línea Andina clásica",
              "Inodoro largo estándar",
              "Letrina"
            ],
            "correcta": 0,
            "explica": "Los sanitarios suspendidos son el pináculo del diseño minimalista y facilitan enormemente limpiar el piso."
          },
          {
            "q": "¿Qué argumentás para convencer a alguien de comprar un asiento con 'caída amortiguada' (Soft Close)?",
            "opciones": [
              "Evita ruidos molestos (golpes), alarga la vida útil de la loza y evita accidentes con los dedos de los niños",
              "No sirve para nada",
              "Es para que el agua caiga lento",
              "Es obligatorio por ley"
            ],
            "correcta": 0,
            "explica": "El Soft Close cierra lenta y silenciosamente; seguridad y durabilidad extra que vale la diferencia de precio."
          },
          {
            "q": "¿Cuál es la venta cruzada perfecta si te compran un inodoro largo?",
            "opciones": [
              "Mochila a juego, asiento compatible, juego de fijación, conexión flexible y bidet de la misma línea",
              "Solo cemento",
              "Pintura de pared",
              "Una pala"
            ],
            "correcta": 0,
            "explica": "El 'combo sanitario': inodoro + mochila + tapa + fijación + bidet."
          },
          {
            "q": "¿Qué le preguntás al cliente si te pide un inodoro corto para un reemplazo de obra vieja?",
            "opciones": [
              "¿Tiene depósito en la pared (cisterna) o válvula tipo tecla? Para confirmar si la presión y conexión servirán",
              "De qué color es la toalla",
              "Qué día es",
              "Si le gusta el inodoro largo"
            ],
            "correcta": 0,
            "explica": "El corto necesita una fuente externa de agua; hay que saber si tiene depósito elevado viejo o si va a romper pared."
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
              "Le mostrás que Inodoros revaloriza la propiedad, aporta estética de vanguardia y requiere bajo o nulo mantenimiento con los años.",
              "Le das la razón y le sugerís dejar el contrapiso a la vista.",
              "Le decís que es un lujo innecesario.",
              "Le sugerís pintar con cal común encima."
            ],
            "correcta": 0,
            "explica": "Las terminaciones de calidad aumentan el valor del inmueble y evitan refacciones periódicas."
          },
          {
            "q": "Cliente indeciso: \"¿Qué insumo de colocación debo llevar sí o sí para Inodoros?\"",
            "opciones": [
              "El adhesivo, sellador o perfilería específica recomendada por el fabricante para garantizar la adhesión y el acabado impecable.",
              "Cualquier pegamento escolar sirve.",
              "No se necesita ningún insumo de pegado.",
              "Solamente agua."
            ],
            "correcta": 0,
            "explica": "Sin el producto de colocación/juntado adecuado, la terminación corre riesgo de desprenderse o mancharse."
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
              "La cantidad de agujeros: bidet de 1 agujero (para monocomando) o de 3 agujeros (para bimando tradicional)",
              "El tamaño de la mochila",
              "El color del botón",
              "La altura del techo"
            ],
            "correcta": 0,
            "explica": "El bidet debe venir perforado de fábrica según la grifería: 1 agujero (monocomando) o 3 (bimando)."
          },
          {
            "q": "¿Por qué el bidet debe ser de la misma línea que el inodoro?",
            "opciones": [
              "Para mantener la uniformidad estética (mismas formas y tonos de blanco) en el baño",
              "Porque sino explota",
              "Por obligación municipal",
              "No importa que sean distintos"
            ],
            "correcta": 0,
            "explica": "Se venden 'en juego' (ej. Inodoro Bari + Bidet Bari) para que el diseño y el color coincidan perfectamente."
          },
          {
            "q": "¿Qué tipos de instalación de bidet existen?",
            "opciones": [
              "De apoyar (estándar al piso) y suspendido (mural)",
              "De colgar en el techo",
              "De embutir en la ducha",
              "Portátiles de plástico"
            ],
            "correcta": 0,
            "explica": "Igual que los inodoros: los hay apoyados al piso o suspendidos en la pared."
          },
          {
            "q": "¿Qué característica tiene la lluvia de bidet tradicional en Argentina?",
            "opciones": [
              "Tiene transferencia con lluvia central (desde el fondo) o lavado perimetral, según modelo",
              "Sale desde el techo",
              "Sale agua hirviendo siempre",
              "No tiene lluvia, solo canilla"
            ],
            "correcta": 0,
            "explica": "La grifería de bidet típica argentina transfiere el agua a una ducha central invertida o rociador en el rebosadero."
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
              "La monocomando (1 agujero), controla temperatura y caudal con una mano y suele tener pico móvil/aireador",
              "Bimando de 5 agujeros",
              "Una canilla de jardín",
              "Grifería de pared"
            ],
            "correcta": 0,
            "explica": "El monocomando es tendencia. Muchos modernos no tienen 'lluvia inferior', sino pico direccionable."
          },
          {
            "q": "¿Qué se necesita para fijar el bidet al piso?",
            "opciones": [
              "Un juego de fijación para bidet (tacos y tornillos) y sellador perimetral",
              "Una mochila de 12 litros",
              "Llana dentada",
              "Viguetas Tensolite"
            ],
            "correcta": 0,
            "explica": "Se amura al piso igual que el inodoro, usando el kit de fijación correspondiente."
          },
          {
            "q": "¿Los bidets usan mochila/depósito?",
            "opciones": [
              "No, van conectados directamente a la red de agua (fría y caliente) mediante mangueras flexibles",
              "Sí, la misma que el inodoro",
              "Sí, una mochila más pequeña",
              "Van a una cisterna especial"
            ],
            "correcta": 0,
            "explica": "Funcionan con presión de red/tanque mediante flexibles conectados a las válvulas de la grifería."
          },
          {
            "q": "¿El bidet trae tapa (asiento)?",
            "opciones": [
              "Opcionalmente, se le puede colocar tapa como al inodoro, pero se vende por separado y es menos común",
              "Siempre viene con tapa obligatoria",
              "No existen tapas para bidet",
              "Viene con tapa de chapa"
            ],
            "correcta": 0,
            "explica": "Existen asientos de bidet para convertirlos en asiento extra o por estética, pero se venden aparte."
          },
          {
            "q": "¿Qué diferencia funcional hay entre el monocomando de bidet 'europeo' y el bimando clásico?",
            "opciones": [
              "El europeo suele lavar desde un pico superior orientable; el clásico lava desde una lluvia en el fondo de la loza",
              "Ninguna, son idénticos",
              "El clásico no tiene agua caliente",
              "El europeo es automático"
            ],
            "correcta": 0,
            "explica": "El monocomando (estilo europeo) suele usar un pico superior con rótula móvil, eliminando la lluvia sumergida."
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
              "Grifería FV (ej. Margot o Newport) para bidet de dos llaves (bimando) con transferencia",
              "Monocomando FV",
              "Canilla de lavadero",
              "Duchador manual"
            ],
            "correcta": 0,
            "explica": "Si la loza tiene 3 agujeros, REQUIERE grifería bimando tradicional de 2 llaves + transferencia central."
          },
          {
            "q": "El cliente quiere comprar el inodoro y bidet, y llevar grifería monocomando para todo. ¿Qué cuidado tenés?",
            "opciones": [
              "Chequear en el sistema que el código del bidet sea el de '1 agujero', sino el monocomando no le sirve",
              "Que compre el de 3 agujeros igual",
              "Que no compre monocomando",
              "No importa, el plomero hace los agujeros"
            ],
            "correcta": 0,
            "explica": "Es vital despachar la loza con 1 orificio; si le das el de 3, quedan 2 huecos feos sin tapar."
          },
          {
            "q": "¿Cuál es el combo completo de venta de un bidet?",
            "opciones": [
              "Loza bidet + Grifería adecuada + 2 flexibles mallados (fría/caliente) + Sifón/sopapa + Fijaciones",
              "Loza sola",
              "Loza + mochila",
              "Loza + adhesivo PVC"
            ],
            "correcta": 0,
            "explica": "Falta el desagüe (sifón y sopapa) y las conexiones de agua (flexibles), además de la grifería y fijación."
          },
          {
            "q": "El cliente te dice que en su baño no entra un bidet, pero quiere higiene íntima. ¿Qué alternativa de grifería podés ofrecer (si tuviéramos stock FV)?",
            "opciones": [
              "Una ducha manual o 'duchador higiénico' instalado junto al inodoro",
              "Que rompa la pared",
              "Un lavatorio más grande",
              "Que se bañe cada vez"
            ],
            "correcta": 0,
            "explica": "El duchador higiénico al lado del inodoro reemplaza al bidet en baños muy pequeños (tendencia global)."
          },
          {
            "q": "¿Qué problema puede tener el plomero si le vendés un bidet suspendido?",
            "opciones": [
              "Si el muro es hueco (drywall) y no puso bastidor previo de acero, el bidet se arranca al sentarse",
              "Que no hay agua",
              "Que el color no combine",
              "Que el bidet vuela"
            ],
            "correcta": 0,
            "explica": "Los suspendidos ejercen mucha palanca. Necesitan soporte interno (bastidor) sólido tras la pared."
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
              "Le mostrás que Bidet revaloriza la propiedad, aporta estética de vanguardia y requiere bajo o nulo mantenimiento con los años.",
              "Le das la razón y le sugerís dejar el contrapiso a la vista.",
              "Le decís que es un lujo innecesario.",
              "Le sugerís pintar con cal común encima."
            ],
            "correcta": 0,
            "explica": "Las terminaciones de calidad aumentan el valor del inmueble y evitan refacciones periódicas."
          },
          {
            "q": "Cliente indeciso: \"¿Qué insumo de colocación debo llevar sí o sí para Bidet?\"",
            "opciones": [
              "El adhesivo, sellador o perfilería específica recomendada por el fabricante para garantizar la adhesión y el acabado impecable.",
              "Cualquier pegamento escolar sirve.",
              "No se necesita ningún insumo de pegado.",
              "Solamente agua."
            ],
            "correcta": 0,
            "explica": "Sin el producto de colocación/juntado adecuado, la terminación corre riesgo de desprenderse o mancharse."
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
              "Un lavamanos que se apoya en una columna de loza, la cual oculta el desagüe y cañerías",
              "Una bacha de acero inoxidable",
              "Un lavatorio de vidrio",
              "Un inodoro especial"
            ],
            "correcta": 0,
            "explica": "El lavatorio tradicional de loza, donde la columna soporta peso y esconde la cañería."
          },
          {
            "q": "¿Qué es un lavatorio mural o de colgar?",
            "opciones": [
              "Un lavatorio que se fija directo a la pared (con ménsulas o tornillos), dejando el espacio abajo libre (sin columna)",
              "Un cuadro decorativo para el baño",
              "Un mueble de madera",
              "Una canilla exterior"
            ],
            "correcta": 0,
            "explica": "Va suspendido en la pared, ideal para espacios chicos o para poner un mueble debajo."
          },
          {
            "q": "¿Qué variable de la grifería debés considerar al vender el lavatorio?",
            "opciones": [
              "Si lleva grifería monocomando (1 agujero) o bimando (3 agujeros)",
              "El largo de la canilla",
              "El material de la manija",
              "Si lleva filtro"
            ],
            "correcta": 0,
            "explica": "Al igual que el bidet, la loza viene perforada para 1 o 3 agujeros desde fábrica."
          },
          {
            "q": "¿De qué material están hechos los lavatorios tradicionales que vendemos?",
            "opciones": [
              "De loza sanitaria esmaltada (blanca)",
              "De plástico acrílico",
              "De aluminio fundido",
              "De cemento alisado"
            ],
            "correcta": 0,
            "explica": "Fabricados en loza sanitaria vitrificada, marcas Ferrum, Roca, Capea."
          },
          {
            "q": "¿Qué ventaja tiene el lavatorio de colgar frente al de columna?",
            "opciones": [
              "Ahorra espacio, facilita la limpieza del piso y da un look visualmente más ligero",
              "Es más pesado",
              "Soporta 500 kg",
              "Lleva más agua"
            ],
            "correcta": 0,
            "explica": "Al no tener pedestal, el piso queda despejado, siendo ideal para baños chicos (toilettes)."
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
              "Sopapa y sifón (usualmente cromados o de diseño, ya que quedan a la vista)",
              "Una cámara séptica",
              "Manguera negra de riego",
              "Nada, cae al piso"
            ],
            "correcta": 0,
            "explica": "Como no hay columna que oculte, el sifón queda a la vista, por lo que se venden sifones cromados estéticos."
          },
          {
            "q": "¿Cómo se amura un lavatorio de colgar a la pared?",
            "opciones": [
              "Con un juego de fijación específico (pernos) y, en algunos modelos grandes, ménsulas metálicas de soporte",
              "Con cinta adhesiva",
              "Con clavos de acero",
              "Lo sostiene la grifería"
            ],
            "correcta": 0,
            "explica": "Llevan pernos de anclaje (tarugo y tornillo especial) o ménsulas bajo la loza."
          },
          {
            "q": "¿La columna del lavatorio va pegada al piso?",
            "opciones": [
              "Se suele afirmar con sellador (silicona/masilla) o tornillos, apoyando el peso de la pileta",
              "Se entierra en la carpeta",
              "No, se mueve con el pie",
              "Va atornillada al techo"
            ],
            "correcta": 0,
            "explica": "Se sella al piso para que no se mueva; su principal función es sostener la pileta y tapar caños."
          },
          {
            "q": "¿Qué es el rebosadero en el lavatorio?",
            "opciones": [
              "Un pequeño agujero superior que evita que el agua se desborde si queda la canilla abierta con el tapón puesto",
              "Para colgar la toalla",
              "Para guardar jabón",
              "Un defecto de fábrica"
            ],
            "correcta": 0,
            "explica": "El rebosadero drena el exceso de agua hacia el desagüe antes de inundar el baño."
          },
          {
            "q": "¿Los lavatorios de columna se pueden vender sin la columna?",
            "opciones": [
              "Sí, muchos clientes compran solo la parte superior (lavatorio) para colgarlo o adaptarlo a un mueble existente",
              "No, es una sola pieza fusionada",
              "Se rompen si no tienen columna",
              "La ley lo prohíbe"
            ],
            "correcta": 0,
            "explica": "La pileta y la columna son dos códigos/piezas separadas. Se pueden vender independientes."
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
              "Grifería monocomando lavatorio + 2 flexibles + Sifón corrugado plástico (va oculto) + Sopapa + Set fijación",
              "Mochila + Tapa de inodoro",
              "Pastina + Niveladores",
              "Ceresita + Hierros"
            ],
            "correcta": 0,
            "explica": "Lavatorio + Columna + Grifería + Flexibles + Sopapa/Sifón (puede ser económico porque lo tapa la columna) + Fijación."
          },
          {
            "q": "El mismo cliente decide NO llevar la columna. ¿Qué cambia en tu recomendación?",
            "opciones": [
              "Le ofrezco un sifón botella metálico cromado, ya que quedará a la vista y debe ser estético",
              "Le vendo el mismo sifón plástico económico",
              "Le digo que no necesita sifón",
              "Le ofrezco pintura blanca para el caño"
            ],
            "correcta": 0,
            "explica": "Sin columna, la plomería inferior es visible. El sifón cromado aporta una excelente estética."
          },
          {
            "q": "¿Por qué es importante confirmar la grifería antes de facturar el lavatorio?",
            "opciones": [
              "Para asegurar que facturamos y entregamos la loza con la perforación correcta (1 o 3 agujeros)",
              "Para elegir el color de la loza",
              "Para saber el largo de los caños",
              "No tiene importancia"
            ],
            "correcta": 0,
            "explica": "Evita reclamos del cliente y cambios (logística inversa) si llega a obra y no puede poner la canilla."
          },
          {
            "q": "Si el cliente quiere armar un 'baño en suite' muy lujoso, ¿le vendés un lavatorio de columna?",
            "opciones": [
              "Probablemente no; le ofrecería una mesada de piedra con bachas de apoyar o bajo mesada, que es más moderno y elegante",
              "Sí, la línea Andina",
              "Sí, es lo más lujoso",
              "Le vendo una pileta de lavar"
            ],
            "correcta": 0,
            "explica": "En baños de alto estándar se prefiere mesada y bachas o muebles vanitory, no el lavatorio clásico de columna."
          },
          {
            "q": "El cliente pregunta: '¿el lavatorio viene con los huecos hechos?'. ¿Qué le decís?",
            "opciones": [
              "Sí, viene de fábrica con 1 o 3 orificios ya esmaltados (el de 3 agujeros tiene un centro y dos laterales)",
              "No, los tenés que agujerear con taladro en tu casa",
              "Depende de la suerte",
              "Vienen sin huecos"
            ],
            "correcta": 0,
            "explica": "Vienen hechos y esmaltados de fábrica. Nunca sugerir perforar la loza in situ, porque se parte."
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
              "Le mostrás que Lavatorios Tradicionales revaloriza la propiedad, aporta estética de vanguardia y requiere bajo o nulo mantenimiento con los años.",
              "Le das la razón y le sugerís dejar el contrapiso a la vista.",
              "Le decís que es un lujo innecesario.",
              "Le sugerís pintar con cal común encima."
            ],
            "correcta": 0,
            "explica": "Las terminaciones de calidad aumentan el valor del inmueble y evitan refacciones periódicas."
          },
          {
            "q": "Cliente indeciso: \"¿Qué insumo de colocación debo llevar sí o sí para Lavatorios Tradicionales?\"",
            "opciones": [
              "El adhesivo, sellador o perfilería específica recomendada por el fabricante para garantizar la adhesión y el acabado impecable.",
              "Cualquier pegamento escolar sirve.",
              "No se necesita ningún insumo de pegado.",
              "Solamente agua."
            ],
            "correcta": 0,
            "explica": "Sin el producto de colocación/juntado adecuado, la terminación corre riesgo de desprenderse o mancharse."
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
              "Es el tanque que almacena el agua para la descarga del inodoro",
              "Guarda el papel higiénico",
              "Es un filtro de agua",
              "Calienta el agua"
            ],
            "correcta": 0,
            "explica": "Almacena el agua y provee la fuerza de descarga para limpiar el inodoro."
          },
          {
            "q": "¿Qué es una mochila de apoyar?",
            "opciones": [
              "El depósito que se apoya directamente sobre el inodoro largo",
              "Un tanque que va en el techo",
              "Una mochila para viajar",
              "Un bidet"
            ],
            "correcta": 0,
            "explica": "Es la mochila tradicional que asienta sobre la base extendida del inodoro largo."
          },
          {
            "q": "¿Para qué inodoro se usa el depósito embutido (cisterna oculta)?",
            "opciones": [
              "Para el inodoro corto o el suspendido",
              "Para el inodoro largo",
              "Para el bidet",
              "Para la ducha"
            ],
            "correcta": 0,
            "explica": "Como el corto y el suspendido no tienen base para apoyar mochila, requieren depósito en la pared."
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
              "Atrim",
              "Ternium",
              "Weber"
            ],
            "correcta": 0,
            "explica": "Trabajamos depósitos de loza de las mismas marcas que los inodoros."
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
              "De loza sanitaria, a juego con el inodoro",
              "De plástico transparente",
              "De acero inoxidable",
              "De madera"
            ],
            "correcta": 0,
            "explica": "Están hechas de loza sanitaria, asegurando resistencia y coincidencia estética con el inodoro."
          },
          {
            "q": "¿Qué se necesita para accionar un depósito embutido?",
            "opciones": [
              "Una placa de accionamiento (botonera) instalada en la pared",
              "Un enchufe eléctrico",
              "Un pedal en el piso",
              "Una canilla común"
            ],
            "correcta": 0,
            "explica": "El depósito queda oculto y solo se ve la placa de accionamiento (doble o simple) en la pared."
          },
          {
            "q": "¿Qué es una mochila de colgar?",
            "opciones": [
              "Una opción más antigua que se instala elevada en la pared y conecta al inodoro corto mediante un caño",
              "Un adorno",
              "Un inodoro portátil",
              "Una ducha"
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
              "Sí, los repuestos son universales o específicos de la marca, y se pueden reemplazar fácilmente",
              "No, si se rompe hay que tirar todo",
              "Solo si la rompes primero",
              "No existen repuestos"
            ],
            "correcta": 0,
            "explica": "Los mecanismos de descarga y válvulas de llenado son repuestos comunes y fáciles de cambiar."
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
              "Inodoro corto o suspendido + depósito embutido extraplano + placa de accionamiento dual",
              "Inodoro largo con mochila de plástico",
              "Mochila de colgar alta",
              "Que no ponga inodoro"
            ],
            "correcta": 0,
            "explica": "El depósito embutido se esconde en la pared, siendo la solución perfecta para el estilo minimalista."
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
              "Conexión flexible de agua, llave de paso con campana y, si el inodoro no los trae, tornillos de anclaje (aunque la mochila suele traerlos)",
              "Solo cemento",
              "Pintura epoxi",
              "Hierros del 8"
            ],
            "correcta": 0,
            "explica": "Para conectarla a la red de agua hace falta un flexible y una llave de paso cromada."
          },
          {
            "q": "Si un cliente te pide repuestos porque 'la mochila pierde agua hacia el inodoro'. ¿Qué suele estar fallando?",
            "opciones": [
              "El obturador (flapper) de la válvula de descarga que no sella, o el flotante que no corta y rebalsa",
              "El inodoro está roto",
              "Falta presión en el tanque",
              "La tapa está suelta"
            ],
            "correcta": 0,
            "explica": "Una pérdida continua indica que el sello del fondo no cierra (flapper) o que el agua rebalsa por el tubo."
          },
          {
            "q": "Al vender un inodoro corto y depósito embutido para pared de construcción en seco (Durlock), ¿qué advertís?",
            "opciones": [
              "Que el plomero debe armar una estructura (bastidor) adecuada o comprar un soporte específico para fijar la placa y el inodoro",
              "Que pegue el inodoro a la placa verde",
              "Que use cemento",
              "Que no se puede hacer"
            ],
            "correcta": 0,
            "explica": "En drywall, la estructura debe soportar el empuje; muchos depósitos vienen con bastidor incorporado."
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
              "Le mostrás que Depósitos para Inodoros revaloriza la propiedad, aporta estética de vanguardia y requiere bajo o nulo mantenimiento con los años.",
              "Le das la razón y le sugerís dejar el contrapiso a la vista.",
              "Le decís que es un lujo innecesario.",
              "Le sugerís pintar con cal común encima."
            ],
            "correcta": 0,
            "explica": "Las terminaciones de calidad aumentan el valor del inmueble y evitan refacciones periódicas."
          },
          {
            "q": "Cliente indeciso: \"¿Qué insumo de colocación debo llevar sí o sí para Depósitos para Inodoros?\"",
            "opciones": [
              "El adhesivo, sellador o perfilería específica recomendada por el fabricante para garantizar la adhesión y el acabado impecable.",
              "Cualquier pegamento escolar sirve.",
              "No se necesita ningún insumo de pegado.",
              "Solamente agua."
            ],
            "correcta": 0,
            "explica": "Sin el producto de colocación/juntado adecuado, la terminación corre riesgo de desprenderse o mancharse."
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
              "Loza sanitaria (clásicas) y Acero Inoxidable (modernas)",
              "Madera y vidrio",
              "Solo plástico barato",
              "Cartón"
            ],
            "correcta": 0,
            "explica": "Se destacan las clásicas y fuertes de loza, y las modernas y livianas de acero inoxidable."
          },
          {
            "q": "¿Qué ventajas tiene la pileta de lavadero de acero inoxidable?",
            "opciones": [
              "Ligeras, modernas, muy resistentes a golpes y químicos (especialmente grado 304)",
              "Son más pesadas que la loza",
              "Se oxidan en 1 semana",
              "Se rompen con el agua"
            ],
            "correcta": 0,
            "explica": "El acero inoxidable (ej. Johnson) es resistente a impactos y al ataque químico de jabones/cloro."
          },
          {
            "q": "¿Por qué muchos clientes siguen eligiendo la pileta de lavadero de loza sanitaria?",
            "opciones": [
              "Es la opción tradicional: súper sólida, pesada y su superficie vitrificada resiste manchas y lavandina",
              "Es más liviana",
              "Es flexible",
              "Es transparente"
            ],
            "correcta": 0,
            "explica": "La loza es muy duradera, higiénica y no se deforma ni raya fácilmente."
          },
          {
            "q": "¿Qué marcas de piletas trabajamos?",
            "opciones": [
              "Johnson, Dhinox, Ferrum y Duke",
              "Atrim y Ternium",
              "Weber y Klaukol",
              "Rotoplas y Precons"
            ],
            "correcta": 0,
            "explica": "Ferrum/Duke (loza) y Johnson/Dhinox (acero inoxidable)."
          },
          {
            "q": "¿Cómo se puede instalar una pileta de lavadero?",
            "opciones": [
              "Colgada a la pared con ménsulas, o apoyada/empotrada sobre una mesada o mueble",
              "Solo apoyada en el piso",
              "Colgada del techo",
              "Adentro del inodoro"
            ],
            "correcta": 0,
            "explica": "Pueden ir murales (con ménsulas de fundición/hierro) o embutidas/apoyadas en mueble o mesada."
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
              "Una superficie con relieve integrada en la pileta (de loza o acero) para fregar la ropa a mano",
              "Una tabla de madera aparte",
              "Un accesorio eléctrico",
              "Una tapa"
            ],
            "correcta": 0,
            "explica": "El fregadero con estrías integrado es fundamental en el lavadero tradicional para lavar a mano."
          },
          {
            "q": "¿Qué acero es el más recomendable por su alta resistencia a la corrosión?",
            "opciones": [
              "Acero Inoxidable grado 304",
              "Acero Inoxidable 430",
              "Acero al carbono",
              "Hierro fundido"
            ],
            "correcta": 0,
            "explica": "El acero 304 (no magnético) tiene mayor resistencia a la oxidación frente a lavandina y químicos fuertes."
          },
          {
            "q": "¿Qué piezas extra necesita una pileta de loza mural para instalarse?",
            "opciones": [
              "Ménsulas de amurar a la pared, sopapa, sifón plástico corrugado y grifería (de pared o mesada)",
              "No necesita nada",
              "Solo pegamento",
              "Ruedas"
            ],
            "correcta": 0,
            "explica": "Las piletas murales pesadas de loza exigen ménsulas fuertes amuradas a la pared."
          },
          {
            "q": "¿De dónde suele salir la grifería en la mayoría de los lavaderos tradicionales?",
            "opciones": [
              "De la pared, sobre la pileta",
              "Desde el piso",
              "De la misma pileta de loza",
              "No tienen grifería"
            ],
            "correcta": 0,
            "explica": "Generalmente la grifería de lavadero es de pared (con pico corto o manguera)."
          },
          {
            "q": "¿Qué se debe tener en cuenta si el cliente elige una pileta Johnson de acero inoxidable de gran tamaño?",
            "opciones": [
              "Que necesitará un mueble bajo mesada o estructura que soporte la pileta o de donde amurarla",
              "Que no se puede usar con agua caliente",
              "Que se oxida",
              "Que pesa 200 kg"
            ],
            "correcta": 0,
            "explica": "Las de acero suelen ser de encastre o sobreponer, requiriendo un mueble o mesada que las contenga."
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
              "Una pileta de lavadero bajo mesada o de sobreponer de acero inoxidable Johnson, que combina con los electrodomésticos",
              "Una pileta de lavar de loza sobre ménsulas rústicas",
              "Que no ponga pileta",
              "Una palangana de plástico"
            ],
            "correcta": 0,
            "explica": "El acero inoxidable se integra estéticamente a los lavaderos modernos que funcionan casi como una segunda cocina."
          },
          {
            "q": "El cliente compra una pileta Duke (loza) enorme de 80 cm. ¿Qué le advertís sobre las ménsulas?",
            "opciones": [
              "Que debe usar ménsulas de fundición o hierro muy robustas y amurarlas a pared de ladrillo macizo si es posible (no placa de yeso hueca)",
              "Que las pegue con silicona",
              "Que use ménsulas de plástico",
              "Que la cuelgue con alambre"
            ],
            "correcta": 0,
            "explica": "La loza + el peso del agua + la fuerza al fregar exigen un anclaje a la pared extremadamente fuerte."
          },
          {
            "q": "¿Qué ventaja adicional (venta cruzada) le podés ofrecer para una grifería de lavadero de pared?",
            "opciones": [
              "Una grifería con pico manguera acoplable, ideal para llenar baldes, o un monocomando con duchador extraíble",
              "Un bidet",
              "Cinta métrica",
              "Pintura epoxi"
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
              "Una grifería de mesada (monocomando o bimando) que calce en ese agujero",
              "Grifería de pared",
              "Un tapón ciego",
              "Hierros"
            ],
            "correcta": 0,
            "explica": "Si la pileta viene perforada (1 agujero), la grifería debe ser 'de mesada', no de pared."
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
              "Le mostrás que Piletas de Lavadero revaloriza la propiedad, aporta estética de vanguardia y requiere bajo o nulo mantenimiento con los años.",
              "Le das la razón y le sugerís dejar el contrapiso a la vista.",
              "Le decís que es un lujo innecesario.",
              "Le sugerís pintar con cal común encima."
            ],
            "correcta": 0,
            "explica": "Las terminaciones de calidad aumentan el valor del inmueble y evitan refacciones periódicas."
          },
          {
            "q": "Cliente indeciso: \"¿Qué insumo de colocación debo llevar sí o sí para Piletas de Lavadero?\"",
            "opciones": [
              "El adhesivo, sellador o perfilería específica recomendada por el fabricante para garantizar la adhesión y el acabado impecable.",
              "Cualquier pegamento escolar sirve.",
              "No se necesita ningún insumo de pegado.",
              "Solamente agua."
            ],
            "correcta": 0,
            "explica": "Sin el producto de colocación/juntado adecuado, la terminación corre riesgo de desprenderse o mancharse."
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
              "Se instala directamente apoyada sobre la mesada, aportando un aspecto moderno tipo spa y siendo el centro visual",
              "Se pega en el techo",
              "Se oculta adentro del mueble",
              "Se entierra en el piso"
            ],
            "correcta": 0,
            "explica": "La bacha de apoyar va íntegramente sobre la superficie de la mesada, destacando su diseño."
          },
          {
            "q": "¿Qué es una bacha bajo mesada?",
            "opciones": [
              "Se coloca por debajo de la superficie de la mesada, dejando el borde oculto. Ideal para limpieza fácil y look minimalista",
              "Se apoya arriba",
              "Es una bacha de cocina",
              "Se usa sin mesada"
            ],
            "correcta": 0,
            "explica": "Se fija (suele ir pegada) debajo del mármol o granito; el agua se escurre directo a la bacha sin obstáculos."
          },
          {
            "q": "¿Qué es una bacha semi-apoyar o semi-embutir?",
            "opciones": [
              "Parte de la bacha queda apoyada y parte embutida (el frente sobresale del mueble). Muy versátil",
              "Es una bacha que está rota a la mitad",
              "No existe",
              "Es solo para exteriores"
            ],
            "correcta": 0,
            "explica": "Sobresale del frente del mueble, permitiendo usar muebles menos profundos pero manteniendo una bacha cómoda."
          },
          {
            "q": "¿De qué material están hechas principalmente las bachas de baño que vendemos?",
            "opciones": [
              "Loza sanitaria de alta calidad",
              "Madera",
              "Cartón plastificado",
              "Acero inoxidable únicamente"
            ],
            "correcta": 0,
            "explica": "La mayoría de nuestras bachas de baño (Ferrum, Roca, Daccord) son de loza sanitaria esmaltada."
          },
          {
            "q": "¿Qué grifería requiere una bacha de apoyar (si no tiene orificio propio)?",
            "opciones": [
              "Grifería alta (de mesada prolongada) o grifería de pared, para que el pico pase por encima del borde",
              "Grifería corta común",
              "Canilla de plástico",
              "Grifería de bidet"
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
              "Maximiza el espacio útil de la mesada y permite limpiar rápidamente (pasando el trapo hacia la bacha sin chocar bordes)",
              "Es la más fácil de instalar sola",
              "Llama mucho la atención",
              "Viene en colores flúor"
            ],
            "correcta": 0,
            "explica": "La higiene es su punto fuerte: no hay bordes que junten suciedad entre la bacha y la mesada."
          },
          {
            "q": "¿Por qué el cliente elegiría una bacha de apoyar?",
            "opciones": [
              "Por su fuerte impacto estético; son protagonistas del diseño del baño (redondas, cuadradas, ovaladas, etc.)",
              "Porque son más baratas",
              "Porque no necesitan caños",
              "Para ahorrar agua"
            ],
            "correcta": 0,
            "explica": "Son elegidas por decoración y diseño, brindando un toque moderno y personal al ambiente."
          },
          {
            "q": "¿Se puede poner una grifería corta en una bacha de apoyar que trae el agujero incorporado?",
            "opciones": [
              "Sí, si la bacha tiene una repisa ('deck') con agujero perforado para la grifería, se usa una de tamaño estándar",
              "No, nunca",
              "Solo si es de pared",
              "Sí, pero lavará mal"
            ],
            "correcta": 0,
            "explica": "Algunas bachas de apoyar incluyen repisa para la canilla, en ese caso la grifería es baja/normal."
          },
          {
            "q": "¿Qué adhesivo se recomienda para pegar una bacha bajo mesada de loza al granito/mármol?",
            "opciones": [
              "Silicona neutra o adhesivo de montaje especial, más grapas mecánicas por seguridad",
              "Cinta scotch",
              "Cemento común",
              "Cualquier pegamento escolar"
            ],
            "correcta": 0,
            "explica": "Se usa sellador/adhesivo fuerte (silicona o PU) y clavijas/grapas bajo la mesada por seguridad."
          },
          {
            "q": "¿Qué marcas destacan en nuestras bachas de baño?",
            "opciones": [
              "Roca, Ferrum, Daccord",
              "Johnson y Dhinox",
              "Atrim",
              "Tromen"
            ],
            "correcta": 0,
            "explica": "Marcas como Roca y Ferrum son líderes en loza, y Daccord ofrece diseños modernos."
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
              "¿Ya compraste la grifería? Porque vas a necesitar un monocomando ALTO o grifería de pared",
              "De qué color es la puerta",
              "Si quiere bidet",
              "Cómo se llama el plomero"
            ],
            "correcta": 0,
            "explica": "Es el error más común: el cliente compra bacha de apoyar y grifería corta que no llega a tirar agua adentro."
          },
          {
            "q": "¿Qué complemento estético le podés ofrecer al desagüe de una bacha de apoyar o vidrio?",
            "opciones": [
              "Una sopapa 'Click-Clack' (tapón automático a presión), ideal para que quede cromada a la vista y sin cadenitas",
              "Un sifón plástico corrugado común",
              "Una manguera",
              "Un tapón de corcho"
            ],
            "correcta": 0,
            "explica": "La sopapa click-clack es el estándar moderno en diseño, limpia y sin tapones de goma sueltos."
          },
          {
            "q": "El cliente quiere un mueble vanitory pero su baño es muy angosto (profundidad 35 cm). ¿Qué bacha resuelve el problema?",
            "opciones": [
              "Una bacha de semi-encastre (semi-apoyar): permite usar un mueble angosto, mientras el frente curvo de la pileta sobresale dando comodidad",
              "Una bacha bajo mesada gigante",
              "Una bacha de apoyar de 60 cm",
              "Un lavatorio de columna"
            ],
            "correcta": 0,
            "explica": "El semi-encastre es el truco perfecto para toilettes angostos."
          },
          {
            "q": "¿Es necesario que el cliente compre también un sifón cromado si lleva una bacha de apoyar?",
            "opciones": [
              "Depende: si el mueble es abierto o la mesada es suspendida, sí (por estética). Si va un mueble cerrado con puertas, puede usar uno plástico oculto",
              "Sí o sí siempre",
              "No, nunca",
              "Solo si la bacha es blanca"
            ],
            "correcta": 0,
            "explica": "Si la cañería queda a la vista, se vende sifón metálico; si va oculta en mueble, el corrugado plástico basta."
          },
          {
            "q": "¿Qué es el 'deck' o repisa en una bacha?",
            "opciones": [
              "Es la plataforma plana incorporada en la loza (en bachas de apoyar o murales) donde se realizan las perforaciones para asentar la grifería",
              "Un balcón en el baño",
              "El agujero de desagüe",
              "El borde externo de color"
            ],
            "correcta": 0,
            "explica": "Las bachas con deck integran la grifería en la misma pieza de loza."
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
              "Le mostrás que Bachas de Baño revaloriza la propiedad, aporta estética de vanguardia y requiere bajo o nulo mantenimiento con los años.",
              "Le das la razón y le sugerís dejar el contrapiso a la vista.",
              "Le decís que es un lujo innecesario.",
              "Le sugerís pintar con cal común encima."
            ],
            "correcta": 0,
            "explica": "Las terminaciones de calidad aumentan el valor del inmueble y evitan refacciones periódicas."
          },
          {
            "q": "Cliente indeciso: \"¿Qué insumo de colocación debo llevar sí o sí para Bachas de Baño?\"",
            "opciones": [
              "El adhesivo, sellador o perfilería específica recomendada por el fabricante para garantizar la adhesión y el acabado impecable.",
              "Cualquier pegamento escolar sirve.",
              "No se necesita ningún insumo de pegado.",
              "Solamente agua."
            ],
            "correcta": 0,
            "explica": "Sin el producto de colocación/juntado adecuado, la terminación corre riesgo de desprenderse o mancharse."
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
              "Simple (1 cuenco), doble (2 cuencos) y triple (3 cuencos)",
              "Redondas y triangulares",
              "De 1 metro cuadrado",
              "No hay formatos"
            ],
            "correcta": 0,
            "explica": "Vienen de 1, 2 o 3 cuencos (piletas) según necesidad y espacio."
          },
          {
            "q": "¿Cuál es el material estándar para las bachas de cocina de calidad?",
            "opciones": [
              "Acero inoxidable (recomendado grado 304)",
              "Loza sanitaria blanca",
              "Hierro fundido",
              "Plástico"
            ],
            "correcta": 0,
            "explica": "El acero inoxidable 304 es el rey de la cocina por higiene, resistencia al óxido y durabilidad."
          },
          {
            "q": "¿Para qué sirve una bacha doble?",
            "opciones": [
              "Permite lavar en un cuenco y enjuagar (o dejar secar) en el otro, o separar alimentos de vajilla sucia",
              "Para gastar más agua",
              "Solo para cocinas gigantes",
              "Para lavar ropa"
            ],
            "correcta": 0,
            "explica": "Es la más funcional y vendida, separa tareas simultáneas en la cocina."
          },
          {
            "q": "¿Qué tipo de instalación es la más moderna y fácil de limpiar en cocinas?",
            "opciones": [
              "Bajo mesada: la bacha se pega por debajo del granito, sin bordes a la vista",
              "De sobreponer o empotrar",
              "De apoyar en el piso",
              "Colgada en la pared"
            ],
            "correcta": 0,
            "explica": "Bajo mesada permite barrer líquidos o migas directo a la pileta sin trabarse con un borde de acero."
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
              "El 304 (no magnético) tiene mucha mayor resistencia a la corrosión y manchas a largo plazo que el 430 (magnético y económico)",
              "El 430 es mejor",
              "Ninguna, son iguales",
              "El 304 es de plástico"
            ],
            "correcta": 0,
            "explica": "El 304 contiene níquel, garantizando que no se oxidará con químicos ni uso rudo; el 430 es más económico pero vulnerable."
          },
          {
            "q": "¿Qué significa instalación 'de empotrar / sobreponer'?",
            "opciones": [
              "El borde de la bacha queda visible apoyado sobre la mesada. Se sella con silicona por arriba",
              "Se empotra en la pared",
              "Va adentro del mueble",
              "Se entierra"
            ],
            "correcta": 0,
            "explica": "Es el clásico 'sobre mesada', donde el reborde metálico asienta sobre el agujero del granito/madera."
          },
          {
            "q": "¿Qué es el 'cestillo' en una bacha de acero?",
            "opciones": [
              "La rejilla o filtro metálico en el desagüe (sopapa) que retiene restos de comida, extraíble para limpieza",
              "Un canasto para los platos",
              "Una canilla extra",
              "El borde de la bacha"
            ],
            "correcta": 0,
            "explica": "Las bachas de acero modernas usan sopapas con cestillo extraíble (canastita) en vez de tapón de goma."
          },
          {
            "q": "Si un cliente tiene lavavajillas y poco espacio de mesada, ¿qué le recomendás?",
            "opciones": [
              "Una bacha simple y profunda: ocupa poco espacio y entra una olla grande. El lavado diario lo hace la máquina",
              "Bacha triple gigante",
              "Dos bachas dobles",
              "Ninguna bacha"
            ],
            "correcta": 0,
            "explica": "Bacha simple maximiza la mesada de trabajo y basta para enjuagar cosas grandes (ollas/asaderas)."
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
              "Bacha doble + Grifería Monocomando con duchador + Dosificador de detergente + Sifón doble + Sellador",
              "Bacha sola",
              "Bacha y pastina",
              "Solo la grifería"
            ],
            "correcta": 0,
            "explica": "Combo: Bacha + Grifería + Dosificador (accesorio) + Sifón para pileta doble + Silicona."
          },
          {
            "q": "¿Qué accesorio muy solicitado se le puede incorporar a algunas bachas o mesadas?",
            "opciones": [
              "Un dosificador de detergente embutido, que deja el frasco oculto bajo la mesada y solo sale el pico vertedor",
              "Una radio sumergible",
              "Un televisor",
              "Un portarrollos"
            ],
            "correcta": 0,
            "explica": "El dosificador embutido da un look muy limpio, eliminando la botella plástica de la mesada."
          },
          {
            "q": "El cliente compra una bacha doble y un monocomando común. ¿Qué detalle de plomería inferior de la bacha debe comprar?",
            "opciones": [
              "Un sifón doble (con ramal en Y) para conectar ambas bocas de desagüe a la cañería de la pared",
              "Un tapón de corcho",
              "Cemento de fraguado rápido",
              "Nada"
            ],
            "correcta": 0,
            "explica": "Para pileta doble, se necesita un sifón con dos entradas o conexión que una ambos cestillos antes del tubo."
          },
          {
            "q": "¿Cómo se prueba rápido si una bacha que nos traen es de acero 304 o 430?",
            "opciones": [
              "Acercando un imán: el 430 es magnético (el imán se pega), el 304 (calidad superior) no es magnético",
              "Haciéndola hervir",
              "Rompiéndola con un martillo",
              "Pintándola"
            ],
            "correcta": 0,
            "explica": "El truco del imán: si no pega, es serie 300 (austenítico, con níquel). Si pega, es serie 400 (ferrítico, más económico)."
          },
          {
            "q": "¿Qué le aconsejás al cliente que va a instalar la bacha bajo mesada respecto al marmolero?",
            "opciones": [
              "Debe darle la bacha al marmolero antes de que corte el granito, para que haga el hueco exacto según la plantilla del fabricante",
              "Que lo haga a ojo",
              "Que corte la bacha con amoladora",
              "No importa el agujero"
            ],
            "correcta": 0,
            "explica": "El marmolero necesita la bacha física o la plantilla para que el hueco bajo mesada quede perfecto y pulido."
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
              "Le mostrás que Bachas de Cocina revaloriza la propiedad, aporta estética de vanguardia y requiere bajo o nulo mantenimiento con los años.",
              "Le das la razón y le sugerís dejar el contrapiso a la vista.",
              "Le decís que es un lujo innecesario.",
              "Le sugerís pintar con cal común encima."
            ],
            "correcta": 0,
            "explica": "Las terminaciones de calidad aumentan el valor del inmueble y evitan refacciones periódicas."
          },
          {
            "q": "Cliente indeciso: \"¿Qué insumo de colocación debo llevar sí o sí para Bachas de Cocina?\"",
            "opciones": [
              "El adhesivo, sellador o perfilería específica recomendada por el fabricante para garantizar la adhesión y el acabado impecable.",
              "Cualquier pegamento escolar sirve.",
              "No se necesita ningún insumo de pegado.",
              "Solamente agua."
            ],
            "correcta": 0,
            "explica": "Sin el producto de colocación/juntado adecuado, la terminación corre riesgo de desprenderse o mancharse."
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
              "Acrílico sanitario y Chapa esmaltada",
              "Solo madera",
              "Mármol macizo",
              "Solo vidrio"
            ],
            "correcta": 0,
            "explica": "Las opciones principales son acrílico (moderno/térmico) y chapa esmaltada (clásico/duro)."
          },
          {
            "q": "¿Qué es una bañera estándar (rectangular)?",
            "opciones": [
              "La más común, se instala encastrada entre paredes y se reviste (o lleva faldón frontal)",
              "Una bañera redonda en medio de la sala",
              "Un fuentón de plástico",
              "Una bañera sin agua"
            ],
            "correcta": 0,
            "explica": "Es la bañera tradicional de 1.40 a 1.70m, que va 'embutida' con murete revestido."
          },
          {
            "q": "¿Qué es una bañera isla (exenta)?",
            "opciones": [
              "No va encastrada, queda libre en el ambiente. Tiene diseño premium (redonda u oval)",
              "Es una bañera para usar en la playa",
              "Va empotrada en el techo",
              "Es de chapa económica"
            ],
            "correcta": 0,
            "explica": "Bañera independiente ('freestanding') sin necesidad de murete ni azulejos en su perímetro."
          },
          {
            "q": "¿Cuál es la ventaja de la bañera de acrílico sanitario?",
            "opciones": [
              "Es liviana, moderna, resistente, mantiene mejor el calor del agua y es cálida al tacto",
              "Es muy fría y pesada",
              "Se oxida",
              "Es más barata que un balde"
            ],
            "correcta": 0,
            "explica": "El acrílico retiene la temperatura, no se astilla el esmalte ante golpes y su brillo es reparable."
          },
          {
            "q": "¿Qué marcas ofrecemos (muchas a pedido)?",
            "opciones": [
              "Roca y Bagnara",
              "Ferrum exclusivamente",
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
              "Tiene un motor eléctrico y jets que expulsan agua/aire a presión para dar masaje",
              "Tiene agua caliente",
              "Es más chica",
              "Es para lavar ropa"
            ],
            "correcta": 0,
            "explica": "Incorpora sistema de bombeo (bomba + jets) para hidroterapia y relax."
          },
          {
            "q": "¿Qué precaución básica de seguridad eléctrica requiere un hidromasaje?",
            "opciones": [
              "Conexión eléctrica independiente con disyuntor diferencial y toma de tierra estricta",
              "Enchufarlo a una zapatilla común",
              "Usar cables pelados",
              "No lleva electricidad"
            ],
            "correcta": 0,
            "explica": "Agua + electricidad exige protecciones térmicas y diferenciales de alta sensibilidad."
          },
          {
            "q": "¿Qué es fundamental preguntar antes de encargar un hidromasaje?",
            "opciones": [
              "La ubicación del motor (izquierda o derecha) según cómo se va a instalar en el baño",
              "El color de la toalla",
              "Qué jabón usa",
              "Nada"
            ],
            "correcta": 0,
            "explica": "Según la posición en el baño (qué pared está libre para la puerta de inspección), el motor debe ir a la izq o der."
          },
          {
            "q": "¿Por qué algunos prefieren chapa esmaltada?",
            "opciones": [
              "Porque es la opción tradicional, muy rígida y no se raya fácilmente con abrasivos, aunque el esmalte puede 'saltar' con un golpe fuerte",
              "Porque es más térmica que el acrílico",
              "Porque es de plástico",
              "Porque flota"
            ],
            "correcta": 0,
            "explica": "La chapa es muy sólida y resiste rayaduras (ej. arena en los pies), pero es fría y puede saltar el esmalte de un golpe."
          },
          {
            "q": "¿Qué complemento requiere una bañera isla para funcionar?",
            "opciones": [
              "Grifería de pie (desde el piso) o empotrada en pared, más un desagüe central adaptado al piso",
              "Una mochila de inodoro",
              "Un calefón extra",
              "Un balde"
            ],
            "correcta": 0,
            "explica": "Como no está contra la pared (a veces), requiere grifería especial tipo 'columna' desde el suelo."
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
              "Una puerta o rejilla de inspección para acceder al motor en caso de falla o mantenimiento",
              "Nada, tapar todo con cemento",
              "Un agujero en el techo",
              "Una canilla extra"
            ],
            "correcta": 0,
            "explica": "El motor del hidromasaje NO se puede amurar de forma definitiva; requiere acceso removible (puerta de inspección)."
          },
          {
            "q": "¿Cuál es la venta cruzada para una bañera estándar (no hidro)?",
            "opciones": [
              "Grifería de baño (con transferencia y duchador), sopapa y rebosadero para bañera, mampara o cortina, cerámicos",
              "Solo cemento",
              "Pastina epoxi sola",
              "Pintura"
            ],
            "correcta": 0,
            "explica": "Lleva grifería de ducha, conjunto de desagüe (sopapa/rebosadero largo), mampara/cortina y revestimientos."
          },
          {
            "q": "¿Qué es el 'conjunto sopapa-rebosadero' de bañera?",
            "opciones": [
              "Un sistema de tubo plástico que conecta el desagüe del fondo con el agujero superior (rebosadero) para que no desborde",
              "Un motor eléctrico",
              "Un tapón de madera",
              "Una canilla"
            ],
            "correcta": 0,
            "explica": "A diferencia del lavatorio (todo en la loza), la bañera requiere un tubo externo que une el rebalse superior con el desagüe del piso."
          },
          {
            "q": "El cliente pregunta: '¿el acrílico no se quiebra si me paro adentro?'. ¿Qué respondés?",
            "opciones": [
              "No, vienen reforzadas con fibra de vidrio en la base. Suelen asentarse sobre una cama de arena/cemento o estructura para que queden rígidas",
              "Sí, se rompen fácil",
              "Solo aguantan 10 kg",
              "Son de papel"
            ],
            "correcta": 0,
            "explica": "Tienen un piso reforzado y una correcta instalación (asentada) evita que la base flexione y se quiebre."
          },
          {
            "q": "¿Qué beneficios (argumento de venta) tiene el hidromasaje?",
            "opciones": [
              "Alivia tensiones musculares, mejora la circulación, reduce el estrés y da un valor agregado (lujo) a la propiedad",
              "Lava la ropa sola",
              "Ahorra agua",
              "No sirve para nada"
            ],
            "correcta": 0,
            "explica": "Es un elemento terapéutico (relajación, circulación vascular) y eleva el nivel y valor de la vivienda."
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
              "Le mostrás que Bañeras revaloriza la propiedad, aporta estética de vanguardia y requiere bajo o nulo mantenimiento con los años.",
              "Le das la razón y le sugerís dejar el contrapiso a la vista.",
              "Le decís que es un lujo innecesario.",
              "Le sugerís pintar con cal común encima."
            ],
            "correcta": 0,
            "explica": "Las terminaciones de calidad aumentan el valor del inmueble y evitan refacciones periódicas."
          },
          {
            "q": "Cliente indeciso: \"¿Qué insumo de colocación debo llevar sí o sí para Bañeras?\"",
            "opciones": [
              "El adhesivo, sellador o perfilería específica recomendada por el fabricante para garantizar la adhesión y el acabado impecable.",
              "Cualquier pegamento escolar sirve.",
              "No se necesita ningún insumo de pegado.",
              "Solamente agua."
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
              "Monocomando: una palanca regula caudal y temperatura. Bimando: dos llaves separadas (fría y caliente)",
              "Mono es de plástico, Bi es de metal",
              "Mono es para baño, Bi para cocina",
              "Mono no tiene pico"
            ],
            "correcta": 0,
            "explica": "Monocomando es de uso con una sola mano; bimando usa válvulas independientes."
          },
          {
            "q": "¿Qué tipo de grifería es la más elegida y recomendada para la cocina moderna?",
            "opciones": [
              "Monocomando de mesada, preferiblemente con pico alto o extraíble",
              "Bimando de pared con cuerito",
              "Canilla plástica simple",
              "Lluvia de bidet"
            ],
            "correcta": 0,
            "explica": "El monocomando pico alto es el estándar de practicidad en cocinas actuales."
          },
          {
            "q": "¿Qué marcas líderes de grifería trabajamos?",
            "opciones": [
              "FV (Grifería de Alta Tecnología) y Vasser",
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
              "De mesada (sobre la bacha o el granito) o De pared",
              "De techo o de piso",
              "Adentro de la heladera o del horno",
              "Ninguna"
            ],
            "correcta": 0,
            "explica": "La instalación tradicional era mural (pared), hoy la tendencia es sobre la mesada/bacha."
          },
          {
            "q": "¿Por qué es tan útil un pico alto en la cocina?",
            "opciones": [
              "Permite lavar y llenar ollas grandes, asaderas o botellas cómodamente",
              "Para que quede más linda nomás",
              "Para que el agua caiga más fuerte",
              "Porque es más barato"
            ],
            "correcta": 0,
            "explica": "El despeje superior (pico alto) es clave para manipular recipientes voluminosos bajo el chorro."
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
              "Cierre suave con cuarto de vuelta (en bimando), mayor durabilidad, sin goteos y no requiere cambiar 'cueritos'",
              "Es más barato pero pierde rápido",
              "Se rompe con agua caliente",
              "Requiere aceite semanal"
            ],
            "correcta": 0,
            "explica": "Los discos cerámicos pulidos sellan el paso de agua por deslizamiento, siendo casi eternos frente al desgaste."
          },
          {
            "q": "¿Qué es el cierre de 'compresión' (cuerito)?",
            "opciones": [
              "El sistema tradicional a rosca con junta de goma (cuerito) que sella por aplastamiento. Requiere mantenimiento periódico",
              "Un cierre magnético",
              "Un tipo de canilla electrónica",
              "Un cierre cerámico premium"
            ],
            "correcta": 0,
            "explica": "Es el sistema antiguo y económico (bimando), donde hay que cambiar la gomita ('cuerito') cuando gotea."
          },
          {
            "q": "¿Qué es un pico extraíble o duchador de cocina?",
            "opciones": [
              "La punta del pico tiene una manguera extensible oculta que permite sacar el rociador para lavar rincones de la pileta o verduras",
              "Un pico que se puede desenroscar y tirar",
              "Un pico que se mueve solo",
              "Un pico para baño"
            ],
            "correcta": 0,
            "explica": "Fundamental en bachas dobles o grandes: la manguera se estira como un duchador y retorna con un contrapeso."
          },
          {
            "q": "¿Qué materiales aseguran mayor calidad en el cuerpo de una grifería (ej. FV)?",
            "opciones": [
              "Cuerpo de bronce/latón sólido (aleación cobre y zinc) con baño de cromo de alta resistencia",
              "Plástico pintado de cromo",
              "Hierro fundido que se oxida",
              "Plomo puro"
            ],
            "correcta": 0,
            "explica": "Las griferías de alta gama son de latón macizo, lo que asegura que no se piquen internamente."
          },
          {
            "q": "¿Qué es el 'aireador' en la punta del pico?",
            "opciones": [
              "Una malla o filtro que mezcla el agua con aire, dando un chorro espumoso, suave, que no salpica y ahorra agua",
              "Un adorno de color",
              "Un tapón para que no salga agua",
              "Un motorcito"
            ],
            "correcta": 0,
            "explica": "El aireador reduce el consumo real de agua pero da la sensación de chorro abundante y evita salpicaduras."
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
              "Garantía de por vida FV en fallas de cuerpo y cromo. 2 años para cartuchos internos. Recomendá conservar factura",
              "Que no tiene garantía",
              "Que FV cubre 6 meses solo el pico",
              "Que si se rompe compre otra"
            ],
            "correcta": 0,
            "explica": "El diferencial enorme de FV es su garantía de por vida en cuerpo/acabado y su excelente servicio técnico oficial."
          },
          {
            "q": "Un plomero arruinó el cromo de una grifería nueva al apretarla con una llave dentada (pico de loro) sin trapo. ¿Lo cubre la garantía FV?",
            "opciones": [
              "No, los daños por herramientas en la instalación o uso de abrasivos no los cubre la garantía por ser maltrato",
              "Sí, FV te da una nueva",
              "Sí, pero tenés que pagar la mitad",
              "Lo cubre la garantía del seguro de la casa"
            ],
            "correcta": 0,
            "explica": "Daños mecánicos por mala instalación, golpes o químicos (ácido muriático) anulan la garantía estética."
          },
          {
            "q": "El cliente dice 'en mi cocina no hay buena presión (tanque bajo)'. ¿El monocomando funcionará bien?",
            "opciones": [
              "Los monocomandos requieren algo más de presión mínima que los bimandos para mezclar bien el agua. Se le debe advertir o recomendar bomba presurizadora",
              "Funciona mejor sin agua",
              "Los bimandos no necesitan agua",
              "Explotará"
            ],
            "correcta": 0,
            "explica": "El paso de agua en un cartucho monocomando es menor; con baja presión, el caudal puede ser muy pobre."
          },
          {
            "q": "¿Cuál es la venta complementaria al vender una grifería de mesada de cocina?",
            "opciones": [
              "Bacha de cocina, dosificador de detergente y (muy importante si no vienen) 2 caños flexibles para conectar fría y caliente",
              "Pastina epoxi",
              "Mochila de inodoro",
              "Clavos y martillo"
            ],
            "correcta": 0,
            "explica": "Generalmente los monocomandos buenos ya traen flexibles, pero siempre hay que ofrecer bachas y dosificadores."
          },
          {
            "q": "Si el cliente compra grifería negra mate, ¿qué cuidado de limpieza le recomendás?",
            "opciones": [
              "Limpiar solo con agua y jabón neutro, y secar con paño suave. Evitar lavandina, esponjas ásperas o antigrasas fuertes para no dañar el acabado",
              "Rasparla con virulana",
              "Tirarle ácido muriático",
              "No lavarla nunca"
            ],
            "correcta": 0,
            "explica": "Los acabados mate o de color (PVD, pintura) son delicados; químicos fuertes o esponjas abrasivas los rayan o decoloran."
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
              "Le mostrás que Griferías de Cocina revaloriza la propiedad, aporta estética de vanguardia y requiere bajo o nulo mantenimiento con los años.",
              "Le das la razón y le sugerís dejar el contrapiso a la vista.",
              "Le decís que es un lujo innecesario.",
              "Le sugerís pintar con cal común encima."
            ],
            "correcta": 0,
            "explica": "Las terminaciones de calidad aumentan el valor del inmueble y evitan refacciones periódicas."
          },
          {
            "q": "Cliente indeciso: \"¿Qué insumo de colocación debo llevar sí o sí para Griferías de Cocina?\"",
            "opciones": [
              "El adhesivo, sellador o perfilería específica recomendada por el fabricante para garantizar la adhesión y el acabado impecable.",
              "Cualquier pegamento escolar sirve.",
              "No se necesita ningún insumo de pegado.",
              "Solamente agua."
            ],
            "correcta": 0,
            "explica": "Sin el producto de colocación/juntado adecuado, la terminación corre riesgo de desprenderse o mancharse."
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
              "Lavatorio, Bidet y Ducha (o Bañera)",
              "Inodoro, Mochila y Bidet",
              "Ducha y canilla de cocina",
              "Solo un monocomando"
            ],
            "correcta": 0,
            "explica": "El juego completo iguala la estética de las tres áreas del baño."
          },
          {
            "q": "¿Qué es una ducha 'con transferencia' o de bañera?",
            "opciones": [
              "Tiene una llave central/botón que transfiere (desvía) el agua entre el pico de llenado (abajo) y la flor de ducha (arriba)",
              "Es una ducha que se puede mover de baño",
              "Es una ducha que calienta el agua sola",
              "No existe eso"
            ],
            "correcta": 0,
            "explica": "La transferencia desvía el flujo de agua del pico inferior (llenar bañera) hacia la lluvia superior."
          },
          {
            "q": "¿Qué grifería se recomienda para un bidet de 1 agujero?",
            "opciones": [
              "Grifería monocomando para bidet",
              "Grifería bimando de pared",
              "Grifería bimando con transferencia",
              "Ninguna"
            ],
            "correcta": 0,
            "explica": "Un agujero = monocomando. Maneja flujo y mezcla en una sola palanca."
          },
          {
            "q": "¿De qué material es la 'flor' (rociador) de ducha actualmente en muchas líneas?",
            "opciones": [
              "Muchas veces es de ABS (plástico resistente cromado) con picos anticalcáreos de silicona (fáciles de limpiar frotando el dedo)",
              "De plomo macizo",
              "De madera",
              "De cartón piedra"
            ],
            "correcta": 0,
            "explica": "El ABS con picos de silicona evita que se tape con sarro (anticalcáreo) y no oxida."
          },
          {
            "q": "¿Las marcas de grifería de baño son las mismas que de cocina?",
            "opciones": [
              "Sí, comercializamos líneas completas de FV y Vasser",
              "No, son otras marcas distintas",
              "Usamos marca Tromen",
              "Usamos marca Weber"
            ],
            "correcta": 0,
            "explica": "FV y Vasser ofrecen soluciones integrales para cocina y baño."
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
              "Embutir: los caños y llaves van ocultos dentro de la pared. Exterior (columna de ducha): todo el caño va por fuera de la pared revestida",
              "Exterior es para el patio, Embutir es para el inodoro",
              "Embutir es de plástico, exterior de metal",
              "Son exactamente iguales"
            ],
            "correcta": 0,
            "explica": "La tradicional argentina es embutida (las llaves salen de la pared). La exterior es tendencia europea (caño vertical a la vista)."
          },
          {
            "q": "¿Para qué sirve el 'cuadro de ducha'?",
            "opciones": [
              "Es la parte interna (vástagos, cuerpo mezclador de bronce) que queda amurada dentro de la pared",
              "Es un marco para poner fotos en la ducha",
              "Es la flor de arriba",
              "Es el caño de la cortina"
            ],
            "correcta": 0,
            "explica": "Es el corazón de la grifería de embutir. El plomero lo amura y luego se ponen los volantes decorativos (campanas)."
          },
          {
            "q": "¿El cierre cerámico (cuarto de vuelta) requiere un trato especial?",
            "opciones": [
              "Sí, no se debe hacer fuerza al cerrar (no hay que 'apretar' como el cuerito); si se fuerza, se pueden partir los discos de cerámica",
              "Hay que cerrarlo con una pinza de fuerza",
              "Hay que cambiarle el cuerito seguido",
              "No, es irrompible"
            ],
            "correcta": 0,
            "explica": "Solo con llevar el volante a tope basta. Si se ejerce presión extra, el disco cerámico se rompe."
          },
          {
            "q": "¿Qué es el 'pico móvil' en lavatorio?",
            "opciones": [
              "El pico gira a los lados (como en la cocina), en vez de estar fijo. Es útil pero menos común en baño",
              "Un pico eléctrico",
              "Un pico que salta",
              "No existe"
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
              "Porque el recambio a cierre cerámico moderniza la grifería (cierra suave, sin goteos y no requiere tanto mantenimiento) o cambiar el juego asegura años de tranquilidad",
              "Porque los cueritos contaminan",
              "Para vender más caro solamente",
              "Porque el cuerito explota"
            ],
            "correcta": 0,
            "explica": "Muchas bases FV antiguas aceptan cambiar el vástago a cierre cerámico, solucionando goteos para siempre."
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
              "Sarro tapando los orificios. Si son de silicona, se limpian frotando; si no, sumergiéndola en vinagre blanco",
              "Falta de electricidad",
              "Se rompió el tanque",
              "El agua es de otro color"
            ],
            "correcta": 0,
            "explica": "El sarro tapa el paso. Los picos anticalcáreos se inventaron justamente para limpiar eso en segundos."
          },
          {
            "q": "¿Qué venta cruzada aplica cuando te compran grifería completa para armar un baño desde cero?",
            "opciones": [
              "Sanitarios, bachas, cuadro de ducha (si va embutida y no viene todo junto), flexibles, sopapas click-clack, accesorios (toallero, portarrollo) y pastina",
              "Solo baldes de plástico",
              "Ladrillos huecos únicamente",
              "Chapas de zinc"
            ],
            "correcta": 0,
            "explica": "Junto con la grifería van las conexiones, los accesorios estéticos a juego y la loza correspondiente."
          },
          {
            "q": "Un cliente compra un monocomando barato genérico para bidet, y al instalarlo el plomero se da cuenta de que la lluvia no tiene fuerza. ¿Por qué el FV es mejor?",
            "opciones": [
              "El cuerpo interno del FV y su cartucho están diseñados para mezclar y dar caudal adecuado incluso en la transferencia, algo que los genéricos chinos no logran bien",
              "Porque el FV es más pesado",
              "Porque FV es rojo",
              "Porque FV hace ruido"
            ],
            "correcta": 0,
            "explica": "Los bidet requieren redirigir presión interna. Los cartuchos de baja calidad pierden todo el caudal internamente."
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
              "Le mostrás que Griferías de Baño revaloriza la propiedad, aporta estética de vanguardia y requiere bajo o nulo mantenimiento con los años.",
              "Le das la razón y le sugerís dejar el contrapiso a la vista.",
              "Le decís que es un lujo innecesario.",
              "Le sugerís pintar con cal común encima."
            ],
            "correcta": 0,
            "explica": "Las terminaciones de calidad aumentan el valor del inmueble y evitan refacciones periódicas."
          },
          {
            "q": "Cliente indeciso: \"¿Qué insumo de colocación debo llevar sí o sí para Griferías de Baño?\"",
            "opciones": [
              "El adhesivo, sellador o perfilería específica recomendada por el fabricante para garantizar la adhesión y el acabado impecable.",
              "Cualquier pegamento escolar sirve.",
              "No se necesita ningún insumo de pegado.",
              "Solamente agua."
            ],
            "correcta": 0,
            "explica": "Sin el producto de colocación/juntado adecuado, la terminación corre riesgo de desprenderse o mancharse."
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
              "Mesadas de acero inoxidable (ej. Dhinox) y mesadas de granito natural a medida",
              "De madera de pino y vidrio templado",
              "De plástico y cartón prensado",
              "Solo acero inoxidable"
            ],
            "correcta": 0,
            "explica": "Ofrecemos acero (prácticas, modernas) y granito natural (clásicas, durísimas)."
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
              "Es una piedra muy dura, súper resistente a rayaduras, calor y uso rudo. Aporta estética natural (no hay dos iguales)",
              "Es blanda y se puede cortar con tijera",
              "Se oxida",
              "Es de plástico símil piedra"
            ],
            "correcta": 0,
            "explica": "El granito es una roca ígnea durísima, ideal para apoyar ollas calientes y trabajar fuerte encima."
          },
          {
            "q": "¿Qué colores / vetas de granito son muy populares y económicos?",
            "opciones": [
              "Gris Mara, Rosa de Salto o colores sólidos como Negro Brasil (más costoso)",
              "Azul eléctrico y fucsia",
              "Transparente",
              "Madera clara"
            ],
            "correcta": 0,
            "explica": "Los granitos claros/granosos son el estándar accesible; los negros o absolutos son de mayor valor estético."
          },
          {
            "q": "¿La mesada de acero inoxidable viene lisa o con bacha?",
            "opciones": [
              "Viene en ambas opciones: 'mesada ciega' (lisa) o con bacha de acero soldada de fábrica (simple o doble)",
              "Siempre viene con un inodoro",
              "Solo lisa",
              "Solo con bacha triple"
            ],
            "correcta": 0,
            "explica": "Puede pedirse ciega (para zona de trabajo) o con la bacha ya incorporada sin costuras."
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
              "No, el granito es más duro y resistente a los ácidos (limón, vinagre). El mármol es más poroso, blando y se mancha fácil; es mejor para baños",
              "Sí, son la misma piedra con distinto nombre",
              "El granito es artificial",
              "El mármol es más duro"
            ],
            "correcta": 0,
            "explica": "Nunca recomendar mármol para la cocina (se mancha/raya). En cocina va granito (o cuarzo artificial)."
          },
          {
            "q": "¿Cómo se instala una mesada tradicional sobre muebles?",
            "opciones": [
              "Se apoya sobre la estructura del mueble bajo mesada, afirmándola con silicona estructural o adhesivo PU en los puntos de contacto",
              "Con tornillos pasantes",
              "Clavada al piso",
              "Flotando en el aire"
            ],
            "correcta": 0,
            "explica": "El granito es tan pesado que se asienta por gravedad y se sella con silicona a las bases."
          },
          {
            "q": "¿Qué es el 'zócalo' de la mesada?",
            "opciones": [
              "Una franja del mismo material (acero o granito) de unos 5 cm de alto que se pega a la pared para que no escurra agua hacia atrás del mueble",
              "Un adorno en el techo",
              "La bacha profunda",
              "El desagüe"
            ],
            "correcta": 0,
            "explica": "El zócalo sella el encuentro mesada-pared, impidiendo filtraciones hacia atrás."
          },
          {
            "q": "¿Las mesadas de acero Dhinox llevan madera adentro?",
            "opciones": [
              "Suelen tener una placa de MDF o aglomerado hidrófugo por debajo (alma de madera) para darle rigidez y evitar ruido a chapa suelta",
              "Están macizas de acero 100%",
              "No llevan nada",
              "Llevan cartón corrugado"
            ],
            "correcta": 0,
            "explica": "La chapa de acero (fina) va pegada sobre una placa de madera para tener estructura firme."
          },
          {
            "q": "¿Qué cuidado requiere el acero inoxidable a largo plazo?",
            "opciones": [
              "No usar limpiadores abrasivos (virulana fina, polvos duros) para no rayar el pulido. Secarlo evita marcas de gota de agua",
              "Pintarlo con esmalte sintético cada año",
              "No mojarlo nunca",
              "Frotarlo con lija gruesa"
            ],
            "correcta": 0,
            "explica": "El peor enemigo estético del acero es la abrasión extrema o usar productos con cloro que queden sin enjuagar."
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
              "Largo y ancho exacto, si lleva zócalos perimetrales, qué tipo de canto/borde quiere, color elegido, y si hay que hacer el calado (agujero) para bacha o anafe",
              "Solo el color",
              "Si tiene gas",
              "La marca de heladera"
            ],
            "correcta": 0,
            "explica": "Para granito a medida: metros lineales/m2 + zócalos + cantidad de cortes/trazos para piletas o anafes + frentín."
          },
          {
            "q": "Si el cliente pide la mesada de granito con calado para bacha. ¿Qué debe traer obligatoriamente al marmolero?",
            "opciones": [
              "La bacha física o la plantilla exacta, para que el agujero se corte a la medida milimétrica (especialmente si es bajo mesada)",
              "La grifería",
              "Una foto de su cocina",
              "El detergente"
            ],
            "correcta": 0,
            "explica": "Sin la bacha o plantilla, no se hace el agujero, porque las formas varían y la bacha se pega a ese agujero."
          },
          {
            "q": "¿Qué venta cruzada le hacés a quien encarga su mesada?",
            "opciones": [
              "Bacha (acero 304), grifería monocomando, dosificador, sifón doble, y silicona neutra / PU para sellar el zócalo a la pared",
              "Ladrillos huecos",
              "Cemento y cal",
              "Aberturas de aluminio"
            ],
            "correcta": 0,
            "explica": "La mesada desnuda necesita la bacha (si no está integrada), grifería y selladores."
          },
          {
            "q": "Un cliente se queja de que su granito Gris Mara se oscureció cerca de la bacha. ¿Qué pasó y cómo evitarlo?",
            "opciones": [
              "El granito tiene cierta porosidad y absorbió humedad/grasa. Es ideal aplicar un sellador/impermeabilizante para piedra al instalarlo",
              "Es magia oscura",
              "El acero destiñó",
              "Lo rayó con cuchillo"
            ],
            "correcta": 0,
            "explica": "Aunque es duro, el granito natural claro puede absorber agua o aceite oscureciéndose (temporal o permanentemente). Se sella."
          },
          {
            "q": "Un cliente busca la mesada más barata para un departamento de alquiler. ¿Qué le ofrecés?",
            "opciones": [
              "Mesada de acero inoxidable (líneas económicas) ciega o con bacha simple estampada. Es estandarizada, rápida y económica",
              "Granito Negro Brasil puro",
              "Mesada de cuarzo Silestone",
              "Madera de roble maciza"
            ],
            "correcta": 0,
            "explica": "Las mesadas estándar de acero inoxidable son la solución más económica y rápida de resolver en obra."
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
              "Le mostrás que Mesadas revaloriza la propiedad, aporta estética de vanguardia y requiere bajo o nulo mantenimiento con los años.",
              "Le das la razón y le sugerís dejar el contrapiso a la vista.",
              "Le decís que es un lujo innecesario.",
              "Le sugerís pintar con cal común encima."
            ],
            "correcta": 0,
            "explica": "Las terminaciones de calidad aumentan el valor del inmueble y evitan refacciones periódicas."
          },
          {
            "q": "Cliente indeciso: \"¿Qué insumo de colocación debo llevar sí o sí para Mesadas?\"",
            "opciones": [
              "El adhesivo, sellador o perfilería específica recomendada por el fabricante para garantizar la adhesión y el acabado impecable.",
              "Cualquier pegamento escolar sirve.",
              "No se necesita ningún insumo de pegado.",
              "Solamente agua."
            ],
            "correcta": 0,
            "explica": "Sin el producto de colocación/juntado adecuado, la terminación corre riesgo de desprenderse o mancharse."
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
              "Exterior: prioriza seguridad, aislación y resistencia a intemperie (ej. chapa inyectada). Interior: más liviana, divide ambientes, no requiere tanta seguridad (placa)",
              "Exterior es de vidrio, Interior de acero",
              "Exterior no tiene cerradura",
              "Son exactamente iguales"
            ],
            "correcta": 0,
            "explica": "La puerta exterior (frente) debe soportar clima y robos. La interior solo privacidad."
          },
          {
            "q": "¿Qué es una puerta 'placa' de interior (ej. Oblak Nativa)?",
            "opciones": [
              "Es una puerta liviana formada por dos tapas finas (MDF/madera) y un relleno interior estructurado (ej. nido de abeja de cartón)",
              "Una plancha maciza de acero de 10 cm",
              "Una placa de yeso pintada",
              "Una puerta de vidrio"
            ],
            "correcta": 0,
            "explica": "Es la puerta estándar de dormitorio/baño: liviana, económica y funcional."
          },
          {
            "q": "¿Qué significa que una puerta exterior sea de 'chapa inyectada'?",
            "opciones": [
              "Está formada por chapa de acero, y en su interior se inyecta espuma de poliuretano que se expande, dando gran aislación térmica/acústica y rigidez",
              "Que le inyectan plástico derretido en las bisagras",
              "Que se pinta con inyecciones de color",
              "Que es hueca como un tubo"
            ],
            "correcta": 0,
            "explica": "El poliuretano inyectado ('inyectada') le da propiedades térmicas y acústicas como las de una heladera."
          },
          {
            "q": "¿Qué marcas de puertas trabajamos?",
            "opciones": [
              "Oblak (líder en diseño), El Ítalo, Herfasa",
              "Tromen y Rotoplas",
              "Weber y Atrim",
              "Ferrum y Roca"
            ],
            "correcta": 0,
            "explica": "Trabajamos Oblak, El Ítalo y Herfasa."
          },
          {
            "q": "¿Qué significa que una puerta venga 'lista para usar' (ej. Oblak Practika Foil)?",
            "opciones": [
              "Viene con un recubrimiento sintético (foil o melamina) con color o textura madera, y NO necesita ser pintada nunca",
              "Viene con motor automático",
              "Viene sin marco ni bisagras",
              "Se instala en un minuto sola"
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
              "Marco: la estructura que se amura a la pared. Hoja: la parte móvil que se abre y cierra",
              "Marco es la manija, Hoja es el vidrio",
              "Son lo mismo",
              "Hoja es el papel de instrucciones"
            ],
            "correcta": 0,
            "explica": "El marco es el perímetro amurado; la hoja es la puerta en sí."
          },
          {
            "q": "¿De qué pueden ser los marcos de las puertas placa?",
            "opciones": [
              "Marco de chapa (más común, se amura con cemento/cal) o marco de madera (más estético, va atornillado o pegado)",
              "De vidrio templado",
              "De papel maché",
              "De silicona blanda"
            ],
            "correcta": 0,
            "explica": "Las puertas placa vienen con marcos de chapa plegada (pesada o liviana) o de madera."
          },
          {
            "q": "¿Qué cuidado requiere una puerta Oblak Nativa de MDF para pintar?",
            "opciones": [
              "Viene con base blanca, pero el cliente o pintor DEBE aplicarle la pintura de terminación (esmalte sintético o látex) para protegerla",
              "No hay que pintarla, queda así",
              "Hay que tirarle agua hirviendo",
              "Solo se barniza con barniz marino"
            ],
            "correcta": 0,
            "explica": "Las puertas 'para pintar' requieren la mano final para resistir el manoseo y la humedad (especialmente baño)."
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
              "Le aporta estética moderna, superior a la chapa ciega, ideal para frentes de viviendas contemporáneas",
              "Las hace irrompibles",
              "Da WiFi",
              "Son más livianas"
            ],
            "correcta": 0,
            "explica": "Apliques de aluminio/acero y barrales largos ('manijones') modernizan el frente de la casa."
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
              "Una 'puerta de recambio' o 'puerta con marco refacción' (Oblak tiene), que se instala atornillando un marco nuevo sobre el marco viejo metálico, sin romper yeso",
              "Que rompa la pared sí o sí",
              "Una puerta corrediza colgante de establo nomás",
              "Una cortina gruesa"
            ],
            "correcta": 0,
            "explica": "Existen sistemas de recambio ('renova') que tapan el marco viejo con contramarcos nuevos en seco."
          },
          {
            "q": "¿Qué elemento es vital NO olvidar cuando la puerta viene con la base (marco) sin manija de fábrica?",
            "opciones": [
              "Los herrajes: manija (picaporte) interior y exterior. Y opcionalmente cerradura de seguridad si quiere cambiar la que trae",
              "La pintura sintética obligatoria",
              "Un candado",
              "Aceite lubricante 40W"
            ],
            "correcta": 0,
            "explica": "Casi ninguna puerta incluye la manija (picaporte); es la venta cruzada número 1 obligatoria."
          },
          {
            "q": "El cliente compró puerta inyectada negra y la instaló a pleno sol en el frente oeste. Se queja de que no cierra bien. ¿Por qué?",
            "opciones": [
              "La chapa negra absorbe muchísimo calor, el acero y el poliuretano dilatan y la puerta se hincha/arquea en verano. Se desaconsejan colores oscuros al sol directo (requieren alero protector)",
              "Porque se encoge con el calor",
              "Porque se oxida la bisagra",
              "Porque la cerradura es de plástico"
            ],
            "correcta": 0,
            "explica": "Problema clásico: el color negro absorbe radiación y deforma la chapa exterior. Oblak lo advierte."
          },
          {
            "q": "¿Cuál es el 'combo de seguridad' ideal para una puerta exterior?",
            "opciones": [
              "Puerta chapa 18 inyectada + cerradura de seguridad doble perno + cerrojo adicional superior (o cerradura multipunto de fábrica) + barral",
              "Puerta placa con candado",
              "Puerta de madera con clavo",
              "Puerta de aluminio simple"
            ],
            "correcta": 0,
            "explica": "A la puerta segura (chapa 18, inyectada) hay que sumarle una cerradura multipunto o doble perno."
          },
          {
            "q": "El albañil va a amurar el marco de chapa de la puerta placa. ¿Qué mezcla debe usar para evitar óxido futuro a largo plazo?",
            "opciones": [
              "Cemento y arena (concreto). NO DEBE usar yeso ni exceso de cal común tocando directo la chapa sin pintura antióxido por detrás",
              "Arcilla y agua",
              "Silicona neutra sola",
              "Pegamento C1"
            ],
            "correcta": 0,
            "explica": "La cal y el yeso corroen la chapa. El marco se rellena con concreto o poliuretano (en sistemas en seco)."
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
              "Le mostrás que Puertas (Interior y Exterior) revaloriza la propiedad, aporta estética de vanguardia y requiere bajo o nulo mantenimiento con los años.",
              "Le das la razón y le sugerís dejar el contrapiso a la vista.",
              "Le decís que es un lujo innecesario.",
              "Le sugerís pintar con cal común encima."
            ],
            "correcta": 0,
            "explica": "Las terminaciones de calidad aumentan el valor del inmueble y evitan refacciones periódicas."
          },
          {
            "q": "Cliente indeciso: \"¿Qué insumo de colocación debo llevar sí o sí para Puertas (Interior y Exterior)?\"",
            "opciones": [
              "El adhesivo, sellador o perfilería específica recomendada por el fabricante para garantizar la adhesión y el acabado impecable.",
              "Cualquier pegamento escolar sirve.",
              "No se necesita ningún insumo de pegado.",
              "Solamente agua."
            ],
            "correcta": 0,
            "explica": "Sin el producto de colocación/juntado adecuado, la terminación corre riesgo de desprenderse o mancharse."
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
              "Es duradero, resistente a la intemperie, no se oxida, no se deforma y requiere cero mantenimiento",
              "Porque es el metal más barato del mundo",
              "Porque es transparente",
              "Porque se dobla como papel"
            ],
            "correcta": 0,
            "explica": "A diferencia del hierro (oxida) o la madera (pudre/hincha), el aluminio pintado es eterno."
          },
          {
            "q": "¿Qué es la Línea Herrero en aberturas de aluminio?",
            "opciones": [
              "La opción básica y económica: perfiles más finos, ideal para obras estándar o presupuestos ajustados",
              "La de máxima seguridad blindada",
              "La que imita hierro antiguo",
              "No es de aluminio, es hierro"
            ],
            "correcta": 0,
            "explica": "Herrero es la línea histórica, de bajo costo, liviana y funcionalidad básica."
          },
          {
            "q": "¿Qué es la Línea Módena?",
            "opciones": [
              "Línea de media-alta gama: perfilería más robusta, mejor cierre hermético, estética redondeada/moderna y excelente aislamiento",
              "Una marca de motos italianas",
              "Una línea económica de plástico",
              "La que se usaba en 1950"
            ],
            "correcta": 0,
            "explica": "Módena ofrece perfiles más anchos, soportan vidrios pesados, ruedas de calidad y mejor hermeticidad al viento/agua."
          },
          {
            "q": "¿Qué significa DVH?",
            "opciones": [
              "Doble Vidriado Hermético: dos vidrios con una cámara de aire sellada en el medio. Aísla ruido y temperatura de forma excelente",
              "Doble Vidrio Hierro",
              "De Varias Hojas",
              "Diseño Visual Hermoso"
            ],
            "correcta": 0,
            "explica": "El DVH (ej. 4mm-9mm-4mm) reduce drásticamente el frío, el calor y el ruido de la calle."
          },
          {
            "q": "¿Qué marcas trabajamos?",
            "opciones": [
              "Herfasa, El Ítalo, Novo (según disponibilidad)",
              "Ternium",
              "Weber",
              "Atrim"
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
              "Corrediza (dos hojas que se deslizan sobre guías). Porque no ocupa espacio hacia adentro del ambiente al abrir",
              "Abatible de abrir hacia afuera",
              "Oscilobatiente",
              "Paño fijo (no abre)"
            ],
            "correcta": 0,
            "explica": "La corrediza es la reina por ahorrar espacio (no choca con cortinas ni muebles)."
          },
          {
            "q": "¿Qué es una ventana de abrir (abatible) y qué ventaja térmica tiene?",
            "opciones": [
              "Abre como una puerta. Cierra presionando juntas de goma perimetrales, logrando la máxima hermeticidad (mejor que la corrediza)",
              "Es igual que la corrediza",
              "No cierra bien",
              "Cae agua por debajo"
            ],
            "correcta": 0,
            "explica": "La corrediza deja pasar algo de aire por las felpas; la batiente 'sella' contra una goma, ideal para frío extremo."
          },
          {
            "q": "¿Qué es una ventana 'rajá' y una 'banderola'?",
            "opciones": [
              "Raja: alta y angosta (se abre de costado). Banderola: apaisada, se abre empujando de abajo hacia afuera (ideal para baños altos)",
              "Nombres de pinturas",
              "Tipos de vidrios transparentes",
              "Tipos de puertas placa"
            ],
            "correcta": 0,
            "explica": "Son tipologías pequeñas de ventilación (baños, cocinas, pasillos)."
          },
          {
            "q": "¿Se le puede poner mosquitero a cualquier ventana?",
            "opciones": [
              "A las corredizas se les suma fácil (corre por guía propia). A las de abrir o proyectantes es más complejo (mosquitero fijo o enrollable extra)",
              "No, el aluminio rechaza la malla",
              "Sí, pero hay que agujerear el vidrio",
              "Solo si no tienen rejas"
            ],
            "correcta": 0,
            "explica": "El mosquitero de hoja corrediza es el accesorio directo para Herrero/Módena corrediza."
          },
          {
            "q": "¿Se amura la ventana de aluminio directamente a la pared con material fresco?",
            "opciones": [
              "Se puede, PERO la mejor práctica profesional es instalar un PREMARCO (submarco) y amurar la ventana final con tornillos al terminar la obra limpia",
              "Sí, tirándole baldes de cemento encima",
              "Solo si se pone antes del ladrillo",
              "No, va colgada de hilos"
            ],
            "correcta": 0,
            "explica": "El premarco salva la abertura de golpes y manchas de cal durante la obra gruesa."
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
              "Premarco (si la línea lo lleva), mosquitero, reja de seguridad y espuma de poliuretano / silicona neutra para el sellado final a la pared",
              "Madera y barniz",
              "Pintura sintética",
              "Nada"
            ],
            "correcta": 0,
            "explica": "El sellado es fundamental; la silicona y el poliuretano previenen filtraciones perimetrales."
          },
          {
            "q": "¿La Línea Herrero soporta bien un vidrio DVH?",
            "opciones": [
              "No está diseñada estructuralmente para el grosor y peso de un DVH. Para DVH se salta a Módena o superior",
              "Sí, le sobra espacio",
              "Solo si lo pegás con cinta adhesiva por fuera",
              "Sí, siempre trae DVH de fábrica"
            ],
            "correcta": 0,
            "explica": "Los perfiles Herrero son finos; el DVH no entra en la 'U' del perfil, obliga a saltar a Módena."
          },
          {
            "q": "¿Por qué el aluminio blanco domina el mercado residencial estándar?",
            "opciones": [
              "Es pintura horneada (epoxi), no se decolora con el sol, es limpia y combina con cualquier color de pared exterior",
              "Porque no existe aluminio negro o anodizado",
              "Porque es más fácil pintarlo después",
              "Porque absorbe calor"
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
              "Sí, reduce hasta un 50% las pérdidas de temperatura y aísla ruidos molestos del exterior, ahorrando energía de aire o calefacción.",
              "No, el vidrio doble sólo sirve si hace -20°C.",
              "Es lo mismo que poner film transparente en la ventana.",
              "Hace que la habitación esté siempre a oscuras."
            ],
            "correcta": 0,
            "explica": "El DVH aísla térmica y acústicamente, generando confort permanente y ahorro en facturas de servicios."
          },
          {
            "q": "Cliente indeciso: \"¿Qué insumo de colocación debo llevar sí o sí para Ventanas de Aluminio?\"",
            "opciones": [
              "El adhesivo, sellador o perfilería específica recomendada por el fabricante para garantizar la adhesión y el acabado impecable.",
              "Cualquier pegamento escolar sirve.",
              "No se necesita ningún insumo de pegado.",
              "Solamente agua."
            ],
            "correcta": 0,
            "explica": "Sin el producto de colocación/juntado adecuado, la terminación corre riesgo de desprenderse o mancharse."
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
              "Toallero aro, portarrollos, jabonera, percha y a veces toallero de barra o vaso cepillero",
              "Espejo, inodoro y lavatorio",
              "Solo toallas y jabones perfumados",
              "Ducha y canilla de bidet"
            ],
            "correcta": 0,
            "explica": "Son los herrajes funcionales (de pared o apoyo) de higiene diaria."
          },
          {
            "q": "¿Cómo se fijan los accesorios de baño modernos?",
            "opciones": [
              "Con tacos y tornillos ocultos a la pared, y últimamente muchos sistemas de pegado 3M para evitar perforar el cerámico",
              "Clavados con martillo",
              "Soldados al hierro",
              "Atados con alambre"
            ],
            "correcta": 0,
            "explica": "Las opciones de adhesivo 3M de alta adherencia son muy buscadas para no agujerear porcelanatos duros."
          },
          {
            "q": "¿Qué es un botiquín?",
            "opciones": [
              "Un mueble de pared (con o sin espejo) para guardar cepillos, remedios y perfumería, manteniendo el orden",
              "Un maletín de primeros auxilios médico con vendas rojas",
              "Un tipo de canilla grande",
              "El depósito del inodoro"
            ],
            "correcta": 0,
            "explica": "En Argentina, se llama botiquín al mueblecito espejo del baño (de metal, PVC o madera)."
          },
          {
            "q": "¿Qué es un secatoallas (toallero radiador)?",
            "opciones": [
              "Un accesorio eléctrico (o de agua) de pared que calienta el ambiente y seca las toallas húmedas",
              "Un ventilador de techo para baños",
              "Un secador de pelo industrial",
              "Una toalla con luces"
            ],
            "correcta": 0,
            "explica": "Confort premium: elimina toallas húmedas y calefacciona el baño simultáneamente."
          },
          {
            "q": "¿Qué marcas destacan en accesorios cromados?",
            "opciones": [
              "FV y Vasser (líneas que hacen juego con las griferías)",
              "Atrim",
              "Ternium",
              "Cerámica Marcos Paz"
            ],
            "correcta": 0,
            "explica": "FV y Vasser fabrican accesorios con la misma estética que sus líneas de grifería (ej. kit Newport, Libby, etc.)."
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
              "Vidrio Templado (si se rompe, estalla en migajas no cortantes) de 8 o 10 mm",
              "Vidrio simple de ventana de 3mm",
              "Vidrio de botella reciclada",
              "Plástico blando (film)"
            ],
            "correcta": 0,
            "explica": "El vidrio templado es norma de seguridad: no genera 'cuchillas' gigantes si alguien se resbala y lo golpea."
          },
          {
            "q": "¿Qué alternativas más económicas al vidrio templado se venden?",
            "opciones": [
              "Mamparas de acrílico con perfiles de aluminio (son más livianas pero se opacan/rayan con el tiempo)",
              "Mamparas de cartón",
              "Madera terciada pintada",
              "Chapón de hierro"
            ],
            "correcta": 0,
            "explica": "El acrílico en placas con marco de aluminio es el sistema tradicional económico."
          },
          {
            "q": "¿Cómo se instala un espejo sin marco en el revestimiento del baño?",
            "opciones": [
              "Con silicona NEUTRA (las acéticas 'comen' el espejado trasero) o fijaciones metálicas (grampas / botones cromados)",
              "Con clavos oxidados al medio",
              "Con cemento rápido",
              "Atado con hilos"
            ],
            "correcta": 0,
            "explica": "Regla de oro del espejo: SIEMPRE silicona Neutra, porque la acética derrite la plata trasera manchando el espejo."
          },
          {
            "q": "¿Qué es un receptáculo de ducha?",
            "opciones": [
              "Una base (acrílico/loza) lista para instalar, con caída hacia la sopapa, reemplazando el piso tradicional de azulejos (el cuadradito de ducha)",
              "El lugar donde se recicla jabón",
              "Un inodoro de ducha",
              "Un balde para los pies"
            ],
            "correcta": 0,
            "explica": "Evita tener que hacer desniveles en la carpeta y cerámicas cortadas. Se instala la caja lista e impermeable."
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
              "El kit de accesorios FV Libby o Vasser equivalente de líneas cuadradas/rectas para mantener la coherencia de diseño (jabonera, toallero, etc.)",
              "Un kit barato redondo de plástico de oferta",
              "Una canilla de jardín",
              "Nada, ya compró bastante"
            ],
            "correcta": 0,
            "explica": "El 'Cross-Selling' de diseño: el accesorio debe conversar geométricamente con la grifería."
          },
          {
            "q": "Un cliente compra un espejo con luz LED trasera. ¿Qué precaución de obra hay que tener?",
            "opciones": [
              "Que el albañil deje una caja eléctrica en la pared, escondida exactamente detrás de donde irá el espejo",
              "Ninguna, funcionan con el aire",
              "Que ponga un enchufe en el techo",
              "Que le dé la luz del sol directo"
            ],
            "correcta": 0,
            "explica": "Requiere alimentación 220V oculta (normalmente centrada a 1,60m de altura) para que no se vean cables colgar."
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
              "No asentar la base completamente con mezcla/arena (dejarla hueca). Al pisar el peso flexiona el acrílico y lo parte",
              "Pegarlo a la pared",
              "Ponerle la sopapa",
              "Hacer que el agua caiga adentro"
            ],
            "correcta": 0,
            "explica": "Los receptáculos requieren cama de mortero para que el peso de la persona apoye en firme."
          },
          {
            "q": "El cliente quiere comprar mampara, grifería, inodoro... todo para hoy. Pero el baño aún está en revoque grueso. ¿Por qué le decís que espere con la mampara?",
            "opciones": [
              "Las mamparas de vidrio (especialmente las fijas o corredizas a medida) se miden y fabrican RECIÉN cuando los cerámicos están terminados, al milímetro",
              "Porque se aburrirá del color",
              "Porque son pesadas para llevar hoy",
              "Porque se rompen solas guardadas"
            ],
            "correcta": 0,
            "explica": "Nunca vender/fabricar mampara con la obra sin terminar. Un centímetro de grueso+pegamento+cerámica arruina la medida."
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
              "Le mostrás que Accesorios Baño / Cocina revaloriza la propiedad, aporta estética de vanguardia y requiere bajo o nulo mantenimiento con los años.",
              "Le das la razón y le sugerís dejar el contrapiso a la vista.",
              "Le decís que es un lujo innecesario.",
              "Le sugerís pintar con cal común encima."
            ],
            "correcta": 0,
            "explica": "Las terminaciones de calidad aumentan el valor del inmueble y evitan refacciones periódicas."
          },
          {
            "q": "Cliente indeciso: \"¿Qué insumo de colocación debo llevar sí o sí para Accesorios Baño / Cocina?\"",
            "opciones": [
              "El adhesivo, sellador o perfilería específica recomendada por el fabricante para garantizar la adhesión y el acabado impecable.",
              "Cualquier pegamento escolar sirve.",
              "No se necesita ningún insumo de pegado.",
              "Solamente agua."
            ],
            "correcta": 0,
            "explica": "Sin el producto de colocación/juntado adecuado, la terminación corre riesgo de desprenderse o mancharse."
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
              "El sistema de doble combustión: quema la leña y luego quema los gases, generando más calor con menos consumo y sin humo adentro",
              "Son eléctricas escondidas",
              "Usan nafta en vez de leña",
              "Son de adorno nomás"
            ],
            "correcta": 0,
            "explica": "La doble combustión ecológica (combustión primaria y secundaria de gases) optimiza la leña."
          },
          {
            "q": "¿Qué tipo de equipos ofrece Tromen?",
            "opciones": [
              "Salamandras (estufas a leña), hornos, parrillas y cocinas a leña/gas",
              "Heladeras y aires acondicionados",
              "Muebles de cocina de melamina",
              "Televisores"
            ],
            "correcta": 0,
            "explica": "El core es la combustión a leña de alto rendimiento, tanto para calefacción como cocción."
          },
          {
            "q": "¿El cliente va a tener olor a humo en el living con una Tromen?",
            "opciones": [
              "No, son equipos totalmente herméticos. Todo el humo sale por la chimenea si está bien instalada",
              "Sí, el mismo que en un campamento",
              "Depende si abre la puerta de calle",
              "Siempre tiran un poco"
            ],
            "correcta": 0,
            "explica": "Al ser caja de fuego cerrada hermética, el ambiente queda limpio y sin olores."
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
              "Ladrillos refractarios en base y laterales para conservar y potenciar el calor radiante",
              "Arena y agua humedecida",
              "Paredes de plástico pintado",
              "Espejos curvos de chapa"
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
              "Un conducto (caño/chimenea) con tiraje al exterior que salga a los 'cuatro vientos'",
              "Un enchufe 220V",
              "Un ventilador de techo",
              "Una garrafa conectada"
            ],
            "correcta": 0,
            "explica": "El principio del hogar a leña es el 'tiro natural': necesita chimenea recta al exterior."
          },
          {
            "q": "¿Qué es la salida a los 'cuatro vientos'?",
            "opciones": [
              "La chimenea debe superar en altura al punto más alto del techo u obstáculos cercanos (unos 60-100cm), para que el viento de cualquier lado no revoque el humo hacia adentro",
              "Poner 4 ventiladores rodeando el caño",
              "Apuntar la salida a 4 provincias distintas",
              "Es un mito decorativo"
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
              "Salir todo derecho por el techo (recto) siempre tiene el mejor tiraje (y es más barato). Salir por la pared frena un poco el humo y junta más hollín en el codo",
              "Con 10 codos en zig-zag para decorar",
              "Salir por el sótano",
              "Por la ventana"
            ],
            "correcta": 0,
            "explica": "El tiro óptimo es vertical. Los codos a 45° frenan los gases; siempre priorizar salida recta si la casa lo permite."
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
              "El Kit de Instalación Techo (caños, lana, sombrerete, sellador) y/o caños encamisados extra si sale por techo de mucha altura / pared",
              "Solo leña",
              "Pintura para retocar",
              "Ladrillos para la pared"
            ],
            "correcta": 0,
            "explica": "La estufa viene pelada. Sin el kit de caños y sombrerete el plomero no puede instalarla."
          },
          {
            "q": "El cliente instaló por techo de madera. Pregunta cómo proteger la madera del calor del caño. ¿Qué le explicás?",
            "opciones": [
              "Debe usar reducción (cajón) y caño encamisado con aislante. Nunca caño simple pegado a la madera (riesgo de incendio)",
              "Que moje la madera cada noche",
              "No pasa nada, la madera no se quema",
              "Que envuelva el caño en papel aluminio de cocina"
            ],
            "correcta": 0,
            "explica": "Prevención de incendios: en cruces de cielorrasos o techos inflamables el caño DEBE ir doble (encamisado con lana mineral)."
          },
          {
            "q": "¿Qué le aconsejás sobre la limpieza anual del equipo?",
            "opciones": [
              "Que debe deshollinar (limpiar) los caños una vez al año (con hisopo deshollinador) para evitar fuego de chimenea y recuperar el tiraje óptimo",
              "Que lo limpie con la manguera por arriba",
              "No se limpia nunca",
              "Que tire alcohol adentro y lo encienda"
            ],
            "correcta": 0,
            "explica": "El mantenimiento del conducto es vital; el hollín acumulado reduce el calor y puede incendiarse."
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
              "Tromen tiene un costo de instalación alto, pero usar leña en doble combustión es muchísimo más barato y cálido (y no se corta con el invierno) que la cuenta de luz eléctrica de un caloventor (que gasta fortunas y no cubre toda la casa)",
              "El caloventor es mejor siempre",
              "Que ponga diez caloventores por casa",
              "Que la leña es más cara que el oro"
            ],
            "correcta": 0,
            "explica": "El costo operativo de la leña en alto rendimiento vs. la tarifa eléctrica hace amortizar la estufa en pocas temporadas."
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
              "El sistema de doble combustión rinde hasta 80% más calor con menos leña, amortizando el costo en 1-2 temporadas y dando calor seguro aun sin luz ni gas.",
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
              "El adhesivo, sellador o perfilería específica recomendada por el fabricante para garantizar la adhesión y el acabado impecable.",
              "Cualquier pegamento escolar sirve.",
              "No se necesita ningún insumo de pegado.",
              "Solamente agua."
            ],
            "correcta": 0,
            "explica": "Sin el producto de colocación/juntado adecuado, la terminación corre riesgo de desprenderse o mancharse."
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
              "Para revestimiento de paredes interiores, ofreciendo terminación decorativa de alta calidad",
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
              "Protege la superficie y mantiene la terminación estética del panel",
              "Genera luz en la oscuridad",
              "Evita que la placa se doble con el calor",
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
              "Tienen excelente resistencia a la humedad, no la absorben y son ideales para remodelaciones sin obra húmeda",
              "Se arruinan si las toca el agua",
              "Deben barnizarse cada año para resistir la humedad",
              "Absorben la humedad del ambiente para secarlo"
            ],
            "correcta": 0,
            "explica": "Al ser fabricadas en SPC, no absorben humedad y tienen propiedades antimoho y antipolillas."
          },
          {
            "q": "¿Cómo se realiza la instalación de las Placas UV?",
            "opciones": [
              "Mediante adhesivo y perfiles de terminación, logrando una colocación rápida y prolija",
              "Clavadas a la pared con clavos de acero",
              "Con mezcla de cemento y arena",
              "Encajando a presión como un rompecabezas sin pegamento"
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
            "explica": "Son paneles livianos, pesando aproximadamente 19 kg cada placa de 1220x2440mm, facilitando su manipulación."
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
              "Le mostrás que Placas UV (Vigorita) revaloriza la propiedad, aporta estética de vanguardia y requiere bajo o nulo mantenimiento con los años.",
              "Le das la razón y le sugerís dejar el contrapiso a la vista.",
              "Le decís que es un lujo innecesario.",
              "Le sugerís pintar con cal común encima."
            ],
            "correcta": 0,
            "explica": "Las terminaciones de calidad aumentan el valor del inmueble y evitan refacciones periódicas."
          },
          {
            "q": "Cliente indeciso: \"¿Qué insumo de colocación debo llevar sí o sí para Placas UV (Vigorita)?\"",
            "opciones": [
              "El adhesivo, sellador o perfilería específica recomendada por el fabricante para garantizar la adhesión y el acabado impecable.",
              "Cualquier pegamento escolar sirve.",
              "No se necesita ningún insumo de pegado.",
              "Solamente agua."
            ],
            "correcta": 0,
            "explica": "Sin el producto de colocación/juntado adecuado, la terminación corre riesgo de desprenderse o mancharse."
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
              "Wood Plastic Composite (Compuesto de madera y polímeros)",
              "Wall Panel Cover (Cubierta de panel de pared)",
              "Water Proof Cement",
              "Wood Painted Color"
            ],
            "correcta": 0,
            "explica": "WPC es Wood Plastic Composite, un material que combina fibras de madera y polímeros de alta resistencia."
          },
          {
            "q": "¿Qué estética brindan los revestimientos WPC Interior Vigorita?",
            "opciones": [
              "Terminación símil madera de excelente calidad, con una estructura acanalada moderna",
              "Terminación de mármol brillante",
              "Acabado de ladrillo a la vista",
              "Superficie de espejo"
            ],
            "correcta": 0,
            "explica": "Brindan una terminación estética símil madera, muy natural, ideal para ambientes interiores modernos."
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
              "Sí, es un material resistente a la humedad, hongos e insectos",
              "No, se hincha al entrar en contacto con el agua",
              "Solo si se le aplica un sellador acrílico",
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
              "Son sumamente livianos, facilitando el transporte y la instalación",
              "Vienen en rollos flexibles",
              "Son pesados para evitar que se vuelen",
              "Se pueden desarmar en varillas diminutas"
            ],
            "correcta": 0,
            "explica": "A pesar de su durabilidad y excelente estabilidad dimensional, su diseño hueco los hace livianos y fáciles de manejar."
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
              "Le mostrás que Revestimiento WPC Interior revaloriza la propiedad, aporta estética de vanguardia y requiere bajo o nulo mantenimiento con los años.",
              "Le das la razón y le sugerís dejar el contrapiso a la vista.",
              "Le decís que es un lujo innecesario.",
              "Le sugerís pintar con cal común encima."
            ],
            "correcta": 0,
            "explica": "Las terminaciones de calidad aumentan el valor del inmueble y evitan refacciones periódicas."
          },
          {
            "q": "Cliente indeciso: \"¿Qué insumo de colocación debo llevar sí o sí para Revestimiento WPC Interior?\"",
            "opciones": [
              "El adhesivo, sellador o perfilería específica recomendada por el fabricante para garantizar la adhesión y el acabado impecable.",
              "Cualquier pegamento escolar sirve.",
              "No se necesita ningún insumo de pegado.",
              "Solamente agua."
            ],
            "correcta": 0,
            "explica": "Sin el producto de colocación/juntado adecuado, la terminación corre riesgo de desprenderse o mancharse."
          }
        ]
      }
    ]
  }
];
