import React, { useState, useMemo, useEffect } from 'react';
import { 
  Heart, Stethoscope, Eye, Smile, Dog, MapPin, Phone, Calendar, 
  Clock, FileText, ChevronRight, Search, Info, User, Home, 
  ArrowLeft, CheckCircle2, AlertCircle, Activity, Droplets, 
  Zap, Brain, MessageSquare, Baby, Thermometer, ShieldCheck,
  Ear, Layers, Syringe, ClipboardList, BookOpen, ExternalLink,
  Plus, X, Filter, Navigation, Briefcase, Star,
  Settings, CreditCard, Bell, Shield, LogOut, QrCode, HeartPulse
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedFacility, setSelectedFacility] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [currentSubMenu, setCurrentSubMenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [selectedPurpose, setSelectedPurpose] = useState(null);

  // Identity Assets
  const logoSrc = "/favicon.ico";
  const profilePicSrc = "https://api.dicebear.com/7.x/avataaars/svg?seed=NagaHealth";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 15 Consolidated Repository Categories - Verified Populated
  const repoCategories = [
    { name: 'Non-visible Disability', icon: <Brain />, focus: 'Non-Apparent Disabilities' },
    { name: 'Heart health', icon: <Heart />, focus: 'Heart related concerns' },
    { name: 'Mother and Childcare', icon: <Baby />, focus: 'Nutrition & Educare' },
    { name: 'Vaccines & Infections', icon: <ShieldCheck />, focus: 'TB, Rabies & EPI' },
    { name: 'Reproductive/Sexual Health', icon: <Activity />, focus: 'Teen Wellness / FP' },
    { name: 'Lung and Breathing', icon: <Activity />, focus: 'Respiratory' },
    { name: 'Kidney Health', icon: <Droplets />, focus: 'Kidney & Dialysis' },
    { name: 'Hearing & Ear Care', icon: <Ear />, focus: 'ENT Specialist' },
    { name: 'Mental Health Support', icon: <MessageSquare />, focus: 'Psychiatry' },
    { name: 'Physical (Bones and Joint) Health', icon: <Activity />, focus: 'Bone & Joint' },
    { name: 'Visual, Speech and Language', icon: <Eye />, focus: 'Eye & Speech' },
    { name: 'Intellectual & Learning Disabilities', icon: <Brain />, focus: 'SPED / Learning' },
    { name: 'Cancer Care', icon: <Activity />, focus: 'Oncology Center, chemotherapy' },
    { name: 'Skin & Dermatologist', icon: <Zap />, focus: 'Dermatology, Allergy' },
    { name: 'Rare Disease', icon: <Info />, focus: 'Specialized Care' }
  ];

  // Priority Services Grid
  const priorityServices = [
    { id: 'abc', name: 'Animal Bite Center', icon: <Dog />, subs: [], color: 'text-red-600 bg-red-50' },
    { id: 'dental', name: 'Dental Care', icon: <Smile />, subs: [], desc: 'Oral prophylaxis, Braces, Extraction', color: 'text-blue-600 bg-blue-50' },
    { id: 'eye', name: 'Eyecare', icon: <Eye />, subs: ['Prescribed', 'Check-up'], color: 'text-emerald-600 bg-emerald-50' },
    { id: 'pwd', name: 'PWD Application', icon: <User />, subs: ["Requirements", "Benefits"], color: 'text-indigo-600 bg-indigo-50' }
  ];

  // MASTER CONSOLIDATED DATABASE - RETAINING ALL INFORMATION
  const facilityData = [
    // --- INFECTIOUS DISEASE, IMMUNOLOGY & VACCINES (Includes PEP/PrEP Meanings) ---
    { 
      id: 51, 
      name: "BMC Animal Bite Treatment Center", 
      personnel: "ABTC Medical Staff", 
      specialty: "Vaccines & Infections", 
      program: "Animal Bite Treatment (PEP & PrEP)", 
      facility: "Room B202, 2nd Floor, OPD Building, BMC", 
      contact: "(054) 472-6125", 
      hours: "M-F: 8:00 AM – 5:00 PM | Sat: 8:00 AM – 12:00 NN", 
      rate: "₱50.00 User Fee", 
      coverage: "Post-Exposure Prophylaxis (PEP): Emergency care for immediate rabies prevention after a bite. Pre-Exposure Prophylaxis (PrEP): Preventative vaccination for those at high risk.",
      keywords: ["pep", "prep", "rabies", "dog bite", "animal bite center", "vaccines"] 
    },
    { id: 5, name: "CHO Naga - TB & Social Hygiene", personnel: "DOTS Team", specialty: "Vaccines & Infections", program: "TB Control (DOTS) / HIV STI Clinic", facility: "City Hall Complex", contact: "(054) 205-2980", hours: "M-F, 8 AM - 5 PM", rate: "Free Screening", keywords: ["infectious", "tb", "dots", "hiv", "sti", "vaccines"] },
    { id: 53, name: "BMC Allergology Clinic", personnel: "Allergy Specialists", specialty: "Vaccines & Infections", program: "Sub-Specialty Allergology & Immunology", facility: "Room B105, OPD Building, BMC", contact: "(054) 472-6125", hours: "Wednesday, 8 AM - 12 NN", rate: "₱50.00 User Fee", keywords: ["immunology", "allergy", "allergology", "vaccines"] },

    // --- PULMONOLOGY ---
    { 
      id: 803, 
      name: "Bicol Medicine Center - Pulmonology", 
      personnel: "Adult & Pediatrics Pulmo Team", 
      specialty: "Lung and Breathing", 
      program: "Sub-Specialty Clinic - Pulmonology", 
      facility: "Room B105 (Adult) / Room B106 (Pediatrics), BMC", 
      contact: "(054) 472-6125", 
      hours: "Adult: Wednesday (8:00 AM – 12:00 NN); Pediatrics: Friday (1:00 PM – 5:00 PM)", 
      rate: "₱50.00 User's Fee", 
      coverage: "Specialist care for lung diseases, chronic asthma, and respiratory diagnostics.",
      keywords: ["pulmonology", "respiratory", "lung", "asthma", "pulmo"] 
    },

    // --- MATERNAL, CHILDCARE & DAYCARE ---
    { id: 3, name: "CPNO / CHO Naga", personnel: "Nutrition & FP Team", specialty: "Mother and Childcare", program: "First 1,000 Days & Nutrition", facility: "G/F Naga City Nutrition Bldg., City Hall", contact: "(054) 871-2050", hours: "M-F, 8 AM - 5 PM", rate: "Socialized", keywords: ["maternal", "childcare", "nutrition", "prenatal", "family planning"] },
    { id: 4, name: "Naga City SEED Montessori", personnel: "Ms. Jo Ann B. Zara", specialty: "Mother and Childcare", program: "NEED / Educare (Daycare)", facility: "Barangay Tinago, Naga City", contact: "(054) 472-3723", hours: "AM Session: 7:30-11:30 | PM Session: 1:30-4:30", rate: "₱75 – ₱150 / Month", coverage: "Public Montessori daycare integrated with child health and ECCD monitoring.", keywords: ["daycare", "educare", "seed", "montessori", "childcare"] },

    // --- NEPHROLOGY, UROLOGY & DIALYSIS ---
    { id: 11, name: "BMC Renal & Urology Clinic", personnel: "Nephro Specialists", specialty: "Kidney Health", program: "Renal Care Sub-specialty", facility: "Room B105 / B207, BMC", contact: "(054) 472-6125", hours: "Nephro: Mon/Fri AM, Tue PM | Urology: Tue-Thu PM", rate: "₱50.00 User Fee", keywords: ["nephrology", "urology", "kidney", "renal", "dialysis"] },
    { id: 111, name: "BMC Dialysis Center", personnel: "Renal Replacement Team", specialty: "Kidney Health", program: "Renal Care Center (Dialysis)", facility: "Renal Care Center Building, BMC", contact: "(054) 472-6125", hours: "Peritoneal: Mon AM | Hemodialysis: Scheduled Units", rate: "HD: ₱4,000 | Peritoneal: ₱1,200", keywords: ["dialysis", "hemodialysis", "peritoneal", "kidney"] },

    // --- INTELLECTUAL & LEARNING DISABILITIES ---
    { 
      id: 17, 
      name: "BMC Child Psych / Pedia Neuro", 
      personnel: "Dr. Romano & Dr. Nocario", 
      specialty: "Intellectual & Learning Disabilities", 
      program: "Child Psychiatry & Pediatric Neurology", 
      facility: "Room B106 (Pediatrics), BMC", 
      contact: "(054) 472-6125", 
      hours: "Child Psych: Tuesday (8:00 AM – 2:00 PM); Pedia Neuro: Thursday (1:00 PM – 5:00 PM)", 
      rate: "₱50.00 User's Fee", 
      keywords: ["intellectual", "learning", "adhd", "autism", "down syndrome", "developmental"] 
    },

    // --- PWD / NADs ---
    { id: 1, name: "PDAO CSWDO", personnel: "Atty. Paul John Barrosa", specialty: "Non-visible Disability", program: "Registration and Issuance of PWD ID", facility: "G/F Ako Bicol Bldg., City Hall Complex", contact: "(054) 473-3576", hours: "M-F, 8 AM - 5 PM", rate: "Free registration", keywords: ["pwd", "nads", "id application", "requirements", "benefits", "pwd application"] },

    // --- CARDIOLOGY ---
    { id: 2, name: "BMC Cardiology Sub-Specialty", personnel: "BMC Heart Team", specialty: "Heart Health", program: "Cardiology Consultation & CP Clearance", facility: "Room B105, OPD Building, BMC", contact: "(054) 472-6125", hours: "Mon PM / Fri AM | Adult CP: Tue/Thu PM", rate: "₱50.00 User Fee", keywords: ["cardiology", "heart", "cp clearance", "stroke"] },

    // --- REPRODUCTIVE ---
    { id: 9, name: "BMC Teen Wellness Center", personnel: "Wellness Team", specialty: "Reproductive/Sexual Health", program: "AYRH and Family Planning", facility: "Room B110, OPD Building, BMC", contact: "(054) 472-6125", hours: "Mon-Fri, 8 AM - 5 PM", rate: "₱50.00 User Fee", keywords: ["reproductive", "ayrh", "teen wellness", "family planning"] },

    // --- HEARING ---
    { id: 13, name: "BMC Hearing Center", personnel: "ENT Specialists", specialty: "Hearing & Ear Care", program: "Newborn Hearing Screening", facility: "Room B205, BMC", contact: "(054) 472-6125", hours: "Mon PM | Tue-Fri AM", rate: "₱50.00 User Fee", keywords: ["hearing", "ear", "ent", "newborn"] },

    // --- MENTAL HEALTH ---
    { id: 14, name: "BMC Psychiatry Center", personnel: "Mental Health Specialists", specialty: "Mental Health Support", program: "Psychiatric Care & TMS", facility: "Don Susano Mental Hospital / BMC", contact: "(054) 472-6125", hours: "Adult: Mon-Thu (8-2 PM); Fri (8-12 NN)", rate: "Psych Test: ₱1,000 | TMS: ₱4,000", keywords: ["mental", "psychosocial", "psychiatry", "psychological"] },

    // --- PHYSICAL (ORTHOPEDIC) ---
    { id: 15, name: "BMC Orthopedic Clinic", personnel: "Ortho Surgeons", specialty: "Physical (Bones and Joint) Health", program: "Orthopedic Sub-Specialty", facility: "Room B111, OPD Building, BMC", contact: "(054) 472-6125", hours: "Spine: Friday | Sports: Thursday", rate: "Casting: ₱500 | Removal: ₱2,250", keywords: ["physical", "orthopedic", "spine", "fracture", "casting"] },

    // --- VISUAL & SPEECH ---
    { id: 16, name: "DOH-BMC Eye Care Center", personnel: "Ophthalmology Team", specialty: "Visual, Speech and Language", program: "Apex Eye Surgery & Clinic", facility: "BMC, J. Miranda Avenue", contact: "(054) 472-6125 loc 1305", hours: "Mon, Wed, Fri: 8 AM - 12 PM", rate: "Socialized", keywords: ["eye", "eyecare", "visual", "cataract", "check-up", "prescribed"] },
    { id: 161, name: "Angels Ladder Speech Therapy", personnel: "SLP Specialists", specialty: "Visual, Speech and Language", program: "Specialized Speech Pathology", facility: "Jimenez Subd, Naga City", contact: "0912-0064902", hours: "By Appointment", rate: "Private Fee", keywords: ["speech", "language", "therapy", "pathology"] },

    // --- CANCER CARE ---
    { id: 18, name: "BMC Regional Cancer Center", personnel: "Oncology Team", specialty: "Cancer Care", program: "Comprehensive Oncology Program", facility: "RCC Building, BMC", contact: "(054) 472-6125", hours: "M-F, 7 AM - 7 PM", rate: "Sub-specialty fees", keywords: ["cancer", "oncology", "chemo", "radiation"] },

    // --- SKINCARE ---
    { id: 50, name: "BMC Dermatology Center", personnel: "Dr. Maria Lourdes Cruz-Sarmiento", specialty: "Skin & Dermatologist", program: "Comprehensive Dermatology", facility: "2nd Floor, Cardiac Bldg, BMC", contact: "(054) 472-6125 loc 1425", hours: "M-F, 8 AM - 5 PM", rate: "₱50.00 User Fee", keywords: ["skincare", "skin", "dermatology consultation", "psoriasis"] },

    // --- RARE DISEASE ---
    { id: 20, name: "BMC Rare Disease Sub-Specialty", personnel: "Endo & Neuro specialists", specialty: "Rare Disease", program: "Endocrinology & Neurology", facility: "Room B106 / B105, BMC", contact: "(054) 472-6125", hours: "Pedia Endo: Mon AM | Pedia Neuro: Thu PM", rate: "₱50.00 User Fee", keywords: ["rare disease", "endocrinology", "neurology", "diabetes"] },

    // --- DENTALCARE ---
    { id: 40, name: "BMC Dental Clinic", personnel: "Dr. Eric V. Pabico", specialty: "Dentalcare", program: "Hospital Dentistry", facility: "Room B208, BMC", contact: "(054) 472-3307", hours: "M-F: 8 AM-5 PM", rate: "Extraction: ₱900 | Prophylaxis: ₱1,400", keywords: ["dentalcare", "extraction", "oral prophylaxis", "braces"] }
  ];

  const filteredFacilities = useMemo(() => {
    const query = searchQuery.toLowerCase();
    if (!query) return [];
    return facilityData.filter(f => 
      f.name.toLowerCase().includes(query) ||
      f.specialty.toLowerCase().includes(query) ||
      f.keywords.some(k => k.includes(query))
    );
  }, [searchQuery]);

  const handleServiceClick = (name) => {
    setSearchQuery(name);
    setActiveTab('repo');
    setSelectedFacility(null);
    setCurrentSubMenu(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderHome = () => (
    <div className="space-y-8 pb-24 animate-in fade-in duration-500">
      <div className="bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 p-8 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden group">
        <div className="relative z-10">
          <div className="bg-white/20 w-fit px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 backdrop-blur-md">Naga Health Portal</div>
          <h2 className="text-3xl font-black tracking-tight leading-tight uppercase tracking-tight">Konektadoc</h2>
          <p className="opacity-80 text-sm mt-2 font-medium">Verified Citizen Service Repository.</p>
          <button onClick={() => setActiveTab('repo')} className="mt-8 flex items-center justify-center gap-3 w-full py-4 bg-white text-blue-900 rounded-2xl text-[11px] font-black uppercase tracking-widest shadow-xl active:scale-95 transition-all hover:bg-blue-50">
            <Search className="w-4 h-4" /> Open Directory
          </button>
        </div>
        <Activity className="absolute -bottom-6 -right-6 w-40 h-40 text-white/5 rotate-12 transition-transform group-hover:scale-110 duration-700" />
      </div>

      <section>
        <div className="flex items-center justify-between mb-5 px-1">
          <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">Priority Services</h3>
          <span className="h-[1px] flex-1 bg-slate-100 ml-4"></span>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {priorityServices.map((cat) => (
            <div key={cat.id} className="relative">
              <button 
                onClick={() => {
                  if (cat.subs.length > 0) {
                    setCurrentSubMenu(currentSubMenu === cat.id ? null : cat.id);
                  } else {
                    handleServiceClick(cat.name);
                  }
                }} 
                className={`w-full flex flex-col p-5 rounded-[2rem] transition-all active:scale-95 text-left border-2 relative z-10 ${currentSubMenu === cat.id ? 'border-blue-500 bg-blue-50 shadow-inner' : 'border-slate-50 bg-white shadow-sm hover:border-slate-200'}`}
              >
                <div className={`p-3.5 rounded-2xl w-fit mb-4 shadow-sm ${cat.color}`}>{React.cloneElement(cat.icon, { className: "w-6 h-6" })}</div>
                <span className="text-[13px] font-black text-slate-800 leading-tight">{cat.name}</span>
                <span className="text-[9px] text-slate-400 font-bold uppercase mt-1 tracking-wider italic">
                  {cat.subs.length > 0 ? "Options Available" : "View Details"}
                </span>
              </button>
              {currentSubMenu === cat.id && cat.subs.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 z-20 flex flex-col gap-2 p-2 bg-white rounded-[1.5rem] shadow-2xl border border-blue-50 animate-in slide-in-from-top-2 duration-300">
                  {cat.subs.map(sub => (
                    <button key={sub} onClick={() => handleServiceClick(sub)} className="w-full text-left p-3.5 bg-slate-50 hover:bg-blue-600 hover:text-white rounded-xl text-[10px] font-black uppercase tracking-tight transition-all">{sub}</button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <button onClick={() => setActiveTab('help')} className="w-full bg-orange-600 p-7 rounded-[2.5rem] flex items-center gap-5 text-left shadow-2xl active:scale-95 transition-all group overflow-hidden">
        <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center text-white backdrop-blur-sm shadow-inner"><ShieldCheck className="w-7 h-7" /></div>
        <div className="flex-1 text-white">
          <h4 className="font-black text-base tracking-tight uppercase leading-none">Assistance Portal</h4>
          <p className="text-[10px] opacity-70 font-bold uppercase tracking-widest mt-1">Medical Aid & Support</p>
        </div>
        <ChevronRight className="text-white/40 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );

  const renderRepo = () => (
    <div className="space-y-6 animate-in slide-in-from-right duration-400 pb-28">
      {!selectedFacility && (
        <div className="sticky top-[84px] z-20 bg-slate-50/90 backdrop-blur-md py-3 -mx-6 px-6">
          <div className="relative group">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 group-focus-within:text-blue-500 transition-colors" />
            <input type="text" placeholder="Search categories, services, or room numbers..." className="w-full pl-14 pr-12 py-5 bg-white border-2 border-slate-100 rounded-[2rem] shadow-sm focus:ring-4 focus:ring-blue-100 outline-none text-sm font-bold transition-all" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            {searchQuery && <button onClick={() => setSearchQuery('')} className="absolute right-5 top-1/2 -translate-y-1/2 p-1 bg-slate-100 rounded-full text-slate-400 hover:text-slate-600"><X className="w-3.5 h-3.5" /></button>}
          </div>
        </div>
      )}

      {selectedFacility ? (
        <div className="bg-white rounded-[2.5rem] p-8 shadow-xl border border-blue-50 space-y-7 animate-in zoom-in-95 duration-300">
          <button onClick={() => setSelectedFacility(null)} className="flex items-center gap-2 text-slate-400 text-[10px] font-black uppercase tracking-widest hover:text-blue-600 transition-colors"><ArrowLeft className="w-4 h-4" /> Go Back</button>
          <div className="space-y-1">
            <p className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em]">{selectedFacility.program}</p>
            <h2 className="text-2xl font-black text-slate-900 leading-tight">{selectedFacility.name}</h2>
            <div className="flex items-center gap-2 text-slate-600 font-bold text-xs pt-1"><User className="w-4 h-4 text-blue-500" /> {selectedFacility.personnel}</div>
          </div>
          <div className="grid gap-3">
             <div className="w-full flex items-start gap-4 p-4 bg-slate-50 rounded-2xl border-l-4 border-blue-500 shadow-sm">
                <Clock className="w-5 h-5 text-blue-600 mt-1" />
                <div><p className="text-[9px] text-slate-400 uppercase font-black mb-1">Clinic/Service Hours</p><p className="text-xs font-black text-slate-800">{selectedFacility.hours}</p></div>
             </div>
             <div className="w-full flex items-start gap-4 p-4 bg-slate-50 rounded-2xl border-l-4 border-blue-500 shadow-sm">
                <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                <div><p className="text-[9px] text-slate-400 uppercase font-black mb-1">Facility Location</p><p className="text-xs font-black text-slate-800">{selectedFacility.facility}</p></div>
             </div>
             <div className="w-full flex items-start gap-4 p-4 bg-blue-50/50 rounded-2xl border-l-4 border-blue-400 shadow-sm">
                <Info className="w-5 h-5 text-blue-500 mt-1" />
                <div><p className="text-[9px] text-blue-400 uppercase font-black mb-1">Coverage / Status</p><p className="text-[10px] font-bold text-slate-600 leading-tight">{selectedFacility.coverage || "Verified Konektadoc Service"}</p></div>
             </div>
             <div className="w-full flex items-start gap-4 p-4 bg-slate-50 rounded-2xl border-l-4 border-emerald-500 shadow-sm">
                <Thermometer className="w-5 h-5 text-emerald-600 mt-1" />
                <div><p className="text-[9px] text-slate-400 uppercase font-black mb-1">Fees / Rate</p><p className="text-xs font-black text-emerald-600 uppercase tracking-tight">{selectedFacility.rate}</p></div>
             </div>
          </div>
          <a href={`tel:${selectedFacility.contact.replace(/\D/g, '')}`} className="w-full bg-blue-700 text-white py-5 rounded-[2rem] font-black uppercase tracking-widest shadow-2xl active:scale-95 transition-all text-xs flex items-center justify-center gap-3">
            <Phone className="w-5 h-5" /> Contact Center
          </a>
        </div>
      ) : (
        <div className="space-y-6">
          {searchQuery === '' && (
            <div className="grid grid-cols-2 gap-3">
              {repoCategories.map((repo, i) => (
                <button key={i} onClick={() => handleServiceClick(repo.name)} className="flex flex-col items-center gap-3 p-5 bg-white border border-slate-100 rounded-[2rem] shadow-sm hover:border-blue-200 active:bg-blue-600 active:text-white transition-all text-center group">
                  <div className="text-blue-500 bg-blue-50 p-4 rounded-2xl group-hover:bg-blue-100 transition-colors">{React.cloneElement(repo.icon, { className: "w-7 h-7" })}</div>
                  <div>
                    <span className="text-[10px] font-black text-slate-800 uppercase tracking-tight block group-active:text-white leading-tight">{repo.name}</span>
                    <span className="text-[8px] text-slate-400 font-bold group-active:text-blue-100 uppercase tracking-widest">{repo.focus}</span>
                  </div>
                </button>
              ))}
            </div>
          )}
          {searchQuery !== '' && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 px-1 mb-4">
                <button onClick={() => setSearchQuery('')} className="p-2 bg-slate-100 rounded-full text-slate-400"><X className="w-4 h-4" /></button>
                <h3 className="text-[11px] font-black text-slate-800 uppercase tracking-widest">Results for "{searchQuery}"</h3>
              </div>
              <div className="grid gap-3">
                {filteredFacilities.length > 0 ? (
                  filteredFacilities.map(fac => (
                    <button key={fac.id} onClick={() => setSelectedFacility(fac)} className="bg-white p-6 rounded-[2.5rem] border border-slate-100 flex justify-between items-center hover:border-blue-200 shadow-sm transition-all text-left active:scale-[0.98]">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 transition-colors duration-300"><Stethoscope className="w-6 h-6" /></div>
                        <div>
                          <p className="text-[8px] font-black text-blue-600 uppercase tracking-widest mb-1">{fac.specialty}</p>
                          <p className="font-black text-slate-800 text-sm leading-tight">{fac.name}</p>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-200" />
                    </button>
                  ))
                ) : (
                  <div className="text-center py-20 bg-white rounded-[3rem] border-2 border-dashed border-slate-100">
                    <Search className="w-14 h-14 text-slate-200 mx-auto mb-5" />
                    <p className="text-slate-500 font-black text-xs uppercase tracking-widest">No matching results found</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );

  const renderHelp = () => (
    <div className="space-y-6 animate-in slide-in-from-bottom duration-500 pb-28">
      <div className="bg-orange-600 p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden uppercase">
        <h2 className="text-3xl font-black tracking-tight leading-tight">Assistance Portal</h2>
        <p className="opacity-90 text-[11px] mt-2 font-black uppercase tracking-[0.2em]">Social Aid & Support Application</p>
        <ShieldCheck className="absolute -top-4 -right-4 w-24 h-24 text-white/10 -rotate-12" />
      </div>
      {formSubmitted ? (
        <div className="bg-white p-12 rounded-[3rem] text-center space-y-6 animate-in zoom-in-95 shadow-sm border border-slate-100">
          <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto"><CheckCircle2 className="w-10 h-10 text-green-500" /></div>
          <h3 className="text-2xl font-black text-slate-800 uppercase tracking-tight">Request Logged</h3>
          <p className="text-slate-400 text-xs font-bold leading-relaxed">Your application for <strong>{selectedPurpose}</strong> has been received by social workers.</p>
          <button onClick={() => { setFormSubmitted(false); setSelectedPurpose(null); }} className="w-full bg-slate-900 text-white py-4 rounded-2xl text-[10px] font-black uppercase shadow-lg">New Application</button>
        </div>
      ) : (
        <form onSubmit={(e) => { e.preventDefault(); setFormSubmitted(true); }} className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 space-y-7">
          <div className="grid grid-cols-1 gap-3">
            {['Financial Support', 'Application Support', 'Recommendation Request', 'Medicinal Care Support', 'Assistive Device'].map(purpose => (
              <button key={purpose} type="button" onClick={() => setSelectedPurpose(purpose)} className={`p-5 border-2 rounded-2xl text-[10px] font-black uppercase transition-all text-left flex justify-between items-center ${selectedPurpose === purpose ? 'border-orange-500 text-orange-600 bg-orange-50 shadow-inner' : 'border-slate-50 text-slate-500 hover:border-orange-200'}`}>{purpose} {selectedPurpose === purpose && <CheckCircle2 className="w-4 h-4" />}</button>
            ))}
          </div>
          <div className="space-y-4">
            <input type="text" placeholder="Citizen's Full Name" className="w-full p-5 bg-slate-50 border-none rounded-2xl text-[11px] font-bold focus:ring-4 focus:ring-orange-100 outline-none" required />
            <input type="tel" placeholder="Mobile Number" className="w-full p-5 bg-slate-50 border-none rounded-2xl text-[11px] font-bold focus:ring-4 focus:ring-orange-100 outline-none" required />
            <textarea rows="4" placeholder="Detail your medical situation..." className="w-full p-5 bg-slate-50 border-none rounded-2xl text-[11px] font-bold focus:ring-4 focus:ring-orange-100 outline-none resize-none" required></textarea>
          </div>
          <button type="submit" disabled={!selectedPurpose} className={`w-full py-6 rounded-[2rem] font-black uppercase tracking-widest shadow-2xl transition-all text-xs ${selectedPurpose ? 'bg-orange-600 text-white shadow-orange-100' : 'bg-slate-100 text-slate-300 cursor-not-allowed'}`}>File Assistance Request</button>
        </form>
      )}
    </div>
  );

  const renderMe = () => (
    <div className="space-y-6 animate-in slide-in-from-bottom duration-500 pb-28">
      <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-950 p-7 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden">
        <div className="relative z-10 space-y-6">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-2xl shadow-lg flex items-center justify-center border-2 border-white/20 p-1 overflow-hidden relative group">
                <HeartPulse className="absolute w-7 h-7 text-blue-600 z-0" />
                <img 
                  src={logoSrc} 
                  alt="KD" 
                  className="absolute inset-0 w-full h-full object-cover z-10 bg-white" 
                  onError={(e) => { e.target.style.opacity = 0; }} 
                />
              </div>
              <div><h2 className="text-lg font-black tracking-tight leading-none uppercase">Naga Citizen</h2><p className="text-[10px] opacity-60 font-black uppercase tracking-widest mt-1">Health & Wellness ID</p></div>
            </div>
            <QrCode className="w-10 h-10 text-white/40" />
          </div>
          <div className="flex gap-4">
            <div className="w-20 h-20 rounded-2xl border-2 border-white/20 overflow-hidden shadow-inner"><img src={profilePicSrc} alt="User" /></div>
            <div className="flex-1 space-y-1 py-1">
              <p className="text-xl font-black tracking-tight uppercase">Juan Dela Cruz</p>
              <p className="text-[10px] font-black uppercase tracking-widest text-blue-400">ID: NAG-2025-0891</p>
              <div className="flex gap-2 mt-2">
                <div className="bg-red-500/20 text-red-400 px-2 py-0.5 rounded-lg text-[8px] font-black uppercase">O+ Positive</div>
                <div className="bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-lg text-[8px] font-black uppercase">Verified Resident</div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 -mr-12 -mt-12 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
      </div>
      <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-100">
        {[
          { icon: <ClipboardList className="w-5 h-5 text-blue-500" />, label: 'My Appointments', sub: 'View and manage bookings' },
          { icon: <FileText className="w-5 h-5 text-emerald-500" />, label: 'Medical History', sub: 'Prescriptions & lab results' },
          { icon: <CreditCard className="w-5 h-5 text-amber-500" />, label: 'Health Wallet', sub: 'AICS and social aid status' },
          { icon: <Bell className="w-5 h-5 text-rose-500" />, label: 'Notifications', sub: 'Alerts and health reminders' },
          { icon: <Shield className="w-5 h-5 text-indigo-500" />, label: 'Emergency Contact', sub: 'Manage guardians & ICE' },
          { icon: <Settings className="w-5 h-5 text-slate-400" />, label: 'Profile Settings', sub: 'Update personal details' },
        ].map((item, i) => (
          <button key={i} className="w-full flex items-center justify-between p-5 hover:bg-slate-50 transition-colors border-b border-slate-50 last:border-none group">
            <div className="flex items-center gap-4 text-left">
              <div className="p-3 bg-slate-50 rounded-2xl group-hover:bg-white">{item.icon}</div>
              <div><p className="text-sm font-black text-slate-800 leading-none">{item.label}</p><p className="text-[10px] text-slate-400 font-bold mt-1.5">{item.sub}</p></div>
            </div>
            <ChevronRight className="w-5 h-5 text-slate-200 group-hover:text-blue-500 transition-colors" />
          </button>
        ))}
      </div>
      <button className="w-full flex items-center justify-center gap-3 p-6 bg-rose-50 text-rose-600 rounded-[2rem] font-black uppercase tracking-widest text-[11px] active:scale-95 transition-all"><LogOut className="w-4 h-4" /> Sign Out from Konektadoc</button>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 max-w-md mx-auto relative shadow-2xl overflow-x-hidden border-x border-slate-100">
      <header className={`sticky top-0 z-50 px-6 py-5 flex items-center justify-between transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-xl shadow-md border-b border-slate-100' : 'bg-white'}`}>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-white rounded-2xl shadow-lg flex items-center justify-center border p-1 overflow-hidden relative group">
            <HeartPulse className="absolute w-7 h-7 text-blue-600 z-0" />
            <img 
              src={logoSrc} 
              alt="KD" 
              className="absolute inset-0 w-full h-full object-cover z-10 bg-white" 
              onError={(e) => { e.target.style.opacity = 0; }} 
            />
          </div>
          <div>
            <h1 className="font-black text-xl leading-none tracking-tight uppercase tracking-tight">Konekta<span className="text-blue-600 font-black">doc</span></h1>
            <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em] mt-1">An Maogmang Lugar</p>
          </div>
        </div>
        <div onClick={() => setActiveTab('me')} className="w-11 h-11 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-full border-2 border-white shadow-lg overflow-hidden ring-4 ring-blue-50/50 cursor-pointer active:scale-90 transition-transform"><img src={profilePicSrc} alt="profile" /></div>
      </header>

      <main className="px-6 pt-4 pb-32">
        {activeTab === 'home' && renderHome()}
        {activeTab === 'repo' && renderRepo()}
        {activeTab === 'help' && renderHelp()}
        {activeTab === 'me' && renderMe()}
      </main>

      <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-white/95 backdrop-blur-xl border-t border-slate-100 px-10 py-7 flex justify-between items-center z-50 shadow-[0_-15px_50px_rgba(0,0,0,0.08)] rounded-t-[3.5rem]">
        <button onClick={() => { setActiveTab('home'); setSelectedFacility(null); setCurrentSubMenu(null); }} className={`flex flex-col items-center gap-2 transition-all ${activeTab === 'home' ? 'text-blue-600 scale-110' : 'text-slate-300'}`}><Home className={`w-6 h-6 ${activeTab === 'home' ? 'fill-blue-600/10' : ''}`} /><span className="text-[9px] font-black uppercase tracking-widest">Home</span></button>
        <button onClick={() => { setActiveTab('repo'); setSelectedFacility(null); }} className={`flex flex-col items-center gap-2 transition-all ${activeTab === 'repo' ? 'text-blue-600 scale-110' : 'text-slate-300'}`}><Search className={`w-6 h-6 ${activeTab === 'repo' ? 'fill-blue-600/10' : ''}`} /><span className="text-[9px] font-black uppercase tracking-widest">More</span></button>
        <button onClick={() => setActiveTab('help')} className={`flex flex-col items-center gap-2 transition-all ${activeTab === 'help' ? 'text-orange-600 scale-110' : 'text-slate-300'}`}><MessageSquare className={`w-6 h-6 ${activeTab === 'help' ? 'fill-orange-600/10' : ''}`} /><span className="text-[9px] font-black uppercase tracking-widest">Help</span></button>
        <button onClick={() => setActiveTab('me')} className={`flex flex-col items-center gap-2 transition-all ${activeTab === 'me' ? 'text-blue-600 scale-110' : 'text-slate-300'}`}><User className={`w-6 h-6 ${activeTab === 'me' ? 'fill-blue-600/10' : ''}`} /><span className="text-[9px] font-black uppercase tracking-widest">Me</span></button>
      </nav>

      <style>{`
        @import url('[https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap](https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap)');
        :root { font-family: 'Plus Jakarta Sans', sans-serif; }
        @keyframes fade-in { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .animate-in { animation: fade-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}</style>
    </div>
  );
};

export default App;
