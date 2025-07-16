interface VantaBaseOptions {
  /** The DOM element to attach the effect to */
  el: HTMLElement | null;
  /** Enable gyroscope-based controls for movement (default: false) */
  gyroControls?: boolean;
  /** Minimum height (in pixels) for the effect container (optional) */
  minHeight?: number;
  /** Minimum width (in pixels) for the effect container (optional) */
  minWidth?: number;
  /** Enable mouse-based controls for movement (default: true) */
  mouseControls?: boolean;
  /** Scale factor for rendering (default: 1) */
  scale?: number;
  /** Scale factor for mobile devices (default: 1) */
  scaleMobile?: number;
  /** Enable touch-based controls for movement (default: true) */
  touchControls?: boolean;
}

interface VantaBirdsOptions extends VantaBaseOptions, VantaNeedsThree {
  /** Alignment force (default: 20) */
  alignment?: number;
  /** Background alpha transparency (default: 1) */
  backgroundAlpha?: number;
  /** Background color (hex, e.g. 0x07192F) */
  backgroundColor?: number;
  /** Size multiplier for each bird (default: 1) */
  birdSize?: number;
  /** Cohesion force (default: 20) */
  cohesion?: number;
  /** Primary color for birds (hex, e.g. 0xff0000) */
  color1?: number;
  /** Secondary color for birds (hex, e.g. 0x00d1ff) */
  color2?: number;
  /** Color mode: e.g. 'lerp', 'lerpGradient', 'variance', 'varianceGradient' */
  colorMode?: "lerp" | "lerpGradient" | "variance" | "varianceGradient";
  /** Quantity exponent, number of birds = 2^quantity (default: 5, range: 2-5) */
  quantity?: number;
  /** Separation force between birds (default: 20) */
  separation?: number;
  /** Maximum speed of birds (default: 5) */
  speedLimit?: number;
  /** Wing span of the birds (default: 30) */
  wingSpan?: number;
}

interface VantaCellsOptions extends VantaBaseOptions, VantaNeedsThree {
  /** Amplitude factor for cell animation (default: 1.0) */
  amplitudeFactor?: number;
  /** Background color (hex, e.g. 0xd7ff8f) */
  backgroundColor?: number;
  /** Optional blur factor for the shader (if supported) */
  blurFactor?: number;
  /** Primary color for the effect (hex, e.g. 0x008c8c) */
  color1?: number;
  /** Secondary color for the effect (hex, e.g. 0xf2e735) */
  color2?: number;
  /** Ring factor for cell pattern (default: 1.0) */
  ringFactor?: number;
  /** Rotation factor for animation (default: 1.0) */
  rotationFactor?: number;
  /** Cell size multiplier (default: 1.5) */
  size?: number;
  /** Animation speed (default: 1.0) */
  speed?: number;
}

interface VantaClouds2Options extends VantaBaseOptions, VantaNeedsThree {
  /** Background color (hex, e.g. 0x000000) */
  backgroundColor?: number;
  /** Main cloud color (hex, e.g. 0x334d80) */
  cloudColor?: number;
  /** Light color for shading clouds (hex, e.g. 0xffffff) */
  lightColor?: number;
  /** Sky color (hex, e.g. 0x5ca6ca) */
  skyColor?: number;
  /** Animation speed (default: 1.0) */
  speed?: number;
  /** Path to the noise texture used for cloud shapes */
  texturePath?: string;
}

interface VantaCloudsOptions extends VantaBaseOptions, VantaNeedsThree {
  /** Background color (hex, e.g. 0xffffff) */
  backgroundColor?: number;
  /** Main cloud color (hex, e.g. 0xadc1de) */
  cloudColor?: number;
  /** Shadow color for clouds (hex, e.g. 0x183550) */
  cloudShadowColor?: number;
  /** Whether mouse movement eases the camera (default: true) */
  mouseEase?: boolean;
  /** Sky color (hex, e.g. 0x68b8d7) */
  skyColor?: number;
  /** Animation speed (default: 1) */
  speed?: number;
  /** Sun color (hex, e.g. 0xff9919) */
  sunColor?: number;
  /** Sun glare color (hex, e.g. 0xff6633) */
  sunGlareColor?: number;
  /** Sunlight color (hex, e.g. 0xff9933) */
  sunlightColor?: number;
}

