interface CSSPropertiesWithVars extends React.CSSProperties {
  [key: string]: string | number | undefined;
}

export function getStyleProp(name: string, value: number | string): CSSPropertiesWithVars {
  return {
    [name]: value,
  };
}
