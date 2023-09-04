import { z } from 'zod';
import { superValidate } from 'sveltekit-superforms/server';

import { auth } from "$lib/server/lucia";
import { fail, redirect } from "@sveltejs/kit";

const schema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
});

export const load = async (event) => {
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
			// find user by key
			// and validate password
			const user = await auth.useKey(
				"email",
				form.data.email,
				form.data.password
			);
			const session = await auth.createSession({
				userId: user.userId,
				attributes: {}
			});
      	console.log(session);
			locals.auth.setSession(session); // set session cookie
		} catch (e) {
			console.log(e)
			return fail(500, {
				message: "An unknown error occurred"
			});
		}
		// redirect to
		// make sure you don't throw inside a try/catch block!
		throw redirect(302, "/dashboard");
  }
};