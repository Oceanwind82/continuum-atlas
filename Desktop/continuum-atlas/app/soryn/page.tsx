import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Soryn Base - Continuum Atlas',
  description: 'The foundational control center of Continuum Atlas - Where navigation begins and purpose is defined.',
  keywords: 'Soryn Base, navigation, control center, atlas framework, prime chamber',
};

export default function SorynBasePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
      {/* Header */}
      <div className="container mx-auto px-6 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
            Soryn Base
          </h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
            The foundational control center of Continuum Atlas. Here, navigation begins and purpose is defined.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="space-y-16">
          {/* Section I: Why Soryn Exists */}
          <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-blue-300/20">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                I
              </div>
              <h2 className="text-3xl font-bold text-blue-300">Why Soryn Exists</h2>
            </div>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-blue-100 text-lg leading-relaxed mb-6">
                Soryn Base emerged from the recognition that every great journey requires a definitive starting point. 
                In the vast expanse of Continuum Atlas, Soryn serves as the primary anchor—a place where intention 
                crystallizes into direction.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-900/30 p-6 rounded-lg border border-blue-400/20">
                  <h3 className="text-xl font-semibold text-cyan-300 mb-3">Central Command</h3>
                  <p className="text-blue-200">
                    Every system needs a nerve center. Soryn Base functions as the operational headquarters 
                    where all navigation streams converge and diverge according to purpose.
                  </p>
                </div>
                <div className="bg-blue-900/30 p-6 rounded-lg border border-blue-400/20">
                  <h3 className="text-xl font-semibold text-cyan-300 mb-3">Foundation Layer</h3>
                  <p className="text-blue-200">
                    Before exploration comes orientation. Soryn establishes the foundational layer upon which 
                    all other Atlas systems are built and interconnected.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section II: Purpose of Prime Chamber */}
          <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-300/20">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                II
              </div>
              <h2 className="text-3xl font-bold text-cyan-300">Purpose of Prime Chamber</h2>
            </div>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-cyan-100 text-lg leading-relaxed mb-6">
                The Prime Chamber represents the core decision-making space within Soryn Base. It is here that 
                strategic pathways are evaluated, priorities are established, and the flow of information is 
                orchestrated across all Atlas domains.
              </p>
              
              <div className="bg-gradient-to-r from-cyan-900/40 to-blue-900/40 p-8 rounded-xl border border-cyan-300/30 mb-6">
                <h3 className="text-2xl font-bold text-cyan-200 mb-4">Core Functions</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-cyan-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-cyan-300">Strategic Routing</h4>
                      <p className="text-cyan-100">Determines optimal pathways through Atlas systems based on current objectives and available resources.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-cyan-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-cyan-300">Information Synthesis</h4>
                      <p className="text-cyan-100">Combines data streams from multiple Atlas sources to create comprehensive situational awareness.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-cyan-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-cyan-300">Priority Management</h4>
                      <p className="text-cyan-100">Establishes and maintains the hierarchy of objectives that guide all Atlas operations.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section III: Navigation Model */}
          <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-indigo-300/20">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                III
              </div>
              <h2 className="text-3xl font-bold text-indigo-300">Navigation Model</h2>
            </div>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-indigo-100 text-lg leading-relaxed mb-8">
                Soryn Base employs a dynamic navigation model that adapts to both immediate needs and long-term 
                strategic objectives. This model ensures efficient movement through Atlas systems while maintaining 
                coherent purpose and direction.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-indigo-900/30 p-6 rounded-lg border border-indigo-400/20 text-center">
                  <div className="w-12 h-12 bg-indigo-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <h3 className="text-lg font-semibold text-indigo-300 mb-2">Assessment</h3>
                  <p className="text-indigo-200">Evaluate current position and available pathways within Atlas framework.</p>
                </div>
                <div className="bg-indigo-900/30 p-6 rounded-lg border border-indigo-400/20 text-center">
                  <div className="w-12 h-12 bg-indigo-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <h3 className="text-lg font-semibold text-indigo-300 mb-2">Selection</h3>
                  <p className="text-indigo-200">Choose optimal route based on strategic priorities and resource availability.</p>
                </div>
                <div className="bg-indigo-900/30 p-6 rounded-lg border border-indigo-400/20 text-center">
                  <div className="w-12 h-12 bg-indigo-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <h3 className="text-lg font-semibold text-indigo-300 mb-2">Execution</h3>
                  <p className="text-indigo-200">Implement chosen pathway while maintaining awareness of changing conditions.</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-indigo-900/40 to-purple-900/40 p-6 rounded-xl border border-indigo-300/30">
                <h3 className="text-xl font-bold text-indigo-200 mb-3">Adaptive Principles</h3>
                <p className="text-indigo-100">
                  The navigation model continuously evolves based on feedback from Atlas operations, ensuring that 
                  pathways remain relevant and efficient as conditions change. This adaptive capability allows 
                  Soryn Base to maintain effectiveness across diverse scenarios and time horizons.
                </p>
              </div>
            </div>
          </section>

          {/* Section IV: Philosophy of Atlas */}
          <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-300/20">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                IV
              </div>
              <h2 className="text-3xl font-bold text-purple-300">Philosophy of Atlas</h2>
            </div>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-purple-100 text-lg leading-relaxed mb-8">
                The Atlas philosophy represents a fundamental approach to information architecture and navigation 
                that transcends traditional hierarchical models. It embraces interconnectedness while maintaining 
                clarity of purpose and direction.
              </p>

              <div className="space-y-6">
                <div className="bg-purple-900/30 p-6 rounded-lg border border-purple-400/20">
                  <h3 className="text-xl font-semibold text-purple-300 mb-3">Interconnected Unity</h3>
                  <p className="text-purple-100 mb-3">
                    Every component within Atlas exists in relationship to every other component, creating a web of 
                    connections that enhance understanding and accessibility.
                  </p>
                  <div className="text-purple-200 italic">
                    "No knowledge exists in isolation; understanding emerges from the recognition of patterns 
                    and relationships across seemingly disparate domains."
                  </div>
                </div>

                <div className="bg-purple-900/30 p-6 rounded-lg border border-purple-400/20">
                  <h3 className="text-xl font-semibold text-purple-300 mb-3">Dynamic Coherence</h3>
                  <p className="text-purple-100 mb-3">
                    Atlas maintains structural integrity while allowing for continuous evolution and adaptation 
                    to new information and changing requirements.
                  </p>
                  <div className="text-purple-200 italic">
                    "Stability and change are not opposing forces but complementary aspects of a living system 
                    that grows stronger through adaptive response."
                  </div>
                </div>

                <div className="bg-purple-900/30 p-6 rounded-lg border border-purple-400/20">
                  <h3 className="text-xl font-semibold text-purple-300 mb-3">Purposeful Navigation</h3>
                  <p className="text-purple-100 mb-3">
                    Every movement through Atlas is guided by clear intention while remaining open to unexpected 
                    discoveries and emergent insights.
                  </p>
                  <div className="text-purple-200 italic">
                    "Direction without rigidity, purpose without limitation—this is the path of meaningful 
                    exploration and sustainable growth."
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section V: Living Directive */}
          <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-emerald-300/20">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                V
              </div>
              <h2 className="text-3xl font-bold text-emerald-300">Living Directive</h2>
            </div>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-emerald-100 text-lg leading-relaxed mb-8">
                The Living Directive represents the dynamic guidance system that governs Atlas operations. 
                Unlike static rules or fixed protocols, it evolves continuously based on accumulated wisdom 
                and emerging understanding.
              </p>

              <div className="bg-gradient-to-br from-emerald-900/40 to-teal-900/40 p-8 rounded-xl border border-emerald-300/30 mb-8">
                <h3 className="text-2xl font-bold text-emerald-200 mb-6 text-center">Core Directives</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-emerald-300">Preserve Integrity</h4>
                        <p className="text-emerald-100 text-sm">Maintain coherence and reliability across all Atlas systems and operations.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-emerald-300">Enhance Accessibility</h4>
                        <p className="text-emerald-100 text-sm">Ensure that all Atlas resources remain available and navigable to authorized users.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-emerald-300">Foster Growth</h4>
                        <p className="text-emerald-100 text-sm">Support continuous expansion and refinement of Atlas capabilities and knowledge.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-emerald-300">Enable Discovery</h4>
                        <p className="text-emerald-100 text-sm">Create conditions that facilitate unexpected connections and emergent insights.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-emerald-300">Adapt Responsively</h4>
                        <p className="text-emerald-100 text-sm">Evolve Atlas systems in response to changing needs and emerging opportunities.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-emerald-300">Maintain Purpose</h4>
                        <p className="text-emerald-100 text-sm">Ensure that all evolution serves the fundamental mission of Atlas as a navigation and knowledge system.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-900/30 p-6 rounded-lg border border-emerald-400/20">
                <h3 className="text-xl font-semibold text-emerald-300 mb-4 text-center">Implementation Protocol</h3>
                <p className="text-emerald-100 text-center leading-relaxed">
                  The Living Directive operates through continuous monitoring, adaptive response, and iterative 
                  refinement. It serves as both compass and catalyst, providing direction while enabling the 
                  emergence of new possibilities within the Atlas framework.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Footer Navigation */}
        <div className="mt-16 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <p className="text-blue-200 text-lg mb-4">
              From Soryn Base, all Atlas pathways are accessible. Choose your direction.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/" className="px-6 py-2 bg-blue-600/20 border border-blue-400/30 rounded-lg hover:bg-blue-600/30 transition-colors text-blue-300 hover:text-blue-200">
                Atlas Home
              </a>
              <a href="/constitution" className="px-6 py-2 bg-purple-600/20 border border-purple-400/30 rounded-lg hover:bg-purple-600/30 transition-colors text-purple-300 hover:text-purple-200">
                Constitution
              </a>
              <a href="/systems" className="px-6 py-2 bg-indigo-600/20 border border-indigo-400/30 rounded-lg hover:bg-indigo-600/30 transition-colors text-indigo-300 hover:text-indigo-200">
                Systems
              </a>
              <a href="/stories" className="px-6 py-2 bg-emerald-600/20 border border-emerald-400/30 rounded-lg hover:bg-emerald-600/30 transition-colors text-emerald-300 hover:text-emerald-200">
                Stories
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
