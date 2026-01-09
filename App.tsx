import React, { useState, useEffect, useMemo } from 'react';
import { 
  Trophy, 
  CreditCard, 
  MapPin, 
  Gift, 
  Percent, 
  ShieldCheck, 
  ChevronRight, 
  ShoppingBag, 
  X, 
  Menu,
  CheckCircle2,
  Beer,
  Plane,
  Car,
  Hotel,
  Clock,
  Send,
  Loader2,
  UserPlus,
  Star,
  Flag,
  Waves,
  Lock,
  Truck,
  Shirt,
  Heart,
  Tag,
  TrendingUp,
  Target,
  BarChart3,
  DollarSign,
  Briefcase,
  Megaphone,
  Zap,
  ArrowUpRight,
  MousePointer2,
  FileText,
  RefreshCcw,
  Globe,
  Search,
  Landmark,
  Crown,
  LayoutGrid,
  Instagram,
  Youtube,
  Facebook,
  Linkedin,
  Twitter,
  Share2,
  HandHeart,
  ExternalLink,
  Music2,
  Mail,
  Users,
  Calendar,
  ChevronDown,
  Activity,
  Award,
  CircleCheck,
  Globe2,
  ShieldAlert,
  PieChart,
  LineChart,
  Wallet,
  Scale,
  Printer,
  Presentation,
  Copy,
  Check,
  Building2
} from 'lucide-react';
import { AgeGroup, CartItem, TournamentPlayer, Charity } from './types';
import { getReasonsToJoin } from './services/geminiService';

// --- Confetti Component ---

