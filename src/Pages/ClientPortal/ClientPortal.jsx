import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Home,
  Eye,
  FileText,
  Monitor,
  LogOut,
  Search,
  Bell,
  ChevronDown,
  Maximize2,
  Clock,
  TrendingUp,
  CheckCircle,
  ChevronRight,
  Users,
  ShieldAlert,
  CloudOff,
  Filter,
  Upload,
  Download,
  File,
  FolderOpen,
  Send,
  MoreHorizontal,
  Lock,
} from 'lucide-react';
import boxLogo from '../../assets/BOX.png';
import siteImg from '../../assets/BOXimg1.jpg';
import './ClientPortal.css';

/* ─── Sidebar nav items ─── */
const SIDEBAR_ITEMS = [
  { id: 'project-evolution', icon: Home,     label: 'Project Evolution' },
  { id: 'site-stewardship',  icon: Eye,      label: 'Site Stewardship',  active: true },
  { id: 'drawing-vault',     icon: FileText, label: 'Drawing Vault' },
  { id: 'architect-sync',    icon: Monitor,  label: 'Architect Sync' },
];

/* ─── Three.js rotatable house model ─── */
const ModelViewer = ({ expanded }) => {
  const mountRef  = useRef(null);
  const sceneRef  = useRef(null);

  useEffect(() => {
    const el = mountRef.current;
    if (!el) return;

    // ── Dynamic import so Three.js is code-split ──
    let animId;
    let renderer;

    import('three').then((THREE) => {
      const W = el.clientWidth;
      const H = el.clientHeight;

      // ── Renderer ──
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(W, H);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      el.appendChild(renderer.domElement);

      // ── Scene ──
      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0x0d0d0d);
      sceneRef.current = scene;

      // ── Camera ──
      const camera = new THREE.PerspectiveCamera(45, W / H, 0.1, 100);
      camera.position.set(5, 4, 7);
      camera.lookAt(0, 1, 0);

      // ── Lights ──
      const ambient = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambient);

      const sun = new THREE.DirectionalLight(0xffffff, 1.2);
      sun.position.set(8, 12, 6);
      sun.castShadow = true;
      sun.shadow.mapSize.set(1024, 1024);
      scene.add(sun);

      const goldLight = new THREE.PointLight(0xe9a102, 1.5, 10);
      goldLight.position.set(0, 3, 3);
      scene.add(goldLight);

      const fillLight = new THREE.DirectionalLight(0x4466aa, 0.4);
      fillLight.position.set(-6, 4, -4);
      scene.add(fillLight);

      // ── Materials ──
      const wallMat   = new THREE.MeshStandardMaterial({ color: 0x2a2a2a, roughness: 0.8, metalness: 0.1 });
      const roofMat   = new THREE.MeshStandardMaterial({ color: 0x1a1a1a, roughness: 0.9, metalness: 0.05 });
      const goldMat   = new THREE.MeshStandardMaterial({ color: 0xe9a102, roughness: 0.3, metalness: 0.7, emissive: 0xe9a102, emissiveIntensity: 0.15 });
      const glassMat  = new THREE.MeshStandardMaterial({ color: 0x88aacc, roughness: 0.05, metalness: 0.1, transparent: true, opacity: 0.45 });
      const doorMat   = new THREE.MeshStandardMaterial({ color: 0xe9a102, roughness: 0.4, metalness: 0.5 });
      const groundMat = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 1.0 });
      const trimMat   = new THREE.MeshStandardMaterial({ color: 0x3a3a3a, roughness: 0.7 });

      // ── Helper: box mesh ──
      const box = (w, h, d, mat, x = 0, y = 0, z = 0) => {
        const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
        m.position.set(x, y, z);
        m.castShadow = true;
        m.receiveShadow = true;
        return m;
      };

      // ── Group to rotate ──
      const house = new THREE.Group();
      scene.add(house);

      // Ground slab
      const ground = box(6, 0.12, 5, groundMat, 0, -0.06, 0);
      house.add(ground);

      // ── Main body ──
      const body = box(4, 2.2, 3.2, wallMat, 0, 1.1, 0);
      house.add(body);

      // ── Gold accent trim (horizontal band) ──
      const trimH = box(4.02, 0.08, 3.22, goldMat, 0, 2.2, 0);
      house.add(trimH);
      const trimBase = box(4.02, 0.08, 3.22, goldMat, 0, 0.04, 0);
      house.add(trimBase);

      // ── Roof (gable — two sloped panels via rotation) ──
      const roofGroup = new THREE.Group();
      roofGroup.position.set(0, 2.2, 0);
      house.add(roofGroup);

      // Left slope
      const roofL = new THREE.Mesh(new THREE.BoxGeometry(2.35, 0.1, 3.6), roofMat);
      roofL.position.set(-1.0, 0.7, 0);
      roofL.rotation.z = Math.PI / 5;
      roofL.castShadow = true;
      roofGroup.add(roofL);

      // Right slope
      const roofR = new THREE.Mesh(new THREE.BoxGeometry(2.35, 0.1, 3.6), roofMat);
      roofR.position.set(1.0, 0.7, 0);
      roofR.rotation.z = -Math.PI / 5;
      roofR.castShadow = true;
      roofGroup.add(roofR);

      // Roof ridge (gold)
      const ridge = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.12, 3.6), goldMat);
      ridge.position.set(0, 1.42, 0);
      roofGroup.add(ridge);

      // Roof overhang front/back
      [-1.7, 1.7].forEach((z) => {
        const gable = box(4.1, 0.08, 0.08, roofMat, 0, 0.72, z);
        roofGroup.add(gable);
      });

      // ── Front facade details ──
      // Door
      const door = box(0.7, 1.2, 0.06, doorMat, 0, 0.6, 1.63);
      house.add(door);
      // Door frame (gold)
      const doorFrameTop  = box(0.82, 0.07, 0.07, goldMat, 0, 1.24, 1.63);
      const doorFrameL    = box(0.07, 1.2,  0.07, goldMat, -0.44, 0.6, 1.63);
      const doorFrameR    = box(0.07, 1.2,  0.07, goldMat,  0.44, 0.6, 1.63);
      house.add(doorFrameTop, doorFrameL, doorFrameR);

      // Windows — front (2)
      [[-1.3, 1.4], [1.3, 1.4]].forEach(([x, y]) => {
        const win = box(0.7, 0.6, 0.05, glassMat, x, y, 1.63);
        house.add(win);
        // Window frame
        const wfT = box(0.82, 0.06, 0.06, goldMat, x, y + 0.33, 1.63);
        const wfB = box(0.82, 0.06, 0.06, goldMat, x, y - 0.33, 1.63);
        const wfL = box(0.06, 0.6,  0.06, goldMat, x - 0.41, y, 1.63);
        const wfR = box(0.06, 0.6,  0.06, goldMat, x + 0.41, y, 1.63);
        house.add(wfT, wfB, wfL, wfR);
      });

      // Windows — side (left wall, 2)
      [[0, 1.4, -0.6], [0, 1.4, 0.6]].forEach(([x, y, z]) => {
        const win = box(0.05, 0.55, 0.65, glassMat, -2.03, y, z);
        house.add(win);
        const wfT = box(0.06, 0.06, 0.77, goldMat, -2.03, y + 0.3, z);
        const wfB = box(0.06, 0.06, 0.77, goldMat, -2.03, y - 0.3, z);
        const wfL = box(0.06, 0.55, 0.06, goldMat, -2.03, y, z - 0.38);
        const wfR = box(0.06, 0.55, 0.06, goldMat, -2.03, y, z + 0.38);
        house.add(wfT, wfB, wfL, wfR);
      });

      // Windows — right wall
      [[0, 1.4, -0.6], [0, 1.4, 0.6]].forEach(([x, y, z]) => {
        const win = box(0.05, 0.55, 0.65, glassMat, 2.03, y, z);
        house.add(win);
        const wfT = box(0.06, 0.06, 0.77, goldMat, 2.03, y + 0.3, z);
        const wfB = box(0.06, 0.06, 0.77, goldMat, 2.03, y - 0.3, z);
        const wfL = box(0.06, 0.55, 0.06, goldMat, 2.03, y, z - 0.38);
        const wfR = box(0.06, 0.55, 0.06, goldMat, 2.03, y, z + 0.38);
        house.add(wfT, wfB, wfL, wfR);
      });

      // ── Chimney ──
      const chimney = box(0.4, 1.1, 0.4, trimMat, 1.2, 3.1, -0.6);
      house.add(chimney);
      const chimneyTop = box(0.5, 0.08, 0.5, goldMat, 1.2, 3.66, -0.6);
      house.add(chimneyTop);

      // ── Porch columns (gold) ──
      [-0.9, 0.9].forEach((x) => {
        const col = box(0.1, 1.3, 0.1, goldMat, x, 0.65, 1.9);
        house.add(col);
      });
      // Porch beam
      const porchBeam = box(2.0, 0.1, 0.1, goldMat, 0, 1.32, 1.9);
      house.add(porchBeam);

      // ── Grid floor ──
      const gridHelper = new THREE.GridHelper(12, 20, 0x222222, 0x1a1a1a);
      gridHelper.position.y = -0.12;
      scene.add(gridHelper);

      // ── Orbit controls (manual, no import needed) ──
      let isDragging = false;
      let prevX = 0, prevY = 0;
      let rotY = 0.4, rotX = -0.2;
      let velY = 0.004; // auto-rotate velocity
      let lastMoveTime = 0;

      const onPointerDown = (e) => {
        isDragging = true;
        prevX = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
        prevY = e.clientY ?? e.touches?.[0]?.clientY ?? 0;
        velY = 0;
        e.preventDefault();
      };

      const onPointerMove = (e) => {
        if (!isDragging) return;
        const cx = e.clientX ?? e.touches?.[0]?.clientX ?? prevX;
        const cy = e.clientY ?? e.touches?.[0]?.clientY ?? prevY;
        const dx = cx - prevX;
        const dy = cy - prevY;
        rotY += dx * 0.008;
        rotX += dy * 0.005;
        rotX = Math.max(-0.55, Math.min(0.55, rotX));
        velY = dx * 0.008;
        prevX = cx;
        prevY = cy;
        lastMoveTime = Date.now();
      };

      const onPointerUp = () => {
        isDragging = false;
      };

      const canvas = renderer.domElement;
      canvas.addEventListener('mousedown',  onPointerDown, { passive: false });
      canvas.addEventListener('touchstart', onPointerDown, { passive: false });
      window.addEventListener('mousemove',  onPointerMove);
      window.addEventListener('touchmove',  onPointerMove, { passive: true });
      window.addEventListener('mouseup',    onPointerUp);
      window.addEventListener('touchend',   onPointerUp);

      // ── Resize ──
      const onResize = () => {
        if (!el) return;
        const w = el.clientWidth;
        const h = el.clientHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      };
      window.addEventListener('resize', onResize);

      // ── Animate ──
      const animate = () => {
        animId = requestAnimationFrame(animate);

        // Auto-rotate when idle
        if (!isDragging) {
          const idle = Date.now() - lastMoveTime > 800;
          if (idle) velY = 0.004;
          rotY += velY;
          velY *= 0.96;
        }

        house.rotation.y = rotY;
        house.rotation.x = rotX;

        // Subtle gold light pulse
        goldLight.intensity = 1.2 + Math.sin(Date.now() * 0.002) * 0.3;

        renderer.render(scene, camera);
      };
      animate();

      // ── Cleanup stored on ref ──
      sceneRef.current = {
        cleanup: () => {
          cancelAnimationFrame(animId);
          canvas.removeEventListener('mousedown',  onPointerDown);
          canvas.removeEventListener('touchstart', onPointerDown);
          window.removeEventListener('mousemove',  onPointerMove);
          window.removeEventListener('touchmove',  onPointerMove);
          window.removeEventListener('mouseup',    onPointerUp);
          window.removeEventListener('touchend',   onPointerUp);
          window.removeEventListener('resize',     onResize);
          renderer.dispose();
          if (el.contains(canvas)) el.removeChild(canvas);
        },
      };
    });

    return () => {
      cancelAnimationFrame(animId);
      sceneRef.current?.cleanup?.();
    };
  }, []);

  return (
    <div
      className={`cp-model-wrap ${expanded ? 'cp-model-expanded' : ''}`}
      style={{ cursor: 'grab' }}
    >
      <div
        ref={mountRef}
        style={{ width: '100%', height: '100%', display: 'block' }}
      />
      {/* Legend */}
      <div className="cp-model-legend">
        <span className="cp-legend-dot cp-dot-gold" />
        <span className="cp-legend-label">SITE POINTS</span>
        <span className="cp-legend-dot cp-dot-grey" />
        <span className="cp-legend-label">STRUCTURES</span>
      </div>
      {/* Drag hint */}
      <div className="cp-model-drag-hint">DRAG TO ROTATE</div>
    </div>
  );
};

