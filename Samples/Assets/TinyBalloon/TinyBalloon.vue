<script>
    /**
     * Note to docs readers:
     * The directory structure is a bit different than other examples because its in the bytepath core.
     * Dont think too much about this.
     */
    import CreateAsset from '../../../Factories/CreateAsset';
    import Position from '../../../Helpers/Position';

    export default CreateAsset({
        name: "balloon",
        color: '#FB7272',

        data() {
            return {
                isBalloon: true,
                basket: new Position({
                    width: 100,
                    height: 100,
                    x: 1100,
                    y: 3550,
                }),
            }
        },
    });
</script>

<template>
    <vector :id="'balloon' + _uid" v-bind="$props">
        <g transform="scale(0.25 0.25)">
            <g id="balloon">
                <path stroke="rgb(74, 85, 104)" stroke-width="5" stroke-linecap="round"
                      :style="{ 'fill': defaultColor }"
                      d="M219.63,311.81q-5.46,14.88-10.9,29.78l-17.62,57,5.09,2.18a510.44,510.44,0,0,1,18.89-58.48c14.41-36.9,20.84-55.65,35.23-72.83,9.84-11.75,15.58-14.76,26-30a166.83,166.83,0,0,0,19.8-39.05,161,161,0,0,0,7.27-72.65c-1.52-11.48-9.37-71-58.12-102.8-13.37-8.72-25-12.07-41.05-16.71C148.4-7.8,103.31,4,94.49,6.49c-14.33,4-24.72,6.88-37,14.9C57.44,21.39,15,49,3.05,110c-.66,3.39-1.19,6.91-1.19,6.91A189.68,189.68,0,0,0,0,146c.67,26.57,23.18,90.56,57.36,121.36a103.87,103.87,0,0,1,9.12,9.05c9.49,10.72,22.65,42.23,22.65,42.23,2.28,5.45,3.42,8.17,4.64,11.3,9.1,23.42,18.15,51.26,25.06,73.7l4.09-2.05-15.8-51.76a81.18,81.18,0,0,0-7.22-22.2,28.27,28.27,0,0,1-3.51-11,29.54,29.54,0,0,1,.92-9.45c2.82-10,16.06-21.89,32-21.79,15.51.1,25.29,11.48,26.83,13.35l.69,94.53h4.9l.95-95.21a32.06,32.06,0,0,1,32.56-11.44,26.56,26.56,0,0,1,18.39,9.12A26,26,0,0,1,219.63,311.81Z"/>
                <path class="balloon-7" d="M213.41,394.49,103.34,366.84"/>
            </g>

            <g id="basket">
                <slot :position="basket" />
                <polygon id="wiicker" class="balloon-1"
                         points="121.46 408.38 159.87 400.48 193.93 407.3 193.25 446.8 158.37 459.47 122.82 454.43 121.46 408.38"/>
                <polyline class="balloon-2"
                          points="159.33 403.48 159.74 461.65 192.75 453.27 192.75 413.34 179.13 402.07"/>
                <path id="top" class="balloon-3"
                      d="M116.28,405c2-10,36.94-9.84,43.18-9.81,6.73,0,38.72.17,40.6,9.4.46,2.3-1,4.76-2.59,6.13-7.08,6.12-18.91-7.58-38-7.63-20.08-.05-32.38,15.05-40.18,8.72C117.4,410.26,115.77,407.49,116.28,405Z"/>
                <polygon class="balloon-3"
                         points="158.16 440.4 194.47 448.16 194.47 453.61 159.46 463.69 121.87 457.56 121.87 450.75 158.16 440.4"/>
                <polyline class="balloon-4" points="134.13 454.97 159.74 460.01 159.15 453.54 159.06 447.07"/>
                <path class="balloon-5"
                      d="M124.18,411.93c1.85.46,1,4.71,3.27,5.85,1.67.85,4.31-.39,5.59-2s-.38-3.41.54-6.13c.33-1,.91-2.88,2.45-3.4,1.94-.66,4,1.3,4.23,1.49,1.51,1.46,1,2.56,2.45,4.5.37.49,2.15,2.89,4.49,3,2.77.12,5-2.89,5.86-5.18.57-1.57,0-1.85.41-4.22.31-2,1-6.23,3.68-7.09a4.62,4.62,0,0,1,4.9,1.91c.62,1,.33,1.7.41,3.81s.2,5.35,1.91,7.5c.11.13,2.25,2.79,5,2.58.65,0,2.26-.55,6-7.9,2.6-5.1,3-7.24,4.09-7.22,1.42,0,3,3.78,3.13,7.09.06,2.23-.62,3-.14,5,.18.75.85,3.62,2.87,4.22s4.08-1.09,5.17-2.72c2.25-3.37.43-7.69,1.23-7.9.6-.16,1.92,2.19,2.45,4.49a8.86,8.86,0,0,1,.14,4.22c-.65,2.63-3.17,6.18-7.09,6.13-3.61,0-5.41-6-6.81-5.45-.14.06-.49.26-.68,2.32-.43,4.55,1,6.46-.14,8.58-.57,1.07-1.78,2.17-2.45,1.91-2-.8,1.79-14.29.41-14.71-.57-.18-1.11,2.17-3.68,3.95-.6.42-3.63,2.41-6.94,1.5s-5-4.42-5.32-5c-1.24-2.73-.54-4.55-2.31-9.54-.44-1.23-.86-2.19-1.36-2.18-.65,0-1.23,1.65-1.37,3a9.37,9.37,0,0,0,.55,3.54c.73,3.59-2.5,8.21-6.4,10.08a7,7,0,0,1-4.5.95c-4.49-.87-6.43-7.63-7.08-7.35-.4.17.44,2.65,1,5.17,1.41,7,.36,14.87-1.63,15.26-.75.15-1.5-.78-1.64-.95-1.55-1.92.28-4.52.27-10.08,0-.73,0-3.71-.68-3.82-.49-.07-.76,1.57-2,3a7.3,7.3,0,0,1-6.27,2.18c-4.55-.71-7.6-6.73-6.26-9.13A2.34,2.34,0,0,1,124.18,411.93Z"/>
                <polyline class="balloon-4" points="185.34 454.43 159.74 459.47 159.15 453.54 159.06 447.07"/>
            </g>
        </g>
    </vector>
</template>

<style scoped>
    .balloon-1 {
        fill: #f2b486;
    }

    .balloon-2 {
        fill: #c99769;
    }

    .balloon-3 {
        fill: #7ca4dc;
    }

    .balloon-4 {
        fill: #f5b78b;
    }

    .balloon-5 {
        fill: #29d400;
    }
</style>
