import { useIframeThemePatch } from "@/hooks/useIframeThemePatch";
import { Loader } from "lucide-react";
import { useRef } from "react";

export default function Page() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const { loading } = useIframeThemePatch(iframeRef);

  return (
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
  );
}
