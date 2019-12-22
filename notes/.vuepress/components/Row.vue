<template>
<div class="my-row" :class="rowClass">
    <slot />
</div>
</template>

<script>
export default {
    props: {
        'rowClass': String, 
    }
}
</script>

<style>
.my-row {
    display: flex;
    flex-wrap: wrap;
}
</style>