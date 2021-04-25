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

/*
dog: 20
fish: hello
转化为：
{
  "dog":20,
  "fish":"hello"
}
*/
export function stringToObj(code: string) {
  const list = code.split("\n");
  const data = {} as any;
  list.forEach((item) => {
    const [key, ...values] = item.split(":").map((v) => v.trim());
    data[key] = values.join(":");
    if (data[key] === "false") {
      data[key] = false;
    } else if (data[key] === "true") {
      data[key] = true;
    }
  });
  return data;
}
