import styled from "styled-components";

const StyledEmailSignup = styled.form`
  display: flex;
  justify-content: space-between;
  height: 4.4rem;
  border: 2px solid var(--main);
  border-radius: 0.6rem;
  overflow: hidden;
  background: var(--bg);
  margin-top: 1rem;
  width: 40rem;
`;

const Input = styled.input`
  height: 100%;
  font-size: 1.6rem;
  font-weight: 400;
  flex: 1;
  padding: 0 1.2rem;

  ::placeholder {
    color: var(--sub);
  }
`;

const Button = styled.button`
  background: var(--main);
  height: 100%;
  padding: 0 2.4rem;
  color: var(--bg);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  font-weight: 400;
  white-space: nowrap;
`;

const EmailSignup = () => {
  return (
    <StyledEmailSignup
      action="https://dev.us22.list-manage.com/subscribe/post?u=c3930d448587e7e360f27a301&amp;id=3733e2f021&amp;f_id=0083c8e1f0"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      target="_blank"
    >
      <Input name="EMAIL" type="email" placeholder="Enter your email" />
      <Button type="submit">Get early access</Button>
    </StyledEmailSignup>
  );
};

export default EmailSignup;
