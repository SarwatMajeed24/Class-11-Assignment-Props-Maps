const FooterComponent = (props:any) => {
    return (
        <div className="text-center">
            <p className="text-sm md:text-lg lg:text-xl text-black font-medium mb-8">
                {props.message}
            </p>
        </div>
    );
};

export default FooterComponent;

