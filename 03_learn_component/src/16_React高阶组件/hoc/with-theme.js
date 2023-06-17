import themeContext from "../context/theme-context";

function withTheme(OriginComponent) {
  return (props) => {
    return (
      <themeContext.Consumer>
        {(value) => {
          return <OriginComponent {...props} {...value} />;
        }}
      </themeContext.Consumer>
    );
  };
}

export default withTheme;