interface VantaDotsOptions extends VantaBaseOptions, VantaNeedsThree {
  /** Background color (hex, e.g. 0x222222) */
  backgroundColor?: number;
  /** Color of the main dots/stars (hex, e.g. 0xff8820) */
  color?: number;
  /** Color of the connecting lines (hex, e.g. 0xff8820) */
  color2?: number;
  /** Whether to show connecting lines between dots (default: true) */
  showLines?: boolean;
  /** Size of each dot/star (default: 3) */
  size?: number;
  /** Spacing between dots/stars in the grid (default: 35) */
  spacing?: number;
}

interface VantaEffect {
  destroy(): void;
}

interface VantaFogOptions extends VantaBaseOptions, VantaNeedsThree {
  /** Base color of the fog (hex, e.g. 0xffebeb) */
  baseColor?: number;
  /** Controls the sharpness and layering of the noise (default: 0.6) */
  blurFactor?: number;
  /** Highlight color for the brightest fog areas (hex, e.g. 0xffc300) */
  highlightColor?: number;
  /** Lowlight color for the darkest fog (hex, e.g. 0x2d00ff) */
  lowlightColor?: number;
  /** Midtone color for mid-brightness fog (hex, e.g. 0xff1f00) */
  midtoneColor?: number;
  /** Animation speed of the fog movement (default: 1.0) */
  speed?: number;
  /** Zoom factor for the effect (default: 1.0) */
  zoom?: number;
}

interface VantaGlobeOptions extends VantaBaseOptions, VantaNeedsThree {
  /** Background color (hex, e.g. 0x23153c) */
  backgroundColor?: number;
  /** Color of the main lines and dots (hex, e.g. 0xff3f81) */
  color?: number;
  /** Secondary color for lines and accents (hex, e.g. 0xffffff) */
  color2?: number;
  /** Maximum distance for connecting lines between points (default: 20) */
  maxDistance?: number;
  /** Optional coefficient for mouse horizontal movement (default: 1) */
  mouseCoeffX?: number;
  /** Optional coefficient for mouse vertical movement (default: 1) */
  mouseCoeffY?: number;
  /** Number of points per axis (default: 10) */
  points?: number;
  /** Whether to display dots at each point (default: true) */
  showDots?: boolean;
  /** Size multiplier for the globe and sphere (default: 1) */
  size?: number;
  /** Spacing between points (default: 15) */
  spacing?: number;
}

interface VantaHaloOptions extends VantaBaseOptions, VantaNeedsThree {
  /** Amplitude factor for animation intensity (default: 1.0) */
  amplitudeFactor?: number;
  /** Background color (hex, e.g. 0x131a43) */
  backgroundColor?: number;
  /** Base color for the halo effect (hex, e.g. 0x001a59) */
  baseColor?: number;
  /** Secondary color for highlights or accents (hex, e.g. 0xf2e735) */
  color2?: number;
  /** Whether mouse movement eases the effect (default: true) */
  mouseEase?: boolean;
  /** Factor controlling ring pattern strength (default: 1.0) */
  ringFactor?: number;
  /** Factor controlling rotation speed or shape (default: 1.0) */
  rotationFactor?: number;
  /** Size multiplier for the halo (default: 1.0) */
  size?: number;
  /** Animation speed (default: 1.0) */
  speed?: number;
  /** Horizontal offset for the halo center (default: 0) */
  xOffset?: number;
  /** Vertical offset for the halo center (default: 0) */
  yOffset?: number;
}

interface VantaNeedsP5 {
  /** Reference to the p5.js library instance */
  p5?: typeof import("p5");
}

interface VantaNeedsThree {
  /** Reference to the three.js library instance */
  THREE?: typeof import("three");
}

interface VantaNetOptions extends VantaBaseOptions, VantaNeedsThree {
  /** Background color (hex, e.g. 0x23153c) */
  backgroundColor?: number;
  /** Color of the main points and connecting lines (hex, e.g. 0xff3f81) */
  color?: number;
  /** Maximum distance for connecting lines between points (default: 20) */
  maxDistance?: number;
  /** Optional coefficient for mouse horizontal movement (default: 1) */
  mouseCoeffX?: number;
  /** Optional coefficient for mouse vertical movement (default: 1) */
  mouseCoeffY?: number;
  /** Number of points per axis (default: 10) */
  points?: number;
  /** Whether to display dots at each point (default: true) */
  showDots?: boolean;
  /** Spacing between points (default: 15) */
  spacing?: number;
}

