// Mixins
import Transformer from "./vue/Mixins/CalculatesTransformation";
import Keyframer from "./vue/Mixins/KeyframeAnimation";
import AnimationEntity from "./vue/Mixins/AnimationEntity";
import PlaybackTimer from "./vue/Mixins/PlaybackTimer";

// Timers
import clock from "./vue/Components/Timers/ClockTimer";
import scroll from "./vue/Components/Timers/ScrollTimer";
import responsiveScroll from "./vue/Components/Timers/ResponsiveScrollTimer";
import reset from "./vue/Components/Timers/KeyframeReset";

// DOM
import entity from './vue/Components/Dom/EntityDiv';

// Animations
import bounce from './vue/Components/Animations/bounce';
import spin from './vue/Components/Animations/spin';

// Mutators
import acceleratesTranslation from './vue/Mutators/AcceleratesTranslation';


export default {
    AnimationEntity,

    mixins: {
        PlaybackTimer,
        Transformer,
        Keyframer,
    },

    timers:{
        clock,
        scroll,
        responsiveScroll,
        reset
    },

    animations: {
        bounce,
        spin,
    },

    mutators: {
        acceleratesTranslation,
    },

    components:{
        entity
    },


    // The default init function
    init(modules = ['keyframer', 'transformer']){
        return this.initAsMixin();
    },

    // Force bytepath to init as mixin
    initAsMixin(modules = null) {
        return AnimationEntity;
    }
}
