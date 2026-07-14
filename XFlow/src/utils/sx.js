// Parses a literal CSS declaration string (e.g. "color:#FFF;font-size:14px")
// into a React style object, so inline styles copied verbatim from the
// design source don't need manual camelCase retyping.
export function sx(cssText) {
  const style = {};
  cssText
    .split(";")
    .map((rule) => rule.trim())
    .filter(Boolean)
    .forEach((rule) => {
      const i = rule.indexOf(":");
      if (i === -1) return;
      const prop = rule.slice(0, i).trim();
      const value = rule.slice(i + 1).trim();
      const camel = prop.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
      style[camel] = value;
    });
  return style;
}
