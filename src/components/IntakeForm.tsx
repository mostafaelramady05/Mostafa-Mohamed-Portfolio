import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2, RotateCcw, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const content = {
  en: {
    title: "Start a Project",
    desc: "Tell me what is happening in the business today and what you want the data or workflow to do better.",
    identity: "Contact details",
    project: "Project context",
    name: "Full name *",
    email: "Email address *",
    company: "Company / industry",
    whatsapp: "WhatsApp / phone (optional)",
    problem: "Business problem *",
    problemHint: "What is difficult, slow, unclear, or repetitive today?",
    source: "Current data source / system",
    sourceHint: "Excel, Google Sheets, ERP, SQL database, website, PDFs, invoices...",
    repetitive: "Repetitive manual process, if any",
    repetitiveHint: "Example: invoice entry, copying reports, cleaning files, recurring exports...",
    outcome: "Desired outcome *",
    outcomeHint: "Dashboard, reporting system, automated workflow, cleaner database, or something else?",
    budget: "Budget range",
    submit: "Send Project Details",
    submitting: "Sending...",
    error: "The form could not be sent. Please try again.",
    successTitle: "Project details received",
    successDesc: "Thanks. I’ll review the context and reply using the contact details you provided.",
    another: "Send another inquiry",
    ranges: ["Not sure yet", "Under $500", "$500 - $1,500", "$1,500 - $5,000", "$5,000+"],
  },
  ar: {
    title: "ابدأ مشروع",
    desc: "اشرح لي المشكلة الحالية في الشغل والنتيجة التي تريد الوصول إليها من البيانات أو الأتمتة.",
    identity: "بيانات التواصل",
    project: "تفاصيل المشروع",
    name: "الاسم بالكامل *",
    email: "البريد الإلكتروني *",
    company: "الشركة / المجال",
    whatsapp: "واتساب / موبايل (اختياري)",
    problem: "مشكلة العمل الحالية *",
    problemHint: "ما الشيء البطيء أو غير الواضح أو المتكرر يدوياً حالياً؟",
    source: "مصدر البيانات / النظام الحالي",
    sourceHint: "Excel، Google Sheets، ERP، SQL، موقع، PDF، فواتير...",
    repetitive: "العملية اليدوية المتكررة إن وجدت",
    repetitiveHint: "مثال: إدخال فواتير، نسخ تقارير، تنظيف ملفات، تصدير بيانات متكرر...",
    outcome: "النتيجة المطلوبة *",
    outcomeHint: "Dashboard، نظام تقارير، Workflow آلي، قاعدة بيانات منظمة، أو غير ذلك؟",
    budget: "الميزانية التقريبية",
    submit: "إرسال تفاصيل المشروع",
    submitting: "جاري الإرسال...",
    error: "تعذر إرسال الطلب. حاول مرة أخرى.",
    successTitle: "تم استلام تفاصيل المشروع",
    successDesc: "شكراً. سأراجع التفاصيل وأتواصل معك من خلال بيانات التواصل التي أرسلتها.",
    another: "إرسال طلب آخر",
    ranges: ["لم أحدد بعد", "أقل من 500$", "500$ - 1,500$", "1,500$ - 5,000$", "أكثر من 5,000$"],
  },
};

type FormState = {
  fullName: string;
  email: string;
  company: string;
  whatsapp: string;
  businessProblem: string;
  dataSource: string;
  repetitiveProcess: string;
  desiredOutcome: string;
  budget: string;
};

const initialForm: FormState = {
  fullName: "",
  email: "",
  company: "",
  whatsapp: "",
  businessProblem: "",
  dataSource: "",
  repetitiveProcess: "",
  desiredOutcome: "",
  budget: "",
};

