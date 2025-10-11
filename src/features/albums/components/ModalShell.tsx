import { PropsWithChildren } from 'react';

export default function ModalShell({
  onClose, children = true,
}: PropsWithChildren<{ onClose: () => void; lockBody?: boolean }>) {

  return (
    <div className="fixed inset-0 z-[999] flex items-stretch justify-center bg-black/70" onClick={onClose}>
      <div
        className="relative mb-4 mt-20 w-full max-w-[1328px] overflow-hidden rounded-xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 rounded-full bg-black/50 px-3 py-2 text-white hover:bg-black"
        >
          ✕
        </button>

        {/* container cuộn của modal */}
        <div
          className="h-screen w-full overflow-y-auto overscroll-contain no-scrollbar"
          onWheel={(e) => e.stopPropagation()}
          onTouchMove={(e) => e.stopPropagation()}
        >
          <div className="pb-12 md:pb-16">
            {children}
          </div>
          <div className="h-8 md:h-16" />
        </div>
      </div>
    </div>
  );
}
