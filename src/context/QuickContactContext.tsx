import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type QuickContactContextValue = {
  isOpen: boolean;
  presetService: string;
  open: (presetService?: string) => void;
  close: () => void;
};

const QuickContactContext = createContext<QuickContactContextValue | undefined>(
  undefined
);

export function QuickContactProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [presetService, setPresetService] = useState("");

  const open = useCallback((service?: string) => {
    setPresetService(service ?? "");
    setIsOpen(true);
  }, []);

  const close = useCallback(() => setIsOpen(false), []);

  const value = useMemo(
    () => ({ isOpen, presetService, open, close }),
    [isOpen, presetService, open, close]
  );

  return (
    <QuickContactContext.Provider value={value}>
      {children}
    </QuickContactContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useQuickContact(): QuickContactContextValue {
  const ctx = useContext(QuickContactContext);
  if (!ctx)
    throw new Error("useQuickContact debe usarse dentro de QuickContactProvider");
  return ctx;
}