export default function ClientPortal() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('site-stewardship');
  const [expanded, setExpanded]           = useState(false);
  const [searchVal, setSearchVal]         = useState('');

  const handleExit = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="cp-root">

      {/* ══════════════════════════════════
          SIDEBAR
      ══════════════════════════════════ */}
      <aside className="cp-sidebar">

        {/* Logo */}
        <div className="cp-sidebar-logo">
          <img src={boxLogo} alt="BOX" className="cp-logo-img" />
          <span className="cp-logo-sub">STEWARDSHIP PORTAL</span>
        </div>

        {/* Nav */}
        <nav className="cp-sidebar-nav">
          {SIDEBAR_ITEMS.map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              className={`cp-nav-item ${activeSection === id ? 'cp-nav-active' : ''}`}
              onClick={() => setActiveSection(id)}
            >
              <Icon size={16} strokeWidth={1.8} className="cp-nav-icon" />
              <span className="cp-nav-label">{label}</span>
            </button>
          ))}
        </nav>

        {/* Exit */}
        <button className="cp-exit-btn" onClick={handleExit}>
          <LogOut size={15} strokeWidth={1.8} />
          <span>Exit Portal</span>
        </button>
      </aside>

      {/* ══════════════════════════════════
          MAIN CONTENT
      ══════════════════════════════════ */}
      <div className="cp-main">

        {/* ── Top Bar ── */}
        <header className="cp-topbar">
          {/* Search */}
          <div className="cp-search-wrap">
            <Search size={14} className="cp-search-icon" />
            <input
              className="cp-search-input"
              placeholder="Search logs, invoices, or drawings..."
              value={searchVal}
              onChange={(e) => setSearchVal(e.target.value)}
            />
          </div>

          {/* Demo badge */}
          <div className="cp-demo-badge">
            <span className="cp-demo-dot" />
            DEMO MODE (LOCAL DATA ONLY)
          </div>

          {/* User */}
          <div className="cp-user-wrap">
            <div className="cp-user-info">
              <span className="cp-user-name">Mr. Vikramaditya Singh</span>
              <span className="cp-user-role">EXECUTIVE CLIENT</span>
            </div>
            <div className="cp-user-avatar">VS</div>
            <ChevronDown size={13} className="cp-user-chevron" />
            <button className="cp-bell-btn" aria-label="Notifications">
              <Bell size={16} strokeWidth={1.8} />
            </button>
          </div>
        </header>

        {/* ── Page Body ── */}
        <div className="cp-body">

          {activeSection === 'project-evolution' && <ProjectEvolution />}

          {activeSection === 'site-stewardship' && (
            <SiteStewardship
              expanded={expanded}
              setExpanded={setExpanded}
            />
          )}

          {activeSection === 'drawing-vault' && <DrawingVault />}

          {activeSection === 'architect-sync' && <ArchitectSync />}

          {activeSection !== 'site-stewardship' &&
           activeSection !== 'project-evolution' &&
           activeSection !== 'drawing-vault' &&
           activeSection !== 'architect-sync' && (
            <div className="cp-coming-soon">
              <div className="cp-cs-icon">🔒</div>
              <h2 className="cp-cs-title">Coming Soon</h2>
              <p className="cp-cs-sub">This section is under development.</p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════
   SITE STEWARDSHIP SECTION
══════════════════════════════════════════ */
function SiteStewardship({ expanded, setExpanded }) {
  return (
    <div className="cp-ss-root">

      {/* ── Section header ── */}
      <div className="cp-ss-header">
        <div>
          <p className="cp-ss-eyebrow">INTERACTIVE DIGITAL TWIN</p>
          <h1 className="cp-ss-title">
            Structural Fidelity <span className="cp-ss-title-italic">Map.</span>
          </h1>
        </div>
        <div className="cp-ss-header-right">
          <div className="cp-ss-badge cp-ss-badge-outline">
            <span className="cp-ss-badge-label">PROJECT MODEL</span>
            <span className="cp-ss-badge-value">LOD 400 (Construction-Ready)</span>
          </div>
          <div className="cp-ss-badge cp-ss-badge-gold">
            <span className="cp-ss-badge-label">LIVE SITE STATUS</span>
            <span className="cp-ss-badge-value">ACTIVE SITE CONTROL</span>
          </div>
        </div>
      </div>

      {/* ── 3-D Model card ── */}
      <div className="cp-ss-model-card">
        <div className="cp-ss-model-topbar">
          <span className="cp-ss-model-dot" />
          <span className="cp-ss-model-eyebrow">3D PROJECT STEWARD</span>
        </div>
        <h2 className="cp-ss-model-title">
          Bento Residence <span className="cp-ss-model-version">V-04</span>
        </h2>
        <p className="cp-ss-model-sub">Interactive Construction Fidelity Map</p>

        {/* Expand button */}
        <button
          className="cp-ss-expand-btn"
          onClick={() => setExpanded((v) => !v)}
          aria-label="Toggle fullscreen"
        >
          <Maximize2 size={16} />
        </button>

        {/* 3-D viewer */}
        <ModelViewer expanded={expanded} />
      </div>

      {/* ── Time-lapse + Executive Snapshot row ── */}
      <div className="cp-ss-bottom-row">

        {/* Time-lapse card */}
        <div className="cp-ss-timelapse-card">
          <div className="cp-ss-tl-header">
            <span className="cp-ss-tl-dot" />
            <span className="cp-ss-tl-title">Site Time-Lapse (North Wing)</span>
          </div>
          <div className="cp-ss-tl-thumb">
            <img src={siteImg} alt="Site time-lapse" className="cp-ss-tl-img" />
            <div className="cp-ss-tl-overlay" />
            <button className="cp-ss-tl-play">
              <span className="cp-ss-tl-play-icon">↗</span>
            </button>
          </div>
        </div>

        {/* Executive snapshot */}
        <div className="cp-ss-snapshot-card">
          <p className="cp-ss-snap-eyebrow">EXECUTIVE SNAPSHOT</p>

          <div className="cp-ss-snap-row">
            <span className="cp-ss-snap-label">CURRENT MILESTONE</span>
            <span className="cp-ss-snap-value">Foundation Curing &amp; PCC</span>
          </div>

          <div className="cp-ss-snap-divider" />

          <div className="cp-ss-snap-row">
            <span className="cp-ss-snap-label">DRAWING COMPLIANCE</span>
            <span className="cp-ss-snap-value cp-ss-snap-gold">100%</span>
          </div>

          <div className="cp-ss-snap-divider" />

          <div className="cp-ss-snap-row">
            <span className="cp-ss-snap-label">BUDGET BURN RATE</span>
            <span className="cp-ss-snap-value">Within Envelope (-4.2%)</span>
          </div>

          <button className="cp-ss-inspect-btn">REQUEST SITE INSPECTION</button>
        </div>

      </div>
    </div>
  );
}

/* ══════════════════════════════════════════
   PROJECT EVOLUTION SECTION
══════════════════════════════════════════ */

const ROADMAP = [
  {
    id: 1,
    label: 'Foundation & PCC',
    date: 'April 20, 2026',
    status: 'done',       // done | active | upcoming
  },
  {
    id: 2,
    label: 'Ground Floor Slab',
    date: 'May 05, 2026',
    status: 'done',
  },
  {
    id: 3,
    label: 'First Floor Pillars',
    date: 'May 15, 2026',
    status: 'active',
    badge: 'ON SITE NOW',
  },
  {
    id: 4,
    label: 'Roof Framing',
    date: 'June 30, 2026',
    status: 'upcoming',
  },
  {
    id: 5,
    label: 'Interior Masonry',
    date: 'July 15, 2026',
    status: 'upcoming',
  },
  {
    id: 6,
    label: 'MEP Rough-In',
    date: 'August 10, 2026',
    status: 'upcoming',
  },
  {
    id: 7,
    label: 'Plastering & Finishing',
    date: 'September 20, 2026',
    status: 'upcoming',
  },
  {
    id: 8,
    label: 'Handover',
    date: 'October 31, 2026',
    status: 'upcoming',
  },
];

function ProjectEvolution() {
  const [expandedItem, setExpandedItem] = useState(null);

  const toggle = (id) => setExpandedItem((prev) => (prev === id ? null : id));

  return (
    <div className="pe-root">

      {/* ── Header ── */}
      <div className="pe-header">
        <div>
          <p className="pe-eyebrow">PROJECT BRIEF</p>
          <h1 className="pe-title">
            Construction <span className="pe-title-italic">Stewardship.</span>
          </h1>
        </div>
        <div className="pe-completion-badge">
          <span className="pe-completion-label">TOTAL COMPLETION</span>
          <span className="pe-completion-value">34%</span>
        </div>
      </div>

      {/* ── KPI cards ── */}
      <div className="pe-kpi-row">
        {/* Development Days */}
        <div className="pe-kpi-card">
          <Clock size={20} strokeWidth={1.5} className="pe-kpi-icon" />
          <span className="pe-kpi-label">DEVELOPMENT DAYS</span>
          <span className="pe-kpi-value">102 / 365</span>
          <div className="pe-kpi-bar-track">
            <div className="pe-kpi-bar-fill" style={{ width: '28%' }} />
          </div>
        </div>

        {/* Residency Fidelity Score */}
        <div className="pe-kpi-card">
          <TrendingUp size={20} strokeWidth={1.5} className="pe-kpi-icon pe-kpi-icon-gold" />
          <span className="pe-kpi-label">RESIDENCY FIDELITY SCORE</span>
          <span className="pe-kpi-value">99.8%</span>
          <div className="pe-kpi-tolerance">
            <CheckCircle size={13} strokeWidth={2} className="pe-tolerance-icon" />
            <span>Within Tolerance</span>
          </div>
        </div>
      </div>

      {/* ── Two-column: Roadmap + Site Environment ── */}
      <div className="pe-bottom-grid">

        {/* Construction Roadmap */}
        <div className="pe-roadmap-col">
          <p className="pe-col-eyebrow">CONSTRUCTION ROADMAP</p>

          <div className="pe-timeline">
            {ROADMAP.map((item, idx) => (
              <div key={item.id} className={`pe-tl-item pe-tl-${item.status}`}>

                {/* Spine line */}
                {idx < ROADMAP.length - 1 && (
                  <div className={`pe-tl-spine ${item.status === 'upcoming' ? 'pe-spine-dim' : ''}`} />
                )}

                {/* Node */}
                <div className="pe-tl-node-wrap">
                  <div className={`pe-tl-node pe-node-${item.status}`}>
                    {item.status === 'done'   && <CheckCircle size={12} strokeWidth={2.5} />}
                    {item.status === 'active' && <span className="pe-node-pulse" />}
                    {item.status === 'upcoming' && <span className="pe-node-empty" />}
                  </div>
                </div>

                {/* Row content */}
                <button
                  className="pe-tl-row"
                  onClick={() => toggle(item.id)}
                  aria-expanded={expandedItem === item.id}
                >
                  <div className="pe-tl-text">
                    <span className="pe-tl-label">{item.label}</span>
                    <span className="pe-tl-date">{item.date}</span>
                  </div>
                  <div className="pe-tl-right">
                    {item.badge && (
                      <span className="pe-tl-badge">{item.badge}</span>
                    )}
                    <ChevronRight
                      size={14}
                      strokeWidth={2}
                      className={`pe-tl-chevron ${expandedItem === item.id ? 'pe-chevron-open' : ''}`}
                    />
                  </div>
                </button>

                {/* Expanded detail */}
                {expandedItem === item.id && (
                  <div className="pe-tl-detail">
                    {item.status === 'active' && (
                      <p className="pe-tl-detail-text">
                        Currently in progress. First floor column casting is 60% complete.
                        Re-checking center-line alignment before tomorrow's pour.
                      </p>
                    )}
                    {item.status === 'done' && (
                      <p className="pe-tl-detail-text">
                        Stage completed and verified. Drawing compliance confirmed at 100%.
                      </p>
                    )}
                    {item.status === 'upcoming' && (
                      <p className="pe-tl-detail-text">
                        Scheduled. Materials procurement in progress. No delays anticipated.
                      </p>
                    )}
                  </div>
                )}

              </div>
            ))}
          </div>
        </div>

        {/* Site Environment */}
        <div className="pe-env-col">
          <p className="pe-col-eyebrow">SITE ENVIRONMENT</p>

          <div className="pe-env-card">
            <div className="pe-env-row">
              <div className="pe-env-row-left">
                <Users size={14} strokeWidth={1.8} className="pe-env-icon" />
                <span className="pe-env-key">Total Work Force</span>
              </div>
              <span className="pe-env-val pe-env-val-bold">42 Personnel</span>
            </div>

            <div className="pe-env-divider" />

            <div className="pe-env-row">
              <div className="pe-env-row-left">
                <ShieldAlert size={14} strokeWidth={1.8} className="pe-env-icon" />
                <span className="pe-env-key">HSE Incidents</span>
              </div>
              <span className="pe-env-val pe-env-val-green">0</span>
            </div>

            <div className="pe-env-divider" />

            <div className="pe-env-row">
              <div className="pe-env-row-left">
                <CloudOff size={14} strokeWidth={1.8} className="pe-env-icon" />
                <span className="pe-env-key">Weather Blockage</span>
              </div>
              <span className="pe-env-val pe-env-val-bold">None</span>
            </div>
          </div>

          {/* Latest Steward Note */}
          <div className="pe-steward-note">
            <p className="pe-steward-label">LATEST STEWARD NOTE</p>
            <blockquote className="pe-steward-quote">
              "First floor columns casting is 60% complete. Re-checking center-line
              alignment before tomorrow's pour."
            </blockquote>
          </div>
        </div>

      </div>
    </div>
  );
}

/* ══════════════════════════════════════════
   DRAWING VAULT SECTION
══════════════════════════════════════════ */

const VAULT_CATEGORIES = [
  { id: 'architectural', label: 'Architectural', files: 1 },
  { id: 'structural',    label: 'Structural',    files: 0 },
  { id: 'electrical',    label: 'Electrical',    files: 1 },
  { id: 'plumbing',      label: 'Plumbing',      files: 0 },
];

const VAULT_DOCS = [
  {
    id: 1,
    name: 'Floor_Plan_Rev3.pdf',
    category: 'ARCHITECTURAL',
    size: '12.4 MB',
    approvedOn: 'May 01, 2026',
    type: 'pdf',
  },
  {
    id: 2,
    name: 'Structural_Audit_Report.pdf',
    category: 'ENGINEERING',
    size: '4.2 MB',
    approvedOn: 'May 08, 2026',
    type: 'pdf',
  },
  {
    id: 3,
    name: 'Electrical_Layout_V2.dwg',
    category: 'MEP',
    size: '28.1 MB',
    approvedOn: 'April 25, 2026',
    type: 'dwg',
  },
  {
    id: 4,
    name: 'Land_Permit_Document.pdf',
    category: 'LEGAL',
    size: '1.1 MB',
    approvedOn: 'March 15, 2026',
    type: 'pdf',
  },
];

function DrawingVault() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [uploadPulse,  setUploadPulse]  = useState(false);

  const handleUpload = () => {
    setUploadPulse(true);
    setTimeout(() => setUploadPulse(false), 600);
  };

  const filtered = activeFilter === 'all'
    ? VAULT_DOCS
    : VAULT_DOCS.filter((d) => d.category.toLowerCase() === activeFilter);

  return (
    <div className="dv-root">

      {/* ── Header ── */}
      <div className="dv-header">
        <div>
          <p className="dv-eyebrow">CENTRAL DRAWING REPOSITORY</p>
          <h1 className="dv-title">
            Drawing <span className="dv-title-italic">Vault.</span>
          </h1>
        </div>
        <div className="dv-header-actions">
          <button className="dv-filter-btn" aria-label="Filter">
            <Filter size={15} strokeWidth={1.8} />
          </button>
          <button
            className={`dv-upload-btn ${uploadPulse ? 'dv-upload-pulse' : ''}`}
            onClick={handleUpload}
          >
            <Upload size={14} strokeWidth={2} />
            UPLOAD REVISION
          </button>
        </div>
      </div>

      {/* ── Category cards ── */}
      <div className="dv-categories">
        {VAULT_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            className={`dv-cat-card ${activeFilter === cat.id ? 'dv-cat-active' : ''}`}
            onClick={() => setActiveFilter((prev) => prev === cat.id ? 'all' : cat.id)}
          >
            <FolderOpen
              size={22}
              strokeWidth={1.5}
              className="dv-cat-icon"
            />
            <span className="dv-cat-label">{cat.label}</span>
            <span className="dv-cat-meta">
              {cat.files} {cat.files === 1 ? 'File' : 'Files'} &bull; Sync Live
            </span>
          </button>
        ))}
      </div>

      {/* ── Recent Documentation ── */}
      <div className="dv-docs-section">
        <div className="dv-docs-header">
          <span className="dv-docs-eyebrow">RECENT DOCUMENTATION</span>
          <span className="dv-docs-sort">Sorted by Date</span>
        </div>

        <div className="dv-docs-list">
          {filtered.map((doc, idx) => (
            <div
              key={doc.id}
              className="dv-doc-row"
              style={{ animationDelay: `${idx * 60}ms` }}
            >
              {/* File icon */}
              <div className="dv-doc-icon-wrap">
                <File size={16} strokeWidth={1.5} className="dv-doc-icon" />
              </div>

              {/* Name + meta */}
              <div className="dv-doc-info">
                <span className="dv-doc-name">{doc.name}</span>
                <span className="dv-doc-meta">
                  {doc.category} &bull; {doc.size}
                </span>
              </div>

              {/* Approved date */}
              <div className="dv-doc-date-wrap">
                <span className="dv-doc-date-label">APPROVED ON</span>
                <span className="dv-doc-date-value">{doc.approvedOn}</span>
              </div>

              {/* Download */}
              <button className="dv-doc-dl-btn" aria-label={`Download ${doc.name}`}>
                <Download size={15} strokeWidth={1.8} />
              </button>
            </div>
          ))}

          {filtered.length === 0 && (
            <div className="dv-empty">
              <File size={32} strokeWidth={1} className="dv-empty-icon" />
              <p className="dv-empty-text">No documents in this category yet.</p>
            </div>
          )}
        </div>
      </div>

    </div>
  );
}

