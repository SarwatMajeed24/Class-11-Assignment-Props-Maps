const HeaderComponent = (props:any) => {
  return (
      <div className="text-center h-24">
          <h1 className="text-md md:text-4xl font-extrabold text-white">
              {props.title}
          </h1>
      </div>
  );
};

export default HeaderComponent;





