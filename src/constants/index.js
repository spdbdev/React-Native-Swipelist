// after how many ticks will gesture validation give up
export const GESTURE_DISTANCE_THRESHOLD = 2;

// what velocity is considered 'quick'
export const QUICK_GESTURE_VELOCITY_THRESHOLD = 0.15;

// allow the gesture angle to be ± VELOCITY_THRESHOLD_ANGLE_SLOP
// e.g. if a left swipe is within 180 ± VELOCITY_THRESHOLD_ANGLE_SLOP
// than the threshold will be reduced by VELOCITY_THRESHOLD_SLOP_MOD
export const VELOCITY_THRESHOLD_ANGLE_SLOP = 40;

// the amount to multiply the gesture velocity threshold by if it is within the angle slop
export const VELOCITY_THRESHOLD_SLOP_MOD = 0.25;

// velocity comes back different on android, so this value will normalize it with iOS
export const ANDROID_TO_IO_VELOCITY_MOD = 220000;

const TOTAL_LEFT_ANGLE = 180;
const TOTAL_RIGHT_ANGLE1 = 360;
const TOTAL_RIGHT_ANGLE2 = 0;
const HORIZONTAL_ANGLE_THRESHOLD = 15;
export const LEFT_GESTURE_ANGLE_RANGE = {
    MIN: TOTAL_LEFT_ANGLE - HORIZONTAL_ANGLE_THRESHOLD,
    MAX: TOTAL_LEFT_ANGLE + HORIZONTAL_ANGLE_THRESHOLD
};

export const RIGHT_GESTURE_ANGLE_RANGE = {
    MIN1: TOTAL_RIGHT_ANGLE1 - HORIZONTAL_ANGLE_THRESHOLD,
    MAX1: TOTAL_RIGHT_ANGLE1,
    MIN2: TOTAL_RIGHT_ANGLE2,
    MAX2: TOTAL_RIGHT_ANGLE2 + HORIZONTAL_ANGLE_THRESHOLD
};

// at what percentage of the sub view width should the swipe row be considered 'open'
export const OPEN_POSITION_THRESHOLD_FACTOR = 0.4;
export const CLOSE_POSITION_THRESHOLD_FACTOR = 0.3;
export const MAX_OPEN_THRESHOLD = 60;
export const OPEN_VELOCITY_THRESHOLD = 0.5;

export default {
    GESTURE_DISTANCE_THRESHOLD,
    QUICK_GESTURE_VELOCITY_THRESHOLD,
    ANDROID_TO_IO_VELOCITY_MOD,
    VELOCITY_THRESHOLD_ANGLE_SLOP,
    VELOCITY_THRESHOLD_SLOP_MOD,
    LEFT_GESTURE_ANGLE_RANGE,
    RIGHT_GESTURE_ANGLE_RANGE,
    OPEN_POSITION_THRESHOLD_FACTOR,
    CLOSE_POSITION_THRESHOLD_FACTOR,
    MAX_OPEN_THRESHOLD,
    OPEN_VELOCITY_THRESHOLD
}