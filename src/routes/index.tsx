import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Compass,
  Map as MapIcon,
  Lock,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Zap,
  CheckCircle2,
  Quote,
  Star,
  Crown,
} from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.jpg";
import ebookMockup from "@/assets/ebook-mockup.png";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";

export const Route = createFileRoute("/")({
  component: SqueezePage,
});

function SqueezePage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <Hero />
      <Problem />
      <PainPoints />
      <About />
      <Process />
      <OfferStack />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  );
}

/* ---------- Header ---------- */
function Header() {
  return (
    <header className="relative z-30 w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <a href="#top" className="flex items-center gap-2.5">
          <div className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-brand to-brand-deep shadow-brand-glow">
            <Zap className="h-5 w-5 text-primary-foreground" strokeWidth={2.5} />
          </div>
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground">
            Trần Bảo Duy
          </span>
        </a>
        <div className="hidden items-center gap-8 text-xs font-medium uppercase tracking-[0.18em] text-foreground/80 md:flex">
          <a href="#about" className="transition hover:text-brand-glow">Về Duy</a>
          <a href="#process" className="transition hover:text-brand-glow">Nội Dung</a>
          <a href="#form" className="transition hover:text-brand-glow">Tải Ebook</a>
        </div>
        <a
          href="#form"
          className="hidden rounded-full border border-brand/40 bg-brand/10 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-foreground backdrop-blur transition hover:bg-brand/20 md:inline-block"
        >
          Nhận Ebook
        </a>
      </div>
    </header>
  );
}

