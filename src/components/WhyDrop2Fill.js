import React from 'react';
import { ReactComponent as UserIcon } from '../assets/user.svg';
import { ReactComponent as LockIcon } from '../assets/lock.svg';
import { ReactComponent as ClockIcon } from '../assets/clock.svg';

const WhyDrop2Fill = () => {
  return (
    <section className="py-16">
      <h2 className="text-center text-3xl font-bold mb-8">Why Drop2Fill?</h2>
      <div className="flex justify-center space-x-8">
        <div className="text-center">
          <UserIcon className="mx-auto mb-4 w-12 h-12" />
          <h3 className="text-xl font-semibold">User-friendly Interface</h3>
          <p>Intuitive and supports dark mode.</p>
        </div>
        <div className="text-center">
          <LockIcon className="mx-auto mb-4 w-12 h-12" />
          <h3 className="text-xl font-semibold">Secure and Private</h3>
          <p>Your data stays on your device.</p>
        </div>
        <div className="text-center">
          <ClockIcon className="mx-auto mb-4 w-12 h-12" />
          <h3 className="text-xl font-semibold">Time-saving</h3>
          <p>Reduces repetitive tasks significantly.</p>
        </div>
      </div>
    </section>
  );
};

export default WhyDrop2Fill;
