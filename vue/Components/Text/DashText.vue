<script>
    import AnimationEntity from "../../Mixins/AnimationEntity";
    import TextAnimation from "../../../../../../bytepath/Components/Text/TextAnimation";
    import GText from "bytepath/Primitives/GText";

    export default {
        mixins: [
            AnimationEntity,
            TextAnimation,
        ],

        data(){
            this.timer._p();
            return {};
        },

        computed: {},

        methods:{
            componentAnimations() {
                return {
                    default: {
                        duration: 500000,
                        frames: {
                            0: {
                                action: [
                                    this.dashText(this.direction, this.interval)
                                ]
                            },
                        },
                    },
                };
            },
        },

        components: {
            GText,
        },
    }
</script>

<template>
    <g>
    <template>
        <g-text :dx="dx" :id="`fluttertext-${_uid}`" :font-size="fontSize">
            {{ text }}
        </g-text>
    </template>
    </g>
</template>
