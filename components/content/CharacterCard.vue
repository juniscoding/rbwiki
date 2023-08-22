<!-- eslint-disable vue/html-indent -->
<template>
    <!-- image -->
    <!-- name -->
    <!-- table style -->
    <!-- other names -->
    <!-- titles -->
    <!-- birthday (if available) -->
    <!-- age -->
    <!-- gender -->
    <!-- height -->
    <!-- hair -->
    <!-- eyes -->
    <!-- culture -->
    <!-- spouse -->
    <!-- race -->
  <div class="rounded-lg border-2 border-red-900  flex-col place-items-center max-w-sm place-self-end">
    <div>
        <img :src="image" alt="" />
    </div>

    <div class="flex-col justify-items-center text-center py-3 bg-red-900">
        <p class="rb-title-simple">{{ name }}</p>
    </div>

    <div class="flex-col justify-items-center text-center">
        <table>
            <tr>
                <td>Full name</td>
                <td>{{ fullname }}</td>
            </tr>
        </table>
    </div>

  </div>
</template>

<script lang='ts' setup>
export interface Props {
    name: string;
    fullname: string;
    image: string;
}

defineProps<Props>();
</script>

<style>

td, th {
  text-align: left;
  padding: 8px;
}


</style>