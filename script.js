/* Reset some basic elements */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Segoe UI", Arial, sans-serif;
  background: #10141b;
  color: #e3e8ee;
  min-height: 100vh;
}

.container {
  width: 90%;
  max-width: 1100px;
  margin: 0 auto;
}

/* Header */
.header {
  background: #181f2a;
  border-bottom: 2px solid #232c3e;
  padding: 20px 0;
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 15px;
}

.logo {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: #232c3e;
  object-fit: contain;
}

.header-title {
  font-size: 2rem;
  color: #64b5f6;
  font-weight: bold;
  letter-spacing: 2px;
}

.header-nav {
  display: flex;
  align-items: center;
  gap: 10px;
}

.tab-btn {
  background: #232c3e;
  border: none;
  color: #e3e8ee;
  padding: 10px 22px;
  font-size: 1rem;
  border-radius: 8px 8px 0 0;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.2s, color 0.2s;
}

.tab-btn.active,
.tab-btn:hover {
  background: #64b5f6;
  color: #10141b;
}

.tab-section {
  display: none;
  padding: 30px 0 0 0;
}

.tab-section.show {
  display: block;
}

/* Hero */
.hero {
  text-align: center;
  margin-bottom: 35px;
}
.hero h2 {
  font-size: 2.2rem;
  color: #fff;
  font-weight: bold;
}
.hero h2 span {
  color: #64b5f6;
}
.subtitle {
  color: #b3bac2;
  font-size: 1.2rem;
  margin-top: 10px;
}

/* Stats */
.stats-grid {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 40px;
  flex-wrap: wrap;
}
.stat {
  background: #232c3e;
  border-radius: 12px;
  padding: 22px 36px;
  min-width: 120px;
  text-align: center;
  box-shadow: 0 2px 12px 0 rgba(100,181,246,0.07);
}
.stat-value {
  font-size: 2rem;
  color: #64b5f6;
  font-weight: bold;
}
.stat-label {
  color: #b3bac2;
  font-size: 1rem;
  margin-top: 5px;
}

/* Features */
.features-grid {
  display: flex;
  gap: 30px;
  margin: 40px 0;
  flex-wrap: wrap;
}
.feature {
  background: #232c3e;
  border-radius: 12px;
  flex: 1;
  min-width: 260px;
  padding: 24px 30px;
  box-shadow: 0 2px 12px 0 rgba(100,181,246,0.07);
}
.feature-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 10px;
}

/* Info Section */
.info-section {
  margin-top: 36px;
}
.info-title {
  color: #64b5f6;
  font-size: 1.2rem;
  margin-bottom: 10px;
}
.info-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
}
.info-card {
  background: #232c3e;
  border-left: 4px solid #64b5f6;
  border-radius: 8px;
  padding: 16px 20px;
  min-width: 200px;
  flex: 1;
  color: #e3e8ee;
  box-shadow: 0 2px 8px rgba(100,181,246,0.06);
}
.info-card-title {
  font-weight: bold;
  margin-bottom: 5px;
  color: #64b5f6;
}

/* Sources Section */
.sources-header {
  text-align: center;
  margin-bottom: 24px;
}
.sources-list {
  display: flex;
  flex-wrap: wrap;
  gap: 26px;
  justify-content: center;
}
.source-card {
  background: #232c3e;
  border-radius: 10px;
  padding: 18px 24px;
  min-width: 240px;
  max-width: 320px;
  box-shadow: 0 2px 8px rgba(100,181,246,0.07);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.source-title {
  font-weight: bold;
  color: #64b5f6;
  margin-bottom: 8px;
  font-size: 1.12rem;
}
.source-desc {
  color: #b3bac2;
  margin-bottom: 12px;
  font-size: 0.96rem;
}
.source-download {
  background: #64b5f6;
  color: #10141b;
  border: none;
  border-radius: 6px;
  padding: 8px 16px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.2s;
}
.source-download:hover {
  background: #42a5f5;
}

/* Guild Section */
.guild-header {
  text-align: center;
  margin-bottom: 18px;
}
.guild-card {
  background: #232c3e;
  border-radius: 12px;
  padding: 30px 28px;
  max-width: 500px;
  margin: 0 auto;
  box-shadow: 0 2px 12px 0 rgba(100,181,246,0.07);
  text-align: center;
}
.guild-card-grid {
  display: flex;
  gap: 36px;
  justify-content: center;
  margin-bottom: 22px;
}
.guild-card-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
}
.guild-value {
  font-weight: bold;
  color: #64b5f6;
  font-size: 1.3rem;
}
.guild-label {
  color: #b3bac2;
  font-size: 1rem;
}
.guild-btn {
  background: #64b5f6;
  color: #10141b;
  border: none;
  border-radius: 8px;
  padding: 12px 28px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  margin-top: 14px;
  transition: background 0.2s;
}
.guild-btn:hover {
  background: #42a5f5;
}

/* Footer */
.footer {
  background: #181f2a;
  border-top: 2px solid #232c3e;
  padding: 22px 0;
  margin-top: 60px;
}
.footer-inner {
  display: flex;
  align-items: center;
  gap: 18px;
  justify-content: center;
}
.footer-logo {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  margin-right: 14px;
}
.footer-note {
  color: #b3bac2;
  font-size: 0.95rem;
  margin-top: 2px;
}

/* Responsive */
@media (max-width: 800px) {
  .stats-grid, .features-grid {
    flex-direction: column;
    align-items: stretch;
  }
  .sources-list {
    flex-direction: column;
    align-items: stretch;
  }
  .guild-card-grid {
    flex-direction: column;
    align-items: center;
    gap: 18px;
  }
}
@media (max-width: 600px) {
  .container {
    width: 98%;
  }
  .header-inner, .footer-inner {
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
  }
  .header-title {
    font-size: 1.2rem;
  }
}
