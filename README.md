# Supabase Website

A modern website built with Next.js and Supabase.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- A Supabase account (sign up at [supabase.com](https://supabase.com))

### Setup Steps

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Create a Supabase project:**
   - Go to [https://app.supabase.com](https://app.supabase.com)
   - Click "New Project"
   - Fill in your project details
   - Wait for the project to be created

3. **Get your Supabase credentials:**
   - In your Supabase project dashboard, go to Settings → API
   - Copy your "Project URL" and "anon public" key

4. **Configure environment variables:**
   - Copy `.env.example` to `.env.local`
   - Replace the placeholder values with your actual Supabase credentials:
     ```
     NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
     NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
     ```

5. **Run the development server:**
   ```bash
   npm run dev
   ```

6. **Open your browser:**
   - Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
├── app/                 # Next.js App Router pages
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   ├── about/          # About page
│   └── globals.css     # Global styles
├── lib/
│   └── supabase.ts     # Supabase client configuration
├── .env.example        # Environment variables template
└── package.json        # Dependencies
```

## 🗄️ Using Supabase

### Example: Querying Data

```typescript
import { supabase } from '@/lib/supabase'

// In a server component
const { data, error } = await supabase
  .from('your_table')
  .select('*')
  .limit(10)

// In a client component (use useEffect)
useEffect(() => {
  const fetchData = async () => {
    const { data, error } = await supabase
      .from('your_table')
      .select('*')
    // Handle data or error
  }
  fetchData()
}, [])
```

### Example: Creating a Table

1. Go to your Supabase dashboard
2. Navigate to Table Editor
3. Click "New Table"
4. Add columns and set up your schema
5. Start querying from your Next.js app!

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Supabase JavaScript Client](https://supabase.com/docs/reference/javascript/introduction)

## 🎯 Next Steps

1. Create your database tables in Supabase
2. Set up authentication if needed
3. Build your features using Supabase's powerful APIs
4. Deploy to Vercel or your preferred hosting platform

Happy coding! 🎉

