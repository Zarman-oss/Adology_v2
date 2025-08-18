import ModuleSectionClient from './ModuleSectionClient';
export default function ModuleSection() {
  return (
    <section className='section-container mt-24'>
      <h3 className='body-1--regular text-grey text-center'>Modules</h3>
      <h2 className='heading-1--semibold text-white text-center mt-6'>
        Get Days of Research in Minutes
      </h2>
      <p className='text-white heading-6 text-center mt-6'>
        Adology’s AI analyzes and labels your creative data instantly,
        uncovering insights that typically take weeks.
      </p>
      {/* cards */}
      <ModuleSectionClient />
    </section>
  );
}
