<template>
  <div class="w-10/12">
    <label class="flex justify-center font-lato">
      <div
        class="w-3/12 border border-solid border-gray-300 bg-white p-2 px-3 shadow-inner text-center"
      >
        {{ label }}
      </div>
      <input
        class="w-full rounded-r-lg border border-solid border-gray-300 p-2 px-3 shadow-inner shadow-inner"
        :placeholder="placeHolder"
      />
    </label>
  </div>
</template>

<script>
export default {
  props: {
    placeHolder: {
      type: String,
      require: true,
      default: "-----",
    },
    label: {
      type: String,
      require: true,
      default: "Data",
    },
  },
};
</script>
