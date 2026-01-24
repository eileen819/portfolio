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
        <title>Coinlist | 실시간 암호화폐 시세 조회 서비스 - 황현주</title>
        <meta
          name="description"
          content="외부 API를 기반으로 Coin List는 실시간 암호 화폐 정보를 제공하는 웹 어플리케이션입니다."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/thumbnail.png" />
        <meta
          property="og:title"
          content="Coinlist | 실시간 암호화폐 시세 조회 서비스 - 황현주"
        />
        <meta
          property="og:description"
          content="외부 API를 기반으로 Coin List는 실시간 암호 화폐 정보를 제공하는 웹 어플리케이션입니다."
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
          src="/notion/coin-list/index.html"
          className="w-full h-full border-0"
          style={{ visibility: loading ? "hidden" : "visible" }}
        />
      </div>
    </>
  );
}
