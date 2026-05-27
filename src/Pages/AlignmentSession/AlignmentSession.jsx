import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, ChevronRight, ArrowLeft } from 'lucide-react';
import './AlignmentSession.css';

/* ── Architect cards data ── */
const ARCHITECTS = [
  {
    id: 1,
    name: 'Charged Voids',
    city: 'Chandigarh',
    desc: 'Minimalist spatial design with structural clarity.',
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=300&q=80',
  },
  {
    id: 2,
    name: 'Studio Ardete',
    city: 'Chandigarh',
    desc: 'Bold contemporary architecture rooted in context.',
    img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=300&q=80',
  },
  {
    id: 3,
    name: 'SD Sharma & Associates',
    city: 'Mohali',
    desc: 'Decades of precision-driven residential excellence.',
    img: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=300&q=80',
  },
  {
    id: 4,
    name: 'Areté Design Studio',
    city: 'New Chandigarh',
    desc: 'Luxury homes crafted with design integrity.',
    img: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=300&q=80',
  },
];

/* ── Left panel ── */
const LeftPanel = ({ step, role }) => (
  <div className="as-left">
    <div className="as-left-content">
      <div className="as-left-eyebrow">PROJECT INITIATION</div>
      <h1 className="as-left-title">
        The<br />
        <em>Alignment</em><br />
        Session.
      </h1>
      <p className="as-left-desc">
        Construction is the final 20% of the journey, but it
        determines 100% of the outcome. Start the alignment
        between architect, client, and steward here.
      </p>
      <div className="as-left-badge">
        <span className="as-left-dot" />
        PROFESSIONAL INQUIRY ONLY
      </div>
      <div className="as-left-contacts">
        <a href="mailto:start@boxbuildtech.com" className="as-left-link">start@boxbuildtech.com</a>
        <span className="as-left-link">New Chandigarh, India</span>
      </div>

      {/* Step indicator */}
      <div className="as-steps-indicator">
        {[1,2,3].map(n => (
          <div key={n} className={`as-step-dot ${step >= n ? 'active' : ''}`} />
        ))}
      </div>
    </div>
  </div>
);

/* ── Step 1: User Details ── */
const Step1 = ({ data, onChange, onNext }) => {
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!data.name.trim())   e.name   = 'Required';
    if (!data.mobile.trim()) e.mobile = 'Required';
    if (!data.email.trim())  e.email  = 'Required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleNext = () => { if (validate()) onNext(); };

  return (
    <div className="as-form-body">
      <div className="as-step-label">01. YOUR IDENTITY &amp; CONTACT INFO</div>

      <div className="as-field-row">
        <div className="as-field as-field-grow">
          <input
            className={`as-input ${errors.name ? 'error' : ''}`}
            placeholder="Full Name"
            value={data.name}
            onChange={e => onChange('name', e.target.value)}
          />
          {errors.name && <span className="as-error">{errors.name}</span>}
        </div>
        <div className="as-field">
          <div className="as-role-label">YOUR ROLE</div>
          <div className="as-toggle">
            <button
              type="button"
              className={`as-toggle-btn ${data.role === 'owner' ? 'active' : ''}`}
              onClick={() => onChange('role', 'owner')}
            >Owner</button>
            <button
              type="button"
              className={`as-toggle-btn ${data.role === 'architect' ? 'active' : ''}`}
              onClick={() => onChange('role', 'architect')}
            >Architect</button>
          </div>
        </div>
      </div>

      <div className="as-field-row">
        <div className="as-field as-field-grow">
          <input
            className={`as-input ${errors.mobile ? 'error' : ''}`}
            placeholder="Mobile Number"
            value={data.mobile}
            onChange={e => onChange('mobile', e.target.value)}
          />
          {errors.mobile && <span className="as-error">{errors.mobile}</span>}
        </div>
        <div className="as-field as-field-grow">
          <input
            className={`as-input ${errors.email ? 'error' : ''}`}
            type="email"
            placeholder="Email Address"
            value={data.email}
            onChange={e => onChange('email', e.target.value)}
          />
          {errors.email && <span className="as-error">{errors.email}</span>}
        </div>
      </div>

      <div className="as-step-label" style={{ marginTop: '8px' }}>02. PROJECT COORDINATES</div>

      <div className="as-field-row">
        <div className="as-field as-field-grow">
          <input
            className="as-input"
            placeholder="Plot Size / Area"
            value={data.plotSize}
            onChange={e => onChange('plotSize', e.target.value)}
          />
        </div>
        <div className="as-field as-field-grow">
          <input
            className="as-input"
            placeholder="City / Region"
            value={data.city}
            onChange={e => onChange('city', e.target.value)}
          />
        </div>
      </div>

      {/* Architect-specific extra fields */}
      {data.role === 'architect' && (
        <>
          <div className="as-step-label" style={{ marginTop: '8px' }}>03. FIRM DETAILS</div>
          <div className="as-field-row">
            <div className="as-field as-field-grow">
              <input
                className="as-input"
                placeholder="Architecture Firm Name"
                value={data.firm || ''}
                onChange={e => onChange('firm', e.target.value)}
              />
            </div>
            <div className="as-field as-field-grow">
              <select
                className="as-input as-select"
                value={data.projectType || ''}
                onChange={e => onChange('projectType', e.target.value)}
              >
                <option value="">Project Type...</option>
                <option>Concept / Schematic</option>
                <option>Design Development</option>
                <option>Construction Documents</option>
                <option>Ready to Build</option>
              </select>
            </div>
          </div>
        </>
      )}

      <button className="as-submit-btn" onClick={handleNext}>
        {data.role === 'architect' ? 'Submit Request →' : 'Start Project →'}
      </button>
    </div>
  );
};

