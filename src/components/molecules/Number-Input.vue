<template>
    <label class="mx-5">
        <span>{{ text }}</span>
        <input
        type="number"
        :placeholder="placeholder"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        :class="{'warn': !warn}"
        onkeydown="javascript: return event.keyCode === 8 || event.keyCode === 46 ? true : !isNaN(Number(event.key))"
        />
    </label>
</template>

<script>
export default {
    props: {
        modelValue: String,
        text: String,
        placeholder: String,
        warn: {
            type: Boolean,
            default: false
        }
    },
    emits: ['update:modelValue']
}
</script>

<style>

</style>