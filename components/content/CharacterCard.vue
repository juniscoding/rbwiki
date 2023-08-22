<!-- eslint-disable vue/html-indent -->
<template>
    <div class="rounded-lg border-2 border-red-900  flex-col place-items-center max-w-xs place-self-end">
    <div>
        <img :src="image" :alt="name" />
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
            <tr>
                <td>Age</td>
                <td>{{ age }}</td>
            </tr>
            <tr>
                <td>Other names</td>
                <td>{{ other_names }}</td>
            </tr>
            <tr>
                <td>Age</td>
                <td>{{ age }}</td>
            </tr>
            <tr>
                <td>Birthday</td>
                <td>{{ birthday }}</td>
            </tr>
            <tr>
                <td>Spouse</td>
                <td>{{ spouse }}</td>
            </tr>
        </table>
    </div>
            <div class="flex-col justify-items-center text-center py-3 bg-red-900">
                <p class="rb-title-simple">Physical Characteristics</p>
            </div>
    <div class="flex-col justify-items-center text-center">
        <table>
            <tr>
                <td>Race</td>
                <td>{{ race }}</td>
            </tr>
            <tr>
                <td>Height</td>
                <td>{{ height }}</td>
            </tr>
            <tr>
                <td>Hair</td>
                <td>{{ hair }}</td>
            </tr>
            <tr>
                <td>Eyes</td>
                <td>{{ eyes }}</td>
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
    age: string;
    other_names: string;
    birthday: string;
    hair: string;
    height: string;
    hair: string;
    eyes: string;
    spouse: string;
    race: string;
}

defineProps<Props>();
</script>

<style>

td, th {
  text-align: left;
  padding: 8px;
}

td:first-of-type {
    font-weight: 700;
    min-wdith: 10rem;
}

</style>