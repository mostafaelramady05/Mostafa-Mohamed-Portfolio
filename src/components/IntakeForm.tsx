import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Send, RotateCcw, Loader2, CheckCircle2 } from 'lucide-react';

const content = {
  en: {
    title: 'Data & BI Project Inquiry',
    desc: 'Please provide the details below to help me understand your data infrastructure and business objectives.',
    sec1: '1. Client Identity',
    lblName: 'Full Name & Job Title *',
    lblEmail: 'Email Address *',
    lblWhatsapp: 'WhatsApp / Phone Number *',
    lblCompany: 'Company Name & Industry',
    sec2: '2. Data Infrastructure',
    lblDataLoc: 'Where does your data currently reside?',
    chkSheet: 'Spreadsheets (Excel / Google Sheets)',
    chkDb: 'Relational DBs (SQL, Cloud ERPs)',
    sec3: '3. Project Scope',
    lblProblem: 'Describe the core business problem you are trying to solve: *',
    sec4: '4. Logistics',
    lblBudget: 'Estimated Budget Range',
    btnSubmit: 'Submit Inquiry',
    btnProcessing: 'Processing...',
    errNetwork: 'Failed to submit. Please try again.',
    succTitle: 'Inquiry Received',
    succDesc: 'Thank you. I will review your submission and contact you shortly.',
    budgetOptions: [
      { val: '', text: 'Select range' },
      { val: 'Under $500', text: 'Under $500 (Approx. 1,800 SAR / 24,000 EGP)' },
      { val: '$500 - $1,500', text: '$500 - $1,500 (1,800 - 5,600 SAR)' },
      { val: '$1,500 - $5,000', text: '$1,500 - $5,000 (5,600 - 18,700 SAR)' },
      { val: '$5,000+', text: '$5,000+ (18,700+ SAR)' },
    ],
  },
  ar: {
    title: 'طلب استشارة وبناء أنظمة بيانات',
    desc: 'يرجى تقديم التفاصيل أدناه لمساعدتي في فهم البنية التحتية لبياناتك وأهدافك التجارية.',
    sec1: '١. بيانات العميل',
    lblName: 'الاسم بالكامل والمسمى الوظيفي *',
    lblEmail: 'البريد الإلكتروني *',
    lblWhatsapp: 'رقم الموبايل / الواتساب *',
    lblCompany: 'اسم الشركة والمجال',
    sec2: '٢. البنية التحتية للبيانات',
    lblDataLoc: 'أين تحتفظ ببياناتك حالياً؟',
    chkSheet: 'جداول البيانات (Excel / Google Sheets)',
    chkDb: 'قواعد البيانات أو الأنظمة (SQL / ERP)',
    sec3: '٣. نطاق المشروع',
    lblProblem: 'صف المشكلة الأساسية التي تواجهها أو النظام المطلوب: *',
    sec4: '٤. التفاصيل اللوجستية',
    lblBudget: 'الميزانية التقديرية للمشروع',
    btnSubmit: 'إرسال الطلب',
    btnProcessing: 'جاري الإرسال...',
    errNetwork: 'فشل الإرسال. يرجى المحاولة مرة أخرى.',
    succTitle: 'تم استلام طلبك بنجاح',
    succDesc: 'شكراً لك. سأقوم بمراجعة التفاصيل والتواصل معك في أقرب وقت عبر الواتساب أو الإيميل.',
    budgetOptions: [
      { val: '', text: 'اختر الميزانية التقديرية' },
      { val: 'Under $500', text: 'أقل من 500$ (حوالي 1,800 ريال / 24,000 جنيه)' },
      { val: '$500 - $1,500', text: '500$ - 1,500$ (1,800 - 5,600 ريال)' },
      { val: '$1,500 - $5,000', text: '1,500$ - 5,000$ (5,600 - 18,700 ريال)' },
      { val: '$5,000+', text: 'أكثر من 5,000$ (أكثر من 18,700 ريال)' },
    ],
  },
};

