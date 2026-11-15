import { act, renderHook } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { useVideoThenPhotos } from "./useVideoThenPhotos";
import { PHOTO_DURATION } from "@/data/eventPhotos";

const photos = [{ src: "a.jpg" }, { src: "b.jpg" }, { src: "c.jpg" }];

function fakeVideo() {
  return {
    currentTime: 12,
    duration: 50,
    play: vi.fn(() => Promise.resolve()),
    pause: vi.fn(),
  } as unknown as HTMLVideoElement & { play: ReturnType<typeof vi.fn>; pause: ReturnType<typeof vi.fn> };
}

describe("useVideoThenPhotos", () => {
  beforeEach(() => vi.useFakeTimers());
  afterEach(() => vi.useRealTimers());

  it("shows the photos first, then plays the video from the start, then returns to the photos", () => {
    const video = fakeVideo();
    const { result } = renderHook(() => useVideoThenPhotos(photos, true));
    (result.current.videoRef as { current: HTMLVideoElement | null }).current = video;

    expect(result.current.phase).toBe("photos");
    expect(result.current.photoIndex).toBe(0);

    act(() => vi.advanceTimersByTime(PHOTO_DURATION));
    expect(result.current.photoIndex).toBe(1);
    act(() => vi.advanceTimersByTime(PHOTO_DURATION));
    expect(result.current.photoIndex).toBe(2);
    expect(video.play).not.toHaveBeenCalled();

    // After the last photo the video starts from 0
    act(() => vi.advanceTimersByTime(PHOTO_DURATION));
    expect(result.current.phase).toBe("video");
    expect(video.currentTime).toBe(0);
    expect(video.play).toHaveBeenCalledTimes(1);

    // When the video ends, the photos start again from the first one
    act(() => result.current.videoProps.onEnded());
    expect(result.current.phase).toBe("photos");
    expect(result.current.photoIndex).toBe(0);
    expect(video.pause).toHaveBeenCalled();
  });

  it("does not advance while inactive (e.g. behind the page loader)", () => {
    const { result, rerender } = renderHook(({ active }) => useVideoThenPhotos(photos, active), {
      initialProps: { active: false },
    });

    act(() => vi.advanceTimersByTime(PHOTO_DURATION * 5));
    expect(result.current.phase).toBe("photos");
    expect(result.current.photoIndex).toBe(0);

    rerender({ active: true });
    act(() => vi.advanceTimersByTime(PHOTO_DURATION));
    expect(result.current.photoIndex).toBe(1);
  });

  it("goes back to the photos if the video cannot play", async () => {
    const video = fakeVideo();
    video.play.mockImplementation(() => Promise.reject(new Error("autoplay blocked")));
    const { result } = renderHook(() => useVideoThenPhotos(photos, true));
    (result.current.videoRef as { current: HTMLVideoElement | null }).current = video;

    for (let i = 0; i < photos.length; i++) act(() => vi.advanceTimersByTime(PHOTO_DURATION));
    expect(video.play).toHaveBeenCalledTimes(1);
    await act(async () => {
      await Promise.resolve();
    });
    expect(result.current.phase).toBe("photos");
    expect(result.current.photoIndex).toBe(0);
  });
});