/* ---------- Hero (P1) ---------- */
function Hero() {
  return (
    <section id="top" className="relative -mt-24 overflow-hidden pt-24 bg-hero">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute inset-x-0 top-0 h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--brand)_/_0.15,_transparent_60%)]" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 pb-24 pt-16 lg:grid-cols-[1.05fr_1fr] lg:gap-8 lg:px-10 lg:pt-20">
        <div className="flex flex-col justify-center">
          <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-glow backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" />
            Ebook Miễn Phí, 10 Trang
          </div>

          <h1 className="font-display text-[54px] uppercase leading-[0.92] text-foreground sm:text-[68px] lg:text-[82px]">
            Tải Miễn Phí:
            <br />
            <span className="text-gradient-brand block">Xây Phễu Bán Hàng</span>
            <span className="block">Đầu Tiên Của Bạn.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/70 sm:text-lg">
            Dù bạn chưa biết gì về funnel, chưa có danh sách email, và chưa từng chạy quảng cáo. Đọc xong trong 20 phút, áp dụng được ngay hôm nay.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#form"
              className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-b from-brand-glow to-brand px-7 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-brand-glow transition hover:scale-[1.03] animate-pulse-glow"
            >
              Nhận Ebook Ngay
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a
              href="#process"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-4 text-sm font-semibold uppercase tracking-wider text-foreground/90 transition hover:border-brand hover:text-brand-glow"
            >
              Xem Bên Trong
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs font-medium uppercase tracking-[0.18em] text-foreground/60">
            <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-brand-glow" /> Áp dụng được ngay</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-brand-glow" /> Không kỹ thuật</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-brand-glow" /> Miễn phí 100%</span>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 -z-10 rounded-full bg-brand/30 blur-[120px]" />
          <img
            src={ebookMockup}
            alt="Ebook Phễu Bán Hàng của Trần Bảo Duy"
            width={1024}
            height={1280}
            className="relative max-h-[560px] w-auto animate-float drop-shadow-[0_30px_60px_rgba(0,60,180,0.55)]"
          />
        </div>
      </div>

      {/* Trust marquee */}
      <div className="relative border-y border-border/50 bg-background/40 backdrop-blur">
        <div className="mx-auto max-w-7xl overflow-hidden px-6 py-6 lg:px-10">
          <p className="mb-4 text-center text-[11px] font-semibold uppercase tracking-[0.3em] text-foreground/50">
            Đã Được Tin Dùng Bởi
          </p>
          <div className="flex overflow-hidden">
            <div className="flex shrink-0 animate-marquee items-center gap-16 pr-16">
              {["Kobe Media", "Fluent Funnel", "Brand Studio", "Growth Lab", "Digital Vietnam", "Marketer Club", "Kobe Media", "Fluent Funnel", "Brand Studio", "Growth Lab", "Digital Vietnam", "Marketer Club"].map((n, i) => (
                <span key={i} className="whitespace-nowrap font-display text-2xl uppercase tracking-wider text-foreground/40">
                  {n}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Problem (P2) ---------- */
function Problem() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-brand/10 blur-[120px]" />

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-10">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-brand-glow">
          Bắt Đầu Ở Đâu Đây?
        </p>
        <h2 className="font-display text-4xl uppercase leading-tight text-foreground sm:text-5xl lg:text-6xl">
          Bạn muốn bán hàng online. <br />
          Nhưng <span className="text-gradient-brand">không biết bắt đầu</span> từ đâu?
        </h2>
        <div className="mx-auto mt-10 max-w-2xl space-y-5 text-left text-lg leading-relaxed text-foreground/75">
          <p>Mình hiểu cảm giác đó lắm.</p>
          <p>Bạn thấy người ta nói "làm funnel đi", "xây danh sách email đi"... Nhưng hỏi cụ thể thì làm cái gì trước? Dùng tool nào? Viết gì trên trang?</p>
          <p className="text-foreground">Không ai giải thích rõ cả.</p>
          <p className="text-foreground/60">Và bạn cứ loay hoay mãi, trong khi đối thủ thì vẫn đang chạy.</p>
        </div>
      </div>
    </section>
  );
}

/* ---------- Pain Points (P3) ---------- */
function PainPoints() {
  const pains = [
    {
      icon: TrendingUp,
      title: "Đăng bài đều đặn mà không ai hỏi mua",
      desc: "Bạn tốn thời gian làm nội dung mỗi ngày. Kết quả trả về là con số 0 tròn trĩnh.",
    },
    {
      icon: Target,
      title: "Phụ thuộc hoàn toàn vào thuật toán Facebook",
      desc: "Hôm nay reach cao, ngày mai reach về 0. Bạn không kiểm soát được điều gì cả.",
    },
    {
      icon: Users,
      title: "Không có danh sách email khách cũ",
      desc: "Khách mua xong là bay. Không có cách nào để liên lạc lại, không có khách hàng quay lại.",
    },
    {
      icon: Compass,
      title: "Nghe funnel suốt mà chưa hiểu funnel là gì",
      desc: "Ai cũng nói phải làm. Không ai nói bắt đầu từ đâu, cần cái gì trước.",
    },
  ];
  return (
    <section className="relative overflow-hidden border-y border-border/40 py-24 lg:py-32" style={{ background: "var(--gradient-section)" }}>
      <div className="absolute inset-0 bg-grid opacity-25" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-brand-glow">
            Nghe Có Quen Không?
          </p>
          <h2 className="font-display text-4xl uppercase leading-tight sm:text-5xl lg:text-[56px]">
            Bạn có đang <span className="text-gradient-brand">cảm thấy</span>...
          </h2>
        </div>

        {/* Bento grid 2x2 */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {pains.map((p, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/60 p-8 backdrop-blur transition hover:border-brand/50 shadow-elevated"
            >
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand/10 blur-2xl transition group-hover:bg-brand/25" />
              <div className="relative flex items-start gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-brand/40 bg-brand/10 text-brand-glow">
                  <p.icon className="h-6 w-6" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold leading-snug text-foreground sm:text-xl">
                    {p.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-foreground/65">{p.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-2xl text-center text-lg text-foreground/70">
          Nếu bạn gật đầu với ít nhất 1 trong 4 điều trên,
          <span className="block text-foreground font-semibold mt-1">thì ebook này viết cho bạn.</span>
        </p>
      </div>
    </section>
  );
}

/* ---------- About / Proof (P4) ---------- */
function About() {
  const stats = [
    { n: "7,000+", l: "Leads trong 1 chiến dịch" },
    { n: "800Tr", l: "Doanh thu tháng cho Kobe Media" },
    { n: "5 Năm", l: "Xây phễu cho DN Việt" },
    { n: "$997+", l: "Khóa quốc tế đã học" },
  ];
  return (
    <section id="about" className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-brand/15 blur-[140px]" />
      <div className="absolute inset-0 bg-grid opacity-15" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:px-10">
        <div className="relative">
          <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-b from-brand/30 to-transparent blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border border-brand/30 shadow-elevated">
            <img
              src={heroPortrait}
              alt="Trần Bảo Duy, chuyên gia xây phễu bán hàng"
              width={1024}
              height={1280}
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background to-transparent" />
            <div className="absolute bottom-5 left-5 rounded-full border border-brand/40 bg-background/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground backdrop-blur">
              Trần Bảo Duy, Fluent Funnel
            </div>
          </div>
        </div>

        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-brand-glow">
            Con Số Tự Nói
          </p>
          <h2 className="font-display text-4xl uppercase leading-[0.98] sm:text-5xl lg:text-[62px]">
            Mình không dạy lý thuyết. <br />
            <span className="text-gradient-brand">Mình chia sẻ những gì</span> đã thực sự hoạt động.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-foreground/75">
            Mình là Trần Bảo Duy, 5 năm xây phễu bán hàng cho doanh nghiệp Việt. Ebook này là bản tóm tắt những gì mình đã học, đã làm, đã thất bại, và cuối cùng đã ra kết quả.
          </p>

          {/* Stats bento 2x2 */}
          <div className="mt-10 grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <div
                key={i}
                className="rounded-2xl border border-border/60 bg-card/50 p-6 backdrop-blur transition hover:border-brand/50"
              >
                <div className="font-display text-5xl uppercase text-gradient-brand sm:text-6xl">
                  {s.n}
                </div>
                <div className="mt-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground/60">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Process (P5) ---------- */
function Process() {
  const steps = [
    {
      icon: BookOpen,
      step: "Bước 1 trên 3",
      title: "Phễu bán hàng là gì",
      desc: "Giải thích bằng ngôn ngữ người thường. Không thuật ngữ kỹ thuật, không sơ đồ phức tạp. Chỉ là cách khách hàng đi từ 'chưa biết bạn' đến 'móc ví mua'.",
    },
    {
      icon: Compass,
      step: "Bước 2 trên 3",
      title: "Loại phễu nào phù hợp với bạn",
      desc: "Không phải ai cũng cần cùng một loại funnel. Mình sẽ giúp bạn chọn đúng, dựa trên mục tiêu và giai đoạn kinh doanh hiện tại.",
    },
    {
      icon: MapIcon,
      step: "Bước 3 trên 3",
      title: "Sơ đồ 2 trang để thu email",
      desc: "Đơn giản nhất có thể. Không cần biết code, không cần thiết kế đẹp. Chỉ cần làm đúng và bắt đầu thu email ngay hôm nay.",
    },
  ];
  return (
    <section id="process" className="relative overflow-hidden border-y border-border/40 py-24 lg:py-32" style={{ background: "var(--gradient-section)" }}>
      <div className="absolute inset-0 bg-grid opacity-25" />
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-brand-glow">
            Bên Trong Ebook
          </p>
          <h2 className="font-display text-4xl uppercase leading-tight sm:text-5xl lg:text-[56px]">
            Ba điều <span className="text-gradient-brand">cốt lõi</span> bạn sẽ học được
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/70 p-8 backdrop-blur shadow-elevated transition hover:border-brand/50"
            >
              <div className="absolute -top-20 right-0 h-40 w-40 rounded-full bg-brand/10 blur-3xl transition group-hover:bg-brand/25" />
              <div className="relative">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-brand-deep shadow-brand-glow">
                  <s.icon className="h-7 w-7 text-primary-foreground" strokeWidth={1.75} />
                </div>
                <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-brand-glow">
                  {s.step}
                </p>
                <h3 className="mb-3 font-display text-2xl uppercase leading-tight text-foreground">
                  {s.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-foreground/65">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Offer Stack (P6) — Bento ---------- */
function OfferStack() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 bg-grid opacity-15" />
      <div className="absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-brand/15 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-brand-glow">
            Trọn Bộ Bạn Nhận Được
          </p>
          <h2 className="font-display text-4xl uppercase leading-tight sm:text-5xl lg:text-[56px]">
            Bạn nhận gì khi <span className="text-gradient-brand">tải ebook</span> hôm nay?
          </h2>
        </div>

        {/* Bento: 1 large + 2 stacked, tessellated */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:grid-rows-2">
          <div className="group relative overflow-hidden rounded-3xl border border-brand/30 bg-gradient-to-br from-card to-secondary p-8 shadow-elevated md:col-span-2 md:row-span-2">
            <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-brand/20 blur-3xl" />
            <div className="relative flex h-full flex-col justify-between gap-8 md:flex-row md:items-end">
              <div className="max-w-md">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-brand-deep shadow-brand-glow">
                  <BookOpen className="h-6 w-6 text-primary-foreground" strokeWidth={1.75} />
                </div>
                <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-brand-glow">
                  Tài Sản Chính
                </p>
                <h3 className="mb-4 font-display text-3xl uppercase leading-tight text-foreground sm:text-4xl">
                  Ebook 10 trang: <span className="text-gradient-brand">Xây phễu đầu tiên</span>
                </h3>
                <p className="text-[15px] leading-relaxed text-foreground/70">
                  Để bạn hiểu rõ funnel là gì, tại sao nó quan trọng hơn bất kỳ chiến thuật marketing nào khác. Đọc xong trong 20 phút, áp dụng được ngay hôm nay.
                </p>
              </div>
              <img
                src={ebookMockup}
                alt="Ebook mockup"
                width={1024}
                height={1280}
                loading="lazy"
                className="max-h-64 w-auto self-center drop-shadow-[0_20px_40px_rgba(0,60,180,0.5)]"
              />
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-3xl border border-border/60 bg-card/70 p-7 backdrop-blur shadow-elevated transition hover:border-brand/50">
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand/10 blur-2xl transition group-hover:bg-brand/25" />
            <div className="relative">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-brand/40 bg-brand/10 text-brand-glow">
                <Target className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-brand-glow">
                Bonus 1
              </p>
              <h3 className="mb-2 font-display text-xl uppercase leading-tight text-foreground">
                Bảng chọn loại funnel theo mục tiêu
              </h3>
              <p className="text-sm leading-relaxed text-foreground/65">
                1 trang A4 in ra dùng được luôn. Không mất thời gian đoán mò, biết ngay bạn cần loại nào.
              </p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-3xl border border-border/60 bg-card/70 p-7 backdrop-blur shadow-elevated transition hover:border-brand/50">
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand/10 blur-2xl transition group-hover:bg-brand/25" />
            <div className="relative">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-brand/40 bg-brand/10 text-brand-glow">
                <MapIcon className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-brand-glow">
                Bonus 2
              </p>
              <h3 className="mb-2 font-display text-xl uppercase leading-tight text-foreground">
                Sơ đồ Lead Funnel 2 trang
              </h3>
              <p className="text-sm leading-relaxed text-foreground/65">
                Kèm giải thích từng bước. Bạn dựng được trang đầu tiên trong 1 buổi chiều.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-3 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-glow">
            <Crown className="h-4 w-4" /> Tổng giá trị thực tế: 500.000đ
          </div>
          <p className="font-display text-3xl uppercase text-foreground sm:text-4xl">
            Hôm nay, bạn nhận <span className="text-gradient-brand">hoàn toàn miễn phí</span>
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------- Testimonials (P8) ---------- */
function Testimonials() {
  const items = [
    {
      q: "Mình đã đọc rất nhiều bài về funnel trên mạng nhưng vẫn không hiểu. Đọc ebook của Duy xong mình mới 'à há', hóa ra đơn giản vậy thôi. Tuần sau mình đã dựng được trang đầu tiên rồi.",
      name: "Minh Châu",
      role: "Chủ shop thời trang online, TP.HCM",
      img: testimonial1,
    },
    {
      q: "Mình thích nhất phần bảng chọn loại funnel. Trước giờ mình cứ nghĩ ai cũng phải làm giống nhau. Giờ mới biết mình đang ở giai đoạn nào và cần làm gì tiếp theo.",
      name: "Hoàng Anh",
      role: "Freelancer marketing, Hà Nội",
      img: testimonial2,
    },
  ];
  return (
    <section className="relative overflow-hidden border-y border-border/40 py-24 lg:py-32" style={{ background: "var(--gradient-section)" }}>
      <div className="absolute inset-0 bg-grid opacity-25" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-brand-glow">
            Người Thật, Kết Quả Thật
          </p>
          <h2 className="font-display text-4xl uppercase leading-tight sm:text-5xl lg:text-[56px]">
            Người khác nói gì <span className="text-gradient-brand">sau khi đọc</span>?
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {items.map((t, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-3xl border border-border/60 bg-card/70 p-8 backdrop-blur shadow-elevated transition hover:border-brand/50 sm:p-10"
            >
              <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-brand/10 blur-3xl" />
              <div className="relative">
                <Quote className="mb-5 h-10 w-10 text-brand-glow/70" />
                <div className="mb-6 flex gap-1">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-brand-glow text-brand-glow" />
                  ))}
                </div>
                <p className="mb-8 text-lg leading-relaxed text-foreground/85">"{t.q}"</p>
                <div className="flex items-center gap-4">
                  <img
                    src={t.img}
                    alt={t.name}
                    width={64}
                    height={64}
                    loading="lazy"
                    className="h-14 w-14 rounded-full border-2 border-brand/50 object-cover"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{t.name}</div>
                    <div className="text-sm text-foreground/60">{t.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Final CTA + Form ---------- */
function FinalCTA() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setSent(true);
  };

  return (
    <section id="form" className="relative overflow-hidden py-24 lg:py-32 bg-hero">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/25 blur-[160px]" />

      <div className="relative mx-auto max-w-3xl px-6 lg:px-10">
        <div className="text-center">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-brand-glow">
            Chỉ Một Bước Nữa Thôi
          </p>
          <h2 className="font-display text-5xl uppercase leading-[0.95] text-foreground sm:text-6xl lg:text-[76px]">
            Tải ebook <span className="text-gradient-brand">miễn phí</span> <br />
            ngay bây giờ.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-foreground/70">
            Điền tên và email. Mình gửi ngay. Không spam, không bán thông tin.
          </p>
        </div>

        <form
          onSubmit={submit}
          className="relative mt-12 rounded-3xl border border-brand/30 bg-card/70 p-8 shadow-elevated backdrop-blur sm:p-10"
        >
          <div className="absolute -inset-px -z-10 rounded-3xl bg-gradient-to-b from-brand/50 to-transparent opacity-40 blur-md" />

          {sent ? (
            <div className="py-12 text-center">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand-deep shadow-brand-glow">
                <CheckCircle2 className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="font-display text-3xl uppercase text-foreground">Đã gửi thành công!</h3>
              <p className="mt-3 text-foreground/70">Kiểm tra email {email} trong vài phút nữa nhé.</p>
            </div>
          ) : (
            <>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground/60">
                    Tên của bạn
                  </span>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nguyễn Văn A"
                    className="w-full rounded-xl border border-border bg-input/60 px-5 py-4 text-base text-foreground placeholder:text-foreground/40 outline-none transition focus:border-brand focus:bg-input"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground/60">
                    Email của bạn
                  </span>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ban@email.com"
                    className="w-full rounded-xl border border-border bg-input/60 px-5 py-4 text-base text-foreground placeholder:text-foreground/40 outline-none transition focus:border-brand focus:bg-input"
                  />
                </label>
              </div>

              <button
                type="submit"
                className="mt-6 flex w-full items-center justify-center gap-2.5 rounded-full bg-gradient-to-b from-brand-glow to-brand py-5 text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-brand-glow transition hover:scale-[1.02] animate-pulse-glow"
              >
                Gửi Ebook Cho Mình Ngay
                <ArrowRight className="h-4 w-4" />
              </button>

              <p className="mt-5 flex items-center justify-center gap-2 text-xs text-foreground/60">
                <Lock className="h-3.5 w-3.5" />
                Thông tin của bạn được bảo mật. Mình ghét spam y như bạn vậy.
              </p>
            </>
          )}
        </form>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="relative border-t border-border/50 bg-background py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-xs text-foreground/50 md:flex-row lg:px-10">
        <div className="flex items-center gap-2.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-brand to-brand-deep">
            <Zap className="h-3.5 w-3.5 text-primary-foreground" strokeWidth={2.5} />
          </div>
          <span className="font-semibold uppercase tracking-[0.2em] text-foreground/70">
            Trần Bảo Duy
          </span>
        </div>
        <p>© 2026 Fluent Funnel. Made with focus in Vietnam.</p>
      </div>
    </footer>
  );
}
