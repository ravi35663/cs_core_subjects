/*
=> Clean React Code Best Practices (with Bad vs Good):
1. Use meaningful component names
   ❌ Bad:  const Box = () => <div />;
   ✅ Good: const UserProfile = () => <div />;

2. Break down components
   ❌ Bad: One large component handling UI, logic, and API calls.
   ✅ Good: Separate components like UserList, UserItem, UserHeader.

3. Use destructuring
   ❌ Bad:  function Button(props) { return <button>{props.label}</button>; }
   ✅ Good: function Button({ label }) { return <button>{label}</button>; }

4. Keep components small
   ❌ Bad: A component handling form, validation, API, and UI together.
   ✅ Good: Split into Form, FormInput, FormActions.

5. Use prop-types
   ❌ Bad: No validation of props.
   ✅ Good: Button.propTypes = { label: PropTypes.string.isRequired };

6. Use functional components
   ❌ Bad: class Header extends React.Component { render() { return <h1 /> } }
   ✅ Good: const Header = () => <h1 />;

7. Avoid inline styles
   ❌ Bad:  <div style={{ color: "red", fontSize: "14px" }} />
   ✅ Good: <div className="errorText" />

8. Use arrow functions
   ❌ Bad: function handleClick() {}
   ✅ Good: const handleClick = () => {};

9. Prefer stateless components
   ❌ Bad: Component using state when it only displays data.
   ✅ Good: const Title = ({ text }) => <h1>{text}</h1>;

10. Use the spread operator
    ❌ Bad: state.user.name = "Ravi";
    ✅ Good: const newUser = { ...user, name: "Ravi" };
*/
