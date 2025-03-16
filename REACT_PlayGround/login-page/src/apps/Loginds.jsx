import React from 'react'

const Loginds = () => {
  return (
    <div class="login-container">
    <form class="login-form">
      <h2>Login</h2>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" />
      </div>
      <button type="submit" class="submit-button">Login</button>
    </form>
    <div class="links">
      <a href="/forgot-password">Forgot Password?</a>
      <a href="/signup">Sign Up</a>
    </div>
  </div>
  )
}

export default Loginds