/* ── Step 2 (Owner): Route Selection ── */
const ROUTES = [
  {
    id: 'design-build',
    title: 'Design & Build',
    desc: 'Full end-to-end service — from architectural design to final handover. One team, total accountability.',
    tag: 'MOST POPULAR',
  },
  {
    id: 'execution-only',
    title: 'Execution Only',
    desc: 'You have your architect and drawings ready. BOX handles the construction with zero deviation from design.',
    tag: 'BRING YOUR ARCHITECT',
  },
];

const Step2Owner = ({ selected, onSelect, onNext, onBack }) => (
  <div className="as-form-body">
    <button className="as-back-btn" onClick={onBack}><ArrowLeft size={14} /> Back</button>
    <div className="as-step-label">02. SELECT YOUR ROUTE</div>
    <p className="as-step-hint">Choose how you'd like to work with BOX.</p>

    <div className="as-route-grid">
      {ROUTES.map(r => (
        <div
          key={r.id}
          className={`as-route-card ${selected === r.id ? 'selected' : ''}`}
          onClick={() => onSelect(r.id)}
        >
          {r.tag && <div className="as-route-tag">{r.tag}</div>}
          <div className="as-route-check">
            <div className={`as-check-circle ${selected === r.id ? 'active' : ''}`} />
          </div>
          <h3 className="as-route-title">{r.title}</h3>
          <p className="as-route-desc">{r.desc}</p>
        </div>
      ))}
    </div>

    <button
      className="as-submit-btn"
      onClick={onNext}
      disabled={!selected}
      style={{ opacity: selected ? 1 : 0.5 }}
    >
      Continue →
    </button>
  </div>
);

/* ── Step 3 (Owner): Architect Selection ── */
const Step3Owner = ({ selected, onSelect, onNext, onBack }) => (
  <div className="as-form-body">
    <button className="as-back-btn" onClick={onBack}><ArrowLeft size={14} /> Back</button>
    <div className="as-step-label">03. SELECT YOUR ARCHITECT</div>
    <p className="as-step-hint">Choose an architect from our trusted network. BOX will coordinate directly with them.</p>

    <div className="as-arch-grid">
      {ARCHITECTS.map(a => (
        <div
          key={a.id}
          className={`as-arch-card ${selected === a.id ? 'selected' : ''}`}
          onClick={() => onSelect(a.id)}
        >
          <div className="as-arch-img-wrap">
            <img src={a.img} alt={a.name} className="as-arch-img" />
            {selected === a.id && (
              <div className="as-arch-selected-badge">
                <CheckCircle size={18} />
              </div>
            )}
          </div>
          <div className="as-arch-info">
            <div className="as-arch-name">{a.name}</div>
            <div className="as-arch-city">{a.city}</div>
            <div className="as-arch-desc">{a.desc}</div>
          </div>
        </div>
      ))}
    </div>

    <button
      className="as-submit-btn"
      onClick={onNext}
      disabled={!selected}
      style={{ opacity: selected ? 1 : 0.5 }}
    >
      Register Project →
    </button>
  </div>
);

/* ── Success Screen ── */
const SuccessScreen = ({ onReset }) => (
  <div className="as-success">
    <div className="as-success-icon">
      <CheckCircle size={40} strokeWidth={1.5} />
    </div>
    <h2 className="as-success-title">Project Registered</h2>
    <p className="as-success-desc">
      Your request has been received. Our team will coordinate with you
      and your selected architect.
    </p>
    <div className="as-success-steps">
      {[
        'BOX confirms project details',
        'Tri-party alignment meeting',
        'Transparent construction proposal',
      ].map((s, i) => (
        <div key={i} className="as-success-step">
          <div className="as-success-step-num">{i + 1}</div>
          <span>{s}</span>
        </div>
      ))}
    </div>
    <button className="as-submit-btn" onClick={onReset}>
      Register Another Project
    </button>
  </div>
);

/* ── Main Component ── */
export default function AlignmentSession() {
  const navigate = useNavigate();
  const [step, setStep]   = useState(1);
  const [done, setDone]   = useState(false);
  const [route, setRoute] = useState('');
  const [arch,  setArch]  = useState(null);

  const [form, setForm] = useState({
    name: '', mobile: '', email: '',
    plotSize: '', city: '',
    role: 'owner',
    firm: '', projectType: '',
  });

  const update = (key, val) => setForm(f => ({ ...f, [key]: val }));

  const handleStep1Next = () => {
    if (form.role === 'architect') { setDone(true); }
    else { setStep(2); }
  };

  const reset = () => {
    setStep(1); setDone(false); setRoute(''); setArch(null);
    setForm({ name:'', mobile:'', email:'', plotSize:'', city:'', role:'owner', firm:'', projectType:'' });
  };

  return (
    <div className="as-root">
      <LeftPanel step={done ? 3 : step} role={form.role} />

      <div className="as-right">
        <div className="as-right-inner">
          {done ? (
            <SuccessScreen onReset={reset} />
          ) : step === 1 ? (
            <Step1 data={form} onChange={update} onNext={handleStep1Next} />
          ) : step === 2 ? (
            <Step2Owner
              selected={route}
              onSelect={setRoute}
              onNext={() => setStep(3)}
              onBack={() => setStep(1)}
            />
          ) : (
            <Step3Owner
              selected={arch}
              onSelect={setArch}
              onNext={() => setDone(true)}
              onBack={() => setStep(2)}
            />
          )}
        </div>
      </div>
    </div>
  );
}
