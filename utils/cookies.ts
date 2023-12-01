export function getCookie(cname: string): string {
  // Check if `document` is available (only run this code on the client side)
  if (typeof document !== "undefined") {
    const name = cname + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
  }
  return "";
}

export function setCookie(cname: string, cvalue: string, exdays: number): void {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  const expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

export function deleteCookie(name: string): void {
  if (getCookie(name)) {
    document.cookie =
      name + "=" + ";expires=Thu, 01 Jan 1970 00:00:01 GMT" + ";path=/";
  }
}

export function updateCookie(cname: string, newItem: string): void {
  const existingCookie = getCookie(cname) || "";
  const updatedCookieValue = existingCookie
    ? `${existingCookie},${newItem}`
    : newItem;

  // Set the updated cookie
  setCookie(cname, updatedCookieValue, 7); // Adjust expiration time as needed
}
