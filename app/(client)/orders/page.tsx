import { requiredUser } from '@/hooks/requiredUser';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import React from 'react';

const OrdersPage = async () => {
  await requiredUser();
  return <div>OrdersPage</div>;
};

export default OrdersPage;
