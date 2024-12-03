export interface Person {
    id: number;
    Nome: string;
    Previewdescription: string;
    Fulldescription: string;
    Alcunha: string;
    Altura: number;
    Peso: number;
    idade: number;
    Haki: boolean;
    Haki2: boolean;
    Haki3: boolean;
    HakiV2: boolean;
    Haki2V2: boolean;
    Haki3V2: boolean;
    Devilfruit: boolean;
    variant: string;
    variantS: string;
    Cargo: string;
}

export const Personsop: Person[] = [
    {
        id: 1,
        Nome: "Luffy",
        Previewdescription: "Monkey D. Luffy o capitão do bando dos chapeus de palha, usuario da gomu gomu no mi virando um garoto de borracha",
        Fulldescription: "Luffy nasceu na Vila Foosha, no East Blue, neto de Monkey D. Garp, herói da Marinha, e filho de Monkey D. Dragon, líder revolucionário; na infância, idolatrava Shanks, líder dos Piratas do Ruivo, que frequentemente visitava sua vila; após comer acidentalmente a Gomu Gomu no Mi, que transformou seu corpo em borracha mas o tornou incapaz de nadar, foi salvo por Shanks, que perdeu um braço para protegê-lo e lhe deu o chapéu de palha como promessa de que o devolveria ao se tornar um grande pirata, inspirando Luffy a buscar o lendário One Piece deixado por Gol D. Roger.",
        variant: "hover:border-red-500",
        variantS: "shadow-orange-300",
        Alcunha: "Luffy do Chapéu de Palha",
        Altura: 1.74,
        Peso: 72,
        Haki: true,
        Haki2: true,
        Haki3: true,
        Devilfruit: true,
        Cargo: "Capitão",
        HakiV2: true,
        Haki2V2: true,
        Haki3V2: true,
        idade: 23,
    },
    {
        id: 2,
        Nome: "Zoro",
        Previewdescription: "Roronoa Zoro o espadachim do bando dos chapeus de palha, usuario do estilo três espadas Santoryu",
        Fulldescription: "Roronoa Zoro, conhecido como o Caçador de Piratas, é um espadachim habilidoso que sonha em se tornar o melhor do mundo para honrar uma promessa feita à sua amiga de infância Kuina; inicialmente caçador de recompensas, Zoro foi recrutado por Luffy após ser salvo da execução na base da Marinha em Shells Town, onde provou sua lealdade ao Capitão ao lutar ao seu lado contra o Capitão Morgan; ele utiliza um estilo único de combate com três espadas, o Santoryu, e se destaca por sua força, determinação e senso de honra, dedicando-se a alcançar seu sonho enquanto ajuda Luffy a se tornar o Rei dos Piratas.",
        variant: "hover:border-green-500",
        variantS: "shadow-green-300",
        Alcunha: "O Caçador de Piratas",
        Altura: 1.81,
        Peso: 80,
        Haki: true,
        Haki2: true,
        Haki3: true,
        Devilfruit: false,
        Cargo: "Espadachim",
        HakiV2: true,
        Haki2V2: true,
        Haki3V2: false,
        idade: 23,
    },
    {
        id: 3,
        Nome: "Sanji",
        Previewdescription: "Vismoke Sanji o cozinheiro e combatente do bando dos chapeus de palha",
        Fulldescription: "Sanji, conhecido como o ''Perna Negra'', é o talentoso cozinheiro dos Piratas do Chapéu de Palha e sonha em encontrar o lendário All Blue, o mar onde todos os peixes do mundo se encontram; criado por Zeff, um ex-pirata que salvou sua vida e o ensinou a cozinhar, Sanji aprendeu a lutar usando apenas as pernas para proteger suas mãos como chef; recrutado por Luffy no restaurante flutuante Baratie, Sanji é conhecido por sua habilidade culinária excepcional, suas técnicas de combate poderosas como o Diable Jambe e por seu cavalheirismo, especialmente com mulheres, enquanto dedica sua vida a ajudar Luffy a alcançar o título de Rei dos Piratas.",
        variant: "hover:border-yellow-500",
        variantS: "shadow-yellow-300",
        Alcunha: "Perna Negra",
        Altura: 1.80,
        Peso: 72,
        Haki: true,
        Haki2: true,
        Haki3: false,
        Devilfruit: false,
        Cargo: "Cozinheiro",
        HakiV2: true,
        Haki2V2: true,
        Haki3V2: false,
        idade: 21,
    },
    {
        id: 4,
        Nome: "Nami",
        Previewdescription: "Nami a navegadora do bando dos chapeus de palha, com seu clima tact ela pode criar eventos climaticos",
        Fulldescription: "Nami, conhecida como a ''Gata Ladra'', é a navegadora dos Piratas do Chapéu de Palha, cujo sonho é desenhar o mapa completo do mundo; órfã criada por Belle-Mère, foi forçada a trabalhar para a tripulação do pirata Arlong para salvar sua vila, Cocoyasi, juntando dinheiro para comprar sua liberdade; após ser salva por Luffy e seu bando, que derrotaram Arlong e libertaram sua vila, Nami se junta à tripulação, utilizando sua inteligência, habilidades de navegação excepcionais e seu Clima-Tact, uma arma que manipula o clima, enquanto ajuda Luffy a se tornar o Rei dos Piratas e busca realizar seu sonho de cartografia.",
        variant: "hover:border-orange-500",
        variantS: "shadow-orange-500",
        Alcunha: "Gata Ladra",
        Altura: 1.69,
        Peso: 54,
        Haki: false,
        Haki2: false,
        Haki3: false,
        Devilfruit: false,
        Cargo: "Navegadora",
        HakiV2: false,
        Haki2V2: false,
        Haki3V2: false,
        idade: 20,
    },
    {
        id: 5,
        Nome: "Usopp",
        Previewdescription: "Usopp o atirador do bando dos chapeus de palha, usando um estilingue no lugar de uma arma de fogo",
        Fulldescription: "Usopp, conhecido como o ''Rei dos Atiradores'' e mais tarde como ''God Usopp'', é o atirador dos Piratas do Chapéu de Palha, cujo sonho é se tornar um valente guerreiro dos mares, inspirado por seu pai Yasopp, que é membro dos Piratas do Ruivo; inicialmente um mentiroso e contador de histórias na Vila Syrup, Usopp se junta à tripulação de Luffy após ajudá-los a proteger sua vila do pirata Kuro, demonstrando coragem e engenhosidade; habilidoso com armas de longa distância e estratégias criativas, Usopp evolui ao longo da jornada, tornando-se um guerreiro confiável enquanto ajuda Luffy a alcançar o título de Rei dos Piratas.",
        variant: "hover:border-yellow-800",
        variantS: "shadow-yellow-900",
        Alcunha: "God Usopp",
        Altura: 1.76,
        Peso: 60,
        Haki: false,
        Haki2: true,
        Haki3: false,
        Devilfruit: false,
        Cargo: "Atirador",
        HakiV2: false,
        Haki2V2: true,
        Haki3V2: false,
        idade: 19,
    },
    {
        id: 6,
        Nome: "Chopper",
        Previewdescription: "Tony Tony Chooper o medico do bando dos chapeus de palha, uma rena que comeu a hito hito no mi a fruta do humano",
        Fulldescription: "Tony Tony Chopper, o médico dos Piratas do Chapéu de Palha, é uma rena que comeu a Hito Hito no Mi, uma fruta do diabo que lhe concedeu forma humana e inteligência; inicialmente rejeitado tanto por humanos quanto por renas devido à sua aparência híbrida, foi acolhido e treinado pelo doutor Hiriluk e depois pela doutora Kureha, que o inspiraram a se tornar um médico capaz de curar qualquer doença; recrutado por Luffy após os eventos em Drum Island, Chopper utiliza suas habilidades médicas excepcionais e suas transformações graças ao Rumble Ball para proteger seus amigos enquanto busca realizar seu sonho de ser um grande médico e ajudar Luffy a se tornar o Rei dos Piratas.",
        variant: "hover:border-pink-500",
        variantS: "shadow-pink-500",
        Alcunha: "O Amante de Algodão-Doce",
        Altura: 0.90,
        Peso: 23,
        Haki: false,
        Haki2: false,
        Haki3: false,
        Devilfruit: true,
        Cargo: "Medico",
        HakiV2: false,
        Haki2V2: false,
        Haki3V2: false,
        idade: 17,
    },
    {
        id: 7,
        Nome: "Brook",
        Previewdescription: "Brook o musico do bando dos chapeus de palha, usuario da yomi yomi no mi a fruta da ressureição",
        Fulldescription: "Brook, o músico dos Piratas do Chapéu de Palha, é um esqueleto vivo que comeu a Yomi Yomi no Mi, uma fruta do diabo que lhe permitiu voltar à vida após sua morte; outrora membro de um bando pirata e amigo da baleia Laboon, Brook e sua tripulação foram massacrados, mas sua alma retornou ao corpo muito tempo depois, deixando-o como um esqueleto; encontrado por Luffy no navio fantasma Thriller Bark, Brook se junta à tripulação, trazendo alegria com sua música, habilidades de esgrima únicas e poderes sobrenaturais, enquanto busca cumprir a promessa de reencontrar Laboon e ajudar Luffy a se tornar o Rei dos Piratas.",
        variant: "hover:border-gray-500",
        variantS: "shadow-gray-500",
        Alcunha: "O Demônio de Ohara",
        Altura: 2.59,
        Peso: 0,
        Haki: true,
        Haki2: false,
        Haki3: false,
        Devilfruit: true,
        Cargo: "Musico",
        HakiV2: false,
        Haki2V2: false,
        Haki3V2: false,
        idade: 88,
    },
    {
        id: 8,
        Nome: "Robin",
        Previewdescription: "Nico Robin a arqueologa do bando dos chapeus de palha, usuaria da hana hana no mi a fruta que deixa duplicar partes do corpo",
        Fulldescription: "Nico Robin, arqueóloga dos Piratas do Chapéu de Palha, nasceu em Ohara, no West Blue, onde adquiriu a habilidade de traduzir os Poneglyphs; após a destruição de sua ilha pelo Governo Mundial, que a rotulou como ''Filha do Diabo'', Robin passou a viver fugindo e se associando a grupos como os Baroque Works, antes de ser salva por Luffy em Alabasta; usuária da Hana Hana no Mi, que permite criar partes de seu corpo em qualquer superfície, Robin sonha descobrir a Verdadeira História do mundo enquanto ajuda Luffy a alcançar o título de Rei dos Piratas.",
        variant: "hover:border-purple-500",
        variantS: "shadow-purple-500",
        Alcunha: "O Ciborgue",
        Altura: 1.88,
        Peso: 58,
        Haki: false,
        Haki2: false,
        Haki3: false,
        Devilfruit: true,
        Cargo: "Arqueologa",
        HakiV2: false,
        Haki2V2: false,
        Haki3V2: false,
        idade: 30,
    },
    {
        id: 9,
        Nome: "Franky",
        Previewdescription: "Franky o arquiteto do bando dos chapeus de palha, Franky é um humano com partes de robô ele é essencialmente um ciborgue",
        Fulldescription: "Franky, o carpinteiro dos Piratas do Chapéu de Palha, é um cyborg com um corpo modificado após um acidente de infância e sua decisão de construir um corpo mais forte para si mesmo; ele foi criado na ilha de Water 7, onde começou como um carpinteiro e depois se tornou um pirata, conhecido por sua habilidade excepcional em construir e modificar navios; após um confronto com os Piratas do Galley-La e uma batalha contra o governo mundial, Franky se junta à tripulação de Luffy após ajudá-los a construir o navio Thousand Sunny, e usa suas habilidades e força como cyborg para proteger seus amigos e ajudá-los a alcançar seus sonhos.",
        variant: "hover:border-blue-500",
        variantS: "shadow-blue-500",
        Alcunha: "Soul King",
        Altura: 2.35,
        Peso: 94,
        Haki: true,
        Haki2: false,
        Haki3: false,
        Devilfruit: true,
        Cargo: "Carpinteiro",
        HakiV2: false,
        Haki2V2: false,
        Haki3V2: false,
        idade: 36,
    },
    {
        id: 10,
        Nome: "Jinbe",
        Previewdescription: "Jinbei o timoneiro do bando dos chapeus de palha, um homem tritão capaz de usar o gyojin karate o karate dos tritões",
        Fulldescription: "Jinbe, o timoneiro dos Piratas do Chapéu de Palha, é um homem-peixe da raça dos tubarões e ex-soldado do mar, conhecido por sua força física e habilidades com o Haki; ele foi um dos líderes dos Homens-Peixe e, após muitas lutas e desafios, se junta à tripulação de Luffy após ajudar na luta contra Big Mom em Whole Cake Island; Jinbe compartilha com Luffy a visão de um mundo mais igualitário, onde humanos e homens-peixe podem viver em paz, e seu sonho é contribuir para essa convivência enquanto usa suas habilidades em combate e navegação para ajudar Luffy a alcançar o título de Rei dos Piratas.",
        variant: " hover:border-blue-300 ",
        variantS: "shadow-blue-300",
        Alcunha: "Cavaleiro do mar",
        Altura: 3.01,
        Peso: 500,
        Haki: true,
        Haki2: true,
        Haki3: false,
        Devilfruit: false,
        Cargo: "Timoneiro",
        HakiV2: false,
        Haki2V2: false,
        Haki3V2: false,
        idade: 46,
    },
]