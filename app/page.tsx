import LoginForm from './login/LoginForm';

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <main className="w-full max-w-md p-6">
        <h1 className="text-2xl font-semibold mb-4">Sign in</h1>
        <LoginForm />
      </main>
    </div>
  );
}
