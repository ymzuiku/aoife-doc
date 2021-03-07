function getName() {
  if (window.location.hash.length > 1) {
    const url = window.location.hash.replace("#/", "");
    return decodeURI(url);
  }
  const url = window.location.pathname.replace("/", "");
  return decodeURI(url);
}

export function getNum(data: any) {
  const name = getName();
  if (!name) {
    return 0;
  }
  let out = 0;
  data.forEach((item: any, i: number) => {
    if (item.name === name) {
      out = i;
    }
  });
  return out;
}
