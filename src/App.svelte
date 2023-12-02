<script>
    import Input from "./lib/Input.svelte";
    import Select from "./lib/Select.svelte";
    import Range from "./lib/Range.svelte";
    
    let userData = {
        name: "Erik",
        firstName: "Sebastián de Erice",
        field: "Frontend",
        salary: {
            min: 18000,
            max: 21000
        }
    }

    let fields = ['Backend', 'Frontend', 'Devops', 'QA'];

    function send() {
        alert(JSON.stringify(userData))
    }

    function updateSalary(e) {
        userData.salary.min = e.detail.min;
        userData.salary.max = e.detail.max;
    }
</script>

<main>
    <form on:submit|preventDefault={send}>
        <Input
            identifier = "name"
            formField = "Name"
            bind:value = {userData.name}
        />
        <Input
            identifier = "firstName"
            formField = "First name"
            bind:value = {userData.firstName}
        />
        <Select 
            identifier = "field"
            formField = "Field"
            choices = {fields}
            bind:value = {userData.field}
        />
        <Range
            identifier = "salary"
            formField = "Salary"
            min = {userData.salary.min}
            max = {userData.salary.max}
            on:update={updateSalary}
        />
        <p>
            <input type="submit" value="Send">
        </p>
    </form>
</main>