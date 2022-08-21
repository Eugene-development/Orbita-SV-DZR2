
<script>
	import { pageTitle } from '$stores/store.js';

	pageTitle.update(() => 'Блог');

    import { Blog_v1 } from "symax/ui/broker";
    export let contentBlog_v1

</script>

<svelte:head>
	<title>Орбита-Строй || Блог компании на тематику строительных и отделочных материалов</title>
	<meta name="description" content="Информационный посты от нашей компании по строительной теме" />
</svelte:head>




<Blog_v1 {...contentBlog_v1}/>
