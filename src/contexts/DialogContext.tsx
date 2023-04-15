import { ReactNode, createContext, useContext, useRef, useState } from 'react';

const noop = () => {};

type DialogCloseFn = () => void;
type DialogMethods = [open: (dialog: ReactNode) => void, close: DialogCloseFn];

const DialogContext = createContext<DialogMethods>([noop, noop]);
const CloseDialogContext = createContext<DialogCloseFn>(noop);

const useDialog = () => {
  return useContext(DialogContext);
};

const useCloseDialog = () => {
  return useContext(CloseDialogContext);
};

type DialogProviderProps = {
  children: ReactNode;
};

const DialogProvider = ({ children }: DialogProviderProps) => {
  const [dialog, setDialog] = useState<ReactNode>(null);
  const dialogContainerRef = useRef<HTMLDivElement>(null);

  const open = (dialog: ReactNode) => {
    setDialog(dialog);
  };

  const close = () => {
    setDialog(null);
  };

  return (
    <DialogContext.Provider value={[open, close]}>
      <CloseDialogContext.Provider value={close}>
        {dialog && (
          <div
            ref={dialogContainerRef}
            onClick={(e) => {
              if (e.target !== dialogContainerRef.current) return;

              close();
            }}
            className="h-screen w-full z-50 overflow-hidden fixed grid place-content-center bg-neutral-800 bg-opacity-60"
          >
            {dialog}
          </div>
        )}
        {children}
      </CloseDialogContext.Provider>
    </DialogContext.Provider>
  );
};

export default DialogProvider;
export { useDialog, useCloseDialog };
export type { DialogCloseFn };
