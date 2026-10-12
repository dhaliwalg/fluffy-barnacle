import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24">
        <article className="container-custom max-w-4xl space-y-10 text-[var(--text-secondary)] leading-7">
          <header className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--accent)] dark:text-white">Privacy Policy</h1>
            <p>Billington is account-free, but not fully local. Shared bills and tabs are stored online.</p>
            <p className="text-sm mt-4">Effective October 12, 2026</p>
          </header>
          <section>
            <h2 className="text-2xl font-bold mb-4 text-[var(--accent)] dark:text-white">Information handled</h2>
            <p className="mb-3">The app stores bill history, participant names, preferences, and tab access tokens on your device. The web viewer stores some participant details in browser local storage. Billington has no user accounts.</p>
            <p>Bills and tabs you choose to share are sent to Billington&apos;s online service. This includes names, receipt items and amounts, participant shares, payment status, optional payment handles, and tab member names. People with a valid share link may view or update its content. Treat the link like a private key.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4 text-[var(--accent)] dark:text-white">Receipt scans and service providers</h2>
            <p className="mb-3">If you use receipt scanning, the image is sent to Billington&apos;s API and Anthropic&apos;s Claude API to extract text and amounts. This code path does not save the image in Billington&apos;s database. Anthropic normally deletes API inputs and outputs within 30 days, subject to exceptions in its <a className="underline" href="https://privacy.anthropic.com/en/articles/7996866-how-long-do-you-store-my-organization-s-data">retention terms</a>.</p>
            <p className="mb-3">Currency conversion may send currency codes to Frankfurter or, when configured, ExchangeRate-API. The API logs IP address, request path, response status, and timing. Slow database query logs may include SQL statements and values. Infrastructure providers process technical data needed to host the service.</p>
            <p>Billington uses Render for its API and Vercel for its web viewer. See <a className="underline" href="https://render.com/privacy">Render&apos;s privacy policy</a> and <a className="underline" href="https://vercel.com/legal/privacy-notice">Vercel&apos;s privacy notice</a>. Payment providers apply their own policies when you follow payment links.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4 text-[var(--accent)] dark:text-white">Use, retention, and deletion</h2>
            <p className="mb-3">We use information to create and share bills and tabs, calculate splits, remember local preferences, prevent receipt-scanning abuse, and operate the service. We do not sell bill or tab content.</p>
            <p className="mb-3">Shared bills and tabs remain online until removed by service operators. There is no in-app deletion control, and share tokens do not currently expire automatically. Clearing app data or uninstalling removes local data only; browser storage can be cleared in browser settings.</p>
            <p>To ask about or request removal of shared information, email <a className="underline" href="mailto:checkmateapp@duck.com">checkmateapp@duck.com</a> with the bill or tab link. We may need to verify control before acting. Backups and provider logs may persist under their retention practices.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4 text-[var(--accent)] dark:text-white">Changes and contact</h2>
            <p>We may update this policy as the service changes. The effective date above identifies the latest version. Privacy questions: <a className="underline" href="mailto:checkmateapp@duck.com">checkmateapp@duck.com</a>.</p>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
