// A hidden YouTube player for the builds soundtrack. The IFrame API loads on the first play,
// so visitors who never press play don't download anything from YouTube.

type YTPlayer = { playVideo(): void; pauseVideo(): void; mute(): void; unMute(): void };

let player: YTPlayer | null = null, ready: Promise<YTPlayer> | null = null, muted = false;

function load(videoId: string): Promise<YTPlayer> {
  return (ready ??= new Promise((resolve) => {
    const host = document.createElement("div");
    host.id = "ytMusic"; host.setAttribute("aria-hidden", "true");
    host.style.cssText = "position:fixed;width:1px;height:1px;left:-9999px;top:0;opacity:0;pointer-events:none";
    document.body.appendChild(host);
    const w = window as any;
    w.onYouTubeIframeAPIReady = () => {
      new w.YT.Player(host, {
        width: 1, height: 1, videoId,
        playerVars: { autoplay: 1, loop: 1, playlist: videoId, controls: 0, playsinline: 1 },
        events: { onReady: (e: { target: YTPlayer }) => { player = e.target; if (muted) player.mute(); resolve(player); } },
      });
    };
    const s = document.createElement("script"); s.src = "https://www.youtube.com/iframe_api"; document.head.appendChild(s);
  }));
}

export const YouTubeMusic = {
  play(videoId: string) { load(videoId).then((p) => p.playVideo()); },
  pause() { player?.pauseVideo(); },
  mute(m: boolean) { muted = m; if (player) m ? player.mute() : player.unMute(); },
};
