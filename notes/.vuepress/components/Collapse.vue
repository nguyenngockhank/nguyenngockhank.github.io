<template>
<div class="">
    <component :is="titleTag" class="tab__header" >
        <span @click.prevent="active = !active">
            <template v-if="$slots.title">
                <slot name="title"></slot>
            </template>
            <template v-else>
                <strong>{{title}}</strong>
            </template>
            <span class="down-Arrow" v-show="!active">&#9660;</span>
            <span class="up-Arrow" v-show="active">&#9650;</span>
        </span>
    </component>
    <component :is="contentTag" class="tab__content" v-show="active"><slot /></component>            
</div>
</template>
<script>
export default {
  props: {
    'title': String, 
    'show': {
      'type': Boolean,
      'default': false,
    }, 
    'titleTag': {
        'type': String,
        'default': 'h3'
    },
    'contentTag': {
        'type': String,
        'default': 'p'
    }
  },
  data() {
    return {
        active: false,
    }
  },
  mounted() {
    this.active = !!this.$props.show;
  }
}
</script>
<style scoped>
.tab__header {
    margin: 0;
    margin-top: 7px;
}
.tab__header strong {
    border-bottom: 1px solid black;
}
.tab__header:hover {
    cursor: pointer;
}
</style>
