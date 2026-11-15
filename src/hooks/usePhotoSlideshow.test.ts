import { act, renderHook } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { usePhotoSlideshow } from "./usePhotoSlideshow";
import { PHOTO_DURATION } from "@/data/eventPhotos";

const photos = [{ src: "a.jpg" }, { src: "b.jpg" }, { src: "c.jpg" }];

describe("usePhotoSlideshow", () => {
  beforeEach(() => vi.useFakeTimers());
  afterEach(() => vi.useRealTimers());

  it("steps through the photos and loops back to the first", () => {
    const { result } = renderHook(() => usePhotoSlideshow(photos, true));
    expect(result.current.photoIndex).toBe(0);

    act(() => vi.advanceTimersByTime(PHOTO_DURATION));
    expect(result.current.photoIndex).toBe(1);
    act(() => vi.advanceTimersByTime(PHOTO_DURATION));
    expect(result.current.photoIndex).toBe(2);
    act(() => vi.advanceTimersByTime(PHOTO_DURATION));
    expect(result.current.photoIndex).toBe(0);
  });

  it("does not advance while inactive (e.g. behind the page loader)", () => {
    const { result, rerender } = renderHook(({ active }) => usePhotoSlideshow(photos, active), {
      initialProps: { active: false },
    });

    act(() => vi.advanceTimersByTime(PHOTO_DURATION * 5));
    expect(result.current.photoIndex).toBe(0);

    rerender({ active: true });
    act(() => vi.advanceTimersByTime(PHOTO_DURATION));
    expect(result.current.photoIndex).toBe(1);
  });
});