export default function IntakeForm() {
  const WEB3FORMS_URL = "https://api.web3forms.com/submit";
  const ACCESS_KEY = "a31ef162-aa1a-42fa-a588-65879fff4f18";
  const [lang, setLang] = useState<"en" | "ar">("en");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState<FormState>(initialForm);
  const t = content[lang];
  const isRTL = lang === "ar";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const response = await fetch(WEB3FORMS_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `New Data & Automation Project Inquiry from ${formData.fullName}`,
          from_name: formData.fullName,
          languagePreference: lang === "en" ? "English" : "Arabic",
          ...formData,
        }),
      });
      if (!response.ok) throw new Error("Submission failed");
      setStatus("success");
    } catch (error) {
      console.error("Submission Error:", error);
      setStatus("error");
    }
  };

  const resetForm = () => {
    setFormData(initialForm);
    setStatus("idle");
  };

  return (
    <section id="contact" className="py-24 sm:py-28 bg-muted/25 border-t border-border/60 scroll-mt-20" dir={isRTL ? "rtl" : "ltr"}>
      <div className="container max-w-5xl mx-auto px-4">
        <div className="grid lg:grid-cols-[0.72fr_1.28fr] gap-8 lg:gap-12 items-start">
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className={`flex mb-6 ${isRTL ? "justify-start" : "justify-start"}`}>
              <div className="inline-flex rounded-xl border border-border bg-card p-1">
                <button type="button" onClick={() => setLang("en")} className={`px-3 py-1.5 rounded-lg text-sm font-semibold ${lang === "en" ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}>English</button>
                <button type="button" onClick={() => setLang("ar")} className={`px-3 py-1.5 rounded-lg text-sm font-semibold ${lang === "ar" ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}>العربية</button>
              </div>
            </div>
            <p className="text-sm font-semibold text-primary mb-3">{isRTL ? "تواصل" : "Project inquiry"}</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-5">{t.title}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{t.desc}</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-sm">
            {status === "success" ? (
              <div className="py-10 text-center">
                <div className="mx-auto w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-5"><CheckCircle2 className="w-7 h-7 text-primary" /></div>
                <h3 className="text-2xl font-bold mb-2">{t.successTitle}</h3>
                <p className="text-muted-foreground max-w-lg mx-auto">{t.successDesc}</p>
                <Button variant="outline" onClick={resetForm} className="mt-7 rounded-xl"><RotateCcw className="w-4 h-4 mr-2" />{t.another}</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <fieldset>
                  <legend className="text-lg font-bold mb-5">{t.identity}</legend>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2"><Label htmlFor="fullName">{t.name}</Label><Input id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required /></div>
                    <div className="space-y-2"><Label htmlFor="email">{t.email}</Label><Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required /></div>
                    <div className="space-y-2"><Label htmlFor="company">{t.company}</Label><Input id="company" name="company" value={formData.company} onChange={handleChange} /></div>
                    <div className="space-y-2"><Label htmlFor="whatsapp">{t.whatsapp}</Label><Input id="whatsapp" name="whatsapp" type="tel" value={formData.whatsapp} onChange={handleChange} dir="ltr" /></div>
                  </div>
                </fieldset>

                <fieldset className="border-t border-border pt-7">
                  <legend className="text-lg font-bold mb-5">{t.project}</legend>
                  <div className="space-y-5">
                    <div className="space-y-2"><Label htmlFor="businessProblem">{t.problem}</Label><Textarea id="businessProblem" name="businessProblem" rows={3} value={formData.businessProblem} onChange={handleChange} placeholder={t.problemHint} required /></div>
                    <div className="space-y-2"><Label htmlFor="dataSource">{t.source}</Label><Input id="dataSource" name="dataSource" value={formData.dataSource} onChange={handleChange} placeholder={t.sourceHint} /></div>
                    <div className="space-y-2"><Label htmlFor="repetitiveProcess">{t.repetitive}</Label><Textarea id="repetitiveProcess" name="repetitiveProcess" rows={2} value={formData.repetitiveProcess} onChange={handleChange} placeholder={t.repetitiveHint} /></div>
                    <div className="space-y-2"><Label htmlFor="desiredOutcome">{t.outcome}</Label><Textarea id="desiredOutcome" name="desiredOutcome" rows={3} value={formData.desiredOutcome} onChange={handleChange} placeholder={t.outcomeHint} required /></div>
                    <div className="space-y-2 max-w-sm"><Label htmlFor="budget">{t.budget}</Label><select id="budget" name="budget" value={formData.budget} onChange={handleChange} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"><option value="">—</option>{t.ranges.map((range) => <option key={range} value={range}>{range}</option>)}</select></div>
                  </div>
                </fieldset>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-border pt-6">
                  {status === "error" ? <p className="text-sm font-medium text-destructive">{t.error}</p> : <span />}
                  <Button type="submit" disabled={status === "submitting"} className="rounded-xl sm:min-w-44">
                    {status === "submitting" ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" />{t.submitting}</> : <><Send className="w-4 h-4 mr-2" />{t.submit}</>}
                  </Button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
