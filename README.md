# AI-Platform Johan de Witt Scholengroep

Een datagedreven AI-platform voor gepersonaliseerd leren dat docenten ondersteunt bij lesvoorbereiding en het genereren van onderwijsmateriaal.

## 📋 Overzicht

Het AI-Platform is ontwikkeld voor de Johan de Witt Scholengroep met als doel docenten te ondersteunen bij het maken van kwalitatief onderwijsmateriaal. Het platform gebruikt generatieve AI om op basis van vastgelegde leerdoelen automatisch lessen te genereren die aansluiten bij het curriculum.

### Hoofdfunctionaliteiten
- 🎯 **Centrale Leerdoelendatabase** - Gestructureerde opslag van alle leerdoelen
- 🤖 **AI-Lesgenerator** - Automatische lesgeneratie op basis van leerdoelen
- 🛡️ **Guardrails** - Veilige en educatief verantwoorde AI-output
- 📊 **Monitoring & Analytics** - Inzicht in gebruik en prestaties
- 👥 **Gebruikersbeheer** - Rolgebaseerde toegang voor docenten

## 🎯 Projectdoelstellingen

### Primaire Doelen
- Tijdsbesparing voor docenten bij lesvoorbereiding
- Verbetering van leskwaliteit door consistente leerdoelen
- Stimulering van datagedreven werken binnen de school
- Veilige implementatie van AI in het onderwijs

### Succes Metrics
- Gebruikerstevredenheid > 80%
- Systeem response tijd < 30 seconden
- Minimaal 10 actieve docenten na deployment
- 95% uptime tijdens productie

## 🏗️ Architectuur

### Tech Stack
- **Backend:** Python 3.9+, Django 4.2+
- **Database:** PostgreSQL 14+
- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **AI Integration:** OpenAI GPT-4 API
- **Deployment:** Docker, nginx
- **Monitoring:** Prometheus, Grafana

### Systeem Componenten
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Web Interface │    │   Django API    │    │   Database      │
│                 │◄──►│                 │◄──►│                 │
│   (Frontend)    │    │   (Backend)     │    │  (PostgreSQL)   │
└─────────────────┘    └─────────────────┘    └─────────────────┘
                                │
                                ▼
                       ┌─────────────────┐
                       │   OpenAI API    │
                       │                 │
                       │  (AI Service)   │
                       └─────────────────┘
```

## 📁 Project Structuur

```
ai-platform/
├── README.md                 # Dit bestand
├── requirements.txt          # Python dependencies
├── docker-compose.yml       # Docker configuratie
├── .env.example             # Environment variabelen template
├── manage.py                # Django management script
├── config/                  # Django configuratie
│   ├── __init__.py
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
├── apps/                    # Django applicaties
│   ├── core/               # Basis functionaliteit
│   ├── learning_goals/     # Leerdoelen beheer
│   ├── ai_generator/       # AI lesgeneratie
│   ├── users/              # Gebruikersbeheer
│   └── monitoring/         # Logging & analytics
├── static/                 # Statische bestanden
│   ├── css/
│   ├── js/
│   └── images/
├── templates/              # HTML templates
│   ├── base.html
│   ├── dashboard.html
│   └── components/
├── tests/                  # Test bestanden
│   ├── unit/
│   ├── integration/
│   └── fixtures/
├── docs/                   # Documentatie
│   ├── deployment.md
│   ├── api.md
│   └── user_guide.md
└── scripts/                # Utility scripts
    ├── setup.sh
    └── backup.sh
```

## 🚀 Installatie & Setup

### Vereisten
- Python 3.9 of hoger
- PostgreSQL 14 of hoger
- Node.js 16+ (voor frontend builds)
- Docker & Docker Compose (optioneel)

### Lokale Ontwikkeling

1. **Repository clonen**
```bash
git clone https://github.com/jdw-scholengroep/ai-platform.git
cd ai-platform
```

2. **Virtual environment opzetten**
```bash
python -m venv venv
source venv/bin/activate  # Linux/Mac
# of
venv\Scripts\activate     # Windows
```

3. **Dependencies installeren**
```bash
pip install -r requirements.txt
```

4. **Environment variabelen configureren**
```bash
cp .env.example .env
# Bewerk .env met je eigen configuratie
```

5. **Database opzetten**
```bash
python manage.py migrate
python manage.py createsuperuser
python manage.py loaddata fixtures/initial_data.json
```

6. **Development server starten**
```bash
python manage.py runserver
```

De applicatie is nu bereikbaar op `http://localhost:8000`

### Docker Deployment

```bash
# Ontwikkelomgeving
docker-compose up -d

# Productie omgeving
docker-compose -f docker-compose.prod.yml up -d
```

## 🔧 Configuratie

### Environment Variabelen

```env
# Django
DEBUG=True
SECRET_KEY=your-secret-key-here
ALLOWED_HOSTS=localhost,127.0.0.1

# Database
DB_HOST=localhost
DB_PORT=5432
DB_NAME=ai_platform
DB_USER=postgres
DB_PASSWORD=your-password

# OpenAI
OPENAI_API_KEY=your-openai-api-key
OPENAI_MODEL=gpt-4-turbo-preview
OPENAI_MAX_TOKENS=2048

# Security
CSRF_TRUSTED_ORIGINS=https://your-domain.com
SECURE_SSL_REDIRECT=True
```

