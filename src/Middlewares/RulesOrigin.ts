type StaticOrigin = boolean | string | RegExp | (boolean | string | RegExp)[];
type TypeCallback = (err: Error | null, origin?: StaticOrigin) => void;

const domainsPermissions = [process.env.ORIGIN_URL];

function origin(origin: string | undefined, callback: TypeCallback) {
  console.log(origin);
  if (domainsPermissions.indexOf(origin || '') !== -1) {
    callback(null, true);
  } else {
    callback(new Error('Domain not allowed'));
  }
}

export default origin;
