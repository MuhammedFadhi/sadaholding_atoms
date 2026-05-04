"""Generate SA'DA HOLDINGS company profile PDF matching the website design."""
import markdown
from weasyprint import HTML, CSS
from pathlib import Path

MD_PATH = Path("/workspace/app/frontend/public/sada-company-profile.md")
PDF_PATH = Path("/workspace/app/frontend/public/SADA-HOLDINGS-Company-Profile.pdf")

md_text = MD_PATH.read_text(encoding="utf-8")
html_body = markdown.markdown(md_text, extensions=["extra", "sane_lists"])

# Editorial/magazine-style CSS matching the website's dark, serif aesthetic.
css_styles = """
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

@page {
  size: A4;
  margin: 22mm 20mm 22mm 20mm;
  background: #0a0a0a;
  @bottom-left {
    content: "SA'DA HOLDINGS · Company Profile";
    font-family: 'JetBrains Mono', monospace;
    font-size: 8pt;
    color: #6b9bd1;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }
  @bottom-right {
    content: counter(page) " / " counter(pages);
    font-family: 'JetBrains Mono', monospace;
    font-size: 8pt;
    color: #6b9bd1;
    letter-spacing: 0.1em;
  }
}

@page :first {
  margin: 0;
  @bottom-left { content: ""; }
  @bottom-right { content: ""; }
}

* { box-sizing: border-box; }

html, body {
  background: #0a0a0a;
  color: #e8e8e8;
  font-family: 'Inter', sans-serif;
  font-size: 10.5pt;
  line-height: 1.7;
  margin: 0;
  padding: 0;
}

/* Cover page */
.cover {
  page: cover;
  height: 297mm;
  width: 210mm;
  margin: 0;
  padding: 60mm 25mm 30mm 25mm;
  background: linear-gradient(180deg, #0a0a0a 0%, #0f1620 60%, #0a0a0a 100%);
  color: #e8e8e8;
  position: relative;
  page-break-after: always;
}

.cover .label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 9pt;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: #6b9bd1;
  margin-bottom: 18mm;
  display: flex;
  align-items: center;
  gap: 12px;
}

.cover .label::after {
  content: "";
  flex: 1;
  height: 1px;
  background: #2a3340;
}

.cover h1 {
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  font-size: 52pt;
  line-height: 1.05;
  letter-spacing: -0.02em;
  color: #ffffff;
  margin: 0 0 10mm 0;
}

.cover .tagline {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-size: 22pt;
  color: #6b9bd1;
  margin-bottom: 40mm;
  line-height: 1.3;
}

.cover .subtitle {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10pt;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #888;
}

.cover .footer {
  position: absolute;
  bottom: 25mm;
  left: 25mm;
  right: 25mm;
  display: flex;
  justify-content: space-between;
  font-family: 'JetBrains Mono', monospace;
  font-size: 8pt;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #6b9bd1;
  border-top: 1px solid #2a3340;
  padding-top: 10mm;
}

/* Main content */
.content {
  background: #0a0a0a;
}

h1 {
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  font-size: 30pt;
  line-height: 1.1;
  color: #ffffff;
  margin: 14mm 0 8mm 0;
  page-break-after: avoid;
  letter-spacing: -0.01em;
}

h1:not(:first-of-type) {
  page-break-before: always;
  padding-top: 5mm;
  border-top: 1px solid #2a3340;
}

h2 {
  font-family: 'Playfair Display', serif;
  font-weight: 600;
  font-size: 22pt;
  line-height: 1.15;
  color: #ffffff;
  margin: 12mm 0 5mm 0;
  page-break-after: avoid;
  letter-spacing: -0.01em;
}

h3 {
  font-family: 'Playfair Display', serif;
  font-weight: 600;
  font-size: 15pt;
  color: #ffffff;
  margin: 9mm 0 2mm 0;
  page-break-after: avoid;
  line-height: 1.3;
}

h3 + p strong {
  font-family: 'JetBrains Mono', monospace;
  font-size: 8.5pt;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #6b9bd1;
  font-weight: 500;
}

p {
  margin: 0 0 4mm 0;
  color: #cfcfcf;
}

em, i {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  color: #6b9bd1;
}

strong {
  color: #ffffff;
  font-weight: 600;
}

blockquote {
  margin: 5mm 0;
  padding: 4mm 8mm;
  border-left: 2px solid #6b9bd1;
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-size: 13pt;
  color: #d8d8d8;
  line-height: 1.5;
  background: rgba(107, 155, 209, 0.04);
}

blockquote p { margin: 0; color: inherit; }
blockquote em, blockquote i { color: #6b9bd1; }

hr {
  border: none;
  height: 1px;
  background: #2a3340;
  margin: 10mm 0;
}

ul {
  margin: 4mm 0;
  padding-left: 6mm;
}

li {
  margin-bottom: 2mm;
  color: #cfcfcf;
  line-height: 1.6;
}

li strong {
  color: #ffffff;
  font-weight: 600;
}

/* Section marker / label utility - not used structurally but kept */
.label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 8.5pt;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #6b9bd1;
}

/* Final footer line styling */
p:last-of-type em {
  font-size: 10pt;
}

a { color: #6b9bd1; text-decoration: none; }
"""

cover_html = """
<div class="cover">
  <div class="label">Company Profile · 2026</div>
  <h1>SA&rsquo;DA<br/>HOLDINGS</h1>
  <div class="tagline">From Science to Transformations.</div>
  <div class="subtitle">Clear vision. Strong values. Real execution.</div>
  <div class="footer">
    <span>Kingdom of Saudi Arabia</span>
    <span>sadaholdings.com</span>
  </div>
</div>
"""

# Remove the first H1 from markdown output (we use custom cover instead)
# The first rendered H1 is "SA'DA HOLDINGS" — drop it and its immediate intro lines up to first <hr/>.
import re
# Drop the very first <h1>...</h1> block
html_body = re.sub(r"^\s*<h1>.*?</h1>\s*", "", html_body, count=1, flags=re.DOTALL)
# Drop leading paragraphs until first <hr /> (the subtitle/tagline repeated in cover)
html_body = re.sub(r"^(?:\s*<p>.*?</p>\s*)+?<hr\s*/?>", "", html_body, count=1, flags=re.DOTALL)

full_html = f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>SA'DA HOLDINGS — Company Profile</title>
</head>
<body>
{cover_html}
<div class="content">
{html_body}
</div>
</body>
</html>
"""

HTML(string=full_html).write_pdf(str(PDF_PATH), stylesheets=[CSS(string=css_styles)])
print(f"PDF generated: {PDF_PATH}")