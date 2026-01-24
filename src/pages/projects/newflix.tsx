import { useIframeThemePatch } from "@/hooks/useIframeThemePatch";
import { Loader } from "lucide-react";
import Head from "next/head";
import { useRef } from "react";

export default function Page() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const { loading } = useIframeThemePatch(iframeRef);

  return (
    <>
      <Head>
        <title>Newflix | 영화 정보 웹 서비스 - 황현주</title>
        <meta
          name="description"
          content="NEWFLIX는 TMDB API를 활용하여 최신 영화와 TV쇼 정보를 실시간으로 제공하는 미디어 플랫폼입니다."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/thumbnail.png" />
        <meta
          property="og:title"
          content="Newflix | 영화 정보 웹 서비스 - 황현주"
        />
        <meta
          property="og:description"
          content="NEWFLIX는 TMDB API를 활용하여 최신 영화와 TV쇼 정보를 실시간으로 제공하는 미디어 플랫폼입니다."
        />
      </Head>
      <div className="h-screen m-0 mb-10">
        {loading && (
          <div className="flex justify-center items-center h-4/5 animate-spin [animation-duration:1.5s]">
            <Loader size={40} />
          </div>
        )}
        <iframe
          ref={iframeRef}
          src="/notion/newflix/index.html"
          className="w-full h-full border-0"
          style={{ visibility: loading ? "hidden" : "visible" }}
        />
      </div>
    </>
  );
}
