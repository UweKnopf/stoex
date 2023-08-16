<script lang='ts'>
  	import CustomAppBar from '../lib/CustomAppBar.svelte';
  	import CustomFooter from '../lib/CostumeFooter.svelte'

	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-modern.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import { AppShell, AppBar, Avatar } from '@skeletonlabs/skeleton';




	//For vercel analytics
	import { dev } from '$app/environment';
  	import { inject } from '@vercel/analytics';
  	inject({ mode: dev ? 'development' : 'production' });
	//For Vercel speed insights
	import { FirebaseApp } from 'sveltefire';
    import { initializeApp } from 'firebase/app';
    import { getFirestore } from 'firebase/firestore';
    import { getAuth } from 'firebase/auth';

    // Initialize Firebase
	const firebaseConfig = {

	apiKey: "AIzaSyDxssEknIJGSDLkiVJwCul7yy9G0ZyegI8",

	authDomain: "stoex-4e7c7.firebaseapp.com",

	projectId: "stoex-4e7c7",

	storageBucket: "stoex-4e7c7.appspot.com",

	messagingSenderId: "57306227091",

	appId: "1:57306227091:web:66dffb2960c1a3edbc4866",

	measurementId: "G-3P5W46YJMW"

	};

    const app = initializeApp(firebaseConfig);
    const firestore = getFirestore(app);
    const auth = getAuth(app);
	
</script>


<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<CustomAppBar/>
	</svelte:fragment>

	<!-- Page Route Content -->
	<FirebaseApp {auth} {firestore}>
    	<slot />
	</FirebaseApp>

	<!-- App Footer -->
	<CustomFooter/>
</AppShell>
