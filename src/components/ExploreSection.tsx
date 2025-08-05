import { Button } from '@/components/ui/button';

const ExploreSection = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-16 items-center">
          {/* Left Content - Before/After Card */}
          <div className="relative max-w-2xl">
            <div className="bg-gradient-to-br from-emplo-purple to-emplo-purple-light rounded-3xl p-12 shadow-2xl">
              <div className="grid grid-cols-2 gap-8">
                {/* Before */}
                <div className="relative">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src="/lovable-uploads/206a0543-1891-4b3d-bded-7321dd79ff26.png"
                      alt="Before - Traditional recruitment"
                      className="w-full h-56 object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-white text-emplo-dark px-6 py-3 rounded-full text-base font-medium shadow-lg">
                      Before
                    </span>
                  </div>
                </div>

                {/* After */}
                <div className="relative">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src="/lovable-uploads/206a0543-1891-4b3d-bded-7321dd79ff26.png"
                      alt="After - AI-powered recruitment"
                      className="w-full h-56 object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-white text-emplo-dark px-6 py-3 rounded-full text-base font-medium shadow-lg">
                      After
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-emplo-dark leading-tight font-inter">
              Explore the Future of Recruitment with Emplo AI
            </h2>

            <p className="text-lg text-emplo-gray leading-relaxed font-inter">
              Emplo AI transforms the way companies engage with talent, letting them streamline 
              their hiring process with unmatched efficiency. From resume parsing and candidate 
              screening to automated interviews and skill assessments, we support end-to-end 
              recruitment for HR teams, recruiters, and hiring managers.
            </p>

            <Button className="bg-black hover:bg-gray-800 text-white px-8 py-3 text-base font-medium rounded-full font-inter shadow-lg hover:shadow-xl transition-all duration-200">
              Book a demo
            </Button>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="mt-20 pt-16 border-t border-gray-200">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="space-y-2">
              <div className="text-5xl lg:text-6xl font-bold text-emplo-dark font-inter">50+</div>
              <div className="text-emplo-gray text-lg font-inter">Trusted Companies</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl lg:text-6xl font-bold text-emplo-dark font-inter">10K+</div>
              <div className="text-emplo-gray text-lg font-inter">Candidates Processed</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl lg:text-6xl font-bold text-emplo-dark font-inter">2K+</div>
              <div className="text-emplo-gray text-lg font-inter">HR professionals use Emplo daily</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;