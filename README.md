# AI-Platform Johan de Witt Scholengroep

Een **agentic AI-platform** voor gepersonaliseerd leren dat docenten ondersteunt bij lesvoorbereiding, toetsgeneratie en het monitoren van onderwijskwaliteit. Het platform bouwt voort op Microsoft Azure en moderne AI-technologieën, met een focus op veiligheid, schaalbaarheid en gebruiksgemak.

---

## 📋 Overzicht

Het AI-Platform is ontwikkeld voor de Johan de Witt Scholengroep en biedt een ecosysteem van **AI-assistenten (agents)** die samenwerken om docenten en leerlingen te ondersteunen:

### Hoofdfunctionaliteiten
- 🎯 **Centrale Leerdoelendatabase** – Gestructureerde opslag en hergebruik
- 🤖 **AI-Assistenten** – Lesgenerator, Toetsgenerator, Leerlingcoach
- 🛡️ **Guardrails & Veiligheid** – AI-content blijft binnen educatieve context
- 📊 **Monitoring & Analytics** – Dashboards voor directie en MT
- 👥 **Gebruikersbeheer** – Integratie met Azure AD (rollen & rechten)

---

## 🎯 Projectdoelstellingen

### Primaire doelen
- Tijdsbesparing voor docenten (≥30% reductie voorbereidingstijd)
- Verbetering van leskwaliteit en consistentie
- Datagedreven besluitvorming binnen de school
- Veilige en ethisch verantwoorde AI-implementatie

### Succesmetrics
- ≥10 actieve docenten in pilotfase
- Gebruikerstevredenheid ≥8/10
- Response tijd <20 seconden
- >99% uptime tijdens schooluren

---

## 🏗️ Architectuur

### Tech Stack (2025)
- **Backend:** Azure Functions + Semantic Kernel (C#/Python)
- **Database:** Azure SQL / PostgreSQL
- **Frontend:** Azure Static Web Apps / PowerApps
- **AI Integratie:** Azure AI Foundry (OpenAI GPT-4 / GPT-4.1, Azure OpenAI Service)
- **Auth:** Azure Active Directory (SSO)
- **Analytics:** Power BI + Application Insights

### Systeem Componenten
┌─────────────────┐ ┌─────────────────┐
│ Web Interface │◄───►│ API/Orchestr. │
│ (Frontend) │ │ (SemanticKernel)│
└─────────────────┘ └─────────────────┘
│ │
▼ ▼
┌─────────────────┐ ┌─────────────────┐
│ Azure SQL DB │ │ Azure AI Foundry│
│ Leerdoelen & │ │ Agents & Models │
│ Logdata │ │ (OpenAI/Custom) │
└─────────────────┘ └─────────────────┘

---

## 📁 Project Structuur (conceptueel)
ai-platform/
├── README.md
├── src/
│ ├── agents/ # AI-assistenten (les, toets, coach, analytics)
│ ├── orchestrator/ # Semantic Kernel of LangChain implementatie
│ ├── api/ # Azure Functions API
│ ├── frontend/ # PowerApps / Web UI
│ └── monitoring/ # Logging, dashboards, analytics
├── docs/ # Documentatie
└── infra/ # Azure infrastructuur (IaC)


---

## 🚀 Installatie & Setup

### Vereisten
- Microsoft Azure account met AI Foundry toegang
- Azure SQL Database
- Azure Active Directory (SSO)
- Power BI licentie (analytics)

### Setup (globaal)
1. **Deploy infrastructuur** via Azure Resource Manager of Bicep  
2. **Configureer database** en initieer leerdoelendata  
3. **Maak AI-agents aan** in Azure AI Foundry  
4. **Koppel frontend** (PowerApps of WebApp) aan API  
5. **Integreer monitoring** in Power BI + Application Insights  

---

## 📚 Gebruik

### Voor docenten
- Leerdoelen beheren in centrale database  
- Lesvoorstellen genereren en aanpassen  
- Toetsen samenstellen met AI-ondersteuning  

### Voor leerlingen
- Gepersonaliseerde feedback en leerpaden (pilot)  

### Voor directie
- Dashboards met gebruiksdata, adoptie en onderwijseffectiviteit  

---

## 🔒 Security & Ethische AI

- AVG-conform, geen leerling-PII naar externe AI-services  
- Azure Content Safety filtering  
- Rolgebaseerde toegang (docent, leerling, admin) via Azure AD  
- Logging en audit trail voor verantwoording  

---

## 🗓️ Roadmap

### 2025 – MVP & Pilot
- Centrale leerdoelendatabase  
- Lesgenerator-agent  
- Validator-agent + guardrails  

### 2026 – Uitbreiding
- Toetsgenerator-agent  
- Leerlingcoach-agent (pilot)  
- Analytics dashboards (Power BI)  

### 2027 – Optimalisatie
- Multischool support  
- Mobile app  
- Integratie met externe leermiddelen  

---

## 📞 Support

- **Project Owner:** Redouan Dannouni  
- **Email:** dai@johandewittscholengroep.nl  
- **School:** Johan de Witt Scholengroep  
- **Vragen:** via interne helpdesk of GitHub Issues  

---

## 📄 Licentie

Dit project is ontwikkeld voor intern gebruik door de Johan de Witt Scholengroep. Alle rechten voorbehouden.

---

## 🎓 Academic Context

Ontwikkeld in het kader van de TU/e module *Mastering Data & AI*. Toepassing van:
- **CRISP-DM** – voor datakwaliteit en analytics  
- **Agile light** – korte iteraties, pilots met docenten  
- **Evidence-informed design** – aansluiting bij curriculum en onderwijspraktijk  

---

*Laatste update: Juni 2025*  
*Versie: 2.0.0*



