<script>
// Simulates a network request
    function fetch() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    name: "Erik S. de Erice",
                    age: 19,
                    occupation: "Web Developer"
                })
                reject({
                    code: 503,
                    message: "We are having problems connecting to the network"
                })
            }, 3000)
        })
    }
</script>

{#await fetch()} <!--Waiting (3 seconds)-->
    <p>One second, we're resolving things...</p>
{:then playload} <!--resolve()-->
    <p>Nombre: {playload.name}</p>
    <p>Age: {playload.age}</p>
    <p>Occupation: {playload.occupation}</p>
{:catch e} <!--reject(). Comment the resolve block to see this message-->
    <p>Error <strong>{e.code}</strong>: {e.message}</p>
{/await}