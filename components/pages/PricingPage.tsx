interface PricingPageProps {
  isDarkMode: boolean;
}

export function PricingPage({ isDarkMode }: PricingPageProps) {
  const handlePlanAction = (planName: string) => {
    if (planName === 'Pro') {
      window.open('https://discord.gg/eDBmRg7Vns', '_blank');
    } else if (planName === 'Enterprise') {
      window.open('https://discord.gg/eDBmRg7Vns', '_blank');
    }
  };

  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for personal use and basic security scanning",
      features: [
        "500 file scans per month",
        "100 URL scans per month", 
        "20+ antivirus engines",
        "Basic scan history",
        "Email support"
      ],
      limitations: [
        "Monthly scan limits",
        "Standard support"
      ],
      popular: false,
      cta: "Get Started Free"
    },
    {
      name: "Pro",
      price: "$1",
      period: "per month",
      description: "Ideal for professionals and small businesses",
      features: [
        "5,000 file scans per month",
        "1,000 URL scans per month",
        "20+ antivirus engines", 
        "Advanced scan history",
        "Priority email support",
        "API access",
        "Batch scanning",
        "Export reports"
      ],
      limitations: [],
      popular: true,
      cta: "Upgrade to Pro"
    },
    {
      name: "Enterprise",
      price: "$3",
      period: "per month",
      description: "For organizations requiring high-volume scanning",
      features: [
        "Unlimited scans",
        "20+ antivirus engines",
        "Complete scan history",
        "24/7 phone support",
        "Full API access",
        "White-label options",
        "Custom integrations",
        "SLA guarantee",
        "Dedicated account manager"
      ],
      limitations: [],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const faqs = [
    {
      question: "How does the free tier work?",
      answer: "The free tier provides 500 file scans and 100 URL scans per month, with access to all 20+ antivirus engines and basic features."
    },
    {
      question: "What happens if I exceed my scan limits?",
      answer: "You'll receive a notification when approaching your limit. You can upgrade your plan or wait for the next billing cycle for limits to reset."
    },
    {
      question: "Is my data secure?",
      answer: "Yes, all scanning is performed client-side. Your files never leave your device, ensuring complete privacy and security."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes, you can cancel your subscription at any time. Your plan will remain active until the end of your billing period."
    }
  ];

  return (
    <div className="flex-1 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 ${isDarkMode 
            ? 'bg-gradient-to-r from-cyan-500/20 to-green-500/20 border border-cyan-500/30' 
            : 'bg-gradient-to-r from-cyan-500/10 to-green-500/10 border border-cyan-500/30'
          }`}>
            <svg className={`w-10 h-10 ${isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className={`text-4xl font-bold mb-4 ${isDarkMode 
            ? 'bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent'
            : 'bg-gradient-to-r from-cyan-600 to-green-600 bg-clip-text text-transparent'
          }`}>
            Simple, Transparent Pricing
          </h1>
          <p className={`text-xl max-w-3xl mx-auto ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            Choose the perfect plan for your security needs. All plans include access to 20+ leading antivirus engines and comprehensive threat analysis.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl border transition-all duration-300 hover:scale-105 ${
                plan.popular
                  ? isDarkMode 
                    ? 'bg-gradient-to-br from-cyan-500/10 to-green-500/10 border-cyan-500/50 shadow-2xl shadow-cyan-500/25' 
                    : 'bg-gradient-to-br from-cyan-500/5 to-green-500/5 border-cyan-500/50 shadow-xl shadow-cyan-500/25'
                  : isDarkMode
                    ? 'bg-slate-900/70 border-slate-700/50 shadow-2xl'
                    : 'bg-white/90 border-slate-200/60 shadow-xl shadow-slate-200/50'
              } backdrop-blur-sm`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-cyan-500 to-green-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center gap-2 mb-4">
                  <span className={`text-4xl font-bold ${isDarkMode 
                    ? 'bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent'
                    : 'bg-gradient-to-r from-cyan-600 to-green-600 bg-clip-text text-transparent'
                  }`}>
                    {plan.price}
                  </span>
                  <span className={`${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    {plan.period}
                  </span>
                </div>
                <p className={`${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  {plan.description}
                </p>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={`${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                      {feature}
                    </span>
                  </div>
                ))}
                
                {plan.limitations.map((limitation, limitIndex) => (
                  <div key={limitIndex} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className={`${isDarkMode ? 'text-slate-500' : 'text-slate-500'}`}>
                      {limitation}
                    </span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-3 rounded-xl font-medium transition-all duration-200 hover:scale-105 ${
                plan.popular
                  ? 'bg-gradient-to-r from-cyan-500 to-green-500 text-white hover:from-cyan-600 hover:to-green-600 shadow-lg'
                  : isDarkMode
                    ? 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/70 border border-slate-600/50'
                    : 'bg-slate-100/80 text-slate-700 hover:bg-slate-200/80 border border-slate-200/60'
              }`} onClick={() => handlePlanAction(plan.name)}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className={`p-8 rounded-2xl border ${isDarkMode 
          ? 'bg-slate-900/70 border-slate-700/50 shadow-2xl' 
          : 'bg-white/90 border-slate-200/60 shadow-xl shadow-slate-200/50'
        } backdrop-blur-sm`}>
          <h2 className={`text-2xl font-bold mb-8 text-center ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div key={index}>
                <h3 className={`font-bold mb-3 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  {faq.question}
                </h3>
                <p className={`${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}