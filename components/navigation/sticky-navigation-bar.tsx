const StickyNavigationBar = ({ name }: { name: string }) => {
  return (
    <div className='sticky top-0 z-20 mb-4 w-full bg-slate-900/75 py-5 backdrop-blur lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'>
      <h2 className='text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only'>
        {name}
      </h2>
    </div>
  );
};

export default StickyNavigationBar;
