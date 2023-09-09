<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';

    //import myData from '../dashboard/+page'
    import type { PageData } from './$types';
    //export let data;
    //const { form, errors, constraints } = superForm(data.form);
    const myData =[
    { id: 1, first_name: 'Tobie', last_name: 'Vint', email: 'tvint0@fotki.com' },
    { id: 2, first_name: 'Zacharias', last_name: 'Cerman', email: 'zcerman1@sciencedirect.com' },
    { id: 3, first_name: 'Gérianna', last_name: 'Bunn', email: 'gbunn2@foxnews.com' },
    { id: 4, first_name: 'Bee', last_name: 'Saurin', email: 'bsaurin3@live.com' },
    { id: 5, first_name: 'Méyère', last_name: 'Granulette', email: 'mgranul4@yellowbook.com' },
    { id: 6, first_name: 'Frederich', last_name: 'Benley', email: 'fbenley5@ameblo.jp' },
    { id: 7, first_name: 'Becki', last_name: 'Criag', email: 'bcriag6@washingtonpost.com' },
    { id: 8, first_name: 'Nichols', last_name: 'Risom', email: 'nrisom7@google.com.br' },
    { id: 9, first_name: 'Ron', last_name: 'Menendes', email: 'rmenendes8@prnewswire.com' },
    { id: 10, first_name: 'Thane', last_name: 'Gammill', email: 'tgammill9@com.com' },
    { id: 11, first_name: 'Ramonda', last_name: 'Yakobowitch', email: 'ryakobowitcha@hibu.com' },
    {
        id: 12,
        first_name: 'Rosalynd',
        last_name: 'Connechie',
        email: 'rconnechieb@chicagotribune.com'
    },
]
    import { DataHandler, Datatable } from '@vincjo/datatables' 

    export let data: PageData;
    

    const handler = new DataHandler(data.data, { rowsPerPage: 10 })
    const rows = handler.getRows()

</script>
<form method="POST" action="?/createEntry">
    <input required  name="product_id" placeholder="Enter Product Id" class="input p-2" />
    <input required  name="product_name" placeholder="Enter Product Name" class="input p-2" />
            
    <!-- content -->
    <button class="btn variant-filled-primary">Test Post</button>
</form>

<div class="m-8"> 
    <div class="table-container">
        <Datatable {handler}>
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>Product Id</th>
                        <th>Product Name</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {#each $rows as row}
                        <form method="POST" action="?/deleteEntry" >
                            <tr>
                                
                                <td>{row.id}</td>
                                <td>{row.product_id}</td>
                                <td>{row.name}</td>
                                
                                <td>
                                    
                                    <button name="id" value={row.id}>AA</button>
                                </td>
                            </tr>

                        </form>
                    {/each}
                </tbody>
            </table>
        </Datatable>
    </div>
</div>

