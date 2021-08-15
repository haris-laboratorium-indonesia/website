import { useState, useEffect } from 'react';
import { supabase } from '@/components/SupabaseClient';
import Auth from '@/components/Auth';
import Account from '@/components/Account';
import MiniProjects from '@/components/MiniProjects';

export default function Supabase() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <MiniProjects title='Supabase'>
      <div className='' style={{ padding: '50px 0 100px 0' }}>
        {!session ? <Auth /> : <Account key={session.user.id} session={session} />}
      </div>
    </MiniProjects>
  );
}
