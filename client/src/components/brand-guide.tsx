// Brand Style Guide - Internal Reference Component
// This component serves as a living style guide for developers

import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";

export function BrandGuide() {
  return (
    <div className="p-8 space-y-12 bg-white">
      <div>
        <h1 className="text-3xl font-bold mb-8">Leadspoint Brand Guide</h1>
        
        {/* Logo Variants */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Logo Variants</h2>
          <div className="grid grid-cols-3 gap-8">
            <div className="p-4 bg-white border rounded">
              <Logo variant="color" size="lg" />
              <p className="text-sm mt-2">Color (Default)</p>
            </div>
            <div className="p-4 bg-gray-900 rounded">
              <Logo variant="light" size="lg" />
              <p className="text-sm mt-2 text-white">Light (Dark Backgrounds)</p>
            </div>
            <div className="p-4 bg-gray-100 rounded">
              <Logo variant="dark" size="lg" />
              <p className="text-sm mt-2">Dark (Light Backgrounds)</p>
            </div>
          </div>
        </section>

        {/* Color Palette */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Color Palette</h2>
          <div className="grid grid-cols-5 gap-4">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded mb-2"></div>
              <p className="text-sm font-medium">Primary Blue</p>
              <p className="text-xs text-gray-500">#3B82F6</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-400 rounded mb-2"></div>
              <p className="text-sm font-medium">Secondary Blue</p>
              <p className="text-xs text-gray-500">#60A5FA</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-green-500 rounded mb-2"></div>
              <p className="text-sm font-medium">Success Green</p>
              <p className="text-xs text-gray-500">#10B981</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-500 rounded mb-2"></div>
              <p className="text-sm font-medium">Warning Orange</p>
              <p className="text-xs text-gray-500">#F59E0B</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-red-500 rounded mb-2"></div>
              <p className="text-sm font-medium">Error Red</p>
              <p className="text-xs text-gray-500">#EF4444</p>
            </div>
          </div>
        </section>

        {/* Button Styles */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Button Styles</h2>
          <div className="space-x-4">
            <Button className="btn-primary">Primary Button</Button>
            <Button className="btn-secondary">Secondary Button</Button>
            <Button variant="ghost" className="focus-brand">Ghost Button</Button>
          </div>
        </section>

        {/* Typography */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Typography</h2>
          <div className="space-y-4">
            <h1 className="text-6xl font-bold">Heading 1</h1>
            <h2 className="text-4xl font-bold">Heading 2</h2>
            <h3 className="text-2xl font-semibold">Heading 3</h3>
            <p className="text-xl">Large body text for hero sections</p>
            <p className="text-base">Regular body text for content</p>
            <p className="text-sm text-gray-600">Small text for captions</p>
          </div>
        </section>
      </div>
    </div>
  );
}