
import { useQuery } from '@tanstack/react-query';
import { supabase, Project, Skill, Certification } from '@/lib/supabase';

export function useProjects() {
  return useQuery({
    queryKey: ['projects'],
    queryFn: async (): Promise<Project[]> => {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data || [];
    },
  });
}

export function useSkills() {
  return useQuery({
    queryKey: ['skills'],
    queryFn: async (): Promise<Skill[]> => {
      const { data, error } = await supabase
        .from('skills')
        .select('*')
        .order('category');
      
      if (error) throw error;
      return data || [];
    },
  });
}

export function useCertifications() {
  return useQuery({
    queryKey: ['certifications'],
    queryFn: async (): Promise<Certification[]> => {
      const { data, error } = await supabase
        .from('certifications')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data || [];
    },
  });
}
