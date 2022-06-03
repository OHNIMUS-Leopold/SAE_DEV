<template>

    <!-- <div v-for="prof in listeProfil" :key="prof.id"> -->
    
    <div  class="grid grid-cols-3 border-gray border-b-2">
        <div class="col-span-2 ml-28 py-5">
            <p class="text-black mb-[10px] font-Poppins font-normal text-[15px] leading-[26px] tracking-normal">Nom d'utilisateur : {{ prof.username }}</p>
            <p class="text-black mb-[10px] font-Poppins font-normal text-[15px] leading-[26px] tracking-normal">Artistes préférés : {{ prof.artistespref }}</p>
            <p class="text-black mb-[10px] font-Poppins font-normal text-[15px] leading-[26px] tracking-normal">Groupes préférés : {{ prof.groupespref }}</p>
            <p class="text-black font-Poppins font-normal text-[15px] leading-[26px] tracking-normal">Bio :</p>
            <div class="border-gray border-2 text-black mb-[10px] font-Poppins font-normal text-xs tracking-normal h-24 px-1">
                <h3>{{ prof.bio }}</h3>
            </div>
            <div class="text-center">
                <BoutonBold>Modifier mes informations</BoutonBold>
            </div>
        </div>

        <div class="col-span-1 mx-auto my-auto px-4 py-4">
            <img :src="prof.image" :alt="prof.username" class="mb-[10px] rounded-full">
            <div class="text-center"><BoutonBold>Modifier ma photo</BoutonBold></div>
        </div>
    </div>
    <!-- </div> -->
 
</template>






<script>

import BoutonBold from "../components/BoutonBold.vue"

// Bibliothèque Firestore : import des fonctions
import { 
    getDoc,
    getFirestore,   // Obtenir le Firestore
    collection,     // Utiliser une collection de documents
    doc,            // Obtenir un document par son id
    getDocs,        // Obtenir la liste des documents d'une collection
    addDoc,         // Ajouter un document à une collection
    updateDoc,      // Mettre à jour un document dans une collection
    deleteDoc,      // Supprimer un document d'une collection
    onSnapshot,     // Demander une liste de documents d'une collection, en les synchronisant
    query,          // Permet d'effectuer des requêtes sur Firestore
    orderBy         // Permet de demander le tri d'une requête query
    } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js'


    // Cloud Storage : import des fonctions
    import { 
        getStorage,             // Obtenir le Cloud Storage
        ref,                    // Pour créer une référence à un fichier à uploader
        getDownloadURL,         // Permet de récupérer l'adress complète d'un fichier du Storage
        uploadString,           // Permet d'uploader sur le Cloud Storage une image en Base64
    } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js'
import { reactive } from '@vue/reactivity'

import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js'

export default {
  components: {  BoutonBold },
  data() {
    return {
            //listeProfil:[], // Liste des participants
            user:{
                    email:"",
                    uid:""
                },
            message:null,
            prof:{},
            
        }
    },


    mounted(){
            let user = getAuth().currentUser;
            if (user){
                this.user = user;
                this.message = "Utilisateur connecté " + this.user.uid;
                this.getProfil(this.user.uid);
            }else{
                this.message = "Utilisateur non connecté";
                
            }
        },

    methods: {
        async getProfil(id){
            // Obtenir Firestore
            const firestore = getFirestore();
            // Base de données (collection)  document profil
            // Récupération sur Firestore du profil via son id
            const docRef = doc(firestore, "profil", id);
            // Référence du profil concerné
            this.refProfil = await getDoc(docRef);
            // Test si le profil demandé existe
            if(this.refProfil.exists()){
                // Si oui on récupère ses données
                this.prof = this.refProfil.data();
                // Mémorisation photoActuelle
            }else{
                // Sinon simple message d'erreur
                this.console.log("Participant inexistant");
            }
            // Obtenir le Storage
            const storage = getStorage();
            // Référence de l'image du participant
            const spaceRef = ref(storage, 'profil/'+this.prof.image);
            debugger
            // Récupération de l'url complète de l'image
            getDownloadURL(spaceRef)
                .then((url) => {
                    // Mise à jour de l'image prévisualisée
                    this.prof.image = url;
            })
            .catch((error) =>{
                console.log('erreur downloadUrl', error);
            })
        },

/*     
    async getProfil(id){
            // Obtenir Firestore
            const firestore = getFirestore();
            // Base de données (collection)  document participant
            const dbProf = collection(firestore, "profil");
            // Liste des participants triés sur leur nom
            const q = query(dbProf, orderBy('username', 'asc'));
            await onSnapshot(q, (snapshot) => {
                this.listeProfil = snapshot.docs.map(doc => (
                    {id:doc.id, ...doc.data()}
                ))
                // Récupération des images de chaque participant
                // parcours de la liste
                this.listeProfil.forEach(function(personne){
                    // Obtenir le Cloud Storage
                    const storage = getStorage();
                    // Récupération de l'image par son nom de fichier
                    const spaceRef = ref(storage, 'profil/'+personne.image);
                    // Récupération de l'url complète de l'image
                    getDownloadURL(spaceRef)
                    .then((url) => {
                        // On remplace le nom du fichier
                        // Par l'url complète de la photo
                        personne.image = url;
                    })
                    .catch((error) =>{
                        console.log('erreur downloadUrl', error);
                    })
                })
            })      
        },
         */

    }

}
</script>