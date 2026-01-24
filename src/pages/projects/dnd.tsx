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
        <title>DND To-Do | 할 일 관리 웹 앱 - 황현주</title>
        <meta
          name="description"
          content="To-Do Board는 기존 리스트 기반 할 일 관리 방식의 한계를 개선하기 위해 설계된 Drag & Drop 기반 보드형 업무 관리 웹 애플리케이션입니다."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/thumbnail.png" />
        <meta
          property="og:title"
          content="DND To-Do | 할 일 관리 웹 앱 - 황현주"
        />
        <meta
          property="og:description"
          content="To-Do Board는 기존 리스트 기반 할 일 관리 방식의 한계를 개선하기 위해 설계된 Drag & Drop 기반 보드형 업무 관리 웹 애플리케이션입니다."
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
          src="/notion/dnd/index.html"
          className="w-full h-full border-0"
          style={{ visibility: loading ? "hidden" : "visible" }}
        />
      </div>
    </>
  );
}