export default function IntakeForm() {
  // هنستخدم خدمة Web3Forms المجانية والآمنة
  const WEB3FORMS_URL = 'https://api.web3forms.com/submit';
  // 🔴 حط الـ Access Key بتاعك هنا 🔴
  const ACCESS_KEY = 'YOUR_ACCESS_KEY_HERE'; 

  const [lang, setLang] = useState('en');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    whatsapp: '',
    dataLocation: [] as string[],
    problem: '',
    budget: '',
  });

  const t = content[lang as keyof typeof content];
  const isRTL = lang === 'ar';

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxToggle = (value: string, checked: boolean) => {
    setFormData((prev) => {
      if (checked) {
        return { ...prev, dataLocation: [...prev.dataLocation, value] };
      }
      return { ...prev, dataLocation: prev.dataLocation.filter((item) => item !== value) };
    });
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, budget: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    // تجهيز البيانات للإرسال
    const payload = {
      access_key: ACCESS_KEY,
      subject: `New Project Inquiry from ${formData.fullName}`,
      from_name: formData.fullName,
      ...formData,
      dataLocation: formData.dataLocation.length > 0 ? formData.dataLocation.join(' | ') : 'Not specified',
      languagePreference: lang === 'en' ? 'English' : 'Arabic',
    };

    try {
      const response = await fetch(WEB3FORMS_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(payload),
      });
      if (response.ok) {
        setStatus('success');
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      console.error('Submission Error:', error);
      setStatus('error');
    }
  };

  const resetForm = () => {
    setStatus('idle');
    setFormData({ fullName: '', company: '', email: '', whatsapp: '', dataLocation: [], problem: '', budget: '' });
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5 },
    }),
  };

  return (
    <div className="min-h-screen bg-background text-foreground py-12 px-4 sm:px-6 lg:px-8 transition-colors" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-3xl mx-auto">
        {/* Language Toggle */}
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className={`flex mb-6 ${isRTL ? 'justify-start' : 'justify-end'}`}>
          <div className="bg-card rounded-lg p-1 shadow-sm border border-border inline-flex">
            <button type="button" onClick={() => setLang('en')} className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${lang === 'en' ? 'bg-primary/20 text-primary' : 'text-muted-foreground hover:text-foreground'}`}>English</button>
            <button type="button" onClick={() => setLang('ar')} className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${lang === 'ar' ? 'bg-primary/20 text-primary' : 'text-muted-foreground hover:text-foreground'}`}>العربية</button>
          </div>
        </motion.div>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-10 text-center">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl gradient-text">{t.title}</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">{t.desc}</p>
        </motion.div>

        {/* Card */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="bg-card/40 backdrop-blur-xl border border-border/50 rounded-2xl overflow-hidden neon-glow">
          {status === 'success' ? (
            <div className="p-10 text-center">
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 200, damping: 15 }} className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-6">
                <CheckCircle2 className="h-8 w-8 text-primary" />
              </motion.div>
              <h3 className="text-2xl font-bold text-foreground mb-2">{t.succTitle}</h3>
              <p className="text-muted-foreground max-w-md mx-auto">{t.succDesc}</p>
              <Button variant="outline" onClick={resetForm} className="mt-8 gap-2"><RotateCcw className="h-4 w-4" />{lang === 'en' ? 'Submit another inquiry' : 'إرسال طلب آخر'}</Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-6 sm:p-10 space-y-10">
              {/* SECTION 1 */}
              <motion.div custom={0} initial="hidden" animate="visible" variants={sectionVariants}>
                <div className="border-b border-border/50 pb-4 mb-6"><h2 className="text-xl font-semibold text-foreground">{t.sec1}</h2></div>
                <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">{t.lblName}</Label>
                    <Input id="fullName" name="fullName" type="text" required value={formData.fullName} onChange={handleInputChange} className="bg-background/50" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">{t.lblCompany}</Label>
                    <Input id="company" name="company" type="text" value={formData.company} onChange={handleInputChange} className="bg-background/50" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">{t.lblEmail}</Label>
                    <Input id="email" name="email" type="email" required value={formData.email} onChange={handleInputChange} className="bg-background/50" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="whatsapp">{t.lblWhatsapp}</Label>
                    <Input id="whatsapp" name="whatsapp" type="tel" required value={formData.whatsapp} onChange={handleInputChange} className="bg-background/50" dir="ltr" placeholder="+20 10X XXX XXXX" />
                  </div>
                </div>
              </motion.div>

              {/* SECTION 2 */}
              <motion.div custom={1} initial="hidden" animate="visible" variants={sectionVariants}>
                <div className="border-b border-border/50 pb-4 mb-6"><h2 className="text-xl font-semibold text-foreground">{t.sec2}</h2></div>
                <div className="space-y-4">
                  <Label>{t.lblDataLoc}</Label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <label className="flex items-center gap-3 cursor-pointer bg-background/50 rounded-lg p-3 border border-border/50 hover:border-primary/50 transition-colors">
                      <Checkbox checked={formData.dataLocation.includes('Spreadsheets')} onCheckedChange={(checked) => handleCheckboxToggle('Spreadsheets', checked as boolean)} />
                      <span className="text-sm text-muted-foreground">{t.chkSheet}</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer bg-background/50 rounded-lg p-3 border border-border/50 hover:border-primary/50 transition-colors">
                      <Checkbox checked={formData.dataLocation.includes('Databases / ERP')} onCheckedChange={(checked) => handleCheckboxToggle('Databases / ERP', checked as boolean)} />
                      <span className="text-sm text-muted-foreground">{t.chkDb}</span>
                    </label>
                  </div>
                </div>
              </motion.div>

              {/* SECTION 3 */}
              <motion.div custom={2} initial="hidden" animate="visible" variants={sectionVariants}>
                <div className="border-b border-border/50 pb-4 mb-6"><h2 className="text-xl font-semibold text-foreground">{t.sec3}</h2></div>
                <div className="space-y-2">
                  <Label htmlFor="problem">{t.lblProblem}</Label>
                  <Textarea id="problem" name="problem" rows={4} required value={formData.problem} onChange={handleInputChange} className="bg-background/50" />
                </div>
              </motion.div>

              {/* SECTION 4 */}
              <motion.div custom={3} initial="hidden" animate="visible" variants={sectionVariants}>
                <div className="border-b border-border/50 pb-4 mb-6"><h2 className="text-xl font-semibold text-foreground">{t.sec4}</h2></div>
                <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label>{t.lblBudget}</Label>
                    <Select value={formData.budget} onValueChange={handleSelectChange}>
                      <SelectTrigger className="bg-background/50">
                        <SelectValue placeholder={t.budgetOptions[0].text} />
                      </SelectTrigger>
                      <SelectContent>
                        {t.budgetOptions.map((opt, idx) => (
                          <SelectItem key={idx} value={opt.val} disabled={idx === 0}>{opt.text}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </motion.div>

              {/* Submit */}
              <motion.div custom={4} initial="hidden" animate="visible" variants={sectionVariants} className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                {status === 'error' && <div className="text-destructive text-sm font-medium">{t.errNetwork}</div>}
                <Button type="submit" disabled={status === 'submitting'} className={`w-full sm:w-auto ${isRTL ? 'sm:mr-auto' : 'sm:ml-auto'} gap-2`}>
                  {status === 'submitting' ? <><Loader2 className="h-4 w-4 animate-spin" />{t.btnProcessing}</> : <><Send className="h-4 w-4" />{t.btnSubmit}</>}
                </Button>
              </motion.div>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}
