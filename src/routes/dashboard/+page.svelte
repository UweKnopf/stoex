<script lang="ts">
    import type { PageData } from './$types';
    import { IconTrashX } from '@tabler/icons-svelte';
    //export let data;
    //const { form, errors, constraints } = superForm(data.form);
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
                    <tr>
                        
                        
                        <td>{row.product_id}</td>
                        <td>{row.name}</td>
                        
                        <td>
                            <form method="POST" action="?/deleteEntry" >
                                <button class="btn" name="id" value={String(row.id)}><svelte:component this={IconTrashX}/></button>
                            </form>
                        </td>
                            
                        </tr>
                    {/each}
                </tbody>
            </table>
        </Datatable>
    </div>
</div>

<form method="POST" action="?/deleteUser">
    <!-- content maybe user-x as icon?-->
    <button class="btn variant-filled-primary">Delete User</button>
</form>

