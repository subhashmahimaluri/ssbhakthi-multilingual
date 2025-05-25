# Multilingual Next.js App with Multi-Instance Architecture

A powerful multilingual Next.js application supporting **Telugu**, **English**, **Hindi**, and **Kannada** languages with dedicated domains/ports for each language instance.

## 🌍 Live Demo URLs

- **Telugu (Default)**: [http://localhost:3000](http://localhost:3000)
- **English**: [http://localhost:3000/en](http://localhost:3000/en)
- **Hindi**: [http://localhost:3001](http://localhost:3001)
- **Kannada**: [http://localhost:3002](http://localhost:3002)

## ✨ Features

- 🌐 **Multi-Instance Architecture**: Each language runs on dedicated ports
- 🔄 **Smart Language Switching**: Seamless cross-domain navigation
- 📱 **Responsive Design**: React Bootstrap components
- 🎨 **Font Optimization**: Proper rendering for all Indian languages
- ⚡ **TypeScript**: Full type safety and IntelliSense
- 🚀 **SEO Optimized**: Proper meta tags and static generation
- 🛠️ **Developer Friendly**: Hot reload, process management tools
- 📦 **Production Ready**: Build and deployment scripts

## 🏗️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **UI Library**: React Bootstrap 2.x
- **Styling**: CSS + Bootstrap
- **Internationalization**: Next.js built-in i18n
- **Process Management**: Concurrently + Cross-env

## 📁 Project Structure

```
multilingual-nextjs-app/
├── 📂 components/
│   └── 📂 Layout/
│       ├── Header.tsx              # Navigation with language switcher
│       ├── Footer.tsx              # Footer component
│       └── Layout.tsx              # Main layout wrapper
├── 📂 hooks/
│   └── useTranslation.ts           # Multi-instance translation hook
├── 📂 locales/
│   ├── index.ts                    # Language exports
│   ├── te.ts                       # Telugu translations
│   ├── en.ts                       # English translations
│   ├── hi.ts                       # Hindi translations
│   └── kn.ts                       # Kannada translations
├── 📂 pages/
│   ├── _app.tsx                    # App wrapper
│   ├── index.tsx                   # Home page
│   ├── about.tsx                   # About page
│   └── contact.tsx                 # Contact page
├── 📂 scripts/
│   ├── start-all.sh                # Start all instances
│   ├── stop-all.sh                 # Stop all instances
│   ├── build-all.sh                # Build all instances
│   └── check-instances.sh          # Status checker
├── 📂 styles/
│   └── globals.css                 # Global styles + font support
├── 📄 .env.te                      # Telugu instance config
├── 📄 .env.hi                      # Hindi instance config
├── 📄 .env.kn                      # Kannada instance config
├── 📄 next.config.js               # Next.js configuration
├── 📄 tsconfig.json                # TypeScript configuration
└── 📄 package.json                 # Dependencies and scripts
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

### 1. Clone & Install

```bash
# Clone the repository
git clone <your-repository-url>
cd multilingual-nextjs-app

# Install dependencies
npm install

# Install additional dependencies for multi-instance support
npm install cross-env concurrently
```

### 2. Create Environment Files

Create these files in your project root:

**`.env.te`** (Telugu/English instance):
```env
DEFAULT_LOCALE=te
SUPPORTED_LOCALES=te,en
PORT=3000
INSTANCE_TYPE=te-en
```

**`.env.hi`** (Hindi instance):
```env
DEFAULT_LOCALE=hi
SUPPORTED_LOCALES=hi
PORT=3001
INSTANCE_TYPE=hi
```

**`.env.kn`** (Kannada instance):
```env
DEFAULT_LOCALE=kn
SUPPORTED_LOCALES=kn
PORT=3002
INSTANCE_TYPE=kn
```

### 3. Create Required Directories

```bash
mkdir -p scripts .pids
```

### 4. Make Scripts Executable (Linux/Mac)

```bash
chmod +x scripts/*.sh
```

### 5. Start Development

Choose one of these options:

#### Option A: All Instances at Once
```bash
npm run dev:all
```

#### Option B: Individual Instances
```bash
# Terminal 1 - Telugu/English
npm run dev:te

# Terminal 2 - Hindi
npm run dev:hi

# Terminal 3 - Kannada  
npm run dev:kn
```

#### Option C: Using Management Scripts (Linux/Mac)
```bash
# Start all instances
./scripts/start-all.sh

# Check status
./scripts/check-instances.sh

# Stop all instances
./scripts/stop-all.sh
```

### 6. Open Your Browser

Visit these URLs to test:
- Telugu: http://localhost:3000
- English: http://localhost:3000/en
- Hindi: http://localhost:3001
- Kannada: http://localhost:3002

## 📝 Available Scripts

### Development Scripts
```bash
npm run dev:te          # Telugu/English instance (port 3000)
npm run dev:hi          # Hindi instance (port 3001)
npm run dev:kn          # Kannada instance (port 3002)
npm run dev:all         # All instances simultaneously
```

### Build Scripts
```bash
npm run build:te        # Build Telugu/English
npm run build:hi        # Build Hindi
npm run build:kn        # Build Kannada
npm run build:all       # Build all instances
```

### Production Scripts
```bash
npm run start:te        # Start Telugu/English (port 3000)
npm run start:hi        # Start Hindi (port 3001)
npm run start:kn        # Start Kannada (port 3002)
npm run start:all       # Start all instances
```

### Management Scripts (Linux/Mac)
```bash
./scripts/start-all.sh      # Start all with process tracking
./scripts/stop-all.sh       # Stop all instances
./scripts/check-instances.sh # Check which instances are running
./scripts/build-all.sh      # Build all instances
```

## 🔧 Configuration

### Language Domain Mapping

The application uses this domain structure:

| Language | Domain | Port | Instance Type |
|----------|--------|------|---------------|
| Telugu (తెలుగు) | localhost:3000 | 3000 | Multi-locale (te,en) |
| English | localhost:3000/en | 3000 | Same as Telugu |
| Hindi (हिंदी) | localhost:3001 | 3001 | Single-locale (hi) |
| Kannada (ಕನ್ನಡ) | localhost:3002 | 3002 | Single-locale (kn) |

### Environment Variables

Each instance uses specific environment variables:

- `DEFAULT_LOCALE`: Primary language for the instance
- `SUPPORTED_LOCALES`: Comma-separated list of supported locales
- `PORT`: Port number for the instance
- `INSTANCE_TYPE`: Instance identifier

### Font Support

The application includes optimized font rendering:

```css
/* Telugu */
[lang="te"] { font-family: 'Noto Sans Telugu', 'Gautami', 'Raavi', sans-serif; }

/* Hindi */
[lang="hi"] { font-family: 'Noto Sans Devanagari', 'Mangal', 'Kokila', sans-serif; }

/* Kannada */
[lang="kn"] { font-family: 'Noto Sans Kannada', 'Tunga', 'Kedage', sans-serif; }
```

## 🎨 Usage

### Adding Translations

1. **Add to language files** (`locales/*.ts`):
```typescript
// locales/te.ts
export const te = {
  newSection: {
    title: 'కొత్త విభాగం',
    description: 'వివరణ'
  }
};
```

2. **Use in components**:
```typescript
import { useTranslation } from '@/hooks/useTranslation';

const MyComponent = () => {
  const { t } = useTranslation();
  return <h1>{t.newSection.title}</h1>;
};
```

### Language Switching

The language switcher automatically handles:
- **Same-instance switching** (Telugu ↔ English): Uses Next.js routing
- **Cross-instance switching** (Hindi/Kannada): Redirects to different ports
- **Context preservation**: Maintains current page and query parameters

### Creating New Pages

1. Create page in `pages/` directory
2. Add translations to all language files
3. The page will be automatically available in all instances

## 🚀 Production Deployment

### Option 1: Separate Servers

Deploy each language instance on separate servers:

```bash
# Server 1 (Telugu/English)
DEFAULT_LOCALE=te SUPPORTED_LOCALES=te,en npm run build:te
DEFAULT_LOCALE=te SUPPORTED_LOCALES=te,en npm run start:te

# Server 2 (Hindi)
DEFAULT_LOCALE=hi SUPPORTED_LOCALES=hi npm run build:hi
DEFAULT_LOCALE=hi SUPPORTED_LOCALES=hi npm run start:hi

# Server 3 (Kannada)
DEFAULT_LOCALE=kn SUPPORTED_LOCALES=kn npm run build:kn
DEFAULT_LOCALE=kn SUPPORTED_LOCALES=kn npm run start:kn
```

### Option 2: Single Server with Reverse Proxy

Use nginx to route different domains:

```nginx
# Telugu/English
server {
    server_name te.yoursite.com yoursite.com;
    location / {
        proxy_pass http://localhost:3000;
    }
}

# Hindi
server {
    server_name hi.yoursite.com;
    location / {
        proxy_pass http://localhost:3001;
    }
}

# Kannada
server {
    server_name kn.yoursite.com;
    location / {
        proxy_pass http://localhost:3002;
    }
}
```

### Option 3: Docker Deployment

Each instance can be containerized separately for scalable deployment.

## 🛠️ Development Workflow

### Adding a New Language

1. **Create language file**: `locales/[code].ts`
2. **Add to index**: Update `locales/index.ts`
3. **Create environment file**: `.env.[code]`
4. **Update package.json**: Add dev/build/start scripts
5. **Update language switcher**: Add to Header component
6. **Update domain mapping**: Modify `useTranslation` hook

### Testing

1. **Start all instances**: `npm run dev:all`
2. **Test each URL**: Verify all languages load correctly
3. **Test language switching**: Ensure cross-domain navigation works
4. **Test responsive design**: Check mobile/tablet layouts
5. **Test form submissions**: Verify functionality in all languages

## 🐛 Troubleshooting

### Common Issues

#### Port Already in Use
```bash
# Kill processes on all ports
lsof -ti:3000,3001,3002 | xargs kill -9

# Or individually
npx kill-port 3000
npx kill-port 3001
npx kill-port 3002
```

#### Environment Variables Not Loading
- Restart all Next.js instances after changing `.env` files
- Verify environment file names match exactly (`.env.te`, `.env.hi`, `.env.kn`)

#### Cross-Domain Switching Not Working
- Ensure all instances are running
- Check `LANGUAGE_DOMAINS` mapping in `hooks/useTranslation.ts`
- Verify ports match environment configuration

#### Font Rendering Issues
Install system fonts for better rendering:
- **Telugu**: Noto Sans Telugu
- **Hindi**: Noto Sans Devanagari
- **Kannada**: Noto Sans Kannada

#### Build Errors
```bash
# Clean and rebuild
rm -rf .next node_modules
npm install
npm run build:all
```

### Performance Optimization

1. **Development**: Run only needed instances to save system resources
2. **Production**: Use PM2 or similar process managers
3. **Caching**: Implement Redis/Memcached for better performance
4. **CDN**: Use CDN for static assets across all domains

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Add translations for all supported languages
4. Test on all instances
5. Commit changes: `git commit -m 'Add new feature'`
6. Push to branch: `git push origin feature/new-feature`
7. Submit a pull request

### Translation Guidelines

- Keep translations contextually accurate
- Maintain consistent terminology across pages
- Test font rendering for Indian languages
- Verify right-to-left text handling if needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Next.js team for excellent i18n support
- React Bootstrap for responsive components
- Font contributors for Indian language fonts
- Community translators for language support

## 📞 Support

If you encounter any issues:

1. Check the [troubleshooting section](#-troubleshooting)
2. Search existing [GitHub issues](../../issues)
3. Create a new issue with:
   - Operating system
   - Node.js version
   - Error messages
   - Steps to reproduce

## 🔗 Useful Links

- [Next.js i18n Documentation](https://nextjs.org/docs/advanced-features/i18n)
- [React Bootstrap Documentation](https://react-bootstrap.github.io/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

---

**Happy multilingual development! 🌍🚀**

Made with ❤️ for the multilingual web community.