### Database Configuratie

De database wordt automatisch geconfigureerd via Django migrations:

```bash
python manage.py makemigrations
python manage.py migrate
```

## 📚 Gebruik

### Voor Docenten

1. **Inloggen**
   - Ga naar de login pagina
   - Gebruik je school credentials

2. **Leerdoelen Beheren**
   - Navigeer naar "Leerdoelen"
   - Voeg nieuwe leerdoelen toe of bewerk bestaande
   - Koppel leerdoelen aan curriculum onderdelen

3. **Lessen Genereren**
   - Selecteer gewenste leerdoelen
   - Kies lestype en niveau
   - Klik op "Genereer Les"
   - Bewerk gegenereerde inhoud naar wens

### Voor Administrators

1. **Gebruikersbeheer**
   - Via Django admin interface
   - Gebruikersrollen en rechten beheren

2. **Monitoring**
   - Dashboard voor gebruik statistieken
   - AI kosten monitoring
   - Performance metrics

## 🧪 Testen

### Unit Tests
```bash
python manage.py test
```

### Integration Tests
```bash
python manage.py test tests.integration
```

### Coverage Report
```bash
coverage run --source='.' manage.py test
coverage report
coverage html
```

## 📊 Monitoring & Logging

### Logging Configuratie
- **Application logs:** `/var/log/ai-platform/app.log`
- **AI requests:** `/var/log/ai-platform/ai.log`
- **User actions:** `/var/log/ai-platform/user.log`

### Monitoring Endpoints
- **Health check:** `/health/`
- **Metrics:** `/metrics/`
- **Status:** `/status/`

### Analytics Dashboard
Toegankelijk via `/dashboard/analytics/` voor administrators.

## 🔒 Security

### Implemented Security Measures
- CSRF protection
- SQL injection prevention
- XSS protection
- Rate limiting op API calls
- Input validation en sanitization
- Secure session management

### AI Safety Features
- Content filtering voor ongepaste inhoud
- Curriculum validation
- Output quality scoring
- Manual override opties

## 🤝 Bijdragen

### Development Workflow
1. Fork de repository
2. Maak een feature branch (`git checkout -b feature/nieuwe-functie`)
3. Commit je changes (`git commit -am 'Voeg nieuwe functie toe'`)
4. Push naar branch (`git push origin feature/nieuwe-functie`)
5. Maak een Pull Request

### Code Standards
- PEP 8 voor Python code
- ESLint voor JavaScript
- Black voor code formatting
- Type hints waar mogelijk

### Commit Messages
Gebruik conventionele commit messages:
```
feat: voeg lesgenerator toe
fix: los database connectie probleem op
docs: update README
test: voeg unit tests toe voor AI module
```

## 📖 Documentatie

### Gebruikersdocumentatie
- [Gebruikershandleiding](docs/user_guide.md)
- [FAQ](docs/faq.md)
- [Video tutorials](docs/tutorials.md)

### Technische Documentatie
- [API Reference](docs/api.md)
- [Database Schema](docs/database.md)
- [Deployment Guide](docs/deployment.md)
- [Architecture Overview](docs/architecture.md)

## 🗓️ Roadmap

### Fase 1: MVP (Sep 2024 - Jul 2025)
- ✅ Leerdoelendatabase
- 🔄 AI Lesgenerator
- 📅 Gebruikersinterface
- 📅 Monitoring systeem

### Fase 2: Uitbreidingen (Aug 2025+)
- 📋 Toetsgenerator
- 👨‍🎓 Leerling interface
- 📊 Geavanceerde analytics
- 🔗 Externe integraties

### Fase 3: Optimalisatie (2026)
- 🚀 Performance optimalisaties
- 🤖 Advanced AI features
- 📱 Mobile app
- 🌐 Multi-school support

## 🐛 Bekende Issues

### Huidige Beperkingen
- AI generatie is beperkt tot Nederlandse taal
- Maximum 5 leerdoelen per lesgeneratie
- Geen offline functionaliteit

### Geplande Oplossingen
- Meertalige ondersteuning in v2.0
- Batch processing voor grote leerdoelen sets
- Progressive Web App functionaliteit

## 📞 Support

### Contact Informatie
- **Project Owner:** Redouan Dannouni
- **Email:** r.dannouni@jdw.nl
- **School:** Johan de Witt Scholengroep

### Support Kanalen
- **Technische vragen:** GitHub Issues
- **Gebruikersvragen:** Interne helpdesk
- **Spoedmeldingen:** Direct contact proceseigenaar

## 📄 Licentie

Dit project is ontwikkeld voor intern gebruik door de Johan de Witt Scholengroep. Alle rechten voorbehouden.

---

## 🎓 Academic Context

Dit project is ontwikkeld als onderdeel van de TU/e module "Mastering Data & AI" en demonstreert de toepassing van CRISP-DM methodologie in een praktische onderwijsomgeving.

### Methodologie
- **CRISP-DM:** Voor gestructureerde data science aanpak
- **SCRUM:** Voor agile projectmanagement
- **Evidence-informed Design:** Voor onderwijskundige verantwoording

### Leerwaarde
- Integratie van AI in onderwijsprocessen
- Ethische overwegingen bij AI implementatie
- Datagedreven besluitvorming in het onderwijs
- Stakeholder management in complexe organisaties

---

*Laatste update: December 2024*
*Versie: 1.0.0*
