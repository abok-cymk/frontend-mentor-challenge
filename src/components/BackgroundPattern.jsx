const BackgroundPattern = () => {
  return (
    <>
     <div className="relative">
      <picture>
        <source media="(max-width: 450px)" srcSet="/static/images/background-pattern-mobile.svg" className="w-full shadow rounded-e-md"/>
        <img src="/static/images/background-pattern-desktop.svg" alt=""
      className="w-full" />
      </picture> 
    </div>
    </>
   
    
  );
};

export default BackgroundPattern;
