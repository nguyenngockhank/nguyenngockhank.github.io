<template>
<div :class="boxClass">
    <div  class="my-box">
        <slot />
    </div>
</div>
</template>

<script>
export default {
    props: {
        'boxClass': String, 
    }
}
</script>

<style>
.my-box {
    border-radius: 4px;
    border: 1px solid #ddd;
    padding: 5px;
}
</style>