<script setup lang="ts">
    const { x = '0', y = '0' } = defineProps<{
        x?: string
        y?: string
    }>()
</script>

<template>
    <div :style="{ padding: `${y}rem ${x}rem` }">
        <slot />
    </div>
</template>
