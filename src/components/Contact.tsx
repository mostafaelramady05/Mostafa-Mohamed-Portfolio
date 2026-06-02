import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Linkedin, Github, Globe } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  message: z.string().trim().min(1, "Message is required").max(2000, "Message must be less than 2000 characters"),
});

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.currentTarget;
    const formData = new FormData(form);
    const parsed = contactSchema.safeParse({
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    });
    if (!parsed.success) {
      toast({ variant: "destructive", title: "Invalid input", description: parsed.error.issues[0].message });
      setIsSubmitting(false);
      return;
    }
    try {
      const { error } = await supabase.from("contact_submissions").insert([{
        full_name: parsed.data.name,
        email: parsed.data.email,
        message: parsed.data.message,
        submitted_at: new Date().toISOString(),
      }]);
      if (error) throw error;
      toast({ title: "Message sent successfully!", description: "Thank you for reaching out. I'll get back to you soon." });
      form.reset();
    } catch {
      toast({ variant: "destructive", title: "Error sending message", description: "Please try again later or contact me directly via email." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="gradient-text">Get In Touch</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Send Me a Message</CardTitle>
                <CardDescription className="text-muted-foreground">I'll get back to you as soon as possible.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input required id="name" name="name" placeholder="Your full name" className="bg-background border-border" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input required id="email" name="email" type="email" placeholder="your.email@example.com" className="bg-background border-border" />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea required id="message" name="message" placeholder="Your message" rows={5} className="bg-background border-border" />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-border h-full">
              <CardHeader>
                <CardTitle className="text-foreground">Contact Information</CardTitle>
                <CardDescription className="text-muted-foreground">Let's connect! I'm open to opportunities.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="flex items-center space-x-3 text-foreground">
                  <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                  <a href="mailto:sohila.k.data@gmail.com" className="hover:text-primary transition-colors">sohila.k.data@gmail.com</a>
                </div>
                <div className="flex items-center space-x-3 text-foreground">
                  <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                  <a href="tel:+201114919021" className="hover:text-primary transition-colors">(+2) 01114919021</a>
                </div>
                <div className="flex items-center space-x-3 text-foreground">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Damietta, Egypt (Open to Remote & Hybrid Roles)</span>
                </div>
                <div className="flex items-center space-x-3 text-foreground">
                  <Linkedin className="h-5 w-5 text-primary flex-shrink-0" />
                  <a href="https://linkedin.com/in/sohilakabbas" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">linkedin.com/in/sohilakabbas</a>
                </div>
                <div className="flex items-center space-x-3 text-foreground">
                  <Github className="h-5 w-5 text-primary flex-shrink-0" />
                  <a href="https://github.com/Sohila-Khaled-Abbas" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">github.com/Sohila-Khaled-Abbas</a>
                </div>
                <div className="pt-4 text-muted-foreground text-sm">
                  Looking forward to collaborating on data-driven projects or discussing how I can help your organization leverage data for better decision making.
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
