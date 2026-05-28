import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, CheckCircle, ArrowLeft } from 'lucide-react';
import './ContactUs.css';
import contactUsImg from '../../assets/ConactUsimg.jpg';

/* ── Architect data ── */
const ARCHITECTS = [
  { id: 1, name: 'Charged Voids',         city: 'Chandigarh',     desc: 'Minimalist spatial design with structural clarity.',         img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=300&q=80' },
  { id: 2, name: 'Studio Ardete',          city: 'Chandigarh',     desc: 'Bold contemporary architecture rooted in context.',          img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=300&q=80' },
  { id: 3, name: 'SD Sharma & Associates', city: 'Mohali',         desc: 'Decades of precision-driven residential excellence.',        img: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=300&q=80' },
  { id: 4, name: 'Areté Design Studio',    city: 'New Chandigarh', desc: 'Luxury homes crafted with design integrity.',                img: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=300&q=80' },
  { id: 5, name: 'Devra Architects',       city: 'Chandigarh',     desc: 'Contemporary design with a focus on sustainable living.',    img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=300&q=80' },
  { id: 6, name: 'Sanjay Puri Architects', city: 'Chandigarh',     desc: 'Award-winning firm with over 200 international projects.',   img: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=300&q=80' },
  { id: 7, name: 'The Design Studio',      city: 'Chandigarh',     desc: 'Innovative residential architecture with spatial precision.', img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=300&q=80' },
];

const ROUTES = [
  { id: 'design-build',   title: 'Design & Build',  tag: 'MOST POPULAR',         desc: 'Full end-to-end service — from architectural design to final handover.' },
  { id: 'execution-only', title: 'Execution Only',  tag: 'BRING YOUR ARCHITECT', desc: 'You have your architect and drawings ready. BOX handles the construction.' },
];

const CONTACT_DETAILS = [
  { Icon: Phone,  label: 'Call Us',       value: '+91 7657945469',         sub: 'Mon – Sat, 9am – 7pm'    },
  { Icon: Mail,   label: 'Email Us',      value: 'start@boxbuildtech.com', sub: 'We reply within 24 hours' },
  { Icon: MapPin, label: 'Visit Us',      value: 'New Chandigarh, India',  sub: 'By appointment only'     },
  { Icon: Clock,  label: 'Working Hours', value: 'Mon – Sat: 9am – 7pm',  sub: 'Sunday: Closed'          },
];

/* ── Wizard Steps ── */
const Step1 = ({ data, onChange, onNext }) => {
  const [errors, setErrors] = useState({});
  const validate = () => {
    const e = {};
    if (!data.name.trim())   e.name   = 'Required';
    if (!data.mobile.trim()) e.mobile = 'Required';
    if (!data.email.trim())  e.email  = 'Required';
    setErrors(e);
    return !Object.keys(e).length;
  };
  return (
    <div className="align-form-body">
      <div className="align-step-label">01. YOUR IDENTITY &amp; CONTACT INFO</div>
      <div className="align-field-row">
        <div className="align-field align-field-grow">
          <input className={`align-input${errors.name ? ' error' : ''}`} placeholder="Full Name" value={data.name} onChange={e => onChange('name', e.target.value)} />
          {errors.name && <span className="align-error">{errors.name}</span>}
        </div>
        <div className="align-field">
          <div className="align-role-label">YOUR ROLE</div>
          <div className="align-toggle">
            <button type="button" className={`align-toggle-btn${data.role === 'owner' ? ' active' : ''}`} onClick={() => onChange('role', 'owner')}>Owner</button>
            <button type="button" className={`align-toggle-btn${data.role === 'architect' ? ' active' : ''}`} onClick={() => onChange('role', 'architect')}>Architect</button>
          </div>
        </div>
      </div>
      <div className="align-field-row">
        <div className="align-field align-field-grow">
          <input className={`align-input${errors.mobile ? ' error' : ''}`} placeholder="Mobile Number" value={data.mobile} onChange={e => onChange('mobile', e.target.value)} />
          {errors.mobile && <span className="align-error">{errors.mobile}</span>}
        </div>
        <div className="align-field align-field-grow">
          <input className={`align-input${errors.email ? ' error' : ''}`} type="email" placeholder="Email Address" value={data.email} onChange={e => onChange('email', e.target.value)} />
          {errors.email && <span className="align-error">{errors.email}</span>}
        </div>
      </div>
      <div className="align-step-label">02. PROJECT COORDINATES</div>
      <div className="align-field-row">
        <div className="align-field align-field-grow">
          <input className="align-input" placeholder="Plot Size / Area" value={data.plotSize} onChange={e => onChange('plotSize', e.target.value)} />
        </div>
        <div className="align-field align-field-grow">
          <input className="align-input" placeholder="City / Region" value={data.city} onChange={e => onChange('city', e.target.value)} />
        </div>
      </div>
      {data.role === 'architect' && (
        <>
          <div className="align-step-label">03. FIRM DETAILS</div>
          <div className="align-field-row">
            <div className="align-field align-field-grow">
              <input className="align-input" placeholder="Architecture Firm Name" value={data.firm} onChange={e => onChange('firm', e.target.value)} />
            </div>
            <div className="align-field align-field-grow">
              <select className="align-input align-select" value={data.projectType} onChange={e => onChange('projectType', e.target.value)}>
                <option value="">Project Stage...</option>
                <option>Concept / Schematic</option>
                <option>Design Development</option>
                <option>Construction Documents</option>
                <option>Ready to Build</option>
              </select>
            </div>
          </div>
        </>
      )}
      <button className="align-submit" onClick={() => { if (validate()) onNext(); }}>
        Start Project →
      </button>
    </div>
  );
};

const Step2 = ({ selected, onSelect, onNext, onBack }) => (
  <div className="align-form-body">
    <button className="align-back-btn" onClick={onBack}><ArrowLeft size={14} /> Back</button>
    <div className="align-step-label">02. SELECT YOUR ROUTE</div>
    <p className="align-step-hint">Choose how you'd like to work with BOX.</p>
    <div className="align-route-grid">
      {ROUTES.map(r => (
        <div key={r.id} className={`align-route-card${selected === r.id ? ' selected' : ''}`} onClick={() => onSelect(r.id)}>
          {r.tag && <div className="align-route-tag">{r.tag}</div>}
          <div className={`align-check-circle${selected === r.id ? ' active' : ''}`} />
          <h3 className="align-route-title">{r.title}</h3>
          <p className="align-route-desc">{r.desc}</p>
        </div>
      ))}
    </div>
    <button className="align-submit" onClick={onNext} disabled={!selected} style={{ opacity: selected ? 1 : 0.5 }}>Continue →</button>
  </div>
);

const Step3 = ({ selected, onSelect, onNext, onBack }) => (
  <div className="align-form-body">
    <button className="align-back-btn" onClick={onBack}><ArrowLeft size={14} /> Back</button>
    <div className="align-step-label">03. SELECT YOUR ARCHITECT</div>
    <p className="align-step-hint">Choose from our trusted architect network.</p>
    <div className="align-arch-grid">
      {ARCHITECTS.map(a => (
        <div key={a.id} className={`align-arch-card${selected === a.id ? ' selected' : ''}`} onClick={() => onSelect(a.id)}>
          <div className="align-arch-img-wrap">
            <img src={a.img} alt={a.name} className="align-arch-img" />
            {selected === a.id && <div className="align-arch-badge"><CheckCircle size={16} /></div>}
          </div>
          <div className="align-arch-info">
            <div className="align-arch-name">{a.name}</div>
            <div className="align-arch-city">{a.city}</div>
            <div className="align-arch-desc">{a.desc}</div>
          </div>
        </div>
      ))}
    </div>
    <button className="align-submit" onClick={onNext} disabled={!selected} style={{ opacity: selected ? 1 : 0.5 }}>Register Project →</button>
  </div>
);

const SuccessScreen = ({ onReset }) => (
  <div className="align-success">
    <div className="align-success-icon"><CheckCircle size={40} strokeWidth={1.5} /></div>
    <h3 className="align-success-title">Project Registered</h3>
    <p className="align-success-desc">Your request has been received. Our team will coordinate with you and your selected architect.</p>
    <div className="align-success-steps">
      {['BOX confirms project details', 'Tri-party alignment meeting', 'Transparent construction proposal'].map((s, i) => (
        <div key={i} className="align-success-step">
          <div className="align-success-num">{i + 1}</div>
          <span>{s}</span>
        </div>
      ))}
    </div>
    <button className="align-submit" onClick={onReset}>Register Another Project</button>
  </div>
);

const AlignmentWizard = () => {
  const [step,  setStep]  = useState(1);
  const [done,  setDone]  = useState(false);
  const [route, setRoute] = useState('');
  const [arch,  setArch]  = useState(null);
  const [form,  setForm]  = useState({ name:'', mobile:'', email:'', plotSize:'', city:'', role:'owner', firm:'', projectType:'' });
  const update = (k, v) => setForm(f => ({ ...f, [k]: v }));
  const reset = () => { setStep(1); setDone(false); setRoute(''); setArch(null); setForm({ name:'', mobile:'', email:'', plotSize:'', city:'', role:'owner', firm:'', projectType:'' }); };
  const handleStep1Next = () => {
    // Both owner and architect go to step 2 (route) then step 3 (architect grid)
    setStep(2);
  };
  return (
    <>
      {done ? <SuccessScreen onReset={reset} />
        : step === 1 ? <Step1 data={form} onChange={update} onNext={handleStep1Next} />
        : step === 2 ? <Step2 selected={route} onSelect={setRoute} onNext={() => setStep(3)} onBack={() => setStep(1)} />
        : <Step3 selected={arch} onSelect={setArch} onNext={() => setDone(true)} onBack={() => setStep(2)} />}
    </>
  );
};

/* ── Main Page ── */
export default function ContactUsPage() {
  return (
    <div className="cu-page">

      {/* MAIN */}
      <section className="cu-main">
        <div className="cu-container">
          <div className="cu-grid">

            {/* Left: Info */}
            <div className="cu-info-col">
              <h2 className="cu-info-title">Contact Information</h2>
              <p className="cu-info-sub">Reach out through any channel — we're always ready to talk about your next project.</p>
              <div className="cu-details">
                {CONTACT_DETAILS.map(({ Icon, label, value, sub }) => (
                  <div className="cu-detail-row" key={label}>
                    <div className="cu-detail-icon"><Icon size={20} strokeWidth={1.5} /></div>
                    <div className="cu-detail-text">
                      <span className="cu-detail-label">{label}</span>
                      <span className="cu-detail-value">{value}</span>
                      <span className="cu-detail-sub">{sub}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Wizard */}
            <div className="cu-form-col">
              <AlignmentWizard />
            </div>

          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="cu-map-section">
        <div className="cu-map-overlay-text">
          <MapPin size={20} strokeWidth={1.5} />
          New Chandigarh, India
        </div>
        <iframe
          title="BOX Buildtech Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192776!2d77.06889754725782!3d28.52758200617607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1715000000000!5m2!1sen!2sin"
          className="cu-map-iframe"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

    </div>
  );
}
