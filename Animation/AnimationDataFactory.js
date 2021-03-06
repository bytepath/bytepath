import AnimationData from "./AnimationData";

export default {
    /**
     * Creates an animation usable by bytepath from the simpler user version passed in via componentAnimations()
     * @param name
     * @param anim
     */
    createFromUserAnimation(name, actions, meta = {}) {
        // The start and end frame of this animation
        let start = Number.MAX_SAFE_INTEGER;
        let end = null;

        Object.values(actions).forEach((anim) => {
            /**
             *  Determine the start frame of this animation.
             */
            if(Object.prototype.hasOwnProperty.call(anim, "start")) {
                if(anim.start < start){
                    start = anim.start;
                }
            }

            /**
             *  Determine the end frame of this animation. Note than an animation does not need an end frame
             */
            if(Object.prototype.hasOwnProperty.call(anim,'end')) {
                if(!end){
                    end = anim.end;
                }
                if(anim.end > end){
                    end = anim.end;
                }
            }
        });

        return new AnimationData(name, { actions, meta }, start, end, false);
    }
};
