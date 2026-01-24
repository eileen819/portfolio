import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const syncToBrowserUrl = () => {
      const as =
        window.location.pathname +
        window.location.search +
        window.location.hash;

      // 이미 동기화돼 있으면 아무것도 안 함
      if (router.asPath === as) return;

      // ✅ URL(브라우저) 기준으로 Next 라우트를 강제 동기화
      router.replace(as, as, { shallow: false, scroll: false });
    };

    window.addEventListener("popstate", syncToBrowserUrl);
    return () => window.removeEventListener("popstate", syncToBrowserUrl);
  }, [router]);

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
