import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import ProgrammationView from '../views/ProgrammationView.vue'
import LesArtistesView from '../views/LesArtistesView.vue'
import FestivalView from '../views/FestivalView.vue'
import ContactView from '../views/ContactView.vue'
import ConcertView from '../views/ConcertView.vue'
import PageArtisteView from '../views/PageArtisteView.vue'
import MentionsLegalesView from '../views/MentionsLegalesView.vue'
import ConnexionView from '../views/ConnexionView.vue'
import ProfilView from '../views/ProfilView.vue'
import InformationsView from '../views/InformationsView.vue'
import PageRediffusionsView from '../views/PageRediffusionsView.vue'
import RediffusionView from '../views/RediffusionView.vue'
import InscriptionView from '../views/InscriptionView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/',                         name: 'AccueilView',                       component: AccueilView          },
    { path: '/programmation',            name: 'ProgrammationView',                 component: ProgrammationView    },
    { path: '/lesartistes',              name: 'LesArtistesView',                   component: LesArtistesView      },
    { path: '/festival',                 name: 'FestivalView',                      component: FestivalView         },
    { path: '/contact',                  name: 'ContactView',                       component: ContactView          },
    { path: '/concert',                  name: 'ConcertView',                       component: ConcertView          },
    { path: '/pageartiste',              name: 'PageArtisteView',                   component: PageArtisteView      },
    { path: '/mentionslegales',          name: 'MentionsLegalesView',               component: MentionsLegalesView  },
    { path: '/connexion',                name: 'ConnexionView',                     component: ConnexionView        },
    { path: '/profil',                   name: 'ProfilView',                        component: ProfilView           },
    { path: '/informations',             name: 'InformationsView',                  component: InformationsView     },
    { path: '/pagerediffusions',         name: 'PageRediffusionsView',              component: PageRediffusionsView },
    { path: '/rediffusion',              name: 'RediffusionView',                   component: RediffusionView      },
    { path: '/Inscription',              name: 'InscriptionView',                   component: InscriptionView      },
  ]
})

export default router


