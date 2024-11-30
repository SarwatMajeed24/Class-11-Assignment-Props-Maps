const FooterComponent = (props:any) => {
    return (
        <div className="text-center mt-8">
            <p className="text-lg text-black font-medium mb-8">
                {props.message}
            </p>
        </div>
    );
};

export default FooterComponent;

