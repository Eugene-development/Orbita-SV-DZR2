<script>
    import Header from '$layout/header/v_001/index.svelte';
    import Footer from '$layout/footer/v_001/index.svelte';
    import '../app.css';
    import { browser} from "$app/env";

    import { v4 as uuid } from '@lukeed/uuid';
    if (browser && localStorage.getItem('dataS') === null){
        browser && localStorage.setItem('dataS', uuid())
    }
</script>

<Header />
<main >
    <slot  />
</main>
<Footer />

