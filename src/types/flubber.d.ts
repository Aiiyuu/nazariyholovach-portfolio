declare module "flubber" {
  export function interpolate(
    fromShape: string | string[],
    toShape: string | string[],
    options?: { maxSegmentLength?: number; single?: boolean }
  ): (t: number) => string;

  export function interpolateAll(
    fromShapes: string[],
    toShapes: string[],
    options?: { maxSegmentLength?: number }
  ): ((t: number) => string)[];
}