interface VantaRingsOptions extends VantaBaseOptions, VantaNeedsThree {
  /** Alpha transparency for the background (default: 0.5) */
  backgroundAlpha?: number;
  /** Background color for the scene (hex, e.g. 0x202428) */
  backgroundColor?: number;
  /** Main color for the rings (hex, e.g. 0x88ff00) */
  color?: number;
}

interface VantaRippleOptions extends VantaBaseOptions, VantaNeedsThree {
  /** Amplitude factor for ripple strength (default: 1.0) */
  amplitudeFactor?: number;
  /** Background color (hex, e.g. 0xf6f6f6) */
  backgroundColor?: number;
  /**
   * Optional blur factor for shader (referenced in fragment shader but not set
   * in defaults)
   */
  blurFactor?: number;
  /** Primary color for the ripple highlights (hex, e.g. 0x60b25) */
  color1?: number;
  /** Secondary color for ripple lowlights (hex, e.g. 0xffffff) */
  color2?: number;
  /** Factor controlling the number and spread of rings (default: 4.0) */
  ringFactor?: number;
  /** Factor controlling rotational distortion (default: 0.1) */
  rotationFactor?: number;
  /** Animation speed (default: 1.0) */
  speed?: number;
}

interface VantaTopologyOptions extends VantaBaseOptions, VantaNeedsP5 {
  /** Background color of the canvas (hex, e.g. 0x002222) */
  backgroundColor?: number;
  /** Main color for the particle lines (hex, e.g. 0x89964e) */
  color?: number;
}

interface VantaTrunkOptions extends VantaBaseOptions, VantaNeedsP5 {
  /** Background color of the canvas (hex, e.g. 0x222426) */
  backgroundColor?: number;
  /** Chaos factor controlling the organic distortion of the rings (default: 1) */
  chaos?: number;
  /** Main color for the trunk rings (hex, e.g. 0x98465f) */
  color?: number;
  /** Additional spacing between rings (default: 0) */
  spacing?: number;
}

interface VantaWavesOptions extends VantaBaseOptions, VantaNeedsThree {
  /** Main color for the water mesh (hex, e.g. 0x005588) */
  color?: number;
  /** Shininess of the water surface (default: 30) */
  shininess?: number;
  /** Maximum height of the waves (default: 15) */
  waveHeight?: number;
  /** Speed of the wave animation (default: 1) */
  waveSpeed?: number;
  /** Camera zoom factor (default: 1) */
  zoom?: number;
}

declare module "vanta/dist/vanta.clouds2.min" {
  export default function clouds2(options: VantaClouds2Options): VantaEffect;
}

declare module "vanta/dist/vanta.globe.min" {
  export default function globe(options: VantaGlobeOptions): VantaEffect;
}

declare module "vanta/dist/vanta.cells.min" {
  export default function cells(options: VantaCellsOptions): VantaEffect;
}

declare module "vanta/dist/vanta.trunk.min" {
  export default function trunk(options: VantaTrunkOptions): VantaEffect;
}

declare module "vanta/dist/vanta.topology.min" {
  export default function topology(options: VantaTopologyOptions): VantaEffect;
}

declare module "vanta/dist/vanta.dots.min" {
  export default function dots(options: VantaDotsOptions): VantaEffect;
}

declare module "vanta/dist/vanta.rings.min" {
  export default function rings(options: VantaRingsOptions): VantaEffect;
}

declare module "vanta/dist/vanta.ripple.min" {
  export default function ripple(options: VantaRippleOptions): VantaEffect;
}

declare module "vanta/dist/vanta.birds.min" {
  export default function birds(options: VantaBirdsOptions): VantaEffect;
}

declare module "vanta/dist/vanta.waves.min" {
  export default function waves(options: VantaWavesOptions): VantaEffect;
}

declare module "vanta/dist/vanta.net.min" {
  export default function net(options: VantaNetOptions): VantaEffect;
}

declare module "vanta/dist/vanta.clouds.min" {
  export default function clouds(options: VantaCloudsOptions): VantaEffect;
}

declare module "vanta/dist/vanta.fog.min" {
  export default function fog(options: VantaFogOptions): VantaEffect;
}

declare module "vanta/dist/vanta.halo.min" {
  export default function halo(options: VantaHaloOptions): VantaEffect;
}
