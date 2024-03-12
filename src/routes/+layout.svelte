<script lang="ts">
    import { FirebaseApp } from 'sveltefire';
    import { initializeApp } from 'firebase/app';
    import { getFirestore } from 'firebase/firestore';
    import { getAuth } from 'firebase/auth';

	const firebaseConfig = {

apiKey: "AIzaSyDMDR0f2XFy1jcEdPVW9iooMlxjVpqzxhs",

authDomain: "stoex-acc17.firebaseapp.com",

projectId: "stoex-acc17",

storageBucket: "stoex-acc17.appspot.com",

messagingSenderId: "110358725874",

appId: "1:110358725874:web:0dc37c6dacf99a79ef3c6b",

measurementId: "G-29SQBFXYVN"

};

    // Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);
</script>

<FirebaseApp {auth} {firestore}>
    <slot />
</FirebaseApp>
