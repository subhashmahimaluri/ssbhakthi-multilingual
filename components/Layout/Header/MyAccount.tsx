import { useTranslation } from '@/hooks/useTranslation';
import Link from 'next/link';
import { useState } from 'react';

export default function MyAccount() {
  const { t } = useTranslation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Login logic would go here
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Logout logic would go here
    setIsLoggedIn(false);
  };

  return (
    <div className="my-account">
      <ul className="account-menu gr-text-10 gr-text-color gr-hover-text-orange contact mb-1 mt-1 py-1">
        {!isLoggedIn ? (
          <>
            <li>
              <Link href="/login" onClick={handleLogin}>
                Login
              </Link>
            </li>
            <li>
              <Link href="/register">Register</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link href="/my-account">My Account</Link>
            </li>
            <li>
              <a href="#" onClick={handleLogout}>
                Logout
              </a>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}
