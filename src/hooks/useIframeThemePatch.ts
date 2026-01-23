import { RefObject, useEffect, useState } from "react";

type Options = {
  styleId?: string;
  getIsDark?: () => boolean;
  css?: (isDark: boolean) => string;
};

const defaultCss = () => `
  html.dark, html.dark body {
    background: #111827 !important; /* gray-900 */
    color: #e5e7eb !important;      /* gray-200 */
  }

  html.dark p,
  html.dark span,
  html.dark li,
  html.dark td,
  html.dark th {
    color: #e5e7eb !important;
  }

  html.dark h1,
  html.dark h2,
  html.dark h3 {
    background: transparent !important;
    color: #f9fafb !important;
  }

  html.dark a {
    color: #93c5fd !important;
  }

  html.dark code {
    background-color: rgba(255, 255, 255, 0.08);
    color: #e5e7eb !important;
  }

  html.dark pre {
    background-color: #1f2937 !important;
    color: #e5e7eb !important;
  }

  html.dark pre code {
    text-shadow: none;
  }

  html.dark figure {
    background-color: #1f2937 !important;
  }

  html.dark figcaption {
    color: #9ca3af !important;
  }

  html.dark pre,
  html.dark figure {
    border: 1px solid #374151;
  }
`;

export function useIframeThemePatch(
  iframeRef: RefObject<HTMLIFrameElement | null>,
  options: Options = {},
) {
  const [loading, setLoading] = useState(true);

  const {
    styleId = "__iframe_dark_patch__",
    getIsDark = () => document.documentElement.classList.contains("dark"),
    css = defaultCss,
  } = options;

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const applyTheme = () => {
      const doc = iframe.contentDocument;
      if (!doc) return;

      const root = doc.documentElement;
      if (!root) return;

      const isDark = getIsDark();
      root.classList.toggle("dark", isDark);

      if (!doc.head) return;

      let styleEl = doc.getElementById(styleId) as HTMLStyleElement | null;
      if (!styleEl) {
        styleEl = doc.createElement("style");
        styleEl.id = styleId;
        doc.head.appendChild(styleEl);
      }

      styleEl.textContent = css(isDark);
    };

    const onLoad = () => {
      applyTheme();
      setLoading(false);
    };
    iframe.addEventListener("load", onLoad);

    const observer = new MutationObserver(applyTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    applyTheme();

    return () => {
      iframe.removeEventListener("load", onLoad);
      observer.disconnect();
    };
  }, [iframeRef, styleId, getIsDark, css]);

  return { loading };
}
