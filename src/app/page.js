'use client';
import { useLanguage } from './LanguageContext';
import Navbar from './components/Navbar';
import Image from 'next/image';
import Link from 'next/link';

export default function LandingPage() {
  const { language } = useLanguage();
  const isRTL = language === 'ar';
  
  const text = {
    ar: {
      heroTitle: 'منصة التسوق الأفضل للشركات والعملاء',
      heroSubtitle: 'اكتشف شركات وتجارات مميزة واستثمر',
      ctaButton: 'انضم للقائمة الآن',
      forBusiness: 'هل أنت صاحب عمل؟',
      businessLink: 'سجل شركتك',
      featuresTitle: 'لماذا تختارنا',
      feature1Title: 'تجربة تقييم للشركات متكاملة',
      feature1Desc: 'واجهة سهلة الاستخدام تجعل التسوق ممتعًا وبسيطًا',
      feature2Title: 'منتجات فريدة',
      feature2Desc: 'اكتشف منتجات مميزة لا تجدها في أي مكان آخر',
      feature3Title: 'دعم محلي',
      feature3Desc: 'ادعم الشركات المحلية وساهم في نمو الاقتصاد',
      testimonialsTitle: 'ماذا يقول عملاؤنا',
      testimonial1: 'أفضل منصة تسوق استخدمتها على الإطلاق. المنتجات فريدة والخدمة ممتازة!',
      testimonial2: 'سهلت علي العثور على منتجات مميزة لمنزلي. أنصح بها بشدة!',
      testimonial3: 'كصاحب شركة، ساعدتني المنصة على الوصول لعملاء جدد وزيادة مبيعاتي.',
      ctaTitle: 'جاهز للبدء؟',
      ctaSubtitle: 'انضم للقائمة الآن واحصل على إشعار عند إطلاق المنصة',
      ctaButtonFinal: 'انضم للقائمة'
    },
    en: {
      heroTitle: 'The Best Marketplace for Businesses and Customers',
      heroSubtitle: 'Discover unique businesses nationawide and invest',
      ctaButton: 'Join Waitlist Now',
      forBusiness: 'Are you a business owner?',
      businessLink: 'Register your business',
      featuresTitle: 'Why Choose Us',
      feature1Title: 'Seamless Shopping Experience',
      feature1Desc: 'User-friendly interface makes shopping enjoyable and simple',
      feature2Title: 'Unique Products',
      feature2Desc: 'Discover special products you won\'t find anywhere else',
      feature3Title: 'Support Local',
      feature3Desc: 'Support local businesses and contribute to economic growth',
      testimonialsTitle: 'What Our Customers Say',
      testimonial1: 'Best shopping platform I\'ve ever used. Unique products and excellent service!',
      testimonial2: 'Made it easy to find special products for my home. Highly recommend!',
      testimonial3: 'As a business owner, the platform helped me reach new customers and increase sales.',
      ctaTitle: 'Ready to Get Started?',
      ctaSubtitle: 'Join the waitlist now and get notified when we launch',
      ctaButtonFinal: 'Join Waitlist'
    }
  };

  return (
    <div className={`min-h-screen ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
            <h1 className={`text-4xl md:text-5xl font-bold text-gray-800 mb-4 ${isRTL ? 'md:text-right' : 'md:text-left'}`}>
              {text[language].heroTitle}
            </h1>
            <p className={`text-xl text-gray-600 mb-8 ${isRTL ? 'md:text-right' : 'md:text-left'}`}>
              {text[language].heroSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link 
                href="https://docs.google.com/forms/d/e/1FAIpQLSd9ngCSEXyBUzRFBSugz082_DJ6RtvvwkEfOUmFgbs2ZNZ72w/viewform?usp=header"
                className="px-6 py-3 bg-[#4A90E2] text-white rounded-lg hover:bg-[#3A80D2] transition-colors text-center"
              >
                {text[language].ctaButton}
              </Link>
              <div className={`flex items-center justify-center md:justify-start ${isRTL ? 'flex-row-reverse' : ''}`}>
                <span className="text-gray-600 mx-2">{text[language].forBusiness}</span>
                <Link 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSd9ngCSEXyBUzRFBSugz082_DJ6RtvvwkEfOUmFgbs2ZNZ72w/viewform?usp=header"
                  className="text-[#4A90E2] hover:underline"
                >
                  {text[language].businessLink}
                </Link>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative h-64 md:h-96 w-full">
              <div className="w-full h-full bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-[#4A90E2] text-xl font-semibold">Image To Be Filled</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            {text[language].featuresTitle}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="w-16 h-16 bg-[#4A90E2] rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                {text[language].feature1Title}
              </h3>
              <p className="text-gray-600 text-center">
                {text[language].feature1Desc}
              </p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="w-16 h-16 bg-[#4A90E2] rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                {text[language].feature2Title}
              </h3>
              <p className="text-gray-600 text-center">
                {text[language].feature2Desc}
              </p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="w-16 h-16 bg-[#4A90E2] rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                {text[language].feature3Title}
              </h3>
              <p className="text-gray-600 text-center">
                {text[language].feature3Desc}
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            {text[language].testimonialsTitle}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className={`flex items-center mb-4 ${isRTL ? 'rtl' : ''}`}>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-[#4A90E2] font-bold">S</span>
                </div>
                <div className={`${isRTL ? 'mr-4' : 'ml-4'}`}>
                  <h4 className="font-semibold">Faris</h4>
                  <div className={`flex text-yellow-400 ${isRTL ? 'justify-end' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className={`text-gray-600 ${isRTL ? 'text-right' : 'text-left'}`}>
                {text[language].testimonial1}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className={`flex items-center mb-4 ${isRTL ? 'rtl' : ''}`}>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-[#4A90E2] font-bold">M</span>
                </div>
                <div className={`${isRTL ? 'mr-4' : 'ml-4'}`}>
                  <h4 className="font-semibold">Thamir</h4>
                  <div className={`flex text-yellow-400 ${isRTL ? 'justify-end' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className={`text-gray-600 ${isRTL ? 'text-right' : 'text-left'}`}>
                {text[language].testimonial2}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className={`flex items-center mb-4 ${isRTL ? 'rtl' : ''}`}>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-[#4A90E2] font-bold">A</span>
                </div>
                <div className={`${isRTL ? 'mr-4' : 'ml-4'}`}>
                  <h4 className="font-semibold">Ahmed</h4>
                  <div className={`flex text-yellow-400 ${isRTL ? 'justify-end' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className={`text-gray-600 ${isRTL ? 'text-right' : 'text-left'}`}>
                {text[language].testimonial3}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            {text[language].ctaTitle}
          </h2>
          <p className="text-xl mb-8">
            {text[language].ctaSubtitle}
          </p>
          <Link 
            href="https://docs.google.com/forms/d/e/1FAIpQLSd9ngCSEXyBUzRFBSugz082_DJ6RtvvwkEfOUmFgbs2ZNZ72w/viewform?usp=header"
            className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors text-lg font-semibold"
          >
            {text[language].ctaButtonFinal}
          </Link>
        </div>
      </section>
    </div>
  );
}