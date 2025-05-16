import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from 'lucide-react';
const Index = () => {
  const socialLinks = [{
    name: "LinkedIn",
    nameFa: "لینکدین",
    url: "https://www.linkedin.com/in/soheilnikzad/"
  }, {
    name: "GitHub",
    nameFa: "گیت‌هاب",
    url: "https://github.com/SoheilNikzad"
  }, {
    name: "Telegram",
    nameFa: "تلگرام",
    url: "https://t.me/SoheilNikzad"
  }, {
    name: "Instagram",
    nameFa: "اینستاگرام",
    url: "https://www.instagram.com/amuzanjirbaaf/"
  }, {
    name: "Facebook",
    nameFa: "فیسبوک",
    url: "https://www.facebook.com/mirsoheilnikzad/"
  }];
  return <div className="min-h-screen bg-white flex items-center justify-center py-10">
      <Card className="w-full max-w-3xl mx-4 border-none shadow-none">
        <CardContent className="p-6">
          <div className="text-center mb-8">
            <div className="mb-4">
              <h1 className="text-3xl font-lexend mb-1">Soheil Nikzad</h1>
              <h1 className="text-3xl font-vazirmatn">سهیل نیک‌زاد</h1>
            </div>
            
            <div className="mb-8 border-t-4 border-bitcoin-orange pt-6 mt-6">
              <p className="text-lg font-lexend mb-2">
                Hello! Welcome to my personal page. To access my social media profiles please click on the buttons below.
              </p>
              <p className="text-lg font-vazirmatn" dir="rtl">
                سلام! به صفحه شخصی من خوش آمدید. برای دسترسی به پروفایل های من در شبکه های اجتماعی روی دکمه های زیر کلیک کنید.
              </p>
            </div>
            
            <div className="space-y-3 mb-8">
              {socialLinks.map((link, index) => <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="block">
                  <Button variant="outline" className="w-full md:w-3/4 lg:w-2/3 py-6 flex items-center justify-between bg-white hover:bg-gray-50 border border-gray-200 text-black text-center">
                    <span className="font-lexend">{link.name}</span>
                    <div className="flex items-center">
                      <span className="font-vazirmatn mx-2">{link.nameFa}</span>
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </div>
                  </Button>
                </a>)}
            </div>
            
            <div className="mt-12 border-t border-gray-200 pt-6 text-gray-600">
              <p className="font-lexend mb-1">Thank you for visit.</p>
              <p className="font-vazirmatn" dir="rtl">با تشکر از بازدید شما.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>;
};
export default Index;