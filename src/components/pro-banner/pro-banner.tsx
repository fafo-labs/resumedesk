import { Dispatch, SetStateAction } from "react";
import { UpgradePlanModal } from "@/components/pro-banner/upgrade-plan-modal";
import { Button } from "@/components/ui/button";
import X from "@/components/shared/x";


export default function ProBanner({
  setShowProBanner,
}: {
  setShowProBanner: Dispatch<SetStateAction<boolean | null>>;
}) {

  const handleHideBanner = () => {
    setShowProBanner(false);
  };

  return (
    <aside className="flex flex-col justify-center w-full bg-white text-black p-4 mb-2 rounded-lg border-yellow-500 border-2 relative">
      <button
        type="button"
        onClick={handleHideBanner}
        className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
      >
        <X className="w-4 h-4" />
        <span className="sr-only">Close</span>
      </button>
      <div className="flex space-x-2">
        <span className="font-bold text-sm">🚨 Beep beep</span>
      </div>
      <p className="my-4 text-sm">
        ResumeDesk is opensource! <br/>Wanna make it better? <span className="--local-departure-mono text-base">fafo_labs</span>.
      </p>
      <div className="flex">
        <UpgradePlanModal trigger={"pro_banner"}>
          <Button
            type="button"
            className="grow bg-black text-white hover:bg-black/80"
          >
            Open
          </Button>
        </UpgradePlanModal>
      </div>
    </aside>
  );
}
