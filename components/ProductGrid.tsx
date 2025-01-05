'use client';
import Home from '@/app/(client)/page';
import React, { useEffect, useState } from 'react';
import HomeTabBar from './HomeTabBar';
import { productType } from '@/constants';
import { client } from '@/sanity/lib/client';
import { Product } from '@/sanity.types';
import ProductCard from './ProductCard';
import NoProductAvail from './NoProductAvail';
import { motion, AnimatePresence } from 'motion/react';
import { Loader2 } from 'lucide-react';

const ProductGrid = () => {
  const [selectedTab, setSelectedTab] = useState(productType[0]?.title || '');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const query = `*[_type == 'product' && variants == $variant] | order(name asc)`;
  const params = { variant: selectedTab.toLocaleLowerCase() };
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await client.fetch(query, params);
        console.log(await res);
        setProducts(await res);
      } catch (error) {
        console.log('Product fetching Error', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [selectedTab]);

  return (
    <div className="mt-10 flex flex-col items-center">
      <HomeTabBar selectedTab={selectedTab} onTabSelect={setSelectedTab} />
      {loading ? (
        <div className="flex flex-col items-center justify-center py-10 min-h-80 space-y-4 text-center bg-gray-100 rounded-lg w-full mt-10">
          <div className='flex items-center gap-2 text-blue-600'>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span className='text-lg font-semibold'>Product is loading...</span>
          </div>
        </div>
      ) : (
        <>
          {products?.length ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10  w-full">
              {products?.map((product: Product) => (
                <div key={product?._id}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          ) : (
            <NoProductAvail selectedTab={selectedTab} />
          )}
        </>
      )}
    </div>
  );
};

export default ProductGrid;
