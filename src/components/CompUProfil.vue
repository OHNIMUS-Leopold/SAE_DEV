<template>

    <!-- <div v-for="prof in listeProfil" :key="prof.id"> -->
    
    <div  class="grid grid-cols-3 border-gray border-b-2" @submit.prevent="updateProfil">
        <div class="col-span-2 ml-28 py-5">
            <p class="text-black mb-[10px] font-Poppins font-normal text-[15px] leading-[26px] tracking-normal">Nom d'utilisateur : 
                <input v-model="prof.username" required>
            </p>
            <p class="text-black mb-[10px] font-Poppins font-normal text-[15px] leading-[26px] tracking-normal">Artistes préférés : 
                <input v-model="prof.artistespref" required>
            </p>
            <p class="text-black mb-[10px] font-Poppins font-normal text-[15px] leading-[26px] tracking-normal">Groupes préférés : 
                <input v-model="prof.groupespref" required>
            </p>
            <p class="text-black font-Poppins font-normal text-[15px] leading-[26px] tracking-normal">Bio :</p>
            <div class="border-gray border-2 text-black mb-[10px] font-Poppins font-normal text-xs tracking-normal h-24 px-1">
                <input v-model="prof.bio" required>
            </div>
            <div class="text-center">
                <BoutonBold type="submit">Valider mes informations</BoutonBold>
            </div>
        </div>

        <div class="col-span-1 mx-auto my-auto px-4 py-4">
            <div class="mb-[10px] rounded-full"><img :src="imageData" :alt="prof.username"></div>
            <input type="file" ref="file" id="file" @change="previewImage" class="mb-[10px] rounded-full">
            <div class="text-center"><BoutonBold type="submit">Valider ma photo</BoutonBold></div>
        </div>
    </div>
    <!-- </div> -->
 
</template>






<script>

import BoutonBold from "./BoutonBold.vue"

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


// Storage
import { 
    getStorage, 
    ref, 
    getDownloadURL, 
    uploadBytes,
    uploadString,
    deleteObject,
    listAll } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js'

    // Cloud Storage : import des fonctions

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
            prof:{
                artistespref:null,
                bio:null,
                groupespref:null,
                image:null,
                username:null,

            },
            
            imageData:null,
            imgModifiee:false,       // Indique si l'image du participant a été modifiée, par défaut : non
            photoActuelle:null,       // Photo actuelle du participant
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
                this.photoActuelle = this.prof.image;
            }else{
                // Sinon simple message d'erreur
                this.console.log("Participant inexistant");
            }
            // Obtenir le Storage
            const storage = getStorage();
            // Référence de l'image du participant
            const spaceRef = ref(storage, 'profil/'+this.prof.image);
            
            // Récupération de l'url complète de l'image
            getDownloadURL(spaceRef)
                .then((url) => {
                    // Mise à jour de l'image prévisualisée
                    this.imageData = url;
            })
            .catch((error) =>{
                console.log('erreur downloadUrl', error);
            })
        },






        previewImage: function(event) {
            // Mise à jour de la photo du participant
            this.file = this.$refs.file.files[0];
            // Récupérer le nom du fichier pour la photo du participant
            this.prof.image = this.file.name;
            // Si cette fonction s'exécute, c'est que l'image est modifiée 
            this.imgModifiee = true;
            // Reference to the DOM input element
            // Reference du fichier à prévisualiser
            var input = event.target;
            // On s'assure que l'on a au moins un fichier à lire
            if (input.files && input.files[0]) {
                // Creation d'un filereader
                // Pour lire l'image et la convertir en base 64
                var reader = new FileReader();
                // fonction callback appellée lors que le fichier a été chargé
                reader.onload = (e) => {
                    // Read image as base64 and set to imageData
                    // lecture du fichier pour mettre à jour 
                    // la prévisualisation
                    this.imageData = e.target.result;
                }
                // Demarrage du reader pour la transformer en data URL (format base 64) 
                reader.readAsDataURL(input.files[0]);        
            }
        },



        async updateProfil(){
            
            // Si l'image a été modifiée
            if(this.imgModifiee){

                // On supprime l'ancienne
                const storage = getStorage();
                // Référence du fichier
                let docRef = ref(storage, 'profil/'+this.photoActuelle);
                // Suppression photo actuelle
                deleteObject(docRef);
                // création nouvelle photo
                // Référence de l'image à uploader
                docRef = ref(storage, 'profil/'+this.prof.image);
                await uploadString(docRef, this.imageData, 'data_url').then((snapshot) => {
                    console.log('Uploaded a base64 string', this.prof.image);                
                });                   
            }
            // Dans tous les cas on met à jour le participant dans Firestore
            const firestore = getFirestore();
            // Modification du participant à partir de son id
            await updateDoc(doc(firestore, "profil", this.user.uid), this.prof);
            // redirection sur la liste des participants
            this.$router.push('/profil'); 
        }













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