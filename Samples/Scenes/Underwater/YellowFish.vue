<script>
    import Bytepath from 'bytepath';
    import svg from "./underwater.svg";

    export default Bytepath.CreateAsset({
        src: svg,
        name: "yellowfish",
        layers: ["yellowfish"],

        components:{},
    });
</script>

<template>
    <vector  :style="{fill: color}" v-bind="$props" v-slot="">
        <layer v-for="(layer, i) in filteredLayers" :key="i" :layer="layer" />
    </vector>
</template>
