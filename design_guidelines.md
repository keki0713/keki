# Design Guidelines for Minimalist Portfolio

## Design Approach
**Selected Approach**: Design System with minimalist principles  
**Justification**: Portfolio sites require clean, professional presentation that highlights content over decoration. A systematic approach ensures consistency while the minimalist aesthetic maintains focus on achievements and skills.

## Core Design Elements

### A. Color Palette
**Dark Mode Primary**:
- Background: 12 8% 8% (deep charcoal)
- Surface: 12 6% 12% (elevated dark surface)
- Text Primary: 0 0% 95% (near white)
- Text Secondary: 0 0% 70% (muted gray)

**Brand Colors**:
- Primary: 165 85% 35% (#169976 - professional teal)
- Primary Light: 165 60% 50% (hover states)
- Primary Dark: 165 95% 25% (active states)

### B. Typography
**Font Stack**: Inter from Google Fonts
- Headings: 600-700 weight, generous letter spacing
- Body: 400 weight, 1.6 line height for readability
- Labels: 500 weight, uppercase for section headers

### C. Layout System
**Spacing Units**: Tailwind 4, 8, 12, 16 units consistently
- Section padding: p-16
- Card spacing: gap-8
- Element margins: m-4, m-8
- Maximum content width: max-w-4xl centered

### D. Component Library

**Navigation**: 
- Fixed header with subtle backdrop blur
- Clean typography-based logo
- Minimal menu with smooth scroll anchors

**Hero Section**:
- Split layout: professional headshot (GradPic) left, bio content right
- Clean white background behind photo for contrast
- Teal accent for name/title typography

**Content Cards**:
- Subtle border in dark gray (0 0% 20%)
- Rounded corners (rounded-lg)
- Consistent internal padding (p-8)
- Hover state with gentle teal border accent

**Resume Download**:
- Prominent teal button linking to Google Drive
- Icon from Heroicons (download symbol)
- Clear call-to-action placement

**Sections Structure**:
1. Hero with photo and introduction
2. Education & Certifications
3. Experience (STAR format for internship)
4. Technical Skills grid
5. Projects/Work Samples
6. Contact & References

### E. Animations
**Minimal Approach**: Subtle fade-ins on scroll, gentle hover transitions (200ms duration)

## Images
- **Professional Headshot**: Use provided GradPic_1758421075197.jpg in hero section, circular crop with white background preservation
- **No large hero background image**: Focus remains on content and professional presentation
- **Project Placeholders**: Simple gray rectangles for work samples until real project images available

## Key Design Principles
1. **Content First**: Every element serves to highlight John's qualifications
2. **Professional Hierarchy**: Clear information architecture following resume structure
3. **Accessible Contrast**: Dark mode implementation with proper contrast ratios
4. **Mobile Responsive**: Clean stack on smaller screens, maintaining readability