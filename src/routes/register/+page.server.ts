import { z } from 'zod';
import { superValidate } from 'sveltekit-superforms/server';

import { auth } from "$lib/server/lucia";
import { fail, redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";

const schema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    confirmPassword:z.string().min(6),
}).superRefine(({ confirmPassword, password }, ctx) => {
  if (confirmPassword !== password) {
    ctx.addIssue({
      code: "custom",
      message: "The passwords did not match"
    });
  }
});

export const load = async ( event ) => {
  const session = await event.locals.auth.validate();
	if (session) throw redirect(302, '/dashboard');
  // Server API:
  const form = await superValidate(schema);

  // Always return { form } in load and form actions.
  return { form };
};

export const actions = {
  default: async ({ request, locals }) => {
    const form = await superValidate(request, schema);
    console.log('POST', form);
    
    if (!form.valid) {
      return fail(400, { form });
    }
    
    // TODO: Do something with the validated data
    try {
			const user = await auth.createUser({
				key: {
					providerId: "email", // auth method
					providerUserId: form.data.email, // unique id when using "username" auth method
					password: form.data.password // hashed by Lucia
				},
				attributes: {
					//username: form.data.email
				}
			});
			const session = await auth.createSession({
				userId: user.userId,
				attributes: {}
			});
      console.log(session);
			locals.auth.setSession(session);
		} catch (e) {
			// this part depends on the database you're using
			// check for unique constraint error in user table
			console.log(e)
			return fail(500, {
				message: "An unknown error occurred"
			});
		}
		// redirect to
		// make sure you don't throw inside a try/catch block!
		throw redirect(302, "/");

    return { form };
  }
};