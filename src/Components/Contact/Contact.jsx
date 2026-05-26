import { useState } from "react";
import "./Contact.css";

const SERVICES_LIST = [
  "Design & Build",
  "High End Residential",
];

export default function Contact() {
  const [role, setRole]   = useState("owner");   // "owner" | "architect"
  const [form, setForm]   = useState({
    name: "", mobile: "", email: "",
    plotSize: "", city: "",
    projectType: "", budget: "", message: "",
    // architect-specific
    firm: "", projectStage: "",
  });
  const [sent, setSent] = useState(false);

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSend = () => {
    if (form.name && form.mobile && form.email) {
      setSent(true);
      setForm({ name:"", mobile:"", email:"", plotSize:"", city:"", projectType:"", budget:"", message:"", firm:"", projectStage:"" });
      setTimeout(() => setSent(false), 6000);
    }
  };

  return (
    <section id="contact" className="align-section">
      <div className="align-inner">

        {/* ── LEFT EDITORIAL ── */}
        <div className="align-left">
          <div className="align-eyebrow">PROJECT INITIATION</div>

          <h2 className="align-title">
            The Alignment Session.
          </h2>

          <p className="align-desc">
            Construction is the final 20% of the journey, but it determines
            100% of the outcome. Start the alignment between architect,
            client, and steward here.
          </p>

          <div className="align-note">
            <span className="align-note-dot" />
            PROFESSIONAL INQUIRY ONLY
          </div>

          <div className="align-contact-links">
            <a href="mailto:start@boxbuildtech.com" className="align-link">
              start@boxbuildtech.com
            </a>
            <a href="tel:+91" className="align-link">
               New Chandigarh, India
            </a>
          </div>
        </div>

        {/* ── RIGHT FORM ── */}
        <div className="align-right">
          {sent ? (
            <div className="align-success">
              <div className="align-success-icon">✓</div>
              <h3>Alignment Request Received</h3>
              <p>Our team will reach out within 24 hours to schedule your session.</p>
            </div>
          ) : (
            <form className="align-form" onSubmit={(e) => { e.preventDefault(); handleSend(); }}>

              {/* STEP 01 */}
              <div className="align-step-label">01. YOUR IDENTITY &amp; CONTACT INFO</div>

              <div className="align-form-row">
                <div className="align-field align-field--grow">
                  <input
                    className="align-input"
                    placeholder="Full Name"
                    value={form.name}
                    onChange={set("name")}
                    required
                  />
                </div>

                {/* Role toggle */}
                <div className="align-field">
                  <div className="align-role-label">YOUR ROLE</div>
                  <div className="align-toggle">
                    <button
                      type="button"
                      className={`align-toggle-btn${role === "owner" ? " active" : ""}`}
                      onClick={() => setRole("owner")}
                    >
                      Owner
                    </button>
                    <button
                      type="button"
                      className={`align-toggle-btn${role === "architect" ? " active" : ""}`}
                      onClick={() => setRole("architect")}
                    >
                      Architect
                    </button>
                  </div>
                </div>
              </div>

              <div className="align-form-row">
                <div className="align-field align-field--grow">
                  <input
                    className="align-input"
                    placeholder="Mobile Number"
                    value={form.mobile}
                    onChange={set("mobile")}
                    required
                  />
                </div>
                <div className="align-field align-field--grow">
                  <input
                    className="align-input"
                    type="email"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={set("email")}
                    required
                  />
                </div>
              </div>

              {/* Architect-only: firm name */}
              {role === "architect" && (
                <div className="align-form-row">
                  <div className="align-field align-field--grow">
                    <input
                      className="align-input"
                      placeholder="Architecture Firm Name"
                      value={form.firm}
                      onChange={set("firm")}
                    />
                  </div>
                </div>
              )}

              {/* STEP 02 */}
              <div className="align-step-label">02. PROJECT COORDINATES</div>

              <div className="align-form-row">
                <div className="align-field align-field--grow">
                  <input
                    className="align-input"
                    placeholder={role === "architect" ? "Project Location" : "Plot Size / Area"}
                    value={form.plotSize}
                    onChange={set("plotSize")}
                  />
                </div>
                <div className="align-field align-field--grow">
                  <input
                    className="align-input"
                    placeholder="City / Region"
                    value={form.city}
                    onChange={set("city")}
                  />
                </div>
              </div>

              {/* STEP 03 */}
              <div className="align-step-label">03. ROUTE SELECTION</div>

              <div className="align-form-row">
                <div className="align-field align-field--grow">
                  <select
                    className="align-input align-select"
                    value={form.projectType}
                    onChange={set("projectType")}
                  >
                    <option value="">
                      {role === "architect" ? "Project Type..." : "Service Interested In..."}
                    </option>
                    {SERVICES_LIST.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                {role === "owner" && (
                  <div className="align-field align-field--grow">
                    <select
                      className="align-input align-select"
                      value={form.budget}
                      onChange={set("budget")}
                    >
                      <option value="">Approximate Budget...</option>
                      <option>Under ₹50 Lakhs</option>
                      <option>₹50L – ₹1 Crore</option>
                      <option>₹1Cr – ₹3 Crore</option>
                      <option>₹3Cr+</option>
                    </select>
                  </div>
                )}
                {role === "architect" && (
                  <div className="align-field align-field--grow">
                    <select
                      className="align-input align-select"
                      value={form.projectStage}
                      onChange={set("projectStage")}
                    >
                      <option value="">Project Stage...</option>
                      <option>Concept / Schematic</option>
                      <option>Design Development</option>
                      <option>Construction Documents</option>
                      <option>Ready to Build</option>
                    </select>
                  </div>
                )}
              </div>

              <div className="align-field">
                <textarea
                  className="align-input align-textarea"
                  rows={4}
                  placeholder={
                    role === "architect"
                      ? "Describe the project brief and what you need from BOX..."
                      : "Tell us about your vision and project requirements..."
                  }
                  value={form.message}
                  onChange={set("message")}
                />
              </div>

              <button type="submit" className="align-submit">
                START PROJECT →
              </button>

            </form>
          )}
        </div>

      </div>
    </section>
  );
}
