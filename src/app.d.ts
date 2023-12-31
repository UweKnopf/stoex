// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare global {
	namespace App {
		// interface Locals {}
		// interface PageData {}
		// interface Error {}
		// interface Platform {}
		interface Locals {
			auth: import('lucia-auth').AuthRequest;
			user: Lucia.UserAttributes;
		}
		
	}
}
/// <reference types="lucia" />
declare global {
	namespace Lucia {
		type Auth = import("$lib/server/lucia").Auth;
		type DatabaseUserAttributes = {
			//username: string;
		};
		type DatabaseSessionAttributes = {};
	}
}

// THIS IS IMPORTANT!!!
export {};