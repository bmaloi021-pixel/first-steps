import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Database, Lock, Zap } from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: <Database className="h-6 w-6 text-primary" />,
      title: 'Powerful Database',
      description: 'Built on PostgreSQL with real-time subscriptions and a built-in API.',
    },
    {
      icon: <Lock className="h-6 w-6 text-primary" />,
      title: 'Authentication',
      description: 'Add user sign-ups and logins with email, social providers, and more.',
    },
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: 'Blazing Fast',
      description: 'Edge functions and global CDN for lightning-fast performance.',
    },
  ];

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Build better websites faster with
                  <span className="text-primary"> Supabase</span>
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  The open source Firebase alternative with PostgreSQL. Start your project with a scalable backend, authentication, and real-time data.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/dashboard">Get Started</Link>
                </Button>
                <Button variant="outline" size="lg">
                  <Link href="#features">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="rounded-xl bg-muted p-8 shadow-lg">
                <div className="space-y-2">
                  <div className="h-2 w-24 rounded-full bg-primary/20"></div>
                  <div className="h-2 w-32 rounded-full bg-primary/10"></div>
                  <div className="h-2 w-28 rounded-full bg-primary/5"></div>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="h-2 w-full rounded-full bg-primary/5"></div>
                  <div className="h-2 w-5/6 rounded-full bg-primary/5"></div>
                  <div className="h-2 w-4/6 rounded-full bg-primary/5"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Everything you need to build better
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Supabase provides all the backend features you need without the hassle of managing infrastructure.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card key={index} className="h-full transition-all hover:shadow-md">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    {feature.icon}
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </div>
                  <CardDescription className="pt-2">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to get started?
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Join thousands of developers building with Supabase today.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/signup">Sign Up for Free</Link>
              </Button>
              <Button variant="outline" size="lg">
                <Link href="/docs">Read Documentation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

