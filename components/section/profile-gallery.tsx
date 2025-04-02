'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ExternalLink, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Profile type definition
type Profile = {
  id: string;
  name: string;
  role: string;
  department?: string;
  bio: string;
  image: string;
  email?: string;
  website?: string;
  category: 'instructor' | 'researcher' | 'scholar' | 'alumni';
};

// Sample profile data
const profiles: Profile[] = [
  {
    id: '1',
    name: 'Dr. Sarah Johnson',
    role: 'Professor of Computer Science',
    department: 'Computer Science Department',
    bio: 'Leading researcher in artificial intelligence with over 15 years of experience in machine learning and neural networks.',
    image: '/people/p1.jpg?height=400&width=300',
    email: 'sarah.johnson@example.edu',
    website: 'https://example.edu/sjohnson',
    category: 'instructor',
  },
  {
    id: '2',
    name: 'Prof. Michael Chen',
    role: 'Associate Professor',
    department: 'Physics Department',
    bio: 'Specializes in quantum mechanics and has published numerous papers on quantum computing applications.',
    image: '/people/p2.jpg?height=400&width=300',
    email: 'm.chen@example.edu',
    website: 'https://example.edu/mchen',
    category: 'instructor',
  },
  {
    id: '3',
    name: 'Dr. Emily Rodriguez',
    role: 'Research Scientist',
    department: 'Biotechnology Research Center',
    bio: 'Leading research on gene editing technologies with a focus on medical applications and ethical considerations.',
    image: '/people/p3.jpg?height=400&width=300',
    email: 'e.rodriguez@example.edu',
    website: 'https://example.edu/erodriguez',
    category: 'researcher',
  },
  {
    id: '4',
    name: 'Dr. James Wilson',
    role: 'Senior Researcher',
    department: 'Climate Science Institute',
    bio: 'Focuses on climate modeling and prediction systems to address global environmental challenges.',
    image: '/people/p1.jpg?height=400&width=300',
    email: 'j.wilson@example.edu',
    website: 'https://example.edu/jwilson',
    category: 'researcher',
  },
  {
    id: '5',
    name: 'Sophia Patel',
    role: 'Doctoral Scholar',
    department: 'Mathematics Department',
    bio: 'Working on advanced number theory with applications in cryptography and data security.',
    image: '/people/p1.jpg?height=400&width=300',
    email: 's.patel@example.edu',
    category: 'scholar',
  },
  {
    id: '6',
    name: 'Marcus Thompson',
    role: 'Visiting Scholar',
    department: 'Literature Department',
    bio: 'Researching comparative literature with a focus on post-colonial narratives in Southeast Asia.',
    image: '/people/p1.jpg?height=400&width=300',
    email: 'm.thompson@example.edu',
    category: 'scholar',
  },
  {
    id: '7',
    name: 'Dr. Lisa Zhang',
    role: 'Alumni (Class of 2015)',
    department: 'Now: Senior Data Scientist at TechCorp',
    bio: 'Graduated with honors in Computer Science. Currently leading data science initiatives at a Fortune 500 company.',
    image: '/people/p1.jpg?height=400&width=300',
    email: 'lisa.zhang@techcorp.com',
    website: 'https://linkedin.com/in/lisazhang',
    category: 'alumni',
  },
  {
    id: '8',
    name: 'Robert Okafor',
    role: 'Alumni (Class of 2018)',
    department: 'Now: Founder of EduTech Innovations',
    bio: 'Engineering graduate who founded a successful educational technology startup focused on accessibility.',
    image: '/people/p1.jpg?height=400&width=300',
    email: 'robert@edutechinnovations.com',
    website: 'https://edutechinnovations.com',
    category: 'alumni',
  },
];

export function ProfileGallery() {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter profiles based on search query and selected category
  const filterProfiles = (category: string, query: string) => {
    return profiles.filter(
      (profile) =>
        (category === 'all' || profile.category === category) &&
        (profile.name.toLowerCase().includes(query.toLowerCase()) ||
          profile.role.toLowerCase().includes(query.toLowerCase()) ||
          profile.bio.toLowerCase().includes(query.toLowerCase()))
    );
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight mb-4">
          Our Community
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Meet our distinguished instructors, researchers, scholars, and alumni
          who contribute to our academic excellence and innovation.
        </p>

        <div className="relative max-w-md mx-auto mt-6">
          <input
            type="text"
            placeholder="Search by name, role, or keywords..."
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <div className="flex justify-center mb-8">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="instructor">Instructors</TabsTrigger>
            <TabsTrigger value="researcher">Researchers</TabsTrigger>
            <TabsTrigger value="scholar">Scholars</TabsTrigger>
            <TabsTrigger value="alumni">Alumni</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="all" className="mt-0">
          <ProfileGrid profiles={filterProfiles('all', searchQuery)} />
        </TabsContent>

        <TabsContent value="instructor" className="mt-0">
          <ProfileGrid profiles={filterProfiles('instructor', searchQuery)} />
        </TabsContent>

        <TabsContent value="researcher" className="mt-0">
          <ProfileGrid profiles={filterProfiles('researcher', searchQuery)} />
        </TabsContent>

        <TabsContent value="scholar" className="mt-0">
          <ProfileGrid profiles={filterProfiles('scholar', searchQuery)} />
        </TabsContent>

        <TabsContent value="alumni" className="mt-0">
          <ProfileGrid profiles={filterProfiles('alumni', searchQuery)} />
        </TabsContent>
      </Tabs>
    </div>
  );
}

function ProfileGrid({ profiles }: { profiles: Profile[] }) {
  if (profiles.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">
          No profiles match your search criteria.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {profiles.map((profile) => (
        <ProfileCard key={profile.id} profile={profile} />
      ))}
    </div>
  );
}

function ProfileCard({ profile }: { profile: Profile }) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="aspect-[3/4] relative overflow-hidden mt-[-24px] ">
        <Image
          src={profile.image || '/people/p1.jpg'}
          alt={profile.name}
          fill
          className="object-cover  transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="p-4 ">
        <h3 className="font-semibold text-lg">{profile.name}</h3>
        <p className="text-sm text-primary">{profile.role}</p>
        {profile.department && (
          <p className="text-xs text-muted-foreground mt-1">
            {profile.department}
          </p>
        )}
        <p className="text-sm mt-3 line-clamp-3">{profile.bio}</p>
      </CardContent>
      <CardFooter className="flex justify-start gap-2 p-4 pt-0">
        {profile.email && (
          <Button variant="outline" size="sm" className="h-8 w-8 p-0" asChild>
            <a
              href={`mailto:${profile.email}`}
              aria-label={`Email ${profile.name}`}
            >
              <Mail className="h-4 w-4" />
            </a>
          </Button>
        )}
        {profile.website && (
          <Button variant="outline" size="sm" className="h-8 w-8 p-0" asChild>
            <a
              href={profile.website}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${profile.name}'s website`}
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        )}
        <Button variant="link" size="sm" className="ml-auto">
          View Profile
        </Button>
      </CardFooter>
    </Card>
  );
}
