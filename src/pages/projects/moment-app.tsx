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
        <title>Moment App | 바닐라 JS 기반 일정 관리 앱 - 황현주</title>
        <meta
          name="description"
          content="Moment App은 사용자의 목표 관리와 생산성을 높이는 To-Do List 웹 애플리케이션입니다."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/thumbnail.png" />
        <meta
          property="og:title"
          content="Moment App | 바닐라 JS 기반 일정관리 앱 - 황현주"
        />
        <meta
          property="og:description"
          content="Moment App은 사용자의 목표 관리와 생산성을 높이는 To-Do List 웹 애플리케이션입니다."
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
          src="/notion/moment-app/index.html"
          className="w-full h-full border-0"
          style={{ visibility: loading ? "hidden" : "visible" }}
        />
      </div>
    </>
  );
}
