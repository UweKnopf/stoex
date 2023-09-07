import { auth } from '$lib/server/lucia.js';
import { PrismaClient } from '@prisma/client';
import { redirect, type Actions } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import { date, z } from 'zod';

const prisma = new PrismaClient()

const schema = z.object({
    product_id: z.string(),
    product_name: z.string(),
});

const delschema = z.object({
    id: z.string(),
    
});



export const load = async ( event ) => {
    const authRequest = auth.handleRequest(event);
    //console.log(authRequest);
    const session = await authRequest.validate();
    //console.log(session);
	if (!session) throw redirect(302, '/login');
    try{
        const data = await prisma.post.findMany({where: {user_id: session.user.userId}})
        //console.log(data)
        const data2 = await prisma.post.findMany()
        //console.log(data2)
        return {data}

    } catch(e) {
        console.log(e)
    }
    
    
    
}

export const actions: Actions = {
    createEntry: async ( event ) => {
        const authRequest = auth.handleRequest(event);
        //console.log(authRequest);
        const session = await authRequest.validate();
        //console.log(session);
	    if (!session) throw redirect(302, '/login');

        const form = await superValidate(event.request, schema);
        console.log('POST', form);
        try {
            const newpost = await prisma.post.create({
                data: {
                    
                    user_id: session.user.userId,
                    product_id: form.data.product_id,
                    name: form.data.product_name,
                    number: 1,
                    
                }
            })
            console.log(newpost)
        } catch (e) {
            console.log(e)
        }

    },
    deleteEntry: async ( event) => {
        const authRequest = auth.handleRequest(event);
        //console.log(authRequest);
        const session = await authRequest.validate();
        //console.log(session);
	    if (!session) throw redirect(302, '/login');

        const form = await superValidate(event.request, delschema);
        console.log('POST', form);
        try {
            await prisma.post.delete({
                where: {
                    id: BigInt(form.data.id),
                }
            })
            
        } catch (e) {
            console.log(e)
        }

        
    },
}