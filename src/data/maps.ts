export interface GameMap {
    id: number;        
    name: string;      
    image: {
        icon: string;
        thumbnail?: string;
    }    
    link?: string;      
    active?: boolean;  
  }
  
  // Liste des cartes disponibles
  export const maps: GameMap[] = [
    {
        id: 1,
        name: 'mirage',
        image: {
            icon: '/assets/mapIcons/mirageIcon.webp',
            thumbnail: '/assets/mapImages/mirage.webp'
        },
        link: '',
        active: true
    },
    {
        id: 2,
        name: 'ancient',
        image: {
            icon: '/assets/mapIcons/ancientIcon.webp',
            thumbnail: '/assets/mapImages/ancient.webp'
        },
        link: '',
        active: true
    },
    {
        id: 3,
        name: 'nuke',
        image: {
            icon: '/assets/mapIcons/nukeIcon.webp',
            thumbnail: '/assets/mapImages/nuke.webp'
        },
        link: '',
        active: true
    },
    {
        id: 4,
        name: 'inferno',
        image: {
            icon: '/assets/mapIcons/infernoIcon.webp',
            thumbnail: '/assets/mapImages/inferno.webp'
        },
        link: '',
        active: true
    },
    {
        id: 5,
        name: 'train',
        image: {
            icon: '/assets/mapIcons/trainIcon.webp',
            thumbnail: '/assets/mapImages/train.webp'
        },
        link: '',
        active: true
    },
    {
        id: 6,
        name: 'dustII',
        image: {
            icon: '/assets/mapIcons/dustIIIcon.webp',
            thumbnail: '/assets/mapImages/dustII.webp'
        },
        link: '',
        active: true
    },
    {
        id: 7,
        name: 'anubis',
        image: {
            icon: '/assets/mapIcons/anubisIcon.webp',
            thumbnail: '/assets/mapImages/anubis.webp'
        },
        link: '',
        active: true
    }
  ];
  
  // Fonctions utilitaires pour travailler avec les cartes
  export const getActiveMapsList = () => maps.filter(map => map.active);
  export const getMapById = (id: number) => maps.find(map => map.id === id);