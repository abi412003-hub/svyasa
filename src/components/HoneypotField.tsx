/** Hidden from people; spam bots fill it in and their submissions are dropped. */
const HoneypotField = () => (
  <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
);

export default HoneypotField;
