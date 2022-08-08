<template>
  <div class="flex w-full justify-center">
    <label
      class="rounded-md border-2 border-gray-400 bg-gray-200  text-slate-900 p-2"
    >
      {{ label }}
    </label>
    <input
      class="max-w-full rounded-r-md pl-4"
      type="text"
      :placeholder="placeHolder"
    />
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      require: true,
      default: "Label",
    },
    placeHolder: {
      type: String,
      require: true,
      default: "Insera o placeholder",
    },
  },
};
</script>
