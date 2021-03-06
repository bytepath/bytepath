export default class Tween {
    constructor(keyframe, start = 0, end = null) {
        // The starting frame of the current action
        this.startFrame = start;

        // The end frame of the current action
        this.endFrame = end;

        // The current frame
        this.keyframe = keyframe;
    }

    /**
     * Tweens between start and end with whatever numbers come along the way
     * @param start a number
     * @param end a number
     * @returns {number} a number between start and end depending on keyframe location
     */
    number(start, end){
        if(start === end){
            return start;
        }

        if(this.keyframe >= this.endFrame){
            return end;
        }

        if(this.keyframe <= this.startFrame){
            return start;
        }

        /**
         * Tweening from one number to another can be achieved using the formula for a line y = mx+b
         */
        let numberDiff = end - start;
        let frameDiff = this.endFrame - this.startFrame;

        // The amount we need to increase or decrease each frame
        let numbersPerFrame = numberDiff / frameDiff;

        return start + ( (this.keyframe - this.startFrame) * numbersPerFrame);
    }

    /**
     * Tweens between start and end with only integer values
     * @param start
     * @param end
     * @returns {number} an integer between start and end depending on keyframe location
     */
    integer(start, end){
        return Math.trunc(this.number(start, end));
    }

    /**
     * Tweens between the two provided hex values. Useful for colour transitions
     * @param start some hex string Example: #000000
     * @param end   some hex string Example: #FFFFFF
     * @returns {number} an integer between start and end depending on keyframe location
     */
    hex(start, end){
        let s = start.slice(1).match(/.{1,2}/g).map((val) => parseInt(val, 16));
        let e = end.slice(1).match(/.{1,2}/g).map((val) => parseInt(val, 16));
        let retval = [];

       Object.values([0,1,2]).map((i) => {
            let value = this.decimalToHexString(this.integer(s[i], e[i]));

            if(value.length === 1) {
                value = "0" + value;
            }

            retval.push(value);
        });

        retval = retval = "#" + retval.join("");
        return retval;
    }

    decimalToHexString(number)
    {
        if (number < 0) {
            number = 0xFFFFFFFF + number + 1;
        }

        return number.toString(16).toUpperCase();
    }
}