const Confetti = () => {
  const colors = ['#10b981', '#3b82f6', '#f59e0b', '#ef4444', '#8b5cf6'];
  return (
    <div className="fixed inset-0 pointer-events-none z-[120] overflow-hidden">
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 rounded-full animate-confetti"
          style={{
            backgroundColor: colors[Math.floor(Math.random() * colors.length)],
            left: `${Math.random() * 100}%`,
            top: `-20px`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 3}s`,
            opacity: Math.random(),
            transform: `scale(${Math.random()})`
          }}
        />
      ))}
      <style>{`
        @keyframes confetti {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }
        .animate-confetti {
          animation: confetti linear forwards;
        }
      `}</style>
    </div>
  );
};

// --- Printable Pitch Deck Component ---

const PitchDeck = ({ onClose }: { onClose: () => void }) => {
  const [copied, setCopied] = useState(false);
  
  const slides = [
    {
      title: "The International Amateur Golf Association (iAGA)",
      subtitle: "Unifying the Amateur Game through Local Leagues",
      content: "iAGA is the Home of the American Amateur Golf League. We unify players through local team structures, mirroring the competitive spirit and community of college sports programs.",
      metrics: ["PlayiAGA.org", "Charter Member Status", "Impact First"],
      icon: <Trophy className="w-20 h-20 text-emerald-800" />
    },
    {
      title: "The $49 Charter Proposition",
      subtitle: "Unbeatable Value & Team Identity",
      content: "One low fee unlocks 10% off green fees worldwide, age-group tournament eligibility, and a spot on a local team. Join the community at PlayiAGA.org.",
      metrics: ["Age Groups: 49 to 80+", "Local Team Ownership", "Charter Card Perks"],
      icon: <CreditCard className="w-20 h-20 text-emerald-800" />
    },
    {
      title: "Unit Economics & Team Revenue",
      subtitle: "Empowering Local Communities",
      content: "Every card sold supports local charitable initiatives. Pro Shops retain the majority of the sale, while Team Owners drive hyper-local engagement.",
      metrics: ["$29 Retained by Shop", "$20 Remitted to Charity", "Local Sponsor Integration"],
      icon: <DollarSign className="w-20 h-20 text-emerald-800" />
    },
    {
      title: "Conservative Growth Roadmap",
      subtitle: "Pilot to National Saturation",
      content: "Starting with a high-touch pilot of 200 leadership partners, iAGA scales through decentralized Team Owners and Section League managers.",
      metrics: ["Year 1: 60,000 Members", "Year 2: 1.2M Members", "Year 3: 4.5M Members"],
      icon: <BarChart3 className="w-20 h-20 text-emerald-800" />
    },
    {
      title: "Charitable Impact Ecosystem",
      subtitle: "Golf as a Force for Good",
      content: "Automated remittance to vetted charities ensures every swing supports global humanitarian efforts. $20 from every dues payment is donated.",
      metrics: ["Wounded Warriors", "Mercy Ships", "First Tee & More"],
      icon: <Heart className="w-20 h-20 text-rose-600" />
    },
    {
      title: "Technology: APEX & Scoring",
      subtitle: "The Future of Team Competition",
      content: "Real-time tournament tee sheets and net-scoring engines localized by zip code. APEX Pace of Play compliance integrated.",
      metrics: ["Team Leaderboards", "Zip Code Syncing", "Pace of Play Pledge"],
      icon: <Zap className="w-20 h-20 text-emerald-600" />
    },
    {
      title: "The Ask: Become a Founding Partner",
      subtitle: "Limited Team Ownership Slots",
      content: "Secure your Local Area Team or State Section League now. Founding memberships never increase. Join at PlayiAGA.org.",
      metrics: ["Local Team Ownership", "Section League Rights", "Immediate Activation"],
      icon: <Crown className="w-20 h-20 text-emerald-800" />
    }
  ];

  const handleCopyText = () => {
    const text = slides.map((s, i) => 
      `SLIDE ${i+1}: ${s.title}\nSubtitle: ${s.subtitle}\nDescription: ${s.content}\nPoints: ${s.metrics.join(', ')}`
    ).join('\n\n---\n\n');
    
    navigator.clipboard.writeText(`iAGA PITCH DECK STRATEGIC BRIEF\n\n${text}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-[200] bg-white overflow-y-auto print:static print:overflow-visible">
      <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-md p-6 border-b border-gray-100 flex justify-between items-center print:hidden">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-emerald-800 rounded-full flex items-center justify-center shadow-sm">
            <Trophy className="text-white w-6 h-6" />
          </div>
          <h2 className="text-xl font-black text-gray-900 uppercase tracking-tighter">iAGA Pitch Deck</h2>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={handleCopyText}
            className="flex items-center gap-2 px-5 py-2.5 bg-emerald-50 text-emerald-800 rounded-full font-bold hover:bg-emerald-100 transition-all border border-emerald-200"
          >
            {copied ? <><Check className="w-4 h-4" /> Copied!</> : <><Copy className="w-4 h-4" /> Copy Text Version</>}
          </button>
          <button 
            onClick={() => window.print()}
            className="flex items-center gap-2 px-6 py-2.5 bg-emerald-800 text-white rounded-full font-bold hover:bg-emerald-900 transition-all shadow-lg"
          >
            <Printer className="w-4 h-4" /> Print Deck
          </button>
          <button 
            onClick={onClose}
            className="p-3 bg-gray-100 text-gray-500 rounded-full hover:bg-gray-200 transition-all"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-12 space-y-12 print:p-0 print:space-y-0">
        {slides.map((slide, idx) => (
          <div key={idx} className="aspect-[16/9] bg-white border border-gray-100 rounded-[3rem] shadow-2xl p-20 flex flex-col justify-center relative overflow-hidden print:shadow-none print:border-none print:rounded-none print:m-0 print:break-after-page print:h-screen print:w-screen">
             <div className="absolute top-0 right-0 p-20 opacity-5 grayscale pointer-events-none">{slide.icon}</div>
             <div className="absolute bottom-10 right-20 text-gray-300 font-black text-sm print:hidden">Slide {idx + 1} / {slides.length}</div>
             <div className="mb-10 inline-flex items-center gap-2 text-emerald-800 font-black uppercase tracking-[0.3em] text-xs">
                <div className="w-6 h-px bg-emerald-800" /> iAGA STRATEGIC BRIEF
             </div>
             <h3 className="text-6xl font-black text-gray-900 mb-4 font-serif leading-tight">{slide.title}</h3>
             <h4 className="text-2xl font-bold text-emerald-700 mb-10 italic">{slide.subtitle}</h4>
             <p className="text-2xl text-gray-500 mb-12 leading-relaxed max-w-4xl">{slide.content}</p>
             <div className="flex flex-wrap gap-10">
               {slide.metrics.map((m, i) => (
                 <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-emerald-800" />
                    <span className="text-xl font-black text-gray-800 uppercase tracking-wide">{m}</span>
                 </div>
               ))}
             </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- UI Sub-Components ---

const ExecutiveSummary = () => (
  <section id="summary" className="py-24 bg-sky-50 overflow-hidden relative border-y border-sky-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 text-emerald-800 font-black uppercase tracking-[0.3em] text-xs mb-6">
          <Scale className="w-4 h-4" /> Strategic & Fiscal Brief
        </div>
        <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6 font-serif leading-tight">Executive Summary & <span className="text-emerald-700">Financials.</span></h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
          iAGA (International Amateur Golf Association) is the unified home of local team leagues. We empower owners and sponsors to treat amateur golf with the same prestige and community spirit as college athletic programs.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-sky-100 hover:shadow-2xl transition-all">
          <div className="w-14 h-14 bg-emerald-50 text-emerald-700 rounded-2xl flex items-center justify-center mb-8">
            <PieChart className="w-7 h-7" />
          </div>
          <h3 className="text-2xl font-black text-gray-900 mb-4 font-serif">Unit Economics ($49)</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b border-gray-50 pb-2">
              <span className="text-gray-500 font-medium">Pro Shop Margin</span>
              <span className="font-black text-emerald-700">+$29.00</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-50 pb-2">
              <span className="text-gray-500 font-medium">Charitable Donation</span>
              <span className="font-black text-rose-600">-$20.00</span>
            </div>
            <div className="flex justify-between items-center pt-2">
              <span className="text-gray-900 font-black uppercase tracking-widest text-xs">Gross Membership Price</span>
              <span className="font-black text-gray-900">$49.00</span>
            </div>
          </div>
          <div className="mt-8 p-4 bg-emerald-50 rounded-2xl">
             <div className="text-[10px] font-black text-emerald-800 uppercase tracking-widest mb-1">Impact Factor</div>
             <p className="text-xs text-emerald-900/70 leading-relaxed italic">Pro Shops retain 59% of every sale, creating a massive monthly operating capital lift without overhead.</p>
          </div>
        </div>

        <div className="bg-emerald-900 p-10 rounded-[3rem] shadow-2xl text-white relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform"><TrendingUp className="w-32 h-32" /></div>
          <div className="w-14 h-14 bg-white/10 text-emerald-400 rounded-2xl flex items-center justify-center mb-8 border border-white/10">
            <BarChart3 className="w-7 h-7" />
          </div>
          <h3 className="text-2xl font-black mb-4 font-serif text-emerald-400">Conservative Pro-Shop Projection</h3>
          <div className="space-y-8">
            <div>
              <div className="text-[10px] font-black uppercase tracking-widest text-emerald-400/60 mb-1">Monthly Shop Profit</div>
              <div className="text-5xl font-black">$2,900</div>
              <p className="text-xs text-white/50 mt-2">Based on 100 card sales per month</p>
            </div>
            <div className="pt-6 border-t border-white/10">
              <div className="text-[10px] font-black uppercase tracking-widest text-emerald-400/60 mb-1">Annual Operating Lift</div>
              <div className="text-5xl font-black text-emerald-400">$34,800</div>
              <p className="text-xs text-white/50 mt-2">12-Month recurring localized inflow</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-sky-100 hover:shadow-2xl transition-all">
          <div className="w-14 h-14 bg-rose-50 text-rose-600 rounded-2xl flex items-center justify-center mb-8">
            <Heart className="w-7 h-7" />
          </div>
          <h3 className="text-2xl font-black text-gray-900 mb-4 font-serif">Charter Scale Limit</h3>
          <p className="text-gray-600 mb-8 text-sm leading-relaxed">
            The Founding Charter phase is limited to the first **5,000 members** to maintain territory exclusivity and ensure high partner support.
          </p>
          <div className="space-y-4">
            <div className="p-6 bg-rose-50 rounded-2xl border border-rose-100">
              <div className="text-[10px] font-black text-rose-400 uppercase tracking-widest mb-1">Year 1 Charitable Contribution</div>
              <div className="text-3xl font-black text-rose-600">$1,200,000+</div>
            </div>
            <div className="flex items-center gap-3 px-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              <span className="text-xs font-black text-gray-400 uppercase tracking-widest">501(c)(3) Compliance Engine</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Hero = ({ onJoin }: { onJoin: () => void }) => (
  <section className="relative overflow-hidden bg-sky-50 pt-16 pb-24 lg:pt-32 lg:pb-40 border-b border-sky-100">
    <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
      <div className="absolute inset-0 bg-gradient-to-l from-transparent to-sky-50 z-10" />
      <img 
        src="https://images.unsplash.com/photo-1595180608757-3665a32ec421?auto=format&fit=crop&q=80&w=2000" 
        alt="Ocean View Golf Course" 
        className="w-full h-full object-cover"
      />
    </div>
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
      <div className="max-w-2xl">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-600 text-white text-sm font-bold mb-8 shadow-lg shadow-emerald-200">
          <Star className="w-4 h-4 fill-current" />
          <span>Why should the Pro's have all the Fun?</span>
        </div>
        <h1 className="text-5xl lg:text-7xl font-black text-gray-900 leading-tight mb-4 font-serif leading-tight">
          International <span className="text-emerald-700">Amateur</span> Golf Association.
        </h1>
        
        <div className="mb-8">
           <p className="text-2xl font-black text-emerald-900/80 italic font-serif leading-tight">
             "Home of the American Amateur Golf League"
           </p>
           <p className="text-emerald-700 font-black text-sm uppercase tracking-widest mt-1">Join a team today.</p>
        </div>

        <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-xl">
          iAGA is built on local team leadership and charitable impact. Become a Charter Member for a $49 donation and join the community at **PlayiAGA.org**. Have more Fun!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <button 
            onClick={onJoin}
            className="bg-emerald-800 text-white text-lg font-bold px-10 py-5 rounded-xl hover:bg-emerald-900 transition-all flex items-center justify-center gap-2 shadow-2xl shadow-emerald-900/20 active:scale-95"
          >
            Claim $49 Card <ChevronRight className="w-5 h-5" />
          </button>
          <a href="#leadership" className="px-10 py-5 rounded-xl border-2 border-emerald-800 text-emerald-800 font-bold hover:bg-emerald-50 transition-all text-center">
             Team Ownership
          </a>
        </div>
      </div>
    </div>
  </section>
);

const StrategicProjections = () => {
  const [activeYear, setActiveYear] = useState(1);

  const stats = {
    1: {
      partners: "200",
      shops: "100",
      newMembers: "60,000",
      rev: "$2.9M",
      efficiencyLift: "$3.5M",
      focus: "Pilot Phase & Infrastructure",
      desc: "Establishing the core network with 200 Local Team Owners and 100 physical course partners to prove league unit economics."
    },
    2: {
      partners: "1,200",
      shops: "1,000",
      newMembers: "1,200,000",
      rev: "$58.8M",
      efficiencyLift: "$120M",
      focus: "Leadership Network Activation",
      desc: "Local Area Teams and State Section Leagues establish the physical foundation. Team-led signups drive rapid local adoption."
    },
    3: {
      partners: "2,400",
      shops: "5,000",
      newMembers: "4,500,000",
      rev: "$279.3M",
      efficiencyLift: "$600M",
      focus: "Area Rep Saturation",
      desc: "State Leagues stabilize. High-margin annual dues sharing begins to enrich our owner network, ensuring ultra-high retention."
    }
  };

  const curr = stats[activeYear as keyof typeof stats];

  return (
    <section id="projections" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-emerald-700 font-black uppercase tracking-[0.3em] text-xs mb-6">
            <BarChart3 className="w-4 h-4" /> Growth Roadmap
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6 font-serif leading-tight">Hyper-Scale <span className="text-emerald-700">Business Plan.</span></h2>
        </div>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {[1, 2, 3].map(yr => (
            <button 
              key={yr}
              onClick={() => setActiveYear(yr)}
              className={`px-8 py-4 rounded-2xl font-black transition-all border-2 ${activeYear === yr ? 'bg-emerald-800 text-white border-emerald-800 shadow-xl shadow-emerald-800/20' : 'bg-white text-gray-400 border-gray-100 hover:border-emerald-200'}`}
            >
              Year {yr}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="bg-sky-50 rounded-[3rem] p-8 lg:p-12 shadow-inner border border-sky-100">
             <div className="flex items-center gap-4 mb-8">
               <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-emerald-800 shadow-sm">
                 <MousePointer2 className="w-8 h-8 fill-emerald-800" />
               </div>
               <div>
                 <h3 className="text-3xl font-black text-gray-900 font-serif leading-tight">Year {activeYear} Dynamics</h3>
                 <p className="text-emerald-700 font-bold uppercase tracking-widest text-xs">Focus: {curr.focus}</p>
               </div>
             </div>
             <p className="text-gray-600 text-lg mb-10 leading-relaxed italic">"{curr.desc}"</p>
             <div className="space-y-4">
               <div className="grid grid-cols-2 gap-4">
                  <div className="p-5 bg-white rounded-2xl border border-sky-200 shadow-sm">
                    <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Leadership Partners</div>
                    <div className="text-2xl font-black text-gray-900">{curr.partners}+</div>
                  </div>
                  <div className="p-5 bg-white rounded-2xl border border-sky-200 shadow-sm">
                    <div className="text-[10px] font-black text-emerald-700 uppercase tracking-widest">Course Intake</div>
                    <div className="text-2xl font-black text-emerald-800">+{curr.shops}</div>
                  </div>
               </div>
               <div className="p-8 bg-emerald-900 text-white rounded-3xl shadow-2xl relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-8 opacity-10">
                   <Briefcase className="w-24 h-24" />
                 </div>
                 <div className="text-xs font-bold uppercase tracking-widest opacity-60 mb-1">Indirect Course Revenue Lift</div>
                 <div className="text-4xl font-black text-emerald-400">${curr.efficiencyLift}</div>
               </div>
             </div>
          </div>

          <div className="space-y-8">
            <h4 className="text-2xl font-black text-gray-900 font-serif mb-8 leading-tight">Revenue Stream Architecture</h4>
            <div className="grid gap-6">
              {[
                { icon: <Megaphone className="w-5 h-5" />, title: "Team Sponsorships", amount: "Local Growth", desc: "Local businesses sponsoring area teams to gain direct exposure to amateur players." },
                { icon: <Crown className="w-5 h-5" />, title: "Section Dues Share", amount: "33% Rev Share", desc: "A third of annual dues shared with League Managers to ensure local league retention." },
                { icon: <TrendingUp className="w-5 h-5" />, title: "Team Gear Commissions", amount: "iAGA Direct", desc: "Drop-shipped team polos and markers shared with local owners." },
                { icon: <ArrowUpRight className="w-5 h-5" />, title: "Charter Renewals", amount: "Stability", desc: "Highly recurring leadership dues ($149/yr) stabilizing the association network." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 p-6 rounded-3xl border border-transparent hover:border-emerald-100 hover:bg-emerald-50/30 transition-all cursor-default">
                  <div className="w-12 h-12 bg-white text-emerald-800 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                    {item.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h5 className="font-bold text-gray-900">{item.title}</h5>
                      <span className="text-xs font-black text-emerald-700">{item.amount}</span>
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const LeadershipOpportunities = ({ onAddL2, onAddFranchise }: { onAddL2: (zip: string, price: number) => void, onAddFranchise: (zone: string, price: number) => void }) => {
  const [activeTab, setActiveTab] = useState<'zip' | 'zone'>('zip');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [result, setResult] = useState<{id: string, name: string, status: 'available' | 'taken', courses: number, price: number} | null>(null);

  const handleSearch = () => {
    if (!searchQuery) return;
    setIsSearching(true);
    setTimeout(() => {
      const courses = activeTab === 'zip' ? Math.floor(Math.random() * 8) + 2 : Math.floor(Math.random() * 40) + 15;
      const base = activeTab === 'zip' ? 499 : 1999;
      const loading = activeTab === 'zip' ? courses * 50 : Math.floor(courses / 5) * 100;
      setIsSearching(false);
      setResult({
        id: searchQuery,
        name: activeTab === 'zip' ? `Local Area Team (${searchQuery})` : `State Section League (${searchQuery})`,
        status: Math.random() > 0.2 ? 'available' : 'taken',
        courses,
        price: base + loading
      });
    }, 1000);
  };

  return (
    <section id="leadership" className="py-24 bg-sky-950 text-white overflow-hidden relative border-y border-white/5">
      <div className="absolute top-0 right-0 p-20 opacity-5 pointer-events-none">
        <Landmark className="w-96 h-96" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-400/10 border border-emerald-400/20 rounded-full text-emerald-400 text-[10px] font-black uppercase tracking-[0.3em] mb-6">
            <Crown className="w-3 h-3" /> Team Ownership
          </div>
          <h2 className="text-4xl lg:text-5xl font-black mb-6 font-serif leading-relaxed">Team Leadership & <span className="text-emerald-400">Ownership.</span></h2>
          <p className="text-sky-100/60 max-w-2xl mx-auto text-lg leading-relaxed">
            Own a piece of the game. Manage your Local Area Team or lead a State Section League. Mirror the energy of college athletics.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div 
              onClick={() => setActiveTab('zip')}
              className={`p-8 rounded-[3rem] border-2 transition-all cursor-pointer group ${activeTab === 'zip' ? 'bg-emerald-900 border-emerald-400 shadow-2xl shadow-emerald-400/10' : 'bg-white/5 border-white/10 hover:border-white/30'}`}
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 bg-emerald-400/10 rounded-2xl flex items-center justify-center text-emerald-400">
                  <Users className="w-7 h-7" />
                </div>
                <div className="text-right">
                  <div className="text-[10px] font-black uppercase tracking-widest opacity-50 mb-1">Owner Entry</div>
                  <div className="text-3xl font-black text-emerald-400">$499</div>
                </div>
              </div>
              <h3 className="text-2xl font-black mb-4 font-serif">Local Area Team Owner</h3>
              <ul className="space-y-3">
                <li className="flex gap-3 text-sm text-sky-100/70"><CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" /> Manage local team roster & trials</li>
                <li className="flex gap-3 text-sm text-sky-100/70"><CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" /> Host local festivals & team events</li>
                <li className="flex gap-3 text-sm text-sky-100/70"><CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" /> Retain 33% of team gear proceeds</li>
              </ul>
            </div>

            <div 
              onClick={() => setActiveTab('zone')}
              className={`p-8 rounded-[3rem] border-2 transition-all cursor-pointer group ${activeTab === 'zone' ? 'bg-sky-900 border-emerald-400 shadow-2xl shadow-emerald-400/10' : 'bg-white/5 border-white/10 hover:border-white/30'}`}
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 bg-emerald-400/10 rounded-2xl flex items-center justify-center text-emerald-400">
                  <LayoutGrid className="w-7 h-7" />
                </div>
                <div className="text-right">
                  <div className="text-[10px] font-black uppercase tracking-widest opacity-50 mb-1">League Entry</div>
                  <div className="text-3xl font-black text-emerald-400">$1999</div>
                </div>
              </div>
              <h3 className="text-2xl font-black mb-4 font-serif">State Section League</h3>
              <ul className="space-y-3">
                <li className="flex gap-3 text-sm text-sky-100/70"><CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" /> Master hosting rights for Sectionals</li>
                <li className="flex gap-3 text-sm text-sky-100/70"><CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" /> 33% share of all League dues</li>
                <li className="flex gap-3 text-sm text-sky-100/70"><CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" /> Lead Local Area Team Owners</li>
              </ul>
            </div>
            
            {/* Sponsor Section Added */}
            <div className="p-8 rounded-[3rem] bg-emerald-800/20 border-2 border-emerald-400/30 group hover:border-emerald-400 transition-all cursor-pointer">
              <div className="flex items-center gap-6">
                 <div className="w-16 h-16 bg-emerald-400/10 rounded-2xl flex items-center justify-center text-emerald-400">
                   <Building2 className="w-8 h-8" />
                 </div>
                 <div>
                   <h3 className="text-xl font-black text-white font-serif">Sponsor a Local Team</h3>
                   <p className="text-sm text-sky-100/60 leading-relaxed italic">Gain direct exposure to local amateur golfers by putting your business logo on team gear and leaderboards.</p>
                 </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[4rem] p-10 lg:p-14 text-gray-900 shadow-2xl relative self-stretch flex flex-col justify-center border border-sky-50">
            <div className="mb-8">
              <h3 className="text-3xl font-black mb-2 font-serif">Check Availability</h3>
              <p className="text-gray-500 font-medium">Searching for {activeTab === 'zip' ? 'Zip Code Teams' : 'State Section Leagues'}</p>
            </div>

            <div className="space-y-6">
              <div className="relative">
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={activeTab === 'zip' ? "Enter Zip Code..." : "Enter State Name..."} 
                  className="w-full bg-gray-50 border-2 border-gray-100 p-6 rounded-3xl outline-none focus:border-emerald-500 transition-all font-bold text-xl"
                />
                <button 
                  onClick={handleSearch}
                  disabled={isSearching}
                  className="absolute right-4 top-4 bottom-4 bg-emerald-800 text-white px-8 rounded-2xl font-black hover:bg-emerald-900 transition-all flex items-center gap-2"
                >
                  {isSearching ? <Loader2 className="w-5 h-5 animate-spin" /> : <Search className="w-5 h-5" />}
                </button>
              </div>

              {result && (
                <div className={`p-8 rounded-[3rem] animate-in zoom-in duration-500 border-2 ${result.status === 'available' ? 'bg-emerald-50 border-emerald-200' : 'bg-red-50 border-red-200'}`}>
                  {result.status === 'available' ? (
                    <div className="space-y-6">
                       <div className="flex justify-between items-start">
                         <div>
                            <div className="text-3xl font-black text-emerald-800 uppercase">{result.status}</div>
                            <div className="text-sm font-bold text-emerald-600/70">{result.name}</div>
                         </div>
                         <div className="text-right">
                            <div className="text-4xl font-black text-emerald-900">${result.price}</div>
                            <div className="text-[10px] font-black text-emerald-700/50 uppercase tracking-widest italic">Includes First Year Dues</div>
                         </div>
                       </div>
                       <button 
                         onClick={() => {
                           if (activeTab === 'zip') onAddL2(result.id, result.price);
                           else onAddFranchise(result.id, result.price);
                         }}
                         className="w-full bg-emerald-800 text-white font-black py-6 rounded-[2rem] text-xl hover:bg-emerald-900 shadow-xl shadow-emerald-900/20 active:scale-95 transition-all"
                       >
                         Secure Rights Now
                       </button>
                    </div>
                  ) : (
                    <div className="flex gap-6 items-center">
                      <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-red-600">
                        <X className="w-8 h-8" />
                      </div>
                      <div>
                        <div className="text-2xl font-black text-red-800">UNAVAILABLE</div>
                        <p className="text-sm text-red-700/60">This slot is currently owned by another Founding Member.</p>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
            
            <p className="mt-8 text-xs text-gray-400 font-medium text-center italic">
              * Ownership opportunities require one charity event annually. All gear and dues payments are processed via PlayiAGA.org for seamless settlements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Sponsor Grid ---
const SponsorGrid = () => (
  <section className="bg-white py-12 border-b border-gray-50 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 lg:px-8">
      <p className="text-center text-[10px] font-black text-gray-400 uppercase tracking-[0.4em] mb-8">Official Association Partners</p>
      <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
        <div className="flex items-center gap-2 font-black text-xl"><Target className="w-6 h-6" /> PRECISION</div>
        <div className="flex items-center gap-2 font-black text-xl"><Flag className="w-6 h-6" /> FAIRWAY</div>
        <div className="flex items-center gap-2 font-black text-xl"><Award className="w-6 h-6" /> MASTER</div>
        <div className="flex items-center gap-2 font-black text-xl"><Zap className="w-6 h-6" /> APEX</div>
        <div className="flex items-center gap-2 font-black text-xl"><Globe2 className="w-6 h-6" /> GLOBAL</div>
      </div>
    </div>
  </section>
);

// --- Market Impact ---
const MarketImpactShort = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 text-emerald-700 font-black uppercase tracking-[0.3em] text-xs mb-6">
            <TrendingUp className="w-4 h-4" /> Market Reach
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-8 font-serif leading-tight">Empowering the <span className="text-emerald-700">Silent Majority</span> of Golfers.</h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            While professional golf captures the headlines, 99% of rounds are played by amateurs. iAGA brings structure, team pride, and charitable impact to the every-day player.
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <div className="text-3xl font-black text-emerald-800">24M+</div>
              <div className="text-sm font-bold text-gray-400 uppercase tracking-widest mt-1">Amateur Golfers</div>
            </div>
            <div>
              <div className="text-3xl font-black text-emerald-800">$84B</div>
              <div className="text-sm font-bold text-gray-400 uppercase tracking-widest mt-1">Annual Spend</div>
            </div>
          </div>
        </div>
        <div className="bg-emerald-50 rounded-[4rem] p-12 relative">
          <div className="absolute top-0 right-0 p-8 opacity-10"><BarChart3 className="w-32 h-32" /></div>
          <blockquote className="text-2xl font-serif italic text-emerald-900 leading-relaxed relative z-10">
            "iAGA isn't just a league; it's a movement to return the game to its roots: community, charity, and local competition."
          </blockquote>
          <div className="mt-8 flex items-center gap-4">
             <div className="w-12 h-12 bg-emerald-800 rounded-full flex items-center justify-center text-white font-black">JD</div>
             <div>
                <div className="font-bold text-gray-900">John Doe</div>
                <div className="text-xs text-emerald-700 font-black uppercase tracking-widest">iAGA Founding Partner</div>
             </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// --- Donation Section ---
const DonationSection = ({ onDonate }: { onDonate: (amount: number) => void }) => (
  <section id="donate" className="py-24 bg-rose-50 border-y border-rose-100">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <div className="inline-flex items-center gap-2 text-rose-600 font-black uppercase tracking-[0.3em] text-xs mb-6">
        <Heart className="w-4 h-4" /> Impact Giving
      </div>
      <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-8 font-serif leading-tight italic">Give back to the <span className="text-rose-600">Game.</span></h2>
      <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-12">
        $20 of every membership goes directly to our vetted charitable partners. Want to do more? Choose an additional donation amount below.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        {[20, 50, 100, 500].map(amt => (
          <button 
            key={amt}
            onClick={() => onDonate(amt)}
            className="px-10 py-6 bg-white border-2 border-rose-100 rounded-3xl text-2xl font-black text-rose-600 hover:border-rose-400 hover:shadow-xl hover:shadow-rose-500/10 transition-all active:scale-95"
          >
            ${amt}
          </button>
        ))}
      </div>
    </div>
  </section>
);

// --- Charity Spotlight ---
const CharitySpotlight = () => {
  const charities: Charity[] = [
    { name: "Wounded Warriors", mission: "Providing programs for veterans injured in service.", icon: "🎖️" },
    { name: "Mercy Ships", mission: "Hospital ships delivering free healthcare globally.", icon: "🚢" },
    { name: "First Tee", mission: "Teaching life skills through the game of golf.", icon: "⛳" }
  ];

  return (
    <section id="charities" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-gray-900 font-serif mb-4">Our Charter Partners</h2>
          <div className="w-20 h-1 bg-emerald-800 mx-auto" />
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {charities.map((c, i) => (
            <div key={i} className="p-10 bg-gray-50 rounded-[3rem] text-center hover:bg-emerald-50 transition-colors border border-transparent hover:border-emerald-100 group">
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">{c.icon}</div>
              <h3 className="text-xl font-black text-gray-900 mb-3">{c.name}</h3>
              <p className="text-gray-500 text-sm leading-relaxed italic">"{c.mission}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Tournament Engine ---
const TournamentEngine = () => (
  <section className="py-24 bg-emerald-950 text-white relative overflow-hidden">
    <div className="absolute inset-0 opacity-5">
      <LayoutGrid className="w-[1200px] h-[1200px] absolute -top-40 -left-40" />
    </div>
    <div className="max-w-7xl mx-auto px-4 relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <div className="bg-white/5 border border-white/10 rounded-[3rem] p-8 lg:p-12 shadow-2xl backdrop-blur-sm">
             <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-emerald-400/20 text-emerald-400 rounded-xl flex items-center justify-center">
                   <Activity className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black font-serif">Live Scoring Matrix</h3>
             </div>
             <div className="space-y-6">
                {[
                  { label: "Net Scoring Engine", value: "APEX v4.2" },
                  { label: "Zip Code Sync", value: "Real-time" },
                  { label: "Team Hand-offs", value: "Automated" }
                ].map((s, i) => (
                  <div key={i} className="flex justify-between items-center border-b border-white/5 pb-4">
                    <span className="text-emerald-100/50 font-bold uppercase tracking-widest text-xs">{s.label}</span>
                    <span className="font-black text-emerald-400">{s.value}</span>
                  </div>
                ))}
             </div>
             <div className="mt-8 p-6 bg-emerald-400/10 rounded-2xl border border-emerald-400/20 text-center">
                <p className="text-xs text-emerald-100 italic">"Unified league standings updated every 60 seconds across all local area teams."</p>
             </div>
          </div>
        </div>
        <div className="order-1 lg:order-2">
           <div className="inline-flex items-center gap-2 text-emerald-400 font-black uppercase tracking-[0.3em] text-[10px] mb-6">
             <Zap className="w-4 h-4" /> Next-Gen Competition
           </div>
           <h2 className="text-4xl lg:text-5xl font-black mb-8 font-serif leading-tight">The iAGA <span className="text-emerald-400">Tournament Engine.</span></h2>
           <p className="text-xl text-sky-100/60 mb-10 leading-relaxed">
             Our proprietary scoring engine ensures that whether you are playing in Miami or Seattle, the net competitive experience is balanced, fair, and exhilarating.
           </p>
           <div className="flex items-center gap-4 p-4 bg-white/5 rounded-3xl border border-white/5 max-w-sm">
             <Clock className="w-8 h-8 text-emerald-400" />
             <div>
                <div className="text-sm font-bold">Pace of Play Guard</div>
                <div className="text-xs text-white/40">Ensuring 4-hour rounds or better.</div>
             </div>
           </div>
        </div>
      </div>
    </div>
  </section>
);

const PhysicalKit = () => (
  <section className="py-24 bg-gray-50 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 text-emerald-700 font-black uppercase tracking-[0.3em] text-xs mb-6">
            <Truck className="w-4 h-4" /> Delivered to your Door
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-8 font-serif leading-tight">Your Official <span className="text-emerald-700">Member Kit.</span></h2>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-xl">
            Every Charter Member receives a physical kit to signify their team status in the International Amateur Golf Association.
          </p>
          
          <div className="space-y-6">
            {[
              { title: "iAGA Team Membership Card", desc: "Etched plastic card with your unique ID and League QR code." },
              { title: "League Logo Decal", desc: "High-quality 1/4 inch decal to affix to your credit card surface." },
              { title: "Official iAGA Ball Marker", desc: "Die-cast metal marker with association branding." },
              { title: "Welcome Coded Entry", desc: "Instant digital access to your local team leaderboards." }
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-6 h-6 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="order-1 lg:order-2 relative">
          <div className="absolute inset-0 bg-emerald-800/5 blur-3xl rounded-full" />
          <div className="relative bg-white p-4 rounded-[4rem] shadow-2xl border border-gray-100 group">
            <img 
              src="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&q=80&w=1200" 
              alt="Membership Box" 
              className="w-full h-auto rounded-[3rem] shadow-inner group-hover:scale-[1.02] transition-transform duration-500"
            />
            <div className="absolute -bottom-6 -right-6 bg-emerald-800 text-white p-8 rounded-[2rem] shadow-2xl max-w-xs animate-in slide-in-from-bottom-4 duration-700">
              <div className="flex items-center gap-3 mb-2">
                <Gift className="w-6 h-6" />
                <span className="font-black uppercase tracking-widest text-xs">Arriving in 5-7 Days</span>
              </div>
              <p className="text-xs text-emerald-100 italic leading-relaxed">Includes your team marker and card decal. Welcome to the association.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Navbar = ({ cartCount, onOpenCart, onOpenDeck }: { cartCount: number, onOpenCart: () => void, onOpenDeck: () => void }) => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Play iAGA - International Amateur Golf Association',
          text: 'Join the American Amateur Golf League. Why should the Pro\'s have all the Fun?',
          url: 'https://playiaga.org',
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      navigator.clipboard.writeText('https://playiaga.org');
      alert('Link copied to clipboard!');
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-emerald-800 rounded-full flex items-center justify-center">
              <Trophy className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-black text-gray-900 tracking-tighter">iAGA<span className="text-emerald-700">.org</span></span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={onOpenDeck}
              className="text-emerald-800 hover:text-emerald-900 font-bold transition-colors flex items-center gap-2 px-3 py-1.5 bg-emerald-50 rounded-full text-xs"
            >
              <Presentation className="w-4 h-4" /> Pitch Deck
            </button>
            <a href="#summary" className="text-gray-600 hover:text-emerald-700 font-medium transition-colors">Strategy</a>
            <a href="#benefits" className="text-gray-600 hover:text-emerald-700 font-medium transition-colors">Benefits</a>
            <a href="#leadership" className="text-gray-600 hover:text-emerald-700 font-medium transition-colors">Teams</a>
            <a href="#donate" className="text-rose-600 hover:text-rose-700 font-bold transition-colors flex items-center gap-1">
              <Heart className="w-4 h-4 fill-current" /> Donate
            </a>
            <button 
              onClick={handleShare}
              className="p-2 text-gray-400 hover:text-emerald-700 transition-colors flex items-center gap-2 text-sm font-bold bg-gray-50 rounded-xl px-4"
            >
              <Share2 className="w-4 h-4" /> Share
            </button>
            <div className="h-6 w-px bg-gray-200" />
            <button 
              onClick={onOpenCart}
              className="relative p-2 text-gray-600 hover:text-emerald-700 transition-colors"
            >
              <ShoppingBag className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-emerald-600 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
                  {cartCount}
                </span>
              )}
            </button>
            <a href="#join" className="bg-emerald-800 text-white px-6 py-2.5 rounded-full font-bold hover:bg-emerald-900 transition-all shadow-lg hover:shadow-emerald-900/20 active:scale-95">
              Join Team
            </a>
          </div>

          <div className="md:hidden flex items-center gap-4">
             <button onClick={onOpenDeck} className="p-2 text-emerald-800">
              <Presentation className="w-6 h-6" />
            </button>
             <button onClick={onOpenCart} className="relative p-2">
              <ShoppingBag className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-emerald-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <Menu className="w-6 h-6 text-gray-600" />
          </div>
        </div>
      </div>
    </nav>
  );
};

// --- Contact Form ---

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-emerald-900 text-white overflow-hidden relative border-t border-emerald-800">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <Mail className="w-[800px] h-[800px] absolute -top-40 -left-40" />
      </div>
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl font-black mb-6 font-serif leading-tight italic">Have Questions? Get in Touch.</h2>
        <p className="text-emerald-100 mb-10 text-lg opacity-80 leading-relaxed">
          Want to learn more about localized team ownership or league benefits? Drop your email and our leadership team will reach out.
        </p>
        
        {status === 'success' ? (
          <div className="bg-emerald-800/50 border border-emerald-400/30 p-8 rounded-[3rem] animate-in zoom-in duration-300">
            <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
            <h3 className="text-2xl font-black mb-2">Message Sent!</h3>
            <p className="text-emerald-100/70">Check your inbox soon. We're excited to help you **Have more Fun!**</p>
            <button onClick={() => setStatus('idle')} className="mt-6 text-sm font-black uppercase tracking-widest text-emerald-400 underline decoration-2 underline-offset-4">Send another</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <div className="flex-1 relative">
              <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-emerald-800/40 w-5 h-5" />
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address..." 
                className="w-full bg-white border-2 border-transparent text-emerald-950 p-6 pl-14 rounded-3xl outline-none focus:border-emerald-400 transition-all font-bold text-lg shadow-2xl"
              />
            </div>
            <button 
              type="submit"
              disabled={status === 'submitting'}
              className="bg-emerald-400 text-emerald-950 font-black px-10 py-6 rounded-3xl text-xl hover:bg-white transition-all shadow-2xl disabled:opacity-50 flex items-center justify-center gap-2 active:scale-95"
            >
              {status === 'submitting' ? <Loader2 className="w-6 h-6 animate-spin" /> : <><Send className="w-5 h-5" /> Submit</>}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

// --- Main App ---

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isDeckOpen, setIsDeckOpen] = useState(false);
  const [isPaymentSuccess, setIsPaymentSuccess] = useState(false);
  const [selectedAge, setSelectedAge] = useState<string>(AgeGroup.GROUP_1);
  const [reasons, setReasons] = useState<{title: string, description: string}[]>([]);
  const [isLoadingReasons, setIsLoadingReasons] = useState(false);

  useEffect(() => {
    const fetchReasons = async () => {
      setIsLoadingReasons(true);
      const data = await getReasonsToJoin(selectedAge);
      setReasons(data.reasons || []);
      setIsLoadingReasons(false);
    };
    fetchReasons();
  }, [selectedAge]);

  const addToCart = (item: { id: string, name: string, price: number, isGift: boolean, type?: any, zipCode?: string, stateZone?: string }) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, description: item.name, quantity: 1, type: item.type || 'membership' }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id: string, q: number) => {
    if (q < 1) {
      removeFromCart(id);
      return;
    }
    setCart(prev => prev.map(item => item.id === id ? { ...item, quantity: q } : item));
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const handleAddDonation = (amount: number) => {
    addToCart({ id: `donation-${amount}-${Date.now()}`, name: `iAGA Charity Gift`, price: amount, isGift: false, type: 'donation' });
  };

  const handleAddL2 = (zip: string, price: number) => {
    addToCart({ 
      id: `l2-rep-${zip}`, 
      name: `Local Area Team (Zip: ${zip})`, 
      price: price, 
      isGift: false, 
      type: 'l2-rep',
      zipCode: zip
    });
  };

  const handleAddFranchise = (zone: string, price: number) => {
    addToCart({ 
      id: `franchise-${zone}`, 
      name: `State Section League (${zone})`, 
      price: price, 
      isGift: false, 
      type: 'franchise',
      stateZone: zone
    });
  };

  const handlePaymentSuccess = () => {
    setIsPaymentSuccess(true);
    setCart([]);
    setIsCartOpen(false);
  };

  return (
    <div className="min-h-screen bg-white selection:bg-emerald-100 selection:text-emerald-900 scroll-smooth">
      <Navbar 
        cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)} 
        onOpenCart={() => setIsCartOpen(true)} 
        onOpenDeck={() => setIsDeckOpen(true)}
      />
      
      <main>
        <Hero onJoin={() => addToCart({ id: 'member', name: 'Charter Membership Donation', price: 49, isGift: false, type: 'membership' })} />
        <SponsorGrid />
        <ExecutiveSummary />
        <MarketImpactShort />
        
        <section id="benefits" className="py-24 bg-white border-b border-gray-100">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
             <div className="inline-flex items-center gap-2 text-emerald-700 font-black uppercase tracking-[0.3em] text-xs mb-6">
               <ShieldCheck className="w-4 h-4" /> Personalized Perks
             </div>
             <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-8 font-serif leading-tight">Tailored for Your Game.</h2>
             
             <div className="mb-16">
               <div className="flex justify-center gap-2 mb-8 flex-wrap">
                 {Object.values(AgeGroup).map((age) => (
                   <button 
                     key={age}
                     onClick={() => setSelectedAge(age)}
                     className={`px-4 py-2 rounded-full text-xs font-black transition-all ${selectedAge === age ? 'bg-emerald-800 text-white shadow-lg shadow-emerald-200' : 'bg-gray-100 text-gray-400 hover:bg-gray-200'}`}
                   >
                     Age {age}
                   </button>
                 ))}
               </div>
               <div className={`grid md:grid-cols-5 gap-6 transition-opacity duration-300 ${isLoadingReasons ? 'opacity-50' : 'opacity-100'}`}>
                 {reasons.map((r, i) => (
                   <div key={i} className="bg-emerald-50/50 p-6 rounded-3xl border border-emerald-100 text-left hover:border-emerald-300 transition-colors">
                     <div className="text-emerald-700 font-black text-xs mb-2 uppercase tracking-wider">{r.title}</div>
                     <p className="text-xs text-emerald-900/70 leading-relaxed italic">"{r.description}"</p>
                   </div>
                 ))}
               </div>
             </div>
             <div className="grid md:grid-cols-3 gap-12">
                {[
                  { icon: <Percent className="w-8 h-8" />, title: "10% Global Discount", desc: "Permanent 10% reduction on green fees at participating clubs worldwide." },
                  { icon: <Flag className="w-8 h-8" />, desc: "Fair competition level, grouped by your specific age bracket.", title: "Age-Group Tourneys" },
                  { icon: <Plane className="w-8 h-8" />, title: "Win Golf Trips", desc: "Monthly draws for luxury vacations and partner travel perks." }
                ].map((b, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-emerald-50 text-emerald-700 rounded-3xl flex items-center justify-center mb-6 shadow-sm border border-emerald-100">
                      {b.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 leading-tight">{b.title}</h3>
                    <p className="text-gray-500 leading-relaxed max-w-xs">{b.desc}</p>
                  </div>
                ))}
             </div>
           </div>
        </section>

        <StrategicProjections />
        <DonationSection onDonate={handleAddDonation} />
        <CharitySpotlight />
        <TournamentEngine />
        <LeadershipOpportunities onAddL2={handleAddL2} onAddFranchise={handleAddFranchise} />
        
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-24">
          <div className="bg-emerald-900 rounded-[4rem] p-12 lg:p-20 text-white flex flex-col lg:flex-row gap-12 items-center shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 p-20 opacity-5 pointer-events-none"><Crown className="w-96 h-96" /></div>
             <div className="flex-1 relative z-10">
                <h2 className="text-4xl lg:text-5xl font-black mb-6 font-serif leading-tight italic">Support Growth: <span className="text-emerald-400">Founding Tier.</span></h2>
                <p className="text-xl text-emerald-100 mb-8 max-w-xl leading-relaxed">
                   Upgrade to the **Founding Team Member ($149)** level. Includes VIP league status, a state tournament entry, and a premium team polo.
                </p>
                <button 
                  onClick={() => addToCart({ id: 'premium-founding', name: 'Founding Team Member Upgrade', price: 149, isGift: false, type: 'membership' })}
                  className="bg-emerald-400 text-emerald-950 font-black px-12 py-6 rounded-3xl text-xl hover:bg-white transition-all shadow-2xl shadow-emerald-400/20 active:scale-95"
                >
                  Upgrade Now
                </button>
             </div>
             <div className="w-full lg:w-1/3 relative z-10">
                <div className="aspect-square bg-white rounded-[3rem] flex items-center justify-center shadow-2xl relative overflow-hidden group">
                   <Trophy className="w-32 h-32 text-emerald-800 group-hover:scale-110 transition-transform duration-700" />
                   <div className="absolute inset-0 bg-emerald-400/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
             </div>
          </div>
        </div>

        <PhysicalKit />
        
        <section id="pace" className="py-24 bg-white border-t border-gray-100">
           <div className="max-w-4xl mx-auto px-4 text-center">
             <h2 className="text-4xl font-black text-gray-900 mb-8 font-serif leading-tight">The Pace of Play Pledge</h2>
             <div className="p-10 bg-gray-900 text-white rounded-[3rem] relative overflow-hidden shadow-2xl border-4 border-emerald-900">
               <div className="absolute top-0 right-0 p-10 opacity-5"><Clock className="w-64 h-64" /></div>
               <p className="text-xl mb-12 leading-relaxed italic max-w-2xl mx-auto text-emerald-50">
                 "As a iAGA member, I agree to respect the traditions of the game and maintain the PACE of Play. My commitment ensures a world-class league experience for everyone."
               </p>
               <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                 <div className="flex items-center gap-3 px-8 py-4 bg-white/10 rounded-full border border-white/20">
                   <ShieldCheck className="w-6 h-6 text-emerald-400" />
                   <span className="font-black italic uppercase tracking-widest text-xs">APEX League Technology Integrated</span>
                 </div>
               </div>
             </div>
           </div>
        </section>

        <ContactForm />
      </main>

      <footer className="bg-sky-50 py-24 border-t border-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid md:grid-cols-4 gap-16 mb-20">
             <div className="col-span-2">
                <div className="flex items-center gap-2 mb-8">
                  <div className="w-10 h-10 bg-emerald-800 rounded-full flex items-center justify-center shadow-md">
                    <Trophy className="text-white w-5 h-5" />
                  </div>
                  <span className="text-2xl font-black text-gray-900 tracking-tighter">iAGA<span className="text-emerald-700">.org</span></span>
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-4 font-serif italic">Why should the Pro's have all the Fun?</h3>
                <p className="text-gray-500 max-w-md mb-8 leading-relaxed">
                  The International Amateur Golf Association (iAGA) is driving the amateur game forward through unified team leagues and charitable impact at **PlayiAGA.org**.
                </p>
                
                <div className="flex flex-wrap items-center gap-3">
                  <a href="#" className="p-3 bg-white rounded-full text-emerald-800 hover:bg-emerald-800 hover:text-white transition-all shadow-sm border border-emerald-100" title="Instagram"><Instagram className="w-5 h-5" /></a>
                  <a href="#" className="p-3 bg-white rounded-full text-emerald-800 hover:bg-emerald-800 hover:text-white transition-all shadow-sm border border-emerald-100" title="Youtube"><Youtube className="w-5 h-5" /></a>
                  <a href="#" className="p-3 bg-white rounded-full text-emerald-800 hover:bg-emerald-800 hover:text-white transition-all shadow-sm border border-emerald-100" title="TikTok"><Music2 className="w-5 h-5" /></a>
                  <a href="#" className="p-3 bg-white rounded-full text-emerald-800 hover:bg-emerald-800 hover:text-white transition-all shadow-sm border border-emerald-100" title="Facebook"><Facebook className="w-5 h-5" /></a>
                  <a href="#" className="p-3 bg-white rounded-full text-emerald-800 hover:bg-emerald-800 hover:text-white transition-all shadow-sm border border-emerald-100" title="X (Twitter)"><Twitter className="w-5 h-5" /></a>
                  <a href="#" className="p-3 bg-white rounded-full text-emerald-800 hover:bg-emerald-800 hover:text-white transition-all shadow-sm border border-emerald-100" title="LinkedIn"><Linkedin className="w-5 h-5" /></a>
                </div>
             </div>
             
             <div>
               <h4 className="font-black text-gray-900 mb-8 uppercase tracking-widest text-xs">League</h4>
               <ul className="space-y-4 text-gray-500 font-medium">
                 <li><a href="#projections" className="hover:text-emerald-700 transition-colors">Strategic Roadmap</a></li>
                 <li><a href="#charities" className="hover:text-emerald-700 transition-colors">Charter Charities</a></li>
                 <li><a href="#leadership" className="hover:text-emerald-700 transition-colors">Own a Local Team</a></li>
                 <li><a href="#donate" className="hover:text-emerald-700 transition-colors font-bold text-rose-600">Charitable Giving</a></li>
               </ul>
             </div>
             
             <div>
               <h4 className="font-black text-gray-900 mb-8 uppercase tracking-widest text-xs">Resources</h4>
               <ul className="space-y-4 text-gray-500 font-medium">
                 <li><a href="#" className="hover:text-emerald-700 font-bold text-emerald-800 flex items-center gap-2" onClick={(e) => { e.preventDefault(); setIsDeckOpen(true); }}><Presentation className="w-4 h-4" /> Printable Pitch Deck</a></li>
                 <li><a href="#" className="hover:text-emerald-700 transition-colors">League Partner Portal</a></li>
                 <li><a href="#" className="hover:text-emerald-700 transition-colors">Team Sponsorships</a></li>
                 <li><a href="#" className="hover:text-emerald-700 transition-colors">Year-end Tax Receipts</a></li>
                 <li><button onClick={() => navigator.clipboard.writeText('https://playiaga.org').then(() => alert('Link copied!'))} className="hover:text-emerald-700 transition-colors flex items-center gap-2">Share PlayiAGA.org <ExternalLink className="w-3 h-3" /></button></li>
               </ul>
             </div>
           </div>
           
           <div className="pt-12 border-t border-sky-100 flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="text-[10px] text-gray-400 font-black uppercase tracking-[0.2em]">
                © 2024 iAGA. Licensed 501(c)(3) Non-Profit.
              </div>
              <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-emerald-800/40">
                <a href="#" className="hover:text-emerald-800 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-emerald-800 transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-emerald-800 transition-colors">Refund Guarantee</a>
              </div>
           </div>
        </div>
      </footer>

      <CartModal 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cart={cart}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
        onPaymentComplete={handlePaymentSuccess}
        onAddDonation={handleAddDonation}
      />

      {isDeckOpen && <PitchDeck onClose={() => setIsDeckOpen(false)} />}

      {isPaymentSuccess && (
        <>
          <Confetti />
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />
            <div className="bg-white w-full max-w-md p-12 rounded-[4rem] text-center relative animate-in zoom-in duration-300 shadow-2xl border border-gray-100">
              <div className="w-24 h-24 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
                <CheckCircle2 className="w-12 h-12" />
              </div>
              <h2 className="text-4xl font-black text-gray-900 mb-4 font-serif">Welcome to the Team!</h2>
              <p className="text-gray-600 mb-10 text-lg leading-relaxed">
                Your registration is complete. Check your email for next steps. You're officially part of the unified amateur league. **Have more Fun!**
              </p>
              <button 
                onClick={() => setIsPaymentSuccess(false)}
                className="w-full bg-emerald-800 text-white font-black py-5 rounded-3xl hover:bg-emerald-900 transition-all shadow-xl shadow-emerald-900/10 active:scale-95"
              >
                Return to Dashboard
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

const CartModal = ({ 
  isOpen, 
  onClose, 
  cart, 
  updateQuantity, 
  removeFromCart, 
  onPaymentComplete,
  onAddDonation
}: { 
  isOpen: boolean, 
  onClose: () => void,
  cart: CartItem[],
  updateQuantity: (id: string, q: number) => void,
  removeFromCart: (id: string) => void,
  onPaymentComplete: () => void,
  onAddDonation: (amount: number) => void
}) => {
  const [step, setStep] = useState<'cart' | 'shipping' | 'payment'>('cart');
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isOpen) return null;

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleNextStep = () => {
    if (step === 'cart') setStep('shipping');
    else if (step === 'shipping') setStep('payment');
  };

  const simulatePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      onPaymentComplete();
      setStep('cart');
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md" onClick={onClose} />
      <div className="bg-white w-full max-w-lg rounded-[2.5rem] shadow-2xl relative overflow-hidden flex flex-col max-h-[90vh] border border-gray-100">
        <div className="p-8 border-b border-gray-100 flex justify-between items-center bg-white sticky top-0 z-10">
          <div>
            <h2 className="text-2xl font-black text-gray-900 font-serif">
              {step === 'cart' && 'Your Order'}
              {step === 'shipping' && 'Details'}
              {step === 'payment' && 'Payment'}
            </h2>
            <div className="flex gap-1 mt-1">
              <div className={`h-1 w-8 rounded-full transition-colors ${step === 'cart' ? 'bg-emerald-600' : 'bg-emerald-100'}`} />
              <div className={`h-1 w-8 rounded-full transition-colors ${step === 'shipping' ? 'bg-emerald-600' : 'bg-emerald-100'}`} />
              <div className={`h-1 w-8 rounded-full transition-colors ${step === 'payment' ? 'bg-emerald-600' : 'bg-emerald-100'}`} />
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X className="w-6 h-6 text-gray-400" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-8 space-y-6">
          {step === 'cart' && (
            <>
              {cart.length === 0 ? (
                <div className="text-center py-12">
                  <HandHeart className="w-16 h-16 text-gray-200 mx-auto mb-4" />
                  <p className="text-gray-500 font-medium">Your cart is empty.</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {cart.map(item => (
                    <div key={item.id} className="flex items-center gap-4 group">
                      <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center flex-shrink-0 border border-emerald-100">
                        {item.type === 'merch' ? <Shirt className="w-8 h-8 text-emerald-700" /> : item.type === 'l2-rep' || item.type === 'franchise' ? <Crown className="w-8 h-8 text-emerald-700" /> : item.type === 'donation' ? <Heart className="w-8 h-8 text-rose-500" /> : <UserPlus className="w-8 h-8 text-emerald-700" />}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 leading-tight">
                          {item.name}
                          {item.zipCode && <span className="text-[10px] text-emerald-700 ml-2 block uppercase tracking-widest font-black">Zip: {item.zipCode}</span>}
                          {item.stateZone && <span className="text-[10px] text-sky-700 ml-2 block uppercase tracking-widest font-black">Section: {item.stateZone}</span>}
                        </h3>
                        <p className="text-xs text-gray-500">${item.price} ea</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center bg-gray-50 rounded-xl px-2 border border-gray-100">
                          <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-2 hover:text-emerald-700 font-bold">-</button>
                          <span className="w-6 text-center font-bold text-sm">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-2 hover:text-emerald-700 font-bold">+</button>
                        </div>
                        <button onClick={() => removeFromCart(item.id)} className="text-gray-300 hover:text-red-500 transition-colors">
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}

          {step === 'shipping' && (
            <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="flex items-center gap-3 mb-4 text-emerald-800 bg-emerald-50 p-4 rounded-2xl border border-emerald-100">
                <Truck className="w-5 h-5" />
                <p className="text-sm font-bold uppercase tracking-widest">Delivery & Registration</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="First Name" className="w-full bg-gray-50 border border-gray-100 p-4 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500/20" />
                <input type="text" placeholder="Last Name" className="w-full bg-gray-50 border border-gray-100 p-4 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500/20" />
              </div>
              <input type="email" placeholder="Email Address" className="w-full bg-gray-50 border border-gray-100 p-4 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500/20" />
              <input type="text" placeholder="Shipping Address" className="w-full bg-gray-50 border border-gray-100 p-4 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500/20" />
            </div>
          )}

          {step === 'payment' && (
            <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="bg-emerald-950 p-8 rounded-[3rem] text-white shadow-2xl relative overflow-hidden mb-6">
                <div className="absolute top-0 right-0 p-4 opacity-10"><Waves className="w-24 h-24" /></div>
                <div className="mb-8 relative z-10">
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-50 mb-1">Total Order Value</div>
                  <div className="text-4xl font-black">${total}.00</div>
                </div>
                <div className="flex justify-between items-end relative z-10">
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-50 mb-1">Order Ref</div>
                    <div className="font-mono text-xs tracking-widest opacity-80 uppercase italic text-emerald-200">iAGA-{Math.random().toString(36).substring(7).toUpperCase()}</div>
                  </div>
                  <CreditCard className="w-10 h-10 opacity-30" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1 ml-1">Card Details</label>
                <input type="text" placeholder="0000 0000 0000 0000" className="w-full bg-gray-50 border border-gray-100 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-emerald-500/20 font-mono tracking-widest" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="MM / YY" className="w-full bg-gray-50 border border-gray-100 p-4 rounded-xl font-mono" />
                <input type="text" placeholder="CVV" className="w-full bg-gray-50 border border-gray-100 p-4 rounded-xl font-mono" />
              </div>
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-8 bg-emerald-50 border-t border-emerald-100 sticky bottom-0 z-10">
            {step === 'cart' ? (
              <>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-emerald-800/60 font-black uppercase tracking-widest text-xs italic">Order Total</span>
                  <span className="text-4xl font-black text-gray-900">${total}</span>
                </div>
                <button 
                  onClick={handleNextStep}
                  className="w-full bg-emerald-800 text-white font-black py-5 rounded-2xl hover:bg-emerald-900 transition-all shadow-xl shadow-emerald-900/10 flex items-center justify-center gap-2 active:scale-[0.98]"
                >
                  Checkout Now <ChevronRight className="w-5 h-5" />
                </button>
              </>
            ) : step === 'shipping' ? (
              <button 
                onClick={handleNextStep}
                className="w-full bg-emerald-800 text-white font-black py-5 rounded-2xl hover:bg-emerald-900 transition-all flex items-center justify-center gap-2 active:scale-[0.98]"
              >
                Continue to Payment <ChevronRight className="w-5 h-5" />
              </button>
            ) : (
              <button 
                onClick={simulatePayment}
                disabled={isProcessing}
                className="w-full bg-emerald-800 text-white font-black py-5 rounded-3xl hover:bg-emerald-900 transition-all flex items-center justify-center gap-2 disabled:bg-emerald-700 active:scale-[0.98]"
              >
                {isProcessing ? <Loader2 className="w-5 h-5 animate-spin" /> : <><Lock className="w-4 h-4" /> Confirm Donation</>}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
