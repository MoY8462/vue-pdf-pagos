<template>
    <label class="mx-5">
        <span>{{ text }}</span>
        <input
        :type="type"
        :placeholder="placeholder"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        :class="{'warn': !warn}"
        />
    </label>
</template>

<script>
export default {
    props: {
        modelValue: String,
        text: String,
        type: {
            type: String,
            default: 'text'
        },
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