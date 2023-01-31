const SUPABASE_URL = 'https://ymvfilcivutxojmjfios.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InltdmZpbGNpdnV0eG9qbWpmaW9zIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ1MTg5OTEsImV4cCI6MTk5MDA5NDk5MX0.Rf8GvkCe-vF7Fxy6rR0pVu_QXX67mnTu95dC8XW5sdY';
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

/* Auth related functions */

export function getUser() {
    return client.auth.user();
}

export async function signUpUser(email, password) {
    return await client.auth.signUp({
        email,
        password,
    });
}

export async function signInUser(email, password) {
    return await client.auth.signIn({
        email,
        password,
    });
}

export async function signOutUser() {
    return await client.auth.signOut();
}

/* Data functions */
