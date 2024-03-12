<script>
// @ts-nocheck

	import { SignedIn, SignedOut, Doc, Collection } from 'sveltefire';
	import { signInAnonymously } from "firebase/auth";

	import { getFirebaseContext } from 'sveltefire'
    const { auth, firestore, storage, rtdb, analytics } = getFirebaseContext();
  </script>
  
  <SignedIn let:user let:signOut>
	  <p>Hello {user.uid}</p>
	  <button on:click={signOut}>Sign Out</button>
  </SignedIn>
  
  <SignedOut>
	  <button on:click={() => signInAnonymously(auth)}>Sign In</button>
  </SignedOut>
  
  <Doc ref="posts/id" let:data>
	  <h2>{data.title}</h2>
	  <p>{data.content}</p>
  </Doc>
  
  <Collection ref="posts" let:data={posts}>
	  {#each posts as post}
		  <h2>{post.title}</h2>
		  <p>{post.content}</p>
	  {/each}
  </Collection>


