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
        <title>Twircle | 트위터 클론 프로젝트 - 황현주</title>
        <meta
          name="description"
          content="Firebase 기반 실시간 SNS 서비스 프로젝트 twircle은 사용자의 일상과 생각을 공유할 수 있는 트위터 UX를 모티브로 한 실시간 반응형 소셜 네트워크 서비스입니다."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/thumbnail.png" />
        <meta
          property="og:title"
          content="Twircle | 트위터 클론 프로젝트 - 황현주"
        />
        <meta
          property="og:description"
          content="Firebase 기반 실시간 SNS 서비스 프로젝트 twircle은 사용자의 일상과 생각을 공유할 수 있는 트위터 UX를 모티브로 한 실시간 반응형 소셜 네트워크 서비스입니다."
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
          src="/notion/twircle/index.html"
          className="w-full h-full border-0"
          style={{ visibility: loading ? "hidden" : "visible" }}
        />
      </div>
    </>
  );
}
