
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import Loading from "../components/Loading";
import { setProgress } from "../components/Loading";

interface LoadingType {
  isLoading: boolean;
  setIsLoading: (state: boolean) => void;
  setLoading: (percent: number) => void;
}

export const LoadingContext = createContext<LoadingType | null>(null);

export const LoadingProvider = ({ children }: PropsWithChildren) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loading, setLoading] = useState(0);
  const [progressHandler, setProgressHandler] = useState<any>(null);

  // Add debug logs
  useEffect(() => {
    console.log("LoadingProvider mounted");
    
    if (!progressHandler) {
      console.log("Setting up progress handler");
      setProgressHandler(setProgress(setLoading));
    }
    
    const handleLoad = async () => {
      console.log("Window load event or document already complete");
      if (progressHandler && progressHandler.loaded) {
        await progressHandler.loaded();
      }
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, [progressHandler]);

  // Add a timeout to prevent infinite loading
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isLoading) {
        console.log("Loading timeout triggered - forcing completion");
        setIsLoading(false);
      }
    }, 15000); // 15 second fallback

    return () => clearTimeout(timeout);
  }, [isLoading]);

  const value = {
    isLoading,
    setIsLoading,
    setLoading,
  };

  return (
    <LoadingContext.Provider value={value as LoadingType}>
      {isLoading && <Loading percent={loading} />}
      <main className="main-body" style={{ opacity: isLoading ? 0 : 1 }}>{children}</main>
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
};
