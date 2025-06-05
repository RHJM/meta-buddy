import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Bot, Wallet, Star, UserPlus, Sparkles } from 'lucide-react';

export default function MetaBuddyMockup() {
  return (
    <div className="min-h-screen bg-black text-white p-6 flex flex-col items-center justify-start space-y-8">
      <h1 className="text-4xl font-bold text-center mt-10">MetaBuddy: Your Lifelong AI Financial Companion</h1>

      <Card className="bg-gray-900 w-full max-w-3xl shadow-xl">
        <CardContent className="space-y-6 p-6">
          <div className="flex items-center space-x-4">
            <Bot size={36} />
            <h2 className="text-2xl font-semibold">Create Your MetaBuddy</h2>
          </div>
          <Input placeholder="Name your MetaBuddy (e.g., MetaBro)" className="bg-gray-800" />
          <Textarea placeholder="What should your MetaBuddy know about you to help you better?" className="bg-gray-800" />
          <Button className="w-full bg-blue-600 hover:bg-blue-500">Spawn MetaBuddy</Button>
        </CardContent>
      </Card>

      <Card className="bg-gray-900 w-full max-w-3xl shadow-xl">
        <CardContent className="space-y-6 p-6">
          <div className="flex items-center space-x-4">
            <Sparkles size={36} />
            <h2 className="text-2xl font-semibold">What Can MetaBuddy Do?</h2>
          </div>
          <ul className="list-disc list-inside text-lg space-y-2">
            <li>Answer any DeFi or crypto finance question</li>
            <li>Track your spending, staking, and rewards</li>
            <li>Execute trades or rebalance liquidity</li>
            <li>Send daily financial health reports</li>
            <li>Grow emotionally and visually with you over time</li>
            <li>Link to your MetaMask Card and Circle Wallet</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="bg-gray-900 w-full max-w-3xl shadow-xl">
        <CardContent className="space-y-6 p-6">
          <div className="flex items-center space-x-4">
            <Wallet size={36} />
            <h2 className="text-2xl font-semibold">Soulbound Identity</h2>
          </div>
          <p className="text-lg">
            Every MetaBuddy is minted as a Soulbound NFT. One per human. Forever yours. Breaking the cycle of financial ignorance, one bond at a time.
          </p>
          <Button className="w-full bg-purple-700 hover:bg-purple-600">Mint Soulbound NFT</Button>
        </CardContent>
      </Card>

      <Card className="bg-gray-900 w-full max-w-3xl shadow-xl">
        <CardContent className="space-y-6 p-6 text-center">
          <h2 className="text-2xl font-semibold flex justify-center items-center space-x-2">
            <UserPlus size={28} />
            <span>Join the Movement</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto">
            MetaBuddy isn't just a tool. It's a movement. A global network of young people taking back control of their financial future.
          </p>
          <Button className="mt-4 bg-green-600 hover:bg-green-500">Get Early Access</Button>
        </CardContent>
      </Card>
    </div>
  );
}