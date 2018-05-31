export function ab2str (buf) {
  return String.fromCharCode.apply(null, new Uint8Array(buf))
}

export function str2ab (str) {
  let buf = new ArrayBuffer(str.length)
  let bufView = new Uint8Array(buf)
  for (let i = 0, strLen = str.length; i < strLen; i++) {
    bufView[i] = str.charCodeAt(i)
  }
  return buf
}
