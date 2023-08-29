<script lang="ts">
    //import myData from '../dashboard/+page'
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
    import { DataHandler, Datatable, Th, ThFilter } from '@vincjo/datatables' 

    const handler = new DataHandler(myData, { rowsPerPage: 10 })
    const rows = handler.getRows()

</script>
<div class="table-container">
    <Datatable {handler}>
        <table class="table table-hover">
            <thead>
                <tr>
                    <Th {handler} orderBy="first_name">First Name</Th>
                    <Th {handler} orderBy="last_name">Last Name</Th>
                    <Th {handler} orderBy="email">Email</Th>
                </tr>
                <tr>
                    <ThFilter {handler} filterBy="first_name"/>
                    <ThFilter {handler} filterBy="last_name" />
                    <ThFilter {handler} filterBy="email"/>
                </tr>
            </thead>
            <tbody>
                {#each $rows as row}
                    <tr>
                        <td>{row.first_name}</td>
                        <td>{row.last_name}</td>
                        <td>{row.email}</td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </Datatable>
</div>