/* ══════════════════════════════════════════
   ARCHITECT SYNC SECTION
══════════════════════════════════════════ */

const PROJECT_CIRCLE = [
  {
    id: 'ag',
    initials: 'AG',
    name: 'Ar. Amit G.',
    role: 'LEAD ARCHITECT',
    online: true,
  },
  {
    id: 'sk',
    initials: 'SK',
    name: 'Sandeep K.',
    role: 'SITE STEWARD',
    online: true,
  },
];

const INITIAL_MESSAGES = [
  {
    id: 1,
    sender: 'AG',
    senderName: 'AR. AMIT G.',
    senderRole: 'LEAD ARCHITECT',
    text: 'The rebar placement for the first-floor column C4 has been verified. You can proceed with concrete pouring tomorrow morning.',
    time: '3:42 AM',
    isOwn: false,
  },
  {
    id: 2,
    sender: 'SK',
    senderName: 'SANDEEP K.',
    senderRole: 'SITE STEWARD',
    text: 'Understood. We will schedule the pour for 7:00 AM. Shuttering inspection is complete.',
    time: '3:48 AM',
    isOwn: false,
  },
  {
    id: 3,
    sender: 'VS',
    senderName: 'YOU',
    senderRole: 'EXECUTIVE CLIENT',
    text: 'Great. Please share the post-pour photos by end of day.',
    time: '9:15 AM',
    isOwn: true,
  },
];

