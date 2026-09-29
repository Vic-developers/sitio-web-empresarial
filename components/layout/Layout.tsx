import { Header } from "./Header";
import { Footer } from "./Footer";
import { ChatWidget } from "@/components/ui/ChatWidget";
import { BackToTop } from "@/components/ui/BackToTop";
import { ToastProvider } from "@/components/ui/Toast";
import { UrgencyBanner } from "@/components/ui/SocialProof";
import { ExitIntentPopup } from "@/components/ui/ExitIntentPopup";
import { ProactiveChat } from "@/components/ui/ProactiveChat";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ToastProvider>
      <div className="min-h-screen flex flex-col">
        <UrgencyBanner />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ChatWidget />
        <BackToTop />
        <ExitIntentPopup />
        <ProactiveChat />
      </div>
    </ToastProvider>
  );
}