function ArchitectSync() {
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [inputVal, setInputVal] = useState('');
  const [activePerson, setActivePerson] = useState('sk');
  const messagesEndRef = useState(null);

  const handleSend = () => {
    const text = inputVal.trim();
    if (!text) return;
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        sender: 'VS',
        senderName: 'YOU',
        senderRole: 'EXECUTIVE CLIENT',
        text,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isOwn: true,
      },
    ]);
    setInputVal('');
  };

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="as-root">

      {/* ── Two-column layout ── */}
      <div className="as-grid">

        {/* ── Left panel ── */}
        <div className="as-left">

          {/* Project Circle */}
          <div className="as-circle-card">
            <p className="as-card-eyebrow">THE PROJECT CIRCLE</p>
            <div className="as-circle-list">
              {PROJECT_CIRCLE.map((person) => (
                <button
                  key={person.id}
                  className={`as-person-row ${activePerson === person.id ? 'as-person-active' : ''}`}
                  onClick={() => setActivePerson(person.id)}
                >
                  <div className="as-person-avatar">
                    <span className="as-avatar-initials">{person.initials}</span>
                    {person.online && <span className="as-online-dot" />}
                  </div>
                  <div className="as-person-info">
                    <span className="as-person-name">{person.name}</span>
                    <span className="as-person-role">{person.role}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* System Access card */}
          <div className="as-access-card">
            <div className="as-access-header">
              <Lock size={13} strokeWidth={2} className="as-access-lock" />
              <span className="as-access-eyebrow">SYSTEM ACCESS</span>
            </div>
            <p className="as-access-text">
              Direct connection to the site steward and principal architect for critical
              decisions. Every message is archived with the project vault for compliance
              and audit trail.
            </p>
          </div>

        </div>

        {/* ── Right panel: Chat ── */}
        <div className="as-chat-panel">

          {/* Chat header */}
          <div className="as-chat-header">
            {(() => {
              const person = PROJECT_CIRCLE.find((p) => p.id === activePerson);
              return (
                <>
                  <div className="as-chat-avatar">
                    <span>{person.initials}</span>
                    {person.online && <span className="as-online-dot as-online-dot-sm" />}
                  </div>
                  <div className="as-chat-header-info">
                    <span className="as-chat-name">{person.name}</span>
                    <span className="as-chat-status">
                      <span className="as-status-dot" />
                      ON SITE NOW
                    </span>
                  </div>
                  <button className="as-chat-more" aria-label="More options">
                    <MoreHorizontal size={16} strokeWidth={1.8} />
                  </button>
                </>
              );
            })()}
          </div>

          {/* Messages */}
          <div className="as-messages">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`as-msg-wrap ${msg.isOwn ? 'as-msg-own' : ''}`}
              >
                {!msg.isOwn && (
                  <div className="as-msg-avatar-sm">{msg.sender}</div>
                )}
                <div className="as-msg-bubble-col">
                  {!msg.isOwn && (
                    <span className="as-msg-sender">
                      {msg.senderName} &bull; {msg.senderRole}
                    </span>
                  )}
                  <div className={`as-msg-bubble ${msg.isOwn ? 'as-bubble-own' : ''}`}>
                    <p className="as-msg-text">{msg.text}</p>
                  </div>
                  <span className="as-msg-time">{msg.time}</span>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef[0]} />
          </div>

          {/* Input */}
          <div className="as-input-row">
            <input
              className="as-input"
              placeholder="Message the stewardship team..."
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKey}
            />
            <button
              className="as-send-btn"
              onClick={handleSend}
              aria-label="Send message"
              disabled={!inputVal.trim()}
            >
              <Send size={15} strokeWidth={2} />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
